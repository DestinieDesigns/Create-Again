export interface CreativeAffirmation {
  id: string;
  quote: string;
  author?: string;
  focus: 'courage' | 'play' | 'process' | 'presence' | 'curiosity';
}

export const CREATIVE_AFFIRMATIONS: CreativeAffirmation[] = [
  {
    id: 'aff-1',
    quote: "You don't have to draw well to draw honestly.",
    author: 'Sketchbook Wisdom',
    focus: 'courage',
  },
  {
    id: 'aff-2',
    quote: 'The first line breaks the fear; the rest is just play.',
    author: 'Studio Reminder',
    focus: 'play',
  },
  {
    id: 'aff-3',
    quote: 'Every masterwork started as an uncertain smudge on blank paper.',
    author: 'Creative Truth',
    focus: 'courage',
  },
  {
    id: 'aff-4',
    quote: 'There are no mistakes on paper, only unexpected detours.',
    author: 'Artistic Principle',
    focus: 'process',
  },
  {
    id: 'aff-5',
    quote: 'Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.',
    author: 'Scott Adams',
    focus: 'curiosity',
  },
  {
    id: 'aff-6',
    quote: 'Lower your expectations for the outcome and raise your curiosity for the process.',
    author: 'Daily Practice',
    focus: 'process',
  },
  {
    id: 'aff-7',
    quote: 'Your sketchbook is a playground, not an exhibition gallery.',
    author: 'Creative Freedom',
    focus: 'play',
  },
  {
    id: 'aff-8',
    quote: 'Draw what you see, not what you think you should see.',
    author: 'Observational Eye',
    focus: 'presence',
  },
  {
    id: 'aff-9',
    quote: 'Ten minutes of joyful scribbling is worth more than hours of waiting for inspiration.',
    author: 'Momentum',
    focus: 'process',
  },
  {
    id: 'aff-10',
    quote: 'A blank page is not an exam—it is an open conversation waiting for your voice.',
    author: 'Create Again',
    focus: 'presence',
  },
  {
    id: 'aff-11',
    quote: 'Let your hand move before your inner critic wakes up.',
    author: 'Morning Habit',
    focus: 'courage',
  },
  {
    id: 'aff-12',
    quote: 'The joy is in the friction of pencil against paper.',
    author: 'Sensory Art',
    focus: 'play',
  },
];
