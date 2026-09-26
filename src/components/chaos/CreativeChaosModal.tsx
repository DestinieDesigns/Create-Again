import React, { useState, useEffect } from 'react';
import {
  X,
  Dices,
  RefreshCw,
  Sparkles,
  ArrowRight,
  User,
  MapPin,
  Package,
  Heart,
  Zap,
} from 'lucide-react';
import { getChaosPoolForTheme } from '../../data/creativeChaosPools';
import { getThemeById } from '../../data/themes';
import { CHIBI_PART_REFERENCES } from '../../data/chibiPartReferences';
import { ChibiPartReference } from '../../types/chibiReference';

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
  const [character, setCharacter] = useState('');
  const [location, setLocation] = useState('');
  const [object, setObject] = useState('');
  const [mood, setMood] = useState('');
  const [unexpected, setUnexpected] = useState('');
  const [chibiPart, setChibiPart] = useState<ChibiPartReference | null>(null);

  const objectsPool = [
    'carrying a giant wooden spoon',
    'wearing mismatched boots',
    'holding an oversized brass key',
    'balancing an antique teacup',
    'clutching a rolled-up star map',
    'holding an umbrella made of leaves',
    'carrying a backpack full of clocks',
    'holding a glowing glass lantern',
    'balancing on a tiny rolling stool',
  ];

  const moodsPool = [
    'nervous and looking over their shoulder',
    'curious and tiptoeing forward',
    'sleepy and yawning',
    'determined with hands on hips',
    'mischievous with a sly grin',
    'wonderstruck with wide eyes',
    'quiet and observing calmly',
    'proudly showing something off',
  ];

  const rollCharacter = (pool = activePool) => {
    setCharacter(pool.characters[Math.floor(Math.random() * pool.characters.length)]);
  };

  const rollLocation = (pool = activePool) => {
    setLocation(pool.settings[Math.floor(Math.random() * pool.settings.length)]);
  };

  const rollObject = () => {
    setObject(objectsPool[Math.floor(Math.random() * objectsPool.length)]);
  };

  const rollMood = () => {
    setMood(moodsPool[Math.floor(Math.random() * moodsPool.length)]);
  };

  const rollUnexpected = (pool = activePool) => {
    setUnexpected(pool.rules[Math.floor(Math.random() * pool.rules.length)]);
  };

  const rollChibiPart = () => {
    const randomPart = CHIBI_PART_REFERENCES[Math.floor(Math.random() * CHIBI_PART_REFERENCES.length)];
    setChibiPart(randomPart);
  };

  const rollAll = (pool = activePool) => {
    rollCharacter(pool);
    rollLocation(pool);
    rollObject();
    rollMood();
    rollUnexpected(pool);
    rollChibiPart();
  };

  useEffect(() => {
    if (isOpen) {
      const pool = getChaosPoolForTheme(themeId);
      setActivePool(pool);
      rollAll(pool);
    }
  }, [isOpen, themeId]);

  if (!isOpen) return null;

  const handleStart = () => {
    const partNote = chibiPart ? ` Feature: ${chibiPart.name} (${chibiPart.category}).` : '';
    const promptSummary = `${character} ${mood}, ${location}, ${object}.${partNote} Twist: ${unexpected}`;
    onStartChaosDrawing(promptSummary);
    onClose();
  };

  const currentTheme = getThemeById(themeId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Creative Chaos Generator"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-3xl p-5 sm:p-7 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 border-b border-[#E8E0D5]">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1 rounded-lg bg-[#EFECE1] text-[#606C38]">
              <Dices className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
              Chaos Generator
            </span>
            {currentTheme && (
              <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-md bg-[#FFF2E6] text-[#E06D53] border border-[#F5C7BC]">
                {currentTheme.name}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans">
            CREATIVE CHAOS
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6E63] font-handwriting text-lg sm:text-xl mt-0.5">
            Let's see what happens. Swap individual ingredients until it sparks an idea.
          </p>
        </div>

        {/* 5 Individual Ingredients with Individual Reroll Controls */}
        <div className="my-5 space-y-2.5">
          {/* Ingredient 1: Character */}
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase text-[#8A7D71] mb-1">
                <User className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>CHARACTER</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#2D2723] leading-snug">
                {character}
              </p>
            </div>
            <button
              onClick={() => rollCharacter()}
              className="py-1.5 px-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[11px] font-bold text-[#6D6156] transition-colors shrink-0 flex items-center gap-1 min-h-[38px]"
              title="Change character"
            >
              <RefreshCw className="w-3 h-3" />
              <span>CHANGE</span>
            </button>
          </div>

          {/* Ingredient 2: Location */}
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase text-[#8A7D71] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#2A9D8F]" />
                <span>PLACE</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#2D2723] leading-snug">
                {location}
              </p>
            </div>
            <button
              onClick={() => rollLocation()}
              className="py-1.5 px-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[11px] font-bold text-[#6D6156] transition-colors shrink-0 flex items-center gap-1 min-h-[38px]"
              title="Change place"
            >
              <RefreshCw className="w-3 h-3" />
              <span>CHANGE</span>
            </button>
          </div>

          {/* Ingredient 3: Object */}
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase text-[#8A7D71] mb-1">
                <Package className="w-3.5 h-3.5 text-[#DDA15E]" />
                <span>OBJECT</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#2D2723] leading-snug">
                {object}
              </p>
            </div>
            <button
              onClick={() => rollObject()}
              className="py-1.5 px-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[11px] font-bold text-[#6D6156] transition-colors shrink-0 flex items-center gap-1 min-h-[38px]"
              title="Change object"
            >
              <RefreshCw className="w-3 h-3" />
              <span>CHANGE</span>
            </button>
          </div>

          {/* Ingredient 4: Mood */}
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase text-[#8A7D71] mb-1">
                <Heart className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>MOOD</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#2D2723] leading-snug">
                {mood}
              </p>
            </div>
            <button
              onClick={() => rollMood()}
              className="py-1.5 px-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[11px] font-bold text-[#6D6156] transition-colors shrink-0 flex items-center gap-1 min-h-[38px]"
              title="Change mood"
            >
              <RefreshCw className="w-3 h-3" />
              <span>CHANGE</span>
            </button>
          </div>

          {/* Ingredient 5: Unexpected Twist */}
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase text-[#8A7D71] mb-1">
                <Zap className="w-3.5 h-3.5 text-[#CA8A04]" />
                <span>SURPRISE TWIST</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#2D2723] leading-snug">
                {unexpected}
              </p>
            </div>
            <button
              onClick={() => rollUnexpected()}
              className="py-1.5 px-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[11px] font-bold text-[#6D6156] transition-colors shrink-0 flex items-center gap-1 min-h-[38px]"
              title="Change twist"
            >
              <RefreshCw className="w-3 h-3" />
              <span>CHANGE</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#E8E0D5] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={() => rollAll()}
            className="py-3 px-4 rounded-xl border-2 border-[#D8CEBE] hover:bg-[#EFE9DF] text-[#55473B] text-xs font-bold flex items-center justify-center gap-2 min-h-[44px]"
          >
            <RefreshCw className="w-4 h-4" />
            <span>REROLL ALL</span>
          </button>

          <button
            onClick={handleStart}
            className="flex-1 py-4 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 min-h-[52px]"
          >
            <Sparkles className="w-4 h-4 text-[#E5B574]" />
            <span>KEEP IT & START DRAWING</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
