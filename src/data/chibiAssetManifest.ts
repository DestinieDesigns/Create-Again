import { ChibiPartCategory, ChibiPartReference } from '../types/chibiReference';
import {
  ChibiAssetRecord,
  ChibiAssetStatus,
  ChibiAssetTier,
  ChibiAssetPriorityLevel,
  AssetCreationTask,
  CategoryAssetReport,
  ChibiAssetAuditReport,
  AssetPriority,
} from '../types/chibiAsset';

import { CHIBI_HEADS } from './chibiParts/heads';
import { CHIBI_FACIAL } from './chibiParts/facial';
import { CHIBI_ANATOMY } from './chibiParts/anatomy';
import { CHIBI_CREATURE_FEATURES } from './chibiParts/creatureFeatures';
import { CHIBI_CLOTHING_STYLE } from './chibiParts/clothingAndStyle';

/**
 * Section 5: Standard Folder Mapping
 * Maps every logical ChibiPartCategory to its exact directory in public/references/chibi/
 */
export const CATEGORY_FOLDER_MAP: Record<ChibiPartCategory, string> = {
  head: 'heads',
  'head-angle': 'head-angles',
  ear: 'ears',
  eye: 'eyes',
  eyebrow: 'eyebrows',
  nose: 'noses',
  mouth: 'mouths',
  hair: 'hair',
  body: 'body',
  arm: 'arms',
  hand: 'hands',
  leg: 'legs',
  foot: 'feet',
  tail: 'tails',
  wing: 'wings',
  horn: 'horns',
  antler: 'antlers',
  scale: 'scales',
  marking: 'markings',
  accessory: 'accessories',
  clothing: 'clothing',
  'animal-feature': 'animal-features',
  'fantasy-feature': 'fantasy-features',
  'creature-feature': 'creature-features',
  robot: 'robot',
  'special-feature': 'special-features',
};

/**
 * Friendly Category Labels
 */
export const CATEGORY_LABELS: Record<ChibiPartCategory, string> = {
  head: 'Head Shapes',
  'head-angle': 'Head Angles & Views',
  ear: 'Ears (Human & Animal)',
  eye: 'Eye Expressions & Shapes',
  eyebrow: 'Eyebrows & Moods',
  nose: 'Nose Types',
  mouth: 'Mouth Expressions',
  hair: 'Hairstyles & Textures',
  body: 'Body Silhouettes & Torso',
  arm: 'Arms & Poses',
  hand: 'Hands & Paws',
  leg: 'Legs & Stances',
  foot: 'Feet & Footwear',
  tail: 'Tails',
  wing: 'Wings',
  horn: 'Horns',
  antler: 'Antlers',
  scale: 'Scales & Armor',
  marking: 'Markings & Patterns',
  accessory: 'Accessories & Props',
  clothing: 'Clothing & Outfits',
  'animal-feature': 'Animal Features',
  'fantasy-feature': 'Fantasy Features',
  'creature-feature': 'Creature Features',
  robot: 'Robot & Mecha Parts',
  'special-feature': 'Special Features',
};

/**
 * Extract filename from a path (e.g. /references/chibi/heads/head-round.svg -> head-round.svg)
 */
function extractFilename(url: string, id: string): string {
  const parts = url.split('/');
  return parts[parts.length - 1] || `${id}.svg`;
}

/**
 * Transform existing reference data into ChibiAssetRecord with availability status
 */
function buildAvailableRecords(parts: ChibiPartReference[]): ChibiAssetRecord[] {
  return parts.map((part) => {
    const filename = extractFilename(part.imageUrl, part.id);
    const isCore =
      part.difficulty === 'easy' ||
      ['round', 'oval', 'standard', 'smile', 'frown', 'dot', 'almond', 'open', 'classic'].some(
        (k) => part.id.includes(k)
      );

    return {
      id: part.id,
      category: part.category,
      name: part.name,
      filename,
      path: part.imageUrl,
      status: 'available' as ChibiAssetStatus,
      tier: (isCore ? 'core' : 'expanded') as ChibiAssetTier,
      priority: (isCore ? 'critical' : 'high') as ChibiAssetPriorityLevel,
      required: isCore,
      altText: part.altText,
      description: part.description,
      drawingCue:
        part.drawingCue ||
        `Think: Block in the fundamental mass with faint strokes before inking the outer boundary.`,
      tags: part.tags,
      compatibleTypes: part.compatibleTypes,
      compatibleThemes: part.compatibleThemes,
      difficulty: part.difficulty || 'medium',
      svgContent: part.svgContent,
      createdAt: '2026-09-26',
      creationPhase: isCore ? 1 : 2,
      usageCount: 1,
    };
  });
}

const AVAILABLE_BASE_RECORDS: ChibiAssetRecord[] = buildAvailableRecords([
  ...CHIBI_HEADS,
  ...CHIBI_FACIAL,
  ...CHIBI_ANATOMY,
  ...CHIBI_CREATURE_FEATURES,
  ...CHIBI_CLOTHING_STYLE,
]);

/**
 * Section 7, 8, 11-15: DEFINED MISSING & UPCOMING ASSETS IN MANIFEST
 * Assets specified in the system design that are queued or in progress.
 * Handled gracefully by the app via the clean placeholder system.
 */
export const PLANNED_MISSING_ASSETS: ChibiAssetRecord[] = [
  // --- Phase 2: Animal Ears ---
  {
    id: 'ear-fennec',
    category: 'ear',
    name: 'Giant Fennec Ears',
    filename: 'ear-fennec.svg',
    path: '/references/chibi/ears/ear-fennec.svg',
    status: 'missing',
    tier: 'core',
    priority: 'high',
    required: true,
    altText: 'Enormous triangular fennec fox ears with flared outer rim.',
    description: 'Oversized desert fox ears twice the width of standard canine ears.',
    drawingCue:
      'Think: Two enormous triangular satellite dishes, wider than the head, with deep concave inner ridges.',
    tags: ['ear', 'fennec', 'fox', 'animal', 'large', 'cute', 'beginner'],
    compatibleTypes: ['animal-like', 'creature'],
    difficulty: 'easy',
    creationPhase: 2,
    usageCount: 3,
  },
  {
    id: 'ear-floppy-puppy',
    category: 'ear',
    name: 'Floppy Droop Ears',
    filename: 'ear-floppy-puppy.svg',
    path: '/references/chibi/ears/ear-floppy-puppy.svg',
    status: 'missing',
    tier: 'core',
    priority: 'high',
    required: true,
    altText: 'Soft downward-folding puppy ears resting along the jawline.',
    description: 'Gentle droop ears for hound or puppy-type chibis.',
    drawingCue:
      'Think: Soft curved teardrop folds resting snugly flat against the sides of the cheeks.',
    tags: ['ear', 'dog', 'puppy', 'droop', 'floppy', 'animal'],
    compatibleTypes: ['animal-like', 'creature'],
    difficulty: 'easy',
    creationPhase: 2,
    usageCount: 2,
  },

  // --- Phase 3: Animal Limbs & Tails ---
  {
    id: 'foot-paw-padded',
    category: 'foot',
    name: 'Padded Animal Paw',
    filename: 'foot-paw-padded.svg',
    path: '/references/chibi/feet/foot-paw-padded.svg',
    status: 'missing',
    tier: 'core',
    priority: 'high',
    required: true,
    altText: 'Stubby animal paw foot resting flat on the ground with toe beans.',
    description: 'Padded animal foot with 3 soft toes for animal-type chibis.',
    drawingCue:
      'Think: A soft marshmallow dome resting flat on the ground with three circular toe impressions.',
    tags: ['foot', 'paw', 'animal', 'cat', 'bear'],
    compatibleTypes: ['animal-like', 'creature'],
    difficulty: 'easy',
    creationPhase: 3,
    usageCount: 2,
  },
  {
    id: 'tail-rabbit-puff',
    category: 'tail',
    name: 'Rabbit Cotton Puff Tail',
    filename: 'tail-rabbit-puff.svg',
    path: '/references/chibi/tails/tail-rabbit-puff.svg',
    status: 'missing',
    tier: 'core',
    priority: 'high',
    required: true,
    altText: 'Fluffy spherical cotton puff tail for rabbits or bunnies.',
    description: 'Compact round fluffy ball tail placed directly on the lower spine curve.',
    drawingCue:
      'Think: A round dandelion fluff ball resting snug above the hips with short jagged tufts.',
    tags: ['tail', 'rabbit', 'bunny', 'fluffy', 'puff'],
    compatibleTypes: ['animal-like'],
    difficulty: 'easy',
    creationPhase: 3,
    usageCount: 2,
  },

  // --- Phase 4: Fantasy and Creature Parts ---
  {
    id: 'wing-phoenix-flame',
    category: 'wing',
    name: 'Phoenix Flame Wing',
    filename: 'wing-phoenix-flame.svg',
    path: '/references/chibi/wings/wing-phoenix-flame.svg',
    status: 'missing',
    tier: 'expanded',
    priority: 'medium',
    required: false,
    altText: 'Stylized feathered wing dissolving into smooth upward flame tips.',
    description: 'Mythical avian wing with sweeping fire-feather tips.',
    drawingCue:
      'Think: Layered feathers that curve upward like dancing campfire flame tips.',
    tags: ['wing', 'phoenix', 'fire', 'fantasy', 'mythical'],
    compatibleTypes: ['fantasy', 'magical-character'],
    difficulty: 'hard',
    creationPhase: 4,
    usageCount: 1,
  },
  {
    id: 'wing-dragon-membrane',
    category: 'wing',
    name: 'Bat/Dragon Membrane Wing',
    filename: 'wing-dragon-membrane.svg',
    path: '/references/chibi/wings/wing-dragon-membrane.svg',
    status: 'missing',
    tier: 'expanded',
    priority: 'medium',
    required: false,
    altText: 'Leathery bat-like wing with articulated finger struts and taut webbing.',
    description: 'Classic leathery demon or dragon wing with 3 skeletal finger struts.',
    drawingCue:
      'Think: Three long finger struts with scalloped webbed skin stretched between them.',
    tags: ['wing', 'dragon', 'bat', 'leather', 'fantasy'],
    compatibleTypes: ['fantasy', 'monster', 'creature'],
    difficulty: 'medium',
    creationPhase: 4,
    usageCount: 2,
  },
  {
    id: 'horn-spiral-unicorn',
    category: 'horn',
    name: 'Spiral Unicorn Horn',
    filename: 'horn-spiral-unicorn.svg',
    path: '/references/chibi/horns/horn-spiral-unicorn.svg',
    status: 'missing',
    tier: 'expanded',
    priority: 'medium',
    required: false,
    altText: 'Single upright forehead horn with diagonal spiral ridges.',
    description: 'Central forehead horn with elegant spiral threading.',
    drawingCue:
      'Think: A slender pointed cone marked with angled diagonal spiral grooves slanting upward.',
    tags: ['horn', 'unicorn', 'magical', 'fantasy', 'spiral'],
    compatibleTypes: ['fantasy', 'creature'],
    difficulty: 'easy',
    creationPhase: 4,
    usageCount: 1,
  },
  {
    id: 'creature-griffin-beak',
    category: 'creature-feature',
    name: 'Raptor Griffin Beak',
    filename: 'creature-griffin-beak.svg',
    path: '/references/chibi/creature-features/creature-griffin-beak.svg',
    status: 'missing',
    tier: 'future',
    priority: 'medium',
    required: false,
    altText: 'Sharp hooked eagle beak for griffin or bird-person chibis.',
    description: 'Curved predatory beak with sharp tip and nostril cere.',
    drawingCue:
      'Think: Sharp hooked upper raptor beak with a curved predatory tip and compact lower jaw.',
    tags: ['creature', 'beak', 'griffin', 'bird', 'fantasy'],
    compatibleTypes: ['fantasy', 'creature'],
    difficulty: 'medium',
    creationPhase: 4,
    usageCount: 1,
  },
  {
    id: 'creature-slime-drips',
    category: 'creature-feature',
    name: 'Viscous Slime Drips',
    filename: 'creature-slime-drips.svg',
    path: '/references/chibi/creature-features/creature-slime-drips.svg',
    status: 'missing',
    tier: 'future',
    priority: 'low',
    required: false,
    altText: 'Melting liquid slime drips hanging from limbs or chin.',
    description: 'Organic droplet drips for slime, ghost, or gelatinous creatures.',
    drawingCue:
      'Think: Gooey melting teardrops dripping downward with rounded liquid pooling.',
    tags: ['creature', 'slime', 'liquid', 'monster', 'ghost'],
    compatibleTypes: ['monster', 'creature'],
    difficulty: 'easy',
    creationPhase: 4,
    usageCount: 1,
  },

  // --- Phase 5: Robot & Mecha Parts ---
  {
    id: 'robot-head-monitor',
    category: 'robot',
    name: 'CRT Monitor Head',
    filename: 'robot-head-monitor.svg',
    path: '/references/chibi/robot/robot-head-monitor.svg',
    status: 'missing',
    tier: 'expanded',
    priority: 'high',
    required: false,
    altText: 'Chunky retro CRT monitor box head with rounded screen border.',
    description: 'Retro-futuristic cube screen head with antenna.',
    drawingCue:
      'Think: A rounded square box with a recessed inner glass tube bezel and side antenna.',
    tags: ['robot', 'head', 'monitor', 'screen', 'retro', 'mecha'],
    compatibleTypes: ['robot'],
    difficulty: 'medium',
    creationPhase: 5,
    usageCount: 2,
  },
  {
    id: 'robot-eye-visor',
    category: 'robot',
    name: 'LED Digital Visor',
    filename: 'robot-eye-visor.svg',
    path: '/references/chibi/robot/robot-eye-visor.svg',
    status: 'missing',
    tier: 'expanded',
    priority: 'high',
    required: false,
    altText: 'Wide curved cyber visor wrapping across the eye line.',
    description: 'Sleek horizontal visor glass with digital pixel readout indicators.',
    drawingCue:
      'Think: A sleek horizontal curved glass strip across the eye line with rounded ends.',
    tags: ['robot', 'eye', 'visor', 'cyber', 'mecha', 'tech'],
    compatibleTypes: ['robot', 'human'],
    difficulty: 'easy',
    creationPhase: 5,
    usageCount: 2,
  },
  {
    id: 'robot-arm-jointed',
    category: 'robot',
    name: 'Ball-Socket Robot Arm',
    filename: 'robot-arm-jointed.svg',
    path: '/references/chibi/robot/robot-arm-jointed.svg',
    status: 'missing',
    tier: 'expanded',
    priority: 'medium',
    required: false,
    altText: 'Segmented mechanical arm with circular pivot joint.',
    description: 'Two tubular arm segments connected by a circular hinge bolt.',
    drawingCue:
      'Think: Cylinder, circle pivot joint, cylinder, ending in a clamp connector.',
    tags: ['robot', 'arm', 'joint', 'mechanical', 'mecha'],
    compatibleTypes: ['robot'],
    difficulty: 'medium',
    creationPhase: 5,
    usageCount: 1,
  },
  {
    id: 'robot-body-chassis',
    category: 'robot',
    name: 'Pill-Capsule Chassis',
    filename: 'robot-body-chassis.svg',
    path: '/references/chibi/robot/robot-body-chassis.svg',
    status: 'missing',
    tier: 'expanded',
    priority: 'medium',
    required: false,
    altText: 'Smooth capsule torso with chest inspection panel seams.',
    description: 'Streamlined egg/capsule body with bolted access panel.',
    drawingCue:
      'Think: A capsule shaped like a large vitamin pill with simple panel seams.',
    tags: ['robot', 'body', 'capsule', 'chassis', 'panel'],
    compatibleTypes: ['robot'],
    difficulty: 'easy',
    creationPhase: 5,
    usageCount: 1,
  },
  {
    id: 'robot-treads-wheel',
    category: 'robot',
    name: 'Tank Treads Mobile Base',
    filename: 'robot-treads-wheel.svg',
    path: '/references/chibi/robot/robot-treads-wheel.svg',
    status: 'missing',
    tier: 'future',
    priority: 'low',
    required: false,
    altText: 'Continuous track caterpillar treads replacing traditional feet.',
    description: 'Two side-by-side tank belt treads for mobile robot chibis.',
    drawingCue:
      'Think: An oval belt track enclosing three small circular cog wheels.',
    tags: ['robot', 'feet', 'treads', 'tracks', 'tank'],
    compatibleTypes: ['robot'],
    difficulty: 'hard',
    creationPhase: 5,
    usageCount: 1,
  },
];

/**
 * Section 7: Complete Asset Manifest
 * Master registry containing both currently available and queued missing assets.
 */
export const CHIBI_ASSET_MANIFEST: ChibiAssetRecord[] = [
  ...AVAILABLE_BASE_RECORDS,
  ...PLANNED_MISSING_ASSETS,
];

/**
 * Section 7: Exported alias matching chibiAssetManifest standard naming
 */
export const chibiAssetManifest: ChibiAssetRecord[] = CHIBI_ASSET_MANIFEST;

/**
 * Get an asset record by ID
 */
export function getManifestAssetById(id: string): ChibiAssetRecord | undefined {
  return CHIBI_ASSET_MANIFEST.find((a) => a.id === id);
}

/**
 * Section 1: Check Asset Availability Status
 */
export function getChibiAssetStatus(id: string): ChibiAssetStatus {
  const asset = getManifestAssetById(id);
  if (!asset) return 'missing';
  return asset.status;
}

/**
 * Section 10: Calculate Priority
 */
export function calculateAssetPriority(asset: ChibiAssetRecord): AssetPriority {
  const usageCount = asset.usageCount || 1;
  const requiredForCoreJourney = asset.required || asset.tier === 'core';
  const categoryImportance =
    ['head', 'body', 'eye', 'mouth', 'hand', 'foot', 'ear'].includes(asset.category)
      ? 10
      : 5;

  let priority: ChibiAssetPriorityLevel = 'low';
  if (requiredForCoreJourney && usageCount >= 2) {
    priority = 'critical';
  } else if (requiredForCoreJourney || usageCount >= 2) {
    priority = 'high';
  } else if (categoryImportance >= 10 || asset.tier === 'expanded') {
    priority = 'medium';
  }

  return {
    usageCount,
    requiredForCoreJourney,
    categoryImportance,
    priority,
  };
}

/**
 * Section 27: Build Asset Creation Queue
 * Returns missing assets sorted by creation priority (Critical -> High -> Medium -> Low)
 */
export function getAssetCreationQueue(): AssetCreationTask[] {
  const missing = CHIBI_ASSET_MANIFEST.filter(
    (a) => a.status === 'missing' || a.status === 'placeholder'
  );

  const priorityOrder: Record<ChibiAssetPriorityLevel, number> = {
    critical: 0,
    high: 1,
    medium: 2,
    low: 3,
  };

  const tasks: AssetCreationTask[] = missing.map((asset) => {
    const calc = calculateAssetPriority(asset);
    return {
      assetId: asset.id,
      priority: calc.priority,
      category: asset.category,
      name: asset.name,
      filename: asset.filename,
      path: asset.path,
      reason: asset.required
        ? 'Required for Core Chibi Character Journey'
        : `Expanded ${CATEGORY_LABELS[asset.category] || asset.category} library`,
      status: 'not-started',
      targetPhase: asset.creationPhase || 2,
      drawingCue: asset.drawingCue,
      notes: asset.description,
    };
  });

  return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

/**
 * Section 9: Generate Missing Asset Report
 */
export function generateCategoryReports(): CategoryAssetReport[] {
  const categories = Object.keys(CATEGORY_FOLDER_MAP) as ChibiPartCategory[];

  return categories.map((cat) => {
    const items = CHIBI_ASSET_MANIFEST.filter((a) => a.category === cat);
    const available = items.filter((a) => a.status === 'available');
    const missing = items.filter((a) => a.status === 'missing');
    const optional = items.filter((a) => a.status === 'optional');

    return {
      category: cat,
      categoryLabel: CATEGORY_LABELS[cat] || cat,
      total: items.length,
      availableCount: available.length,
      missingCount: missing.length,
      optionalCount: optional.length,
      available,
      missing,
      optional,
    };
  });
}

/**
 * Section 21: Full Audit Report for Validation
 */
export function generateFullAuditReport(): ChibiAssetAuditReport {
  const categories = generateCategoryReports();
  const totalAssets = CHIBI_ASSET_MANIFEST.length;
  const availableCount = CHIBI_ASSET_MANIFEST.filter((a) => a.status === 'available').length;
  const missingCount = CHIBI_ASSET_MANIFEST.filter((a) => a.status === 'missing').length;
  const optionalCount = CHIBI_ASSET_MANIFEST.filter((a) => a.status === 'optional').length;

  // Duplicate checks
  const seenIds = new Set<string>();
  const duplicateIds: string[] = [];
  const seenFilenames = new Set<string>();
  const duplicateFilenames: string[] = [];

  for (const asset of CHIBI_ASSET_MANIFEST) {
    if (seenIds.has(asset.id)) duplicateIds.push(asset.id);
    else seenIds.add(asset.id);

    if (seenFilenames.has(asset.filename)) duplicateFilenames.push(asset.filename);
    else seenFilenames.add(asset.filename);
  }

  const missingRequiredFiles = CHIBI_ASSET_MANIFEST.filter(
    (a) => a.required && a.status === 'missing'
  ).map((a) => a.filename);

  return {
    timestamp: new Date().toISOString(),
    totalAssets,
    availableCount,
    missingCount,
    optionalCount,
    duplicateIds,
    duplicateFilenames,
    missingRequiredFiles,
    categories,
  };
}

/**
 * Section 16-19: Generate Starter SVG Template conforming to asset specifications
 * - 512x512 canvas
 * - Black stroke, clean vector paths, white/transparent fill
 * - Beginner friendly, centered with margin
 */
export function getStarterSvgTemplate(asset: Partial<ChibiAssetRecord>): string {
  const title = asset.name || 'Chibi Part';
  const category = asset.category || 'part';
  return `<!-- Create Again Chibi Asset: ${title} (${category}) -->
<!-- Standard: 512x512 square canvas, black stroke (stroke-width: 14), white fill, isolated piece -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Guidelines: 10% safety margin, center: (256, 256) -->
  </defs>
  <!-- Main isolated vector stroke -->
  <path
    d="M 160 256 C 160 180, 220 140, 256 140 C 292 140, 352 180, 352 256 C 352 332, 292 372, 256 372 C 220 372, 160 332, 160 256 Z"
    fill="#FFFFFF"
    stroke="#16171A"
    stroke-width="14"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <!-- Inner construction reference cue -->
  <path
    d="M 256 190 L 256 320"
    fill="none"
    stroke="#E5E5DE"
    stroke-width="4"
    stroke-dasharray="8 8"
    stroke-linecap="round"
  />
</svg>`;
}
