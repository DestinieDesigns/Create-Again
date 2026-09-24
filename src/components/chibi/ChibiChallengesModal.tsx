import React, { useState } from 'react';
import {
  X,
  Trophy,
  Sparkles,
  ArrowRight,
  Pencil,
  CheckCircle2,
  HelpCircle,
  Tag,
} from 'lucide-react';
import { CHIBI_CHALLENGES, ChibiChallenge } from '../../data/chibiChallenges';

interface ChibiChallengesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartChallengeJourney: (challenge: ChibiChallenge) => void;
}

export const ChibiChallengesModal: React.FC<ChibiChallengesModalProps> = ({
  isOpen,
  onClose,
  onStartChallengeJourney,
}) => {
  const [selectedChallenge, setSelectedChallenge] = useState<ChibiChallenge>(
    CHIBI_CHALLENGES[0]
  );

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Chibi Character Challenges"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/65 backdrop-blur-xs animate-fadeIn text-[#2D2723]"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] paper-card subtle-shadow flex flex-col overflow-hidden text-left max-h-[92vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FBEFEA] text-[#E06D53] flex items-center justify-center font-bold">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A7D71]">
                Deliberate Practice Missions
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#2D2723]">
                10 CHARACTER CHALLENGES
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Split Layout: Challenge List on Left, Selected Challenge Details on Right */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left list */}
          <div className="w-full md:w-5/12 border-r border-[#E8E0D5] overflow-y-auto p-3 space-y-2 bg-[#FCFAF6]">
            {CHIBI_CHALLENGES.map((ch) => {
              const isSelected = ch.id === selectedChallenge.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChallenge(ch)}
                  className={`w-full p-3 rounded-2xl text-left border-2 transition-all flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'border-[#E06D53] bg-[#FAF7F2] ring-2 ring-[#E06D53]/20 shadow-xs'
                      : 'border-[#E8E0D5] bg-[#FCFAF6] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#8A7D71] uppercase block">
                      MISSION #{ch.number}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#2D2723]">
                      {ch.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#E06D53] font-bold">
                    #{ch.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right details */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-[#FAF7F2] text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#E06D53] uppercase tracking-wider">
                CHALLENGE #{selectedChallenge.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#2D2723]">
                {selectedChallenge.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#E06D53] italic">
                "{selectedChallenge.subtitle}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#5C5249] leading-relaxed">
              {selectedChallenge.description}
            </p>

            {/* Core Art Rule */}
            <div className="p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#2D2723] space-y-1">
              <div className="text-[10px] font-mono font-bold text-[#2D2723] uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
                <span>THE ART RULE:</span>
              </div>
              <p className="text-xs font-bold text-[#E06D53]">
                {selectedChallenge.artRule}
              </p>
            </div>

            {/* 60-Second Warmup */}
            <div className="p-3.5 rounded-2xl bg-[#EFE9DF]/60 border border-[#D8CEBE] text-xs space-y-1">
              <div className="font-bold text-[#2D2723] flex items-center gap-1.5">
                <Pencil className="w-3.5 h-3.5 text-[#8A7D71]" />
                <span>60-SECOND WARM-UP PROMPT:</span>
              </div>
              <p className="text-[#5C5249]">{selectedChallenge.warmUpPrompt}</p>
            </div>

            {/* Sketchbook Goal */}
            <div className="text-xs text-[#6B6158]">
              <strong>Final Page Goal:</strong> {selectedChallenge.sketchbookGoal}
            </div>

            {/* Launch CTA */}
            <div className="pt-4 border-t border-[#E8E0D5]">
              <button
                onClick={() => {
                  onClose();
                  onStartChallengeJourney(selectedChallenge);
                }}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>LAUNCH THIS MISSION IN CHARACTER JOURNEY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
