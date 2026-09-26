import React, { useState, useMemo } from 'react';
import {
  Dice5,
  Layers,
  ChevronRight,
  Plus,
  Pencil,
  Sparkles,
  HelpCircle,
  Eye,
} from 'lucide-react';
import {
  ChibiPartReference,
  ChibiPartCategory,
} from '../../types/chibiReference';
import {
  getChibiReferences,
  pickRandomCompatiblePart,
  chibiStageReferenceMap,
} from '../../data/chibiPartReferences';
import { ChibiPartCard } from './ChibiPartCard';
import { ChibiPartDetailModal } from './ChibiPartDetailModal';
import { ChibiPartLibraryModal } from './ChibiPartLibraryModal';

interface ChibiPartSelectorProps {
  stageId: string;
  substageId?: string | null;
  selectedPartId?: string;
  onSelectPart: (partId: string, partName: string) => void;
  onCustomClick?: () => void;
  characterType?: string;
  theme?: string;
  onPracticePart?: (part: ChibiPartReference) => void;
}

export const ChibiPartSelector: React.FC<ChibiPartSelectorProps> = ({
  stageId,
  substageId,
  selectedPartId,
  onSelectPart,
  onCustomClick,
  characterType,
  theme,
  onPracticePart,
}) => {
  const [isLibraryModalOpen, setIsLibraryModalOpen] = useState(false);
  const [inspectedPart, setInspectedPart] = useState<ChibiPartReference | null>(null);

  // Determine which category maps to this stage/substage
  const activeCategory = useMemo<ChibiPartCategory>(() => {
    if (stageId === 'head') {
      return substageId === 'headAngle' ? 'head-angle' : 'head';
    }
    if (stageId === 'face') {
      if (substageId === 'eyebrows') return 'eyebrow';
      if (substageId === 'nose') return 'nose';
      if (substageId === 'mouth') return 'mouth';
      return 'eye';
    }
    if (stageId === 'hair') return 'hair';
    if (stageId === 'silhouette' || stageId === 'body') return 'body';
    if (stageId === 'arms-hands') return 'hand';
    if (stageId === 'legs-feet') return 'foot';
    if (stageId === 'clothing') return 'clothing';
    if (stageId === 'accessories') return 'accessory';
    if (stageId === 'definingFeatures') return 'ear';

    const mapped = chibiStageReferenceMap[stageId];
    if (mapped && mapped.length > 0) return mapped[0];
    return 'head';
  }, [stageId, substageId]);

  // Retrieve matching references for this category
  const availableParts = useMemo(() => {
    return getChibiReferences({
      category: activeCategory,
      characterType,
      theme,
    });
  }, [activeCategory, characterType, theme]);

  // Section 43: Show 6–10 visible choices initially to keep the interface uncluttered
  const visibleLimit = 8;
  const initialChoices = useMemo(() => {
    return availableParts.slice(0, visibleLimit);
  }, [availableParts]);

  const hasMore = availableParts.length > visibleLimit;

  // Currently active selected part object (if any)
  const activePart = useMemo(() => {
    return availableParts.find((p) => p.id === selectedPartId);
  }, [availableParts, selectedPartId]);

  // "CHOOSE FOR ME" (Section 32)
  const handleChooseForMe = () => {
    const chosen = pickRandomCompatiblePart(activeCategory, characterType, theme);
    if (chosen) {
      onSelectPart(chosen.id, chosen.name);
    }
  };

  return (
    <div className="space-y-4">
      {/* Section Header with Actions */}
      <div className="flex items-center justify-between gap-2 border-b border-[#F0F0EB] pb-2.5">
        <div>
          <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
            ISOLATED DRAWING REFERENCES · {activeCategory.toUpperCase()}
          </span>
          <p className="text-xs text-[#8A8A82]">
            Pick a reference shape to draw on your paper, or craft your own
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* CHOOSE FOR ME Button (Section 32) */}
          <button
            type="button"
            onClick={handleChooseForMe}
            className="px-2.5 py-1.5 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#16171A] flex items-center gap-1.5 transition-colors shadow-2xs"
            title="Randomly pick one compatible reference for this stage only"
          >
            <Dice5 className="w-3.5 h-3.5 text-[#2752E7]" />
            <span className="hidden sm:inline">Choose For Me</span>
            <span className="sm:hidden">Pick</span>
          </button>

          {/* MORE / SEE ALL (Section 43) */}
          <button
            type="button"
            onClick={() => setIsLibraryModalOpen(true)}
            className="px-2.5 py-1.5 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#2752E7] flex items-center gap-1 transition-colors shadow-2xs"
          >
            <span>See All ({availableParts.length})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid of 6–8 Isolated Reference Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {initialChoices.map((part) => (
          <ChibiPartCard
            key={part.id}
            part={part}
            isSelected={selectedPartId === part.id}
            onSelect={(p) => onSelectPart(p.id, p.name)}
            onInspect={(p) => setInspectedPart(p)}
          />
        ))}

        {/* CUSTOM / DRAW YOUR OWN Card (Section 31) */}
        {onCustomClick && (
          <button
            type="button"
            onClick={onCustomClick}
            className="group flex flex-col items-center justify-center p-3 rounded-xl border border-dashed border-[#D5D5CD] bg-[#FAF9F5] hover:bg-white hover:border-[#16171A] transition-all text-center select-none min-h-[140px]"
          >
            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5DE] flex items-center justify-center text-[#686862] group-hover:text-[#16171A] group-hover:border-[#16171A] mb-2 transition-colors">
              <Pencil className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-[#16171A]">
              Draw Your Own
            </span>
            <span className="text-[10px] text-[#8A8A82] mt-0.5">
              Custom Direction
            </span>
          </button>
        )}
      </div>

      {/* Selected Reference Insight Bar */}
      {activePart && (
        <div className="p-3.5 rounded-xl bg-white border border-[#E5E5DE] shadow-2xs flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#EEEEEC] flex items-center justify-center p-1.5 shrink-0">
              {activePart.svgContent ? (
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#16171A]"
                  dangerouslySetInnerHTML={{ __html: activePart.svgContent }}
                />
              ) : (
                <img
                  src={activePart.imageUrl}
                  alt={activePart.altText}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#8A8A82] uppercase">
                Active Choice
              </span>
              <h5 className="text-xs font-bold text-[#16171A]">
                {activePart.name}
              </h5>
              <p className="text-[11px] text-[#686862] line-clamp-1">
                {activePart.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setInspectedPart(activePart)}
            className="text-xs font-semibold text-[#2752E7] hover:underline shrink-0"
          >
            Inspect Tips
          </button>
        </div>
      )}

      {/* Detail Inspection Modal */}
      <ChibiPartDetailModal
        part={inspectedPart}
        isOpen={!!inspectedPart}
        onClose={() => setInspectedPart(null)}
        isSelected={inspectedPart ? selectedPartId === inspectedPart.id : false}
        onSelect={(p) => onSelectPart(p.id, p.name)}
        onPractice={onPracticePart}
      />

      {/* Full Category Library Modal */}
      <ChibiPartLibraryModal
        isOpen={isLibraryModalOpen}
        onClose={() => setIsLibraryModalOpen(false)}
        initialCategory={activeCategory}
        selectedPartId={selectedPartId}
        onSelectPart={(p) => onSelectPart(p.id, p.name)}
        onPracticePart={onPracticePart}
        characterType={characterType}
        theme={theme}
      />
    </div>
  );
};
