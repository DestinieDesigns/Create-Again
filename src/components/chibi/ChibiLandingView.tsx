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
    <div className="min-h-full py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-[#2D2723]">
      {/* Top Breadcrumb / Return */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E0D5]">
        <button
          onClick={onBackToHome}
          className="text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] flex items-center gap-1.5 transition-colors"
        >
          ← BACK TO CREATE AGAIN
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHowItWorks}
            className="text-xs font-bold text-[#8A7D71] hover:text-[#E06D53] flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-[#EFE9DF]"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </button>
          <button
            onClick={onOpenChallenges}
            className="text-xs font-bold text-[#E06D53] hover:text-[#C55339] flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg bg-[#FBEFEA] border border-[#F5D8CE]"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>10 CHALLENGES</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E06D53] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
          <span>Intentional Character Learning</span>
          <span aria-hidden="true" className="text-[#8A7D71]">·</span>
          <span className="text-[#8A7D71]">20 Guided Stages</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2D2723]">
          CHIBI CHARACTER JOURNEY
        </h1>
        <p className="text-lg sm:text-xl font-medium text-[#E06D53] italic">
          "Build a character one piece at a time."
        </p>
        <p className="text-sm sm:text-base text-[#6B6158] leading-relaxed">
          Start with an idea. Shape your character. Give them a personality. Then
          bring them into their own little world.
        </p>
      </div>

      {/* Visual Progression Path (Instructional Art Badges) */}
      <div className="mb-10 p-5 rounded-3xl border-2 border-[#2D2723] bg-[#FCFAF6] shadow-sm">
        <div className="text-center text-xs font-mono font-bold uppercase tracking-widest text-[#8A7D71] mb-4">
          Structured Step-by-Step Evolution
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 text-center">
          {[
            { step: 'IDEA', icon: '🌱', label: 'Seed Concept' },
            { step: 'SHAPE', icon: '⚪', label: 'Silhouette' },
            { step: 'FACE', icon: '👀', label: 'Expression' },
            { step: 'BODY', icon: '🧸', label: 'Proportion' },
            { step: 'STYLE', icon: '🧥', label: 'Garments' },
            { step: 'SOUL', icon: '✨', label: 'Personality' },
            { step: 'POSE', icon: '🧍', label: 'Gesture' },
            { step: 'STORY', icon: '📖', label: 'Model Sheet' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-2 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] relative group hover:border-[#E06D53] transition-colors"
            >
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="text-[11px] font-extrabold text-[#2D2723]">
                {item.step}
              </div>
              <div className="text-[9px] text-[#8A7D71] hidden sm:block">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {/* Card 1: Start Fresh */}
        <div className="p-6 rounded-3xl border-3 border-[#2D2723] bg-[#FAF7F2] paper-card subtle-shadow flex flex-col justify-between text-left">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E06D53] text-white flex items-center justify-center font-bold shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#2D2723]">
              START A NEW CHARACTER
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6158] leading-relaxed">
              Begin from zero with guided questions: select your archetype,
              sculpt their head, give them clothes, and watch your character
              come alive on paper.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={handleStartNewClick}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>BEGIN CHARACTER JOURNEY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Continue Active or View Saved */}
        {hasActiveSession ? (
          <div className="p-6 rounded-3xl border-3 border-[#2D2723] bg-[#FEF6E4] paper-card subtle-shadow flex flex-col justify-between text-left border-l-8 border-l-[#E06D53]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#E06D53]">
                  <span className="w-2 h-2 rounded-full bg-[#E06D53] animate-pulse" />
                  <span>IN PROGRESS</span>
                </div>
                <span className="text-xs text-[#8A7D71] font-mono">
                  {activeCharacter?.completedStages.length} of 20 stages done
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#2D2723]">
                {activeCharacter?.name
                  ? activeCharacter.name.toUpperCase()
                  : 'YOUR IN-PROGRESS CHARACTER'}
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6158]">
                Currently at:{' '}
                <span className="font-bold text-[#2D2723] capitalize">
                  {activeCharacter?.currentStage.replace('-', ' ')}
                </span>
                . Your decisions are safely saved locally on this device.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-2">
              <button
                onClick={onContinue}
                className="flex-1 py-3.5 px-6 rounded-2xl bg-[#2D2723] hover:bg-[#433A34] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>CONTINUE CHARACTER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenMyCharacters}
                className="py-3 px-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#2D2723] hover:bg-[#FAF7F2] text-[#2D2723] font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <FolderHeart className="w-4 h-4 text-[#E06D53]" />
                <span>SAVED ({savedCharacters.length})</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-3xl border-3 border-[#2D2723] bg-[#FAF7F2] paper-card subtle-shadow flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EFE9DF] text-[#4A3F35] flex items-center justify-center font-bold">
                <FolderHeart className="w-6 h-6 text-[#E06D53]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#2D2723]">
                MY CHARACTERS
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6158] leading-relaxed">
                {savedCharacters.length === 0
                  ? 'You haven’t completed a character yet. Once you complete your first character sheet, your creations live here.'
                  : `Browse ${savedCharacters.length} saved chibi character sheets, review their stories, or continue their adventures.`}
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenMyCharacters}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#FCFAF6] hover:bg-[#EFE9DF] border-2 border-[#2D2723] text-[#2D2723] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                <FolderHeart className="w-4 h-4 text-[#E06D53]" />
                <span>VIEW MY CHARACTERS ({savedCharacters.length})</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mode & Skill Level Preferences */}
      <div className="p-5 rounded-2xl bg-[#FCFAF6] border border-[#D8CEBE] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div className="space-y-1">
          <div className="text-xs font-bold text-[#2D2723] flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#E06D53]" />
            <span>JOURNEY PREFERENCES</span>
          </div>
          <p className="text-[11px] text-[#6B6158]">
            Customize how you navigate through character stages.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Mode toggle */}
          <div className="flex bg-[#EFE9DF] p-1 rounded-xl border border-[#D8CEBE]">
            <button
              onClick={() => onUpdatePreferences({ journeyMode: 'guided' })}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                preferences.journeyMode === 'guided'
                  ? 'bg-[#2D2723] text-white shadow-xs'
                  : 'text-[#6B6158] hover:text-[#2D2723]'
              }`}
            >
              Guided Mode
            </button>
            <button
              onClick={() => onUpdatePreferences({ journeyMode: 'flexible' })}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                preferences.journeyMode === 'flexible'
                  ? 'bg-[#2D2723] text-white shadow-xs'
                  : 'text-[#6B6158] hover:text-[#2D2723]'
              }`}
            >
              Flexible Mode
            </button>
          </div>

          {/* Skill toggle */}
          <div className="flex bg-[#EFE9DF] p-1 rounded-xl border border-[#D8CEBE]">
            <button
              onClick={() => onUpdatePreferences({ skillLevel: 'beginner' })}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                preferences.skillLevel === 'beginner'
                  ? 'bg-[#E06D53] text-white shadow-xs'
                  : 'text-[#6B6158] hover:text-[#2D2723]'
              }`}
            >
              Beginner
            </button>
            <button
              onClick={() => onUpdatePreferences({ skillLevel: 'experienced' })}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                preferences.skillLevel === 'experienced'
                  ? 'bg-[#E06D53] text-white shadow-xs'
                  : 'text-[#6B6158] hover:text-[#2D2723]'
              }`}
            >
              Experienced
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Milestone Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
        <div className="p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5]">
          <div className="text-2xl font-black text-[#2D2723]">
            {stats.charactersStarted}
          </div>
          <div className="text-[11px] font-bold text-[#8A7D71] uppercase">
            Characters Started
          </div>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5]">
          <div className="text-2xl font-black text-[#E06D53]">
            {stats.characterSheetsCompleted}
          </div>
          <div className="text-[11px] font-bold text-[#8A7D71] uppercase">
            Sheets Completed
          </div>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5]">
          <div className="text-2xl font-black text-[#2D2723]">
            {stats.expressionsPracticed}
          </div>
          <div className="text-[11px] font-bold text-[#8A7D71] uppercase">
            Expressions Drawn
          </div>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5]">
          <div className="text-2xl font-black text-[#2D2723]">
            {stats.storiesCreated}
          </div>
          <div className="text-[11px] font-bold text-[#8A7D71] uppercase">
            Stories Created
          </div>
        </div>
      </div>

      {/* Confirm New Character Modal */}
      {confirmNewModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-xs"
        >
          <div className="w-full max-w-md bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] p-6 text-left shadow-xl space-y-4">
            <h3 className="text-lg font-black text-[#2D2723]">
              START A NEW CHARACTER?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6158] leading-relaxed">
              You have an in-progress character with{' '}
              <span className="font-bold text-[#2D2723]">
                {activeCharacter?.completedStages.length} stages completed
              </span>
              . Starting a new character will archive the current active session.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setConfirmNewModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-[#6B6158] hover:bg-[#EFE9DF]"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  setConfirmNewModal(false);
                  onStartNew();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-extrabold text-xs shadow-sm"
              >
                YES, START FRESH
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
