import { MODE1_PROMPTS } from '../data/mode1Prompts';
import { getPathwayById } from '../data/pathways';
import {
  AdventureType,
  CreativePathwayId,
  Prompt,
  PromptCategory,
  SessionPhase,
} from '../types/prompt';
import { Mode1Session } from '../types/session';

const RECENT_PROMPTS_KEY = 'create_again_recent_prompts';

export function getRecentPromptIds(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_PROMPTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function recordRecentPromptId(promptId: string): void {
  try {
    const recent = getRecentPromptIds().filter((id) => id !== promptId);
    recent.unshift(promptId);
    // Keep up to 40 recent prompts across sessions
    localStorage.setItem(RECENT_PROMPTS_KEY, JSON.stringify(recent.slice(0, 40)));
  } catch {
    // Ignore localStorage write error
  }
}

/**
 * Determine current session phase based on prompt count and timer elapsed
 */
export function calculateSessionPhase(
  session: Mode1Session,
  now = Date.now()
): SessionPhase {
  const promptCount = session.usedPromptIds.length;

  // If timed session, calculate elapsed progress ratio
  let timeProgress: number | null = null;
  if (session.timerDuration && session.timerStartedAt) {
    const totalDuration =
      session.timerDuration + (session.timerExtraSeconds || 0);
    const elapsed = Math.max(0, (now - session.timerStartedAt) / 1000);
    timeProgress = Math.min(1, elapsed / totalDuration);
  }

  // If in Chaos mode, allow wild phase to hit earlier
  if (session.difficulty === 'chaos' && promptCount >= 2) {
    if (timeProgress !== null && timeProgress > 0.85) return 'closing';
    if (promptCount >= 6) return 'wild';
  }

  if (timeProgress !== null) {
    if (timeProgress < 0.18 || promptCount <= 1) return 'opening';
    if (timeProgress < 0.45 || promptCount <= 4) return 'building';
    if (timeProgress < 0.72 || promptCount <= 8) return 'developing';
    if (timeProgress < 0.88 || promptCount <= 12) return 'wild';
    return 'closing';
  }

  // Untimed session: phase transitions smoothly with prompt count
  if (promptCount <= 1) return 'opening';
  if (promptCount <= 4) return 'building';
  if (promptCount <= 8) return 'developing';
  if (promptCount <= 13) return 'wild';
  return 'closing';
}

/**
 * Dynamic base category weights per session phase
 */
function getCategoryPhaseWeight(
  category: PromptCategory,
  phase: SessionPhase,
  difficulty: AdventureType
): number {
  const phaseWeights: Record<SessionPhase, Record<PromptCategory, number>> = {
    opening: {
      START: 35,
      ADD: 25,
      CONNECT: 20,
      TRANSFORM: 10,
      INTERACT: 5,
      STORY: 4,
      CHAOS: 2,
      DETAIL: 2,
      CHANGE: 1,
      FINISH: 0,
    },
    building: {
      CONNECT: 22,
      ADD: 20,
      TRANSFORM: 20,
      INTERACT: 15,
      STORY: 10,
      START: 4,
      CHAOS: 6,
      DETAIL: 5,
      CHANGE: 5,
      FINISH: 0,
    },
    developing: {
      TRANSFORM: 18,
      INTERACT: 18,
      STORY: 16,
      ADD: 15,
      CONNECT: 12,
      CHAOS: 10,
      DETAIL: 8,
      CHANGE: 8,
      START: 2,
      FINISH: 0,
    },
    wild: {
      CHAOS: 30,
      CHANGE: 16,
      INTERACT: 15,
      STORY: 14,
      TRANSFORM: 12,
      ADD: 10,
      CONNECT: 5,
      DETAIL: 6,
      START: 1,
      FINISH: 0,
    },
    closing: {
      DETAIL: 24,
      CHANGE: 18,
      FINISH: 18,
      STORY: 14,
      ADD: 10,
      CHAOS: 8,
      TRANSFORM: 8,
      INTERACT: 6,
      CONNECT: 4,
      START: 0,
    },
  };

  let weight = phaseWeights[phase][category] ?? 5;

  // Boost for Chaos mode
  if (difficulty === 'chaos') {
    if (category === 'CHAOS') weight *= 2.8;
    if (category === 'CHANGE') weight *= 1.5;
    if (category === 'STORY') weight *= 1.3;
  }

  // Boost for Tiny Mystery (simple quick shapes)
  if (difficulty === 'tiny-mystery') {
    if (category === 'START' || category === 'ADD') weight *= 1.4;
    if (category === 'CHAOS') weight *= 0.6;
  }

  return weight;
}

/**
 * Calculate difficulty matching multiplier
 */
function getDifficultyModifier(
  promptDifficulty: 'easy' | 'medium' | 'hard',
  adventure: AdventureType
): number {
  switch (adventure) {
    case 'tiny-mystery':
      return promptDifficulty === 'easy' ? 1.6 : promptDifficulty === 'medium' ? 0.7 : 0.2;
    case 'short-adventure':
      return promptDifficulty === 'easy' ? 1.3 : promptDifficulty === 'medium' ? 1.0 : 0.5;
    case 'full-adventure':
      return promptDifficulty === 'easy' ? 1.0 : promptDifficulty === 'medium' ? 1.2 : 0.9;
    case 'deep-dive':
      return promptDifficulty === 'easy' ? 0.7 : promptDifficulty === 'medium' ? 1.3 : 1.4;
    case 'chaos':
      return 1.0;
    default:
      return 1.0;
  }
}

export interface PromptEvaluation {
  prompt: Prompt;
  finalWeight: number;
}

/**
 * Evaluates and selects the next prompt using controlled weighted randomness
 */
export function getNextRandomPrompt(
  session: Mode1Session,
  allPrompts: Prompt[] = MODE1_PROMPTS,
  pathway?: CreativePathwayId
): Prompt {
  const isFirstPrompt = session.usedPromptIds.length === 0;
  const recentIds = getRecentPromptIds();
  const phase = calculateSessionPhase(session);

  // Get previous categories to prevent category domination
  const history = session.promptHistory;
  const prevCategory = history.length > 0 ? history[history.length - 1].category : null;
  const prevPrevCategory = history.length > 1 ? history[history.length - 2].category : null;

  // Filter 1: Prompt must NOT have been used in this session
  let candidates = allPrompts.filter(
    (p) => !session.usedPromptIds.includes(p.id)
  );

  // Filter 2: First prompt must NOT require previous drawing
  if (isFirstPrompt) {
    candidates = candidates.filter(
      (p) => !p.requiresPreviousDrawing && (p.goodForBeginning || p.category === 'START')
    );
  }

  // Filter 3: Filter for tags relevant to chosen pathway
  const activePathway = pathway || session.pathway;
  let pathwayTags: string[] = [];
  if (activePathway && activePathway !== 'open') {
    const pathwayConfig = getPathwayById(activePathway);
    if (pathwayConfig && pathwayConfig.relevantTags.length > 0) {
      pathwayTags = pathwayConfig.relevantTags.map((t) => t.toLowerCase());
      const pathwayMatching = candidates.filter((p) =>
        p.tags.some((t) => pathwayTags.includes(t.toLowerCase()))
      );
      // Filter to relevant pathway prompts if matching candidates exist
      if (pathwayMatching.length > 0) {
        candidates = pathwayMatching;
      }
    }
  }

  if (candidates.length === 0) {
    // Failsafe in case all prompts were exhausted in deep session
    candidates = allPrompts.filter((p) => p.id !== session.currentPromptId);
  }

  // Calculate final weights for each candidate
  const evaluated: PromptEvaluation[] = candidates.map((p) => {
    let weight = p.weight;

    // Pathway tag boost if prompt contains matching tags
    if (pathwayTags.length > 0 && p.tags.some((t) => pathwayTags.includes(t.toLowerCase()))) {
      weight *= 2.5;
    }

    // 1. Category phase weight
    const categoryWeight = getCategoryPhaseWeight(p.category, phase, session.difficulty);
    weight *= categoryWeight;

    // 2. Prevent consecutive category repetition
    if (prevCategory && p.category === prevCategory) {
      weight *= 0.35; // Significant penalty for immediate same category
    }
    if (prevCategory && prevPrevCategory && p.category === prevCategory && prevCategory === prevPrevCategory) {
      weight *= 0.1; // Severe penalty for 3 in a row
    }

    // 3. Difficulty modifier
    const diffModifier = getDifficultyModifier(p.difficulty, session.difficulty);
    weight *= diffModifier;

    // 4. Position suitability
    if (phase === 'opening' && p.goodForBeginning) weight *= 1.6;
    if (phase === 'closing' && p.goodForEnding) weight *= 2.0;
    if (phase === 'building' && p.goodForMiddle) weight *= 1.3;

    // 5. Recent session memory modifier (discourage prompts used across recent sessions)
    const recentIndex = recentIds.indexOf(p.id);
    if (recentIndex !== -1) {
      // More recently used = lower weight (e.g. index 0 -> 0.25x, index 30 -> 0.7x)
      const recentPenalty = 0.25 + (recentIndex / 40) * 0.55;
      weight *= recentPenalty;
    }

    // 6. Base prompt category affinity
    if (p.avoidAfterCategories && prevCategory && p.avoidAfterCategories.includes(prevCategory)) {
      weight *= 0.4;
    }
    if (p.preferAfterCategories && prevCategory && p.preferAfterCategories.includes(prevCategory)) {
      weight *= 1.5;
    }

    // 7. Session minute boundaries (if specified)
    if (session.timerStartedAt) {
      const elapsedMinutes = (Date.now() - session.timerStartedAt) / 60000;
      if (p.minSessionMinute !== undefined && elapsedMinutes < p.minSessionMinute) {
        weight *= 0.1;
      }
      if (p.maxSessionMinute !== undefined && elapsedMinutes > p.maxSessionMinute) {
        weight *= 0.1;
      }
    }

    // Clamp weight so nothing completely dominates or hits zero (unless phase weight is 0)
    const finalWeight = Math.max(0.1, weight);

    return {
      prompt: p,
      finalWeight,
    };
  });

  // Weighted random selection
  const totalWeight = evaluated.reduce((sum, item) => sum + item.finalWeight, 0);

  if (totalWeight <= 0) {
    return evaluated[0].prompt;
  }

  let random = Math.random() * totalWeight;
  for (const item of evaluated) {
    random -= item.finalWeight;
    if (random <= 0) {
      return item.prompt;
    }
  }

  return evaluated[evaluated.length - 1].prompt;
}
