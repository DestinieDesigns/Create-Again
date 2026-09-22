import { CreativePrompt } from '../types/prompt';

export const MASTER_PROMPTS_PART_1: CreativePrompt[] = [
  // SECTION 1 — MARKS & LINES
  {
    id: 'master-01-marks',
    prompt: 'Make different kinds of marks.',
    explanation: 'Explore the full range of marks your drawing tool can make. Don’t try to draw an object yet—just test variety.',
    category: 'START',
    difficulty: 'easy',
    tags: ['marks', 'lines', 'texture', 'foundation'],
    visualReference: {
      type: 'line-art',
      title: 'Marks & Lines Reference Sheet',
      altText: 'Instructional reference showing 12 different mark types: straight, curved, short, long, thick, thin, dots, dashes, zigzags, waves, spirals, loops, and crosshatching.',
      examples: [
        'Straight & curved strokes',
        'Short tick marks vs long flowing lines',
        'Thick pressure lines vs hairline thin marks',
        'Dots, dashes, zigzags, and waves',
        'Spirals, loops, and dense crosshatching',
      ],
      whatToNotice: 'The same pencil can make many different kinds of marks simply by changing speed, angle, and hand pressure.',
      challenge: 'Fill a small corner using only three contrasting mark types.',
      svgContent: `
        <svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="5" width="410" height="160" rx="10" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="3 3" />
          <!-- Row 1: Line weights and straight/curved -->
          <g transform="translate(15, 20)">
            <line x1="10" y1="15" x2="60" y2="15" stroke="#2D2723" stroke-width="1.2" />
            <line x1="10" y1="28" x2="60" y2="28" stroke="#2D2723" stroke-width="3.5" />
            <text x="35" y="45" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">THIN / THICK</text>
          </g>
          <g transform="translate(95, 20)">
            <path d="M10 30 C 25 5, 45 5, 60 30" stroke="#2D2723" stroke-width="2" />
            <path d="M15 15 Q 35 35 55 15" stroke="#E06D53" stroke-width="2" />
            <text x="35" y="45" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">CURVES & ARCS</text>
          </g>
          <g transform="translate(175, 20)">
            <circle cx="15" cy="18" r="2.5" fill="#2D2723" />
            <circle cx="28" cy="18" r="2.5" fill="#2D2723" />
            <circle cx="41" cy="18" r="2.5" fill="#2D2723" />
            <line x1="10" y1="30" x2="22" y2="30" stroke="#2D2723" stroke-width="2" />
            <line x1="28" y1="30" x2="40" y2="30" stroke="#2D2723" stroke-width="2" />
            <line x1="46" y1="30" x2="58" y2="30" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="45" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">DOTS & DASHES</text>
          </g>
          <g transform="translate(255, 20)">
            <path d="M5 25 L15 10 L25 25 L35 10 L45 25 L55 10 L65 25" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="45" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">ZIGZAGS</text>
          </g>
          <g transform="translate(335, 20)">
            <path d="M5 18 Q 15 5 25 18 T 45 18 T 65 18" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="45" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">WAVES</text>
          </g>
          <!-- Row 2: Spirals, Loops, Crosshatch -->
          <g transform="translate(30, 85)">
            <path d="M35 25 A 6 6 0 0 1 29 19 A 12 12 0 0 1 41 7 A 18 18 0 0 1 53 25 A 24 24 0 0 1 29 43" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="58" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SPIRAL</text>
          </g>
          <g transform="translate(130, 85)">
            <path d="M10 25 C15 5 25 5 25 25 C25 45 35 5 45 25 C55 45 65 15 70 25" stroke="#2D2723" stroke-width="2" />
            <text x="40" y="58" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">LOOPS</text>
          </g>
          <g transform="translate(230, 85)">
            <line x1="10" y1="10" x2="50" y2="40" stroke="#2D2723" stroke-width="1.5" />
            <line x1="20" y1="10" x2="60" y2="40" stroke="#2D2723" stroke-width="1.5" />
            <line x1="30" y1="10" x2="70" y2="40" stroke="#2D2723" stroke-width="1.5" />
            <line x1="10" y1="40" x2="50" y2="10" stroke="#E06D53" stroke-width="1.5" />
            <line x1="20" y1="40" x2="60" y2="10" stroke="#E06D53" stroke-width="1.5" />
            <line x1="30" y1="40" x2="70" y2="10" stroke="#E06D53" stroke-width="1.5" />
            <text x="40" y="58" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">CROSSHATCH</text>
          </g>
          <g transform="translate(330, 85)">
            <line x1="10" y1="25" x2="20" y2="25" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="25" x2="65" y2="25" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="58" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SHORT / LONG</text>
          </g>
        </svg>
      `,
    },
  },
  {
    id: 'master-02-line-transform',
    prompt: 'Turn a line into something.',
    explanation: 'Take a single line stroke and imagine it as the foundation of an object or creature.',
    category: 'TRANSFORM',
    difficulty: 'easy',
    tags: ['line', 'transform', 'creativity', 'imagination'],
    visualReference: {
      type: 'step-by-step',
      title: 'Line Transformation Variations',
      altText: 'Reference sheet comparing simple lines side-by-side with their transformed shapes: curve into snake, straight line into stick, zigzag into mountain, wavy line into wave, spiral into snail shell.',
      examples: [
        'Curved line → snake or tail',
        'Straight line → walking stick or flagpole',
        'Zigzag line → mountain range or jagged lightning',
        'Wavy line → ocean wave or ribbon',
        'Spiral → snail shell or coiled rope',
        'Loop → mug handle or cartoon nose',
      ],
      whatToNotice: 'Every finished drawing starts as a humble mark. One stroke contains the spark of an entire subject.',
      challenge: 'Draw one loose squiggle, then add only two details to give it life.',
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <!-- Item 1: Curve to Snake -->
          <g transform="translate(15, 15)">
            <path d="M5 45 Q 25 15 45 45" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <text x="25" y="65" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">CURVE</text>
            <path d="M35 30 L45 30 L40 25" stroke="#E06D53" stroke-width="1.5" />
            <path d="M55 45 Q 75 15 95 45" stroke="#2D2723" stroke-width="3" />
            <circle cx="95" cy="43" r="3" fill="#2D2723" />
            <path d="M98 43 L105 40 M98 43 L105 45" stroke="#E06D53" stroke-width="1.2" />
            <text x="75" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ SNAKE</text>
          </g>
          <!-- Item 2: Zigzag to Mountain -->
          <g transform="translate(150, 15)">
            <path d="M10 45 L 25 20 L 40 45" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <text x="25" y="65" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">ZIGZAG</text>
            <path d="M55 45 L 75 15 L 95 45" stroke="#2D2723" stroke-width="2.5" />
            <path d="M75 15 L 70 26 L 80 28 L 75 35" stroke="#E06D53" stroke-width="1.5" />
            <text x="75" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ MOUNTAIN</text>
          </g>
          <!-- Item 3: Spiral to Snail -->
          <g transform="translate(290, 15)">
            <path d="M25 40 A 6 6 0 0 1 20 35 A 12 12 0 0 1 32 23 A 16 16 0 0 1 42 40" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <text x="25" y="65" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">SPIRAL</text>
            <path d="M65 40 A 6 6 0 0 1 60 35 A 12 12 0 0 1 72 23 A 16 16 0 0 1 82 40" stroke="#2D2723" stroke-width="2.5" />
            <path d="M50 42 C 55 35 60 42 90 42 C 96 42 98 32 94 30" stroke="#2D2723" stroke-width="2" />
            <circle cx="93" cy="27" r="1.5" fill="#2D2723" />
            <text x="75" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ SNAIL</text>
          </g>
        </svg>
      `,
    },
  },
  {
    id: 'master-03-size-direction',
    prompt: 'Change the size and direction of your lines.',
    explanation: 'Lines gain energy when you contrast long with short, horizontal with vertical, and straight with curved.',
    category: 'CHANGE',
    difficulty: 'easy',
    tags: ['lines', 'rhythm', 'contrast', 'direction'],
    visualReference: {
      type: 'diagram',
      title: 'Line Size & Direction Shifts',
      altText: 'Diagram with arrows demonstrating small-to-large, short-to-long, horizontal-to-vertical, straight-to-curved, and thin-to-thick line shifts.',
      examples: [
        'Small → Large (growing scale)',
        'Short → Long (accelerating movement)',
        'Horizontal → Vertical (stability to upright energy)',
        'Straight → Curved (structure to softness)',
        'Thin → Thick (increasing weight)',
      ],
      whatToNotice: 'Directional contrast guides the eye across your page. Parallel lines feel quiet; opposing lines create tension.',
      challenge: 'Create a line that starts thin and straight, then explodes into thick curves.',
      svgContent: `
        <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <!-- Short to Long -->
          <g transform="translate(20, 20)">
            <line x1="10" y1="20" x2="20" y2="20" stroke="#2D2723" stroke-width="2" />
            <line x1="10" y1="35" x2="35" y2="35" stroke="#2D2723" stroke-width="2" />
            <line x1="10" y1="50" x2="60" y2="50" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SHORT → LONG</text>
          </g>
          <!-- Horizontal to Vertical -->
          <g transform="translate(145, 20)">
            <line x1="10" y1="45" x2="50" y2="45" stroke="#8C7E72" stroke-width="2" />
            <path d="M45 40 Q 55 30 50 15" stroke="#E06D53" stroke-width="1.5" stroke-dasharray="2 2" />
            <line x1="50" y1="10" x2="50" y2="50" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">HORIZ → VERT</text>
          </g>
          <!-- Straight to Curved -->
          <g transform="translate(270, 20)">
            <line x1="10" y1="30" x2="40" y2="30" stroke="#8C7E72" stroke-width="2" />
            <path d="M45 30 C 55 10, 75 50, 85 30" stroke="#2D2723" stroke-width="2.5" />
            <text x="45" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">STRAIGHT → CURVE</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 2 — SHAPES
  {
    id: 'master-04-circle-transform',
    prompt: 'Turn a circle into something recognizable.',
    explanation: 'A circle is an open vessel waiting for identity. Add minimal interior lines or silhouettes to turn it into an object.',
    category: 'TRANSFORM',
    difficulty: 'easy',
    tags: ['circle', 'shape', 'transform', 'object'],
    visualReference: {
      type: 'shape',
      title: 'Circle Transformation Variations',
      altText: 'Instructional sketch showing one base circle turning into 6 different possibilities: face, ball, sun, apple, eye, and wheel.',
      examples: [
        'Circle → Face (two dots and a smile)',
        'Circle → Ball (curved seam lines for sports or play)',
        'Circle → Sun (radiating strokes around the perimeter)',
        'Circle → Apple (stem and leaf indentation at the top)',
        'Circle → Eye (pupil inside, lids wrapping outside)',
        'Circle → Wheel (hub and radiating spokes)',
      ],
      whatToNotice: 'The boundary is identical in each example. Only the details inside and immediately around it define what the object is.',
      challenge: 'Pick the least expected circle transformation—like a coin or an open portal.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Sun -->
          <g transform="translate(15, 20)">
            <circle cx="28" cy="28" r="18" stroke="#2D2723" />
            <path d="M28 4 v-4 M28 52 v4 M4 28 h-4 M52 28 h4 M11 11 L8 8 M45 45 L48 48 M45 11 L48 8 M11 45 L8 48" stroke="#E06D53" stroke-width="1.8" />
            <text x="28" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SUN</text>
          </g>
          <!-- Apple -->
          <g transform="translate(85, 20)">
            <circle cx="28" cy="28" r="18" stroke="#2D2723" />
            <path d="M28 10 C 26 5 30 2 32 0" stroke="#2D2723" stroke-width="2" />
            <path d="M30 4 Q 38 4 36 8 Z" fill="#E06D53" stroke="#E06D53" stroke-width="1" />
            <text x="28" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">APPLE</text>
          </g>
          <!-- Eye -->
          <g transform="translate(155, 20)">
            <circle cx="28" cy="28" r="18" stroke="#2D2723" />
            <circle cx="28" cy="28" r="7" fill="#2D2723" />
            <circle cx="26" cy="26" r="2" fill="#FCFAF6" stroke="none" />
            <text x="28" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">EYE</text>
          </g>
          <!-- Wheel -->
          <g transform="translate(225, 20)">
            <circle cx="28" cy="28" r="18" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="28" cy="28" r="4" fill="#2D2723" />
            <line x1="28" y1="10" x2="28" y2="46" stroke="#8C7E72" />
            <line x1="10" y1="28" x2="46" y2="28" stroke="#8C7E72" />
            <text x="28" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">WHEEL</text>
          </g>
          <!-- Face -->
          <g transform="translate(295, 20)">
            <circle cx="28" cy="28" r="18" stroke="#2D2723" />
            <circle cx="22" cy="24" r="2" fill="#2D2723" />
            <circle cx="34" cy="24" r="2" fill="#2D2723" />
            <path d="M22 34 Q 28 39 34 34" stroke="#E06D53" stroke-width="1.8" />
            <text x="28" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">FACE</text>
          </g>
          <!-- Ball -->
          <g transform="translate(365, 20)">
            <circle cx="20" cy="28" r="18" stroke="#2D2723" />
            <path d="M10 16 C 22 20 22 36 10 40" stroke="#8C7E72" stroke-width="1.5" />
            <path d="M30 16 C 18 20 18 36 30 40" stroke="#8C7E72" stroke-width="1.5" />
            <text x="20" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">BALL</text>
          </g>
        </svg>
      `,
    },
  },
  {
    id: 'master-05-combine-shapes',
    prompt: 'Combine simple shapes to make an object.',
    explanation: 'Every manufactured object and living creature can be broken down into circles, squares, rectangles, and triangles.',
    category: 'CONNECT',
    difficulty: 'easy',
    tags: ['shapes', 'construction', 'primitives', 'objects'],
    visualReference: {
      type: 'step-by-step',
      title: 'Shape Combination Construction',
      altText: 'Instructional breakdown showing primitives combining into everyday objects: circle + rectangle equals cup; triangle + rectangle equals house; oval + triangles equals fish; rectangle + circles equals robot.',
      examples: [
        'Circle + Rectangle → Coffee mug',
        'Triangle + Rectangle → House or barn',
        'Oval + Triangles → Swimming fish',
        'Circle + Lines → Spider or sun',
        'Rectangle + Circles → Wheeled cart or robot body',
      ],
      whatToNotice: 'Look at the world as basic primitives first. Draw the underlying shapes lightly, then ink the contours.',
      challenge: 'Combine exactly one square, one triangle, and one oval into a vehicle.',
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- House: Triangle + Rectangle -->
          <g transform="translate(20, 15)">
            <path d="M10 35 L 35 15 L 60 35" stroke="#E06D53" stroke-width="2" />
            <rect x="15" y="35" width="40" height="35" stroke="#2D2723" stroke-width="2" />
            <rect x="28" y="50" width="14" height="20" stroke="#2D2723" stroke-width="1.5" />
            <text x="35" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">△ + ▭ = HOUSE</text>
          </g>
          <!-- Fish: Oval + Triangle -->
          <g transform="translate(150, 15)">
            <ellipse cx="40" cy="40" rx="25" ry="16" stroke="#2D2723" stroke-width="2" />
            <path d="M16 40 L 0 25 L 0 55 Z" stroke="#E06D53" stroke-width="2" />
            <circle cx="53" cy="36" r="2.5" fill="#2D2723" />
            <text x="35" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">⬭ + △ = FISH</text>
          </g>
          <!-- Cup: Rectangle + Arc -->
          <g transform="translate(280, 15)">
            <rect x="15" y="25" width="36" height="42" rx="4" stroke="#2D2723" stroke-width="2" />
            <path d="M51 32 C 63 32 63 52 51 52" stroke="#E06D53" stroke-width="2" />
            <ellipse cx="33" cy="25" rx="18" ry="4" stroke="#8C7E72" stroke-width="1.5" />
            <text x="35" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">▭ + ◯ = MUG</text>
          </g>
        </svg>
      `,
    },
  },
  {
    id: 'master-06-random-shape-blob',
    prompt: 'Turn a random shape into something.',
    explanation: 'Draw an uneven blob with your eyes half-closed. There is no wrong silhouette—rotate your paper until you see something in it.',
    category: 'TRANSFORM',
    difficulty: 'easy',
    tags: ['blob', 'imagination', 'pareidolia', 'organic'],
    visualReference: {
      type: 'shape',
      title: 'Blob to Subject Interpretations',
      altText: 'Diagram demonstrating three strange irregular blobs: one becomes a smiling monster, another becomes a shoe, a third becomes a cloud or floating island.',
      examples: [
        'Blob → Friendly creature or monster',
        'Blob → Old shoe or boot',
        'Blob → Fluffy cloud or floating island',
        'Blob → Potted succulent or leaf cluster',
        'Blob → Weathered garden rock or meteorite',
      ],
      whatToNotice: 'There is never a single "correct" answer to an irregular contour. Your subconscious will find familiar features if you relax your gaze.',
      challenge: 'Turn your paper upside down before deciding what the blob is.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Blob 1: Creature -->
          <g transform="translate(25, 15)">
            <path d="M15 45 C 5 25, 25 5, 50 15 C 75 5, 80 40, 70 55 C 55 70, 25 65, 15 45 Z" stroke="#8C7E72" stroke-dasharray="3 3" />
            <circle cx="35" cy="30" r="3" fill="#2D2723" />
            <circle cx="52" cy="32" r="3" fill="#2D2723" />
            <path d="M38 45 Q 45 52 54 45" stroke="#E06D53" stroke-width="2" />
            <path d="M15 45 C 5 25, 25 5, 50 15 C 75 5, 80 40, 70 55 C 55 70, 25 65, 15 45 Z" stroke="#2D2723" stroke-width="2.5" />
            <text x="45" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BLOB → CREATURE</text>
          </g>
          <!-- Blob 2: Shoe -->
          <g transform="translate(160, 15)">
            <path d="M10 35 C 15 15, 35 15, 40 30 C 55 28, 85 45, 85 55 C 75 62, 20 62, 10 55 Z" stroke="#2D2723" stroke-width="2.5" />
            <line x1="12" y1="56" x2="83" y2="56" stroke="#E06D53" stroke-width="2" />
            <path d="M30 32 L 35 40 M 35 32 L 40 40" stroke="#8C7E72" stroke-width="1.5" />
            <text x="45" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BLOB → BOOT</text>
          </g>
          <!-- Blob 3: Island / Rock -->
          <g transform="translate(290, 15)">
            <path d="M15 40 C 25 15, 65 10, 80 35 C 90 55, 60 65, 25 60 C 10 55, 5 45, 15 40 Z" stroke="#2D2723" stroke-width="2.5" />
            <path d="M45 22 L 45 10 M 40 12 L 45 10 L 50 14" stroke="#E06D53" stroke-width="1.8" />
            <line x1="20" y1="48" x2="40" y2="48" stroke="#8C7E72" />
            <line x1="50" y1="42" x2="70" y2="42" stroke="#8C7E72" />
            <text x="45" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BLOB → ISLAND</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 3 — SNOUTS, BEAKS & SHARP CORNERS
  {
    id: 'master-07-snout-beak-corner',
    prompt: 'Turn a sharp corner into a snout or beak.',
    explanation: 'A simple wedge corner is the foundation for an animal face or bird beak. Curve, length, and width define the animal species.',
    category: 'TRANSFORM',
    difficulty: 'easy',
    tags: ['corner', 'snout', 'beak', 'animals', 'angle'],
    visualReference: {
      type: 'step-by-step',
      title: 'Corner to Beak & Snout Transformations',
      altText: 'Instructional diagram showing how a simple angled wedge corner transforms into a rounded canine muzzle, crocodile snout, toucan beak, hooked raptor beak, and duck bill.',
      examples: [
        'Short rounded snout (dog, bear, cat)',
        'Long narrow snout (wolf, crocodile, alligator)',
        'Hooked raptor beak (eagle, hawk, owl)',
        'Large curved bill (toucan, hornbill)',
        'Flat rounded bill (duck, platypus)',
        'Small sharp wedge (sparrow, chick)',
      ],
      whatToNotice: 'ANGLE controls direction. SIZE controls proportion. WIDTH controls species character. CURVE separates soft mammals from sharp birds.',
      challenge: 'Give the snout a tiny nostril dot and a whisker line.',
      svgContent: `
        <svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Foundation Angle -->
          <g transform="translate(15, 20)">
            <path d="M10 60 L 50 15 L 70 60" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <text x="45" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">BASE CORNER</text>
          </g>
          <!-- Hooked Beak -->
          <g transform="translate(100, 20)">
            <path d="M10 50 C 25 35, 45 25, 60 40 C 65 48, 60 55, 52 50 C 40 45, 25 48, 10 50" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="28" cy="30" r="3" fill="#2D2723" />
            <text x="35" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HOOKED (EAGLE)</text>
          </g>
          <!-- Toucan Large Bill -->
          <g transform="translate(205, 20)">
            <path d="M10 20 C 35 15, 60 25, 75 55 C 50 50, 25 45, 10 40 Z" stroke="#2D2723" stroke-width="2.5" />
            <line x1="10" y1="32" x2="72" y2="52" stroke="#E06D53" stroke-width="1.8" />
            <circle cx="14" cy="18" r="3" fill="#2D2723" />
            <text x="42" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CURVED (TOUCAN)</text>
          </g>
          <!-- Rounded Dog/Bear Snout -->
          <g transform="translate(315, 20)">
            <path d="M10 25 C 25 22, 50 25, 55 40 C 58 48, 45 52, 35 50 C 25 48, 15 50, 10 52" stroke="#2D2723" stroke-width="2.5" />
            <ellipse cx="50" cy="36" rx="4" ry="3" fill="#E06D53" stroke="none" />
            <path d="M48 42 Q 40 46 32 44" stroke="#2D2723" stroke-width="1.5" />
            <circle cx="20" cy="22" r="3" fill="#2D2723" />
            <text x="35" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ROUND SNOUT (BEAR)</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 4 — CHARACTER DESIGN: HEAD SHAPES & HEAD ANGLES
  {
    id: 'master-08-head-shapes',
    prompt: 'Draw a head.',
    explanation: 'Never limit yourself to a default circle. The skull contour establishes age, weight, personality, and mood before features are drawn.',
    category: 'START',
    difficulty: 'easy',
    tags: ['head', 'character', 'silhouette', 'construction'],
    visualReference: {
      type: 'shape',
      title: 'Head Silhouette Variations & Angles',
      altText: 'Reference sheet comparing 6 distinct skull silhouettes: round, square, triangle, oval, pear, and inverted wedge, plus angles showing center and eye lines.',
      examples: [
        'Round (friendly, youthful, approachable)',
        'Square / boxy (sturdy, stubborn, grounded)',
        'Inverted triangle (clever, fast, agile)',
        'Pear-shaped (heavy jaw, hearty, comedic)',
        'Long oval (dignified, tired, wise)',
        'Angles: Front, 3/4 view, Profile, Looking up/down',
      ],
      whatToNotice: 'A head shape can turn in space. A faint vertical center line and horizontal eye line show which direction the head is facing.',
      challenge: 'Draw one wide jaw head next to one sharp pointed chin head.',
      beginnerTerms: [
        { term: 'Center Line', definition: 'The curved line dividing the left and right halves of a face.' },
        { term: 'Eye Line', definition: 'The horizontal guide line showing where both eyes rest.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Circle Head -->
          <g transform="translate(15, 15)">
            <circle cx="30" cy="35" r="28" stroke="#2D2723" stroke-width="2.5" />
            <path d="M30 7 v56 M6 35 h48" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
            <text x="30" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">ROUND</text>
          </g>
          <!-- Square Jaw -->
          <g transform="translate(85, 15)">
            <rect x="5" y="10" width="50" height="50" rx="8" stroke="#2D2723" stroke-width="2.5" />
            <path d="M30 10 v50 M5 35 h50" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
            <text x="30" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SQUARE</text>
          </g>
          <!-- Wedge Triangle -->
          <g transform="translate(155, 15)">
            <path d="M5 12 L55 12 L30 62 Z" stroke="#2D2723" stroke-width="2.5" />
            <path d="M30 12 v50 M12 32 h36" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
            <text x="30" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">TRIANGLE</text>
          </g>
          <!-- Pear / Heavy Jaw -->
          <g transform="translate(225, 15)">
            <path d="M30 10 C20 10 15 25 15 35 C10 45 8 60 30 60 C52 60 50 45 45 35 C45 25 40 10 30 10 Z" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">PEAR</text>
          </g>
          <!-- 3/4 Turn -->
          <g transform="translate(305, 15)">
            <circle cx="35" cy="35" r="28" stroke="#2D2723" stroke-width="2.5" />
            <path d="M25 7 C20 25 20 45 25 63 M7 35 Q 35 42 63 35" stroke="#E06D53" stroke-width="1.5" />
            <text x="35" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">3/4 TURN</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 5 — EYES
  {
    id: 'master-09-eyes',
    prompt: 'Give your character eyes.',
    explanation: 'Eyes carry character focus. Big, small, wide-spaced, or narrow slits completely transform the age and personality.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['eyes', 'face', 'expression', 'character'],
    visualReference: {
      type: 'line-art',
      title: 'Eye Stylization Variations',
      altText: 'Visual reference comparing 8 eye designs: simple dots, round cartoon eyes, narrow slits, droopy eyes, sharp angular eyes, wide-spaced, and close-set eyes.',
      examples: [
        'Simple dots (classic cartoon, gentle, minimal)',
        'Large round circles (curious, surprised, child-like)',
        'Narrow almond slits (suspicious, focused, calm)',
        'Droopy lower lids (tired, sad, mellow)',
        'Sharp angular shapes (intense, villainous, energetic)',
        'Wide-spaced eyes vs Close-set eyes',
      ],
      whatToNotice: 'Look at the direction of the pupils. Characters look wherever the black pupil dot is aimed.',
      challenge: 'Draw one eye slightly larger than the other for an inquiring, skeptical look.',
      svgContent: `
        <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Dots -->
          <g transform="translate(15, 20)">
            <circle cx="20" cy="30" r="3" fill="#2D2723" />
            <circle cx="45" cy="30" r="3" fill="#2D2723" />
            <text x="32" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SIMPLE DOTS</text>
          </g>
          <!-- Wide Circles -->
          <g transform="translate(90, 20)">
            <circle cx="18" cy="30" r="10" stroke="#2D2723" />
            <circle cx="46" cy="30" r="10" stroke="#2D2723" />
            <circle cx="20" cy="30" r="4" fill="#2D2723" />
            <circle cx="48" cy="30" r="4" fill="#2D2723" />
            <text x="32" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">WIDE CIRCLES</text>
          </g>
          <!-- Narrow Slits -->
          <g transform="translate(180, 20)">
            <path d="M8 30 Q 20 22 32 30 Q 20 38 8 30" stroke="#2D2723" />
            <path d="M40 30 Q 52 22 64 30 Q 52 38 40 30" stroke="#2D2723" />
            <circle cx="20" cy="30" r="2.5" fill="#2D2723" />
            <circle cx="52" cy="30" r="2.5" fill="#2D2723" />
            <text x="36" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">NARROW SLITS</text>
          </g>
          <!-- Droopy Lids -->
          <g transform="translate(280, 20)">
            <path d="M10 25 Q 22 38 34 28" stroke="#2D2723" stroke-width="2.5" />
            <path d="M44 28 Q 56 38 68 25" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="22" cy="28" r="2.5" fill="#2D2723" />
            <circle cx="56" cy="28" r="2.5" fill="#2D2723" />
            <text x="39" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">DROOPY / SLEEPY</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 6 — EYEBROWS
  {
    id: 'master-10-eyebrows',
    prompt: 'Change the eyebrows to change the feeling.',
    explanation: 'The eyebrow line is the single fastest emotion switch on a face. Angle inward, slant upward, or raise high to alter the mood.',
    category: 'CHANGE',
    difficulty: 'easy',
    tags: ['eyebrows', 'emotion', 'expression', 'face'],
    visualReference: {
      type: 'line-art',
      title: 'Eyebrow Direction & Emotion Matrix',
      altText: 'Instructional chart showing how eyebrow slants dictate feelings: neutral flat, angry inward slant, sad upward slant, surprised high arch, suspicious one-up one-down.',
      examples: [
        'Neutral: horizontal resting lines',
        'Angry: angled sharply downward toward the nose',
        'Sad / Worried: raised at center, sloping downward outward',
        'Surprised: arched high above the eye level',
        'Confused / Skeptical: one brow raised high, one pulled low',
        'Determined: low, flat, pressed hard against the eyes',
      ],
      whatToNotice: 'Small changes in angle can change the expression entirely. Watch the distance between the brow and the eye pupil.',
      challenge: 'Draw one eyebrow arched so high it lifts off the forehead.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Angry -->
          <g transform="translate(20, 20)">
            <line x1="8" y1="18" x2="28" y2="28" stroke="#E06D53" stroke-width="3" />
            <line x1="52" y1="28" x2="32" y2="18" stroke="#E06D53" stroke-width="3" />
            <circle cx="18" cy="38" r="2" fill="#2D2723" />
            <circle cx="42" cy="38" r="2" fill="#2D2723" />
            <text x="30" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">ANGRY (DOWN IN)</text>
          </g>
          <!-- Sad / Worried -->
          <g transform="translate(120, 20)">
            <line x1="8" y1="28" x2="28" y2="18" stroke="#2D2723" stroke-width="2.5" />
            <line x1="52" y1="18" x2="32" y2="28" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="18" cy="38" r="2" fill="#2D2723" />
            <circle cx="42" cy="38" r="2" fill="#2D2723" />
            <text x="30" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SAD (UP IN)</text>
          </g>
          <!-- Surprised -->
          <g transform="translate(220, 20)">
            <path d="M8 18 Q 18 10 28 18" stroke="#2D2723" stroke-width="2.5" />
            <path d="M32 18 Q 42 10 52 18" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="18" cy="38" r="3" fill="#2D2723" />
            <circle cx="42" cy="38" r="3" fill="#2D2723" />
            <text x="30" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SURPRISED (HIGH)</text>
          </g>
          <!-- Skeptical -->
          <g transform="translate(320, 20)">
            <path d="M8 12 Q 18 6 28 14" stroke="#E06D53" stroke-width="2.5" />
            <line x1="32" y1="28" x2="52" y2="28" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="18" cy="34" r="2" fill="#2D2723" />
            <circle cx="42" cy="38" r="2" fill="#2D2723" />
            <text x="30" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SKEPTICAL (ASYM)</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 7 — NOSES
  {
    id: 'master-11-noses',
    prompt: 'Give your character a nose.',
    explanation: 'A nose can be as tiny as a dot or as dominant as a beak. It anchors the center of the face.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['nose', 'face', 'anatomy', 'character'],
    visualReference: {
      type: 'line-art',
      title: 'Nose Construction Variations',
      altText: 'Reference sheet illustrating small dot nose, simple line nose, triangle wedge nose, rounded button nose, long slender nose, and side-profile upturned nose.',
      examples: [
        'Small dot or double nostril dots',
        'Simple "L" or vertical stroke',
        'Triangle or angular wedge',
        'Button / circular rounded nose',
        'Long prominent bridge nose',
        'Upturned / snub nose',
      ],
      whatToNotice: 'From the front, a nose can be drawn with minimal lines or just a shadow under the tip.',
      challenge: 'Draw a nose that overlaps the mouth line.',
      svgContent: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Dot -->
          <g transform="translate(20, 15)">
            <circle cx="20" cy="30" r="2.5" fill="#2D2723" />
            <text x="20" y="60" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">DOT</text>
          </g>
          <!-- L-Shape -->
          <g transform="translate(85, 15)">
            <path d="M15 15 L 15 35 L 25 35" stroke="#2D2723" stroke-width="2" />
            <text x="20" y="60" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">"L" LINE</text>
          </g>
          <!-- Button -->
          <g transform="translate(150, 15)">
            <circle cx="20" cy="30" r="7" stroke="#2D2723" stroke-width="2" />
            <path d="M10 32 Q 7 35 12 37 M 30 32 Q 33 35 28 37" stroke="#8C7E72" stroke-width="1.5" />
            <text x="20" y="60" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">BUTTON</text>
          </g>
          <!-- Triangle -->
          <g transform="translate(225, 15)">
            <polygon points="12,18 28,18 20,36" stroke="#E06D53" stroke-width="2" fill="#E06D53" fill-opacity="0.1" />
            <text x="20" y="60" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">TRIANGLE</text>
          </g>
          <!-- Long Bridge -->
          <g transform="translate(305, 15)">
            <path d="M18 10 L 14 36 L 24 38 L 18 42" stroke="#2D2723" stroke-width="2" />
            <text x="20" y="60" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">LONG BRIDGE</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 8 — MOUTHS
  {
    id: 'master-12-mouths',
    prompt: 'Give your character a mouth.',
    explanation: 'The mouth delivers dialogue, energy, and reaction. It can range from a neutral slit to a gaping shout.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['mouth', 'face', 'expression', 'character'],
    visualReference: {
      type: 'line-art',
      title: 'Mouth Expressions & Shapes',
      altText: 'Instructional reference showing mouth variations: straight line, gentle smile, wide smile, open "O" gasp, smirk, toothy grin, and sticking tongue out.',
      examples: [
        'Straight line (calm, neutral, serious)',
        'Gentle upward curve (happy, content)',
        'Downward curve (disappointed, pouty)',
        'Open "O" shape (surprised, singing, gasping)',
        'Side smirk (mischievous, confident)',
        'Teeth grid showing (tense, excited, grinning)',
      ],
      whatToNotice: 'Mouth shape changes expression instantly. Adding tiny corner tick lines makes a smile or smirk feel warmer and more natural.',
      challenge: 'Draw an open mouth showing two buck teeth.',
      svgContent: `
        <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Straight -->
          <g transform="translate(15, 20)">
            <line x1="10" y1="30" x2="40" y2="30" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">STRAIGHT</text>
          </g>
          <!-- Smile -->
          <g transform="translate(85, 20)">
            <path d="M10 26 Q 25 40 40 26" stroke="#2D2723" stroke-width="2.5" />
            <line x1="8" y1="24" x2="10" y2="28" stroke="#8C7E72" stroke-width="1.5" />
            <line x1="42" y1="24" x2="40" y2="28" stroke="#8C7E72" stroke-width="1.5" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SMILE</text>
          </g>
          <!-- Open Gasp -->
          <g transform="translate(160, 20)">
            <ellipse cx="25" cy="30" rx="9" ry="13" stroke="#2D2723" stroke-width="2.2" fill="#2D2723" fill-opacity="0.1" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">OPEN "O"</text>
          </g>
          <!-- Smirk -->
          <g transform="translate(235, 20)">
            <path d="M12 34 Q 25 34 38 24" stroke="#E06D53" stroke-width="2.5" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">SMIRK</text>
          </g>
          <!-- Teeth Grin -->
          <g transform="translate(315, 20)">
            <path d="M8 26 Q 25 40 42 26 Z" stroke="#2D2723" stroke-width="2" />
            <line x1="8" y1="28" x2="42" y2="28" stroke="#8C7E72" />
            <line x1="25" y1="26" x2="25" y2="34" stroke="#8C7E72" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">TEETH GRIN</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 9 — FACIAL EXPRESSIONS
  {
    id: 'master-13-expressions',
    prompt: 'Give your character a feeling.',
    explanation: 'A true facial expression coordinates eyebrows, eyes, and mouth together—never change only the mouth.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    tags: ['emotion', 'expression', 'face', 'character', 'acting'],
    visualReference: {
      type: 'multiple',
      title: 'Full Facial Expression Combinations',
      altText: 'Instructional panel demonstrating complete facial coordination for Happy, Angry, Surprised, Sad, Curious, and Nervous feelings.',
      examples: [
        'Happy: arched brows, smiling curved eyes, open smile',
        'Angry: down-turned slanted brows, narrowed eyes, tense flat mouth',
        'Surprise: high raised brows, wide round eyes, dropped open jaw',
        'Sad: inward sloping brows, soft heavy lids, down-turned mouth',
        'Curious: one raised brow, one wide eye, crooked mouth',
        'Nervous: wavy eyebrows, tiny dot pupils, tight squiggly mouth',
      ],
      whatToNotice: 'Notice how all three features (brows, eyes, and mouth) agree with each other. When they conflict, the character looks complicated or ironic.',
      challenge: 'Draw a character attempting to hide their laughter.',
      beginnerTerms: [
        { term: 'Gesture', definition: 'A quick drawing showing how the body or face moves and feels.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Happy -->
          <g transform="translate(15, 15)">
            <circle cx="30" cy="35" r="26" stroke="#2D2723" />
            <path d="M18 25 Q 24 20 30 25 M 34 25 Q 40 20 46 25" stroke="#2D2723" stroke-width="2" />
            <path d="M20 42 Q 32 54 44 42" stroke="#E06D53" stroke-width="2.5" />
            <text x="32" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HAPPY</text>
          </g>
          <!-- Angry -->
          <g transform="translate(90, 15)">
            <circle cx="30" cy="35" r="26" stroke="#2D2723" />
            <line x1="16" y1="22" x2="28" y2="28" stroke="#2D2723" stroke-width="2.5" />
            <line x1="44" y1="22" x2="32" y2="28" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="23" cy="32" r="2" fill="#2D2723" />
            <circle cx="37" cy="32" r="2" fill="#2D2723" />
            <line x1="22" y1="46" x2="38" y2="46" stroke="#E06D53" stroke-width="2.5" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ANGRY</text>
          </g>
          <!-- Surprised -->
          <g transform="translate(165, 15)">
            <circle cx="30" cy="35" r="26" stroke="#2D2723" />
            <path d="M18 18 Q 23 12 28 18 M 32 18 Q 37 12 42 18" stroke="#2D2723" stroke-width="2" />
            <circle cx="23" cy="28" r="3.5" stroke="#2D2723" fill="#2D2723" />
            <circle cx="37" cy="28" r="3.5" stroke="#2D2723" fill="#2D2723" />
            <ellipse cx="30" cy="46" rx="6" ry="8" stroke="#E06D53" stroke-width="2" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SURPRISE</text>
          </g>
          <!-- Sad -->
          <g transform="translate(240, 15)">
            <circle cx="30" cy="35" r="26" stroke="#2D2723" />
            <line x1="18" y1="28" x2="28" y2="22" stroke="#2D2723" stroke-width="2" />
            <line x1="42" y1="28" x2="32" y2="22" stroke="#2D2723" stroke-width="2" />
            <circle cx="23" cy="34" r="2" fill="#2D2723" />
            <circle cx="37" cy="34" r="2" fill="#2D2723" />
            <path d="M22 48 Q 30 42 38 48" stroke="#E06D53" stroke-width="2.5" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SAD</text>
          </g>
          <!-- Curious -->
          <g transform="translate(315, 15)">
            <circle cx="30" cy="35" r="26" stroke="#2D2723" />
            <path d="M16 16 Q 22 10 28 16" stroke="#E06D53" stroke-width="2.5" />
            <line x1="32" y1="26" x2="44" y2="26" stroke="#2D2723" stroke-width="2" />
            <circle cx="22" cy="28" r="3.5" fill="#2D2723" />
            <circle cx="38" cy="30" r="2" fill="#2D2723" />
            <path d="M24 46 Q 32 46 40 40" stroke="#2D2723" stroke-width="2" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">CURIOUS</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 10 — HAIR
  {
    id: 'master-14-hair',
    prompt: 'Give your character hair.',
    explanation: 'Think of hair as big chunks and silhouettes wrapping around the skull, rather than drawing thousands of individual single hairs.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['hair', 'character', 'costume', 'silhouette'],
    visualReference: {
      type: 'shape',
      title: 'Hair Silhouettes & Mass Construction',
      altText: 'Reference sheet comparing hair masses: short spiky, long flowing waves, braided bun, afro volume silhouette, buzz cut, and messy top-knot.',
      examples: [
        'Short spiky chunks (energetic, modern)',
        'Long flowing waves (flowing around shoulders)',
        'Voluminous afro or curl puff (large circular silhouette)',
        'Braided coils or dreadlocks (rhythmic segmented cylinders)',
        'High bun or topknot (simple sphere perched on skull)',
        'Buzz cut / shaved sides with texture dots',
      ],
      whatToNotice: 'Hair has volume. It always sits slightly outside the head contour line, lifting away from the skull.',
      challenge: 'Give the hair a clear wind direction blowing strongly to the left.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Spiky -->
          <g transform="translate(15, 15)">
            <circle cx="30" cy="35" r="20" stroke="#8C7E72" stroke-dasharray="2 2" />
            <path d="M12 30 L 8 18 L 20 20 L 26 8 L 36 18 L 46 10 L 48 24 L 52 35" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SPIKY</text>
          </g>
          <!-- Long Waves -->
          <g transform="translate(90, 15)">
            <circle cx="30" cy="30" r="18" stroke="#8C7E72" stroke-dasharray="2 2" />
            <path d="M12 25 C 8 8, 48 8, 48 25 C 54 35, 52 60, 48 65 M 12 25 C 6 35, 8 60, 12 65" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">FLOWING</text>
          </g>
          <!-- Afro Volume -->
          <g transform="translate(170, 15)">
            <circle cx="30" cy="32" r="15" stroke="#8C7E72" stroke-dasharray="2 2" />
            <circle cx="30" cy="28" r="26" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">AFRO PUFF</text>
          </g>
          <!-- Bun / Topknot -->
          <g transform="translate(250, 15)">
            <circle cx="30" cy="35" r="18" stroke="#8C7E72" stroke-dasharray="2 2" />
            <circle cx="30" cy="10" r="10" stroke="#2D2723" stroke-width="2.5" />
            <path d="M14 26 C 20 22, 40 22, 46 26" stroke="#2D2723" stroke-width="2.2" />
            <text x="30" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">TOP BUN</text>
          </g>
          <!-- Braids -->
          <g transform="translate(330, 15)">
            <circle cx="30" cy="30" r="18" stroke="#8C7E72" stroke-dasharray="2 2" />
            <path d="M12 26 L 8 40 L 14 46 L 8 54 L 12 60 M 48 26 L 52 40 L 46 46 L 52 54 L 48 60" stroke="#E06D53" stroke-width="2.2" />
            <text x="30" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">BRAIDS</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 11 — BODY SHAPES
  {
    id: 'master-15-body-shapes',
    prompt: 'Give your character a body.',
    explanation: 'Characters do not all share the same mannequin. Match a round, triangle, or pear torso to give them instant weight and attitude.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['body', 'torso', 'silhouette', 'character'],
    visualReference: {
      type: 'shape',
      title: 'Torso Silhouette Archetypes',
      altText: 'Instructional sketch showing the exact same head attached to 5 contrasting body shapes: circle pear, broad inverted triangle, boxy square, tall rectangle, and hourglass.',
      examples: [
        'Round / Pear (rotund, cozy, heavy bottom)',
        'Inverted triangle (heroic, wide shoulders, narrow waist)',
        'Boxy square / rectangle (solid, immovable, robotic)',
        'Thin noodle / bean (flexible, lanky, quirky)',
        'Hourglass / curvy (graceful, stylized)',
      ],
      whatToNotice: 'Characters don’t all need the same body shape. The silhouette of the torso tells the viewer how the character moves and sits.',
      challenge: 'Put a tiny head on a giant bean-shaped torso.',
      beginnerTerms: [
        { term: 'Silhouette', definition: 'The solid outside shape of something, like a shadow puppet.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Pear / Round -->
          <g transform="translate(20, 15)">
            <circle cx="28" cy="18" r="9" stroke="#8C7E72" />
            <path d="M22 28 C 12 40 5 65 14 78 C 22 88 34 88 42 78 C 51 65 44 40 34 28 Z" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PEAR</text>
          </g>
          <!-- Inverted Triangle -->
          <g transform="translate(105, 15)">
            <circle cx="28" cy="18" r="9" stroke="#8C7E72" />
            <polygon points="5,32 51,32 35,82 21,82" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">WEDGE</text>
          </g>
          <!-- Box / Square -->
          <g transform="translate(190, 15)">
            <circle cx="28" cy="18" r="9" stroke="#8C7E72" />
            <rect x="8" y="32" width="40" height="50" rx="6" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SQUARE</text>
          </g>
          <!-- Lanky Bean -->
          <g transform="translate(275, 15)">
            <circle cx="28" cy="18" r="9" stroke="#8C7E72" />
            <path d="M24 30 C 18 45 18 68 22 84 C 26 86 30 86 34 84 C 38 68 36 45 32 30 Z" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LANKY</text>
          </g>
        </svg>
      `,
    },
  },
];
