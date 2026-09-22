import React, { useState, useEffect } from 'react';
import { X, Flame, Clock, Play, Pause, RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';

interface WarmUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinishWarmUp: () => void;
}

interface Exercise {
  title: string;
  duration: number; // in seconds
  description: string;
  tip: string;
}

const WARM_UP_EXERCISES: Exercise[] = [
  {
    title: 'Loose Circles from the Shoulder',
    duration: 120,
    description: 'Draw 30 loose, overlapping circles across your page. Move from your shoulder, not your wrist.',
    tip: 'Speed matters more than precision. Let them be wobbly and free.',
  },
  {
    title: 'Blind Contour Drawing',
    duration: 120,
    description: 'Pick an object on your desk or your non-drawing hand. Draw its outline without once looking down at your paper.',
    tip: 'It will look hilarious and strange. That is the whole point!',
  },
  {
    title: 'Continuous Single Line',
    duration: 120,
    description: 'Draw an entire scene or creature without lifting your pen from the paper once. If you need to cross over, draw a connecting line.',
    tip: 'Embrace the tangled loops.',
  },
  {
    title: 'Pressure & Texture Swatches',
    duration: 120,
    description: 'Draw 4 small boxes. Fill box 1 with whisper-light lines, box 2 with intense pressure, box 3 with crosshatching, box 4 with scribbles.',
    tip: 'Feel the friction of your pen or pencil against the paper grain.',
  },
  {
    title: 'Non-Dominant Hand Wander',
    duration: 120,
    description: 'Switch your pen to your non-dominant hand. Draw a friendly monster or a quiet tree.',
    tip: 'Your lack of control turns off the inner perfectionist.',
  },
];

export const WarmUpModal: React.FC<WarmUpModalProps> = ({
  isOpen,
  onClose,
  onFinishWarmUp,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [completed, setCompleted] = useState(false);

  const activeExercise = WARM_UP_EXERCISES[selectedIdx];

  useEffect(() => {
    setTimeLeft(activeExercise.duration);
    setIsRunning(false);
    setCompleted(false);
  }, [selectedIdx]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          setCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
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
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
          Warm Up Your Hand
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6054] mt-0.5 font-handwriting text-lg">
          2 minutes to release tension and turn off judgment.
        </p>

        {/* Exercises Selector */}
        <div className="flex items-center gap-2 overflow-x-auto py-3 my-3">
          {WARM_UP_EXERCISES.map((ex, i) => (
            <button
              key={i}
              onClick={() => setSelectedIdx(i)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedIdx === i
                  ? 'bg-[#2D2723] text-[#FAF7F2]'
                  : 'bg-[#EFE9DF] text-[#655A51] hover:bg-[#E5DDCF]'
              }`}
            >
              {i + 1}. {ex.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Exercise Display */}
        <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#E8E0D5] p-6 text-center my-4">
          <h3 className="text-xl font-extrabold text-[#2D2723]">
            {activeExercise.title}
          </h3>
          <p className="text-sm sm:text-base text-[#52453B] mt-2 font-medium leading-relaxed">
            {activeExercise.description}
          </p>

          <div className="mt-4 p-3 bg-[#FCFAF6] rounded-xl border border-[#E8E0D5] text-xs text-[#7A6D61] font-handwriting text-base">
            💡 {activeExercise.tip}
          </div>

          {/* Timer Display */}
          <div className="mt-6 flex flex-col items-center justify-center">
            <div className="font-mono-code text-4xl sm:text-5xl font-extrabold text-[#2D2723] mb-3">
              {formatTime(timeLeft)}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-6 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all ${
                  isRunning
                    ? 'bg-[#EFE9DF] text-[#2D2723]'
                    : 'bg-[#2D2723] text-[#FAF7F2] shadow-xs'
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
                    <span>{timeLeft === 120 ? 'START 2-MIN TIMER' : 'RESUME'}</span>
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
            Draw until the timer ends.
          </span>
          <button
            onClick={() => {
              onFinishWarmUp();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-extrabold text-xs shadow-xs flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>I'M WARMED UP</span>
          </button>
        </div>
      </div>
    </div>
  );
};
