import { VisualReference } from '../types/prompt';

export const THEME_VISUAL_REFERENCES: Record<string, VisualReference> = {
  'ref-leaf-construction': {
    id: 'ref-leaf-construction',
    type: 'shape',
    title: 'Basic Leaf & Flora Construction',
    description: 'Construct diverse leaves starting from a gentle center spine line, then wrapping symmetrical or asymmetrical curves around it.',
    altText: 'Instructional sketch showing 3 simple leaf structures: teardrop oval, notched oak shape, and elongated blade with spine and veins.',
    tags: ['nature', 'leaf', 'botanical', 'flora', 'plants'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Leaf 1: Simple Oval -->
        <path d="M45 95 C25 65 30 35 45 20 C60 35 65 65 45 95 Z" />
        <path d="M45 20 L45 105" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.6" />
        <path d="M45 45 L36 40 M45 60 L54 55 M45 75 L36 70" stroke-width="1.8" />
        <text x="45" y="114" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">TEARDROP</text>

        <!-- Leaf 2: Notched / Maple -->
        <path d="M145 95 C125 80 115 65 125 55 C118 45 130 35 145 20 C160 35 172 45 165 55 C175 65 165 80 145 95 Z" />
        <path d="M145 20 L145 105" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.6" />
        <text x="145" y="114" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">LOBED</text>

        <!-- Leaf 3: Slender Grass/Willow -->
        <path d="M245 100 Q235 60 245 18 Q255 60 245 100 Z" />
        <path d="M245 18 L245 105" stroke-dasharray="2 3" stroke-width="1.5" opacity="0.6" />
        <text x="245" y="114" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">WILLOW</text>

        <!-- Branch / Twig Connection -->
        <path d="M315 95 Q335 75 345 55 Q355 35 365 25" stroke-width="3" />
        <path d="M335 75 Q360 70 375 65" stroke-width="2" />
        <path d="M345 55 Q325 45 315 40" stroke-width="2" />
        <circle cx="375" cy="65" r="3" fill="currentColor" />
        <circle cx="365" cy="25" r="3" fill="currentColor" />
        <circle cx="315" cy="40" r="3" fill="currentColor" />
        <text x="350" y="114" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">BRANCHING</text>
      </svg>
    `,
  },

  'ref-fantasy-creature-parts': {
    id: 'ref-fantasy-creature-parts',
    type: 'shape',
    title: 'Fantasy Creature Features & Magical Props',
    description: 'Combine animal silhouettes with mythic features: curving horns, dragon crests, fairy wings, or glowing potions.',
    altText: 'Instructional sketch showing dragon horns, arched bat/dragon wing bones, feathered fairy wing, and potion flask with bubbles.',
    tags: ['fantasy', 'magic', 'creature', 'horns', 'wings', 'potion'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Horns -->
        <path d="M30 85 Q35 45 55 25 Q45 50 48 85" />
        <path d="M68 85 Q71 45 91 25 Q81 50 86 85" />
        <text x="60" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">HORNS</text>

        <!-- Wings -->
        <path d="M140 85 L155 35 L175 55 L190 40 L195 85" />
        <path d="M155 35 Q165 65 175 55" stroke-width="1.8" />
        <path d="M175 55 Q185 70 190 40" stroke-width="1.8" />
        <text x="168" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">WINGS</text>

        <!-- Potion Bottle -->
        <rect x="250" y="25" width="20" height="12" rx="3" />
        <path d="M255 37 L255 48 C240 60 235 85 245 95 C255 102 265 102 275 95 C285 85 280 60 265 48 L265 37 Z" />
        <path d="M242 75 Q260 78 278 75" stroke-dasharray="2 2" stroke-width="1.5" />
        <circle cx="260" cy="85" r="2.5" fill="currentColor" />
        <circle cx="254" cy="80" r="1.5" fill="currentColor" />
        <text x="260" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">POTION</text>

        <!-- Magic Talisman / Wand -->
        <line x1="330" y1="95" x2="370" y2="40" stroke-width="2.5" />
        <polygon points="370,25 375,38 388,40 378,50 380,63 368,56 357,62 360,49 350,39 363,38" fill="none" stroke-width="2" />
        <text x="365" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">TALISMAN</text>
      </svg>
    `,
  },

  'ref-animal-basic-construction': {
    id: 'ref-animal-basic-construction',
    type: 'shape',
    title: 'Animal Construction from Primitives',
    description: 'Block out any animal using simple interlocking spheres: head circle, muzzle wedge, body oval, and angled leg lines.',
    altText: 'Instructional sketch showing an animal blocked from basic shapes: head circle, muzzle, torso oval, ear triangles, and paw curves.',
    tags: ['animals', 'wildlife', 'creature', 'anatomy', 'paws', 'snout'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Head + Snout Construction -->
        <circle cx="50" cy="50" r="26" />
        <ellipse cx="68" cy="58" rx="14" ry="10" />
        <polygon points="40,26 48,12 56,25" />
        <polygon points="56,26 64,14 70,27" />
        <circle cx="56" cy="46" r="3" fill="currentColor" />
        <text x="55" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">HEAD & SNOUT</text>

        <!-- Torso + Leg Gesture -->
        <ellipse cx="160" cy="55" rx="34" ry="22" />
        <circle cx="135" cy="40" r="16" />
        <line x1="140" y1="74" x2="135" y2="95" stroke-width="3" />
        <line x1="175" y1="74" x2="180" y2="95" stroke-width="3" />
        <path d="M194 50 Q215 52 210 70" stroke-width="2.5" />
        <text x="165" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">TORSO + GESTURE</text>

        <!-- Paws & Footprints -->
        <ellipse cx="270" cy="65" rx="12" ry="9" />
        <circle cx="260" cy="50" r="4" fill="currentColor" />
        <circle cx="268" cy="46" r="4" fill="currentColor" />
        <circle cx="276" cy="48" r="4" fill="currentColor" />
        <circle cx="282" cy="54" r="3.5" fill="currentColor" />
        <text x="272" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">PAW PAD</text>

        <!-- Eye & Expression -->
        <ellipse cx="365" cy="45" rx="15" ry="10" />
        <circle cx="365" cy="45" r="5" fill="currentColor" />
        <path d="M350 35 Q365 30 380 34" stroke-width="3" />
        <path d="M360 62 Q365 67 375 62" stroke-width="2" />
        <text x="365" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">EXPRESSION</text>
      </svg>
    `,
  },

  'ref-still-life-construction': {
    id: 'ref-still-life-construction',
    type: 'shape',
    title: 'Everyday Objects Construction',
    description: 'Ground domestic items by sketching cylindrical ellipses and simple box perspective before adding handles and details.',
    altText: 'Instructional sketch demonstrating cylinder ellipses for mugs and boxes for books and household items.',
    tags: ['everyday', 'objects', 'still-life', 'mug', 'cup', 'household'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Mug -->
        <ellipse cx="60" cy="35" rx="28" ry="10" />
        <line x1="32" y1="35" x2="32" y2="80" />
        <line x1="88" y1="35" x2="88" y2="80" />
        <path d="M32 80 C32 92 88 92 88 80" />
        <path d="M88 45 C104 45 104 70 88 72" stroke-width="2.5" />
        <text x="60" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">CYLINDER MUG</text>

        <!-- Eyeglasses / Desk prop -->
        <rect x="140" y="45" width="30" height="22" rx="6" />
        <rect x="180" y="45" width="30" height="22" rx="6" />
        <path d="M170 52 Q175 48 180 52" />
        <line x1="140" y1="52" x2="125" y2="46" />
        <line x1="210" y1="52" x2="225" y2="46" />
        <text x="175" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">SIMPLE PROPS</text>

        <!-- Window mullion view -->
        <rect x="260" y="25" width="55" height="65" rx="4" />
        <line x1="287" y1="25" x2="287" y2="90" stroke-width="1.8" />
        <line x1="260" y1="55" x2="315" y2="55" stroke-width="1.8" />
        <path d="M260 25 Q272 50 260 75 M315 25 Q303 50 315 75" opacity="0.5" stroke-width="1.5" />
        <text x="287" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">WINDOW CORNER</text>

        <!-- Plant Pot -->
        <polygon points="360,50 395,50 388,85 367,85" />
        <ellipse cx="377" cy="50" rx="18" ry="5" />
        <path d="M377 45 Q365 30 355 35 M377 45 Q390 28 400 32" stroke-width="2" />
        <text x="377" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">TABLETOP</text>
      </svg>
    `,
  },

  'ref-sci-fi-shapes': {
    id: 'ref-sci-fi-shapes',
    type: 'shape',
    title: 'Robotics & Sci-Fi Silhouette Foundations',
    description: 'Break robotic and futuristic devices into angular plates, dome visors, antenna poles, and orbital planet rings.',
    altText: 'Instructional sketch showing dome-headed robot with antenna, ringed planet, and circuit junction lines.',
    tags: ['sci-fi', 'robot', 'technology', 'space', 'planet'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Robot Head -->
        <path d="M35 75 L35 48 C35 32 75 32 75 48 L75 75 Z" />
        <line x1="55" y1="32" x2="55" y2="18" stroke-width="2" />
        <circle cx="55" cy="16" r="3" fill="currentColor" />
        <rect x="42" y="48" width="26" height="12" rx="3" fill="currentColor" opacity="0.2" />
        <circle cx="48" cy="54" r="2" fill="currentColor" />
        <circle cx="62" cy="54" r="2" fill="currentColor" />
        <text x="55" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">ROBOT DOME</text>

        <!-- Ringed Planet -->
        <circle cx="165" cy="52" r="24" />
        <ellipse cx="165" cy="52" rx="42" ry="10" stroke-width="2" transform="rotate(-15 165 52)" />
        <circle cx="195" cy="25" r="2" fill="currentColor" />
        <circle cx="130" cy="70" r="1.5" fill="currentColor" />
        <text x="165" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">ORBITAL RING</text>

        <!-- Antenna & Sensor Array -->
        <line x1="265" y1="85" x2="265" y2="30" stroke-width="3" />
        <path d="M250 40 Q265 25 280 40" stroke-width="2" />
        <path d="M255 50 Q265 38 275 50" stroke-width="2" />
        <rect x="257" y="80" width="16" height="12" rx="2" />
        <text x="265" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">COMM BEACON</text>

        <!-- Panel Seam / Wires -->
        <rect x="340" y="32" width="55" height="52" rx="4" />
        <line x1="340" y1="58" x2="395" y2="58" stroke-dasharray="4 2" stroke-width="1.8" />
        <circle cx="350" cy="42" r="2" fill="currentColor" />
        <circle cx="385" cy="42" r="2" fill="currentColor" />
        <circle cx="350" cy="72" r="2" fill="currentColor" />
        <circle cx="385" cy="72" r="2" fill="currentColor" />
        <text x="367" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">PANEL SEAMS</text>
      </svg>
    `,
  },

  'ref-spooky-silhouettes': {
    id: 'ref-spooky-silhouettes',
    type: 'shape',
    title: 'Spooky Silhouettes & Atmospheric Shadows',
    description: 'Create atmospheric spookiness with curving sheet ghosts, jagged bat wings, drippy candles, and cast shadows.',
    altText: 'Instructional sketch showing friendly ghost outline, bat wings silhouette, and melting candle with glow ring.',
    tags: ['spooky', 'ghost', 'halloween', 'candle', 'shadow', 'night'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Floating Ghost -->
        <path d="M40 75 Q30 40 55 25 Q80 40 70 75 Q62 70 55 75 Q48 70 40 75 Z" />
        <ellipse cx="48" cy="45" rx="3" ry="5" fill="currentColor" />
        <ellipse cx="62" cy="45" rx="3" ry="5" fill="currentColor" />
        <text x="55" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">SHEET GHOST</text>

        <!-- Melting Candle -->
        <rect x="150" y="50" width="22" height="38" rx="2" />
        <path d="M150 58 Q146 62 148 68 Q150 72 153 66" />
        <line x1="161" y1="50" x2="161" y2="40" stroke-width="2" />
        <path d="M161 40 C155 35 155 24 161 18 C167 24 167 35 161 40 Z" fill="currentColor" opacity="0.3" />
        <ellipse cx="161" cy="88" rx="24" ry="5" stroke-dasharray="2 3" opacity="0.5" />
        <text x="161" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">CANDLE FLAME</text>

        <!-- Bat / Shadow Silhouette -->
        <path d="M245 45 Q260 30 270 45 Q280 30 295 45 Q285 62 270 55 Q255 62 245 45 Z" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="2" />
        <text x="270" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">NIGHT BAT</text>

        <!-- Cobweb Corner -->
        <line x1="350" y1="20" x2="395" y2="20" stroke-width="1.8" />
        <line x1="395" y1="20" x2="395" y2="65" stroke-width="1.8" />
        <line x1="395" y1="20" x2="360" y2="55" stroke-width="1.5" />
        <path d="M375 20 Q382 32 395 35" stroke-width="1.5" />
        <path d="M360 20 Q370 42 395 50" stroke-width="1.5" />
        <text x="375" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">CORNER WEB</text>
      </svg>
    `,
  },

  'ref-game-props': {
    id: 'ref-game-props',
    type: 'shape',
    title: 'Game Icons, Weapons & UI Elements',
    description: 'Design distinct gaming items with bold readable silhouettes: heraldic shield, potion flask, pixel heart, or inventory badge.',
    altText: 'Instructional sketch of gaming icons: heraldic shield contour, potion flask, heart health container, and diamond gem.',
    tags: ['games', 'gaming', 'shield', 'items', 'inventory', 'pixel'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Shield -->
        <path d="M35 30 L75 30 L75 55 Q75 80 55 92 Q35 80 35 55 Z" />
        <path d="M43 38 L67 38 L67 55 Q67 73 55 82 Q43 73 43 55 Z" stroke-width="1.5" stroke-dasharray="2 2" />
        <text x="55" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">SHIELD BADGE</text>

        <!-- Heart Container -->
        <path d="M165 42 C165 30 145 30 145 46 C145 62 165 76 165 76 C165 76 185 62 185 46 C185 30 165 30 165 42 Z" fill="currentColor" opacity="0.2" stroke-width="2.5" />
        <text x="165" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">HEALTH ICON</text>

        <!-- Sword / Broadblade -->
        <line x1="250" y1="85" x2="280" y2="25" stroke-width="3" />
        <line x1="242" y1="72" x2="262" y2="82" stroke-width="3" />
        <polygon points="278,25 285,32 275,37" fill="currentColor" />
        <text x="265" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">WEAPON PROP</text>

        <!-- Diamond Gem / Rupee -->
        <polygon points="365,30 385,50 365,85 345,50" />
        <line x1="345" y1="50" x2="385" y2="50" stroke-width="1.5" />
        <line x1="365" y1="30" x2="365" y2="85" stroke-dasharray="2 2" stroke-width="1.5" />
        <text x="365" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">INVENTORY GEM</text>
      </svg>
    `,
  },

  'ref-storybook-cottage': {
    id: 'ref-storybook-cottage',
    type: 'shape',
    title: 'Storybook Cottage & Whimsical Architecture',
    description: 'Embrace cozy imperfection: slightly bowing walls, timber beams, round arched doors, and smoking stone chimneys.',
    altText: 'Instructional sketch showing whimsical cottage with curved roof, round door, crooked chimney, and flagstone path.',
    tags: ['storybook', 'cottage', 'house', 'village', 'whimsical'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Cottage Silhouette -->
        <path d="M40 85 L44 50 L96 50 L100 85 Z" />
        <path d="M30 50 Q70 25 110 50 L100 50 L40 50 Z" />
        <rect x="85" y="24" width="12" height="20" rx="2" />
        <path d="M91 20 Q95 12 90 6" stroke-dasharray="2 2" stroke-width="1.5" />
        <!-- Round Door -->
        <path d="M60 85 L60 68 Q70 60 80 68 L80 85 Z" />
        <circle cx="76" cy="74" r="1.5" fill="currentColor" />
        <text x="70" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">COZY COTTAGE</text>

        <!-- Traveler Silhouette -->
        <circle cx="185" cy="35" r="8" />
        <ellipse cx="185" cy="42" rx="16" ry="5" />
        <path d="M175 48 Q165 75 172 85 L198 85 Q205 75 195 48 Z" />
        <line x1="205" y1="40" x2="205" y2="88" stroke-width="2.5" />
        <text x="188" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">TRAVELER</text>

        <!-- Winding Cobblestones -->
        <ellipse cx="270" cy="85" rx="14" ry="6" />
        <ellipse cx="295" cy="80" rx="10" ry="5" />
        <ellipse cx="280" cy="70" rx="8" ry="4" />
        <ellipse cx="300" cy="62" rx="6" ry="3" />
        <text x="285" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">WINDING PATH</text>

        <!-- Filigree Corner Accent -->
        <path d="M355 30 Q375 30 375 50 Q395 50 395 70" stroke-width="2.5" />
        <circle cx="355" cy="30" r="3" fill="currentColor" />
        <circle cx="395" cy="70" r="3" fill="currentColor" />
        <path d="M365 38 Q375 38 375 48" stroke-width="1.5" />
        <text x="375" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">VINTAGE FLOURISH</text>
      </svg>
    `,
  },

  'ref-places-architecture': {
    id: 'ref-places-architecture',
    type: 'shape',
    title: 'Architectural Facades & Horizon Depth',
    description: 'Frame buildings using staggered heights, varied roof cornices (flat, triangle, arch), and receding ground paths.',
    altText: 'Instructional sketch showing three varied building facades side-by-side with windows and receding perspective path.',
    tags: ['places', 'architecture', 'city', 'buildings', 'facade'],
    beginnerFriendly: true,
    source: 'local',
    attribution: 'Create Again Theme Series',
    svgContent: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Facade 1: Townhouse -->
        <rect x="25" y="35" width="40" height="52" />
        <polygon points="20,35 45,18 70,35" />
        <rect x="35" y="44" width="8" height="12" rx="1" />
        <rect x="52" y="44" width="8" height="12" rx="1" />
        <rect x="42" y="68" width="12" height="19" rx="1" />

        <!-- Facade 2: Tall Commercial with Arched Windows -->
        <rect x="75" y="24" width="46" height="63" />
        <line x1="72" y1="24" x2="124" y2="24" stroke-width="3" />
        <path d="M84 45 L84 38 Q90 32 96 38 L96 45 Z" />
        <path d="M102 45 L102 38 Q108 32 114 38 L114 45 Z" />
        <rect x="85" y="56" width="26" height="31" />
        <text x="75" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">FACADE RHYTHM</text>

        <!-- Receding Perspective Path -->
        <line x1="180" y1="87" x2="225" y2="35" stroke-width="2.5" />
        <line x1="260" y1="87" x2="235" y2="35" stroke-width="2.5" />
        <line x1="190" y1="75" x2="252" y2="75" stroke-dasharray="2 3" opacity="0.6" />
        <line x1="205" y1="60" x2="243" y2="60" stroke-dasharray="2 3" opacity="0.6" />
        <line x1="218" y1="48" x2="238" y2="48" stroke-dasharray="2 3" opacity="0.6" />
        <text x="225" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">RECEDING STREET</text>

        <!-- Streetlamp & Archway -->
        <path d="M335 87 L335 60 Q345 50 355 60 L355 87 Z" stroke-width="2.5" />
        <line x1="380" y1="87" x2="380" y2="35" stroke-width="2.5" />
        <line x1="375" y1="35" x2="385" y2="35" stroke-width="3" />
        <polygon points="377,35 383,35 386,45 374,45" />
        <circle cx="380" cy="48" r="2" fill="currentColor" />
        <text x="358" y="108" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">ARCH & LAMP</text>
      </svg>
    `,
  },
};
