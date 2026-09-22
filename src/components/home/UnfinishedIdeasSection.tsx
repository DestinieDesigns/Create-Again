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
  return (
    <section className="max-w-4xl mx-auto px-4 my-8">
      <div className="rounded-3xl bg-[#FAF7F2] border-2 border-[#E8E0D5] p-6 subtle-shadow flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-2xl bg-[#EFE9DF] text-[#7A6D61] shrink-0">
            <Lightbulb className="w-5 h-5 text-[#E06D53]" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-[#2D2723] tracking-tight">
              NOT FINISHED YET? That's okay.
            </h4>
            <p className="text-sm font-handwriting text-[#5A5046] text-lg mt-0.5">
              Some ideas need time. You can always pick up a drawing tomorrow.
            </p>
          </div>
        </div>

        {session && !session.completed ? (
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onNew}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#6D6156] hover:bg-[#EFE9DF] transition-colors"
            >
              Start New
            </button>
            <button
              onClick={onResume}
              className="px-4 py-2 rounded-xl bg-[#2D2723] text-[#FAF7F2] text-xs font-bold hover:bg-[#433B35] transition-colors flex items-center gap-1.5"
            >
              <span>Resume Current</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="text-xs text-[#8A7D71] font-medium italic">
            Keep your sketchbook open beside your desk.
          </div>
        )}
      </div>
    </section>
  );
};
