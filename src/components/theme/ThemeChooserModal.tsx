import React from 'react';
import { X } from 'lucide-react';
import { ThemePicker } from './ThemePicker';

interface ThemeChooserModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedThemeId?: string | null;
  onSelectTheme: (themeId: string) => void;
}

export const ThemeChooserModal: React.FC<ThemeChooserModalProps> = ({
  isOpen,
  onClose,
  selectedThemeId,
  onSelectTheme,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Theme Selection"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-3xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors"
          aria-label="Close theme selection"
        >
          <X className="w-5 h-5" />
        </button>

        <ThemePicker
          selectedThemeId={selectedThemeId}
          onSelectTheme={(themeId) => {
            onSelectTheme(themeId);
            onClose();
          }}
          showSpecialChoices={true}
        />
      </div>
    </div>
  );
};
