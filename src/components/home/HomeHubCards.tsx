import React from 'react';
import {
  Sparkles,
  HelpCircle,
  Flame,
  ArrowRight,
  BookOpen,
  User,
  Trophy,
  Dices,
} from 'lucide-react';

interface HomeHubCardsProps {
  onStartWhatComesNext: () => void;
  onOpenDontKnow: () => void;
  onOpenCharacterDesign: () => void;
  onOpenChibiJourney?: () => void;
  onOpenChibiChallenges?: () => void;
  onOpenMyCharacters?: () => void;
  activeChibiCharacterName?: string;
  activeChibiStageCount?: number;
  onOpenWarmUp: () => void;
  onOpenChaos: () => void;
  onOpenChallenge: () => void;
  onOpenPartLibrary?: () => void;
}

export const HomeHubCards: React.FC<HomeHubCardsProps> = ({
  onStartWhatComesNext,
  onOpenDontKnow,
  onOpenCharacterDesign,
  onOpenChibiJourney,
  onOpenChibiChallenges,
  onOpenMyCharacters,
  activeChibiCharacterName,
  activeChibiStageCount = 0,
  onOpenWarmUp,
  onOpenChaos,
  onOpenChallenge,
  onOpenPartLibrary,
}) => {
  return (
    <section className="max-w-5xl mx-auto space-y-6 my-8">
      {/* Editorial Section Header */}
      <div className="flex items-center justify-between border-b border-[#E5E5DE] pb-2 text-xs text-[#686862]">
        <div className="flex items-center gap-2 font-semibold">
          <span className="font-mono-code text-[#16171A]">DISCIPLINES</span>
          <span aria-hidden="true">·</span>
          <span>Core Drawing Modes</span>
        </div>
        <span>Select an experience</span>
      </div>

      {/* Main Studio Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: What Comes Next? (Signature) */}
        <div
          onClick={onStartWhatComesNext}
          className="group relative rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#16171A] p-6 sm:p-7 shadow-xs hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-[#686862] mb-3">
              <span className="font-mono-code text-[11px] font-semibold text-[#16171A]">
                01 · SIGNATURE
              </span>
              <span className="text-[#8A8A82]">Blind Step Drawing</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16171A] tracking-tight group-hover:text-[#2752E7] transition-colors">
              What Comes Next?
            </h2>

            <p className="text-sm text-[#555550] mt-2.5 leading-relaxed font-normal">
              Step-by-step mystery drawing prompts. Put down one unexpected mark, then discover what to add next.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0F0EB] flex items-center justify-between">
            <span className="text-xs font-semibold text-[#16171A] group-hover:text-[#2752E7] transition-colors">
              Begin mystery session
            </span>
            <div className="w-8 h-8 rounded-lg bg-[#F4F4F0] text-[#16171A] group-hover:bg-[#16171A] group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card 2: Chibi Character Atelier */}
        {onOpenChibiJourney && (
          <div
            onClick={onOpenChibiJourney}
            className="group relative rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#2752E7] p-6 sm:p-7 shadow-xs hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#686862] mb-3">
                <span className="font-mono-code text-[11px] font-semibold text-[#2752E7]">
                  02 · WORKSHOP
                </span>
                {activeChibiCharacterName ? (
                  <span className="text-xs font-semibold text-[#2752E7] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2752E7] animate-pulse" />
                    <span>Resume: {activeChibiCharacterName} ({activeChibiStageCount}/20)</span>
                  </span>
                ) : (
                  <span className="text-[#8A8A82]">20 Guided Milestones</span>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16171A] tracking-tight group-hover:text-[#2752E7] transition-colors">
                Chibi Character Atelier
              </h2>

              <p className="text-sm text-[#555550] mt-2.5 leading-relaxed font-normal">
                Structured character creation from initial silhouette to complete turnaround model sheet.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0F0EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#2752E7]">
                {activeChibiCharacterName ? 'Continue workshop' : 'Enter atelier'}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#EFF3FF] text-[#2752E7] group-hover:bg-[#2752E7] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Secondary Quick Modes Bar */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${onOpenPartLibrary ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 pt-2`}>
        {/* Spark 1: I Don't Know What to Draw */}
        <button
          onClick={onOpenDontKnow}
          className="text-left rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] p-4 transition-all shadow-2xs group"
        >
          <div className="text-[11px] font-mono-code text-[#686862] mb-1">
            03 · RESCUE
          </div>
          <div className="font-display font-bold text-base text-[#16171A] group-hover:text-[#2752E7] transition-colors">
            I Don't Know What to Draw
          </div>
          <p className="text-xs text-[#686862] mt-1 leading-snug">
            Low-friction starter for facing a blank sketchbook page.
          </p>
        </button>

        {/* Spark 2: Warm-Up Exercises */}
        <button
          onClick={onOpenWarmUp}
          className="text-left rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] p-4 transition-all shadow-2xs group"
        >
          <div className="text-[11px] font-mono-code text-[#686862] mb-1">
            04 · CALISTHENICS
          </div>
          <div className="font-display font-bold text-base text-[#16171A] group-hover:text-[#2752E7] transition-colors">
            2-Minute Hand Warm-Up
          </div>
          <p className="text-xs text-[#686862] mt-1 leading-snug">
            Quick wrist looseners, continuous line gestures, and textures.
          </p>
        </button>

        {/* Spark 3: Creative Chaos */}
        <button
          onClick={onOpenChaos}
          className="text-left rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] p-4 transition-all shadow-2xs group"
        >
          <div className="text-[11px] font-mono-code text-[#686862] mb-1">
            05 · EXPERIMENT
          </div>
          <div className="font-display font-bold text-base text-[#16171A] group-hover:text-[#2752E7] transition-colors">
            Creative Chaos Generator
          </div>
          <p className="text-xs text-[#686862] mt-1 leading-snug">
            Roll unpredictable medium, theme, and constraint dice.
          </p>
        </button>

        {/* Spark 4: Part Reference Library */}
        {onOpenPartLibrary && (
          <button
            onClick={onOpenPartLibrary}
            className="text-left rounded-xl bg-white border border-[#E5E5DE] hover:border-[#2752E7] p-4 transition-all shadow-2xs group"
          >
            <div className="text-[11px] font-mono-code text-[#2752E7] mb-1 font-semibold flex items-center justify-between">
              <span>06 · REFERENCES</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#EFF3FF]">197+ PIECES</span>
            </div>
            <div className="font-display font-bold text-base text-[#16171A] group-hover:text-[#2752E7] transition-colors">
              Part Reference Library
            </div>
            <p className="text-xs text-[#686862] mt-1 leading-snug">
              Isolated black & white shapes for heads, eyes, hair, bodies, and paws.
            </p>
          </button>
        )}
      </div>
    </section>
  );
};
