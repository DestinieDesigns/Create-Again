import { CreativePrompt } from '../types/prompt';

export const MASTER_PROMPTS_PART_3: CreativePrompt[] = [
  // SECTION 16 — FEET
  {
    id: 'master-20-feet',
    prompt: 'Change the direction of the feet.',
    explanation: 'Feet act as directional arrowheads on the floor. Turning toes outward, sideways, or pointing forward establishes perspective.',
    category: 'CHANGE',
    difficulty: 'easy',
    tags: ['feet', 'shoes', 'perspective', 'stance'],
    visualReference: {
      type: 'shape',
      title: 'Foot Direction & Shoe Wedges',
      altText: 'Instructional sketch showing feet angles: facing forward, side profile wedge, pigeon-toed inward, ballet duck outward, and heel raised.',
      examples: [
        'Facing forward (rounded domes or ovals)',
        'Side profile (triangular doorstop wedge)',
        'Pointed inward / pigeon-toed (shy, tentative)',
        'Turned wide outward (proud, heroic, theatrical)',
        'Heel raised up (sneaking, running, active)',
      ],
      whatToNotice: 'Think of the foot as a small doorstop wedge. The ankle connects at the back third of the foot, not the exact center.',
      challenge: 'Give the feet oversized chunky boots with treads.',
      svgContent: `
        <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Side Profile Wedge -->
          <g transform="translate(20, 20)">
            <path d="M12 10 L 12 30 L 40 30 C 42 22, 28 20, 20 10 Z" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SIDE WEDGE</text>
          </g>
          <!-- Forward Facing -->
          <g transform="translate(105, 20)">
            <ellipse cx="20" cy="25" rx="8" ry="16" stroke="#2D2723" stroke-width="2.2" />
            <circle cx="20" cy="16" r="4" stroke="#8C7E72" stroke-dasharray="2 2" />
            <text x="20" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">FORWARD</text>
          </g>
          <!-- Outward Turn -->
          <g transform="translate(185, 20)">
            <ellipse cx="14" cy="25" rx="7" ry="14" transform="rotate(-30 14 25)" stroke="#2D2723" stroke-width="2" />
            <ellipse cx="36" cy="25" rx="7" ry="14" transform="rotate(30 36 25)" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">OUTWARD (V)</text>
          </g>
          <!-- Inward / Shy -->
          <g transform="translate(270, 20)">
            <ellipse cx="16" cy="25" rx="7" ry="14" transform="rotate(25 16 25)" stroke="#E06D53" stroke-width="2" />
            <ellipse cx="34" cy="25" rx="7" ry="14" transform="rotate(-25 34 25)" stroke="#E06D53" stroke-width="2" />
            <text x="25" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">INWARD (SHY)</text>
          </g>
          <!-- Raised Heel -->
          <g transform="translate(350, 20)">
            <path d="M10 15 L 18 32 L 28 32 C 26 24, 22 20, 18 12 Z" stroke="#2D2723" stroke-width="2.5" />
            <line x1="8" y1="32" x2="35" y2="32" stroke="#8C7E72" stroke-dasharray="2 2" />
            <text x="20" y="55" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">RAISED HEEL</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 17 — POSES
  {
    id: 'master-21-poses',
    prompt: 'Put your character into a pose.',
    explanation: 'A pose communicates what is happening in the scene before words are read. Put spine curve and limb angles to work.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    tags: ['pose', 'acting', 'silhouette', 'character'],
    visualReference: {
      type: 'gesture',
      title: 'Dynamic Silhouette Poses',
      altText: 'Instructional reference showing full body poses: standing relaxed contrapposto, sitting on a box, crouching ready to pounce, leaning against an invisible wall, and dancing celebration.',
      examples: [
        'Standing with weight shifted onto one hip',
        'Sitting on an invisible chair or ledge',
        'Crouching low in stealth or anticipation',
        'Leaning backwards with arms folded',
        'Mid-leap or jumping with arms spread wide',
        'Lying down propped on an elbow',
      ],
      whatToNotice: 'A strong pose is readable in pure silhouette. Make sure arms and legs do not overlap the torso so much that the silhouette becomes an unreadable clump.',
      challenge: 'Keep a clear "negative space" gap between the character’s legs and arms.',
      beginnerTerms: [
        { term: 'Silhouette', definition: 'The outside contour of the figure when viewed as a solid shadow.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Weight Shift Standing -->
          <g transform="translate(20, 15)">
            <circle cx="25" cy="15" r="7" stroke="#2D2723" />
            <path d="M25 22 C 22 40 28 55 24 70" stroke="#E06D53" stroke-width="2.5" />
            <line x1="20" y1="28" x2="32" y2="34" stroke="#8C7E72" stroke-width="2" />
            <line x1="16" y1="56" x2="30" y2="52" stroke="#8C7E72" stroke-width="2" />
            <line x1="24" y1="70" x2="26" y2="105" stroke="#2D2723" stroke-width="2.5" />
            <line x1="24" y1="70" x2="12" y2="100" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="120" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">WEIGHT SHIFT</text>
          </g>
          <!-- Crouching -->
          <g transform="translate(125, 15)">
            <circle cx="20" cy="40" r="7" stroke="#2D2723" />
            <path d="M25 45 C 35 55 40 70 30 80" stroke="#2D2723" stroke-width="2.5" />
            <path d="M30 80 L 12 75 L 14 100" stroke="#2D2723" stroke-width="2.5" />
            <path d="M30 80 L 45 78 L 40 100" stroke="#2D2723" stroke-width="2.5" />
            <line x1="24" y1="48" x2="20" y2="75" stroke="#2D2723" stroke-width="2" />
            <text x="28" y="120" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CROUCHING</text>
          </g>
          <!-- Leaning Back -->
          <g transform="translate(230, 15)">
            <circle cx="16" cy="18" r="7" stroke="#2D2723" />
            <path d="M18 25 L 30 65" stroke="#E06D53" stroke-width="2.5" />
            <line x1="30" y1="65" x2="22" y2="105" stroke="#2D2723" stroke-width="2.5" />
            <line x1="30" y1="65" x2="36" y2="105" stroke="#2D2723" stroke-width="2" />
            <line x1="22" y1="36" x2="20" y2="58" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="120" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">LEANING</text>
          </g>
          <!-- Mid-Leap -->
          <g transform="translate(330, 15)">
            <circle cx="25" cy="20" r="7" stroke="#2D2723" />
            <path d="M25 27 Q 35 48 30 65" stroke="#2D2723" stroke-width="2.5" />
            <line x1="25" y1="35" x2="5" y2="20" stroke="#2D2723" stroke-width="2.2" />
            <line x1="25" y1="35" x2="48" y2="20" stroke="#2D2723" stroke-width="2.2" />
            <path d="M30 65 L 15 85 L 5 80 M 30 65 L 45 85 L 55 80" stroke="#2D2723" stroke-width="2.2" />
            <text x="25" y="120" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">LEAP / DANCE</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 18 — LINE OF ACTION
  {
    id: 'master-22-line-of-action',
    prompt: 'Give your character a direction of movement.',
    explanation: 'A line of action is an imaginary sweeping stroke that runs through the spine from head to toe. It unifies the entire gesture.',
    category: 'START',
    difficulty: 'medium',
    tags: ['line of action', 'gesture', 'movement', 'spine'],
    visualReference: {
      type: 'gesture',
      title: 'Line of Action Spine Foundations',
      altText: 'Diagram comparing 4 lines of action: straight vertical line produces stiff standing pose; sweeping curve produces flowing grace; sharp diagonal produces forward sprint; S-curve produces twisting turn.',
      examples: [
        'Straight vertical line → stiff, formal, stationary pose',
        'Gentle "C" curve → flowing, relaxed, graceful gesture',
        'Forward diagonal line → fast, energetic sprint or charge',
        '"S" curve → twisting, dynamic, athletic motion',
      ],
      whatToNotice: 'Draw the line of action FIRST with a faint stroke. Then hang the head, ribcage, and hips along that single rhythm.',
      challenge: 'Bend the line of action like a pulled archery bow before adding limbs.',
      beginnerTerms: [
        { term: 'Line of Action', definition: 'A single imaginary curved stroke defining the main direction and force of a pose.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Straight = Stiff -->
          <g transform="translate(25, 15)">
            <line x1="25" y1="10" x2="25" y2="90" stroke="#E06D53" stroke-width="3" />
            <circle cx="25" cy="18" r="8" stroke="#2D2723" />
            <line x1="15" y1="36" x2="35" y2="36" stroke="#2D2723" />
            <line x1="25" y1="26" x2="25" y2="58" stroke="#2D2723" stroke-width="2" />
            <line x1="20" y1="58" x2="20" y2="90" stroke="#2D2723" stroke-width="2" />
            <line x1="30" y1="58" x2="30" y2="90" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">STRAIGHT = STIFF</text>
          </g>
          <!-- C-Curve = Flowing -->
          <g transform="translate(130, 15)">
            <path d="M35 10 C 10 35, 10 70, 35 90" stroke="#E06D53" stroke-width="3" />
            <circle cx="32" cy="16" r="8" stroke="#2D2723" />
            <ellipse cx="20" cy="42" rx="10" ry="14" stroke="#2D2723" />
            <path d="M22 56 L 32 90" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">C-CURVE = FLOW</text>
          </g>
          <!-- Diagonal = Sprint -->
          <g transform="translate(235, 15)">
            <line x1="45" y1="12" x2="10" y2="90" stroke="#E06D53" stroke-width="3" />
            <circle cx="42" cy="18" r="8" stroke="#2D2723" />
            <line x1="36" y1="26" x2="24" y2="56" stroke="#2D2723" stroke-width="2.5" />
            <line x1="24" y1="56" x2="8" y2="90" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">DIAGONAL = SPEED</text>
          </g>
          <!-- S-Curve = Twist -->
          <g transform="translate(335, 15)">
            <path d="M20 10 C 35 25, 10 50, 30 90" stroke="#E06D53" stroke-width="3" />
            <circle cx="22" cy="16" r="8" stroke="#2D2723" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">S-CURVE = TWIST</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 19 — ACTIONS
  {
    id: 'master-23-actions',
    prompt: 'Make your character DO something.',
    explanation: 'Give the figure an immediate objective. Whether reading, cooking, drinking, or running, an action tells an instant story.',
    category: 'INTERACT',
    difficulty: 'medium',
    tags: ['action', 'activity', 'story', 'interaction'],
    visualReference: {
      type: 'gesture',
      title: 'Character Actions in Progress',
      altText: 'Instructional sketch showing 5 characters engaged in actions: drinking from a mug, carrying a heavy box, reading a book, leaping over an obstacle, and searching with a flashlight.',
      examples: [
        'Drinking hot tea or coffee (mug raised to lips)',
        'Carrying a heavy box (torso leaning backward to counterbalance)',
        'Reading a book (head tilted down, hands framing book)',
        'Climbing or reaching for a high ledge',
        'Texting or holding a gadget close to chest',
        'Searching the floor with a flashlight or magnifying glass',
      ],
      whatToNotice: 'When characters interact with physical weight, their bodies counterbalance. When carrying a heavy load in front, the spine leans back.',
      challenge: 'Draw a character trying to open a jar with a tight lid.',
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Drinking Mug -->
          <g transform="translate(20, 15)">
            <circle cx="25" cy="20" r="8" stroke="#2D2723" />
            <rect x="26" y="16" width="10" height="10" rx="2" stroke="#E06D53" stroke-width="1.8" />
            <path d="M36 19 C 39 19 39 23 36 23" stroke="#E06D53" />
            <path d="M22 28 L 22 55 L 30 22" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">DRINKING</text>
          </g>
          <!-- Carrying Heavy Box -->
          <g transform="translate(120, 15)">
            <circle cx="16" cy="22" r="8" stroke="#2D2723" />
            <path d="M18 30 C 14 45 16 65 18 80" stroke="#2D2723" stroke-width="2.5" />
            <rect x="28" y="35" width="26" height="26" rx="3" stroke="#E06D53" stroke-width="2" />
            <path d="M16 38 L 28 50 L 42 50" stroke="#2D2723" stroke-width="2" />
            <line x1="18" y1="80" x2="10" y2="105" stroke="#2D2723" stroke-width="2.2" />
            <line x1="18" y1="80" x2="28" y2="105" stroke="#2D2723" stroke-width="2.2" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">CARRYING LOAD</text>
          </g>
          <!-- Reading Book -->
          <g transform="translate(230, 15)">
            <circle cx="22" cy="24" r="8" stroke="#2D2723" />
            <path d="M18 32 C 18 50 20 65 20 80" stroke="#2D2723" stroke-width="2" />
            <path d="M26 38 L 38 42 L 34 52 L 22 48" stroke="#2D2723" stroke-width="2" />
            <path d="M30 42 L 44 38 L 44 54 L 30 58 Z" stroke="#E06D53" stroke-width="1.8" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">READING</text>
          </g>
          <!-- Searching Flashlight -->
          <g transform="translate(330, 15)">
            <circle cx="16" cy="35" r="8" stroke="#2D2723" />
            <path d="M16 43 L 14 70" stroke="#2D2723" stroke-width="2.5" />
            <line x1="14" y1="50" x2="32" y2="52" stroke="#2D2723" stroke-width="2" />
            <rect x="32" y="49" width="10" height="6" rx="1" stroke="#2D2723" />
            <polygon points="42,49 60,35 60,69 42,55" fill="#E06D53" fill-opacity="0.15" stroke="#E06D53" stroke-width="1" stroke-dasharray="2 2" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SEARCHING</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 20 — CLOTHING
  {
    id: 'master-24-clothing',
    prompt: 'Dress your character.',
    explanation: 'Clothing hangs from the body’s gravity points: shoulders, waist, and knees. Show folds and hems wrapping around forms.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['clothing', 'costume', 'fashion', 'character'],
    visualReference: {
      type: 'shape',
      title: 'Clothing Silhouettes over Body Forms',
      altText: 'Instructional sketch showing garments drawn over a basic mannequin: T-shirt collar and hem, oversized sweater, jacket with lapels, cape with folds, and hooded cloak.',
      examples: [
        'T-shirt and shorts (simple horizontal hems across limbs)',
        'Oversized knit sweater (folds bunching past the wrists)',
        'Long flowing coat or cloak (silhouette extending down to calves)',
        'Hoodie with front pocket pouch and drawstring loops',
        'Fantasy armor plates layered like roof shingles',
      ],
      whatToNotice: 'Cloth has thickness. Draw clothing lines slightly wider than the body contour underneath, wrapping around cylinders.',
      challenge: 'Add a big floppy scarf wrapping around the neck three times.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- T-Shirt -->
          <g transform="translate(20, 15)">
            <path d="M12 20 L 22 15 L 36 15 L 46 20 L 40 32 L 34 28 L 34 52 L 24 52 L 24 28 L 18 32 Z" stroke="#2D2723" stroke-width="2.5" />
            <path d="M24 15 Q 29 20 34 15" stroke="#E06D53" stroke-width="2" />
            <text x="29" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">T-SHIRT</text>
          </g>
          <!-- Oversized Hoodie -->
          <g transform="translate(110, 15)">
            <path d="M10 24 C 18 10 42 10 50 24 L 46 60 L 14 60 Z" stroke="#2D2723" stroke-width="2.5" />
            <path d="M22 42 L 38 42 L 36 54 L 24 54 Z" stroke="#E06D53" stroke-width="1.8" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HOODIE</text>
          </g>
          <!-- Flowing Cloak -->
          <g transform="translate(205, 15)">
            <circle cx="30" cy="18" r="8" stroke="#8C7E72" stroke-dasharray="2 2" />
            <path d="M24 24 L 10 65 Q 30 68 50 65 L 36 24 Z" stroke="#2D2723" stroke-width="2.5" />
            <path d="M24 24 Q 30 28 36 24" stroke="#E06D53" stroke-width="2" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">CLOAK</text>
          </g>
          <!-- Armor Plates -->
          <g transform="translate(305, 15)">
            <ellipse cx="30" cy="20" rx="14" ry="8" stroke="#2D2723" stroke-width="2.2" />
            <path d="M16 28 L 44 28 L 40 45 L 20 45 Z" stroke="#2D2723" stroke-width="2.5" />
            <line x1="30" y1="28" x2="30" y2="45" stroke="#E06D53" stroke-width="1.8" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">ARMOR</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 21 — ACCESSORIES
  {
    id: 'master-25-accessories',
    prompt: 'Give your character something they carry or wear.',
    explanation: 'Accessories reveal history and vocation. A single backpack, pair of spectacles, or walking staff explains who the character is.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['accessories', 'props', 'character', 'story'],
    visualReference: {
      type: 'object',
      title: 'Storytelling Props & Accessories',
      altText: 'Instructional reference of character props: backpack with rolled bedroll, round wireframe glasses, umbrella, lantern, and wizard staff with glowing crystal.',
      examples: [
        'Backpack or messenger bag with bulging pockets',
        'Round or cat-eye glasses sitting on the nose',
        'Wide-brimmed floppy sun hat or pointed witch hat',
        'Curved umbrella or walking stick',
        'Fantasy staff topped with a crystal or lantern',
        'Camera, musical instrument, or toolbox',
      ],
      whatToNotice: 'Props communicate personality without needing speech bubbles. Ask yourself: "What tool would this character never leave home without?"',
      challenge: 'Give the accessory visible wear and tear (a patch, a crack, or taped hinges).',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Backpack -->
          <g transform="translate(20, 15)">
            <rect x="15" y="18" width="30" height="38" rx="7" stroke="#2D2723" stroke-width="2.5" />
            <rect x="20" y="32" width="20" height="18" rx="4" stroke="#E06D53" stroke-width="2" />
            <ellipse cx="30" cy="14" rx="14" ry="5" stroke="#8C7E72" stroke-width="2" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BACKPACK</text>
          </g>
          <!-- Glasses -->
          <g transform="translate(115, 15)">
            <circle cx="20" cy="30" r="10" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="44" cy="30" r="10" stroke="#2D2723" stroke-width="2.5" />
            <line x1="30" y1="30" x2="34" y2="30" stroke="#E06D53" stroke-width="2.5" />
            <line x1="10" y1="30" x2="0" y2="28" stroke="#8C7E72" stroke-width="2" />
            <line x1="54" y1="30" x2="64" y2="28" stroke="#8C7E72" stroke-width="2" />
            <text x="32" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">GLASSES</text>
          </g>
          <!-- Lantern -->
          <g transform="translate(210, 15)">
            <path d="M20 18 Q 30 10 40 18 L 38 45 L 22 45 Z" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="30" cy="30" r="4" fill="#E06D53" stroke="none" />
            <path d="M26 12 Q 30 6 34 12" stroke="#8C7E72" stroke-width="2" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">LANTERN</text>
          </g>
          <!-- Staff -->
          <g transform="translate(305, 15)">
            <line x1="30" y1="18" x2="30" y2="60" stroke="#8C7E72" stroke-width="3" />
            <polygon points="30,4 38,16 30,24 22,16" stroke="#2D2723" stroke-width="2" fill="#E06D53" fill-opacity="0.15" />
            <text x="30" y="75" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CRYSTAL STAFF</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 22 — ANIMALS
  {
    id: 'master-26-animals',
    prompt: 'Build an animal from simple shapes.',
    explanation: 'Start with three basic volumes: head sphere, ribcage oval, and hip oval. Connect them with spine rhythms to draw any animal.',
    category: 'START',
    difficulty: 'medium',
    tags: ['animals', 'construction', 'anatomy', 'nature'],
    visualReference: {
      type: 'step-by-step',
      title: 'Animal Construction Primitives',
      altText: 'Instructional breakdown showing animals constructed from primitives: Cat (circle head, bean body, triangle ears), Bird (oval body, wedge beak, fan tail), Rabbit (egg torso, long ear stalks).',
      examples: [
        'Cat: circle head + bean body + triangle ears + curving tail line',
        'Fish: streamlined oval + triangle tail fin + crescent dorsal fin',
        'Bird: circle head + tilted egg body + sharp wedge beak + perch claws',
        'Turtle: dome shell + stubby cylinder legs + triangular snout',
        'Rabbit: egg body + circle head + long upright oval ears',
        'Dog: circle skull + blocky muzzle box + floppy ear flaps',
      ],
      whatToNotice: 'Begin with the largest mass (usually the ribcage or shell). Small features like paws and ears attach last.',
      challenge: 'Build an animal using only rectangles and squares.',
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Cat Construction -->
          <g transform="translate(20, 15)">
            <circle cx="30" cy="25" r="14" stroke="#8C7E72" stroke-dasharray="2 2" />
            <polygon points="20,15 24,6 28,14" stroke="#E06D53" stroke-width="2" />
            <polygon points="32,14 36,6 40,15" stroke="#E06D53" stroke-width="2" />
            <ellipse cx="40" cy="50" rx="16" ry="24" stroke="#8C7E72" stroke-dasharray="2 2" />
            <path d="M52 65 C 65 65 70 50 65 42" stroke="#2D2723" stroke-width="2.5" />
            <text x="35" y="95" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CAT SHAPES</text>
          </g>
          <!-- Bird Construction -->
          <g transform="translate(150, 15)">
            <circle cx="20" cy="25" r="10" stroke="#8C7E72" stroke-dasharray="2 2" />
            <ellipse cx="38" cy="40" rx="18" ry="12" stroke="#8C7E72" stroke-dasharray="2 2" />
            <polygon points="12,25 2,28 12,31" stroke="#E06D53" stroke-width="2" />
            <path d="M55 42 L 72 38 L 70 48 Z" stroke="#2D2723" stroke-width="2" />
            <text x="35" y="95" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BIRD SHAPES</text>
          </g>
          <!-- Turtle Shell -->
          <g transform="translate(280, 15)">
            <path d="M15 48 C 15 22 65 22 65 48 Z" stroke="#2D2723" stroke-width="2.5" />
            <ellipse cx="72" cy="45" rx="7" ry="5" stroke="#8C7E72" />
            <rect x="22" y="48" width="8" height="12" rx="3" stroke="#8C7E72" />
            <rect x="50" y="48" width="8" height="12" rx="3" stroke="#8C7E72" />
            <text x="40" y="95" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TURTLE DOME</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 23 — CREATURE DESIGN
  {
    id: 'master-27-creature-design',
    prompt: 'Combine two animals into one creature.',
    explanation: 'Take distinctive anatomical traits from two unrelated animals and hybridize them onto a unified body.',
    category: 'CONNECT',
    difficulty: 'medium',
    tags: ['creature', 'hybrid', 'fantasy', 'imagination'],
    visualReference: {
      type: 'shape',
      title: 'Animal Hybrid Construction Diagrams',
      altText: 'Instructional diagram showing hybrid recipes: Cat body + Fish fins equals Catfish creature; Bird beak and wings + Rabbit body equals Griffin bunny; Turtle shell + Fox bushy tail.',
      examples: [
        'Cat + Fish (whiskers and paws on sleek scaled body with caudal fin)',
        'Bird + Rabbit (floppy ears paired with feathered raptor wings)',
        'Turtle + Fox (sturdy dome shell adorned with a massive bushy tail)',
        'Dog + Dragon (friendly muzzle with bat wings and curving horns)',
        'Frog + Owl (giant round staring eyes with webbed leaping legs)',
      ],
      whatToNotice: 'Highlight which traits come from each species. A good hybrid feels like an authentic creature that could actually breathe and move.',
      challenge: 'Give the creature one unexpected ability (can it glow, glide, or burrow?).',
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Cat + Fish -->
          <g transform="translate(30, 15)">
            <ellipse cx="40" cy="35" rx="28" ry="16" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="20" cy="28" r="10" stroke="#8C7E72" />
            <polygon points="14,20 18,12 22,20" stroke="#2D2723" stroke-width="1.8" />
            <!-- Fins -->
            <path d="M68 35 L 85 22 L 80 48 Z" stroke="#E06D53" stroke-width="2.2" />
            <path d="M38 18 Q 44 8 50 18" stroke="#E06D53" stroke-width="1.8" />
            <text x="45" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CAT + FISH</text>
          </g>
          <!-- Owl + Frog -->
          <g transform="translate(180, 15)">
            <circle cx="35" cy="32" r="22" stroke="#2D2723" stroke-width="2.5" />
            <circle cx="26" cy="26" r="7" stroke="#E06D53" stroke-width="2" />
            <circle cx="44" cy="26" r="7" stroke="#E06D53" stroke-width="2" />
            <polygon points="32,32 35,38 38,32" stroke="#2D2723" stroke-width="1.8" />
            <path d="M14 45 C 5 50 8 62 18 58 M 56 45 C 65 50 62 62 52 58" stroke="#2D2723" stroke-width="2.2" />
            <text x="35" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">OWL + FROG</text>
          </g>
          <!-- Turtle + Fox -->
          <g transform="translate(305, 15)">
            <path d="M10 40 C 10 20 45 20 45 40 Z" stroke="#2D2723" stroke-width="2.5" />
            <ellipse cx="50" cy="38" rx="8" ry="6" stroke="#8C7E72" />
            <!-- Fox Tail -->
            <path d="M12 36 C -5 32, -8 15, 6 12 C 14 10, 16 28, 12 36 Z" stroke="#E06D53" stroke-width="2.2" />
            <text x="30" y="80" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">TURTLE + FOX</text>
          </g>
        </svg>
      `,
    },
  },
];
