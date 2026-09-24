import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

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
    <section className="py-6 sm:py-10 md:py-14 text-left max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
        {/* Left Column: Text & Primary CTA */}
        <div className="flex-1">
          {/* Feature Highlight Pill */}
          {onOpenChibiJourney && (
            <div className="mb-3">
              <button
                type="button"
                onClick={onOpenChibiJourney}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FBEFEA] hover:bg-[#F7DFD6] border border-[#F5D8CE] text-[#E06D53] transition-all text-xs font-bold text-left group shadow-xs active:scale-98"
              >
                <span className="w-2 h-2 rounded-full bg-[#E06D53] animate-pulse shrink-0" />
                <span className="font-extrabold">NEW: Chibi Character Journey</span>
                <span className="text-[#8A7D71] font-normal hidden sm:inline">
                  · 20 guided stages from silhouette to model sheet
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            </div>
          )}

          {/* Subtle category / descriptor */}
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8A7D71] font-mono-code mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
            <span>CREATE AGAIN</span>
          </div>

          {/* Three-line mantra */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D2723] tracking-tight leading-[1.18] font-sans">
            Start somewhere.<br />
            Add something.<br />
            <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#E06D53] font-bold block sm:inline mt-0.5 sm:mt-0">
              See what happens.
            </span>
          </h1>

          {/* Purpose statement */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5C5249] leading-relaxed max-w-lg font-medium">
            A creative companion for your sketchbook, paper, or drawing tablet.
          </p>

          {/* Device down reminder snippet */}
          <div className="mt-4 text-xs text-[#7A6E63] font-mono-code flex items-center gap-2">
            <span className="text-[#E06D53]">●</span>
            <span>Look → Read → Put device down → Create</span>
          </div>

          {/* Primary Action Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onStartCreating}
              className="py-3.5 sm:py-4 px-8 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2.5 group min-h-[48px]"
            >
              <Sparkles className="w-4 h-4 text-[#E5B574] group-hover:rotate-12 transition-transform" />
              <span>START CREATING</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {onOpenMasterSheet && (
              <button
                type="button"
                onClick={onOpenMasterSheet}
                className="py-3 sm:py-3.5 px-5 rounded-2xl bg-[#FAF7F2] border-2 border-[#D8CEBE] text-[#55473B] font-bold text-xs sm:text-sm hover:bg-[#EFE9DF] transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Visual Guide (500 Prompts)</span>
              </button>
            )}

            {onOpenWhatIs && (
              <button
                type="button"
                onClick={onOpenWhatIs}
                className="text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] transition-colors py-2 px-3 text-center"
              >
                What is Create Again?
              </button>
            )}
          </div>
        </div>

        {/* Right Column (Desktop) / Beside/Under Title (Mobile): Small Handmade Doodle */}
        <div className="w-full sm:w-auto flex justify-center md:justify-end shrink-0">
          <div className="p-4 sm:p-5 rounded-3xl bg-[#FCFAF6] border-2 border-[#E8E0D5] paper-card subtle-shadow max-w-[280px] sm:max-w-[320px] text-center">
            {/* Handmade sketchbook vector illustration */}
            <svg
              viewBox="0 0 160 120"
              className="w-36 h-28 sm:w-44 sm:h-32 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Sketchbook page */}
              <rect
                x="20"
                y="18"
                width="110"
                height="84"
                rx="6"
                className="stroke-[#2D2723] fill-[#FAF7F2]"
                strokeWidth="2.5"
              />
              {/* Spiral rings on left */}
              <line x1="28" y1="28" x2="16" y2="28" className="stroke-[#8A7D71]" strokeWidth="2.5" />
              <line x1="28" y1="44" x2="16" y2="44" className="stroke-[#8A7D71]" strokeWidth="2.5" />
              <line x1="28" y1="60" x2="16" y2="60" className="stroke-[#8A7D71]" strokeWidth="2.5" />
              <line x1="28" y1="76" x2="16" y2="76" className="stroke-[#8A7D71]" strokeWidth="2.5" />
              <line x1="28" y1="92" x2="16" y2="92" className="stroke-[#8A7D71]" strokeWidth="2.5" />

              {/* Hand-drawn circle on the page */}
              <circle
                cx="58"
                cy="56"
                r="18"
                className="stroke-[#E06D53]"
                strokeWidth="2"
                strokeDasharray="2 2"
              />
              {/* Hand-drawn triangle */}
              <path
                d="M 88 40 L 105 72 L 72 72 Z"
                className="stroke-[#2D2723]"
                strokeWidth="2"
              />
              {/* Tiny smiley in the circle */}
              <circle cx="53" cy="53" r="1.5" className="fill-[#E06D53]" stroke="none" />
              <circle cx="63" cy="53" r="1.5" className="fill-[#E06D53]" stroke="none" />
              <path d="M 54 62 Q 58 66 62 62" className="stroke-[#E06D53]" strokeWidth="1.5" fill="none" />

              {/* Pencil resting across page */}
              <g transform="rotate(35 110 35)">
                <rect x="90" y="28" width="46" height="7" rx="1.5" className="stroke-[#2D2723] fill-[#E5B574]" strokeWidth="1.5" />
                <polygon points="136,28 144,31.5 136,35" className="stroke-[#2D2723] fill-[#FAF7F2]" strokeWidth="1.5" />
                <polygon points="142,30.5 144,31.5 142,32.5" className="fill-[#2D2723]" />
              </g>
            </svg>
            <p className="text-[11px] font-handwriting text-[#7A6E63] font-bold mt-1">
              "Your paper is the canvas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
