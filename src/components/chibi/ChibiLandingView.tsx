import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Trophy,
  HelpCircle,
  FolderHeart,
  Palette,
  Compass,
  CheckCircle2,
  RefreshCw,
  Eye,
  Smile,
  Shield,
  Layers,
} from 'lucide-react';
import { ChibiCharacter, ChibiPreferences, ChibiProgressStats } from '../../types/chibi';

interface ChibiLandingViewProps {
  activeCharacter: ChibiCharacter | null;
  savedCharacters: ChibiCharacter[];
  stats: ChibiProgressStats;
  preferences: ChibiPreferences;
  onStartNew: () => void;
  onContinue: () => void;
  onOpenMyCharacters: () => void;
  onOpenChallenges: () => void;
  onOpenHowItWorks: () => void;
  onOpenPartLibrary?: () => void;
  onUpdatePreferences: (prefs: Partial<ChibiPreferences>) => void;
  onBackToHome: () => void;
}

export const ChibiLandingView: React.FC<ChibiLandingViewProps> = ({
  activeCharacter,
  savedCharacters,
  stats,
  preferences,
  onStartNew,
  onContinue,
  onOpenMyCharacters,
  onOpenChallenges,
  onOpenHowItWorks,
  onOpenPartLibrary,
  onUpdatePreferences,
  onBackToHome,
}) => {
  const [confirmNewModal, setConfirmNewModal] = useState(false);

  const hasActiveSession =
    activeCharacter && activeCharacter.completedStages.length > 0;

  const handleStartNewClick = () => {
    if (hasActiveSession) {
      setConfirmNewModal(true);
    } else {
      onStartNew();
    }
  };

  return (
    <div className="min-h-full py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-[#16171A]">
      {/* Top Breadcrumb & Quick Actions */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5E5DE]">
        <button
          onClick={onBackToHome}
          className="text-xs font-semibold text-[#686862] hover:text-[#16171A] flex items-center gap-1.5 transition-colors"
        >
          ← Return to Studio
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHowItWorks}
            className="text-xs font-semibold text-[#686862] hover:text-[#16171A] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded-lg hover:bg-[#F4F4F0]"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </button>
          <button
            onClick={onOpenChallenges}
            className="text-xs font-semibold text-[#2752E7] hover:text-[#1E40AF] flex items-center gap-1.5 transition-colors px-3 py-1 rounded-lg bg-[#EFF3FF] border border-[#D5E1FF]"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>10 Challenges</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#686862]">
          <span className="w-2 h-2 rounded-full bg-[#2752E7]" aria-hidden="true" />
          <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#2752E7]">
            Guided Atelier
          </span>
          <span aria-hidden="true">·</span>
          <span>20 Visual Milestones</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#16171A]">
          Chibi Character Atelier
        </h1>
        <p className="font-display italic text-lg sm:text-xl text-[#2752E7]">
          "Build an original character, one mark and layer at a time."
        </p>
        <p className="text-sm sm:text-base text-[#555550] leading-relaxed max-w-lg mx-auto">
          From primitive silhouette and facial proportions to expressive costumes, accessories, and a finished turnaround model sheet.
        </p>
      </div>

      {/* Visual Progression Path */}
      <div className="mb-10 p-6 rounded-2xl border border-[#E5E5DE] bg-white shadow-xs">
        <div className="text-left text-xs font-mono-code font-semibold uppercase tracking-wider text-[#686862] mb-4">
          The 8 Fundamental Milestones
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 text-center">
          {[
            { step: '01. Idea', label: 'Seed Concept' },
            { step: '02. Shape', label: 'Silhouette' },
            { step: '03. Face', label: 'Proportions' },
            { step: '04. Eyes', label: 'Expression' },
            { step: '05. Hair', label: 'Volume' },
            { step: '06. Outfit', label: 'Costume' },
            { step: '07. Pose', label: 'Action Line' },
            { step: '08. Sheet', label: 'Model Sheet' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAF9F6] border border-[#E5E5DE] hover:border-[#16171A] transition-colors"
            >
              <div className="text-xs font-mono-code font-semibold text-[#16171A]">
                {item.step}
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {/* Card 1: Start Fresh */}
        <div className="p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] bg-white shadow-xs flex flex-col justify-between text-left">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center">
              <Sparkles className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[#16171A]">
              Start a New Character
            </h2>
            <p className="text-xs sm:text-sm text-[#686862] leading-relaxed">
              Begin from zero with guided milestone decisions: select your archetype, sculpt their proportions, design their costume, and watch them materialize on your paper.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={handleStartNewClick}
              className="w-full py-3.5 px-6 rounded-xl bg-[#16171A] hover:bg-[#2C2D32] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-2xs transition-colors"
            >
              <span>Begin New Character</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Continue Active or View Saved */}
        {hasActiveSession ? (
          <div className="p-6 sm:p-7 rounded-2xl border border-[#2752E7] bg-white shadow-xs flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2752E7]">
                  <span className="w-2 h-2 rounded-full bg-[#2752E7] animate-pulse" />
                  <span className="font-mono-code text-[11px]">ACTIVE CHARACTER IN PROGRESS</span>
                </div>
                <span className="text-xs text-[#8A8A82] font-mono-code tabular-nums">
                  {activeCharacter?.completedStages.length} of 20 stages
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#16171A]">
                {activeCharacter?.name || 'Your In-Progress Character'}
              </h2>
              <p className="text-xs sm:text-sm text-[#686862]">
                Currently at:{' '}
                <span className="font-semibold text-[#16171A] capitalize">
                  {activeCharacter?.currentStage.replace('-', ' ')}
                </span>
                . Your decisions are securely saved in local storage.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={onContinue}
                className="flex-1 py-3 px-5 rounded-xl bg-[#2752E7] hover:bg-[#1E40AF] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs transition-colors"
              >
                <span>Continue Character</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenMyCharacters}
                className="py-3 px-4 rounded-xl bg-white border border-[#E5E5DE] hover:bg-[#F4F4F0] text-[#16171A] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <FolderHeart className="w-4 h-4 text-[#2752E7]" />
                <span>Saved ({savedCharacters.length})</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] bg-white shadow-xs flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] text-[#686862] flex items-center justify-center">
                <FolderHeart className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#16171A]">
                My Character Sheets
              </h2>
              <p className="text-xs sm:text-sm text-[#686862] leading-relaxed">
                {savedCharacters.length === 0
                  ? 'You haven’t completed a character yet. Once you complete your first character sheet, your model sheets will be archived here.'
                  : `Browse ${savedCharacters.length} saved chibi character sheets, review turnaround notes, or continue their story.`}
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenMyCharacters}
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-[#F4F4F0] border border-[#E5E5DE] text-[#16171A] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <FolderHeart className="w-4 h-4 text-[#2752E7]" />
                <span>View Character Archive ({savedCharacters.length})</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Chibi Character Part Reference Library Callout Banner */}
      {onOpenPartLibrary && (
        <div className="p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] bg-white shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-left">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
                MODULAR COMPONENT LIBRARY
              </span>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#F4F4F0] text-[#686862]">
                197 Isolated Pieces
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-[#16171A]">
              Chibi Character Part Reference Library
            </h3>
            <p className="text-xs sm:text-sm text-[#686862] leading-relaxed">
              Explore individual black-and-white vector references: head shapes, angles, ears, eyes, brows, mouths, hairstyles, body silhouettes, paws, feet, wings, horns, and accessories.
            </p>
          </div>

          <button
            onClick={onOpenPartLibrary}
            className="px-5 py-3 rounded-xl bg-[#16171A] hover:bg-[#2752E7] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-2xs shrink-0"
          >
            <Layers className="w-4 h-4 text-[#E6EEFF]" />
            <span>Browse Part Library</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Mode & Skill Level Preferences */}
      <div className="p-5 rounded-2xl bg-white border border-[#E5E5DE] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-[#16171A] flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#2752E7]" />
            <span>Journey Preferences</span>
          </div>
          <p className="text-[11px] text-[#686862]">
            Customize how you navigate through character milestones.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Mode toggle */}
          <div className="flex bg-[#F4F4F0] p-0.5 rounded-lg border border-[#E5E5DE]">
            <button
              onClick={() => onUpdatePreferences({ journeyMode: 'guided' })}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                preferences.journeyMode === 'guided'
                  ? 'bg-white text-[#16171A] shadow-2xs font-semibold'
                  : 'text-[#686862] hover:text-[#16171A]'
              }`}
            >
              Guided
            </button>
            <button
              onClick={() => onUpdatePreferences({ journeyMode: 'flexible' })}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                preferences.journeyMode === 'flexible'
                  ? 'bg-white text-[#16171A] shadow-2xs font-semibold'
                  : 'text-[#686862] hover:text-[#16171A]'
              }`}
            >
              Flexible
            </button>
          </div>

          {/* Skill toggle */}
          <div className="flex bg-[#F4F4F0] p-0.5 rounded-lg border border-[#E5E5DE]">
            <button
              onClick={() => onUpdatePreferences({ skillLevel: 'beginner' })}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                preferences.skillLevel === 'beginner'
                  ? 'bg-white text-[#16171A] shadow-2xs font-semibold'
                  : 'text-[#686862] hover:text-[#16171A]'
              }`}
            >
              Beginner
            </button>
            <button
              onClick={() => onUpdatePreferences({ skillLevel: 'experienced' })}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                preferences.skillLevel === 'experienced'
                  ? 'bg-white text-[#16171A] shadow-2xs font-semibold'
                  : 'text-[#686862] hover:text-[#16171A]'
              }`}
            >
              Experienced
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Milestone Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
        <div className="p-4 rounded-xl bg-white border border-[#E5E5DE]">
          <div className="text-2xl font-bold text-[#16171A] font-mono-code tabular-nums">
            {stats.charactersStarted}
          </div>
          <div className="text-[11px] font-semibold text-[#8A8A82] uppercase tracking-wider">
            Characters Started
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#E5E5DE]">
          <div className="text-2xl font-bold text-[#2752E7] font-mono-code tabular-nums">
            {stats.characterSheetsCompleted}
          </div>
          <div className="text-[11px] font-semibold text-[#8A8A82] uppercase tracking-wider">
            Sheets Completed
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#E5E5DE]">
          <div className="text-2xl font-bold text-[#16171A] font-mono-code tabular-nums">
            {stats.expressionsPracticed}
          </div>
          <div className="text-[11px] font-semibold text-[#8A8A82] uppercase tracking-wider">
            Expressions Drawn
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#E5E5DE]">
          <div className="text-2xl font-bold text-[#16171A] font-mono-code tabular-nums">
            {stats.storiesCreated}
          </div>
          <div className="text-[11px] font-semibold text-[#8A8A82] uppercase tracking-wider">
            Stories Created
          </div>
        </div>
      </div>

      {/* Confirm New Character Modal */}
      {confirmNewModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/60 backdrop-blur-xs"
        >
          <div className="w-full max-w-md bg-white rounded-2xl border border-[#E5E5DE] p-6 text-left shadow-xl space-y-4">
            <h3 className="font-display text-xl font-bold text-[#16171A]">
              Start a new character?
            </h3>
            <p className="text-xs sm:text-sm text-[#686862] leading-relaxed">
              You have an active character with{' '}
              <span className="font-semibold text-[#16171A]">
                {activeCharacter?.completedStages.length} stages completed
              </span>
              . Starting a new character will archive the current active session.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setConfirmNewModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-[#686862] hover:bg-[#F4F4F0] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setConfirmNewModal(false);
                  onStartNew();
                }}
                className="px-4 py-2 rounded-lg bg-[#16171A] hover:bg-[#2C2D32] text-white font-semibold text-xs shadow-2xs transition-colors"
              >
                Yes, Start Fresh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
