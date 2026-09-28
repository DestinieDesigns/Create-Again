import React, { useState } from 'react';
import { Clock, Play, Pause, RotateCcw, X, Plus } from 'lucide-react';

interface QuietTimerProps {
  secondsRemaining: number | null;
  isPaused: boolean;
  onTogglePause: () => void;
  onExtend?: (extraSeconds: number) => void;
  onRemove?: () => void;
  onRestart?: () => void;
  className?: string;
}

export const QuietTimer: React.FC<QuietTimerProps> = ({
  secondsRemaining,
  isPaused,
  onTogglePause,
  onExtend,
  onRemove,
  onRestart,
  className = '',
}) => {
  const [showControls, setShowControls] = useState(false);

  if (secondsRemaining === null) {
    return (
      <span className={`text-xs font-mono-code text-[#8A8A82] ${className}`}>
        Untimed
      </span>
    );
  }

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins}:${secs.toString().padStart(2, '0')}`;
  const isUrgent = secondsRemaining > 0 && secondsRemaining <= 60;

  return (
    <div className={`relative inline-flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-1.5 bg-white border border-[#E5E5DE] px-2.5 py-1 rounded-lg shadow-2xs">
        <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-[#DC2626]' : 'text-[#686862]'}`} />
        <span
          className={`font-mono-code text-xs sm:text-sm font-semibold tabular-nums ${
            isUrgent ? 'text-[#DC2626]' : 'text-[#16171A]'
          }`}
        >
          {timeFormatted}
        </span>
        <button
          onClick={onTogglePause}
          className="p-1 hover:bg-[#F4F4F0] rounded text-[#686862] transition-colors"
          aria-label={isPaused ? 'Resume timer' : 'Pause timer'}
          title={isPaused ? 'Resume timer' : 'Pause timer'}
        >
          {isPaused ? <Play className="w-3 h-3 stroke-[2.5]" /> : <Pause className="w-3 h-3 stroke-[2.5]" />}
        </button>

        {(onExtend || onRemove || onRestart) && (
          <button
            onClick={() => setShowControls(!showControls)}
            className="text-[10px] font-mono-code text-[#8A8A82] hover:text-[#16171A] px-1 hover:bg-[#F4F4F0] rounded"
            title="Timer options"
          >
            ···
          </button>
        )}
      </div>

      {/* Compact Secondary Controls Menu */}
      {showControls && (
        <div className="absolute right-0 top-full mt-1.5 z-30 bg-white border border-[#E5E5DE] rounded-xl p-1.5 shadow-md flex flex-col gap-1 min-w-[140px] text-xs">
          {onExtend && (
            <button
              onClick={() => {
                onExtend(300);
                setShowControls(false);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-left text-[#16171A] hover:bg-[#F4F4F0] transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-[#2752E7]" />
              <span>+5 Minutes</span>
            </button>
          )}

          {onRestart && (
            <button
              onClick={() => {
                onRestart();
                setShowControls(false);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-left text-[#16171A] hover:bg-[#F4F4F0] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#686862]" />
              <span>Restart Timer</span>
            </button>
          )}

          {onRemove && (
            <button
              onClick={() => {
                onRemove();
                setShowControls(false);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-left text-[#DC2626] hover:bg-[#FFF5F5] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Stop Timer</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
