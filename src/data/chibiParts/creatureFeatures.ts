import { ChibiPartReference } from '../../types/chibiReference';

export const CHIBI_CREATURE_FEATURES: ChibiPartReference[] = [
  // ==================== EARS (Section 5) ====================
  {
    id: 'ear-human',
    category: 'ear',
    name: 'Human Ear',
    imageUrl: '/references/chibi/ears/ear-human.svg',
    altText: 'Standard rounded human ear with inner fold.',
    description: 'Classic human ear shape, positioned level with the eye line.',
    tags: ['ear', 'human', 'classic', 'standard'],
    difficulty: 'easy',
    svgContent: `<path d="M 36 28 C 58 28, 64 42, 60 56 C 56 70, 44 74, 38 72 C 34 70, 36 62, 40 60 C 46 58, 48 46, 40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-small-human',
    category: 'ear',
    name: 'Small Human Ear',
    imageUrl: '/references/chibi/ears/ear-small-human.svg',
    altText: 'Delicate compact human ear curve.',
    description: 'Cute, subtle small ear curve tucked neatly beside the cheek.',
    tags: ['ear', 'human', 'small', 'cute'],
    difficulty: 'easy',
    svgContent: `<path d="M 40 38 C 54 38, 58 48, 54 58 C 50 66, 42 66, 40 64" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-large-human',
    category: 'ear',
    name: 'Large Human Ear',
    imageUrl: '/references/chibi/ears/ear-large-human.svg',
    altText: 'Prominent, slightly protruding human ear.',
    description: 'Gives characters a quirky, friendly, or younger storybook look.',
    tags: ['ear', 'human', 'large', 'quirky'],
    difficulty: 'easy',
    svgContent: `<path d="M 30 22 C 68 20, 76 44, 70 64 C 64 80, 44 84, 34 80" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-round',
    category: 'ear',
    name: 'Round Ear',
    imageUrl: '/references/chibi/ears/ear-round.svg',
    altText: 'Simple semicircular ear shape.',
    description: 'Minimalist circle ear inspired by classic mascot designs.',
    tags: ['ear', 'round', 'simple'],
    difficulty: 'easy',
    svgContent: `<path d="M 34 32 C 60 32, 64 50, 64 54 C 64 68, 52 74, 34 74" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-pointed',
    category: 'ear',
    name: 'Pointed Ear',
    imageUrl: '/references/chibi/ears/ear-pointed.svg',
    altText: 'Upward slanting pointed ear silhouette.',
    description: 'Sharp tip with a gentle upward curve, great for goblins and fae.',
    tags: ['ear', 'pointed', 'fantasy', 'elf'],
    difficulty: 'medium',
    svgContent: `<path d="M 30 68 C 30 52, 42 34, 74 22 C 64 42, 60 58, 38 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-elf',
    category: 'ear',
    name: 'Elf Ear',
    imageUrl: '/references/chibi/ears/ear-elf.svg',
    altText: 'Elongated horizontal elven ear tapering to a fine point.',
    description: 'Long and elegant fantasy silhouette arching out gracefully.',
    tags: ['ear', 'elf', 'long', 'elegant', 'fantasy'],
    difficulty: 'medium',
    svgContent: `<path d="M 28 62 C 34 46, 50 36, 84 26 C 68 46, 56 64, 32 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 58 Q 56 46 68 38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  },
  {
    id: 'ear-cat',
    category: 'ear',
    name: 'Cat Ear',
    imageUrl: '/references/chibi/ears/ear-cat.svg',
    altText: 'Triangular feline ear with inner ear tuft.',
    description: 'Upright triangle with soft rounded peak and inner fur detail.',
    tags: ['ear', 'cat', 'animal', 'feline', 'furry'],
    difficulty: 'easy',
    svgContent: `<path d="M 24 76 C 24 50, 36 28, 50 18 C 64 28, 76 50, 76 76 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 68 C 42 52, 48 40, 50 34 C 54 42, 58 56, 58 68" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-fox',
    category: 'ear',
    name: 'Fox Ear',
    imageUrl: '/references/chibi/ears/ear-fox.svg',
    altText: 'Tall triangular fox ear with fluffy inner fur.',
    description: 'Tall, alert ears with dramatic inner fur tufts.',
    tags: ['ear', 'fox', 'animal', 'fluffy', 'forest'],
    difficulty: 'medium',
    svgContent: `<path d="M 22 78 C 22 48, 38 22, 52 14 C 66 22, 80 48, 78 78 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 48 L 32 66 M 52 42 L 40 70 M 58 52 L 48 72" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'ear-wolf',
    category: 'ear',
    name: 'Wolf Ear',
    imageUrl: '/references/chibi/ears/ear-wolf.svg',
    altText: 'Broad, thick-furred wolf ear.',
    description: 'Strong, slightly angled ears with thick protective fur lining.',
    tags: ['ear', 'wolf', 'animal', 'wild', 'fur'],
    difficulty: 'medium',
    svgContent: `<path d="M 20 78 C 22 46, 40 22, 56 16 C 68 28, 80 50, 78 78 Z" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><path d="M 34 52 L 24 64 M 42 46 L 30 70 M 52 50 L 42 72" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'ear-dog',
    category: 'ear',
    name: 'Dog Ear',
    imageUrl: '/references/chibi/ears/ear-dog.svg',
    altText: 'Folded hound dog ear drooping warmly.',
    description: 'Friendly folded ear drooping downward against the cheek.',
    tags: ['ear', 'dog', 'canine', 'friendly', 'floppy'],
    difficulty: 'easy',
    svgContent: `<path d="M 32 24 C 54 18, 70 30, 68 52 C 66 70, 52 82, 40 82 C 32 82, 30 70, 36 56 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-rabbit',
    category: 'ear',
    name: 'Rabbit Ear',
    imageUrl: '/references/chibi/ears/ear-rabbit.svg',
    altText: 'Tall upright bunny ear with inner chamber.',
    description: 'Long, soft vertical silhouette with gentle tapered rounded tip.',
    tags: ['ear', 'rabbit', 'bunny', 'tall', 'cute'],
    difficulty: 'easy',
    svgContent: `<path d="M 36 82 C 28 58, 30 28, 48 14 C 66 28, 68 58, 60 82 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="48" cy="50" rx="6" ry="24" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-bear',
    category: 'ear',
    name: 'Bear Ear',
    imageUrl: '/references/chibi/ears/ear-bear.svg',
    altText: 'Round cup-shaped teddy bear ear.',
    description: 'Perfect round cup shape perched high on the skull.',
    tags: ['ear', 'bear', 'round', 'teddy', 'cozy'],
    difficulty: 'easy',
    svgContent: `<path d="M 24 72 C 18 42, 42 22, 64 26 C 82 30, 86 58, 76 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="54" cy="52" rx="14" ry="14" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-mouse',
    category: 'ear',
    name: 'Mouse Ear',
    imageUrl: '/references/chibi/ears/ear-mouse.svg',
    altText: 'Oversized spherical mouse ear.',
    description: 'Extra large circular disk ear full of cartoon whimsy.',
    tags: ['ear', 'mouse', 'rodent', 'large'],
    difficulty: 'easy',
    svgContent: `<circle cx="50" cy="50" r="34" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><circle cx="50" cy="50" r="22" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-deer',
    category: 'ear',
    name: 'Deer Ear',
    imageUrl: '/references/chibi/ears/ear-deer.svg',
    altText: 'Leaf-shaped cervid deer ear angled outward.',
    description: 'Elegant botanical leaf-shaped ear tilted softly outward.',
    tags: ['ear', 'deer', 'faun', 'gentle'],
    difficulty: 'medium',
    svgContent: `<path d="M 24 66 C 26 44, 46 26, 76 22 C 70 46, 56 68, 32 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 60 Q 52 46 62 34" stroke="currentColor" stroke-width="1.5"/>`
  },
  {
    id: 'ear-floppy',
    category: 'ear',
    name: 'Floppy Ear',
    imageUrl: '/references/chibi/ears/ear-floppy.svg',
    altText: 'Heavy floppy spaniel ear drooping downward.',
    description: 'Long and relaxed, resting warmly against the side of the head.',
    tags: ['ear', 'floppy', 'spaniel', 'cozy'],
    difficulty: 'easy',
    svgContent: `<path d="M 44 20 C 62 20, 72 36, 72 60 C 72 78, 56 86, 42 84 C 30 82, 30 68, 38 52 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-feathered',
    category: 'ear',
    name: 'Feathered Ear',
    imageUrl: '/references/chibi/ears/ear-feathered.svg',
    altText: 'Plumed winged ear adorned with layered flight feathers.',
    description: 'Layered feather plumage popular on celestial and avian beings.',
    tags: ['ear', 'feathered', 'angel', 'harpy'],
    difficulty: 'hard',
    svgContent: `<path d="M 26 70 C 24 50, 36 34, 56 22 L 64 36 L 76 26 L 74 46 L 84 40 L 74 60 C 58 74, 38 76, 26 70 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-none',
    category: 'ear',
    name: 'No Ears / Hidden',
    imageUrl: '/references/chibi/ears/ear-none.svg',
    altText: 'Smooth skull outline without external ear appendages.',
    description: 'Clean hair or hood contour covering ears completely.',
    tags: ['ear', 'none', 'hidden', 'hood'],
    difficulty: 'easy',
    svgContent: `<path d="M 32 30 C 42 20, 58 20, 68 30 C 74 40, 74 60, 68 70 C 58 80, 42 80, 32 70" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3" fill="none"/>`
  },

  // ==================== TAILS (Section 16) ====================
  {
    id: 'tail-cat',
    category: 'tail',
    name: 'Cat Tail',
    imageUrl: '/references/chibi/tails/tail-cat.svg',
    altText: 'Graceful S-curved feline tail with rounded tip.',
    description: 'Sinuous S-curve that conveys playful mood and balance.',
    tags: ['tail', 'cat', 'feline', 'slender', 'playful'],
    difficulty: 'easy',
    svgContent: `<path d="M 32 74 C 36 60, 44 48, 54 44 C 64 40, 72 48, 68 32 C 64 18, 48 24, 46 32 C 44 38, 52 42, 48 50 C 42 58, 28 66, 26 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'tail-fox',
    category: 'tail',
    name: 'Fox Tail',
    imageUrl: '/references/chibi/tails/tail-fox.svg',
    altText: 'Magnificent bushy fox tail with dramatic white tip.',
    description: 'Enormous fluffy tail larger than the character itself.',
    tags: ['tail', 'fox', 'fluffy', 'bushy', 'cozy'],
    difficulty: 'medium',
    svgContent: `<path d="M 24 74 C 20 54, 34 32, 54 18 C 76 28, 86 54, 76 74 C 64 86, 36 86, 24 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 32 L 54 42 L 62 30 L 68 44" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'tail-wolf',
    category: 'tail',
    name: 'Wolf Tail',
    imageUrl: '/references/chibi/tails/tail-wolf.svg',
    altText: 'Thick-furred trailing wolf tail.',
    description: 'Thick, straight-trailing wild tail with jagged fur tips.',
    tags: ['tail', 'wolf', 'wild', 'fur'],
    difficulty: 'medium',
    svgContent: `<path d="M 28 76 C 24 58, 38 38, 58 24 C 74 38, 80 62, 70 78 C 58 84, 40 84, 28 76 Z" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/>`
  },
  {
    id: 'tail-dragon',
    category: 'tail',
    name: 'Dragon Tail',
    imageUrl: '/references/chibi/tails/tail-dragon.svg',
    altText: 'Spade-tipped or spiked reptile dragon tail.',
    description: 'Powerful tapering tail armed with dorsal spikes and a spade tip.',
    tags: ['tail', 'dragon', 'reptile', 'spikes', 'fantasy'],
    difficulty: 'medium',
    svgContent: `<path d="M 24 72 C 30 50, 48 38, 70 34 C 74 24, 82 22, 80 34 C 76 46, 56 60, 32 78 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><polygon points="42,48 46,38 52,44" fill="currentColor"/><polygon points="54,42 60,32 64,40" fill="currentColor"/><polygon points="76,28 88,24 82,38" fill="currentColor"/>`
  },
  {
    id: 'tail-bunny',
    category: 'tail',
    name: 'Bunny Puff Tail',
    imageUrl: '/references/chibi/tails/tail-bunny.svg',
    altText: 'Small fluffy cotton-ball rabbit tail.',
    description: 'Delightful fluffy puff ball perched neatly behind.',
    tags: ['tail', 'bunny', 'rabbit', 'puff', 'tiny', 'cute'],
    difficulty: 'easy',
    svgContent: `<circle cx="50" cy="50" r="22" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 40 44 Q 50 38 60 44 M 36 54 Q 50 62 64 54" stroke="#CDCDC4" stroke-width="2" fill="none"/>`
  },
  {
    id: 'tail-lion',
    category: 'tail',
    name: 'Lion Tuft Tail',
    imageUrl: '/references/chibi/tails/tail-lion.svg',
    altText: 'Smooth slender tail ending in a dramatic teardrop fur puff.',
    description: 'Slender rope-like tail crowned with a regal tuft.',
    tags: ['tail', 'lion', 'tuft', 'regal'],
    difficulty: 'easy',
    svgContent: `<path d="M 28 76 Q 44 48 56 46" stroke="currentColor" stroke-width="3.5" fill="none"/><path d="M 54 44 C 54 30, 68 22, 76 22 C 78 34, 72 46, 60 50 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'tail-mermaid',
    category: 'tail',
    name: 'Mermaid / Fish Fluke',
    imageUrl: '/references/chibi/tails/tail-mermaid.svg',
    altText: 'Graceful twin-fin fish fluke tail.',
    description: 'Aquatic twin fluke that replaces legs with siren elegance.',
    tags: ['tail', 'mermaid', 'fish', 'aquatic', 'fantasy'],
    difficulty: 'hard',
    svgContent: `<path d="M 50 20 C 44 40, 42 60, 50 72 C 58 60, 56 40, 50 20 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 50 72 C 34 68, 18 78, 22 92 C 34 88, 46 82, 50 74 C 54 82, 66 88, 78 92 C 82 78, 66 68, 50 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },

  // ==================== WINGS (Section 17) ====================
  {
    id: 'wing-angel',
    category: 'wing',
    name: 'Angel Feather Wings',
    imageUrl: '/references/chibi/wings/wing-angel.svg',
    altText: 'Feathered celestial wing arch.',
    description: 'Layered primary flight feathers radiating pure grace.',
    tags: ['wing', 'angel', 'feather', 'celestial', 'divine'],
    difficulty: 'medium',
    svgContent: `<path d="M 30 76 C 24 50, 36 28, 62 20 C 74 34, 70 50, 80 50 C 68 62, 64 68, 70 70 C 58 76, 44 76, 30 76 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 38 Q 60 40 68 50 M 38 52 Q 54 54 62 64" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'wing-bat',
    category: 'wing',
    name: 'Bat / Demon Wing',
    imageUrl: '/references/chibi/wings/wing-bat.svg',
    altText: 'Spined leathery bat or dragon wing.',
    description: 'Leathery webbing stretched between bone finger struts.',
    tags: ['wing', 'bat', 'demon', 'dragon', 'leathery'],
    difficulty: 'medium',
    svgContent: `<path d="M 28 72 L 40 28 L 76 34 L 56 48 L 78 58 L 48 64 L 62 76 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/><line x1="40" y1="28" x2="56" y2="48" stroke="currentColor" stroke-width="2"/><line x1="40" y1="28" x2="48" y2="64" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'wing-fairy',
    category: 'wing',
    name: 'Fairy Insect Wing',
    imageUrl: '/references/chibi/wings/wing-fairy.svg',
    altText: 'Translucent gossamer butterfly or dragonfly wing.',
    description: 'Delicate gossamer wings sparkling with forest dust.',
    tags: ['wing', 'fairy', 'insect', 'butterfly', 'magical'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 68 C 24 46, 34 22, 66 18 C 82 34, 76 56, 54 62 C 68 68, 70 82, 58 86 C 44 86, 38 76, 36 68 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="54" cy="38" rx="8" ry="12" stroke="#CDCDC4" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'wing-mechanical',
    category: 'wing',
    name: 'Mechanical Wings',
    imageUrl: '/references/chibi/wings/wing-mechanical.svg',
    altText: 'Brass clockwork or jet glider wings.',
    description: 'Articulated metal slats and propulsion hinges.',
    tags: ['wing', 'mechanical', 'robot', 'clockwork', 'steampunk'],
    difficulty: 'hard',
    svgContent: `<path d="M 28 66 L 36 32 L 76 30 L 64 44 L 82 48 L 56 60 L 70 70 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="36" cy="32" r="5" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/>`
  },

  // ==================== HORNS & ANTLERS (Section 18) ====================
  {
    id: 'horn-small',
    category: 'horn',
    name: 'Small Horns',
    imageUrl: '/references/chibi/horns/horn-small.svg',
    altText: 'Pair of tiny curved demon horn buds.',
    description: 'Subtle little nubs sprouting through the bangs.',
    tags: ['horn', 'small', 'demon', 'cute', 'nubs'],
    difficulty: 'easy',
    svgContent: `<path d="M 36 64 C 34 46, 42 34, 46 26 C 48 38, 46 54, 44 64 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 64 64 C 66 46, 58 34, 54 26 C 52 38, 54 54, 56 64 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'horn-ram',
    category: 'horn',
    name: 'Curved Ram Horns',
    imageUrl: '/references/chibi/horns/horn-ram.svg',
    altText: 'Heavy spiral curled ram horns.',
    description: 'Sweeping spiral horns wrapping warmly around the temples.',
    tags: ['horn', 'ram', 'spiral', 'curved', 'faun'],
    difficulty: 'hard',
    svgContent: `<path d="M 32 60 C 20 54, 18 36, 28 26 C 42 16, 56 24, 52 40 C 48 52, 38 52, 34 44" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><path d="M 68 60 C 80 54, 82 36, 72 26 C 58 16, 44 24, 48 40 C 52 52, 62 52, 66 44" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/>`
  },
  {
    id: 'antler-deer',
    category: 'antler',
    name: 'Deer Antlers',
    imageUrl: '/references/chibi/antlers/antler-deer.svg',
    altText: 'Branching cervid deer antlers.',
    description: 'Graceful forest branches crowning the brow with woodland majesty.',
    tags: ['antler', 'deer', 'branching', 'nature', 'forest'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 68 L 34 42 L 22 32 M 34 42 L 36 22 L 46 30 M 36 22 L 30 14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M 64 68 L 66 42 L 78 32 M 66 42 L 64 22 L 54 30 M 64 22 L 70 14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
  },

  // ==================== CREATURE & SPECIAL FEATURES ====================
  {
    id: 'scale-dragon',
    category: 'scale',
    name: 'Dragon Scales',
    imageUrl: '/references/chibi/scales/scale-dragon.svg',
    altText: 'Overlapping diamond reptile scale pattern.',
    description: 'Armored scutes across cheeks, shoulders, or tail.',
    tags: ['scale', 'dragon', 'reptile', 'armor'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 40 L 46 30 L 56 40 L 46 50 Z" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/><path d="M 46 50 L 56 40 L 66 50 L 56 60 Z" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/><path d="M 26 50 L 36 40 L 46 50 L 36 60 Z" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/>`
  },
  {
    id: 'creat-slime-body',
    category: 'creature-feature',
    name: 'Slime Form',
    imageUrl: '/references/chibi/creature-features/creat-slime.svg',
    altText: 'Translucent gooey puddle creature shape.',
    description: 'Gelatinous liquid body with floating cores or air bubbles.',
    tags: ['creature-feature', 'slime', 'liquid', 'goo'],
    difficulty: 'easy',
    svgContent: `<path d="M 50 24 C 30 24, 20 48, 18 68 C 16 82, 32 84, 50 84 C 68 84, 84 82, 82 68 C 80 48, 70 24, 50 24 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="40" cy="50" r="5" stroke="#CDCDC4" stroke-width="1.5" fill="none"/><circle cx="62" cy="62" r="3" stroke="#CDCDC4" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'creat-tentacles',
    category: 'creature-feature',
    name: 'Tentacles',
    imageUrl: '/references/chibi/creature-features/creat-tentacles.svg',
    altText: 'Curling squid or octopus suction-cup tentacles.',
    description: 'Wavy tentacles with cute round suction cup details.',
    tags: ['creature-feature', 'tentacles', 'octopus', 'squid', 'eldritch'],
    difficulty: 'medium',
    svgContent: `<path d="M 32 30 Q 20 54 36 78 Q 42 66 38 48 Q 44 64 56 78 Q 62 60 52 42" stroke="currentColor" stroke-width="3.5" fill="none"/>`
  },
  {
    id: 'fan-unicorn-horn',
    category: 'fantasy-feature',
    name: 'Spiral Unicorn Horn',
    imageUrl: '/references/chibi/fantasy-features/fan-unicorn-horn.svg',
    altText: 'Single spiraled pearlescent unicorn horn.',
    description: 'Single spiral horn centered on forehead shining with pure magic.',
    tags: ['fantasy-feature', 'unicorn', 'horn', 'spiral', 'magic'],
    difficulty: 'easy',
    svgContent: `<path d="M 42 74 L 50 18 L 58 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="44" y1="62" x2="54" y2="56" stroke="currentColor" stroke-width="2"/><line x1="46" y1="46" x2="52" y2="40" stroke="currentColor" stroke-width="2"/><line x1="48" y1="32" x2="51" y2="28" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'fan-witch-hat',
    category: 'fantasy-feature',
    name: 'Pointed Witch Hat',
    imageUrl: '/references/chibi/fantasy-features/fan-witch-hat.svg',
    altText: 'Curled crooked brimmed witch hat.',
    description: 'Crooked wizard cone with broad circular brim.',
    tags: ['fantasy-feature', 'witch', 'wizard', 'hat', 'magic'],
    difficulty: 'medium',
    svgContent: `<ellipse cx="50" cy="70" rx="36" ry="12" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 28 66 Q 44 42 52 18 Q 60 42 72 66 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 32 60 Q 50 64 68 60" stroke="currentColor" stroke-width="2"/>`
  }
];
