export type MasterCategory =
  | 'Marks & Lines'
  | 'Shapes & Forms'
  | 'Line Transformations'
  | 'Observation'
  | 'Character Heads'
  | 'Facial Features'
  | 'Expressions'
  | 'Hair & Ears'
  | 'Bodies & Proportions'
  | 'Arms, Legs, Hands & Feet'
  | 'Poses & Movement'
  | 'Clothing & Accessories'
  | 'Animals'
  | 'Creatures & Creature Mixing'
  | 'Environments'
  | 'Perspective & Depth'
  | 'Composition'
  | 'Texture, Light & Shadow'
  | 'Color'
  | 'Storytelling'
  | 'Creative Transformation'
  | 'Graphic Design'
  | 'Typography & Layout'
  | 'Environmental Graphics';

export type SessionCategory =
  | 'START'
  | 'CONNECT'
  | 'TRANSFORM'
  | 'ADD'
  | 'INTERACT'
  | 'STORY'
  | 'CHAOS'
  | 'DETAIL'
  | 'CHANGE'
  | 'FINISH';

export type PromptCategory = MasterCategory | SessionCategory | string;

export type PromptDifficulty = 'easy' | 'medium' | 'hard';

export type AdventureType =
  | 'tiny-mystery'
  | 'short-adventure'
  | 'full-adventure'
  | 'deep-dive'
  | 'chaos';

export type SessionPhase =
  | 'opening'
  | 'building'
  | 'developing'
  | 'wild'
  | 'closing';

export type CreativePathwayId =
  | 'open'
  | 'character-creator'
  | 'graphic-design'
  | 'nature-study'
  | 'animation'
  | 'world-builder';

import type { VisualReferenceType, VisualReference, BeginnerTerm, PromptExample, ReferenceLevel } from './visualReference';
export type { VisualReferenceType, VisualReference, BeginnerTerm, PromptExample, ReferenceLevel };

export interface CreativePrompt {
  id: string;
  prompt: string;
  explanation: string;
  category: PromptCategory;
  difficulty: 'easy' | 'medium' | 'hard';
  visualReference: VisualReference;
  examples?: (string | [string, string] | PromptExample)[];
  whatToNotice?: string[] | string;
  optionalChallenge?: string;
  themes?: string[];
  skills?: string[];
  creativePaths?: string[];
  modes?: string[];
  tags: string[];
  beginnerFriendly?: boolean;
  requiresPreviousDrawing?: boolean;

  // Additional optional backward-compatible fields
  themeIds?: string[];
  skillIds?: string[];
  challenge?: string;
  moreExamples?: PromptExample[];
  level?: ReferenceLevel;
  beginnerTerms?: BeginnerTerm[];
}



export interface CharacterSkill {
  id: string;
  skillNumber: string;
  title: string;
  subtitle: string;
  category: "anatomy" | "expression" | "body" | "costume" | "action" | "composition";
  writtenExercise: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  prerequisites?: string[];
  relatedSkills?: string[];
  visualReference?: VisualReference;
  warmUp?: string;
  challenge?: string;
}

export interface CreativePathway {
  id: CreativePathwayId;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  badgeColor: string;
  relevantTags: string[];
  accentColor: string;
}

export interface Prompt {
  id: string;
  category: PromptCategory;
  text: string;
  subtext?: string;
  explanation?: string;
  difficulty: PromptDifficulty;
  level?: ReferenceLevel;
  tags: string[];
  weight: number;
  requiresPreviousDrawing: boolean;
  goodForBeginning: boolean;
  goodForMiddle: boolean;
  goodForEnding: boolean;
  avoidAfterCategories?: PromptCategory[];
  preferAfterCategories?: PromptCategory[];
  minSessionMinute?: number;
  maxSessionMinute?: number;
  visualReference?: VisualReference;
  visualReferenceId?: string;
  examples?: (string | PromptExample | [string, string])[];
  moreExamples?: (string | PromptExample | [string, string])[];
  whatToNotice?: string | string[];
  challenge?: string;
  beginnerTerms?: BeginnerTerm[];
  themeIds?: string[];
  themeTags?: string[];
  skillIds?: string[];
}


