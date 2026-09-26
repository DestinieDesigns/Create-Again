import fs from 'fs';
import path from 'path';

interface ChibiPartRaw {
  id: string;
  category: string;
  name: string;
  altText: string;
  description: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  compatibleTypes?: string[];
  compatibleThemes?: string[];
  svg: string;
}

// Helper to make SVG paths
const allParts: ChibiPartRaw[] = [];

function add(part: ChibiPartRaw) {
  allParts.push(part);
}

// 1. Heads (12)
const heads = [
  ['head-round', 'Round Head', 'Round spherical chibi head outline.', 'The golden standard spherical chibi head shape. Soft, youthful, and universally cute.', ['head', 'round', 'classic', 'cute'], 'easy', `<circle cx="50" cy="50" r="38" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="20" y1="56" x2="80" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`],
  ['head-oval', 'Oval Head', 'Elongated oval chibi head with gentle chin curve.', 'Slightly taller proportions, great for slender or mature chibi personalities.', ['head', 'oval', 'slender', 'tall'], 'easy', `<ellipse cx="50" cy="50" rx="32" ry="40" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="18" x2="50" y2="82" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="24" y1="56" x2="76" y2="56" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`],
  ['head-square', 'Square Head', 'Chibi head with a rounded square jawline.', 'Provides a sturdy, reliable jawline feel, ideal for robots and brave fighters.', ['head', 'square', 'chubby', 'robot'], 'easy', `<rect x="18" y="16" width="64" height="68" rx="20" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="20" x2="50" y2="80" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/><line x1="22" y1="58" x2="78" y2="58" stroke="#CDCDC4" stroke-width="1" stroke-dasharray="2 2"/>`],
  ['head-heart', 'Heart Head', 'Wide forehead tapering softly into a delicate rounded chin.', 'Tapers gracefully from wide cheeks down to a sweet, delicate tapered chin.', ['head', 'heart', 'delicate', 'fairy'], 'easy', `<path d="M 22 40 C 22 22, 38 18, 50 28 C 62 18, 78 22, 78 40 C 78 62, 58 78, 50 82 C 42 78, 22 62, 22 40 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['head-diamond', 'Diamond Head', 'Angular diamond chibi head with prominent cheek width.', 'Cheeks flare outward, tapering to a pointed crown and jaw.', ['head', 'diamond', 'angular', 'fantasy'], 'medium', `<path d="M 50 16 L 82 48 L 50 84 L 18 48 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/>`],
  ['head-triangle', 'Triangle Head', 'Inverted triangle head with a broad top and small chin.', 'Distinctive manga silhouette with expressive wide eye placement.', ['head', 'triangle', 'manga', 'sharp'], 'medium', `<path d="M 20 26 C 30 20, 70 20, 80 26 C 82 45, 68 76, 50 84 C 32 76, 18 45, 20 26 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['head-long', 'Long Head', 'Vertically extended chibi head outline.', 'Great for lanky characters, wizards, elders, or thoughtful personalities.', ['head', 'long', 'slender', 'wizard'], 'easy', `<path d="M 26 26 C 26 16, 74 16, 74 26 L 74 68 C 74 80, 26 80, 26 68 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['head-wide', 'Wide Head', 'Horizontally compressed head with exaggerated baby cheeks.', 'Extra squishy cheeks that give maximum infant or creature cuteness.', ['head', 'wide', 'squishy', 'cute'], 'easy', `<ellipse cx="50" cy="50" rx="42" ry="28" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['head-rectangle', 'Rectangle Head', 'Upright boxy rectangular head outline.', 'Perfect for mechanical constructs, stoic guards, and cardboard robots.', ['head', 'rectangle', 'box', 'robot'], 'easy', `<rect x="22" y="16" width="56" height="70" rx="10" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['head-pear', 'Pear Head', 'Narrow forehead ballooning into heavy soft lower cheeks.', 'Heavy cheeks at the bottom create an endearing, chubby expression.', ['head', 'pear', 'chubby', 'cheeks'], 'medium', `<path d="M 34 22 C 38 18, 62 18, 66 22 C 72 30, 84 56, 80 72 C 76 86, 24 86, 20 72 C 16 56, 28 30, 34 22 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['head-egg', 'Egg Head', 'Egg-shaped head outline broader at the bottom.', 'Organic oval with a slight natural taper upward.', ['head', 'egg', 'smooth', 'organic'], 'easy', `<path d="M 50 16 C 68 16, 78 40, 78 60 C 78 78, 66 84, 50 84 C 34 84, 22 78, 22 60 C 22 40, 32 16, 50 16 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['head-fluffy', 'Fluffy Head', 'Head outline with tufts of animal or creature fur on cheeks.', 'Built-in fur tufts ready for kittens, puppies, and mythical beasts.', ['head', 'fluffy', 'animal', 'fur'], 'medium', `<path d="M 32 20 C 44 14, 56 14, 68 20 C 78 28, 76 40, 84 46 L 76 52 L 86 60 L 72 68 C 64 82, 36 82, 28 68 L 14 60 L 24 52 L 16 46 C 24 40, 22 28, 32 20 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`]
] as const;

heads.forEach(([id, name, altText, desc, tags, diff, svg]) => {
  add({ id, category: 'head', name, altText, description: desc, tags: [...tags], difficulty: diff, svg });
});

// 2. Head Angles (8)
const angles = [
  ['head-angle-front', 'Front Angle', 'Direct frontal view with center line and eye horizon.', 'Symmetrical, direct, and straightforward for initial designs.', ['angle', 'front', 'symmetrical'], 'easy', `<circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="50" y1="18" x2="50" y2="78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="22" y1="54" x2="78" y2="54" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/>`],
  ['head-angle-three-quarter-left', '3/4 Left Angle', 'Head turned 45 degrees left with foreshortened cheek.', 'The most dynamic and popular character illustration angle.', ['angle', '3/4', 'left'], 'medium', `<path d="M 28 32 C 30 18, 68 18, 76 32 C 82 46, 80 66, 68 76 C 54 84, 40 82, 32 72 C 26 66, 26 56, 30 52 C 26 44, 26 38, 28 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 20 Q 38 48 42 78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="34" cy="52" r="3" fill="currentColor"/><circle cx="56" cy="50" r="3" fill="currentColor"/>`],
  ['head-angle-three-quarter-right', '3/4 Right Angle', 'Head turned 45 degrees right.', 'Balanced perspective showing depth and facial curvature to the right.', ['angle', '3/4', 'right'], 'medium', `<path d="M 72 32 C 70 18, 32 18, 24 32 C 18 46, 20 66, 32 76 C 46 84, 60 82, 68 72 C 74 66, 74 56, 70 52 C 74 44, 74 38, 72 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 56 20 Q 62 48 58 78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="66" cy="52" r="3" fill="currentColor"/><circle cx="44" cy="50" r="3" fill="currentColor"/>`],
  ['head-angle-side', 'Side Profile', 'Pure side profile silhouette with chibi nose and chin curve.', 'Essential for model sheets and turnaround consistency.', ['angle', 'profile', 'side'], 'medium', `<path d="M 54 18 C 30 18, 20 34, 20 50 C 20 68, 34 82, 54 82 C 60 82, 64 80, 68 76 L 62 70 C 60 70, 52 72, 46 72 C 34 72, 34 64, 38 58 L 44 58 C 42 56, 38 54, 38 50 C 38 42, 46 42, 46 42" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="42" cy="46" r="3" fill="currentColor"/>`],
  ['head-angle-looking-up', 'Looking Up', 'Chibi head tilted upwards showing jaw underside.', 'Expresses wonder, curiosity, starry-eyed optimism, or hope.', ['angle', 'upward', 'wonder'], 'hard', `<path d="M 50 18 C 68 18, 78 34, 76 56 C 74 72, 62 82, 50 82 C 38 82, 26 72, 24 56 C 22 34, 32 18, 50 18 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 26 44 Q 50 36 74 44" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="38" cy="42" r="3" fill="currentColor"/><circle cx="62" cy="42" r="3" fill="currentColor"/>`],
  ['head-angle-looking-down', 'Looking Down', 'Chibi head tilted downward showing more forehead.', 'Great for shy, sleepy, pouting, or reading characters.', ['angle', 'downward', 'shy'], 'hard', `<circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 24 62 Q 50 70 76 62" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/><circle cx="38" cy="62" r="3" fill="currentColor"/><circle cx="62" cy="62" r="3" fill="currentColor"/>`],
  ['head-angle-tilted-left', 'Tilted Left', 'Chibi head cocked playfully to the left.', 'Playful and quizzical, adds immediate charm and curiosity.', ['angle', 'tilted', 'curious'], 'medium', `<g transform="rotate(-15 50 50)"><circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/></g>`],
  ['head-angle-tilted-right', 'Tilted Right', 'Chibi head cocked playfully to the right.', 'Playful questioning head tilt to the right side.', ['angle', 'tilted', 'curious'], 'medium', `<g transform="rotate(15 50 50)"><circle cx="50" cy="48" r="32" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="40" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="54" r="3" fill="currentColor"/><path d="M 47 64 Q 50 67 53 64" stroke="currentColor" stroke-width="2" fill="none"/></g>`]
] as const;

angles.forEach(([id, name, altText, desc, tags, diff, svg]) => {
  add({ id, category: 'head-angle', name, altText, description: desc, tags: [...tags], difficulty: diff, svg });
});

// 3. Ears (23)
const ears = [
  ['ear-human', 'Human Ear', 'Standard rounded human ear.', 'Classic human ear shape positioned level with the eye line.', ['ear', 'human'], 'easy', `<path d="M 36 28 C 58 28, 64 42, 60 56 C 56 70, 44 74, 38 72 C 34 70, 36 62, 40 60 C 46 58, 48 46, 40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="#FFFFFF"/>`],
  ['ear-small-human', 'Small Human Ear', 'Delicate compact human ear curve.', 'Cute subtle small ear curve tucked neatly beside the cheek.', ['ear', 'human', 'small'], 'easy', `<path d="M 40 38 C 54 38, 58 48, 54 58 C 50 66, 42 66, 40 64" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="#FFFFFF"/>`],
  ['ear-large-human', 'Large Human Ear', 'Prominent slightly protruding human ear.', 'Gives characters a quirky, friendly, or younger storybook look.', ['ear', 'human', 'large'], 'easy', `<path d="M 30 22 C 68 20, 76 44, 70 64 C 64 80, 44 84, 34 80" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="#FFFFFF"/>`],
  ['ear-round', 'Round Ear', 'Simple semicircular ear shape.', 'Minimalist circle ear inspired by classic mascot designs.', ['ear', 'round'], 'easy', `<path d="M 34 32 C 60 32, 64 50, 64 54 C 64 68, 52 74, 34 74" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-pointed', 'Pointed Ear', 'Upward slanting pointed ear silhouette.', 'Sharp tip with a gentle upward curve, great for goblins and fae.', ['ear', 'pointed', 'fantasy'], 'medium', `<path d="M 30 68 C 30 52, 42 34, 74 22 C 64 42, 60 58, 38 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-elf', 'Elf Ear', 'Elongated horizontal elven ear.', 'Long and elegant fantasy silhouette arching out gracefully.', ['ear', 'elf', 'long'], 'medium', `<path d="M 28 62 C 34 46, 50 36, 84 26 C 68 46, 56 64, 32 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 58 Q 56 46 68 38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`],
  ['ear-cat', 'Cat Ear', 'Triangular feline ear with inner ear tuft.', 'Upright triangle with soft rounded peak and inner fur detail.', ['ear', 'cat', 'animal'], 'easy', `<path d="M 24 76 C 24 50, 36 28, 50 18 C 64 28, 76 50, 76 76 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 68 C 42 52, 48 40, 50 34 C 54 42, 58 56, 58 68" stroke="currentColor" stroke-width="1.5" fill="none"/>`],
  ['ear-fox', 'Fox Ear', 'Tall triangular fox ear with fluffy inner fur.', 'Tall, alert ears with dramatic inner fur tufts.', ['ear', 'fox', 'animal', 'fluffy'], 'medium', `<path d="M 22 78 C 22 48, 38 22, 52 14 C 66 22, 80 48, 78 78 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 48 L 32 66 M 52 42 L 40 70 M 58 52 L 48 72" stroke="currentColor" stroke-width="2"/>`],
  ['ear-wolf', 'Wolf Ear', 'Broad, thick-furred wolf ear.', 'Strong, slightly angled ears with thick protective fur lining.', ['ear', 'wolf', 'wild'], 'medium', `<path d="M 20 78 C 22 46, 40 22, 56 16 C 68 28, 80 50, 78 78 Z" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><path d="M 34 52 L 24 64 M 42 46 L 30 70 M 52 50 L 42 72" stroke="currentColor" stroke-width="2"/>`],
  ['ear-dog', 'Dog Ear', 'Folded hound dog ear drooping warmly.', 'Friendly folded ear drooping downward against the cheek.', ['ear', 'dog', 'floppy'], 'easy', `<path d="M 32 24 C 54 18, 70 30, 68 52 C 66 70, 52 82, 40 82 C 32 82, 30 70, 36 56 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-rabbit', 'Rabbit Ear', 'Tall upright bunny ear.', 'Long, soft vertical silhouette with gentle tapered rounded tip.', ['ear', 'rabbit', 'bunny'], 'easy', `<path d="M 36 82 C 28 58, 30 28, 48 14 C 66 28, 68 58, 60 82 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="48" cy="50" rx="6" ry="24" stroke="currentColor" stroke-width="1.5" fill="none"/>`],
  ['ear-bear', 'Bear Ear', 'Round cup-shaped teddy bear ear.', 'Perfect round cup shape perched high on the skull.', ['ear', 'bear', 'round'], 'easy', `<path d="M 24 72 C 18 42, 42 22, 64 26 C 82 30, 86 58, 76 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><ellipse cx="54" cy="52" rx="14" ry="14" stroke="currentColor" stroke-width="1.5" fill="none"/>`],
  ['ear-mouse', 'Mouse Ear', 'Oversized spherical mouse ear.', 'Extra large circular disk ear full of cartoon whimsy.', ['ear', 'mouse', 'rodent'], 'easy', `<circle cx="50" cy="50" r="34" stroke="currentColor" stroke-width="3.5" fill="#FFFFFF"/><circle cx="50" cy="50" r="22" stroke="currentColor" stroke-width="1.5" fill="none"/>`],
  ['ear-deer', 'Deer Ear', 'Leaf-shaped cervid deer ear angled outward.', 'Elegant botanical leaf-shaped ear tilted softly outward.', ['ear', 'deer', 'faun'], 'medium', `<path d="M 24 66 C 26 44, 46 26, 76 22 C 70 46, 56 68, 32 74 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 60 Q 52 46 62 34" stroke="currentColor" stroke-width="1.5"/>`],
  ['ear-horse', 'Horse Ear', 'Alert equine ear with pointed crest.', 'Slender, mobile equine ear angled forward with attention.', ['ear', 'horse', 'equine'], 'medium', `<path d="M 30 76 C 28 50, 40 28, 54 18 C 66 28, 72 52, 68 76 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-floppy', 'Floppy Ear', 'Heavy floppy spaniel ear drooping downward.', 'Long and relaxed, resting warmly against the side of the head.', ['ear', 'floppy', 'spaniel'], 'easy', `<path d="M 44 20 C 62 20, 72 36, 72 60 C 72 78, 56 86, 42 84 C 30 82, 30 68, 38 52 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-long', 'Long Droop Ear', 'Exaggerated droop ear draping down to shoulders.', 'Dramatic length reaching shoulder level for soft vibes.', ['ear', 'long', 'droop'], 'medium', `<path d="M 42 16 C 60 16, 68 36, 68 64 C 68 84, 52 92, 38 90 C 26 88, 28 72, 36 50 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-short', 'Short Nub Ear', 'Tiny rounded ear nub.', 'Small rounded nub, ideal for hamsters, seals, and tiny critters.', ['ear', 'short', 'nub'], 'easy', `<path d="M 36 52 C 34 38, 54 34, 62 44 C 68 52, 62 66, 42 66 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-feathered', 'Feathered Ear', 'Plumed winged ear adorned with layered feathers.', 'Layered feather plumage popular on celestial and avian beings.', ['ear', 'feathered', 'angel'], 'hard', `<path d="M 26 70 C 24 50, 36 34, 56 22 L 64 36 L 76 26 L 74 46 L 84 40 L 74 60 C 58 74, 38 76, 26 70 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-fantasy', 'Fantasy Fin Ear', 'Translucent aquatic fin ear with spined webbing.', 'Webbed aquatic fin design for sirens, merfolk, and sea elves.', ['ear', 'fantasy', 'fin', 'aquatic'], 'hard', `<path d="M 28 66 L 78 26 C 68 38, 62 44, 76 48 C 64 56, 60 62, 70 70 C 56 70, 44 72, 28 66 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`],
  ['ear-horned', 'Horned Ear', 'Demon/dragon hybrid ear crowned with small horns.', 'Combines an elven ear structure with curved demonic horn nubs.', ['ear', 'horned', 'demon'], 'medium', `<path d="M 26 66 C 30 50, 48 38, 76 26 C 68 44, 58 60, 32 72 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 38 C 42 22, 52 14, 58 12 C 58 20, 52 30, 48 38" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`],
  ['ear-no-ears', 'No Visible Ears', 'Smooth skull outline without external ear appendages.', 'Clean hair or hood contour covering ears completely.', ['ear', 'none', 'hidden'], 'easy', `<path d="M 32 30 C 42 20, 58 20, 68 30 C 74 40, 74 60, 68 70 C 58 80, 42 80, 32 70" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3" fill="none"/>`],
  ['ear-unusual', 'Unusual Antenna Ear', 'Mechanical or alien antenna replacing the standard ear.', 'Curious alien or robotic antenna stalk with receptor knob.', ['ear', 'unusual', 'antenna', 'robot'], 'medium', `<line x1="34" y1="72" x2="68" y2="28" stroke="currentColor" stroke-width="3.5"/><circle cx="72" cy="24" r="8" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`]
] as const;

ears.forEach(([id, name, altText, desc, tags, diff, svg]) => {
  add({ id, category: 'ear', name, altText, description: desc, tags: [...tags], difficulty: diff, svg });
});

// Write intermediate generator
fs.writeFileSync('scripts/build_step1.json', JSON.stringify({ count: allParts.length }));
console.log(`Generated ${allParts.length} parts so far.`);
