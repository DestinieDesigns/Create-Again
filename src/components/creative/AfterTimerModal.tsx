import React from 'react';
import { Clock, Plus, Check, ArrowRight } from 'lucide-react';

interface AfterTimerModalProps {
  isOpen: boolean;
  onFinish: () => void;
  onKeepGoing: (extraSeconds: number) => void;
  onContinueUntimed: () => void;
  onClose?: () => void;
}

/**
 * Section 11: After-Timer Experience
 * Warm, non-punitive, supportive. The timer is an aid, not a test.
 */
export const AfterTimerModal: React.FC<AfterTimerModalProps> = ({
  isOpen,
  onFinish,
  onKeepGoing,
  onContinueUntimed,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Time's up alert"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5DE] text-center shadow-xl space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center mx-auto">
          <Clock className="w-6 h-6 stroke-[1.8]" />
        </div>

        <div className="space-y-1.5">
          <div className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#2752E7]">
            TIME'S UP
          </div>
          <h3 className="font-display text-2xl font-bold text-[#16171A] tracking-tight">
            Take a look at what you created.
          </h3>
          <p className="text-xs sm:text-sm text-[#686862] leading-relaxed">
            There is no score and no test. Feel free to keep adding details on your paper, or conclude this session.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          {/* Primary Action: I'm Done */}
          <button
            onClick={onFinish}
            className="w-full py-3.5 px-5 rounded-xl bg-[#16171A] text-white font-semibold text-sm hover:bg-[#2C2D32] transition-colors shadow-2xs flex items-center justify-center gap-2 min-h-[46px]"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>I'm Done Drawing</span>
          </button>

          {/* Secondary Action: Keep Going +5 Min */}
          <button
            onClick={() => onKeepGoing(300)}
            className="w-full py-3 px-5 rounded-xl bg-white border border-[#E5E5DE] text-[#16171A] font-semibold text-xs sm:text-sm hover:bg-[#F4F4F0] transition-colors flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Plus className="w-4 h-4 text-[#2752E7]" />
            <span>Keep Going (+5 min)</span>
          </button>

          {/* Tertiary Action: Continue without timer */}
          <button
            onClick={onContinueUntimed}
            className="w-full py-2.5 px-4 text-xs font-medium text-[#8A8A82] hover:text-[#16171A] transition-colors"
          >
            Continue Without Timer
          </button>
        </div>
      </div>
    </div>
  );
};
