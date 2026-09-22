export interface ChallengeItem {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  prompt: string;
  tip: string;
  timeSuggestion: string;
  visualCue?: string;
}

export const CHALLENGES: ChallengeItem[] = [
  // EASY
  {
    id: 'easy-1',
    difficulty: 'easy',
    title: 'Oversized Accessory',
    description: 'Break the ice by playing with exaggerated scale and simple shapes.',
    prompt: 'Draw a round, friendly creature wearing an oversized backpack or hat.',
    tip: 'Make the accessory at least twice the size of the character. Don\'t worry about realistic gravity.',
    timeSuggestion: '5–10 min',
    visualCue: 'Round body + giant rectangle or dome strapped on top',
  },
  {
    id: 'easy-2',
    difficulty: 'easy',
    title: 'Curious Household Plant',
    description: 'Combine two familiar things in an impossible way.',
    prompt: 'Draw a potted plant that grows everyday household objects instead of leaves.',
    tip: 'Keys, lightbulbs, teacups, or tiny clocks all make great leaves.',
    timeSuggestion: '5–10 min',
    visualCue: 'Sturdy stem branching into small recognisable objects',
  },
  {
    id: 'easy-3',
    difficulty: 'easy',
    title: 'Cozy Rest',
    description: 'Capture a moment of pure calm and small scale.',
    prompt: 'Draw a tiny animal taking a peaceful nap inside a mug or teacup.',
    tip: 'Draw the curved lip of the mug first, then tuck the curled sleeping shape inside.',
    timeSuggestion: '5 min',
    visualCue: 'Simple cylinder + soft curled-up crescent shape inside',
  },
  {
    id: 'easy-4',
    difficulty: 'easy',
    title: 'Three Geometric Emotions',
    description: 'Express feeling using minimal lines.',
    prompt: 'Draw three faces side-by-side using a circle, a triangle, and a square.',
    tip: 'Change only the eyebrows and mouth line to shift the entire mood.',
    timeSuggestion: '5 min',
    visualCue: 'Three outline shapes side by side with expressive dots and dashes',
  },

  // MEDIUM
  {
    id: 'medium-1',
    difficulty: 'medium',
    title: 'Silent Storytelling',
    description: 'Tell an entire story through posture, accessories, and expression.',
    prompt: 'Create a character who tells a story without using words.',
    tip: 'Think about what they are carrying, what is patched or worn, and where they are looking.',
    timeSuggestion: '10–15 min',
    visualCue: 'Clear posture + 2 tell-tale props that hint at what just happened',
  },
  {
    id: 'medium-2',
    difficulty: 'medium',
    title: 'The Boot Cottage',
    description: 'Turn an everyday worn object into an architectural home.',
    prompt: 'Draw a cozy, bustling home built entirely inside an old weathered boot.',
    tip: 'Cut small windows into the leather, turn the laces into a rope ladder, and put a chimney on the toe.',
    timeSuggestion: '10–15 min',
    visualCue: 'Boot silhouette with windows, door in the heel, and rooftop chimney',
  },
  {
    id: 'medium-3',
    difficulty: 'medium',
    title: 'Repurposed Machine',
    description: 'Design a friendly android built from salvaged vintage appliances.',
    prompt: 'Design a robot whose parts are clearly repurposed vintage kitchen tools.',
    tip: 'Toaster torso, whisk hands, measuring cup feet, or a kettle for a head.',
    timeSuggestion: '10–15 min',
    visualCue: 'Blocky appliance forms connected with loose joints and wires',
  },
  {
    id: 'medium-4',
    difficulty: 'medium',
    title: 'The Stone Wall',
    description: 'Explore interaction and relationship across an obstacle.',
    prompt: 'Draw two characters having a silent conversation across an old stone wall.',
    tip: 'One can be peeking over, while the other passes a mysterious package under a loose stone.',
    timeSuggestion: '10–15 min',
    visualCue: 'Horizontal stone texture dividing the page with characters on either side',
  },

  // HARD
  {
    id: 'hard-1',
    difficulty: 'hard',
    title: 'The High Gate',
    description: 'Push your depth perception and environmental scale.',
    prompt: 'Draw a traveler arriving at an ancient gateway viewed from high above (bird\'s-eye view).',
    tip: 'Look down from the clouds: the gate\'s top arch is large, the traveler is small, with long dramatic cast shadows.',
    timeSuggestion: '15–20 min',
    visualCue: 'Top of wall broad and prominent, ground receding below with elongated shadow',
  },
  {
    id: 'hard-2',
    difficulty: 'hard',
    title: 'Split Gravity',
    description: 'Challenge standard perspective by introducing two horizons.',
    prompt: 'Draw a room or landscape where gravity pulls in two different directions simultaneously.',
    tip: 'Pick one wall or ceiling and treat it as a second floor with its own furniture and walking figures.',
    timeSuggestion: '15–20 min',
    visualCue: 'Perpendicular surfaces both hosting grounded objects',
  },
  {
    id: 'hard-3',
    difficulty: 'hard',
    title: 'Pure Silhouette & Shadow',
    description: 'Communicate drama and emotion strictly using dark shapes.',
    prompt: 'Draw a mysterious meeting scene captured only through high-contrast silhouettes and cast shadows.',
    tip: 'No internal facial features: focus entirely on outer silhouettes, long coats, and atmospheric light.',
    timeSuggestion: '15–20 min',
    visualCue: 'Solid filled silhouettes against a pale paper background',
  },
  {
    id: 'hard-4',
    difficulty: 'hard',
    title: 'Intricate Creature Mechanism',
    description: 'Combine natural skeletal anatomy with clockwork precision.',
    prompt: 'Draw a beetle or bird composed of visible internal brass gears and delicate springs.',
    tip: 'Cut away half the outer shell to reveal interlocking circles, cogs, and clock hands.',
    timeSuggestion: '15–20 min',
    visualCue: 'Smooth organic contour on one side, exposed interlocking gears on the other',
  },
];

export function getChallengesByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): ChallengeItem[] {
  return CHALLENGES.filter((c) => c.difficulty === difficulty);
}

export function getRandomChallenge(difficulty?: 'easy' | 'medium' | 'hard'): ChallengeItem {
  const pool = difficulty ? getChallengesByDifficulty(difficulty) : CHALLENGES;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}
