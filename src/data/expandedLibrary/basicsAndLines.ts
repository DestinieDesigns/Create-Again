import { CreativePrompt } from '../../types/prompt';

export const BASICS_AND_LINES_PROMPTS: CreativePrompt[] = [
  // SECTION 4: MARKS & LINES LIBRARY
  {
    id: 'exp-marks-and-lines',
    prompt: 'Explore the Marks & Lines library.',
    explanation: 'Every drawing on paper is built from simple marks. Vary your speed, pen pressure, and movement to discover different line feelings.',
    category: 'START',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['marks', 'lines', 'stroke', 'speed', 'pressure', 'basics'],
    themeIds: ['everyday', 'abstract'],
    visualReference: {
      id: 'ref-exp-marks-and-lines',
      type: 'line',
      title: 'Marks & Lines Reference Sheet',
      altText: 'Instructional chart showing 19 foundational line types and comparisons of speed (slow vs fast), control (controlled vs loose), pressure (light vs dark), and movement scale.',
      explanation: 'Lines communicate rhythm and energy before they represent any object. A slow line feels calm and careful; a quick stroke feels alive.',
      whatToNotice: [
        'Slow lines have smooth, deliberate edges; fast lines taper sharply at the ends.',
        'Heavy pen pressure grounds an object; light hairlines indicate highlights or distant scenery.',
        'Switching from wrist motion to arm motion creates expansive, confident curves.',
        'Repeating simple marks (crosshatching, dashes) creates rich tone and surface feel.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Stroke', definition: 'A single movement of your pen or pencil across the paper without lifting.' },
        { term: 'Crosshatching', definition: 'Intersecting sets of parallel lines used to create shadow and density.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Column 1: Core Marks -->
          <g transform="translate(20, 20)">
            <text x="0" y="0" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">1. BASIC LINE TYPES</text>
            <line x1="0" y1="18" x2="60" y2="18" stroke="#2D2723" stroke-width="2.5" />
            <text x="70" y="21" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Straight</text>

            <path d="M0 38 Q30 24 60 38" stroke="#2D2723" stroke-width="2.5" />
            <text x="70" y="41" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Curved</text>

            <path d="M0 58 Q15 48 30 58 T60 58" stroke="#2D2723" stroke-width="2" />
            <text x="70" y="61" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Wavy</text>

            <path d="M0 80 L12 68 L24 80 L36 68 L48 80 L60 68" stroke="#2D2723" stroke-width="2" />
            <text x="70" y="81" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Zigzag</text>

            <path d="M25 105 C25 95 45 95 45 105 C45 118 15 118 15 102 C15 85 55 85 55 105" stroke="#2D2723" stroke-width="2" />
            <text x="70" y="106" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Spiral</text>

            <path d="M0 135 C20 115 20 155 40 135 C60 115 60 155 70 135" stroke="#2D2723" stroke-width="2" />
            <text x="70" y="136" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Loop</text>
          </g>

          <!-- Column 2: Rhythms & Textures -->
          <g transform="translate(180, 20)">
            <text x="0" y="0" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">2. TEXTURE & PATTERN</text>
            <line x1="0" y1="18" x2="60" y2="18" stroke="#2D2723" stroke-width="2.5" stroke-dasharray="6 4" />
            <text x="70" y="21" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Dashes</text>

            <g fill="#2D2723">
              <circle cx="5" cy="40" r="2.5" />
              <circle cx="18" cy="40" r="2.5" />
              <circle cx="31" cy="40" r="2.5" />
              <circle cx="44" cy="40" r="2.5" />
              <circle cx="57" cy="40" r="2.5" />
            </g>
            <text x="70" y="42" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Dots</text>

            <!-- Crosshatch -->
            <path d="M5 60 L45 85 M15 58 L55 83 M25 56 L65 81" stroke="#2D2723" stroke-width="1.8" />
            <path d="M5 85 L45 60 M15 87 L55 62 M25 89 L65 64" stroke="#E06D53" stroke-width="1.8" />
            <text x="70" y="75" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Crosshatch</text>

            <!-- Parallel Lines -->
            <path d="M5 105 L55 105 M5 112 L55 112 M5 119 L55 119" stroke="#2D2723" stroke-width="2" />
            <text x="70" y="115" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Parallel</text>

            <!-- Scribble -->
            <path d="M5 140 Q15 130 25 145 T45 135 T55 145" stroke="#2D2723" stroke-width="1.8" />
            <text x="70" y="142" font-size="8" font-family="sans-serif" fill="#5C5046" stroke="none">Scribble</text>
          </g>

          <!-- Column 3: Energy Comparisons -->
          <g transform="translate(340, 20)">
            <text x="0" y="0" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">3. LINE ENERGY COMPARISONS</text>
            
            <!-- Slow vs Fast -->
            <g transform="translate(0, 16)">
              <line x1="0" y1="8" x2="65" y2="8" stroke="#2D2723" stroke-width="3" />
              <text x="75" y="11" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">Slow: Steady & uniform</text>
              <path d="M0 26 C25 22 55 15 75 10" stroke="#E06D53" stroke-width="2.2" stroke-linecap="round" />
              <text x="85" y="27" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">Fast: Tapered flick</text>
            </g>

            <!-- Light vs Dark -->
            <g transform="translate(0, 60)">
              <line x1="0" y1="8" x2="65" y2="8" stroke="#B0A495" stroke-width="1.2" />
              <text x="75" y="11" font-size="7.5" font-family="sans-serif" fill="#8C7E72" stroke="none">Light: Feathery guide</text>
              <line x1="0" y1="24" x2="65" y2="24" stroke="#2D2723" stroke-width="4" />
              <text x="75" y="27" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">Dark: Bold anchor</text>
            </g>

            <!-- Controlled vs Loose -->
            <g transform="translate(0, 105)">
              <rect x="0" y="0" width="40" height="25" rx="3" stroke="#2D2723" stroke-width="2" />
              <text x="50" y="12" font-size="7.5" font-family="sans-serif" fill="#2D2723" stroke="none">Controlled (box)</text>
              <path d="M0 45 C15 30 30 55 45 35" stroke="#E06D53" stroke-width="2.5" />
              <text x="55" y="47" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">Loose (gesture sweep)</text>
            </g>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-straight', label: 'Straight stroke', description: 'Firm, architectural, and stable' },
      { id: 'ex-curved', label: 'Curved sweep', description: 'Organic, flowing, and flexible' },
      { id: 'ex-zigzag', label: 'Zigzag rhythm', description: 'Electric, sharp, and energetic' },
      { id: 'ex-spiral', label: 'Inward spiral', description: 'Centering, natural, and hypnotic' },
      { id: 'ex-dashes', label: 'Staccato dashes', description: 'Suggests movement, stitches, or hidden trails' },
    ],
    moreExamples: [
      { id: 'ex-crosshatch', label: 'Crosshatching', description: 'Layering opposing strokes for depth' },
      { id: 'ex-dots', label: 'Stippled dots', description: 'Soft fading gradient made of single taps' },
      { id: 'ex-fast-flick', label: 'Whisking flick', description: 'Rapid release stroke for fur or grass' },
    ],
    challenge: 'Draw 10 different line feelings across your paper without drawing any recognizable object.',
  },

  // SECTION 5: LINE TRANSFORMATION LIBRARY (Line -> Object)
  {
    id: 'exp-line-to-object',
    prompt: 'Transform a single stroke into an object.',
    explanation: 'Every physical thing in our world starts as an abstract mark. See the mark first, then let your imagination invent what it can become.',
    category: 'TRANSFORM',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['line', 'transformation', 'object', 'imagination', 'creativity'],
    themeIds: ['everyday', 'nature', 'abstract'],
    visualReference: {
      id: 'ref-exp-line-to-object',
      type: 'transformation',
      title: 'Line to Object Transformations',
      altText: 'Instructional chart comparing abstract lines to real-world objects: straight line to stick, curved line to snake, wavy to water, zigzag to mountains, spiral to snail shell, arc to rainbow.',
      explanation: 'Draw the line first without judging it. Then ask: "What does this line remind me of?" Add one or two small marks to reveal the object.',
      whatToNotice: [
        'A single curved stroke becomes a creature as soon as you add an eye at one end.',
        'Zigzags instantly look like mountain ridges when you cap them with tiny snow patches.',
        'A spiral turns into a snail shell with two little eyestalks below it.',
        'Short flicked lines clustered along a line become a blade of grass.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Straight -> Stick -->
          <g transform="translate(20, 20)">
            <line x1="10" y1="15" x2="60" y2="15" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <text x="35" y="8" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Straight</text>
            <path d="M10 50 L60 50 M30 50 L38 38 M45 50 L52 42" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ STICK</text>
          </g>

          <!-- 2. Curved -> Snake -->
          <g transform="translate(125, 20)">
            <path d="M10 15 Q35 0 60 15" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <text x="35" y="8" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Curved</text>
            <path d="M10 50 C25 35 45 65 60 50" stroke="#2D2723" stroke-width="3" />
            <circle cx="62" cy="48" r="2" fill="#E06D53" stroke="none" />
            <path d="M64 49 L70 48" stroke="#E06D53" stroke-width="1.5" />
            <text x="35" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ SNAKE</text>
          </g>

          <!-- 3. Zigzag -> Mountain -->
          <g transform="translate(230, 20)">
            <path d="M10 20 L25 5 L40 20 L55 5 L70 20" stroke="#8C7E72" stroke-width="1.8" stroke-dasharray="3 3" />
            <text x="40" y="8" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Zigzag</text>
            <path d="M10 55 L25 35 L40 55 L55 35 L70 55" stroke="#2D2723" stroke-width="2.5" />
            <path d="M25 35 L28 42 L23 45 M55 35 L58 42 L53 45" stroke="#E06D53" stroke-width="1.8" />
            <text x="40" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ MOUNTAINS</text>
          </g>

          <!-- 4. Spiral -> Shell -->
          <g transform="translate(335, 20)">
            <path d="M30 18 C30 10 45 10 45 18 C45 28 20 28 20 15" stroke="#8C7E72" stroke-width="1.8" stroke-dasharray="3 3" />
            <text x="35" y="8" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Spiral</text>
            <path d="M30 50 C30 42 45 42 45 50 C45 60 20 60 20 48" stroke="#2D2723" stroke-width="2.5" />
            <path d="M15 56 C25 60 45 60 52 56 C56 54 58 48 55 46" stroke="#2D2723" stroke-width="2" />
            <circle cx="56" cy="44" r="1.5" fill="#2D2723" stroke="none" />
            <text x="35" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ SNAIL</text>
          </g>

          <!-- 5. Loop -> Mug Handle -->
          <g transform="translate(440, 20)">
            <path d="M20 10 C35 10 35 25 20 25" stroke="#8C7E72" stroke-width="1.8" stroke-dasharray="3 3" />
            <text x="25" y="8" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Loop</text>
            <rect x="5" y="35" width="30" height="26" rx="3" stroke="#2D2723" stroke-width="2" />
            <path d="M35 40 C46 40 46 56 35 56" stroke="#2D2723" stroke-width="2.8" />
            <text x="25" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">→ HANDLE</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-stick', label: 'Straight line → Stick', description: 'Add two tiny offshooting twig branches' },
      { id: 'ex-snake', label: 'Curved line → Snake', description: 'Add a dot for an eye and a tiny flick tongue' },
      { id: 'ex-water', label: 'Wavy line → Water ripples', description: 'Repeat waves underneath for a river surface' },
      { id: 'ex-mountain', label: 'Zigzag → Mountain ridge', description: 'Add snowcaps to the pointy peaks' },
      { id: 'ex-shell', label: 'Spiral → Snail shell', description: 'Add a crawling body beneath the coil' },
    ],
    moreExamples: [
      { id: 'ex-rainbow', label: 'Arc → Rainbow', description: 'Stack concentric curved bands above it' },
      { id: 'ex-grass', label: 'Short flicks → Grass', description: 'Cluster vertical flicked lines in groups of three' },
      { id: 'ex-stars', label: 'Dots → Night sky', description: 'Scatter varied-size dots across dark space' },
    ],
    challenge: 'Draw three random squiggles with your eyes closed, open your eyes, and turn each squiggle into a different object.',
  },

  // SECTION 6: SHARP CORNER -> SNOUT / BEAK LIBRARY
  {
    id: 'exp-corner-to-beak-snout',
    prompt: 'Turn a sharp corner into a snout or beak.',
    explanation: 'Take an angle or point already on your page and adapt it into a creature’s face. Adjusting the angle, length, and curve creates totally different animals.',
    category: 'TRANSFORM',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['beak', 'snout', 'corner', 'angle', 'character', 'animals'],
    themeIds: ['animals', 'fantasy', 'nature'],
    visualReference: {
      id: 'ref-exp-corner-to-beak-snout',
      type: 'variation',
      title: 'What Can This Corner Become?',
      altText: 'Instructional diagram showing how simple corners / and /\ can become duck bills, eagle hooks, parrot curved beaks, toucan large bills, and wolf snouts.',
      explanation: 'Every snout and beak begins as two converging lines. Broadening the base creates a sturdy bill; hooking the tip creates a bird of prey.',
      whatToNotice: [
        'The angle direction points where your creature is looking.',
        'A downward hooked tip looks fierce and alert (eagle, hawk).',
        'A wide rounded tip looks friendly and relaxed (duck, platypus).',
        'Curving both lines slightly softens the jaw into a mammalian snout (fox, dog, wolf).',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Base Corners: The Seed Idea -->
          <g transform="translate(15, 25)">
            <text x="25" y="10" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">START WITH /\\</text>
            <path d="M10 45 L25 25 L40 45" stroke="#E06D53" stroke-width="2.5" stroke-dasharray="3 3" />
            <text x="25" y="70" font-size="7.5" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Simple Angle</text>
          </g>

          <!-- 1. Duck: Wide & Flat -->
          <g transform="translate(90, 20)">
            <path d="M10 30 C25 25 45 25 50 35 C45 42 25 42 10 38" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <circle cx="8" cy="20" r="3" fill="#2D2723" stroke="none" />
            <text x="30" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DUCK (FLAT)</text>
          </g>

          <!-- 2. Eagle: Hooked & Sharp -->
          <g transform="translate(180, 20)">
            <path d="M10 25 C25 25 40 28 44 42 C38 42 28 35 10 35" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <circle cx="8" cy="18" r="3" fill="#2D2723" stroke="none" />
            <text x="28" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">EAGLE (HOOK)</text>
          </g>

          <!-- 3. Toucan: Huge & Curved -->
          <g transform="translate(270, 15)">
            <path d="M10 20 C35 15 55 25 58 45 C40 48 25 42 10 38 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="10" y1="30" x2="52" y2="35" stroke="#E06D53" stroke-width="1.8" />
            <circle cx="6" cy="18" r="3" fill="#2D2723" stroke="none" />
            <text x="32" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TOUCAN (LARGE)</text>
          </g>

          <!-- 4. Wolf / Fox: Angular Mammal Snout -->
          <g transform="translate(365, 20)">
            <path d="M5 20 L35 32 L5 42" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="35" cy="32" r="3" fill="#2D2723" stroke="none" />
            <circle cx="12" cy="18" r="2.5" fill="#2D2723" stroke="none" />
            <text x="24" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">WOLF (SNOUT)</text>
          </g>

          <!-- 5. Penguin: Short & Pointed -->
          <g transform="translate(460, 20)">
            <path d="M8 28 L30 33 L8 38 Z" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
            <circle cx="6" cy="22" r="3" fill="#2D2723" stroke="none" />
            <text x="20" y="65" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PENGUIN</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-duck', label: 'Duck Bill', description: 'Wide, rounded, flat base for friendly waterfowl' },
      { id: 'ex-eagle', label: 'Eagle Hook', description: 'Curves downward sharply at the tip' },
      { id: 'ex-toucan', label: 'Toucan Giant Beak', description: 'Impossibly large arc balancing a small head' },
      { id: 'ex-wolf', label: 'Wolf / Dog Snout', description: 'Straight bridge with a dark nose pebble on the tip' },
      { id: 'ex-parrot', label: 'Parrot Curved Bill', description: 'Top bill arches over a smaller bottom scoop' },
    ],
    moreExamples: [
      { id: 'ex-penguin', label: 'Penguin Wedge', description: 'Compact dagger beak for cold diving' },
      { id: 'ex-owl', label: 'Owl Hook', description: 'Tucked between two big concentric feather rings' },
      { id: 'ex-chicken', label: 'Chicken Cone', description: 'Small sharp triangle below a red comb' },
    ],
    challenge: 'Draw three identical V-corners in a row. Turn one into a fierce raptor, one into a happy duck, and one into a hungry crocodile.',
  },
];
