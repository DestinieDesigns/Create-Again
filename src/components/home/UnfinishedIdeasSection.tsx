import React from 'react';
import { Sparkles, ArrowRight, Lightbulb } from 'lucide-react';
import { Mode1Session } from '../../types/session';

interface UnfinishedIdeasSectionProps {
  session: Mode1Session | null;
  onResume: () => void;
  onNew: () => void;
}

export const UnfinishedIdeasSection: React.FC<UnfinishedIdeasSectionProps> = ({
  session,
  onResume,
  onNew,
}) => {
  const hasUnfinished = session && !session.completed;

  return (
    <section className="max-w-5xl mx-auto my-8">
      <div className="rounded-2xl bg-white border border-[#E5E5DE] p-6 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#F4F4F0] text-[#686862] shrink-0">
            <Lightbulb className="w-5 h-5 stroke-[1.8]" />
          </div>
          <div>
            <h4 className="font-display text-base sm:text-lg font-bold text-[#16171A] tracking-tight">
              {hasUnfinished ? "An idea in progress waits on your desk" : "Clean desk, blank page"}
            </h4>
            <p className="text-xs sm:text-sm text-[#686862] mt-0.5">
              {hasUnfinished
                ? 'Drawings do not have to be finished in one sitting. Pick up where your hand stopped.'
                : 'No pending drawings. The next page is completely yours.'}
            </p>
          </div>
        </div>

        {hasUnfinished ? (
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onNew}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0] transition-colors min-h-[38px]"
            >
              Start New
            </button>
            <button
              onClick={onResume}
              className="px-4 py-2 rounded-lg bg-[#16171A] text-white text-xs font-semibold hover:bg-[#2C2D32] transition-colors flex items-center gap-1.5 min-h-[38px]"
            >
              <span>Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center w-full sm:w-auto justify-end">
            <button
              onClick={onNew}
              className="px-4 py-2 rounded-lg bg-[#16171A] text-white text-xs font-semibold hover:bg-[#2C2D32] transition-colors flex items-center gap-1.5 min-h-[38px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A8C5FF]" />
              <span>New Drawing</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
