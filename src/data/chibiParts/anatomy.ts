import { ChibiPartReference } from '../../types/chibiReference';

export const CHIBI_ANATOMY: ChibiPartReference[] = [
  // ==================== BODIES (Section 11) ====================
  // Note: Only the body construction form is drawn, no completed characters!
  {
    id: 'body-standard',
    category: 'body',
    name: 'Standard Chibi Body',
    imageUrl: '/references/chibi/body/body-standard.svg',
    altText: 'Balanced bean-shaped chibi body torso with neutral limbs.',
    description: 'The golden ratio 1:1 or 1:1.5 chibi torso. Soft bean torso with simple straight limb guidelines.',
    tags: ['body', 'standard', 'bean', 'classic', 'beginner'],
    difficulty: 'easy',
    svgContent: `<path d="M 40 28 C 36 28, 32 40, 32 54 C 32 68, 38 74, 50 74 C 62 74, 68 68, 68 54 C 68 40, 64 28, 60 28 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="28" x2="50" y2="74" stroke="#CDCDC4" stroke-width="1.5" stroke-dasharray="2 2"/>`
  },
  {
    id: 'body-chubby',
    category: 'body',
    name: 'Chubby Rounded Torso',
    imageUrl: '/references/chibi/body/body-chubby.svg',
    altText: 'Soft wide spherical body construction with cute potbelly curve.',
    description: 'A round, potbellied body contour. Creates maximum huggability and soft weight.',
    tags: ['body', 'chubby', 'round', 'cute', 'potbelly'],
    difficulty: 'easy',
    svgContent: `<path d="M 42 28 C 34 28, 26 42, 26 58 C 26 76, 36 82, 50 82 C 64 82, 74 76, 74 58 C 74 42, 66 28, 58 28 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 60 Q 50 68 62 60" stroke="#CDCDC4" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'body-slim',
    category: 'body',
    name: 'Slim Slender Body',
    imageUrl: '/references/chibi/body/body-slim.svg',
    altText: 'Narrow elongated cylindrical torso construction.',
    description: 'Streamlined cylinder torso for agile ninja, graceful dancers, or tall teens.',
    tags: ['body', 'slim', 'slender', 'agile'],
    difficulty: 'easy',
    svgContent: `<path d="M 42 24 C 40 24, 38 38, 38 56 C 38 72, 42 76, 50 76 C 58 76, 62 72, 62 56 C 62 38, 60 24, 58 24 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="24" x2="50" y2="76" stroke="#CDCDC4" stroke-width="1.5" stroke-dasharray="2 2"/>`
  },
  {
    id: 'body-tall',
    category: 'body',
    name: 'Tall & Slender Body',
    imageUrl: '/references/chibi/body/body-tall.svg',
    altText: 'Elongated chibi proportions with longer legs and torso ratio.',
    description: 'Slightly higher head ratio (1:2.5) for sophisticated or heroic characters.',
    tags: ['body', 'tall', 'slender', 'heroic'],
    difficulty: 'medium',
    svgContent: `<path d="M 43 20 C 40 20, 37 36, 37 54 C 37 72, 42 78, 50 78 C 58 78, 63 72, 63 54 C 63 36, 60 20, 57 20 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="43" y1="78" x2="40" y2="92" stroke="currentColor" stroke-width="2.5"/><line x1="57" y1="78" x2="60" y2="92" stroke="currentColor" stroke-width="2.5"/>`
  },
  {
    id: 'body-tiny',
    category: 'body',
    name: 'Tiny Thumb Body',
    imageUrl: '/references/chibi/body/body-tiny.svg',
    altText: 'Extremely small thumb-like body torso under large head placeholder.',
    description: 'Micro-chibi / Nendoroid style where body is barely 1/3 of the head size.',
    tags: ['body', 'tiny', 'thumb', 'micro', 'cute'],
    difficulty: 'easy',
    svgContent: `<circle cx="50" cy="30" r="20" stroke="#CDCDC4" stroke-width="1.5" stroke-dasharray="2 2" fill="none"/><path d="M 44 48 C 40 48, 38 56, 38 66 C 38 72, 42 74, 50 74 C 58 74, 62 72, 62 66 C 62 56, 60 48, 56 48 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-petite',
    category: 'body',
    name: 'Petite Delicate Torso',
    imageUrl: '/references/chibi/body/body-petite.svg',
    altText: 'Delicate compact torso with narrow shoulders.',
    description: 'Small, lightweight frame suitable for fairies, children, or delicate casters.',
    tags: ['body', 'petite', 'delicate', 'fairy'],
    difficulty: 'easy',
    svgContent: `<path d="M 43 28 C 40 28, 36 38, 36 52 C 36 64, 42 68, 50 68 C 58 68, 64 64, 64 52 C 64 38, 60 28, 57 28 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'body-short',
    category: 'body',
    name: 'Short Stout Body',
    imageUrl: '/references/chibi/body/body-short.svg',
    altText: 'Compressed squat torso with broad base.',
    description: 'Compact and grounded, great for dwarfs, blacksmiths, and sturdy fighters.',
    tags: ['body', 'short', 'stout', 'dwarf', 'sturdy'],
    difficulty: 'easy',
    svgContent: `<path d="M 38 32 C 32 32, 28 44, 28 58 C 28 72, 36 76, 50 76 C 64 76, 72 72, 72 58 C 72 44, 68 32, 62 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-round',
    category: 'body',
    name: 'Ball / Spherical Body',
    imageUrl: '/references/chibi/body/body-round.svg',
    altText: 'Perfect spherical ball body shape.',
    description: 'Ball shape ideal for snowmen, chicks, Kirby-like creatures, and spirits.',
    tags: ['body', 'round', 'ball', 'sphere'],
    difficulty: 'easy',
    svgContent: `<circle cx="50" cy="52" r="28" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-wide',
    category: 'body',
    name: 'Wide Broad Torso',
    imageUrl: '/references/chibi/body/body-wide.svg',
    altText: 'Broad horizontal oval body outline.',
    description: 'Horizontal heavy build for friendly giants, bears, and wall-like protectors.',
    tags: ['body', 'wide', 'broad', 'heavy'],
    difficulty: 'easy',
    svgContent: `<ellipse cx="50" cy="52" rx="34" ry="24" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-long',
    category: 'body',
    name: 'Long Tube Body',
    imageUrl: '/references/chibi/body/body-long.svg',
    altText: 'Elongated tubular body silhouette.',
    description: 'Weasel, ferret, or serpent-like long body for stretchy cute creatures.',
    tags: ['body', 'long', 'tube', 'ferret'],
    difficulty: 'easy',
    svgContent: `<rect x="38" y="20" width="24" height="60" rx="12" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-curvy',
    category: 'body',
    name: 'Curvy Hourglass Torso',
    imageUrl: '/references/chibi/body/body-curvy.svg',
    altText: 'Gentle waist cinch expanding into soft hip curve.',
    description: 'Cinches slightly at the center before tapering to rounded hips.',
    tags: ['body', 'curvy', 'hourglass', 'feminine'],
    difficulty: 'medium',
    svgContent: `<path d="M 40 26 C 36 36, 43 46, 38 58 C 34 68, 40 76, 50 76 C 60 76, 66 68, 62 58 C 57 46, 64 36, 60 26 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-athletic',
    category: 'body',
    name: 'Athletic V-Torso',
    imageUrl: '/references/chibi/body/body-athletic.svg',
    altText: 'Broad shoulders tapering into a trim athletic waist.',
    description: 'Tapered V-shape giving a sporty, energetic heroic presence.',
    tags: ['body', 'athletic', 'sporty', 'v-shape'],
    difficulty: 'medium',
    svgContent: `<path d="M 32 26 L 68 26 L 58 72 L 42 72 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/>`
  },
  {
    id: 'body-muscular',
    category: 'body',
    name: 'Chibi Muscular Build',
    imageUrl: '/references/chibi/body/body-muscular.svg',
    altText: 'Broad barrel chest with stylized puffy bicep and pectoral blocks.',
    description: 'Comedic puff-chested warrior torso with exaggerated broad clavicles.',
    tags: ['body', 'muscular', 'strong', 'barrel-chest'],
    difficulty: 'medium',
    svgContent: `<path d="M 30 26 C 26 26, 26 40, 32 46 C 36 50, 42 54, 40 70 L 60 70 C 58 54, 64 50, 68 46 C 74 40, 74 26, 70 26 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 42 36 Q 50 40 58 36" stroke="#CDCDC4" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'body-fluffy',
    category: 'body',
    name: 'Fluffy Fur Ball Body',
    imageUrl: '/references/chibi/body/body-fluffy.svg',
    altText: 'Cloud-like tufted body silhouette.',
    description: 'Puffy scalloped cloud silhouette perfect for sheep, rabbits, and pom-poms.',
    tags: ['body', 'fluffy', 'cloud', 'fur', 'sheep'],
    difficulty: 'medium',
    svgContent: `<path d="M 40 28 C 34 22, 24 28, 26 38 C 18 42, 18 54, 24 60 C 20 68, 30 76, 38 74 C 44 80, 56 80, 62 74 C 70 76, 80 68, 76 60 C 82 54, 82 42, 74 38 C 76 28, 66 22, 60 28 C 54 22, 46 22, 40 28 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-top-heavy',
    category: 'body',
    name: 'Top Heavy Torso',
    imageUrl: '/references/chibi/body/body-top-heavy.svg',
    altText: 'Broad upper chest tapering sharply to tiny hip base.',
    description: 'Exaggerated cartoon bravado with massive chest over tiny legs.',
    tags: ['body', 'top-heavy', 'bravado', 'cartoony'],
    difficulty: 'medium',
    svgContent: `<path d="M 28 26 C 24 38, 34 50, 42 68 L 58 68 C 66 50, 76 38, 72 26 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-bottom-heavy',
    category: 'body',
    name: 'Bottom Heavy Pear Torso',
    imageUrl: '/references/chibi/body/body-bottom-heavy.svg',
    altText: 'Narrow neck blooming out into wide grounded hips.',
    description: 'Stable grounded silhouette resembling a cute gourd or pear.',
    tags: ['body', 'bottom-heavy', 'pear', 'grounded'],
    difficulty: 'easy',
    svgContent: `<path d="M 44 26 C 40 38, 28 54, 28 68 C 28 78, 40 82, 50 82 C 60 82, 72 78, 72 68 C 72 54, 60 38, 56 26 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-blob',
    category: 'body',
    name: 'Blob / Slime Body',
    imageUrl: '/references/chibi/body/body-blob.svg',
    altText: 'Puddled gelatinous slime puddle body contour.',
    description: 'Squishy puddle body that ripples with fluid magic.',
    tags: ['body', 'blob', 'slime', 'liquid', 'squishy'],
    difficulty: 'easy',
    svgContent: `<path d="M 50 20 C 32 20, 20 44, 18 64 C 16 78, 30 82, 50 82 C 70 82, 84 78, 82 64 C 80 44, 68 20, 50 20 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'body-square',
    category: 'body',
    name: 'Square Block Body',
    imageUrl: '/references/chibi/body/body-square.svg',
    altText: 'Sturdy square cube torso construction.',
    description: 'Blocky voxel/cardboard chassis ready for robots and block creatures.',
    tags: ['body', 'square', 'block', 'robot', 'voxel'],
    difficulty: 'easy',
    svgContent: `<rect x="28" y="26" width="44" height="48" rx="8" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },

  // ==================== ARMS (Section 12) ====================
  {
    id: 'arm-short',
    category: 'arm',
    name: 'Short Arm',
    imageUrl: '/references/chibi/arms/arm-short.svg',
    altText: 'Compact tapered chibi arm cylinder.',
    description: 'Cute, stubby arm that keeps movement simple and adorable.',
    tags: ['arm', 'short', 'stubby', 'classic'],
    difficulty: 'easy',
    svgContent: `<path d="M 38 24 C 44 24, 66 38, 64 62 C 62 70, 52 70, 50 62 C 48 46, 36 34, 34 28 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'arm-long',
    category: 'arm',
    name: 'Long Slender Arm',
    imageUrl: '/references/chibi/arms/arm-long.svg',
    altText: 'Elongated chibi arm with clear elbow joint.',
    description: 'Longer reach allowing articulate posing, swordplay, and wand flourishes.',
    tags: ['arm', 'long', 'slender', 'expressive'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 22 L 56 50 L 52 76 C 50 82, 42 82, 42 76 L 46 52 L 30 28 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'arm-chubby',
    category: 'arm',
    name: 'Chubby Arm',
    imageUrl: '/references/chibi/arms/arm-chubby.svg',
    altText: 'Soft, puffy marshmallow arm cylinder.',
    description: 'Plump baby-soft arm without harsh joint creases.',
    tags: ['arm', 'chubby', 'soft', 'baby'],
    difficulty: 'easy',
    svgContent: `<path d="M 36 24 C 46 24, 70 38, 68 64 C 66 74, 48 76, 44 64 C 42 46, 32 34, 30 28 Z" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/>`
  },
  {
    id: 'arm-noodle',
    category: 'arm',
    name: 'Noodle Arm',
    imageUrl: '/references/chibi/arms/arm-noodle.svg',
    altText: 'Flexible rubberhose noodle arm.',
    description: 'Vintage rubberhose bendy arm full of kinetic freedom.',
    tags: ['arm', 'noodle', 'rubberhose', 'bendy'],
    difficulty: 'easy',
    svgContent: `<path d="M 34 24 Q 72 44 54 78" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'arm-fluffy',
    category: 'arm',
    name: 'Fluffy Fur Arm',
    imageUrl: '/references/chibi/arms/arm-fluffy.svg',
    altText: 'Arm silhouette coated in animal fur tufts.',
    description: 'Jagged furry sleeve contour for beasts, monsters, and winter coats.',
    tags: ['arm', 'fluffy', 'fur', 'animal'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 24 L 46 32 L 40 38 L 54 46 L 48 54 L 62 62 C 60 72, 46 72, 44 64 L 38 56 L 42 50 L 32 40 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'arm-mechanical',
    category: 'arm',
    name: 'Mechanical Arm',
    imageUrl: '/references/chibi/arms/arm-mechanical.svg',
    altText: 'Robotic jointed arm with hinge bolts and metal plates.',
    description: 'Segmented mechanical joints with bolt circles.',
    tags: ['arm', 'mechanical', 'robot', 'steampunk'],
    difficulty: 'hard',
    svgContent: `<rect x="36" y="24" width="16" height="24" rx="4" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/><circle cx="44" cy="52" r="6" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/><rect x="38" y="58" width="14" height="22" rx="3" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },

  // ==================== HANDS (Section 13) ====================
  {
    id: 'hand-open',
    category: 'hand',
    name: 'Open Hand',
    imageUrl: '/references/chibi/hands/hand-open.svg',
    altText: 'Palm open with tiny chibi fingers spread.',
    description: 'Friendly open hand greeting the world.',
    tags: ['hand', 'open', 'greeting', 'friendly'],
    difficulty: 'easy',
    svgContent: `<path d="M 44 68 C 38 68, 32 58, 32 46 C 32 40, 36 34, 40 34 C 42 34, 44 38, 44 42 L 46 30 C 47 26, 51 26, 52 30 L 54 40 L 56 32 C 57 28, 61 28, 62 32 L 62 46 L 68 44 C 72 44, 74 48, 72 52 C 68 62, 58 68, 44 68 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'hand-fist',
    category: 'hand',
    name: 'Closed Fist',
    imageUrl: '/references/chibi/hands/hand-fist.svg',
    altText: 'Tightly clenched determination fist.',
    description: 'Compact power fist ready for adventure.',
    tags: ['hand', 'fist', 'power', 'ready'],
    difficulty: 'easy',
    svgContent: `<path d="M 36 40 C 36 32, 60 32, 64 40 C 66 44, 66 58, 62 64 C 56 70, 40 70, 36 62 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 36 50 Q 50 54 64 50" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'hand-peace',
    category: 'hand',
    name: 'Peace Sign (V)',
    imageUrl: '/references/chibi/hands/hand-peace.svg',
    altText: 'V-sign victory fingers.',
    description: 'The iconic anime peace pose.',
    tags: ['hand', 'peace', 'victory', 'cute', 'anime'],
    difficulty: 'medium',
    svgContent: `<path d="M 42 66 C 36 66, 36 54, 40 50 L 40 26 C 40 20, 46 20, 46 26 L 48 46 L 54 26 C 54 20, 60 20, 60 26 L 58 48 C 64 50, 64 62, 58 66 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'hand-pointing',
    category: 'hand',
    name: 'Pointing Finger',
    imageUrl: '/references/chibi/hands/hand-pointing.svg',
    altText: 'Index finger pointing forward.',
    description: 'Directs the eye to treasures, discoveries, or companions.',
    tags: ['hand', 'pointing', 'direction', 'index'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 60 C 34 54, 38 46, 44 44 L 68 44 C 74 44, 74 50, 68 50 L 52 50 C 52 54, 52 64, 44 66 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'hand-holding',
    category: 'hand',
    name: 'Holding / Gripping',
    imageUrl: '/references/chibi/hands/hand-holding.svg',
    altText: 'Curled fingers wrapped around an item.',
    description: 'Curved grip tailored for wands, mugs, pencils, or swords.',
    tags: ['hand', 'holding', 'grip', 'item', 'prop'],
    difficulty: 'medium',
    svgContent: `<path d="M 38 34 C 38 28, 54 28, 58 34 C 62 40, 62 60, 56 66 C 48 70, 38 64, 38 54 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="48" cy="46" r="6" stroke="#CDCDC4" stroke-width="1.5" stroke-dasharray="2 2" fill="none"/>`
  },
  {
    id: 'hand-waving',
    category: 'hand',
    name: 'Waving Hand',
    imageUrl: '/references/chibi/hands/hand-waving.svg',
    altText: 'Tilted waving palm with motion lines.',
    description: 'Lively wave sending good vibes.',
    tags: ['hand', 'waving', 'hello', 'bye'],
    difficulty: 'easy',
    svgContent: `<g transform="rotate(-20 50 50)"><path d="M 40 64 C 36 60, 36 48, 42 42 L 44 32 C 45 28, 49 28, 50 32 L 52 40 L 56 34 C 57 30, 61 30, 62 34 L 60 46 C 66 48, 66 58, 60 62 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/></g>`
  },
  {
    id: 'hand-paw',
    category: 'hand',
    name: 'Animal Paw Hand',
    imageUrl: '/references/chibi/hands/hand-paw.svg',
    altText: 'Soft feline paw with toe beans.',
    description: 'Round kitten paw with cute toe pads.',
    tags: ['hand', 'paw', 'animal', 'beans', 'cat'],
    difficulty: 'easy',
    svgContent: `<path d="M 34 62 C 30 52, 34 40, 42 36 C 46 36, 50 40, 50 40 C 50 40, 54 36, 58 36 C 66 40, 70 52, 66 62 C 60 70, 40 70, 34 62 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="50" cy="54" rx="8" ry="6" fill="currentColor"/><circle cx="42" cy="44" r="2.5" fill="currentColor"/><circle cx="50" cy="42" r="2.5" fill="currentColor"/><circle cx="58" cy="44" r="2.5" fill="currentColor"/>`
  },
  {
    id: 'hand-mitten',
    category: 'hand',
    name: 'Mitten Hand',
    imageUrl: '/references/chibi/hands/hand-mitten.svg',
    altText: 'Simplified two-part mitten hand shape.',
    description: 'The easiest chibi hand: one thumb and one main mitten curve.',
    tags: ['hand', 'mitten', 'simple', 'beginner', 'classic'],
    difficulty: 'easy',
    svgContent: `<path d="M 40 68 C 32 68, 30 54, 30 46 C 30 36, 40 32, 54 32 C 64 32, 70 42, 68 52 C 66 60, 60 62, 54 62 L 48 62 C 46 66, 44 68, 40 68 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hand-heart',
    category: 'hand',
    name: 'Heart Gesture',
    imageUrl: '/references/chibi/hands/hand-heart.svg',
    altText: 'Thumb and index fingers forming a heart shape.',
    description: 'K-pop finger heart or dual-hand heart emblem.',
    tags: ['hand', 'heart', 'love', 'kpop', 'cute'],
    difficulty: 'hard',
    svgContent: `<path d="M 42 42 C 40 34, 46 30, 50 36 C 54 30, 60 34, 58 42 C 56 48, 50 56, 50 56 C 50 56, 44 48, 42 42 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'hand-claw',
    category: 'hand',
    name: 'Monster Claw Hand',
    imageUrl: '/references/chibi/hands/hand-claw.svg',
    altText: 'Pointed sharp claw tips extending from fingers.',
    description: 'Fierce little talons for dragons and werebeasts.',
    tags: ['hand', 'claw', 'monster', 'dragon', 'sharp'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 64 L 40 40 L 44 32 L 48 40 L 52 30 L 56 40 L 60 34 L 64 44 C 66 54, 60 64, 48 66 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },

  // ==================== LEGS (Section 14) ====================
  {
    id: 'leg-straight',
    category: 'leg',
    name: 'Straight Leg',
    imageUrl: '/references/chibi/legs/leg-straight.svg',
    altText: 'Clean upright leg column.',
    description: 'Simple balanced pillar leg support.',
    tags: ['leg', 'straight', 'simple', 'column'],
    difficulty: 'easy',
    svgContent: `<path d="M 42 22 L 42 78 M 58 22 L 58 78" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>`
  },
  {
    id: 'leg-bent',
    category: 'leg',
    name: 'Bent / Walking Leg',
    imageUrl: '/references/chibi/legs/leg-bent.svg',
    altText: 'Leg angled in dynamic walking stride.',
    description: 'Casual forward bend indicating a lively stroll.',
    tags: ['leg', 'bent', 'walking', 'dynamic'],
    difficulty: 'medium',
    svgContent: `<path d="M 42 24 L 38 52 L 48 76" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/><path d="M 58 24 L 66 50 L 58 76" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'leg-chubby',
    category: 'leg',
    name: 'Chubby Leg',
    imageUrl: '/references/chibi/legs/leg-chubby.svg',
    altText: 'Puffy rounded cylinder chibi leg.',
    description: 'Plump pillowy baby leg full of softness.',
    tags: ['leg', 'chubby', 'soft', 'baby'],
    difficulty: 'easy',
    svgContent: `<path d="M 38 24 C 36 40, 34 60, 36 74 C 42 76, 48 76, 48 74 C 46 60, 48 40, 46 24 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'leg-noodle',
    category: 'leg',
    name: 'Noodle Leg',
    imageUrl: '/references/chibi/legs/leg-noodle.svg',
    altText: 'Curved rubberhose flexible legs.',
    description: 'Playful bouncy legs bending freely.',
    tags: ['leg', 'noodle', 'rubberhose', 'bouncy'],
    difficulty: 'easy',
    svgContent: `<path d="M 40 24 Q 46 50 38 78" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M 60 24 Q 54 50 62 78" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>`
  },

  // ==================== FEET (Section 15) ====================
  {
    id: 'foot-bare',
    category: 'foot',
    name: 'Barefoot / Round',
    imageUrl: '/references/chibi/feet/foot-bare.svg',
    altText: 'Simple rounded barefoot stub.',
    description: 'Clean rounded barefoot silhouette with minimal toe lines.',
    tags: ['foot', 'barefoot', 'round', 'simple'],
    difficulty: 'easy',
    svgContent: `<path d="M 40 32 L 40 60 C 40 68, 48 72, 64 72 C 72 72, 74 66, 70 60 C 66 54, 52 54, 50 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'foot-shoes',
    category: 'foot',
    name: 'Classic Rounded Shoes',
    imageUrl: '/references/chibi/feet/foot-shoes.svg',
    altText: 'Simple slip-on loafer shoe.',
    description: 'Everyday rounded school shoe or loafer.',
    tags: ['foot', 'shoes', 'loafer', 'classic'],
    difficulty: 'easy',
    svgContent: `<path d="M 38 34 L 38 56 C 36 68, 52 72, 70 70 C 76 68, 76 58, 68 54 C 58 50, 50 48, 50 34 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="38" y1="64" x2="72" y2="64" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'foot-sneakers',
    category: 'foot',
    name: 'Chunky Sneakers',
    imageUrl: '/references/chibi/feet/foot-sneakers.svg',
    altText: 'Streetwear sneaker with thick rubber sole and toe cap.',
    description: 'Trendy chunky athletic shoes with thick soles.',
    tags: ['foot', 'sneakers', 'streetwear', 'chunky'],
    difficulty: 'medium',
    svgContent: `<path d="M 38 34 L 38 56 C 36 66, 44 70, 72 70 C 76 70, 78 64, 72 58 L 52 48 L 50 34 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><rect x="36" y="66" width="38" height="6" rx="2" fill="currentColor"/><path d="M 52 48 L 48 56 M 58 50 L 54 58" stroke="currentColor" stroke-width="1.5"/>`
  },
  {
    id: 'foot-boot',
    category: 'foot',
    name: 'Adventure Boots',
    imageUrl: '/references/chibi/feet/foot-boot.svg',
    altText: 'Sturdy leather boots with folded cuff.',
    description: 'Rugged fantasy hiking or combat boots.',
    tags: ['foot', 'boot', 'adventure', 'leather'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 24 L 36 62 C 34 70, 48 74, 70 72 C 76 70, 76 60, 68 56 L 54 52 L 52 24 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 34 24 L 54 24 L 54 34 L 34 34 Z" fill="currentColor"/>`
  },
  {
    id: 'foot-sandals',
    category: 'foot',
    name: 'Summer Sandals',
    imageUrl: '/references/chibi/feet/foot-sandals.svg',
    altText: 'Open-toe summer strap sandals.',
    description: 'Breezy warm-weather straps on thin sole.',
    tags: ['foot', 'sandals', 'summer', 'beach'],
    difficulty: 'easy',
    svgContent: `<path d="M 40 32 L 40 60 C 40 68, 48 72, 64 72 C 72 72, 74 66, 70 60 C 66 54, 52 54, 50 32 Z" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/><line x1="38" y1="70" x2="72" y2="70" stroke="currentColor" stroke-width="3"/><path d="M 44 54 Q 52 48 60 54" stroke="currentColor" stroke-width="2.5" fill="none"/>`
  },
  {
    id: 'foot-slippers',
    category: 'foot',
    name: 'Cozy Bunny Slippers',
    imageUrl: '/references/chibi/feet/foot-slippers.svg',
    altText: 'Plump fluffy house slippers with bunny ears.',
    description: 'Ultimate indoor comfort with tiny bunny ears.',
    tags: ['foot', 'slippers', 'bunny', 'cozy', 'indoor'],
    difficulty: 'easy',
    svgContent: `<path d="M 34 52 C 34 44, 46 40, 64 42 C 76 44, 78 58, 76 68 C 72 72, 38 72, 34 68 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 58 42 L 56 30 M 64 42 L 66 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
  },
  {
    id: 'foot-claw',
    category: 'foot',
    name: 'Beast Claws',
    imageUrl: '/references/chibi/feet/foot-claw.svg',
    altText: 'Three-toed raptor or dragon claw foot.',
    description: 'Sharp talon talus for predatory companions.',
    tags: ['foot', 'claw', 'talon', 'beast', 'dragon'],
    difficulty: 'medium',
    svgContent: `<path d="M 46 28 L 46 54 L 32 68 M 46 54 L 46 72 M 46 54 L 62 68" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>`
  },
  {
    id: 'foot-hoof',
    category: 'foot',
    name: 'Cloven Hoof',
    imageUrl: '/references/chibi/feet/foot-hoof.svg',
    altText: 'Cloven hoof split in the center.',
    description: 'Split hoof for goats, deer, fauns, and centaurs.',
    tags: ['foot', 'hoof', 'goat', 'deer', 'faun'],
    difficulty: 'easy',
    svgContent: `<path d="M 40 28 L 40 56 L 34 72 L 64 72 L 58 56 L 58 28 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="49" y1="56" x2="49" y2="72" stroke="currentColor" stroke-width="3"/>`
  }
];
