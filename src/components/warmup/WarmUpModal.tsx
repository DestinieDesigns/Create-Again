import React, { useState, useEffect } from 'react';
import {
  X,
  Flame,
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import {
  WarmUpCategory,
  WARM_UP_CATEGORIES,
  CATEGORY_WARM_UPS,
  WarmUpExerciseItem,
} from '../../data/warmUpExercises';
import { getThemeById } from '../../data/themes';
import { getVisualReferenceById } from '../../data/visualReferences';
import { VisualReferencePanel } from '../visual/VisualReferencePanel';

interface WarmUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinishWarmUp: () => void;
  themeId?: string | null;
}

export const WarmUpModal: React.FC<WarmUpModalProps> = ({
  isOpen,
  onClose,
  onFinishWarmUp,
  themeId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<WarmUpCategory | 'all'>('all');
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(CATEGORY_WARM_UPS[0].id);
  const [durationMinutes, setDurationMinutes] = useState<number>(2);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [completed, setCompleted] = useState(false);
  const [showVisualRef, setShowVisualRef] = useState(false);

  const activeTheme = getThemeById(themeId);

  useEffect(() => {
    if (isOpen) {
      setSelectedCategory('all');
      setSelectedExerciseId(CATEGORY_WARM_UPS[0].id);
      setIsRunning(false);
      setTimeLeft(durationMinutes * 60);
      setCompleted(false);
      setShowVisualRef(false);
    }
  }, [isOpen, themeId]);

  const handleDurationChange = (mins: number) => {
    setDurationMinutes(mins);
    setIsRunning(false);
    setTimeLeft(mins * 60);
    setCompleted(false);
  };

  const displayedExercises = React.useMemo(() => {
    if (selectedCategory === 'all') {
      return CATEGORY_WARM_UPS;
    }
    return CATEGORY_WARM_UPS.filter((ex) => ex.category === selectedCategory);
  }, [selectedCategory]);

  const activeExercise =
    displayedExercises.find((ex) => ex.id === selectedExerciseId) ||
    displayedExercises[0] ||
    CATEGORY_WARM_UPS[0];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setCompleted(true);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  if (!isOpen) return null;

  const visualRef = activeExercise.visualReferenceId
    ? getVisualReferenceById(activeExercise.visualReferenceId)
    : null;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder.toString().padStart(2, '0')}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Warm up exercises"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl bg-[#FCFAF6] rounded-3xl p-5 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 border-b border-[#E8E0D5]">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1 rounded-lg bg-[#FFF2E6] text-[#E06D53]">
              <Flame className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
              Quick Practice
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans">
            WARM UP
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6E63] font-handwriting text-lg sm:text-xl mt-0.5">
            What skill do you want to wake up? Loosen your hand, relax your grip, and defeat perfectionism.
          </p>
        </div>

        {/* Duration Picker: 2 MIN, 5 MIN, 10 MIN */}
        <div className="pt-3 pb-2 flex items-center gap-2">
          <span className="text-xs font-mono-code font-bold uppercase text-[#8A7D71] mr-1">
            WARM-UP LENGTH:
          </span>
          {[2, 5, 10].map((mins) => (
            <button
              key={mins}
              onClick={() => handleDurationChange(mins)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all min-h-[36px] ${
                durationMinutes === mins
                  ? 'bg-[#2D2723] text-white shadow-xs'
                  : 'bg-[#FAF7F2] border border-[#E8E0D5] text-[#6D6156] hover:bg-[#EFE9DF]'
              }`}
            >
              {mins} MIN
            </button>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="py-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-[#EAE2D7]">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors min-h-[38px] ${
              selectedCategory === 'all'
                ? 'bg-[#2D2723] text-[#FAF7F2]'
                : 'bg-[#FAF7F2] text-[#655A51] border border-[#E8E0D5] hover:bg-[#EFE9DF]'
            }`}
          >
            All Exercises
          </button>
          {WARM_UP_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors min-h-[38px] ${
                selectedCategory === cat.id
                  ? 'bg-[#2D2723] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#655A51] border border-[#E8E0D5] hover:bg-[#EFE9DF]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Exercise Detail Card */}
        <div className="my-5 p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#2D2723] subtle-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E0D5]">
            <div>
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                {activeExercise.category.replace('-', ' ')}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2723] mt-0.5">
                {activeExercise.title}
              </h3>
            </div>

            {/* Timer Controller */}
            <div className="flex items-center gap-2 bg-[#FCFAF6] px-3.5 py-1.5 rounded-xl border border-[#E8E0D5]">
              <Clock className="w-4 h-4 text-[#8A7D71]" />
              <span
                className={`font-mono-code font-bold text-sm ${
                  timeLeft <= 30 && timeLeft > 0 ? 'text-[#D90429] animate-pulse' : 'text-[#2D2723]'
                }`}
              >
                {formatTimer(timeLeft)}
              </span>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="p-1 hover:bg-[#EFE9DF] rounded text-[#786C61] min-h-[32px] min-w-[32px] flex items-center justify-center"
                aria-label={isRunning ? 'Pause' : 'Start'}
              >
                {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(durationMinutes * 60);
                  setCompleted(false);
                }}
                className="p-1 hover:bg-[#EFE9DF] rounded text-[#786C61] min-h-[32px] min-w-[32px] flex items-center justify-center"
                aria-label="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#55473B] font-medium mt-3 leading-relaxed">
            {activeExercise.description}
          </p>

          {/* Quick tip */}
          {activeExercise.tip && (
            <div className="mt-4 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8E0D5]">
              <span className="text-[10px] font-mono-code font-bold uppercase text-[#8A7D71] block mb-1">
                TRY:
              </span>
              <p className="text-xs text-[#55473B]">
                {activeExercise.tip}
              </p>
            </div>
          )}

          {/* Collapsible Visual Reference */}
          {visualRef && (
            <div className="mt-4">
              <button
                onClick={() => setShowVisualRef(!showVisualRef)}
                className="py-2 px-3.5 rounded-xl border border-[#D8CEBE] bg-[#FCFAF6] hover:bg-[#EFE9DF] text-xs font-bold text-[#4A3F35] transition-all flex items-center gap-1.5 min-h-[40px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>{showVisualRef ? 'HIDE VISUAL EXAMPLE' : 'SHOW VISUAL EXAMPLE'}</span>
              </button>

              {showVisualRef && (
                <div className="mt-3">
                  <VisualReferencePanel
                    visualReference={visualRef}
                    onHide={() => setShowVisualRef(false)}
                    promptText={activeExercise.title}
                  />
                </div>
              )}
            </div>
          )}

          {/* Completed State Notification */}
          {completed && (
            <div className="mt-4 p-3.5 rounded-xl bg-[#E9F5ED] border border-[#A7D7B5] text-[#1E5631] flex items-center justify-between gap-2 animate-fadeIn">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-xs font-extrabold">
                  Warm-up completed! Your hand is loose and ready to create.
                </span>
              </div>
              <button
                onClick={() => {
                  onFinishWarmUp();
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-[#1E5631] text-white text-xs font-bold shrink-0"
              >
                DONE
              </button>
            </div>
          )}
        </div>

        {/* Exercises Selector Grid */}
        <div className="mt-4">
          <div className="text-xs font-mono-code font-bold uppercase text-[#8A7D71] mb-2">
            SELECT AN EXERCISE ({displayedExercises.length}):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {displayedExercises.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedExerciseId(item.id);
                  setIsRunning(false);
                  setTimeLeft(durationMinutes * 60);
                  setCompleted(false);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  item.id === activeExercise.id
                    ? 'bg-[#2D2723] text-white border-[#2D2723] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#2D2723] border-[#E8E0D5] hover:bg-[#EFE9DF]'
                }`}
              >
                <div className="text-xs font-extrabold truncate">{item.title}</div>
                <div
                  className={`text-[10px] truncate mt-0.5 ${
                    item.id === activeExercise.id ? 'text-[#D8CEBE]' : 'text-[#8A7D71]'
                  }`}
                >
                  {item.category.replace('-', ' ')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#E8E0D5] flex items-center justify-between">
          <span className="text-xs text-[#8A7D71] font-handwriting text-base">
            Draw loosely. Don't worry about clean lines.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#2D2723] text-white font-bold text-xs hover:bg-[#433B35] transition-colors min-h-[44px]"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
