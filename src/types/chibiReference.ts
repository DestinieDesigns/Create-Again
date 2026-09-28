export type ChibiPartCategory =
  | 'head'
  | 'head-angle'
  | 'ear'
  | 'eye'
  | 'eyebrow'
  | 'nose'
  | 'mouth'
  | 'hair'
  | 'body'
  | 'arm'
  | 'hand'
  | 'leg'
  | 'foot'
  | 'tail'
  | 'wing'
  | 'horn'
  | 'antler'
  | 'scale'
  | 'marking'
  | 'accessory'
  | 'clothing'
  | 'animal-feature'
  | 'fantasy-feature'
  | 'creature-feature'
  | 'robot'
  | 'special-feature';

export interface ChibiPartReference {
  id: string;
  category: ChibiPartCategory;
  name: string;
  imageUrl: string;
  filename?: string;
  status?: 'available' | 'missing' | 'optional' | 'placeholder';
  tier?: 'core' | 'expanded' | 'future';
  priority?: 'critical' | 'high' | 'medium' | 'low';
  required?: boolean;
  altText: string;
  description: string;
  drawingCue?: string;
  tags: string[];
  compatibleTypes?: string[];
  compatibleThemes?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  // Inline SVG markup or path data for instant vector rendering
  svgContent?: string;
  subCategory?: string;
}

export interface ChibiReferenceFilterOptions {
  category?: ChibiPartCategory;
  categories?: ChibiPartCategory[];
  characterType?: string;
  theme?: string;
  search?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  limit?: number;
  offset?: number;
}

export type ChibiStageReferenceMap = Record<string, ChibiPartCategory[]>;
