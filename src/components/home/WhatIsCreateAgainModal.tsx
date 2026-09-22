import React from 'react';
import { X, Sparkles, BookOpen, Heart, EyeOff, ShieldCheck, ArrowRight } from 'lucide-react';

interface WhatIsCreateAgainModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCreating: () => void;
}

export const WhatIsCreateAgainModal: React.FC<WhatIsCreateAgainModalProps> = ({
  isOpen,
  onClose,
  onStartCreating,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="What is Create Again"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 border-b border-[#E8E0D5]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
              Creative Companion
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans">
            WHAT IS CREATE AGAIN?
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6E63] font-handwriting text-lg sm:text-xl mt-0.5">
            A quiet companion sitting beside your sketchbook or drawing tablet.
          </p>
        </div>

        {/* Core Principles */}
        <div className="my-5 space-y-4">
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#FFF2E6] text-[#E06D53] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#2D2723]">One step at a time</h4>
              <p className="text-xs text-[#5C5249] mt-0.5 leading-relaxed">
                Instead of staring at a blank page wondering what to draw, we give you one small, mystery prompt. When you're ready, tap Next for what comes next.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#F2F4EB] text-[#606C38] shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#2D2723]">Put your device down</h4>
              <p className="text-xs text-[#5C5249] mt-0.5 leading-relaxed">
                Read the instruction, look at the visual reference if you want, and put your phone down to draw on real paper. We don't want your screen time — we want your creativity.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#FEF6E4] text-[#DDA15E] shrink-0">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#2D2723]">No erasing. No mistakes.</h4>
              <p className="text-xs text-[#5C5249] mt-0.5 leading-relaxed">
                Everything you draw is allowed to stay. Instead of erasing, build on it. What feels weird now often turns into the most interesting part of your drawing.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#EFE9DF] text-[#7A6E63] shrink-0">
              <EyeOff className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#2D2723]">Zero pressure & total privacy</h4>
              <p className="text-xs text-[#5C5249] mt-0.5 leading-relaxed">
                No scores, no ratings, no followers, no likes. Your collection stays completely in your hands.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-[#E8E0D5] flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onStartCreating();
            }}
            className="flex-1 py-3.5 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-sm hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>START CREATING</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
