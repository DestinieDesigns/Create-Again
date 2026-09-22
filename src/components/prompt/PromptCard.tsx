import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Tag,
  PenTool,
  Compass,
} from 'lucide-react';
import { CreativePrompt } from '../../types/prompt';

export interface PromptCardProps {
  prompt: CreativePrompt;
  initialShowExample?: boolean;
  onShowExampleToggle?: (show: boolean) => void;
  className?: string;
  showCategoryBadge?: boolean;
  showDifficultyBadge?: boolean;
  onNextPrompt?: () => void;
  onSavePrompt?: (prompt: CreativePrompt) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  initialShowExample = false,
  onShowExampleToggle,
  className = '',
  showCategoryBadge = true,
  showDifficultyBadge = true,
  onNextPrompt,
  onSavePrompt,
}) => {
  const [showExample, setShowExample] = useState(initialShowExample);
  const [showVariations, setShowVariations] = useState(true);
  const [showWhatToNotice, setShowWhatToNotice] = useState(true);

  const toggleExample = () => {
    const nextState = !showExample;
    setShowExample(nextState);
    if (onShowExampleToggle) {
      onShowExampleToggle(nextState);
    }
  };

  const getDifficultyStyles = (diff: CreativePrompt['difficulty']) => {
    switch (diff) {
      case 'easy':
        return 'bg-[#E8F0E2] text-[#3B6324] border-[#C2DBB6]';
      case 'medium':
        return 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
      case 'hard':
        return 'bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]';
      default:
        return 'bg-[#EAE2D7] text-[#55473B] border-[#D8CEBE]';
    }
  };

  return (
    <article
      className={`rounded-3xl bg-[#FCFAF6] border-2 border-[#2D2723] p-5 sm:p-7 md:p-8 paper-card subtle-shadow text-left transition-all ${className}`}
      aria-labelledby={`prompt-title-${prompt.id}`}
    >
      {/* Category, Difficulty & ID Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#EAE2D7]">
        <div className="flex items-center gap-2 flex-wrap">
          {showCategoryBadge && (
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#2D2723] text-[#FCFAF6]">
              {prompt.category}
            </span>
          )}
          {showDifficultyBadge && (
            <span
              className={`text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${getDifficultyStyles(
                prompt.difficulty
              )}`}
            >
              {prompt.difficulty}
            </span>
          )}
          <span className="text-[11px] font-mono-code text-[#8A7D71] font-bold">
            #{prompt.id}
          </span>
        </div>

        {/* Visual Example Toggle Button */}
        <button
          onClick={toggleExample}
          aria-expanded={showExample}
          aria-controls={`example-panel-${prompt.id}`}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all min-h-[44px] ${
            showExample
              ? 'bg-[#EFE9DF] text-[#2D2723] hover:bg-[#E2D8C9]'
              : 'bg-[#E06D53] text-white hover:bg-[#C95B42] shadow-xs'
          }`}
        >
          {showExample ? (
            <>
              <EyeOff className="w-4 h-4" />
              <span>Hide Example</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              <span>Show Example</span>
            </>
          )}
        </button>
      </div>

      {/* Main Prompt Title (Spans top across on all layouts) */}
      <h2
        id={`prompt-title-${prompt.id}`}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2D2723] leading-tight mb-4 font-sans"
      >
        {prompt.prompt}
      </h2>

      {/* Responsive Middle Section:
          - Mobile: Stacked vertically
          - Tablet (md: 768-1023px): 2 columns (Explanation & details on left, Visual Reference on right)
          - Desktop (lg: 1024px+): 2 columns (Explanation + What to Notice on left, Visual Reference on right)
      */}
      <div className={`grid grid-cols-1 ${showExample ? 'md:grid-cols-2 gap-6' : ''} mb-6`}>
        {/* Left Column: Explanation & What to Notice */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-[#55473B] font-medium leading-relaxed">
            {prompt.explanation}
          </p>

          {/* What to Notice While Creating */}
          {prompt.whatToNotice && (
            <section className="pt-2">
              <button
                onClick={() => setShowWhatToNotice(!showWhatToNotice)}
                className="flex items-center justify-between w-full text-left py-1.5 font-bold text-xs sm:text-sm text-[#2D2723] hover:text-[#E06D53] transition-colors min-h-[38px]"
                aria-expanded={showWhatToNotice}
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#CA8A04]" />
                  <span className="uppercase tracking-wider font-mono-code font-bold text-xs">
                    What To Notice
                  </span>
                </div>
                {showWhatToNotice ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showWhatToNotice && (
                <ul className="space-y-2 mt-2">
                  {(Array.isArray(prompt.whatToNotice) ? prompt.whatToNotice : [prompt.whatToNotice]).map((tip, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#55473B] leading-relaxed bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EAE2D7]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4A6B35] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* Optional Challenge */}
          {prompt.challenge && (
            <div className="rounded-xl border border-[#FDE68A] bg-[#FEF9E7] p-3 text-left">
              <div className="flex items-center gap-1.5 mb-1 text-[#92400E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider">
                  Optional Challenge
                </span>
              </div>
              <p className="text-xs text-[#78350F] leading-relaxed">
                {prompt.challenge}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Visual Reference (When visible) */}
        {showExample && (
          <section
            id={`example-panel-${prompt.id}`}
            aria-label="Visual reference and teaching aid"
            className="rounded-2xl border-2 border-[#D8CEBE] bg-[#FAF7F2] p-4 sm:p-5 flex flex-col justify-between animate-fadeIn"
          >
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#EAE2D7]">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#E06D53]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D2723] font-mono-code">
                    Visual Diagram
                  </span>
                </div>
                <span className="text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded bg-[#E8DDD1] text-[#4A3F35]">
                  {prompt.visualReference.type}
                </span>
              </div>

              {/* SVG Diagram Canvas */}
              <div className="rounded-xl border border-[#D8CEBE] bg-white p-3 sm:p-4 flex items-center justify-center overflow-hidden mb-3 shadow-inner min-h-[140px] max-h-[220px]">
                {prompt.visualReference.svgContent ? (
                  <div
                    className="w-full max-w-[260px] mx-auto flex items-center justify-center"
                    dangerouslySetInnerHTML={{
                      __html: prompt.visualReference.svgContent,
                    }}
                    role="img"
                    aria-label={prompt.visualReference.altText}
                  />
                ) : (
                  <p className="text-xs text-[#8A7D71] italic">
                    Visual diagram reference
                  </p>
                )}
              </div>
            </div>

            {/* Alt Text Description */}
            <p className="text-xs text-[#66584C] bg-[#EFE9DF] rounded-xl p-2.5 leading-relaxed">
              <span className="font-bold text-[#2D2723]">Breakdown: </span>
              {prompt.visualReference.altText}
            </p>
          </section>
        )}
      </div>

      {/* Examples Variations Grid (Spans bottom across) */}
      {prompt.examples && prompt.examples.length > 0 && (
        <section className="mb-4 pt-2 border-t border-[#EAE2D7]">
          <button
            onClick={() => setShowVariations(!showVariations)}
            className="flex items-center justify-between w-full text-left py-2 font-bold text-xs sm:text-sm text-[#2D2723] hover:text-[#E06D53] transition-colors min-h-[38px]"
            aria-expanded={showVariations}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E06D53]" />
              <span className="uppercase tracking-wider font-mono-code font-bold text-xs">
                Example Variations & Ideas
              </span>
            </div>
            {showVariations ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showVariations && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-2">
              {prompt.examples.map((example, idx) => {
                const isArr = Array.isArray(example);
                const isObj = typeof example === 'object' && example !== null && !isArr;
                const label = isArr ? example[0] : isObj ? (example as any).label : String(example);
                const desc = isArr ? example[1] : isObj ? (example as any).description : null;

                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#EAE2D7] bg-[#FAF7F2] p-2.5 text-left"
                  >
                    <span className="block text-xs font-bold text-[#2D2723] mb-0.5">
                      {label}
                    </span>
                    {desc && (
                      <span className="block text-[11px] text-[#66584C] leading-snug">
                        {desc}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* Put Device Down & Create Reminder Banner */}
      <div className="rounded-xl bg-[#F4EFE6] border border-[#E0D5C5] p-3 mb-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-white text-[#E06D53] flex items-center justify-center shrink-0 shadow-2xs">
          <PenTool className="w-4 h-4" />
        </div>
        <div className="text-left">
          <h4 className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#2D2723]">
            Look → Read → Put device down → Create
          </h4>
          <p className="text-xs text-[#66584C]">
            Your screen is just a spark. Draw this on your paper or sketchbook.
          </p>
        </div>
      </div>

      {/* Tags */}
      {prompt.tags && prompt.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#EAE2D7]">
          <Tag className="w-3 h-3 text-[#8A7D71] mr-0.5" />
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono-code text-[#786A5E] bg-[#EFE9DF] px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};
