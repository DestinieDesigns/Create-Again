import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Camera,
  Upload,
  Check,
  FolderHeart,
  RotateCcw,
  ArrowRight,
  Heart,
  Calendar,
  Layers,
  History,
  Maximize2,
  Clock,
} from 'lucide-react';
import { Mode1Session, SavedCreation } from '../../types/session';
import { SessionHistoryModal, getCategoryBadgeStyle } from './SessionHistoryModal';
import { getPathwayById } from '../../data/pathways';

interface Mode1CompletionViewProps {
  session: Mode1Session;
  onSaveToCollection: (creation: SavedCreation) => void;
  onTryAnother: () => void;
  onViewCollection: () => void;
  onDoneForNow: () => void;
}

export const Mode1CompletionView: React.FC<Mode1CompletionViewProps> = ({
  session,
  onSaveToCollection,
  onTryAnother,
  onViewCollection,
  onDoneForNow,
}) => {
  const [title, setTitle] = useState('');
  const [reflection, setReflection] = useState<string | null>(null);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reflectionOptions = [
    'Hard to start',
    'Okay',
    'Fun',
    'Really fun',
    'I surprised myself',
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const savedItem: SavedCreation = {
      id: 'creation-' + Date.now(),
      sessionId: session.id,
      title: title.trim() || 'Untitled Sketch',
      mode: 'Mode 1: What Comes Next?',
      pathway: session.pathway,
      date: new Date().toISOString().split('T')[0],
      timestamp: Date.now(),
      completedAt: Date.now(),
      promptCount: session.promptHistory.length,
      promptsCompleted: session.promptHistory,
      promptsUsed: session.promptHistory.map((p) => p.text),
      reflection: reflection || undefined,
      photoDataUrl: photoDataUrl || undefined,
    };
    onSaveToCollection(savedItem);
    setIsSaved(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="rounded-3xl bg-[#FCFAF6] border-3 border-[#2D2723] p-6 sm:p-10 paper-card subtle-shadow">
        {/* Celebration Header */}
        <div className="text-center pb-6 border-b border-[#E8E0D5]">
          <div className="w-14 h-14 rounded-2xl bg-[#EFE9DF] text-[#E06D53] flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Sparkles className="w-7 h-7" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
              Adventure Complete
            </span>
            {session.pathway && session.pathway !== 'open' && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full font-mono-code bg-[#EFE9DF] text-[#4A3F35] border border-[#D8CEBE]">
                {getPathwayById(session.pathway).name}
              </span>
            )}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2723] tracking-tight mt-1">
            YOU CREATED SOMETHING.
          </h2>
          <p className="font-handwriting text-2xl text-[#63554A] font-bold mt-1">
            Look at what you made on your page.
          </p>
          <p className="text-xs text-[#8A7D71] mt-1">
            {session.usedPromptIds.length} steps added to your sketchbook without overthinking.
          </p>
        </div>

        {/* Reflection Section */}
        <div className="py-6 border-b border-[#E8E0D5]">
          <label className="text-xs font-bold uppercase tracking-wider text-[#7A6D63] block mb-2.5 font-mono-code text-center sm:text-left">
            How did that feel?
          </label>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {reflectionOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setReflection(opt)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  reflection === opt
                    ? 'bg-[#2D2723] text-[#FAF7F2] shadow-xs'
                    : 'bg-[#FAF7F2] border border-[#D8CEBE] text-[#63554A] hover:bg-[#EFE9DF]'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Name and Photo */}
        <div className="py-6 border-b border-[#E8E0D5] space-y-5">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#7A6D63] block mb-1.5 font-mono-code">
              Name your drawing (optional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. The Wandering Machine, Mystery Tree, First Mark..."
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border-2 border-[#D8CEBE] text-sm text-[#2D2723] font-semibold placeholder:text-[#A89C8F] focus:outline-hidden focus:border-[#2D2723]"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#7A6D63] block mb-1.5 font-mono-code">
              Save a photo of your paper (optional)
            </label>

            {photoDataUrl ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2D2723] max-w-sm mx-auto shadow-sm">
                <img
                  src={photoDataUrl}
                  alt="Your physical drawing"
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => setPhotoDataUrl(null)}
                  className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-[#2D2723]/80 text-white text-xs font-bold backdrop-blur-xs"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="rounded-2xl border-2 border-dashed border-[#D8CEBE] bg-[#FAF7F2] p-5 text-center cursor-pointer hover:bg-[#F2EDE4] transition-colors"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Camera className="w-6 h-6 text-[#8A7D71] mx-auto mb-1.5" />
                <div className="text-xs font-bold text-[#2D2723]">
                  Snap a photo with your phone or upload a snapshot
                </div>
                <div className="text-[11px] text-[#8A7D71] font-handwriting text-base mt-0.5">
                  Save your real sketchbook mark into your collection
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Session History View */}
        <div className="py-6 border-b border-[#E8E0D5]">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-[#E06D53]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A6D63] font-mono-code">
                Session History
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8A7D71] font-mono-code bg-[#FAF7F2] border border-[#E8E0D5] px-2.5 py-0.5 rounded-lg">
                {session.promptHistory.length} steps completed
              </span>

              {session.promptHistory.length > 0 && (
                <button
                  onClick={() => setIsHistoryModalOpen(true)}
                  className="text-xs font-bold text-[#E06D53] hover:text-[#C04D33] flex items-center gap-1 hover:underline transition-colors"
                  title="Expand to detailed timeline"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Expand</span>
                </button>
              )}
            </div>
          </div>

          <p className="text-xs text-[#736558] mb-3 font-handwriting text-base">
            Review the sequence of prompts that shaped your sketchbook drawing:
          </p>

          {/* Sequential Step Cards */}
          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            {session.promptHistory.length === 0 ? (
              <div className="text-center py-6 text-xs text-[#8A7D71] font-mono-code">
                No prompt sequence recorded.
              </div>
            ) : (
              session.promptHistory.map((item, index) => {
                const stepSeconds =
                  item.shownAt && item.completedAt
                    ? Math.max(1, Math.round((item.completedAt - item.shownAt) / 1000))
                    : null;

                return (
                  <div
                    key={`${item.promptId}-${index}`}
                    className="p-3 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] hover:border-[#D5C9BC] transition-all flex items-start gap-3"
                  >
                    {/* Step Number */}
                    <div className="w-6 h-6 rounded-lg bg-[#2D2723] text-[#FAF7F2] text-[11px] font-mono-code font-extrabold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      {index + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {/* Chosen Category Badge */}
                        <span
                          className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${getCategoryBadgeStyle(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>

                        {/* Step Time */}
                        {stepSeconds && (
                          <span className="text-[10px] font-mono-code text-[#8A7D71] flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5 text-[#A89C8F]" />
                            {stepSeconds < 60 ? `${stepSeconds}s` : `${Math.floor(stepSeconds / 60)}m ${stepSeconds % 60}s`}
                          </span>
                        )}
                      </div>

                      {/* Prompt Text */}
                      <p className="text-xs sm:text-sm font-extrabold text-[#2D2723] leading-snug">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 space-y-3">
          {!isSaved ? (
            <button
              onClick={handleSave}
              className="w-full py-4 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-extrabold text-sm tracking-wide shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <FolderHeart className="w-4 h-4" />
              <span>SAVE TO MY COLLECTION</span>
            </button>
          ) : (
            <div className="py-3 px-4 rounded-xl bg-[#E9F5ED] border border-[#A7D7B5] text-[#1E5631] text-xs font-bold flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>SAVED TO COLLECTION!</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
            <button
              onClick={onTryAnother}
              className="w-full sm:flex-1 py-3 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-xs hover:bg-[#433B35] transition-all flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>TRY ANOTHER MYSTERY</span>
            </button>

            <button
              onClick={onViewCollection}
              className="w-full sm:flex-1 py-3 rounded-xl border border-[#D8CEBE] text-[#5C5046] font-bold text-xs hover:bg-[#EFE9DF] transition-all"
            >
              VIEW COLLECTION
            </button>

            <button
              onClick={onDoneForNow}
              className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold text-[#8A7D71] hover:text-[#2D2723]"
            >
              DONE FOR NOW
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Session History Modal */}
      <SessionHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        promptHistory={session.promptHistory}
        startedAt={session.startedAt}
        completedAt={session.completedAt}
      />
    </div>
  );
};
