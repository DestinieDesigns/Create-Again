import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Flame,
  Dices,
  HelpCircle,
  Trophy,
  ArrowRight,
  User,
  Trees,
  Footprints,
  Coffee,
  Rocket,
  Ghost,
  Gamepad2,
  BookMarked,
  Shapes,
  MapPin,
  CircleOff,
} from 'lucide-react';
import { THEMES } from '../../data/themes';

interface CreationChooserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode: (
    mode:
      | 'what-comes-next'
      | 'chibi-journey'
      | 'character-design'
      | 'warm-up'
      | 'chaos'
      | 'dont-know'
      | 'pathways'
      | 'character-progression'
      | 'master-sheet'
      | 'part-library',
    themeId?: string
  ) => void;
}

export const CreationChooserModal: React.FC<CreationChooserModalProps> = ({
  isOpen,
  onClose,
  onSelectMode,
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>('none');

  if (!isOpen) return null;

  const modes = [
    {
      id: 'what-comes-next' as const,
      title: 'What Comes Next?',
      subtitle: "Don't know what you're drawing? Good.",
      description: 'One mystery instruction at a time. Draw it on your paper, then discover what comes next.',
      kicker: '01 · Signature',
      buttonLabel: 'Start Mystery',
      icon: Sparkles,
    },
    {
      id: 'chibi-journey' as const,
      title: 'Chibi Character Atelier',
      subtitle: 'Build an original character from scratch.',
      description: 'Guided step-by-step character journey from idea and silhouette to clothing, personality, and master model sheet.',
      kicker: '02 · Workshop',
      buttonLabel: 'Build Chibi',
      icon: Sparkles,
    },
    {
      id: 'dont-know' as const,
      title: "I Don't Know What to Draw",
      subtitle: 'Pick your vibe and start.',
      description: 'Gentle low-pressure prompts matched to your current energy level and available time.',
      kicker: '03 · Rescue',
      buttonLabel: 'Gentle Start',
      icon: HelpCircle,
    },
    {
      id: 'warm-up' as const,
      title: 'Hand Warm-Up',
      subtitle: 'Get your hand moving.',
      description: 'Quick 2-minute physical drawing exercises to loosen up and defeat the blank page.',
      kicker: '04 · Practice',
      buttonLabel: 'Warm Up',
      icon: Flame,
    },
    {
      id: 'chaos' as const,
      title: 'Creative Chaos',
      subtitle: 'Give me something unpredictable.',
      description: 'Unexpected combinations (Character + Setting + Object + Mood) to spark fresh ideas.',
      kicker: '05 · Experiment',
      buttonLabel: 'Surprise Me',
      icon: Dices,
    },
    {
      id: 'character-progression' as const,
      title: 'Skill Challenges',
      subtitle: 'Step-by-step missions.',
      description: 'Progressive character and composition lessons with clear visual reference diagrams.',
      kicker: '06 · Mastery',
      buttonLabel: 'Explore Skills',
      icon: Trophy,
    },
    {
      id: 'part-library' as const,
      title: 'Part Reference Library',
      subtitle: '197+ individual drawing references.',
      description: 'Explore isolated heads, angles, eyes, ears, mouths, hair textures, bodies, paws, boots, horns, and accessories.',
      kicker: '07 · Reference',
      buttonLabel: 'Browse Library',
      icon: Shapes,
    },
  ];

  const getThemeIcon = (themeId: string) => {
    switch (themeId) {
      case 'nature':
        return Trees;
      case 'fantasy':
        return Sparkles;
      case 'animals':
        return Footprints;
      case 'everyday':
        return Coffee;
      case 'scifi':
        return Rocket;
      case 'spooky':
        return Ghost;
      case 'games':
        return Gamepad2;
      case 'storybook':
        return BookMarked;
      case 'abstract':
        return Shapes;
      case 'places':
        return MapPin;
      case 'surprise':
        return Dices;
      case 'none':
      default:
        return CircleOff;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Creation Chooser"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#16171A]/60 backdrop-blur-xs animate-fadeIn"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E5DE] max-h-[92vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 sm:pb-5 border-b border-[#E5E5DE]">
          <div>
            <div className="text-[11px] font-mono-code font-semibold uppercase tracking-wider text-[#686862]">
              STUDIO FLOW CHOOSER
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16171A] tracking-tight mt-1">
              What do you feel like making?
            </h2>
            <p className="text-xs sm:text-sm text-[#686862] mt-1">
              Select a discipline or set a mood. Then put your device down and draw on paper.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#F4F4F0] text-[#686862] hover:text-[#16171A] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 -mt-2"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Activities Section */}
        <div className="mt-6">
          <div className="text-xs font-mono-code font-semibold uppercase tracking-wider text-[#686862] mb-3">
            DRAWING DISCIPLINES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {modes.map((mode) => {
              const Icon = mode.icon;
              return (
                <div
                  key={mode.id}
                  onClick={() => {
                    onSelectMode(mode.id, selectedThemeId);
                    onClose();
                  }}
                  className="group flex flex-col justify-between p-5 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] cursor-pointer transition-all shadow-2xs hover:shadow-xs min-h-[140px]"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#686862] mb-2">
                      <span className="font-mono-code text-[11px] font-semibold text-[#16171A]">
                        {mode.kicker}
                      </span>
                      <Icon className="w-4 h-4 text-[#8A8A82] group-hover:text-[#2752E7] transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#16171A] group-hover:text-[#2752E7] transition-colors">
                      {mode.title}
                    </h3>
                    <p className="text-xs text-[#686862] mt-1 leading-relaxed">
                      {mode.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0F0EB] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#16171A] group-hover:text-[#2752E7] transition-colors">
                      {mode.buttonLabel}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8A8A82] group-hover:text-[#2752E7] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Theme Selection Grid */}
        <div className="mt-8 pt-6 border-t border-[#E5E5DE]">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div>
              <div className="text-xs font-mono-code font-semibold uppercase tracking-wider text-[#686862]">
                CURATE THEME (OPTIONAL)
              </div>
              <p className="text-xs text-[#8A8A82] mt-0.5">
                Select a stylistic world to flavor prompts across your session
              </p>
            </div>
            {selectedThemeId !== 'none' && (
              <button
                onClick={() => setSelectedThemeId('none')}
                className="text-xs text-[#2752E7] font-semibold hover:underline"
              >
                Clear Theme
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {THEMES.map((theme) => {
              const ThemeIcon = getThemeIcon(theme.id);
              const isSelected = selectedThemeId === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-lg border text-left transition-all min-h-[46px] ${
                    isSelected
                      ? 'bg-[#16171A] text-white border-[#16171A] shadow-2xs'
                      : 'bg-white border-[#E5E5DE] text-[#16171A] hover:bg-[#F4F4F0]'
                  }`}
                >
                  <ThemeIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-[#686862]'}`} />
                  <div className="truncate">
                    <span className="block text-xs font-semibold truncate leading-tight">
                      {theme.name}
                    </span>
                    <span
                      className={`block text-[10px] truncate ${
                        isSelected ? 'text-white/70' : 'text-[#8A8A82]'
                      }`}
                    >
                      {theme.description.split('.')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
