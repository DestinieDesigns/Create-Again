import fs from 'fs';
import path from 'path';
import {
  CHIBI_ASSET_MANIFEST,
  CATEGORY_FOLDER_MAP,
} from '../src/data/chibiAssetManifest';

function runChibiAssetCheck() {
  console.log('\n=========================================');
  console.log('Create Again Chibi Asset Check');
  console.log('=========================================\n');

  let availableCount = 0;
  let missingCount = 0;
  let brokenPaths = 0;

  const duplicateIds: string[] = [];
  const duplicateFilenames: string[] = [];
  const seenIds = new Set<string>();
  const seenFilenames = new Set<string>();

  const missingByCategory: Record<string, string[]> = {};

  for (const asset of CHIBI_ASSET_MANIFEST) {
    // 1. Duplicate ID check
    if (seenIds.has(asset.id)) {
      duplicateIds.push(asset.id);
    } else {
      seenIds.add(asset.id);
    }

    // 2. Duplicate Filename check
    if (seenFilenames.has(asset.filename)) {
      duplicateFilenames.push(asset.filename);
    } else {
      seenFilenames.add(asset.filename);
    }

    // 3. Category validation
    if (!CATEGORY_FOLDER_MAP[asset.category]) {
      console.warn(`⚠ Unknown category for asset ${asset.id}: ${asset.category}`);
    }

    // 4. File existence check
    const fullDiskPath = path.resolve(process.cwd(), 'public' + asset.path);
    const fileExists = fs.existsSync(fullDiskPath);

    if (fileExists) {
      availableCount++;
    } else {
      missingCount++;
      if (asset.status === 'available') {
        // Declared as available but missing from disk!
        brokenPaths++;
        console.error(`✖ Broken Path: Marked available but missing on disk: ${asset.path}`);
      }

      if (!missingByCategory[asset.category]) {
        missingByCategory[asset.category] = [];
      }
      missingByCategory[asset.category].push(asset.filename);
    }
  }

  // Summary output
  console.log(`✓ ${availableCount} assets available`);
  if (missingCount > 0) {
    console.log(`⚠ ${missingCount} assets missing / in creation queue`);
  } else {
    console.log(`✓ 0 assets missing`);
  }

  if (brokenPaths === 0) {
    console.log(`✓ 0 broken paths`);
  } else {
    console.error(`✖ ${brokenPaths} broken paths detected!`);
  }

  if (duplicateIds.length === 0) {
    console.log(`✓ 0 duplicate IDs`);
  } else {
    console.error(`✖ ${duplicateIds.length} duplicate IDs: ${duplicateIds.join(', ')}`);
  }

  if (duplicateFilenames.length === 0) {
    console.log(`✓ 0 duplicate filenames`);
  } else {
    console.error(`✖ ${duplicateFilenames.length} duplicate filenames: ${duplicateFilenames.join(', ')}`);
  }

  if (Object.keys(missingByCategory).length > 0) {
    console.log('\nMissing:');
    for (const [cat, files] of Object.entries(missingByCategory)) {
      console.log(`  ${cat}:`);
      for (const f of files) {
        console.log(`    ${f}`);
      }
    }
  }

  console.log('\nAsset Check Completed.\n');

  if (brokenPaths > 0 || duplicateIds.length > 0 || duplicateFilenames.length > 0) {
    process.exit(1);
  }
}

runChibiAssetCheck();
