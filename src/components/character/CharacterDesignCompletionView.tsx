import React, { useState } from 'react';
import {
  Camera,
  Check,
  Sparkles,
  ArrowRight,
  BookOpen,
  RotateCcw,
  Smile,
  Tag,
  AlertTriangle,
  User,
} from 'lucide-react';
import { CharacterSpark } from '../../data/characterDesignStages';
import { SavedCreation } from '../../types/session';

interface CharacterDesignCompletionViewProps {
  stagesCompleted: number;
  totalStages: number;
  spark?: CharacterSpark | null;
  durationMinutes: number;
  onSaveToCollection: (creation: Omit<SavedCreation, 'id' | 'timestamp'>) => void;
  onTryAnother: () => void;
  onViewCollection: () => void;
  onDoneForNow: () => void;
}

export const CharacterDesignCompletionView: React.FC<CharacterDesignCompletionViewProps> = ({
  stagesCompleted,
  totalStages,
  spark,
  durationMinutes,
  onSaveToCollection,
  onTryAnother,
  onViewCollection,
  onDoneForNow,
}) => {
  const [characterName, setCharacterName] = useState(spark ? spark.archetype : '');
  const [archetypeTag, setArchetypeTag] = useState(spark ? 'Stylized Archetype' : 'Character Study');
  const [reflectionMood, setReflectionMood] = useState('surprised-myself');
  const [notes, setNotes] = useState('');
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  // Unsaved changes check (Point 58)
  const hasUnsavedChanges = !isSaved && (characterName.trim().length > 0 || notes.trim().length > 0 || !!photoDataUrl);

  const handleGuardedAction = (action: () => void) => {
    if (hasUnsavedChanges) {
      setPendingAction(() => action);
      setShowUnsavedModal(true);
    } else {
      action();
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const titleToSave = characterName.trim() || 'Untitled Character';
    onSaveToCollection({
      title: titleToSave,
      mode: 'Character Design',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      completedAt: Date.now(),
      promptCount: stagesCompleted,
      durationMinutes: durationMinutes > 0 ? durationMinutes : 1,
      pathway: 'character-creator',
      themeId: 'characters',
      reflection: reflectionMood,
      photoDataUrl: photoDataUrl || undefined,
    });
    setIsSaved(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2723] flex flex-col font-sans py-8 px-4">
      <div className="max-w-2xl mx-auto w-full space-y-6 text-left">
        {/* Finishing Celebration (Points 29 & 53: Natural, non-repetitive encouragement) */}
        <section className="bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#2D2723] shadow-md text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF2E6] text-[#E06D53] flex items-center justify-center mx-auto mb-3">
            <User className="w-6 h-6" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
            YOU CREATED A CHARACTER.
          </h1>

          <p className="text-sm sm:text-base text-[#665A51] mt-2 font-medium max-w-md mx-auto">
            Take a moment to look at your page. You didn't need a perfect idea. You just started somewhere.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#FAF7F2] border border-[#E8E0D5] text-xs font-mono-code font-bold text-[#8A7D71]">
            <span>{stagesCompleted} STAGES EXPLORED</span>
            <span>•</span>
            <span>{durationMinutes > 0 ? `${durationMinutes} MIN` : 'DEVICE-DOWN PACE'}</span>
          </div>
        </section>

        {/* Reflection & Archive Form (Points 30 & 31) */}
        <section className="bg-[#FCFAF6] rounded-3xl p-6 sm:p-7 paper-card border-2 border-[#E8E0D5] space-y-5">
          <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
            WHAT DO YOU WANT TO REMEMBER?
          </div>

          {/* Name Field */}
          <div>
            <label className="text-xs font-bold text-[#2D2723] block mb-1">
              Character Name or Title
            </label>
            <input
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="e.g. Barnaby the Clockmaker, Soot Knight, Moss Forager..."
              className="w-full px-4 py-3 rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] text-sm font-bold text-[#2D2723] placeholder-[#A09386] focus:outline-none focus:border-[#2D2723]"
            />
          </div>

          {/* Mood / Feeling (Point 30: No 1-10 rating, just qualitative feeling) */}
          <div>
            <label className="text-xs font-bold text-[#2D2723] block mb-2">
              How did this session feel?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'fun', label: 'Fun' },
                { id: 'surprised-myself', label: 'Surprised myself' },
                { id: 'calm', label: 'Calm & focused' },
                { id: 'hard-to-start', label: 'Hard to start' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setReflectionMood(m.id)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all text-center min-h-[38px] ${
                    reflectionMood === m.id
                      ? 'bg-[#2D2723] text-white border-[#2D2723]'
                      : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sketchbook Notes */}
          <div>
            <label className="text-xs font-bold text-[#2D2723] block mb-1">
              Character Notes / Backstory (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What are they carrying? What's their habit or secret?"
              rows={2}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] text-xs font-medium text-[#2D2723] placeholder-[#A09386] focus:outline-none focus:border-[#2D2723]"
            />
          </div>

          {/* Photo Capture / Upload (Point 31: Record of what you created) */}
          <div>
            <label className="text-xs font-bold text-[#2D2723] block mb-2">
              Sketchbook Photo (Optional)
            </label>
            {photoDataUrl ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2D2723] bg-[#2D2723] max-h-64 flex items-center justify-center">
                <img
                  src={photoDataUrl}
                  alt="Physical character drawing"
                  className="w-full h-auto object-contain max-h-64"
                />
                <button
                  onClick={() => setPhotoDataUrl(null)}
                  className="absolute top-2 right-2 py-1 px-2.5 rounded-lg bg-[#2D2723]/80 hover:bg-[#2D2723] text-white text-xs font-bold"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="cursor-pointer border-2 border-dashed border-[#D8CEBE] hover:border-[#2D2723] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 bg-[#FAF7F2] transition-colors">
                <Camera className="w-6 h-6 text-[#8A7D71]" />
                <span className="text-xs font-bold text-[#55473B]">
                  Photograph your sketchbook page
                </span>
                <span className="text-[11px] text-[#8A7D71]">
                  A record of your work. Kept private on your device.
                </span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Save Button (Point 77: Primary action) */}
          <button
            onClick={handleSave}
            disabled={isSaved}
            className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 min-h-[52px] ${
              isSaved
                ? 'bg-[#3B6324] text-white cursor-default'
                : 'bg-[#2D2723] text-[#FAF7F2] hover:bg-[#433B35] active:scale-98'
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-5 h-5 text-white" />
                <span>SAVED TO COLLECTION</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#E5B574]" />
                <span>SAVE CHARACTER TO COLLECTION</span>
              </>
            )}
          </button>
        </section>

        {/* Secondary Navigation Options (Point 78) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={() => handleGuardedAction(onTryAnother)}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl border border-[#D8CEBE] bg-[#FCFAF6] hover:bg-[#EFE9DF] text-xs font-bold text-[#55473B] transition-all min-h-[44px] flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>CREATE ANOTHER</span>
          </button>

          <button
            onClick={() => handleGuardedAction(onViewCollection)}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl border border-[#D8CEBE] bg-[#FCFAF6] hover:bg-[#EFE9DF] text-xs font-bold text-[#55473B] transition-all min-h-[44px] flex items-center justify-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>VIEW IN COLLECTION</span>
          </button>

          <button
            onClick={() => handleGuardedAction(onDoneForNow)}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#2D2723] text-white hover:bg-[#433B35] text-xs font-bold transition-all min-h-[44px] flex items-center justify-center gap-1.5"
          >
            <span>DONE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Unsaved Changes Guard Dialog (Point 58) */}
      {showUnsavedModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
        >
          <div className="w-full max-w-sm bg-[#FCFAF6] rounded-3xl p-6 paper-card border-2 border-[#2D2723] text-center shadow-xl">
            <div className="w-10 h-10 rounded-full bg-[#FFEAE5] text-[#C04D33] flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#2D2723]">
              YOU HAVE UNSAVED CHANGES
            </h3>
            <p className="text-xs text-[#665A51] mt-1.5 leading-relaxed">
              You entered character notes or details that haven't been saved yet.
            </p>

            <div className="mt-5 space-y-2">
              <button
                onClick={() => {
                  handleSave();
                  setShowUnsavedModal(false);
                  if (pendingAction) pendingAction();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs hover:bg-[#433B35] min-h-[44px]"
              >
                SAVE & CONTINUE
              </button>

              <button
                onClick={() => {
                  setShowUnsavedModal(false);
                  if (pendingAction) pendingAction();
                }}
                className="w-full py-3 px-4 rounded-xl border border-[#D8CEBE] text-[#C04D33] font-bold text-xs hover:bg-[#EFE9DF] min-h-[44px]"
              >
                LEAVE WITHOUT SAVING
              </button>

              <button
                onClick={() => setShowUnsavedModal(false)}
                className="w-full py-2 text-xs font-bold text-[#8A7D71] hover:underline"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
