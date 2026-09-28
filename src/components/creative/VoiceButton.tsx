import React, { useState } from 'react';
import { Volume2, VolumeX, RotateCcw, MessageSquare } from 'lucide-react';
import { useQuietVoice } from '../../hooks/useQuietVoice';

interface VoiceButtonProps {
  instructionText: string;
  className?: string;
  autoRead?: boolean;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  instructionText,
  className = '',
  autoRead = false,
}) => {
  const { isSupported, isSpeaking, hasSpoken, currentCaption, speak, stop, replay } =
    useQuietVoice(instructionText);
  const [showCaptions, setShowCaptions] = useState(false);

  if (!isSupported) return null;

  const handleClick = () => {
    if (isSpeaking) {
      stop();
    } else if (hasSpoken) {
      replay();
    } else {
      speak(instructionText);
    }
  };

  return (
    <div className={`relative inline-flex items-center gap-1.5 ${className}`}>
      <button
        onClick={handleClick}
        className={`px-2.5 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs ${
          isSpeaking
            ? 'bg-[#EFF3FF] border-[#2752E7] text-[#2752E7] animate-pulse'
            : 'bg-white border-[#E5E5DE] text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0]'
        }`}
        title={isSpeaking ? 'Stop voice' : hasSpoken ? 'Replay instruction' : 'Listen to instruction'}
        aria-label={isSpeaking ? 'Stop voice' : 'Listen to instruction'}
      >
        <Volume2 className="w-3.5 h-3.5" />
        <span>{isSpeaking ? 'Speaking…' : hasSpoken ? 'Replay' : 'Voice'}</span>
      </button>

      {/* Optional captions toggle if caption exists or speaking */}
      {currentCaption && (
        <div className="absolute left-0 bottom-full mb-2 z-30 bg-[#16171A] text-white text-xs px-3 py-1.5 rounded-lg shadow-lg max-w-xs whitespace-normal pointer-events-none animate-in fade-in duration-100">
          {currentCaption}
        </div>
      )}
    </div>
  );
};
