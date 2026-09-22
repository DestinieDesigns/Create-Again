import React, { useState } from 'react';
import {
  X,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  ChevronLeft,
} from 'lucide-react';
import { CHARACTER_SKILLS } from '../../data/characterSkills';
import { CharacterSkill } from '../../types/prompt';
import { VisualReferenceCard } from '../reference/VisualReferenceCard';

interface CharacterProgressionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSkillSession: (skill: CharacterSkill) => void;
}

export const CharacterProgressionModal: React.FC<CharacterProgressionModalProps> = ({
  isOpen,
  onClose,
  onStartSkillSession,
}) => {
  const [selectedSkill, setSelectedSkill] = useState<CharacterSkill>(CHARACTER_SKILLS[0]);
  const [showReference, setShowReference] = useState(false);
  const [isJourneyDrawerOpen, setIsJourneyDrawerOpen] = useState(false);
  const [completedSkillIds, setCompletedSkillIds] = useState<string[]>(['char-sk-01', 'char-sk-02']);

  if (!isOpen) return null;

  const currentIndex = CHARACTER_SKILLS.findIndex((s) => s.id === selectedSkill.id);

  const handleNextSkill = () => {
    if (currentIndex < CHARACTER_SKILLS.length - 1) {
      setSelectedSkill(CHARACTER_SKILLS[currentIndex + 1]);
      setShowReference(false);
    }
  };

  const handlePrevSkill = () => {
    if (currentIndex > 0) {
      setSelectedSkill(CHARACTER_SKILLS[currentIndex - 1]);
      setShowReference(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Character Creator Journey"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/65 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] paper-card subtle-shadow max-h-[92vh] flex flex-col overflow-hidden text-left">
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EFE9DF] text-[#E06D53] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                Mastery Journey
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
                CHARACTER CREATOR
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile / Tablet Journey Drawer Trigger */}
            <button
              onClick={() => setIsJourneyDrawerOpen(!isJourneyDrawerOpen)}
              className="md:hidden px-3 py-1.5 rounded-xl border border-[#D8CEBE] bg-[#FCFAF6] text-[#4A3F35] font-bold text-xs flex items-center gap-1.5 min-h-[40px]"
            >
              <Layers className="w-3.5 h-3.5 text-[#E06D53]" />
              <span>JOURNEY ({currentIndex + 1}/16)</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Split Content: Desktop Split / Tablet Collapsible / Mobile Main */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Left Column: Character Journey Navigation Track
              Visible on desktop (md:block). On mobile/tablet, acts as toggleable drawer overlay.
          */}
          <aside
            aria-label="Character Journey stages"
            className={`${
              isJourneyDrawerOpen
                ? 'absolute inset-0 z-20 bg-[#FAF7F2] p-4 flex flex-col'
                : 'hidden md:flex flex-col'
            } w-full md:w-72 lg:w-80 border-r border-[#E8E0D5] bg-[#FCFAF6] overflow-y-auto`}
          >
            <div className="p-3 border-b border-[#E8E0D5] flex items-center justify-between">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                YOUR CHARACTER JOURNEY
              </span>
              {isJourneyDrawerOpen && (
                <button
                  onClick={() => setIsJourneyDrawerOpen(false)}
                  className="text-xs font-bold text-[#E06D53] hover:underline"
                >
                  Done
                </button>
              )}
            </div>

            <div className="p-2 space-y-1 overflow-y-auto flex-1">
              {CHARACTER_SKILLS.slice(0, 16).map((skill, idx) => {
                const isSelected = selectedSkill.id === skill.id;
                const isCompleted = completedSkillIds.includes(skill.id);

                return (
                  <button
                    key={skill.id}
                    onClick={() => {
                      setSelectedSkill(skill);
                      setShowReference(false);
                      setIsJourneyDrawerOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between text-xs font-bold min-h-[40px] ${
                      isSelected
                        ? 'bg-[#2D2723] text-[#FAF7F2] shadow-xs'
                        : 'hover:bg-[#EFE9DF] text-[#55473B]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {isCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B6324] shrink-0" />
                      ) : isSelected ? (
                        <span className="text-[#E06D53] font-black shrink-0">→</span>
                      ) : (
                        <span className="w-3.5 text-center text-[#8A7D71] shrink-0">{idx + 1}</span>
                      )}
                      <span className="truncate uppercase tracking-tight">{skill.title}</span>
                    </div>
                    {isSelected && <ChevronRight className="w-3.5 h-3.5 text-[#FAF7F2]/70 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Column: Current Lesson Detail & Action View */}
          <main className="flex-1 p-5 sm:p-7 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Stage header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71]">
                  Stage {currentIndex + 1} of 16
                </span>
                <span className="text-xs font-mono-code font-bold text-[#E06D53]">
                  {selectedSkill.difficulty.toUpperCase()}
                </span>
              </div>

              {/* CURRENT LESSON TITLE */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans">
                {selectedSkill.title}
              </h3>

              <p className="text-sm sm:text-base text-[#55473B] font-medium mt-2 leading-relaxed">
                {selectedSkill.subtitle}
              </p>

              {/* Step instructions */}
              <div className="my-5 p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5]">
                <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-1">
                  SKETCHBOOK MISSION
                </div>
                <p className="text-sm sm:text-base font-extrabold text-[#2D2723]">
                  {selectedSkill.writtenExercise}
                </p>
              </div>

              {/* Warm Up / Tips */}
              {selectedSkill.warmUp && (
                <div className="mb-4 p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] text-xs text-[#55473B]">
                  <span className="font-bold text-[#2D2723] uppercase tracking-wider font-mono-code mr-1">
                    Warm-Up:
                  </span>
                  <span>{selectedSkill.warmUp}</span>
                </div>
              )}

              {/* Optional Challenge */}
              {selectedSkill.challenge && (
                <div className="mb-5 p-3 bg-[#FEF9E7] rounded-xl border border-[#FDE68A] text-xs text-[#78350F]">
                  <span className="font-bold uppercase tracking-wider font-mono-code mr-1">
                    Challenge:
                  </span>
                  <span>{selectedSkill.challenge}</span>
                </div>
              )}

              {/* Visual Reference toggle */}
              {selectedSkill.visualReference && (
                <div className="mb-5">
                  <button
                    onClick={() => setShowReference(!showReference)}
                    className="py-2.5 px-4 rounded-xl border border-[#D8CEBE] bg-[#FCFAF6] text-[#4A3F35] font-bold text-xs hover:bg-[#EFE9DF] transition-all flex items-center gap-2 min-h-[44px]"
                  >
                    <BookOpen className="w-4 h-4 text-[#E06D53]" />
                    <span>{showReference ? 'HIDE VISUAL REFERENCE' : 'SHOW VISUAL REFERENCE'}</span>
                  </button>

                  {showReference && (
                    <div className="mt-3">
                      <VisualReferenceCard
                        reference={selectedSkill.visualReference}
                        onClose={() => setShowReference(false)}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E8E0D5] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSkill}
                  disabled={currentIndex === 0}
                  className="p-2.5 rounded-xl border border-[#D8CEBE] disabled:opacity-30 hover:bg-[#EFE9DF] text-[#55473B] min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Previous lesson"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextSkill}
                  disabled={currentIndex === CHARACTER_SKILLS.length - 1}
                  className="p-2.5 rounded-xl border border-[#D8CEBE] disabled:opacity-30 hover:bg-[#EFE9DF] text-[#55473B] min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Next lesson"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  onStartSkillSession(selectedSkill);
                  onClose();
                }}
                className="py-3 px-6 rounded-2xl bg-[#2D2723] text-white font-extrabold text-xs sm:text-sm hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center gap-2 min-h-[48px]"
              >
                <span>DRAW THIS LESSON</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
