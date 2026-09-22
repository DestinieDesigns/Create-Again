export type PromptCategory =
  | "START"
  | "CONNECT"
  | "TRANSFORM"
  | "ADD"
  | "INTERACT"
  | "STORY"
  | "CHAOS"
  | "DETAIL"
  | "CHANGE"
  | "FINISH";

export type PromptDifficulty = "easy" | "medium" | "hard";

export type AdventureType =
  | "tiny-mystery"
  | "short-adventure"
  | "full-adventure"
  | "deep-dive"
  | "chaos";

export type SessionPhase =
  | "opening"
  | "building"
  | "developing"
  | "wild"
  | "closing";

export type CreativePathwayId =
  | "open"
  | "character-creator"
  | "graphic-design"
  | "nature-study"
  | "animation"
  | "world-builder";

import type { VisualReferenceType, VisualReference, BeginnerTerm } from './visualReference';
export type { VisualReferenceType, VisualReference, BeginnerTerm };

export interface CreativePrompt {
  id: string;
  prompt: string;
  explanation: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";

  visualReference: {
    type: string;
    imageUrl?: string;
    svgContent?: string;
    altText: string;
    examples: string[];
    whatToNotice: string;
    challenge?: string;
    title?: string;
    description?: string;
    beginnerTerms?: BeginnerTerm[];
  };

  tags: string[];
  themeIds?: string[];
  skillIds?: string[];
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
  examples?: string[];
  whatToNotice?: string;
  challenge?: string;
  beginnerTerms?: BeginnerTerm[];
  themeIds?: string[];
  themeTags?: string[];
  skillIds?: string[];
}

