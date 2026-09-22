export type VisualReferenceType =
  | 'line-art'
  | 'gesture'
  | 'shape'
  | 'step-by-step'
  | 'photo'
  | 'multiple'
  | 'silhouette'
  | 'composition'
  | 'environment'
  | 'object';

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
}
