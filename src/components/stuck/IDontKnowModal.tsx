import React, { useState } from 'react';
import { X, HelpCircle, Sparkles, ArrowRight, RefreshCw, Check } from 'lucide-react';

interface IDontKnowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSpecificPrompt: (promptText: string) => void;
}

export const IDontKnowModal: React.FC<IDontKnowModalProps> = ({
  isOpen,
  onClose,
  onStartSpecificPrompt,
}) => {
  const [energy, setEnergy] = useState<'low' | 'some' | 'lots'>('low');
  const [time, setTime] = useState<'2' | '5' | '10' | '20'>('5');
  const [vibe, setVibe] = useState<'calm' | 'fun' | 'weird' | 'challenging' | 'surprise'>('calm');
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);

  if (!isOpen) return null;

  const energyOptions = [
    { id: 'low' as const, label: 'LOW' },
    { id: 'some' as const, label: 'SOME' },
    { id: 'lots' as const, label: 'LOTS' },
  ];

  const times = [
    { id: '2' as const, label: '2 MIN' },
    { id: '5' as const, label: '5 MIN' },
    { id: '10' as const, label: '10 MIN' },
    { id: '20' as const, label: '20+ MIN' },
  ];

  const vibes = [
    { id: 'calm' as const, label: 'CALM' },
    { id: 'fun' as const, label: 'FUN' },
    { id: 'weird' as const, label: 'WEIRD' },
    { id: 'challenging' as const, label: 'CHALLENGING' },
    { id: 'surprise' as const, label: 'SURPRISE ME' },
  ];

  const starters: Record<string, string[]> = {
    'low-calm': [
      'Draw three gentle curving lines across your page like sleeping hills.',
      'Draw five smooth river stones stacked carefully in a pile.',
      'Draw a single leaf resting on calm water ripples.',
    ],
    'low-fun': [
      'Draw a round potato with tiny boots on.',
      'Draw a small sleeping snail with a house on its back.',
      'Draw a teacup with two sleepy eyes peering over the rim.',
    ],
    'low-weird': [
      'Draw an ordinary spoon with four tiny cat paws.',
      'Draw a cloud wearing sunglasses.',
      'Draw a tree where the fruit are tiny floating lightbulbs.',
    ],
    'low-challenging': [
      'Draw a spiral shell without lifting your pen from the paper.',
      'Draw a simple chair using only straight lines.',
      'Draw your hand with your non-dominant drawing hand in 60 seconds.',
    ],
    'low-surprise': [
      'Draw a tiny arched wooden mouse door at the bottom of the paper.',
      'Draw a postage stamp from an imaginary country.',
      'Draw a keyhole that shows stars on the other side.',
    ],
    'some-calm': [
      'Draw a small lantern hanging from a gnarled branch.',
      'Draw an open window looking out at a crescent moon and one tree.',
      'Draw a cozy mug with warm steam curling into the air.',
    ],
    'some-fun': [
      'Draw a bear wearing an oversized knitted winter sweater.',
      'Draw a frog balancing a strawberry on its head.',
      'Draw a dog holding an umbrella with its mouth during rain.',
    ],
    'some-weird': [
      'Draw a tiny creature carrying something much larger than itself.',
      'Draw an octopus wearing a pair of thick winter mittens.',
      'Draw a bicycle where the wheels are sunflower blossoms.',
    ],
    'some-challenging': [
      'Draw an intricate antique padlock with ornate engravings.',
      'Draw three intersecting geometric shapes and shade where they overlap.',
      'Draw a character looking over their shoulder in profile.',
    ],
    'some-surprise': [
      'Draw an antique pocket watch that shows the weather instead of hours.',
      'Draw a glass terrarium with a tiny castle inside.',
      'Draw a messenger bird carrying a sealed scroll.',
    ],
    'lots-calm': [
      'Draw a winding cobblestone street leading toward a distant clock tower.',
      'Draw an ancient hollow oak tree with tiny mossy staircases.',
      'Draw a quiet greenhouse filled with hanging ferns and glass panes.',
    ],
    'lots-fun': [
      'Draw a bustling cafe where all the patrons are animals in hats.',
      'Draw a band of three musical woodland creatures with instruments.',
      'Draw a robot trying to bake a tall birthday cake.',
    ],
    'lots-weird': [
      'Draw a flying pirate ship where the sails are giant butterfly wings.',
      'Draw a city built on the back of an enormous swimming turtle.',
      'Draw a house that grew out of a giant hollowed-out pumpkin.',
    ],
    'lots-challenging': [
      'Draw a dragon curled defensively around an ancient lighthouse.',
      'Draw a character running at a dramatic perspective angle.',
      'Draw a detailed mechanical clockwork bird with visible gears.',
    ],
    'lots-surprise': [
      'Draw an alchemist\'s cluttered desk covered in bubbling potions and old books.',
      'Draw an underwater ruins gate discovered by a lone deep-sea diver.',
      'Draw a mysterious train station at the edge of the world.',
    ],
  };

  const getPromptForSelection = () => {
    const key = `${energy}-${vibe}`;
    const pool = starters[key] || starters['some-fun'];
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    return randomItem;
  };

  const handleGenerate = () => {
    setGeneratedPrompt(getPromptForSelection());
  };

  const handleStart = () => {
    const promptToStart = generatedPrompt || getPromptForSelection();
    onStartSpecificPrompt(promptToStart);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="I Don't Know What to Draw"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-[#FCFAF6] rounded-3xl p-5 sm:p-7 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 border-b border-[#E8E0D5]">
          <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#E06D53]" />
            <span>Blank-Page Paralysis Relief</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight mt-1 font-sans">
            I DON'T KNOW WHAT TO DRAW
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6E63] font-handwriting text-lg sm:text-xl mt-0.5">
            Tell us how you're feeling right now.
          </p>
        </div>

        {/* Question 1: Energy */}
        <div className="my-4">
          <label className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] block mb-2">
            HOW MUCH ENERGY DO YOU HAVE?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {energyOptions.map((e) => (
              <button
                key={e.id}
                onClick={() => {
                  setEnergy(e.id);
                  setGeneratedPrompt(null);
                }}
                className={`py-3 px-2 rounded-xl text-xs font-bold border-2 transition-all min-h-[44px] ${
                  energy === e.id
                    ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                    : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                }`}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Time */}
        <div className="mb-4">
          <label className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] block mb-2">
            HOW MUCH TIME?
          </label>
          <div className="grid grid-cols-4 gap-2">
            {times.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTime(t.id);
                  setGeneratedPrompt(null);
                }}
                className={`py-3 px-2 rounded-xl text-xs font-bold border-2 transition-all min-h-[44px] ${
                  time === t.id
                    ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                    : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 3: What sounds good? */}
        <div className="mb-5">
          <label className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] block mb-2">
            WHAT SOUNDS GOOD?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {vibes.map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  setVibe(v.id);
                  setGeneratedPrompt(null);
                }}
                className={`py-3 px-2 rounded-xl text-xs font-bold border-2 transition-all min-h-[44px] ${
                  vibe === v.id
                    ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                    : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Result: HERE'S SOMEWHERE TO START */}
        {generatedPrompt ? (
          <div className="my-5 p-5 rounded-2xl bg-[#FAF7F2] border-2 border-[#2D2723] animate-fadeIn">
            <div className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-[#E06D53] mb-1">
              HERE'S SOMEWHERE TO START
            </div>
            <p className="text-base sm:text-lg font-extrabold text-[#2D2723] leading-snug">
              {generatedPrompt}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={handleGenerate}
                className="py-2.5 px-3.5 rounded-xl border border-[#D8CEBE] text-xs font-bold text-[#6B5E52] hover:bg-[#EFE9DF] transition-colors flex items-center gap-1.5 min-h-[40px]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>TRY ANOTHER</span>
              </button>
              <button
                onClick={handleStart}
                className="flex-1 py-3 px-5 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs sm:text-sm hover:bg-[#433B35] transition-all flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <span>START</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-3 border-t border-[#E8E0D5]">
            <button
              onClick={handleGenerate}
              className="w-full py-4 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2.5 min-h-[52px]"
            >
              <Sparkles className="w-4 h-4 text-[#E5B574]" />
              <span>GIVE ME A STARTING POINT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
