import { CreativePrompt } from '../types/prompt';

export const MASTER_PROMPTS_PART_4: CreativePrompt[] = [
  // SECTION 24 — ENVIRONMENT
  {
    id: 'master-28-environment',
    prompt: 'Build a simple environment.',
    explanation: 'Place your subject in a living world using three distinct planes of depth: foreground, middle ground, and background.',
    category: 'START',
    difficulty: 'medium',
    tags: ['environment', 'landscape', 'depth', 'world'],
    visualReference: {
      type: 'environment',
      title: 'Three Planes of Environmental Depth',
      altText: 'Instructional diagram dividing a scene into three layers: Foreground bold grass and rock, Middle ground rolling hill with subject tree/character, and Background distant faint mountains and sun.',
      examples: [
        'Foreground: large rock, fencepost, or grass framing the edge',
        'Middle ground: rolling hill with character, house, or main action',
        'Background: faint mountain ridges, clouds, and rising sun',
      ],
      whatToNotice: 'Foreground elements are largest, darkest, and highest contrast. Background elements are simplified, faint, and sit higher toward the horizon.',
      challenge: 'Have a foreground branch hang down into the top corner of your scene.',
      beginnerTerms: [
        { term: 'Foreground', definition: 'The part of the scene closest to the viewer, drawn largest and boldest.' },
        { term: 'Background', definition: 'The distant scenery furthest away, drawn small and faint.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Background: Mountains & Sun -->
          <g stroke="#C2B6A8" stroke-width="1.5">
            <circle cx="210" cy="35" r="14" stroke="#E06D53" stroke-width="1.8" />
            <path d="M40 70 L 110 35 L 180 70 M 150 70 L 250 25 L 340 70" />
            <text x="210" y="20" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">BACKGROUND (FAINT & DISTANT)</text>
          </g>
          <!-- Middle Ground: Rolling Hills & House -->
          <g stroke="#8C7E72" stroke-width="2">
            <path d="M10 95 Q 140 65 260 90 T 410 80" />
            <!-- Little House -->
            <path d="M220 85 L 235 72 L 250 85 Z" fill="#FCFAF6" />
            <rect x="224" y="85" width="22" height="15" fill="#FCFAF6" />
            <text x="235" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">MIDDLE GROUND (SUBJECT)</text>
          </g>
          <!-- Foreground: Big Grass / Rock -->
          <g stroke="#2D2723" stroke-width="2.8">
            <path d="M-5 130 Q 80 115 140 145" />
            <path d="M15 130 L 25 105 M 25 132 L 32 108 M 38 135 L 42 115" stroke="#2D2723" stroke-width="2.5" />
            <path d="M70 140 C 65 120, 110 118, 120 145 Z" fill="#2D2723" fill-opacity="0.08" />
            <text x="70" y="146" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">FOREGROUND</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 25 — PERSPECTIVE
  {
    id: 'master-29-perspective',
    prompt: 'Make objects look farther away.',
    explanation: 'Objects shrink as they approach the horizon, and closer objects overlap and cover objects behind them.',
    category: 'START',
    difficulty: 'medium',
    tags: ['perspective', 'depth', 'overlapping', 'scale'],
    visualReference: {
      type: 'composition',
      title: 'Perspective Clues & Overlapping',
      altText: 'Instructional sketch showing three telephone poles or trees receding along converging perspective lines, with closer objects overlapping distant objects.',
      examples: [
        'Size change: Big tree close up, medium tree midway, tiny speck in distance',
        'Overlapping: The front object cuts off the contour of the shape behind it',
        'Vertical placement: Distant items sit higher on the page towards the horizon',
        'Atmospheric fade: Heavy dark lines up front, light hairline marks in distance',
      ],
      whatToNotice: 'Overlapping is the most powerful illusion of three dimensions. Just one shape covering another instantly creates depth without complicated math.',
      challenge: 'Draw a winding footpath that narrows from wide at your feet to a hairline on the horizon.',
      beginnerTerms: [
        { term: 'Perspective', definition: 'The art trick that makes flat drawings look like deep real space.' },
        { term: 'Overlapping', definition: 'Placing one shape in front of another to show which is closer.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Horizon Line & Converging Rails -->
          <line x1="20" y1="45" x2="400" y2="45" stroke="#C2B6A8" stroke-dasharray="3 3" />
          <text x="350" y="40" font-size="8" font-family="sans-serif" fill="#8C7E72" stroke="none">HORIZON LINE</text>
          <line x1="210" y1="45" x2="30" y2="135" stroke="#E06D53" stroke-width="1.5" stroke-dasharray="2 2" />
          <line x1="210" y1="45" x2="160" y2="135" stroke="#E06D53" stroke-width="1.5" stroke-dasharray="2 2" />
          <!-- Big Foreground Box/Tree -->
          <g transform="translate(40, 60)">
            <rect x="0" y="0" width="35" height="65" stroke="#2D2723" stroke-width="3" fill="#FCFAF6" />
            <text x="17" y="35" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BIG (NEAR)</text>
          </g>
          <!-- Medium Box (Behind & Overlapped) -->
          <g transform="translate(85, 45)">
            <rect x="0" y="0" width="22" height="42" stroke="#8C7E72" stroke-width="2" fill="#FCFAF6" />
            <text x="11" y="24" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">MID</text>
          </g>
          <!-- Small Box (Far Away) -->
          <g transform="translate(135, 40)">
            <rect x="0" y="0" width="10" height="18" stroke="#C2B6A8" stroke-width="1.5" fill="#FCFAF6" />
            <text x="5" y="11" font-size="6" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">FAR</text>
          </g>
          <!-- Overlapping Circles Illustration -->
          <g transform="translate(260, 50)">
            <circle cx="70" cy="50" r="28" stroke="#2D2723" stroke-width="3" fill="#FCFAF6" />
            <circle cx="45" cy="35" r="22" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 3" />
            <circle cx="30" cy="25" r="16" stroke="#C2B6A8" stroke-width="1.5" stroke-dasharray="2 2" />
            <text x="65" y="90" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">OVERLAPPING = DEPTH</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 26 — COMPOSITION
  {
    id: 'master-30-composition',
    prompt: 'Choose where the important thing goes.',
    explanation: 'Placing your subject directly dead-center can feel static. Try pushing it onto a third line or tucking it into a corner.',
    category: 'START',
    difficulty: 'medium',
    tags: ['composition', 'rule of thirds', 'focal point', 'framing'],
    visualReference: {
      type: 'composition',
      title: 'Composition Framing & Rule of Thirds',
      altText: 'Diagram of a canvas with rule-of-thirds grid lines, comparing dead-center placement with an off-center focal point and dramatic corner placement.',
      examples: [
        'Rule of Thirds: Place the character’s eye or body on an intersection grid line',
        'Off-center: Subject on left, wide breathing room or landscape on right',
        'High horizon: Ground dominates the page; viewer feels grounded looking down',
        'Low horizon: Sky dominates the page; viewer looks up in awe',
      ],
      whatToNotice: 'Where the subject is placed determines how the viewer feels. Off-center creates curiosity about where the character is heading.',
      challenge: 'Push the character so far to the edge that half their body is cropped by the paper border.',
      beginnerTerms: [
        { term: 'Composition', definition: 'How and where you arrange all the parts of your drawing on the paper.' },
        { term: 'Focal Point', definition: 'The spot where the viewer’s eye looks first.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Canvas 1: Dead Center (Static) -->
          <g transform="translate(30, 20)">
            <rect x="0" y="0" width="100" height="75" rx="4" stroke="#8C7E72" stroke-width="1.5" />
            <circle cx="50" cy="38" r="14" stroke="#8C7E72" stroke-width="2" />
            <text x="50" y="92" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">CENTER (STATIC)</text>
          </g>
          <!-- Canvas 2: Rule of Thirds (Dynamic) -->
          <g transform="translate(160, 20)">
            <rect x="0" y="0" width="100" height="75" rx="4" stroke="#2D2723" stroke-width="1.5" />
            <!-- Grid Lines -->
            <line x1="33" y1="0" x2="33" y2="75" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            <line x1="66" y1="0" x2="66" y2="75" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            <!-- Focal Point at Intersection -->
            <circle cx="33" cy="25" r="12" stroke="#2D2723" stroke-width="2.5" fill="#E06D53" fill-opacity="0.15" />
            <text x="50" y="92" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">RULE OF THIRDS</text>
          </g>
          <!-- Canvas 3: Corner Dramatic -->
          <g transform="translate(290, 20)">
            <rect x="0" y="0" width="100" height="75" rx="4" stroke="#8C7E72" stroke-width="1.5" />
            <circle cx="85" cy="62" r="18" stroke="#2D2723" stroke-width="2.5" />
            <line x1="10" y1="35" x2="65" y2="50" stroke="#E06D53" stroke-width="1.5" stroke-dasharray="2 2" />
            <text x="50" y="92" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">CORNER CROPPED</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 27 — NEGATIVE SPACE
  {
    id: 'master-31-negative-space',
    prompt: 'Draw the space around the object.',
    explanation: 'Instead of looking at the object itself, focus your eyes on the empty air holes trapped between limbs and furniture.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    tags: ['negative space', 'silhouette', 'contour', 'perception'],
    visualReference: {
      type: 'silhouette',
      title: 'Negative Space & Air Voids',
      altText: 'Diagram illustrating negative space: a chair where the empty air gaps between the four legs and rungs are highlighted, and a figure with hands on hips showing triangular air holes.',
      examples: [
        'The triangle of air between an arm resting on a hip and the torso',
        'The opening between two crossed legs or under a chair',
        'The sky shape framed between two leaning tree trunks',
        'The empty space inside a mug handle',
      ],
      whatToNotice: 'When you draw the empty "air shapes" accurately, the subject draws itself without you worrying about anatomy.',
      challenge: 'Shade only the empty air holes, leaving the actual subject pure white.',
      beginnerTerms: [
        { term: 'Negative Space', definition: 'The empty background air around and inside an object.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Arm on Hip Gap -->
          <g transform="translate(40, 15)">
            <circle cx="30" cy="18" r="8" stroke="#8C7E72" />
            <path d="M25 26 L 25 75 M 35 26 L 35 75" stroke="#8C7E72" stroke-width="2" />
            <!-- Arm Bent Creating Triangle Air Void -->
            <path d="M25 32 L 8 48 L 25 58" stroke="#2D2723" stroke-width="2.5" />
            <!-- Highlighted Void -->
            <polygon points="25,34 11,48 25,56" fill="#E06D53" fill-opacity="0.3" stroke="#E06D53" stroke-width="1.5" />
            <text x="30" y="95" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ARM AIR GAP</text>
          </g>
          <!-- Mug Handle Void -->
          <g transform="translate(170, 20)">
            <rect x="15" y="15" width="40" height="45" rx="4" stroke="#8C7E72" stroke-width="2.2" />
            <path d="M55 22 C 72 22, 72 50, 55 50" stroke="#2D2723" stroke-width="3" />
            <!-- Shaded Handle Opening -->
            <path d="M55 26 C 66 26, 66 46, 55 46 Z" fill="#E06D53" fill-opacity="0.3" stroke="#E06D53" stroke-width="1.5" />
            <text x="40" y="90" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HANDLE VOID</text>
          </g>
          <!-- Chair Rungs -->
          <g transform="translate(300, 15)">
            <line x1="20" y1="10" x2="20" y2="70" stroke="#8C7E72" stroke-width="2.5" />
            <line x1="45" y1="35" x2="45" y2="70" stroke="#8C7E72" stroke-width="2.5" />
            <line x1="16" y1="35" x2="52" y2="35" stroke="#8C7E72" stroke-width="2.5" />
            <!-- Negative Space between legs -->
            <polygon points="22,37 43,37 43,68 22,68" fill="#E06D53" fill-opacity="0.3" stroke="#E06D53" stroke-width="1.5" />
            <text x="32" y="95" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LEGS AIR SPACE</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 28 — TEXTURE
  {
    id: 'master-32-texture',
    prompt: 'Give the surface a texture.',
    explanation: 'Surface patterns tell the viewer what an object feels like: scratchy bark, smooth cold metal, fuzzy wool, or rough cobblestone.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['texture', 'surface', 'materials', 'shading'],
    visualReference: {
      type: 'shape',
      title: 'Texture Swatches & Surface Patterns',
      altText: 'Reference swatch panels illustrating 6 distinct tactile surfaces: tree bark wood grain, stone pebbles, fur strokes, water ripples, metal sheen, and brick masonry.',
      examples: [
        'Wood grain: elongated wavy lines wrapping around knots',
        'Stone / Rock: irregular angular cracking fissures and stippling',
        'Fur / Feathers: short directional flick strokes along the silhouette edge',
        'Water ripples: concentric squashed ovals and gentle dashes',
        'Cold metal: smooth straight highlights and high-contrast reflection bars',
        'Cozy knit fabric: repeating herringbone "V" stitches',
      ],
      whatToNotice: 'Do not fill the entire object edge-to-edge with texture. Placing texture primarily along the shadow terminator line looks much cleaner.',
      challenge: 'Give a soft creature a shiny hard metal helmet.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Wood Grain -->
          <g transform="translate(15, 15)">
            <rect x="0" y="0" width="55" height="55" rx="5" stroke="#8C7E72" stroke-dasharray="2 2" />
            <ellipse cx="28" cy="28" rx="6" ry="12" stroke="#2D2723" stroke-width="1.8" />
            <path d="M12 5 C 18 18 18 38 12 50 M 42 5 C 36 18 36 38 42 50" stroke="#2D2723" stroke-width="1.5" />
            <text x="28" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">WOOD</text>
          </g>
          <!-- Fur / Hair -->
          <g transform="translate(85, 15)">
            <rect x="0" y="0" width="55" height="55" rx="5" stroke="#8C7E72" stroke-dasharray="2 2" />
            <path d="M8 12 L 18 20 M 12 25 L 24 32 M 16 38 L 28 46 M 30 14 L 42 22 M 35 28 L 48 35" stroke="#2D2723" stroke-width="2" />
            <text x="28" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">FUR</text>
          </g>
          <!-- Stone / Pebble -->
          <g transform="translate(155, 15)">
            <rect x="0" y="0" width="55" height="55" rx="5" stroke="#8C7E72" stroke-dasharray="2 2" />
            <polygon points="10,12 24,8 30,22 18,25" stroke="#2D2723" stroke-width="1.8" />
            <polygon points="32,15 48,12 45,28 32,25" stroke="#2D2723" stroke-width="1.8" />
            <polygon points="12,32 28,30 35,46 15,48" stroke="#2D2723" stroke-width="1.8" />
            <text x="28" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">STONE</text>
          </g>
          <!-- Water Ripples -->
          <g transform="translate(225, 15)">
            <rect x="0" y="0" width="55" height="55" rx="5" stroke="#8C7E72" stroke-dasharray="2 2" />
            <ellipse cx="28" cy="28" rx="20" ry="6" stroke="#2D2723" stroke-width="1.8" />
            <ellipse cx="28" cy="28" rx="10" ry="3" stroke="#E06D53" stroke-width="1.8" />
            <text x="28" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">WATER</text>
          </g>
          <!-- Metal Sheen -->
          <g transform="translate(295, 15)">
            <rect x="0" y="0" width="55" height="55" rx="5" stroke="#8C7E72" stroke-dasharray="2 2" />
            <line x1="8" y1="8" x2="48" y2="48" stroke="#2D2723" stroke-width="3" />
            <line x1="16" y1="8" x2="48" y2="40" stroke="#E06D53" stroke-width="1.5" />
            <text x="28" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">METAL</text>
          </g>
          <!-- Fabric Stitches -->
          <g transform="translate(365, 15)">
            <rect x="0" y="0" width="50" height="55" rx="5" stroke="#8C7E72" stroke-dasharray="2 2" />
            <path d="M10 15 L 18 25 L 26 15 M 10 32 L 18 42 L 26 32" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="70" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">KNIT</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 29 — COLOR / MOOD
  {
    id: 'master-33-color-mood',
    prompt: 'Give your drawing a color mood.',
    explanation: 'Color sets temperature and psychological climate. A limited palette of 2 or 3 colors is far more powerful than using every marker in the box.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['color', 'mood', 'palette', 'temperature'],
    visualReference: {
      type: 'shape',
      title: 'Color Mood Palettes & Temperature',
      altText: 'Instructional color swatches comparing Warm fire palette, Cool twilight palette, Earthy moss palette, and High-contrast graphic duo.',
      examples: [
        'Warm palette: Amber, vermilion, sunlit ochre (energy, sunrise, desert)',
        'Cool palette: Slate blue, teal, twilight lavender (calm, mystery, winter)',
        'Earthy palette: Moss green, clay brown, parchment (nature, quiet forest)',
        'Limited duo: Charcoal black + single vibrant accent orange (striking, bold)',
      ],
      whatToNotice: 'Limit your palette. Pick ONE dominant color family and ONE accent color for maximum visual punch.',
      challenge: 'Create the drawing using only ink plus one single accent colored pencil.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Warm Mood -->
          <g transform="translate(20, 15)">
            <circle cx="20" cy="20" r="14" fill="#E06D53" stroke="none" />
            <circle cx="45" cy="20" r="14" fill="#D97706" stroke="none" />
            <circle cx="70" cy="20" r="14" fill="#FBBF24" stroke="none" />
            <text x="45" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">WARM MOOD (HEAT)</text>
          </g>
          <!-- Cool Mood -->
          <g transform="translate(150, 15)">
            <circle cx="20" cy="20" r="14" fill="#0284C7" stroke="none" />
            <circle cx="45" cy="20" r="14" fill="#4F46E5" stroke="none" />
            <circle cx="70" cy="20" r="14" fill="#0D9488" stroke="none" />
            <text x="45" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#0284C7" text-anchor="middle" stroke="none">COOL MOOD (TWILIGHT)</text>
          </g>
          <!-- Accent Duo -->
          <g transform="translate(285, 15)">
            <rect x="10" y="8" width="30" height="24" rx="4" fill="#2D2723" stroke="none" />
            <circle cx="65" cy="20" r="14" fill="#E06D53" stroke="none" />
            <text x="45" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CHARCOAL + 1 ACCENT</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 30 — CREATIVE TRANSFORMATION
  {
    id: 'master-34-creative-transformation',
    prompt: 'Take something ordinary and change one thing.',
    explanation: 'The foundation of surrealism and invention: draw a familiar everyday item, then mutate exactly ONE rule of reality.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    tags: ['transformation', 'surrealism', 'creativity', 'imagination'],
    visualReference: {
      type: 'shape',
      title: 'Ordinary to Extraordinary Transformations',
      altText: 'Instructional sketch showing everyday objects with one surreal twist: a chair floating on balloons, a fish with feathered eagle wings, and a teacup with clock hands.',
      examples: [
        'An ordinary house, but the front door is impossibly tiny',
        'A normal fish, but it has bird feathers and eagle wings',
        'A wooden dining chair, but it floats on balloons',
        'A teacup, but inside is an ocean whirlpool with tiny ship',
        'A common tree, but its leaves are perfectly square',
      ],
      whatToNotice: 'Keeping 90% of the object realistic makes the single 10% weird twist ten times more shocking and delightful.',
      challenge: 'Give an ordinary wristwatch roots growing down into soil.',
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Floating Chair -->
          <g transform="translate(30, 15)">
            <line x1="20" y1="35" x2="20" y2="70" stroke="#2D2723" stroke-width="2" />
            <line x1="40" y1="50" x2="40" y2="70" stroke="#2D2723" stroke-width="2" />
            <line x1="16" y1="50" x2="44" y2="50" stroke="#2D2723" stroke-width="2.5" />
            <line x1="20" y1="35" x2="35" y2="35" stroke="#2D2723" stroke-width="2" />
            <!-- Balloons Lifting It -->
            <path d="M28 35 L 28 20" stroke="#8C7E72" stroke-dasharray="2 2" />
            <circle cx="24" cy="14" r="8" fill="#E06D53" stroke="none" />
            <circle cx="34" cy="12" r="7" fill="#0284C7" stroke="none" />
            <text x="30" y="90" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">FLOATING CHAIR</text>
          </g>
          <!-- Winged Fish -->
          <g transform="translate(170, 20)">
            <ellipse cx="35" cy="35" rx="24" ry="14" stroke="#2D2723" stroke-width="2.5" />
            <path d="M11 35 L 0 25 L 0 45 Z" stroke="#2D2723" stroke-width="2" />
            <circle cx="48" cy="32" r="2.5" fill="#2D2723" />
            <!-- Feathered Wings -->
            <path d="M35 30 C 35 10, 55 5, 65 14 C 55 20, 52 28, 38 34" stroke="#E06D53" stroke-width="2.2" fill="#E06D53" fill-opacity="0.1" />
            <text x="35" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">WINGED FISH</text>
          </g>
          <!-- Tree with Square Leaves -->
          <g transform="translate(310, 15)">
            <path d="M26 70 L 26 40 L 16 28 M 26 40 L 36 26" stroke="#2D2723" stroke-width="3" />
            <!-- Square Foliage -->
            <rect x="8" y="14" width="14" height="14" stroke="#E06D53" stroke-width="2" />
            <rect x="28" y="10" width="16" height="16" stroke="#E06D53" stroke-width="2" />
            <rect x="18" y="0" width="15" height="15" stroke="#E06D53" stroke-width="2" />
            <text x="28" y="90" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SQUARE LEAF TREE</text>
          </g>
        </svg>
      `,
    },
  },
];
