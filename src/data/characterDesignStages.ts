import { VisualReference } from '../types/prompt';
import { VISUAL_REFERENCES } from './visualReferences';

export interface CharacterDesignStage {
  id: string;
  stageNumber: number;
  name: string;
  shortLabel: string;
  tagline: string;
  instruction: string;
  exampleDescription: string;
  whatToNotice: string;
  warmUp: string;
  challenge: string;
  visualReference: VisualReference;
  stuckNudges: [string, string, string]; // 3 escalating levels (Points 20, 21)
  tags: string[];
}

export interface CharacterSpark {
  archetype: string;
  silhouetteTip: string;
  quirk: string;
  mood: string;
  prop: string;
}

export const CHARACTER_SPARKS: CharacterSpark[] = [
  {
    archetype: 'Wandering Cartographer',
    silhouetteTip: 'A sturdy bean-shaped torso with an oversized satchel and rolled parchment tubes.',
    quirk: 'Always carries three vintage brass compasses that point in different directions.',
    mood: 'Quietly curious, squinting at the horizon.',
    prop: 'A tall wooden walking staff with measurement notches.',
  },
  {
    archetype: 'Gentle Mountain Forager',
    silhouetteTip: 'Chunky pear silhouette wearing thick knitted layers and heavy boots.',
    quirk: 'Keeps a sleepy hedgehog or tiny creature in their oversized front pocket.',
    mood: 'Warm, patient, and smiling to themselves.',
    prop: 'A woven basket overflowing with oversized wild mushrooms.',
  },
  {
    archetype: 'Clockwork Apprentice',
    silhouetteTip: 'Angular triangle silhouette with oversized goggles pushed up into messy hair.',
    quirk: 'Has oil smudges on one cheek and brass gears dangling from their belt.',
    mood: 'Determined, focused, perhaps a bit frazzled.',
    prop: 'A giant adjustable brass wrench carried like a companion.',
  },
  {
    archetype: 'Lighthouse Keeper',
    silhouetteTip: 'Tall, slender rectangular silhouette wrapped in a thick wool storm coat.',
    quirk: 'Wears mismatched wool socks and constantly listens to the wind.',
    mood: 'Calm, contemplative, and resilient.',
    prop: 'A glowing brass hurricane lantern with intricate stained glass panes.',
  },
  {
    archetype: 'Forest Tea Merchant',
    silhouetteTip: 'Round, soft circle silhouette with wide kimono sleeves.',
    quirk: 'Balances a delicate steaming ceramic teapot while traversing rocky trails.',
    mood: 'Cheerful, welcoming, and relaxed.',
    prop: 'A backpack rack fitted with tiny drawers and ceramic teacups.',
  },
  {
    archetype: 'Novice Sky-Glider',
    silhouetteTip: 'Lean, dynamic diagonal silhouette with an aerodynamic flight cap.',
    quirk: 'Wears a ridiculously long scarf that trails behind them like a kite tail.',
    mood: 'Brave, wide-eyed, slightly breathless from wind.',
    prop: 'Foldable wooden glider wings strapped across their shoulders.',
  },
];

export const CHARACTER_DESIGN_STAGES: CharacterDesignStage[] = [
  {
    id: 'stage-head',
    stageNumber: 1,
    name: 'Head Shapes & Silhouette',
    shortLabel: 'Head',
    tagline: 'Silhouettes and skull contours',
    instruction:
      'Draw a single bold head shape on your paper. Choose one distinct outline: boxy square, soft circle, upside-down triangle, oval, or pear shape. Leave the inside completely empty for now.',
    exampleDescription:
      'The outer contour of the skull establishes character archetype before any eyes or nose exist. A boxy head suggests solidity; a circle suggests softness or youth; a triangle suggests agility or cunning.',
    whatToNotice:
      'Notice how the jawline determines whether the character looks sturdy or delicate.',
    warmUp: 'Draw 3 quick head outlines in 15 seconds without lifting your pen.',
    challenge: 'Exaggerate the jawline so it makes up over half the entire skull volume.',
    visualReference: VISUAL_REFERENCES['ref-head-shapes'],
    stuckNudges: [
      'Start with a simple circle or box.',
      'Stretch one side of the shape so it’s wider at the bottom or top.',
      'Give it a chin: either blunt and flat, or pointed and sharp.',
    ],
    tags: ['head', 'silhouette', 'jaw', 'shape'],
  },
  {
    id: 'stage-face',
    stageNumber: 2,
    name: 'Facial Features & Placement',
    shortLabel: 'Face',
    tagline: 'Placement, eye spacing, and proportions',
    instruction:
      'Inside your head shape, lightly place the eyes, nose, and ears. Try clustering the eyes and nose unexpectedly low (making them look young or cute) or high up on the forehead.',
    exampleDescription:
      'Where you put the facial features matters more than how detailed they are. Spreading the eyes wide apart creates innocence or curiosity; placing them close together creates intensity.',
    whatToNotice:
      'Notice how changing the vertical eye-line completely changes the perceived age of your character.',
    warmUp: 'Draw 5 different pairs of eyes: dots, half-moons, rectangles, slits, and wide circles.',
    challenge: 'Place the nose and mouth tiny and right at the bottom edge of the chin.',
    visualReference: VISUAL_REFERENCES['ref-facial-expressions'],
    stuckNudges: [
      'Draw two simple dots for eyes and a small wedge for the nose.',
      'Move the eyes down to the lower third of the head shape.',
      'Add ears level with the eyes.',
    ],
    tags: ['face', 'eyes', 'nose', 'ears', 'proportions'],
  },
  {
    id: 'stage-hair',
    stageNumber: 3,
    name: 'Hair & Volume',
    shortLabel: 'Hair',
    tagline: 'Treating hair as big sculptural masses',
    instruction:
      'Give your character hair, a hat, horns, or a helmet. Do not draw individual strands—draw big, chunky silhouette shapes that break outside the skull line.',
    exampleDescription:
      'Think of hair like clay or folded cloth resting on top of the skull. Big geometric blocks make the character instantly recognizable from across the room.',
    whatToNotice:
      'Notice where the hair sits above the skull contour. Give it thickness and breathing room.',
    warmUp: 'Draw 3 wavy ribbons fluttering across the top of your page.',
    challenge: 'Design a hairstyle whose volume is twice as large as the head itself.',
    visualReference: VISUAL_REFERENCES['ref-head-shapes'],
    stuckNudges: [
      'Draw a cloud-like shape sitting on top of the head.',
      'Add two pointy clumps hanging down past the ears.',
      'Give one clump a sharp zigzag fringe across the forehead.',
    ],
    tags: ['hair', 'hat', 'volume', 'silhouette', 'ribbon'],
  },
  {
    id: 'stage-body',
    stageNumber: 4,
    name: 'Body Shapes & Build',
    shortLabel: 'Body',
    tagline: 'Contrasting torso masses and proportions',
    instruction:
      'Connect a torso beneath the head using one clear geometric mass: a bean shape, a sturdy barrel, a top-heavy triangle, or a slender pear. Keep it simple and solid.',
    exampleDescription:
      'The torso establishes posture, strength, and weight. A top-heavy torso reads as muscular or imposing; a pear shape reads as grounded, relaxed, or gentle.',
    whatToNotice:
      'Notice whether the torso leans forward, slouches back, or stands upright.',
    warmUp: 'Draw 3 bean shapes curving in different directions on your paper.',
    challenge: 'Draw the torso tilting slightly in the opposite direction of the head.',
    visualReference: VISUAL_REFERENCES['ref-body-proportions'],
    stuckNudges: [
      'Draw a kidney bean or egg shape right under the head.',
      'Decide if your character is tall and skinny or short and wide.',
      'Attach two simple pipe lines for neck and shoulders.',
    ],
    tags: ['torso', 'body', 'bean', 'proportions', 'weight'],
  },
  {
    id: 'stage-clothing',
    stageNumber: 5,
    name: 'Clothing, Folds & Props',
    shortLabel: 'Clothing',
    tagline: 'Costume silhouettes and storytelling layers',
    instruction:
      'Dress your character in distinctive attire: a heavy coat, apron, patched tunic, scarf, or armor plates. Add folds radiating from tension points like shoulders and elbows.',
    exampleDescription:
      'Clothing tells the viewer where this character lives and what they do. Add one memorable accessory: an oversized belt buckle, satchel, patched knee, or unusual collar.',
    whatToNotice:
      'Notice how loose fabric drapes with gravity toward the ground.',
    warmUp: 'Sketch a quick bottle, key, and pouch in 45 seconds.',
    challenge: 'Add an oversized accessory that tells an unexpected story about their day.',
    visualReference: VISUAL_REFERENCES['ref-character-props'],
    stuckNudges: [
      'Draw a thick collar or scarf around the neck.',
      'Add horizontal hem lines at the waist and sleeves.',
      'Drape a strap or belt diagonally across the chest.',
    ],
    tags: ['costume', 'clothing', 'fabric', 'folds', 'props'],
  },
  {
    id: 'stage-pose',
    stageNumber: 6,
    name: 'Pose & Line of Action',
    shortLabel: 'Pose',
    tagline: 'Dynamic gesture and physical weight',
    instruction:
      'Give your character limbs that follow a single sweeping curve. Have one foot firmly bearing their weight, or show them leaning against something, marching forward, or resting.',
    exampleDescription:
      'Even a standing character has energy. The line of action is an imaginary spine that swoops through the whole body, giving life and attitude to the gesture.',
    whatToNotice:
      'Notice whether the character feels balanced or dynamic. Check that the feet align with a ground plane.',
    warmUp: 'Draw 3 lightning bolts and turn each into a bent elbow or knee.',
    challenge: 'Have one leg carry all the weight while the other leg rests loosely on its tip.',
    visualReference: VISUAL_REFERENCES['ref-line-of-action'],
    stuckNudges: [
      'Draw one sweeping curved line from head to ground.',
      'Place feet at the bottom of this curve.',
      'Bend one arm at the elbow with hand on the hip.',
    ],
    tags: ['pose', 'gesture', 'line-of-action', 'stance', 'balance'],
  },
  {
    id: 'stage-expression',
    stageNumber: 7,
    name: 'Expression & Attitude',
    shortLabel: 'Expression',
    tagline: 'Eyebrow angles and mouth curvature',
    instruction:
      'Refine the face to show a clear emotion: stubborn determination, sleepy contentment, amused skepticism, or wide-eyed wonder. Adjust the eyebrow slant to match.',
    exampleDescription:
      'Eyebrows are the most expressive lines on a face. Angling them inward gives intensity or focus; raising the center creates vulnerability or concern; one raised brow gives skepticism.',
    whatToNotice:
      'Notice how slight angles in the eyebrows change the whole personality.',
    warmUp: 'Draw 6 simple curved mouth lines from deep frown to lopsided smirk.',
    challenge: 'Convey amusement using only the eyes and brow, keeping the mouth a neutral line.',
    visualReference: VISUAL_REFERENCES['ref-facial-expressions'],
    stuckNudges: [
      'Tilt the eyebrows slightly up or down in the middle.',
      'Draw the mouth curved slightly up on just one side.',
      'Add one tiny eyelid fold or squint crease.',
    ],
    tags: ['expression', 'mood', 'brows', 'mouth', 'eyes'],
  },
  {
    id: 'stage-personality',
    stageNumber: 8,
    name: 'Personality & Story Quirks',
    shortLabel: 'Personality',
    tagline: 'Tell a story without using words',
    instruction:
      'Add 2 or 3 tiny storytelling details that reveal who this character is: a bandaged thumb, a compass pinned to a lapel, a key hanging from a cord, or a nervous habit like tugging an ear.',
    exampleDescription:
      'Great character design invites questions. Why do they carry that particular trinket? Why is their sleeve torn? Visual clues bring a drawing to life.',
    whatToNotice:
      'Notice what questions the viewer might ask when looking at these small items.',
    warmUp: 'Doodle three tiny symbols: a star, a key, and an acorn.',
    challenge: 'Pair a tough or intimidating character with a delightfully gentle item.',
    visualReference: VISUAL_REFERENCES['ref-character-props'],
    stuckNudges: [
      'Draw a small trinket or badge pinned to their coat.',
      'Add a patch sewn onto a knee or elbow.',
      'Give them something they are holding or hiding in a pocket.',
    ],
    tags: ['personality', 'story', 'quirk', 'detail', 'trinket'],
  },
  {
    id: 'stage-scene',
    stageNumber: 9,
    name: 'Scene & Grounding',
    shortLabel: 'Scene',
    tagline: 'Grounding the character in their world',
    instruction:
      'Ground your character in physical space. Draw a subtle ground line beneath their feet, cast a small contact shadow, and sketch 1 or 2 environmental hints behind them (a tree, doorway, or lamp).',
    exampleDescription:
      'A character floating in blank white space feels like a diagram. Adding a shadow under their boots and a single background element makes them feel like a resident of a real world.',
    whatToNotice:
      'Notice how a small dark oval shadow right under the boots instantly roots the figure to the earth.',
    warmUp: 'Draw a ground line and shade 3 soft oval shadows resting upon it.',
    challenge: 'Have the character physically interact with the environment (e.g. leaning on a fence).',
    visualReference: VISUAL_REFERENCES['ref-weight-shift'],
    stuckNudges: [
      'Draw a horizontal line across the paper behind the feet.',
      'Add a small dark oval directly beneath each shoe.',
      'Sketch a simple wall, tree trunk, or rock on one side.',
    ],
    tags: ['scene', 'environment', 'ground', 'shadow', 'world'],
  },
];
