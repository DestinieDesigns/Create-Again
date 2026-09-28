import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  RotateCcw,
  Play,
  Pause,
  X,
  Pencil,
  Smartphone,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Bookmark,
} from 'lucide-react';
import {
  ListenDrawSession,
  ListenDrawStep,
  ListenDrawState,
  ListenDrawVoiceStyle,
  ListenDrawWarningProfile,
} from '../../types/listenDraw';
import { useListenDrawAudio } from '../../hooks/useListenDrawAudio';
import { VisualReferencePanel } from '../visual/VisualReferencePanel';
import { SavedCreation } from '../../types/session';

interface ListenDrawActiveViewProps {
  session: ListenDrawSession;
  onFinishSession: (savedData?: Partial<SavedCreation>) => void;
  onExitToHome: () => void;
  onSaveToCollection?: (creation: SavedCreation) => void;
}

export const ListenDrawActiveView: React.FC<ListenDrawActiveViewProps> = ({
  session: initialSession,
  onFinishSession,
  onExitToHome,
  onSaveToCollection,
}) => {
  const [session, setSession] = useState<ListenDrawSession>(initialSession);
  const currentStep = session.steps[session.currentStepIndex] || session.steps[0];

  const audio = useListenDrawAudio(session.voiceStyle);

  // Machine state
  const [machineState, setMachineState] = useState<ListenDrawState>('intro');
  const [isPaused, setIsPaused] = useState(false);
  const [creativeSecondsRemaining, setCreativeSecondsRemaining] = useState<number>(
    currentStep.creativeDurationSeconds
  );

  // Warnings already sounded in current creative phase
  const warnedRef = useRef<{
    halfway: boolean;
    oneMin: boolean;
    thirtySec: boolean;
    tenSec: boolean;
  }>({ halfway: false, oneMin: false, thirtySec: false, tenSec: false });

  // Timestamp references for accurate background handling
  const creativeStartedAtRef = useRef<number | null>(null);
  const pausedAccumulatedMsRef = useRef<number>(0);
  const pauseStartTimestampRef = useRef<number | null>(null);
  const isTransitioningRef = useRef<boolean>(false);

  // Double tap detection
  const lastTapTimeRef = useRef<number>(0);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      audio.stop();
    };
  }, []);

  // Update voice style if session preferences change
  useEffect(() => {
    audio.setVoiceStyle(session.voiceStyle);
  }, [session.voiceStyle]);

  // Reset warnings for a new step
  const resetStepWarnings = useCallback(() => {
    warnedRef.current = {
      halfway: false,
      oneMin: false,
      thirtySec: false,
      tenSec: false,
    };
  }, []);

  /**
   * STEP EXECUTION PIPELINE
   * Automatic Hands-Free Flow:
   * 1. INTRO / REFERENCE: Speaks intro & observation -> displays visual reference
   * 2. REFERENCE PAUSE: Allows viewing time (e.g. 5-7s)
   * 3. PUT DEVICE DOWN: Speaks put device down cue
   * 4. INSTRUCTION: Speaks creative drawing instruction
   * 5. CREATIVE: Drawing timer runs in silence, giving space to draw
   * 6. TRANSITION: Spoken transition -> loads next step automatically
   * 7. COMPLETED: Celebrates without scores
   */

  // 1. Start Step Intro & Reference
  const executeStepIntro = useCallback(
    (step: ListenDrawStep) => {
      if (isPaused) return;
      isTransitioningRef.current = false;
      resetStepWarnings();
      setMachineState('reference');
      setCreativeSecondsRemaining(step.creativeDurationSeconds);

      // Speak reference intro, then observation
      audio.speak(step.audio.referenceIntro, () => {
        // Short pause between intro and observation
        setTimeout(() => {
          if (isPaused) return;
          audio.speak(step.audio.referenceObservation, () => {
            // Enter reference viewing pause
            setMachineState('reference-pause');
            setTimeout(() => {
              if (isPaused) return;
              executePutDeviceDown(step);
            }, step.viewingDurationSeconds * 1000);
          });
        }, 800);
      });
    },
    [audio, isPaused, resetStepWarnings]
  );

  // 2. Put Device Down
  const executePutDeviceDown = useCallback(
    (step: ListenDrawStep) => {
      if (isPaused) return;
      setMachineState('put-device-down');

      audio.speak(step.audio.putDeviceDownText, () => {
        setTimeout(() => {
          if (isPaused) return;
          executeCreativeInstruction(step);
        }, 1000);
      });
    },
    [audio, isPaused]
  );

  // 3. Creative Instruction
  const executeCreativeInstruction = useCallback(
    (step: ListenDrawStep) => {
      if (isPaused) return;
      setMachineState('instruction');

      audio.speak(step.audio.creativeInstruction, () => {
        // Begin actual creative drawing phase
        setMachineState('creative');
        creativeStartedAtRef.current = Date.now();
        pausedAccumulatedMsRef.current = 0;
        pauseStartTimestampRef.current = null;
      });
    },
    [audio, isPaused]
  );

  // 4. Transition to next step or complete session
  const executeStepTransition = useCallback(
    (step: ListenDrawStep) => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setMachineState('transition');

      audio.speak(step.audio.transitionText, () => {
        const nextIndex = session.currentStepIndex + 1;
        if (nextIndex < session.steps.length) {
          // Advance to next step automatically
          setSession((prev) => ({
            ...prev,
            currentStepIndex: nextIndex,
          }));
          setTimeout(() => {
            executeStepIntro(session.steps[nextIndex]);
          }, 1200);
        } else {
          // Completed entire session
          executeSessionComplete();
        }
      });
    },
    [audio, session.currentStepIndex, session.steps, executeStepIntro]
  );

  // 5. Complete Session
  const executeSessionComplete = useCallback(() => {
    setMachineState('completed');
    audio.speak(
      "That is the end of this session. Take a look at what you created on your paper. You added something. That's what matters."
    );
  }, [audio]);

  // Initial step kick-off on mount
  useEffect(() => {
    executeStepIntro(currentStep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer loop for 'creative' state
  useEffect(() => {
    if (machineState !== 'creative' || isPaused) return;

    const interval = setInterval(() => {
      if (!creativeStartedAtRef.current) return;

      const now = Date.now();
      const elapsedMs = now - creativeStartedAtRef.current - pausedAccumulatedMsRef.current;
      const totalAllowedSec = currentStep.creativeDurationSeconds;
      const remSec = Math.max(0, totalAllowedSec - Math.floor(elapsedMs / 1000));

      setCreativeSecondsRemaining(remSec);

      // Warning announcements based on selected WarningProfile
      if (session.warningProfile !== 'none') {
        const halfTime = Math.floor(totalAllowedSec / 2);

        // Halfway warning
        if (session.warningProfile === 'full' && remSec <= halfTime && !warnedRef.current.halfway && totalAllowedSec >= 90) {
          warnedRef.current.halfway = true;
          audio.speak('Halfway through.');
        }

        // 1 Minute warning
        if (session.warningProfile === 'full' && remSec <= 60 && remSec > 50 && !warnedRef.current.oneMin && totalAllowedSec >= 120) {
          warnedRef.current.oneMin = true;
          audio.speak('One minute remaining.');
        }

        // 30 Seconds warning
        if (remSec <= 30 && remSec > 25 && !warnedRef.current.thirtySec) {
          warnedRef.current.thirtySec = true;
          audio.speak('Thirty seconds.');
        }

        // 10 Seconds warning
        if (remSec <= 10 && remSec > 5 && !warnedRef.current.tenSec) {
          warnedRef.current.tenSec = true;
          audio.speak('Ten seconds.');
        }
      }

      // Time up
      if (remSec === 0) {
        clearInterval(interval);
        executeStepTransition(currentStep);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [machineState, isPaused, currentStep, session.warningProfile, audio, executeStepTransition]);

  // Handle browser visibility change (graceful recovery if tab was backgrounded)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && machineState === 'creative' && !isPaused && creativeStartedAtRef.current) {
        const now = Date.now();
        const elapsedMs = now - creativeStartedAtRef.current - pausedAccumulatedMsRef.current;
        const totalAllowedSec = currentStep.creativeDurationSeconds;
        const remSec = Math.max(0, totalAllowedSec - Math.floor(elapsedMs / 1000));
        setCreativeSecondsRemaining(remSec);

        if (remSec === 0 && !isTransitioningRef.current) {
          executeStepTransition(currentStep);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [machineState, isPaused, currentStep, executeStepTransition]);

  // Pause toggle
  const togglePause = useCallback(() => {
    setIsPaused((prev) => {
      const next = !prev;
      if (next) {
        // Paused
        pauseStartTimestampRef.current = Date.now();
        audio.stop();
      } else {
        // Resumed
        if (pauseStartTimestampRef.current) {
          pausedAccumulatedMsRef.current += Date.now() - pauseStartTimestampRef.current;
          pauseStartTimestampRef.current = null;
        }
        audio.speak('Resuming.');
      }
      return next;
    });
  }, [audio]);

  // Keyboard shortcut listener (Space = Pause, R = Replay, Esc = Exit)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePause();
      } else if (e.code === 'KeyR') {
        e.preventDefault();
        audio.replayLast();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePause, audio]);

  // Double tap handler on main canvas area
  const handleCanvasTap = () => {
    const now = Date.now();
    if (now - lastTapTimeRef.current < 350) {
      // Double tap detected! Replay instruction
      audio.replayLast();
    }
    lastTapTimeRef.current = now;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      onClick={handleCanvasTap}
      className="min-h-[calc(100vh-2rem)] flex flex-col justify-between max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-6 text-[#16171A] select-none"
    >
      {/* 1. QUIET TOP HEADER */}
      <header className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E5E5DE]/80">
        <div className="flex items-center gap-2">
          <button
            onClick={onExitToHome}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#8A8A82] hover:text-[#16171A] px-2.5 py-1.5 rounded-lg hover:bg-[#F4F4F0] transition-colors -ml-2"
            aria-label="Exit session"
          >
            <X className="w-4 h-4" />
            <span>End</span>
          </button>

          <span className="text-xs font-mono-code text-[#686862]">
            Step {currentStep.stepNumber} of {currentStep.totalSteps}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#2752E7] bg-[#EFF3FF] px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#2752E7] animate-pulse" />
            <span>LISTEN & DRAW</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={togglePause}
            className="px-2.5 py-1 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#16171A] flex items-center gap-1 transition-colors shadow-2xs"
            aria-label={isPaused ? 'Resume' : 'Pause'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-[#2752E7]" /> : <Pause className="w-3.5 h-3.5 text-[#686862]" />}
            <span>{isPaused ? 'Resume' : 'Pause'}</span>
          </button>
        </div>
      </header>

      {/* 2. MAIN INTERACTIVE / VISUAL AREA */}
      <main className="my-auto py-6 sm:py-8 w-full flex flex-col items-center text-center">
        {/* =========================================================================
            STATE A: REFERENCE VIEWING (Look When You Need The Reference)
            ========================================================================= */}
        {(machineState === 'reference' || machineState === 'reference-pause') && (
          <div className="space-y-5 max-w-lg mx-auto w-full animate-in fade-in duration-200">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase tracking-widest text-[#2752E7]">
              <Eye className="w-3.5 h-3.5" />
              <span>QUICK LOOK</span>
            </div>

            {/* Prominent Visual Reference */}
            {currentStep.visualReference && (
              <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#E5E5DE] shadow-xs">
                <VisualReferencePanel
                  visualReference={currentStep.visualReference}
                  promptText={currentStep.promptText}
                />
              </div>
            )}

            {/* Short Explanation / What to Notice */}
            <div className="space-y-1 bg-[#FAF9F5] rounded-2xl p-4 border border-[#E5E5DE]">
              <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]">
                WHAT TO NOTICE
              </div>
              <p className="text-sm font-medium text-[#16171A] leading-relaxed">
                {currentStep.whatToNotice}
              </p>
              <p className="text-xs text-[#8A8A82] pt-1">
                Use the idea. Make yours completely different.
              </p>
            </div>

            {/* Listening Cue Indicator */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#686862] pt-1">
              <Volume2 className={`w-4 h-4 ${audio.isSpeaking ? 'text-[#2752E7] animate-bounce' : 'text-[#8A8A82]'}`} />
              <span>{audio.isSpeaking ? 'Listening…' : 'Take a quick look…'}</span>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE B: PUT DEVICE DOWN CUE
            ========================================================================= */}
        {machineState === 'put-device-down' && (
          <div className="rounded-3xl border border-[#E5E5DE] bg-white p-8 sm:p-10 text-center max-w-md mx-auto shadow-xs space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-center gap-3 text-[#2752E7]">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF3FF] flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#2752E7]" />
              </div>
              <span className="text-base font-semibold text-[#8A8A82]">→</span>
              <div className="w-12 h-12 rounded-2xl bg-[#16171A] text-white flex items-center justify-center">
                <Pencil className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#16171A]">
                You've got what you need.
              </h2>
              <p className="text-sm text-[#686862] leading-relaxed">
                Put the device down. Pick up your pencil. Keep creating.
              </p>
            </div>

            <div className="text-xs text-[#8A8A82] pt-2 border-t border-[#F0F0EB]">
              The screen is not needed during drawing.
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE C: INSTRUCTION & CREATIVE DRAWING (Silence & Space)
            ========================================================================= */}
        {(machineState === 'instruction' || machineState === 'creative') && (
          <div className="space-y-6 text-center max-w-lg mx-auto w-full animate-in fade-in duration-150">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E5DE] shadow-xs space-y-4">
              <div className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#2752E7]">
                DRAW ON PAPER
              </div>

              {/* Dominant Creative Instruction */}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16171A] tracking-tight leading-snug">
                {currentStep.promptText}
              </h2>

              {/* Big, Calm Countdown Timer */}
              <div className="font-mono-code text-4xl sm:text-5xl font-bold text-[#16171A] pt-2 tabular-nums">
                {formatTime(creativeSecondsRemaining)}
              </div>

              <p className="text-xs sm:text-sm text-[#8A8A82] pt-2">
                Keep creating. The screen is not needed.
              </p>
            </div>

            {/* Quick Helper Pill */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  audio.replayLast();
                }}
                className="px-3 py-1.5 rounded-xl border border-[#E5E5DE] bg-white text-xs font-semibold text-[#16171A] hover:bg-[#F4F4F0] transition-colors flex items-center gap-1.5 shadow-2xs"
                title="Hear instruction again (or double tap screen)"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#2752E7]" />
                <span>Repeat Voice (or double-tap)</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE D: TRANSITION (Automatic Progression)
            ========================================================================= */}
        {machineState === 'transition' && (
          <div className="space-y-4 max-w-md mx-auto text-center animate-in fade-in duration-150">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#16171A]">
              Nice. Let's keep going.
            </h3>
            <p className="text-xs sm:text-sm text-[#686862]">
              Pick up your device for a quick look at the next reference…
            </p>
          </div>
        )}

        {/* =========================================================================
            STATE E: COMPLETED (Celebration without rating)
            ========================================================================= */}
        {machineState === 'completed' && (
          <div className="space-y-6 max-w-md mx-auto text-center animate-in fade-in duration-200">
            <div className="w-14 h-14 rounded-3xl bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center mx-auto shadow-2xs">
              <CheckCircle2 className="w-7 h-7 stroke-[2]" />
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-[#2752E7]">
                SESSION COMPLETE
              </div>
              <h2 className="font-display text-3xl font-bold text-[#16171A] tracking-tight">
                Take a look at what you created.
              </h2>
              <p className="text-sm text-[#686862] leading-relaxed">
                You added something to the world on your physical paper. That's the whole point.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => {
                  if (onSaveToCollection) {
                    onSaveToCollection({
                      id: 'creation-lnd-' + Date.now(),
                      title: `Listen & Draw (${session.activityType})`,
                      mode: 'Listen & Draw',
                      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                      timestamp: Date.now(),
                      promptCount: session.steps.length,
                      durationMinutes: Math.round(session.totalDurationSeconds / 60),
                      reflection: 'really-fun',
                    });
                  }
                  onFinishSession();
                }}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#16171A] text-white font-semibold text-sm hover:bg-[#2C2D32] transition-colors shadow-2xs flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Bookmark className="w-4 h-4 text-[#A8C5FF]" />
                <span>Save Session to My Sketchbook</span>
              </button>

              <button
                onClick={onExitToHome}
                className="w-full py-3 px-5 rounded-2xl bg-white border border-[#E5E5DE] text-[#16171A] font-semibold text-xs sm:text-sm hover:bg-[#F4F4F0] transition-colors min-h-[44px]"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 3. CAPTION & QUIET FOOTER */}
      <footer className="pt-4 border-t border-[#E5E5DE]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8A82] gap-2">
        <div className="flex items-center gap-2">
          {audio.currentCaption ? (
            <span className="text-[#16171A] font-medium italic">
              "{audio.currentCaption}"
            </span>
          ) : (
            <span>Look when you need the reference. Listen when creating.</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono-code text-[#8A8A82]">
            Space = Pause · R = Repeat
          </span>
        </div>
      </footer>
    </div>
  );
};
