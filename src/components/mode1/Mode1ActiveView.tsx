import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Eye,
} from 'lucide-react';
import { Mode1Session } from '../../types/session';
import { Mode1Prompt } from '../../types/prompt';
import { getVisualReferenceById } from '../../data/visualReferences';
import { VisualReferencePanel } from '../visual/VisualReferencePanel';
import { QuietTimer } from '../creative/QuietTimer';
import { QuietStuckNudge } from '../creative/QuietStuckNudge';
import { AfterTimerModal } from '../creative/AfterTimerModal';
import { PutDeviceDownBanner } from '../creative/PutDeviceDownBanner';
import { VoiceButton } from '../creative/VoiceButton';
import { MoreInfoDrawer } from '../creative/MoreInfoDrawer';

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

/**
 * Section 7, 8, 9, 10, 11: "What Comes Next?" Signature Experience
 * - "ONE SCREEN = ONE MAIN DECISION"
 * - Stage 1 (Ready): "What am I drawing?" Prompt + Reference -> [ I'M READY ]
 * - Stage 2 (Put Device Down): "Put the device down. Pick up your pencil. Create."
 * - Stage 3 (Drawing): Extremely minimal creation state (DRAW, 2:41, Pause, Voice, Next Mark)
 * - Stage 4 (After Timer): Non-punitive, supportive reflection
 */
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
  onUseStuck,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [activePhase, setActivePhase] = useState<'prompt' | 'device-down' | 'drawing'>('prompt');
  const [showReference, setShowReference] = useState(true);
  const [isStuckOpen, setIsStuckOpen] = useState(false);
  const [isTimesUpOpen, setIsTimesUpOpen] = useState(false);
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
          setIsTimesUpOpen(true);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [session.timerDuration, session.timerStartedAt, session.timerExtraSeconds, isPaused, propSecondsRemaining]);

  // When step changes, return to prompt view to let user digest new instruction
  useEffect(() => {
    setActivePhase('prompt');
  }, [currentPrompt.id]);

  // Find visual reference for current prompt
  const visualReference = currentPrompt.visualReferenceId
    ? getVisualReferenceById(currentPrompt.visualReferenceId)
    : (currentPrompt as any).visualReference || null;

  const handleNextStep = () => {
    onNextPrompt();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-6 min-h-[calc(100vh-2rem)] flex flex-col justify-between text-[#16171A]">
      {/* 1. QUIET TOP BAR */}
      <header className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E5E5DE]">
        <button
          onClick={() => setIsLeaveConfirmOpen(true)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#686862] hover:text-[#16171A] transition-colors -ml-2 px-2.5 py-1.5 rounded-lg hover:bg-[#F4F4F0]"
          aria-label="Leave session"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
          <span>Leave</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code font-semibold text-[#16171A]">
            Step {stepNumber}
          </span>
          <span className="text-[#8A8A82]">·</span>
          <span className="text-xs font-mono-code text-[#686862] uppercase tracking-wider">
            What Comes Next?
          </span>
        </div>

        <div>
          <QuietTimer
            secondsRemaining={secondsRemaining}
            isPaused={isPaused}
            onTogglePause={() => {
              const next = !isPaused;
              setIsPaused(next);
              onPauseToggle(next);
            }}
            onExtend={onExtendTimer}
            onRemove={onRemoveTimer}
          />
        </div>
      </header>

      {/* 2. MAIN DECISION / DRAWING CANVAS AREA */}
      <main className="my-auto py-6 sm:py-8 w-full">
        {/* PHASE A: PROMPT READING (Section 7 & 9) */}
        {activePhase === 'prompt' && (
          <div className="space-y-6 text-center animate-in fade-in duration-150">
            <div className="rounded-3xl bg-white border border-[#E5E5DE] p-6 sm:p-10 shadow-xs space-y-4">
              <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#2752E7]">
                WHAT TO DRAW
              </div>

              {/* Dominant Prompt Text */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#16171A] tracking-tight leading-[1.18] max-w-xl mx-auto">
                {currentPrompt.text}
              </h1>

              {/* Optional Explanation */}
              {currentPrompt.explanation && (
                <p className="text-sm sm:text-base text-[#555550] max-w-md mx-auto leading-relaxed">
                  {currentPrompt.explanation}
                </p>
              )}

              {/* Subtext Encouragement */}
              {currentPrompt.subtext && (
                <p className="font-display italic text-base sm:text-lg text-[#2752E7] max-w-md mx-auto">
                  "{currentPrompt.subtext}"
                </p>
              )}
            </div>

            {/* Visual Reference with "What to Notice" (Section 13) */}
            {visualReference && (
              <div className="text-left max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
                    VISUAL REFERENCE
                  </span>
                  <button
                    onClick={() => setShowReference(!showReference)}
                    className="text-xs text-[#2752E7] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>{showReference ? 'Hide Reference' : 'Show Reference'}</span>
                    {showReference ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {showReference && (
                  <div className="animate-in fade-in duration-150">
                    <VisualReferencePanel
                      visualReference={visualReference}
                      onHide={() => setShowReference(false)}
                      promptText={currentPrompt.text}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Primary Action Button: "I'M READY" (Section 7) */}
            <div className="pt-2 max-w-md mx-auto space-y-3">
              <button
                onClick={() => setActivePhase('device-down')}
                className="w-full py-4 px-6 rounded-2xl bg-[#16171A] text-white font-semibold text-base hover:bg-[#2C2D32] transition-colors shadow-2xs flex items-center justify-center gap-2 group min-h-[50px] active:scale-[0.99]"
              >
                <span>I'm Ready</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-3">
                <VoiceButton instructionText={currentPrompt.text} />
                <MoreInfoDrawer
                  category={currentPrompt.category}
                  difficulty={currentPrompt.difficulty}
                  theme={session.themeId !== 'none' ? session.themeId : undefined}
                  tags={currentPrompt.tags}
                  promptId={currentPrompt.id}
                  whyThisPrompt={currentPrompt.explanation}
                />
              </div>
            </div>
          </div>
        )}

        {/* PHASE B: "PUT THE DEVICE DOWN" MOMENT (Section 8) */}
        {activePhase === 'device-down' && (
          <div className="animate-in fade-in duration-150">
            <PutDeviceDownBanner
              onStartDrawing={() => setActivePhase('drawing')}
              instruction="You can keep the timer ticking or draw untimed. Return whenever you're ready for the next mark."
            />
          </div>
        )}

        {/* PHASE C: ULTRA-MINIMAL CREATION STATE (Section 10) */}
        {activePhase === 'drawing' && (
          <div className="space-y-6 text-center max-w-lg mx-auto animate-in fade-in duration-150">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E5DE] shadow-xs space-y-4">
              <div className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#2752E7]">
                DRAW
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16171A] tracking-tight leading-snug">
                {currentPrompt.text}
              </h2>

              {secondsRemaining !== null && (
                <div className="font-mono-code text-3xl sm:text-4xl font-bold text-[#16171A] pt-2 tabular-nums">
                  {Math.floor(secondsRemaining / 60)}:
                  {(secondsRemaining % 60).toString().padStart(2, '0')}
                </div>
              )}

              <p className="text-xs text-[#8A8A82] pt-2">
                Make your mark directly on paper.
              </p>
            </div>

            {/* Optional quiet in-drawing controls */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <VoiceButton instructionText={currentPrompt.text} />

              {visualReference && (
                <button
                  onClick={() => setShowReference(!showReference)}
                  className="px-3 py-1.5 rounded-lg border border-[#E5E5DE] bg-white text-xs font-semibold text-[#16171A] hover:bg-[#F4F4F0] transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-[#2752E7]" />
                  <span>{showReference ? 'Hide Reference' : 'Show Reference'}</span>
                </button>
              )}

              <button
                onClick={() => {
                  setIsStuckOpen(true);
                  if (onUseStuck) onUseStuck();
                }}
                className="px-3 py-1.5 rounded-lg border border-[#E5E5DE] bg-white text-xs font-semibold text-[#16171A] hover:bg-[#F4F4F0] transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#686862]" />
                <span>I'm Stuck</span>
              </button>
            </div>

            {/* Reference popup if toggled during drawing */}
            {showReference && visualReference && (
              <div className="text-left animate-in fade-in duration-100">
                <VisualReferencePanel
                  visualReference={visualReference}
                  onHide={() => setShowReference(false)}
                  promptText={currentPrompt.text}
                />
              </div>
            )}
          </div>
        )}
      </main>

      {/* 3. FOOTER ACTIONS */}
      <footer className="pt-4 border-t border-[#E5E5DE] space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Primary Action Button: "Next Mark" */}
          <button
            onClick={handleNextStep}
            className="flex-1 py-3.5 sm:py-4 px-6 rounded-xl bg-[#16171A] text-white font-semibold text-base hover:bg-[#2C2D32] transition-colors shadow-2xs active:scale-98 flex items-center justify-center gap-2 group min-h-[50px]"
          >
            <span>Next Mark</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary Action: "I'm Stuck" */}
          <button
            onClick={() => {
              setIsStuckOpen(true);
              if (onUseStuck) onUseStuck();
            }}
            className="py-3 px-5 rounded-xl bg-white border border-[#E5E5DE] text-[#16171A] font-semibold text-xs sm:text-sm hover:bg-[#F4F4F0] transition-colors flex items-center justify-center gap-2 shrink-0 min-h-[46px]"
          >
            <HelpCircle className="w-4 h-4 text-[#2752E7]" />
            <span>I'm Stuck</span>
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-[#8A8A82] px-1">
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

      {/* --- AFTER-TIMER MODAL (Section 11) --- */}
      <AfterTimerModal
        isOpen={isTimesUpOpen}
        onFinish={() => {
          setIsTimesUpOpen(false);
          onFinishSession();
        }}
        onKeepGoing={(extraSec) => {
          setIsTimesUpOpen(false);
          onExtendTimer(extraSec);
        }}
        onContinueUntimed={() => {
          setIsTimesUpOpen(false);
          onRemoveTimer();
        }}
      />

      {/* --- QUIET I'M STUCK NUDGE (Section 12) --- */}
      <QuietStuckNudge
        isOpen={isStuckOpen}
        onClose={() => setIsStuckOpen(false)}
        category={currentPrompt.category}
        initialNudge={currentPrompt.subtext || 'Give your character something to hold or stand beside.'}
      />

      {/* --- LEAVE CONFIRMATION MODAL --- */}
      {isLeaveConfirmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 border border-[#E5E5DE] text-center shadow-xl space-y-4">
            <h3 className="font-display text-xl font-bold text-[#16171A]">
              Leave this drawing session?
            </h3>
            <p className="text-xs text-[#686862] leading-relaxed">
              Your session progress is saved. You can continue right here whenever you return to your sketchbook.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsLeaveConfirmOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-[#16171A] text-white font-semibold text-xs hover:bg-[#2C2D32] transition-colors"
              >
                Keep Creating
              </button>
              <button
                onClick={() => {
                  setIsLeaveConfirmOpen(false);
                  onExitToHome();
                }}
                className="flex-1 py-3 px-4 rounded-xl border border-[#E5E5DE] text-[#686862] font-semibold text-xs hover:bg-[#F4F4F0] hover:text-[#16171A] transition-colors"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
