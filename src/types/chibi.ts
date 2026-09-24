export type ChibiCharacterType =
  | 'human'
  | 'animal-like'
  | 'fantasy'
  | 'monster'
  | 'robot'
  | 'creature'
  | 'object-character'
  | 'magical-character'
  | 'custom';

export type ChibiTheme =
  | 'everyday'
  | 'cozy'
  | 'nature'
  | 'fantasy'
  | 'spooky'
  | 'sci-fi'
  | 'adventure'
  | 'games'
  | 'storybook'
  | 'magical'
  | 'custom';

export type ChibiSilhouette =
  | 'round'
  | 'tiny'
  | 'tall'
  | 'wide'
  | 'fluffy'
  | 'angular'
  | 'long'
  | 'short'
  | 'top-heavy'
  | 'bottom-heavy'
  | 'odd-unusual'
  | 'custom';

export type ChibiHeadShape =
  | 'round'
  | 'oval'
  | 'wide'
  | 'long'
  | 'square'
  | 'triangle'
  | 'heart'
  | 'fluffy'
  | 'animal-like'
  | 'custom';

export type ChibiHeadAngle =
  | 'front'
  | 'three-quarter-left'
  | 'three-quarter-right'
  | 'side'
  | 'looking-up'
  | 'looking-down'
  | 'tilted';

export interface ChibiFaceState {
  eyes?: string;
  eyebrows?: string;
  nose?: string;
  mouth?: string;
  baseExpression?: string;
}

export interface ChibiBodyState {
  shape?: string;
  proportion?: string; // 'huge-head-tiny-body' | 'large-head-small-body' | 'balanced-chibi' | 'tiny-head-larger-body' | 'extreme-chibi'
}

export interface ChibiClothingState {
  category?: string;
  outfit?: string;
  layers?: string[];
}

export interface ChibiExpressionBodyState {
  emotion?: string;
  postureNote?: string;
}

export interface ChibiCompanionState {
  type?: string;
  nameOrKind?: string;
  notes?: string;
}

export interface ChibiColorsState {
  paletteType?: string;
  notes?: string;
  mainColors?: string[];
}

export interface ChibiCharacter {
  id: string;
  name?: string;
  createdAt: number;
  updatedAt: number;

  type?: ChibiCharacterType;
  customType?: string;
  speciesOrSubtype?: string;

  theme?: ChibiTheme;
  customTheme?: string;

  silhouette?: ChibiSilhouette;
  customSilhouette?: string;

  headShape?: ChibiHeadShape;
  headAngle?: ChibiHeadAngle;
  customHeadShape?: string;

  face?: ChibiFaceState;

  hair?: string;
  definingFeatures?: string[];

  body?: ChibiBodyState;

  arms?: string;
  hands?: string;

  legs?: string;
  feet?: string;

  clothing?: ChibiClothingState;

  accessories?: string[];

  personality?: string;
  customPersonality?: string;

  pose?: string;

  action?: string;

  expressionAndBody?: ChibiExpressionBodyState;

  world?: string;
  customWorld?: string;

  companion?: ChibiCompanionState;

  storyMoment?: string;

  colors?: ChibiColorsState;

  completedStages: string[];
  currentStage: string;

  photoUrl?: string;
  photoDataUrl?: string;
  isFavorite?: boolean;
}

export type ChibiJourneyStageId =
  | 'idea'
  | 'theme'
  | 'silhouette'
  | 'head'
  | 'face'
  | 'hair'
  | 'body'
  | 'arms-hands'
  | 'legs-feet'
  | 'clothing'
  | 'accessories'
  | 'personality'
  | 'pose'
  | 'action'
  | 'expression-body'
  | 'world'
  | 'companion'
  | 'story-moment'
  | 'name-colors'
  | 'character-sheet';

export interface StageChoiceItem {
  id: string;
  label: string;
  sublabel?: string;
  iconName?: string;
  visualRefId: string;
  category?: string;
  tags?: string[];
  compatibleWith?: {
    types?: string[];
    themes?: string[];
    personalities?: string[];
  };
}

export interface ChibiStageDefinition {
  id: ChibiJourneyStageId;
  stageNumber: number;
  title: string;
  friendlyQuestion: string;
  artTeacherNote: string;
  whatToDrawPrompt: string;
  choices: StageChoiceItem[];
  allowCustom?: boolean;
  hasSubstages?: boolean;
  substages?: {
    id: string;
    label: string;
    question: string;
    choices: StageChoiceItem[];
  }[];
}

export interface ChibiProgressStats {
  charactersStarted: number;
  charactersCompleted: number;
  characterSheetsCompleted: number;
  expressionsPracticed: number;
  posesPracticed: number;
  animalsCreated: number;
  creaturesCreated: number;
  scenesCreated: number;
  storiesCreated: number;
}

export interface ChibiPreferences {
  journeyMode: 'guided' | 'flexible';
  skillLevel: 'beginner' | 'experienced';
}
