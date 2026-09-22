import { CreativePrompt, MasterCategory, VisualReferenceType } from '../../types/prompt';
import { getSvgDiagramForCategory } from './svgDiagrams';

export interface PromptDescriptor {
  id: string;
  prompt: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type?: VisualReferenceType;
  svgKey?: string;
  altText: string;
  refExplanation?: string;
  examples: [string, string][]; // [label, description]
  whatToNotice: string[];
  optionalChallenge?: string;
  tags: string[];
  themes?: string[];
  paths?: string[];
  modes?: string[];
  beginnerFriendly?: boolean;
  requiresPreviousDrawing?: boolean;
}

export function createPrompt(category: MasterCategory, d: PromptDescriptor): CreativePrompt {
  const visualRefType: VisualReferenceType = d.type || (
    category.includes('Lines') ? 'line' :
    category.includes('Shapes') ? 'shape' :
    category.includes('Poses') || category.includes('Arms') ? 'pose' :
    category.includes('Expressions') ? 'expression' :
    category.includes('Animal') ? 'animal' :
    category.includes('Environment') ? 'environment' :
    category.includes('Perspective') ? 'diagram' :
    category.includes('Composition') ? 'composition' :
    category.includes('Color') ? 'color' :
    category.includes('Head') ? 'character' :
    'concept'
  );

  const svg = getSvgDiagramForCategory(category, d.svgKey);
  const refPathCategory = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    id: d.id,
    prompt: d.prompt,
    explanation: d.explanation,
    category,
    difficulty: d.difficulty,
    beginnerFriendly: d.beginnerFriendly !== undefined ? d.beginnerFriendly : (d.difficulty === 'easy'),
    requiresPreviousDrawing: d.requiresPreviousDrawing || false,
    tags: d.tags,
    themes: d.themes || ['Everyday Life', 'Nature'],
    skills: d.tags.slice(0, 3),
    creativePaths: d.paths || ['Sketch Artist', 'Visual Observer'],
    modes: d.modes || ['What Comes Next?', 'Warm Up', 'I Don\'t Know What to Draw'],
    whatToNotice: d.whatToNotice,
    optionalChallenge: d.optionalChallenge,
    examples: d.examples.map(([label, description], i) => ({
      id: `${d.id}-ex-${i + 1}`,
      label,
      description,
      visualUrl: `/references/${refPathCategory}/${d.id}-ex-${i + 1}.png`,
    })),
    visualReference: {
      id: `ref-${d.id}`,
      type: visualRefType,
      imageUrl: `/references/${refPathCategory}/${d.id}.png`,
      altText: d.altText,
      explanation: d.refExplanation || d.explanation,
      whatToNotice: d.whatToNotice,
      beginnerFriendly: d.beginnerFriendly !== undefined ? d.beginnerFriendly : (d.difficulty === 'easy'),
      svgContent: svg,
      title: d.prompt,
    },
  };
}
