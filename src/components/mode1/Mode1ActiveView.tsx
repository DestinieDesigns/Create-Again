import React, { useState, useEffect } from 'react';
import {
  Clock,
  Play,
  Pause,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Sparkles,
  RefreshCw,
  X,
  Plus,
  CheckCircle2,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Mode1Session } from '../../types/session';
import { Mode1Prompt } from '../../types/prompt';
import { getVisualReferenceById } from '../../data/visualReferences';
import { getStuckRescueIdea, StuckRescueIdea } from '../../data/stuckPrompts';
import { VisualReferencePanel } from '../visual/VisualReferencePanel';
import { ThemeChooserModal } from '../theme/ThemeChooserModal';
import { getThemeById } from '../../data/themes';
import { MICROCOPY } from '../../data/microcopy';

interface Mode1ActiveViewProps {
  session: Mode1Session;
  currentPrompt: Mode1Prompt;
  stepNumber?: number;
  secondsRemaining?: number | null;
  onNextPrompt: () => void;
  onPauseToggle: (isPaused: boolean) => void;
  onExitToHome: () => void;
  onFinishSession: () => void;
  onExtendTimer: (extraSeconds: number) => void;
  onRemoveTimer: () => void;
  onChangeTheme?: (newThemeId: string) => void;
  onUseStuck?: () => void;
}

export const Mode1ActiveView: React.FC<Mode1ActiveViewProps> = ({
  session,
  currentPrompt,
  stepNumber: propStepNumber,
  secondsRemaining: propSecondsRemaining,
  onNextPrompt,
  onPauseToggle,
  onExitToHome,
  onFinishSession,
  onExtendTimer,
  onRemoveTimer,
  onChangeTheme,
  onUseStuck,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [guidanceLevel, setGuidanceLevel] = useState<'show-all' | 'balanced' | 'minimal'>(() => {
    try {
      return (localStorage.getItem('create_again_guidance_level') as any) || 'balanced';
    } catch {
      return 'balanced';
    }
  });
  const [showExample, setShowExample] = useState(() => guidanceLevel === 'show-all');
  const [stuckModalOpen, setStuckModalOpen] = useState(false);
  const [stuckLevel, setStuckLevel] = useState<1 | 2 | 3>(1);
  const [stuckHintIndex, setStuckHintIndex] = useState<number>(0);
  const [activeStuckIdea, setActiveStuckIdea] = useState<StuckRescueIdea | null>(null);
  const [showStuckExample, setShowStuckExample] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [timesUpModal, setTimesUpModal] = useState(false);
  const [isLeaveConfirmOpen, setIsLeaveConfirmOpen] = useState(false);

  const stepNumber = propStepNumber ?? (session.promptHistory.length + 1);

  // Internal countdown timer computed from session
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(() => {
    if (propSecondsRemaining !== undefined) return propSecondsRemaining;
    if (session.timerDuration === null || !session.timerStartedAt) return null;
    const elapsed = Math.floor((Date.now() - session.timerStartedAt) / 1000);
    const totalAllowed = (session.timerDuration || 0) + (session.timerExtraSeconds || 0);
    return Math.max(0, totalAllowed - elapsed);
  });

  useEffect(() => {
    if (propSecondsRemaining !== undefined) {
      setSecondsRemaining(propSecondsRemaining);
      return;
    }

    if (session.timerDuration === null || !session.timerStartedAt) {
      setSecondsRemaining(null);
      return;
    }

    const calculateRemaining = () => {
      const elapsed = Math.floor((Date.now() - session.timerStartedAt!) / 1000);
      const totalAllowed = (session.timerDuration || 0) + (session.timerExtraSeconds || 0);
      return Math.max(0, totalAllowed - elapsed);
    };

    setSecondsRemaining(calculateRemaining());

    const interval = setInterval(() => {
      if (!isPaused) {
        const rem = calculateRemaining();
        setSecondsRemaining(rem);
        if (rem === 0) {
          setTimesUpModal(true);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [session.timerDuration, session.timerStartedAt, session.timerExtraSeconds, isPaused, propSecondsRemaining]);

  // Trigger time's up when secondsRemaining reaches 0
  useEffect(() => {
    if (secondsRemaining !== null && secondsRemaining === 0) {
      setTimesUpModal(true);
    }
  }, [secondsRemaining]);

  // Find visual reference for current prompt
  const visualReference = currentPrompt.visualReferenceId
    ? getVisualReferenceById(currentPrompt.visualReferenceId)
    : null;

  const handleOpenStuck = () => {
    const idea = getStuckRescueIdea(currentPrompt.category, session.themeId);
    setActiveStuckIdea(idea);
    setStuckLevel(1);
    setStuckHintIndex(0);
    setShowStuckExample(false);
    setStuckModalOpen(true);
    if (onUseStuck) onUseStuck();
  };

  const handleShuffleStuck = () => {
    const currentHints = MICROCOPY.stuck.levels[stuckLevel - 1].hints;
    setStuckHintIndex((prev) => (prev + 1) % currentHints.length);
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentLevelData = MICROCOPY.stuck.levels[stuckLevel - 1];
  const currentHint = currentLevelData.hints[stuckHintIndex % currentLevelData.hints.length];

  return (
    <main
      aria-label="Active drawing session workspace"
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6 min-h-[calc(100vh-2rem)] flex flex-col justify-between"
    >
      {/* 1. Ultra-Minimal Top Session Bar */}
      <header className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E5E5DE]">
        {/* Left: Leave Session */}
        <button
          onClick={() => setIsLeaveConfirmOpen(true)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#686862] hover:text-[#16171A] transition-colors min-h-[44px] -ml-2 px-2.5 rounded-lg hover:bg-[#F4F4F0]"
          aria-label="Leave session"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
          <span>Leave Session</span>
        </button>

        {/* Center: Step & Theme indicator */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code font-semibold text-[#16171A]">
            Step {stepNumber}
          </span>
          {session.themeId && session.themeId !== 'none' && (
            <button
              onClick={() => setIsThemeModalOpen(true)}
              className="text-[11px] font-semibold px-2 py-0.5 rounded-md font-mono-code bg-[#EFF3FF] text-[#2752E7] hover:bg-[#E0E8FF] transition-colors"
              title="Change theme"
            >
              {getThemeById(session.themeId)?.name || session.themeId}
            </button>
          )}
        </div>

        {/* Right: Timer */}
        <div className="flex items-center gap-1.5">
          {secondsRemaining !== null ? (
            <div className="flex items-center gap-2 bg-white border border-[#E5E5DE] px-3 py-1 rounded-lg shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#686862]" />
              <span
                className={`font-mono-code font-semibold text-xs sm:text-sm tabular-nums ${
                  secondsRemaining <= 60 ? 'text-[#DC2626] animate-pulse' : 'text-[#16171A]'
                }`}
              >
                {formatTimer(secondsRemaining)}
              </span>
              <button
                onClick={() => {
                  const next = !isPaused;
                  setIsPaused(next);
                  onPauseToggle(next);
                }}
                className="p-1 hover:bg-[#F4F4F0] rounded text-[#686862] transition-colors"
                aria-label={isPaused ? 'Resume timer' : 'Pause timer'}
              >
                {isPaused ? <Play className="w-3 h-3 stroke-[2]" /> : <Pause className="w-3 h-3 stroke-[2]" />}
              </button>
            </div>
          ) : (
            <span className="text-xs font-mono-code text-[#8A8A82]">
              Untimed
            </span>
          )}
        </div>
      </header>

      {/* Time's Up Banner */}
      {timesUpModal && (
        <aside
          aria-label="Time is up alert"
          className="my-3 p-4 sm:p-5 rounded-xl bg-white border border-[#E5E5DE] shadow-xs animate-fadeIn"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#2752E7]" />
              <h3 className="font-display font-bold text-base text-[#16171A]">
                Time's Up — Step back and evaluate your page
              </h3>
            </div>
            <button
              onClick={() => setTimesUpModal(false)}
              className="text-[#8A8A82] hover:text-[#16171A] p-1"
              aria-label="Dismiss alert"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#686862] mt-1.5">
            Your timer duration is complete. Keep creating on your paper as long as you'd like, or complete your session.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <button
              onClick={onFinishSession}
              className="px-4 py-2 rounded-lg bg-[#16171A] text-white text-xs font-semibold hover:bg-[#2C2D32] transition-colors min-h-[40px]"
            >
              I'm Done Drawing
            </button>
            <button
              onClick={() => {
                onExtendTimer(300);
                setTimesUpModal(false);
              }}
              className="px-3.5 py-2 rounded-lg bg-white border border-[#E5E5DE] text-xs font-semibold text-[#16171A] hover:bg-[#F4F4F0] transition-colors min-h-[40px] flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+5 Minutes</span>
            </button>
            <button
              onClick={() => {
                onRemoveTimer();
                setTimesUpModal(false);
              }}
              className="px-3.5 py-2 rounded-lg text-xs font-medium text-[#686862] hover:bg-[#F4F4F0] transition-colors min-h-[40px]"
            >
              Continue Untimed
            </button>
          </div>
        </aside>
      )}

      {/* 2. Main Prompt Focus Area */}
      <section className="my-auto py-6 sm:py-10">
        <div className="rounded-2xl bg-white border border-[#E5E5DE] p-6 sm:p-10 shadow-xs text-center relative">
          {/* Category Kicker */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold">
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#686862]">
              WHAT COMES NEXT
            </span>
            <span aria-hidden="true" className="text-[#CDCDC4]">·</span>
            <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#2752E7]">
              {currentPrompt.category}
            </span>
          </div>

          {/* THE PROMPT IS THE DOMINANT VISUAL ELEMENT */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#16171A] tracking-tight leading-[1.18] max-w-xl mx-auto">
            {currentPrompt.text}
          </h1>

          {/* Prompt Explanation */}
          {currentPrompt.explanation && (
            <p className="mt-4 text-sm sm:text-base text-[#555550] max-w-lg mx-auto leading-relaxed">
              {currentPrompt.explanation}
            </p>
          )}

          {/* Subtext Encouragement in Fraunces Italic */}
          {currentPrompt.subtext && (
            <p className="mt-3 font-display italic text-lg sm:text-xl text-[#2752E7] max-w-md mx-auto">
              "{currentPrompt.subtext}"
            </p>
          )}

          {/* Device-Down Reminder */}
          <div className="mt-8 pt-4 border-t border-[#F0F0EB] text-xs text-[#8A8A82] flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="font-medium text-[#16171A]">Your physical paper is the canvas.</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Put screen down. Make the mark. Return for the next step.</span>
          </div>
        </div>

        {/* Visual Reference Toggle */}
        {visualReference && (
          <div className="mt-5 text-center">
            <button
              onClick={() => setShowExample(!showExample)}
              className="inline-flex items-center gap-2 py-2 px-3.5 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#16171A] transition-colors min-h-[40px]"
              aria-expanded={showExample}
            >
              <BookOpen className="w-4 h-4 text-[#2752E7]" />
              <span>{showExample ? 'Hide visual reference' : 'Show visual reference'}</span>
              {showExample ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {/* Guidance Level Segmented Selector */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#8A8A82] mt-2.5">
              <span>Guidance:</span>
              <div className="inline-flex items-center p-0.5 rounded-lg bg-[#F4F4F0] border border-[#E5E5DE]">
                {([
                  { id: 'show-all', label: 'Show examples' },
                  { id: 'balanced', label: 'Balanced' },
                  { id: 'minimal', label: 'Figure it out' },
                ] as const).map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      setGuidanceLevel(lvl.id);
                      setShowExample(lvl.id === 'show-all');
                      try {
                        localStorage.setItem('create_again_guidance_level', lvl.id);
                      } catch {}
                    }}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      guidanceLevel === lvl.id
                        ? 'bg-white text-[#16171A] shadow-2xs font-semibold'
                        : 'text-[#686862] hover:text-[#16171A]'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>

            {showExample && (
              <div className="mt-4 text-left animate-fadeIn">
                <div className="mb-2 text-xs text-[#686862]">
                  Reference example for inspiration — do not feel constrained to copy it exactly:
                </div>
                <VisualReferencePanel
                  visualReference={visualReference}
                  onHide={() => setShowExample(false)}
                  promptText={currentPrompt.text}
                />
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. Action Controls */}
      <footer className="pt-4 border-t border-[#E5E5DE] space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Primary NEXT Button */}
          <button
            onClick={() => {
              setShowExample(guidanceLevel === 'show-all');
              onNextPrompt();
            }}
            className="flex-1 py-3.5 sm:py-4 px-6 rounded-xl bg-[#16171A] text-white font-semibold text-base hover:bg-[#2C2D32] transition-colors shadow-2xs active:scale-98 flex items-center justify-center gap-2 group min-h-[50px]"
          >
            <span>Next Mark</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary "I'M STUCK" Button */}
          <button
            onClick={handleOpenStuck}
            className="py-3 px-5 rounded-xl bg-white border border-[#E5E5DE] text-[#16171A] font-semibold text-xs sm:text-sm hover:bg-[#F4F4F0] transition-colors flex items-center justify-center gap-2 shrink-0 min-h-[46px]"
          >
            <HelpCircle className="w-4 h-4 text-[#2752E7]" />
            <span>I'm Stuck</span>
          </button>
        </div>

        {/* Bottom Finisher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8A8A82] px-1">
          <span className="italic font-display text-sm text-[#686862]">
            No erasing. No restarting. Just add.
          </span>
          <button
            onClick={onFinishSession}
            className="font-semibold text-[#16171A] hover:text-[#2752E7] flex items-center gap-1.5 py-1"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Done for now</span>
          </button>
        </div>
      </footer>

      {/* "I'M STUCK" 3-Level Escalating Rescue Modal */}
      {stuckModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Creative rescue nudge"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/60 backdrop-blur-xs animate-fadeIn"
        >
          <div className="w-full max-w-lg bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E5DE] relative text-center max-h-[90vh] overflow-y-auto shadow-xl">
            <button
              onClick={() => setStuckModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#F4F4F0] text-[#686862] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="text-xs font-mono-code font-semibold uppercase tracking-wider text-[#686862]">
              STUCK ON A MARK? THAT'S NATURAL.
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#16171A] tracking-tight mt-1">
              Try this quiet nudge:
            </h3>

            {/* Level Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 my-4 p-1 rounded-lg bg-[#F4F4F0]">
              {([1, 2, 3] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    setStuckLevel(lvl);
                    setStuckHintIndex(0);
                  }}
                  className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-colors ${
                    stuckLevel === lvl
                      ? 'bg-white text-[#16171A] shadow-2xs'
                      : 'text-[#686862] hover:text-[#16171A]'
                  }`}
                >
                  Level {lvl}
                </button>
              ))}
            </div>

            {/* Nudge Card */}
            <div className="my-4 p-5 bg-[#FAF9F6] rounded-xl border border-[#E5E5DE] text-left">
              <div className="text-[11px] font-mono-code font-semibold text-[#2752E7] mb-1">
                {currentLevelData.title}
              </div>
              <p className="text-base sm:text-lg font-bold text-[#16171A] leading-snug">
                {currentHint}
              </p>
              <p className="text-xs text-[#8A8A82] mt-2">
                Your prompt is still waiting. Make any single mark on the paper to break the hesitation.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 pt-2">
              <button
                onClick={handleShuffleStuck}
                className="py-2.5 px-4 rounded-lg border border-[#E5E5DE] hover:bg-[#F4F4F0] text-[#16171A] text-xs font-semibold flex items-center justify-center gap-1.5 min-h-[40px] transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Another Nudge</span>
              </button>

              <button
                onClick={() => setStuckModalOpen(false)}
                className="py-2.5 px-5 rounded-lg bg-[#16171A] text-white font-semibold text-xs shadow-2xs hover:bg-[#2C2D32] min-h-[40px] transition-colors"
              >
                Back to Paper
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leave Session Confirmation Dialog */}
      {isLeaveConfirmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Confirm leaving session"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/60 backdrop-blur-xs animate-fadeIn"
        >
          <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E5DE] text-center shadow-xl">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#16171A]">
              Leave this drawing session?
            </h3>
            <p className="text-sm text-[#686862] mt-2 leading-relaxed">
              Your marks and progress are saved in your studio. You can resume right here whenever you return.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setIsLeaveConfirmOpen(false)}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-lg bg-[#16171A] text-white font-semibold text-xs hover:bg-[#2C2D32] transition-colors min-h-[40px]"
              >
                Keep Creating
              </button>
              <button
                onClick={() => {
                  setIsLeaveConfirmOpen(false);
                  onExitToHome();
                }}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-lg border border-[#E5E5DE] text-[#686862] font-semibold text-xs hover:bg-[#F4F4F0] hover:text-[#16171A] transition-colors min-h-[40px]"
              >
                Leave Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Theme Chooser Modal during active session */}
      <ThemeChooserModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        selectedThemeId={session.themeId}
        onSelectTheme={(themeId) => {
          if (onChangeTheme) {
            onChangeTheme(themeId);
          }
        }}
      />
    </main>
  );
};
