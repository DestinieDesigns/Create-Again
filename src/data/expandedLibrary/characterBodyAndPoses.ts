import { CreativePrompt } from '../../types/prompt';

export const CHARACTER_BODY_AND_POSES_PROMPTS: CreativePrompt[] = [
  // SECTION 17: BODY SHAPE LIBRARY
  {
    id: 'exp-body-shapes',
    prompt: 'Attach a body shape to your character that is not a plain straight tube.',
    explanation: 'Characters are recognizable by their overall torso silhouette: circle bean, sturdy rectangle, top-heavy triangle, or grounded pear.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['body', 'torso', 'silhouette', 'character', 'shapes'],
    themeIds: ['everyday', 'fantasy', 'animation'],
    visualReference: {
      id: 'ref-exp-body-shapes',
      type: 'shape',
      title: 'Body Shape Library: Circle, Box, Triangle, Pear',
      altText: 'Chart showing the exact same head attached to four different body silhouettes: Circle bean, Inverted triangle athletic, Heavy pear bottom, and Sturdy box block.',
      explanation: 'Notice how the character’s perceived age, role, and physical energy completely transform depending on the torso shape, even when the head stays identical.',
      whatToNotice: [
        'Circle / Bean: Friendly, cuddly, approachable, comical.',
        'Inverted Triangle (broad shoulders, narrow waist): Heroic, athletic, powerful.',
        'Pear (narrow shoulders, wide hips): Relaxed, grounded, earthy, steady.',
        'Rectangle / Block: Immovable, robotic, stubborn, or architectural.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Circle / Bean Body -->
          <g transform="translate(20, 15)">
            <circle cx="35" cy="22" r="14" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M18 45 C10 65 14 95 35 95 C56 95 60 65 52 45 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="26" y1="95" x2="24" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <line x1="44" y1="95" x2="46" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="138" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BEAN / ROUND</text>
          </g>

          <!-- 2. Inverted Triangle Body -->
          <g transform="translate(150, 15)">
            <circle cx="35" cy="22" r="14" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <polygon points="12,42 58,42 42,95 28,95" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="30" y1="95" x2="26" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <line x1="40" y1="95" x2="44" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="138" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">INVERTED TRIANGLE</text>
          </g>

          <!-- 3. Pear Body (Bottom Heavy) -->
          <g transform="translate(280, 15)">
            <circle cx="35" cy="22" r="14" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M26 42 L44 42 L58 95 L12 95 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="24" y1="95" x2="20" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <line x1="46" y1="95" x2="50" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="138" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PEAR (GROUNDED)</text>
          </g>

          <!-- 4. Square Box Body -->
          <g transform="translate(410, 15)">
            <circle cx="35" cy="22" r="14" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <rect x="18" y="42" width="34" height="52" rx="4" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="26" y1="94" x2="26" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <line x1="44" y1="94" x2="44" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="138" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BOX / BLOCK</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-bean-body', label: 'Bean Silhouette', description: 'Curved and flexible, bends easily when sitting or jumping' },
      { id: 'ex-triangle-body', label: 'Inverted Triangle', description: 'Broad chest with tapered waist for athletic presence' },
      { id: 'ex-pear-body', label: 'Pear / Low Center', description: 'Wide hips that plant the character firmly on earth' },
      { id: 'ex-block-body', label: 'Rectangular Block', description: 'Sturdy brick torso that conveys quiet strength' },
    ],
    moreExamples: [
      { id: 'ex-hourglass', label: 'Hourglass Waist', description: 'Defined waistline with balanced shoulders and hips' },
      { id: 'ex-slender-stick', label: 'Slender Willow', description: 'Tall narrow reed silhouette for nimble dancers' },
    ],
    challenge: 'Draw three identical smiley-face heads on paper. Give one a giant round beach-ball body, one a tiny triangle, and one a tall box.',
  },

  // SECTION 18: BODY PROPORTIONS LIBRARY
  {
    id: 'exp-body-proportions',
    prompt: 'Exaggerate your character’s body proportions.',
    explanation: 'There is no "correct" human proportion in art. Playing with proportions (huge head vs tiny body, or long legs vs short torso) is how artists invent iconic styles.',
    category: 'TRANSFORM',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['proportions', 'scale', 'stylization', 'character', 'design'],
    themeIds: ['everyday', 'animation', 'storybook'],
    visualReference: {
      id: 'ref-exp-body-proportions',
      type: 'comparison',
      title: 'Stylistic Proportions: Head-to-Body Ratios',
      altText: 'Three characters side-by-side: 2-heads-tall chibi cute proportion, 4-heads-tall storybook adventure proportion, and 7-heads-tall heroic proportion.',
      explanation: 'Measure your character in "heads." A toddler or cartoon mascot is 2 to 3 heads tall; a standard adult is 6 to 7 heads tall; a superhero can be 8 heads tall.',
      whatToNotice: [
        'A large head relative to the body communicates youth, humor, or innocence.',
        'Elongated legs make characters feel fast, agile, and expressive in running.',
        'Oversized hands draw attention to gestures and what the character is holding.',
        'Oversized feet anchor the character firmly to the ground.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Head Units', definition: 'A measurement method using the height of the character’s head to measure the rest of their body.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. 2-Heads Tall (Chibi / Cute) -->
          <g transform="translate(30, 20)">
            <ellipse cx="30" cy="30" rx="24" ry="22" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M18 52 C18 52 14 78 30 78 C46 78 42 52 42 52 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="22" y1="78" x2="22" y2="95" stroke="#2D2723" stroke-width="2.5" />
            <line x1="38" y1="78" x2="38" y2="95" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="115" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">2 HEADS (CHIBI)</text>
            <text x="30" y="128" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Cute, Young, Mascot</text>
          </g>

          <!-- 2. 4-Heads Tall (Cartoon / Adventure) -->
          <g transform="translate(170, 20)">
            <ellipse cx="30" cy="20" rx="16" ry="16" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M20 36 L40 36 L36 80 L24 80 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="25" y1="80" x2="22" y2="125" stroke="#2D2723" stroke-width="2.5" />
            <line x1="35" y1="80" x2="38" y2="125" stroke="#2D2723" stroke-width="2.5" />
            <line x1="18" y1="42" x2="10" y2="80" stroke="#2D2723" stroke-width="2.2" />
            <line x1="42" y1="42" x2="50" y2="80" stroke="#2D2723" stroke-width="2.2" />
            <text x="30" y="145" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">4 HEADS (ADVENTURE)</text>
            <text x="30" y="158" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Storybook & Animation</text>
          </g>

          <!-- 3. Long Limbs / Exaggerated -->
          <g transform="translate(320, 20)">
            <ellipse cx="30" cy="18" rx="12" ry="14" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <rect x="22" y="32" width="16" height="35" rx="3" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="24" y1="67" x2="18" y2="140" stroke="#2D2723" stroke-width="2.5" />
            <line x1="36" y1="67" x2="42" y2="140" stroke="#2D2723" stroke-width="2.5" />
            <line x1="20" y1="36" x2="6" y2="95" stroke="#2D2723" stroke-width="2" />
            <line x1="40" y1="36" x2="54" y2="95" stroke="#2D2723" stroke-width="2" />
            <text x="30" y="160" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ELONGATED LIMBS</text>
            <text x="30" y="173" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Tall, Swift, Lanky</text>
          </g>

          <!-- 4. Giant Torso / Tiny Legs -->
          <g transform="translate(440, 20)">
            <ellipse cx="35" cy="16" rx="10" ry="12" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M10 28 L60 28 L50 85 L20 85 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="25" y1="85" x2="22" y2="110" stroke="#2D2723" stroke-width="3" />
            <line x1="45" y1="85" x2="48" y2="110" stroke="#2D2723" stroke-width="3" />
            <text x="35" y="130" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HEAVYWEIGHT</text>
            <text x="35" y="143" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Massive Upper Body</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-2-head', label: '2 Heads Tall', description: 'Head is almost as large as torso; high-charm mascot style' },
      { id: 'ex-4-head', label: '4 Heads Tall', description: 'Classic storybook adventure proportion for kids and heroes' },
      { id: 'ex-long-legs', label: 'Elongated Legs', description: 'Short torso sitting on very tall stilts for running agility' },
      { id: 'ex-gorilla', label: 'Giant Arms / Heavy Upper', description: 'Massive shoulders with knuckles grazing the earth' },
    ],
    moreExamples: [
      { id: 'ex-tall-7', label: '7 Heads Tall', description: 'Realistic adult proportions for dramatic graphic novels' },
      { id: 'ex-tiny-feet', label: 'Teardrop Peg Legs', description: 'Legs taper down to tiny points for floating whimsy' },
    ],
    challenge: 'Draw two characters walking together: one who is 3 heads tall and one who is 7 heads tall.',
  },

  // SECTION 21: HAND LIBRARY
  {
    id: 'exp-hands-library',
    prompt: 'Draw hands using simple mitten silhouettes or basic poses.',
    explanation: 'Hands do not need intricate fingernails or 27 bones. Start with a mitten shape (palm block + thumb wedge), then split the finger mitten into simple poses.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['hands', 'fingers', 'gesture', 'character', 'anatomy'],
    themeIds: ['everyday', 'character'],
    visualReference: {
      id: 'ref-exp-hands-library',
      type: 'variation',
      title: 'Simple Hand Silhouettes: Open, Fist, Point, Wave',
      altText: 'Instructional chart showing how to construct hands from a mitten: Open palm, Clenched fist, Pointing index finger, Thumbs up, Wave, and Holding a cup.',
      explanation: 'Always treat the four fingers as a single unified glove first. Only separate individual fingers when one finger points or acts independently.',
      whatToNotice: [
        'The thumb opposes the other four fingers from the side of the palm.',
        'A clenched fist is a compact square block with the thumb curled over the front.',
        'Pointing: One straight cylinder extends; the remaining three curl against the palm.',
        'When holding a cup or phone, the fingers wrap around the object’s contour.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Mitten Method', definition: 'Drawing the palm and fingers as a single glove before separating individual digits.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Open Mitten / Palm -->
          <g transform="translate(20, 15)">
            <path d="M12 55 L12 25 C12 12 38 12 38 25 L38 35 C46 35 48 42 42 48 L35 55 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="25" y="75" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">MITTEN PALM</text>
          </g>

          <!-- 2. Clenched Fist -->
          <g transform="translate(105, 15)">
            <rect x="8" y="20" width="34" height="28" rx="8" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M8 34 C16 34 26 34 32 40" stroke="#8C7E72" stroke-width="2" />
            <path d="M8 24 L8 44 C8 48 18 48 18 42" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="75" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CLOSED FIST</text>
          </g>

          <!-- 3. Pointing Finger -->
          <g transform="translate(195, 15)">
            <path d="M10 50 L10 32 L36 32 L36 24 L10 24" stroke="#2D2723" stroke-width="2.5" />
            <path d="M36 24 L52 24 C56 24 56 32 52 32 L36 32" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="30" y="75" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">POINTING</text>
          </g>

          <!-- 4. Thumbs Up -->
          <g transform="translate(290, 15)">
            <path d="M14 24 L14 10 C14 5 22 5 22 10 L22 24 L34 24 C38 24 38 48 30 48 L14 48 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="25" y="75" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">THUMBS UP</text>
          </g>

          <!-- 5. Peace Sign (V) -->
          <g transform="translate(380, 15)">
            <path d="M16 26 L12 8 C12 4 18 4 18 8 L22 26 L26 8 C26 4 32 4 32 8 L28 26 L36 26 C40 26 40 48 30 48 L16 48 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="26" y="75" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PEACE (V)</text>
          </g>

          <!-- 6. Holding an Object (Cup) -->
          <g transform="translate(470, 15)">
            <rect x="22" y="14" width="22" height="34" rx="2" stroke="#E06D53" stroke-width="2" />
            <path d="M10 20 C18 20 22 24 22 30 C22 36 18 40 10 40" stroke="#2D2723" stroke-width="3" />
            <text x="25" y="75" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HOLDING</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-mitten', label: 'Basic Mitten', description: 'Palm pouch plus side thumb; universally readable' },
      { id: 'ex-fist', label: 'Square Fist', description: 'Curled fingers represented as a single folded block' },
      { id: 'ex-point', label: 'Pointing Finger', description: 'Single extended cylinder with other fingers tucked' },
      { id: 'ex-thumbs-up', label: 'Thumbs Up', description: 'Thumb extends vertically from a horizontal clenched fist' },
    ],
    moreExamples: [
      { id: 'ex-peace', label: 'Peace / Victory V', description: 'Index and middle fingers separate into an open V' },
      { id: 'ex-pinch', label: 'Pinching Fingers', description: 'Thumb tip meets index finger tip to hold tiny object' },
    ],
    challenge: 'Draw your character holding an apple in one hand and waving hello with the other.',
  },

  // SECTION 24: LINE OF ACTION LIBRARY
  {
    id: 'exp-line-of-action',
    prompt: 'Draw a character following a single energetic Line of Action.',
    explanation: 'Before drawing limbs or clothes, sketch one sweeping line (C-curve, S-curve, or diagonal) that travels from head to heel.',
    category: 'START',
    difficulty: 'medium',
    level: 'beginner',
    tags: ['line-of-action', 'gesture', 'pose', 'energy', 'animation'],
    themeIds: ['everyday', 'animation', 'character'],
    visualReference: {
      id: 'ref-exp-line-of-action',
      type: 'gesture',
      title: 'Line of Action: C-Curve, S-Curve, Diagonal, Zigzag',
      altText: 'Chart showing how a single spine curve builds poses: a C-curve bending into a stretch, an S-curve for a graceful dance, and a dynamic diagonal for a fast sprint.',
      explanation: 'A stiff drawing usually happens because each limb was drawn separately. A strong drawing connects the entire body along one dominant rhythm.',
      whatToNotice: [
        'C-Curve: Maximum arch for bending over, jumping backward, or laughing.',
        'S-Curve: Natural standing weight shift (contrapposto) and dance gestures.',
        'Diagonal: Forward momentum, running, falling, or diving.',
        'Zigzag: Abrupt recoil, surprise, martial arts defense.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Line of Action', definition: 'An imaginary curved or straight line through the core of the body showing its main force.' },
        { term: 'Gesture', definition: 'A fast, loose drawing capturing movement and energy rather than precise contour lines.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. C-Curve Arch -->
          <g transform="translate(30, 20)">
            <path d="M45 10 C10 40 10 90 45 120" stroke="#E06D53" stroke-width="2.5" stroke-dasharray="3 3" />
            <!-- Mannequin on C -->
            <circle cx="42" cy="18" r="10" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M35 28 C22 45 22 75 35 90" stroke="#2D2723" stroke-width="3" />
            <line x1="35" y1="90" x2="48" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="145" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">C-CURVE (ARCH)</text>
          </g>

          <!-- 2. S-Curve Flow -->
          <g transform="translate(160, 20)">
            <path d="M25 10 C45 35 15 70 35 120" stroke="#E06D53" stroke-width="2.5" stroke-dasharray="3 3" />
            <!-- Mannequin on S -->
            <circle cx="28" cy="18" r="10" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M28 28 C40 45 22 75 30 90" stroke="#2D2723" stroke-width="3" />
            <line x1="30" y1="90" x2="35" y2="120" stroke="#2D2723" stroke-width="2.5" />
            <text x="32" y="145" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">S-CURVE (FLOW)</text>
          </g>

          <!-- 3. Diagonal Thrust -->
          <g transform="translate(290, 20)">
            <line x1="15" y1="120" x2="55" y2="10" stroke="#E06D53" stroke-width="2.5" stroke-dasharray="3 3" />
            <!-- Running Mannequin -->
            <circle cx="50" cy="22" r="10" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="44" y1="30" x2="30" y2="65" stroke="#2D2723" stroke-width="3" />
            <line x1="30" y1="65" x2="15" y2="100" stroke="#2D2723" stroke-width="2.5" />
            <line x1="30" y1="65" x2="48" y2="90" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="145" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DIAGONAL (SPEED)</text>
          </g>

          <!-- 4. Zigzag Tension -->
          <g transform="translate(420, 20)">
            <path d="M40 10 L20 50 L45 80 L25 120" stroke="#E06D53" stroke-width="2.5" stroke-dasharray="3 3" />
            <circle cx="38" cy="18" r="10" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M34 26 L22 52 L38 80" stroke="#2D2723" stroke-width="3" />
            <line x1="38" y1="80" x2="25" y2="115" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="145" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ZIGZAG (RECOIL)</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-c-arch', label: 'Deep C-Curve', description: 'Curling forward to pick up an item or laughing backward' },
      { id: 'ex-s-curve', label: 'Elegant S-Curve', description: 'Hip tilted one way, shoulders tilted the other for relaxed realism' },
      { id: 'ex-sprint-diag', label: 'Diagonal Sprint', description: 'Forward thrust angled at 45 degrees for sheer velocity' },
      { id: 'ex-zigzag-crouch', label: 'Zigzag Crouch', description: 'Compressed spring ready to leap' },
    ],
    moreExamples: [
      { id: 'ex-vertical-stand', label: 'Straight Sentinel', description: 'Formal upright posture, soldier or royal stillness' },
    ],
    challenge: 'Draw a single curved stroke across your paper with red pencil. Then dress a stick figure right along that curve.',
  },

  // SECTION 50: CHARACTER SHEET REFERENCE
  {
    id: 'exp-character-sheet',
    prompt: 'Organize your character into a complete Character Sheet.',
    explanation: 'A character sheet displays everything someone needs to know to draw this character again: Front view, Side view, expressions, action pose, and accessories.',
    category: 'STORY',
    difficulty: 'medium',
    level: 'intermediate',
    tags: ['character-sheet', 'model-sheet', 'turnaround', 'design', 'development'],
    themeIds: ['everyday', 'fantasy', 'animation'],
    visualReference: {
      id: 'ref-exp-character-sheet',
      type: 'diagram',
      title: 'Character Sheet Layout & Structure',
      altText: 'Layout diagram of a character sheet showing: Turnaround (Front, 3/4, Profile), 3 Expressions (Happy, Angry, Shock), Action Pose, and Accessory Callouts.',
      explanation: 'Character sheets are the blueprints of animation and comic books. They help you stay consistent across multiple drawings and clarify signature props.',
      whatToNotice: [
        'Turnaround: Draw horizontal height guide lines so the eyes, shoulders, and feet match across views.',
        'Expressions: Pick 3 very contrasting emotions (e.g., Joy, Fury, Confusion).',
        'Action Pose: Shows how the character walks, jumps, or holds their favorite tool.',
        'Accessories: Isolate important items (hat, satchel, weapon, pet) in small detail boxes.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Turnaround', definition: 'Drawings of the exact same character seen from the front, side, and back.' },
        { term: 'Model Sheet', definition: 'A standard reference page used by animators to keep a character looking consistent.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 210" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Canvas Frame -->
          <rect x="10" y="10" width="520" height="190" rx="6" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
          
          <!-- Section 1: Turnaround -->
          <g transform="translate(25, 20)">
            <text x="0" y="12" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">1. TURNAROUND (FRONT &amp; PROFILE)</text>
            <!-- Guide Lines -->
            <line x1="0" y1="35" x2="160" y2="35" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            <line x1="0" y1="80" x2="160" y2="80" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            <line x1="0" y1="130" x2="160" y2="130" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            
            <!-- Front Figure -->
            <circle cx="45" cy="45" r="10" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <rect x="36" y="55" width="18" height="35" rx="3" stroke="#2D2723" stroke-width="2" />
            <line x1="40" y1="90" x2="40" y2="130" stroke="#2D2723" stroke-width="2" />
            <line x1="50" y1="90" x2="50" y2="130" stroke="#2D2723" stroke-width="2" />
            
            <!-- Profile Figure -->
            <circle cx="115" cy="45" r="10" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <rect x="109" y="55" width="12" height="35" rx="2" stroke="#2D2723" stroke-width="2" />
            <line x1="115" y1="90" x2="115" y2="130" stroke="#2D2723" stroke-width="2" />
          </g>

          <!-- Section 2: 3 Expressions -->
          <g transform="translate(210, 20)">
            <text x="0" y="12" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">2. EXPRESSION CALLOUTS</text>
            <!-- Happy -->
            <circle cx="25" cy="45" r="14" stroke="#2D2723" stroke-width="2" />
            <path d="M18 48 Q25 56 32 48" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="70" font-size="6.5" font-family="sans-serif" fill="#5C5046" text-anchor="middle" stroke="none">Happy</text>

            <!-- Angry -->
            <circle cx="70" cy="45" r="14" stroke="#2D2723" stroke-width="2" />
            <path d="M63 42 L77 48" stroke="#2D2723" stroke-width="2" />
            <text x="70" y="70" font-size="6.5" font-family="sans-serif" fill="#5C5046" text-anchor="middle" stroke="none">Angry</text>

            <!-- Shock -->
            <circle cx="115" cy="45" r="14" stroke="#2D2723" stroke-width="2" />
            <ellipse cx="115" cy="48" rx="3" ry="5" fill="#2D2723" stroke="none" />
            <text x="115" y="70" font-size="6.5" font-family="sans-serif" fill="#5C5046" text-anchor="middle" stroke="none">Surprise</text>

            <!-- Section 3: Signature Action Pose -->
            <g transform="translate(0, 75)">
              <text x="0" y="12" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">3. SIGNATURE DYNAMIC ACTION POSE</text>
              <circle cx="45" cy="35" r="8" stroke="#2D2723" stroke-width="2" />
              <line x1="40" y1="42" x2="25" y2="70" stroke="#2D2723" stroke-width="2" />
              <line x1="25" y1="70" x2="10" y2="60" stroke="#2D2723" stroke-width="2" />
              <line x1="25" y1="70" x2="48" y2="85" stroke="#2D2723" stroke-width="2" />
            </g>
          </g>

          <!-- Section 4: Props & Notes -->
          <g transform="translate(385, 20)">
            <text x="0" y="12" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">4. PROPS &amp; ACCESSORIES</text>
            <rect x="5" y="24" width="30" height="24" rx="3" stroke="#2D2723" stroke-width="1.8" />
            <text x="20" y="60" font-size="7" font-family="sans-serif" fill="#5C5046" text-anchor="middle" stroke="none">Satchel</text>

            <rect x="55" y="24" width="30" height="24" rx="3" stroke="#2D2723" stroke-width="1.8" />
            <text x="70" y="60" font-size="7" font-family="sans-serif" fill="#5C5046" text-anchor="middle" stroke="none">Key Prop</text>

            <!-- Name Block -->
            <rect x="5" y="80" width="130" height="45" rx="4" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
            <text x="15" y="98" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">NAME: ____________</text>
            <text x="15" y="112" font-size="7" font-family="sans-serif" fill="#8C7E72" stroke="none">Personality traits &amp; notes</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-front-side', label: 'Front & Side Alignments', description: 'Drawn at the exact same scale with level guide lines' },
      { id: 'ex-3-emotions', label: 'Three Contrasting Heads', description: 'Happy, surprised, and angry close-up portraits' },
      { id: 'ex-signature-pose', label: 'Signature Action', description: 'Character doing what they do best: running, reading, inventing' },
      { id: 'ex-props-box', label: 'Prop Detail Inset', description: 'Magnified view of a magic charm, backpack, or pair of glasses' },
    ],
    moreExamples: [
      { id: 'ex-back-view', label: 'Back View', description: 'Shows cape drape, backpack strap, and ponytail tie' },
      { id: 'ex-color-swatches', label: 'Color Swatch Dots', description: '3 to 5 color dots with penciled labels' },
    ],
    challenge: 'Take a character you drew earlier and draw their full Model Sheet on one page: Front, Profile, 3 expressions, and their signature bag or prop.',
  },
];
