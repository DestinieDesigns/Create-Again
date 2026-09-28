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
  Clock,
  Pencil,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  RotateCw,
  Headphones,
} from 'lucide-react';
import { Mode1Session, SavedCreation } from '../../types/session';
import { ChibiCharacter } from '../../types/chibi';
import { PRIMARY_HOME_ACTIONS } from '../../types/homeAction';

interface SimpleSketchbookHomeProps {
  onStartWhatComesNext: (duration?: number | null) => void;
  onOpenChaos: () => void;
  onOpenChibiJourney: () => void;
  onOpenWarmUp: () => void;
  onOpenChallenges: () => void;
  onOpenPathways: () => void;
  onOpenDontKnow: () => void;
  onSurpriseMe: () => void;
  onOpenListenDraw?: () => void;
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
  savedCreations?: SavedCreation[];
  stats?: any;
  enableFaithContent?: boolean;
}

/**
 * CREATE AGAIN — HOME SCREEN REFINEMENT
 *
 * Guiding Principle:
 * "The Home screen should help the user decide what to create, not explain the entire application."
 * "What do you want to do?"
 *
 * Primary Choices:
 * 1. Draw Something ("Give me something to draw.")
 * 2. Practice ("Get your hand moving and build a skill.")
 * 3. Listen & Draw ("Look when you need the reference. Listen when you're creating.")
 * 4. Surprise Me ("Pick something for me.")
 * 5. I Have No Idea ("Help me figure out what to draw.")
 */
export const SimpleSketchbookHome: React.FC<SimpleSketchbookHomeProps> = ({
  onStartWhatComesNext,
  onOpenChaos,
  onOpenChibiJourney,
  onOpenWarmUp,
  onOpenChallenges,
  onOpenPathways,
  onOpenDontKnow,
  onSurpriseMe,
  onOpenListenDraw,
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
  savedCreations = [],
  stats,
  enableFaithContent = false,
}) => {
  const [isDrawModalOpen, setIsDrawModalOpen] = useState(false);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);
  const [isMoreWaysOpen, setIsMoreWaysOpen] = useState(false);

  // Section 6: Continue condition
  const hasUnfinishedSession = activeSession && !activeSession.completed;
  const hasUnfinishedChibi =
    activeChibiCharacter &&
    activeChibiCharacter.completedStages &&
    activeChibiCharacter.completedStages.length > 0 &&
    activeChibiCharacter.completedStages.length < 20;

  // Section 7: Recent creations condition
  const hasRecentCreations = savedCreations && savedCreations.length > 0;
  const recentItems = hasRecentCreations ? savedCreations.slice(0, 3) : [];

  return (
    <div className="max-w-xl mx-auto px-4 py-6 sm:py-10 text-center space-y-8 sm:space-y-10 animate-in fade-in duration-150">
      {/* =========================================================================
          1. HEADER (Section 3)
          Compact. Not a giant hero. Friendly sketchbook companion.
          ========================================================================= */}
      <header className="space-y-2 pt-1 sm:pt-2">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase tracking-widest text-[#686862]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16171A]" aria-hidden="true" />
          <span>CREATE AGAIN</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#16171A] tracking-tight leading-tight">
          Start somewhere. Add something.<br />
          <span className="italic font-normal text-[#2752E7]">
            See what happens.
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-[#686862] max-w-sm mx-auto leading-relaxed">
          A creative companion for your sketchbook, paper, or drawing tablet.
        </p>
      </header>

      {/* =========================================================================
          2. PRIMARY ACTIONS: WHAT DO YOU WANT TO DO? (Sections 2, 4 & 5)
          One Screen = One Main Decision. 4 prominent accessible choices.
          ========================================================================= */}
      <section aria-labelledby="primary-actions-heading" className="space-y-3">
        <h2
          id="primary-actions-heading"
          className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]"
        >
          WHAT DO YOU WANT TO DO?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
          {/* Action 1: DRAW SOMETHING */}
          <button
            onClick={() => setIsDrawModalOpen(true)}
            className="p-4 sm:p-5 rounded-2xl bg-[#16171A] text-white hover:bg-[#2C2D32] transition-colors shadow-2xs flex flex-col justify-between min-h-[96px] sm:min-h-[104px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2752E7] active:scale-[0.99]"
            aria-label="Draw Something: Give me something to draw."
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-display text-base sm:text-lg font-bold tracking-tight">
                Draw Something
              </span>
              <ArrowRight className="w-4 h-4 text-[#A8C5FF] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-xs text-[#C4C4BC] mt-1.5 leading-snug">
              Give me something to draw.
            </p>
          </button>

          {/* Action 2: PRACTICE */}
          <button
            onClick={() => setIsPracticeModalOpen(true)}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors shadow-2xs flex flex-col justify-between min-h-[96px] sm:min-h-[104px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2752E7] active:scale-[0.99]"
            aria-label="Practice: Get your hand moving and build a skill."
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-display text-base sm:text-lg font-bold text-[#16171A] tracking-tight">
                Practice
              </span>
              <Flame className="w-4 h-4 text-[#E06D53]" />
            </div>
            <p className="text-xs text-[#686862] mt-1.5 leading-snug">
              Get your hand moving and build a skill.
            </p>
          </button>

          {/* Action 3: LISTEN & DRAW (Hands-Free First-Class Mode) */}
          <button
            onClick={onOpenListenDraw}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#2752E7]/40 hover:border-[#2752E7] hover:bg-[#F8FAFF] transition-colors shadow-2xs flex flex-col justify-between min-h-[96px] sm:min-h-[104px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2752E7] active:scale-[0.99] sm:col-span-2"
            aria-label="Listen & Draw: Look when you need the reference. Listen when you're creating."
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-display text-base sm:text-lg font-bold text-[#16171A] tracking-tight">
                  Listen & Draw
                </span>
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EFF3FF] text-[#2752E7]">
                  Hands-Free
                </span>
              </div>
              <Headphones className="w-4 h-4 text-[#2752E7] group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-xs text-[#686862] mt-1.5 leading-snug">
              Look when you need the reference. Listen when you're creating.
            </p>
          </button>

          {/* Action 4: SURPRISE ME */}
          <button
            onClick={onSurpriseMe}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#2752E7] hover:bg-[#F8FAFF] transition-colors shadow-2xs flex flex-col justify-between min-h-[96px] sm:min-h-[104px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2752E7] active:scale-[0.99]"
            aria-label="Surprise Me: Pick something for me."
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-display text-base sm:text-lg font-bold text-[#16171A] tracking-tight">
                Surprise Me
              </span>
              <Dices className="w-4 h-4 text-[#2752E7] group-hover:rotate-45 transition-transform" />
            </div>
            <p className="text-xs text-[#686862] mt-1.5 leading-snug">
              Pick something for me.
            </p>
          </button>

          {/* Action 5: I HAVE NO IDEA */}
          <button
            onClick={onOpenDontKnow}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors shadow-2xs flex flex-col justify-between min-h-[96px] sm:min-h-[104px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2752E7] active:scale-[0.99]"
            aria-label="I Have No Idea: Help me figure out what to draw."
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-display text-base sm:text-lg font-bold text-[#16171A] tracking-tight">
                I Have No Idea
              </span>
              <HelpCircle className="w-4 h-4 text-[#686862]" />
            </div>
            <p className="text-xs text-[#686862] mt-1.5 leading-snug">
              Help me figure out what to draw.
            </p>
          </button>
        </div>
      </section>

      {/* =========================================================================
          3. CONTINUE SECTION (Section 6 & 22)
          ONLY shown if there is actually an unfinished session.
          ========================================================================= */}
      {(hasUnfinishedSession || hasUnfinishedChibi) && (
        <section aria-labelledby="continue-heading" className="space-y-2.5 pt-1 text-left">
          <h2
            id="continue-heading"
            className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82] text-center"
          >
            CONTINUE
          </h2>

          <div className="space-y-2">
            {hasUnfinishedSession && onContinueSession && (
              <button
                onClick={onContinueSession}
                className="w-full p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#FAF9F5] transition-colors flex items-center justify-between shadow-2xs group focus-visible:ring-2 focus-visible:ring-[#2752E7]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF3FF] text-[#2752E7] flex items-center justify-center shrink-0">
                    <Pencil className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#16171A]">
                      What Comes Next?
                    </div>
                    <div className="text-xs text-[#686862]">
                      You were on prompt {(activeSession.promptHistory?.length || 0) + 1}.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#16171A] group-hover:text-[#2752E7]">
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            )}

            {hasUnfinishedChibi && onContinueChibi && (
              <button
                onClick={onContinueChibi}
                className="w-full p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#2752E7] hover:bg-[#F8FAFF] transition-colors flex items-center justify-between shadow-2xs group focus-visible:ring-2 focus-visible:ring-[#2752E7]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] text-[#2752E7] flex items-center justify-center shrink-0">
                    <Shapes className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#16171A]">
                      {activeChibiCharacter?.name || 'Chibi Character'}
                    </div>
                    <div className="text-xs text-[#686862]">
                      You were working on stage {activeChibiCharacter.completedStages.length + 1} of 20.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2752E7]">
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          4. FEATURED ACTIVITY: WHAT COMES NEXT? (Section 10)
          Small, friendly invitation. Not an advertisement.
          ========================================================================= */}
      <section className="rounded-2xl border border-[#E5E5DE] bg-white p-4 sm:p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div className="space-y-0.5">
          <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#2752E7]">
            TRY THIS
          </div>
          <div className="font-display text-base font-bold text-[#16171A]">
            What Comes Next?
          </div>
          <p className="text-xs text-[#686862]">
            Don't know what you're drawing? Good. Just make the first mark.
          </p>
        </div>

        <button
          onClick={() => onStartWhatComesNext(300)}
          className="self-start sm:self-center py-2 px-4 rounded-xl bg-[#16171A] text-white text-xs font-semibold hover:bg-[#2C2D32] transition-colors shadow-2xs flex items-center gap-1.5 shrink-0"
        >
          <span>Start Drawing</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* =========================================================================
          5. QUICK TIME SHORTCUTS (Section 11)
          Optional duration shortcuts into What Comes Next.
          ========================================================================= */}
      <section aria-labelledby="quick-start-heading" className="space-y-2.5">
        <h2
          id="quick-start-heading"
          className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]"
        >
          QUICK START
        </h2>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { label: '2 MIN', duration: 120 },
            { label: '5 MIN', duration: 300 },
            { label: '10 MIN', duration: 600 },
            { label: 'UNTIMED', duration: null },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onStartWhatComesNext(item.duration)}
              className="py-2 px-3.5 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] hover:bg-[#F4F4F0] text-xs font-mono-code font-bold text-[#16171A] transition-colors shadow-2xs min-h-[38px] active:scale-98"
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. RECENT CREATIONS (Section 7 & 22)
          ONLY shown if saved creations exist. Does not turn Home into a gallery.
          ========================================================================= */}
      {hasRecentCreations && (
        <section aria-labelledby="recent-heading" className="space-y-2.5 text-left border-t border-[#E5E5DE]/80 pt-6">
          <div className="flex items-center justify-between">
            <h2
              id="recent-heading"
              className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A8A82]"
            >
              RECENT
            </h2>
            <button
              onClick={onOpenCollection}
              className="text-xs font-semibold text-[#16171A] hover:text-[#2752E7] transition-colors flex items-center gap-1"
            >
              <span>View collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {recentItems.map((item) => (
              <div
                key={item.id}
                onClick={onOpenCollection}
                className="p-3 rounded-xl border border-[#E5E5DE] bg-white hover:bg-[#FAF9F5] transition-colors cursor-pointer flex items-center gap-2.5"
              >
                {item.photoDataUrl ? (
                  <img
                    src={item.photoDataUrl}
                    alt={item.title}
                    className="w-10 h-10 rounded-lg object-cover border border-[#E5E5DE] shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-[#F4F4F0] flex items-center justify-center text-[#8A8A82] shrink-0">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-[#16171A] truncate">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-[#8A8A82]">
                    {item.date || 'Recent sketch'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          7. MORE WAYS TO CREATE (Section 8)
          Compact secondary access to all rich systems without cluttering Home.
          ========================================================================= */}
      <section className="pt-2 border-t border-[#E5E5DE]/80">
        <button
          onClick={() => setIsMoreWaysOpen(!isMoreWaysOpen)}
          className="text-xs font-semibold text-[#686862] hover:text-[#16171A] transition-colors py-2 px-3 rounded-lg hover:bg-[#F4F4F0] inline-flex items-center gap-1.5"
          aria-expanded={isMoreWaysOpen}
        >
          <span>More Ways to Create</span>
          {isMoreWaysOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {isMoreWaysOpen && (
          <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E5E5DE] shadow-xs text-left grid grid-cols-1 sm:grid-cols-2 gap-2 animate-in fade-in duration-100">
            {/* Chibi Character Atelier (Section 9) */}
            <button
              onClick={onOpenChibiJourney}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Shapes className="w-4 h-4 text-[#2752E7]" />
                <span>Chibi Atelier</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Build a character one piece at a time.
              </div>
            </button>

            {/* Listen & Draw */}
            <button
              onClick={() => {
                setIsMoreWaysOpen(false);
                if (onOpenListenDraw) onOpenListenDraw();
              }}
              className="p-3 rounded-xl border border-[#2752E7]/40 bg-[#F8FAFF] hover:bg-[#EFF3FF] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Headphones className="w-4 h-4 text-[#2752E7]" />
                <span>Listen & Draw (Hands-Free)</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Look when you need reference, listen when creating.
              </div>
            </button>

            {/* Creative Chaos */}
            <button
              onClick={onOpenChaos}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Dices className="w-4 h-4 text-[#E06D53]" />
                <span>Creative Chaos</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Surprising mashups of character, setting, and mood.
              </div>
            </button>

            {/* Level Up Skill Challenges */}
            <button
              onClick={onOpenChallenges}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-[#2752E7]" />
                <span>Level Up · Challenges</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Targeted exercises with concept diagrams.
              </div>
            </button>

            {/* Creative Paths */}
            <button
              onClick={onOpenPathways}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#16171A]" />
                <span>Creative Paths</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Thematic journeys like Character, World, or Fun.
              </div>
            </button>

            {/* 500 Master Prompt Library */}
            <button
              onClick={onOpenMasterSheet}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#2752E7]" />
                <span>500 Prompt Library</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Master prompt collection with visual references.
              </div>
            </button>

            {/* Part Reference Library */}
            <button
              onClick={onOpenPartLibrary}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Shapes className="w-4 h-4 text-[#2752E7]" />
                <span>Part Reference Library</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                197+ isolated anatomical parts.
              </div>
            </button>

            {/* Creative Themes */}
            <button
              onClick={onOpenThemes}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E06D53]" />
                <span>Creative Themes</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Nature, Sci-Fi, Cozy, Fantasy, etc.
              </div>
            </button>

            {/* My Sketchbook Archive */}
            <button
              onClick={onOpenCollection}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <FolderHeart className="w-4 h-4 text-[#2752E7]" />
                <span>My Sketchbook</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Saved artwork logs and reflections.
              </div>
            </button>

            {/* Practice History */}
            <button
              onClick={onOpenProgress}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#686862]" />
                <span>Practice History</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Review your drawing activity.
              </div>
            </button>

            {/* Remix */}
            <button
              onClick={() => {
                if (onRemix) onRemix();
                else onOpenChaos();
              }}
              className="p-3 rounded-xl border border-[#E5E5DE] hover:bg-[#FAF9F5] transition-colors text-left"
            >
              <div className="font-semibold text-xs text-[#16171A] flex items-center gap-1.5">
                <RotateCw className="w-4 h-4 text-[#16171A]" />
                <span>Remix</span>
              </div>
              <div className="text-[11px] text-[#686862] mt-0.5">
                Twist a familiar drawing with a fresh constraint.
              </div>
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          8. FAITH LAYER (Section 12 & 22)
          ONLY shown if enabled in user settings. Subtle, quiet, non-intrusive.
          ========================================================================= */}
      {enableFaithContent && (
        <section className="pt-2 text-center text-xs text-[#8A8A82] italic">
          <p>
            "And whatsoever ye do, do it heartily, as to the Lord, and not unto men."
          </p>
          <span className="text-[10px] font-mono-code not-italic text-[#A0A096]">
            — Colossians 3:23 KJV
          </span>
        </section>
      )}

      {/* =========================================================================
          DRAW SOMETHING PICKER MODAL (Section 4 & 6)
          ========================================================================= */}
      {isDrawModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Draw Something choices"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-[#E5E5DE] shadow-xl text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3">
              <span className="font-display font-bold text-lg text-[#16171A]">
                Draw Something
              </span>
              <button
                onClick={() => setIsDrawModalOpen(false)}
                className="text-xs font-semibold text-[#8A8A82] hover:text-[#16171A] p-1"
                aria-label="Close"
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

              {/* Option 2: Listen & Draw (Hands-Free) */}
              <button
                onClick={() => {
                  setIsDrawModalOpen(false);
                  if (onOpenListenDraw) onOpenListenDraw();
                }}
                className="w-full p-4 rounded-xl bg-white border border-[#2752E7]/40 hover:border-[#2752E7] hover:bg-[#F8FAFF] transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="font-display font-bold text-sm text-[#16171A] flex items-center gap-2">
                    <span>Listen & Draw</span>
                    <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#EFF3FF] text-[#2752E7]">
                      Hands-Free
                    </span>
                  </div>
                  <div className="text-xs text-[#686862] mt-0.5">
                    Look when you need the reference. Listen when you're creating.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#2752E7] group-hover:translate-x-0.5 transition-transform" />
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

              {/* Option 3: Creative Chaos */}
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

              {/* Option 4: Remix */}
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

      {/* =========================================================================
          PRACTICE PICKER MODAL (Section 4 & 6)
          ========================================================================= */}
      {isPracticeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Practice choices"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-[#E5E5DE] shadow-xl text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-3">
              <span className="font-display font-bold text-lg text-[#16171A]">
                Practice
              </span>
              <button
                onClick={() => setIsPracticeModalOpen(false)}
                className="text-xs font-semibold text-[#8A8A82] hover:text-[#16171A] p-1"
                aria-label="Close"
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
    </div>
  );
};
