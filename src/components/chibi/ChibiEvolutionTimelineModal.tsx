import React from 'react';
import {
  X,
  Layers,
  ArrowRight,
  Check,
  RotateCcw,
  Sparkles,
  Edit2,
} from 'lucide-react';
import { ChibiCharacter, ChibiJourneyStageId } from '../../types/chibi';
import { CHIBI_JOURNEY_STAGES } from '../../data/chibiJourneyData';

interface ChibiEvolutionTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: ChibiCharacter;
  onJumpToStage: (stageId: ChibiJourneyStageId) => void;
}

export const ChibiEvolutionTimelineModal: React.FC<ChibiEvolutionTimelineModalProps> = ({
  isOpen,
  onClose,
  character,
  onJumpToStage,
}) => {
  if (!isOpen) return null;

  const getStageChoiceSummary = (stageId: ChibiJourneyStageId): string | null => {
    switch (stageId) {
      case 'idea':
        return character.customType || character.type || null;
      case 'theme':
        return character.customTheme || character.theme || null;
      case 'silhouette':
        return character.customSilhouette || character.silhouette || null;
      case 'head':
        return character.headShape
          ? `${character.headShape} (${character.headAngle || 'front'})`
          : null;
      case 'face':
        return character.face?.eyes
          ? `${character.face.eyes} eyes${character.face.mouth ? `, ${character.face.mouth}` : ''}`
          : null;
      case 'hair':
        return character.hair || null;
      case 'body':
        return character.body?.shape
          ? `${character.body.shape} (${character.body.proportion || 'classic'})`
          : null;
      case 'arms-hands':
        return character.arms || null;
      case 'legs-feet':
        return character.legs || null;
      case 'clothing':
        return character.clothing?.outfit || null;
      case 'accessories':
        return character.accessories?.[0] || null;
      case 'personality':
        return character.customPersonality || character.personality || null;
      case 'pose':
        return character.pose || null;
      case 'action':
        return character.action || null;
      case 'expression-body':
        return character.expressionAndBody?.emotion || null;
      case 'world':
        return character.customWorld || character.world || null;
      case 'companion':
        return character.companion?.nameOrKind || character.companion?.type || null;
      case 'story-moment':
        return character.storyMoment || null;
      case 'name-colors':
        return character.name
          ? `"${character.name}" · ${character.colors?.paletteType || 'Custom palette'}`
          : null;
      case 'character-sheet':
        return character.completedStages.includes('character-sheet')
          ? 'Completed Model Sheet'
          : null;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Character Evolution Timeline"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/65 backdrop-blur-xs animate-fadeIn text-[#2D2723]"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] paper-card subtle-shadow flex flex-col overflow-hidden text-left max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FBEFEA] text-[#E06D53] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A7D71]">
                Evolutionary Timeline
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#2D2723]">
                HOW YOUR CHARACTER GREW
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subtitle / Philosophy */}
        <div className="px-5 py-3 border-b border-[#F0EBE1] bg-[#FCFAF6] text-xs text-[#6B6158] flex items-center justify-between">
          <p>
            Started with a simple spark — each stage locked in an intentional layer of life.
          </p>
          <span className="text-[11px] font-mono font-bold text-[#E06D53] shrink-0 ml-2">
            {character.completedStages.length} Locked
          </span>
        </div>

        {/* Timeline Path */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          <div className="relative pl-6 space-y-5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D8CEBE]">
            {CHIBI_JOURNEY_STAGES.map((stage, idx) => {
              const isCompleted = character.completedStages.includes(stage.id);
              const isCurrent = character.currentStage === stage.id;
              const summary = getStageChoiceSummary(stage.id);

              return (
                <div key={stage.id} className="relative group">
                  {/* Timeline Node Dot */}
                  <span
                    className={`absolute -left-[27px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'border-[#2D2723] bg-[#E06D53] text-white'
                        : isCurrent
                        ? 'border-[#E06D53] bg-white ring-4 ring-[#E06D53]/20'
                        : 'border-[#D8CEBE] bg-[#FCFAF6]'
                    }`}
                  >
                    {isCompleted && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </span>

                  {/* Card Content */}
                  <div
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isCurrent
                        ? 'border-[#E06D53] bg-white ring-2 ring-[#E06D53]/20 shadow-xs'
                        : isCompleted
                        ? 'border-[#E8E0D5] bg-[#FCFAF6] hover:border-[#D8CEBE]'
                        : 'border-dashed border-[#D8CEBE] bg-[#FAF7F2]/50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#8A7D71] uppercase">
                          Stage {stage.stageNumber}
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#2D2723]">
                          {stage.title}
                        </h4>
                      </div>

                      {isCompleted && (
                        <button
                          onClick={() => {
                            onClose();
                            onJumpToStage(stage.id);
                          }}
                          className="text-[11px] font-bold text-[#E06D53] hover:text-[#C55339] flex items-center gap-1 hover:underline"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>Change</span>
                        </button>
                      )}
                    </div>

                    {summary ? (
                      <p className="mt-1 text-xs font-semibold text-[#2D2723] capitalize">
                        {summary.replace(/-/g, ' ')}
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-[#8A7D71] italic">
                        {isCurrent ? 'Deciding now...' : 'Upcoming stage'}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E8E0D5] bg-[#FCFAF6] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#2D2723] text-white font-bold text-xs hover:bg-[#433A34]"
          >
            RETURN TO DRAWING
          </button>
        </div>
      </div>
    </div>
  );
};
