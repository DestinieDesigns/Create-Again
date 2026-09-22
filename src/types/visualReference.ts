export type VisualReferenceType =
  | 'concept'
  | 'construction'
  | 'comparison'
  | 'variation'
  | 'step-by-step'
  | 'diagram'
  | 'pose'
  | 'expression'
  | 'shape'
  | 'line'
  | 'animal'
  | 'character'
  | 'environment'
  | 'composition'
  | 'color'
  | 'object'
  | 'photo-reference'
  | 'line-art'
  | 'gesture'
  | 'silhouette'
  | 'photo'
  | 'multiple';

export interface BeginnerTerm {
  term: string;
  definition: string;
}

export interface PromptExample {
  id: string;
  label: string;
  description: string;
  visualUrl?: string;
}

export type ReferenceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface VisualReference {
  id: string;
  type: VisualReferenceType;
  title?: string;
  description?: string;
  imageUrl?: string;
  svgContent?: string;
  altText: string;
  promptForGeneration?: string;
  source?: 'local' | 'generated' | 'external';
  attribution?: string;
  beginnerFriendly?: boolean;
  contextHint?: string;
  tags?: string[];
  relatedPromptId?: string;

  // Master Prompt Sheet & Expanded Library fields
  level?: ReferenceLevel;
  explanation?: string;
  whatToNotice?: string | string[];
  examples?: (string | PromptExample)[];
  moreExamples?: (string | PromptExample)[];
  challenge?: string;
  beginnerTerms?: BeginnerTerm[];

}


