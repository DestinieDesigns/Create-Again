import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Clock,
  HelpCircle,
  BookOpen,
  Eye,
  EyeOff,
  CheckCircle2,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';
import {
  CHARACTER_DESIGN_STAGES,
  CharacterDesignStage,
  CharacterSpark,
} from '../../data/characterDesignStages';
import { VisualReferenceCard } from '../reference/VisualReferenceCard';

interface CharacterDesignActiveViewProps {
  currentStageIndex: number;
  totalStages?: number;
  spark?: CharacterSpark | null;
  timerDuration: number | null; // seconds
  onNextStage: () => void;
  onPrevStage?: () => void;
  onFinish: () => void;
  onLeave: () => void;
}

export const CharacterDesignActiveView: React.FC<CharacterDesignActiveViewProps> = ({
  currentStageIndex,
  totalStages = CHARACTER_DESIGN_STAGES.length,
  spark,
  timerDuration,
  onNextStage,
  onPrevStage,
  onFinish,
  onLeave,
}) => {
  // Guidance level: 'show-all' | 'balanced' | 'minimal' (Points 82 & 83)
  const [guidanceLevel, setGuidanceLevel] = useState<'show-all' | 'balanced' | 'minimal'>(() => {
    return (localStorage.getItem('createagain_guidance_level') as any) || 'balanced';
  });

  const [showReference, setShowReference] = useState(() => guidanceLevel === 'show-all');
  const [stuckLevel, setStuckLevel] = useState<number | null>(null); // null, 0, 1, 2
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [showGuidancePicker, setShowGuidancePicker] = useState(false);

  // Timer state
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(timerDuration);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const stage = CHARACTER_DESIGN_STAGES[Math.min(currentStageIndex, CHARACTER_DESIGN_STAGES.length - 1)];

  // Synchronize guidance level with local storage & reference visibility
  const handleSetGuidanceLevel = (lvl: 'show-all' | 'balanced' | 'minimal') => {
    setGuidanceLevel(lvl);
    localStorage.setItem('createagain_guidance_level', lvl);
    if (lvl === 'show-all') setShowReference(true);
    if (lvl === 'minimal') setShowReference(false);
    setShowGuidancePicker(false);
  };

  // Reset stuck level when stage changes
  useEffect(() => {
    setStuckLevel(null);
    if (guidanceLevel === 'show-all') setShowReference(true);
    if (guidanceLevel === 'minimal') setShowReference(false);
  }, [currentStageIndex, guidanceLevel]);

  // Timer countdown effect
  useEffect(() => {
    if (secondsRemaining === null || isTimerPaused) return;

    if (secondsRemaining <= 0) {
      setIsTimeUp(true);
      return;
    }

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining, isTimerPaused]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2723] flex flex-col font-sans pb-16">
      {/* Top Session Bar (Point 56 & 65: minimal distraction during active creation) */}
      <header className="sticky top-0 z-40 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-[#E8E0D5] px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowLeaveConfirm(true)}
              className="py-1.5 px-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-xs font-bold text-[#6E6054] transition-colors min-h-[36px]"
            >
              EXIT
            </button>
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
              STAGE {currentStageIndex + 1} OF {totalStages}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Guidance Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowGuidancePicker(!showGuidancePicker)}
                className="p-1.5 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[#6E6054] transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                title="Guidance Level"
                aria-label="Guidance Level"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>

              {showGuidancePicker && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-[#FCFAF6] rounded-2xl p-2 border-2 border-[#2D2723] shadow-xl z-50 text-left">
                  <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] px-2 py-1">
                    GUIDANCE LEVEL
                  </div>
                  {(['show-all', 'balanced', 'minimal'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => handleSetGuidanceLevel(lvl)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                        guidanceLevel === lvl
                          ? 'bg-[#2D2723] text-white'
                          : 'hover:bg-[#EFE9DF] text-[#55473B]'
                      }`}
                    >
                      <span className="capitalize">
                        {lvl === 'show-all' ? 'Show examples' : lvl === 'balanced' ? 'Balanced' : 'Let me figure it out'}
                      </span>
                      {guidanceLevel === lvl && <CheckCircle2 className="w-3.5 h-3.5 text-[#E5B574]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Timer Display or "No Timer" label */}
            {secondsRemaining !== null ? (
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono-code text-xs font-bold ${
                  secondsRemaining < 60
                    ? 'bg-[#FFF2E6] border-[#E06D53] text-[#E06D53]'
                    : 'bg-[#FAF7F2] border-[#D8CEBE] text-[#55473B]'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            ) : (
              <div className="px-2.5 py-1 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] text-[10px] font-mono-code font-bold text-[#8A7D71]">
                NO TIMER
              </div>
            )}

            {/* Quick Finish Button (Point 28) */}
            <button
              onClick={onFinish}
              className="py-1.5 px-3 rounded-xl bg-[#2D2723] hover:bg-[#433B35] text-white text-xs font-bold transition-all min-h-[36px]"
            >
              FINISH
            </button>
          </div>
        </div>
      </header>

      {/* Main Focus Container */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 pt-6 space-y-6">
        {/* Character Spark Banner (if session started with a spark) */}
        {spark && (
          <div className="p-3.5 rounded-2xl bg-[#FFF6EE] border border-[#F3BE96] flex items-center justify-between gap-3 text-left">
            <div>
              <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#C04D33]">
                CHARACTER CONCEPT
              </div>
              <div className="text-sm font-extrabold text-[#2D2723] mt-0.5">
                {spark.archetype}
              </div>
              <div className="text-xs text-[#6B5E52] mt-0.5">
                {spark.quirk} • {spark.prop}
              </div>
            </div>
          </div>
        )}

        {/* 1. Stage Title & Plain Language Instruction (Points 1, 16, 19) */}
        <section className="bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#2D2723] shadow-md text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#E06D53]">
              STAGE {stage.stageNumber}: {stage.shortLabel.toUpperCase()}
            </span>
            <span className="text-xs text-[#8A7D71] font-mono-code">
              {stage.tagline}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans leading-tight">
            {stage.name}
          </h1>

          <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5]">
            <p className="text-base sm:text-xl font-extrabold text-[#2D2723] leading-relaxed">
              {stage.instruction}
            </p>
          </div>

          {/* What to Notice (Point 19) */}
          <div className="text-xs sm:text-sm text-[#5C5046] font-medium leading-relaxed bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E8E0D5]">
            <strong className="text-[#2D2723] font-bold">What to notice: </strong>
            {stage.whatToNotice}
          </div>

          {/* Visual Reference Section (Points 17 & 18) */}
          <div className="mt-5 pt-4 border-t border-[#E8E0D5]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                VISUAL BREAKDOWN
              </span>
              <button
                onClick={() => setShowReference(!showReference)}
                className="text-xs font-bold text-[#E06D53] hover:underline flex items-center gap-1 min-h-[36px]"
              >
                {showReference ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>Hide Example</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Show Example</span>
                  </>
                )}
              </button>
            </div>

            {showReference && (
              <div className="mt-3">
                <div className="mb-2 text-[11px] font-bold text-[#8A7D71] bg-[#FAF7F2] p-2 rounded-lg border border-[#E8E0D5]">
                  HERE'S AN EXAMPLE: You don't need to copy it. Use it to see what we mean.
                </div>
                <VisualReferenceCard
                  reference={stage.visualReference}
                  onClose={() => setShowReference(false)}
                />
              </div>
            )}
          </div>
        </section>

        {/* 2. Device Down Reminder (Point 87) */}
        <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E0D8CB] text-center">
          <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#7A6B5C]">
            DEVICE DOWN FLOW
          </div>
          <p className="text-sm font-extrabold text-[#2D2723] mt-0.5">
            Look at the page. Put your device down. Make your mark.
          </p>
          <p className="text-xs text-[#7A6B5C] mt-0.5">
            No rush. Return whenever you're ready for the next layer.
          </p>
        </div>

        {/* 3. "I'M STUCK" Recovery Drawer (Points 20, 21, 22) */}
        <section className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#8A7D71]" />
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                CREATIVE BLOCK?
              </span>
            </div>

            {stuckLevel === null ? (
              <button
                onClick={() => setStuckLevel(0)}
                className="py-1.5 px-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-xs font-bold text-[#6E6054] transition-colors min-h-[36px]"
              >
                I'M STUCK
              </button>
            ) : (
              <button
                onClick={() => setStuckLevel(null)}
                className="text-xs font-bold text-[#8A7D71] hover:underline"
              >
                Close Nudge
              </button>
            )}
          </div>

          {stuckLevel !== null && (
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#2D2723] animate-fadeIn">
              <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#E06D53] mb-1">
                TINY NUDGE (LEVEL {stuckLevel + 1} OF 3)
              </div>
              <p className="text-base font-extrabold text-[#2D2723]">
                {stage.stuckNudges[stuckLevel]}
              </p>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#E8E0D5]">
                <span className="text-xs text-[#6E6054]">
                  That's okay. Take a tiny start.
                </span>
                {stuckLevel < 2 && (
                  <button
                    onClick={() => setStuckLevel((prev) => (prev !== null ? prev + 1 : 0))}
                    className="py-1.5 px-3 rounded-xl bg-[#2D2723] text-white text-xs font-bold hover:bg-[#433B35] transition-all min-h-[36px]"
                  >
                    ANOTHER NUDGE
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* 4. Primary Progression Action (Points 66 & 77: No automatic next prompt) */}
        <div className="pt-2 flex items-center gap-3">
          {onPrevStage && currentStageIndex > 0 && (
            <button
              onClick={onPrevStage}
              className="py-3.5 px-4 rounded-2xl border-2 border-[#D8CEBE] text-[#55473B] font-bold text-xs hover:bg-[#EFE9DF] transition-all min-h-[50px] flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREVIOUS</span>
            </button>
          )}

          <button
            onClick={currentStageIndex < totalStages - 1 ? onNextStage : onFinish}
            className="flex-1 py-4 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-sm sm:text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 min-h-[52px]"
          >
            <span>
              {currentStageIndex < totalStages - 1
                ? `NEXT: ${CHARACTER_DESIGN_STAGES[currentStageIndex + 1]?.shortLabel.toUpperCase() || 'STAGE'}`
                : 'FINISH CHARACTER'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Warm-Up or Challenge Accordion */}
        <div className="pt-1 text-center">
          <p className="text-[11px] text-[#8A7D71] font-mono-code">
            NO ERASE • NO RESTART • JUST ADD
          </p>
        </div>
      </main>

      {/* Leave Session Confirmation Dialog (Point 57) */}
      {showLeaveConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
        >
          <div className="w-full max-w-sm bg-[#FCFAF6] rounded-3xl p-6 paper-card border-2 border-[#2D2723] text-center shadow-xl">
            <h3 className="text-lg font-extrabold text-[#2D2723]">
              LEAVE THIS SESSION?
            </h3>
            <p className="text-xs text-[#665A51] mt-1.5 leading-relaxed">
              Your progress is saved locally. You can pick it up anytime from the home screen.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={() => setShowLeaveConfirm(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs hover:bg-[#433B35] min-h-[44px]"
              >
                KEEP CREATING
              </button>
              <button
                onClick={onLeave}
                className="flex-1 py-3 px-4 rounded-xl border border-[#D8CEBE] text-[#6E6054] font-bold text-xs hover:bg-[#EFE9DF] min-h-[44px]"
              >
                LEAVE SESSION
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
