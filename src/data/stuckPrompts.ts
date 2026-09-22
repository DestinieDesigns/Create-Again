export interface StuckSuggestion {
  id: string;
  text: string;
  subtext?: string;
  visualReferenceId?: string;
}

export const STUCK_SUGGESTIONS: StuckSuggestion[] = [
  {
    id: "stuck-1",
    text: "Add something behind your drawing.",
    subtext: "Even a simple wall, horizon, or floating shape.",
    visualReferenceId: "ref-environment-depth",
  },
  {
    id: "stuck-2",
    text: "Connect two things with a dotted line.",
    subtext: "It gives the eye a playful path to travel along.",
  },
  {
    id: "stuck-3",
    text: "Add something tiny in an empty area.",
    subtext: "A pebble, a button, a solitary dot, or a crumb.",
  },
  {
    id: "stuck-4",
    text: "Add something above everything else.",
    subtext: "A star, a cloud, an antenna, or a floating lantern.",
  },
  {
    id: "stuck-5",
    text: "Give one thing a friendly or curious face.",
    subtext: "Just two dots for eyes and a small curved line.",
    visualReferenceId: "ref-facial-expressions",
  },
  {
    id: "stuck-6",
    text: "Add a shape you haven't used yet on your page.",
    subtext: "If you have circles, draw a sharp triangle or hexagon.",
    visualReferenceId: "ref-head-shapes",
  },
  {
    id: "stuck-7",
    text: "Make two things notice each other.",
    subtext: "Draw their gaze or an imaginary line of attention between them.",
  },
  {
    id: "stuck-8",
    text: "Make one line much thicker than all the others.",
    subtext: "Bold strokes create instant depth and personality.",
    visualReferenceId: "ref-typography-hierarchy",
  },
  {
    id: "stuck-9",
    text: "Give your subject a shadow or ground to stand on.",
    subtext: "Anchor it so it feels real in its own little world.",
    visualReferenceId: "ref-weight-shift",
  },
  {
    id: "stuck-10",
    text: "Turn a shape into an opening or doorway.",
    subtext: "Show what might be peeking out from inside.",
  },
  {
    id: "stuck-11",
    text: "Add three quick diagonal hatch lines somewhere.",
    subtext: "Instant texture without having to overthink.",
  },
  {
    id: "stuck-12",
    text: "Draw a little spiral somewhere quiet.",
    subtext: "Let your pen wander without judging where it goes.",
  },
];

export type StuckRescueIdea = StuckSuggestion;

export function getStuckRescueIdea(category?: string, themeId?: string): StuckRescueIdea {
  const index = Math.floor(Math.random() * STUCK_SUGGESTIONS.length);
  return STUCK_SUGGESTIONS[index];
}

