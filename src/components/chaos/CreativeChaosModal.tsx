import React, { useState, useEffect } from 'react';
import { X, Dices, RefreshCw, Sparkles } from 'lucide-react';
import { getChaosPoolForTheme } from '../../data/creativeChaosPools';
import { getThemeById } from '../../data/themes';

interface CreativeChaosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartChaosDrawing: (comboText: string) => void;
  themeId?: string | null;
}

export const CreativeChaosModal: React.FC<CreativeChaosModalProps> = ({
  isOpen,
  onClose,
  onStartChaosDrawing,
  themeId,
}) => {
  const [activePool, setActivePool] = useState(() => getChaosPoolForTheme(themeId));
  const [character, setCharacter] = useState(activePool.characters[0]);
  const [feature, setFeature] = useState(activePool.features[0]);
  const [setting, setSetting] = useState(activePool.settings[0]);
  const [rule, setRule] = useState(activePool.rules[0]);

  useEffect(() => {
    if (isOpen) {
      const pool = getChaosPoolForTheme(themeId);
      setActivePool(pool);
      setCharacter(pool.characters[Math.floor(Math.random() * pool.characters.length)]);
      setFeature(pool.features[Math.floor(Math.random() * pool.features.length)]);
      setSetting(pool.settings[Math.floor(Math.random() * pool.settings.length)]);
      setRule(pool.rules[Math.floor(Math.random() * pool.rules.length)]);
    }
  }, [isOpen, themeId]);

  if (!isOpen) return null;

  const rollAll = () => {
    setCharacter(activePool.characters[Math.floor(Math.random() * activePool.characters.length)]);
    setFeature(activePool.features[Math.floor(Math.random() * activePool.features.length)]);
    setSetting(activePool.settings[Math.floor(Math.random() * activePool.settings.length)]);
    setRule(activePool.rules[Math.floor(Math.random() * activePool.rules.length)]);
  };

  const handleStart = () => {
    const promptSummary = `${character} ${feature}, ${setting}. Rule: ${rule}`;
    onStartChaosDrawing(promptSummary);
    onClose();
  };

  const currentTheme = getThemeById(themeId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Creative Chaos Generator"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 rounded-lg bg-[#EFECE1] text-[#606C38]">
            <Dices className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
            Chaos Generator
          </span>
          {currentTheme && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full font-mono-code bg-[#FFF2E6] text-[#E06D53] border border-[#F5C7BC]">
              Theme: {currentTheme.name}
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
          Creative Chaos
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6054] mt-0.5 font-handwriting text-lg">
          {currentTheme
            ? `Unpredictable combinations tailored to ${currentTheme.name} to shock your imagination.`
            : 'Unpredictable combinations to shock your imagination into motion.'}
        </p>

        {/* Chaos Slots Card */}
        <div className="my-6 bg-[#FAF7F2] rounded-2xl border-2 border-[#E8E0D5] p-5 sm:p-6 space-y-4 subtle-shadow">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#998A7D] font-mono-code">
              1. The Character / Subject
            </div>
            <div className="text-base sm:text-lg font-extrabold text-[#2D2723] mt-0.5">
              {character}
            </div>
          </div>

          <div className="pt-3 border-t border-[#EAE1D4]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#998A7D] font-mono-code">
              2. Peculiar Feature
            </div>
            <div className="text-base sm:text-lg font-extrabold text-[#2D2723] mt-0.5">
              {feature}
            </div>
          </div>

          <div className="pt-3 border-t border-[#EAE1D4]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#998A7D] font-mono-code">
              3. The Setting
            </div>
            <div className="text-base sm:text-lg font-extrabold text-[#2D2723] mt-0.5">
              {setting}
            </div>
          </div>

          <div className="pt-3 border-t border-[#EAE1D4] bg-[#FFF2E6] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl border-t border-[#F0D5BE]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#C04D33] font-mono-code">
              4. Chaos Rule
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#2D2723] mt-0.5">
              {rule}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={rollAll}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border-2 border-[#D8CEBE] hover:bg-[#EFE9DF] text-[#4A4036] font-bold text-xs flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            <RefreshCw className="w-4 h-4" />
            <span>RE-ROLL CHAOS</span>
          </button>

          <button
            onClick={handleStart}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-xs shadow-md hover:bg-[#433B35] transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#E5B574]" />
            <span>DRAW THIS ON YOUR PAGE</span>
          </button>
        </div>
      </div>
    </div>
  );
};
