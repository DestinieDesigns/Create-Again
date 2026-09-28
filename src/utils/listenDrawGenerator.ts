import { ListenDrawActivityType, ListenDrawStep } from '../types/listenDraw';
import { MODE1_PROMPTS } from '../data/mode1Prompts';
import { CATEGORY_WARM_UPS } from '../data/warmUpExercises';
import { CHIBI_JOURNEY_STAGES } from '../data/chibiJourneyData';
import { CHIBI_VISUAL_REFERENCES } from '../data/chibiVisualReferences';
import { CREATIVE_CHAOS_POOLS } from '../data/creativeChaosPools';
import { getVisualReferenceById, VISUAL_REFERENCES } from '../data/visualReferences';
import { VisualReference } from '../types/visualReference';

/**
 * Generates an automated, hands-free sequence of steps for Listen & Draw mode.
 * Adapts to selected activity type and total duration.
 */
export function generateListenDrawSteps(
  activityType: ListenDrawActivityType,
  totalDurationSeconds: number,
  themeId?: string
): ListenDrawStep[] {
  switch (activityType) {
    case 'what-comes-next':
      return generateWhatComesNextSteps(totalDurationSeconds, themeId);
    case 'warm-up':
      return generateWarmUpSteps(totalDurationSeconds);
    case 'chibi':
      return generateChibiSteps(totalDurationSeconds);
    case 'creative-chaos':
      return generateChaosSteps(totalDurationSeconds);
    default:
      return generateWhatComesNextSteps(totalDurationSeconds, themeId);
  }
}

/**
 * 1. What Comes Next? — Signature incremental mystery drawing
 */
function generateWhatComesNextSteps(totalSeconds: number, themeId?: string): ListenDrawStep[] {
  // Determine step count: 5m = 3 steps (90s each + view/transitions), 10m = 5 steps (110s each), 20m = 8 steps (135s each), 30m = 10 steps (160s each)
  let targetStepCount = 4;
  if (totalSeconds <= 300) targetStepCount = 3;
  else if (totalSeconds <= 600) targetStepCount = 5;
  else if (totalSeconds <= 1200) targetStepCount = 7;
  else targetStepCount = 9;

  const creativeSecPerStep = Math.max(60, Math.floor((totalSeconds - targetStepCount * 12) / targetStepCount));

  // Find start, middle, and finish prompts
  const startPrompts = MODE1_PROMPTS.filter((p) => p.goodForBeginning || p.category === 'START');
  const midPrompts = MODE1_PROMPTS.filter((p) => p.goodForMiddle && p.visualReference);
  const endPrompts = MODE1_PROMPTS.filter((p) => p.goodForEnding || p.category === 'FINISH');

  const selectedPrompts: typeof MODE1_PROMPTS = [];

  // Start prompt
  const starter = startPrompts[Math.floor(Math.random() * startPrompts.length)] || MODE1_PROMPTS[0];
  selectedPrompts.push(starter);

  // Middle prompts (shuffled)
  const shuffledMid = [...midPrompts].sort(() => Math.random() - 0.5);
  for (let i = 0; i < targetStepCount - 2; i++) {
    if (shuffledMid[i]) {
      selectedPrompts.push(shuffledMid[i]);
    }
  }

  // End prompt
  const finisher = endPrompts[Math.floor(Math.random() * endPrompts.length)] || midPrompts[0];
  selectedPrompts.push(finisher);

  return selectedPrompts.map((p, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === selectedPrompts.length - 1;
    const visualRef = p.visualReference || (p.visualReferenceId ? getVisualReferenceById(p.visualReferenceId) : undefined) || VISUAL_REFERENCES['vr-shape-circle'];

    const noticeObservation = typeof p.whatToNotice === 'string'
      ? p.whatToNotice
      : Array.isArray(p.whatToNotice) && p.whatToNotice.length > 0
      ? p.whatToNotice[0]
      : 'Notice the basic shape and construction lines.';

    return {
      id: `lnd-wcn-${idx + 1}-${p.id}`,
      stepNumber: idx + 1,
      totalSteps: selectedPrompts.length,
      title: isFirst ? 'First Mark' : isLast ? 'Final Resolution' : `Mark ${idx + 1}`,
      promptText: p.text,
      instructionText: p.text + (p.subtext ? ` ${p.subtext}` : ''),
      explanation: p.explanation || 'Use this as an idea to inspire your next mark.',
      whatToNotice: noticeObservation,
      visualReference: visualRef,
      creativeDurationSeconds: creativeSecPerStep,
      viewingDurationSeconds: 6,
      audio: {
        referenceIntro: isFirst
          ? 'Welcome to Listen and Draw. Take a quick look at the first reference.'
          : 'Pick up your device for a quick look at the next reference.',
        referenceObservation: `Notice ${noticeObservation.toLowerCase()}. You do not need to copy it. Use the idea.`,
        putDeviceDownText: 'You have what you need. Now put the device down and pick up your pencil.',
        creativeInstruction: `${p.text} Go ahead.`,
        transitionText: isLast
          ? 'Time. That completes our drawing journey.'
          : 'Time. Nice, keep what you made. Let us add something unexpected.',
      },
    };
  });
}

/**
 * 2. Warm-Up — Physical hand loosening, rhythms, shapes
 */
function generateWarmUpSteps(totalSeconds: number): ListenDrawStep[] {
  let targetStepCount = 4;
  if (totalSeconds <= 300) targetStepCount = 3;
  else if (totalSeconds <= 600) targetStepCount = 4;
  else if (totalSeconds <= 1200) targetStepCount = 6;
  else targetStepCount = 8;

  const creativeSecPerStep = Math.max(50, Math.floor((totalSeconds - targetStepCount * 10) / targetStepCount));
  const exercises = [...CATEGORY_WARM_UPS].sort(() => Math.random() - 0.5).slice(0, targetStepCount);

  return exercises.map((ex, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === exercises.length - 1;
    const visualRef = ex.visualReferenceId ? getVisualReferenceById(ex.visualReferenceId) : VISUAL_REFERENCES['vr-line-types'] || VISUAL_REFERENCES['vr-shape-circle'];

    return {
      id: `lnd-wu-${idx + 1}-${ex.id}`,
      stepNumber: idx + 1,
      totalSteps: exercises.length,
      title: ex.title,
      promptText: ex.title,
      instructionText: ex.description,
      explanation: ex.tip,
      whatToNotice: ex.tip,
      visualReference: visualRef,
      creativeDurationSeconds: creativeSecPerStep,
      viewingDurationSeconds: 5,
      audio: {
        referenceIntro: isFirst
          ? 'Welcome to your hand warm-up. Take a quick look at this movement.'
          : 'Take a quick look at the next warm-up pattern.',
        referenceObservation: `Notice ${ex.tip.toLowerCase()}`,
        putDeviceDownText: 'Now put the device down. Keep your hand and shoulder relaxed.',
        creativeInstruction: `${ex.description} Go ahead.`,
        transitionText: isLast
          ? 'Time. Your hand is warmed up and ready.'
          : 'Time. Shake out your wrist. Let us move to the next exercise.',
      },
    };
  });
}

/**
 * 3. Chibi Character — Head, Face, Hair, Body, Accessories
 */
function generateChibiSteps(totalSeconds: number): ListenDrawStep[] {
  // Pick core stages: Silhouette/Head, Face/Eyes, Hair/Ears, Body, Accessories
  const stagesToUse = [
    {
      title: 'Head Silhouette',
      refKey: 'head',
      prompt: 'Draw a large, rounded head shape on your paper.',
      observation: 'the wide cheeks and compact jawline',
      instruction: 'Draw your chibi head foundation. Make it plump and gentle.',
    },
    {
      title: 'Facial Features',
      refKey: 'face',
      prompt: 'Add wide expressive eyes along the lower third of the head.',
      observation: 'the low eye placement which creates youthful chibi proportions',
      instruction: 'Add two large eyes and a tiny mouth low on the face.',
    },
    {
      title: 'Hair or Ears',
      refKey: 'hair',
      prompt: 'Give your character personality with chunky hair or animal ears.',
      observation: 'how hair is grouped into simple chunky clumps rather than individual strands',
      instruction: 'Draw chunky hair strands or cute animal ears framing the crown.',
    },
    {
      title: 'Compact Body',
      refKey: 'body',
      prompt: 'Add a small rounded body, no larger than the head.',
      observation: 'the one-to-one proportion between head height and body height',
      instruction: 'Draw a compact torso with soft rounded limbs.',
    },
    {
      title: 'Signature Accessory',
      refKey: 'accessories',
      prompt: 'Give your character one delightful item to wear or carry.',
      observation: 'how a single clear accessory tells the character’s whole story',
      instruction: 'Add a tiny satchel, hat, leaf, or tool for your character.',
    },
  ];

  const creativeSecPerStep = Math.max(60, Math.floor((totalSeconds - stagesToUse.length * 10) / stagesToUse.length));

  return stagesToUse.map((stage, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === stagesToUse.length - 1;
    const chibiVisual = CHIBI_VISUAL_REFERENCES[stage.refKey] || VISUAL_REFERENCES['vr-character-head-shape'];

    return {
      id: `lnd-chibi-${idx + 1}-${stage.refKey}`,
      stepNumber: idx + 1,
      totalSteps: stagesToUse.length,
      title: stage.title,
      promptText: stage.prompt,
      instructionText: stage.instruction,
      explanation: 'Focus on pure basic silhouettes and cheerful shapes.',
      whatToNotice: `Notice ${stage.observation}.`,
      visualReference: chibiVisual,
      creativeDurationSeconds: creativeSecPerStep,
      viewingDurationSeconds: 6,
      audio: {
        referenceIntro: isFirst
          ? 'Welcome to Listen and Draw Chibi. Take a quick look at the head construction.'
          : `Take a quick look at the reference for the ${stage.title.toLowerCase()}.`,
        referenceObservation: `Notice ${stage.observation}. You do not need to copy it exactly.`,
        putDeviceDownText: 'Now put the device down.',
        creativeInstruction: `${stage.instruction} Go ahead.`,
        transitionText: isLast
          ? 'Time. Your chibi character is complete.'
          : 'Time. Keep what you have. Let us add the next feature.',
      },
    };
  });
}

/**
 * 4. Creative Chaos — Surprising mashup of Character, Setting, and Unexpected Twist
 */
function generateChaosSteps(totalSeconds: number): ListenDrawStep[] {
  const characters = CREATIVE_CHAOS_POOLS.characters;
  const settings = CREATIVE_CHAOS_POOLS.settings;
  const objects = CREATIVE_CHAOS_POOLS.objects;
  const moods = CREATIVE_CHAOS_POOLS.moods;

  const char = characters[Math.floor(Math.random() * characters.length)];
  const set = settings[Math.floor(Math.random() * settings.length)];
  const obj = objects[Math.floor(Math.random() * objects.length)];
  const mood = moods[Math.floor(Math.random() * moods.length)];

  const chaosStepsData = [
    {
      title: 'The Character',
      prompt: `Draw the protagonist: ${char.label}.`,
      observation: 'how simple posture and silhouette establish the character immediately',
      instruction: `Draw ${char.label}. Keep the lines bold and spontaneous.`,
      visualRef: VISUAL_REFERENCES['vr-character-head-shape'] || VISUAL_REFERENCES['vr-shape-circle'],
    },
    {
      title: 'The Environment',
      prompt: `Place them in: ${set.label}.`,
      observation: 'how a few background horizon lines or props ground the figure',
      instruction: `Sketch background elements for ${set.label}. Give them a place to stand.`,
      visualRef: VISUAL_REFERENCES['vr-env-depth'] || VISUAL_REFERENCES['vr-perspective-1p'],
    },
    {
      title: 'The Unexpected Element',
      prompt: `Add an unexpected object: ${obj.label}.`,
      observation: 'how an unexpected object turns a drawing into a curious story',
      instruction: `Incorporate ${obj.label} into the scene. Let the character hold or react to it.`,
      visualRef: VISUAL_REFERENCES['vr-clothing-props'] || VISUAL_REFERENCES['vr-shape-cube'],
    },
    {
      title: 'The Atmosphere',
      prompt: `Bring in the mood: ${mood.label}.`,
      observation: 'how line weight and shading evoke mood and atmosphere',
      instruction: `Use shadows, texture, or expression to emphasize ${mood.label}.`,
      visualRef: VISUAL_REFERENCES['vr-texture-shading'] || VISUAL_REFERENCES['vr-character-expressions'],
    },
  ];

  const creativeSecPerStep = Math.max(60, Math.floor((totalSeconds - chaosStepsData.length * 10) / chaosStepsData.length));

  return chaosStepsData.map((st, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === chaosStepsData.length - 1;

    return {
      id: `lnd-chaos-${idx + 1}`,
      stepNumber: idx + 1,
      totalSteps: chaosStepsData.length,
      title: st.title,
      promptText: st.prompt,
      instructionText: st.instruction,
      explanation: 'Do not overthink the combination. Let the ideas collide on paper.',
      whatToNotice: `Notice ${st.observation}.`,
      visualReference: st.visualRef,
      creativeDurationSeconds: creativeSecPerStep,
      viewingDurationSeconds: 6,
      audio: {
        referenceIntro: isFirst
          ? `Welcome to Creative Chaos. Take a quick look at the first idea.`
          : `Pick up your device for the next twist.`,
        referenceObservation: `Notice ${st.observation}.`,
        putDeviceDownText: 'Now put the device down and let your imagination take over.',
        creativeInstruction: `${st.instruction} Go ahead.`,
        transitionText: isLast
          ? 'Time. Look at the chaotic world you created.'
          : 'Time. Keep what you have. Here comes the next twist.',
      },
    };
  });
}
