import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  RotateCcw,
  Layers,
  HelpCircle,
  Pencil,
  Eye,
  Dice5,
  Edit3,
  Bookmark,
  CheckCircle2,
  X,
  Compass,
} from 'lucide-react';
import {
  ChibiCharacter,
  ChibiJourneyStageId,
  ChibiPreferences,
  StageChoiceItem,
} from '../../types/chibi';
import {
  CHIBI_JOURNEY_STAGES,
  getCompatibleChoiceForStage,
  generateChibiName,
} from '../../data/chibiJourneyData';
import {
  CHIBI_PART_REFERENCES,
  getChibiPartReferenceById,
} from '../../data/chibiPartReferences';
import { ChibiVisualReferenceCard } from '../../data/chibiVisualReferences';
import { ChibiEvolutionTimelineModal } from './ChibiEvolutionTimelineModal';
import { ChibiPartSelector } from './ChibiPartSelector';
import { ChibiPartLibraryModal } from './ChibiPartLibraryModal';

interface ChibiActiveJourneyViewProps {
  character: ChibiCharacter;
  preferences: ChibiPreferences;
  onUpdateCharacter: (updates: Partial<ChibiCharacter>) => void;
  onNextStage: () => void;
  onJumpToStage: (stageId: ChibiJourneyStageId) => void;
  onExitToLanding: () => void;
  onCompleteJourney: () => void;
}

export const ChibiActiveJourneyView: React.FC<ChibiActiveJourneyViewProps> = ({
  character,
  preferences,
  onUpdateCharacter,
  onNextStage,
  onJumpToStage,
  onExitToLanding,
  onCompleteJourney,
}) => {
  const currentStageIndex = CHIBI_JOURNEY_STAGES.findIndex(
    (s) => s.id === character.currentStage
  );
  const activeStage =
    CHIBI_JOURNEY_STAGES[currentStageIndex >= 0 ? currentStageIndex : 0];

  // Active substage tab for stages with multiple decisions (e.g. Face: Eyes, Brows, Nose, Mouth)
  const [activeSubstageId, setActiveSubstageId] = useState<string | null>(null);

  // Custom text input states
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [customText, setCustomText] = useState('');

  // Evolution timeline drawer on mobile
  const [isTimelineDrawerOpen, setIsTimelineDrawerOpen] = useState(false);

  // Master Part Library Modal
  const [isLibraryModalOpen, setIsLibraryModalOpen] = useState(false);

  // Revisit notice banner
  const isRevisiting = character.completedStages.includes(activeStage.id);

  // Reset or set substage when stage changes
  useEffect(() => {
    if (activeStage.hasSubstages && activeStage.substages && activeStage.substages.length > 0) {
      setActiveSubstageId(activeStage.substages[0].id);
    } else {
      setActiveSubstageId(null);
    }
    setIsCustomMode(false);
    setCustomText('');
  }, [activeStage.id]);

  // Stages that have dedicated physical part references in the library
  const STAGES_WITH_PART_REFERENCES = [
    'silhouette',
    'head',
    'face',
    'hair',
    'body',
    'arms-hands',
    'legs-feet',
    'clothing',
    'accessories',
    'companion',
  ];

  const hasPartReferences = STAGES_WITH_PART_REFERENCES.includes(activeStage.id);

  // Current choices list (either main stage choices or active substage choices)
  const currentChoices: StageChoiceItem[] =
    activeSubstageId && activeStage.substages
      ? activeStage.substages.find((s) => s.id === activeSubstageId)?.choices || activeStage.choices
      : activeStage.choices;

  // Find currently selected value for this stage/substage
  const getSelectedValue = (): string | undefined => {
    switch (activeStage.id) {
      case 'idea':
        return character.type;
      case 'theme':
        return character.theme;
      case 'silhouette':
        return character.silhouette;
      case 'head':
        if (activeSubstageId === 'headAngle') return character.headAngle;
        return character.headShape;
      case 'face':
        if (activeSubstageId === 'eyebrows') return character.face?.eyebrows;
        if (activeSubstageId === 'nose') return character.face?.nose;
        if (activeSubstageId === 'mouth') return character.face?.mouth;
        return character.face?.eyes;
      case 'hair':
        return character.hair;
      case 'body':
        if (activeSubstageId === 'proportion') return character.body?.proportion;
        return character.body?.shape;
      case 'arms-hands':
        return character.arms;
      case 'legs-feet':
        return character.legs;
      case 'clothing':
        return character.clothing?.outfit;
      case 'accessories':
        return character.accessories?.[0];
      case 'personality':
        return character.personality;
      case 'pose':
        return character.pose;
      case 'action':
        return character.action;
      case 'expression-body':
        return character.expressionAndBody?.emotion;
      case 'world':
        return character.world;
      case 'companion':
        return character.companion?.type;
      case 'story-moment':
        return character.storyMoment;
      case 'name-colors':
        return character.colors?.paletteType;
      default:
        return undefined;
    }
  };

  const selectedValue = getSelectedValue();

  // Active choice object for rendering visual reference
  const activeChoiceItem =
    currentChoices.find((c) => c.id === selectedValue) || currentChoices[0] || null;

  // Active isolated part reference (if any)
  const activePartRef =
    getChibiPartReferenceById(selectedValue || '') ||
    CHIBI_PART_REFERENCES.find(
      (p) =>
        p.id === selectedValue ||
        p.id.endsWith(`-${selectedValue}`) ||
        p.name.toLowerCase() === (selectedValue || '').toLowerCase()
    );

  // Handle choice selection
  const handleSelectChoice = (choiceId: string, customLabel?: string) => {
    setIsCustomMode(false);
    switch (activeStage.id) {
      case 'idea':
        onUpdateCharacter({ type: choiceId as any, customType: customLabel });
        break;
      case 'theme':
        onUpdateCharacter({ theme: choiceId as any, customTheme: customLabel });
        break;
      case 'silhouette':
        onUpdateCharacter({ silhouette: choiceId as any, customSilhouette: customLabel });
        break;
      case 'head':
        if (activeSubstageId === 'headAngle') {
          onUpdateCharacter({ headAngle: choiceId as any });
        } else {
          onUpdateCharacter({ headShape: choiceId as any, customHeadShape: customLabel });
        }
        break;
      case 'face':
        if (activeSubstageId === 'eyebrows') {
          onUpdateCharacter({ face: { ...character.face, eyebrows: choiceId } });
        } else if (activeSubstageId === 'nose') {
          onUpdateCharacter({ face: { ...character.face, nose: choiceId } });
        } else if (activeSubstageId === 'mouth') {
          onUpdateCharacter({ face: { ...character.face, mouth: choiceId } });
        } else {
          onUpdateCharacter({ face: { ...character.face, eyes: choiceId } });
        }
        break;
      case 'hair':
        onUpdateCharacter({ hair: choiceId });
        break;
      case 'body':
        if (activeSubstageId === 'proportion') {
          onUpdateCharacter({ body: { ...character.body, proportion: choiceId } });
        } else {
          onUpdateCharacter({ body: { ...character.body, shape: choiceId } });
        }
        break;
      case 'arms-hands':
        onUpdateCharacter({ arms: choiceId, hands: choiceId });
        break;
      case 'legs-feet':
        onUpdateCharacter({ legs: choiceId, feet: choiceId });
        break;
      case 'clothing':
        onUpdateCharacter({
          clothing: {
            ...character.clothing,
            outfit: choiceId,
            layers: [choiceId],
          },
        });
        break;
      case 'accessories':
        onUpdateCharacter({ accessories: [choiceId] });
        break;
      case 'personality':
        onUpdateCharacter({ personality: choiceId, customPersonality: customLabel });
        break;
      case 'pose':
        onUpdateCharacter({ pose: choiceId });
        break;
      case 'action':
        onUpdateCharacter({ action: choiceId });
        break;
      case 'expression-body':
        onUpdateCharacter({
          expressionAndBody: {
            emotion: choiceId,
            postureNote: activeChoiceItem?.sublabel,
          },
        });
        break;
      case 'world':
        onUpdateCharacter({ world: choiceId, customWorld: customLabel });
        break;
      case 'companion':
        onUpdateCharacter({
          companion: {
            type: choiceId,
            nameOrKind: activeChoiceItem?.label,
          },
        });
        break;
      case 'story-moment':
        onUpdateCharacter({ storyMoment: choiceId });
        break;
      case 'name-colors':
        onUpdateCharacter({
          colors: {
            ...character.colors,
            paletteType: choiceId,
          },
        });
        break;
    }
  };

  // "CHOOSE FOR ME" (Section 32)
  const handleChooseForMe = () => {
    const recommendation = getCompatibleChoiceForStage(
      activeStage.id,
      character,
      activeSubstageId || undefined
    );
    handleSelectChoice(recommendation.id, recommendation.label);

    if (activeStage.id === 'name-colors' && !character.name) {
      const suggestedName = generateChibiName(character.theme || 'cozy');
      onUpdateCharacter({ name: suggestedName });
    }
  };

  // Handle custom text apply (Section 31)
  const handleApplyCustom = () => {
    if (!customText.trim()) return;
    handleSelectChoice('custom', customText.trim());
    setIsCustomMode(false);
  };

  // Progression handlers
  const handleNextClick = () => {
    if (!character.completedStages.includes(activeStage.id)) {
      onUpdateCharacter({
        completedStages: [...character.completedStages, activeStage.id],
      });
    }

    if (currentStageIndex === CHIBI_JOURNEY_STAGES.length - 1) {
      onCompleteJourney();
    } else {
      onNextStage();
    }
  };

  const handlePrevClick = () => {
    if (currentStageIndex > 0) {
      const prevStage = CHIBI_JOURNEY_STAGES[currentStageIndex - 1];
      onJumpToStage(prevStage.id);
    } else {
      onExitToLanding();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-[#16171A]">
      {/* Top Bar: Progress, Title, Library Quick Access */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5DE]">
        <div className="flex items-center gap-3">
          <button
            onClick={onExitToLanding}
            className="p-2 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-[#686862] hover:text-[#16171A] transition-colors"
            title="Return to Workshop Hub"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
                CHIBI ATELIER WORKSHOP
              </span>
              <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#EEEEEC] text-[#686862]">
                Stage {activeStage.stageNumber} of 20
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-[#16171A]">
              {character.name || 'Your Original Character'}
            </h1>
          </div>
        </div>

        {/* Global Reference Library Access */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLibraryModalOpen(true)}
            className="px-3 py-1.5 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#16171A] flex items-center gap-1.5 transition-colors shadow-2xs"
            title="Browse all 197+ individual character part references"
          >
            <Layers className="w-3.5 h-3.5 text-[#2752E7]" />
            <span>Part Library</span>
          </button>

          <button
            onClick={() => setIsTimelineDrawerOpen(true)}
            className="px-3 py-1.5 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#686862] hover:text-[#16171A] flex items-center gap-1.5 transition-colors"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#2752E7]" />
            <span>Stages ({character.completedStages.length}/20)</span>
          </button>
        </div>
      </div>

      {/* Stage Roadmap Progress Bar */}
      <nav aria-label="Stages" className="mb-6 overflow-x-auto no-scrollbar pb-1">
        <div className="flex items-center gap-1.5 min-w-max">
          {CHIBI_JOURNEY_STAGES.map((stage, idx) => {
            const isCompleted = character.completedStages.includes(stage.id);
            const isCurrent = stage.id === activeStage.id;
            const isLocked = !isCompleted && !isCurrent && idx > currentStageIndex + 1;

            return (
              <button
                key={stage.id}
                disabled={isLocked}
                onClick={() => onJumpToStage(stage.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isCurrent
                    ? 'bg-[#16171A] text-white shadow-2xs'
                    : isCompleted
                    ? 'bg-[#F4F4F0] text-[#16171A] hover:bg-[#EEEEEA]'
                    : isLocked
                    ? 'bg-[#FBFBFA] text-[#C4C4BC] cursor-not-allowed opacity-50'
                    : 'bg-white text-[#686862] border border-[#E5E5DE] hover:bg-[#F4F4F0]'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                ) : (
                  <span className="text-[10px] font-mono">{idx + 1}</span>
                )}
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Revisiting Stage Notice */}
      {isRevisiting && (
        <div className="mb-5 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E5DE] text-xs flex items-center justify-between text-[#686862]">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-[#2752E7] shrink-0" />
            <span>
              <strong>Revisiting {activeStage.title}:</strong> You can update this part; all other decisions remain preserved.
            </span>
          </div>
          <button
            onClick={() =>
              onJumpToStage(
                (character.completedStages[character.completedStages.length - 1] as any) ||
                  'character-sheet'
              )
            }
            className="text-xs font-semibold text-[#2752E7] hover:underline ml-2 shrink-0"
          >
            Jump to Latest
          </button>
        </div>
      )}

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* LEFT COLUMN: Stage Question, Substage Tabs, Isolated Part Selector / Choices */}
        <div className="lg:col-span-7 space-y-6">
          {/* Stage Heading Box */}
          <div className="p-6 rounded-2xl border border-[#E5E5DE] bg-white shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono-code font-bold tracking-widest uppercase text-[#8A8A82]">
                STAGE {activeStage.stageNumber} OF 20 · {activeStage.title}
              </span>
              <button
                onClick={handleChooseForMe}
                className="px-2.5 py-1 rounded-md bg-[#F4F4F0] hover:bg-[#EEEEEA] text-xs font-semibold text-[#16171A] flex items-center gap-1.5 transition-colors"
                title="Randomly pick a compatible choice for this stage only"
              >
                <Dice5 className="w-3.5 h-3.5 text-[#2752E7]" />
                <span>Choose For Me</span>
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#16171A]">
              {activeStage.friendlyQuestion}
            </h2>

            <p className="text-xs sm:text-sm text-[#686862] leading-relaxed">
              {activeStage.artTeacherNote}
            </p>
          </div>

          {/* Substage Navigation Tabs (if stage has substages like Face: Eyes, Brows, Nose, Mouth) */}
          {activeStage.hasSubstages && activeStage.substages && (
            <div className="flex flex-wrap gap-2 pb-1">
              {activeStage.substages.map((sub) => {
                const isSelected = activeSubstageId === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubstageId(sub.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'bg-[#16171A] text-white shadow-2xs'
                        : 'bg-[#F4F4F0] text-[#686862] hover:bg-[#EEEEEA] hover:text-[#16171A]'
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Visual Reference Selector vs Standard Choices */}
          {hasPartReferences ? (
            <div className="p-5 rounded-2xl border border-[#E5E5DE] bg-white shadow-2xs">
              <ChibiPartSelector
                stageId={activeStage.id}
                substageId={activeSubstageId}
                selectedPartId={selectedValue}
                onSelectPart={(partId, partName) => handleSelectChoice(partId, partName)}
                onCustomClick={() => setIsCustomMode(true)}
                characterType={character.type}
                theme={character.theme}
              />
            </div>
          ) : (
            /* Choices Grid for Concept Stages (Idea, Theme, World, etc.) */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentChoices.map((choice) => {
                const isSelected = selectedValue === choice.id;
                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice.id)}
                    className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#2752E7] bg-white ring-2 ring-[#2752E7]/20 shadow-xs'
                        : 'border-[#E5E5DE] bg-white hover:border-[#16171A] hover:bg-[#FDFDFD]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-[#16171A]">
                        {choice.label}
                      </span>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-[#2752E7] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    {choice.sublabel && (
                      <p className="text-[11px] text-[#8A8A82] leading-tight">
                        {choice.sublabel}
                      </p>
                    )}
                  </button>
                );
              })}

              {activeStage.allowCustom && (
                <button
                  onClick={() => setIsCustomMode(!isCustomMode)}
                  className={`p-4 rounded-xl text-left border border-dashed transition-all flex flex-col justify-between ${
                    isCustomMode || selectedValue === 'custom'
                      ? 'border-[#2752E7] bg-white'
                      : 'border-[#D5D5CD] bg-[#FAF9F5] hover:border-[#16171A]'
                  }`}
                >
                  <div className="text-sm font-semibold text-[#16171A] flex items-center gap-1.5">
                    <Pencil className="w-3.5 h-3.5 text-[#2752E7]" />
                    <span>Custom Direction...</span>
                  </div>
                  <p className="text-[11px] text-[#8A8A82]">
                    Write your own direction
                  </p>
                </button>
              )}
            </div>
          )}

          {/* Custom Input Field (Section 31) */}
          {isCustomMode && (
            <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E5E5DE] space-y-2">
              <label className="block text-xs font-semibold text-[#16171A]">
                Your Custom Direction:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="e.g. Tiny Cloud Dragon, Steampunk monocle, Mossy scarf..."
                  className="flex-1 px-3 py-2 rounded-lg bg-white border border-[#E5E5DE] text-xs text-[#16171A] focus:outline-none focus:border-[#2752E7]"
                  onKeyDown={(e) => e.key === 'Enter' && handleApplyCustom()}
                />
                <button
                  onClick={handleApplyCustom}
                  className="px-4 py-2 rounded-lg bg-[#16171A] text-white text-xs font-semibold hover:bg-[#2752E7] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {/* Active Drawing Card: "Now On Your Paper: Draw It" */}
          <div className="p-6 rounded-2xl border border-[#E5E5DE] bg-white shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#2752E7]">
              <Pencil className="w-4 h-4" />
              <span>NOW ON YOUR PAPER</span>
            </div>

            <p className="text-sm sm:text-base font-medium text-[#16171A] leading-relaxed">
              {activeStage.whatToDrawPrompt}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8A8A82]">
              <span className="w-2 h-2 rounded-full bg-[#2752E7] animate-pulse" />
              <span>Put device down · Draw on paper · Return when ready</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevClick}
              className="px-4 py-2.5 rounded-xl border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-[#16171A] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNextClick}
              className="px-6 py-3 rounded-xl bg-[#16171A] hover:bg-[#2752E7] text-white text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
            >
              <span>Ready · Next Stage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Isolated Visual Reference & Character Build Progress */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">
          {/* Isolated Part Reference Card (Section 1: DO NOT DISPLAY FULL SHEETS) */}
          {activePartRef ? (
            <div className="p-6 rounded-2xl border border-[#E5E5DE] bg-white shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-2.5">
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
                  ACTIVE PART REFERENCE
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#F4F4F0] text-[#686862]">
                  {activePartRef.category}
                </span>
              </div>

              {/* Crisp Isolated Vector Art */}
              <div className="w-full aspect-square max-h-56 mx-auto rounded-xl bg-[#FAF9F5] border border-[#EEEEEC] flex items-center justify-center p-6">
                {activePartRef.svgContent ? (
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full max-w-[140px] max-h-[140px] text-[#16171A]"
                    dangerouslySetInnerHTML={{ __html: activePartRef.svgContent }}
                  />
                ) : (
                  <img
                    src={activePartRef.imageUrl}
                    alt={activePartRef.altText}
                    className="w-full h-full object-contain max-w-[140px] max-h-[140px]"
                  />
                )}
              </div>

              <div>
                <h4 className="text-lg font-display font-bold text-[#16171A]">
                  {activePartRef.name}
                </h4>
                <p className="text-xs text-[#686862] mt-1 leading-relaxed">
                  {activePartRef.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FBFBFA] border border-[#E5E5DE] text-xs text-[#686862] space-y-1">
                <div className="font-semibold text-[#16171A] flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#2752E7]" />
                  <span>Construction Note</span>
                </div>
                <p>{activeStage.artTeacherNote}</p>
              </div>
            </div>
          ) : activeChoiceItem ? (
            <ChibiVisualReferenceCard
              refId={activeChoiceItem.visualRefId}
              title={activeChoiceItem.label}
              sublabel={activeChoiceItem.sublabel}
              artTeacherTip={activeStage.artTeacherNote}
              whatToNotice={[
                'Look at the relationship between outer silhouette and inner lines.',
                'Keep construction marks faint with light pencil pressure.',
                'Focus on big masses first before rendering small details.',
              ]}
            />
          ) : null}

          {/* Desktop Character Accumulation Box */}
          <div className="hidden lg:block p-5 rounded-2xl border border-[#E5E5DE] bg-white shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-2.5">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862] flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#2752E7]" />
                <span>CHARACTER DECISIONS</span>
              </span>
              <span className="text-[10px] font-mono-code text-[#8A8A82]">
                {character.completedStages.length} Locked
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-[#F4F4F0]">
                <span className="text-[#8A8A82]">Type:</span>
                <span className="font-semibold text-[#16171A] capitalize">
                  {character.customType || character.type || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F4F4F0]">
                <span className="text-[#8A8A82]">Theme:</span>
                <span className="font-semibold text-[#16171A] capitalize">
                  {character.customTheme || character.theme || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F4F4F0]">
                <span className="text-[#8A8A82]">Silhouette:</span>
                <span className="font-semibold text-[#16171A] capitalize">
                  {character.customSilhouette || character.silhouette || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F4F4F0]">
                <span className="text-[#8A8A82]">Head Shape:</span>
                <span className="font-semibold text-[#16171A] capitalize">
                  {character.customHeadShape || character.headShape || '—'}
                </span>
              </div>
              {character.face?.eyes && (
                <div className="flex justify-between py-1 border-b border-[#F4F4F0]">
                  <span className="text-[#8A8A82]">Eyes:</span>
                  <span className="font-semibold text-[#16171A] capitalize">
                    {character.face.eyes}
                  </span>
                </div>
              )}
              {character.hair && (
                <div className="flex justify-between py-1 border-b border-[#F4F4F0]">
                  <span className="text-[#8A8A82]">Hair:</span>
                  <span className="font-semibold text-[#16171A] capitalize">
                    {character.hair}
                  </span>
                </div>
              )}
              {character.body?.shape && (
                <div className="flex justify-between py-1 border-b border-[#F4F4F0]">
                  <span className="text-[#8A8A82]">Body Build:</span>
                  <span className="font-semibold text-[#16171A] capitalize">
                    {character.body.shape}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Global Part Reference Library Explorer Modal */}
      <ChibiPartLibraryModal
        isOpen={isLibraryModalOpen}
        onClose={() => setIsLibraryModalOpen(false)}
        initialCategory={
          activeStage.id === 'head'
            ? 'head'
            : activeStage.id === 'face'
            ? 'eye'
            : activeStage.id === 'hair'
            ? 'hair'
            : activeStage.id === 'body'
            ? 'body'
            : 'all'
        }
        selectedPartId={selectedValue}
        onSelectPart={(p) => handleSelectChoice(p.id, p.name)}
        characterType={character.type}
        theme={character.theme}
      />

      {/* Mobile Stages Drawer */}
      <ChibiEvolutionTimelineModal
        isOpen={isTimelineDrawerOpen}
        onClose={() => setIsTimelineDrawerOpen(false)}
        character={character}
        onJumpToStage={(stageId) => {
          onJumpToStage(stageId);
          setIsTimelineDrawerOpen(false);
        }}
      />
    </div>
  );
};
