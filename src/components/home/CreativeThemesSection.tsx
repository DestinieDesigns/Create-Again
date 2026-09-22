import React from 'react';
import { Sparkles, Dices, CircleOff, ChevronRight, Check } from 'lucide-react';
import { CREATIVE_THEMES } from '../../data/themes';
import { getThemeById } from '../../data/themes';
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
    <section className="bg-[#FAF7F2] rounded-3xl border-2 border-[#E8E0D5] p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8A7B6E] font-mono-code">
              Creative Themes
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8DDD1] text-[#6E5D4F] font-mono-code">
              Universal Filter
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
            WHAT ARE YOU IN THE MOOD FOR?
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E53] mt-0.5 font-handwriting text-lg">
            Choose what to create around. Themes inspire prompts across What Comes Next, Warm Ups, and Chaos.
          </p>
        </div>

        <button
          onClick={onOpenThemeModal}
          className="self-start sm:self-auto px-4 py-2 rounded-xl border border-[#D5C9BC] hover:bg-[#EFE9DF] text-xs font-bold text-[#554A40] transition-colors flex items-center gap-1.5"
        >
          <span>VIEW ALL 10 THEMES</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Special Quick Select Bar: Surprise Me + No Theme + Top 4 Themes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {/* Surprise Me */}
        <button
          onClick={() => {
            onSelectTheme('surprise');
            onStartWithTheme('surprise');
          }}
          className={`p-3 rounded-2xl border-2 text-left transition-all group flex flex-col justify-between ${
            selectedThemeId === 'surprise'
              ? 'bg-[#FAF3EA] border-[#E06D53] shadow-xs'
              : 'bg-[#FCFAF6] border-[#E8E0D5] hover:border-[#D0C2AD] hover:bg-[#F9F4EB]'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-[#F0E6D5] text-[#E06D53] flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform">
            <Dices className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-[#2D2723] flex items-center justify-between">
              <span>Surprise Me</span>
              {selectedThemeId === 'surprise' && (
                <Check className="w-3.5 h-3.5 text-[#E06D53]" />
              )}
            </div>
            <p className="text-[10px] text-[#7B6E62] mt-0.5 line-clamp-1">Random spark</p>
          </div>
        </button>

        {/* No Theme / Open */}
        <button
          onClick={() => {
            onSelectTheme('none');
          }}
          className={`p-3 rounded-2xl border-2 text-left transition-all group flex flex-col justify-between ${
            selectedThemeId === 'none' || !selectedThemeId
              ? 'bg-[#FAF3EA] border-[#2D2723] shadow-xs'
              : 'bg-[#FCFAF6] border-[#E8E0D5] hover:border-[#D0C2AD] hover:bg-[#F9F4EB]'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-[#EFE9DF] text-[#6C5E53] flex items-center justify-center mb-2">
            <CircleOff className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-[#2D2723] flex items-center justify-between">
              <span>No Theme</span>
              {(selectedThemeId === 'none' || !selectedThemeId) && (
                <Check className="w-3.5 h-3.5 text-[#2D2723]" />
              )}
            </div>
            <p className="text-[10px] text-[#7B6E62] mt-0.5 line-clamp-1">Open freedom</p>
          </div>
        </button>

        {/* Highlighted Themes preview (first 4 themes) */}
        {CREATIVE_THEMES.slice(0, 4).map((theme) => {
          const Icon = THEME_ICONS[theme.icon] || Sparkles;
          const isSelected = selectedThemeId === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              className={`p-3 rounded-2xl border-2 text-left transition-all group flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#FAF3EA] border-[#E06D53] shadow-xs'
                  : 'bg-[#FCFAF6] border-[#E8E0D5] hover:border-[#D0C2AD] hover:bg-[#F9F4EB]'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform ${
                  theme.colorClass || 'bg-[#EFE9DF] text-[#2D2723]'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-[#2D2723] flex items-center justify-between">
                  <span className="truncate">{theme.name}</span>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#E06D53] shrink-0" />
                  )}
                </div>
                <p className="text-[10px] text-[#7B6E62] mt-0.5 line-clamp-1">
                  {theme.tags.slice(0, 2).join(' · ')}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Theme Status & Action Banner if theme selected */}
      {currentTheme && (
        <div className="mt-4 p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-[#7A6E63] font-handwriting text-base">
              Active theme: <strong>{currentTheme.name}</strong> — {currentTheme.description}
            </span>
          </div>
          <button
            onClick={() => onStartWithTheme(currentTheme.id)}
            className="px-4 py-2 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white text-xs font-extrabold shrink-0 shadow-xs active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>START {currentTheme.name.toUpperCase()} ADVENTURE</span>
          </button>
        </div>
      )}
    </section>
  );
};
