import React from 'react';
import { EyeOff, Sparkles, BookOpen, Layers, Info } from 'lucide-react';
import { VisualReference } from '../../types/prompt';

export interface VisualReferenceCardProps {
  reference: VisualReference;
  onClose: () => void;
  className?: string;
}

export const VisualReferenceCard: React.FC<VisualReferenceCardProps> = ({
  reference,
  onClose,
  className = '',
}) => {
  const getTypeBadge = (type: VisualReference['type']) => {
    switch (type) {
      case 'shape':
        return 'Shape Diagram';
      case 'gesture':
        return 'Gesture & Weight';
      case 'line-art':
        return 'Line-Art Guide';
      case 'silhouette':
        return 'Silhouette Study';
      case 'composition':
        return 'Layout & Grid';
      case 'environment':
        return 'Spatial Depth';
      case 'step-by-step':
        return 'Step-by-Step';
      case 'photo':
        return 'Observation Reference';
      case 'object':
        return 'Prop & Object Study';
      default:
        return 'Visual Example';
    }
  };

  return (
    <div
      id="visual-reference-panel"
      role="region"
      aria-label={`Visual reference: ${reference.title || reference.altText}`}
      className={`rounded-2xl bg-[#FCFAF6] border-2 border-[#2D2723] p-5 sm:p-6 shadow-sm animate-fadeIn text-left ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAE2D7]">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-[#EFE9DF] text-[#E06D53] flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5" />
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#786A5E] font-mono-code">
            {getTypeBadge(reference.type)}
          </span>
          {reference.beginnerFriendly && (
            <span className="hidden sm:inline text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#E8F0E2] text-[#4A6B35]">
              Beginner Friendly
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-[#EFE9DF] transition-colors"
          aria-label="Hide visual example"
        >
          <EyeOff className="w-3.5 h-3.5" />
          <span>HIDE EXAMPLE</span>
        </button>
      </div>

      {/* Reference Title */}
      {reference.title && (
        <h4 className="text-base sm:text-lg font-extrabold text-[#2D2723] tracking-tight mb-1">
          {reference.title}
        </h4>
      )}

      {/* Reference Description */}
      {reference.description && (
        <p className="text-xs sm:text-sm text-[#66584C] mb-4 leading-relaxed">
          {reference.description}
        </p>
      )}

      {/* Visual Diagram or Image */}
      <div className="rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] p-4 sm:p-6 flex items-center justify-center overflow-hidden mb-4 relative min-h-[140px]">
        {reference.svgContent ? (
          <div
            className="w-full max-w-md mx-auto flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: reference.svgContent }}
            aria-label={reference.altText}
            role="img"
          />
        ) : reference.imageUrl ? (
          <img
            src={reference.imageUrl}
            alt={reference.altText}
            className="max-h-72 w-auto object-contain rounded-lg"
          />
        ) : (
          <div className="text-center py-6 text-[#8A7D71]">
            <Info className="w-8 h-8 mx-auto mb-2 text-[#C0B3A3]" />
            <p className="text-xs font-mono-code">Visual example unavailable right now.</p>
          </div>
        )}
      </div>

      {/* Accessible Alt Description Note */}
      <div className="text-[11px] text-[#8C7E72] italic mb-3 font-serif bg-[#F4EFE8] rounded-lg p-2.5 border border-[#E5DDD2]">
        <span className="font-semibold not-italic text-[#6B5E53] mr-1">Concept:</span>
        {reference.altText}
      </div>

      {/* Grounding Microcopy Banner */}
      <div className="pt-3 border-t border-[#EAE2D7] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-[#54483E] font-medium font-handwriting text-base">
          <Sparkles className="w-3.5 h-3.5 text-[#E06D53] shrink-0" />
          <span>Take a look, then make it yours. Put your device down and create.</span>
        </div>

        <button
          onClick={onClose}
          className="self-end sm:self-auto text-xs font-extrabold text-[#E06D53] hover:underline"
        >
          Got it, back to paper
        </button>
      </div>
    </div>
  );
};
