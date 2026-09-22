export type WarmUpCategory =
  | 'marks-lines'
  | 'shapes'
  | 'hand-movement'
  | 'observation'
  | 'character'
  | 'animals-creatures'
  | 'environment'
  | 'composition'
  | 'color'
  | 'creative-thinking';

export interface WarmUpCategoryConfig {
  id: WarmUpCategory;
  name: string;
  iconName: string;
  description: string;
}

export const WARM_UP_CATEGORIES: WarmUpCategoryConfig[] = [
  {
    id: 'marks-lines',
    name: 'Marks & Lines',
    iconName: 'PenTool',
    description: 'Line pressure, rhythm, hatching, and pen confidence.',
  },
  {
    id: 'shapes',
    name: 'Shapes',
    iconName: 'Shapes',
    description: 'Circles, triangles, ovals, and geometric building blocks.',
  },
  {
    id: 'hand-movement',
    name: 'Hand & Movement',
    iconName: 'Activity',
    description: 'Shoulder pivots, non-dominant hands, and fluid speed.',
  },
  {
    id: 'observation',
    name: 'Observation',
    iconName: 'Eye',
    description: 'Blind contour, negative space, and seeing relationships.',
  },
  {
    id: 'character',
    name: 'Character',
    iconName: 'User',
    description: 'Head silhouettes, quick expressions, and posture lines.',
  },
  {
    id: 'animals-creatures',
    name: 'Animals & Creatures',
    iconName: 'Footprints',
    description: 'Paws, snouts, ears, wings, and beast silhouettes.',
  },
  {
    id: 'environment',
    name: 'Environment',
    iconName: 'Trees',
    description: 'Horizons, trees, architectural corners, and perspective lines.',
  },
  {
    id: 'composition',
    name: 'Composition',
    iconName: 'LayoutGrid',
    description: 'Rule of thirds, balance, visual weight, and frame edges.',
  },
  {
    id: 'color',
    name: 'Color & Contrast',
    iconName: 'Palette',
    description: 'Value swatches, light source angles, and high-contrast shading.',
  },
  {
    id: 'creative-thinking',
    name: 'Creative Thinking',
    iconName: 'Sparkles',
    description: 'Morphing shapes, unexpected hybrids, and rule breaking.',
  },
];

export interface WarmUpExerciseItem {
  id: string;
  title: string;
  category: WarmUpCategory;
  duration: number; // seconds
  description: string;
  tip: string;
  themeIds?: string[];
  visualReferenceId?: string;
}

export const CATEGORY_WARM_UPS: WarmUpExerciseItem[] = [
  // Marks & Lines
  {
    id: 'wu-ml-01',
    title: 'Pressure & Velocity Swatches',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw 4 small boxes. Fill box 1 with whisper-light lines, box 2 with heavy pressure, box 3 with crosshatching, box 4 with fast scribbles.',
    tip: 'Feel the friction of your pen or pencil against the paper grain.',
  },
  {
    id: 'wu-ml-02',
    title: 'Parallel Wave Harmonics',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw a curving sine wave across your paper. Now draw 10 consecutive lines echoing its curve as closely as possible without touching.',
    tip: 'Breathe evenly. Move your whole forearm.',
  },

  // Shapes
  {
    id: 'wu-shp-01',
    title: 'Loose Circles from the Shoulder',
    category: 'shapes',
    duration: 120,
    description: 'Draw 30 loose, overlapping circles across your page. Move from your shoulder, not your wrist.',
    tip: 'Speed matters more than precision. Let them be wobbly and free.',
  },
  {
    id: 'wu-shp-02',
    title: 'Shape Nesting & Slicing',
    category: 'shapes',
    duration: 120,
    description: 'Draw 6 large triangles and rectangles, then carve smaller geometric silhouettes inside each one.',
    tip: 'Think like a sculptor cutting into clay blocks.',
  },

  // Hand & Movement
  {
    id: 'wu-hm-01',
    title: 'Non-Dominant Hand Wander',
    category: 'hand-movement',
    duration: 120,
    description: 'Switch your pen to your non-dominant hand. Draw a friendly monster or a quiet tree without lifting the pen.',
    tip: 'Your lack of control turns off the inner perfectionist.',
  },
  {
    id: 'wu-hm-02',
    title: 'Speed Figure Gestures',
    category: 'hand-movement',
    duration: 120,
    description: 'Draw 10 rapid stick-and-ribbon figures striking exaggerated athletic or walking poses. 10 seconds each!',
    tip: 'Capture the tilt of the spine and hips before limbs.',
  },

  // Observation
  {
    id: 'wu-obs-01',
    title: 'Blind Contour Drawing',
    category: 'observation',
    duration: 120,
    description: 'Pick an object on your desk or your non-drawing hand. Draw its outline without once looking down at your paper.',
    tip: 'It will look hilarious and strange. That is the whole point!',
  },
  {
    id: 'wu-obs-02',
    title: 'Negative Space Edges',
    category: 'observation',
    duration: 120,
    description: 'Look at the gap between two objects near you. Draw ONLY the empty shape created between them.',
    tip: 'Focus on the air, not the solid objects.',
  },

  // Character
  {
    id: 'wu-chr-01',
    title: 'Head Silhouette Variations',
    category: 'character',
    duration: 120,
    description: 'Draw 8 distinct head silhouettes: circle, square, triangle, pear, long oval. Add eye dots and jaw lines.',
    tip: 'Varying head shapes produces instant personality contrast.',
    visualReferenceId: 'ref-head-shapes',
  },
  {
    id: 'wu-chr-02',
    title: 'Eyebrow & Mouth Mood Matrix',
    category: 'character',
    duration: 120,
    description: 'Draw 6 simple face circles. Give each one a different emotion just by changing eyebrow tilt and mouth curve.',
    tip: 'Notice how a single millimeter angle completely changes mood.',
    visualReferenceId: 'ref-facial-expressions',
  },

  // Animals & Creatures
  {
    id: 'wu-ani-01',
    title: 'Animal Construction from Primitives',
    category: 'animals-creatures',
    duration: 120,
    description: 'Build 5 animal heads using only overlapping circles, triangles for ears, and an oval for the snout.',
    tip: 'Change ear shapes: pointed for fox, folded for puppy, curved for bear.',
    visualReferenceId: 'ref-animal-basic-construction',
  },
  {
    id: 'wu-ani-02',
    title: 'Paw & Footprint Rapid Drill',
    category: 'animals-creatures',
    duration: 120,
    description: 'Draw 8 different paw prints: padded dog, hooked bird talons, cloven hoof, and webbed duck feet.',
    tip: 'Start with the central cushion pad before adding digits.',
    visualReferenceId: 'ref-animal-basic-construction',
  },

  // Environment
  {
    id: 'wu-env-01',
    title: 'Three-Plane Depth Sketch',
    category: 'environment',
    duration: 120,
    description: 'Draw three horizontal mountain or hill ridges across your page: dark foreground, medium middle ground, faint background.',
    tip: 'Use heavy lines up close and soft, whispered lines on the horizon.',
    visualReferenceId: 'ref-environment-depth',
  },
  {
    id: 'wu-env-02',
    title: 'Tree & Foliage Silhouettes',
    category: 'environment',
    duration: 120,
    description: 'Draw 5 different tree silhouettes: pine, weeping willow, oak, palm, and bare winter branches.',
    tip: 'Block the general mass of leaves first before drawing any individual twigs.',
    visualReferenceId: 'ref-leaf-construction',
  },

  // Composition
  {
    id: 'wu-cmp-01',
    title: 'Thumbnail Balance Exploration',
    category: 'composition',
    duration: 120,
    description: 'Draw 4 small 2x2 inch rectangles. In each, place one large circle and two small squares to create different visual balance.',
    tip: 'Notice how placing items near the edges changes dramatic tension.',
  },
  {
    id: 'wu-cmp-02',
    title: 'Focal Point Arrowing',
    category: 'composition',
    duration: 120,
    description: 'Draw a central focal star, then draw lines and shapes all pointing inward toward it like arrows in a visual hierarchy.',
    tip: 'Guide the viewer’s eye smoothly through the page.',
  },

  // Color & Contrast
  {
    id: 'wu-col-01',
    title: 'Five-Step Value Staircase',
    category: 'color',
    duration: 120,
    description: 'Draw 5 boxes in a row. Shade them from pure white (box 1) through 3 shades of gray to jet black (box 5).',
    tip: 'Crosshatch multiple directions to achieve deep darks without pressing too hard.',
  },
  {
    id: 'wu-col-02',
    title: 'Cast Shadow Angles',
    category: 'color',
    duration: 120,
    description: 'Draw 3 simple floating spheres. Decide where the light comes from and draw their dark ground cast shadows.',
    tip: 'Shadows opposite the light ground floating objects.',
  },

  // Creative Thinking
  {
    id: 'wu-ct-01',
    title: 'Continuous Single Line Monster',
    category: 'creative-thinking',
    duration: 120,
    description: 'Draw an entire scene or creature without lifting your pen from the paper once. If you need to cross over, draw a connecting loop.',
    tip: 'Embrace tangled loops and accidental discoveries.',
  },
  {
    id: 'wu-ct-02',
    title: 'Random Scribble Transformation',
    category: 'creative-thinking',
    duration: 120,
    description: 'Close your eyes for 3 seconds and make a wild scribble. Open your eyes and turn that scribble into a creature or machine.',
    tip: 'Look for accidental faces or silhouettes already hiding in the marks.',
  },
];

export interface ThemeWarmUpPrompt {
  themeId: string;
  title: string;
  category: WarmUpCategory;
  duration: number;
  description: string;
  tip: string;
  visualReferenceId?: string;
}

export const THEME_SPECIFIC_WARM_UPS: ThemeWarmUpPrompt[] = [
  // NATURE
  {
    themeId: 'nature',
    title: '10 Leaf & Seed Silhouettes',
    category: 'shapes',
    duration: 120,
    description: 'Draw 10 different leaf and seed silhouettes: oval, notched oak, pine needle, acorn, and maple.',
    tip: 'Start with the center stem line to guide the curve.',
    visualReferenceId: 'ref-leaf-construction',
  },
  {
    themeId: 'nature',
    title: 'Bark & Rock Textures',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw 3 small swatches showing wood grain, moss stipples, and fractured stone cracks.',
    tip: 'Keep the hatch lines organic and irregular.',
    visualReferenceId: 'ref-leaf-construction',
  },

  // FANTASY
  {
    themeId: 'fantasy',
    title: '5 Magical Object Silhouettes',
    category: 'shapes',
    duration: 120,
    description: 'Create 5 different magical object silhouettes: potion flasks, crystal wands, spellbook clasps, and amulets.',
    tip: 'Exaggerate curves and angular caps.',
    visualReferenceId: 'ref-fantasy-creature-parts',
  },
  {
    themeId: 'fantasy',
    title: '5 Fantasy Head Silhouettes',
    category: 'character',
    duration: 120,
    description: 'Draw 5 different fantasy head silhouettes: horned imp, hooded mage, pointed-ear elf, and stone golem.',
    tip: 'Distinct ear and horn shapes define the fantasy archetype instantly.',
    visualReferenceId: 'ref-fantasy-creature-parts',
  },

  // ANIMALS
  {
    themeId: 'animals',
    title: '5 Animals from Basic Shapes',
    category: 'animals-creatures',
    duration: 120,
    description: 'Build 5 animals using only circles, ovals, triangles, and lines: owl, cat, fox, bear, and frog.',
    tip: 'Block the head and torso masses first before drawing paws or feathers.',
    visualReferenceId: 'ref-animal-basic-construction',
  },
  {
    themeId: 'animals',
    title: 'Expressive Snouts & Ears',
    category: 'character',
    duration: 120,
    description: 'Draw 6 quick animal facial expressions by altering ear perking and snout mouth curves.',
    tip: 'Alert ears point forward; relaxed ears droop sideways.',
    visualReferenceId: 'ref-animal-basic-construction',
  },

  // EVERYDAY LIFE
  {
    themeId: 'everyday-life',
    title: 'Desk Object Basic Shapes',
    category: 'observation',
    duration: 120,
    description: 'Choose 3 objects near you (mug, keys, pen) and draw their basic geometric bounding boxes and cylinders.',
    tip: 'Look for ellipses and corners before adding logos or details.',
    visualReferenceId: 'ref-still-life-construction',
  },
  {
    themeId: 'everyday-life',
    title: 'Folded Clothing Gestures',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw 5 swift sketches of folded fabric, a hanging coat, or shoelaces.',
    tip: 'Capture tension points where cloth wrinkles pull from.',
    visualReferenceId: 'ref-still-life-construction',
  },

  // SCI-FI
  {
    themeId: 'sci-fi',
    title: '5 Robot Head Silhouettes',
    category: 'shapes',
    duration: 120,
    description: 'Draw 5 geometric robot heads: dome with antenna, blocky CRT monitor, angled visor, and camera turret.',
    tip: 'Combine sharp rectangles with smooth circular lenses.',
    visualReferenceId: 'ref-sci-fi-shapes',
  },
  {
    themeId: 'sci-fi',
    title: 'Circuit & Seam Lines',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw a grid of high-tech panel seams, junction dots, and 45-degree angled wire traces.',
    tip: 'Use crisp straight lines and distinct junction nodes.',
    visualReferenceId: 'ref-sci-fi-shapes',
  },

  // SPOOKY
  {
    themeId: 'spooky',
    title: '5 Ghost & Shadow Shapes',
    category: 'shapes',
    duration: 120,
    description: 'Draw 5 different sheet ghosts and shadow silhouettes with wavy hems and expressive hollow eyes.',
    tip: 'Let gravity pull the hem folds naturally down.',
    visualReferenceId: 'ref-spooky-silhouettes',
  },
  {
    themeId: 'spooky',
    title: 'Candle Drips & Flame Curves',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw 3 melting candles with wax droplets trickling down and flickering teardrop flames.',
    tip: 'Flick the flame tip with a swift release.',
    visualReferenceId: 'ref-spooky-silhouettes',
  },

  // GAMES
  {
    themeId: 'games',
    title: '5 Inventory Item Sprites',
    category: 'shapes',
    duration: 120,
    description: 'Draw 5 iconic gaming items: shield, heart container, magic potion, gem, and broadsword.',
    tip: 'Enclose each in a neat bounding badge.',
    visualReferenceId: 'ref-game-props',
  },
  {
    themeId: 'games',
    title: 'Boss Silhouette Contrast',
    category: 'character',
    duration: 120,
    description: 'Draw an exaggerated, bulky boss silhouette towering over a tiny hero stick figure.',
    tip: 'Huge scale contrast creates immediate gaming drama.',
    visualReferenceId: 'ref-game-props',
  },

  // STORYBOOK
  {
    themeId: 'storybook',
    title: 'Whimsical Cottage Silhouettes',
    category: 'environment',
    duration: 120,
    description: 'Draw 4 cozy storybook cottages with curved roofs, smoking chimneys, and round arched doorways.',
    tip: 'Slight bows and soft corners feel warm and illustrated.',
    visualReferenceId: 'ref-storybook-cottage',
  },
  {
    themeId: 'storybook',
    title: 'Vintage Page Flourishes',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw 4 curling corner flourishes and botanical filigree suitable for a fairy-tale margin.',
    tip: 'Spiral outward smoothly from a thick root to a delicate tip.',
    visualReferenceId: 'ref-storybook-cottage',
  },

  // ABSTRACT
  {
    themeId: 'abstract',
    title: 'Geometric Intersections',
    category: 'shapes',
    duration: 120,
    description: 'Overlap 3 triangles, 2 circles, and a wavy stripe. Darken only the overlapping intersections.',
    tip: 'Observe how negative space transforms into positive shape.',
    visualReferenceId: 'ref-balance-contrast',
  },
  {
    themeId: 'abstract',
    title: 'Rhythmic Zigzag Waves',
    category: 'marks-lines',
    duration: 120,
    description: 'Draw a high-energy pattern of tight zigzags gradually expanding into wide, lazy waves.',
    tip: 'Change your hand speed to change mark frequency.',
    visualReferenceId: 'ref-balance-contrast',
  },

  // PLACES
  {
    themeId: 'places',
    title: '3 Building Facade Heights',
    category: 'environment',
    duration: 120,
    description: 'Draw 3 building facades side by side with differing roof shapes: triangular pediment, flat cornice, and arch.',
    tip: 'Stagger window rhythms across stories.',
    visualReferenceId: 'ref-places-architecture',
  },
  {
    themeId: 'places',
    title: 'Receding Street Path',
    category: 'environment',
    duration: 120,
    description: 'Draw two lines converging toward a horizon dot, with cross lines getting closer together as they recede.',
    tip: 'Compress distance visually to create instant depth.',
    visualReferenceId: 'ref-places-architecture',
  },
];
