import {
  ALL_500_PROMPTS,
  CATEGORY_DEFINITIONS,
  CATEGORY_COUNT_MAP,
  TOTAL_EXPECTED_PROMPTS,
  getLibraryStats,
  getPromptById,
  getPromptsByCategory,
} from './index';

console.log('--- RUNNING PROMPT MASTER LIBRARY VALIDATION TEST SUITE ---\n');

let failedTests = 0;
let passedTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    if (detail) console.error(`   Details: ${detail}`);
    failedTests++;
  }
}

// 1. Total prompt count must be exactly 500
assert(
  ALL_500_PROMPTS.length === 500,
  'Master library contains exactly 500 prompts',
  `Actual: ${ALL_500_PROMPTS.length}, Expected: 500`
);

// 2. Expected sum matches constant
assert(
  TOTAL_EXPECTED_PROMPTS === 500,
  'Category definitions sum to exactly 500',
  `Actual: ${TOTAL_EXPECTED_PROMPTS}, Expected: 500`
);

// 3. Unique IDs check
const idSet = new Set<string>();
const duplicateIds: string[] = [];
for (const p of ALL_500_PROMPTS) {
  if (idSet.has(p.id)) {
    duplicateIds.push(p.id);
  }
  idSet.add(p.id);
}
assert(
  duplicateIds.length === 0,
  'Every prompt has a globally unique ID',
  duplicateIds.length > 0 ? `Duplicates: ${duplicateIds.join(', ')}` : undefined
);
assert(
  idSet.size === 500,
  'Unique ID count is exactly 500',
  `Unique IDs: ${idSet.size}`
);

// 4. Data integrity check on all 500 prompts
let missingFieldsCount = 0;
const invalidPromptExamples: string[] = [];

for (const p of ALL_500_PROMPTS) {
  const missing: string[] = [];
  if (!p.id || typeof p.id !== 'string') missing.push('id');
  if (!p.prompt || typeof p.prompt !== 'string') missing.push('prompt');
  if (!p.category || typeof p.category !== 'string') missing.push('category');
  if (!p.explanation || typeof p.explanation !== 'string') missing.push('explanation');
  if (!p.difficulty || !['easy', 'medium', 'hard'].includes(p.difficulty)) missing.push('difficulty');
  if (!Array.isArray(p.tags) || p.tags.length === 0) missing.push('tags');
  if (!Array.isArray(p.whatToNotice) || p.whatToNotice.length < 2) missing.push('whatToNotice (<2)');
  if (!Array.isArray(p.examples) || p.examples.length < 2) missing.push('examples (<2)');
  if (!p.visualReference || typeof p.visualReference !== 'object') {
    missing.push('visualReference');
  } else {
    if (!p.visualReference.altText) missing.push('visualReference.altText');
    if (!p.visualReference.type) missing.push('visualReference.type');
    if (!p.visualReference.svgContent && !p.visualReference.filePath) {
      missing.push('visualReference missing both svgContent and filePath');
    }
  }

  if (missing.length > 0) {
    missingFieldsCount++;
    if (invalidPromptExamples.length < 5) {
      invalidPromptExamples.push(`${p.id}: ${missing.join(', ')}`);
    }
  }
}

assert(
  missingFieldsCount === 0,
  'All 500 prompts satisfy complete data integrity (required fields, examples, whatToNotice)',
  missingFieldsCount > 0 ? `Issues in: ${invalidPromptExamples.join('; ')}` : undefined
);

// 5. Category breakdown matches definition
let categoryMismatch = false;
for (const cat of CATEGORY_DEFINITIONS) {
  const actualCount = getPromptsByCategory(cat.name).length;
  if (actualCount !== cat.expectedCount) {
    console.error(`   Mismatch in "${cat.name}": Expected ${cat.expectedCount}, got ${actualCount}`);
    categoryMismatch = true;
  }
}
assert(
  !categoryMismatch,
  'All 24 categories match their designated prompt counts',
  categoryMismatch ? 'Some category counts differ' : undefined
);

// 6. Helper functions test
const testLookup = getPromptById(ALL_500_PROMPTS[0].id);
assert(
  testLookup !== undefined && testLookup.id === ALL_500_PROMPTS[0].id,
  'getPromptById correctly retrieves prompt by ID'
);

const stats = getLibraryStats();
assert(
  stats.isComplete && stats.totalPrompts === 500,
  'getLibraryStats confirms library completeness (500/500)'
);

console.log('\n--- MASTER LIBRARY SUMMARY ---');
console.log(`Total Prompts: ${stats.totalPrompts}`);
console.log(`Easy: ${stats.difficultyCounts.easy} | Medium: ${stats.difficultyCounts.medium} | Hard: ${stats.difficultyCounts.hard}`);
console.log('--------------------------------------------------\n');

if (failedTests > 0) {
  console.error(`❌ Validation finished with ${failedTests} failed assertions.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL ${passedTests} VALIDATION TESTS PASSED SUCCESSFULLY!`);
  process.exit(0);
}
