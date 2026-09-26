import React from 'react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { Mode1Session } from '../../types/session';
import { getPathwayById } from '../../data/pathways';

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
  const pathwayName = session.pathway && session.pathway !== 'open'
    ? getPathwayById(session.pathway).name
    : 'What Comes Next?';
  const lastPrompt = session.promptHistory.length > 0
    ? session.promptHistory[session.promptHistory.length - 1].text
    : 'First mark';

  return (
    <section className="max-w-5xl mx-auto my-6 text-left">
      <div className="rounded-2xl bg-white border border-[#2752E7] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 stroke-[1.8]" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2752E7] mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#2752E7] animate-pulse" />
              <span className="font-mono-code text-[11px]">ACTIVE WORK IN PROGRESS</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#16171A] tracking-tight">
              {pathwayName}
            </h3>
            <p className="text-xs sm:text-sm text-[#686862] mt-0.5 line-clamp-1">
              "{lastPrompt}" · Step {promptCount} on paper
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={onStartNew}
            className="px-3.5 py-2 rounded-lg border border-[#E5E5DE] text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0] font-semibold text-xs transition-colors flex items-center gap-1.5 min-h-[40px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={onContinue}
            className="px-5 py-2 rounded-lg bg-[#2752E7] text-white hover:bg-[#1E40AF] font-semibold text-xs shadow-2xs transition-colors flex items-center gap-1.5 min-h-[40px]"
          >
            <span>Resume Drawing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
