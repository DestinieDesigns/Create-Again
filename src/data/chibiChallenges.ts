export interface ChibiChallenge {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  artRule: string;
  warmUpPrompt: string;
  sketchbookGoal: string;
  tags: string[];
}

export const CHIBI_CHALLENGES: ChibiChallenge[] = [
  {
    id: 'ch-01',
    number: 1,
    title: 'Only Three Shapes',
    subtitle: 'Construct an entire living figure with just 1 circle, 1 triangle, and 1 square',
    description:
      'Choose one primary shape for the head, one for the torso, and one for their main accessory or silhouette. Do not add organic curves until the three geometric foundations are locked.',
    artRule: 'Every limb and feature must trace back to one of the 3 base shapes.',
    warmUpPrompt: 'Draw 3 circles, 3 triangles, and 3 squares overlapping in 60 seconds.',
    sketchbookGoal: 'One clean chibi character built strictly from the 3-shape rule.',
    tags: ['silhouette', 'shapes', 'geometry', 'foundation'],
  },
  {
    id: 'ch-02',
    number: 2,
    title: 'Shy Without Sadness',
    subtitle: 'Convey timidity through posture and body language alone',
    description:
      'Keep the mouth neutral or gently smiling! Do not rely on teary eyes or downward frowns. Use tucked elbows, inward-angled feet, a tilted head, and hands clutching an item to reveal shyness.',
    artRule: 'The mouth must not be a downturned frown.',
    warmUpPrompt: 'Draw 3 pairs of feet turned inward with knees knocking softly.',
    sketchbookGoal: 'A sweet, unmistakably shy character with a warm or gentle expression.',
    tags: ['personality', 'body-language', 'subtlety', 'posture'],
  },
  {
    id: 'ch-03',
    number: 3,
    title: 'The Unusual Silhouette',
    subtitle: 'Break away from the standard round ball head',
    description:
      'Design a chibi with an unexpected silhouette: top-heavy anvil head, bell-bottom body, asymmetrical slouch, or scalloped cloud contour.',
    artRule: 'From 10 feet away, their silhouette must be instantly distinguishable from any normal cartoon.',
    warmUpPrompt: 'Paint or fill 4 solid black blob silhouettes with your pen.',
    sketchbookGoal: 'An unconventional chibi whose pure silhouette tells a story.',
    tags: ['silhouette', 'bold', 'asymmetry'],
  },
  {
    id: 'ch-04',
    number: 4,
    title: 'Contrasting Duo',
    subtitle: 'Design two chibi companions who physically contrast each other in every way',
    description:
      'Tall & squat, sharp & round, hyperactive & sleepy. When standing side-by-side, their shapes, poses, and clothing should create immediate comedic chemistry.',
    artRule: 'If Character A is made of curves, Character B must be made of straight lines.',
    warmUpPrompt: 'Draw a tiny pebble standing next to a tall toothpick.',
    sketchbookGoal: 'A pair of chibi friends reacting to each other on one page spread.',
    tags: ['duo', 'contrast', 'composition', 'chemistry'],
  },
  {
    id: 'ch-05',
    number: 5,
    title: 'Two Colors Only',
    subtitle: 'Maximum impact with strict color discipline',
    description:
      'Pick exactly one dark ink tone (e.g. walnut brown or deep navy) and one vibrant pop accent (e.g. marigold yellow or coral red). Let the paper white serve as your third tone.',
    artRule: 'No other markers, colored pencils, or inks allowed.',
    warmUpPrompt: 'Swatch your 2 chosen colors next to each other to see how they harmonize.',
    sketchbookGoal: 'A punchy, graphic character illustration using the 2-color constraint.',
    tags: ['color', 'palette', 'graphic', 'contrast'],
  },
  {
    id: 'ch-06',
    number: 6,
    title: 'Built Around One Prop',
    subtitle: 'Let a single accessory dictate their entire costume and posture',
    description:
      'Start with one oversized object: a giant vintage camera, a massive key, an enormous baker’s rolling pin, or a glowing brass lantern. Build the character around holding or hauling it.',
    artRule: 'The prop must be at least 60% the size of the character’s torso.',
    warmUpPrompt: 'Sketch 3 different ways to carry a heavy, awkward box.',
    sketchbookGoal: 'A character whose story and struggle are defined by this one beloved item.',
    tags: ['prop', 'action', 'storytelling', 'weight'],
  },
  {
    id: 'ch-07',
    number: 7,
    title: 'Personality Through Clothing',
    subtitle: 'Wear, tears, patches, and fabric drape as character backstory',
    description:
      'Show who they are before they even speak: rolled-up sleeves, patched knees from climbing trees, pockets overflowing with clover leaves, or an oversized scarf wrapped three times around.',
    artRule: 'Include at least two specific clothing details that hint at their daily routine.',
    warmUpPrompt: 'Draw 3 different pocket shapes stuffed with tiny mystery objects.',
    sketchbookGoal: 'A character whose clothes feel worn, loved, and lived-in.',
    tags: ['clothing', 'costume', 'fabric', 'details'],
  },
  {
    id: 'ch-08',
    number: 8,
    title: 'Character & Their Pet',
    subtitle: 'A miniature creature that mirrors or contrasts their master',
    description:
      'Design a pocket-sized creature (a grumpy toad, a bouncy puffball, a tiny flying manta ray) that shares a special interaction with your main chibi character.',
    artRule: 'Show physical touch between them (perched on head, snoozing in hood, or high-fiving).',
    warmUpPrompt: 'Draw a tiny frog sitting on a mushroom cap in 30 seconds.',
    sketchbookGoal: 'A heartwarming duo showing companionship.',
    tags: ['companion', 'creature', 'interaction', 'pet'],
  },
  {
    id: 'ch-09',
    number: 9,
    title: 'Belonging in a Strange World',
    subtitle: 'How anatomy and gear adapt to an exotic climate',
    description:
      'Create a chibi native to an unusual place: a cloud kingdom, an underwater bubble city, an eternal autumn forest, or a neon clockwork cavern.',
    artRule: 'Their design must include 1 functional feature suited for their environment.',
    warmUpPrompt: 'Draw 2 background elements (a floating rock or crystal cluster).',
    sketchbookGoal: 'A character who feels completely at home in an extraordinary setting.',
    tags: ['worldbuilding', 'environment', 'adaptation'],
  },
  {
    id: 'ch-10',
    number: 10,
    title: 'Story Without Words',
    subtitle: 'A single-panel scene that immediately reveals what just occurred',
    description:
      'Place your character in a clear narrative snapshot: looking down at spilled paint, holding up a sparkling treasure with jaw open, or tip-toeing past a sleeping giant.',
    artRule: 'No speech bubbles, text captions, or labels allowed.',
    warmUpPrompt: 'Draw 3 small arrows indicating motion or sound direction.',
    sketchbookGoal: 'A wordless visual story that brings a smile to the viewer.',
    tags: ['narrative', 'comic', 'visual-storytelling'],
  },
];
