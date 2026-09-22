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
  THEME_SPECIFIC_WARM_UPS,
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
  const [selectedCategory, setSelectedCategory] = useState<WarmUpCategory | 'all' | 'themed'>('all');
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('wu-ml-01');
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [completed, setCompleted] = useState(false);
  const [showVisualRef, setShowVisualRef] = useState(false);

  // Active theme info
  const activeTheme = getThemeById(themeId);
  const themeExercises = themeId && themeId !== 'none'
    ? THEME_SPECIFIC_WARM_UPS.filter((wu) => wu.themeId === themeId)
    : [];

  // Reset exercise when theme changes or modal opens
  useEffect(() => {
    if (isOpen) {
      if (themeExercises.length > 0) {
        setSelectedCategory('themed');
        setSelectedExerciseId(`theme-${themeExercises[0].themeId}-${themeExercises[0].title}`);
      } else {
        setSelectedCategory('all');
        setSelectedExerciseId(CATEGORY_WARM_UPS[0].id);
      }
      setIsRunning(false);
      setTimeLeft(120);
      setCompleted(false);
      setShowVisualRef(false);
    }
  }, [isOpen, themeId]);

  // Compute available exercises based on filter
  const displayedExercises: WarmUpExerciseItem[] = React.useMemo(() => {
    if (selectedCategory === 'themed' && themeExercises.length > 0) {
      return themeExercises.map((t, idx) => ({
        id: `theme-${t.themeId}-${idx}`,
        title: t.title,
        category: t.category,
        duration: t.duration,
        description: t.description,
        tip: t.tip,
        visualReferenceId: t.visualReferenceId,
      }));
    }

    if (selectedCategory === 'all') {
      return CATEGORY_WARM_UPS;
    }

    return CATEGORY_WARM_UPS.filter((ex) => ex.category === selectedCategory);
  }, [selectedCategory, themeExercises]);

  // Find active exercise
  const activeExercise =
    displayedExercises.find((ex) => ex.id === selectedExerciseId) ||
    displayedExercises[0] ||
    CATEGORY_WARM_UPS[0];

  // Timer interval
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

  // Handle exercise change
  const handleSelectExercise = (ex: WarmUpExerciseItem) => {
    setSelectedExerciseId(ex.id);
    setTimeLeft(ex.duration);
    setIsRunning(false);
    setCompleted(false);
    setShowVisualRef(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  const visualRef = activeExercise.visualReferenceId
    ? getVisualReferenceById(activeExercise.visualReferenceId)
    : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Warm Up Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 rounded-lg bg-[#FFF2E6] text-[#E06D53]">
            <Flame className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
            Quick Practice
          </span>
          {activeTheme && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full font-mono-code bg-[#FFF2E6] text-[#E06D53] border border-[#F5C7BC]">
              Theme: {activeTheme.name}
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
          Warm Up Your Hand
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6054] mt-0.5 font-handwriting text-lg">
          2 minutes to release tension, loosen your shoulder, and silence the inner judge.
        </p>

        {/* Category Pill Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 my-2 scrollbar-none">
          {themeExercises.length > 0 && activeTheme && (
            <button
              onClick={() => setSelectedCategory('themed')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
                selectedCategory === 'themed'
                  ? 'bg-[#E06D53] text-white shadow-xs'
                  : 'bg-[#FFF2E6] text-[#E06D53] hover:bg-[#FFE6D4] border border-[#F5C7BC]'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{activeTheme.name} Focus</span>
            </button>
          )}

          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#2D2723] text-[#FAF7F2]'
                : 'bg-[#EFE9DF] text-[#655A51] hover:bg-[#E5DDCF]'
            }`}
          >
            All Skills
          </button>

          {WARM_UP_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#2D2723] text-[#FAF7F2]'
                  : 'bg-[#EFE9DF] text-[#655A51] hover:bg-[#E5DDCF]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Specific Exercise Pills within selected category */}
        <div className="flex items-center gap-2 overflow-x-auto py-2 mb-2">
          {displayedExercises.map((ex) => (
            <button
              key={ex.id}
              onClick={() => handleSelectExercise(ex)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                activeExercise.id === ex.id
                  ? 'bg-[#2D2723] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#655A51] border border-[#E8E0D5] hover:bg-[#EFE9DF]'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>

        {/* Active Exercise Display Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#E8E0D5] p-5 sm:p-6 text-center my-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code mb-1">
            {activeExercise.category.replace('-', ' ')}
          </div>
          <h3 className="text-xl font-extrabold text-[#2D2723]">
            {activeExercise.title}
          </h3>
          <p className="text-sm sm:text-base text-[#52453B] mt-2 font-medium leading-relaxed max-w-lg mx-auto">
            {activeExercise.description}
          </p>

          <div className="mt-3 p-3 bg-[#FCFAF6] rounded-xl border border-[#E8E0D5] text-xs text-[#7A6D61] font-handwriting text-base">
            💡 {activeExercise.tip}
          </div>

          {/* Visual Reference Prompt if available */}
          {visualRef && (
            <div className="mt-3 text-left">
              {!showVisualRef ? (
                <button
                  onClick={() => setShowVisualRef(true)}
                  className="w-full py-2 px-3 rounded-xl border border-[#D8CEBE] bg-[#FCFAF6] text-[#4A3F35] font-bold text-xs hover:bg-[#EFE9DF] transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#E06D53]" />
                  <span>VIEW QUICK VISUAL GUIDE</span>
                </button>
              ) : (
                <VisualReferencePanel
                  visualReference={visualRef}
                  onHide={() => setShowVisualRef(false)}
                />
              )}
            </div>
          )}

          {/* Timer Display */}
          <div className="mt-5 flex flex-col items-center justify-center">
            <div
              className={`font-mono-code text-4xl sm:text-5xl font-extrabold mb-3 transition-colors ${
                completed ? 'text-[#2A9D8F]' : 'text-[#2D2723]'
              }`}
            >
              {completed ? 'DONE!' : formatTime(timeLeft)}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-6 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all ${
                  isRunning
                    ? 'bg-[#EFE9DF] text-[#2D2723]'
                    : 'bg-[#2D2723] text-[#FAF7F2] shadow-xs hover:bg-[#433B35]'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>{timeLeft === activeExercise.duration ? 'START 2-MIN TIMER' : 'RESUME'}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(activeExercise.duration);
                  setCompleted(false);
                }}
                className="p-2.5 rounded-xl border border-[#D5C9BC] hover:bg-[#EFE9DF] text-[#786C61]"
                title="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Completion Action */}
        <div className="pt-2 flex items-center justify-between">
          <span className="text-xs font-handwriting text-base text-[#8A7D71]">
            Draw freely until the timer ends.
          </span>
          <button
            onClick={() => {
              onFinishWarmUp();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-extrabold text-xs shadow-xs flex items-center gap-1.5 active:scale-95 transition-all"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>I'M WARMED UP</span>
          </button>
        </div>
      </div>
    </div>
  );
};
