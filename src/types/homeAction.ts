export interface HomeAction {
  id: string;
  title: string;
  description: string;
  route?: string;
  action?: () => void;
  icon?: string;
  enabled?: boolean;
}

/**
 * Section 4 & 25: Primary Home Actions
 * The central choices on the Create Again Home screen.
 */
export const PRIMARY_HOME_ACTIONS: Omit<HomeAction, 'action'>[] = [
  {
    id: 'draw',
    title: 'Draw Something',
    description: 'Give me something to draw.',
  },
  {
    id: 'practice',
    title: 'Practice',
    description: 'Get your hand moving and build a skill.',
  },
  {
    id: 'listen-draw',
    title: 'Listen & Draw',
    description: 'Look when you need the reference. Listen when creating.',
  },
  {
    id: 'surprise',
    title: 'Surprise Me',
    description: 'Pick something for me.',
  },
  {
    id: 'no-idea',
    title: 'I Have No Idea',
    description: 'Help me figure out what to draw.',
  },
];
