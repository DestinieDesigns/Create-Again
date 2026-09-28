import {
  ChibiPartReference,
  ChibiPartCategory,
  ChibiReferenceFilterOptions,
  ChibiStageReferenceMap,
} from '../types/chibiReference';

import { CHIBI_HEADS } from './chibiParts/heads';
import { CHIBI_FACIAL } from './chibiParts/facial';
import { CHIBI_ANATOMY } from './chibiParts/anatomy';
import { CHIBI_CREATURE_FEATURES } from './chibiParts/creatureFeatures';
import { CHIBI_CLOTHING_STYLE } from './chibiParts/clothingAndStyle';
import { PLANNED_MISSING_ASSETS } from './chibiAssetManifest';

// Format existing parts with status: 'available'
const BASE_AVAILABLE_PARTS: ChibiPartReference[] = [
  ...CHIBI_HEADS,
  ...CHIBI_FACIAL,
  ...CHIBI_ANATOMY,
  ...CHIBI_CREATURE_FEATURES,
  ...CHIBI_CLOTHING_STYLE,
].map((part) => ({
  ...part,
  status: part.status || 'available',
}));

// Format planned missing/upcoming assets from manifest
const PLANNED_PARTS: ChibiPartReference[] = PLANNED_MISSING_ASSETS.map((asset) => ({
  id: asset.id,
  category: asset.category,
  name: asset.name,
  imageUrl: asset.path,
  filename: asset.filename,
  status: asset.status,
  tier: asset.tier,
  priority: asset.priority,
  required: asset.required,
  altText: asset.altText,
  description: asset.description,
  drawingCue: asset.drawingCue,
  tags: asset.tags,
  compatibleTypes: asset.compatibleTypes,
  compatibleThemes: asset.compatibleThemes,
  difficulty: asset.difficulty,
  svgContent: asset.svgContent,
}));

// Consolidated master library of individual chibi part references
export const CHIBI_PART_REFERENCES: ChibiPartReference[] = [
  ...BASE_AVAILABLE_PARTS,
  ...PLANNED_PARTS,
];

// Section 39: Organize by drawing stage
export const chibiStageReferenceMap: ChibiStageReferenceMap = {
  idea: [],
  theme: [],
  silhouette: ['body', 'robot'],
  head: ['head', 'head-angle', 'robot'],
  face: ['eye', 'eyebrow', 'nose', 'mouth'],
  hair: ['hair', 'animal-feature', 'fantasy-feature'],
  definingFeatures: [
    'ear',
    'horn',
    'antler',
    'wing',
    'tail',
    'scale',
    'marking',
    'robot',
  ],
  body: ['body', 'robot'],
  arms: ['arm', 'hand', 'robot'],
  legs: ['leg', 'foot', 'robot'],
  clothing: ['clothing'],
  accessories: ['accessory'],
  personality: [],
  pose: [],
  action: [],
  expression: ['eye', 'eyebrow', 'mouth'],
  world: [],
  companion: ['animal-feature', 'creature-feature'],
  story: [],
  colors: [],
};

// Section 27 & 34: Reference selection query function
export function getChibiReferences(options?: ChibiReferenceFilterOptions): ChibiPartReference[] {
  if (!options) return CHIBI_PART_REFERENCES;

  return CHIBI_PART_REFERENCES.filter((item) => {
    // Category match
    if (options.category && item.category !== options.category) {
      return false;
    }
    if (options.categories && options.categories.length > 0 && !options.categories.includes(item.category)) {
      return false;
    }

    // Search query
    if (options.search) {
      const q = options.search.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTag = item.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchTag) return false;
    }

    // Difficulty
    if (options.difficulty && item.difficulty !== options.difficulty) {
      return false;
    }

    return true;
  });
}

// Find a reference by id
export function getChibiPartReferenceById(id: string): ChibiPartReference | undefined {
  return CHIBI_PART_REFERENCES.find((r) => r.id === id);
}

// Section 25 & 32: CHOOSE FOR ME selection algorithm
// Selects ONE item from current category, prioritizing AVAILABLE assets first, then compatible tags/types
export function pickRandomCompatiblePart(
  category: ChibiPartCategory,
  characterType?: string,
  theme?: string
): ChibiPartReference {
  const allCandidates = CHIBI_PART_REFERENCES.filter((p) => p.category === category);
  if (allCandidates.length === 0) {
    return CHIBI_PART_REFERENCES[0];
  }

  // Section 25: Prefer available assets when picking for the user
  const availableCandidates = allCandidates.filter((p) => p.status !== 'missing');
  const poolBase = availableCandidates.length > 0 ? availableCandidates : allCandidates;

  // Soft preference match (Section 28: Compatibility should guide, not restrict)
  const preferred = poolBase.filter((p) => {
    if (characterType && p.compatibleTypes && p.compatibleTypes.includes(characterType)) {
      return true;
    }
    if (theme && p.compatibleThemes && p.compatibleThemes.includes(theme)) {
      return true;
    }
    return false;
  });

  const pool = preferred.length > 0 ? preferred : poolBase;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}
