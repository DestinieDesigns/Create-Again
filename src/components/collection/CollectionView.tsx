import React, { useState } from 'react';
import {
  FolderHeart,
  Calendar,
  Sparkles,
  Trash2,
  X,
  Image as ImageIcon,
  ArrowLeft,
  Clock,
} from 'lucide-react';
import { SavedCreation } from '../../types/session';

interface CollectionViewProps {
  creations: SavedCreation[];
  onOpenCreate: () => void;
  onBackToHome: () => void;
  onDeleteCreation?: (id: string) => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  creations,
  onOpenCreate,
  onBackToHome,
  onDeleteCreation,
}) => {
  const [selectedCreation, setSelectedCreation] = useState<SavedCreation | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'character', label: 'Characters' },
    { id: 'nature', label: 'Nature' },
    { id: 'design', label: 'Designs' },
  ];

  const filteredCreations = creations.filter((c) => {
    if (activeFilter === 'all') return true;
    const title = (c.title || '').toLowerCase();
    const pathway = (c.pathway || '').toLowerCase();
    const prompts = (c.promptsUsed || []).join(' ').toLowerCase();
    const blob = `${title} ${pathway} ${prompts}`;
    if (activeFilter === 'character') return blob.includes('character') || blob.includes('face') || blob.includes('head');
    if (activeFilter === 'nature') return blob.includes('nature') || blob.includes('tree') || blob.includes('plant') || blob.includes('animal');
    if (activeFilter === 'design') return blob.includes('design') || blob.includes('graphic') || blob.includes('pattern');
    return true;
  });

  const handleDeleteConfirm = () => {
    if (itemToDelete && onDeleteCreation) {
      onDeleteCreation(itemToDelete);
      if (selectedCreation?.id === itemToDelete) {
        setSelectedCreation(null);
      }
      setItemToDelete(null);
    }
  };

  return (
    <div className="app-container py-6 sm:py-10 animate-fadeIn text-left">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E0D5]">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] mb-2 transition-colors min-h-[44px] -ml-1 px-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2D2723] tracking-tight font-sans">
            MY COLLECTION
          </h1>
          <p className="text-xs sm:text-sm font-handwriting text-lg sm:text-xl text-[#7A6E63] mt-0.5">
            Your personal sketchbook archive. No likes, no comments, no scores.
          </p>
        </div>

        <button
          onClick={onOpenCreate}
          className="py-3 px-5 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-xs sm:text-sm shadow-md hover:bg-[#433B35] transition-all flex items-center justify-center gap-2 min-h-[48px]"
        >
          <Sparkles className="w-4 h-4 text-[#E5B574]" />
          <span>START NEW DRAWING</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 py-4 border-b border-[#EAE2D7] overflow-x-auto no-scrollbar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all min-h-[38px] ${
              activeFilter === tab.id
                ? 'bg-[#2D2723] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#655A51] border border-[#E8E0D5] hover:bg-[#EFE9DF]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid or Empty State */}
      {filteredCreations.length === 0 ? (
        <div className="rounded-3xl bg-[#FCFAF6] border-2 border-dashed border-[#DDD2C4] p-8 sm:p-14 text-center my-10 subtle-shadow max-w-xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-[#EFE9DF] text-[#7A6E63] flex items-center justify-center mx-auto mb-3">
            <FolderHeart className="w-7 h-7 text-[#E06D53]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2723]">
            YOUR COLLECTION IS EMPTY
          </h2>
          <p className="font-handwriting text-xl text-[#7A6E63] mt-1 max-w-md mx-auto">
            That's okay. Your first creation can go here.
          </p>
          <div className="mt-5">
            <button
              onClick={onOpenCreate}
              className="py-3.5 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-xs shadow-md hover:bg-[#433B35] transition-all min-h-[48px]"
            >
              START CREATING
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 my-6">
          {filteredCreations.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCreation(item)}
              className="bg-[#FCFAF6] rounded-2xl border-2 border-[#E8E0D5] p-3 sm:p-4 subtle-shadow hover:scale-[1.01] hover:border-[#2D2723] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo snapshot if available, or placeholder doodle */}
                {item.photoDataUrl || item.photoUrl ? (
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-2.5 border border-[#E8E0D5]">
                    <img
                      src={item.photoDataUrl || item.photoUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-square rounded-xl bg-[#F0EAE1] mb-2.5 flex flex-col items-center justify-center text-[#8C8074] border border-[#E2D8CC] p-3 text-center">
                    <ImageIcon className="w-6 h-6 mb-1 text-[#A39689]" />
                    <span className="text-[11px] font-handwriting text-[#5A5046] font-bold line-clamp-2">
                      "{item.promptsCompleted?.[0]?.text || item.promptsUsed?.[0] || 'Drawing'}"
                    </span>
                  </div>
                )}

                <h3 className="font-extrabold text-xs sm:text-sm text-[#2D2723] truncate">
                  {item.title || 'Untitled Sketch'}
                </h3>

                <div className="flex items-center gap-1 text-[11px] text-[#8A7D71] mt-1 font-mono-code">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-[#EAE2D7] flex items-center justify-between text-[11px] text-[#7A6E63]">
                <span>{item.promptsUsed?.length || item.promptCount || 1} steps</span>
                {item.reflection && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#EFE9DF] text-[#554A40]">
                    {item.reflection}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Creation Detail Modal */}
      {selectedCreation && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
        >
          <div className="relative w-full max-w-lg bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setSelectedCreation(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A7D71] mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedCreation.date}</span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#2D2723] tracking-tight">
              {selectedCreation.title || 'Untitled Sketch'}
            </h2>

            {/* Photo preview */}
            {(selectedCreation.photoDataUrl || selectedCreation.photoUrl) && (
              <div className="mt-4 rounded-2xl overflow-hidden border-2 border-[#2D2723] shadow-sm max-h-72">
                <img
                  src={selectedCreation.photoDataUrl || selectedCreation.photoUrl}
                  alt={selectedCreation.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Reflection tag */}
            {selectedCreation.reflection && (
              <div className="mt-4 inline-block px-3 py-1 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] text-xs font-bold text-[#655A50]">
                Feeling: {selectedCreation.reflection}
              </div>
            )}

            {/* Prompts used */}
            <div className="mt-5">
              <div className="text-xs font-mono-code font-bold uppercase text-[#8A7D71] mb-2">
                Prompts from this session ({selectedCreation.promptsUsed?.length || 0}):
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {(selectedCreation.promptsUsed || []).map((promptText, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D7] text-xs text-[#2D2723] flex items-start gap-2"
                  >
                    <span className="font-mono-code font-bold text-[#8A7D71]">{idx + 1}.</span>
                    <span>{promptText}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer / Delete */}
            <div className="mt-6 pt-4 border-t border-[#E8E0D5] flex items-center justify-between">
              {onDeleteCreation && (
                <button
                  onClick={() => setItemToDelete(selectedCreation.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C04D33] hover:text-[#9A351E] py-2"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              )}

              <button
                onClick={() => setSelectedCreation(null)}
                className="px-5 py-2.5 rounded-xl bg-[#2D2723] text-white font-bold text-xs hover:bg-[#433B35] ml-auto min-h-[40px]"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog (Point 80) */}
      {itemToDelete && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
        >
          <div className="w-full max-w-sm bg-[#FCFAF6] rounded-3xl p-6 paper-card border-2 border-[#2D2723] text-center shadow-xl">
            <h3 className="text-lg font-extrabold text-[#2D2723]">
              DELETE THIS CREATION?
            </h3>
            <p className="text-xs text-[#665A51] mt-1.5">
              This cannot be undone.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={() => setItemToDelete(null)}
                className="flex-1 py-2.5 rounded-xl border border-[#D8CEBE] text-[#6E6054] font-bold text-xs hover:bg-[#EFE9DF] min-h-[40px]"
              >
                KEEP IT
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 py-2.5 rounded-xl bg-[#C04D33] text-white font-extrabold text-xs hover:bg-[#A33B23] min-h-[40px]"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
