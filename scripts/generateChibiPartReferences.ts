import fs from 'fs';
import path from 'path';

// Output directories
const PUBLIC_DIR = path.resolve(process.cwd(), 'public/references/chibi');
const DATA_FILE = path.resolve(process.cwd(), 'src/data/chibiPartReferences.ts');

interface PartRaw {
  id: string;
  category: string;
  subDir: string;
  name: string;
  altText: string;
  description: string;
  tags: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  compatibleTypes?: string[];
  compatibleThemes?: string[];
  svg: string; // Inner SVG contents inside a 100x100 viewBox
}

// Generate the parts list
const parts: PartRaw[] = [
  // ================= HEADS =================
  {
    id: 'head-round',
    category: 'head',
    subDir: 'heads',
    name: 'Round Head',
    altText: 'A simple, classic spherical round chibi head outline.',
    description: 'The golden standard chibi head shape. Soft, youthful, and universally cute.',
    tags: ['head', 'round', 'classic', 'cute', 'beginner'],
    difficulty: 'easy',
    compatibleTypes: ['human', 'animal-like', 'fantasy', 'monster', 'robot', 'creature'],
    svg: `<circle cx="50" cy="50" r="38" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>
          <line x1="20" y1="56" x2="80" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-oval',
    category: 'head',
    subDir: 'heads',
    name: 'Oval Head',
    altText: 'An elongated oval chibi head outline with gentle chin curve.',
    description: 'Slightly taller proportions, great for slender or slightly older characters.',
    tags: ['head', 'oval', 'slender', 'tall'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="32" ry="40" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="50" y1="18" x2="50" y2="82" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>
          <line x1="24" y1="56" x2="76" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-square',
    category: 'head',
    subDir: 'heads',
    name: 'Square Head',
    altText: 'Chibi head with a rounded square jawline and sturdy cheeks.',
    description: 'Provides a sturdy, reliable, or robotic jawline feel.',
    tags: ['head', 'square', 'chubby', 'sturdy', 'robot'],
    difficulty: 'easy',
    compatibleTypes: ['robot', 'human', 'monster'],
    svg: `<rect x="18" y="16" width="64" height="68" rx="20" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>
          <line x1="22" y1="58" x2="78" y2="58" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-heart',
    category: 'head',
    subDir: 'heads',
    name: 'Heart Head',
    altText: 'Wide forehead tapering softly into a delicate rounded chin.',
    description: 'Tapers gracefully from wide cheeks down to a sweet, tapered chin.',
    tags: ['head', 'heart', 'delicate', 'fairy', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 22 40 C 22 22, 38 18, 50 28 C 62 18, 78 22, 78 40 C 78 62, 58 78, 50 82 C 42 78, 22 62, 22 40 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="50" y1="22" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-diamond',
    category: 'head',
    subDir: 'heads',
    name: 'Diamond Head',
    altText: 'Angular diamond chibi head with prominent cheek width.',
    description: 'Cheeks flare outward, tapering to a pointed crown and jaw.',
    tags: ['head', 'diamond', 'angular', 'fantasy'],
    difficulty: 'medium',
    svg: `<path d="M 50 16 L 82 48 L 50 84 L 18 48 Z" stroke="#16171A" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`
  },
  {
    id: 'head-triangle',
    category: 'head',
    subDir: 'heads',
    name: 'Triangle Head',
    altText: 'Inverted triangle head with a broad top and small chin.',
    description: 'Distinctive manga silhouette with expressive wide eye placement.',
    tags: ['head', 'triangle', 'manga', 'sharp'],
    difficulty: 'medium',
    svg: `<path d="M 20 26 C 30 20, 70 20, 80 26 C 82 45, 68 76, 50 84 C 32 76, 18 45, 20 26 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-long',
    category: 'head',
    subDir: 'heads',
    name: 'Long Head',
    altText: 'Vertically extended chibi head outline.',
    description: 'Great for lanky characters, wizards, or thoughtful personalities.',
    tags: ['head', 'long', 'slender', 'wizard'],
    difficulty: 'easy',
    svg: `<path d="M 26 26 C 26 16, 74 16, 74 26 L 74 68 C 74 80, 26 80, 26 68 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-wide',
    category: 'head',
    subDir: 'heads',
    name: 'Wide Head',
    altText: 'Horizontally compressed head with exaggerated baby-like cheeks.',
    description: 'Extra squishy cheeks that give maximum infant or creature cuteness.',
    tags: ['head', 'wide', 'squishy', 'cute', 'baby'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="42" ry="28" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-rectangle',
    category: 'head',
    subDir: 'heads',
    name: 'Rectangle Head',
    altText: 'Upright boxy rectangular head outline.',
    description: 'Perfect for mechanical constructs, stoic guards, and cardboard robots.',
    tags: ['head', 'rectangle', 'box', 'robot'],
    difficulty: 'easy',
    svg: `<rect x="22" y="16" width="56" height="70" rx="10" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-pear',
    category: 'head',
    subDir: 'heads',
    name: 'Pear Head',
    altText: 'Narrow forehead ballooning into heavy soft lower cheeks.',
    description: 'Heavy cheeks at the bottom create an endearing, chubby expression.',
    tags: ['head', 'pear', 'chubby', 'cheeks'],
    difficulty: 'medium',
    svg: `<path d="M 34 22 C 38 18, 62 18, 66 22 C 72 30, 84 56, 80 72 C 76 86, 24 86, 20 72 C 16 56, 28 30, 34 22 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-egg',
    category: 'head',
    subDir: 'heads',
    name: 'Egg Head',
    altText: 'Egg-shaped head outline broader at the bottom.',
    description: 'Organic oval with a slight natural taper upward.',
    tags: ['head', 'egg', 'smooth', 'organic'],
    difficulty: 'easy',
    svg: `<path d="M 50 16 C 68 16, 78 40, 78 60 C 78 78, 66 84, 50 84 C 34 84, 22 78, 22 60 C 22 40, 32 16, 50 16 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'head-fluffy',
    category: 'head',
    subDir: 'heads',
    name: 'Fluffy Head',
    altText: 'Head outline with tufts of animal or creature fur on both cheeks.',
    description: 'Built-in fur tufts ready for kittens, puppies, and mythical beasts.',
    tags: ['head', 'fluffy', 'animal', 'fur', 'creature'],
    difficulty: 'medium',
    svg: `<path d="M 32 20 C 44 14, 56 14, 68 20 C 78 28, 76 40, 84 46 L 76 52 L 86 60 L 72 68 C 64 82, 36 82, 28 68 L 14 60 L 24 52 L 16 46 C 24 40, 22 28, 32 20 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },

  // ================= HEAD ANGLES =================
  {
    id: 'head-angle-front',
    category: 'head-angle',
    subDir: 'head-angles',
    name: 'Front Facing',
    altText: 'Direct frontal view diagram with center line and eye horizon.',
    description: 'Symmetrical, direct, and straightforward for initial designs.',
    tags: ['angle', 'front', 'symmetrical', 'baseline'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="48" r="32" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="50" y1="18" x2="50" y2="78" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2"/>
          <line x1="22" y1="54" x2="78" y2="54" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2"/>
          <circle cx="40" cy="54" r="3" fill="#16171A"/>
          <circle cx="60" cy="54" r="3" fill="#16171A"/>
          <path d="M 47 64 Q 50 67 53 64" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-three-quarter-left',
    category: 'head-angle',
    subDir: 'head-angles',
    name: '3/4 Left Angle',
    altText: 'Head turned 45 degrees toward the left with foreshortened cheek.',
    description: 'The most dynamic and popular character illustration angle.',
    tags: ['angle', '3/4', 'left', 'dynamic'],
    difficulty: 'medium',
    svg: `<path d="M 28 32 C 30 18, 68 18, 76 32 C 82 46, 80 66, 68 76 C 54 84, 40 82, 32 72 C 26 66, 26 56, 30 52 C 26 44, 26 38, 28 32 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 44 20 Q 38 48 42 78" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <path d="M 26 52 Q 52 56 78 50" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <circle cx="34" cy="52" r="3" fill="#16171A"/>
          <circle cx="56" cy="50" r="3" fill="#16171A"/>`
  },
  {
    id: 'head-angle-three-quarter-right',
    category: 'head-angle',
    subDir: 'head-angles',
    name: '3/4 Right Angle',
    altText: 'Head turned 45 degrees toward the right.',
    description: 'Balanced perspective showing depth and facial curvature to the right.',
    tags: ['angle', '3/4', 'right', 'dynamic'],
    difficulty: 'medium',
    svg: `<path d="M 72 32 C 70 18, 32 18, 24 32 C 18 46, 20 66, 32 76 C 46 84, 60 82, 68 72 C 74 66, 74 56, 70 52 C 74 44, 74 38, 72 32 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 56 20 Q 62 48 58 78" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <path d="M 74 52 Q 48 56 22 50" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <circle cx="66" cy="52" r="3" fill="#16171A"/>
          <circle cx="44" cy="50" r="3" fill="#16171A"/>`
  },
  {
    id: 'head-angle-side',
    category: 'head-angle',
    subDir: 'head-angles',
    name: 'Profile / Side View',
    altText: 'Pure side profile silhouette with chibi nose and chin curve.',
    description: 'Essential for model sheets and turnaround consistency.',
    tags: ['angle', 'profile', 'side', 'turnaround'],
    difficulty: 'medium',
    svg: `<path d="M 54 18 C 30 18, 20 34, 20 50 C 20 68, 34 82, 54 82 C 60 82, 64 80, 68 76 L 62 70 C 60 70, 52 72, 46 72 C 34 72, 34 64, 38 58 L 44 58 C 42 56, 38 54, 38 50 C 38 42, 46 42, 46 42" stroke="#16171A" stroke-width="3" fill="none"/>
          <path d="M 54 18 C 76 18, 78 40, 78 52 C 78 70, 68 78, 62 82" stroke="#16171A" stroke-width="3" fill="none"/>
          <circle cx="42" cy="46" r="3" fill="#16171A"/>`
  },
  {
    id: 'head-angle-looking-up',
    category: 'head-angle',
    subDir: 'head-angles',
    name: 'Looking Up',
    altText: 'Chibi head tilted upward showing exposed jawline curve.',
    description: 'Conveys wonder, daydreaming, or looking up at a towering giant.',
    tags: ['angle', 'looking up', 'wonder', 'perspective'],
    difficulty: 'hard',
    svg: `<circle cx="50" cy="46" r="32" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 22 42 Q 50 34 78 42" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <path d="M 50 16 Q 50 48 50 78" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <ellipse cx="38" cy="38" rx="4" ry="5" fill="#16171A"/>
          <ellipse cx="62" cy="38" rx="4" ry="5" fill="#16171A"/>
          <path d="M 46 54 Q 50 56 54 54" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'head-angle-looking-down',
    category: 'head-angle',
    subDir: 'head-angles',
    name: 'Looking Down',
    altText: 'Chibi head tilted downward showing prominent top of skull.',
    description: 'Suggests shyness, reading a spellbook, or inspecting the ground.',
    tags: ['angle', 'looking down', 'shy', 'perspective'],
    difficulty: 'hard',
    svg: `<circle cx="50" cy="50" r="32" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 22 60 Q 50 68 78 60" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <path d="M 50 18 Q 50 48 50 82" stroke="#16171A" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <ellipse cx="38" cy="62" rx="4" ry="3" fill="#16171A"/>
          <ellipse cx="62" cy="62" rx="4" ry="3" fill="#16171A"/>
          <path d="M 47 70 Q 50 68 53 70" stroke="#16171A" stroke-width="2" fill="none"/>`
  },

  // ================= EARS =================
  {
    id: 'ear-human',
    category: 'ear',
    subDir: 'ears',
    name: 'Human Ear',
    altText: 'Standard rounded human ear line art.',
    description: 'Clean C-curve ear sitting level with the eyes.',
    tags: ['ear', 'human', 'standard', 'simple'],
    difficulty: 'easy',
    svg: `<path d="M 40 28 C 58 28, 64 38, 64 50 C 64 64, 52 74, 42 74 L 38 72" stroke="#16171A" stroke-width="3" fill="none"/>
          <path d="M 46 40 C 52 40, 54 46, 54 52 C 54 58, 48 62, 42 62" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'ear-pointed',
    category: 'ear',
    subDir: 'ears',
    name: 'Pointed Ear',
    altText: 'Sharp angled pointed ear for goblins or half-elves.',
    description: 'Subtly angled point extending outward.',
    tags: ['ear', 'pointed', 'fantasy', 'goblin'],
    difficulty: 'easy',
    svg: `<path d="M 36 60 C 36 46, 52 36, 74 24 C 68 44, 62 60, 42 70 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 42 54 L 60 36" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'ear-elf',
    category: 'ear',
    subDir: 'ears',
    name: 'Elf Ear',
    altText: 'Long elegant swept-back elven ear outline.',
    description: 'Graceful sweeping ear that projects sideways and upward.',
    tags: ['ear', 'elf', 'fantasy', 'graceful', 'magic'],
    difficulty: 'medium',
    svg: `<path d="M 28 64 C 32 48, 54 36, 84 18 C 76 42, 66 64, 38 72 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 38 58 Q 56 42 70 30" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'ear-cat',
    category: 'ear',
    subDir: 'ears',
    name: 'Cat Ear',
    altText: 'Triangular pointed feline ear with inner fluff.',
    description: 'Perky triangle ear placed high on the skull.',
    tags: ['ear', 'cat', 'animal', 'feline', 'furry'],
    difficulty: 'easy',
    svg: `<path d="M 24 74 L 46 22 L 76 66 C 60 72, 40 74, 24 74 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 38 64 L 48 38 L 64 62" stroke="#16171A" stroke-width="2" fill="none"/>
          <path d="M 34 68 L 44 58 L 48 68" stroke="#16171A" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'ear-fox',
    category: 'ear',
    subDir: 'ears',
    name: 'Fox Ear',
    altText: 'Tall flared fox ear with lush inner fur tufts.',
    description: 'Taller than cat ears with dramatic inner fur tufts.',
    tags: ['ear', 'fox', 'animal', 'fluffy', 'clever'],
    difficulty: 'medium',
    svg: `<path d="M 24 80 L 48 16 L 78 72 C 60 80, 40 82, 24 80 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 36 72 L 42 56 L 46 68 L 54 52 L 58 66" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'ear-wolf',
    category: 'ear',
    subDir: 'ears',
    name: 'Wolf Ear',
    altText: 'Stout broad triangular canine wolf ear.',
    description: 'Wider and stronger base for wild, noble characters.',
    tags: ['ear', 'wolf', 'canine', 'wild'],
    difficulty: 'medium',
    svg: `<path d="M 20 76 L 48 24 L 80 70 C 62 76, 38 78, 20 76 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 36 68 L 46 42 L 64 66" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'ear-rabbit',
    category: 'ear',
    subDir: 'ears',
    name: 'Rabbit Ear',
    altText: 'Long tall bunny ear with rounded top.',
    description: 'Iconic long ears that can stand tall or tilt curiously.',
    tags: ['ear', 'rabbit', 'bunny', 'animal', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 36 82 C 34 46, 32 24, 48 16 C 64 24, 62 46, 60 82 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 44 76 C 42 48, 42 32, 48 26 C 54 32, 54 48, 52 76" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'ear-floppy',
    category: 'ear',
    subDir: 'ears',
    name: 'Floppy Dog Ear',
    altText: 'Soft droopy dog ear folding downward.',
    description: 'Drapes gently downward beside the cheeks for puppy warmth.',
    tags: ['ear', 'floppy', 'dog', 'puppy', 'cozy'],
    difficulty: 'easy',
    svg: `<path d="M 32 24 C 50 18, 68 28, 68 46 C 68 66, 48 84, 38 84 C 28 84, 24 70, 26 52 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 36 32 C 48 30, 56 42, 56 56" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'ear-bear',
    category: 'ear',
    subDir: 'ears',
    name: 'Bear Ear',
    altText: 'Semi-circular round bear ear line art.',
    description: 'Cute, snug semi-circle sitting tight against the head.',
    tags: ['ear', 'bear', 'round', 'stout', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 24 70 C 24 38, 76 38, 76 70 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 34 66 C 34 48, 66 48, 66 66" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'ear-feathered',
    category: 'ear',
    subDir: 'ears',
    name: 'Feathered Ear',
    altText: 'Wing-like tiered feather ear outline.',
    description: 'Winged plumage ears for celestial, harpy, or griffin beings.',
    tags: ['ear', 'feathered', 'bird', 'angel', 'fantasy'],
    difficulty: 'hard',
    svg: `<path d="M 28 72 C 34 56, 52 42, 78 22 C 72 38, 78 44, 72 52 C 66 58, 70 64, 62 70 C 50 72, 38 72, 28 72 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="38" y1="62" x2="66" y2="40" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'ear-none',
    category: 'ear',
    subDir: 'ears',
    name: 'No Visible Ears',
    altText: 'Clean head profile indicating ears hidden by helmet, fur, or species.',
    description: 'For robots, slimes, helmet wearers, and smooth-headed beings.',
    tags: ['ear', 'none', 'hidden', 'robot', 'slime'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="32" stroke="#16171A" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
          <line x1="32" y1="32" x2="68" y2="68" stroke="#CDCDC4" stroke-width="2"/>`
  },

  // ================= EYES =================
  {
    id: 'eye-large',
    category: 'eye',
    subDir: 'eyes',
    name: 'Large Anime Eye',
    altText: 'Classic big manga eye with multi-point specular highlights.',
    description: 'Big, glossy, and emotionally luminous. The definitive chibi eye.',
    tags: ['eye', 'large', 'anime', 'sparkle', 'cute'],
    difficulty: 'easy',
    svg: `<path d="M 20 42 C 26 24, 64 24, 76 42" stroke="#16171A" stroke-width="4" stroke-linecap="round" fill="none"/>
          <ellipse cx="48" cy="54" rx="22" ry="24" stroke="#16171A" stroke-width="3" fill="#16171A"/>
          <circle cx="42" cy="46" r="7" fill="#FFFFFF"/>
          <circle cx="58" cy="62" r="4" fill="#FFFFFF"/>
          <path d="M 30 74 C 40 78, 56 78, 66 74" stroke="#16171A" stroke-width="2.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eye-medium',
    category: 'eye',
    subDir: 'eyes',
    name: 'Medium Eye',
    altText: 'Balanced rounded eye with crisp upper lash line.',
    description: 'Comfortable balance between cartoon simplicity and detail.',
    tags: ['eye', 'medium', 'balanced', 'expressive'],
    difficulty: 'easy',
    svg: `<path d="M 24 44 C 32 30, 60 30, 72 44" stroke="#16171A" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <ellipse cx="48" cy="54" rx="16" ry="18" fill="#16171A"/>
          <circle cx="44" cy="48" r="5" fill="#FFFFFF"/>
          <circle cx="54" cy="58" r="2.5" fill="#FFFFFF"/>
          <path d="M 34 68 C 42 71, 54 71, 62 68" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'eye-small',
    category: 'eye',
    subDir: 'eyes',
    name: 'Small Button Eye',
    altText: 'Compact oval eye with simple single reflection.',
    description: 'Understated and charming. Ideal for plush toy aesthetics.',
    tags: ['eye', 'small', 'button', 'plush', 'simple'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="12" ry="15" fill="#16171A"/>
          <circle cx="47" cy="45" r="4" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-tiny',
    category: 'eye',
    subDir: 'eyes',
    name: 'Tiny Dot Eye',
    altText: 'Minimalist circular dot eye line art.',
    description: 'Ultra-simplified dot eye popular in classic cozy comics.',
    tags: ['eye', 'tiny', 'dot', 'minimal', 'cozy'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="7" fill="#16171A"/>
          <circle cx="48" cy="48" r="2" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-round',
    category: 'eye',
    subDir: 'eyes',
    name: 'Round Inquisitive Eye',
    altText: 'Wide circular eye with prominent curious pupil.',
    description: 'Communicates wonder, innocence, and astonishment.',
    tags: ['eye', 'round', 'curious', 'innocent'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="22" stroke="#16171A" stroke-width="3.5" fill="#FFFFFF"/>
          <circle cx="50" cy="50" r="14" fill="#16171A"/>
          <circle cx="45" cy="45" r="5" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-almond',
    category: 'eye',
    subDir: 'eyes',
    name: 'Almond Eye',
    altText: 'Elegant tapered almond-shaped eye with swept lash.',
    description: 'Slightly elongated corners that lend poise and maturity.',
    tags: ['eye', 'almond', 'elegant', 'feline'],
    difficulty: 'medium',
    svg: `<path d="M 20 50 C 30 32, 64 32, 80 50 C 64 66, 30 66, 20 50 Z" stroke="#16171A" stroke-width="3.5" fill="#FFFFFF"/>
          <ellipse cx="50" cy="50" rx="14" ry="15" fill="#16171A"/>
          <circle cx="46" cy="45" r="4.5" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-sleepy',
    category: 'eye',
    subDir: 'eyes',
    name: 'Sleepy / Half-Closed Eye',
    altText: 'Heavy downward horizontal eyelid line art.',
    description: 'Relaxed, calm, unbothered, or cozy sleepy vibes.',
    tags: ['eye', 'sleepy', 'cozy', 'calm', 'relaxed'],
    difficulty: 'easy',
    svg: `<path d="M 22 46 C 34 38, 64 38, 78 46" stroke="#16171A" stroke-width="4" stroke-linecap="round" fill="none"/>
          <path d="M 32 46 C 32 58, 66 58, 66 46" stroke="#16171A" stroke-width="2" fill="#16171A"/>
          <circle cx="46" cy="49" r="3" fill="#FFFFFF"/>`
  },
  {
    id: 'eye-happy',
    category: 'eye',
    subDir: 'eyes',
    name: 'Happy Crescent Eye',
    altText: 'Closed laughing crescent arc eye line art.',
    description: 'Joyful closed-eye smile that radiates warm delight.',
    tags: ['eye', 'happy', 'smile', 'joy', 'closed'],
    difficulty: 'easy',
    svg: `<path d="M 24 54 C 34 36, 66 36, 76 54" stroke="#16171A" stroke-width="4" stroke-linecap="round" fill="none"/>
          <path d="M 76 54 L 82 52" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>`
  },
  {
    id: 'eye-starry',
    category: 'eye',
    subDir: 'eyes',
    name: 'Starry Eye',
    altText: 'Eye featuring a four-point star shaped sparkling pupil.',
    description: 'For moments of starry-eyed awe and magical fascination.',
    tags: ['eye', 'starry', 'sparkle', 'magic', 'awe'],
    difficulty: 'medium',
    svg: `<circle cx="50" cy="50" r="24" stroke="#16171A" stroke-width="3.5" fill="#16171A"/>
          <path d="M 50 34 Q 50 50 64 50 Q 50 50 50 66 Q 50 50 36 50 Q 50 50 50 34 Z" fill="#FFFFFF"/>`
  },

  // ================= EYEBROWS =================
  {
    id: 'eyebrow-neutral',
    category: 'eyebrow',
    subDir: 'eyebrows',
    name: 'Neutral Eyebrow',
    altText: 'Gentle curved neutral eyebrow line.',
    description: 'Calm natural resting eyebrow.',
    tags: ['eyebrow', 'neutral', 'calm'],
    difficulty: 'easy',
    svg: `<path d="M 24 52 Q 50 42 76 50" stroke="#16171A" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-raised',
    category: 'eyebrow',
    subDir: 'eyebrows',
    name: 'Raised Eyebrow',
    altText: 'High arched eyebrow indicating surprise or intrigue.',
    description: 'Lifted high with an inquisitive curve.',
    tags: ['eyebrow', 'raised', 'curious', 'surprised'],
    difficulty: 'easy',
    svg: `<path d="M 26 56 Q 52 32 76 44" stroke="#16171A" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-angled',
    category: 'eyebrow',
    subDir: 'eyebrows',
    name: 'Determined / Angled Eyebrow',
    altText: 'Sharp inward sloping eyebrow line.',
    description: 'Gives fierce determination, focus, or playful anger.',
    tags: ['eyebrow', 'angled', 'determined', 'fierce'],
    difficulty: 'easy',
    svg: `<path d="M 24 40 L 76 58" stroke="#16171A" stroke-width="4" stroke-linecap="round"/>`
  },
  {
    id: 'eyebrow-worried',
    category: 'eyebrow',
    subDir: 'eyebrows',
    name: 'Worried Eyebrow',
    altText: 'Inward upward sloping gentle eyebrow line.',
    description: 'Inner corner lifted high showing worry or sympathetic concern.',
    tags: ['eyebrow', 'worried', 'concerned', 'soft'],
    difficulty: 'easy',
    svg: `<path d="M 26 56 Q 48 46 76 38" stroke="#16171A" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'eyebrow-dramatic',
    category: 'eyebrow',
    subDir: 'eyebrows',
    name: 'Dramatic Bold Eyebrow',
    altText: 'Thick stylized anime eyebrow shape.',
    description: 'Thick taper for heroic courage or expressive comedy.',
    tags: ['eyebrow', 'dramatic', 'thick', 'heroic'],
    difficulty: 'medium',
    svg: `<path d="M 22 52 Q 52 38 78 48 L 76 54 Q 52 46 22 54 Z" fill="#16171A"/>`
  },

  // ================= NOSES =================
  {
    id: 'nose-dot',
    category: 'nose',
    subDir: 'noses',
    name: 'Dot Nose',
    altText: 'Single tiny centered dot nose.',
    description: 'The simplest, cleanest chibi nose placement.',
    tags: ['nose', 'dot', 'minimal', 'classic'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="3.5" fill="#16171A"/>`
  },
  {
    id: 'nose-tiny-triangle',
    category: 'nose',
    subDir: 'noses',
    name: 'Tiny Triangle Nose',
    altText: 'Small downward pointing triangle nose.',
    description: 'Delicate geometric nose common in modern illustrations.',
    tags: ['nose', 'triangle', 'geometric'],
    difficulty: 'easy',
    svg: `<polygon points="46,47 54,47 50,53" fill="#16171A"/>`
  },
  {
    id: 'nose-line',
    category: 'nose',
    subDir: 'noses',
    name: 'Vertical Line Nose',
    altText: 'Short vertical stroke nose.',
    description: 'A quiet vertical tick marking the nose bridge.',
    tags: ['nose', 'line', 'simple'],
    difficulty: 'easy',
    svg: `<line x1="50" y1="44" x2="50" y2="54" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>`
  },
  {
    id: 'nose-button',
    category: 'nose',
    subDir: 'noses',
    name: 'Button Nose',
    altText: 'Small hollow circle button nose.',
    description: 'Cute hollow circle evoking a button or plush toy nose.',
    tags: ['nose', 'button', 'round', 'cute'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="4.5" stroke="#16171A" stroke-width="2" fill="#FFFFFF"/>`
  },
  {
    id: 'nose-animal',
    category: 'nose',
    subDir: 'noses',
    name: 'Animal / Cat Nose',
    altText: 'Y-shaped feline nose and philtrum outline.',
    description: 'Heart/triangle nose connecting down to small lip crease.',
    tags: ['nose', 'animal', 'cat', 'feline'],
    difficulty: 'easy',
    svg: `<path d="M 44 46 Q 50 43 56 46 Q 53 52 50 54 Q 47 52 44 46 Z" fill="#16171A"/>
          <line x1="50" y1="54" x2="50" y2="60" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'nose-snout',
    category: 'nose',
    subDir: 'noses',
    name: 'Puppy Snout Nose',
    altText: 'Oval nose pad with two small nostril markings.',
    description: 'Wider soft snout for bears, dogs, and cozy critters.',
    tags: ['nose', 'snout', 'dog', 'bear'],
    difficulty: 'medium',
    svg: `<ellipse cx="50" cy="48" rx="8" ry="5" fill="#16171A"/>
          <line x1="50" y1="53" x2="50" y2="60" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'nose-none',
    category: 'nose',
    subDir: 'noses',
    name: 'No Nose',
    altText: 'Empty diagram indicating omitting the nose entirely.',
    description: 'Classic pure anime minimalism where eyes and mouth do all the talking.',
    tags: ['nose', 'none', 'minimalist'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="50" r="20" stroke="#CDCDC4" stroke-width="1.5" stroke-dasharray="3 3" fill="none"/>`
  },

  // ================= MOUTHS =================
  {
    id: 'mouth-smile',
    category: 'mouth',
    subDir: 'mouths',
    name: 'Gentle Smile',
    altText: 'Simple uplifting curved line mouth.',
    description: 'Sweet, contented smile for everyday happiness.',
    tags: ['mouth', 'smile', 'happy', 'gentle'],
    difficulty: 'easy',
    svg: `<path d="M 32 48 Q 50 62 68 48" stroke="#16171A" stroke-width="3" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-open',
    category: 'mouth',
    subDir: 'mouths',
    name: 'Open Laughing Mouth',
    altText: 'Wide open curved mouth with visible tongue.',
    description: 'Energetic smile bursting with excitement.',
    tags: ['mouth', 'open', 'laugh', 'excited'],
    difficulty: 'easy',
    svg: `<path d="M 30 46 Q 50 44 70 46 Q 50 74 30 46 Z" stroke="#16171A" stroke-width="3" fill="#16171A"/>
          <path d="M 40 58 Q 50 50 60 58" fill="#FFFFFF"/>`
  },
  {
    id: 'mouth-o',
    category: 'mouth',
    subDir: 'mouths',
    name: 'Surprised O-Mouth',
    altText: 'Small vertical oval open mouth.',
    description: 'Charming round O for singing, surprise, or tasting sweets.',
    tags: ['mouth', 'o', 'surprise', 'cute'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="52" rx="9" ry="13" stroke="#16171A" stroke-width="3" fill="#16171A"/>`
  },
  {
    id: 'mouth-frown',
    category: 'mouth',
    subDir: 'mouths',
    name: 'Subtle Pout / Frown',
    altText: 'Gentle downward curved mouth line.',
    description: 'Expresses mild sadness, fatigue, or playful stubbornness.',
    tags: ['mouth', 'frown', 'pout', 'sad'],
    difficulty: 'easy',
    svg: `<path d="M 34 54 Q 50 44 66 54" stroke="#16171A" stroke-width="3" stroke-linecap="round" fill="none"/>`
  },
  {
    id: 'mouth-fangs',
    category: 'mouth',
    subDir: 'mouths',
    name: 'Fang Smile',
    altText: 'Smile featuring a mischievous corner canine fang.',
    description: 'Signature anime fang for cheeky, vampire, or feline personalities.',
    tags: ['mouth', 'fangs', 'cheeky', 'cat', 'vampire'],
    difficulty: 'medium',
    svg: `<path d="M 32 48 Q 50 60 68 48" stroke="#16171A" stroke-width="3" fill="none"/>
          <polygon points="56,51 62,51 59,57" fill="#16171A"/>`
  },
  {
    id: 'mouth-unusual',
    category: 'mouth',
    subDir: 'mouths',
    name: 'Wavy / Cat Mouth (:3)',
    altText: 'W-shaped feline mouth curve.',
    description: 'The iconic :3 kitty mouth for playful tricksters.',
    tags: ['mouth', 'wavy', 'cat', 'playful'],
    difficulty: 'easy',
    svg: `<path d="M 30 50 Q 40 58 50 50 Q 60 58 70 50" stroke="#16171A" stroke-width="3" stroke-linecap="round" fill="none"/>`
  },

  // ================= HAIR =================
  {
    id: 'hair-straight',
    category: 'hair',
    subDir: 'hair',
    name: 'Straight Hair',
    altText: 'Smooth clean falling hair locks framing the face.',
    description: 'Silky, neat straight hair falling past the shoulders.',
    tags: ['hair', 'straight', 'neat', 'classic'],
    difficulty: 'easy',
    svg: `<path d="M 22 72 L 22 42 C 22 20, 78 20, 78 42 L 78 72 C 72 70, 68 56, 68 44 C 54 36, 46 36, 32 44 C 32 56, 28 70, 22 72 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 34 32 L 46 44 L 54 32 L 64 42" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'hair-wavy',
    category: 'hair',
    subDir: 'hair',
    name: 'Wavy Hair',
    altText: 'Soft undulating wavy hair locks.',
    description: 'Flowing romantic waves that frame the cheeks naturally.',
    tags: ['hair', 'wavy', 'flowing', 'soft'],
    difficulty: 'medium',
    svg: `<path d="M 22 72 Q 16 56 24 44 C 24 22, 76 22, 76 44 Q 84 56 78 72 Q 72 60 70 48 Q 50 40 30 48 Q 28 60 22 72 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-curly',
    category: 'hair',
    subDir: 'hair',
    name: 'Curly Hair',
    altText: 'Rounded bouncy curls creating an energetic silhouette.',
    description: 'Springy, vibrant curls with lively volume.',
    tags: ['hair', 'curly', 'bouncy', 'volume'],
    difficulty: 'medium',
    svg: `<path d="M 24 64 C 18 54, 20 40, 28 32 C 32 20, 50 18, 60 22 C 72 18, 82 28, 80 40 C 86 52, 80 66, 72 72 C 68 58, 66 48, 54 44 C 44 48, 36 54, 24 64 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-spiky',
    category: 'hair',
    subDir: 'hair',
    name: 'Spiky Hair',
    altText: 'Dynamic sharp spiky anime hair tufts.',
    description: 'High-energy spikes for shonen heroes and adventurous souls.',
    tags: ['hair', 'spiky', 'shonen', 'adventure'],
    difficulty: 'medium',
    svg: `<path d="M 18 64 L 22 46 L 14 42 L 30 26 L 36 14 L 50 24 L 64 14 L 70 26 L 86 42 L 78 46 L 82 64 L 72 54 L 66 42 L 50 48 L 34 42 L 28 54 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-bun',
    category: 'hair',
    subDir: 'hair',
    name: 'Top Bun',
    altText: 'Neat round hair bun sitting on crown of head.',
    description: 'Cozy topknot or polished ballerina bun.',
    tags: ['hair', 'bun', 'updo', 'cozy'],
    difficulty: 'easy',
    svg: `<circle cx="50" cy="22" r="14" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 26 62 C 26 36, 74 36, 74 62 C 64 56, 58 48, 50 48 C 42 48, 36 56, 26 62 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-braids',
    category: 'hair',
    subDir: 'hair',
    name: 'Twin Braids',
    altText: 'Two woven braided pigtails resting on shoulders.',
    description: 'Charming interlocking braids for storybook adventurers.',
    tags: ['hair', 'braids', 'pigtails', 'storybook'],
    difficulty: 'medium',
    svg: `<path d="M 30 46 C 30 24, 70 24, 70 46 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 24 50 Q 20 62 26 74 Q 22 80 24 86" stroke="#16171A" stroke-width="3" fill="none"/>
          <path d="M 76 50 Q 80 62 74 74 Q 78 80 76 86" stroke="#16171A" stroke-width="3" fill="none"/>`
  },

  // ================= BODY SHAPES =================
  {
    id: 'body-standard',
    category: 'body',
    subDir: 'body',
    name: 'Standard Chibi Body',
    altText: 'Classic 2-head-tall proportional chibi torso and limbs without clothing.',
    description: 'The golden baseline: torso is roughly equal in height to the head.',
    tags: ['body', 'standard', 'classic', 'balanced'],
    difficulty: 'easy',
    svg: `<path d="M 40 32 L 60 32 L 64 62 L 36 62 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="42" y1="62" x2="42" y2="84" stroke="#16171A" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="58" y1="62" x2="58" y2="84" stroke="#16171A" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="38" y1="36" x2="26" y2="56" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="62" y1="36" x2="74" y2="56" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>`
  },
  {
    id: 'body-chubby',
    category: 'body',
    subDir: 'body',
    name: 'Chubby Round Body',
    altText: 'Plump rounded belly and short limbs chibi body construction.',
    description: 'Soft rounded belly silhouette with short huggable limbs.',
    tags: ['body', 'chubby', 'round', 'cute', 'plump'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="50" rx="22" ry="20" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="40" y1="66" x2="40" y2="82" stroke="#16171A" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="60" y1="66" x2="60" y2="82" stroke="#16171A" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="30" y1="44" x2="20" y2="58" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="70" y1="44" x2="80" y2="58" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>`
  },
  {
    id: 'body-slim',
    category: 'body',
    subDir: 'body',
    name: 'Slim Agile Body',
    altText: 'Narrow torso and slender limbs chibi body.',
    description: 'Trim, graceful silhouette suited for dancers, thieves, and elves.',
    tags: ['body', 'slim', 'slender', 'agile'],
    difficulty: 'easy',
    svg: `<path d="M 44 32 L 56 32 L 54 62 L 46 62 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="46" y1="62" x2="44" y2="86" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="54" y1="62" x2="56" y2="86" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="42" y1="36" x2="30" y2="58" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="58" y1="36" x2="70" y2="58" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>`
  },
  {
    id: 'body-tall',
    category: 'body',
    subDir: 'body',
    name: 'Tall & Slender Body',
    altText: 'Elongated limbs with taller 3-head-tall chibi proportions.',
    description: 'Longer legs and torso for stylish or mature characters.',
    tags: ['body', 'tall', 'slender', 'mature'],
    difficulty: 'medium',
    svg: `<path d="M 43 28 L 57 28 L 55 56 L 45 56 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="46" y1="56" x2="44" y2="88" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="54" y1="56" x2="56" y2="88" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="42" y1="32" x2="28" y2="60" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="58" y1="32" x2="72" y2="60" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>`
  },
  {
    id: 'body-tiny',
    category: 'body',
    subDir: 'body',
    name: 'Tiny Pea Body',
    altText: 'Microscopic torso with stubby limbs beneath a huge head.',
    description: 'Extreme chibi ratio: 80% head, 20% tiny body.',
    tags: ['body', 'tiny', 'micro', 'extreme-chibi'],
    difficulty: 'easy',
    svg: `<ellipse cx="50" cy="54" rx="14" ry="12" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="44" y1="64" x2="42" y2="76" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="56" y1="64" x2="58" y2="76" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="38" y1="50" x2="30" y2="60" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="62" y1="50" x2="70" y2="60" stroke="#16171A" stroke-width="2.5" stroke-linecap="round"/>`
  },
  {
    id: 'body-muscular',
    category: 'body',
    subDir: 'body',
    name: 'Stout Muscular Body',
    altText: 'Broad shoulders and sturdy chest chibi body shape.',
    description: 'Wide heroic chest and thick limbs for warriors and blacksmiths.',
    tags: ['body', 'muscular', 'stout', 'warrior'],
    difficulty: 'medium',
    svg: `<path d="M 34 30 L 66 30 L 60 58 L 40 58 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="42" y1="58" x2="40" y2="82" stroke="#16171A" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="58" y1="58" x2="60" y2="82" stroke="#16171A" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="32" y1="34" x2="20" y2="56" stroke="#16171A" stroke-width="4" stroke-linecap="round"/>
          <line x1="68" y1="34" x2="80" y2="56" stroke="#16171A" stroke-width="4" stroke-linecap="round"/>`
  },

  // ================= ARMS & HANDS =================
  {
    id: 'hand-open',
    category: 'hand',
    subDir: 'hands',
    name: 'Open Hand',
    altText: 'Open relaxed chibi palm with separated fingers.',
    description: 'Clear friendly palm gesturing outward.',
    tags: ['hand', 'open', 'palm', 'friendly'],
    difficulty: 'easy',
    svg: `<path d="M 36 72 C 34 58, 30 46, 36 38 C 40 38, 42 46, 44 48 C 46 36, 52 34, 54 44 C 56 36, 62 36, 64 46 C 66 40, 72 40, 72 52 C 72 64, 62 76, 50 78 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hand-fist',
    category: 'hand',
    subDir: 'hands',
    name: 'Clenched Fist',
    altText: 'Tight rounded cartoon fist line art.',
    description: 'Curled fingers ready for action, victory, or determination.',
    tags: ['hand', 'fist', 'power', 'action'],
    difficulty: 'easy',
    svg: `<path d="M 32 68 C 28 54, 30 38, 46 34 C 64 34, 68 44, 68 56 C 68 68, 54 74, 38 72 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 40 44 L 56 44 M 40 52 L 60 52 M 42 60 L 58 60" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'hand-peace',
    category: 'hand',
    subDir: 'hands',
    name: 'Peace Sign / V-Sign',
    altText: 'Two fingers raised in a classic victory peace sign.',
    description: 'The quintessential anime photo pose.',
    tags: ['hand', 'peace', 'victory', 'pose', 'anime'],
    difficulty: 'medium',
    svg: `<path d="M 36 76 C 36 60, 36 50, 44 48 L 44 24 C 48 24, 52 28, 52 38 L 52 46 L 56 32 C 60 32, 64 36, 64 44 L 62 58 C 66 60, 68 70, 56 78 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hand-paw',
    category: 'hand',
    subDir: 'hands',
    name: 'Animal Paw',
    altText: 'Padded animal paw with soft rounded pads.',
    description: 'Chubby animal paw with toe pads for furry companions.',
    tags: ['hand', 'paw', 'animal', 'cat', 'dog'],
    difficulty: 'easy',
    svg: `<path d="M 34 74 C 30 58, 28 44, 38 38 C 44 38, 44 46, 50 46 C 56 46, 56 38, 62 38 C 72 44, 70 58, 66 74 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <circle cx="50" cy="58" r="6" fill="#16171A"/>
          <circle cx="38" cy="46" r="3" fill="#16171A"/>
          <circle cx="50" cy="40" r="3" fill="#16171A"/>
          <circle cx="62" cy="46" r="3" fill="#16171A"/>`
  },
  {
    id: 'hand-mitten',
    category: 'hand',
    subDir: 'hands',
    name: 'Simple Mitten Hand',
    altText: 'Classic cartoon mitten hand with thumb and paddle palm.',
    description: 'Simplest hand to draw: one thumb bump and a rounded paddle.',
    tags: ['hand', 'mitten', 'simple', 'beginner'],
    difficulty: 'easy',
    svg: `<path d="M 36 74 C 32 60, 32 46, 42 38 C 54 34, 68 40, 66 58 C 64 68, 58 74, 48 76 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 38 52 C 30 52, 26 58, 30 64 C 34 68, 40 66, 42 60" stroke="#16171A" stroke-width="2.5" fill="#FFFFFF"/>`
  },

  // ================= FEET & SHOES =================
  {
    id: 'foot-bare',
    category: 'foot',
    subDir: 'feet',
    name: 'Barefoot',
    altText: 'Simple rounded barefoot chibi sole.',
    description: 'Natural round chibi foot with tiny suggestion of toes.',
    tags: ['foot', 'barefoot', 'simple', 'natural'],
    difficulty: 'easy',
    svg: `<path d="M 36 30 L 44 60 C 44 68, 68 70, 72 64 C 74 58, 66 54, 54 52 L 48 30 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'foot-sneakers',
    category: 'foot',
    subDir: 'feet',
    name: 'Chunky Sneaker',
    altText: 'Casual sneaker shoe with thick sole outline.',
    description: 'Modern everyday street shoe with rubber toe cap.',
    tags: ['foot', 'sneaker', 'shoe', 'modern', 'street'],
    difficulty: 'medium',
    svg: `<path d="M 38 28 L 44 54 L 74 56 C 78 56, 80 66, 76 72 L 32 72 C 28 66, 28 52, 30 40 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="30" y1="64" x2="76" y2="64" stroke="#16171A" stroke-width="2"/>
          <line x1="48" y1="46" x2="56" y2="46" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'foot-boot',
    category: 'foot',
    subDir: 'feet',
    name: 'Adventure Boot',
    altText: 'Sturdy high-top boot with cuff.',
    description: 'Classic fantasy explorer or winter warm boot.',
    tags: ['foot', 'boot', 'adventure', 'fantasy'],
    difficulty: 'easy',
    svg: `<path d="M 36 22 L 54 22 L 52 50 L 76 58 C 80 64, 76 74, 68 74 L 32 74 L 32 30 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="32" y1="68" x2="72" y2="68" stroke="#16171A" stroke-width="2"/>
          <rect x="34" y="20" width="22" height="6" rx="2" stroke="#16171A" stroke-width="2" fill="#FFFFFF"/>`
  },
  {
    id: 'foot-hoof',
    category: 'foot',
    subDir: 'feet',
    name: 'Cloven Hoof',
    altText: 'Deer or goat cloven hoof outline.',
    description: 'For centaurs, satyrs, deer, and horned fantasy folk.',
    tags: ['foot', 'hoof', 'animal', 'fantasy', 'deer'],
    difficulty: 'easy',
    svg: `<path d="M 38 24 L 42 56 L 36 68 L 48 72 L 52 62 L 56 72 L 68 68 L 62 56 L 58 24 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'foot-claw',
    category: 'foot',
    subDir: 'feet',
    name: 'Monster / Dragon Claws',
    altText: 'Three-toed sharp talon claw foot.',
    description: 'Sharp talon foot for dragons, harpies, and beastly creatures.',
    tags: ['foot', 'claw', 'dragon', 'monster'],
    difficulty: 'medium',
    svg: `<path d="M 40 28 L 44 54 L 30 68 L 42 66 L 50 74 L 58 66 L 70 68 L 56 54 L 56 28 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },

  // ================= TAILS =================
  {
    id: 'tail-cat',
    category: 'tail',
    subDir: 'tails',
    name: 'Cat Tail',
    altText: 'Graceful curling feline tail.',
    description: 'Long and sinuous tail that curls upward at the tip.',
    tags: ['tail', 'cat', 'feline', 'curled'],
    difficulty: 'easy',
    svg: `<path d="M 24 72 C 36 72, 54 66, 60 50 C 66 34, 76 24, 82 30 C 86 36, 78 46, 70 56 C 62 68, 44 80, 24 80 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'tail-fox',
    category: 'tail',
    subDir: 'tails',
    name: 'Fluffy Fox Tail',
    altText: 'Large voluminous brush tail with jagged tip line.',
    description: 'Big luxurious brush tail with iconic zig-zag tip boundary.',
    tags: ['tail', 'fox', 'fluffy', 'voluminous'],
    difficulty: 'medium',
    svg: `<path d="M 22 74 C 36 50, 48 24, 74 18 C 84 28, 86 52, 70 68 C 54 84, 34 82, 22 74 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 64 34 L 60 44 L 70 46 L 62 56" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'tail-dragon',
    category: 'tail',
    subDir: 'tails',
    name: 'Dragon Tail',
    altText: 'Tapered reptilian tail with dorsal dorsal spikes.',
    description: 'Powerful scaled tail with row of decorative triangular spikes.',
    tags: ['tail', 'dragon', 'reptile', 'spikes'],
    difficulty: 'medium',
    svg: `<path d="M 20 74 C 40 76, 68 68, 78 42 C 82 30, 84 22, 82 22 C 78 22, 64 42, 52 56 C 40 68, 30 70, 20 74 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <polygon points="56,42 60,34 64,42" fill="#16171A"/>
          <polygon points="68,32 72,24 76,32" fill="#16171A"/>`
  },
  {
    id: 'tail-bunny',
    category: 'tail',
    subDir: 'tails',
    name: 'Bunny Puff Tail',
    altText: 'Small spherical pom-pom bunny tail.',
    description: 'Adorable puffball tail perched right on the lower back.',
    tags: ['tail', 'bunny', 'puff', 'small'],
    difficulty: 'easy',
    svg: `<circle cx="48" cy="50" r="18" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 38 42 C 44 38, 54 44, 52 50 C 58 48, 62 56, 56 60" stroke="#16171A" stroke-width="2" fill="none"/>`
  },

  // ================= WINGS =================
  {
    id: 'wing-angel',
    category: 'wing',
    subDir: 'wings',
    name: 'Angel Feathered Wing',
    altText: 'Curving avian feathered angel wing.',
    description: 'Graceful arched wing layered with soft feathered rows.',
    tags: ['wing', 'angel', 'feathers', 'holy', 'celestial'],
    difficulty: 'medium',
    svg: `<path d="M 20 66 C 24 40, 46 22, 76 18 C 76 34, 70 44, 76 52 C 68 58, 66 66, 58 70 C 48 74, 32 72, 20 66 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 40 46 C 52 38, 66 34, 70 28" stroke="#16171A" stroke-width="2" fill="none"/>
          <path d="M 36 56 C 48 52, 60 48, 66 44" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'wing-bat',
    category: 'wing',
    subDir: 'wings',
    name: 'Bat / Demon Wing',
    altText: 'Membranous bat wing with ribbed finger bones.',
    description: 'Leathery scalloped wing for vampires, demons, and bats.',
    tags: ['wing', 'bat', 'demon', 'spooky'],
    difficulty: 'medium',
    svg: `<path d="M 20 62 L 38 28 L 58 36 L 78 24 C 74 42, 68 46, 68 62 C 58 54, 52 56, 46 68 C 38 58, 30 60, 20 62 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="38" y1="28" x2="46" y2="68" stroke="#16171A" stroke-width="2"/>
          <line x1="58" y1="36" x2="68" y2="62" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'wing-fairy',
    category: 'wing',
    subDir: 'wings',
    name: 'Fairy Insect Wing',
    altText: 'Translucent butterfly-style double lobe fairy wing.',
    description: 'Delicate gossamer wings with organic cellular curves.',
    tags: ['wing', 'fairy', 'insect', 'butterfly', 'magic'],
    difficulty: 'easy',
    svg: `<path d="M 24 54 C 20 32, 54 18, 76 22 C 78 44, 54 58, 24 54 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 24 56 C 24 68, 52 78, 68 70 C 68 56, 44 54, 24 56 Z" stroke="#16171A" stroke-width="2.5" fill="#FFFFFF"/>`
  },

  // ================= HORNS & ANTLERS =================
  {
    id: 'horn-small',
    category: 'horn',
    subDir: 'horns',
    name: 'Small Horns',
    altText: 'Pair of compact curved horns.',
    description: 'Cute, subtle horns sitting neatly on the forehead.',
    tags: ['horn', 'small', 'cute', 'demon'],
    difficulty: 'easy',
    svg: `<path d="M 26 68 C 22 50, 32 32, 40 24 C 42 36, 40 54, 40 68 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 74 68 C 78 50, 68 32, 60 24 C 58 36, 60 54, 60 68 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'horn-antlers',
    category: 'antler',
    subDir: 'horns',
    name: 'Branching Antlers',
    altText: 'Stately branching deer antlers line art.',
    description: 'Majestic forest branches reaching proudly outward.',
    tags: ['antler', 'deer', 'nature', 'forest', 'majestic'],
    difficulty: 'hard',
    svg: `<path d="M 32 76 L 36 46 L 24 38 M 36 46 L 44 32 L 36 22 M 44 32 L 50 18" stroke="#16171A" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <path d="M 68 76 L 64 46 L 76 38 M 64 46 L 56 32 L 64 22 M 56 32 L 50 18" stroke="#16171A" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
  },

  // ================= CLOTHING =================
  {
    id: 'cloth-hoodie',
    category: 'clothing',
    subDir: 'clothing',
    name: 'Cozy Hoodie',
    altText: 'Slouchy hooded sweatshirt with front kangaroo pocket.',
    description: 'Oversized cozy streetwear staple with slouchy sleeve cuffs.',
    tags: ['clothing', 'hoodie', 'cozy', 'streetwear'],
    difficulty: 'easy',
    svg: `<path d="M 34 26 L 66 26 L 78 44 L 70 50 L 66 42 L 66 74 L 34 74 L 34 42 L 30 50 L 22 44 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 40 60 L 60 60 L 56 70 L 44 70 Z" stroke="#16171A" stroke-width="2" fill="none"/>
          <path d="M 42 26 Q 50 36 58 26" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'cloth-tshirt',
    category: 'clothing',
    subDir: 'clothing',
    name: 'Classic T-Shirt',
    altText: 'Simple short sleeve casual crewneck t-shirt.',
    description: 'Simple everyday shirt ready for custom patterns or logos.',
    tags: ['clothing', 't-shirt', 'casual', 'everyday'],
    difficulty: 'easy',
    svg: `<path d="M 36 28 L 64 28 L 76 42 L 68 48 L 62 42 L 62 72 L 38 72 L 38 42 L 32 48 L 24 42 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 42 28 Q 50 34 58 28" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'cloth-robe',
    category: 'clothing',
    subDir: 'clothing',
    name: 'Wizard Robe / Kimono',
    altText: 'Flowing crossed-collar robe with wide hanging sleeves.',
    description: 'Flowing ceremonial or magical robes with deep hanging sleeves.',
    tags: ['clothing', 'robe', 'wizard', 'kimono', 'magic'],
    difficulty: 'medium',
    svg: `<path d="M 36 24 L 64 24 L 84 56 L 72 62 L 66 48 L 68 84 L 32 84 L 34 48 L 28 62 L 16 56 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="38" y1="24" x2="56" y2="52" stroke="#16171A" stroke-width="2"/>
          <line x1="62" y1="24" x2="44" y2="52" stroke="#16171A" stroke-width="2"/>
          <line x1="32" y1="52" x2="68" y2="52" stroke="#16171A" stroke-width="2.5"/>`
  },
  {
    id: 'cloth-dress',
    category: 'clothing',
    subDir: 'clothing',
    name: 'A-Line Dress',
    altText: 'Flared skirt A-line sleeveless dress line art.',
    description: 'Classic flared dress that spins out softly at the hem.',
    tags: ['clothing', 'dress', 'cute', 'flared'],
    difficulty: 'easy',
    svg: `<path d="M 40 26 L 60 26 L 56 46 L 74 76 L 26 76 L 44 46 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 42 26 Q 50 32 58 26" stroke="#16171A" stroke-width="2" fill="none"/>
          <line x1="44" y1="46" x2="56" y2="46" stroke="#16171A" stroke-width="2"/>`
  },

  // ================= ACCESSORIES =================
  {
    id: 'acc-glasses',
    category: 'accessory',
    subDir: 'accessories',
    name: 'Round Glasses',
    altText: 'Two circular wire spectacle frames joined by a bridge.',
    description: 'Scholarly, vintage, or nerdy charm in simple geometric circles.',
    tags: ['accessory', 'glasses', 'smart', 'bookish'],
    difficulty: 'easy',
    svg: `<circle cx="34" cy="50" r="14" stroke="#16171A" stroke-width="3" fill="none"/>
          <circle cx="66" cy="50" r="14" stroke="#16171A" stroke-width="3" fill="none"/>
          <line x1="48" y1="50" x2="52" y2="50" stroke="#16171A" stroke-width="3"/>
          <line x1="20" y1="50" x2="16" y2="48" stroke="#16171A" stroke-width="2"/>
          <line x1="80" y1="50" x2="84" y2="48" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'acc-witch-hat',
    category: 'accessory',
    subDir: 'accessories',
    name: 'Witch Hat',
    altText: 'Pointed cone hat with curved tip and wide brim.',
    description: 'Iconic curved brim hat for potion brewers and spellcasters.',
    tags: ['accessory', 'witch', 'hat', 'magic', 'spooky'],
    difficulty: 'medium',
    svg: `<ellipse cx="50" cy="74" rx="38" ry="10" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 28 72 L 56 20 Q 64 16 62 26 L 72 72 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 32 66 Q 50 72 68 66" stroke="#16171A" stroke-width="2" fill="none"/>`
  },
  {
    id: 'acc-backpack',
    category: 'accessory',
    subDir: 'accessories',
    name: 'Traveler Backpack',
    altText: 'Stout hiking rucksack with straps and flap pocket.',
    description: 'Ready to hold sketchbooks, map scrolls, and journey rations.',
    tags: ['accessory', 'backpack', 'travel', 'adventure'],
    difficulty: 'easy',
    svg: `<rect x="28" y="24" width="44" height="52" rx="10" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 28 42 L 72 42" stroke="#16171A" stroke-width="2.5"/>
          <rect x="36" y="52" width="28" height="20" rx="4" stroke="#16171A" stroke-width="2" fill="#FFFFFF"/>
          <path d="M 40 24 C 40 16, 60 16, 60 24" stroke="#16171A" stroke-width="2.5" fill="none"/>`
  },
  {
    id: 'acc-scarf',
    category: 'accessory',
    subDir: 'accessories',
    name: 'Wrapped Scarf',
    altText: 'Chunky knit scarf wrapped around neck with trailing tails.',
    description: 'Warm voluminous wrap with trailing fringe for cold climates.',
    tags: ['accessory', 'scarf', 'winter', 'cozy'],
    difficulty: 'easy',
    svg: `<path d="M 26 40 C 34 32, 66 32, 74 40 C 78 52, 22 52, 26 40 Z" stroke="#16171A" stroke-width="3" fill="#FFFFFF"/>
          <path d="M 52 46 L 52 78 L 64 78 L 64 46" stroke="#16171A" stroke-width="2.5" fill="#FFFFFF"/>
          <line x1="52" y1="74" x2="64" y2="74" stroke="#16171A" stroke-width="1.5"/>`
  },

  // ================= SPECIAL FEATURES =================
  {
    id: 'spec-freckles',
    category: 'special-feature',
    subDir: 'special-features',
    name: 'Cheek Freckles',
    altText: 'Constellation of tiny stippled freckle dots over cheeks.',
    description: 'Soft spray of freckle marks across the nose bridge and cheeks.',
    tags: ['special-feature', 'freckles', 'cute', 'natural'],
    difficulty: 'easy',
    svg: `<circle cx="32" cy="48" r="1.5" fill="#16171A"/>
          <circle cx="36" cy="52" r="1.5" fill="#16171A"/>
          <circle cx="28" cy="54" r="1.5" fill="#16171A"/>
          <circle cx="68" cy="48" r="1.5" fill="#16171A"/>
          <circle cx="64" cy="52" r="1.5" fill="#16171A"/>
          <circle cx="72" cy="54" r="1.5" fill="#16171A"/>`
  },
  {
    id: 'spec-bandages',
    category: 'special-feature',
    subDir: 'special-features',
    name: 'Nose / Cheek Bandage',
    altText: 'Crossed adhesive bandage strip line art.',
    description: 'Classic plucky anime hero bandage worn on nose bridge or cheek.',
    tags: ['special-feature', 'bandage', 'hero', 'plucky'],
    difficulty: 'easy',
    svg: `<rect x="36" y="44" width="28" height="12" rx="3" transform="rotate(-10 50 50)" stroke="#16171A" stroke-width="2.5" fill="#FFFFFF"/>
          <circle cx="48" cy="49" r="1.5" fill="#16171A"/>
          <circle cx="52" cy="50" r="1.5" fill="#16171A"/>`
  },
  {
    id: 'spec-scars',
    category: 'special-feature',
    subDir: 'special-features',
    name: 'Cheek Scar',
    altText: 'Clean battle scar mark with cross stitches.',
    description: 'Tough veteran battle scar across cheek or forehead.',
    tags: ['special-feature', 'scar', 'battle', 'warrior'],
    difficulty: 'easy',
    svg: `<line x1="32" y1="36" x2="68" y2="64" stroke="#16171A" stroke-width="3" stroke-linecap="round"/>
          <line x1="42" y1="40" x2="48" y2="48" stroke="#16171A" stroke-width="2"/>
          <line x1="52" y1="48" x2="58" y2="56" stroke="#16171A" stroke-width="2"/>`
  },
  {
    id: 'spec-markings',
    category: 'marking',
    subDir: 'markings',
    name: 'Celestial Star Marks',
    altText: 'Four-point stars stamped under eye corners.',
    description: 'Magical or cosmetic star symbols beneath the cheekbones.',
    tags: ['special-feature', 'marking', 'stars', 'magic', 'celestial'],
    difficulty: 'easy',
    svg: `<path d="M 34 42 Q 34 50 42 50 Q 34 50 34 58 Q 34 50 26 50 Q 34 50 34 42 Z" fill="#16171A"/>
          <path d="M 66 42 Q 66 50 74 50 Q 66 50 66 58 Q 66 50 58 50 Q 66 50 66 42 Z" fill="#16171A"/>`
  }
];

// Ensure public directories exist
const subDirs = [
  'heads', 'head-angles', 'ears', 'eyes', 'eyebrows', 'noses', 'mouths',
  'hair', 'body', 'arms', 'hands', 'legs', 'feet', 'tails', 'wings',
  'horns', 'antlers', 'scales', 'markings', 'accessories', 'clothing',
  'animal-features', 'fantasy-features', 'creature-features', 'special-features'
];

for (const sd of subDirs) {
  const dirPath = path.join(PUBLIC_DIR, sd);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate the individual SVG files in /public/references/chibi/[subDir]/[id].svg
console.log(`Writing ${parts.length} individual SVG reference files...`);
for (const p of parts) {
  const fileName = `${p.id}.svg`;
  const filePath = path.join(PUBLIC_DIR, p.subDir, fileName);
  const fullSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" fill="none"/>
  ${p.svg.trim()}
</svg>`;
  fs.writeFileSync(filePath, fullSvg, 'utf-8');
}

console.log('All individual SVG reference files created successfully!');
