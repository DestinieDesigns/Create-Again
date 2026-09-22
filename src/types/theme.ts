export interface CreativeTheme {
  id: string;
  name: string;
  description: string;
  icon: string;
  colorClass?: string;
  accentColor?: string;
  tags: string[];
  promptKeywords: string[];
  referenceCategories: string[];
  beginnerFriendly: boolean;
  active: boolean;
}

export type ThemeChoice = 'none' | 'surprise' | string;
