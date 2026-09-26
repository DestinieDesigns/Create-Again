import { ChibiPartReference } from '../../types/chibiReference';

export const CHIBI_CLOTHING_STYLE: ChibiPartReference[] = [
  // ==================== HAIR STYLES (Section 10) ====================
  {
    id: 'hair-straight',
    category: 'hair',
    name: 'Straight Long Hair',
    imageUrl: '/references/chibi/hair/hair-straight.svg',
    altText: 'Smooth cascading straight locks framing cheeks.',
    description: 'Sleek, orderly vertical strands creating a calm framing silhouette.',
    tags: ['hair', 'straight', 'smooth', 'classic', 'calm'],
    difficulty: 'easy',
    svgContent: `<path d="M 28 42 C 26 26, 40 18, 50 18 C 60 18, 74 26, 72 42 L 76 78 L 68 76 L 68 46 L 60 48 L 56 34 L 50 46 L 44 34 L 40 48 L 32 46 L 32 76 L 24 78 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-wavy',
    category: 'hair',
    name: 'Wavy Hair',
    imageUrl: '/references/chibi/hair/hair-wavy.svg',
    altText: 'Rhythmic ocean-wave undulating tresses.',
    description: 'Breezy undulating curves adding bounce, life, and romantic softness.',
    tags: ['hair', 'wavy', 'breeze', 'soft', 'flow'],
    difficulty: 'medium',
    svgContent: `<path d="M 28 38 C 26 24, 40 16, 50 16 C 60 16, 74 24, 72 38 C 76 48, 68 56, 74 66 C 78 74, 70 82, 66 84 C 64 72, 68 62, 62 52 L 58 38 L 50 46 L 42 38 L 38 52 C 32 62, 36 72, 34 84 C 30 82, 22 74, 26 66 C 32 56, 24 48, 28 38 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-curly',
    category: 'hair',
    name: 'Curly Ringlets',
    imageUrl: '/references/chibi/hair/hair-curly.svg',
    altText: 'Bouncy spring ringlet curls clustering around temples.',
    description: 'Playful spiraling ringlets full of volume and cheerful joy.',
    tags: ['hair', 'curly', 'ringlets', 'volume', 'cheerful'],
    difficulty: 'medium',
    svgContent: `<path d="M 32 30 C 24 30, 20 42, 26 50 C 18 56, 22 70, 30 72 C 24 78, 30 88, 40 84 L 42 70 M 68 30 C 76 30, 80 42, 74 50 C 82 56, 78 70, 70 72 C 76 78, 70 88, 60 84 L 58 70" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 28 32 C 34 18, 66 18, 72 32 C 64 36, 58 30, 50 36 C 42 30, 36 36, 28 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-spiky',
    category: 'hair',
    name: 'Spiky Action Hair',
    imageUrl: '/references/chibi/hair/hair-spiky.svg',
    altText: 'Dynamic jagged triangular hair tufts radiating outward.',
    description: 'Iconic anime protagonist tufts bursting with electric energy.',
    tags: ['hair', 'spiky', 'anime', 'protagonist', 'energy'],
    difficulty: 'medium',
    svgContent: `<path d="M 22 46 L 16 34 L 28 32 L 24 18 L 38 24 L 48 12 L 56 22 L 70 16 L 68 30 L 82 30 L 74 44 L 80 56 L 68 56 L 62 42 L 56 48 L 50 38 L 44 48 L 38 42 L 32 56 L 20 56 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-bun',
    category: 'hair',
    name: 'High Topknot Bun',
    imageUrl: '/references/chibi/hair/hair-bun.svg',
    altText: 'Neat spherical bun wrapped at the crown with side tendrils.',
    description: 'Polished spherical topknot tied cleanly above soft cheek fringe.',
    tags: ['hair', 'bun', 'topknot', 'clean', 'focused'],
    difficulty: 'easy',
    svgContent: `<circle cx="50" cy="18" r="14" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 26 Q 50 22 56 26" stroke="#CDCDC4" stroke-width="2" fill="none"/><path d="M 26 42 C 26 24, 40 22, 50 22 C 60 22, 74 24, 74 42 C 74 54, 70 66, 68 76 L 64 74 L 66 48 L 58 48 L 54 36 L 50 44 L 46 36 L 42 48 L 34 48 L 36 74 L 32 76 C 30 66, 26 54, 26 42 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },
  {
    id: 'hair-braids',
    category: 'hair',
    name: 'Twin Braids / Plaits',
    imageUrl: '/references/chibi/hair/hair-braids.svg',
    altText: 'Interlocking heart pattern woven braids draped over shoulders.',
    description: 'Cozy interwoven plaits resting neatly on the chest.',
    tags: ['hair', 'braids', 'plaits', 'cozy', 'cottage'],
    difficulty: 'hard',
    svgContent: `<path d="M 28 38 C 28 22, 40 20, 50 20 C 60 20, 72 22, 72 38 C 72 46, 64 48, 58 44 L 54 34 L 50 42 L 46 34 L 42 44 C 36 48, 28 46, 28 38 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 32 46 Q 38 52 32 58 Q 38 64 32 70 Q 38 76 32 82 M 38 46 Q 32 52 38 58 Q 32 64 38 70 Q 32 76 38 82" stroke="currentColor" stroke-width="2.5"/><path d="M 68 46 Q 62 52 68 58 Q 62 64 68 70 Q 62 76 68 82 M 62 46 Q 68 52 62 58 Q 68 64 62 70 Q 68 76 62 82" stroke="currentColor" stroke-width="2.5"/>`
  },
  {
    id: 'hair-afro',
    category: 'hair',
    name: 'Afro Cloud',
    imageUrl: '/references/chibi/hair/hair-afro.svg',
    altText: 'Glorious spherical textured afro halo.',
    description: 'Magnificent rounded afro full of proud natural texture.',
    tags: ['hair', 'afro', 'natural', 'volume', 'coily'],
    difficulty: 'medium',
    svgContent: `<circle cx="50" cy="42" r="36" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 26 50 C 32 38, 44 34, 50 36 C 56 34, 68 38, 74 50" stroke="currentColor" stroke-width="3" fill="none"/>`
  },
  {
    id: 'hair-bob',
    category: 'hair',
    name: 'Classic Bob',
    imageUrl: '/references/chibi/hair/hair-bob.svg',
    altText: 'Symmetrical chin-length bob cut.',
    description: 'Clean chin-length cut curving smoothly around cheeks.',
    tags: ['hair', 'bob', 'short', 'neat'],
    difficulty: 'easy',
    svgContent: `<path d="M 28 36 C 26 22, 40 18, 50 18 C 60 18, 74 22, 72 36 C 74 52, 72 64, 66 66 C 62 64, 66 52, 64 44 L 56 46 L 50 36 L 44 46 L 36 44 C 34 52, 38 64, 34 66 C 28 64, 26 52, 28 36 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/>`
  },

  // ==================== CLOTHING (Section 24) ====================
  {
    id: 'cloth-hoodie',
    category: 'clothing',
    name: 'Oversized Hoodie',
    imageUrl: '/references/chibi/clothing/cloth-hoodie.svg',
    altText: 'Slouchy relaxed pullover hoodie with kangaroo pouch and drawstrings.',
    description: 'Slouchy, comfortable streetwear favorite with deep kangaroo pocket.',
    tags: ['clothing', 'hoodie', 'cozy', 'streetwear', 'casual'],
    difficulty: 'medium',
    svgContent: `<path d="M 32 32 C 34 26, 44 26, 50 30 C 56 26, 66 26, 68 32 L 80 44 L 74 54 L 66 48 L 66 76 L 34 76 L 34 48 L 26 54 L 20 44 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 38 32 Q 50 40 62 32" stroke="currentColor" stroke-width="2.5"/><line x1="46" y1="36" x2="44" y2="52" stroke="currentColor" stroke-width="2"/><line x1="54" y1="36" x2="56" y2="52" stroke="currentColor" stroke-width="2"/><rect x="40" y="58" width="20" height="14" rx="3" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/>`
  },
  {
    id: 'cloth-tshirt',
    category: 'clothing',
    name: 'Crewneck T-Shirt',
    imageUrl: '/references/chibi/clothing/cloth-tshirt.svg',
    altText: 'Standard everyday crewneck tee with short sleeves.',
    description: 'Clean wardrobe basic easy to customize with logos or color blocks.',
    tags: ['clothing', 'tshirt', 'basic', 'casual'],
    difficulty: 'easy',
    svgContent: `<path d="M 36 30 C 38 28, 44 28, 50 32 C 56 28, 62 28, 64 30 L 76 38 L 70 48 L 64 44 L 64 72 L 36 72 L 36 44 L 30 48 L 24 38 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 42 30 Q 50 36 58 30" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'cloth-robe',
    category: 'clothing',
    name: 'Mage / Sage Robes',
    imageUrl: '/references/chibi/clothing/cloth-robe.svg',
    altText: 'Flowing wizard or monastic robe with long draped bell sleeves.',
    description: 'Mystical flowing robes tied at the waist with dramatic bell sleeves.',
    tags: ['clothing', 'robe', 'mage', 'wizard', 'fantasy'],
    difficulty: 'medium',
    svgContent: `<path d="M 36 28 C 42 26, 58 26, 64 28 L 82 46 L 74 60 L 64 50 L 68 84 L 32 84 L 36 50 L 26 60 L 18 46 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="42" y1="28" x2="54" y2="54" stroke="currentColor" stroke-width="2"/><line x1="58" y1="28" x2="46" y2="54" stroke="currentColor" stroke-width="2"/><rect x="34" y="52" width="32" height="6" fill="currentColor"/>`
  },
  {
    id: 'cloth-dress',
    category: 'clothing',
    name: 'A-Line Flared Dress',
    imageUrl: '/references/chibi/clothing/cloth-dress.svg',
    altText: 'Sleeveless dress with cinched waist and flouncy bell skirt.',
    description: 'Sweet gathered waist blooming into a bouncy bell-shaped skirt.',
    tags: ['clothing', 'dress', 'skirt', 'cute', 'flared'],
    difficulty: 'medium',
    svgContent: `<path d="M 40 28 L 46 44 L 54 44 L 60 28 M 40 28 C 44 26, 56 26, 60 28 L 56 46 L 44 46 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 44 46 L 26 80 Q 50 86 74 80 L 56 46 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 34 78 Q 50 82 66 78" stroke="#CDCDC4" stroke-width="1.5" fill="none"/>`
  },
  {
    id: 'cloth-armor',
    category: 'clothing',
    name: 'Knight Cuirass & Pauldrons',
    imageUrl: '/references/chibi/clothing/cloth-armor.svg',
    altText: 'Metallic chestplate with shoulder guard pauldrons.',
    description: 'Armored knight chestplate with prominent curved shoulder pauldrons.',
    tags: ['clothing', 'armor', 'knight', 'metal', 'warrior'],
    difficulty: 'hard',
    svgContent: `<rect x="36" y="32" width="28" height="42" rx="6" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 24 34 C 24 26, 36 28, 38 38 L 30 46 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/><path d="M 76 34 C 76 26, 64 28, 62 38 L 70 46 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/><line x1="50" y1="34" x2="50" y2="70" stroke="currentColor" stroke-width="2"/>`
  },

  // ==================== ACCESSORIES (Section 23) ====================
  {
    id: 'acc-glasses',
    category: 'accessory',
    name: 'Round Wire Glasses',
    imageUrl: '/references/chibi/accessories/acc-glasses.svg',
    altText: 'Classic circular intellectual spectacle frames with bridge.',
    description: 'Scholarly round frames that rest warmly on chubby cheeks.',
    tags: ['accessory', 'glasses', 'intellectual', 'round', 'cute'],
    difficulty: 'easy',
    svgContent: `<circle cx="34" cy="50" r="14" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><circle cx="66" cy="50" r="14" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><line x1="48" y1="50" x2="52" y2="50" stroke="currentColor" stroke-width="3"/><line x1="20" y1="50" x2="14" y2="48" stroke="currentColor" stroke-width="2"/><line x1="80" y1="50" x2="86" y2="48" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'acc-witch-hat',
    category: 'accessory',
    name: 'Crooked Witch Hat',
    imageUrl: '/references/chibi/accessories/acc-witch-hat.svg',
    altText: 'Iconic wide-brim crooked cone wizard hat with golden buckle belt.',
    description: 'Spellcaster hat with bent tip and wide protective brim.',
    tags: ['accessory', 'witch', 'wizard', 'hat', 'magic', 'halloween'],
    difficulty: 'medium',
    svgContent: `<ellipse cx="50" cy="72" rx="38" ry="12" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 28 68 C 34 50, 42 34, 46 20 C 50 14, 58 14, 56 22 C 54 28, 58 48, 72 68 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 32 64 Q 50 68 68 64" stroke="currentColor" stroke-width="3"/><rect x="46" y="60" width="8" height="6" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/>`
  },
  {
    id: 'acc-backpack',
    category: 'accessory',
    name: 'Explorer Backpack',
    imageUrl: '/references/chibi/accessories/acc-backpack.svg',
    altText: 'Sturdy leather field bag with buckle pockets and bedroll.',
    description: 'Sturdy travel rucksack packed with journals and compasses.',
    tags: ['accessory', 'backpack', 'bag', 'travel', 'adventure'],
    difficulty: 'medium',
    svgContent: `<rect x="28" y="32" width="44" height="46" rx="10" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 28 32 C 34 22, 66 22, 72 32 Z" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><rect x="38" y="52" width="24" height="18" rx="4" stroke="currentColor" stroke-width="2" fill="#FFFFFF"/><ellipse cx="50" cy="22" rx="18" ry="6" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/>`
  },
  {
    id: 'acc-scarf',
    category: 'accessory',
    name: 'Trailing Knitted Scarf',
    imageUrl: '/references/chibi/accessories/acc-scarf.svg',
    altText: 'Thick chunky wool wrap scarf with fringed ends floating in wind.',
    description: 'Warm neck wrap with dramatic trailing ends that show wind direction.',
    tags: ['accessory', 'scarf', 'winter', 'wind', 'cozy'],
    difficulty: 'easy',
    svgContent: `<ellipse cx="50" cy="44" rx="26" ry="12" stroke="currentColor" stroke-width="3" fill="#FFFFFF"/><path d="M 54 50 L 52 82 L 64 80 L 64 50 Z" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF"/><line x1="52" y1="82" x2="64" y2="80" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2"/>`
  },
  {
    id: 'acc-crown',
    category: 'accessory',
    name: 'Regal Crown',
    imageUrl: '/references/chibi/accessories/acc-crown.svg',
    altText: 'Three-point royalty crown with jewel insets.',
    description: 'Petite royal coronet with faceted gem points.',
    tags: ['accessory', 'crown', 'royalty', 'gold', 'prince', 'princess'],
    difficulty: 'easy',
    svgContent: `<path d="M 26 62 L 28 36 L 40 48 L 50 30 L 60 48 L 72 36 L 74 62 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="#FFFFFF"/><circle cx="50" cy="54" r="3.5" fill="currentColor"/>`
  },

  // ==================== SPECIAL FEATURES & MARKINGS ====================
  {
    id: 'spec-freckles',
    category: 'special-feature',
    name: 'Cheek Freckles',
    imageUrl: '/references/chibi/special-features/spec-freckles.svg',
    altText: 'Scattered stipple freckle clusters under cheeks.',
    description: 'Playful sun kisses across both cheekbones.',
    tags: ['special-feature', 'freckles', 'cute', 'cheeks'],
    difficulty: 'easy',
    svgContent: `<circle cx="28" cy="48" r="2" fill="currentColor"/><circle cx="34" cy="52" r="1.5" fill="currentColor"/><circle cx="24" cy="54" r="1.5" fill="currentColor"/><circle cx="72" cy="48" r="2" fill="currentColor"/><circle cx="66" cy="52" r="1.5" fill="currentColor"/><circle cx="76" cy="54" r="1.5" fill="currentColor"/>`
  },
  {
    id: 'spec-bandages',
    category: 'special-feature',
    name: 'Nose & Cheek Bandage',
    imageUrl: '/references/chibi/special-features/spec-bandages.svg',
    altText: 'Crossed adhesive plaster bandages on the bridge of nose.',
    description: 'Feisty scamp adhesive plaster showing playful battle scratches.',
    tags: ['special-feature', 'bandage', 'plaster', 'scamp', 'fighter'],
    difficulty: 'easy',
    svgContent: `<rect x="36" y="44" width="28" height="12" rx="3" stroke="currentColor" stroke-width="2.5" fill="#FFFFFF" transform="rotate(-6 50 50)"/><circle cx="48" cy="49" r="1.5" fill="currentColor"/><circle cx="52" cy="49" r="1.5" fill="currentColor"/>`
  },
  {
    id: 'spec-scars',
    category: 'special-feature',
    name: 'Cheek Battle Scar',
    imageUrl: '/references/chibi/special-features/spec-scars.svg',
    altText: 'Clean battle scar mark with cross stitches.',
    description: 'Tough veteran battle scar across cheek or forehead.',
    tags: ['special-feature', 'scar', 'battle', 'warrior'],
    difficulty: 'easy',
    svgContent: `<line x1="32" y1="36" x2="68" y2="64" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="42" y1="40" x2="48" y2="48" stroke="currentColor" stroke-width="2"/><line x1="52" y1="48" x2="58" y2="56" stroke="currentColor" stroke-width="2"/>`
  },
  {
    id: 'spec-markings',
    category: 'marking',
    name: 'Star Markings',
    imageUrl: '/references/chibi/markings/spec-markings.svg',
    altText: 'Four-point stars stamped under eye corners.',
    description: 'Magical or cosmetic star symbols beneath the cheekbones.',
    tags: ['special-feature', 'marking', 'stars', 'magic', 'celestial'],
    difficulty: 'easy',
    svgContent: `<path d="M 34 42 Q 34 50 42 50 Q 34 50 34 58 Q 34 50 26 50 Q 34 50 34 42 Z" fill="currentColor"/><path d="M 66 42 Q 66 50 74 50 Q 66 50 66 58 Q 66 50 58 50 Q 66 50 66 42 Z" fill="currentColor"/>`
  }
];
