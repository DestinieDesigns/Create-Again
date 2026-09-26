import React from 'react';
import { X, Check, Pencil, Sparkles, Tag, Layers, HelpCircle } from 'lucide-react';
import { ChibiPartReference } from '../../types/chibiReference';

interface ChibiPartDetailModalProps {
  part: ChibiPartReference | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (part: ChibiPartReference) => void;
  onPractice?: (part: ChibiPartReference) => void;
  isSelected?: boolean;
}

export const ChibiPartDetailModal: React.FC<ChibiPartDetailModalProps> = ({
  part,
  isOpen,
  onClose,
  onSelect,
  onPractice,
  isSelected = false,
}) => {
  if (!isOpen || !part) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl border border-[#E5E5DE] shadow-xl overflow-hidden p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
              PART REFERENCE · {part.category.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Large Vector Drawing Display */}
        <div className="w-full aspect-square max-h-64 mx-auto rounded-xl bg-[#FAF9F5] border border-[#EEEEEC] flex items-center justify-center p-6 mb-5 relative group">
          {part.svgContent ? (
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full max-w-[180px] max-h-[180px] text-[#16171A]"
              aria-label={part.altText}
              dangerouslySetInnerHTML={{ __html: part.svgContent }}
            />
          ) : (
            <img
              src={part.imageUrl}
              alt={part.altText}
              className="w-full h-full object-contain max-w-[180px] max-h-[180px]"
            />
          )}

          {/* Difficulty indicator */}
          {part.difficulty && (
            <span className="absolute bottom-3 right-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/90 border border-[#E5E5DE] text-[#686862]">
              {part.difficulty} difficulty
            </span>
          )}
        </div>

        {/* Part Title and Description */}
        <div className="space-y-2 mb-5">
          <h3 className="text-xl font-display font-bold text-[#16171A]">
            {part.name}
          </h3>
          <p className="text-xs text-[#686862] leading-relaxed">
            {part.description}
          </p>
          <p className="text-[11px] text-[#8A8A82] italic leading-tight">
            "{part.altText}"
          </p>
        </div>

        {/* Art Teacher Construction Advice */}
        <div className="p-3.5 rounded-xl bg-[#FBFBFA] border border-[#E5E5DE] mb-5 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#16171A]">
            <HelpCircle className="w-3.5 h-3.5 text-[#2752E7]" />
            <span>Art Teacher Drawing Cue</span>
          </div>
          <p className="text-xs text-[#686862] leading-relaxed">
            Keep initial strokes light with a soft 2B pencil. Block in the overall gesture before refining the clean outer outline.
          </p>
        </div>

        {/* Tags */}
        {part.tags && part.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {part.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F4F4F0] text-[#686862] border border-[#EEEEEC]"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#F0F0EB]">
          {onPractice && (
            <button
              onClick={() => {
                onClose();
                onPractice(part);
              }}
              className="flex-1 py-2.5 px-3 rounded-lg border border-[#E5E5DE] bg-white text-[#16171A] hover:bg-[#F4F4F0] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Pencil className="w-3.5 h-3.5 text-[#686862]" />
              <span>Practice on Paper</span>
            </button>
          )}

          {onSelect && (
            <button
              onClick={() => {
                onSelect(part);
                onClose();
              }}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                isSelected
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-[#16171A] text-white hover:bg-[#2752E7]'
              }`}
            >
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{isSelected ? 'Selected' : 'Use This Part'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
