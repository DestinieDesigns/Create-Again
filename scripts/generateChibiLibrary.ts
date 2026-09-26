import fs from 'fs';
import path from 'path';

interface PartDef {
  id: string;
  category: string;
  name: string;
  altText: string;
  description: string;
  tags: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  compatibleTypes?: string[];
  compatibleThemes?: string[];
  svg: string;
}

const parts: PartDef[] = [
  // ==================== HEADS (12) ====================
  {
    id: 'head-round',
    category: 'head',
    name: 'Round Head',
    altText: 'Round chibi head outline.',
    description: 'The golden standard spherical chibi head shape. Soft, youthful, and universally cute.',
    tags: ['head', 'round', 'classic', 'cute', 'beginner'],
    difficulty: 'easy',
    compatibleTypes: ['human', 'animal-like', 'fantasy', 'monster', 'robot', 'creature'],
    svg: `<circle cx="50" cy="50" r="38" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="20" y1="56" x2="80" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-oval',
    category: 'head',
    name: 'Oval Head',
    altText: 'An elongated oval chibi head outline with gentle chin curve.',
    description: 'Slightly taller proportions, great for slender, older, or mature chibi personalities.',
    tags: ['head', 'oval', 'slender', 'tall'],
    difficulty: 'easy',
    compatibleTypes: ['human', 'fantasy', 'animal-like'],
    svg: `<ellipse cx="50" cy="50" rx="32" ry="40" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="18" x2="50" y2="82" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="24" y1="56" x2="76" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-square',
    category: 'head',
    name: 'Square Head',
    altText: 'Chibi head with a rounded square jawline and sturdy cheeks.',
    description: 'Provides a sturdy, reliable jawline feel, ideal for robots and brave fighters.',
    tags: ['head', 'square', 'chubby', 'sturdy', 'robot'],
    difficulty: 'easy',
    compatibleTypes: ['robot', 'human', 'monster'],
    svg: `<rect x="18" y="16" width="64" height="68" rx="20" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="22" y1="58" x2="78" y2="58" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-heart',
    category: 'head',
    name: 'Heart Head',
    altText: 'Wide forehead tapering softly into a delicate rounded chin.',
    description: 'Tapers gracefully from wide cheeks down to a sweet, delicate tapered chin.',
    tags: ['head', 'heart', 'delicate', 'fairy', 'cute'],
    difficulty: 'easy',
    compatibleTypes: ['fantasy', 'human', 'magical-character'],
    svg: `<path d="M 22 40 C 22 22, 38 18, 50 28 C 62 18, 78 22, 78 40 C 78 62, 58 78, 50 82 C 42 78, 22 62, 22 40 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="22" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-diamond',
    category: 'head',
    name: 'Diamond Head',
    altText: 'Angular diamond chibi head with prominent cheek width.',
    description: 'Cheeks flare outward, tapering to a pointed crown and jaw.',
    tags: ['head', 'diamond', 'angular', 'fantasy'],
    difficulty: 'medium',
    compatibleTypes: ['fantasy', 'monster', 'creature'],
    svg: `<path d="M 50 16 L 82 48 L 50 84 L 18 48 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-triangle',
    category: 'head',
    name: 'Triangle Head',
    altText: 'Inverted triangle head with a broad top and small chin.',
    description: 'Distinctive manga silhouette with expressive wide eye placement.',
    tags: ['head', 'triangle', 'manga', 'sharp'],
    difficulty: 'medium',
    svg: `<path d="M 20 26 C 30 20, 70 20, 80 26 C 82 45, 68 76, 50 84 C 32 76, 18 45, 20 26 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-long',
    category: 'head',
    name: 'Long Head',
    altText: 'Vertically extended chibi head outline.',
    description: 'Great for lanky characters, wizards, elders, or thoughtful personalities.',
    tags: ['head', 'long', 'slender', 'wizard'],
    difficulty: 'easy',
    svg: `<path d="M 26 26 C 26 16, 74 16, 74 26 L 74 68 C 74 80, 26 80, 26 68 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-wide',
    category: 'head',
    name: 'Wide Head',
    altText: 'Horizontally compressed head with exaggerated baby-like cheeks.',
    description: 'Extra squishy cheeks that give maximum infant or creature cuteness.',
    tags: ['head', 'wide', 'squishy', 'cute', 'baby'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="42" ry="28" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-rectangle',
    category: 'head',
    name: 'Rectangle Head',
    altText: 'Upright boxy rectangular head outline.',
    description: 'Perfect for mechanical constructs, stoic guards, and cardboard robots.',
    tags: ['head', 'rectangle', 'box', 'robot'],
    difficulty: 'easy',
    compatibleTypes: ['robot', 'creature'],
    svg: `<rect x="22" y="16" width="56" height="70" rx="10" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-pear',
    category: 'head',
    name: 'Pear Head',
    altText: 'Narrow forehead ballooning into heavy soft lower cheeks.',
    description: 'Heavy cheeks at the bottom create an endearing, chubby expression.',
    tags: ['head', 'pear', 'chubby', 'cheeks'],
    difficulty: 'medium',
    svg: `<path d="M 34 22 C 38 18, 62 18, 66 22 C 72 30, 84 56, 80 72 C 76 86, 24 86, 20 72 C 16 56, 28 30, 34 22 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-egg',
    category: 'head',
    name: 'Egg Head',
    altText: 'Egg-shaped head outline broader at the bottom.',
    description: 'Organic oval with a slight natural taper upward.',
    tags: ['head', 'egg', 'smooth', 'organic'],
    difficulty: 'easy',
    svg: `<path d="M 50 16 C 68 16, 78 40, 78 60 C 78 78, 66 84, 50 84 C 34 84, 22 78, 22 60 C 22 40, 32 16, 50 16 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-fluffy',
    category: 'head',
    name: 'Fluffy Head',
    altText: 'Head outline with tufts of animal or creature fur on both cheeks.',
    description: 'Built-in fur tufts ready for kittens, puppies, and mythical beasts.',
    tags: ['head', 'fluffy', 'animal', 'fur', 'creature'],
    difficulty: 'medium',
    compatibleTypes: ['animal-like', 'creature', 'monster'],
    svg: `<path d="M 32 20 C 44 14, 56 14, 68 20 C 78 28, 76 40, 84 46 L 76 52 L 86 60 L 72 68 C 64 82, 36 82, 28 68 L 14 60 L 24 52 L 16 46 C 24 40, 22 28, 32 20 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },

  // ==================== HEAD ANGLES (8) ====================
  {
    id: 'head-angle-front',
    category: 'head-angle',
    name: 'Front Angle',
    altText: 'Direct frontal view diagram with center line and eye horizon.',
    description: 'Symmetrical, direct, and straightforward for initial designs.',
    tags: ['angle', 'front', 'symmetrical', 'baseline'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="18" x2="50" y2="78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="22" y1="54" x2="78" y2="54" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-three-quarter-left',
    category: 'head-angle',
    name: '3/4 Left Angle',
    altText: 'Head turned 45 degrees toward the left with foreshortened cheek.',
    description: 'The most dynamic and popular character illustration angle.',
    tags: ['angle', '3/4', 'left', 'dynamic'],
    difficulty: 'medium',
    svg: `<path d="M 28 32 C 30 18, 68 18, 76 32 C 82 46, 80 66, 68 76 C 54 84, 40 82, 32 72 C 26 66, 26 56, 30 52 C 26 44, 26 38, 28 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 20 Q 38 48 42 78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><path d="M 26 52 Q 52 56 78 50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="34" cy="52" r="3" fill="currentColor"/><circle cx="56" cy="50" r="3" fill="currentColor"/>`
  },
  {
    id: 'head-angle-three-quarter-right',
    category: 'head-angle',
    name: '3/4 Right Angle',
    altText: 'Head turned 45 degrees toward the right.',
    description: 'Balanced perspective showing depth and facial curvature to the right.',
    tags: ['angle', '3/4', 'right', 'dynamic'],
    difficulty: 'medium',
    svg: `<path d="M 72 32 C 70 18, 32 18, 24 32 C 18 46, 20 66, 32 76 C 46 84, 60 82, 68 72 C 74 66, 74 56, 70 52 C 74 44, 74 38, 72 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 56 20 Q 62 48 58 78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><path d="M 74 52 Q 48 56 22 50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="66" cy="52" r="3" fill="currentColor"/><circle cx="44" cy="50" r="3" fill="currentColor"/>`
  },
  {
    id: 'head-angle-side',
    category: 'head-angle',
    name: 'Side Profile',
    altText: 'Pure side profile silhouette with chibi nose and chin curve.',
    description: 'Essential for model sheets and turnaround consistency.',
    tags: ['angle', 'profile', 'side', 'turnaround'],
    difficulty: 'medium',
    svg: `<path d="M 54 18 C 30 18, 20 34, 20 50 C 20 68, 34 82, 54 82 C 60 82, 64 80, 68 76 L 62 70 C 60 70, 52 72, 46 72 C 34 72, 34 64, 38 58 L 44 58 C 42 56, 38 54, 38 50 C 38 42, 46 42, 46 42" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="42" cy="46" r="3" fill="currentColor"/>`
  },
  {
    id: 'head-angle-looking-up',
    category: 'head-angle',
    name: 'Looking Up',
    altText: 'Chibi head tilted upwards exposing the underside of the jaw.',
    description: 'Expresses wonder, curiosity, starry-eyed optimism, or hope.',
    tags: ['angle', 'upward', 'wonder', 'gazing'],
    difficulty: 'hard',
    svg: `<path d="M 50 18 C 68 18, 78 34, 76 56 C 74 72, 62 82, 50 82 C 38 82, 26 72, 24 56 C 22 34, 32 18, 50 18 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 26 44 Q 50 36 74 44" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="38" cy="42" r="3" fill="currentColor"/><circle cx="62" cy="42" r="3" fill="currentColor"/><path d="M 47 54 Q 50 57 53 54" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-looking-down',
    category: 'head-angle',
    name: 'Looking Down',
    altText: 'Chibi head tilted downward showing more forehead and lowered gaze.',
    description: 'Great for shy, sleepy, pouting, or reading characters.',
    tags: ['angle', 'downward', 'shy', 'pout', 'sleepy'],
    difficulty: 'hard',
    svg: `<circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 24 62 Q 50 70 76 62" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="38" cy="62" r="3" fill="currentColor"/><circle cx="62" cy="62" r="3" fill="currentColor"/><path d="M 48 70 Q 50 68 52 70" stroke="currentColor" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-tilted-left',
    category: 'head-angle',
    name: 'Tilted Left',
    altText: 'Chibi head cocked playfully to the left.',
    description: 'Playful and quizzical, adds immediate charm and curiosity.',
    tags: ['angle', 'tilted', 'curious', 'cute', 'left'],
    difficulty: 'medium',
    svg: `<g transform="rotate(-15 50 50)"><circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/></g>`
  },
  {
    id: 'head-angle-tilted-right',
    category: 'head-angle',
    name: 'Tilted Right',
    altText: 'Chibi head cocked playfully to the right.',
    description: 'Playful questioning head tilt to the right side.',
    tags: ['angle', 'tilted', 'curious', 'cute', 'right'],
    difficulty: 'medium',
    svg: `<g transform="rotate(15 50 50)"><circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/></g>`
  },

  // ==================== EARS (23) ====================
  {
    id: 'ear-human',
    category: 'ear',
    name: 'Human Ear',
    altText: 'Standard rounded human ear with inner antihelix fold.',
    description: 'Classic human ear shape, positioned level with the eye line.',
    tags: ['ear', 'human', 'classic', 'standard'],
    difficulty: 'easy',
    svg: `<path d="M 36 28 C 58 28, 64 42, 60 56 C 56 70, 44 74, 38 72 C 34 70, 36 62, 40 60 C 46 58, 48 46, 40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-small-human',
    category: 'ear',
    name: 'Small Human Ear',
    altText: 'Delicate compact human ear curve.',
    description: 'Cute, subtle small ear curve tucked neatly beside the cheek.',
    tags: ['ear', 'human', 'small', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 40 38 C 54 38, 58 48, 54 58 C 50 66, 42 66, 40 64" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-large-human',
    category: 'ear',
    name: 'Large Human Ear',
    altText: 'Prominent, slightly protruding human ear.',
    description: 'Gives characters a quirky, friendly, or younger storybook look.',
    tags: ['ear', 'human', 'large', 'quirky'],
    difficulty: 'easy',
    svg: `<path d="M 30 22 C 68 20, 76 44, 70 64 C 64 80, 44 84, 34 80" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-round',
    category: 'ear',
    name: 'Round Ear',
    altText: 'Simple semicircular ear shape.',
    description: 'Minimalist circle ear inspired by classic mascot designs.',
    tags: ['ear', 'round', 'simple', 'minimalist'],
    difficulty: 'easy',
    svg: `<path d="M 34 32 C 60 32, 64 50, 64 54 C 64 68, 52 74, 34 74" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-pointed',
    category: 'ear',
    name: 'Pointed Ear',
    altText: 'Upward slanting pointed ear silhouette.',
    description: 'Sharp tip with a gentle upward curve, great for goblins and fae.',
    tags: ['ear', 'pointed', 'fantasy', 'elf'],
    difficulty: 'medium',
    svg: `<path d="M 30 68 C 30 52, 42 34, 74 22 C 64 42, 60 58, 38 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-elf',
    category: 'ear',
    name: 'Elf Ear',
    altText: 'Elongated horizontal elven ear tapering to a fine point.',
    description: 'Long and elegant fantasy silhouette arching out gracefully.',
    tags: ['ear', 'elf', 'long', 'elegant', 'fantasy'],
    difficulty: 'medium',
    svg: `<path d="M 28 62 C 34 46, 50 36, 84 26 C 68 46, 56 64, 32 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 58 Q 56 46 68 38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  },
  {
    id: 'ear-cat',
    category: 'ear',
    name: 'Cat Ear',
    altText: 'Triangular feline ear with inner ear tuft.',
    description: 'Upright triangle with soft rounded peak and inner fur detail.',
    tags: ['ear', 'cat', 'animal', 'feline', 'furry'],
    difficulty: 'easy',
    svg: `<path d="M 24 76 C 24 50, 36 28, 50 18 C 64 28, 76 50, 76 76 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 68 C 42 52, 48 40, 50 34 C 54 42, 58 56, 58 68" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-fox',
    category: 'ear',
    name: 'Fox Ear',
    altText: 'Tall triangular fox ear with fluffy inner fur.',
    description: 'Tall, alert ears with dramatic inner fur tufts.',
    tags: ['ear', 'fox', 'animal', 'fluffy', 'forest'],
    difficulty: 'medium',
    svg: `<path d="M 22 78 C 22 48, 38 22, 52 14 C 66 22, 80 48, 78 78 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 48 L 32 66 M 52 42 L 40 70 M 58 52 L 48 72" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
  },
  {
    id: 'ear-wolf',
    category: 'ear',
    name: 'Wolf Ear',
    altText: 'Broad, thick-furred wolf ear.',
    description: 'Strong, slightly angled ears with thick protective fur lining.',
    tags: ['ear', 'wolf', 'animal', 'wild', 'fur'],
    difficulty: 'medium',
    svg: `<path d="M 20 78 C 22 46, 40 22, 56 16 C 68 28, 80 50, 78 78 Z" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><path d="M 34 52 L 24 64 M 42 46 L 30 70 M 52 50 L 42 72" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'ear-dog',
    category: 'ear',
    name: 'Dog Ear',
    altText: 'Folded hound dog ear drooping warmly.',
    description: 'Friendly folded ear drooping downward against the cheek.',
    tags: ['ear', 'dog', 'canine', 'friendly', 'floppy'],
    difficulty: 'easy',
    svg: `<path d="M 32 24 C 54 18, 70 30, 68 52 C 66 70, 52 82, 40 82 C 32 82, 30 70, 36 56 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-rabbit',
    category: 'ear',
    name: 'Rabbit Ear',
    altText: 'Tall upright bunny ear with pink/hollow inner chamber.',
    description: 'Long, soft vertical silhouette with gentle tapered rounded tip.',
    tags: ['ear', 'rabbit', 'bunny', 'tall', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 36 82 C 28 58, 30 28, 48 14 C 66 28, 68 58, 60 82 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="48" cy="50" rx="6" ry="24" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-bear',
    category: 'ear',
    name: 'Bear Ear',
    altText: 'Round cup-shaped teddy bear ear.',
    description: 'Perfect round cup shape perched high on the skull.',
    tags: ['ear', 'bear', 'round', 'teddy', 'cozy'],
    difficulty: 'easy',
    svg: `<path d="M 24 72 C 18 42, 42 22, 64 26 C 82 30, 86 58, 76 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="54" cy="52" rx="14" ry="14" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-mouse',
    category: 'ear',
    name: 'Mouse Ear',
    altText: 'Oversized spherical mouse ear.',
    description: 'Extra large circular disk ear full of cartoon whimsy.',
    tags: ['ear', 'mouse', 'rodent', 'large', 'whimsical'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="34" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><circle cx="50" cy="50" r="22" stroke="currentColor" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-deer',
    category: 'ear',
    name: 'Deer Ear',
    altText: 'Leaf-shaped cervid deer ear angled outward.',
    description: 'Elegant botanical leaf-shaped ear tilted softly outward.',
    tags: ['ear', 'deer', 'faun', 'gentle', 'forest'],
    difficulty: 'medium',
    svg: `<path d="M 24 66 C 26 44, 46 26, 76 22 C 70 46, 56 68, 32 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 60 Q 52 46 62 34" stroke="currentColor" stroke-width="1.5"/>`
  },
  {
    id: 'ear-horse',
    category: 'ear',
    name: 'Horse Ear',
    altText: 'Alert equine ear with pointed crest.',
    description: 'Slender, mobile equine ear angled forward with attention.',
    tags: ['ear', 'horse', 'equine', 'alert', 'centaur'],
    difficulty: 'medium',
    svg: `<path d="M 30 76 C 28 50, 40 28, 54 18 C 66 28, 72 52, 68 76 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-floppy',
    category: 'ear',
    name: 'Floppy Ear',
    altText: 'Heavy floppy spaniel/rabbit ear drooping downward.',
    description: 'Long and relaxed, resting warmly against the side of the head.',
    tags: ['ear', 'floppy', 'spaniel', 'cozy', 'sleepy'],
    difficulty: 'easy',
    svg: `<path d="M 44 20 C 62 20, 72 36, 72 60 C 72 78, 56 86, 42 84 C 30 82, 30 68, 38 52 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-long',
    category: 'ear',
    name: 'Long Droop Ear',
    altText: 'Exaggerated droop ear draping down to shoulders.',
    description: 'Dramatic length reaching shoulder level for melancholic or soft vibes.',
    tags: ['ear', 'long', 'droop', 'melancholic'],
    difficulty: 'medium',
    svg: `<path d="M 42 16 C 60 16, 68 36, 68 64 C 68 84, 52 92, 38 90 C 26 88, 28 72, 36 50 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-short',
    category: 'ear',
    name: 'Short Nub Ear',
    altText: 'Tiny rounded ear nub.',
    description: 'Small rounded nub, ideal for hamsters, seals, and tiny critters.',
    tags: ['ear', 'short', 'nub', 'tiny', 'hamster'],
    difficulty: 'easy',
    svg: `<path d="M 36 52 C 34 38, 54 34, 62 44 C 68 52, 62 66, 42 66 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-feathered',
    category: 'ear',
    name: 'Feathered Ear',
    altText: 'Plumed winged ear adorned with layered flight feathers.',
    description: 'Layered feather plumage popular on celestial and avian beings.',
    tags: ['ear', 'feathered', 'angel', 'harpy', 'celestial'],
    difficulty: 'hard',
    svg: `<path d="M 26 70 C 24 50, 36 34, 56 22 L 64 36 L 76 26 L 74 46 L 84 40 L 74 60 C 58 74, 38 76, 26 70 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-fantasy',
    category: 'ear',
    name: 'Fantasy Fin Ear',
    altText: 'Translucent aquatic fin ear with spined webbing.',
    description: 'Webbed aquatic fin design for sirens, merfolk, and sea elves.',
    tags: ['ear', 'fantasy', 'fin', 'aquatic', 'merfolk'],
    difficulty: 'hard',
    svg: `<path d="M 28 66 L 78 26 C 68 38, 62 44, 76 48 C 64 56, 60 62, 70 70 C 56 70, 44 72, 28 66 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-horned',
    category: 'ear',
    name: 'Horned Ear',
    altText: 'Demon/dragon hybrid ear crowned with small horns.',
    description: 'Combines an elven ear structure with curved demonic horn nubs.',
    tags: ['ear', 'horned', 'demon', 'dragon', 'hybrid'],
    difficulty: 'medium',
    svg: `<path d="M 26 66 C 30 50, 48 38, 76 26 C 68 44, 58 60, 32 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 38 C 42 22, 52 14, 58 12 C 58 20, 52 30, 48 38" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'ear-no-ears',
    category: 'ear',
    name: 'No Visible Ears',
    altText: 'Smooth skull outline without external ear appendages.',
    description: 'Clean hair or hood contour covering ears completely.',
    tags: ['ear', 'none', 'hidden', 'hood', 'clean'],
    difficulty: 'easy',
    svg: `<path d="M 32 30 C 42 20, 58 20, 68 30 C 74 40, 74 60, 68 70 C 58 80, 42 80, 32 70" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3" fill="none"/>`
  },
  {
    id: 'ear-unusual',
    category: 'ear',
    name: 'Unusual Antenna Ear',
    altText: 'Mechanical or alien antenna replacing the standard ear.',
    description: 'Curious alien or robotic antenna stalk with receptor knob.',
    tags: ['ear', 'unusual', 'antenna', 'robot', 'alien'],
    difficulty: 'medium',
    svg: `<line x1="34" y1="72" x2="68" y2="28" stroke="currentColor" stroke-width="3.5"/><circle cx="72" cy="24" r="8" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },

  // ==================== EYES (24) ====================
  {
    id: 'eye-large',
    category: 'eye',
    name: 'Large Anime Eyes',
    altText: 'Oversized glossy manga eyes with prominent highlights.',
    description: 'Enormous glittering anime eyes that carry maximum emotion.',
    tags: ['eye', 'large', 'anime', 'sparkle', 'classic'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="28" ry="34" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><ellipse cx="50" cy="52" rx="20" ry="26" fill="currentColor"/><circle cx="44" cy="40" r="8" fill="#FFFFFF"/><circle cx="58" cy="62" r="4" fill="#FFFFFF"/><path d="M 22 28 C 36 20, 64 20, 78 28" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>`
  },
  {
    id: 'eye-medium',
    category: 'eye',
    name: 'Medium Eyes',
    altText: 'Balanced oval chibi eye with gentle upper lash line.',
    description: 'Balanced size that leaves plenty of room for facial expressions.',
    tags: ['eye', 'medium', 'balanced', 'clean'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="52" rx="20" ry="24" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="50" cy="54" rx="14" ry="18" fill="currentColor"/><circle cx="46" cy="46" r="5" fill="#FFFFFF"/><path d="M 28 34 C 40 28, 60 28, 72 34" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`
  },
  {
    id: 'eye-small',
    category: 'eye',
    name: 'Small Eyes',
    altText: 'Neat, understated compact chibi eye.',
    description: 'Subtle and understated, ideal for deadpan or sensible characters.',
    tags: ['eye', 'small', 'subtle', 'cool'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="52" rx="14" ry="16" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="50" cy="53" rx="9" ry="11" fill="currentColor"/><circle cx="48" cy="48" r="3.5" fill="#FFFFFF"/><path d="M 34 38 Q 50 34 66 38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>`
  },
  {
    id: 'eye-tiny',
    category: 'eye',
    name: 'Tiny Bead Eyes',
    altText: 'Simple small circular bead eye.',
    description: 'Little stuffed-animal bead eye, charming and easy to draw.',
    tags: ['eye', 'tiny', 'bead', 'plushie', 'simple'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="10" fill="currentColor"/><circle cx="48" cy="48" r="3" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-round',
    category: 'eye',
    name: 'Round Wide Eyes',
    altText: 'Wide circular eye bursting with curious wonder.',
    description: 'Wide circle silhouette indicating innocent curiosity.',
    tags: ['eye', 'round', 'wide', 'innocent'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><circle cx="50" cy="52" r="18" fill="currentColor"/><circle cx="44" cy="44" r="6" fill="#FFFFFF"/><path d="M 24 30 C 38 22, 62 22, 76 30" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`
  },
  {
    id: 'eye-almond',
    category: 'eye',
    name: 'Almond Eyes',
    altText: 'Graceful almond-shaped eye with tapered corners.',
    description: 'Sophisticated tapered almond contour with elegant flick.',
    tags: ['eye', 'almond', 'elegant', 'mature'],
    difficulty: 'medium',
    svg: `<path d="M 22 52 C 34 34, 66 34, 78 52 C 66 70, 34 70, 22 52 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="50" cy="52" r="14" fill="currentColor"/><circle cx="46" cy="46" r="4" fill="#FFFFFF"/><path d="M 20 50 C 36 32, 64 32, 80 48" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`
  },
  {
    id: 'eye-wide',
    category: 'eye',
    name: 'Wide Stare Eyes',
    altText: 'Staring wide anime eye with dilated pupil.',
    description: 'Dramatic shocked or hyper-focused gaze.',
    tags: ['eye', 'wide', 'stare', 'shock', 'alert'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="30" ry="24" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><ellipse cx="50" cy="50" rx="16" ry="16" fill="currentColor"/><circle cx="46" cy="44" r="5" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-narrow',
    category: 'eye',
    name: 'Narrow Sharp Eyes',
    altText: 'Narrow horizontal eye line with focused pupil.',
    description: 'Calculated, scheming, or mysteriously confident look.',
    tags: ['eye', 'narrow', 'sharp', 'scheming', 'cool'],
    difficulty: 'medium',
    svg: `<path d="M 22 52 Q 50 40 78 48 Q 50 62 22 52 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="50" cy="50" r="8" fill="currentColor"/><path d="M 20 48 Q 50 38 80 46" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>`
  },
  {
    id: 'eye-sleepy',
    category: 'eye',
    name: 'Sleepy Half-Lidded Eyes',
    altText: 'Drooping upper eyelid covering half of the iris.',
    description: 'Half-closed upper eyelid creating a relaxed or drowsy demeanor.',
    tags: ['eye', 'sleepy', 'drowsy', 'calm', 'cozy'],
    difficulty: 'easy',
    svg: `<path d="M 22 46 C 36 44, 64 44, 78 48 C 76 66, 62 76, 50 76 C 38 76, 24 66, 22 46 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 32 48 C 34 60, 42 68, 50 68 C 58 68, 66 60, 68 48 Z" fill="currentColor"/><line x1="20" y1="46" x2="80" y2="48" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>`
  },
  {
    id: 'eye-happy',
    category: 'eye',
    name: 'Happy Arch Eyes',
    altText: 'Curved joyful upward arch representing closed happy eyes.',
    description: 'Pure radiant joy represented by an inverted crescent arch.',
    tags: ['eye', 'happy', 'laugh', 'joy', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 26 56 C 34 38, 66 38, 74 56" stroke="currentColor" stroke-width="5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eye-sad',
    category: 'eye',
    name: 'Sad Watery Eyes',
    altText: 'Drooping corners with watery highlights.',
    description: 'Watery sheen and drooping outer corners full of vulnerability.',
    tags: ['eye', 'sad', 'watery', 'tears', 'crying'],
    difficulty: 'medium',
    svg: `<path d="M 24 44 C 36 40, 64 48, 76 60 C 66 74, 34 72, 24 44 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="50" cy="56" r="14" fill="currentColor"/><circle cx="44" cy="52" r="5" fill="#FFFFFF"/><circle cx="56" cy="62" r="3" fill="#FFFFFF"/><path d="M 22 42 C 36 36, 66 46, 78 58" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`
  },
  {
    id: 'eye-angry',
    category: 'eye',
    name: 'Angry Angled Eyes',
    altText: 'Sharp inward slant lash line showing defiance.',
    description: 'Fierce inward slant delivering determined fight or frustration.',
    tags: ['eye', 'angry', 'fierce', 'determined'],
    difficulty: 'easy',
    svg: `<path d="M 24 42 L 76 56 C 70 70, 40 74, 30 64 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="52" cy="56" r="10" fill="currentColor"/><line x1="20" y1="40" x2="80" y2="56" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`
  },
  {
    id: 'eye-curious',
    category: 'eye',
    name: 'Curious Spark Eyes',
    altText: 'Wide open eye with inquisitive upward reflection.',
    description: 'Bright reflection angled high to signal deep fascination.',
    tags: ['eye', 'curious', 'wonder', 'spark'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="24" ry="28" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><ellipse cx="50" cy="48" rx="16" ry="18" fill="currentColor"/><circle cx="44" cy="38" r="6" fill="#FFFFFF"/><circle cx="54" cy="44" r="3" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-surprised',
    category: 'eye',
    name: 'Surprised Wide Disks',
    altText: 'Huge round iris floating in open sclera.',
    description: 'Floating small iris in large whites expressing pure surprise.',
    tags: ['eye', 'surprised', 'gasp', 'shock'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="50" cy="50" r="10" fill="currentColor"/><circle cx="48" cy="48" r="3" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-starry',
    category: 'eye',
    name: 'Starry Eyes',
    altText: 'Chibi eye with prominent four-pointed star pupil.',
    description: 'Star-shaped highlights ideal for idol dreams and magic moments.',
    tags: ['eye', 'starry', 'sparkle', 'magic', 'idol'],
    difficulty: 'medium',
    svg: `<ellipse cx="50" cy="50" rx="26" ry="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="50" cy="52" rx="18" ry="24" fill="currentColor"/><path d="M 50 36 Q 50 44 42 44 Q 50 44 50 52 Q 50 44 58 44 Q 50 44 50 36 Z" fill="#FFFFFF"/><path d="M 24 28 Q 50 20 76 28" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>`
  },
  {
    id: 'eye-sparkle',
    category: 'eye',
    name: 'Sparkle Gem Eyes',
    altText: 'Faceted gem reflections inside glistening eye.',
    description: 'Multiple geometric reflections mimicking cut jewels.',
    tags: ['eye', 'sparkle', 'gem', 'jewel', 'fantasy'],
    difficulty: 'hard',
    svg: `<ellipse cx="50" cy="50" rx="26" ry="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="50" cy="52" rx="18" ry="24" fill="currentColor"/><polygon points="44,38 48,34 52,38 48,42" fill="#FFFFFF"/><polygon points="54,50 56,48 58,50 56,52" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-simple-dot',
    category: 'eye',
    name: 'Simple Dot Eyes',
    altText: 'Solid round minimalist black dot.',
    description: 'Minimalist classic comic dot eye with zero clutter.',
    tags: ['eye', 'dot', 'simple', 'minimal', 'comic'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="8" fill="currentColor"/>`
  },
  {
    id: 'eye-closed',
    category: 'eye',
    name: 'Closed Peaceful Eyes',
    altText: 'Gentle downward curved line for sleeping or serenity.',
    description: 'Downward relaxed curve showing peaceful resting.',
    tags: ['eye', 'closed', 'peaceful', 'sleep', 'relax'],
    difficulty: 'easy',
    svg: `<path d="M 26 48 C 34 62, 66 62, 74 48" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eye-half-closed',
    category: 'eye',
    name: 'Half Closed Eyes',
    altText: 'Heavy lid resting halfway down.',
    description: 'Skeptical or smirking half-open eye contour.',
    tags: ['eye', 'half-closed', 'skeptical', 'smirk'],
    difficulty: 'easy',
    svg: `<path d="M 24 50 Q 50 44 76 50 Q 50 68 24 50 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="50" cy="52" r="8" fill="currentColor"/><line x1="22" y1="48" x2="78" y2="48" stroke="currentColor" stroke-width="4"/>`
  },
  {
    id: 'eye-unusual',
    category: 'eye',
    name: 'Spiral Hypno Eye',
    altText: 'Hypnotic concentric spiral in eye socket.',
    description: 'Dizzy, enchanted, or overwhelmed comic spiral.',
    tags: ['eye', 'unusual', 'spiral', 'dizzy', 'hypno'],
    difficulty: 'medium',
    svg: `<circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 50 50 m 0 -4 a 4 4 0 0 1 4 4 a 8 8 0 0 1 -8 8 a 12 12 0 0 1 -12 -12 a 16 16 0 0 1 16 -16" stroke="currentColor" stroke-width="3" fill="none"/>`
  },
  {
    id: 'eye-animal',
    category: 'eye',
    name: 'Cat Slit Eye',
    altText: 'Vertical slit pupil predator eye.',
    description: 'Vertical slit pupil bringing feline or reptilian flair.',
    tags: ['eye', 'animal', 'slit', 'cat', 'reptile'],
    difficulty: 'medium',
    svg: `<ellipse cx="50" cy="50" rx="26" ry="30" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 50 30 C 56 42, 56 58, 50 70 C 44 58, 44 42, 50 30 Z" fill="currentColor"/><circle cx="44" cy="42" r="4" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-creature',
    category: 'eye',
    name: 'Goat / Frog Horizontal Pupil',
    altText: 'Wide rectangular horizontal pupil eye.',
    description: 'Uncanny horizontal rectangular pupil for mystical creatures.',
    tags: ['eye', 'creature', 'horizontal', 'goat', 'frog', 'cryptid'],
    difficulty: 'medium',
    svg: `<circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><rect x="34" y="44" width="32" height="12" rx="4" fill="currentColor"/><circle cx="42" cy="40" r="3" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-robot',
    category: 'eye',
    name: 'Robot Digital Eye',
    altText: 'Glowing square pixel display eye.',
    description: 'Pixelated digital monitor glow for cybernetic beings.',
    tags: ['eye', 'robot', 'digital', 'cyber', 'display'],
    difficulty: 'easy',
    svg: `<rect x="24" y="28" width="52" height="44" rx="6" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="44" cy="50" r="8" fill="currentColor"/><circle cx="56" cy="50" r="8" fill="currentColor"/><line x1="28" y1="50" x2="72" y2="50" stroke="#CDCDC4" stroke-width="1"/>`
  },
  {
    id: 'eye-fantasy',
    category: 'eye',
    name: 'Runic Glowing Eye',
    altText: 'Pupil infused with ancient glowing runic glyph.',
    description: 'Ancient glowing sigil centered in mystical iris.',
    tags: ['eye', 'fantasy', 'rune', 'magic', 'sigil'],
    difficulty: 'hard',
    svg: `<circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="50" cy="50" r="16" stroke="currentColor" stroke-width="2" fill="none"/><line x1="50" y1="36" x2="50" y2="64" stroke="currentColor" stroke-width="2.5"/><line x1="36" y1="50" x2="64" y2="50" stroke="currentColor" stroke-width="2.5"/>`
  },

  // ==================== EYEBROWS (17) ====================
  {
    id: 'eyebrow-neutral',
    category: 'eyebrow',
    name: 'Neutral Eyebrow',
    altText: 'Calm, gentle horizontal brow stroke.',
    description: 'Level and relaxed baseline brow arch.',
    tags: ['eyebrow', 'neutral', 'calm', 'baseline'],
    difficulty: 'easy',
    svg: `<path d="M 24 50 Q 50 46 76 50" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-raised',
    category: 'eyebrow',
    name: 'Raised Brow',
    altText: 'Arched brow raised in polite curiosity.',
    description: 'Lifted high above the eye expressing intrigue.',
    tags: ['eyebrow', 'raised', 'curious', 'intrigue'],
    difficulty: 'easy',
    svg: `<path d="M 24 56 Q 50 36 76 48" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-angled',
    category: 'eyebrow',
    name: 'Angled Brow',
    altText: 'Inward slanting determined brow.',
    description: 'Firm diagonal angle conveying confidence or grit.',
    tags: ['eyebrow', 'angled', 'confident', 'grit'],
    difficulty: 'easy',
    svg: `<line x1="26" y1="42" x2="74" y2="58" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>`
  },
  {
    id: 'eyebrow-worried',
    category: 'eyebrow',
    name: 'Worried Brow',
    altText: 'Inverted droop arch showing apprehension.',
    description: 'Outer corners slant down in genuine concern.',
    tags: ['eyebrow', 'worried', 'concern', 'sad'],
    difficulty: 'easy',
    svg: `<path d="M 26 44 Q 50 56 74 46" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-soft',
    category: 'eyebrow',
    name: 'Soft Gentle Brow',
    altText: 'Very subtle thin brow arch.',
    description: 'Delicate feathered stroke bringing tenderness.',
    tags: ['eyebrow', 'soft', 'gentle', 'delicate'],
    difficulty: 'easy',
    svg: `<path d="M 28 52 Q 50 44 72 50" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-dramatic',
    category: 'eyebrow',
    name: 'Dramatic Arch',
    altText: 'High theatrical peaked eyebrow arch.',
    description: 'High peak delivering flair, poise, and haughty elegance.',
    tags: ['eyebrow', 'dramatic', 'arch', 'theatrical'],
    difficulty: 'medium',
    svg: `<path d="M 22 56 Q 48 30 78 48" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-thick',
    category: 'eyebrow',
    name: 'Thick Bushy Brow',
    altText: 'Solid bold bushy caterpillar brow.',
    description: 'Hearty bold brow full of personality and warmth.',
    tags: ['eyebrow', 'thick', 'bushy', 'bold'],
    difficulty: 'easy',
    svg: `<path d="M 22 50 Q 50 44 78 48 L 74 56 Q 50 52 24 58 Z" fill="currentColor"/>`
  },
  {
    id: 'eyebrow-thin',
    category: 'eyebrow',
    name: 'Thin Fine Line Brow',
    altText: 'Single hair hairline stroke.',
    description: 'Ultra thin precision line for refined grace.',
    tags: ['eyebrow', 'thin', 'fine', 'subtle'],
    difficulty: 'easy',
    svg: `<line x1="26" y1="50" x2="74" y2="48" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
  },
  {
    id: 'eyebrow-curved',
    category: 'eyebrow',
    name: 'Curved Round Brow',
    altText: 'Smooth half-moon round arc.',
    description: 'Playful round crescent matching friendly mascot faces.',
    tags: ['eyebrow', 'curved', 'round', 'playful'],
    difficulty: 'easy',
    svg: `<path d="M 26 56 C 36 38, 64 38, 74 56" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-straight',
    category: 'eyebrow',
    name: 'Straight Flat Brow',
    altText: 'Horizontal flat bar eyebrow.',
    description: 'Deadpan flat line for stoic or unbothered moods.',
    tags: ['eyebrow', 'straight', 'flat', 'stoic'],
    difficulty: 'easy',
    svg: `<line x1="24" y1="50" x2="76" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`
  },
  {
    id: 'eyebrow-happy',
    category: 'eyebrow',
    name: 'Happy Lifted Brow',
    altText: 'Brows raised high in pure cheer.',
    description: 'Raised high and relaxed to match a beaming smile.',
    tags: ['eyebrow', 'happy', 'cheer', 'lifted'],
    difficulty: 'easy',
    svg: `<path d="M 26 44 Q 50 34 74 44" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-sad',
    category: 'eyebrow',
    name: 'Sad Droop Brow',
    altText: 'Slanted sorrowful brow.',
    description: 'Slants heavily down to express heartbreak.',
    tags: ['eyebrow', 'sad', 'sorrow', 'down'],
    difficulty: 'easy',
    svg: `<line x1="28" y1="58" x2="72" y2="42" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`
  },
  {
    id: 'eyebrow-angry',
    category: 'eyebrow',
    name: 'Angry V-Brow',
    altText: 'Furious diagonal slant meeting low between eyes.',
    description: 'Aggressive downward point conveying intense ire.',
    tags: ['eyebrow', 'angry', 'fierce', 'v-shape'],
    difficulty: 'easy',
    svg: `<line x1="26" y1="40" x2="74" y2="60" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`
  },
  {
    id: 'eyebrow-surprised',
    category: 'eyebrow',
    name: 'Surprised Sky Brow',
    altText: 'Brows pushed way up onto forehead.',
    description: 'Floating near the hair roots in astonishment.',
    tags: ['eyebrow', 'surprised', 'astonished', 'high'],
    difficulty: 'easy',
    svg: `<path d="M 26 34 Q 50 24 74 34" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-curious',
    category: 'eyebrow',
    name: 'Inquisitive Brow',
    altText: 'One arched brow and one furrowed brow.',
    description: 'Asymmetric eyebrow pose questioning the situation.',
    tags: ['eyebrow', 'curious', 'question', 'asymmetric'],
    difficulty: 'medium',
    svg: `<path d="M 24 50 Q 50 36 76 46" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-determined',
    category: 'eyebrow',
    name: 'Determined Hero Brow',
    altText: 'Thick resolute downward hero brow.',
    description: 'Ready for the boss battle with locked determination.',
    tags: ['eyebrow', 'determined', 'heroic', 'focus'],
    difficulty: 'easy',
    svg: `<path d="M 24 44 L 76 58 L 74 64 L 24 50 Z" fill="currentColor"/>`
  },
  {
    id: 'eyebrow-sleepy',
    category: 'eyebrow',
    name: 'Sleepy Slack Brow',
    altText: 'Limp brow line resting heavy.',
    description: 'Total relaxation with zero facial muscle tension.',
    tags: ['eyebrow', 'sleepy', 'slack', 'drowsy'],
    difficulty: 'easy',
    svg: `<path d="M 28 52 C 40 50, 60 54, 72 56" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>`
  },

  // ==================== NOSES (15) ====================
  {
    id: 'nose-dot',
    category: 'nose',
    name: 'Dot Nose',
    altText: 'Single tiny centered dot.',
    description: 'The golden rule of chibi: one clean dot.',
    tags: ['nose', 'dot', 'minimal', 'classic', 'cute'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="4.5" fill="currentColor"/>`
  },
  {
    id: 'nose-tiny-triangle',
    category: 'nose',
    name: 'Tiny Triangle Nose',
    altText: 'Small downward pointed triangle nose.',
    description: 'Soft inverted triangle giving a kitten-like muzzle suggestion.',
    tags: ['nose', 'triangle', 'animal', 'cute'],
    difficulty: 'easy',
    svg: `<polygon points="46,47 54,47 50,53" fill="currentColor"/>`
  },
  {
    id: 'nose-line',
    category: 'nose',
    name: 'Line Nose',
    altText: 'Short vertical or slightly angled line.',
    description: 'Subtle vertical bridge mark for older chibis.',
    tags: ['nose', 'line', 'bridge', 'simple'],
    difficulty: 'easy',
    svg: `<line x1="50" y1="44" x2="50" y2="56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
  },
  {
    id: 'nose-button',
    category: 'nose',
    name: 'Button Nose',
    altText: 'Small circle button outline nose.',
    description: 'A button-like circle silhouette that looks like a plushie stitch.',
    tags: ['nose', 'button', 'circle', 'plushie'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="7" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'nose-round',
    category: 'nose',
    name: 'Round Nose',
    altText: 'Filled soft round pebble nose.',
    description: 'Solid pillowy nose for clowns, dwarfs, and cuddly bears.',
    tags: ['nose', 'round', 'plump', 'bear'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="8" fill="currentColor"/>`
  },
  {
    id: 'nose-animal',
    category: 'nose',
    name: 'Animal Nose & Philtrum',
    altText: 'Feline/canine nose pad with cleft lip line.',
    description: 'Animal leather pad connecting down to a split lip.',
    tags: ['nose', 'animal', 'pad', 'muzzle', 'cat', 'dog'],
    difficulty: 'easy',
    svg: `<path d="M 44 46 Q 50 44 56 46 Q 50 54 44 46 Z" fill="currentColor"/><line x1="50" y1="52" x2="50" y2="58" stroke="currentColor" stroke-width="2.5"/>`
  },
  {
    id: 'nose-cat',
    category: 'nose',
    name: 'Cat Nose',
    altText: 'Soft pink triangular cat nose.',
    description: 'Tiny rounded triangle tailored for catgirls and kittens.',
    tags: ['nose', 'cat', 'kitten', 'triangle'],
    difficulty: 'easy',
    svg: `<path d="M 44 47 C 46 45, 54 45, 56 47 C 54 53, 46 53, 44 47 Z" fill="currentColor"/>`
  },
  {
    id: 'nose-dog',
    category: 'nose',
    name: 'Dog Nose',
    altText: 'Broad moist puppy nose leather.',
    description: 'Wider heart-shaped nose pad for happy puppies.',
    tags: ['nose', 'dog', 'puppy', 'broad'],
    difficulty: 'easy',
    svg: `<path d="M 42 46 C 46 42, 54 42, 58 46 C 58 54, 42 54, 42 46 Z" fill="currentColor"/><circle cx="46" cy="48" r="1.5" fill="#FFFFFF"/><circle cx="54" cy="48" r="1.5" fill="#FFFFFF"/>`
  },
  {
    id: 'nose-fox',
    category: 'nose',
    name: 'Fox Snout Tip',
    altText: 'Petite pointed black nose tip.',
    description: 'Slender tapered black snout tip.',
    tags: ['nose', 'fox', 'snout', 'pointed'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="5" ry="3.5" fill="currentColor"/>`
  },
  {
    id: 'nose-snout',
    category: 'nose',
    name: 'Piggy Snout',
    altText: 'Oval snout disc with two round nostrils.',
    description: 'Playful pig or creature snout with two clear nostrils.',
    tags: ['nose', 'snout', 'pig', 'nostrils', 'creature'],
    difficulty: 'medium',
    svg: `<ellipse cx="50" cy="50" rx="14" ry="10" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="45" cy="50" r="2.5" fill="currentColor"/><circle cx="55" cy="50" r="2.5" fill="currentColor"/>`
  },
  {
    id: 'nose-heart',
    category: 'nose',
    name: 'Heart Nose',
    altText: 'Cute little heart-shaped nose.',
    description: 'Whimsical heart silhouette for fairy tale creatures.',
    tags: ['nose', 'heart', 'cute', 'love', 'fairy'],
    difficulty: 'easy',
    svg: `<path d="M 50 54 C 44 48, 42 44, 45 42 C 48 40, 50 43, 50 44 C 50 43, 52 40, 55 42 C 58 44, 56 48, 50 54 Z" fill="currentColor"/>`
  },
  {
    id: 'nose-tiny-curve',
    category: 'nose',
    name: 'Tiny Curve Nose',
    altText: 'Delicate single curved stroke.',
    description: 'A soft crescent line indicating the tip of the nose.',
    tags: ['nose', 'curve', 'crescent', 'minimal'],
    difficulty: 'easy',
    svg: `<path d="M 47 52 Q 50 55 53 52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'nose-none',
    category: 'nose',
    name: 'No Nose (Classic Style)',
    altText: 'Smooth clean upper lip with no nose drawn.',
    description: 'Classic chibi convention: eliminate the nose entirely for maximum cute simplicity.',
    tags: ['nose', 'none', 'anime', 'clean', 'simple'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="6" stroke="#CDCDC4" stroke-width="1.5" stroke-dasharray="2 2" fill="none"/>`
  },
  {
    id: 'nose-freckles',
    category: 'nose',
    name: 'Freckle Bridge',
    altText: 'Constellation of tiny freckle dots across nose bridge.',
    description: 'Sun-kissed freckle cluster across the cheeks and bridge.',
    tags: ['nose', 'freckles', 'cute', 'summer'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="48" r="2" fill="currentColor"/><circle cx="44" cy="51" r="1.5" fill="currentColor"/><circle cx="56" cy="51" r="1.5" fill="currentColor"/><circle cx="38" cy="53" r="1.5" fill="currentColor"/><circle cx="62" cy="53" r="1.5" fill="currentColor"/>`
  },
  {
    id: 'nose-unusual',
    category: 'nose',
    name: 'Star Sparkle Nose',
    altText: 'Little four-pointed sparkle in place of a nose.',
    description: 'Magical star emblem stamped at the center of the face.',
    tags: ['nose', 'unusual', 'star', 'magic', 'sparkle'],
    difficulty: 'easy',
    svg: `<polygon points="50,42 52,48 58,50 52,52 50,58 48,52 42,50 48,48" fill="currentColor"/>`
  },

  // ==================== MOUTHS (17) ====================
  {
    id: 'mouth-smile',
    category: 'mouth',
    name: 'Gentle Smile',
    altText: 'Sweet upward curved smile line.',
    description: 'The universally warm and welcoming curved grin.',
    tags: ['mouth', 'smile', 'happy', 'warm'],
    difficulty: 'easy',
    svg: `<path d="M 32 48 Q 50 62 68 48" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-open',
    category: 'mouth',
    name: 'Open Laughing Mouth',
    altText: 'Open singing D-shaped mouth with tongue line.',
    description: 'Joyful open laughing mouth singing or calling out.',
    tags: ['mouth', 'open', 'laugh', 'joy', 'sing'],
    difficulty: 'easy',
    svg: `<path d="M 32 46 Q 50 44 68 46 C 68 64, 32 64, 32 46 Z" stroke="currentColor" stroke-width="3" fill="#16171A"/><path d="M 40 58 Q 50 52 60 58" stroke="#FFFFFF" stroke-width="2" fill="none"/>`
  },
  {
    id: 'mouth-small-o',
    category: 'mouth',
    name: 'Small O Mouth',
    altText: 'Tiny surprised circular O mouth.',
    description: 'Charming round O shape expressing quiet astonishment.',
    tags: ['mouth', 'small-o', 'surprise', 'gasp', 'whistle'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="8" ry="10" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'mouth-large-o',
    category: 'mouth',
    name: 'Large O Mouth',
    altText: 'Dramatic wide open shouting oval mouth.',
    description: 'Wide shock or singing shout that commands attention.',
    tags: ['mouth', 'large-o', 'shout', 'sing', 'shock'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="52" rx="14" ry="18" stroke="currentColor" stroke-width="3.5" fill="#16171A"/>`
  },
  {
    id: 'mouth-frown',
    category: 'mouth',
    name: 'Frown',
    altText: 'Downward arching displeased frown.',
    description: 'Downward curve expressing sadness, disappointment, or petulance.',
    tags: ['mouth', 'frown', 'sad', 'upset'],
    difficulty: 'easy',
    svg: `<path d="M 32 56 Q 50 44 68 56" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-pout',
    category: 'mouth',
    name: 'Pout Lip',
    altText: 'Compressed small pout with lowered corner crease.',
    description: 'Adorable sulking pout with folded bottom lip.',
    tags: ['mouth', 'pout', 'sulking', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 40 50 Q 50 46 60 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/><line x1="50" y1="53" x2="50" y2="56" stroke="currentColor" stroke-width="2.5"/>`
  },
  {
    id: 'mouth-smirk',
    category: 'mouth',
    name: 'Cocky Smirk',
    altText: 'Asymmetrical one-sided cocky smirk.',
    description: 'One corner tugged upward in clever amusement.',
    tags: ['mouth', 'smirk', 'cocky', 'clever', 'confident'],
    difficulty: 'easy',
    svg: `<path d="M 34 54 Q 48 56 66 44" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-straight-line',
    category: 'mouth',
    name: 'Straight Line',
    altText: 'Flat stoic horizontal dash mouth.',
    description: 'Stoic, unreadable poker face dash.',
    tags: ['mouth', 'straight', 'stoic', 'calm'],
    difficulty: 'easy',
    svg: `<line x1="36" y1="50" x2="64" y2="50" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>`
  },
  {
    id: 'mouth-tongue',
    category: 'mouth',
    name: 'Tongue Blep',
    altText: 'Playful mouth with tongue poking out.',
    description: 'Cheeky teasing blep with tongue sticking out.',
    tags: ['mouth', 'tongue', 'blep', 'cheeky', 'playful'],
    difficulty: 'medium',
    svg: `<path d="M 34 46 Q 50 44 66 46" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M 44 47 C 44 58, 56 58, 56 47 Z" fill="currentColor"/>`
  },
  {
    id: 'mouth-fangs',
    category: 'mouth',
    name: 'Vampire Fangs',
    altText: 'Cute pointy vampire or demon fangs peeking out.',
    description: 'Little pointed canine teeth protruding from the upper lip.',
    tags: ['mouth', 'fangs', 'vampire', 'demon', 'cat'],
    difficulty: 'medium',
    svg: `<path d="M 32 46 Q 50 44 68 46" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><polygon points="40,46 44,46 42,54" fill="currentColor"/><polygon points="56,46 60,46 58,54" fill="currentColor"/>`
  },
  {
    id: 'mouth-grin',
    category: 'mouth',
    name: 'Toothy Grin',
    altText: 'Wide mischievous grin showing clenched teeth.',
    description: 'Wide beam showing clean white teeth grid.',
    tags: ['mouth', 'grin', 'teeth', 'mischief'],
    difficulty: 'medium',
    svg: `<path d="M 30 46 Q 50 42 70 46 C 68 62, 32 62, 30 46 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="32" y1="52" x2="68" y2="52" stroke="currentColor" stroke-width="1.5"/>`
  },
  {
    id: 'mouth-worried',
    category: 'mouth',
    name: 'Wobbly Worried Mouth',
    altText: 'Wavy nervous trembling mouth line.',
    description: 'Wobbly line indicating panic, anxiety, or nervousness.',
    tags: ['mouth', 'worried', 'wobbly', 'nervous', 'panic'],
    difficulty: 'easy',
    svg: `<path d="M 32 50 Q 40 44 48 52 Q 56 60 64 48" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-surprised',
    category: 'mouth',
    name: 'Gasping Mouth',
    altText: 'Vertical open bean shape gasp mouth.',
    description: 'Expressive jellybean shape mouth taken aback.',
    tags: ['mouth', 'surprised', 'gasp', 'bean'],
    difficulty: 'easy',
    svg: `<path d="M 44 42 C 40 48, 40 56, 46 62 C 54 62, 56 54, 54 44 C 52 40, 46 40, 44 42 Z" stroke="currentColor" stroke-width="3" fill="#16171A"/>`
  },
  {
    id: 'mouth-happy',
    category: 'mouth',
    name: 'Cat 3-Mouth (:3)',
    altText: 'Classic anime feline omega mouth curve.',
    description: 'The legendary :3 kitty mouth full of sweet mischief.',
    tags: ['mouth', 'happy', 'kitty', 'cat-mouth', 'omega', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 34 48 Q 42 56 50 48 Q 58 56 66 48" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-sad',
    category: 'mouth',
    name: 'Trembling Lip',
    altText: 'Small quivering lower lip holding back tears.',
    description: 'Heart-wrenching little tremor right before crying.',
    tags: ['mouth', 'sad', 'tremble', 'tears'],
    difficulty: 'easy',
    svg: `<path d="M 38 52 Q 44 48 50 52 Q 56 48 62 52" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-sleepy',
    category: 'mouth',
    name: 'Yawning Mouth',
    altText: 'Deep rounded yawn arch.',
    description: 'Big sleepy yawn ready for bedtime stories.',
    tags: ['mouth', 'sleepy', 'yawn', 'tired'],
    difficulty: 'easy',
    svg: `<path d="M 36 46 C 36 62, 64 62, 64 46 Z" stroke="currentColor" stroke-width="3" fill="#16171A"/>`
  },
  {
    id: 'mouth-unusual',
    category: 'mouth',
    name: 'Zigzag Monster Mouth',
    altText: 'Jagged saw-toothed monster maw.',
    description: 'Sharp monster zigzag grin full of chaotic energy.',
    tags: ['mouth', 'unusual', 'monster', 'zigzag', 'teeth'],
    difficulty: 'medium',
    svg: `<path d="M 28 50 L 36 44 L 44 54 L 52 44 L 60 54 L 68 44 L 72 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>`
  }
];

console.log(`Loaded ${parts.length} core parts.`);
fs.writeFileSync('scripts/parts.json', JSON.stringify(parts, null, 2));
