import { ChibiPartReference } from '../../types/chibiReference';

export const CHIBI_HEADS: ChibiPartReference[] = [
  // --- Basic Head Shapes ---
  {
    id: 'head-round',
    category: 'head',
    name: 'Round Head',
    imageUrl: '/references/chibi/heads/head-round.svg',
    altText: 'Round spherical chibi head outline.',
    description: 'The golden standard spherical chibi head shape. Soft, youthful, and universally cute.',
    tags: ['head', 'round', 'classic', 'cute', 'beginner'],
    difficulty: 'easy',
    compatibleTypes: ['human', 'animal-like', 'fantasy', 'monster', 'robot', 'creature'],
    compatibleThemes: ['everyday', 'cozy', 'nature', 'magical', 'fantasy', 'storybook'],
    svgContent: `<circle cx="50" cy="50" r="38" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="20" y1="56" x2="80" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-oval',
    category: 'head',
    name: 'Oval Head',
    imageUrl: '/references/chibi/heads/head-oval.svg',
    altText: 'An elongated oval chibi head outline with gentle chin curve.',
    description: 'Slightly taller proportions, great for slender, older, or mature chibi personalities.',
    tags: ['head', 'oval', 'slender', 'tall'],
    difficulty: 'easy',
    compatibleTypes: ['human', 'fantasy', 'animal-like'],
    svgContent: `<ellipse cx="50" cy="50" rx="32" ry="40" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="18" x2="50" y2="82" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="24" y1="56" x2="76" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-square',
    category: 'head',
    name: 'Square Head',
    imageUrl: '/references/chibi/heads/head-square.svg',
    altText: 'Chibi head with a rounded square jawline and sturdy cheeks.',
    description: 'Provides a sturdy, reliable jawline feel, ideal for robots and brave fighters.',
    tags: ['head', 'square', 'chubby', 'sturdy', 'robot'],
    difficulty: 'easy',
    compatibleTypes: ['robot', 'human', 'monster'],
    svgContent: `<rect x="18" y="16" width="64" height="68" rx="20" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="22" y1="58" x2="78" y2="58" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-heart',
    category: 'head',
    name: 'Heart Head',
    imageUrl: '/references/chibi/heads/head-heart.svg',
    altText: 'Wide forehead tapering softly into a delicate rounded chin.',
    description: 'Tapers gracefully from wide cheeks down to a sweet, delicate tapered chin.',
    tags: ['head', 'heart', 'delicate', 'fairy', 'cute'],
    difficulty: 'easy',
    compatibleTypes: ['fantasy', 'human', 'magical-character'],
    svgContent: `<path d="M 22 40 C 22 22, 38 18, 50 28 C 62 18, 78 22, 78 40 C 78 62, 58 78, 50 82 C 42 78, 22 62, 22 40 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="22" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-diamond',
    category: 'head',
    name: 'Diamond Head',
    imageUrl: '/references/chibi/heads/head-diamond.svg',
    altText: 'Angular diamond chibi head with prominent cheek width.',
    description: 'Cheeks flare outward, tapering to a pointed crown and jaw.',
    tags: ['head', 'diamond', 'angular', 'fantasy'],
    difficulty: 'medium',
    compatibleTypes: ['fantasy', 'monster', 'creature'],
    svgContent: `<path d="M 50 16 L 82 48 L 50 84 L 18 48 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-triangle',
    category: 'head',
    name: 'Triangle Head',
    imageUrl: '/references/chibi/heads/head-triangle.svg',
    altText: 'Inverted triangle head with a broad top and small chin.',
    description: 'Distinctive manga silhouette with expressive wide eye placement.',
    tags: ['head', 'triangle', 'manga', 'sharp'],
    difficulty: 'medium',
    svgContent: `<path d="M 20 26 C 30 20, 70 20, 80 26 C 82 45, 68 76, 50 84 C 32 76, 18 45, 20 26 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-long',
    category: 'head',
    name: 'Long Head',
    imageUrl: '/references/chibi/heads/head-long.svg',
    altText: 'Vertically extended chibi head outline.',
    description: 'Great for lanky characters, wizards, elders, or thoughtful personalities.',
    tags: ['head', 'long', 'slender', 'wizard'],
    difficulty: 'easy',
    svgContent: `<path d="M 26 26 C 26 16, 74 16, 74 26 L 74 68 C 74 80, 26 80, 26 68 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-wide',
    category: 'head',
    name: 'Wide Head',
    imageUrl: '/references/chibi/heads/head-wide.svg',
    altText: 'Horizontally compressed head with exaggerated baby-like cheeks.',
    description: 'Extra squishy cheeks that give maximum infant or creature cuteness.',
    tags: ['head', 'wide', 'squishy', 'cute', 'baby'],
    difficulty: 'easy',
    svgContent: `<ellipse cx="50" cy="50" rx="42" ry="28" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-rectangle',
    category: 'head',
    name: 'Rectangle Head',
    imageUrl: '/references/chibi/heads/head-rectangle.svg',
    altText: 'Upright boxy rectangular head outline.',
    description: 'Perfect for mechanical constructs, stoic guards, and cardboard robots.',
    tags: ['head', 'rectangle', 'box', 'robot'],
    difficulty: 'easy',
    compatibleTypes: ['robot', 'creature'],
    svgContent: `<rect x="22" y="16" width="56" height="70" rx="10" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-pear',
    category: 'head',
    name: 'Pear Head',
    imageUrl: '/references/chibi/heads/head-pear.svg',
    altText: 'Narrow forehead ballooning into heavy soft lower cheeks.',
    description: 'Heavy cheeks at the bottom create an endearing, chubby expression.',
    tags: ['head', 'pear', 'chubby', 'cheeks'],
    difficulty: 'medium',
    svgContent: `<path d="M 34 22 C 38 18, 62 18, 66 22 C 72 30, 84 56, 80 72 C 76 86, 24 86, 20 72 C 16 56, 28 30, 34 22 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-egg',
    category: 'head',
    name: 'Egg Head',
    imageUrl: '/references/chibi/heads/head-egg.svg',
    altText: 'Egg-shaped head outline broader at the bottom.',
    description: 'Organic oval with a slight natural taper upward.',
    tags: ['head', 'egg', 'smooth', 'organic'],
    difficulty: 'easy',
    svgContent: `<path d="M 50 16 C 68 16, 78 40, 78 60 C 78 78, 66 84, 50 84 C 34 84, 22 78, 22 60 C 22 40, 32 16, 50 16 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-fluffy',
    category: 'head',
    name: 'Fluffy Head',
    imageUrl: '/references/chibi/heads/head-fluffy.svg',
    altText: 'Head outline with tufts of animal or creature fur on both cheeks.',
    description: 'Built-in fur tufts ready for kittens, puppies, and mythical beasts.',
    tags: ['head', 'fluffy', 'animal', 'fur', 'creature'],
    difficulty: 'medium',
    compatibleTypes: ['animal-like', 'creature', 'monster'],
    svgContent: `<path d="M 32 20 C 44 14, 56 14, 68 20 C 78 28, 76 40, 84 46 L 76 52 L 86 60 L 72 68 C 64 82, 36 82, 28 68 L 14 60 L 24 52 L 16 46 C 24 40, 22 28, 32 20 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },

  // --- Head Angles ---
  {
    id: 'head-angle-front',
    category: 'head-angle',
    name: 'Front Angle',
    imageUrl: '/references/chibi/head-angles/head-angle-front.svg',
    altText: 'Direct frontal view diagram with center line and eye horizon.',
    description: 'Symmetrical, direct, and straightforward for initial designs.',
    tags: ['angle', 'front', 'symmetrical', 'baseline'],
    difficulty: 'easy',
    svgContent: `<circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="18" x2="50" y2="78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="22" y1="54" x2="78" y2="54" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-three-quarter-left',
    category: 'head-angle',
    name: '3/4 Left Angle',
    imageUrl: '/references/chibi/head-angles/head-angle-three-quarter-left.svg',
    altText: 'Head turned 45 degrees toward the left with foreshortened cheek.',
    description: 'The most dynamic and popular character illustration angle.',
    tags: ['angle', '3/4', 'left', 'dynamic'],
    difficulty: 'medium',
    svgContent: `<path d="M 28 32 C 30 18, 68 18, 76 32 C 82 46, 80 66, 68 76 C 54 84, 40 82, 32 72 C 26 66, 26 56, 30 52 C 26 44, 26 38, 28 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 20 Q 38 48 42 78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><path d="M 26 52 Q 52 56 78 50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="34" cy="52" r="3" fill="currentColor"/><circle cx="56" cy="50" r="3" fill="currentColor"/>`
  },
  {
    id: 'head-angle-three-quarter-right',
    category: 'head-angle',
    name: '3/4 Right Angle',
    imageUrl: '/references/chibi/head-angles/head-angle-three-quarter-right.svg',
    altText: 'Head turned 45 degrees toward the right.',
    description: 'Balanced perspective showing depth and facial curvature to the right.',
    tags: ['angle', '3/4', 'right', 'dynamic'],
    difficulty: 'medium',
    svgContent: `<path d="M 72 32 C 70 18, 32 18, 24 32 C 18 46, 20 66, 32 76 C 46 84, 60 82, 68 72 C 74 66, 74 56, 70 52 C 74 44, 74 38, 72 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 56 20 Q 62 48 58 78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><path d="M 74 52 Q 48 56 22 50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="66" cy="52" r="3" fill="currentColor"/><circle cx="44" cy="50" r="3" fill="currentColor"/>`
  },
  {
    id: 'head-angle-side',
    category: 'head-angle',
    name: 'Side Profile View',
    imageUrl: '/references/chibi/head-angles/head-angle-side.svg',
    altText: 'Pure side profile silhouette with chibi nose and chin curve.',
    description: 'Essential for model sheets and turnaround consistency.',
    tags: ['angle', 'profile', 'side', 'turnaround'],
    difficulty: 'medium',
    svgContent: `<path d="M 54 18 C 30 18, 20 34, 20 50 C 20 68, 34 82, 54 82 C 60 82, 64 80, 68 76 L 62 70 C 60 70, 52 72, 46 72 C 34 72, 34 64, 38 58 L 44 58 C 42 56, 38 54, 38 50 C 38 42, 46 42, 46 42" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 54 18 C 76 18, 78 40, 78 52 C 78 70, 68 78, 62 82" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="42" cy="46" r="3" fill="currentColor"/>`
  },
  {
    id: 'head-angle-looking-up',
    category: 'head-angle',
    name: 'Looking Up Angle',
    imageUrl: '/references/chibi/head-angles/head-angle-looking-up.svg',
    altText: 'Chibi head tilted upwards exposing jaw underside.',
    description: 'Expresses wonder, curiosity, starry-eyed optimism, or hope.',
    tags: ['angle', 'upward', 'wonder', 'gazing'],
    difficulty: 'hard',
    svgContent: `<path d="M 50 18 C 68 18, 78 34, 76 56 C 74 72, 62 82, 50 82 C 38 82, 26 72, 24 56 C 22 34, 32 18, 50 18 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 26 44 Q 50 36 74 44" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="38" cy="42" r="3" fill="currentColor"/><circle cx="62" cy="42" r="3" fill="currentColor"/><path d="M 47 54 Q 50 57 53 54" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-looking-down',
    category: 'head-angle',
    name: 'Looking Down Angle',
    imageUrl: '/references/chibi/head-angles/head-angle-looking-down.svg',
    altText: 'Chibi head tilted downward showing more forehead and lowered gaze.',
    description: 'Great for shy, sleepy, pouting, or reading characters.',
    tags: ['angle', 'downward', 'shy', 'pout', 'sleepy'],
    difficulty: 'hard',
    svgContent: `<circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 24 62 Q 50 70 76 62" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="38" cy="62" r="3" fill="currentColor"/><circle cx="62" cy="62" r="3" fill="currentColor"/><path d="M 48 70 Q 50 68 52 70" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-tilted-left',
    category: 'head-angle',
    name: 'Tilted Left Angle',
    imageUrl: '/references/chibi/head-angles/head-angle-tilted-left.svg',
    altText: 'Chibi head cocked playfully to the left.',
    description: 'Playful and quizzical, adds immediate charm and curiosity.',
    tags: ['angle', 'tilted', 'curious', 'cute', 'left'],
    difficulty: 'medium',
    svgContent: `<g transform="rotate(-15 50 50)"><circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/></g>`
  },
  {
    id: 'head-angle-tilted-right',
    category: 'head-angle',
    name: 'Tilted Right Angle',
    imageUrl: '/references/chibi/head-angles/head-angle-tilted-right.svg',
    altText: 'Chibi head cocked playfully to the right.',
    description: 'Playful questioning head tilt to the right side.',
    tags: ['angle', 'tilted', 'curious', 'cute', 'right'],
    difficulty: 'medium',
    svgContent: `<g transform="rotate(15 50 50)"><circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/></g>`
  }
];
