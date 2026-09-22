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
      className="w-full max-w-3xl mx-auto px-3 sm:px-6 py-3 sm:py-6 min-h-[calc(100vh-2rem)] flex flex-col justify-between"
    >
      {/* 1. Ultra-Minimal Top Session Bar */}
      <header className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E8E0D5]/80">
        {/* Left: Leave Session with safe confirmation */}
        <button
          onClick={() => setIsLeaveConfirmOpen(true)}
          className="flex items-center gap-1.5 text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] transition-colors min-h-[44px] -ml-1 px-2 rounded-xl hover:bg-[#EFE9DF]"
          aria-label="Leave session"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Leave Session</span>
          <span className="sm:hidden">Leave</span>
        </button>

        {/* Center: Step & Theme indicator */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
            Step {stepNumber}
          </span>
          {session.themeId && session.themeId !== 'none' && (
            <button
              onClick={() => setIsThemeModalOpen(true)}
              className="text-[10px] font-bold px-2 py-0.5 rounded-full font-mono-code bg-[#FFF2E6] text-[#E06D53] border border-[#F5C7BC] hover:bg-[#FFE6D4] transition-colors"
              title="Change theme"
            >
              {getThemeById(session.themeId)?.name || session.themeId}
            </button>
          )}
        </div>

        {/* Right: Small Secondary Timer or Untimed indicator */}
        <div className="flex items-center gap-1.5">
          {secondsRemaining !== null ? (
            <div className="flex items-center gap-1.5 bg-[#FCFAF6] border border-[#E8E0D5] px-2.5 py-1 rounded-xl shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#8A7D71]" />
              <span
                className={`font-mono-code font-bold text-xs sm:text-sm ${
                  secondsRemaining <= 60 ? 'text-[#D90429] animate-pulse' : 'text-[#2D2723]'
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
                className="p-1 hover:bg-[#EFE9DF] rounded text-[#786C61]"
                aria-label={isPaused ? 'Resume timer' : 'Pause timer'}
              >
                {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
              </button>
            </div>
          ) : (
            <span className="text-[11px] font-mono-code text-[#8A7D71] bg-[#EFE9DF] px-2.5 py-1 rounded-full">
              Untimed
            </span>
          )}
        </div>
      </header>

      {/* Time's Up Banner (non-blocking, supportive alert) */}
      {timesUpModal && (
        <aside
          aria-label="Time is up alert"
          className="my-3 p-4 sm:p-5 rounded-2xl bg-[#FFF3E8] border-2 border-[#F3BE96] shadow-sm animate-fadeIn"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E06D53]" />
              <h3 className="font-extrabold text-sm sm:text-base text-[#2D2723]">
                TIME'S UP — Take a look at what you created!
              </h3>
            </div>
            <button
              onClick={() => setTimesUpModal(false)}
              className="text-[#968475] hover:text-[#2D2723] p-1"
              aria-label="Dismiss alert"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#6E5F52] mt-1.5">
            Your timer finished. Keep creating on your paper as long as you want, or finish your session now.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <button
              onClick={onFinishSession}
              className="px-4 py-2 rounded-xl bg-[#2D2723] text-white text-xs font-bold hover:bg-[#433B35] transition-all min-h-[44px]"
            >
              I'M DONE DRAWING
            </button>
            <button
              onClick={() => {
                onExtendTimer(300);
                setTimesUpModal(false);
              }}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#F3BE96] text-xs font-bold text-[#E06D53] hover:bg-[#FFF8F2] transition-all min-h-[44px] flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+5 MINUTES</span>
            </button>
            <button
              onClick={() => {
                onRemoveTimer();
                setTimesUpModal(false);
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#736355] hover:bg-[#FBEBE0] transition-all min-h-[44px]"
            >
              CONTINUE WITHOUT TIMER
            </button>
          </div>
        </aside>
      )}

      {/* 2. Main Prompt Focus Area */}
      <section className="my-auto py-4 sm:py-6">
        <div className="rounded-3xl bg-[#FAF7F2] border-3 border-[#2D2723] p-6 sm:p-9 md:p-11 paper-card subtle-shadow text-center relative">
          {/* Subtle paper tape at top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 bg-[#E8DDD1] rotate-1 border border-[#D5C7B7]" />

          {/* Mode Title & Category */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
              WHAT COMES NEXT?
            </span>
            <span className="w-1 h-1 rounded-full bg-[#8A7D71]" />
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#E06D53]">
              {currentPrompt.category}
            </span>
          </div>

          {/* THE PROMPT IS THE LARGEST ELEMENT ON THE SCREEN */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#2D2723] tracking-tight leading-[1.2] max-w-xl mx-auto font-sans">
            {currentPrompt.text}
          </h1>

          {/* Prompt Explanation */}
          {currentPrompt.explanation && (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#55473B] max-w-md mx-auto leading-relaxed font-medium">
              {currentPrompt.explanation}
            </p>
          )}

          {/* Handwritten Subtext Encouragement */}
          {currentPrompt.subtext && (
            <p className="mt-3 font-handwriting text-xl sm:text-2xl text-[#6E6054] max-w-md mx-auto font-bold">
              {currentPrompt.subtext}
            </p>
          )}

          {/* Device-Down Reminder (Point 87) */}
          <div className="mt-6 pt-4 border-t border-[#EAE2D7] text-xs font-medium text-[#7A6E63] flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
              <span className="font-bold text-[#2D2723]">Your page is the canvas.</span>
            </div>
            <span className="text-[#8A7D71] hidden sm:inline">•</span>
            <span>Put the device down. Go make it. Come back when ready.</span>
          </div>
        </div>

        {/* Visual Reference Toggle & Panel with Point 18 Reassurance */}
        {visualReference && (
          <div className="mt-4 sm:mt-6 text-center">
            <button
              onClick={() => setShowExample(!showExample)}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-xl border border-[#D8CEBE] bg-[#FCFAF6] hover:bg-[#EFE9DF] text-xs font-bold text-[#4A3F35] transition-all min-h-[44px]"
              aria-expanded={showExample}
            >
              <BookOpen className="w-4 h-4 text-[#E06D53]" />
              <span>{showExample ? 'HIDE EXAMPLE' : 'SHOW ME AN EXAMPLE'}</span>
              {showExample ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {/* Guidance Level Controls (Point 82 & 83) */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8A7D71] mt-2 font-mono-code">
              <span>Guidance:</span>
              {([
                { id: 'show-all', label: 'Show examples' },
                { id: 'balanced', label: 'Balanced' },
                { id: 'minimal', label: 'Let me figure it out' },
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
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-colors ${
                    guidanceLevel === lvl.id
                      ? 'bg-[#2D2723] text-[#FAF7F2]'
                      : 'text-[#6E6054] hover:text-[#2D2723] hover:bg-[#EFE9DF]'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            {showExample && (
              <div className="mt-3 text-left animate-fadeIn">
                <div className="mb-2.5 p-2.5 rounded-xl bg-[#FFF6EE] border border-[#F3BE96] text-xs text-[#8A4A28] flex items-center justify-between gap-2">
                  <span className="font-bold">
                    HERE'S AN EXAMPLE: You don't need to copy it. Use it to see what we mean.
                  </span>
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
      <footer className="pt-3 sm:pt-4 border-t border-[#E8E0D5] space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Primary NEXT Button */}
          <button
            onClick={() => {
              setShowExample(guidanceLevel === 'show-all');
              onNextPrompt();
            }}
            className="flex-1 py-4 sm:py-4.5 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base sm:text-lg hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2.5 group min-h-[52px]"
          >
            <span>NEXT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary "I'M STUCK" Button */}
          <button
            onClick={handleOpenStuck}
            className="py-3.5 sm:py-4 px-5 rounded-2xl bg-[#FCFAF6] border-2 border-[#D8CEBE] text-[#54483E] font-bold text-xs sm:text-sm hover:bg-[#F2EDE4] transition-all active:scale-98 flex items-center justify-center gap-2 shrink-0 min-h-[48px]"
          >
            <HelpCircle className="w-4 h-4 text-[#E06D53]" />
            <span>I'M STUCK</span>
          </button>
        </div>

        {/* Bottom Finisher & No-Erasing Philosophy (Points 23 & 28) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8A7D71] px-1">
          <span className="font-handwriting text-sm text-[#7A6E63] text-center sm:text-left">
            No erase. No restart. Just add. Mistakes are allowed.
          </span>
          <button
            onClick={onFinishSession}
            className="font-bold text-[#E06D53] hover:text-[#C04D33] flex items-center gap-1 py-1.5 min-h-[40px]"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>I'M DONE FOR NOW</span>
          </button>
        </div>
      </footer>

      {/* "I'M STUCK" 3-Level Escalating Rescue Modal (Points 20, 21, 22) */}
      {stuckModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Creative rescue nudge"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
        >
          <div className="w-full max-w-lg bg-[#FCFAF6] rounded-3xl p-6 sm:p-7 paper-card border-2 border-[#E8E0D5] relative text-center max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setStuckModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#FFF2E6] text-[#E06D53] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
              STUCK? THAT'S OKAY.
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight mt-1 font-sans">
              Try this tiny nudge:
            </h3>

            {/* Level Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 my-4 p-1 rounded-xl bg-[#EFE9DF]/60">
              {([1, 2, 3] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    setStuckLevel(lvl);
                    setStuckHintIndex(0);
                  }}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all ${
                    stuckLevel === lvl
                      ? 'bg-[#2D2723] text-white shadow-2xs'
                      : 'text-[#6D6156] hover:text-[#2D2723]'
                  }`}
                >
                  Level {lvl}
                </button>
              ))}
            </div>

            {/* Tiny Nudge Card */}
            <div className="my-4 p-5 bg-[#FAF7F2] rounded-2xl border-2 border-[#2D2723] text-left">
              <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#E06D53] mb-1">
                {currentLevelData.title}
              </div>
              <p className="text-base sm:text-lg font-extrabold text-[#2D2723] leading-snug">
                {currentHint}
              </p>
              <p className="text-xs text-[#7A6E63] mt-2 italic">
                Your prompt is still waiting. Just make one mark to break the ice.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 pt-2">
              <button
                onClick={handleShuffleStuck}
                className="py-3 px-4 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[#6E6054] text-xs font-bold flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>ANOTHER NUDGE</span>
              </button>

              <button
                onClick={() => setStuckModalOpen(false)}
                className="py-3.5 px-6 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs shadow-sm hover:bg-[#433B35] min-h-[44px]"
              >
                GOT IT, BACK TO DRAWING
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leave Session Confirmation Dialog (Point 57) */}
      {isLeaveConfirmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Confirm leaving session"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
        >
          <div className="w-full max-w-md bg-[#FCFAF6] rounded-3xl p-6 sm:p-7 paper-card border-2 border-[#2D2723] text-center shadow-xl">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723]">
              LEAVE THIS SESSION?
            </h3>
            <p className="text-sm text-[#665A51] mt-2 leading-relaxed">
              Your progress will be saved automatically. You can pick up right where you left off whenever you return.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setIsLeaveConfirmOpen(false)}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs hover:bg-[#433B35] transition-all min-h-[44px]"
              >
                KEEP CREATING
              </button>
              <button
                onClick={() => {
                  setIsLeaveConfirmOpen(false);
                  onExitToHome();
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl border border-[#D8CEBE] text-[#6E6054] font-bold text-xs hover:bg-[#EFE9DF] transition-all min-h-[44px]"
              >
                LEAVE SESSION
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
