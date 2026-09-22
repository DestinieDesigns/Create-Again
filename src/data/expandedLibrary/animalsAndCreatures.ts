import { CreativePrompt } from '../../types/prompt';

export const ANIMALS_AND_CREATURES_PROMPTS: CreativePrompt[] = [
  // SECTION 28: ANIMAL CONSTRUCTION LIBRARY
  {
    id: 'exp-animal-construction',
    prompt: 'Construct an animal using simple circles, ovals, and triangles.',
    explanation: 'Animals are not drawn fur-by-fur. They are built from connected geometric volumes: head sphere, ribcage oval, hip sphere, and limb sticks.',
    category: 'START',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['animals', 'construction', 'shapes', 'cat', 'dog', 'rabbit', 'bear', 'bird'],
    themeIds: ['animals', 'nature', 'storybook'],
    visualReference: {
      id: 'ref-exp-animal-construction',
      type: 'construction',
      title: 'Animal Construction from Simple Shapes',
      altText: 'Step-by-step construction of Cat (circle head + teardrop body + triangles), Dog (snout wedge + oval torso + floppy ears), Rabbit (egg torso + long upright ears), and Bird (circle + triangle beak + wing crescent).',
      explanation: 'Break the creature into three core volumes: Head, Chest, and Pelvis. Connecting these three shapes with a spine gives you any animal on earth.',
      whatToNotice: [
        'Cat: Compact rounded head, triangular ears, fluid arching spine.',
        'Dog: Extended snout wedge, longer torso, sturdy grounded paws.',
        'Rabbit: Low-slung egg body, large back foot wedge, long upright ears.',
        'Bird: Plump teardrop body with legs positioned slightly back to balance.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Volume', definition: 'The 3D space occupied by a shape (like a ball instead of a flat circle).' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Cat Construction -->
          <g transform="translate(20, 20)">
            <!-- Head sphere -->
            <circle cx="30" cy="25" r="16" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Tri ears -->
            <polygon points="18,14 24,4 28,12" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <polygon points="32,12 36,4 42,14" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Teardrop body -->
            <path d="M22 38 C14 50 14 78 30 78 C46 78 46 50 38 38 Z" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Tail sweep -->
            <path d="M42 75 C60 75 62 55 52 50" stroke="#E06D53" stroke-width="2.5" />
            <text x="30" y="98" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CAT</text>
          </g>

          <!-- 2. Dog Construction -->
          <g transform="translate(150, 20)">
            <ellipse cx="25" cy="25" rx="14" ry="12" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <path d="M28 22 L45 28 L30 35 Z" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <path d="M14 20 C10 24 10 38 18 36" stroke="#2D2723" stroke-width="2" />
            <ellipse cx="25" cy="55" rx="20" ry="16" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <line x1="15" y1="68" x2="12" y2="82" stroke="#2D2723" stroke-width="2.5" />
            <line x1="35" y1="68" x2="38" y2="82" stroke="#2D2723" stroke-width="2.5" />
            <text x="28" y="98" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DOG</text>
          </g>

          <!-- 3. Rabbit Construction -->
          <g transform="translate(280, 20)">
            <circle cx="25" cy="35" r="14" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <ellipse cx="20" cy="14" rx="4" ry="14" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <ellipse cx="28" cy="14" rx="4" ry="14" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <ellipse cx="48" cy="55" rx="22" ry="18" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <ellipse cx="50" cy="72" rx="16" ry="6" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <circle cx="70" cy="50" r="4" fill="#E06D53" stroke="none" />
            <text x="40" y="98" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">RABBIT</text>
          </g>

          <!-- 4. Bird Construction -->
          <g transform="translate(410, 20)">
            <circle cx="30" cy="25" r="12" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <polygon points="18,25 6,28 18,32" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <ellipse cx="45" cy="45" rx="22" ry="15" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <path d="M40 38 Q55 35 60 52" stroke="#E06D53" stroke-width="2.2" />
            <line x1="42" y1="60" x2="38" y2="78" stroke="#2D2723" stroke-width="2" />
            <line x1="50" y1="58" x2="52" y2="78" stroke="#2D2723" stroke-width="2" />
            <text x="40" y="98" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BIRD</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-cat-shapes', label: 'Cat = Circle + Teardrop', description: 'Sphere head with triangular ears and arching spine' },
      { id: 'ex-dog-shapes', label: 'Dog = Wedge Snout + Oval', description: 'Sturdy chest oval with downward-flopping ear shapes' },
      { id: 'ex-rabbit-shapes', label: 'Rabbit = Egg + Long Ovals', description: 'Low crouched egg torso with tall upright ear lobes' },
      { id: 'ex-bird-shapes', label: 'Bird = Circle + Egg + Wedge', description: 'Plump chest balanced neatly on two spindly twig legs' },
    ],
    moreExamples: [
      { id: 'ex-bear-shapes', label: 'Bear = Massive Sphere + Barrel', description: 'Wide humpback torso with rounded dish ears' },
      { id: 'ex-fish-shapes', label: 'Fish = Pointed Oval + Triangles', description: 'Streamlined torpedo with fin wedge attachments' },
    ],
    challenge: 'Pick three animals from your imagination and build them entirely out of circles and triangles before drawing any fur or feathers.',
  },

  // SECTION 30: CREATURE MIXING LIBRARY
  {
    id: 'exp-creature-mixing',
    prompt: 'Combine features from two different animals to invent a new creature.',
    explanation: 'Mythological and fantasy creatures are born by crossbreeding animal parts: rabbit ears on a turtle shell, or a cat with eagle wings.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    level: 'intermediate',
    tags: ['creature', 'hybrid', 'mixing', 'fantasy', 'animals', 'imagination'],
    themeIds: ['animals', 'fantasy', 'sci-fi', 'storybook'],
    visualReference: {
      id: 'ref-exp-creature-mixing',
      type: 'variation',
      title: 'Creature Mixing: Feature A + Feature B = New Form',
      altText: 'Diagram showing combination formulas: Cat Head + Fish Tail = Catfish Mermaid, Dog Body + Bird Wings = Gryphon Pup, Turtle Shell + Dragon Horns = Armored Drake.',
      explanation: 'Do not try to make it look realistic. Focus on the surprise of the silhouette: taking a heavy creature and giving it delicate wings, or a soft animal with a spiky shell.',
      whatToNotice: [
        'Contrast creates humor and mystery (e.g., massive bear claws on a tiny bird).',
        'Smooth the connection seam where the two animal features meet.',
        'Use the animal’s signature feature: rabbit ears, lion mane, octopus tentacles, deer antlers.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Hybrid', definition: 'A new creature created by joining features from two or more existing animals.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Cat + Fish -->
          <g transform="translate(20, 20)">
            <circle cx="25" cy="30" r="14" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <polygon points="15,20 20,10 25,18" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <polygon points="26,18 31,10 36,20" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Fish tail -->
            <path d="M38 34 C55 35 65 25 78 18 C72 35 72 45 78 60 C65 52 55 45 38 42" stroke="#E06D53" stroke-width="2.5" fill="#FAF5EB" />
            <text x="45" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CAT + FISH TAIL</text>
          </g>

          <!-- 2. Dog + Bird Wings (Gryphon) -->
          <g transform="translate(180, 20)">
            <ellipse cx="30" cy="40" rx="20" ry="16" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <circle cx="15" cy="25" r="10" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Big Feathered Wings -->
            <path d="M30 30 C30 5 55 5 62 18 C56 22 58 35 52 38" stroke="#E06D53" stroke-width="2.5" fill="#FAF5EB" />
            <text x="40" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PUP + WINGS</text>
          </g>

          <!-- 3. Turtle Shell + Deer Antlers -->
          <g transform="translate(350, 20)">
            <path d="M15 50 C15 25 65 25 65 50 Z" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <circle cx="12" cy="45" r="8" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Antlers -->
            <path d="M12 37 L10 18 M10 24 L5 20 M10 22 L15 18" stroke="#E06D53" stroke-width="2" />
            <line x1="25" y1="50" x2="25" y2="62" stroke="#2D2723" stroke-width="2.5" />
            <line x1="55" y1="50" x2="55" y2="62" stroke="#2D2723" stroke-width="2.5" />
            <text x="40" y="85" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TURTLE + ANTLERS</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-cat-fish', label: 'Cat + Fish', description: 'Soft whisker face swimming with a scaled fin tail' },
      { id: 'ex-dog-bird', label: 'Dog + Eagle Wings', description: 'Happy puppy body soaring with broad feathered wings' },
      { id: 'ex-turtle-dragon', label: 'Turtle + Dragon Horns', description: 'Impenetrable dome shell with sharp spiked crests' },
      { id: 'ex-frog-owl', label: 'Frog + Owl Eyes', description: 'Webbed squatting amphibian with giant feathered night-vision goggles' },
    ],
    moreExamples: [
      { id: 'ex-rabbit-fox', label: 'Rabbit + Fox Bushy Tail', description: 'Long upright ears with a giant bushy plume trailing behind' },
      { id: 'ex-snail-house', label: 'Snail + Cozy House', description: 'Shell replaced with a tiny cottage complete with chimney smoke' },
    ],
    challenge: 'Roll a mental dice: Pick one sea creature and one land creature. Combine them into an animal that has never existed before.',
  },
];
