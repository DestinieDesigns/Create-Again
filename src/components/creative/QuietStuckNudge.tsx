import React, { useState } from 'react';
import { HelpCircle, RefreshCw, X, Sparkles } from 'lucide-react';

interface QuietStuckNudgeProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
  themeId?: string;
  initialNudge?: string;
}

const DEFAULT_NUDGES = [
  'Give your character something to hold.',
  'Try a book, flower, cup, tool, or small animal.',
  'Make one shape slightly bigger or exaggerated.',
  'Draw a small shadow or patch of ground underneath so it stands firmly.',
  'Add an unexpected tiny texture: stripes, dots, or stitches.',
  'Turn any mistake into a quirky accessory or background leaf.',
  'Draw a tiny companion peeking in from the side.',
  'Connect two disconnected lines with a relaxed curve.',
];

/**
 * Section 12: Quiet "I'm Stuck" Rescue Nudge
 * Small, supportive, never wipes drawing or restarts the activity.
 */
export const QuietStuckNudge: React.FC<QuietStuckNudgeProps> = ({
  isOpen,
  onClose,
  initialNudge,
}) => {
  const [index, setIndex] = useState(0);

  if (!isOpen) return null;

  const currentNudge = initialNudge && index === 0 ? initialNudge : DEFAULT_NUDGES[index % DEFAULT_NUDGES.length];

  const handleAnotherNudge = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Creative nudge"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E5DE] text-center shadow-xl space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#8A8A82] hover:text-[#16171A] hover:bg-[#F4F4F0] transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-10 h-10 rounded-2xl bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center mx-auto">
          <Sparkles className="w-5 h-5 stroke-[1.8]" />
        </div>

        <div className="space-y-1">
          <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
            TRY THIS:
          </div>
          <h4 className="font-display text-lg sm:text-xl font-bold text-[#16171A] leading-snug">
            {currentNudge}
          </h4>
        </div>

        <p className="text-[11px] text-[#8A8A82]">
          Make any single mark on your paper to break the hesitation.
        </p>

        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={handleAnotherNudge}
            className="flex-1 py-2.5 px-3 rounded-xl border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#16171A] flex items-center justify-center gap-1.5 transition-colors min-h-[42px]"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#686862]" />
            <span>Another Nudge</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#16171A] text-white text-xs font-semibold hover:bg-[#2C2D32] transition-colors min-h-[42px]"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
