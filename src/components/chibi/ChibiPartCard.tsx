import React from 'react';
import { Check, Info } from 'lucide-react';
import { ChibiPartReference } from '../../types/chibiReference';

interface ChibiPartCardProps {
  part: ChibiPartReference;
  isSelected?: boolean;
  onSelect?: (part: ChibiPartReference) => void;
  onInspect?: (part: ChibiPartReference) => void;
  compact?: boolean;
}

export const ChibiPartCard: React.FC<ChibiPartCardProps> = ({
  part,
  isSelected = false,
  onSelect,
  onInspect,
  compact = false,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect && onSelect(part)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect && onSelect(part);
        }
      }}
      className={`group relative flex flex-col rounded-xl border transition-all text-left select-none cursor-pointer ${
        compact ? 'p-2' : 'p-3'
      } ${
        isSelected
          ? 'bg-white border-[#2752E7] ring-2 ring-[#2752E7]/20 shadow-xs'
          : 'bg-white border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FDFDFD]'
      }`}
    >
      {/* Selected Indicator Badge */}
      {isSelected && (
        <span className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-[#2752E7] text-white flex items-center justify-center shadow-xs">
          <Check className="w-3 h-3 stroke-[3]" />
        </span>
      )}

      {/* Quick Info / Inspect Button */}
      {onInspect && (
        <button
          type="button"
          aria-label={`Inspect ${part.name}`}
          onClick={(e) => {
            e.stopPropagation();
            onInspect(part);
          }}
          className="absolute top-2 left-2 z-10 w-6 h-6 rounded-md bg-[#F4F4F0] text-[#686862] hover:text-[#16171A] hover:bg-[#EEEEEA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          title="Inspect details and drawing tips"
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      )}

      {/* SVG Vector Drawing Canvas / Preview Box */}
      <div
        className={`w-full aspect-square rounded-lg bg-[#FAF9F5] border border-[#EEEEEC] flex items-center justify-center overflow-hidden transition-transform group-hover:scale-[1.02] ${
          compact ? 'p-2 mb-1.5' : 'p-3 mb-2.5'
        }`}
      >
        {part.svgContent ? (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full max-w-[80px] max-h-[80px] text-[#16171A]"
            aria-label={part.altText}
            dangerouslySetInnerHTML={{ __html: part.svgContent }}
          />
        ) : (
          <img
            src={part.imageUrl}
            alt={part.altText}
            className="w-full h-full object-contain max-w-[80px] max-h-[80px]"
            loading="lazy"
          />
        )}
      </div>

      {/* Piece Information */}
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-semibold text-[#16171A] truncate group-hover:text-[#2752E7] transition-colors">
          {part.name}
        </h4>
        {!compact && (
          <p className="text-[11px] text-[#8A8A82] line-clamp-1 mt-0.5 leading-tight">
            {part.description}
          </p>
        )}
      </div>

      {/* Difficulty Indicator (Quiet dot) */}
      {part.difficulty && (
        <div className="mt-1 flex items-center gap-1.5 text-[9px] text-[#8A8A82] font-mono">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              part.difficulty === 'easy'
                ? 'bg-emerald-500'
                : part.difficulty === 'medium'
                ? 'bg-amber-500'
                : 'bg-rose-500'
            }`}
          />
          <span className="capitalize">{part.difficulty}</span>
        </div>
      )}
    </div>
  );
};
