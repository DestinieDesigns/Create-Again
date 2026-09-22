import { CreativePrompt } from '../../types/prompt';

export const ENVIRONMENTS_AND_DESIGN_PROMPTS: CreativePrompt[] = [
  // SECTION 31 & 32: ENVIRONMENT & BUILDING BLOCKS (Foreground, Midground, Background)
  {
    id: 'exp-environment-layers',
    prompt: 'Create a scene using three distinct depth layers: Foreground, Midground, and Background.',
    explanation: 'A landscape or room feels flat when all items are the same size. Layer your world into three distances: big things up close, medium things in the middle, and faint things far away.',
    category: 'STORY',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['environment', 'depth', 'landscape', 'foreground', 'background', 'composition'],
    themeIds: ['nature', 'places', 'everyday', 'fantasy'],
    visualReference: {
      id: 'ref-exp-environment-layers',
      type: 'environment',
      title: 'Three Depth Layers: Fore, Mid, and Background',
      altText: 'Landscape diagram broken into 3 depth zones: Foreground (large dark blade of grass and boulder), Midground (cabin and medium pine tree), and Background (faint mountain silhouettes and clouds).',
      explanation: 'Foreground frames the scene and pulls the viewer in. Midground holds the main storytelling subject. Background establishes the atmosphere and sky.',
      whatToNotice: [
        'Foreground: Cut off by the bottom or side edges; thickest ink lines.',
        'Midground: Where characters usually stand and act; balanced medium detail.',
        'Background: Highest up on the page; simplest silhouettes with light pen pressure.',
        'Overlap: Place closer objects partially in front of farther objects to prove distance.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Foreground', definition: 'The zone of your drawing closest to your eyes, usually appearing largest and darkest.' },
        { term: 'Midground', definition: 'The middle area where the main story or character action happens.' },
        { term: 'Background', definition: 'The scenery farthest away, like distant mountains, sky, or wall.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Background: Faint Mountains -->
          <g opacity="0.6">
            <path d="M40 110 L130 55 L220 110 L310 45 L420 120" stroke="#8C7E72" stroke-width="1.5" />
            <path d="M280 40 Q310 25 340 40 Q360 40 370 50 L270 50 Z" fill="#EAE2D5" stroke="none" />
            <text x="310" y="32" font-size="7.5" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">3. BACKGROUND (Faint &amp; Distant)</text>
          </g>

          <!-- Midground: Cabin & Trees -->
          <g transform="translate(140, 70)">
            <rect x="30" y="35" width="40" height="30" rx="2" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
            <polygon points="25,35 50,15 75,35" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
            <!-- Pine tree -->
            <polygon points="100,20 85,45 115,45" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <polygon points="100,38 80,65 120,65" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <line x1="100" y1="65" x2="100" y2="78" stroke="#2D2723" stroke-width="2.5" />
            <text x="70" y="10" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">2. MIDGROUND (Main Story)</text>
          </g>

          <!-- Foreground: Giant Boulder & Reeds -->
          <g transform="translate(10, 100)">
            <path d="M0 80 Q40 40 90 55 Q130 65 150 90" stroke="#2D2723" stroke-width="3.5" fill="#FAF5EB" />
            <path d="M120 70 L115 15 M125 70 L128 10 M130 70 L140 20" stroke="#E06D53" stroke-width="2.8" />
            <text x="75" y="45" font-size="8" font-family="sans-serif" font-weight="bold" fill="#E06D53" stroke="none">1. FOREGROUND (Bold &amp; Close)</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-nature-layers', label: 'Forest Clearing', description: 'Overhanging tree branch up close, deer in clearing, misty hills far behind' },
      { id: 'ex-room-layers', label: 'Bedroom Interior', description: 'Coffee mug on foreground desk, bed in midground, window with rain outside' },
      { id: 'ex-city-layers', label: 'Urban Street', description: 'Streetlamp pole cutting foreground edge, crosswalk in midground, skyscrapers behind' },
      { id: 'ex-beach-layers', label: 'Coastline', description: 'Giant seashell in the sand, crashing wave in midground, distant sun horizon' },
    ],
    moreExamples: [
      { id: 'ex-dungeon-layers', label: 'Fantasy Dungeon', description: 'Torch bracket in foreground, treasure chest in middle, dark stone arch far away' },
      { id: 'ex-space-layers', label: 'Space Station', description: 'Cockpit dashboard close, astronaut floating midground, ringed planet behind' },
    ],
    challenge: 'Draw a scene where something in the foreground is so close to the "camera" that it gets cut off by two edges of your paper.',
  },

  // SECTION 33: PERSPECTIVE (Near = Large, Far = Small)
  {
    id: 'exp-perspective-depth',
    prompt: 'Show depth using one simple rule: Near = Large, Far = Small.',
    explanation: 'You don’t need complex architectural rulers to create perspective. Just repeat the same object twice: make the near one huge, and the far one tiny.',
    category: 'CONNECT',
    difficulty: 'easy',
    level: 'beginner',
    tags: ['perspective', 'depth', 'scale', 'horizon', 'space'],
    themeIds: ['everyday', 'places', 'nature'],
    visualReference: {
      id: 'ref-exp-perspective-depth',
      type: 'diagram',
      title: 'Simple Perspective: Scale & Horizon Line',
      altText: 'Diagram showing telephone poles shrinking toward a vanishing point along a road, illustrating Near = Large, Far = Small, and Overlap.',
      explanation: 'Objects shrink as they approach the horizon line. Furthermore, items placed lower on your page usually feel closer to the viewer.',
      whatToNotice: [
        'Near = Large: The closest tree or pole touches top and bottom of page.',
        'Far = Small: The distant tree is just a tiny stick near the horizon.',
        'Spacing: The distance between repeated poles shrinks as they go back in space.',
        'Ground Level: Objects closer to you are anchored lower on the page.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Horizon Line', definition: 'The eye-level line across your drawing where the sky meets the land or sea.' },
        { term: 'Vanishing Point', definition: 'A point on the horizon where parallel lines seem to meet and disappear.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Horizon line -->
          <line x1="20" y1="75" x2="520" y2="75" stroke="#8C7E72" stroke-width="1.2" stroke-dasharray="4 4" />
          <text x="50" y="70" font-size="7.5" font-family="sans-serif" fill="#8C7E72" stroke="none">Horizon Line (Eye Level)</text>

          <!-- Road Receding -->
          <path d="M20 170 L260 75 L520 170" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
          <line x1="260" y1="75" x2="270" y2="170" stroke="#E06D53" stroke-width="2" stroke-dasharray="8 6" />

          <!-- Pole 1 (Near: Huge) -->
          <g transform="translate(60, 25)">
            <line x1="0" y1="0" x2="0" y2="140" stroke="#2D2723" stroke-width="4" />
            <line x1="-15" y1="18" x2="15" y2="18" stroke="#2D2723" stroke-width="3" />
            <text x="25" y="40" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">NEAR (LARGE)</text>
          </g>

          <!-- Pole 2 (Mid: Medium) -->
          <g transform="translate(130, 45)">
            <line x1="0" y1="0" x2="0" y2="90" stroke="#2D2723" stroke-width="2.5" />
            <line x1="-10" y1="12" x2="10" y2="12" stroke="#2D2723" stroke-width="2" />
          </g>

          <!-- Pole 3 (Far: Small) -->
          <g transform="translate(190, 60)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#2D2723" stroke-width="1.8" />
            <line x1="-6" y1="8" x2="6" y2="8" stroke="#2D2723" stroke-width="1.5" />
          </g>

          <!-- Pole 4 (Distant: Tiny) -->
          <g transform="translate(235, 70)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#2D2723" stroke-width="1.2" />
            <text x="10" y="15" font-size="7" font-family="sans-serif" fill="#8C7E72" stroke="none">FAR (TINY)</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-road-poles', label: 'Receding Road', description: 'Lines taper inward toward a single vanishing point' },
      { id: 'ex-trees-receding', label: 'Forest Trail', description: 'Close trees are giant trunks; distant trees are tiny strokes' },
      { id: 'ex-stepping-stones', label: 'Stepping Stones', description: 'Wide flat ovals up close shrinking into small dots across a river' },
      { id: 'ex-floating-balloons', label: 'Hot Air Balloons', description: 'Giant basket close to viewer, tiny colorful dots floating far away' },
    ],
    moreExamples: [
      { id: 'ex-overlap-cubes', label: 'Overlapping Blocks', description: 'Front block covers the corner of the back block to confirm depth' },
    ],
    challenge: 'Draw a single path on paper. Draw one person standing right near you at the front, and another person walking away near the horizon.',
  },

  // SECTION 35: NEGATIVE SPACE LIBRARY
  {
    id: 'exp-negative-space',
    prompt: 'Draw the empty spaces AROUND an object rather than the object itself.',
    explanation: 'Negative space is the empty air surrounding physical things: the hole inside a mug handle, the gap between legs, or the sky between tree branches.',
    category: 'DETAIL',
    difficulty: 'medium',
    level: 'beginner',
    tags: ['negative-space', 'shapes', 'perception', 'composition', 'observation'],
    themeIds: ['everyday', 'abstract'],
    visualReference: {
      id: 'ref-exp-negative-space',
      type: 'concept',
      title: 'Negative Space: The Air Shapes Around Things',
      altText: 'Diagram showing a chair, a mug handle, and a person standing with arms on hips, with the empty "air pockets" highlighted in warm ink tone.',
      explanation: 'When drawing a difficult object (like a chair or bicycle), do not look at the object. Look at the triangles of air between the spokes or rungs. When the empty air shapes are accurate, the object will be perfect.',
      whatToNotice: [
        'The hole inside a cup handle is a shape of its own (like a D or teardrop).',
        'The space between a standing person’s legs is an inverted V.',
        'The air trapped between hand and hip is a clear triangle.',
        'Negative shapes simplify complex subjects into flat geometric puzzles.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Negative Space', definition: 'The empty shapes around, inside, or between objects in your drawing.' },
        { term: 'Positive Space', definition: 'The physical subject or object itself.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Mug Handle Void -->
          <g transform="translate(30, 20)">
            <rect x="15" y="25" width="45" height="55" rx="4" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
            <path d="M60 35 C85 35 85 70 60 70" stroke="#2D2723" stroke-width="4" />
            <!-- Negative air void filled with highlight color -->
            <path d="M60 42 C74 42 74 63 60 63 Z" fill="#E06D53" opacity="0.3" stroke="#E06D53" stroke-width="1.8" />
            <text x="45" y="105" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HANDLE VOID</text>
          </g>

          <!-- 2. Chair Rungs Void -->
          <g transform="translate(170, 15)">
            <line x1="20" y1="10" x2="20" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <line x1="55" y1="35" x2="55" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <line x1="20" y1="45" x2="55" y2="45" stroke="#2D2723" stroke-width="2.5" />
            <line x1="20" y1="20" x2="45" y2="20" stroke="#2D2723" stroke-width="2.5" />
            <!-- Air gaps between legs -->
            <rect x="23" y="47" width="29" height="35" fill="#E06D53" opacity="0.3" stroke="#E06D53" stroke-width="1.5" />
            <text x="38" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CHAIR AIR POCKET</text>
          </g>

          <!-- 3. Arms on Hips (Akimbot) Triangles -->
          <g transform="translate(310, 15)">
            <circle cx="45" cy="22" r="12" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <path d="M30 38 L60 38 L54 75 L36 75 Z" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
            <!-- Arms forming triangular air spaces -->
            <path d="M30 40 L12 55 L36 68" stroke="#2D2723" stroke-width="2.5" />
            <path d="M60 40 L78 55 L54 68" stroke="#2D2723" stroke-width="2.5" />
            <!-- Negative space triangles -->
            <polygon points="30,42 16,55 36,66" fill="#E06D53" opacity="0.3" stroke="#E06D53" stroke-width="1.5" />
            <polygon points="60,42 74,55 54,66" fill="#E06D53" opacity="0.3" stroke="#E06D53" stroke-width="1.5" />
            <text x="45" y="110" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ARM TRIANGLES</text>
          </g>

          <!-- 4. Key Takeaway -->
          <g transform="translate(435, 30)">
            <rect x="0" y="0" width="90" height="75" rx="6" stroke="#D5C9BC" fill="#FAF5EB" stroke-width="1.5" />
            <text x="45" y="24" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">RULE OF THUMB</text>
            <text x="45" y="42" font-size="7" font-family="sans-serif" fill="#5C5046" text-anchor="middle" stroke="none">"Empty space is</text>
            <text x="45" y="54" font-size="7" font-family="sans-serif" fill="#5C5046" text-anchor="middle" stroke="none">just another</text>
            <text x="45" y="66" font-size="7" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SHAPE."</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-handle-air', label: 'Mug Handle Hole', description: 'Notice the D-shape void framed by the porcelain' },
      { id: 'ex-chair-legs', label: 'Chair Leg Windows', description: 'Observe the rectangular air openings between wooden rungs' },
      { id: 'ex-arms-akimbo', label: 'Armpit Triangles', description: 'Negative space triangles formed when hands rest on hips' },
      { id: 'ex-tree-gaps', label: 'Sky Pockets in Foliage', description: 'Windows of blue sky poking through thick leaf canopy' },
    ],
    moreExamples: [
      { id: 'ex-legs-standing', label: 'Inverted V Between Stances', description: 'The triangular air pyramid framed by two planted boots' },
    ],
    challenge: 'Look at a real chair or mug in the room where you are sitting. Draw only the empty holes and air shapes inside it, without drawing the outer boundaries.',
  },

  // SECTION 43: GRAPHIC DESIGN & POSTER HIERARCHY
  {
    id: 'exp-graphic-design-hierarchy',
    prompt: 'Make one element unmistakably stand out using visual hierarchy.',
    explanation: 'Visual hierarchy guides the viewer’s eye: What do you see 1st, 2nd, and 3rd? If everything on your page is the same size and boldness, nothing gets noticed.',
    category: 'TRANSFORM',
    difficulty: 'medium',
    level: 'intermediate',
    tags: ['graphic-design', 'hierarchy', 'typography', 'contrast', 'layout', 'focal-point'],
    themeIds: ['everyday', 'abstract'],
    visualReference: {
      id: 'ref-exp-graphic-design-hierarchy',
      type: 'comparison',
      title: 'Visual Hierarchy: Equal Weight vs Clear Focal Point',
      altText: 'Side-by-side comparison of two poster layouts: Poster A has all text and shapes identical in size and weight (confusing). Poster B has one massive hero title, medium secondary info, and small details.',
      explanation: 'Establish a dominant element (The Hero) that is 3x larger than anything else. Then provide supporting secondary elements, followed by small details.',
      whatToNotice: [
        'Scale: Make the most important item noticeably bigger than everything else.',
        'Weight: Dark, thick strokes pull attention before delicate thin hairlines.',
        'Negative Space: Giving an object generous breathing room makes it feel precious.',
        'Grouping: Keep related bits of information physically close to one another.',
      ],
      beginnerFriendly: true,
      beginnerTerms: [
        { term: 'Hierarchy', definition: 'The order of visual importance in a design that guides what the viewer looks at first.' },
        { term: 'Focal Point', definition: 'The spot on your page where the viewer’s eyes naturally land first.' },
      ],
      svgContent: `
        <svg viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Poster A: Bad (No Hierarchy) -->
          <g transform="translate(40, 15)">
            <rect x="0" y="0" width="160" height="150" rx="6" stroke="#8C7E72" stroke-width="1.5" fill="#FAF5EB" />
            <text x="80" y="24" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">NO HIERARCHY (EQUAL)</text>
            <rect x="25" y="38" width="110" height="15" rx="2" fill="#D5C9BC" stroke="none" />
            <rect x="25" y="60" width="110" height="15" rx="2" fill="#D5C9BC" stroke="none" />
            <rect x="25" y="82" width="110" height="15" rx="2" fill="#D5C9BC" stroke="none" />
            <rect x="25" y="104" width="110" height="15" rx="2" fill="#D5C9BC" stroke="none" />
            <text x="80" y="136" font-size="7" font-family="sans-serif" fill="#8C7E72" text-anchor="middle" stroke="none">Everything competes for attention</text>
          </g>

          <!-- Arrow -->
          <g transform="translate(240, 80)">
            <path d="M0 0 L40 0 M30 -8 L40 0 L30 8" stroke="#E06D53" stroke-width="2.5" />
            <text x="20" y="-12" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#E06D53" text-anchor="middle" stroke="none">TRANSFORM</text>
          </g>

          <!-- Poster B: Good (Clear Hierarchy) -->
          <g transform="translate(320, 15)">
            <rect x="0" y="0" width="160" height="150" rx="6" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <text x="80" y="22" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CLEAR HIERARCHY</text>
            <!-- 1. Hero Big Title -->
            <rect x="20" y="34" width="120" height="30" rx="3" fill="#2D2723" stroke="none" />
            <text x="80" y="53" font-size="10" font-family="sans-serif" font-weight="bold" fill="#FAF5EB" text-anchor="middle" stroke="none">1. HERO TITLE</text>
            <!-- 2. Secondary Subtitle -->
            <rect x="20" y="72" width="80" height="12" rx="2" fill="#E06D53" stroke="none" />
            <text x="22" y="81" font-size="6.5" font-family="sans-serif" font-weight="bold" fill="#FAF5EB" stroke="none">2. SUBTITLE</text>
            <!-- 3. Small Body Details -->
            <line x1="20" y1="96" x2="140" y2="96" stroke="#8C7E72" stroke-width="1.5" />
            <line x1="20" y1="104" x2="110" y2="104" stroke="#8C7E72" stroke-width="1.5" />
            <line x1="20" y1="112" x2="130" y2="112" stroke="#8C7E72" stroke-width="1.5" />
            <text x="80" y="136" font-size="7" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">Eye knows exactly where to look</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-hero-scale', label: 'Massive Hero Element', description: 'Scale one word or illustration 3x larger than anything else' },
      { id: 'ex-bold-contrast', label: 'Inverted Dark Block', description: 'White letters stamped inside a solid dark rectangle' },
      { id: 'ex-generous-margin', label: 'Spacious Margin', description: 'Leaving empty white space around a small central icon' },
      { id: 'ex-triad-grouping', label: 'Three-Level Text', description: 'Title (Huge) → Date (Medium) → Location (Small & Light)' },
    ],
    moreExamples: [
      { id: 'ex-accent-pop', label: 'Single Accent Tint', description: 'Everything black and white except one bright orange exclamation mark' },
    ],
    challenge: 'Design a quick poster for a concert or movie using only simple rectangles and three lines of text. Make the main title unmistakable.',
  },

  // SECTION 42: STORYTELLING WITHOUT WORDS
  {
    id: 'exp-storytelling-without-words',
    prompt: 'Tell a story without using any words or dialogue.',
    explanation: 'Visual storytelling uses clues: an open birdcage door, muddy paw prints leading under a couch, a dropped ice cream cone, or an empty chair.',
    category: 'STORY',
    difficulty: 'medium',
    level: 'intermediate',
    tags: ['storytelling', 'mystery', 'narrative', 'clues', 'imagination'],
    themeIds: ['everyday', 'mystery', 'places'],
    visualReference: {
      id: 'ref-exp-storytelling-without-words',
      type: 'composition',
      title: 'Storytelling Through Visual Clues',
      altText: 'Four visual story panels with zero words: 1. Open birdcage with a single floating feather, 2. Dropped spilled cup with trailing tracks, 3. Character looking back over their shoulder, 4. Gift held hidden behind the back.',
      explanation: 'Every story has a before, during, and after. Showing the residue of an action (footprints, spilled water, broken shell) lets the viewer’s mind finish the sentence.',
      whatToNotice: [
        'An open door immediately implies that someone just left or entered.',
        'A single floating feather hints at a recent sudden escape.',
        'Hiding an object behind a character’s back creates anticipation and suspense.',
        'A dropped umbrella on a sunny street suggests a sudden disappearance.',
      ],
      beginnerFriendly: true,
      svgContent: `
        <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 1. Open Birdcage -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="105" height="120" rx="4" stroke="#D5C9BC" fill="#FAF5EB" stroke-width="1.5" />
            <!-- Birdcage dome -->
            <path d="M25 45 C25 20 80 20 80 45 L80 90 L25 90 Z" stroke="#2D2723" stroke-width="2" />
            <line x1="42" y1="28" x2="42" y2="90" stroke="#8C7E72" stroke-width="1.5" />
            <line x1="63" y1="28" x2="63" y2="90" stroke="#8C7E72" stroke-width="1.5" />
            <!-- Open door swung out -->
            <rect x="42" y="55" width="22" height="30" stroke="#E06D53" stroke-width="2" transform="rotate(-25 42 55)" />
            <!-- Single floating feather outside -->
            <path d="M88 40 C95 40 98 48 90 52 C84 50 82 42 88 40" stroke="#E06D53" stroke-width="1.8" />
            <text x="52" y="112" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">OPEN CAGE</text>
          </g>

          <!-- 2. Pawprints Under Couch -->
          <g transform="translate(150, 20)">
            <rect x="0" y="0" width="105" height="120" rx="4" stroke="#D5C9BC" fill="#FAF5EB" stroke-width="1.5" />
            <!-- Couch skirt -->
            <rect x="15" y="35" width="75" height="40" rx="3" stroke="#2D2723" stroke-width="2" />
            <line x1="20" y1="75" x2="20" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <line x1="85" y1="75" x2="85" y2="85" stroke="#2D2723" stroke-width="2.5" />
            <!-- Paw prints leading in -->
            <circle cx="25" cy="100" r="2.5" fill="#E06D53" stroke="none" />
            <circle cx="38" cy="94" r="2.5" fill="#E06D53" stroke="none" />
            <circle cx="50" cy="88" r="2.5" fill="#E06D53" stroke="none" />
            <circle cx="62" cy="82" r="2.5" fill="#E06D53" stroke="none" />
            <text x="52" y="112" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">FOOTPRINT TRAIL</text>
          </g>

          <!-- 3. Looking Back Over Shoulder -->
          <g transform="translate(280, 20)">
            <rect x="0" y="0" width="105" height="120" rx="4" stroke="#D5C9BC" fill="#FAF5EB" stroke-width="1.5" />
            <ellipse cx="52" cy="65" rx="18" ry="25" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <circle cx="62" cy="40" r="12" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Looking back eye -->
            <circle cx="68" cy="38" r="2.5" fill="#E06D53" stroke="none" />
            <text x="52" y="112" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SUSPICIOUS GLANCE</text>
          </g>

          <!-- 4. Hidden Gift Behind Back -->
          <g transform="translate(410, 20)">
            <rect x="0" y="0" width="105" height="120" rx="4" stroke="#D5C9BC" fill="#FAF5EB" stroke-width="1.5" />
            <ellipse cx="45" cy="55" rx="16" ry="26" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
            <!-- Gift box held behind -->
            <rect x="62" y="55" width="24" height="24" rx="2" stroke="#E06D53" stroke-width="2" fill="#FAF5EB" />
            <line x1="74" y1="55" x2="74" y2="79" stroke="#E06D53" stroke-width="2" />
            <line x1="62" y1="67" x2="86" y2="67" stroke="#E06D53" stroke-width="2" />
            <text x="52" y="112" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SECRET GIFT</text>
          </g>
        </svg>
      `,
    },
    examples: [
      { id: 'ex-open-door', label: 'The Open Door', description: 'Door ajar with cast light, showing recent exit or entry' },
      { id: 'ex-trail-clues', label: 'Trail of Crumbs / Prints', description: 'Dotted footsteps tracking across a clean carpet' },
      { id: 'ex-hidden-behind', label: 'Item Hidden Behind Back', description: 'Character smiling sweetly while holding a secret weapon or bouquet' },
      { id: 'ex-dropped-object', label: 'Dropped In A Rush', description: 'Single dropped key or eyeglasses lying on pavement' },
    ],
    moreExamples: [
      { id: 'ex-empty-chair', label: 'Empty Chair Beside Tea', description: 'Steaming cup of tea still hot next to an abandoned book' },
    ],
    challenge: 'Draw a single room with no characters in it. Add three small clues that tell the viewer exactly what just happened there.',
  },
];
