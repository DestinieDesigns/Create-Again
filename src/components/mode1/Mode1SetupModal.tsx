import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Trees,
  Footprints,
  Coffee,
  Rocket,
  Ghost,
  Gamepad2,
  BookMarked,
  Shapes,
  MapPin,
  Dices,
  CircleOff,
} from 'lucide-react';
import { AdventureType, CreativePathwayId } from '../../types/prompt';
import { THEMES, getThemeById } from '../../data/themes';

interface Mode1SetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSession: (
    duration: number | null,
    adventure: AdventureType,
    pathway?: CreativePathwayId,
    themeId?: string
  ) => void;
  pathway?: CreativePathwayId;
  themeId?: string;
  onChangePathway?: () => void;
}

export const Mode1SetupModal: React.FC<Mode1SetupModalProps> = ({
  isOpen,
  onClose,
  onStartSession,
  pathway = 'open',
  themeId = 'none',
}) => {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(300); // 5 minutes default
  const [selectedAdventure, setSelectedAdventure] = useState<AdventureType>('full-adventure');
  const [selectedThemeId, setSelectedThemeId] = useState<string>(themeId);

  useEffect(() => {
    if (themeId) {
      setSelectedThemeId(themeId);
    }
  }, [themeId]);

  if (!isOpen) return null;

  const durationOptions = [
    { label: '2 MIN', value: 120 },
    { label: '5 MIN', value: 300 },
    { label: '10 MIN', value: 600 },
    { label: '20 MIN', value: 1200 },
    { label: 'NO TIMER', value: null },
  ];

  const adventureOptions: {
    id: AdventureType;
    label: string;
    desc: string;
  }[] = [
    { id: 'tiny-mystery', label: 'Tiny Mystery', desc: '3–5 quick steps' },
    { id: 'short-adventure', label: 'Short Adventure', desc: '6–8 prompts' },
    { id: 'full-adventure', label: 'Full Adventure', desc: '10–12 prompts' },
    { id: 'deep-dive', label: 'Deep Dive', desc: '15+ prompts' },
    { id: 'chaos', label: 'Chaos', desc: 'Wild unexpected twists' },
  ];

  const handleStart = () => {
    onStartSession(selectedDuration, selectedAdventure, pathway, selectedThemeId);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="What Comes Next setup"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-3xl p-5 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-left pb-4 border-b border-[#E8E0D5]">
          <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
            <span>Signature Mode</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight mt-1 font-sans">
            WHAT COMES NEXT?
          </h2>
          <p className="text-sm sm:text-base text-[#5C5249] mt-1 font-medium">
            You won't know what happens next. Grab your sketchbook or open your drawing tablet, then let the adventure begin.
          </p>
        </div>

        {/* Configuration Sections */}
        <div className="space-y-6 my-6 text-left">
          {/* 1. TIME */}
          <div>
            <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-2.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>TIME</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {durationOptions.map((opt) => {
                const isSelected = selectedDuration === opt.value;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setSelectedDuration(opt.value)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border-2 transition-all min-h-[44px] ${
                      isSelected
                        ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                        : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. ADVENTURE LENGTH */}
          <div>
            <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-2.5">
              ADVENTURE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {adventureOptions.map((adv) => {
                const isSelected = selectedAdventure === adv.id;
                return (
                  <button
                    key={adv.id}
                    onClick={() => setSelectedAdventure(adv.id)}
                    className={`p-3 rounded-xl border-2 text-left transition-all min-h-[48px] ${
                      isSelected
                        ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                        : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                    }`}
                  >
                    <span className="block text-xs font-bold">{adv.label}</span>
                    <span
                      className={`block text-[11px] mt-0.5 ${
                        isSelected ? 'text-[#FAF7F2]/80' : 'text-[#8A7D71]'
                      }`}
                    >
                      {adv.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. THEME */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                THEME
              </div>
              <span className="text-xs text-[#8A7D71]">
                Active: {getThemeById(selectedThemeId)?.name || 'Surprise Me'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {THEMES.slice(0, 8).map((thm) => {
                const isSelected = selectedThemeId === thm.id;
                return (
                  <button
                    key={thm.id}
                    onClick={() => setSelectedThemeId(thm.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all min-h-[40px] ${
                      isSelected
                        ? 'bg-[#2D2723] text-white border-[#2D2723]'
                        : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                    }`}
                  >
                    {thm.name}
                  </button>
                );
              })}
              <button
                onClick={() => setSelectedThemeId('surprise')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all min-h-[40px] ${
                  selectedThemeId === 'surprise'
                    ? 'bg-[#E06D53] text-white border-[#E06D53]'
                    : 'bg-[#FFF2E6] border-[#F5C7BC] text-[#E06D53] hover:bg-[#FFE6D4]'
                }`}
              >
                Surprise Me
              </button>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-[#E8E0D5]">
          <button
            onClick={handleStart}
            className="w-full py-4 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2.5 min-h-[52px]"
          >
            <Sparkles className="w-4 h-4 text-[#E5B574]" />
            <span>START MYSTERY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
