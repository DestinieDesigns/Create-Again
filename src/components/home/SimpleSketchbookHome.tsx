import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Flame,
  HelpCircle,
  Dices,
  BookOpen,
  Shapes,
  FolderHeart,
  Compass,
  Trophy,
  Layers,
  Clock,
  Pencil,
  ChevronRight,
  RefreshCw,
} from 'lucide-react';
import { Mode1Session } from '../../types/session';
import { ChibiCharacter } from '../../types/chibi';

interface SimpleSketchbookHomeProps {
  onStartWhatComesNext: (duration?: number | null) => void;
  onOpenChaos: () => void;
  onOpenChibiJourney: () => void;
  onOpenWarmUp: () => void;
  onOpenChallenges: () => void;
  onOpenPathways: () => void;
  onOpenDontKnow: () => void;
  onSurpriseMe: () => void;
  onRemix?: () => void;
  onContinueSession?: () => void;
  onContinueChibi?: () => void;
  onOpenMasterSheet: () => void;
  onOpenPartLibrary: () => void;
  onOpenThemes: () => void;
  onOpenCollection: () => void;
  onOpenProgress: () => void;
  onOpenFaith?: () => void;
  activeSession: Mode1Session | null;
  activeChibiCharacter?: ChibiCharacter | null;
  stats?: any;
}

export const SimpleSketchbookHome: React.FC<SimpleSketchbookHomeProps> = ({
  onStartWhatComesNext,
  onOpenChaos,
  onOpenChibiJourney,
  onOpenWarmUp,
  onOpenChallenges,
  onOpenPathways,
  onOpenDontKnow,
  onSurpriseMe,
  onRemix,
  onContinueSession,
  onContinueChibi,
  onOpenMasterSheet,
  onOpenPartLibrary,
  onOpenThemes,
  onOpenCollection,
  onOpenProgress,
  onOpenFaith,
  activeSession,
  activeChibiCharacter,
  stats,
}) => {
  const [isDrawModalOpen, setIsDrawModalOpen] = useState(false);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);
  const [isMoreWaysOpen, setIsMoreWaysOpen] = useState(false);

  const hasUnfinishedSession = activeSession && !activeSession.completed;
  const hasUnfinishedChibi =
    activeChibiCharacter &&
    activeChibiCharacter.completedStages &&
    activeChibiCharacter.completedStages.length > 0 &&
    activeChibiCharacter.completedStages.length < 20;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 md:py-16 text-center space-y-12 animate-in fade-in duration-200">
      {/* 1. CALM SKETCHBOOK COVER / TITLE */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#686862]">
          <span>SKETCHBOOK COMPANION</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#16171A] tracking-tight leading-[1.12]">
          Start somewhere.<br />
          Add something.<br />
          <span className="italic font-normal text-[#2752E7]">
            See what happens.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#686862] max-w-md mx-auto leading-relaxed">
          A creative companion for your sketchbook, paper, or tablet.
        </p>
      </section>

      {/* 2. PRIMARY DECISION: WHAT DO YOU WANT TO DO? (Section 2 & 5) */}
      <section className="space-y-4 pt-2">
        <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]">
          WHAT DO YOU WANT TO DO?
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {/* Action 1: DRAW SOMETHING */}
          <button
            onClick={() => setIsDrawModalOpen(true)}
            className="p-5 rounded-2xl bg-[#16171A] text-white hover:bg-[#2C2D32] transition-colors shadow-2xs text-left flex flex-col justify-between min-h-[105px] group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono-code font-semibold uppercase tracking-wider text-[#A8C5FF]">
                CREATE
              </span>
              <ArrowRight className="w-4 h-4 text-[#A8C5FF] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-display text-lg sm:text-xl font-bold tracking-tight">
              Draw Something
            </div>
          </button>

          {/* Action 2: PRACTICE */}
          <button
            onClick={() => setIsPracticeModalOpen(true)}
            className="p-5 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors shadow-2xs text-left flex flex-col justify-between min-h-[105px] group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono-code font-semibold uppercase tracking-wider text-[#686862]">
                SKILLS & DRILLS
              </span>
              <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-display text-lg sm:text-xl font-bold text-[#16171A] tracking-tight">
              Practice
            </div>
          </button>

          {/* Action 3: SURPRISE ME */}
          <button
            onClick={onSurpriseMe}
            className="p-5 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#2752E7] hover:bg-[#F8FAFF] transition-colors shadow-2xs text-left flex flex-col justify-between min-h-[105px] group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono-code font-semibold uppercase tracking-wider text-[#2752E7]">
                ONE CLICK
              </span>
              <Dices className="w-4 h-4 text-[#2752E7] group-hover:rotate-45 transition-transform" />
            </div>
            <div className="font-display text-lg sm:text-xl font-bold text-[#16171A] tracking-tight">
              Surprise Me
            </div>
          </button>

          {/* Action 4: I HAVE NO IDEA */}
          <button
            onClick={onOpenDontKnow}
            className="p-5 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors shadow-2xs text-left flex flex-col justify-between min-h-[105px] group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono-code font-semibold uppercase tracking-wider text-[#686862]">
                LOW PRESSURE
              </span>
              <HelpCircle className="w-4 h-4 text-[#686862]" />
            </div>
            <div className="font-display text-lg sm:text-xl font-bold text-[#16171A] tracking-tight">
              I Have No Idea
            </div>
          </button>
        </div>
      </section>

      {/* 3. CONTINUE (Only if active creation exists) */}
      {(hasUnfinishedSession || hasUnfinishedChibi) && (
        <section className="space-y-3 pt-2">
          <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]">
            CONTINUE
          </div>

          <div className="max-w-lg mx-auto space-y-2">
            {hasUnfinishedSession && onContinueSession && (
              <button
                onClick={onContinueSession}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center">
                    <Pencil className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#16171A]">
                      Continue What Comes Next
                    </div>
                    <div className="text-xs text-[#686862]">
                      Step {(activeSession.promptHistory?.length || 0) + 1} waiting on your desk
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}

            {hasUnfinishedChibi && onContinueChibi && (
              <button
                onClick={onContinueChibi}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#2752E7] hover:bg-[#F8FAFF] transition-colors flex items-center justify-between text-left shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] text-[#2752E7] flex items-center justify-center">
                    <Shapes className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#16171A]">
                      Continue {activeChibiCharacter?.name || 'Chibi Character'}
                    </div>
                    <div className="text-xs text-[#686862]">
                      Stage {activeChibiCharacter.completedStages.length + 1} of 20
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#2752E7] group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        </section>
      )}

      {/* 4. QUICK START (Section 5) */}
      <section className="space-y-3 pt-2">
        <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]">
          QUICK START
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { label: '2 MIN', duration: 120 },
            { label: '5 MIN', duration: 300 },
            { label: '10 MIN', duration: 600 },
            { label: 'NO TIMER', duration: null },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onStartWhatComesNext(item.duration)}
              className="py-2.5 px-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#F4F4F0] text-xs font-mono-code font-bold text-[#16171A] transition-colors shadow-2xs min-h-[42px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* 5. MORE WAYS TO CREATE (Secondary Navigation without clutter) */}
      <section className="pt-6 border-t border-[#E5E5DE]/80">
        <button
          onClick={() => setIsMoreWaysOpen(true)}
          className="text-xs font-semibold text-[#686862] hover:text-[#16171A] transition-colors py-2 px-3 rounded-lg hover:bg-[#F4F4F0] inline-flex items-center gap-1.5"
        >
          <span>More Ways to Create</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {stats && stats.totalCreations > 0 && (
          <p className="text-[11px] text-[#8A8A82] mt-2">
            You've practiced {stats.totalCreations} times in your sketchbook.
          </p>
        )}
      </section>

      {/* --- DRAW SOMETHING MODAL (Section 6) --- */}
      {isDrawModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-[#E5E5DE] shadow-xl text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3">
              <span className="font-display font-bold text-lg text-[#16171A]">
                Draw Something
              </span>
              <button
                onClick={() => setIsDrawModalOpen(false)}
                className="text-xs font-semibold text-[#8A8A82] hover:text-[#16171A]"
              >
                Close
              </button>
            </div>

            <div className="space-y-2">
              {/* Option 1: What Comes Next? (Signature) */}
              <button
                onClick={() => {
                  setIsDrawModalOpen(false);
                  onStartWhatComesNext(300);
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A] flex items-center gap-2">
                    <span>What Comes Next?</span>
                    <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#EFF3FF] text-[#2752E7]">
                      Signature
                    </span>
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Draw one mark at a time without knowing what comes next.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Option 2: Creative Chaos */}
              <button
                onClick={() => {
                  setIsDrawModalOpen(false);
                  onOpenChaos();
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A]">
                    Creative Chaos
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Surprising mashups of character, setting, object, and mood.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Option 3: Chibi Atelier */}
              <button
                onClick={() => {
                  setIsDrawModalOpen(false);
                  onOpenChibiJourney();
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A]">
                    Chibi Character Atelier
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Build a character piece by piece with isolated visual references.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Option 4: Remix (Section 6) */}
              <button
                onClick={() => {
                  setIsDrawModalOpen(false);
                  if (onRemix) onRemix();
                  else onOpenChaos();
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A]">
                    Remix
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Take a familiar drawing or subject and twist it with a fresh constraint.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- PRACTICE MODAL (Section 6) --- */}
      {isPracticeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-[#E5E5DE] shadow-xl text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3">
              <span className="font-display font-bold text-lg text-[#16171A]">
                Practice
              </span>
              <button
                onClick={() => setIsPracticeModalOpen(false)}
                className="text-xs font-semibold text-[#8A8A82] hover:text-[#16171A]"
              >
                Close
              </button>
            </div>

            <div className="space-y-2">
              {/* Warm Up */}
              <button
                onClick={() => {
                  setIsPracticeModalOpen(false);
                  onOpenWarmUp();
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A] flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#E06D53]" />
                    <span>Hand Warm-Up</span>
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Quick 2-minute physical loosening exercises for hand and wrist.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Level Up / Challenges */}
              <button
                onClick={() => {
                  setIsPracticeModalOpen(false);
                  onOpenChallenges();
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A] flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#2752E7]" />
                    <span>Level Up · Skill Challenges</span>
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Targeted drawing exercises with visual concept diagrams.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Creative Paths */}
              <button
                onClick={() => {
                  setIsPracticeModalOpen(false);
                  onOpenPathways();
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A] flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#16171A]" />
                    <span>Creative Paths</span>
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Follow thematic journeys like Character, Worldbuilding, or Pure Fun.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#686862] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MORE WAYS TO CREATE MODAL (Section 5 & 6) --- */}
      {isMoreWaysOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E5DE] shadow-xl text-left space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3">
              <span className="font-display font-bold text-lg text-[#16171A]">
                More Ways to Create
              </span>
              <button
                onClick={() => setIsMoreWaysOpen(false)}
                className="text-xs font-semibold text-[#8A8A82] hover:text-[#16171A]"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* 500 Master Prompt Library */}
              <button
                onClick={() => {
                  setIsMoreWaysOpen(false);
                  onOpenMasterSheet();
                }}
                className="p-3.5 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left group"
              >
                <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#2752E7]" />
                  <span>500 Prompt Library</span>
                </div>
                <div className="text-[11px] text-[#686862] mt-1">
                  Master catalog with visual references.
                </div>
              </button>

              {/* Part Reference Library */}
              <button
                onClick={() => {
                  setIsMoreWaysOpen(false);
                  onOpenPartLibrary();
                }}
                className="p-3.5 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left group"
              >
                <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                  <Shapes className="w-4 h-4 text-[#2752E7]" />
                  <span>Part Reference Library</span>
                </div>
                <div className="text-[11px] text-[#686862] mt-1">
                  197+ isolated anatomical parts.
                </div>
              </button>

              {/* Creative Themes */}
              <button
                onClick={() => {
                  setIsMoreWaysOpen(false);
                  onOpenThemes();
                }}
                className="p-3.5 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left group"
              >
                <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#E06D53]" />
                  <span>Creative Themes</span>
                </div>
                <div className="text-[11px] text-[#686862] mt-1">
                  Nature, Sci-Fi, Cozy, Fantasy, etc.
                </div>
              </button>

              {/* My Sketchbook Collection */}
              <button
                onClick={() => {
                  setIsMoreWaysOpen(false);
                  onOpenCollection();
                }}
                className="p-3.5 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left group"
              >
                <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                  <FolderHeart className="w-4 h-4 text-[#2752E7]" />
                  <span>My Sketchbook</span>
                </div>
                <div className="text-[11px] text-[#686862] mt-1">
                  Saved notes, stages & reflections.
                </div>
              </button>

              {/* Practice History */}
              <button
                onClick={() => {
                  setIsMoreWaysOpen(false);
                  onOpenProgress();
                }}
                className="p-3.5 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left group"
              >
                <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#686862]" />
                  <span>Practice History</span>
                </div>
                <div className="text-[11px] text-[#686862] mt-1">
                  See how often you put pen to paper.
                </div>
              </button>

              {/* Faith Content (Optional / Configurable) */}
              {onOpenFaith && (
                <button
                  onClick={() => {
                    setIsMoreWaysOpen(false);
                    onOpenFaith();
                  }}
                  className="p-3.5 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left group"
                >
                  <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#B25E00]" />
                    <span>Faith & Reflection</span>
                  </div>
                  <div className="text-[11px] text-[#686862] mt-1">
                    Spiritual encouragement for creatives.
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
