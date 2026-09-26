import React from 'react';
import { Sparkles, Dices, CircleOff, ChevronRight, Check } from 'lucide-react';
import { CREATIVE_THEMES, getThemeById } from '../../data/themes';
import {
  Trees,
  Footprints,
  Coffee,
  Rocket,
  Ghost,
  Gamepad2,
  BookOpen,
  Shapes,
  MapPin,
  LucideIcon,
} from 'lucide-react';

interface CreativeThemesSectionProps {
  selectedThemeId: string;
  onSelectTheme: (themeId: string) => void;
  onOpenThemeModal: () => void;
  onStartWithTheme: (themeId: string) => void;
}

const THEME_ICONS: Record<string, LucideIcon> = {
  Trees,
  Sparkles,
  Footprints,
  Coffee,
  Rocket,
  Ghost,
  Gamepad2,
  BookOpen,
  Shapes,
  MapPin,
};

export const CreativeThemesSection: React.FC<CreativeThemesSectionProps> = ({
  selectedThemeId,
  onSelectTheme,
  onOpenThemeModal,
  onStartWithTheme,
}) => {
  const currentTheme = getThemeById(selectedThemeId);

  return (
    <section className="bg-white rounded-2xl border border-[#E5E5DE] p-6 sm:p-7 shadow-xs max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1 text-xs text-[#686862]">
            <span className="font-mono-code font-semibold text-[#16171A]">THEMES</span>
            <span aria-hidden="true">·</span>
            <span>Universal Creative Mood</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-[#16171A] tracking-tight">
            Curate Your Aesthetic Direction
          </h2>
          <p className="text-xs sm:text-sm text-[#686862] mt-1">
            Filter all sessions (What Comes Next, Warm-Ups, and Chaos) through a cohesive stylistic world.
          </p>
        </div>

        <button
          onClick={onOpenThemeModal}
          className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg border border-[#E5E5DE] hover:border-[#CDCDC4] hover:bg-[#F4F4F0] text-xs font-semibold text-[#16171A] transition-colors flex items-center gap-1.5"
        >
          <span>All 10 Themes</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Select Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Open / No Theme */}
        <button
          onClick={() => onSelectTheme('none')}
          className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[92px] ${
            selectedThemeId === 'none' || !selectedThemeId
              ? 'bg-[#F4F4F0] border-[#16171A]'
              : 'bg-white border-[#E5E5DE] hover:border-[#CDCDC4] hover:bg-[#FAF9F6]'
          }`}
        >
          <CircleOff className="w-4 h-4 text-[#686862] mb-2" />
          <div>
            <div className="text-xs font-semibold text-[#16171A] flex items-center justify-between">
              <span>Open Freedom</span>
              {(selectedThemeId === 'none' || !selectedThemeId) && (
                <Check className="w-3.5 h-3.5 text-[#16171A]" />
              )}
            </div>
            <p className="text-[10px] text-[#8A8A82] mt-0.5">Unconstrained</p>
          </div>
        </button>

        {/* Surprise Me */}
        <button
          onClick={() => {
            onSelectTheme('surprise');
            onStartWithTheme('surprise');
          }}
          className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[92px] ${
            selectedThemeId === 'surprise'
              ? 'bg-[#EFF3FF] border-[#2752E7]'
              : 'bg-white border-[#E5E5DE] hover:border-[#CDCDC4] hover:bg-[#FAF9F6]'
          }`}
        >
          <Dices className="w-4 h-4 text-[#2752E7] mb-2" />
          <div>
            <div className="text-xs font-semibold text-[#16171A] flex items-center justify-between">
              <span>Surprise Me</span>
              {selectedThemeId === 'surprise' && (
                <Check className="w-3.5 h-3.5 text-[#2752E7]" />
              )}
            </div>
            <p className="text-[10px] text-[#8A8A82] mt-0.5">Randomized</p>
          </div>
        </button>

        {/* Highlighted Themes */}
        {CREATIVE_THEMES.slice(0, 4).map((theme) => {
          const Icon = THEME_ICONS[theme.icon] || Sparkles;
          const isSelected = selectedThemeId === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[92px] ${
                isSelected
                  ? 'bg-[#EFF3FF] border-[#2752E7]'
                  : 'bg-white border-[#E5E5DE] hover:border-[#CDCDC4] hover:bg-[#FAF9F6]'
              }`}
            >
              <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-[#2752E7]' : 'text-[#686862]'}`} />
              <div>
                <div className="text-xs font-semibold text-[#16171A] flex items-center justify-between truncate">
                  <span className="truncate">{theme.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#2752E7] shrink-0" />}
                </div>
                <p className="text-[10px] text-[#8A8A82] mt-0.5 line-clamp-1">{theme.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
