import { VisualReference } from './visualReference';

export type ListenDrawActivityType =
  | 'what-comes-next'
  | 'warm-up'
  | 'chibi'
  | 'creative-chaos';

export type ListenDrawVoiceStyle =
  | 'calm'
  | 'guided'
  | 'think-fast'
  | 'minimal';

export type ListenDrawWarningProfile =
  | 'none'
  | 'minimal'
  | 'full';

export type ListenDrawState =
  | 'setup'
  | 'intro'
  | 'reference'
  | 'reference-pause'
  | 'put-device-down'
  | 'instruction'
  | 'creative'
  | 'warning'
  | 'transition'
  | 'completed'
  | 'paused'
  | 'ended'
  | 'error';

export interface ListenDrawStepAudio {
  referenceIntro: string;
  referenceObservation: string;
  putDeviceDownText: string;
  creativeInstruction: string;
  transitionText: string;
}

export interface ListenDrawStep {
  id: string;
  stepNumber: number;
  totalSteps: number;
  title: string;
  promptText: string;
  instructionText: string;
  explanation?: string;
  whatToNotice?: string;
  visualReference?: VisualReference;
  creativeDurationSeconds: number;
  viewingDurationSeconds: number;
  audio: ListenDrawStepAudio;
}

export interface ListenDrawSession {
  id: string;
  activityType: ListenDrawActivityType;
  voiceStyle: ListenDrawVoiceStyle;
  warningProfile: ListenDrawWarningProfile;
  totalDurationSeconds: number;
  steps: ListenDrawStep[];
  currentStepIndex: number;
  currentState: ListenDrawState;
  startedAt: number;
  pausedAt?: number;
  completedAt?: number;
  isPaused: boolean;
  isCompleted: boolean;
}

export interface ListenDrawConfig {
  activityType: ListenDrawActivityType;
  totalDurationSeconds: number; // e.g. 300 (5m), 600 (10m), 1200 (20m), 1800 (30m)
  voiceStyle: ListenDrawVoiceStyle;
  warningProfile: ListenDrawWarningProfile;
  themeId?: string;
}
