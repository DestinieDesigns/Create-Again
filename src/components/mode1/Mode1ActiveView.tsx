import React, { useState, useEffect } from 'react';
import {
  Clock,
  Pause,
  Play,
  HelpCircle,
  CheckCircle2,
  Plus,
  ArrowRight,
  BookOpen,
  Sparkles,
  AlertCircle,
  X,
  RefreshCw,
} from 'lucide-react';
import { Prompt, PromptCategory } from '../../types/prompt';
import { Mode1Session } from '../../types/session';
import { STUCK_SUGGESTIONS, StuckSuggestion } from '../../data/stuckPrompts';

interface Mode1ActiveViewProps {
  session: Mode1Session;
  currentPrompt: Prompt;
  onNextPrompt: () => void;
  onFinishSession: () => void;
  onExtendTimer: (extraSeconds: number) => void;
  onRemoveTimer: () => void;
  onPauseToggle: (isPaused: boolean) => void;
  onUseStuck: () => void;
  onExitToHome: () => void;
}

export const Mode1ActiveView: React.FC<Mode1ActiveViewProps> = ({
  session,
  currentPrompt,
  onNextPrompt,
  onFinishSession,
  onExtendTimer,
  onRemoveTimer,
  onPauseToggle,
  onUseStuck,
  onExitToHome,
}) => {
  const [stuckModalOpen, setStuckModalOpen] = useState(false);
  const [activeStuckIdea, setActiveStuckIdea] = useState<StuckSuggestion | null>(null);

  // Timer states
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(() => {
    if (!session.timerDuration || !session.timerStartedAt) return null;
    const total = session.timerDuration + (session.timerExtraSeconds || 0);
    const elapsed = Math.floor((Date.now() - session.timerStartedAt) / 1000);
    return Math.max(0, total - elapsed);
  });

  const [isPaused, setIsPaused] = useState(false);
  const [timesUpModal, setTimesUpModal] = useState(false);

  // Timer interval
  useEffect(() => {
    if (!session.timerDuration || !session.timerStartedAt || isPaused) return;

    const interval = setInterval(() => {
      const total = session.timerDuration! + (session.timerExtraSeconds || 0);
      const elapsed = Math.floor((Date.now() - session.timerStartedAt!) / 1000);
      const remaining = Math.max(0, total - elapsed);
      setSecondsRemaining(remaining);

      if (remaining === 0 && !timesUpModal) {
        setTimesUpModal(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [session.timerDuration, session.timerStartedAt, session.timerExtraSeconds, isPaused, timesUpModal]);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOpenStuck = () => {
    const random = STUCK_SUGGESTIONS[Math.floor(Math.random() * STUCK_SUGGESTIONS.length)];
    setActiveStuckIdea(random);
    setStuckModalOpen(true);
    onUseStuck();
  };

  const handleShuffleStuck = () => {
    const random = STUCK_SUGGESTIONS[Math.floor(Math.random() * STUCK_SUGGESTIONS.length)];
    setActiveStuckIdea(random);
  };

  const getCategoryColor = (cat: PromptCategory) => {
    switch (cat) {
      case 'START':
        return 'bg-[#2D2723] text-white';
      case 'CONNECT':
        return 'bg-[#2A9D8F] text-white';
      case 'TRANSFORM':
        return 'bg-[#E76F51] text-white';
      case 'ADD':
        return 'bg-[#DDA15E] text-[#2D2723]';
      case 'INTERACT':
        return 'bg-[#BC6C25] text-white';
      case 'STORY':
        return 'bg-[#606C38] text-white';
      case 'CHAOS':
        return 'bg-[#9D0208] text-white';
      case 'DETAIL':
        return 'bg-[#4A4E69] text-white';
      case 'CHANGE':
        return 'bg-[#7209B7] text-white';
      case 'FINISH':
        return 'bg-[#283618] text-white';
      default:
        return 'bg-[#4A4037] text-white';
    }
  };

  const stepNumber = session.usedPromptIds.length + 1;

  return (
    <div className="min-h-[85vh] flex flex-col justify-between max-w-2xl mx-auto px-4 py-4 sm:py-6">
      {/* Top Bar with abstract progress and timer */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E8E0D5]">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
            <span>WHAT COMES NEXT?</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-extrabold text-base text-[#2D2723]">
              Step {stepNumber}
            </span>
            {/* Abstract progress dots (no fixed end) */}
            <div className="flex items-center gap-1.5 ml-1">
              {Array.from({ length: Math.min(stepNumber, 5) }).map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-[#2D2723]" />
              ))}
              <span className="w-2 h-2 rounded-full bg-[#D5C9BC] animate-pulse" />
              <span className="text-xs font-handwriting text-[#8A7D71] font-bold">
                mystery continues...
              </span>
            </div>
          </div>
        </div>

        {/* Timer or Pause Controls */}
        <div className="flex items-center gap-2">
          {secondsRemaining !== null ? (
            <div className="flex items-center gap-2 bg-[#FCFAF6] border-2 border-[#E8E0D5] px-3 py-1.5 rounded-xl shadow-xs">
              <Clock className="w-4 h-4 text-[#8A7D71]" />
              <span
                className={`font-mono-code font-bold text-sm ${
                  secondsRemaining <= 60 ? 'text-[#D90429] animate-pulse' : 'text-[#2D2723]'
                }`}
              >
                {formatTimer(secondsRemaining)}
              </span>
              <button
                onClick={() => {
                  const nextState = !isPaused;
                  setIsPaused(nextState);
                  onPauseToggle(nextState);
                }}
                className="p-1 hover:bg-[#EFE9DF] rounded-md text-[#786C61]"
                title={isPaused ? 'Resume timer' : 'Pause timer'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            </div>
          ) : (
            <div className="text-xs font-mono-code text-[#7A6E63] bg-[#EFE9DF] px-3 py-1 rounded-full">
              Untimed flow
            </div>
          )}

          <button
            onClick={onExitToHome}
            className="text-xs font-semibold text-[#8C7F73] hover:text-[#2D2723] px-2 py-1"
          >
            Leave
          </button>
        </div>
      </div>

      {/* Screen reminder notice */}
      <div className="mt-3 py-1.5 px-3 bg-[#F2EDE4] rounded-xl text-center text-xs text-[#73665B] flex items-center justify-center gap-2 border border-[#E4D9CA]">
        <BookOpen className="w-3.5 h-3.5 text-[#E06D53]" />
        <span>
          <strong>Your page is the canvas.</strong> Keep this screen beside your sketchbook.
        </span>
      </div>

      {/* Time's Up Banner (non-blocking) */}
      {timesUpModal && (
        <div className="my-3 p-4 rounded-2xl bg-[#FFF3E8] border-2 border-[#F3BE96] shadow-sm animate-fadeIn">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E06D53]" />
              <h4 className="font-extrabold text-sm sm:text-base text-[#2D2723]">
                TIME'S UP — Take a look at what you created!
              </h4>
            </div>
            <button
              onClick={() => setTimesUpModal(false)}
              className="text-[#968475] hover:text-[#2D2723]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#6E5F52] mt-1">
            You reached your physical timer target. You can finish your piece now or keep drawing as long as you want.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              onClick={onFinishSession}
              className="px-3.5 py-1.5 rounded-lg bg-[#2D2723] text-white text-xs font-bold"
            >
              I'M DONE DRAWING
            </button>
            <button
              onClick={() => {
                onExtendTimer(300);
                setTimesUpModal(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-white border border-[#F3BE96] text-xs font-bold text-[#E06D53] flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              <span>+5 MINUTES</span>
            </button>
            <button
              onClick={() => {
                onRemoveTimer();
                setTimesUpModal(false);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#736355] hover:bg-[#FBEBE0]"
            >
              CONTINUE WITHOUT TIMER
            </button>
          </div>
        </div>
      )}

      {/* Main Active Prompt Card */}
      <div className="my-auto py-6">
        <div className="relative rounded-3xl bg-[#FAF7F2] border-3 border-[#2D2723] p-7 sm:p-10 paper-card subtle-shadow text-center">
          {/* Subtle paper tape at top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#E8DDD1] rotate-1 border border-[#D5C7B7] shadow-2xs" />

          {/* Category Tag */}
          <div className="inline-flex items-center gap-1.5 mb-5">
            <span
              className={`text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs ${getCategoryColor(
                currentPrompt.category
              )}`}
            >
              {currentPrompt.category}
            </span>
          </div>

          {/* Large Prompt Instruction */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2723] tracking-tight leading-snug max-w-lg mx-auto font-sans">
            {currentPrompt.text}
          </h2>

          {/* Subtle subtext encouragement */}
          {currentPrompt.subtext && (
            <p className="mt-4 font-handwriting text-xl sm:text-2xl text-[#6E6054] max-w-md mx-auto font-bold">
              {currentPrompt.subtext}
            </p>
          )}

          {/* Encouraging rule banner */}
          <div className="mt-8 pt-5 border-t border-[#EAE2D7] text-xs font-medium text-[#87786B] flex items-center justify-center gap-2">
            <span>No erasing. No starting over. Just add.</span>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="pt-4 border-t border-[#E8E0D5] space-y-3">
        <div className="flex items-center gap-3">
          {/* Primary NEXT Button */}
          <button
            onClick={onNextPrompt}
            className="flex-1 py-4 sm:py-5 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-lg sm:text-xl hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-3 group"
          >
            <span>NEXT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* "I'M STUCK" Button */}
          <button
            onClick={handleOpenStuck}
            className="py-4 sm:py-5 px-5 rounded-2xl bg-[#FCFAF6] border-2 border-[#D8CEBE] text-[#54483E] font-bold text-sm sm:text-base hover:bg-[#F2EDE4] transition-all active:scale-98 flex items-center justify-center gap-2 shrink-0"
          >
            <HelpCircle className="w-5 h-5 text-[#E06D53]" />
            <span className="hidden sm:inline">I'M STUCK</span>
            <span className="sm:hidden">STUCK</span>
          </button>
        </div>

        {/* Bottom Finisher */}
        <div className="flex items-center justify-between text-xs text-[#8A7D71] px-2">
          <span>Draw it at your own speed on your paper.</span>
          <button
            onClick={onFinishSession}
            className="font-bold text-[#E06D53] hover:text-[#C04D33] flex items-center gap-1 py-1"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>I'M DONE FOR NOW</span>
          </button>
        </div>
      </div>

      {/* "I'M STUCK" Modal / Card */}
      {stuckModalOpen && activeStuckIdea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-[#FCFAF6] rounded-3xl p-6 sm:p-7 paper-card border-2 border-[#E8E0D5] relative text-center">
            <button
              onClick={() => setStuckModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#FFF2E6] text-[#E06D53] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
              Gentle Rescue
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight mt-1">
              Try this on your page:
            </h3>

            <div className="my-5 p-5 bg-[#FAF7F2] rounded-2xl border-2 border-[#E8E0D5] text-left">
              <p className="text-base sm:text-lg font-extrabold text-[#2D2723]">
                {activeStuckIdea.text}
              </p>
              {activeStuckIdea.subtext && (
                <p className="text-xs sm:text-sm text-[#6E6054] mt-1.5 font-handwriting text-lg">
                  {activeStuckIdea.subtext}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleShuffleStuck}
                className="p-3 rounded-xl border border-[#D8CEBE] hover:bg-[#EFE9DF] text-[#6E6054] text-xs font-bold flex items-center gap-1.5"
                title="Give another idea"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>ANOTHER IDEA</span>
              </button>

              <button
                onClick={() => setStuckModalOpen(false)}
                className="px-6 py-3 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs shadow-sm hover:bg-[#433B35]"
              >
                GOT IT, BACK TO DRAWING
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
