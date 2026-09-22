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
    <section className="max-w-4xl mx-auto px-4 my-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
            Sketchbook Logs
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
            Recent creations
          </h3>
        </div>
        {hasCreations && (
          <button
            onClick={onViewAll}
            className="text-xs font-bold text-[#E06D53] hover:text-[#C04D33] flex items-center gap-1 transition-colors"
          >
            <span>View All ({creations.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {!hasCreations ? (
        /* Empty State */
        <div className="rounded-3xl bg-[#FCFAF6] border-2 border-dashed border-[#DDD2C4] p-8 sm:p-12 text-center subtle-shadow">
          <div className="w-14 h-14 rounded-2xl bg-[#EFE9DF] text-[#786D63] flex items-center justify-center mx-auto mb-4">
            <FolderHeart className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-extrabold text-[#2D2723] tracking-tight">
            YOUR FIRST CREATION IS WAITING.
          </h4>
          <p className="font-handwriting text-xl text-[#786D63] mt-1 max-w-sm mx-auto">
            It doesn't have to be good. It just has to exist.
          </p>
          <div className="mt-6">
            <button
              onClick={onOpenCreate}
              className="px-6 py-2.5 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-xs hover:bg-[#433B35] transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5B574]" />
              <span>MAKE SOMETHING</span>
            </button>
          </div>
        </div>
      ) : (
        /* Grid of Recent Creations */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {recent.map((creation) => (
            <div
              key={creation.id}
              className="bg-[#FCFAF6] rounded-2xl border-2 border-[#E8E0D5] overflow-hidden flex flex-col justify-between p-4 subtle-shadow transition-all hover:scale-[1.01]"
            >
              <div>
                {/* Photo or Graphic Placeholder */}
                {creation.photoDataUrl || creation.photoUrl ? (
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-3 border border-[#E8E0D5]">
                    <img
                      src={creation.photoDataUrl || creation.photoUrl}
                      alt={creation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-32 rounded-xl bg-[#F0EAE1] mb-3 flex flex-col items-center justify-center text-[#8C8074] border border-[#E2D8CC] p-3 text-center">
                    <ImageIcon className="w-6 h-6 mb-1 text-[#A39689]" />
                    <span className="text-[11px] font-handwriting text-[#5A5046] font-bold line-clamp-2">
                      "{creation.promptsCompleted?.[0]?.text || creation.promptsUsed?.[0] || 'Mystery Sketch'}"
                    </span>
                  </div>
                )}

                <h4 className="font-extrabold text-sm text-[#2D2723] line-clamp-1">
                  {creation.title}
                </h4>

                <div className="flex items-center gap-1.5 text-[11px] text-[#7A6F65] mt-1 font-mono-code">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(creation.completedAt || creation.timestamp).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#EAE2D7] flex items-center justify-between text-[11px]">
                <span className="px-2 py-0.5 rounded-full bg-[#EFE9DF] text-[#5A4F46] font-semibold">
                  {creation.promptsCompleted?.length || creation.promptCount || creation.promptsUsed?.length || 0} steps
                </span>
                {creation.reflection && (
                  <span className="text-[#87786B] italic font-handwriting text-sm">
                    {creation.reflection}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
