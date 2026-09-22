import React, { useState } from 'react';
import {
  FolderHeart,
  Calendar,
  Sparkles,
  Trash2,
  X,
  Image as ImageIcon,
  ArrowLeft,
  Share2,
} from 'lucide-react';
import { SavedCreation } from '../../types/session';

interface CollectionViewProps {
  creations: SavedCreation[];
  onOpenCreate: () => void;
  onBackToHome: () => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  creations,
  onOpenCreate,
  onBackToHome,
}) => {
  const [selectedCreation, setSelectedCreation] = useState<SavedCreation | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E0D5]">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2723] tracking-tight">
            My Sketchbook Collection
          </h1>
          <p className="text-sm font-handwriting text-xl text-[#6B5E53] mt-0.5">
            Every session, every physical drawing, every step you took.
          </p>
        </div>

        <button
          onClick={onOpenCreate}
          className="px-5 py-2.5 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-xs shadow-sm hover:bg-[#433B35] transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E5B574]" />
          <span>START NEW DRAWING</span>
        </button>
      </div>

      {/* Grid or Empty */}
      {creations.length === 0 ? (
        <div className="rounded-3xl bg-[#FCFAF6] border-2 border-dashed border-[#DDD2C4] p-12 text-center my-12 subtle-shadow">
          <div className="w-16 h-16 rounded-2xl bg-[#EFE9DF] text-[#7A6E63] flex items-center justify-center mx-auto mb-4">
            <FolderHeart className="w-8 h-8 text-[#E06D53]" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#2D2723]">
            NO CREATIONS SAVED YET.
          </h3>
          <p className="font-handwriting text-2xl text-[#6B5E53] mt-1 max-w-md mx-auto">
            Your sketchbook is waiting. Finish your first mystery session and save it here.
          </p>
          <div className="mt-6">
            <button
              onClick={onOpenCreate}
              className="px-6 py-3 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-xs shadow-md hover:bg-[#433B35] transition-all"
            >
              START A DRAWING SESSION
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {creations.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCreation(item)}
              className="bg-[#FCFAF6] rounded-2xl border-2 border-[#E8E0D5] p-5 subtle-shadow hover:scale-[1.01] hover:border-[#2D2723] cursor-pointer transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo snapshot if available */}
                {item.photoDataUrl || item.photoUrl ? (
                  <div className="w-full h-44 rounded-xl overflow-hidden mb-3 border border-[#E8E0D5]">
                    <img
                      src={item.photoDataUrl || item.photoUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-44 rounded-xl bg-[#F0EAE1] mb-3 flex flex-col items-center justify-center text-[#8C8074] border border-[#E2D8CC] p-4 text-center">
                    <ImageIcon className="w-8 h-8 mb-2 text-[#A39689]" />
                    <span className="text-xs font-handwriting text-[#5A5046] font-bold line-clamp-2 text-base">
                      "{item.promptsCompleted?.[0]?.text || item.promptsUsed?.[0] || 'Mystery Drawing'}"
                    </span>
                  </div>
                )}

                <h3 className="font-extrabold text-base text-[#2D2723] tracking-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-[#8A7D71] mt-1 font-mono-code">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(item.completedAt || item.timestamp).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{item.promptsCompleted?.length || item.promptCount || item.promptsUsed?.length || 0} steps</span>
                </div>
              </div>

              {item.reflection && (
                <div className="mt-4 pt-3 border-t border-[#EAE2D7] text-xs font-handwriting text-base font-bold text-[#6D6054]">
                  “{item.reflection}”
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedCreation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCreation(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code mb-1">
              Creation Details
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723]">
              {selectedCreation.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-[#8A7D71] mt-1 mb-4 font-mono-code">
              <span>{new Date(selectedCreation.completedAt || selectedCreation.timestamp).toLocaleString()}</span>
              <span>•</span>
              <span>{selectedCreation.promptsCompleted?.length || selectedCreation.promptCount || selectedCreation.promptsUsed?.length || 0} steps</span>
              {selectedCreation.reflection && (
                <>
                  <span>•</span>
                  <span className="font-sans font-bold text-[#E06D53]">
                    {selectedCreation.reflection}
                  </span>
                </>
              )}
            </div>

            {/* Photo preview */}
            {(selectedCreation.photoDataUrl || selectedCreation.photoUrl) && (
              <div className="rounded-2xl overflow-hidden border-2 border-[#2D2723] my-4 shadow-sm">
                <img
                  src={selectedCreation.photoDataUrl || selectedCreation.photoUrl}
                  alt={selectedCreation.title}
                  className="w-full max-h-80 object-contain bg-[#1F1B18]"
                />
              </div>
            )}

            {/* Prompts list */}
            <div className="mt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-[#7A6D63] block mb-2 font-mono-code">
                Prompts from this session
              </label>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {(selectedCreation.promptsCompleted || []).map((p, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] text-xs flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#EFE9DF] text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-[#2D2723]">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E0D5] flex justify-end">
              <button
                onClick={() => setSelectedCreation(null)}
                className="px-6 py-2.5 rounded-xl bg-[#2D2723] text-[#FAF7F2] text-xs font-extrabold"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
