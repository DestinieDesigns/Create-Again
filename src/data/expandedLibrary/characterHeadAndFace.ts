import { CreativePrompt } from '../../types/prompt';

export const CHARACTER_HEAD_AND_FACE_PROMPTS: CreativePrompt[] = [
  // SECTION 7: HEAD SHAPE LIBRARY
  {
    id: 'exp-head-shapes',
    prompt: 'Draw a head using any shape other than a basic circle.',
    explanation: 'A character’s skull defines their personality. You can build heads from squares, triangles, pears, diamonds, or stretched beans.',
    category: 'START',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['head', 'shapes', 'character', 'silhouette', 'anatomy', 'foundation'],
    themeIds: ['everyday', 'fantasy', 'sci-fi', 'storybook'],
    visualReference: {
      id: 'ref-exp-head-shapes',
      type: 'variation',
      title: 'Head Shapes Reference Library',
      altText: 'Instructional grid showing 8 distinct head shapes: Round, Oval, Square Jaw, Triangle/Wedge, Heart, Long Bean, Diamond, and Pear.',
      explanation: 'Heads do not have to be circles. The outer silhouette communicates age, temperament, and stylized character design in a fraction of a second.',
      whatToNotice: [
        'A wide, heavy jaw makes a character feel grounded, stubborn, or heroic.',
        'An inverted triangle or heart shape makes a character feel youthful or nimble.',
        'A long rectangular face suggests seriousness or dignified age.',
        'Cheek expansions change the silhouette from lean to bouncy.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Jawline', definition: 'The lower contour of the face connecting the ear down to the chin.' },
        { term: 'Silhouette', definition: 'The filled shadow outline of a shape before any interior details are drawn.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Oval / Round -->
          <g transform="translate(15, 20)">
            <ellipse cx="28" cy="40" rx="24" ry="32" stroke="#2D2723" stroke-width="2.5" />
            <line x1="28" y1="15" x2="28" y2="65" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
            <line x1="12" y1="42" x2="44" y2="42" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
            <text x="28" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">OVAL</text>
          </g>

          <!-- 2. Square Jaw -->
          <g transform="translate(85, 20)">
            <path d="M10 20 Q28 10 46 20 L44 55 Q28 65 12 55 Z" stroke="#2D2723" stroke-width="2.5" />
            <line x1="28" y1="15" x2="28" y2="65" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
            <text x="28" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SQUARE JAW</text>
          </g>

          <!-- 3. Inverted Triangle -->
          <g transform="translate(155, 20)">
            <path d="M8 20 Q28 15 48 20 L33 65 Q28 68 23 65 Z" stroke="#2D2723" stroke-width="2.5" />
            <line x1="28" y1="15" x2="28" y2="65" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
            <text x="28" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TRIANGLE</text>
          </g>

          <!-- 4. Pear / Chubby Cheeks -->
          <g transform="translate(225, 20)">
            <path d="M18 20 C18 10 38 10 38 20 C38 32 50 45 46 58 C42 68 14 68 10 58 C6 45 18 32 18 20 Z" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PEAR</text>
          </g>

          <!-- 5. Long Rectangle -->
          <g transform="translate(295, 20)">
            <rect x="12" y="10" width="32" height="60" rx="8" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LONG RECT</text>
          </g>

          <!-- 6. Diamond -->
          <g transform="translate(365, 20)">
            <path d="M28 10 L50 38 L28 68 L6 38 Z" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DIAMOND</text>
          </g>

          <!-- 7. Wide Oval -->
          <g transform="translate(435, 20)">
            <ellipse cx="38" cy="40" rx="34" ry="24" stroke="#2D2723" stroke-width="2.5" />
            <text x="38" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">WIDE OVAL</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-square', label: 'Square Block Jaw', description: 'Sturdy, grounded, confident silhouette' },
      { id: 'ex-triangle', label: 'Inverted Triangle', description: 'Wide brow tapering to a dainty chin' },
      { id: 'ex-pear', label: 'Pear / Low Heavy', description: 'Wide cheeks, friendly, expressive, jolly' },
      { id: 'ex-bean', label: 'Long Bean Face', description: 'Tall whimsical portrait with plenty of nose space' },
    ],
    moreExamples: [
      { id: 'ex-flat-top', label: 'Flat Top Head', description: 'Military or robotic angular crest' },
      { id: 'ex-diamond', label: 'High Cheek Diamond', description: 'Pointed crest and chin with angular cheeks' },
      { id: 'ex-heart', label: 'Gentle Heart', description: 'Curved top lobes with tapered chin' },
    ],
    challenge: 'Draw four different head shapes on one page and place two eyes and a mouth on each without changing their positions.',
  },

  // SECTION 8: HEAD ANGLE LIBRARY
  {
    id: 'exp-head-angles',
    prompt: 'Turn a head so it is not looking straight forward.',
    explanation: 'A face turns using curved guidelines. The center line curves in the direction the nose points, and the eye line curves up or down.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    level: 'beginner',
    tags: ['head', 'angle', 'rotation', 'perspective', 'gaze', 'direction'],
    themeIds: ['everyday', 'character', 'animation'],
    visualReference: {
      id: 'ref-exp-head-angles',
      type: 'diagram',
      title: 'Head Angles & Centerline Rotation',
      altText: 'Instructional chart showing the same head viewed from Front, Three-Quarter Left, Three-Quarter Right, Side Profile, and Tilted Down.',
      explanation: 'The center line of the face bends like the seam on a basketball. As the head turns, one cheek becomes wider while the other disappears behind the nose.',
      whatToNotice: [
        'In a 3/4 turn, the far eye is compressed narrower than the near eye.',
        'When looking down, the ear sits higher than the eyebrow line.',
        'When looking up, the jawline reveals the soft plane under the chin.',
        'Keep the distance between the eyes consistent along the curved eye line.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Center Line', definition: 'The imaginary line running from the forehead through the nose and chin that curves as the head turns.' },
        { term: 'Eye Line', definition: 'The horizontal guide across the skull where the eyes sit.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Front -->
          <g transform="translate(30, 20)">
            <ellipse cx="30" cy="40" rx="26" ry="32" stroke="#2D2723" stroke-width="2.5" />
            <line x1="30" y1="10" x2="30" y2="70" stroke="#E06D53" stroke-width="1.8" />
            <line x1="8" y1="40" x2="52" y2="40" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
            <circle cx="20" cy="38" r="2.5" fill="#2D2723" stroke="none" />
            <circle cx="40" cy="38" r="2.5" fill="#2D2723" stroke="none" />
            <text x="30" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">FRONT</text>
          </g>

          <!-- 2. 3/4 Left -->
          <g transform="translate(130, 20)">
            <ellipse cx="30" cy="40" rx="26" ry="32" stroke="#2D2723" stroke-width="2.5" />
            <path d="M22 10 Q16 40 22 70" stroke="#E06D53" stroke-width="2" />
            <path d="M6 38 Q30 44 52 38" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
            <circle cx="14" cy="38" r="2" fill="#2D2723" stroke="none" />
            <circle cx="32" cy="39" r="2.5" fill="#2D2723" stroke="none" />
            <text x="30" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">3/4 LEFT</text>
          </g>

          <!-- 3. Profile (Side) -->
          <g transform="translate(230, 20)">
            <path d="M12 40 L8 44 L16 50 L14 62 Q35 72 45 50 Q52 15 28 12 Q14 15 12 40" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="18" cy="36" r="2.5" fill="#2D2723" stroke="none" />
            <line x1="38" y1="36" x2="42" y2="44" stroke="#2D2723" stroke-width="2" />
            <text x="28" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PROFILE</text>
          </g>

          <!-- 4. Looking Up -->
          <g transform="translate(330, 20)">
            <ellipse cx="30" cy="40" rx="26" ry="32" stroke="#2D2723" stroke-width="2.5" />
            <line x1="30" y1="10" x2="30" y2="70" stroke="#E06D53" stroke-width="1.8" />
            <path d="M6 46 Q30 32 54 46" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
            <circle cx="20" cy="36" r="2.5" fill="#2D2723" stroke="none" />
            <circle cx="40" cy="36" r="2.5" fill="#2D2723" stroke="none" />
            <path d="M22 60 Q30 55 38 60" stroke="#2D2723" stroke-width="1.8" />
            <text x="30" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LOOKING UP</text>
          </g>

          <!-- 5. Looking Down -->
          <g transform="translate(430, 20)">
            <ellipse cx="30" cy="40" rx="26" ry="32" stroke="#2D2723" stroke-width="2.5" />
            <line x1="30" y1="10" x2="30" y2="70" stroke="#E06D53" stroke-width="1.8" />
            <path d="M6 34 Q30 48 54 34" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
            <circle cx="20" cy="40" r="2" fill="#2D2723" stroke="none" />
            <circle cx="40" cy="40" r="2" fill="#2D2723" stroke="none" />
            <text x="30" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LOOKING DOWN</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-front', label: 'Frontal', description: 'Direct eye contact, stable symmetry' },
      { id: 'ex-3-4', label: 'Three-Quarter Turn', description: 'Most dynamic storytelling angle for dialogue' },
      { id: 'ex-side', label: 'Profile Silhouette', description: 'Sharp nose and jawline definition against background' },
      { id: 'ex-tilt', label: 'Head Tilt', description: 'Tipping the eye line creates curiosity or charm' },
    ],
    moreExamples: [
      { id: 'ex-up', label: 'Looking Skyward', description: 'Arched eye line with exposed chin wedge' },
      { id: 'ex-down', label: 'Looking Groundward', description: 'Downturned eye line with ears set high on cranium' },
    ],
    challenge: 'Draw a ball on paper, draw a curved cross on it, and place two dots along the curved line so the ball looks like it is staring at the top corner of your page.',
  },

  // SECTION 9: HEAD CONSTRUCTION METHODS
  {
    id: 'exp-head-construction',
    prompt: 'Construct a head using geometric building blocks.',
    explanation: 'There is no single correct way to draw a head. You can start with a circle + jaw, an oval, a box, or a simple silhouette.',
    category: 'START',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['construction', 'head', 'steps', 'anatomy', 'shapes'],
    themeIds: ['everyday', 'character'],
    visualReference: {
      id: 'ref-exp-head-construction',
      type: 'construction',
      title: 'Four Ways to Construct a Head',
      altText: 'Four head construction methods demonstrated: 1. Circle plus jaw wedge, 2. Oval plus slice, 3. Box cube, 4. Pure silhouette.',
      explanation: 'Try different construction styles to see which one your hand naturally prefers. Animators often love circle+wedge, while comic artists love box-block construction.',
      whatToNotice: [
        'Method 1 (Circle + Jaw): Excellent for balancing the rounded cranium with a pointed chin.',
        'Method 2 (Oval): The quickest and most organic way to capture a face in seconds.',
        'Method 3 (Box Cube): Helps you understand the plane of the temples, forehead, and jaw in 3D.',
        'Method 4 (Silhouette): Starts from the hair and shape first, skipping internal construction completely.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Method 1: Circle + Jaw -->
          <g transform="translate(20, 20)">
            <circle cx="40" cy="35" r="25" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.5" />
            <path d="M18 42 L32 68 L48 68 L62 42" stroke="#E06D53" stroke-width="2" />
            <text x="40" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">1. CIRCLE + JAW</text>
          </g>

          <!-- Method 2: Oval Base -->
          <g transform="translate(155, 20)">
            <ellipse cx="40" cy="45" rx="24" ry="32" stroke="#2D2723" stroke-width="2.5" />
            <line x1="20" y1="45" x2="60" y2="45" stroke="#E06D53" stroke-width="1.8" />
            <text x="40" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">2. EGG / OVAL</text>
          </g>

          <!-- Method 3: 3D Box -->
          <g transform="translate(290, 20)">
            <path d="M20 20 L50 15 L65 25 L65 65 L48 75 L20 65 Z" stroke="#2D2723" stroke-width="2.2" />
            <line x1="48" y1="18" x2="48" y2="75" stroke="#8C7E72" stroke-width="1.5" />
            <text x="42" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">3. 3D BOX BLOCK</text>
          </g>

          <!-- Method 4: Pure Silhouette -->
          <g transform="translate(420, 20)">
            <path d="M20 30 C15 15 35 10 50 15 C65 20 68 45 60 55 C55 65 30 75 22 60 C18 50 15 40 20 30 Z" fill="#E8DEC8" stroke="#2D2723" stroke-width="2.5" />
            <text x="40" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">4. SILHOUETTE</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-circle-jaw', label: 'Circle + Jaw Wedge', description: 'Start with a ball for the brain case, attach a V or U underneath' },
      { id: 'ex-egg', label: 'Egg Oval', description: 'Simple continuous curved loop tapered at one end' },
      { id: 'ex-box', label: 'Cube Prism', description: 'Block out the front plane and side plane for strong perspective' },
      { id: 'ex-contour', label: 'Direct Silhouette', description: 'Draw the outer hairline and profile in one fluid continuous stroke' },
    ],
    moreExamples: [
      { id: 'ex-peanut', label: 'Peanut Construction', description: 'Upper sphere and lower sphere joined with a waist' },
      { id: 'ex-wedge', label: 'Wedge Block', description: 'Chiseled doorstop wedge for stylized animation' },
    ],
    challenge: 'Draw two faces using Method 1 (Circle + Jaw) and two faces using Method 3 (Box). Notice how the box leads to firmer angles.',
  },

  // SECTION 10: EYE LIBRARY
  {
    id: 'exp-eyes-library',
    prompt: 'Draw a pair of eyes using different shapes and spacing.',
    explanation: 'Eyes tell the viewer where to look and what the character is feeling. Altering the eyelid curve, pupil size, or spacing changes the whole emotion.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['eyes', 'gaze', 'expression', 'character', 'details'],
    themeIds: ['everyday', 'fantasy', 'animals'],
    visualReference: {
      id: 'ref-exp-eyes-library',
      type: 'variation',
      title: 'Eye Shapes, Spacing & Gaze Directions',
      altText: 'Instructional chart showing Round, Almond, Line Slit, Angular, Wide Spaced, Close Spaced, and Gaze directions (looking left, up, and down).',
      explanation: 'Eyes are not footballs with black dots. They are spheres tucked into lids. Simple dots, crescents, or angular wedges can convey just as much life as complex drawings.',
      whatToNotice: [
        'Close spacing makes a character feel intense, focused, or suspicious.',
        'Wide spacing makes a character feel open, innocent, or dreamy.',
        'Showing white space all around the pupil creates shock or terror.',
        'Covering the top half of the pupil with the upper lid creates calm or tiredness.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Round Eyes -->
          <g transform="translate(15, 20)">
            <circle cx="16" cy="25" r="12" stroke="#2D2723" stroke-width="2.2" />
            <circle cx="48" cy="25" r="12" stroke="#2D2723" stroke-width="2.2" />
            <circle cx="18" cy="24" r="4" fill="#2D2723" stroke="none" />
            <circle cx="50" cy="24" r="4" fill="#2D2723" stroke="none" />
            <text x="32" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ROUND (WIDE)</text>
          </g>

          <!-- 2. Almond Eyelids -->
          <g transform="translate(100, 20)">
            <path d="M4 25 Q18 12 32 25 Q18 36 4 25 Z" stroke="#2D2723" stroke-width="2" />
            <path d="M42 25 Q56 12 70 25 Q56 36 42 25 Z" stroke="#2D2723" stroke-width="2" />
            <circle cx="18" cy="24" r="3.5" fill="#2D2723" stroke="none" />
            <circle cx="56" cy="24" r="3.5" fill="#2D2723" stroke="none" />
            <text x="37" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ALMOND</text>
          </g>

          <!-- 3. Minimal Line / Slit -->
          <g transform="translate(195, 20)">
            <line x1="8" y1="25" x2="30" y2="25" stroke="#2D2723" stroke-width="3" stroke-linecap="round" />
            <line x1="45" y1="25" x2="67" y2="25" stroke="#2D2723" stroke-width="3" stroke-linecap="round" />
            <text x="37" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LINE SLITS</text>
          </g>

          <!-- 4. Gaze Direction: Looking Up -->
          <g transform="translate(285, 20)">
            <path d="M8 30 Q20 15 32 30" stroke="#2D2723" stroke-width="2.5" />
            <path d="M48 30 Q60 15 72 30" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="20" cy="20" r="3.5" fill="#E06D53" stroke="none" />
            <circle cx="60" cy="20" r="3.5" fill="#E06D53" stroke="none" />
            <text x="40" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">GAZE UP</text>
          </g>

          <!-- 5. Spacing Comparison: Wide vs Close -->
          <g transform="translate(385, 10)">
            <!-- Close -->
            <circle cx="16" cy="18" r="7" stroke="#2D2723" stroke-width="2" />
            <circle cx="34" cy="18" r="7" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="38" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Close Spaced</text>
            <!-- Wide -->
            <circle cx="85" cy="18" r="7" stroke="#2D2723" stroke-width="2" />
            <circle cx="125" cy="18" r="7" stroke="#2D2723" stroke-width="2" />
            <text x="105" y="38" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Wide Spaced</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-round', label: 'Big Round Eyes', description: 'Curious, alert, innocent, open to the world' },
      { id: 'ex-almond', label: 'Almond Contours', description: 'Naturalistic curves with distinct lids' },
      { id: 'ex-droopy', label: 'Droopy / Tired', description: 'Corners angle down for gentle or weary characters' },
      { id: 'ex-dots', label: 'Simple Ink Dots', description: 'Storybook minimalism that lets the pose do the work' },
    ],
    moreExamples: [
      { id: 'ex-angular', label: 'Angular Wedges', description: 'Sharp diagonals for intense comic styling' },
      { id: 'ex-half-closed', label: 'Half-Lidded', description: 'Upper eyelid relaxed halfway down pupil' },
    ],
    challenge: 'Draw three faces with identical smiles, but give one big round eyes, one narrow slits, and one wide-spaced dots.',
  },

  // SECTION 11: EYEBROW LIBRARY
  {
    id: 'exp-eyebrows-library',
    prompt: 'Add eyebrows that immediately show an emotion.',
    explanation: 'Eyebrows are emotional dials. Tilting the inner ends up shows worry or sadness; angling them down into a V shows anger or determination.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['eyebrows', 'expression', 'emotion', 'angle', 'character'],
    themeIds: ['everyday', 'character'],
    visualReference: {
      id: 'ref-exp-eyebrows-library',
      type: 'variation',
      title: 'Eyebrow Angles & Direction Arrows',
      altText: 'Chart showing Neutral eyebrows, Angry V-slant, Worried inverted-V, Raised surprise, Suspicious asymmetrical arch, and Sad slope.',
      explanation: 'Eyebrows anchor to the brow bone. You can convey almost any emotion by simply changing the angle of two short strokes.',
      whatToNotice: [
        'Angling down toward the center: Anger, determination, or deep concentration.',
        'Angling up toward the center: Worry, sadness, sympathy, or pleading.',
        'One raised and one lowered: Confusion, skepticism, or playful intrigue.',
        'High curved arches: Surprise, delight, or shock.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Neutral -->
          <g transform="translate(15, 20)">
            <path d="M10 20 Q25 18 40 20" stroke="#2D2723" stroke-width="3" />
            <path d="M55 20 Q70 18 85 20" stroke="#2D2723" stroke-width="3" />
            <text x="47" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">NEUTRAL</text>
          </g>

          <!-- 2. Angry (Down V) -->
          <g transform="translate(105, 20)">
            <path d="M10 14 L40 26" stroke="#2D2723" stroke-width="3.5" />
            <path d="M55 26 L85 14" stroke="#2D2723" stroke-width="3.5" />
            <path d="M43 27 L48 29 L53 27" stroke="#E06D53" stroke-width="1.8" />
            <text x="47" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ANGRY / INTENSE</text>
          </g>

          <!-- 3. Worried / Pleading (Up Inverted V) -->
          <g transform="translate(205, 20)">
            <path d="M10 26 L38 14" stroke="#2D2723" stroke-width="3" />
            <path d="M58 14 L85 26" stroke="#2D2723" stroke-width="3" />
            <text x="47" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">WORRIED</text>
          </g>

          <!-- 4. Suspicious (Asymmetric) -->
          <g transform="translate(305, 20)">
            <path d="M10 8 Q25 3 40 8" stroke="#2D2723" stroke-width="3" />
            <path d="M55 24 L85 20" stroke="#2D2723" stroke-width="3" />
            <text x="47" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SKEPTICAL</text>
          </g>

          <!-- 5. Surprised (High Arches) -->
          <g transform="translate(415, 20)">
            <path d="M10 18 Q25 5 40 18" stroke="#2D2723" stroke-width="3" />
            <path d="M55 18 Q70 5 85 18" stroke="#2D2723" stroke-width="3" />
            <text x="47" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SURPRISED</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-v-brow', label: 'V-Angle Brows', description: 'Angled down toward bridge: anger, intense focus' },
      { id: 'ex-sad-brow', label: 'Sloping Brows', description: 'Inner corners raised: concern, sympathy, sadness' },
      { id: 'ex-arched-brow', label: 'High Arches', description: 'Floating high off the eyes: amazement or alarm' },
      { id: 'ex-raised-one', label: 'One Raised / One Low', description: 'Classic questioning eyebrow raise' },
    ],
    moreExamples: [
      { id: 'ex-flat-thick', label: 'Heavy Flat Brows', description: 'Stalwart, thoughtful, quiet determination' },
      { id: 'ex-bushy', label: 'Bushy Scrub Brows', description: 'Textured zigzag marks for expressive elders' },
    ],
    challenge: 'Take a single face and draw it twice: once with eyebrows tilted up, once with eyebrows tilted down. Notice how the whole story shifts.',
  },

  // SECTION 12: NOSE LIBRARY
  {
    id: 'exp-noses-library',
    prompt: 'Give your face a distinctive nose shape.',
    explanation: 'Noses can be as simple as a single pencil dot, a triangle, a button, or an expressive hook in profile.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['nose', 'features', 'face', 'character'],
    themeIds: ['everyday', 'fantasy'],
    visualReference: {
      id: 'ref-exp-noses-library',
      type: 'variation',
      title: 'Nose Shapes in Front, 3/4 & Side Views',
      altText: 'Chart comparing simple nose options: Dot, Line stroke, Button circle, Triangle wedge, Upturned, Hooked, and Side profile silhouettes.',
      explanation: 'Beginners often overcomplicate noses. In drawings, a nose is primarily represented by the shadow under the tip or a single curved bridge mark.',
      whatToNotice: [
        'A tiny dot nose leaves the focus on big expressive eyes.',
        'A long straight bridge creates an older or more serious impression.',
        'An upturned button nose creates a perky, playful personality.',
        'A wide rounded bulb grounds a friendly, grounded character.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Dot & Line -->
          <g transform="translate(25, 20)">
            <circle cx="25" cy="25" r="3" fill="#2D2723" stroke="none" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TINY DOT</text>
          </g>

          <!-- 2. Simple L / Angle -->
          <g transform="translate(105, 20)">
            <path d="M22 15 L22 35 L32 35" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">L-LINE</text>
          </g>

          <!-- 3. Button / Circle -->
          <g transform="translate(185, 20)">
            <circle cx="25" cy="25" r="8" stroke="#2D2723" stroke-width="2.2" />
            <path d="M12 28 Q15 32 18 30 M32 30 Q35 32 38 28" stroke="#8C7E72" stroke-width="1.8" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BUTTON</text>
          </g>

          <!-- 4. Triangle Wedge -->
          <g transform="translate(275, 20)">
            <polygon points="25,12 36,36 14,36" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TRIANGLE</text>
          </g>

          <!-- 5. Upturned Profile -->
          <g transform="translate(365, 20)">
            <path d="M15 15 C20 28 22 35 32 30 C30 36 22 36 15 34" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">UPTURNED</text>
          </g>

          <!-- 6. Hooked Raptor Nose -->
          <g transform="translate(455, 20)">
            <path d="M15 15 Q28 20 32 32 Q26 38 18 32" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HOOKED</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-dot-nose', label: 'Dot Nose', description: 'Minimalist spot, keeps focus on large eyes' },
      { id: 'ex-l-nose', label: 'Simple L Angle', description: 'One vertical stroke down and one horizontal nostril turn' },
      { id: 'ex-button', label: 'Rounded Button', description: 'Circle with two soft nostril commas' },
      { id: 'ex-hook', label: 'Hooked Profile', description: 'Strong, arched bridge for dramatic silhouettes' },
    ],
    moreExamples: [
      { id: 'ex-wide-bulb', label: 'Bulbous Nose', description: 'Wide grounded sphere for friendly elders or dwarves' },
      { id: 'ex-triangle-flat', label: 'Flat Triangle', description: 'Stylized geometric design nose' },
    ],
    challenge: 'Draw four identical head outlines. Put a tiny dot on the first, a giant potato on the second, an upturned button on the third, and a long sharp hook on the fourth.',
  },

  // SECTION 13: MOUTH LIBRARY
  {
    id: 'exp-mouth-library',
    prompt: 'Draw a mouth showing speech or emotion.',
    explanation: 'A mouth can smile, smirk, frown, shout, or gap in awe. Watch the corner directions: up is joy, down is sorrow, flat is neutral.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['mouth', 'lips', 'expression', 'speech', 'character'],
    themeIds: ['everyday', 'character'],
    visualReference: {
      id: 'ref-exp-mouth-library',
      type: 'variation',
      title: 'Mouth Expressions & Mouth Opening Widths',
      altText: 'Chart showing Neutral line, Gentle smile, Wide grin showing teeth, Open shouting O, Smirk with one corner lifted, and Downward frown.',
      explanation: 'The corners of the mouth are tiny anchors. Lifting just one corner creates a confident smirk; stretching both wide reveals energy.',
      whatToNotice: [
        'An open mouth reveals tongue and teeth shapes (simple crescent curves).',
        'A single corner lift creates irony, wit, or suspicion.',
        'A small compact circle creates surprise or singing ("O").',
        'A wavy mouth line communicates nervousness or holding back laughter.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Gentle Smile -->
          <g transform="translate(20, 20)">
            <path d="M10 25 Q25 38 40 25" stroke="#2D2723" stroke-width="2.8" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SMILE</text>
          </g>

          <!-- 2. Wide Tooth Grin -->
          <g transform="translate(105, 20)">
            <path d="M8 20 Q25 15 42 20 Q25 42 8 20 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <line x1="8" y1="20" x2="42" y2="20" stroke="#8C7E72" stroke-width="1.8" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">GRIN (TEETH)</text>
          </g>

          <!-- 3. Open Shouting O -->
          <g transform="translate(200, 15)">
            <ellipse cx="25" cy="25" rx="14" ry="18" stroke="#2D2723" stroke-width="2.5" fill="#2D2723" />
            <path d="M18 36 Q25 28 32 36" stroke="#FAF5EB" stroke-width="2" />
            <text x="25" y="60" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">OPEN / SHOUT</text>
          </g>

          <!-- 4. One-Sided Smirk -->
          <g transform="translate(295, 20)">
            <path d="M10 30 Q22 30 38 18" stroke="#2D2723" stroke-width="2.8" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SMIRK</text>
          </g>

          <!-- 5. Frown -->
          <g transform="translate(385, 20)">
            <path d="M10 32 Q25 20 40 32" stroke="#2D2723" stroke-width="2.8" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">FROWN</text>
          </g>

          <!-- 6. Wavy Nervous -->
          <g transform="translate(465, 20)">
            <path d="M8 25 Q18 18 28 30 T48 24" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">NERVOUS</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-gentle-smile', label: 'Gentle Curve', description: 'Soft upward bow for relaxed warmth' },
      { id: 'ex-wide-grin', label: 'Full Teeth Grin', description: 'Wide arc with interior tooth line' },
      { id: 'ex-shout-o', label: 'Open Shout Oval', description: 'Deep dark mouth cavity with a tongue crescent' },
      { id: 'ex-smirk', label: 'Asymmetrical Smirk', description: 'One corner cocked upward in amused defiance' },
    ],
    moreExamples: [
      { id: 'ex-grimace', label: 'Straight Teeth Clench', description: 'Horizontal pill slit with vertical tooth lines' },
      { id: 'ex-tongue-out', label: 'Cheeky Tongue', description: 'Tongue lobe poking out past bottom lip' },
    ],
    challenge: 'Draw a mouth wide open singing, a mouth sipping with a straw, and a mouth held tight in a secret.',
  },

  // SECTION 14: EXPRESSION LIBRARY
  {
    id: 'exp-expressions-working-together',
    prompt: 'Create a face where eyebrows, eyes, and mouth work together.',
    explanation: 'Facial expressions are not just a mouth; they are a team. In anger, brows drop, eyes squint, and teeth clench. In surprise, everything opens wide.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    level: 'intermediate',
    tags: ['expression', 'emotion', 'face', 'character', 'acting'],
    themeIds: ['everyday', 'character', 'animation'],
    visualReference: {
      id: 'ref-exp-expressions-working-together',
      type: 'expression',
      title: 'Full Expressions: Eyebrows + Eyes + Mouth Harmony',
      altText: 'Six character faces showing Happy, Shocked/Surprised, Angry/Determined, Sad/Grieving, Focused/Intense, and Tired/Exhausted.',
      explanation: 'Every emotion pulls facial muscles either inward (compression) or outward (expansion). Notice how shock expands every feature while anger compresses toward the nose.',
      whatToNotice: [
        'Happy: Brows relax, cheeks push eyes into upside-down crescents, mouth corners lift.',
        'Surprised: Brows leap up, pupils shrink with white showing all around, mouth opens tall.',
        'Angry: Brows dig down into a furrow, eyes narrow, mouth corners pull down or bare teeth.',
        'Sad: Inner brow corners elevate, upper eyelids droop, mouth droops at corners.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Happy -->
          <g transform="translate(15, 20)">
            <circle cx="35" cy="40" r="30" stroke="#2D2723" stroke-width="2.5" />
            <path d="M20 28 Q26 23 32 28 M42 28 Q48 23 54 28" stroke="#2D2723" stroke-width="2.5" />
            <path d="M22 36 Q27 30 32 36 M42 36 Q47 30 52 36" stroke="#2D2723" stroke-width="2.5" />
            <path d="M24 50 Q36 62 48 50" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HAPPY</text>
          </g>

          <!-- 2. Surprised -->
          <g transform="translate(105, 20)">
            <circle cx="35" cy="40" r="30" stroke="#2D2723" stroke-width="2.5" />
            <path d="M18 20 Q26 12 34 20 M40 20 Q48 12 56 20" stroke="#2D2723" stroke-width="2.2" />
            <circle cx="26" cy="34" r="6" stroke="#2D2723" stroke-width="2" />
            <circle cx="48" cy="34" r="6" stroke="#2D2723" stroke-width="2" />
            <circle cx="26" cy="34" r="2" fill="#2D2723" stroke="none" />
            <circle cx="48" cy="34" r="2" fill="#2D2723" stroke="none" />
            <ellipse cx="37" cy="54" rx="7" ry="10" stroke="#2D2723" stroke-width="2" fill="#2D2723" />
            <text x="35" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SURPRISED</text>
          </g>

          <!-- 3. Angry / Determined -->
          <g transform="translate(195, 20)">
            <circle cx="35" cy="40" r="30" stroke="#2D2723" stroke-width="2.5" />
            <path d="M18 26 L34 33 M56 26 L40 33" stroke="#2D2723" stroke-width="3" />
            <circle cx="27" cy="37" r="3" fill="#2D2723" stroke="none" />
            <circle cx="47" cy="37" r="3" fill="#2D2723" stroke="none" />
            <path d="M24 56 Q36 48 48 56" stroke="#2D2723" stroke-width="2.8" />
            <text x="35" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ANGRY</text>
          </g>

          <!-- 4. Sad -->
          <g transform="translate(285, 20)">
            <circle cx="35" cy="40" r="30" stroke="#2D2723" stroke-width="2.5" />
            <path d="M18 30 L32 23 M56 30 L42 23" stroke="#2D2723" stroke-width="2.8" />
            <path d="M22 37 Q27 42 32 37 M42 37 Q47 42 52 37" stroke="#2D2723" stroke-width="2.2" />
            <path d="M26 56 Q36 46 46 56" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SAD</text>
          </g>

          <!-- 5. Tired / Bored -->
          <g transform="translate(375, 20)">
            <circle cx="35" cy="40" r="30" stroke="#2D2723" stroke-width="2.5" />
            <line x1="20" y1="26" x2="34" y2="26" stroke="#2D2723" stroke-width="2.5" />
            <line x1="40" y1="26" x2="54" y2="26" stroke="#2D2723" stroke-width="2.5" />
            <path d="M20 38 L34 38 M40 38 L54 38" stroke="#2D2723" stroke-width="2.5" />
            <line x1="26" y1="52" x2="46" y2="52" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TIRED</text>
          </g>

          <!-- 6. Focused / Confident -->
          <g transform="translate(465, 20)">
            <circle cx="35" cy="40" r="30" stroke="#2D2723" stroke-width="2.5" />
            <path d="M20 27 L34 29 M40 29 L54 27" stroke="#2D2723" stroke-width="3" />
            <circle cx="28" cy="36" r="3" fill="#2D2723" stroke="none" />
            <circle cx="46" cy="36" r="3" fill="#2D2723" stroke="none" />
            <path d="M26 52 Q35 50 48 44" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CONFIDENT</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-happy', label: 'Happy / Relieved', description: 'Curved eye slits, lifted brows, warm open smile' },
      { id: 'ex-surprised', label: 'Shock / Wonder', description: 'High arched brows, circular eyes with dot pupils, tall mouth' },
      { id: 'ex-angry', label: 'Fierce / Resolute', description: 'Sharp inward V-brows, narrowed eyes, downturned mouth' },
      { id: 'ex-tired', label: 'Exhausted / Resigned', description: 'Drooping lids, flat brows, horizontal slack mouth' },
    ],
    moreExamples: [
      { id: 'ex-confused', label: 'Confused / Puzzled', description: 'One brow up, one brow down, tilted head, wavy mouth' },
      { id: 'ex-proud', label: 'Proud / Victorious', description: 'Eyes closed in smug bliss, chest lifted, grin wide' },
    ],
    challenge: 'Draw your character listening to a sudden loud noise outside their window. Show whether they are scared, curious, or annoyed.',
  },

  // SECTION 15: HAIR LIBRARY
  {
    id: 'exp-hair-library',
    prompt: 'Give your character a distinct hairstyle using big silhouette shapes.',
    explanation: 'Do not draw individual strands of hair one by one. Draw hair as big clumps and mass shapes that drape around the skull.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['hair', 'silhouette', 'character', 'design', 'style'],
    themeIds: ['everyday', 'fantasy', 'sci-fi'],
    visualReference: {
      id: 'ref-exp-hair-library',
      type: 'variation',
      title: 'Hairstyles as Bold Outer Silhouettes',
      altText: 'Chart showing Straight bob, Curly puffs, Spiky anime fringe, Braids/Locs, Big Afro volume, Topknot Bun, and Buzz Cut.',
      explanation: 'Think of hair like clay sitting on top of the skull. Give the hair volume by extending the outer line beyond the skull guide.',
      whatToNotice: [
        'Hair adds volume and height beyond the bare cranium.',
        'Spikes look best when grouped in varied clumps (large clump, medium clump, tiny stray).',
        'Coily / afro textures create magnificent expansive clouds with bumpy contours.',
        'Gravity pulls long hair downward unless wind or motion lifts it.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Straight Bob / Bangs -->
          <g transform="translate(15, 20)">
            <circle cx="32" cy="42" r="22" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M10 40 C10 16 54 16 54 40 L54 62 L44 62 L44 42 L20 42 L20 62 L10 62 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="32" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">STRAIGHT BOB</text>
          </g>

          <!-- 2. Afro Volume Cloud -->
          <g transform="translate(105, 20)">
            <circle cx="32" cy="42" r="22" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M8 45 C4 30 15 10 32 10 C48 10 60 25 58 45 C58 55 52 65 44 65 L20 65 C12 65 8 55 8 45 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="32" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">AFRO CLOUD</text>
          </g>

          <!-- 3. Spiky Clumps -->
          <g transform="translate(195, 20)">
            <circle cx="32" cy="42" r="22" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M12 45 L5 25 L20 22 L18 8 L34 18 L46 6 L48 24 L60 28 L50 48" stroke="#2D2723" stroke-width="2.5" />
            <text x="32" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SPIKY CLUMPS</text>
          </g>

          <!-- 4. High Bun / Topknot -->
          <g transform="translate(285, 12)">
            <circle cx="32" cy="20" r="14" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M12 55 C12 35 52 35 52 55" stroke="#2D2723" stroke-width="2.5" />
            <text x="32" y="94" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TOPKNOT BUN</text>
          </g>

          <!-- 5. Braids / Locs -->
          <g transform="translate(375, 20)">
            <circle cx="32" cy="42" r="22" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M15 35 Q10 55 12 70 M22 35 Q18 55 20 72 M42 35 Q44 55 42 72 M49 35 Q54 55 52 70" stroke="#2D2723" stroke-width="2.8" />
            <text x="32" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LOCS / BRAIDS</text>
          </g>

          <!-- 6. Buzz Cut / Stubble -->
          <g transform="translate(465, 20)">
            <circle cx="32" cy="42" r="22" stroke="#2D2723" stroke-width="2" />
            <path d="M12 40 C12 25 52 25 52 40" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <text x="32" y="86" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BUZZ CUT</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-bob', label: 'Blunt Bob Bangs', description: 'Geometric helmet cut that frames the eyes' },
      { id: 'ex-afro', label: 'Expansive Afro', description: 'Bouncy, full cloud framing the whole skull' },
      { id: 'ex-spiky', label: 'Dynamic Spikes', description: 'Angled triangles grouped in varied sizes' },
      { id: 'ex-topknot', label: 'High Bun', description: 'Pulled back tight with a circular crown donut' },
    ],
    moreExamples: [
      { id: 'ex-locs', label: 'Flowing Locs / Twists', description: 'Rope-like strands that curve naturally around the shoulders' },
      { id: 'ex-wavy-long', label: 'Long Waves', description: 'S-curve sweeps flowing down past the neck' },
    ],
    challenge: 'Draw the same character three times, but change their hair from short spiky to long waves to a massive bun.',
  },

  // SECTION 16: EAR LIBRARY
  {
    id: 'exp-ears-library',
    prompt: 'Add ears to your character’s head in the right spot.',
    explanation: 'On a human head, ears line up between the eyebrow line and the base of the nose. Animal and fantasy ears can pop straight up, droop low, or feather outward.',
    category: 'ADD',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['ears', 'fantasy', 'animals', 'character', 'placement'],
    themeIds: ['everyday', 'fantasy', 'animals'],
    visualReference: {
      id: 'ref-exp-ears-library',
      type: 'variation',
      title: 'Ear Shapes & Eyebrow-to-Nose Alignment',
      altText: 'Diagram showing human ear placement between eye line and nose line, alongside pointed elf ears, animal cat ears, long floppy rabbit ears, and round bear ears.',
      explanation: 'Check where the ear sits before drawing details. As a character turns their head up or down, the ear moves in the opposite direction.',
      whatToNotice: [
        'Human ear top aligns with the eyebrow; earlobe aligns with the bottom of the nose.',
        'Pointed elf ears extend outward and upward along the angle of the jaw.',
        'Cat / fox ears sit high on top of the skull with triangular depth.',
        'Drooping floppy ears pull the character’s silhouette downward into relaxed comfort.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Human Ear Placement Guide -->
          <g transform="translate(20, 20)">
            <ellipse cx="30" cy="40" rx="20" ry="28" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <line x1="10" y1="28" x2="65" y2="28" stroke="#E06D53" stroke-width="1.2" stroke-dasharray="3 3" />
            <line x1="10" y1="52" x2="65" y2="52" stroke="#E06D53" stroke-width="1.2" stroke-dasharray="3 3" />
            <path d="M50 28 C58 28 62 38 56 46 C52 50 48 52 48 52" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="80" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HUMAN (ALIGNED)</text>
          </g>

          <!-- 2. Pointed Elf / Fairy -->
          <g transform="translate(130, 20)">
            <ellipse cx="25" cy="40" rx="18" ry="26" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M38 38 L65 18 L42 46" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="35" y="80" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ELF / POINTED</text>
          </g>

          <!-- 3. Cat / Fox Triangles -->
          <g transform="translate(235, 15)">
            <ellipse cx="30" cy="45" rx="24" ry="26" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M12 25 L18 6 L30 20 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M48 25 L42 6 L30 20 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="30" y="85" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CAT / FOX</text>
          </g>

          <!-- 4. Bear / Mouse Round Lobes -->
          <g transform="translate(340, 15)">
            <ellipse cx="30" cy="45" rx="24" ry="26" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <circle cx="12" cy="20" r="10" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <circle cx="48" cy="20" r="10" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="30" y="85" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BEAR / ROUND</text>
          </g>

          <!-- 5. Floppy Dog / Bunny Ears -->
          <g transform="translate(445, 15)">
            <ellipse cx="30" cy="40" rx="22" ry="24" stroke="#8C7E72" stroke-dasharray="2 2" stroke-width="1.2" />
            <path d="M12 30 C5 35 2 60 14 65 C18 55 18 35 12 30 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M48 30 C55 35 58 60 46 65 C42 55 42 35 48 30 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <text x="30" y="85" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">FLOPPY LOBES</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-human-ear', label: 'Human C-Cup', description: 'Curved C shape sitting between the eye line and nose base' },
      { id: 'ex-elf-ear', label: 'Elven Spike', description: 'Graceful pointed tip trailing upward' },
      { id: 'ex-cat-ear', label: 'Cat Triangles', description: 'Sharp upright wedges on top of the cranium' },
      { id: 'ex-floppy', label: 'Floppy Droop', description: 'Soft teardrops dangling beside the jaw' },
    ],
    moreExamples: [
      { id: 'ex-mouse-round', label: 'Big Round Mouse', description: 'Wide radar circles perched on the upper skull' },
      { id: 'ex-fin-ears', label: 'Aquatic Fins', description: 'Ribbed webbed crests for water creatures' },
    ],
    challenge: 'Draw a creature whose mood is shown purely by its ears: perked straight up when curious, and drooped flat back when startled.',
  },
];
