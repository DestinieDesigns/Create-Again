import { ChibiPartCategory } from './chibiReference';

/**
 * Section 1: The Three Core States of an Asset
 * - AVAILABLE: The actual individual asset exists and can be displayed.
 * - MISSING: The reference is defined in the data library, but the actual image asset does not exist yet.
 * - OPTIONAL: The reference has not been created yet and is not currently required for the core experience.
 * - PLACEHOLDER: Marked explicitly to show an art-directed placeholder instruction.
 */
export type ChibiAssetStatus = 'available' | 'missing' | 'optional' | 'placeholder';

/**
 * Section 8: Asset Tiers
 * - CORE: Required for the first usable version (basic heads, eyes, mouths, bodies, hands, feet, common ears, basic hair).
 * - EXPANDED: Important but added afterward (fantasy features, animal variations, creature parts, robot parts).
 * - FUTURE: Large expansion library (specialized fantasy anatomy, unusual creatures, niche accessories).
 */
export type ChibiAssetTier = 'core' | 'expanded' | 'future';

/**
 * Section 10: Missing Asset Priority Level
 */
export type ChibiAssetPriorityLevel = 'critical' | 'high' | 'medium' | 'low';

/**
 * Section 27: Asset Creation Task Status in Creation Queue
 */
export type AssetCreationTaskStatus =
  | 'not-started'
  | 'in-progress'
  | 'review'
  | 'approved'
  | 'published';

/**
 * Section 3: Central Asset Record Interface
 */
export interface ChibiAssetRecord {
  id: string;
  category: ChibiPartCategory;
  name: string;
  filename: string;
  path: string;

  status: ChibiAssetStatus;
  tier: ChibiAssetTier;
  priority: ChibiAssetPriorityLevel;
  required?: boolean;

  altText: string;
  description: string;
  drawingCue?: string; // Instructional description: "Think: A rounded body with a wider torso..."

  tags: string[];
  compatibleTypes?: string[];
  compatibleThemes?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';

  // Vector SVG content if embedded for instant zero-latency rendering
  svgContent?: string;

  createdAt?: string;
  updatedAt?: string;

  // Development & tracking metadata
  creationPhase?: 1 | 2 | 3 | 4 | 5; // Phase 1 Basic construction to Phase 5 Robot/Special
  usageCount?: number;
}

/**
 * Section 10: Asset Priority Calculation Interface
 */
export interface AssetPriority {
  usageCount: number;
  requiredForCoreJourney: boolean;
  categoryImportance: number;
  priority: ChibiAssetPriorityLevel;
}

/**
 * Section 27: Asset Creation Task for Developer Queue
 */
export interface AssetCreationTask {
  assetId: string;
  priority: ChibiAssetPriorityLevel;
  category: ChibiPartCategory;
  name: string;
  filename: string;
  path: string;
  reason: string;
  status: AssetCreationTaskStatus;
  targetPhase: 1 | 2 | 3 | 4 | 5;
  drawingCue?: string;
  notes?: string;
  assignedTo?: string;
}

/**
 * Section 9: Category Status Grouping for Missing Asset Report
 */
export interface CategoryAssetReport {
  category: ChibiPartCategory;
  categoryLabel: string;
  total: number;
  availableCount: number;
  missingCount: number;
  optionalCount: number;
  available: ChibiAssetRecord[];
  missing: ChibiAssetRecord[];
  optional: ChibiAssetRecord[];
}

/**
 * Section 21: Full Missing Asset Report
 */
export interface ChibiAssetAuditReport {
  timestamp: string;
  totalAssets: number;
  availableCount: number;
  missingCount: number;
  optionalCount: number;
  duplicateIds: string[];
  duplicateFilenames: string[];
  missingRequiredFiles: string[];
  categories: CategoryAssetReport[];
}
