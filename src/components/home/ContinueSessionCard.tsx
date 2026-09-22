import React from 'react';
import { ArrowRight, RotateCcw, Clock, Sparkles } from 'lucide-react';
import { Mode1Session } from '../../types/session';

interface ContinueSessionCardProps {
  session: Mode1Session | null;
  onContinue: () => void;
  onStartNew: () => void;
}

export const ContinueSessionCard: React.FC<ContinueSessionCardProps> = ({
  session,
  onContinue,
  onStartNew,
}) => {
  if (!session || session.completed) return null;

  const promptCount = session.usedPromptIds.length;
  const startedDate = new Date(session.startedAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <section className="max-w-4xl mx-auto px-4 my-6">
      <div className="rounded-3xl bg-[#FFF6EE] border-2 border-[#F0BC98] p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#E06D53] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#C04D33] font-mono-code">
              Unfinished Adventure
            </div>
            <h3 className="text-xl font-extrabold text-[#2D2723] tracking-tight">
              YOU LEFT SOMETHING BEHIND.
            </h3>
            <p className="text-sm text-[#665A51] mt-0.5">
              Your mystery drawing is waiting for you on your page ({promptCount} step{promptCount === 1 ? '' : 's'} in, started {startedDate}).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={onStartNew}
            className="px-4 py-2.5 rounded-xl border border-[#D5C2B4] text-[#7A6A5E] hover:bg-[#FBECE0] font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>START NEW</span>
          </button>

          <button
            onClick={onContinue}
            className="px-6 py-2.5 rounded-xl bg-[#E06D53] text-white hover:bg-[#CF5E45] font-extrabold text-xs shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>CONTINUE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
