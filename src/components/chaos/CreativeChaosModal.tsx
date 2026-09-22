import React, { useState } from 'react';
import { X, Dices, RefreshCw, Sparkles, Clock, Check } from 'lucide-react';

interface CreativeChaosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartChaosDrawing: (comboText: string) => void;
}

const CHARACTERS = [
  'A very tired badger',
  'An intergalactic mail carrier',
  'A tea kettle with tiny legs',
  'An ancient moss-covered robot',
  'A grumpy librarian owl',
  'A baker who only makes miniature food',
  'A nervous ghost trying to make friends',
  'A deep-sea diver in an antique bronze suit',
];

const FEATURES = [
  'wearing oversized combat boots',
  'balancing a teacup on their head',
  'sprouting glowing mushrooms',
  'carrying an umbrella made of leaves',
  'with an accordion strapped to their chest',
  'holding a miniature constellation in a jar',
  'wrapped in a comically long scarf',
];

const SETTINGS = [
  'standing in a flooded bookstore',
  'atop an overgrown clock tower',
  'waiting at a bus stop on a comet',
  'inside a hollowed-out pumpkin cafe',
  'on a narrow suspension bridge above clouds',
  'in a kitchen at 3 AM',
];

const RULES = [
  'No sharp angles allowed—everything must be curved.',
  'Only draw with broken hatch marks.',
  'Draw their shadow much larger than them.',
  'Include three hidden eyes somewhere in the scene.',
  'Draw everything with extra-thick outlines.',
  'Do not lift your pen when drawing the character.',
];

export const CreativeChaosModal: React.FC<CreativeChaosModalProps> = ({
  isOpen,
  onClose,
  onStartChaosDrawing,
}) => {
  const [character, setCharacter] = useState(CHARACTERS[0]);
  const [feature, setFeature] = useState(FEATURES[0]);
  const [setting, setSetting] = useState(SETTINGS[0]);
  const [rule, setRule] = useState(RULES[0]);

  if (!isOpen) return null;

  const rollAll = () => {
    setCharacter(CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]);
    setFeature(FEATURES[Math.floor(Math.random() * FEATURES.length)]);
    setSetting(SETTINGS[Math.floor(Math.random() * SETTINGS.length)]);
    setRule(RULES[Math.floor(Math.random() * RULES.length)]);
  };

  const handleStart = () => {
    const promptSummary = `${character} ${feature}, ${setting}. Rule: ${rule}`;
    onStartChaosDrawing(promptSummary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
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
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
          Creative Chaos
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6054] mt-0.5 font-handwriting text-lg">
          Unpredictable combinations to shock your imagination into motion.
        </p>

        {/* Chaos Slots Card */}
        <div className="my-6 bg-[#FAF7F2] rounded-2xl border-2 border-[#E8E0D5] p-5 sm:p-6 space-y-4 subtle-shadow">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#998A7D] font-mono-code">
              1. The Character
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
