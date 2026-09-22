import React, { useState } from 'react';
import { X, HelpCircle, ArrowRight, Sparkles, Coffee, Brain, Clock, ShieldCheck, Heart } from 'lucide-react';

interface IDontKnowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSpecificPrompt: (promptText: string) => void;
}

interface MoodPrompt {
  id: string;
  mood: string;
  icon: typeof HelpCircle;
  tagline: string;
  starterPrompt: string;
  advice: string;
}

const MOODS: MoodPrompt[] = [
  {
    id: 'tired',
    mood: 'Low Energy & Tired',
    icon: Coffee,
    tagline: 'Quiet, rhythmic, meditative marks.',
    starterPrompt: 'Fill half a page with repeated parallel curving lines, like gentle water currents.',
    advice: 'No character to invent. Just let your hand follow the rhythm.',
  },
  {
    id: 'overthinking',
    mood: 'Overthinking & Self-Critical',
    icon: Brain,
    tagline: 'Defeat perfectionism before it speaks.',
    starterPrompt: 'Draw a creature using only continuous scribbles. Give it two round eyes inside the scribble.',
    advice: 'It is impossible for a scribble to look "wrong".',
  },
  {
    id: 'two-mins',
    mood: 'I Only Have 2 Minutes',
    icon: Clock,
    tagline: 'Quick micro-creation.',
    starterPrompt: 'Draw a tiny arched wooden door at the bottom of your page, with something curious peeking out.',
    advice: 'Small scale keeps commitment zero and delight high.',
  },
  {
    id: 'rusty',
    mood: 'Feeling Rusty / Haven’t Drawn in Years',
    icon: ShieldCheck,
    tagline: 'Welcome back. Nothing is lost.',
    starterPrompt: 'Draw 4 coffee mugs, but every mug must have a completely different ridiculous handle.',
    advice: 'Familiar everyday shapes warm up your confidence gently.',
  },
  {
    id: 'playful',
    mood: 'Curious & Playful',
    icon: Sparkles,
    tagline: 'Let curiosity run.',
    starterPrompt: 'Draw an ordinary bicycle, but replace both wheels with something that is definitely not a wheel.',
    advice: 'What if wheels were giant citrus slices or curling snails?',
  },
];

export const IDontKnowModal: React.FC<IDontKnowModalProps> = ({
  isOpen,
  onClose,
  onStartSpecificPrompt,
}) => {
  const [selectedMood, setSelectedMood] = useState<MoodPrompt>(MOODS[0]);

  if (!isOpen) return null;

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
          <div className="p-1.5 rounded-lg bg-[#EFE9DF] text-[#7A6D63]">
            <HelpCircle className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
            Gentle Start
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
          How are you feeling right now?
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6054] mt-0.5 font-handwriting text-lg">
          Pick your vibe and we will give you a single comfortable place to start.
        </p>

        {/* Mood Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5">
          {MOODS.map((m) => {
            const Icon = m.icon;
            const isSelected = selectedMood.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMood(m)}
                className={`p-3 rounded-xl border-2 text-left flex items-start gap-2.5 transition-all ${
                  isSelected
                    ? 'bg-[#F2EDE4] border-[#2D2723] shadow-xs'
                    : 'bg-[#FAF7F2] border-[#E8E0D5] hover:border-[#D0C2B0]'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-[#2D2723] text-white' : 'bg-[#EFE9DF] text-[#786C61]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#2D2723]">{m.mood}</div>
                  <div className="text-[11px] text-[#7A6F65] leading-tight mt-0.5">{m.tagline}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Starter Prompt Recommendation */}
        <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#2D2723] p-5 sm:p-6 text-center subtle-shadow relative">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#E06D53] font-mono-code">
            Your Starting Mark
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2723] mt-2 leading-relaxed">
            "{selectedMood.starterPrompt}"
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5E53] mt-2 font-handwriting text-lg">
            {selectedMood.advice}
          </p>

          <button
            onClick={() => {
              onStartSpecificPrompt(selectedMood.starterPrompt);
              onClose();
            }}
            className="mt-5 w-full py-3.5 rounded-xl bg-[#2D2723] hover:bg-[#433B35] text-[#FAF7F2] font-extrabold text-xs shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <span>START THIS ON MY PAPER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
