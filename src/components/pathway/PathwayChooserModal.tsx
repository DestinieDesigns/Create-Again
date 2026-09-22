import React from 'react';
import {
  X,
  User,
  Palette,
  Leaf,
  Film,
  Compass,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';
import { CREATIVE_PATHWAYS, getPathwayById } from '../../data/pathways';
import { CreativePathwayId } from '../../types/prompt';

interface PathwayChooserModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPathway?: CreativePathwayId;
  onSelectPathway: (pathwayId: CreativePathwayId) => void;
  onOpenProgression?: () => void;
}

export const PathwayChooserModal: React.FC<PathwayChooserModalProps> = ({
  isOpen,
  onClose,
  selectedPathway = 'open',
  onSelectPathway,
  onOpenProgression,
}) => {
  if (!isOpen) return null;

  const getPathwayIcon = (id: CreativePathwayId) => {
    switch (id) {
      case 'character-creator':
        return User;
      case 'graphic-design':
        return Palette;
      case 'nature-study':
        return Leaf;
      case 'animation':
        return Film;
      case 'world-builder':
        return Compass;
      case 'open':
      default:
        return Sparkles;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#E8E0D5]">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-[#E06D53] font-mono-code">
              Creative Disciplines
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight mt-1">
              Choose Your Creative Pathway
            </h2>
            <p className="text-sm text-[#6B6158] font-handwriting text-lg mt-0.5">
              Select a specialized focus for your physical drawing adventure. The prompt engine will tailor its mystery cues to this theme.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {CREATIVE_PATHWAYS.map((pw) => {
            const isSelected = selectedPathway === pw.id;
            const Icon = getPathwayIcon(pw.id);

            return (
              <div
                key={pw.id}
                onClick={() => onSelectPathway(pw.id)}
                className={`relative group text-left p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#2D2723] bg-[#F4EFE6] shadow-sm'
                    : 'border-[#E8E0D5] bg-white hover:border-[#C8BEB0] hover:bg-[#FAF7F2]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-mono-code ${pw.badgeColor}`}
                      >
                        {pw.badge}
                      </span>
                      {pw.id === 'character-creator' && onOpenProgression && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenProgression();
                          }}
                          className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#E06D53] text-white hover:bg-[#C04D33] transition-colors"
                        >
                          22 Skills ↗
                        </button>
                      )}
                    </div>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#2D2723] bg-white px-2 py-0.5 rounded-full border border-[#D8CEBE]">
                        <Check className="w-3 h-3 text-[#2A9D8F]" />
                        Selected
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3 mt-1">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: `${pw.accentColor}18`,
                        borderColor: `${pw.accentColor}40`,
                        color: pw.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#2D2723] text-lg leading-snug">
                        {pw.name}
                      </h3>
                      <p className="text-xs font-medium text-[#7C6E62] mt-0.5">
                        {pw.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#5C5046] mt-3 leading-relaxed">
                    {pw.description}
                  </p>

                  {pw.relevantTags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {pw.relevantTags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-[#EFE9DF] text-[#6B6158] px-2 py-0.5 rounded-md font-mono-code"
                        >
                          #{tag}
                        </span>
                      ))}
                      {pw.relevantTags.length > 4 && (
                        <span className="text-[10px] text-[#8C7E72] self-center">
                          +{pw.relevantTags.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E0D5]/70 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8C7E72]">
                    {pw.id === 'open' ? 'Standard pool' : 'Specialized prompts'}
                  </span>
                  <div
                    className={`flex items-center gap-1 text-xs font-bold transition-transform group-hover:translate-x-1 ${
                      isSelected ? 'text-[#2D2723]' : 'text-[#7C6E62]'
                    }`}
                  >
                    <span>{isSelected ? 'Start This Path' : 'Choose Path'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-[#E8E0D5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7C6E62]">
          <p className="font-handwriting text-base text-[#655A51]">
            “The path changes the questions, but the page is always yours.”
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#D8CEBE] font-bold text-[#5C5046] hover:bg-[#EFE9DF] transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
