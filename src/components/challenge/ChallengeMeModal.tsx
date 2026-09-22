import React, { useState } from 'react';
import {
  X,
  Trophy,
  RefreshCw,
  Clock,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Compass,
} from 'lucide-react';
import { ChallengeItem, getChallengesByDifficulty, getRandomChallenge } from '../../data/challenges';

interface ChallengeMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartChallenge: (challenge: ChallengeItem, timerSeconds: number | null) => void;
}

export const ChallengeMeModal: React.FC<ChallengeMeModalProps> = ({
  isOpen,
  onClose,
  onStartChallenge,
}) => {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [currentChallenge, setCurrentChallenge] = useState<ChallengeItem>(() =>
    getRandomChallenge('medium')
  );
  const [selectedTimer, setSelectedTimer] = useState<number | null>(600); // 10 min default

  if (!isOpen) return null;

  const handleDifficultyChange = (diff: 'easy' | 'medium' | 'hard') => {
    setDifficulty(diff);
    setCurrentChallenge(getRandomChallenge(diff));
  };

  const handleShuffle = () => {
    const list = getChallengesByDifficulty(difficulty);
    const others = list.filter((c) => c.id !== currentChallenge.id);
    const next = others.length > 0
      ? others[Math.floor(Math.random() * others.length)]
      : list[0];
    setCurrentChallenge(next);
  };

  const timerOptions: { label: string; seconds: number | null }[] = [
    { label: 'Untimed', seconds: null },
    { label: '5 min', seconds: 300 },
    { label: '10 min', seconds: 600 },
    { label: '15 min', seconds: 900 },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="challenge-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] text-left max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close Challenge Me modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl bg-[#FEF6E4] text-[#DDA15E] flex items-center justify-center">
            <Trophy className="w-4 h-4 text-[#B0722A]" />
          </div>
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
            CHALLENGE ME
          </span>
        </div>

        <h2
          id="challenge-modal-title"
          className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans mt-1"
        >
          Push yourself a little.
        </h2>
        <p className="text-xs sm:text-sm text-[#7A6E63] font-handwriting text-lg sm:text-xl mt-0.5">
          One creative brief. No judgment. See what happens on your paper.
        </p>

        {/* Step 1: WHAT SOUNDS RIGHT? (Point 44) */}
        <div className="mt-5 pt-4 border-t border-[#E8E0D5]">
          <label className="block text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-2.5">
            WHAT SOUNDS RIGHT?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['easy', 'medium', 'hard'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => handleDifficultyChange(diff)}
                className={`py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all min-h-[44px] border-2 ${
                  difficulty === diff
                    ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#655A51] border-[#E8E0D5] hover:bg-[#EFE9DF]'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Presentation Card */}
        <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#2D2723] subtle-shadow relative">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#E06D53]">
              {difficulty.toUpperCase()} CHALLENGE · {currentChallenge.title}
            </span>
            <button
              onClick={handleShuffle}
              className="text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] flex items-center gap-1 min-h-[36px] px-2 rounded-lg hover:bg-[#EAE2D7]"
              title="Show another challenge"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Change</span>
            </button>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] leading-snug tracking-tight">
            {currentChallenge.prompt}
          </h3>

          <p className="text-xs sm:text-sm text-[#5A4D42] mt-2 leading-relaxed">
            {currentChallenge.description}
          </p>

          {/* Tip & Visual Cue */}
          <div className="mt-4 pt-3 border-t border-[#EAE2D7] space-y-2">
            <div className="flex items-start gap-2 text-xs text-[#63554A]">
              <Lightbulb className="w-4 h-4 text-[#DDA15E] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#2D2723]">Tip:</strong> {currentChallenge.tip}
              </span>
            </div>
            {currentChallenge.visualCue && (
              <div className="flex items-start gap-2 text-xs text-[#7A6E63] font-handwriting text-base">
                <Compass className="w-4 h-4 text-[#8A7D71] shrink-0 mt-0.5" />
                <span>
                  <strong>Visual starting cue:</strong> {currentChallenge.visualCue}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Timer Selection */}
        <div className="mt-5">
          <label className="block text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-2">
            TIMER (OPTIONAL)
          </label>
          <div className="grid grid-cols-4 gap-2">
            {timerOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSelectedTimer(opt.seconds)}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all min-h-[40px] border ${
                  selectedTimer === opt.seconds
                    ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723]'
                    : 'bg-[#FAF7F2] text-[#655A51] border-[#E8E0D5] hover:bg-[#EFE9DF]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button: One dominant primary CTA (Point 77) */}
        <div className="mt-6 pt-4 border-t border-[#E8E0D5] flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onStartChallenge(currentChallenge, selectedTimer);
              onClose();
            }}
            className="w-full py-4 px-6 rounded-2xl bg-[#2D2723] hover:bg-[#433B35] text-[#FAF7F2] font-extrabold text-sm sm:text-base tracking-wide shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 min-h-[52px]"
          >
            <span>START CHALLENGE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Gentle Device-Down prompt */}
        <p className="text-center text-xs text-[#8A7D71] mt-3 font-handwriting text-base">
          Put the device down. Go create it on paper. Come back when you're done.
        </p>
      </div>
    </div>
  );
};
