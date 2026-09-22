import { VisualReference } from '../types/prompt';

export const PROMPT_VISUAL_REFERENCES: Record<string, VisualReference> = {
  'ref-three-circles': {
    id: 'ref-three-circles',
    type: 'shape',
    title: 'Three Circles Composition',
    description:
      'Vary the size and placement of three circles across your page. Avoid placing them in a rigid line—give each circle room to breathe.',
    altText:
      'Instructional drawing of three loose circles placed across a sketchbook sheet with different diameters and generous negative space.',
    tags: ['shapes', 'circles', 'start', 'foundation'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Frame representing paper -->
        <rect x="15" y="10" width="350" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        
        <!-- Circle 1: Large dominant circle -->
        <g transform="translate(90, 65)">
          <circle cx="0" cy="0" r="34" stroke="#2D2723" stroke-width="2.5" />
          <ellipse cx="0" cy="0" rx="34" ry="10" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
          <text x="0" y="48" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">1. LARGE HERO</text>
        </g>

        <!-- Circle 2: Medium companion circle placed higher -->
        <g transform="translate(200, 48)">
          <circle cx="0" cy="0" r="22" stroke="#2D2723" stroke-width="2.2" />
          <text x="0" y="34" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">2. MEDIUM</text>
        </g>

        <!-- Circle 3: Small anchor circle lower right -->
        <g transform="translate(295, 78)">
          <circle cx="0" cy="0" r="14" stroke="#E06D53" stroke-width="2.5" fill="#E06D53" fill-opacity="0.1" />
          <text x="0" y="26" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">3. SMALL ANCHOR</text>
        </g>

        <!-- Triangulation guide lines showing asymmetry -->
        <path d="M90 65 L200 48 L295 78 Z" stroke="#E06D53" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6" />
      </svg>
    `,
  },

  'ref-two-lines': {
    id: 'ref-two-lines',
    type: 'gesture',
    title: 'Two Non-Touching Lines',
    description:
      'Draw two expressive strokes that flow across the page without intersecting. Pay attention to the space between them—the gap has its own visual tension.',
    altText:
      'Two distinct curved lines drawn across a canvas with a visible gap between them, showing dynamic flow without touching.',
    tags: ['lines', 'start', 'gesture', 'foundation'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="15" y="10" width="350" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        
        <!-- Line 1: Upper sweeping arc -->
        <path d="M40 35 C110 15 180 65 330 30" stroke="#2D2723" stroke-width="3" />
        <circle cx="40" cy="35" r="3" fill="#2D2723" />
        <circle cx="330" cy="30" r="3" fill="#2D2723" />
        <text x="60" y="24" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">LINE 1: SWEEPING STROKE</text>

        <!-- Line 2: Lower contrasting curve -->
        <path d="M50 100 C150 75 220 115 320 85" stroke="#E06D53" stroke-width="3" />
        <circle cx="50" cy="100" r="3" fill="#E06D53" />
        <circle cx="320" cy="85" r="3" fill="#E06D53" />
        <text x="70" y="115" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">LINE 2: INDEPENDENT RHYTHM</text>

        <!-- Distance arrows showing non-contact -->
        <line x1="160" y1="46" x2="160" y2="82" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
        <text x="170" y="68" font-size="8" font-family="sans-serif" fill="#8C7E72" stroke="none">NO INTERSECTION (GAP)</text>
      </svg>
    `,
  },

  'ref-dot-placement': {
    id: 'ref-dot-placement',
    type: 'shape',
    title: 'Dot Placement & Visual Gravity',
    description:
      'Dots act as visual anchors that draw the viewer’s eye across the sheet. An asymmetrical trio creates an invisible triangle that guides the gaze.',
    altText:
      'Diagram illustrating 3 prominent dots placed across a sheet creating an asymmetrical triangle, plus an arch of smaller dots.',
    tags: ['dots', 'start', 'foundation', 'placement'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="15" y="10" width="350" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        
        <!-- Dot 1 -->
        <circle cx="70" cy="45" r="6" fill="#2D2723" />
        <text x="70" y="32" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DOT 1</text>

        <!-- Dot 2 -->
        <circle cx="300" cy="40" r="7" fill="#2D2723" />
        <text x="300" y="27" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DOT 2</text>

        <!-- Dot 3 -->
        <circle cx="160" cy="95" r="8" fill="#E06D53" />
        <text x="160" y="115" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">DOT 3 (ANCHOR)</text>

        <!-- Invisible triangle lines -->
        <path d="M70 45 L300 40 L160 95 Z" stroke="#E06D53" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5" />
        <text x="180" y="60" font-size="8" font-family="sans-serif" fill="#8C7E72" stroke="none">DYNAMIC TRIANGLE</text>
      </svg>
    `,
  },

  'ref-zigzag-line': {
    id: 'ref-zigzag-line',
    type: 'line-art',
    title: 'Zigzag Stroke & Angular Rhythm',
    description:
      'A sharp zigzag line injects sudden energy, speed, or terrain into your drawing. Change the steepness of each angle as you move across the page.',
    altText:
      'Sharp zigzag stroke crossing from left to right with varied pitch, direction arrows, and angle markers.',
    tags: ['zigzag', 'lines', 'motion', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="15" y="10" width="350" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        
        <!-- Zigzag path -->
        <path d="M35 85 L75 25 L120 100 L170 30 L220 90 L275 40 L340 75" stroke="#2D2723" stroke-width="3" />
        
        <!-- Accent circles on peaks -->
        <circle cx="75" cy="25" r="4" fill="#E06D53" />
        <circle cx="170" cy="30" r="4" fill="#E06D53" />
        <circle cx="275" cy="40" r="4" fill="#E06D53" />

        <!-- Valley markers -->
        <circle cx="120" cy="100" r="3" stroke="#8C7E72" stroke-width="2" />
        <circle cx="220" cy="90" r="3" stroke="#8C7E72" stroke-width="2" />

        <text x="45" y="112" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">PULL QUICK SNAPS</text>
        <text x="210" y="24" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">VARY PEAK HEIGHTS</text>
      </svg>
    `,
  },

  'ref-wavy-line': {
    id: 'ref-wavy-line',
    type: 'line-art',
    title: 'Wavy & Fluid Line Flow',
    description:
      'Continuous sinusoidal waves relax the hand and establish flowing water, breeze, or natural rolling landscape contours.',
    altText:
      'Flowing curved sine wave line running horizontally across a drawing surface with peak and valley markers.',
    tags: ['wavy', 'lines', 'flow', 'fluid', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="15" y="10" width="350" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        
        <!-- Smooth wave line -->
        <path d="M35 65 C75 25 105 25 145 65 C185 105 215 105 255 65 C285 35 315 35 345 65" stroke="#2D2723" stroke-width="3" />
        
        <!-- Ripple echoes -->
        <path d="M45 80 C80 48 110 48 145 80 C180 112 210 112 245 80 C275 55 305 55 335 80" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.6" />

        <text x="75" y="22" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">GENTLE CREST</text>
        <text x="185" y="120" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">SOFT VALLEY</text>
      </svg>
    `,
  },

  'ref-tilted-box': {
    id: 'ref-tilted-box',
    type: 'shape',
    title: 'Tilted Box with Open Edges',
    description:
      'Sketching a 3D box tilted on its side with loose, open corners keeps your drawing alive. Overshooting lines gives structural energy.',
    altText:
      'Sketch of a 3D box tilted on a corner with open edges and constructive cross-lines.',
    tags: ['box', 'cube', 'perspective', 'shape', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Isometric tilted box -->
        <g transform="translate(190, 65)">
          <!-- Front top diamond -->
          <polygon points="0,-40 45,-20 0,0 -45,-20" stroke="#2D2723" stroke-width="2.5" fill="#FAF7F2" />
          <!-- Left side -->
          <polygon points="-45,-20 0,0 0,38 -45,18" stroke="#2D2723" stroke-width="2.5" fill="#EAE2D7" />
          <!-- Right side -->
          <polygon points="0,0 45,-20 45,18 0,38" stroke="#2D2723" stroke-width="2.5" fill="#D5C9BC" />

          <!-- Open overshooting line extensions -->
          <line x1="0" y1="0" x2="0" y2="48" stroke="#E06D53" stroke-width="1.8" stroke-dasharray="2 2" />
          <line x1="-45" y1="-20" x2="-55" y2="-25" stroke="#E06D53" stroke-width="1.8" />
          <line x1="45" y1="-20" x2="55" y2="-25" stroke="#E06D53" stroke-width="1.8" />
        </g>
        
        <text x="50" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">3 PLANES: TOP / LEFT / RIGHT</text>
        <text x="260" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">LOOSE OVERSHOT CORNERS</text>
      </svg>
    `,
  },

  'ref-spiral': {
    id: 'ref-spiral',
    type: 'line-art',
    title: 'Outward Expanding Spiral',
    description:
      'Start firmly in the center and let your arm orbit outward in widening loops. Spirals create instant vortexes or organic shell motifs.',
    altText:
      'Archimedean spiral coiling outward from a center point with expansion direction arrows.',
    tags: ['spiral', 'curves', 'lines', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(190, 65)">
          <!-- Spiral path -->
          <path d="M0 0 C5 -10 15 -10 20 0 C25 15 10 30 -10 25 C-30 20 -35 -15 -15 -35 C15 -55 55 -40 50 0 C45 40 5 65 -35 60 C-75 55 -85 5 -60 -40 C-35 -85 20 -95 65 -70" stroke="#2D2723" stroke-width="2.5" />
          <circle cx="0" cy="0" r="4" fill="#E06D53" />
        </g>
        <text x="55" y="70" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">1. ANCHOR CENTER</text>
        <text x="250" y="70" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">2. ORBIT OUTWARD</text>
      </svg>
    `,
  },

  'ref-contrasting-circles': {
    id: 'ref-contrasting-circles',
    type: 'shape',
    title: 'Contrasting Scales: One Large, One Small',
    description:
      'Juxtaposing an oversized circle against a tiny companion instantly creates a narrative of parent & child, planet & moon, or giant & observer.',
    altText:
      'One massive circle taking up the left side of the frame paired with a tiny speck of a circle on the right side.',
    tags: ['circles', 'scale', 'contrast', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="15" y="10" width="350" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        
        <!-- Big Circle -->
        <g transform="translate(130, 65)">
          <circle cx="0" cy="0" r="46" stroke="#2D2723" stroke-width="3" fill="#F4EFE6" />
          <text x="0" y="4" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HERO CIRCLE (LARGE)</text>
        </g>

        <!-- Tiny Circle -->
        <g transform="translate(280, 65)">
          <circle cx="0" cy="0" r="8" stroke="#E06D53" stroke-width="2.5" fill="#E06D53" />
          <text x="0" y="24" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">TINY CIRCLE</text>
        </g>

        <path d="M185 65 L265 65" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="3 2" />
      </svg>
    `,
  },

  'ref-crescent-shape': {
    id: 'ref-crescent-shape',
    type: 'shape',
    title: 'Crescent Silhouette & Curves',
    description:
      'A crescent is formed by an outer curved bow carved into by an offset inner arc. Nestling it in the lower area gives a grounded or reflective quality.',
    altText:
      'Diagram of a crescent moon silhouette showing the interaction of outer and inner arc curves.',
    tags: ['crescent', 'curves', 'shapes', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(190, 65)">
          <!-- Crescent path -->
          <path d="M-30 -45 C15 -45 50 -15 50 25 C50 45 35 55 15 55 C35 35 35 -10 -5 -35 C-18 -42 -26 -44 -30 -45 Z" stroke="#2D2723" stroke-width="2.5" fill="#F5EFE6" />
          <circle cx="-30" cy="-45" r="3" fill="#E06D53" />
          <circle cx="15" cy="55" r="3" fill="#E06D53" />
        </g>
        <text x="45" y="45" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">1. OUTER ARC (SWEEP)</text>
        <text x="45" y="85" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">2. INNER CARVE (SHARP TIPS)</text>
      </svg>
    `,
  },

  'ref-rounded-triangle': {
    id: 'ref-rounded-triangle',
    type: 'shape',
    title: 'Soft Triangular Silhouette',
    description:
      'Triangles provide stable, directional composition. Rounding the corners softens the harsh geometry and makes it feel organic and characterful.',
    altText:
      'Instructional line art of a triangle with filleted, rounded corners and centered balance.',
    tags: ['triangle', 'shapes', 'geometry', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(190, 65)">
          <path d="M0 -42 Q15 -42 22 -28 L50 25 Q58 40 40 40 L-40 40 Q-58 40 -50 25 L-22 -28 Q-15 -42 0 -42 Z" stroke="#2D2723" stroke-width="2.8" fill="#FAF7F2" />
          <circle cx="0" cy="-35" r="4" fill="#E06D53" />
          <circle cx="45" cy="32" r="4" fill="#E06D53" />
          <circle cx="-45" cy="32" r="4" fill="#E06D53" />
        </g>
        <text x="50" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">STABLE WIDE BASE</text>
        <text x="250" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">ROUNDED CORNER ARCS</text>
      </svg>
    `,
  },

  'ref-organic-blob': {
    id: 'ref-organic-blob',
    type: 'shape',
    title: 'Confident Asymmetrical Blob',
    description:
      'An asymmetrical organic shape has no rules. Let your wrist wobble naturally, creating indentations and bulges that invite curiosity.',
    altText:
      'A smooth, expressive asymmetrical amoeba-like blob silhouette with single-stroke flow arrows.',
    tags: ['blob', 'organic', 'shapes', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(190, 65)">
          <path d="M-50 -20 C-60 -45 -10 -55 20 -40 C50 -25 70 -10 60 20 C50 50 10 55 -25 45 C-60 35 -40 5 -50 -20 Z" stroke="#2D2723" stroke-width="3" fill="#F5EFE6" />
        </g>
        <text x="50" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">CONTINUOUS CONFIDENT STROKE</text>
        <text x="250" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">NO PERFECT SYMMETRY</text>
      </svg>
    `,
  },

  'ref-connect-bridge': {
    id: 'ref-connect-bridge',
    type: 'composition',
    title: 'Connecting & Bridging Two Elements',
    description:
      'Bridge two separated shapes with a curving path, rope line, bridge planking, or stepping stones. Connections turn isolated marks into a scene.',
    altText:
      'Two shapes on opposite sides of a page connected by a wooden suspension bridge and a dotted walking path.',
    tags: ['connect', 'connection', 'bridge', 'path'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Left landmass/shape -->
        <path d="M30 40 C60 40 70 80 40 100 C20 100 15 60 30 40 Z" stroke="#2D2723" stroke-width="2.5" fill="#EAE2D7" />
        <text x="35" y="70" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SHAPE A</text>

        <!-- Right landmass/shape -->
        <rect x="300" y="45" width="55" height="50" rx="8" stroke="#2D2723" stroke-width="2.5" fill="#EAE2D7" />
        <text x="327" y="75" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SHAPE B</text>

        <!-- Connecting bridge ropes -->
        <path d="M65 65 Q180 100 300 65" stroke="#E06D53" stroke-width="2.5" />
        <path d="M68 55 Q180 85 300 55" stroke="#8C7E72" stroke-width="1.8" />
        
        <!-- Vertical bridge slats -->
        <line x1="110" y1="65" x2="110" y2="78" stroke="#E06D53" stroke-width="1.5" />
        <line x1="150" y1="72" x2="150" y2="88" stroke="#E06D53" stroke-width="1.5" />
        <line x1="190" y1="75" x2="190" y2="92" stroke="#E06D53" stroke-width="1.5" />
        <line x1="230" y1="72" x2="230" y2="88" stroke="#E06D53" stroke-width="1.5" />
        <line x1="265" y1="64" x2="265" y2="78" stroke="#E06D53" stroke-width="1.5" />

        <text x="185" y="30" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">SUSPENSION PATH / BRIDGE</text>
      </svg>
    `,
  },

  'ref-shapes-touching': {
    id: 'ref-shapes-touching',
    type: 'shape',
    title: 'Touching Shapes & Tangent Contact',
    description:
      'When two independent shapes just barely make contact, the touch point becomes a high-tension focal spot. Make them kiss at a single point.',
    altText:
      'A circle and a rounded box touching at a single point with a tiny accent spark indicating contact.',
    tags: ['touch', 'connect', 'contact', 'shapes'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(190, 65)">
          <!-- Circle -->
          <circle cx="-50" cy="0" r="36" stroke="#2D2723" stroke-width="2.5" fill="#FAF7F2" />
          <!-- Box -->
          <rect x="-14" y="-30" width="60" height="60" rx="8" stroke="#2D2723" stroke-width="2.5" fill="#FAF7F2" />
          
          <!-- Contact point highlight -->
          <circle cx="-14" cy="0" r="6" stroke="#E06D53" stroke-width="2" fill="#E06D53" fill-opacity="0.2" />
          <path d="M-14 -12 L-14 -8 M-14 8 L-14 12 M-20 0 L-24 0 M-4 0 L-8 0" stroke="#E06D53" stroke-width="1.5" />
        </g>
        <text x="50" y="30" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">SHAPE 1</text>
        <text x="270" y="30" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">SHAPE 2</text>
        <text x="190" y="118" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">POINT OF CONTACT (TANGENT)</text>
      </svg>
    `,
  },

  'ref-turn-alive': {
    id: 'ref-turn-alive',
    type: 'step-by-step',
    title: 'Giving Life to Shapes: Eyes, Mouth & Personality',
    description:
      'Any geometric or blob shape instantly awakens when you add a pair of expressive eyes, a tiny smile, and two little feet. Character design starts here.',
    altText:
      'Before and after drawing: an abstract blob on the left transforms on the right into a lively little creature with dot eyes, a smile, and tiny walking legs.',
    tags: ['alive', 'creature', 'transform', 'character'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Step 1: Plain shape -->
        <g transform="translate(85, 60)">
          <path d="M-25 -25 C0 -40 30 -30 35 -5 C40 20 20 35 -10 30 C-35 25 -40 -10 -25 -25 Z" stroke="#8C7E72" stroke-width="2" stroke-dasharray="3 2" fill="#FAF7F2" />
          <text x="0" y="48" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">1. PLAIN SHAPE</text>
        </g>

        <!-- Arrow -->
        <path d="M145 60 L185 60 M175 53 L185 60 L175 67" stroke="#E06D53" stroke-width="2.5" />

        <!-- Step 2: Awakened creature -->
        <g transform="translate(265, 55)">
          <path d="M-25 -25 C0 -40 30 -30 35 -5 C40 20 20 35 -10 30 C-35 25 -40 -10 -25 -25 Z" stroke="#2D2723" stroke-width="2.8" fill="#F5EFE6" />
          
          <!-- Eyes -->
          <circle cx="0" cy="-8" r="3.5" fill="#2D2723" />
          <circle cx="16" cy="-7" r="3.5" fill="#2D2723" />
          <circle cx="-1" cy="-10" r="1" fill="#FFF" stroke="none" />
          <circle cx="15" cy="-9" r="1" fill="#FFF" stroke="none" />

          <!-- Smile -->
          <path d="M4 6 Q10 14 18 6" stroke="#2D2723" stroke-width="2" fill="none" />

          <!-- Tiny feet -->
          <line x1="-8" y1="28" x2="-8" y2="40" stroke="#2D2723" stroke-width="2.5" />
          <line x1="-12" y1="40" x2="-4" y2="40" stroke="#2D2723" stroke-width="2.5" />
          <line x1="14" y1="28" x2="14" y2="40" stroke="#2D2723" stroke-width="2.5" />
          <line x1="10" y1="40" x2="18" y2="40" stroke="#2D2723" stroke-width="2.5" />

          <text x="0" y="58" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">2. ALIVE (EYES + FEET)</text>
        </g>
      </svg>
    `,
  },

  'ref-give-hat': {
    id: 'ref-give-hat',
    type: 'object',
    title: 'Adding Hats & Playful Headwear',
    description:
      'Curving the brim of a hat over the head or shape makes it feel like it sits naturally in 3D space. Try a top hat, beanie, or jaunty cap.',
    altText:
      'Four distinct hats: a tall top hat, a knit winter beanie, a baseball cap, and a party hat fitted over simple circles.',
    tags: ['hat', 'chaos', 'character', 'prop'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Top hat on shape -->
        <g transform="translate(65, 80)">
          <circle cx="0" cy="0" r="22" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
          <!-- Hat -->
          <ellipse cx="0" cy="-18" rx="20" ry="4" stroke="#2D2723" stroke-width="2" fill="#2D2723" />
          <path d="M-12 -18 L-10 -45 L10 -45 L12 -18" stroke="#2D2723" stroke-width="2.2" fill="#FAF7F2" />
          <rect x="-11" y="-24" width="22" height="6" fill="#E06D53" stroke="none" />
          <text x="0" y="28" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TOP HAT</text>
        </g>

        <!-- Beanie on shape -->
        <g transform="translate(160, 80)">
          <circle cx="0" cy="0" r="22" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
          <!-- Beanie -->
          <path d="M-18 -10 Q0 -42 18 -10 Z" stroke="#2D2723" stroke-width="2.2" fill="#FAF7F2" />
          <circle cx="0" cy="-38" r="4" fill="#E06D53" />
          <rect x="-19" y="-14" width="38" height="6" rx="2" stroke="#2D2723" stroke-width="1.8" fill="#EAE2D7" />
          <text x="0" y="28" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BEANIE</text>
        </g>

        <!-- Tiny party cone hat on shape -->
        <g transform="translate(255, 80)">
          <circle cx="0" cy="0" r="22" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
          <path d="M-8 -18 L0 -45 L12 -16 Z" stroke="#2D2723" stroke-width="2" fill="#FAF7F2" />
          <circle cx="0" cy="-45" r="3" fill="#E06D53" />
          <line x1="-3" y1="-26" x2="8" y2="-23" stroke="#E06D53" stroke-width="1.5" />
          <text x="0" y="28" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PARTY CAP</text>
        </g>

        <!-- Bowler hat -->
        <g transform="translate(335, 80)">
          <circle cx="0" cy="0" r="18" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="2 2" />
          <ellipse cx="0" cy="-14" rx="16" ry="3" stroke="#2D2723" stroke-width="2" fill="#2D2723" />
          <path d="M-10 -14 Q-12 -30 0 -30 Q12 -30 10 -14" stroke="#2D2723" stroke-width="2" fill="#FAF7F2" />
          <text x="0" y="28" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BOWLER</text>
        </g>
      </svg>
    `,
  },

  'ref-add-above': {
    id: 'ref-add-above',
    type: 'composition',
    title: 'Sky, Overhead & Atmosphere',
    description:
      'Drawing in the upper third adds atmosphere and world-building. Add drifting clouds, flying birds, smoke plumes, or a hanging moon.',
    altText:
      'Overhead sky elements: soft cumulus clouds, distant bird silhouettes, and a crescent moon floating above ground elements.',
    tags: ['above', 'sky', 'clouds', 'atmosphere', 'add'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Floating cloud -->
        <path d="M50 40 C50 30 65 20 80 25 C90 15 110 15 120 25 C135 20 145 32 140 45 C145 55 130 60 115 58 L55 58 C45 55 45 45 50 40 Z" stroke="#2D2723" stroke-width="2" fill="#FAF7F2" />
        <text x="95" y="44" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">CLOUD DRIFT</text>

        <!-- Moon & Stars -->
        <path d="M220 25 C230 25 240 32 240 45 C232 43 226 36 226 28 C224 26 222 25 220 25 Z" stroke="#E06D53" stroke-width="2" fill="#E06D53" fill-opacity="0.2" />
        <polygon points="260,25 262,29 266,31 262,33 260,37 258,33 254,31 258,29" fill="#E06D53" stroke="none" />
        <polygon points="180,35 181,37 184,38 181,40 180,42 179,40 176,38 179,37" fill="#E06D53" stroke="none" />

        <!-- Birds -->
        <path d="M300 35 Q308 28 316 35 Q324 28 332 35" stroke="#2D2723" stroke-width="2" />
        <path d="M280 48 Q286 42 292 48 Q298 42 304 48" stroke="#2D2723" stroke-width="1.8" />

        <!-- Faint ground indicator below -->
        <line x1="20" y1="105" x2="360" y2="105" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="3 3" />
        <text x="190" y="120" font-size="8" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">GROUND LEVEL (KEEP BELOW)</text>
      </svg>
    `,
  },

  'ref-add-underneath': {
    id: 'ref-add-underneath',
    type: 'composition',
    title: 'Ground Plane, Roots & Cast Shadows',
    description:
      'Ground floating drawings by laying a baseline, projecting a cast shadow, or extending underground root systems and burrow tunnels.',
    altText:
      'Illustration showing ground baselines, cast shadows stretching away, and winding tree roots underground.',
    tags: ['underneath', 'ground', 'shadow', 'roots', 'add'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Object above ground -->
        <circle cx="100" cy="50" r="22" stroke="#2D2723" stroke-width="2.5" fill="#FAF7F2" />
        
        <!-- Ground line -->
        <line x1="25" y1="75" x2="355" y2="75" stroke="#2D2723" stroke-width="2.5" />
        
        <!-- Left: Cast shadow -->
        <ellipse cx="120" cy="80" rx="30" ry="7" fill="#2D2723" fill-opacity="0.15" stroke="none" />
        <text x="100" y="100" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CAST SHADOW</text>

        <!-- Right: Roots extending down -->
        <rect x="250" y="35" width="40" height="40" rx="6" stroke="#2D2723" stroke-width="2.2" fill="#FAF7F2" />
        <path d="M260 75 Q255 95 240 115 M270 75 Q275 100 280 120 M280 85 Q295 100 310 115" stroke="#E06D53" stroke-width="2" />
        <text x="270" y="102" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">ROOTS & BURROWS</text>
      </svg>
    `,
  },

  'ref-textures-patterns': {
    id: 'ref-textures-patterns',
    type: 'line-art',
    title: 'Texture Swatches: Hatching, Stippling & Grain',
    description:
      'Textures breathe tactile reality into flat drawings. Use cross-hatching for shadow, stippling dots for stone, or concentric rings for wood grain.',
    altText:
      'Four texture demonstration swatches: cross-hatching, dense stippling dots, wood grain rings, and dragon/fish scales.',
    tags: ['texture', 'pattern', 'hatching', 'stippling', 'detail'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Swatch 1: Cross-hatch -->
        <g transform="translate(45, 60)">
          <rect x="-28" y="-28" width="56" height="56" rx="6" stroke="#2D2723" stroke-width="1.8" fill="#FAF7F2" />
          <line x1="-20" y1="-20" x2="20" y2="20" stroke="#2D2723" stroke-width="1.5" />
          <line x1="-20" y1="-10" x2="10" y2="20" stroke="#2D2723" stroke-width="1.5" />
          <line x1="-10" y1="-20" x2="20" y2="10" stroke="#2D2723" stroke-width="1.5" />
          <line x1="-20" y1="20" x2="20" y2="-20" stroke="#2D2723" stroke-width="1.5" />
          <line x1="-20" y1="10" x2="10" y2="-20" stroke="#2D2723" stroke-width="1.5" />
          <line x1="-10" y1="20" x2="20" y2="-10" stroke="#2D2723" stroke-width="1.5" />
          <text x="0" y="42" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HATCHING</text>
        </g>

        <!-- Swatch 2: Stippling -->
        <g transform="translate(138, 60)">
          <rect x="-28" y="-28" width="56" height="56" rx="6" stroke="#2D2723" stroke-width="1.8" fill="#FAF7F2" />
          <circle cx="-12" cy="-12" r="1.5" fill="#2D2723" />
          <circle cx="-8" cy="-5" r="1.5" fill="#2D2723" />
          <circle cx="-16" cy="2" r="1.5" fill="#2D2723" />
          <circle cx="2" cy="-14" r="1.5" fill="#2D2723" />
          <circle cx="10" cy="-8" r="1.5" fill="#2D2723" />
          <circle cx="-2" cy="4" r="1.5" fill="#2D2723" />
          <circle cx="8" cy="12" r="1.5" fill="#2D2723" />
          <circle cx="16" cy="4" r="1.5" fill="#2D2723" />
          <circle cx="-14" cy="16" r="1.5" fill="#2D2723" />
          <circle cx="-4" cy="18" r="1.5" fill="#2D2723" />
          <text x="0" y="42" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">STIPPLING</text>
        </g>

        <!-- Swatch 3: Wood grain -->
        <g transform="translate(232, 60)">
          <rect x="-28" y="-28" width="56" height="56" rx="6" stroke="#2D2723" stroke-width="1.8" fill="#FAF7F2" />
          <ellipse cx="0" cy="5" rx="10" ry="16" stroke="#E06D53" stroke-width="1.5" />
          <ellipse cx="0" cy="5" rx="18" ry="24" stroke="#E06D53" stroke-width="1.2" />
          <circle cx="0" cy="5" r="3" fill="#E06D53" />
          <text x="0" y="42" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">WOOD GRAIN</text>
        </g>

        <!-- Swatch 4: Scales -->
        <g transform="translate(325, 60)">
          <rect x="-28" y="-28" width="56" height="56" rx="6" stroke="#2D2723" stroke-width="1.8" fill="#FAF7F2" />
          <path d="M-22 -14 Q-12 -2 -2 -14 Q8 -2 18 -14 M-14 2 Q-4 14 6 2 Q16 14 26 2 M-22 18 Q-12 30 -2 18 Q8 30 18 18" stroke="#2D2723" stroke-width="1.5" />
          <text x="0" y="42" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SCALES</text>
        </g>
      </svg>
    `,
  },

  'ref-scale-contrast': {
    id: 'ref-scale-contrast',
    type: 'composition',
    title: 'Scale Exaggeration: Giant vs. Tiny',
    description:
      'Exaggerate scale by placing an enormous monolith alongside a tiny speck of a character. Contrast creates immediate grandeur and wonder.',
    altText:
      'A colossal gentle beast towering toward the top of the canvas, standing next to a tiny adventurer holding a staff.',
    tags: ['scale', 'giant', 'tiny', 'contrast', 'change'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Giant Monolith / Creature -->
        <g transform="translate(130, 65)">
          <path d="M-45 50 L-35 -45 C-30 -52 30 -52 35 -45 L45 50 Z" stroke="#2D2723" stroke-width="3" fill="#EAE2D7" />
          <!-- Giant eye -->
          <circle cx="0" cy="-25" r="8" fill="#2D2723" />
          <text x="0" y="15" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">COLOSSUS</text>
        </g>

        <!-- Tiny Explorer -->
        <g transform="translate(260, 100)">
          <circle cx="0" cy="-12" r="3" fill="#E06D53" />
          <line x1="0" y1="-9" x2="0" y2="0" stroke="#E06D53" stroke-width="2" />
          <line x1="5" y1="-14" x2="5" y2="5" stroke="#E06D53" stroke-width="1.8" />
          <text x="0" y="20" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">TINY WANDERER</text>
        </g>

        <!-- Ground baseline -->
        <line x1="30" y1="115" x2="350" y2="115" stroke="#2D2723" stroke-width="2" />
      </svg>
    `,
  },

  'ref-story-clues': {
    id: 'ref-story-clues',
    type: 'composition',
    title: 'Narrative Clues: Footprints & Lost Keys',
    description:
      'Tell a silent story by dropping physical clues into the scene: paw prints crossing the sand, a dropped brass key, or an open mysterious envelope.',
    altText:
      'A winding trail of animal footprints across the ground leading toward a dropped ornate key and open scroll.',
    tags: ['story', 'narrative', 'clue', 'footprint'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Footprint trail -->
        <g transform="translate(50, 70)">
          <!-- Paw 1 -->
          <ellipse cx="0" cy="0" rx="4" ry="6" fill="#2D2723" stroke="none" />
          <circle cx="-5" cy="-8" r="1.5" fill="#2D2723" stroke="none" />
          <circle cx="0" cy="-10" r="1.5" fill="#2D2723" stroke="none" />
          <circle cx="5" cy="-8" r="1.5" fill="#2D2723" stroke="none" />

          <!-- Paw 2 -->
          <ellipse cx="30" cy="-20" rx="4" ry="6" fill="#2D2723" stroke="none" />
          <circle cx="25" cy="-28" r="1.5" fill="#2D2723" stroke="none" />
          <circle cx="30" cy="-30" r="1.5" fill="#2D2723" stroke="none" />
          <circle cx="35" cy="-28" r="1.5" fill="#2D2723" stroke="none" />

          <!-- Paw 3 -->
          <ellipse cx="65" cy="5" rx="4" ry="6" fill="#2D2723" stroke="none" />
          <!-- Paw 4 -->
          <ellipse cx="100" cy="-15" rx="4" ry="6" fill="#2D2723" stroke="none" />

          <text x="50" y="32" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">FOOTPRINT TRAIL</text>
        </g>

        <!-- Dropped ornate key -->
        <g transform="translate(240, 60)">
          <circle cx="0" cy="0" r="12" stroke="#E06D53" stroke-width="2.5" fill="#FAF7F2" />
          <circle cx="0" cy="0" r="5" stroke="#E06D53" stroke-width="2" />
          <line x1="12" y1="0" x2="45" y2="0" stroke="#E06D53" stroke-width="2.8" />
          <line x1="32" y1="0" x2="32" y2="10" stroke="#E06D53" stroke-width="2.5" />
          <line x1="42" y1="0" x2="42" y2="12" stroke="#E06D53" stroke-width="2.5" />
          <text x="25" y="30" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">DROPPED KEY (CLUE)</text>
        </g>
      </svg>
    `,
  },

  'ref-final-signature': {
    id: 'ref-final-signature',
    type: 'line-art',
    title: 'Framing Lines, Signatures & Finishing Mark',
    description:
      'A subtle framing line around your favorite section and a neat artist signature in the lower corner closes the session and celebrates your creation.',
    altText:
      'A delicate hand-drawn framing box with corner flourish, artist monogram signature, and date mark.',
    tags: ['finish', 'signature', 'frame', 'final'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Elegant framing boundary -->
        <rect x="35" y="15" width="310" height="95" rx="6" stroke="#2D2723" stroke-width="2" stroke-dasharray="8 4" />
        
        <!-- Corner flourishes -->
        <path d="M45 25 L45 35 M45 25 L55 25" stroke="#E06D53" stroke-width="2.5" />
        <path d="M335 25 L335 35 M335 25 L325 25" stroke="#E06D53" stroke-width="2.5" />
        <path d="M45 100 L45 90 M45 100 L55 100" stroke="#E06D53" stroke-width="2.5" />
        <path d="M335 100 L335 90 M335 100 L325 100" stroke="#E06D53" stroke-width="2.5" />

        <!-- Signature stamp in corner -->
        <g transform="translate(270, 85)">
          <rect x="-35" y="-12" width="70" height="24" rx="4" stroke="#E06D53" stroke-width="1.8" fill="#FAF7F2" />
          <text x="0" y="4" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">SIGN + DATE</text>
        </g>

        <!-- Final star sparkle accent -->
        <polygon points="190,45 192,53 200,55 192,57 190,65 188,57 180,55 188,53" fill="#2D2723" stroke="none" />
        <text x="190" y="80" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">FINAL ACCENT MARK</text>
      </svg>
    `,
  },

  'ref-egg-shape': {
    id: 'ref-egg-shape',
    type: 'shape',
    title: 'Tilted Oval & Egg Form',
    description:
      'An egg shape is asymmetrical along its main axis—narrower at the top and fuller at the base. Tilting the axis gives dynamic resting balance.',
    altText:
      'An egg silhouette tilted on its side with axis tilt guides and contour ellipses.',
    tags: ['egg', 'oval', 'shapes', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(190, 65) rotate(-25)">
          <path d="M0 -42 C24 -42 35 -15 35 15 C35 38 20 48 0 48 C-20 48 -35 38 -35 15 C-35 -15 -24 -42 0 -42 Z" stroke="#2D2723" stroke-width="2.8" fill="#FAF7F2" />
          <line x1="0" y1="-50" x2="0" y2="55" stroke="#E06D53" stroke-width="1.5" stroke-dasharray="3 2" />
        </g>
        <text x="50" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">NARROWER TIP</text>
        <text x="260" y="65" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">FULLER WEIGHTED BASE</text>
      </svg>
    `,
  },

  'ref-parallel-lines': {
    id: 'ref-parallel-lines',
    type: 'line-art',
    title: 'Parallel Lines of Varied Lengths',
    description:
      'Three parallel strokes of different lengths introduce cadence and direction. The variation prevents stiffness while maintaining alignment.',
    altText:
      'Three horizontal parallel lines with stepped lengths and measured spacing.',
    tags: ['parallel', 'lines', 'rhythm', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(60, 35)">
          <line x1="0" y1="0" x2="260" y2="0" stroke="#2D2723" stroke-width="3" />
          <circle cx="0" cy="0" r="3" fill="#2D2723" />
          <circle cx="260" cy="0" r="3" fill="#2D2723" />
          <text x="270" y="4" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">LONG</text>
        </g>
        <g transform="translate(60, 65)">
          <line x1="0" y1="0" x2="180" y2="0" stroke="#E06D53" stroke-width="3" />
          <circle cx="0" cy="0" r="3" fill="#E06D53" />
          <circle cx="180" cy="0" r="3" fill="#E06D53" />
          <text x="190" y="4" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">MEDIUM</text>
        </g>
        <g transform="translate(60, 95)">
          <line x1="0" y1="0" x2="90" y2="0" stroke="#8C7E72" stroke-width="3" />
          <circle cx="0" cy="0" r="3" fill="#8C7E72" />
          <circle cx="90" cy="0" r="3" fill="#8C7E72" />
          <text x="100" y="4" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">SHORT</text>
        </g>
      </svg>
    `,
  },

  'ref-large-shape': {
    id: 'ref-large-shape',
    type: 'shape',
    title: 'Bold Large Shape & Page Presence',
    description:
      'Drawing one large shape claims the page with boldness. Let it push against the boundaries of your paper to create dramatic presence.',
    altText:
      'A large prominent geometric form filling most of the drawing canvas with ample breathing room at the edges.',
    tags: ['large', 'bold', 'shapes', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="25" y="10" width="330" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        <path d="M70 30 C120 15 280 20 300 50 C320 80 290 105 210 105 C110 105 50 85 70 30 Z" stroke="#2D2723" stroke-width="3.5" fill="#FAF7F2" />
        <text x="185" y="68" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CLAIMS 70% OF PAGE</text>
      </svg>
    `,
  },

  'ref-tiny-shape': {
    id: 'ref-tiny-shape',
    type: 'shape',
    title: 'Tiny Shape & Deliberate Placement',
    description:
      'A single tiny shape surrounded by vast open space creates contemplation and quiet focus. Place it with gentle precision.',
    altText:
      'A vast empty canvas with one tiny diamond shape placed off-center, illustrating generous negative space.',
    tags: ['tiny', 'small', 'shapes', 'minimal', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="25" y="10" width="330" height="110" rx="8" stroke="#D5C9BC" stroke-width="1.5" stroke-dasharray="4 3" />
        <g transform="translate(220, 65)">
          <polygon points="0,-10 10,0 0,10 -10,0" stroke="#E06D53" stroke-width="2.5" fill="#E06D53" />
          <circle cx="0" cy="0" r="22" stroke="#E06D53" stroke-width="1.2" stroke-dasharray="2 2" opacity="0.6" />
        </g>
        <text x="80" y="68" font-size="9" font-family="sans-serif" font-weight="bold" fill="#8C7E72" stroke="none">VAST NEGATIVE SPACE</text>
        <text x="255" y="68" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">TINY ACCENT</text>
      </svg>
    `,
  },

  'ref-corner-center': {
    id: 'ref-corner-center',
    type: 'composition',
    title: 'Corner & Center Composition Framing',
    description:
      'Placing an element in a corner pulls the viewer in from the margin, while placing it in the center establishes stable balance.',
    altText:
      'Diagram showing corner placement versus center placement on a sketchbook page.',
    tags: ['corner', 'center', 'composition', 'start'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Instructional Series',
    svgContent: `
      <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Canvas 1: Corner -->
        <g transform="translate(40, 15)">
          <rect x="0" y="0" width="130" height="95" rx="6" stroke="#2D2723" stroke-width="1.5" fill="#FAF7F2" />
          <circle cx="25" cy="25" r="12" stroke="#E06D53" stroke-width="2.5" fill="#E06D53" fill-opacity="0.2" />
          <text x="65" y="80" font-size="9" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">CORNER PLACEMENT</text>
        </g>

        <!-- Canvas 2: Center -->
        <g transform="translate(210, 15)">
          <rect x="0" y="0" width="130" height="95" rx="6" stroke="#2D2723" stroke-width="1.5" fill="#FAF7F2" />
          <circle cx="65" cy="45" r="18" stroke="#2D2723" stroke-width="2.5" fill="#FAF7F2" />
          <line x1="65" y1="20" x2="65" y2="70" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
          <line x1="40" y1="45" x2="90" y2="45" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="2 2" />
          <text x="65" y="80" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CENTER PLACEMENT</text>
        </g>
      </svg>
    `,
  },
};
