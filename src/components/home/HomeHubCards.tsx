import React from 'react';
import { Sparkles, HelpCircle, Flame, Dices, Trophy, ArrowRight } from 'lucide-react';

interface HomeHubCardsProps {
  onStartWhatComesNext: () => void;
  onOpenDontKnow: () => void;
  onOpenWarmUp: () => void;
  onOpenChaos: () => void;
  onOpenChallenge: () => void;
}

export const HomeHubCards: React.FC<HomeHubCardsProps> = ({
  onStartWhatComesNext,
  onOpenDontKnow,
  onOpenWarmUp,
  onOpenChaos,
  onOpenChallenge,
}) => {
  return (
    <section className="max-w-4xl mx-auto space-y-6 sm:space-y-8 my-6">
      {/* 1. Two Main Cards: WHAT COMES NEXT? and I DON'T KNOW WHAT TO DRAW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Card 1: What Comes Next? */}
        <div
          onClick={onStartWhatComesNext}
          className="group relative rounded-3xl bg-[#FCFAF6] border-2 border-[#2D2723] p-6 sm:p-7 paper-card subtle-shadow cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg text-left flex flex-col justify-between min-h-[200px]"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E06D53] text-white">
                Signature Mode
              </span>
              <Sparkles className="w-5 h-5 text-[#E06D53]" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight group-hover:text-[#E06D53] transition-colors">
              WHAT COMES NEXT?
            </h2>

            <p className="font-handwriting text-xl sm:text-2xl font-bold text-[#7A6E63] mt-1">
              Don't know what you're drawing? Good.
            </p>

            <p className="text-xs sm:text-sm text-[#5C5249] mt-2 leading-relaxed">
              Step-by-step mystery instructions. Draw one mark on your paper, then see what comes next.
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-[#EAE2D7] flex items-center justify-between">
            <span className="text-xs sm:text-sm font-extrabold text-[#2D2723] group-hover:text-[#E06D53]">
              START MYSTERY
            </span>
            <div className="w-8 h-8 rounded-full bg-[#2D2723] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card 2: I Don't Know What to Draw */}
        <div
          onClick={onOpenDontKnow}
          className="group relative rounded-3xl bg-[#FAF7F2] border-2 border-[#D8CEBE] hover:border-[#2D2723] p-6 sm:p-7 paper-card subtle-shadow cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg text-left flex flex-col justify-between min-h-[200px]"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE9DF] text-[#63554A]">
                Gentle Start
              </span>
              <HelpCircle className="w-5 h-5 text-[#8A7D71]" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight group-hover:text-[#E06D53] transition-colors">
              I DON'T KNOW WHAT TO DRAW
            </h2>

            <p className="font-handwriting text-xl sm:text-2xl font-bold text-[#7A6E63] mt-1">
              No pressure. Just start here.
            </p>

            <p className="text-xs sm:text-sm text-[#5C5249] mt-2 leading-relaxed">
              Choose your energy level and time, and we'll give you a calm, single place to put pencil to paper.
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-[#EAE2D7] flex items-center justify-between">
            <span className="text-xs sm:text-sm font-extrabold text-[#63554A] group-hover:text-[#2D2723]">
              TRY IT
            </span>
            <div className="w-8 h-8 rounded-full bg-[#EFE9DF] group-hover:bg-[#2D2723] group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Quick Activities Row */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code mb-3 text-left">
          QUICK ACTIVITIES
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Warm Up */}
          <button
            onClick={onOpenWarmUp}
            className="flex items-center justify-between p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5] hover:border-[#2D2723] transition-all text-left group min-h-[56px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF2E6] text-[#E06D53] flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-extrabold text-[#2D2723] group-hover:text-[#E06D53]">
                  Warm Up
                </span>
                <span className="block text-[11px] text-[#7A6E63]">
                  2-minute hand looseners
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A7D71] group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Creative Chaos */}
          <button
            onClick={onOpenChaos}
            className="flex items-center justify-between p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5] hover:border-[#2D2723] transition-all text-left group min-h-[56px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F2F4EB] text-[#606C38] flex items-center justify-center shrink-0">
                <Dices className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-extrabold text-[#2D2723] group-hover:text-[#606C38]">
                  Creative Chaos
                </span>
                <span className="block text-[11px] text-[#7A6E63]">
                  Weird combo generator
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A7D71] group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Challenge Me */}
          <button
            onClick={onOpenChallenge}
            className="flex items-center justify-between p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5] hover:border-[#2D2723] transition-all text-left group min-h-[56px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FEF6E4] text-[#DDA15E] flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-extrabold text-[#2D2723] group-hover:text-[#B0722A]">
                  Challenge Me
                </span>
                <span className="block text-[11px] text-[#7A6E63]">
                  Level up your skills
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A7D71] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
