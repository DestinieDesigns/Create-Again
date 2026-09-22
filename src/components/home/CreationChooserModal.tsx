import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Flame,
  Dices,
  HelpCircle,
  Trophy,
  ArrowRight,
  Compass,
  Palette,
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
      | 'warm-up'
      | 'chaos'
      | 'dont-know'
      | 'pathways'
      | 'character-progression'
      | 'master-sheet',
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
      title: 'WHAT COMES NEXT?',
      subtitle: "Don't know what you're drawing? Good.",
      description: 'One mystery instruction at a time. Draw it on your paper, then see what comes next.',
      badge: 'Signature',
      badgeColor: 'bg-[#E06D53] text-white',
      buttonLabel: 'START MYSTERY',
      icon: Sparkles,
    },
    {
      id: 'warm-up' as const,
      title: 'WARM UP',
      subtitle: 'Get your hand moving.',
      description: 'Quick 2-minute physical drawing exercises to loosen up and defeat the blank page.',
      badge: 'Quick Practice',
      badgeColor: 'bg-[#DDA15E] text-[#2D2723]',
      buttonLabel: 'WARM UP',
      icon: Flame,
    },
    {
      id: 'chaos' as const,
      title: 'CREATIVE CHAOS',
      subtitle: 'Give me something weird.',
      description: 'Unexpected combinations (Character + Setting + Object + Mood) to spark ideas.',
      badge: 'Surprise',
      badgeColor: 'bg-[#606C38] text-white',
      buttonLabel: 'SURPRISE ME',
      icon: Dices,
    },
    {
      id: 'dont-know' as const,
      title: "I DON'T KNOW WHAT TO DRAW",
      subtitle: 'Pick your vibe and start.',
      description: 'Gentle low-pressure prompts matched to your current energy level and time.',
      badge: 'Gentle Start',
      badgeColor: 'bg-[#8F8175] text-white',
      buttonLabel: 'GENTLE START',
      icon: HelpCircle,
    },
    {
      id: 'character-progression' as const,
      title: 'CHALLENGE ME',
      subtitle: 'Step-by-step skill missions.',
      description: 'Progressive character and composition lessons with clear visual reference diagrams.',
      badge: 'Skill Lessons',
      badgeColor: 'bg-[#2A9D8F] text-white',
      buttonLabel: 'EXPLORE SKILLS',
      icon: Trophy,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-3xl bg-[#FCFAF6] rounded-3xl p-5 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 sm:pb-5 border-b border-[#E8E0D5]">
          <div>
            <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
              Choose Your Flow
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight mt-1">
              What do you feel like making?
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6E63] font-handwriting text-lg sm:text-xl mt-0.5">
              Pick an activity, or set a mood. Then put your device down and draw.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 -mt-2"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Activities Section */}
        <div className="mt-5">
          <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-3">
            WHAT DO YOU FEEL LIKE MAKING?
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {modes.map((mode) => {
              const Icon = mode.icon;
              return (
                <div
                  key={mode.id}
                  onClick={() => {
                    onSelectMode(mode.id, selectedThemeId);
                    onClose();
                  }}
                  className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] hover:border-[#2D2723] hover:bg-white cursor-pointer transition-all subtle-shadow min-h-[140px]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${mode.badgeColor}`}>
                        {mode.badge}
                      </span>
                      <Icon className="w-4 h-4 text-[#8A7D71] group-hover:text-[#E06D53] transition-colors" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#2D2723] group-hover:text-[#E06D53] transition-colors">
                      {mode.title}
                    </h3>
                    <p className="text-xs text-[#5C5249] mt-1 leading-relaxed">
                      {mode.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#EAE2D7] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2D2723] group-hover:text-[#E06D53]">
                      {mode.buttonLabel}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8A7D71] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Theme Selection Grid (Mobile: 2-col, Tablet: 3-col, Desktop: 4-col) */}
        <div className="mt-8 pt-6 border-t border-[#E8E0D5]">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div>
              <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                WHAT ARE YOU IN THE MOOD FOR?
              </div>
              <p className="text-xs text-[#7A6E63] mt-0.5">
                Select a theme to color your mystery prompts or chaos ideas (optional)
              </p>
            </div>
            {selectedThemeId !== 'none' && (
              <button
                onClick={() => setSelectedThemeId('none')}
                className="text-xs text-[#E06D53] font-bold hover:underline"
              >
                Clear
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
                  className={`flex items-center gap-2.5 p-3 rounded-xl border-2 text-left transition-all min-h-[48px] ${
                    isSelected
                      ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                      : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#4A3F35] hover:bg-[#EFE9DF]'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#EFE9DF] text-[#7A6E63]'
                    }`}
                  >
                    <ThemeIcon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="block text-xs font-bold truncate leading-tight">
                      {theme.name}
                    </span>
                    <span
                      className={`block text-[10px] font-handwriting truncate ${
                        isSelected ? 'text-white/80' : 'text-[#8A7D71]'
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
