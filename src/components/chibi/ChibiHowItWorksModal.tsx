import React from 'react';
import {
  X,
  Sparkles,
  HelpCircle,
  Eye,
  Pencil,
  BookOpen,
  Compass,
  CheckCircle2,
  Dice5,
} from 'lucide-react';

interface ChibiHowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChibiHowItWorksModal: React.FC<ChibiHowItWorksModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="How Chibi Journey Works"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/65 backdrop-blur-xs animate-fadeIn text-[#2D2723]"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] paper-card subtle-shadow flex flex-col overflow-hidden text-left max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FBEFEA] text-[#E06D53] flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A7D71]">
                Core Principles
              </div>
              <h2 className="text-lg sm:text-xl font-black text-[#2D2723]">
                HOW CHIBI JOURNEY WORKS
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#5C5249] leading-relaxed">
          {/* Principle 1 */}
          <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] space-y-1.5">
            <h3 className="font-extrabold text-[#2D2723] text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
              <span>1. Guided Character Development, Not Random Prompts</span>
            </h3>
            <p>
              Each stage builds upon your previous decisions. If you chose a cozy
              theme, later clothing and accessory suggestions will complement that vibe
              while still keeping full creative control in your hands.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] space-y-1.5">
            <h3 className="font-extrabold text-[#2D2723] text-sm flex items-center gap-2">
              <Dice5 className="w-4 h-4 text-[#E06D53]" />
              <span>2. Structured Randomness ("CHOOSE FOR ME")</span>
            </h3>
            <p>
              The <strong>CHOOSE FOR ME</strong> button makes a compatible suggestion for the
              CURRENT stage only. It will never randomly wipe or alter your previously completed
              decisions.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] space-y-1.5">
            <h3 className="font-extrabold text-[#2D2723] text-sm flex items-center gap-2">
              <Pencil className="w-4 h-4 text-[#E06D53]" />
              <span>3. Look → Read → Put Device Down → Draw</span>
            </h3>
            <p>
              Create Again is designed as a companion to your physical sketchbook or drawing tablet.
              Read the drawing challenge, put your phone down, draw on paper, and return when you're
              ready.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] space-y-1.5">
            <h3 className="font-extrabold text-[#2D2723] text-sm flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#E06D53]" />
              <span>4. Visual Teaching References on Every Stage</span>
            </h3>
            <p>
              Every single option is accompanied by a hand-drawn sketchbook diagram showing
              construction lines, silhouette tips, and "what to notice on paper."
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E8E0D5] bg-[#FCFAF6] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#2D2723] text-white font-bold text-xs hover:bg-[#433A34]"
          >
            GOT IT, LET’S DRAW
          </button>
        </div>
      </div>
    </div>
  );
};
