import React from 'react';
import { FolderHeart, Sparkles, ArrowRight, Image as ImageIcon, Calendar } from 'lucide-react';
import { SavedCreation } from '../../types/session';

interface RecentCreationsSectionProps {
  creations: SavedCreation[];
  onOpenCreate: () => void;
  onViewAll: () => void;
}

export const RecentCreationsSection: React.FC<RecentCreationsSectionProps> = ({
  creations,
  onOpenCreate,
  onViewAll,
}) => {
  const hasCreations = creations && creations.length > 0;
  const recent = creations.slice(0, 4);

  return (
    <section className="max-w-5xl mx-auto my-8">
      <div className="flex items-center justify-between border-b border-[#E5E5DE] pb-2 text-xs text-[#686862] mb-4">
        <div className="flex items-center gap-2 font-semibold">
          <span className="font-mono-code text-[#16171A]">ARCHIVE</span>
          <span aria-hidden="true">·</span>
          <span>Recent Sketchbook Logs</span>
        </div>
        {hasCreations && (
          <button
            onClick={onViewAll}
            className="text-xs font-semibold text-[#16171A] hover:text-[#2752E7] flex items-center gap-1 transition-colors"
          >
            <span>All Creations ({creations.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {!hasCreations ? (
        /* Clean Editorial Empty State */
        <div className="rounded-2xl bg-white border border-dashed border-[#DCDCD4] p-8 sm:p-12 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#F4F4F0] text-[#686862] flex items-center justify-center mx-auto mb-3">
            <FolderHeart className="w-6 h-6 stroke-[1.8]" />
          </div>
          <h4 className="font-display text-xl font-bold text-[#16171A] tracking-tight">
            Your sketchbook archive is empty.
          </h4>
          <p className="text-sm text-[#686862] mt-1 max-w-sm mx-auto">
            It doesn't have to be perfect. Put pen to paper and record your first mark.
          </p>
          <div className="mt-5">
            <button
              onClick={onOpenCreate}
              className="px-5 py-2.5 rounded-lg bg-[#16171A] text-white font-semibold text-xs hover:bg-[#2C2D32] transition-colors inline-flex items-center gap-2 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A8C5FF]" />
              <span>Make Something</span>
            </button>
          </div>
        </div>
      ) : (
        /* Grid of Recent Creations */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {recent.map((creation) => (
            <div
              key={creation.id}
              className="bg-white rounded-xl border border-[#E5E5DE] hover:border-[#16171A] overflow-hidden flex flex-col justify-between p-4 shadow-2xs hover:shadow-xs transition-all"
            >
              <div>
                {/* Photo or Graphic Placeholder */}
                {creation.photoDataUrl || creation.photoUrl ? (
                  <div className="w-full h-32 rounded-lg overflow-hidden mb-3 border border-[#E5E5DE]">
                    <img
                      src={creation.photoDataUrl || creation.photoUrl}
                      alt={creation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-32 rounded-lg bg-[#FAF9F6] border border-[#E5E5DE] mb-3 flex flex-col items-center justify-center text-[#8A8A82]">
                    <ImageIcon className="w-6 h-6 stroke-[1.5] mb-1 text-[#CDCDC4]" />
                    <span className="text-[10px] font-mono-code">Analog Page</span>
                  </div>
                )}

                <h5 className="font-display font-bold text-sm text-[#16171A] line-clamp-1">
                  {creation.title}
                </h5>

                <div className="flex items-center gap-2 text-[11px] text-[#8A8A82] mt-1">
                  <span>{creation.mode}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-code">{creation.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
