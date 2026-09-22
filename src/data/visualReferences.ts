import { VisualReference } from '../types/prompt';

export const VISUAL_REFERENCES: Record<string, VisualReference> = {
  'ref-head-shapes': {
    id: 'ref-head-shapes',
    type: 'shape',
    title: 'Fundamental Head Silhouettes',
    description:
      'Beginner character design starts with geometric head silhouettes. Varying basic shapes creates distinct character archetypes before adding any facial details.',
    altText:
      'Instructional line drawing comparing 5 head silhouettes: circle for friendly characters, square for sturdy characters, triangle for sharp characters, heart shape, and elongated oval.',
    tags: ['character', 'head', 'shapes', 'silhouette', 'face', 'anatomy'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Circle -->
        <circle cx="45" cy="55" r="32" />
        <path d="M45 23 v64 M20 58 h50" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.4" />
        <text x="45" y="106" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">CIRCLE</text>

        <!-- Square / Sturdy -->
        <rect x="105" y="24" width="60" height="62" rx="10" />
        <path d="M135 24 v62 M105 58 h60" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.4" />
        <text x="135" y="106" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">SQUARE</text>

        <!-- Inverted Triangle / Agile -->
        <path d="M195 26 L255 26 L230 86 Q225 90 220 86 Z" />
        <path d="M225 26 v60 M202 54 h46" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.4" />
        <text x="225" y="106" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">TRIANGLE</text>

        <!-- Elongated Oval -->
        <ellipse cx="310" cy="55" rx="24" ry="34" />
        <path d="M310 21 v68 M290 55 h40" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.4" />
        <text x="310" y="106" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">OVAL</text>

        <!-- Pear / Heavy Jaw -->
        <path d="M375 32 C385 32 392 42 390 52 C395 62 402 76 392 84 C384 90 366 90 358 84 C348 76 355 62 360 52 C358 42 365 32 375 32 Z" />
        <text x="375" y="106" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">PEAR</text>
      </svg>
    `,
  },

  'ref-facial-expressions': {
    id: 'ref-facial-expressions',
    type: 'line-art',
    title: 'Expressive Eyebrows & Mouth Angles',
    description:
      'Emotion is conveyed primarily through the angle of the eyebrow ridge relative to the curve of the mouth. Small shifts transform neutral shapes into distinct moods.',
    altText:
      'Instructional diagram showing four basic facial expressions: happy (arched brows, curved smile), determined (slanted brows down inward, flat mouth), surprised (high arched brows, open circle mouth), and curious (one raised brow, crooked smile).',
    tags: ['character', 'expression', 'face', 'eyes', 'mood'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 400 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Happy -->
        <g transform="translate(10, 0)">
          <circle cx="45" cy="50" r="32" stroke-width="2" />
          <path d="M30 40 Q37 35 44 40 M54 40 Q61 35 68 40" stroke-width="2.5" />
          <circle cx="37" cy="47" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="61" cy="47" r="2.5" fill="currentColor" stroke="none" />
          <path d="M32 58 Q45 74 58 58" stroke-width="2.5" />
          <text x="45" y="102" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">JOY</text>
        </g>

        <!-- Determined / Focus -->
        <g transform="translate(110, 0)">
          <circle cx="45" cy="50" r="32" stroke-width="2" />
          <path d="M28 38 L43 44 M70 38 L55 44" stroke-width="3" />
          <circle cx="36" cy="49" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="62" cy="49" r="2.5" fill="currentColor" stroke="none" />
          <path d="M34 65 L64 63" stroke-width="2.5" />
          <text x="45" y="102" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">DETERMINED</text>
        </g>

        <!-- Surprised -->
        <g transform="translate(210, 0)">
          <circle cx="45" cy="50" r="32" stroke-width="2" />
          <path d="M28 32 Q36 26 44 32 M54 32 Q62 26 70 32" stroke-width="2" />
          <circle cx="36" cy="43" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="62" cy="43" r="3.5" fill="currentColor" stroke="none" />
          <ellipse cx="49" cy="62" rx="7" ry="10" stroke-width="2" />
          <text x="45" y="102" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">SURPRISED</text>
        </g>

        <!-- Curious / Skeptical -->
        <g transform="translate(310, 0)">
          <circle cx="45" cy="50" r="32" stroke-width="2" />
          <path d="M28 33 Q36 28 44 33 M54 44 L68 40" stroke-width="2.5" />
          <circle cx="36" cy="45" r="3" fill="currentColor" stroke="none" />
          <circle cx="61" cy="47" r="2" fill="currentColor" stroke="none" />
          <path d="M34 66 Q48 64 62 60" stroke-width="2" />
          <text x="45" y="102" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">CURIOUS</text>
        </g>
      </svg>
    `,
  },

  'ref-weight-shift': {
    id: 'ref-weight-shift',
    type: 'gesture',
    title: 'Weight Shift & Contrapposto',
    description:
      'When a figure stands naturally, weight shifts to one supporting leg. The hips tilt toward the supporting side while the shoulders compensate by tilting the opposite direction.',
    altText:
      'Instructional stick figure gesture diagram illustrating weight shift: supporting straight leg under tilted pelvis, relaxed bent leg, and opposite shoulder tilt maintaining balance.',
    tags: ['character', 'pose', 'gesture', 'weight', 'balance', 'body', 'legs'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Static / Neutral Pose -->
        <g transform="translate(40, 10)">
          <circle cx="45" cy="20" r="10" />
          <path d="M45 30 L45 75" />
          <path d="M20 40 L70 40" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.5" />
          <path d="M25 40 L45 36 L65 40" />
          <path d="M20 75 L70 75" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.5" />
          <path d="M28 75 L45 75 L62 75" />
          <path d="M35 75 L35 130 M55 75 L55 130" />
          <text x="45" y="148" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">STIFF (FLAT)</text>
        </g>

        <!-- Dynamic Weight Shift -->
        <g transform="translate(190, 10)">
          <circle cx="65" cy="18" r="10" />
          <!-- Curved spine -->
          <path d="M63 28 Q50 52 58 74" stroke-width="3" stroke="#E06D53" />
          <!-- Shoulders tilt left-down right-up -->
          <path d="M36 34 L88 44" stroke-width="2" />
          <!-- Hips tilt opposite: left-up right-down -->
          <path d="M36 82 L84 66" stroke-width="2.5" stroke="#E06D53" />
          <!-- Supporting leg carries weight straight under center of gravity -->
          <path d="M44 80 L48 132" stroke-width="3.5" />
          <!-- Free relaxed bent leg -->
          <path d="M78 68 L88 100 L76 130" stroke-width="2" stroke-dasharray="3 3" />
          <!-- Balance line marker -->
          <path d="M65 10 v124" stroke="#8A7D71" stroke-dasharray="2 4" stroke-width="1.5" />
          <text x="65" y="148" font-size="10" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">WEIGHT SHIFT (DYNAMIC)</text>
        </g>
      </svg>
    `,
  },

  'ref-line-of-action': {
    id: 'ref-line-of-action',
    type: 'gesture',
    title: 'The Single Line of Action',
    description:
      'Before drawing anatomy or details, capture the primary dynamic curve running from the head through the spine and down the planted foot. It gives the pose energy and momentum.',
    altText:
      'Instructional gesture comparison showing a strong C-curve line of action guiding a jumping or running silhouette, compared to an S-curve elegant pose.',
    tags: ['gesture', 'motion', 'animation', 'pose', 'character', 'action'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- C-Curve Action -->
        <g transform="translate(30, 10)">
          <!-- Primary action line -->
          <path d="M40 18 Q120 40 80 115" stroke="#E06D53" stroke-width="3" stroke-dasharray="4 2" />
          <circle cx="48" cy="22" r="10" />
          <path d="M54 30 Q78 50 68 80" />
          <path d="M40 45 L85 30" />
          <path d="M68 80 L96 115 M68 80 L35 98" />
          <text x="65" y="128" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">“C” ACTION CURVE</text>
        </g>

        <!-- S-Curve Balance -->
        <g transform="translate(210, 10)">
          <!-- S-curve line -->
          <path d="M75 16 Q40 45 75 75 Q95 105 55 118" stroke="#E06D53" stroke-width="3" stroke-dasharray="4 2" />
          <circle cx="73" cy="18" r="9" />
          <path d="M71 27 Q58 48 70 72" />
          <path d="M50 36 L88 38" />
          <path d="M70 72 L72 118 M70 72 L52 114" />
          <text x="70" y="128" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">“S” ELEGANT CURVE</text>
        </g>
      </svg>
    `,
  },

  'ref-body-proportions': {
    id: 'ref-body-proportions',
    type: 'shape',
    title: 'Character Silhouette & Proportions',
    description:
      'Pushing proportions (such as giant torso with small legs, or slender tall frame with long limbs) communicates personality instantly at a glance.',
    altText:
      'Diagram showing three distinct body proportion archetypes: a heavy triangle base, an athletic inverted triangle, and an elongated bean shape.',
    tags: ['character', 'body', 'silhouette', 'proportions', 'shape'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 145" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Top Heavy -->
        <g transform="translate(20, 10)">
          <circle cx="45" cy="18" r="8" />
          <path d="M20 30 L70 30 L55 75 L35 75 Z" fill="#2D2723" fill-opacity="0.1" />
          <path d="M38 75 L34 116 M52 75 L56 116" stroke-width="2" />
          <text x="45" y="132" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">TOP-HEAVY</text>
        </g>

        <!-- Bottom Heavy / Pear -->
        <g transform="translate(145, 10)">
          <circle cx="45" cy="18" r="8" />
          <path d="M35 32 L55 32 L72 82 L18 82 Z" fill="#2D2723" fill-opacity="0.1" />
          <path d="M32 82 L30 116 M58 82 L60 116" stroke-width="2.5" />
          <text x="45" y="132" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">BOTTOM-HEAVY</text>
        </g>

        <!-- Elongated / Slender -->
        <g transform="translate(270, 10)">
          <circle cx="45" cy="16" r="7" />
          <rect x="38" y="28" width="14" height="42" rx="6" fill="#2D2723" fill-opacity="0.1" />
          <path d="M40 70 L36 120 M50 70 L54 120" stroke-width="1.8" />
          <text x="45" y="132" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">ELONGATED</text>
        </g>
      </svg>
    `,
  },

  'ref-environment-depth': {
    id: 'ref-environment-depth',
    type: 'environment',
    title: 'Spatial Depth: 3 Planes of Depth',
    description:
      'Separate your scene into Foreground (bold and close), Middle ground (subject stage), and Background (light atmospheric distant shapes).',
    altText:
      'Instructional environment diagram demonstrating 3 planes: dark detailed foreground framing branch on the left, middle ground island with character, and light hazy mountain horizon in background.',
    tags: ['environment', 'landscape', 'depth', 'composition', 'world-builder'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Frame Border -->
        <rect x="15" y="10" width="350" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" />

        <!-- Background (Light Mountains) -->
        <path d="M80 85 L130 45 L180 85 L230 40 L290 85" stroke="#9C8E80" stroke-width="1.5" stroke-dasharray="3 2" />
        <circle cx="270" cy="35" r="10" stroke="#9C8E80" stroke-width="1.5" stroke-dasharray="2 2" />
        <text x="140" y="38" font-size="9" font-family="sans-serif" fill="#8A7D71" stroke="none">BACKGROUND (Faint/Far)</text>

        <!-- Middle Ground (Stage with subject) -->
        <path d="M40 95 Q140 75 240 90 Q300 95 350 92" stroke="#4A3F35" stroke-width="2.5" />
        <!-- Subject figure -->
        <circle cx="170" cy="74" r="4" fill="#4A3F35" />
        <path d="M170 78 L170 90 M167 84 L173 84 M168 90 L166 96 M172 90 L174 96" stroke="#4A3F35" stroke-width="1.8" />
        <text x="190" y="82" font-size="9" font-family="sans-serif" font-weight="bold" fill="#4A3F35" stroke="none">MIDDLE GROUND</text>

        <!-- Foreground (Close Dark Framing) -->
        <path d="M15 15 Q40 45 35 120" stroke="#2D2723" stroke-width="6" />
        <path d="M30 42 Q70 38 60 55" stroke="#2D2723" stroke-width="3.5" />
        <path d="M32 75 Q65 72 55 85" stroke="#2D2723" stroke-width="3" />
        <text x="45" y="24" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">FOREGROUND (Bold/Frame)</text>
      </svg>
    `,
  },

  'ref-typography-hierarchy': {
    id: 'ref-typography-hierarchy',
    type: 'composition',
    title: 'Visual Hierarchy & Typography Dominance',
    description:
      'Hierarchy directs the reader’s eye. The title holds primary weight (high scale/contrast), supported by a modest subtitle, surrounded by breathing room (negative space).',
    altText:
      'Graphic design poster diagram displaying a large bold primary headline dominating the upper third, a smaller subheader below it, and clean negative space margins.',
    tags: ['graphic-design', 'typography', 'hierarchy', 'poster', 'composition', 'layout'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Poster Frame -->
        <rect x="25" y="10" width="105" height="130" rx="6" stroke="#2D2723" stroke-width="2" />
        <!-- Big dominant Title block -->
        <rect x="35" y="22" width="85" height="24" rx="3" fill="#2D2723" />
        <!-- Subtitle -->
        <rect x="35" y="52" width="55" height="6" rx="2" fill="#8A7D71" />
        <!-- Visual anchor shape -->
        <circle cx="77" cy="85" r="18" stroke="#E06D53" stroke-width="2" fill="#E06D53" fill-opacity="0.15" />
        <!-- Small footer detail -->
        <line x1="35" y1="120" x2="65" y2="120" stroke="#8A7D71" stroke-width="2" />
        <line x1="95" y1="120" x2="115" y2="120" stroke="#8A7D71" stroke-width="2" />

        <!-- Explanatory Callouts -->
        <g transform="translate(150, 20)">
          <path d="M-15 12 L5 12" stroke="#E06D53" stroke-width="1.5" />
          <text x="12" y="15" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">1. PRIMARY DOMINANCE</text>
          <text x="12" y="28" font-size="9" font-family="sans-serif" fill="#6B5F54" stroke="none">Largest scale & highest value contrast</text>

          <path d="M-20 42 L5 42" stroke="#E06D53" stroke-width="1.5" />
          <text x="12" y="45" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">2. SECONDARY RHYTHM</text>
          <text x="12" y="58" font-size="9" font-family="sans-serif" fill="#6B5F54" stroke="none">Guides the eye without competing</text>

          <text x="12" y="85" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2A9D8F" stroke="none">3. NEGATIVE SPACE</text>
          <text x="12" y="98" font-size="9" font-family="sans-serif" fill="#6B5F54" stroke="none">Generous padding allows layout to breathe</text>
        </g>
      </svg>
    `,
  },

  'ref-leaf-botany': {
    id: 'ref-leaf-botany',
    type: 'silhouette',
    title: 'Silhouette First, Texture Second',
    description:
      'In nature drawing, capture the overall bounding contour and central organic stem before drawing internal vein patterns or edge serrations.',
    altText:
      'Two-step nature drawing diagram: Step 1 shows the gentle organic teardrop silhouette, Step 2 shows the branching veins and subtle edge details.',
    tags: ['nature', 'botanical', 'leaf', 'silhouette', 'study', 'organic'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Step 1: Silhouette Contour -->
        <g transform="translate(40, 10)">
          <path d="M60 110 Q20 70 35 25 Q70 30 75 75 Q78 95 60 110 Z" stroke="#606C38" stroke-width="2.5" fill="#606C38" fill-opacity="0.1" />
          <path d="M60 110 Q50 65 35 25" stroke="#606C38" stroke-width="1.8" stroke-dasharray="3 3" />
          <text x="50" y="128" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">STEP 1: SILHOUETTE</text>
        </g>

        <!-- Arrow -->
        <path d="M165 65 L195 65 M188 58 L195 65 L188 72" stroke="#A39689" stroke-width="2" />

        <!-- Step 2: Branching Veins -->
        <g transform="translate(230, 10)">
          <!-- Leaf outline with slight organic tooth -->
          <path d="M60 110 Q20 70 35 25 Q70 30 75 75 Q78 95 60 110 Z" stroke="#283618" stroke-width="2.5" />
          <!-- Central spine -->
          <path d="M60 110 Q50 65 35 25" stroke="#283618" stroke-width="2.5" />
          <!-- Branching veins -->
          <path d="M54 85 Q40 75 32 80 M54 85 Q65 78 72 82" stroke="#283618" stroke-width="1.5" />
          <path d="M47 62 Q35 52 28 58 M47 62 Q60 52 68 56" stroke="#283618" stroke-width="1.5" />
          <path d="M40 40 Q32 34 26 38 M40 40 Q52 35 58 38" stroke="#283618" stroke-width="1.5" />
          <text x="50" y="128" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">STEP 2: INTERNAL VEINS</text>
        </g>
      </svg>
    `,
  },

  'ref-hand-gestures': {
    id: 'ref-hand-gestures',
    type: 'shape',
    title: 'Mitt-to-Fingers Hand Blocking',
    description:
      'Treat the hand as a curved palm wedge with an attached thumb triangle before separating individual fingers. This prevents stiff "fork" hands.',
    altText:
      'Instructional hand diagram showing the solid palm mitten shape, thumb hinge triangle, and simplified finger arc.',
    tags: ['character', 'hand', 'hands', 'fingers', 'anatomy', 'gesture'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Palm Mitt Shape -->
        <g transform="translate(40, 10)">
          <!-- Wrist -->
          <path d="M40 115 L40 95 M70 115 L70 95" stroke-dasharray="2 2" />
          <!-- Palm Wedge -->
          <path d="M38 95 L34 50 Q55 45 76 52 L72 95 Z" stroke="#E06D53" stroke-width="2.5" fill="#E06D53" fill-opacity="0.1" />
          <!-- Thumb Triangle -->
          <path d="M34 82 L12 65 L28 54" stroke="#E06D53" stroke-width="2" />
          <!-- Finger Mitt Curve -->
          <path d="M34 50 Q55 18 76 52" stroke="#8A7D71" stroke-dasharray="3 2" stroke-width="2" />
          <text x="55" y="128" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">1. PALM + MITT ARC</text>
        </g>

        <!-- Arrow -->
        <path d="M165 65 L195 65 M188 58 L195 65 L188 72" stroke="#A39689" stroke-width="2" />

        <!-- Defined Hand -->
        <g transform="translate(230, 10)">
          <!-- Wrist -->
          <path d="M40 115 L40 95 M70 115 L70 95" />
          <!-- Thumb -->
          <path d="M38 92 C32 85 14 74 15 62 C16 56 24 58 28 64 L34 52" stroke-width="2.5" />
          <!-- Index -->
          <path d="M34 52 L36 28 C37 22 46 22 47 28 L47 50" stroke-width="2.2" />
          <!-- Middle -->
          <path d="M47 50 L48 22 C49 16 58 16 59 22 L59 50" stroke-width="2.2" />
          <!-- Ring -->
          <path d="M59 50 L60 26 C61 21 69 21 70 26 L70 52" stroke-width="2.2" />
          <!-- Pinky -->
          <path d="M70 52 L72 38 C73 34 80 34 80 39 L78 92 Z" stroke-width="2.2" />
          <text x="55" y="128" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">2. DIVIDE FINGERS</text>
        </g>
      </svg>
    `,
  },

  'ref-character-props': {
    id: 'ref-character-props',
    type: 'object',
    title: 'Character Interacting with Props',
    description:
      'When your character carries or holds an object, show the physical reaction: fingers wrapping around the handle and body tilting slightly to balance the object’s weight.',
    altText:
      'Instructional sketch of a character holding an oversized umbrella against the wind, showing the lean into the handle and dynamic balance.',
    tags: ['character', 'props', 'interact', 'hold', 'carry', 'action'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(100, 10)">
          <!-- Umbrella Dome -->
          <path d="M40 40 Q105 -5 170 40 Q138 35 105 35 Q72 35 40 40 Z" fill="#E06D53" fill-opacity="0.15" stroke="#E06D53" stroke-width="2.5" />
          <!-- Shaft held diagonally -->
          <path d="M105 15 L55 110" stroke="#2D2723" stroke-width="3" />
          <!-- Character leaning back to balance -->
          <circle cx="45" cy="48" r="9" />
          <path d="M45 57 Q38 78 48 95" stroke-width="2.5" />
          <!-- Two arms gripping shaft -->
          <path d="M42 66 L68 76 M42 70 L72 82" stroke-width="2.5" />
          <!-- Legs countering -->
          <path d="M48 95 L32 124 M48 95 L65 122" stroke-width="2.5" />
        </g>
        <text x="190" y="132" font-size="11" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">CHARACTER TILTS TO COUNTER BALANCE</text>
      </svg>
    `,
  },
};

export const getVisualReferenceById = (id?: string): VisualReference | undefined => {
  if (!id) return undefined;
  return VISUAL_REFERENCES[id];
};

export const findVisualReferenceForPrompt = (
  promptText: string,
  tags: string[] = []
): VisualReference | undefined => {
  const lowerText = promptText.toLowerCase();

  // Explicit keyword matches
  if (lowerText.includes('head') || lowerText.includes('silhouette') || lowerText.includes('circle')) {
    if (lowerText.includes('expression') || lowerText.includes('smile') || lowerText.includes('angry') || lowerText.includes('face')) {
      return VISUAL_REFERENCES['ref-facial-expressions'];
    }
    return VISUAL_REFERENCES['ref-head-shapes'];
  }

  if (lowerText.includes('expression') || lowerText.includes('mood') || lowerText.includes('smile') || lowerText.includes('eyes') || lowerText.includes('gaze')) {
    return VISUAL_REFERENCES['ref-facial-expressions'];
  }

  if (lowerText.includes('weight') || lowerText.includes('stand') || lowerText.includes('balance') || lowerText.includes('posture')) {
    return VISUAL_REFERENCES['ref-weight-shift'];
  }

  if (lowerText.includes('motion') || lowerText.includes('action') || lowerText.includes('run') || lowerText.includes('jump') || lowerText.includes('gesture')) {
    return VISUAL_REFERENCES['ref-line-of-action'];
  }

  if (lowerText.includes('proportion') || lowerText.includes('torso') || lowerText.includes('limbs') || lowerText.includes('body')) {
    return VISUAL_REFERENCES['ref-body-proportions'];
  }

  if (lowerText.includes('depth') || lowerText.includes('distance') || lowerText.includes('foreground') || lowerText.includes('background') || lowerText.includes('horizon')) {
    return VISUAL_REFERENCES['ref-environment-depth'];
  }

  if (lowerText.includes('poster') || lowerText.includes('title') || lowerText.includes('hierarchy') || lowerText.includes('typography') || lowerText.includes('grid')) {
    return VISUAL_REFERENCES['ref-typography-hierarchy'];
  }

  if (lowerText.includes('leaf') || lowerText.includes('nature') || lowerText.includes('plant') || lowerText.includes('botanical') || lowerText.includes('vein')) {
    return VISUAL_REFERENCES['ref-leaf-botany'];
  }

  if (lowerText.includes('hand') || lowerText.includes('fingers') || lowerText.includes('fist') || lowerText.includes('point')) {
    return VISUAL_REFERENCES['ref-hand-gestures'];
  }

  if (lowerText.includes('carry') || lowerText.includes('hold') || lowerText.includes('prop') || lowerText.includes('item')) {
    return VISUAL_REFERENCES['ref-character-props'];
  }

  // Tag matches
  for (const tag of tags) {
    const t = tag.toLowerCase();
    if (t === 'face' || t === 'expression') return VISUAL_REFERENCES['ref-facial-expressions'];
    if (t === 'head') return VISUAL_REFERENCES['ref-head-shapes'];
    if (t === 'gesture' || t === 'pose') return VISUAL_REFERENCES['ref-weight-shift'];
    if (t === 'motion' || t === 'action') return VISUAL_REFERENCES['ref-line-of-action'];
    if (t === 'environment' || t === 'landscape') return VISUAL_REFERENCES['ref-environment-depth'];
    if (t === 'typography' || t === 'composition') return VISUAL_REFERENCES['ref-typography-hierarchy'];
    if (t === 'nature' || t === 'botanical') return VISUAL_REFERENCES['ref-leaf-botany'];
    if (t === 'hand' || t === 'hands') return VISUAL_REFERENCES['ref-hand-gestures'];
  }

  return undefined;
};
