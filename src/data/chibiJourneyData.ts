import {
  ChibiJourneyStageId,
  ChibiStageDefinition,
  ChibiCharacter,
  StageChoiceItem,
} from '../types/chibi';

export const CHIBI_JOURNEY_STAGES: ChibiStageDefinition[] = [
  {
    id: 'idea',
    stageNumber: 1,
    title: 'Character Idea',
    friendlyQuestion: 'Who are you creating?',
    artTeacherNote:
      'Start with the broad spark. You don’t need every detail planned out yet—just pick an archetype that makes you smile.',
    whatToDrawPrompt:
      'Write this down at the top corner of your sketchbook page as your character seed.',
    choices: [
      { id: 'human', label: 'Human', sublabel: 'Expressive kid, explorer, or everyday hero', visualRefId: 'ref-type-human' },
      { id: 'animal-like', label: 'Animal-Like', sublabel: 'Fox, cat, bear, bunny, or hedgehog traits', visualRefId: 'ref-type-animal' },
      { id: 'fantasy', label: 'Fantasy Folk', sublabel: 'Elf, fairy, gnome, wizard, or mythical being', visualRefId: 'ref-type-fantasy' },
      { id: 'monster', label: 'Friendly Monster', sublabel: 'Fuzzy, fanged, one-eyed, or huggable blob', visualRefId: 'ref-type-monster' },
      { id: 'robot', label: 'Little Robot', sublabel: 'Clunky tin can, sleek android, or solar gadget', visualRefId: 'ref-type-robot' },
      { id: 'creature', label: 'Odd Creature', sublabel: 'Mushroom sprite, cloud dweller, or sea critter', visualRefId: 'ref-type-creature' },
      { id: 'object-character', label: 'Object Character', sublabel: 'Living teapot, walking toaster, or leafy potted plant', visualRefId: 'ref-type-object' },
      { id: 'magical-character', label: 'Magical Being', sublabel: 'Star-born spirit, moonlight wisp, or flame child', visualRefId: 'ref-type-magical' },
    ],
    allowCustom: true,
  },
  {
    id: 'theme',
    stageNumber: 2,
    title: 'Character Theme',
    friendlyQuestion: 'What kind of world does your character belong to?',
    artTeacherNote:
      'Theme acts as a gentle creative seasoning. It helps later choices feel cohesive without putting you in a creative box.',
    whatToDrawPrompt:
      'Make a tiny symbol in your sketchbook margin representing this theme (a teacup, a star, a leaf, a gear).',
    choices: [
      { id: 'cozy', label: 'Cozy & Warm', sublabel: 'Sweaters, mugs, bakeries, soft rainy mornings', visualRefId: 'ref-theme-cozy' },
      { id: 'nature', label: 'Wild Nature', sublabel: 'Mossy forests, hollowed trees, babbling creeks', visualRefId: 'ref-theme-nature' },
      { id: 'fantasy', label: 'High Fantasy', sublabel: 'Ancient castles, spellbooks, tavern fireplaces', visualRefId: 'ref-theme-fantasy' },
      { id: 'everyday', label: 'Everyday Life', sublabel: 'Schoolyards, subway stations, quiet bedrooms', visualRefId: 'ref-theme-everyday' },
      { id: 'spooky', label: 'Playful Spooky', sublabel: 'Cobwebs, gentle ghosts, pumpkin patches, bats', visualRefId: 'ref-theme-spooky' },
      { id: 'sci-fi', label: 'Sci-Fi & Future', sublabel: 'Hoverboards, starships, glowing neon pods', visualRefId: 'ref-theme-scifi' },
      { id: 'adventure', label: 'Big Adventure', sublabel: 'Treasure maps, compasses, rope bridges', visualRefId: 'ref-theme-adventure' },
      { id: 'games', label: 'Pixel & Arcade', sublabel: 'Retro consoles, 8-bit coins, portable screens', visualRefId: 'ref-theme-games' },
      { id: 'storybook', label: 'Folk Storybook', sublabel: 'Quill pens, woodcuts, fairy-tale lanterns', visualRefId: 'ref-theme-storybook' },
      { id: 'magical', label: 'Celestial Magic', sublabel: 'Moon crystals, floating orbs, shimmer clouds', visualRefId: 'ref-theme-magical' },
    ],
    allowCustom: true,
  },
  {
    id: 'silhouette',
    stageNumber: 3,
    title: 'Overall Silhouette',
    friendlyQuestion: 'What does your character look like from far away?',
    artTeacherNote:
      'The best chibi designs can be identified immediately from their pure black outline. Think big, bold, unmistakable geometric masses.',
    whatToDrawPrompt:
      'Fill in a small 2-inch solid dark blob thumbnail on your paper capturing only this outer shape.',
    choices: [
      { id: 'round', label: 'Soft Round', sublabel: 'A warm dumpling, ball, or balloon shape', visualRefId: 'ref-sil-round' },
      { id: 'tiny', label: 'Teeny-Tiny', sublabel: 'Compact, button-sized, and palm-of-the-hand small', visualRefId: 'ref-sil-tiny' },
      { id: 'tall', label: 'Lanky Chibi', sublabel: 'Slightly elongated neck or legs with round head', visualRefId: 'ref-sil-tall' },
      { id: 'wide', label: 'Chunky & Wide', sublabel: 'Squat, sturdy, and low center of gravity', visualRefId: 'ref-sil-wide' },
      { id: 'fluffy', label: 'Fluffy Cloud', sublabel: 'Cloud-like scalloped edges all around', visualRefId: 'ref-sil-fluffy' },
      { id: 'angular', label: 'Boxy & Angular', sublabel: 'Sharp corners, triangular planes, or geometric cuts', visualRefId: 'ref-sil-angular' },
      { id: 'top-heavy', label: 'Top-Heavy', sublabel: 'Giant round head tapering to tiny pin legs', visualRefId: 'ref-sil-topheavy' },
      { id: 'bottom-heavy', label: 'Pear / Bottom-Heavy', sublabel: 'Small head perched on a big pear or bell torso', visualRefId: 'ref-sil-bottomheavy' },
      { id: 'odd-unusual', label: 'Odd & Asymmetrical', sublabel: 'Slouching, lop-sided, or whimsical imbalance', visualRefId: 'ref-sil-unusual' },
    ],
    allowCustom: true,
  },
  {
    id: 'head',
    stageNumber: 4,
    title: 'Head Shape & Angle',
    friendlyQuestion: 'Let’s construct the skull foundation.',
    artTeacherNote:
      'Chibi heads are usually 1/2 to 1/3 of the entire character height. A tilt or angle adds instant life and charm.',
    whatToDrawPrompt:
      'Draw this head contour lightly with a circle or oval, then sketch light vertical and horizontal center lines.',
    choices: [
      { id: 'round', label: 'Classic Circle', sublabel: 'Perfect round ball with squishy cheek curves', visualRefId: 'ref-head-round' },
      { id: 'oval', label: 'Egg / Oval', sublabel: 'Gentle vertical or horizontal egg silhouette', visualRefId: 'ref-head-oval' },
      { id: 'wide', label: 'Wide Loaf', sublabel: 'Stretched horizontally like a fresh bread loaf', visualRefId: 'ref-head-wide' },
      { id: 'square', label: 'Rounded Cube', sublabel: 'Soft-cornered TV or marshmallow cube', visualRefId: 'ref-head-square' },
      { id: 'triangle', label: 'Inverted Triangle', sublabel: 'Broad forehead tapering to a cute tiny chin', visualRefId: 'ref-head-triangle' },
      { id: 'heart', label: 'Heart-Curved', sublabel: 'Puffy high cheeks with a soft pointed chin', visualRefId: 'ref-head-heart' },
      { id: 'fluffy', label: 'Cheek Puffs', sublabel: 'Tufts of cheek fluff protruding on both sides', visualRefId: 'ref-head-fluffy' },
      { id: 'animal-like', label: 'Muzzle Silhouette', sublabel: 'Subtle snout contour projecting slightly forward', visualRefId: 'ref-head-snout' },
    ],
    allowCustom: true,
    hasSubstages: true,
    substages: [
      {
        id: 'headAngle',
        label: 'Head Angle',
        question: 'Which way is your character facing?',
        choices: [
          { id: 'front', label: 'Direct Front', sublabel: 'Symmetrical, clear, and open', visualRefId: 'ref-angle-front' },
          { id: 'three-quarter-left', label: '3/4 Turn Left', sublabel: 'Dynamic, dimensional, and classic', visualRefId: 'ref-angle-34-left' },
          { id: 'three-quarter-right', label: '3/4 Turn Right', sublabel: 'Looking off-page with personality', visualRefId: 'ref-angle-34-right' },
          { id: 'side', label: 'Pure Side Profile', sublabel: 'Emphasizes cheek contour and nose curve', visualRefId: 'ref-angle-profile' },
          { id: 'tilted', label: 'Curious Head Tilt', sublabel: 'Playful angle showing alertness or confusion', visualRefId: 'ref-angle-tilt' },
          { id: 'looking-up', label: 'Looking Upward', sublabel: 'Cheeks lift, giving a sweet hopeful vibe', visualRefId: 'ref-angle-up' },
          { id: 'looking-down', label: 'Looking Downward', sublabel: 'Shy, quiet, or contemplative', visualRefId: 'ref-angle-down' },
        ],
      },
    ],
  },
  {
    id: 'face',
    stageNumber: 5,
    title: 'Facial Features',
    friendlyQuestion: 'Let’s give your character a face.',
    artTeacherNote:
      'In chibi drawing, placing features low on the skull makes them look youthful and cute. Spacing the eyes wide apart gives a calm, open gaze.',
    whatToDrawPrompt:
      'Sketch the eyes first along your horizontal guide line, then drop in the nose and mouth close together.',
    choices: [
      { id: 'large-sparkle', label: 'Large Sparkle Eyes', sublabel: 'Big glossy orbs with double highlight circles', visualRefId: 'ref-eye-sparkle' },
      { id: 'dot-bead', label: 'Simple Ink Dots', sublabel: 'Minimalist, vintage, and timelessly expressive', visualRefId: 'ref-eye-dot' },
      { id: 'sleepy-lids', label: 'Sleepy Half-Lids', sublabel: 'Relaxed, calm, unimpressed, or cozy', visualRefId: 'ref-eye-sleepy' },
      { id: 'curved-arcs', label: 'Happy Arcs (^_ ^)', sublabel: 'Pure joyous closed-eye crescent moons', visualRefId: 'ref-eye-arc' },
      { id: 'button-ovals', label: 'Tall Button Ovals', sublabel: 'Deep dark vertical jellybeans with a top shine', visualRefId: 'ref-eye-oval' },
      { id: 'wide-curious', label: 'Wide Curious Rings', sublabel: 'Open-eyed wonder taking in the whole world', visualRefId: 'ref-eye-wide' },
      { id: 'droopy-soft', label: 'Gentle Droopy Corners', sublabel: 'Soft, empathetic, mild-mannered, and kind', visualRefId: 'ref-eye-droop' },
      { id: 'angular-determined', label: 'Angular Determined', sublabel: 'Sharp upper lash line with fiery resolve', visualRefId: 'ref-eye-angular' },
    ],
    hasSubstages: true,
    substages: [
      {
        id: 'eyebrows',
        label: 'Eyebrows',
        question: 'What do the brows convey?',
        choices: [
          { id: 'neutral-soft', label: 'Soft Short Bars', sublabel: 'Gentle relaxed state', visualRefId: 'ref-brow-neutral' },
          { id: 'raised-wonder', label: 'High Arched Wonder', sublabel: 'Surprised or attentive', visualRefId: 'ref-brow-arched' },
          { id: 'worried-tilt', label: 'Worried Inward Slant', sublabel: 'Tender, timid, or concerned', visualRefId: 'ref-brow-worried' },
          { id: 'determined-angle', label: 'Determined V-Angle', sublabel: 'Feisty and ready for action', visualRefId: 'ref-brow-sharp' },
          { id: 'little-dots', label: 'Maro Dot Brows', sublabel: 'Traditional tiny circular spots', visualRefId: 'ref-brow-dots' },
        ],
      },
      {
        id: 'nose',
        label: 'Nose Style',
        question: 'How simple is the nose?',
        choices: [
          { id: 'tiny-dot', label: 'Single Speck Dot', sublabel: 'Minimal and unobtrusive', visualRefId: 'ref-nose-dot' },
          { id: 'tiny-triangle', label: 'Cute Wedge Triangle', sublabel: 'Soft geometric accent', visualRefId: 'ref-nose-tri' },
          { id: 'animal-button', label: 'Heart/T-bar Snout', sublabel: 'Perfect for critters and cubs', visualRefId: 'ref-nose-snout' },
          { id: 'no-nose', label: 'No Visible Nose', sublabel: 'Classic ultra-pure chibi convention', visualRefId: 'ref-nose-none' },
          { id: 'soft-line', label: 'Small Angle Tick', sublabel: 'Single delicate pencil mark', visualRefId: 'ref-nose-line' },
        ],
      },
      {
        id: 'mouth',
        label: 'Mouth & Smile',
        question: 'What expression sits on their mouth?',
        choices: [
          { id: 'tiny-smile', label: 'Gentle Dimple Smile', sublabel: 'A tiny upward curve in the center', visualRefId: 'ref-mouth-smile' },
          { id: 'cat-smile', label: 'Cat W-Smile (:3)', sublabel: 'Cheeky, cuddly, and sweet', visualRefId: 'ref-mouth-w' },
          { id: 'open-cheer', label: 'Open Bean Gasp / Cheer', sublabel: 'Side bean mouth caught mid-sentence', visualRefId: 'ref-mouth-open' },
          { id: 'flat-line', label: 'Straight Flat Line', sublabel: 'Poker-faced, stoic, or deadpan', visualRefId: 'ref-mouth-line' },
          { id: 'little-pout', label: 'Soft Downward Pout', sublabel: 'Timid, sleepy, or mildly stubborn', visualRefId: 'ref-mouth-pout' },
          { id: 'smirk-corner', label: 'Lopsided Half-Smirk', sublabel: 'Playful confidence', visualRefId: 'ref-mouth-smirk' },
        ],
      },
    ],
  },
  {
    id: 'hair',
    stageNumber: 6,
    title: 'Hair & Defining Features',
    friendlyQuestion: 'What frames their head or crowns their silhouette?',
    artTeacherNote:
      'Treat hair or head features as solid sculptural clumps rather than thousands of thin lines. Think chunky ribbons of clay.',
    whatToDrawPrompt:
      'Block out the big hairline shape extending past the skull perimeter before adding 2-3 strand divisions.',
    choices: [
      { id: 'fluffy-bangs', label: 'Fluffy Chunky Bangs', sublabel: 'Soft rounded locks falling across forehead', visualRefId: 'ref-hair-bangs' },
      { id: 'curly-mass', label: 'Cloud of Curls / Coils', sublabel: 'Big sculptural cluster of volume and texture', visualRefId: 'ref-hair-curls' },
      { id: 'short-spiky', label: 'Energetic Tufts', sublabel: 'Perky star-shaped tufts radiating outward', visualRefId: 'ref-hair-spiky' },
      { id: 'top-buns', label: 'Double Round Buns', sublabel: 'Playful dumplings perched high on top', visualRefId: 'ref-hair-buns' },
      { id: 'long-ribbons', label: 'Flowing Locks / Capelet Hair', sublabel: 'Drapes down past shoulders like ribbon fabric', visualRefId: 'ref-hair-flowing' },
      { id: 'animal-ears', label: 'Upright Animal Ears', sublabel: 'Fox, cat, or wolf ears nestled in the crown', visualRefId: 'ref-feat-ears' },
      { id: 'fantasy-horns', label: 'Curved Horns / Antlers', sublabel: 'Smooth spirals, dragon horns, or branch antlers', visualRefId: 'ref-feat-horns' },
      { id: 'robot-antenna', label: 'Antenna & Dial Ear-Pads', sublabel: 'Bouncy spring antenna or audio headset cups', visualRefId: 'ref-feat-antenna' },
      { id: 'smooth-crop', label: 'Clean Simple Crop', sublabel: 'Sleek rounded cap hugging the head curve', visualRefId: 'ref-hair-clean' },
    ],
    allowCustom: true,
  },
  {
    id: 'body',
    stageNumber: 7,
    title: 'Body Shape & Proportion',
    friendlyQuestion: 'Chibi bodies can be tiny, round, or bean-like.',
    artTeacherNote:
      'There is no "correct" chibi proportion! A 1:1 head-to-body ratio gives extreme cuteness; a 1:2 ratio allows more costume detail.',
    whatToDrawPrompt:
      'Draw the torso underneath the head. Notice how it relates: is it a bean, a gumdrop, or a rounded marshmallow?',
    choices: [
      { id: 'bean-torso', label: 'Curved Kidney Bean', sublabel: 'Flexible spine curve that tilts when standing', visualRefId: 'ref-body-bean' },
      { id: 'gumdrop-round', label: 'Gumdrop / Teardrop', sublabel: 'Wider at the hips, ultra-cuddly stability', visualRefId: 'ref-body-gumdrop' },
      { id: 'marshmallow-cube', label: 'Marshmallow Box', sublabel: 'Straight-sided, slightly plump and sturdy', visualRefId: 'ref-body-box' },
      { id: 'tiny-peg', label: 'Teeny-Tiny Peg', sublabel: 'Head dominates 70% of the entire character', visualRefId: 'ref-body-tiny' },
      { id: 'fluffy-cushion', label: 'Fluffy Round Pillow', sublabel: 'Soft torso without sharp body divisions', visualRefId: 'ref-body-pillow' },
      { id: 'slender-pear', label: 'Gentle Pear', sublabel: 'Narrow shoulders expanding into rounded tummy', visualRefId: 'ref-body-pear' },
    ],
    hasSubstages: true,
    substages: [
      {
        id: 'proportion',
        label: 'Head-to-Body Ratio',
        question: 'How big is the head compared to the body?',
        choices: [
          { id: 'huge-head-tiny-body', label: '1:1 Extreme Chibi', sublabel: 'Head equals the body and legs combined!', visualRefId: 'ref-prop-1to1' },
          { id: 'large-head-small-body', label: '1:1.5 Classic Chibi', sublabel: 'Head is large, body is compact and agile', visualRefId: 'ref-prop-classic' },
          { id: 'balanced-chibi', label: '1:2 Balanced Mini', sublabel: 'Plenty of room for pockets, belts, and folds', visualRefId: 'ref-prop-balanced' },
        ],
      },
    ],
  },
  {
    id: 'arms-hands',
    stageNumber: 8,
    title: 'Arms & Hands',
    friendlyQuestion: 'How does your character interact with their world?',
    artTeacherNote:
      'Chibi hands rarely need five realistic fingers. Simple rounded mittens or three soft stubby fingers read cleanly and look adorable.',
    whatToDrawPrompt:
      'Draw two simple arms attached at the top of the torso. Keep the joints soft or noodle-like.',
    choices: [
      { id: 'mitten-hands', label: 'Mittens (Thumb + Mass)', sublabel: 'One distinct thumb with a smooth curved palm', visualRefId: 'ref-hand-mitten' },
      { id: 'tiny-noodle', label: 'Noodle / Tube Arms', sublabel: 'Curved tubes that bend like flexible rubber hoses', visualRefId: 'ref-arm-noodle' },
      { id: 'soft-paws', label: 'Fluffy Paws / Toe Beans', sublabel: 'Padded animal paws with soft rounded pads', visualRefId: 'ref-hand-paws' },
      { id: 'three-finger', label: 'Three Stubby Fingers', sublabel: 'Simplified cartoon fingers for gripping objects', visualRefId: 'ref-hand-three' },
      { id: 'sleeves-tucked', label: 'Sweater Paws (Hidden Hands)', sublabel: 'Cuffs extend past knuckles; hands tucked inside', visualRefId: 'ref-hand-tucked' },
      { id: 'chunky-gloves', label: 'Chunky Explorer Gloves', sublabel: 'Sturdy padded cuffs ready for adventure', visualRefId: 'ref-hand-gloves' },
    ],
  },
  {
    id: 'legs-feet',
    stageNumber: 9,
    title: 'Legs & Feet',
    friendlyQuestion: 'What carries your character across the ground?',
    artTeacherNote:
      'Keep ankles simple or omit them entirely. Round shoe pebbles or tiny paws give immediate ground anchor.',
    whatToDrawPrompt:
      'Anchor the character to the ground by sketching both feet. Give them a tiny shadow ellipse beneath.',
    choices: [
      { id: 'pebble-shoes', label: 'Round Pebble Shoes', sublabel: 'Two simple dark bean silhouettes on the ground', visualRefId: 'ref-feet-pebble' },
      { id: 'chunky-boots', label: 'Chunky Explorer Boots', sublabel: 'Thick sole trim and rounded leather toes', visualRefId: 'ref-feet-boots' },
      { id: 'animal-paws', label: 'Soft Critter Feet', sublabel: 'Tiny digit pads that plant softly on the floor', visualRefId: 'ref-feet-paws' },
      { id: 'tiny-stubs', label: 'Tapered Stubby Pegs', sublabel: 'Legs taper straight down to cute pinpoint tips', visualRefId: 'ref-feet-stubs' },
      { id: 'cozy-slippers', label: 'Bunny / Padded Slippers', sublabel: 'Fluffy household slip-ons with critter ears', visualRefId: 'ref-feet-slippers' },
      { id: 'sneakers-socks', label: 'High-Top Sneakers & Socks', sublabel: 'Casual athletic shoes with lace tick marks', visualRefId: 'ref-feet-sneakers' },
    ],
  },
  {
    id: 'clothing',
    stageNumber: 10,
    title: 'Clothing & Layering',
    friendlyQuestion: 'What does your character wear?',
    artTeacherNote:
      'Layering makes a character feel lived-in! Oversized garments (big sweaters, puffy scarves, wide robes) contrast beautifully with tiny bodies.',
    whatToDrawPrompt:
      'Wrap clothes around your character’s body lines. Show fabric overhang where cuffs and hems drop past the joints.',
    choices: [
      { id: 'oversized-sweater', label: 'Oversized Knit Sweater', sublabel: 'Slouchy shoulders, thick rolled neck collar', visualRefId: 'ref-cloth-sweater' },
      { id: 'hoodie-shorts', label: 'Cozy Pocket Hoodie', sublabel: 'Big hood draped on shoulders and a kangaroo pocket', visualRefId: 'ref-cloth-hoodie' },
      { id: 'overalls-tee', label: 'Denim Garden Overalls', sublabel: 'Buckles, chest pocket, and rolled pant cuffs', visualRefId: 'ref-cloth-overalls' },
      { id: 'traveler-cloak', label: 'Traveler Cloak & Clasp', sublabel: 'Flowing hooded cape pinned with a brooch', visualRefId: 'ref-cloth-cloak' },
      { id: 'wizard-robe', label: 'Spellcaster Robe', sublabel: 'Star-stitched hem with flared bell sleeves', visualRefId: 'ref-cloth-robe' },
      { id: 'scifi-suit', label: 'Futuristic Jumpsuit', sublabel: 'Utility harness, knee pads, and glowing seam lines', visualRefId: 'ref-cloth-scifi' },
      { id: 'pajama-onesie', label: 'Critter Onesie', sublabel: 'Full-body plush suit with hood ears and a tail flap', visualRefId: 'ref-cloth-onesie' },
      { id: 'skirt-blazer', label: 'School Uniform & Pleats', sublabel: 'Neat lapel collar, necktie, and pleated skirt/shorts', visualRefId: 'ref-cloth-uniform' },
    ],
    allowCustom: true,
  },
  {
    id: 'accessories',
    stageNumber: 11,
    title: 'Accessories & Carried Items',
    friendlyQuestion: 'What does your character keep close?',
    artTeacherNote:
      'Choose one primary accessory that reveals their hobby or goal. A single clear prop tells more story than ten cluttered ones.',
    whatToDrawPrompt:
      'Place this item in their hand, slung over a shoulder, or resting on their back.',
    choices: [
      { id: 'messenger-bag', label: 'Stuffed Messenger Bag / Backpack', sublabel: 'Buckles bursting with notes and supplies', visualRefId: 'ref-acc-bag' },
      { id: 'warm-mug', label: 'Steaming Ceramic Mug', sublabel: 'Warm tea or cocoa with curling steam vapors', visualRefId: 'ref-acc-mug' },
      { id: 'magic-wand', label: 'Carved Branch Wand / Staff', sublabel: 'Knotted wood topped with a crystal wisp', visualRefId: 'ref-acc-wand' },
      { id: 'headphones', label: 'Big Over-Ear Headphones', sublabel: 'Cushioned earcups resting around the neck or ears', visualRefId: 'ref-acc-headphones' },
      { id: 'handheld-game', label: 'Handheld Retro Console', sublabel: 'Pocket game device with a glowing screen', visualRefId: 'ref-acc-console' },
      { id: 'sketchbook-pencil', label: 'Worn Sketchbook & Giant Pencil', sublabel: 'Elastic bookmark ribbon and wooden pencil', visualRefId: 'ref-acc-book' },
      { id: 'lantern', label: 'Brass Firefly Lantern', sublabel: 'Glowing warm cage shedding soft light', visualRefId: 'ref-acc-lantern' },
      { id: 'plushie', label: 'Tattered Pocket Plushie', sublabel: 'Beloved stuffed toy with button eyes', visualRefId: 'ref-acc-plushie' },
      { id: 'round-glasses', label: 'Big Round Wire Glasses', sublabel: 'Magnifies their curious eyes charmingly', visualRefId: 'ref-acc-glasses' },
    ],
    allowCustom: true,
  },
  {
    id: 'personality',
    stageNumber: 12,
    title: 'Character Personality',
    friendlyQuestion: 'Who is this character at heart?',
    artTeacherNote:
      'Personality is what transforms a design into a living creature. It will direct how they stand, where they look, and how they react.',
    whatToDrawPrompt:
      'Write down 2 words describing their personality right next to their name tag.',
    choices: [
      { id: 'shy-timid', label: 'Shy & Thoughtful', sublabel: 'Observant, quiet, moves softly, easily startled', visualRefId: 'ref-pers-shy' },
      { id: 'cheerful-optimist', label: 'Bubbly & Cheerful', sublabel: 'Bouncing on heels, quick to laugh and wave', visualRefId: 'ref-pers-cheerful' },
      { id: 'curious-explorer', label: 'Insatiably Curious', sublabel: 'Sniffing around corners, poking at mysteries', visualRefId: 'ref-pers-curious' },
      { id: 'sleepy-cozy', label: 'Sleepy & Unhurried', sublabel: 'Yawning, loves naps, perpetually cozy', visualRefId: 'ref-pers-sleepy' },
      { id: 'mischievous-trickster', label: 'Mischievous & Clever', sublabel: 'Hiding a prank, sideways grin, scheming', visualRefId: 'ref-pers-mischief' },
      { id: 'brave-stubborn', label: 'Brave & Stubborn', sublabel: 'Fists clenched, stands ground, defends friends', visualRefId: 'ref-pers-brave' },
      { id: 'gentle-nurturer', label: 'Gentle & Caring', sublabel: 'Shares snacks, protects seedlings, listens deeply', visualRefId: 'ref-pers-gentle' },
      { id: 'eccentric-chaotic', label: 'Oddball & Inventive', sublabel: 'Collects strange shiny pebbles, builds gizmos', visualRefId: 'ref-pers-chaotic' },
    ],
    allowCustom: true,
  },
  {
    id: 'pose',
    stageNumber: 13,
    title: 'Characteristic Pose',
    friendlyQuestion: 'How does their body naturally settle?',
    artTeacherNote:
      'Start simple! A line of action—a gentle S-curve or C-curve running from head to toe—breathes energy into the figure.',
    whatToDrawPrompt:
      'Draw a light line of action across your page first, then build the head and torso along that curve.',
    choices: [
      { id: 'standing-hands-hips', label: 'Proud Stand (Hands on Hips)', sublabel: 'Feet planted wide, chin tilted upward', visualRefId: 'ref-pose-proud' },
      { id: 'tucked-pigeon-toe', label: 'Shy Stance (Tucked & Pigeon-Toed)', sublabel: 'Toes pointed inward, elbows hugged to body', visualRefId: 'ref-pose-shy' },
      { id: 'sitting-crosslegged', label: 'Sitting Cross-Legged / Floor Chill', sublabel: 'Settled low on the floor with knees folded', visualRefId: 'ref-pose-sit' },
      { id: 'leaning-forward', label: 'Leaning Forward on Tiptoes', sublabel: 'Peering closely at something intriguing', visualRefId: 'ref-pose-lean' },
      { id: 'perched-crouch', label: 'Crouched on a Rock / Stool', sublabel: 'Compact ball ready to spring or observe', visualRefId: 'ref-pose-crouch' },
      { id: 'carefree-walk', label: 'Bouncing Mid-Stride Walk', sublabel: 'One foot lifted forward, arms swinging lightly', visualRefId: 'ref-pose-walk' },
    ],
  },
  {
    id: 'action',
    stageNumber: 14,
    title: 'Everyday Action',
    friendlyQuestion: 'Give your character something to do right now.',
    artTeacherNote:
      'A character doing an action is always more fun to draw than a stiff statue. Connect their action to their prop and theme.',
    whatToDrawPrompt:
      'Sketch them mid-motion: catching, holding, stirring, or examining an item.',
    choices: [
      { id: 'sipping-mug', label: 'Sipping Carefully with Both Hands', sublabel: 'Steam warming their nose as they blow gently', visualRefId: 'ref-act-sip' },
      { id: 'reading-tucked', label: 'Lost in an Enormous Book', sublabel: 'Book covers half their torso; eyes scanning lines', visualRefId: 'ref-act-read' },
      { id: 'investigating-bug', label: 'Examining a Tiny Mystery', sublabel: 'Squatting low with nose two inches from a critter', visualRefId: 'ref-act-investigate' },
      { id: 'carrying-oversized', label: 'Carrying Something Much Too Big', sublabel: 'Leaning back to balance a giant package or loaf', visualRefId: 'ref-act-carry' },
      { id: 'drawing-intense', label: 'Sketching with Utter Focus', sublabel: 'Tongue slightly out, pencil flying across paper', visualRefId: 'ref-act-draw' },
      { id: 'napping-curled', label: 'Curled Up Asleep', sublabel: 'Tucked inside a hood or blanket like a cat', visualRefId: 'ref-act-nap' },
      { id: 'triumphant-wave', label: 'Waving Enthusiastically to You', sublabel: 'Arm high overhead, big welcoming greeting', visualRefId: 'ref-act-wave' },
      { id: 'peeking-corner', label: 'Peeking Around a Corner', sublabel: 'Only one eye and fingers visible around an edge', visualRefId: 'ref-act-peek' },
    ],
  },
  {
    id: 'expression-body',
    stageNumber: 15,
    title: 'Whole-Body Emotion',
    friendlyQuestion: 'Express emotion through the entire body, not just the face.',
    artTeacherNote:
      'When surprised, shoulders lift, fingers splay, and the whole body stiffens! Teach your lines to echo the emotion from ear to toe.',
    whatToDrawPrompt:
      'Notice: are the shoulders hunched or open? Are the hands clenched or limp? Echo this emotion throughout.',
    choices: [
      { id: 'wide-eyed-wonder', label: 'Speechless Wonder', sublabel: 'Dropped jaw, floating step, eyes wide as saucers', visualRefId: 'ref-exp-wonder' },
      { id: 'giggling-delight', label: 'Bursting with Giggles', sublabel: 'Hand pressed to mouth, eyes squeezed shut', visualRefId: 'ref-exp-giggle' },
      { id: 'comical-panic', label: 'Startled / Comical Shock', sublabel: 'Hair bristling, arms throwing upward in alarm', visualRefId: 'ref-exp-shock' },
      { id: 'quiet-contentment', label: 'Deep Peace & Warmth', sublabel: 'Soft smile, drooping eyelids, relaxed shoulders', visualRefId: 'ref-exp-content' },
      { id: 'stubborn-pout', label: 'Determined Little Grudge', sublabel: 'Puffed cheeks, folded arms, staring sideways', visualRefId: 'ref-exp-pout' },
      { id: 'puzzled-scratch', label: 'Head-Scratching Confusion', sublabel: 'One brow raised, hand scratching ear in thought', visualRefId: 'ref-exp-puzzled' },
    ],
  },
  {
    id: 'world',
    stageNumber: 16,
    title: 'Their World & Environment',
    friendlyQuestion: 'Where does your character live?',
    artTeacherNote:
      'You don’t need an entire landscape. Just 2-3 background hints (a floorboard seam, a giant mushroom cap, a distant window) give them home.',
    whatToDrawPrompt:
      'Draw a simple ground plane and 1-2 architectural or nature props framing your character.',
    choices: [
      { id: 'cozy-attic-bedroom', label: 'Cozy Attic Under the Eaves', sublabel: 'Sloped wooden ceiling, floor cushions, starry skylight', visualRefId: 'ref-world-attic' },
      { id: 'giant-mossy-forest', label: 'Giant Forest Floor', sublabel: 'Towering ferns, clover leaves, and hollow bark logs', visualRefId: 'ref-world-forest' },
      { id: 'corner-bakery-cafe', label: 'Neighborhood Corner Cafe', sublabel: 'Pastry display dome, steaming kettle, brick wall', visualRefId: 'ref-world-cafe' },
      { id: 'rainy-subway-stop', label: 'Rainy City Bus Stop', sublabel: 'Reflective wet pavement, umbrella, glowing streetlamp', visualRefId: 'ref-world-bus' },
      { id: 'apothecary-workshop', label: 'Herb & Potion Workshop', sublabel: 'Glass jars with dried berries, bundles of lavender', visualRefId: 'ref-world-potions' },
      { id: 'orbital-greenhouse', label: 'Orbital Space Greenhouse', sublabel: 'Curved glass pod showing Earth in the starry dark', visualRefId: 'ref-world-space' },
      { id: 'hidden-library-nook', label: 'Ancient Library Staircase', sublabel: 'Stacks of leather-bound folios taller than walls', visualRefId: 'ref-world-library' },
      { id: 'sunlit-tidepool', label: 'Coastal Tidepool Shore', sublabel: 'Smooth sea glass, salt air, barnacled driftwood', visualRefId: 'ref-world-beach' },
    ],
    allowCustom: true,
  },
  {
    id: 'companion',
    stageNumber: 17,
    title: 'Companion or Mascot',
    friendlyQuestion: 'Who or what accompanies them?',
    artTeacherNote:
      'A companion creates instant dialogue! Even a simple pet frog or a floating brass bell gives your character someone to react to.',
    whatToDrawPrompt:
      'Draw this little companion perched on their shoulder, tucked in a pocket, or walking beside them.',
    choices: [
      { id: 'pocket-critter', label: 'Pocket Critter (Frog, Mouse, Beetle)', sublabel: 'Tiny palm-sized buddy resting on their shoulder', visualRefId: 'ref-comp-frog' },
      { id: 'floating-wisp', label: 'Floating Spark / Will-o’-the-Wisp', sublabel: 'Gentle glowing flame orb with curious eyes', visualRefId: 'ref-comp-wisp' },
      { id: 'mini-clockwork', label: 'Tiny Clockwork Automaton', sublabel: 'Key in its back, scampering along on brass gears', visualRefId: 'ref-comp-bot' },
      { id: 'loyal-hound-cat', label: 'Chubby Cat / Scruffy Pup', sublabel: 'Faithful pet trotting along with a tail wag', visualRefId: 'ref-comp-cat' },
      { id: 'living-plant-pot', label: 'Sprouting Potted Sprout', sublabel: 'Two leafy arms wave from inside a terracotta cup', visualRefId: 'ref-comp-plant' },
      { id: 'winged-moth-fairy', label: 'Plump Luna Moth / Fairy', sublabel: 'Dusting sparkles as it flutters around their head', visualRefId: 'ref-comp-moth' },
      { id: 'solo-adventurer', label: 'Solo Adventurer (No Companion)', sublabel: 'Loves solitary wanderings and peace', visualRefId: 'ref-comp-solo' },
    ],
    allowCustom: true,
  },
  {
    id: 'story-moment',
    stageNumber: 18,
    title: 'A Tiny Story Moment',
    friendlyQuestion: 'What unexpected thing just happened?',
    artTeacherNote:
      'Stories live in the small moments. Give your character a problem, a discovery, or a small triumph to react to.',
    whatToDrawPrompt:
      'In a 3x3 inch thumbnail box, draw this exact snapshot moment as a single-panel comic.',
    choices: [
      { id: 'found-glowing-key', label: 'They found a mysterious glowing key', sublabel: 'Neither of them has seen a door that matches it.', visualRefId: 'ref-story-key' },
      { id: 'lost-favorite-item', label: 'Their favorite item tumbled down a hole', sublabel: 'Now they have to find a way to fish it back up.', visualRefId: 'ref-story-lost' },
      { id: 'unexpected-rain', label: 'Caught in a sudden shower with one giant leaf', sublabel: 'Sharing the shelter with their companion.', visualRefId: 'ref-story-rain' },
      { id: 'delivered-special-package', label: 'Delivering a mysterious sealed letter', sublabel: 'The wax seal has a magical wax insignia.', visualRefId: 'ref-story-letter' },
      { id: 'discovered-hidden-door', label: 'Discovered a tiny door in a tree trunk', sublabel: 'Warm light is shining from beneath the threshold.', visualRefId: 'ref-story-door' },
      { id: 'shared-secret-snack', label: 'Sharing the last warm pastry together', sublabel: 'Dividing it carefully down the middle.', visualRefId: 'ref-story-snack' },
    ],
    allowCustom: true,
  },
  {
    id: 'name-colors',
    stageNumber: 19,
    title: 'Name & Color Palette Notes',
    friendlyQuestion: 'What is their name, and what colors feel right?',
    artTeacherNote:
      'Limit your color scheme to 2-3 main colors plus 1 accent. Chibi designs pop best when colors are harmonious and uncluttered.',
    whatToDrawPrompt:
      'In the corner of your page, swatch 3 small circles of color and hand-letter their name proudly.',
    choices: [
      { id: 'earthy-forest', label: 'Earthy Moss & Acorn', sublabel: 'Sage green, toasted chestnut, warm cream, rust orange', visualRefId: 'ref-pal-earthy' },
      { id: 'cozy-tea', label: 'Cozy Tea & Honey', sublabel: 'Warm ochre, soft cinnamon, milky beige, dusty rose', visualRefId: 'ref-pal-tea' },
      { id: 'pastel-sky', label: 'Pastel Lavender & Sky', sublabel: 'Soft periwinkle, blush pink, pale mint, lemon butter', visualRefId: 'ref-pal-pastel' },
      { id: 'night-celestial', label: 'Midnight Blue & Gold', sublabel: 'Deep indigo, starry silver, amber gold, plum purple', visualRefId: 'ref-pal-celestial' },
      { id: 'warm-sunset', label: 'Sunset Tangerine & Berry', sublabel: 'Warm coral, marigold, cranberry, soft plum', visualRefId: 'ref-pal-sunset' },
      { id: 'monochrome-sepia', label: 'Classic Sepia & Ink', sublabel: 'Warm walnut ink tones, crisp paper white, wash grays', visualRefId: 'ref-pal-sepia' },
    ],
    allowCustom: true,
  },
  {
    id: 'character-sheet',
    stageNumber: 20,
    title: 'The Final Character Sheet',
    friendlyQuestion: 'You built a character from scratch!',
    artTeacherNote:
      'A character model sheet is how animation studios and comic artists keep a character consistent. You now have everything to draw them in full glory!',
    whatToDrawPrompt:
      'Divide a full clean sketchbook spread into the sections below and draw your character alive.',
    choices: [],
  },
];

// Contextual Name Generator suggestions based on theme and character type
export const CHIBI_NAME_POOLS: Record<string, string[]> = {
  cozy: ['Bramble', 'Pippin', 'Mochi', 'Waffles', 'Nutmeg', 'Clover', 'Biscuit', 'Oatley', 'Penny', 'Barnaby'],
  nature: ['Fern', 'Moss', 'Twig', 'Acorn', 'Bramble', 'Rowan', 'Juniper', 'Sprout', 'Hazel', 'Cricket'],
  fantasy: ['Aria', 'Kaelen', 'Zephyr', 'Pip', 'Elidor', 'Rune', 'Fable', 'Tilly', 'Bram', 'Orin'],
  scifi: ['Pixel', 'Gizmo', 'Byte', 'Nova', 'Sprocket', 'Orion', 'Echo', 'Zip', 'Astra', 'Bolt'],
  spooky: ['Cobweb', 'Pumkin', 'Spook', 'Cinders', 'Bones', 'Willow', 'Gloom', 'Casper', 'Midnight', 'Poe'],
  everyday: ['Sammy', 'Leo', 'Maya', 'Nico', 'Toby', 'Ellie', 'Max', 'Chloe', 'Kai', 'Robin'],
  games: ['Dash', 'Glitch', 'Spark', 'Combo', 'Chip', 'Quest', 'Button', 'Link', 'Jumper', 'Rookie'],
  storybook: ['Barnaby', 'Penelope', 'Arthur', 'Gwendolyn', 'Felix', 'Rosie', 'Theodore', 'Winnie', 'Jasper', 'Hattie'],
  magical: ['Stardust', 'Lumi', 'Aura', 'Celeste', 'Mirren', 'Sol', 'Vesper', 'Glimmer', 'Astrid', 'Halo'],
};

// "CHOOSE FOR ME" intelligent recommendation algorithm
export function getCompatibleChoiceForStage(
  stageId: ChibiJourneyStageId,
  currentCharacter: ChibiCharacter,
  substageId?: string
): { id: string; label: string; customText?: string } {
  const stage = CHIBI_JOURNEY_STAGES.find((s) => s.id === stageId);
  if (!stage) return { id: 'default', label: 'Default' };

  if (substageId && stage.substages) {
    const sub = stage.substages.find((s) => s.id === substageId);
    if (sub && sub.choices.length > 0) {
      const idx = Math.floor(Math.random() * sub.choices.length);
      return { id: sub.choices[idx].id, label: sub.choices[idx].label };
    }
  }

  // Theme & Personality weighted preferences
  const theme = currentCharacter.theme || 'cozy';
  const personality = currentCharacter.personality || 'curious-explorer';
  const charType = currentCharacter.type || 'human';

  // Specific smart defaults for key stages
  if (stageId === 'clothing') {
    if (theme === 'cozy') return { id: 'oversized-sweater', label: 'Oversized Knit Sweater' };
    if (theme === 'fantasy') return { id: 'traveler-cloak', label: 'Traveler Cloak & Clasp' };
    if (theme === 'sci-fi') return { id: 'scifi-suit', label: 'Futuristic Jumpsuit' };
    if (theme === 'nature') return { id: 'overalls-tee', label: 'Denim Garden Overalls' };
    if (theme === 'everyday') return { id: 'hoodie-shorts', label: 'Cozy Pocket Hoodie' };
  }

  if (stageId === 'accessories') {
    if (personality === 'shy-timid') return { id: 'warm-mug', label: 'Steaming Ceramic Mug' };
    if (personality === 'curious-explorer') return { id: 'messenger-bag', label: 'Stuffed Messenger Bag / Backpack' };
    if (personality === 'sleepy-cozy') return { id: 'plushie', label: 'Tattered Pocket Plushie' };
    if (theme === 'fantasy') return { id: 'lantern', label: 'Brass Firefly Lantern' };
    if (theme === 'games') return { id: 'handheld-game', label: 'Handheld Retro Console' };
  }

  if (stageId === 'pose') {
    if (personality === 'shy-timid') return { id: 'tucked-pigeon-toe', label: 'Shy Stance (Tucked & Pigeon-Toed)' };
    if (personality === 'brave-stubborn') return { id: 'standing-hands-hips', label: 'Proud Stand (Hands on Hips)' };
    if (personality === 'curious-explorer') return { id: 'leaning-forward', label: 'Leaning Forward on Tiptoes' };
    if (personality === 'sleepy-cozy') return { id: 'sitting-crosslegged', label: 'Sitting Cross-Legged / Floor Chill' };
  }

  if (stageId === 'action') {
    if (personality === 'shy-timid') return { id: 'reading-tucked', label: 'Lost in an Enormous Book' };
    if (personality === 'curious-explorer') return { id: 'investigating-bug', label: 'Examining a Tiny Mystery' };
    if (personality === 'sleepy-cozy') return { id: 'napping-curled', label: 'Curled Up Asleep' };
    if (personality === 'cheerful-optimist') return { id: 'triumphant-wave', label: 'Waving Enthusiastically to You' };
  }

  if (stageId === 'hair') {
    if (charType === 'animal-like') return { id: 'animal-ears', label: 'Upright Animal Ears' };
    if (charType === 'robot') return { id: 'robot-antenna', label: 'Antenna & Dial Ear-Pads' };
    if (charType === 'fantasy') return { id: 'fantasy-horns', label: 'Curved Horns / Antlers' };
  }

  // General random choice among current stage choices
  if (stage.choices.length > 0) {
    const randomIndex = Math.floor(Math.random() * stage.choices.length);
    const chosen = stage.choices[randomIndex];
    return { id: chosen.id, label: chosen.label };
  }

  return { id: 'custom', label: 'Custom' };
}

// Name generator helper
export function generateChibiName(theme: string = 'cozy'): string {
  const pool = CHIBI_NAME_POOLS[theme] || CHIBI_NAME_POOLS['cozy'];
  return pool[Math.floor(Math.random() * pool.length)];
}
