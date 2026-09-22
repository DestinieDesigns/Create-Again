import { CreativePrompt } from '../types/prompt';

export const MASTER_PROMPTS_PART_2: CreativePrompt[] = [
  // SECTION 12 — BODY PROPORTIONS
  {
    id: 'master-16-proportions',
    prompt: "Change your character's proportions.",
    explanation: 'Stretch, shrink, or exaggerate limb lengths and head size. Unrealistic proportions make drawings memorable.',
    category: 'CHANGE',
    difficulty: 'medium',
    tags: ['proportions', 'mannequin', 'stylization', 'anatomy'],
    visualReference: {
      type: 'diagram',
      title: 'Proportion Exaggerations',
      altText: 'Diagram comparing simple mannequin figures: giant head with tiny body, tiny head with massive shoulders, ultra-long legs, and oversized hands and feet.',
      examples: [
        'Large head + small body (chibi, cute, child-like)',
        'Small head + giant torso (towering, hulking, powerful)',
        'Long legs + short torso (fashion silhouette, nimble)',
        'Long arms dragging near knees (primal, ape-like, quirky)',
        'Oversized feet and hands (cartoony, expressive gestures)',
      ],
      whatToNotice: 'Proportions don’t need to match real human biology. Exaggeration communicates personality at a glance.',
      challenge: 'Make the hands as large as the entire torso.',
      svgContent: `
        <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Big Head Small Body -->
          <g transform="translate(30, 15)">
            <circle cx="25" cy="25" r="20" stroke="#2D2723" stroke-width="2.5" />
            <line x1="25" y1="45" x2="25" y2="70" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="52" x2="10" y2="65" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="52" x2="40" y2="65" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="70" x2="15" y2="92" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="70" x2="35" y2="92" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BIG HEAD</text>
          </g>
          <!-- Long Legs -->
          <g transform="translate(130, 15)">
            <circle cx="25" cy="12" r="8" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="20" x2="25" y2="38" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="26" x2="12" y2="40" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="26" x2="38" y2="40" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="38" x2="15" y2="95" stroke="#E06D53" stroke-width="2.5" />
            <line x1="25" y1="38" x2="35" y2="95" stroke="#E06D53" stroke-width="2.5" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">LONG LEGS</text>
          </g>
          <!-- Big Torso Tiny Head -->
          <g transform="translate(230, 15)">
            <circle cx="25" cy="14" r="6" stroke="#2D2723" stroke-width="2" />
            <polygon points="5,24 45,24 35,65 15,65" stroke="#2D2723" stroke-width="2.5" />
            <line x1="5" y1="26" x2="0" y2="58" stroke="#2D2723" stroke-width="2.2" />
            <line x1="45" y1="26" x2="50" y2="58" stroke="#2D2723" stroke-width="2.2" />
            <line x1="18" y1="65" x2="14" y2="92" stroke="#2D2723" stroke-width="2" />
            <line x1="32" y1="65" x2="36" y2="92" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HEROIC TORSO</text>
          </g>
          <!-- Long Arms -->
          <g transform="translate(330, 15)">
            <circle cx="25" cy="16" r="8" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="24" x2="25" y2="60" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="30" x2="8" y2="85" stroke="#E06D53" stroke-width="2.5" />
            <line x1="25" y1="30" x2="42" y2="85" stroke="#E06D53" stroke-width="2.5" />
            <line x1="25" y1="60" x2="16" y2="90" stroke="#2D2723" stroke-width="2" />
            <line x1="25" y1="60" x2="34" y2="90" stroke="#2D2723" stroke-width="2" />
            <text x="25" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">LONG ARMS</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 13 — ARMS
  {
    id: 'master-17-arms',
    prompt: 'Try different arm positions.',
    explanation: 'Arms show what a character is doing, holding, or feeling. Think of them as two flexible segments connected at the elbow.',
    category: 'ADD',
    difficulty: 'easy',
    tags: ['arms', 'pose', 'gesture', 'action'],
    visualReference: {
      type: 'gesture',
      title: 'Arm Gestures & Placements',
      altText: 'Instructional sketch showing stick mannequin arm poses: arms crossed over chest, hands on hips, arms reaching overhead, waving hello, and hands hidden behind back.',
      examples: [
        'Resting down at the sides (relaxed, passive)',
        'Hands on hips (defiant, confident, ready)',
        'Arms crossed tightly (guarded, skeptical, thinking)',
        'Reaching high upward (celebrating, catching, climbing)',
        'Waving one hand (greeting, calling for attention)',
        'Hands behind back (formal, shy, or concealing a surprise)',
      ],
      whatToNotice: 'The elbow is the hinge. Where the elbow points determines where the forearm and hand can reach.',
      challenge: 'Draw one arm pointing directly at the viewer.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Hands on Hips -->
          <g transform="translate(20, 15)">
            <ellipse cx="30" cy="45" rx="10" ry="20" stroke="#8C7E72" />
            <path d="M22 35 L 8 46 L 22 55" stroke="#2D2723" stroke-width="2.5" />
            <path d="M38 35 L 52 46 L 38 55" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ON HIPS</text>
          </g>
          <!-- Crossed -->
          <g transform="translate(100, 15)">
            <ellipse cx="30" cy="45" rx="10" ry="20" stroke="#8C7E72" />
            <path d="M22 38 L 40 48 M 38 38 L 20 48" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CROSSED</text>
          </g>
          <!-- Waving -->
          <g transform="translate(180, 15)">
            <ellipse cx="30" cy="45" rx="10" ry="20" stroke="#8C7E72" />
            <path d="M22 38 L 12 55" stroke="#2D2723" stroke-width="2" />
            <path d="M38 38 L 48 20 L 58 10" stroke="#E06D53" stroke-width="2.5" />
            <circle cx="58" cy="10" r="3" fill="#E06D53" />
            <text x="30" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">WAVING</text>
          </g>
          <!-- Reaching Up -->
          <g transform="translate(260, 15)">
            <ellipse cx="30" cy="48" rx="10" ry="20" stroke="#8C7E72" />
            <path d="M22 36 L 15 15 L 20 5 M 38 36 L 45 15 L 40 5" stroke="#2D2723" stroke-width="2.5" />
            <text x="30" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">REACHING UP</text>
          </g>
          <!-- Behind Back -->
          <g transform="translate(340, 15)">
            <ellipse cx="30" cy="45" rx="10" ry="20" stroke="#8C7E72" />
            <path d="M22 38 L 16 52 L 28 58 M 38 38 L 44 52 L 32 58" stroke="#8C7E72" stroke-width="2" stroke-dasharray="2 2" />
            <text x="30" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">BEHIND BACK</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 14 — LEGS
  {
    id: 'master-18-legs',
    prompt: 'Move the legs into a different position.',
    explanation: 'Legs anchor weight, balance, and propulsion. Shifting the knees changes whether a character is resting or sprinting.',
    category: 'CHANGE',
    difficulty: 'medium',
    tags: ['legs', 'pose', 'running', 'balance'],
    visualReference: {
      type: 'gesture',
      title: 'Leg Stances & Motion',
      altText: 'Instructional diagram showing legs in 5 positions: standing straight, walking stride, running leap, seated knees bent, and crouching crouch.',
      examples: [
        'Standing straight (wide or narrow stance)',
        'Walking stride (front heel down, back toe pushing off)',
        'Running sprint (knees pulled high, wide diagonal split)',
        'Sitting down (hips angled at 90°, knees folded)',
        'Crouching low (deep bend in thighs, ready to leap)',
        'One leg raised (tiptoeing, kicking, balancing)',
      ],
      whatToNotice: 'Notice which leg supports the body weight. The weight-bearing leg usually sits directly beneath the center of the chest.',
      challenge: 'Draw a character balancing on a single tiptoe.',
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Standing -->
          <g transform="translate(20, 15)">
            <line x1="20" y1="15" x2="20" y2="40" stroke="#8C7E72" stroke-width="3" />
            <line x1="16" y1="40" x2="12" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <line x1="24" y1="40" x2="28" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <text x="20" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">STANDING</text>
          </g>
          <!-- Walking -->
          <g transform="translate(100, 15)">
            <line x1="25" y1="15" x2="20" y2="40" stroke="#8C7E72" stroke-width="3" />
            <line x1="20" y1="40" x2="35" y2="65" stroke="#2D2723" stroke-width="2.5" />
            <line x1="35" y1="65" x2="42" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <line x1="20" y1="40" x2="8" y2="65" stroke="#2D2723" stroke-width="2.5" />
            <line x1="8" y1="65" x2="2" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <text x="22" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">WALKING</text>
          </g>
          <!-- Running -->
          <g transform="translate(190, 15)">
            <line x1="35" y1="15" x2="20" y2="35" stroke="#8C7E72" stroke-width="3" />
            <path d="M20 35 L 42 42 L 50 72" stroke="#E06D53" stroke-width="2.5" />
            <path d="M20 35 L 0 52 L -12 45" stroke="#E06D53" stroke-width="2.5" />
            <text x="20" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">SPRINTING</text>
          </g>
          <!-- Sitting -->
          <g transform="translate(285, 15)">
            <line x1="15" y1="15" x2="15" y2="45" stroke="#8C7E72" stroke-width="3" />
            <line x1="15" y1="45" x2="35" y2="45" stroke="#2D2723" stroke-width="2.5" />
            <line x1="35" y1="45" x2="35" y2="80" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="100" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">SITTING</text>
          </g>
        </svg>
      `,
    },
  },

  // SECTION 15 — HANDS
  {
    id: 'master-19-hands',
    prompt: 'Give your character a hand position.',
    explanation: 'Do not fear hands. Begin with a mitten or square palm silhouette before worrying about individual fingers.',
    category: 'ADD',
    difficulty: 'medium',
    tags: ['hands', 'fingers', 'silhouette', 'gestures'],
    visualReference: {
      type: 'line-art',
      title: 'Hand Silhouettes & Palm Blocks',
      altText: 'Instructional sketches of simplified hand gestures: open flat palm, clenched fist, pointing index finger, thumbs up, peace sign, and holding a prop.',
      examples: [
        'Open palm / relaxed mitten shape',
        'Clenched fist (simple rounded box with thumb tucked over)',
        'Pointing index finger (one extended line, curled knuckles)',
        'Thumbs up (upright thumb wedge on clenched fist)',
        'Peace sign (two extended fingers in "V" shape)',
        'Curled fingers gripping an object or handle',
      ],
      whatToNotice: 'The palm is a flat square or wedge. The thumb hinges separately on the side, moving inward across the palm.',
      challenge: 'Draw a hand wearing a thick winter mitten or boxing glove.',
      beginnerTerms: [
        { term: 'Palm Wedge', definition: 'The central block of the hand from which fingers emerge.' },
      ],
      svgContent: `
        <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Open Palm / Mitten -->
          <g transform="translate(20, 15)">
            <path d="M15 65 L 15 35 C 15 25, 42 25, 42 35 L 42 65 M 15 48 C 8 44, 4 36, 10 32 C 16 30, 20 40, 20 44" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">MITTEN PALM</text>
          </g>
          <!-- Fist -->
          <g transform="translate(100, 15)">
            <rect x="10" y="28" width="30" height="26" rx="6" stroke="#2D2723" stroke-width="2.5" />
            <path d="M10 40 Q 25 45 35 34" stroke="#E06D53" stroke-width="2" />
            <text x="25" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">FIST</text>
          </g>
          <!-- Pointing -->
          <g transform="translate(180, 15)">
            <rect x="8" y="32" width="24" height="22" rx="4" stroke="#2D2723" stroke-width="2.2" />
            <path d="M15 32 L 15 10 C 15 6, 23 6, 23 10 L 23 32" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">POINTING</text>
          </g>
          <!-- Thumbs Up -->
          <g transform="translate(260, 15)">
            <rect x="12" y="30" width="28" height="24" rx="5" stroke="#2D2723" stroke-width="2" />
            <path d="M12 34 C 8 20, 18 10, 20 10 C 24 10, 24 24, 20 30" stroke="#E06D53" stroke-width="2.5" />
            <text x="25" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">THUMBS UP</text>
          </g>
          <!-- Grip / Hold -->
          <g transform="translate(340, 15)">
            <line x1="8" y1="10" x2="8" y2="60" stroke="#8C7E72" stroke-width="4" />
            <path d="M6 25 C 20 20, 24 35, 12 40 M 6 36 C 22 34, 24 48, 12 50" stroke="#2D2723" stroke-width="2.5" />
            <text x="25" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">GRIPPING</text>
          </g>
        </svg>
      `,
    },
  },
];
