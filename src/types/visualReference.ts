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
  | 'transformation'
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
  id?: string;
  type: VisualReferenceType;
  altText: string;
  imageUrl?: string;
  filePath?: string;
  explanation?: string;
  whatToNotice?: string[] | string;
  beginnerFriendly?: boolean;

  // Optional backward-compatible & vector diagram fields
  title?: string;
  description?: string;
  svgContent?: string;
  promptForGeneration?: string;
  source?: 'local' | 'generated' | 'external';
  attribution?: string;
  contextHint?: string;
  tags?: string[];
  relatedPromptId?: string;
  level?: ReferenceLevel;
  examples?: (string | PromptExample | [string, string])[];
  moreExamples?: (string | PromptExample | [string, string])[];
  challenge?: string;
  beginnerTerms?: BeginnerTerm[];
}



