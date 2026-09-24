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
import { ChibiVisualReferenceCard } from '../../data/chibiVisualReferences';
import { ChibiEvolutionTimelineModal } from './ChibiEvolutionTimelineModal';

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

  // "CHOOSE FOR ME" structured randomness function:
  // Affects ONLY the current stage or active substage. Never touches past choices!
  const handleChooseForMe = () => {
    const recommendation = getCompatibleChoiceForStage(
      activeStage.id,
      character,
      activeSubstageId || undefined
    );
    handleSelectChoice(recommendation.id, recommendation.label);

    // If on stage 19 (Name & Palette) and name is not entered yet, auto-suggest a name
    if (activeStage.id === 'name-colors' && !character.name) {
      const suggestedName = generateChibiName(character.theme || 'cozy');
      onUpdateCharacter({ name: suggestedName });
    }
  };

  // Submit custom text
  const handleApplyCustom = () => {
    if (!customText.trim()) return;
    handleSelectChoice('custom', customText.trim());
  };

  // Navigation to next step
  const handleNextClick = () => {
    // If there are remaining substages on this stage, advance to the next substage first
    if (activeStage.hasSubstages && activeStage.substages) {
      const subIdx = activeStage.substages.findIndex((s) => s.id === activeSubstageId);
      if (subIdx >= 0 && subIdx < activeStage.substages.length - 1) {
        setActiveSubstageId(activeStage.substages[subIdx + 1].id);
        return;
      }
    }

    if (currentStageIndex === CHIBI_JOURNEY_STAGES.length - 2) {
      // Last regular stage before character sheet
      onCompleteJourney();
    } else {
      onNextStage();
    }
  };

  // Navigation back
  const handlePrevClick = () => {
    if (activeStage.hasSubstages && activeStage.substages && activeSubstageId) {
      const subIdx = activeStage.substages.findIndex((s) => s.id === activeSubstageId);
      if (subIdx > 0) {
        setActiveSubstageId(activeStage.substages[subIdx - 1].id);
        return;
      }
    }

    if (currentStageIndex > 0) {
      onJumpToStage(CHIBI_JOURNEY_STAGES[currentStageIndex - 1].id);
    } else {
      onExitToLanding();
    }
  };

  return (
    <div className="min-h-full py-4 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto text-[#2D2723]">
      {/* Top Bar: Back & Evolution Drawer Trigger */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E8E0D5] mb-4">
        <button
          onClick={onExitToLanding}
          className="text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>JOURNEY OVERVIEW</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Evolution timeline trigger */}
          <button
            onClick={() => setIsTimelineDrawerOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EFE9DF] border border-[#D8CEBE] text-xs font-bold flex items-center gap-1.5 transition-all text-[#2D2723]"
            title="View complete evolution timeline and revisit earlier stages"
          >
            <Layers className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="hidden sm:inline">EVOLUTION</span>
            <span>TIMELINE</span>
          </button>

          <span className="text-xs font-mono font-bold text-[#8A7D71]">
            STAGE {activeStage.stageNumber} OF {CHIBI_JOURNEY_STAGES.length}
          </span>
        </div>
      </div>

      {/* Visual Journey Tracker Bar */}
      <nav
        aria-label="Chibi Journey stages"
        className="overflow-x-auto no-scrollbar pb-3 mb-5"
      >
        <div className="flex items-center gap-2 min-w-max">
          {CHIBI_JOURNEY_STAGES.slice(0, 19).map((stage, idx) => {
            const isCompleted = character.completedStages.includes(stage.id);
            const isCurrent = character.currentStage === stage.id;
            const isLocked =
              !isCompleted &&
              !isCurrent &&
              preferences.journeyMode === 'guided' &&
              idx > character.completedStages.length;

            return (
              <button
                key={stage.id}
                disabled={isLocked}
                onClick={() => onJumpToStage(stage.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isCurrent
                    ? 'bg-[#E06D53] text-white shadow-sm ring-2 ring-[#E06D53]/30'
                    : isCompleted
                    ? 'bg-[#EFE9DF] text-[#2D2723] hover:bg-[#E8E0D5]'
                    : isLocked
                    ? 'bg-[#F5F2ED] text-[#B0A599] cursor-not-allowed opacity-60'
                    : 'bg-[#FCFAF6] text-[#6B6158] border border-[#E8E0D5] hover:bg-[#FAF7F2]'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-3 h-3 text-[#2D2723]" />
                ) : (
                  <span className="text-[10px] opacity-70">#{idx + 1}</span>
                )}
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Revisiting Choice Notice */}
      {isRevisiting && (
        <div className="mb-4 p-3 rounded-2xl bg-[#FEF6E4] border border-[#F0BC98] text-[#8A4A28] text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-[#E06D53] shrink-0" />
            <span>
              <strong>Revisiting {activeStage.title}:</strong> You can change
              this decision; your other completed choices remain safely preserved.
            </span>
          </div>
          <button
            onClick={() => onJumpToStage(character.completedStages[character.completedStages.length - 1] as any || 'character-sheet')}
            className="text-[11px] font-bold text-[#E06D53] underline ml-2 shrink-0"
          >
            Jump to Latest
          </button>
        </div>
      )}

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
        {/* LEFT COLUMN: Stage Question, Substage Tabs, Choices Grid, Custom Input, Drawing Prompt */}
        <div className="lg:col-span-7 space-y-5">
          {/* Stage Heading Box */}
          <div className="p-5 rounded-3xl border-2 border-[#2D2723] bg-[#FCFAF6] shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#8A7D71]">
                STAGE {activeStage.stageNumber} — {activeStage.title}
              </span>
              {/* CHOOSE FOR ME Button */}
              <button
                onClick={handleChooseForMe}
                className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EFE9DF] border border-[#D8CEBE] text-[#2D2723] text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-xs hover:border-[#E06D53]"
                title="Randomly pick a compatible choice for this stage only without altering previous decisions."
              >
                <Dice5 className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>CHOOSE FOR ME</span>
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#2D2723]">
              {activeStage.friendlyQuestion}
            </h2>

            <p className="text-xs sm:text-sm text-[#6B6158] leading-relaxed">
              {activeStage.artTeacherNote}
            </p>
          </div>

          {/* Substage Navigation Pills (if stage has substages like Face: Eyes, Brows, Nose, Mouth) */}
          {activeStage.hasSubstages && activeStage.substages && (
            <div className="flex flex-wrap gap-2 pb-1">
              {activeStage.substages.map((sub) => {
                const isSelected = activeSubstageId === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubstageId(sub.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#2D2723] text-white shadow-xs'
                        : 'bg-[#EFE9DF] text-[#6B6158] hover:text-[#2D2723]'
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Choices Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentChoices.map((choice) => {
              const isSelected = selectedValue === choice.id;
              return (
                <button
                  key={choice.id}
                  onClick={() => handleSelectChoice(choice.id)}
                  className={`p-3.5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#E06D53] bg-[#FAF7F2] ring-2 ring-[#E06D53]/20 shadow-xs'
                      : 'border-[#E8E0D5] bg-[#FAF7F2] hover:border-[#D8CEBE] hover:bg-[#FCFAF6]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span
                      className={`text-sm font-extrabold ${
                        isSelected ? 'text-[#E06D53]' : 'text-[#2D2723]'
                      }`}
                    >
                      {choice.label}
                    </span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#E06D53] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  {choice.sublabel && (
                    <p className="text-[11px] text-[#8A7D71] leading-tight">
                      {choice.sublabel}
                    </p>
                  )}
                </button>
              );
            })}

            {/* Custom choice tile */}
            {activeStage.allowCustom && (
              <button
                onClick={() => setIsCustomMode(!isCustomMode)}
                className={`p-3.5 rounded-2xl text-left border-2 border-dashed transition-all flex flex-col justify-between ${
                  isCustomMode || selectedValue === 'custom'
                    ? 'border-[#E06D53] bg-[#FAF7F2]'
                    : 'border-[#D8CEBE] bg-[#FCFAF6] hover:border-[#2D2723]'
                }`}
              >
                <div className="text-sm font-extrabold text-[#2D2723] flex items-center gap-1.5">
                  <Pencil className="w-3.5 h-3.5 text-[#E06D53]" />
                  <span>Custom Idea...</span>
                </div>
                <p className="text-[11px] text-[#8A7D71]">
                  Type your own unique concept
                </p>
              </button>
            )}
          </div>

          {/* Custom Input Field */}
          {isCustomMode && (
            <div className="p-3.5 rounded-2xl bg-[#EFE9DF] border border-[#D8CEBE] space-y-2">
              <label className="block text-xs font-bold text-[#2D2723]">
                Your Custom Direction:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="e.g. Tiny Cloud Dragon, Steampunk monocle, Mossy scarf..."
                  className="flex-1 px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D8CEBE] text-xs text-[#2D2723] focus:outline-none focus:border-[#E06D53]"
                  onKeyDown={(e) => e.key === 'Enter' && handleApplyCustom()}
                />
                <button
                  onClick={handleApplyCustom}
                  className="px-4 py-2 rounded-xl bg-[#2D2723] text-white text-xs font-bold hover:bg-[#433A34]"
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {/* Active Creation UX: "Now on your paper: Draw it" */}
          <div className="p-5 rounded-3xl border-2 border-[#2D2723] bg-[#FAF7F2] paper-card subtle-shadow space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E06D53] uppercase tracking-wider">
              <Pencil className="w-4 h-4" />
              <span>NOW ON YOUR PAPER:</span>
            </div>

            <p className="text-sm sm:text-base font-semibold text-[#2D2723] leading-relaxed">
              {activeStage.whatToDrawPrompt}
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#8A7D71]">
              <span className="w-2 h-2 rounded-full bg-[#E06D53] animate-pulse" />
              <span>Put device down • Take your time • Return when ready</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevClick}
              className="px-4 py-3 rounded-2xl border-2 border-[#2D2723] bg-[#FAF7F2] hover:bg-[#EFE9DF] text-[#2D2723] text-xs font-extrabold flex items-center gap-1.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK</span>
            </button>

            <button
              onClick={handleNextClick}
              className="px-6 py-3.5 rounded-2xl bg-[#E06D53] hover:bg-[#CF5E45] text-white text-sm font-black flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>I'M READY / NEXT STAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Reference Card & Live Character Build Recap */}
        <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-20">
          {/* Visual Reference Card */}
          {activeChoiceItem && (
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
          )}

          {/* Desktop Live Character Recap Box */}
          <div className="hidden lg:block p-4 rounded-3xl border-2 border-[#2D2723] bg-[#FCFAF6] shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A7D71] flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>CHARACTER ACCUMULATION</span>
              </span>
              <span className="text-[10px] font-mono text-[#8A7D71]">
                {character.completedStages.length} Stages Locked
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Type:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.customType || character.type || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Theme:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.customTheme || character.theme || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Silhouette:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.silhouette || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Head:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.headShape || '—'} ({character.headAngle || 'front'})
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Eyes:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.face?.eyes || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Clothing:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.clothing?.outfit || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Accessory:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.accessories?.[0] || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                <span className="text-[#8A7D71]">Personality:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.customPersonality || character.personality || '—'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8A7D71]">World:</span>
                <span className="font-bold text-[#2D2723] capitalize">
                  {character.customWorld || character.world || '—'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Evolution Timeline Modal (Available on mobile & desktop) */}
      <ChibiEvolutionTimelineModal
        isOpen={isTimelineDrawerOpen}
        onClose={() => setIsTimelineDrawerOpen(false)}
        character={character}
        onJumpToStage={onJumpToStage}
      />
    </div>
  );
};
