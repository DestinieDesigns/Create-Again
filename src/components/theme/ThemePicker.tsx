import React from 'react';
import {
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
  Dices,
  CircleOff,
  Check,
  LucideIcon,
} from 'lucide-react';
import { CreativeTheme } from '../../types/theme';
import { CREATIVE_THEMES } from '../../data/themes';

interface ThemePickerProps {
  selectedThemeId?: string | null;
  onSelectTheme: (themeId: string) => void;
  showSpecialChoices?: boolean;
  className?: string;
  compact?: boolean;
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

export const ThemePicker: React.FC<ThemePickerProps> = ({
  selectedThemeId = 'none',
  onSelectTheme,
  showSpecialChoices = true,
  className = '',
  compact = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Title & Prompt header if not compact */}
      {!compact && (
        <div className="mb-5 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8A7B6E] font-mono-code">
              Creative Themes
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
            WHAT ARE YOU IN THE MOOD FOR?
          </h3>
          <p className="text-sm text-[#6C5E53] mt-1 font-handwriting text-lg">
            Choose something to create around, or let Create Again surprise you.
          </p>
        </div>
      )}

      {/* Special Choices (Surprise Me & No Theme) */}
      {showSpecialChoices && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          {/* Surprise Me Card */}
          <button
            type="button"
            onClick={() => onSelectTheme('surprise')}
            className={`group flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left ${
              selectedThemeId === 'surprise'
                ? 'bg-[#FAF3EA] border-[#E06D53] shadow-xs'
                : 'bg-[#FCFAF6] border-[#E7DECE] hover:border-[#D0C2AD] hover:bg-[#F9F4EB]'
            }`}
            aria-pressed={selectedThemeId === 'surprise'}
          >
            <div className="w-10 h-10 rounded-xl bg-[#F0E6D5] flex items-center justify-center text-[#E06D53] shrink-0 group-hover:rotate-12 transition-transform">
              <Dices className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-extrabold text-[#2D2723]">Surprise Me</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md bg-[#E8DDD1] text-[#6E5D4F]">
                  Random
                </span>
              </div>
              <p className="text-xs text-[#7B6E62] truncate">
                Let Create Again choose an inspiring theme
              </p>
            </div>
            {selectedThemeId === 'surprise' && (
              <Check className="w-4 h-4 text-[#E06D53] shrink-0" />
            )}
          </button>

          {/* No Theme Card */}
          <button
            type="button"
            onClick={() => onSelectTheme('none')}
            className={`group flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left ${
              selectedThemeId === 'none' || !selectedThemeId
                ? 'bg-[#FAF3EA] border-[#2D2723] shadow-xs'
                : 'bg-[#FCFAF6] border-[#E7DECE] hover:border-[#D0C2AD] hover:bg-[#F9F4EB]'
            }`}
            aria-pressed={selectedThemeId === 'none' || !selectedThemeId}
          >
            <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] flex items-center justify-center text-[#6C5E53] shrink-0">
              <CircleOff className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-extrabold text-[#2D2723]">No Theme</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md bg-[#E8DDD1] text-[#6E5D4F]">
                  Open
                </span>
              </div>
              <p className="text-xs text-[#7B6E62] truncate">
                Pure freedom with general prompt pool
              </p>
            </div>
            {(selectedThemeId === 'none' || !selectedThemeId) && (
              <Check className="w-4 h-4 text-[#2D2723] shrink-0" />
            )}
          </button>
        </div>
      )}

      {/* Main Thematic Grid */}
      <div
        className={`grid gap-2.5 ${
          compact
            ? 'grid-cols-2 sm:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {CREATIVE_THEMES.map((theme: CreativeTheme) => {
          const Icon = THEME_ICONS[theme.icon] || Sparkles;
          const isSelected = selectedThemeId === theme.id;

          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => onSelectTheme(theme.id)}
              className={`group flex items-start gap-3 p-3.5 rounded-2xl border-2 transition-all text-left ${
                isSelected
                  ? 'bg-[#FAF3EA] border-[#E06D53] shadow-xs'
                  : 'bg-[#FCFAF6] border-[#E7DECE] hover:border-[#D0C2AD] hover:bg-[#F9F4EB]'
              }`}
              aria-pressed={isSelected}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  theme.colorClass || 'bg-[#EFE9DF] text-[#2D2723]'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-[#2D2723] group-hover:text-[#E06D53] transition-colors">
                    {theme.name}
                  </h4>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#E06D53] shrink-0" />
                  )}
                </div>
                <p className="text-xs text-[#75685C] line-clamp-2 mt-0.5 leading-snug font-normal">
                  {theme.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
