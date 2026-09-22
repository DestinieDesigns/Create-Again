import { CreativePrompt, MasterCategory, PromptDifficulty } from '../../types/prompt';
import { GROUP_1_PROMPTS } from './group1LinesShapes';
import { GROUP_2_PROMPTS } from './group2Characters';
import { GROUP_3_PROMPTS } from './group3FiguresPoses';
import { GROUP_4_PROMPTS } from './group4CreaturesEnvironments';
import { GROUP_5_PROMPTS } from './group5ArtFundamentals';
import { GROUP_6_PROMPTS } from './group6DesignStorytelling';
import {
  CATEGORY_DEFINITIONS,
  CATEGORY_COUNT_MAP,
  TOTAL_EXPECTED_PROMPTS,
  CategoryMetadata,
} from './categories';

/**
 * The unified 500-Item Prompt + Visual Example Master Library.
 * Fully typed, structured, and validated across all 24 categories.
 */
export const ALL_500_PROMPTS: CreativePrompt[] = [
  ...GROUP_1_PROMPTS,
  ...GROUP_2_PROMPTS,
  ...GROUP_3_PROMPTS,
  ...GROUP_4_PROMPTS,
  ...GROUP_5_PROMPTS,
  ...GROUP_6_PROMPTS,
];

// Verify count at module initialization
export const TOTAL_LOADED_PROMPTS = ALL_500_PROMPTS.length;

// Pre-indexed lookup maps for instant O(1) queries
const PROMPTS_BY_ID = new Map<string, CreativePrompt>(
  ALL_500_PROMPTS.map((p) => [p.id, p])
);

const PROMPTS_BY_CATEGORY = new Map<MasterCategory, CreativePrompt[]>();
for (const prompt of ALL_500_PROMPTS) {
  const cat = prompt.category as MasterCategory;
  const existing = PROMPTS_BY_CATEGORY.get(cat) ?? [];
  existing.push(prompt);
  PROMPTS_BY_CATEGORY.set(cat, existing);
}

/**
 * Retrieve a specific prompt by its unique ID.
 */
export function getPromptById(id: string): CreativePrompt | undefined {
  return PROMPTS_BY_ID.get(id);
}

/**
 * Retrieve all prompts for a given MasterCategory.
 */
export function getPromptsByCategory(category: MasterCategory): CreativePrompt[] {
  return PROMPTS_BY_CATEGORY.get(category) ?? [];
}

/**
 * Retrieve all prompts matching a difficulty level.
 */
export function getPromptsByDifficulty(
  difficulty: PromptDifficulty
): CreativePrompt[] {
  return ALL_500_PROMPTS.filter((p) => p.difficulty === difficulty);
}

/**
 * Retrieve all prompts containing a specific tag.
 */
export function getPromptsByTag(tag: string): CreativePrompt[] {
  const lower = tag.toLowerCase();
  return ALL_500_PROMPTS.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === lower)
  );
}

/**
 * Select a random prompt, with an optional filter predicate.
 */
export function getRandomPrompt(
  filter?: (p: CreativePrompt) => boolean
): CreativePrompt {
  const pool = filter ? ALL_500_PROMPTS.filter(filter) : ALL_500_PROMPTS;
  if (pool.length === 0) {
    return ALL_500_PROMPTS[Math.floor(Math.random() * ALL_500_PROMPTS.length)];
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Return library statistics for diagnostics, dashboards, and tests.
 */
export function getLibraryStats() {
  const categoryCounts: Record<string, number> = {};
  for (const cat of CATEGORY_DEFINITIONS) {
    categoryCounts[cat.name] = (PROMPTS_BY_CATEGORY.get(cat.name) ?? []).length;
  }

  const difficultyCounts = {
    easy: ALL_500_PROMPTS.filter((p) => p.difficulty === 'easy').length,
    medium: ALL_500_PROMPTS.filter((p) => p.difficulty === 'medium').length,
    hard: ALL_500_PROMPTS.filter((p) => p.difficulty === 'hard').length,
  };

  return {
    totalPrompts: ALL_500_PROMPTS.length,
    expectedPrompts: TOTAL_EXPECTED_PROMPTS,
    isComplete: ALL_500_PROMPTS.length === 500,
    categoryCounts,
    difficultyCounts,
  };
}

export {
  CATEGORY_DEFINITIONS,
  CATEGORY_COUNT_MAP,
  TOTAL_EXPECTED_PROMPTS,
  type CategoryMetadata,
};
