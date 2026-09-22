import React, { useState, useMemo } from 'react';
import { X, Search, BookOpen, Compass, ArrowRight, Lightbulb, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { MASTER_CREATIVE_PROMPTS, BEGINNER_ART_GLOSSARY } from '../../data/masterPromptSheet';
import { CreativePrompt } from '../../types/prompt';

export interface VisualReferenceMasterSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt?: (prompt: CreativePrompt) => void;
}

export const VisualReferenceMasterSheetModal: React.FC<VisualReferenceMasterSheetModalProps> = ({
  isOpen,
  onClose,
  onSelectPrompt,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [activePromptId, setActivePromptId] = useState<string>(MASTER_CREATIVE_PROMPTS[0]?.id || '');
  const [showGlossary, setShowGlossary] = useState(false);
  const [showMoreExamples, setShowMoreExamples] = useState(false);

  // Extract categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    MASTER_CREATIVE_PROMPTS.forEach((p) => set.add(p.category));
    return ['ALL', ...Array.from(set)];
  }, []);

  // Filtered prompts
  const filteredPrompts = useMemo(() => {
    return MASTER_CREATIVE_PROMPTS.filter((p) => {
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const promptLevel = p.level || p.visualReference.level || (p.difficulty === 'hard' ? 'advanced' : p.difficulty === 'medium' ? 'intermediate' : 'beginner');
      const matchesLevel = selectedLevel === 'ALL' || promptLevel.toLowerCase() === selectedLevel.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.prompt.toLowerCase().includes(q) ||
        p.explanation.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.visualReference.title && p.visualReference.title.toLowerCase().includes(q));
      return matchesCat && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);


  const activePrompt = useMemo(() => {
    return (
      MASTER_CREATIVE_PROMPTS.find((p) => p.id === activePromptId) ||
      filteredPrompts[0] ||
      MASTER_CREATIVE_PROMPTS[0]
    );
  }, [activePromptId, filteredPrompts]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="master-sheet-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[850px] flex flex-col rounded-3xl bg-[#FAF8F5] border-2 border-[#D5C9BC] shadow-2xl overflow-hidden text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#EAE2D7] bg-[#FCFAF6] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E06D53]/15 text-[#E06D53] flex items-center justify-center">
              <BookOpen className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="master-sheet-title" className="text-base sm:text-lg font-black text-[#2D2723]">
                  Prompt + Visual Example Master Sheet
                </h2>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#EAE0D2] text-[#5C5046]">
                  {MASTER_CREATIVE_PROMPTS.length} Reference Guides
                </span>
              </div>
              <p className="text-xs text-[#7A6C60]">
                Every prompt has an instructional reference. The example teaches the concept—you create your own version on paper.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowGlossary(!showGlossary)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                showGlossary
                  ? 'bg-[#E06D53] text-white border-[#E06D53]'
                  : 'bg-[#F2ECE1] text-[#5C5046] border-[#D5C9BC] hover:bg-[#EAE0D2]'
              }`}
            >
              Art Terms Glossary
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Master Sheet"
              className="p-2 rounded-xl text-[#7A6C60] hover:bg-[#EFE9DF] hover:text-[#2D2723] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Glossary Slide-down Panel if toggled */}
        {showGlossary && (
          <div className="bg-[#F4EFE6] border-b border-[#E0D5C3] p-4 sm:p-5 shrink-0 animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#4A3F35]">
                Section 33 — Beginner Art Language (Plain Definitions)
              </span>
              <button
                type="button"
                onClick={() => setShowGlossary(false)}
                className="text-xs font-bold text-[#E06D53] hover:underline"
              >
                Close Glossary
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {BEGINNER_ART_GLOSSARY.map((term, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-[#FCFAF6] border border-[#E5DCcf] text-xs shadow-2xs"
                >
                  <p className="font-extrabold text-[#2D2723]">{term.term}</p>
                  <p className="text-[#6B5F54] text-[11px] mt-0.5 leading-snug">{term.definition}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter / Search Bar */}
        <div className="px-5 sm:px-7 py-3 border-b border-[#EAE2D7] bg-[#FAF7F2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8C7E72] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts, anatomy, lines, shapes, actions..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white border border-[#D5C9BC] text-[#2D2723] placeholder-[#A3968A] focus:outline-none focus:ring-2 focus:ring-[#E06D53]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {/* Level filters */}
            <div className="flex items-center gap-1 border-r border-[#D5C9BC] pr-2 mr-1">
              {(['ALL', 'beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-extrabold uppercase transition-all shrink-0 ${
                    selectedLevel === lvl
                      ? 'bg-[#E06D53] text-white shadow-2xs'
                      : 'bg-[#EDE5D8] text-[#5C5046] hover:bg-[#E2D8C8]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Category filters */}
            <Filter className="w-3.5 h-3.5 text-[#8C7E72] shrink-0 mr-0.5" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#2D2723] text-white'
                    : 'bg-[#EDE5D8] text-[#5C5046] hover:bg-[#E2D8C8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


        {/* Modal Body: Left sidebar list & Right preview panel */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Column: Prompts List */}
          <div className="w-full sm:w-80 md:w-96 border-r border-[#EAE2D7] overflow-y-auto bg-[#F7F4EE] p-3 space-y-2 shrink-0">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C7E72] px-2 py-1">
              Select Prompt ({filteredPrompts.length})
            </p>
            {filteredPrompts.map((p, index) => {
              const isActive = p.id === activePrompt?.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePromptId(p.id)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-white border-[#E06D53] shadow-md ring-1 ring-[#E06D53]'
                      : 'bg-[#FCFAF6] border-[#E5DCCF] hover:bg-[#FAF6F0] hover:border-[#D0C2B0]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EDE5D8] text-[#5C5046] font-mono-code">
                      {p.category}
                    </span>
                    <span className="text-[10px] text-[#A09284] font-mono-code font-bold">
                      #{index + 1}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-[#2D2723] leading-snug line-clamp-2">
                    {p.prompt}
                  </h4>
                  <p className="text-[11px] text-[#7A6C60] line-clamp-1 mt-0.5">
                    {p.explanation}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Reference View */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 bg-[#FCFAF6] space-y-5">
            {activePrompt ? (
              <>
                {/* Active Prompt Header */}
                <div className="space-y-1.5 pb-4 border-b border-[#EAE2D7]">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E06D53]/15 text-[#E06D53] font-mono-code">
                      {activePrompt.category} • {activePrompt.difficulty.toUpperCase()}
                    </span>
                    {onSelectPrompt && (
                      <button
                        type="button"
                        onClick={() => {
                          onSelectPrompt(activePrompt);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#E06D53] text-white hover:bg-[#C04D33] text-xs font-bold shadow-sm transition-all active:scale-97"
                      >
                        <span>Practice This Prompt</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2D2723] tracking-tight">
                    {activePrompt.prompt}
                  </h3>
                  <div className="p-3.5 rounded-2xl bg-[#FAF5EB] border border-[#E8DEC8]">
                    <p className="text-[11px] font-bold text-[#8C754A] uppercase tracking-wider">
                      Short Explanation
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-[#3D332A] mt-0.5 leading-relaxed">
                      {activePrompt.explanation}
                    </p>
                  </div>
                </div>

                {/* Visual Instructional Diagram */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#635446]">
                      Visual Reference (Instructional Drawing)
                    </span>
                    <span className="text-[11px] text-[#8C7E72] italic">
                      Teaching aid — not an assignment to copy
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl border-2 border-[#E5DCCF] bg-[#FAF8F5] flex items-center justify-center min-h-[180px]">
                    {activePrompt.visualReference.svgContent ? (
                      <div
                        className="w-full max-h-[300px] flex items-center justify-center text-[#2D2723]"
                        dangerouslySetInnerHTML={{ __html: activePrompt.visualReference.svgContent }}
                      />
                    ) : (
                      <div className="text-xs text-[#8C7E72]">
                        {activePrompt.visualReference.altText}
                      </div>
                    )}
                  </div>
                </div>

                {/* Example Variations List */}
                {activePrompt.visualReference.examples && activePrompt.visualReference.examples.length > 0 && (
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE0D2]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#4A3F35]">
                          Example Variations (Demonstrating Variety)
                        </span>
                        {activePrompt.level && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-[#E5DCCF] text-[#4A3F35]">
                            {activePrompt.level}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono-code font-bold text-[#8C7E72]">
                        {activePrompt.visualReference.examples.length + (activePrompt.visualReference.moreExamples ? activePrompt.visualReference.moreExamples.length : 0)} possibilities
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activePrompt.visualReference.examples.map((ex, i) => {
                        const isArr = Array.isArray(ex);
                        const isObj = typeof ex === 'object' && ex !== null && !isArr;
                        const label = isArr ? ex[0] : isObj ? (ex as any).label : ex;
                        const desc = isArr ? ex[1] : isObj ? (ex as any).description : null;

                        return (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#E8DEC8] text-xs text-[#2D2723]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D53] shrink-0 mt-1.5" />
                            <div>
                              <span className="font-bold">{label}</span>
                              {desc && <p className="text-[11px] text-[#6B5F54] mt-0.5 leading-snug">{desc}</p>}
                            </div>
                          </div>
                        );
                      })}

                      {/* Additional Variations when Show More is expanded */}
                      {showMoreExamples && activePrompt.visualReference.moreExamples && activePrompt.visualReference.moreExamples.map((ex, i) => {
                        const isArr = Array.isArray(ex);
                        const isObj = typeof ex === 'object' && ex !== null && !isArr;
                        const label = isArr ? ex[0] : isObj ? (ex as any).label : ex;
                        const desc = isArr ? ex[1] : isObj ? (ex as any).description : null;

                        return (
                          <div
                            key={`more-${i}`}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF5EB] border border-[#E0D5C3] text-xs text-[#2D2723] animate-in fade-in duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D7F6E] shrink-0 mt-1.5" />
                            <div>
                              <span className="font-bold">{label}</span>
                              {desc && <p className="text-[11px] text-[#6B5F54] mt-0.5 leading-snug">{desc}</p>}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Section 52: Show More Button */}
                    {activePrompt.visualReference.moreExamples && activePrompt.visualReference.moreExamples.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-[#EAE0D2] flex justify-end">
                        <button
                          type="button"
                          onClick={() => setShowMoreExamples(!showMoreExamples)}
                          className="text-xs font-extrabold text-[#E06D53] hover:text-[#C04D33] transition-colors"
                        >
                          {showMoreExamples
                            ? 'Show Fewer Examples'
                            : `+ Show ${activePrompt.visualReference.moreExamples.length} More Variations & Angles`}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* What to Notice Callout */}
                {activePrompt.visualReference.whatToNotice && (
                  <div className="p-4 rounded-2xl bg-[#F0F5F2] border border-[#D0E2D8]">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl">👁️</span>
                      <div className="flex-1">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#2D6A4F]">
                          What to notice
                        </p>
                        {Array.isArray(activePrompt.visualReference.whatToNotice) ? (
                          <ul className="mt-1 space-y-1.5 text-xs text-[#1B4332]">
                            {activePrompt.visualReference.whatToNotice.map((note, nIdx) => (
                              <li key={nIdx} className="flex items-start gap-1.5 font-medium leading-relaxed">
                                <span className="text-[#2D6A4F] font-bold">•</span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs sm:text-sm font-semibold text-[#1B4332] mt-0.5 leading-relaxed">
                            {activePrompt.visualReference.whatToNotice}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Beginner Art Terms attached to this prompt */}
                {activePrompt.visualReference.beginnerTerms && activePrompt.visualReference.beginnerTerms.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-[#F4EFE6] border border-[#E0D5C3]">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C7E72] block mb-1.5">
                      Plain Language Definitions
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activePrompt.visualReference.beginnerTerms.map((bt, bIdx) => (
                        <div key={bIdx} className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD3C5] text-xs">
                          <strong className="text-[#2D2723] mr-1">{bt.term}:</strong>
                          <span className="text-[#6B5F54]">{bt.definition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional Challenge */}
                {activePrompt.visualReference.challenge && (
                  <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#FAD8B8] flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#E06D53] shrink-0" />
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#A7412A]">
                        Optional Challenge:
                      </span>
                      <span className="text-xs sm:text-sm text-[#523A28] font-medium ml-1.5">
                        {activePrompt.visualReference.challenge}
                      </span>
                    </div>
                  </div>
                )}


                {/* Bottom Core Directive Banner */}
                <div className="p-4 rounded-2xl bg-[#2D2723] text-white flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <p className="text-xs font-black tracking-wide text-[#E06D53]">
                      CORE RULE: LOOK → UNDERSTAND → PUT DEVICE DOWN → CREATE
                    </p>
                    <p className="text-[11px] text-[#D5C9BC]">
                      Never copy the example. Pick up your physical pen and create your own variation.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3.5 py-1.5 rounded-xl bg-white text-[#2D2723] font-bold text-xs hover:bg-[#FAF7F2] transition-colors shrink-0"
                  >
                    Got It
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16 text-[#8C7E72]">
                <Compass className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-semibold">No prompt matches your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
