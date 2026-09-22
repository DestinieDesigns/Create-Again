import React, { useState } from 'react';
import { X, Sparkles, HelpCircle, Flame, Dices, Trophy, ArrowRight } from 'lucide-react';

interface FirstTimeExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatIs: () => void;
  onSelectFlow: (flowId: 'dont-know' | 'practice' | 'experiment' | 'skills') => void;
}

export const FirstTimeExperienceModal: React.FC<FirstTimeExperienceModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatIs,
  onSelectFlow,
}) => {
  const [step, setStep] = useState<'welcome' | 'intent'>('welcome');

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Create Again"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#2D2723] shadow-xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'welcome' ? (
          <div className="text-center py-2 sm:py-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF2E6] text-[#E06D53] flex items-center justify-center mx-auto mb-4 shadow-xs">
              <Sparkles className="w-7 h-7" />
            </div>

            <div className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#8A7D71] mb-1">
              WELCOME
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2723] tracking-tight font-sans">
              CREATE AGAIN
            </h2>

            <div className="my-6 space-y-2 text-base sm:text-lg text-[#55473B] font-medium leading-relaxed max-w-sm mx-auto">
              <p>You don't need to know what to draw.</p>
              <p>You don't need to be "good at art."</p>
              <p className="font-extrabold text-[#2D2723]">
                You just need somewhere to start.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => setStep('intent')}
                className="w-full py-4 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 min-h-[52px]"
              >
                <span>I WANT TO CREATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenWhatIs();
                }}
                className="text-xs font-bold text-[#7A6E63] hover:text-[#2D2723] transition-colors py-2"
              >
                What is Create Again?
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="pb-4 border-b border-[#E8E0D5]">
              <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-1">
                FIRST STEP
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans">
                WHAT BRINGS YOU HERE?
              </h2>
              <p className="text-xs sm:text-sm text-[#7A6E63] font-handwriting text-lg sm:text-xl mt-0.5">
                Pick what sounds good right now. You're never locked in.
              </p>
            </div>

            <div className="my-5 space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  onSelectFlow('dont-know');
                }}
                className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] hover:border-[#2D2723] transition-all text-left group flex items-center justify-between min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF2E6] text-[#E06D53] flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-[#2D2723] group-hover:text-[#E06D53]">
                      I DON'T KNOW WHAT TO DRAW
                    </span>
                    <span className="block text-[11px] text-[#7A6E63]">
                      Answer 3 quick questions for a calm starting mark.
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A7D71] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectFlow('practice');
                }}
                className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] hover:border-[#2D2723] transition-all text-left group flex items-center justify-between min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F4EB] text-[#606C38] flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-[#2D2723] group-hover:text-[#606C38]">
                      I WANT TO PRACTICE
                    </span>
                    <span className="block text-[11px] text-[#7A6E63]">
                      Quick 2-minute hand looseners and warm-ups.
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A7D71] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectFlow('experiment');
                }}
                className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] hover:border-[#2D2723] transition-all text-left group flex items-center justify-between min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF6E4] text-[#DDA15E] flex items-center justify-center shrink-0">
                    <Dices className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-[#2D2723] group-hover:text-[#B0722A]">
                      I WANT TO EXPERIMENT
                    </span>
                    <span className="block text-[11px] text-[#7A6E63]">
                      Weird, funny combinations with Creative Chaos.
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A7D71] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectFlow('skills');
                }}
                className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] hover:border-[#2D2723] transition-all text-left group flex items-center justify-between min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] text-[#7A6E63] flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-[#2D2723] group-hover:text-[#2D2723]">
                      I WANT TO BUILD MY SKILLS
                    </span>
                    <span className="block text-[11px] text-[#7A6E63]">
                      Explore Character Creator and What Comes Next pathways.
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A7D71] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
