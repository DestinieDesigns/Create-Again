import { AdventureType, CreativePathwayId, PromptCategory } from './prompt';

export interface PromptHistoryItem {
  promptId: string;
  category: PromptCategory;
  text: string;
  shownAt: number;
  completedAt?: number;
}

export type ReflectionFeeling =
  | "hard-to-start"
  | "okay"
  | "fun"
  | "really-fun"
  | "surprised-myself"
  | string;

export interface Mode1Session {
  id: string;
  sessionSeed: string;
  startedAt: number;
  completedAt?: number;
  timerDuration: number | null; // seconds (120, 300, 600, 1200, or null for no timer)
  timerStartedAt?: number;
  timerExtraSeconds?: number;
  difficulty: AdventureType;
  pathway?: CreativePathwayId;
  currentPromptId?: string;
  usedPromptIds: string[];
  promptHistory: PromptHistoryItem[];
  completed: boolean;
  stuckUsed: number;
  reflection?: ReflectionFeeling;
  artworkTitle?: string;
  artworkPhotoUrl?: string;
}

export interface CreativeStats {
  thingsCreated: number;
  mysteryDrawings: number;
  warmupsCompleted: number;
  challengesCompleted: number;
  creativeSessions: number;
  daysCreating: number;
  lastActiveDate?: string;
}

export interface SavedCreation {
  id: string;
  sessionId?: string;
  title: string;
  mode: string;
  date: string;
  timestamp: number;
  completedAt?: number;
  photoUrl?: string;
  photoDataUrl?: string;
  promptCount: number;
  difficulty?: string;
  pathway?: CreativePathwayId;
  durationMinutes?: number;
  reflection?: ReflectionFeeling;
  promptsUsed?: string[];
  promptsCompleted?: PromptHistoryItem[];
}

export interface UserSettings {
  enableFaithContent: boolean;
  hapticFeedback: boolean;
  ambientSound: boolean;
}
