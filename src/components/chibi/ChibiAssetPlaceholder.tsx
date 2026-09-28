import React from 'react';
import { Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { ChibiPartCategory } from '../../types/chibiReference';
import { CATEGORY_LABELS } from '../../data/chibiAssetManifest';

interface ChibiAssetPlaceholderProps {
  category: ChibiPartCategory | string;
  name: string;
  drawingCue?: string;
  description?: string;
  onContinue?: () => void;
  compact?: boolean;
  showContinueButton?: boolean;
  className?: string;
}

/**
 * Section 2, 22, 23: Clean Temporary Placeholder Component
 * Replaces missing assets with an art-directed instructional card.
 * Never displays giant full reference sheets. Never blocks user progress.
 */
export const ChibiAssetPlaceholder: React.FC<ChibiAssetPlaceholderProps> = ({
  category,
  name,
  drawingCue,
  description,
  onContinue,
  compact = false,
  showContinueButton = false,
  className = '',
}) => {
  const categoryLabel =
    (CATEGORY_LABELS as Record<string, string>)[category] || category.toUpperCase();

  // Compact rendering for small thumbnail grids / cards
  if (compact) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-3 text-center rounded-lg border border-dashed border-[#C4C4BC] bg-[#FAF9F5] select-none ${className}`}
      >
        <span className="text-[9px] font-mono-code uppercase font-semibold text-[#8A8A82] tracking-wider mb-1">
          {category}
        </span>
        <div className="w-8 h-8 rounded-full bg-[#EFEFEA] flex items-center justify-center text-[#8A8A82] mb-1.5">
          <Sparkles className="w-4 h-4 text-[#8A8A82]" />
        </div>
        <span className="text-[10px] font-bold text-[#16171A] line-clamp-1">{name}</span>
        <span className="text-[8px] font-mono text-[#8A8A82] mt-0.5">Ref coming soon</span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-[#E5E5DE] bg-white p-6 shadow-2xs text-left space-y-5 animate-in fade-in duration-150 ${className}`}
    >
      {/* Category & Status Badges */}
      <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3">
        <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-[#2752E7] bg-[#EFF3FF] px-2 py-0.5 rounded">
          {categoryLabel.toUpperCase()}
        </span>
        <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#FFF8EB] border border-[#FFE8BF] text-[#B25E00] font-medium">
          Reference Coming Soon
        </span>
      </div>

      {/* Center Sketch Slate with Minimalist Vector Geometry */}
      <div className="relative w-full aspect-[4/3] rounded-xl border border-dashed border-[#D5D5CD] bg-[#FAF9F5] flex flex-col items-center justify-center p-6 overflow-hidden">
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#16171A_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-xs space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E5DE] shadow-2xs flex items-center justify-center text-[#2752E7]">
            <Sparkles className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div className="text-[11px] font-mono-code uppercase font-semibold text-[#8A8A82] tracking-wider">
            {categoryLabel}
          </div>
          <div className="text-base sm:text-lg font-display font-bold text-[#16171A]">
            {name}
          </div>
          <p className="text-xs text-[#686862] leading-snug">
            Individual piece reference is being drafted for the atelier.
          </p>
        </div>
      </div>

      {/* Part Title and Description */}
      <div className="space-y-1">
        <h4 className="text-lg font-display font-bold text-[#16171A]">{name}</h4>
        {description && (
          <p className="text-xs text-[#686862] leading-relaxed">{description}</p>
        )}
      </div>

      {/* Section 2 & 23: Teacher Cue - "Think: ..." */}
      <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E5DE] space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#16171A]">
          <HelpCircle className="w-4 h-4 text-[#2752E7]" />
          <span>Think & Visualize:</span>
        </div>
        <p className="text-xs text-[#484842] leading-relaxed italic">
          "{drawingCue || description || `A distinctive ${name.toLowerCase()} shape with simple balanced contours.`}"
        </p>
      </div>

      {/* Creative Reassurance Notice */}
      <div className="text-xs text-[#686862] bg-[#F7F7F4] p-3 rounded-lg flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
        <span>
          You can still use this option and draw it your own way on paper.
        </span>
      </div>

      {/* Optional In-Card Continue Action */}
      {showContinueButton && onContinue && (
        <div className="pt-2">
          <button
            onClick={onContinue}
            className="w-full py-2.5 px-4 rounded-xl bg-[#16171A] hover:bg-[#2752E7] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
          >
            <span>Continue With This Option</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
