import { Prompt, VisualReference } from '../types/prompt';
import {
  VISUAL_REFERENCES,
  getVisualReferenceById,
  findVisualReferenceForPrompt,
} from '../data/visualReferences';

// In-memory client cache for dynamically generated references
const clientReferenceCache = new Map<string, VisualReference>();

/**
 * Resolves a visual reference for a prompt.
 * 1. Checks explicit prompt.visualReference
 * 2. Checks prompt.visualReferenceId
 * 3. Checks heuristic matching from static curated library
 * 4. Checks client-side dynamic cache
 */
export const getVisualReferenceForPrompt = (prompt: Prompt): VisualReference => {
  let ref: VisualReference | undefined = undefined;

  if (prompt.visualReference) {
    ref = prompt.visualReference;
  } else if (prompt.visualReferenceId) {
    ref = getVisualReferenceById(prompt.visualReferenceId);
  } else if (clientReferenceCache.has(prompt.id)) {
    ref = clientReferenceCache.get(prompt.id);
  }

  if (!ref) {
    ref = findVisualReferenceForPrompt(prompt.text, prompt.tags, prompt.category);
  }

  // Guaranteed fallback so NO prompt exists without a visual reference
  if (!ref) {
    ref = VISUAL_REFERENCES['ref-01-marks'] || VISUAL_REFERENCES['ref-sketching-foundations'];
  }

  // If prompt has enriched master sheet properties, enhance the reference
  return {
    ...ref,
    title: ref.title || prompt.text,
    description: ref.description || prompt.explanation || prompt.subtext,
    explanation: prompt.explanation || ref.explanation || prompt.subtext,
    examples: prompt.examples && prompt.examples.length > 0 ? prompt.examples : ref.examples,
    whatToNotice: prompt.whatToNotice || ref.whatToNotice,
    challenge: prompt.challenge || ref.challenge,
    beginnerTerms: prompt.beginnerTerms || ref.beginnerTerms,
  };
};


/**
 * Securely requests an AI-assisted instructional reference diagram via the server-side API.
 * Never touches Gemini directly on client, handles missing keys or offline status gracefully.
 */
export const fetchAiGeneratedReference = async (
  prompt: Prompt
): Promise<VisualReference | null> => {
  try {
    const response = await fetch('/api/generate-reference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        promptId: prompt.id,
        promptText: prompt.text,
        category: prompt.category,
        tags: prompt.tags,
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (data && data.reference) {
      clientReferenceCache.set(prompt.id, data.reference);
      return data.reference as VisualReference;
    }
    return null;
  } catch {
    // Fails silently to protect user flow
    return null;
  }
};
