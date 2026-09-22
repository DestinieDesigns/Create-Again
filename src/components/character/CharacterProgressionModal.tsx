import React, { useState } from 'react';
import {
  X,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Lock,
  ChevronRight,
  Flame,
  Lightbulb,
} from 'lucide-react';
import { CHARACTER_SKILLS, getCharacterSkillById } from '../../data/characterSkills';
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

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All 22 Skills' },
    { id: 'anatomy', label: 'Anatomy & Shapes' },
    { id: 'body', label: 'Body & Proportions' },
    { id: 'costume', label: 'Hair & Costume' },
    { id: 'action', label: 'Poses & Balance' },
    { id: 'expression', label: 'Expression & Mood' },
    { id: 'composition', label: 'Sheets & Scenes' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? CHARACTER_SKILLS
      : CHARACTER_SKILLS.filter((s) => s.category === activeCategory);

  const handleSelectSkill = (skill: CharacterSkill) => {
    setSelectedSkill(skill);
    setShowReference(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#2D2723]/65 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="character-progression-title"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] paper-card subtle-shadow max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] text-[#E06D53] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
                Pathway Progression Track
              </div>
              <h2 id="character-progression-title" className="text-xl sm:text-2xl font-extrabold text-[#2D2723]">
                Character Creator Mastery
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors"
            aria-label="Close Character Creator progression"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pill Filters */}
        <div className="px-5 sm:px-6 py-2.5 border-b border-[#EAE2D7] bg-[#F5EFE6] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#2D2723] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#EFE9DF] text-[#6E6054] hover:bg-[#E5DDCF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Split Body: Sidebar Skills List + Detail Pane */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left: Scrollable Skills List */}
          <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-[#E8E0D5] overflow-y-auto max-h-56 md:max-h-none p-3 space-y-1.5 bg-[#FAF7F2]/50">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => handleSelectSkill(skill)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723] shadow-xs'
                      : 'bg-[#FCFAF6] hover:bg-[#F2EDE4] text-[#4A3F35] border-[#E8E0D5]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs font-mono-code font-bold px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-[#433B35] text-[#FAF7F2]' : 'bg-[#EFE9DF] text-[#7A6D63]'
                      }`}
                    >
                      {skill.skillNumber}
                    </span>
                    <div>
                      <div className="font-extrabold text-xs sm:text-sm line-clamp-1">
                        {skill.title}
                      </div>
                      <div
                        className={`text-[10px] line-clamp-1 ${
                          isSelected ? 'text-[#D5C7B7]' : 'text-[#8A7D71]'
                        }`}
                      >
                        {skill.subtitle}
                      </div>
                    </div>
                  </div>

                  {skill.visualReference && (
                    <BookOpen
                      className={`w-3.5 h-3.5 shrink-0 ml-1 ${
                        isSelected ? 'text-[#E06D53]' : 'text-[#A39689]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Selected Skill Detail Pane */}
          <div className="flex-1 p-5 sm:p-7 overflow-y-auto bg-[#FCFAF6]">
            <div className="max-w-xl mx-auto space-y-5">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded-full bg-[#EFE9DF] text-[#786A5E]">
                    SKILL {selectedSkill.skillNumber} OF 22
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A06C53] font-mono-code">
                    {selectedSkill.difficulty}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723]">
                  {selectedSkill.title}
                </h3>
                <p className="text-sm font-handwriting text-xl text-[#6B5E53] font-bold">
                  {selectedSkill.subtitle}
                </p>
              </div>

              {/* Written Exercise Box */}
              <div className="rounded-2xl border-2 border-[#2D2723] bg-[#FAF7F2] p-5 shadow-xs">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#8A7D71] font-mono-code mb-2 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-[#E06D53]" />
                  <span>Physical Sketchbook Exercise</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#2D2723] leading-relaxed">
                  {selectedSkill.writtenExercise}
                </p>
                <div className="mt-3 pt-3 border-t border-[#E8E0D5] text-xs font-handwriting text-base text-[#7A6D63]">
                  Take your pen or pencil now. No erasing, just explore the forms.
                </div>
              </div>

              {/* Visual Reference Toggle & Card */}
              {selectedSkill.visualReference && (
                <div>
                  {!showReference ? (
                    <button
                      onClick={() => setShowReference(true)}
                      className="w-full py-3 px-4 rounded-xl border-2 border-[#D8CEBE] bg-[#FAF7F2] text-[#4A3F35] font-bold text-xs sm:text-sm hover:bg-[#F0EAE0] transition-all flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4 text-[#E06D53]" />
                      <span>SHOW ME AN EXAMPLE</span>
                    </button>
                  ) : (
                    <VisualReferenceCard
                      reference={selectedSkill.visualReference}
                      onClose={() => setShowReference(false)}
                    />
                  )}
                </div>
              )}

              {/* Warm-Up & Challenge Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {selectedSkill.warmUp && (
                  <div className="rounded-xl border border-[#E0D8CB] bg-[#FAF7F2] p-3.5">
                    <span className="font-bold text-[#8A7D71] uppercase tracking-wider text-[10px] block mb-1">
                      Quick Warm-Up
                    </span>
                    <p className="text-[#4A3F35] font-medium leading-relaxed">
                      {selectedSkill.warmUp}
                    </p>
                  </div>
                )}
                {selectedSkill.challenge && (
                  <div className="rounded-xl border border-[#E0D8CB] bg-[#FAF7F2] p-3.5">
                    <span className="font-bold text-[#E06D53] uppercase tracking-wider text-[10px] block mb-1">
                      Bonus Challenge
                    </span>
                    <p className="text-[#4A3F35] font-medium leading-relaxed">
                      {selectedSkill.challenge}
                    </p>
                  </div>
                )}
              </div>

              {/* Action: Start Prompt Adventure for this skill */}
              <div className="pt-3">
                <button
                  onClick={() => {
                    onStartSkillSession(selectedSkill);
                    onClose();
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-sm sm:text-base hover:bg-[#433B35] transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>PRACTICE THIS SKILL IN A SESSION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
