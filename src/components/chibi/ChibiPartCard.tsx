import React, { useState } from 'react';
import { Check, Info, Sparkles } from 'lucide-react';
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
  const [imageFailed, setImageFailed] = useState(false);
  const isMissing = part.status === 'missing' || part.status === 'placeholder' || imageFailed;

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

      {/* SVG Vector Drawing Canvas / Preview Box OR Missing Asset Placeholder */}
      <div
        className={`w-full aspect-square rounded-lg flex items-center justify-center overflow-hidden transition-transform group-hover:scale-[1.02] ${
          isMissing
            ? 'bg-[#FAF9F5] border border-dashed border-[#D5D5CD]'
            : 'bg-[#FAF9F5] border border-[#EEEEEC]'
        } ${compact ? 'p-2 mb-1.5' : 'p-3 mb-2.5'}`}
      >
        {isMissing ? (
          <div className="flex flex-col items-center justify-center text-center p-1 space-y-1">
            <div className="w-7 h-7 rounded-full bg-[#EFEFEA] flex items-center justify-center text-[#8A8A82]">
              <Sparkles className="w-3.5 h-3.5 text-[#8A8A82]" />
            </div>
            <span className="text-[9px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]">
              Ref Soon
            </span>
          </div>
        ) : part.svgContent ? (
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
            onError={() => setImageFailed(true)}
            className="w-full h-full object-contain max-w-[80px] max-h-[80px]"
            loading="lazy"
          />
        )}
      </div>

      {/* Piece Information */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h4 className="text-xs font-semibold text-[#16171A] truncate group-hover:text-[#2752E7] transition-colors">
            {part.name}
          </h4>
          {isMissing && (
            <span className="shrink-0 text-[8px] font-mono-code font-medium px-1 py-0.2 rounded bg-[#FFF8EB] text-[#B25E00]">
              Upcoming
            </span>
          )}
        </div>
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

