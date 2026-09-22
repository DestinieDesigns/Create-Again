import React, { useState } from 'react';
import { X, Clock, Sparkles, BookOpen, Compass, Flame, AlertCircle } from 'lucide-react';
import { AdventureType } from '../../types/prompt';

interface Mode1SetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSession: (duration: number | null, difficulty: AdventureType) => void;
}

export const Mode1SetupModal: React.FC<Mode1SetupModalProps> = ({
  isOpen,
  onClose,
  onStartSession,
}) => {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(300); // 5 minutes default
  const [selectedAdventure, setSelectedAdventure] = useState<AdventureType>('full-adventure');
  const [step, setStep] = useState<'configure' | 'prep'>('configure');

  if (!isOpen) return null;

  const durationOptions = [
    { label: '2 MINUTES', value: 120, desc: 'Quick spark' },
    { label: '5 MINUTES', value: 300, desc: 'Sweet spot' },
    { label: '10 MINUTES', value: 600, desc: 'Good rhythm' },
    { label: '20 MINUTES', value: 1200, desc: 'Deep flow' },
    { label: 'NO TIMER', value: null, desc: 'Pure freedom' },
  ];

  const adventureOptions: {
    id: AdventureType;
    title: string;
    description: string;
    icon: typeof Sparkles;
  }[] = [
    {
      id: 'tiny-mystery',
      title: 'Tiny Mystery',
      description: '3–5 gentle shape ideas to get past the blank page.',
      icon: Sparkles,
    },
    {
      id: 'short-adventure',
      title: 'Short Adventure',
      description: '6–8 ideas. A neat, fast creative journey.',
      icon: Compass,
    },
    {
      id: 'full-adventure',
      title: 'Full Adventure',
      description: '10–15 ideas with twists, connections, and surprises.',
      icon: BookOpen,
    },
    {
      id: 'deep-dive',
      title: 'Deep Dive',
      description: '15+ ideas for a densely filled, rich sketchbook page.',
      icon: Flame,
    },
    {
      id: 'chaos',
      title: 'Chaos Mode',
      description: 'High randomness, weird rules, and unexpected collisions.',
      icon: Sparkles,
    },
  ];

  const handleStart = () => {
    onStartSession(selectedDuration, selectedAdventure);
    setStep('configure');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            setStep('configure');
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'configure' ? (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#E06D53] font-mono-code mb-1">
              What Comes Next?
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
              Set up your drawing adventure
            </h2>
            <p className="text-sm font-handwriting text-lg text-[#655A51] mt-1">
              Choose your time and style. You draw on your paper, one prompt at a time.
            </p>

            {/* Time Selector */}
            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#7A6D63] block mb-2.5 font-mono-code">
                Session Duration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {durationOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDuration(opt.value)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      selectedDuration === opt.value
                        ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-sm'
                        : 'bg-[#FAF7F2] text-[#4A4037] border-[#E8E0D5] hover:border-[#C4B7A6]'
                    }`}
                  >
                    <div className="text-xs font-extrabold tracking-wide">{opt.label}</div>
                    <div
                      className={`text-[10px] ${
                        selectedDuration === opt.value ? 'text-[#D5C9BD]' : 'text-[#8C7E72]'
                      }`}
                    >
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Adventure Style */}
            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#7A6D63] block mb-2.5 font-mono-code">
                Adventure Style
              </label>
              <div className="space-y-2">
                {adventureOptions.map((adv) => {
                  const Icon = adv.icon;
                  const isSelected = selectedAdventure === adv.id;
                  return (
                    <button
                      key={adv.id}
                      onClick={() => setSelectedAdventure(adv.id)}
                      className={`w-full p-3.5 rounded-xl border-2 text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#F2ECE3] border-[#2D2723] shadow-xs'
                          : 'bg-[#FAF7F2] border-[#E8E0D5] hover:border-[#D5C8B8]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-[#2D2723] text-[#FAF7F2]'
                              : 'bg-[#EFE9DF] text-[#7A6E63]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-[#2D2723]">
                            {adv.title}
                          </div>
                          <div className="text-xs text-[#6B6056]">{adv.description}</div>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-[#2D2723] bg-[#2D2723]' : 'border-[#C4B7A6]'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8E0D5] flex items-center justify-between">
              <span className="text-xs font-handwriting text-base text-[#7A6E63]">
                No plan needed.
              </span>
              <button
                onClick={() => setStep('prep')}
                className="px-6 py-3 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-sm hover:bg-[#433B35] transition-all shadow-sm active:scale-95"
              >
                NEXT: PREPARE PAGE
              </button>
            </div>
          </div>
        ) : (
          /* Step 2: Physical Preparation Screen */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-[#EFE9DF] text-[#2D2723] flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-[#E06D53]" />
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
              Before You Start
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight mt-1">
              Grab your physical tools
            </h2>

            <div className="mt-6 bg-[#FAF7F2] rounded-2xl border-2 border-[#E8E0D5] p-5 text-left space-y-3.5 max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E06D53] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <p className="text-sm text-[#4A4037]">
                  <strong>Grab something to draw with:</strong> A sketchbook, scrap paper, pen, pencil, marker, or drawing tablet.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E06D53] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <p className="text-sm text-[#4A4037]">
                  <strong>Put your drawing surface somewhere comfortable.</strong>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E06D53] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <p className="text-sm text-[#4A4037]">
                  <strong>Tip:</strong> Keep Create Again beside your sketchbook so you can easily check the next instruction.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setStep('configure')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#D5C8B8] text-xs font-bold text-[#6D6156] hover:bg-[#EFE9DF]"
              >
                BACK
              </button>
              <button
                onClick={handleStart}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-extrabold text-sm shadow-md transition-all active:scale-95"
              >
                READY? START DRAWING
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
