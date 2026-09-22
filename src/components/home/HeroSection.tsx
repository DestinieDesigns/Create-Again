import React from 'react';
import { Sparkles, HelpCircle, ArrowRight, PenTool } from 'lucide-react';
import { CreativeAffirmationComponent } from './CreativeAffirmation';

interface HeroSectionProps {
  onStartCreating: () => void;
  onDontKnowWhatToDraw: () => void;
  onOpenMasterSheet?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartCreating,
  onDontKnowWhatToDraw,
  onOpenMasterSheet,
}) => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 text-center max-w-3xl mx-auto px-4">
      {/* Decorative tape / pin badge & Master Sheet quick link */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DC] border border-[#DDD3C4] text-[#6A5E53] text-xs font-semibold shadow-xs">
          <PenTool className="w-3.5 h-3.5 text-[#E06D53]" />
          <span>A creative companion for your sketchbook or tablet</span>
        </div>
        {onOpenMasterSheet && (
          <button
            type="button"
            onClick={onOpenMasterSheet}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E0D3C0] hover:bg-[#F2ECE1] text-[#7A5B35] text-xs font-bold transition-all shadow-xs"
          >
            <span>🎨 30 Visual Prompt Guides</span>
          </button>
        )}
      </div>


      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2D2723] tracking-tight leading-[1.15]">
        What are you creating today?
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-[#5C5249] max-w-xl mx-auto leading-relaxed">
        You don't need a plan. You don't need to be perfect. <br className="hidden sm:inline" />
        <span className="font-handwriting text-2xl sm:text-3xl text-[#2D2723] font-bold block sm:inline mt-1 sm:mt-0">
          Just start somewhere.
        </span>
      </p>

      {/* Rotating Creative Affirmation */}
      <div className="mt-7 mb-2">
        <CreativeAffirmationComponent />
      </div>

      {/* Philosophy banner */}
      <div className="mt-4 mb-8 py-2.5 px-4 bg-[#F2EDE4] rounded-2xl inline-block border border-[#E2D8CA] text-xs sm:text-sm text-[#73665B] font-medium">
        <span className="font-extrabold text-[#2D2723]">YOUR NEXT CREATION DOESN'T HAPPEN HERE.</span>{' '}
        It happens on your page.
      </div>

      {/* Main Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
        <button
          onClick={onStartCreating}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2.5 group"
        >
          <Sparkles className="w-4 h-4 text-[#E5B574] group-hover:rotate-12 transition-transform" />
          <span>START CREATING</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={onDontKnowWhatToDraw}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#FAF7F2] text-[#4A4139] font-bold text-sm hover:bg-[#EFE9DF] border-2 border-[#D8CEBE] transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <HelpCircle className="w-4 h-4 text-[#8C7E72]" />
          <span>I DON'T KNOW WHAT TO DRAW</span>
        </button>
      </div>
    </section>
  );
};
