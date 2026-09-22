import { CreativePrompt } from '../types/prompt';
import { VisualReference, BeginnerTerm } from '../types/visualReference';
import { MASTER_PROMPTS_PART_1 } from './masterPromptsPart1';
import { MASTER_PROMPTS_PART_2 } from './masterPromptsPart2';
import { MASTER_PROMPTS_PART_3 } from './masterPromptsPart3';
import { MASTER_PROMPTS_PART_4 } from './masterPromptsPart4';
import { EXPANDED_LIBRARY_PROMPTS } from './expandedLibrary';
import { ALL_500_PROMPTS } from './prompts500';

// Complete Master Prompt list with 500-Item Master Library + foundational + expanded libraries
export const MASTER_CREATIVE_PROMPTS: CreativePrompt[] = [
  ...ALL_500_PROMPTS,
  ...MASTER_PROMPTS_PART_1,
  ...MASTER_PROMPTS_PART_2,
  ...MASTER_PROMPTS_PART_3,
  ...MASTER_PROMPTS_PART_4,
  ...EXPANDED_LIBRARY_PROMPTS,
];

// Map of VisualReferences keyed by prompt id or ref-id
export const MASTER_VISUAL_REFERENCES: Record<string, VisualReference> = {};

MASTER_CREATIVE_PROMPTS.forEach((cp) => {
  const cleanId = cp.id.replace('master-', '').replace('exp-', '');
  const refId = `ref-${cleanId}`;
  const visualRef: VisualReference = {
    id: cp.visualReference.id || refId,
    type: (cp.visualReference.type as any) || 'line-art',
    title: cp.visualReference.title || cp.prompt,
    description: cp.explanation,
    svgContent: cp.visualReference.svgContent,
    altText: cp.visualReference.altText,
    level: cp.level || cp.visualReference.level || (cp.difficulty === 'hard' ? 'advanced' : cp.difficulty === 'medium' ? 'intermediate' : 'beginner'),
    examples: cp.visualReference.examples || cp.examples,
    moreExamples: cp.visualReference.moreExamples || cp.moreExamples,
    whatToNotice: cp.visualReference.whatToNotice || cp.whatToNotice,
    challenge: cp.visualReference.challenge || cp.challenge,
    beginnerTerms: cp.visualReference.beginnerTerms || cp.beginnerTerms,
    beginnerFriendly: cp.visualReference.beginnerFriendly ?? true,
    tags: cp.tags,
    relatedPromptId: cp.id,
  };

  MASTER_VISUAL_REFERENCES[refId] = visualRef;
  MASTER_VISUAL_REFERENCES[cp.id] = visualRef;
  if (cp.visualReference.id) {
    MASTER_VISUAL_REFERENCES[cp.visualReference.id] = visualRef;
  }
});


// Section 33: Beginner Language Glossary
export const BEGINNER_ART_GLOSSARY: BeginnerTerm[] = [
  {
    term: 'Silhouette',
    definition: 'The solid outside shape of something, like a shadow puppet on a wall.',
  },
  {
    term: 'Gesture',
    definition: 'A quick, loose drawing that captures the flow and attitude of a pose.',
  },
  {
    term: 'Negative Space',
    definition: 'The empty air around and inside an object, like the hole in a doughnut.',
  },
  {
    term: 'Perspective',
    definition: 'The art technique that makes flat paper drawings look like deep real space.',
  },
  {
    term: 'Composition',
    definition: 'How and where you arrange all the parts of your drawing on the paper.',
  },
  {
    term: 'Line of Action',
    definition: 'A single imaginary curved stroke defining the main direction and force of a pose.',
  },
  {
    term: 'Center Line',
    definition: 'A guide curve dividing the left and right halves of a face or torso.',
  },
  {
    term: 'Eye Line',
    definition: 'The horizontal guide line showing where both eyes rest on a head.',
  },
  {
    term: 'Primitive',
    definition: 'A fundamental 2D or 3D shape (circle, sphere, box, cylinder, wedge) used to construct complex objects.',
  },
  {
    term: 'Overlapping',
    definition: 'Placing one shape in front of another to immediately establish depth.',
  },
];

// Section 31: "What Comes Next?" Pathways
export interface CreativeNextStep {
  id: string;
  title: string;
  instruction: string;
  accent: string;
}

export const WHAT_COMES_NEXT_STEPS: CreativeNextStep[] = [
  {
    id: 'next-character',
    title: 'Character Expansion',
    instruction: 'Give your character a friend, rival, or companion creature.',
    accent: '#E06D53',
  },
  {
    id: 'next-world',
    title: 'World Building',
    instruction: 'Draw the room, vehicle, or landscape they are standing in.',
    accent: '#2D7F6E',
  },
  {
    id: 'next-action',
    title: 'What Happens Next?',
    instruction: 'Draw the immediate next frame or reaction to what is happening.',
    accent: '#D97706',
  },
  {
    id: 'next-contrast',
    title: 'Scale Shift',
    instruction: 'Draw the same subject from extreme close-up or far away in the clouds.',
    accent: '#4F46E5',
  },
];
