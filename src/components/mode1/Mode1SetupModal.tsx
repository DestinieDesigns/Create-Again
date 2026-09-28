import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
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

/**
 * Section 2: Activity Setup — ONE SCREEN = ONE MAIN DECISION
 * Main Question: "How much time do you have?"
 * Advanced controls (Adventure depth, Theme) kept behind progressive disclosure.
 */
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
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  useEffect(() => {
    if (themeId) {
      setSelectedThemeId(themeId);
    }
  }, [themeId]);

  if (!isOpen) return null;

  const durationOptions = [
    { label: '2 MIN', value: 120, desc: 'Quick spark' },
    { label: '5 MIN', value: 300, desc: 'Standard practice' },
    { label: '10 MIN', value: 600, desc: 'Deep sketch' },
    { label: '20 MIN', value: 1200, desc: 'Full page' },
    { label: 'UNTIMED', value: null, desc: 'Draw at your own pace' },
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5DE] shadow-xl text-center max-h-[92vh] overflow-y-auto space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F4F4F0] text-[#8A8A82] hover:text-[#16171A] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#2752E7]">
            WHAT COMES NEXT?
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#16171A] tracking-tight">
            How much time do you have?
          </h2>
          <p className="text-xs sm:text-sm text-[#686862]">
            Pick a time or draw untimed. You'll receive one mark instruction at a time.
          </p>
        </div>

        {/* MAIN DECISION: TIME DURATION OPTIONS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-left">
          {durationOptions.map((opt) => {
            const isSelected = selectedDuration === opt.value;
            return (
              <button
                key={opt.label}
                onClick={() => setSelectedDuration(opt.value)}
                className={`p-3.5 rounded-2xl border transition-all text-left flex flex-col justify-between min-h-[78px] ${
                  isSelected
                    ? 'bg-[#16171A] text-white border-[#16171A] shadow-2xs'
                    : 'bg-white border-[#E5E5DE] text-[#16171A] hover:bg-[#FAF9F5]'
                }`}
              >
                <div className="font-mono-code font-bold text-xs">
                  {opt.label}
                </div>
                <div
                  className={`text-[11px] leading-tight ${
                    isSelected ? 'text-[#C4C4BC]' : 'text-[#8A8A82]'
                  }`}
                >
                  {opt.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* PRIMARY ACTION */}
        <div>
          <button
            onClick={handleStart}
            className="w-full py-4 px-6 rounded-2xl bg-[#16171A] text-white font-semibold text-base hover:bg-[#2C2D32] transition-colors shadow-2xs flex items-center justify-center gap-2 group min-h-[50px] active:scale-[0.99]"
          >
            <span>Start Drawing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* PROGRESSIVE DISCLOSURE: MORE OPTIONS */}
        <div className="pt-2 border-t border-[#F0F0EB]">
          <button
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            className="text-xs text-[#8A8A82] hover:text-[#16171A] transition-colors inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-[#F4F4F0]"
          >
            <span>More Options (Theme & Length)</span>
            {showMoreOptions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showMoreOptions && (
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E5DE] text-left space-y-4 animate-in fade-in duration-100">
              {/* Adventure Length */}
              <div>
                <label className="block text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#686862] mb-1.5">
                  Length / Depth
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {adventureOptions.slice(0, 4).map((adv) => (
                    <button
                      key={adv.id}
                      onClick={() => setSelectedAdventure(adv.id)}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-colors ${
                        selectedAdventure === adv.id
                          ? 'bg-white border-[#16171A] font-semibold text-[#16171A] shadow-2xs'
                          : 'bg-white border-[#E5E5DE] text-[#686862] hover:text-[#16171A]'
                      }`}
                    >
                      <div>{adv.label}</div>
                      <div className="text-[10px] text-[#8A8A82]">{adv.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Picker */}
              <div>
                <label className="block text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#686862] mb-1.5">
                  Theme Flavor
                </label>
                <select
                  value={selectedThemeId}
                  onChange={(e) => setSelectedThemeId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#E5E5DE] bg-white text-xs font-medium text-[#16171A] focus:outline-none focus:border-[#2752E7]"
                >
                  <option value="none">Surprise / Free Drawing</option>
                  {THEMES.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} — {t.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
