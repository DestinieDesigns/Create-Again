import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';

interface HeroSectionProps {
  onStartCreating: () => void;
  onOpenMasterSheet?: () => void;
  onOpenWhatIs?: () => void;
  onOpenChibiJourney?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartCreating,
  onOpenMasterSheet,
  onOpenWhatIs,
  onOpenChibiJourney,
}) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 text-left max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Column: Brand Statement & Actions */}
        <div className="flex-1 max-w-2xl">
          {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#686862] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2752E7]" aria-hidden="true" />
            <span>Analog Sketchbook Studio</span>
            <span aria-hidden="true">·</span>
            <span>Screen-Down Practice</span>
          </div>

          {/* Master Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#16171A] tracking-tight leading-[1.12]">
            Start somewhere.<br />
            Add something.<br />
            <span className="italic font-normal text-[#2752E7]">
              See what happens.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg text-[#555550] leading-relaxed max-w-xl font-normal">
            A focused creative companion for your sketchbook, paper, or tablet. Receive a single prompt or guided milestone, put your screen down, and make the mark.
          </p>

          {/* Subtle workflow hint */}
          <div className="mt-4 flex items-center gap-2 text-xs text-[#8A8A82]">
            <span className="font-mono-code text-[11px] text-[#16171A]">01. Read Prompt</span>
            <span aria-hidden="true">→</span>
            <span className="font-mono-code text-[11px] text-[#16171A]">02. Put Screen Down</span>
            <span aria-hidden="true">→</span>
            <span className="font-mono-code text-[11px] text-[#16171A]">03. Pen to Paper</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={onStartCreating}
              className="py-3.5 px-6 rounded-xl bg-[#16171A] text-white font-semibold text-sm hover:bg-[#2C2D32] transition-colors shadow-sm active:scale-98 flex items-center justify-center gap-2 group min-h-[46px]"
            >
              <Sparkles className="w-4 h-4 text-[#A8C5FF] group-hover:rotate-12 transition-transform" />
              <span>Start Drawing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {onOpenChibiJourney && (
              <button
                type="button"
                onClick={onOpenChibiJourney}
                className="py-3.5 px-5 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#CDCDC4] hover:bg-[#F7F7F4] text-[#16171A] font-semibold text-sm transition-colors flex items-center justify-center gap-2 min-h-[46px]"
              >
                <span>Chibi Atelier</span>
                <span className="text-xs text-[#2752E7] font-mono-code">20 Stages</span>
              </button>
            )}

            {onOpenMasterSheet && (
              <button
                type="button"
                onClick={onOpenMasterSheet}
                className="text-xs font-semibold text-[#686862] hover:text-[#16171A] transition-colors py-2 px-3"
              >
                500 Prompt Library
              </button>
            )}

            {onOpenWhatIs && (
              <button
                type="button"
                onClick={onOpenWhatIs}
                className="text-xs font-semibold text-[#8A8A82] hover:text-[#16171A] transition-colors py-2 px-2"
              >
                About Studio
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Refined Atelier Drawing Sheet Frame */}
        <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
          <div className="w-full max-w-[320px] sm:max-w-[360px] rounded-2xl bg-white border border-[#E5E5DE] p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3 mb-4 text-[11px] text-[#8A8A82]">
              <span className="font-mono-code uppercase tracking-wider text-[#16171A] font-medium">Sheet No. 01</span>
              <span>100% Cotton Paper</span>
            </div>

            {/* Minimalist Architectural Artwork Mock */}
            <div className="aspect-4/3 rounded-lg bg-[#FAF9F6] border border-[#EEEEEE] p-5 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle grid pattern background */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#C5C5BD 0.75px, transparent 0.75px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="relative z-10">
                <span className="text-[10px] uppercase font-mono-code tracking-wider text-[#2752E7] font-semibold">
                  Rule of the Atelier
                </span>
                <p className="font-display text-lg font-semibold text-[#16171A] mt-1 leading-snug">
                  "No marks are wasted. Every line informs the next."
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-4 text-[11px] text-[#8A8A82] border-t border-[#EAEAE4]">
                <span>Analog Focus</span>
                <span className="font-mono-code text-[#16171A]">Zero Backspace</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#686862]">
              <span>Ready for your pen or pencil</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
