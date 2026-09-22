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

export interface Prompt {
  id: string;
  category: PromptCategory;
  text: string;
  subtext?: string;
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
}
