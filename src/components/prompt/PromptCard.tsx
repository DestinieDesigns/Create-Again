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
  AlertCircle,
} from 'lucide-react';
import { CreativePrompt, MasterCategory } from '../../types/prompt';

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
      className={`rounded-3xl bg-[#FCFAF6] border-2 border-[#2D2723] p-6 sm:p-8 shadow-md text-left transition-all ${className}`}
      aria-labelledby={`prompt-title-${prompt.id}`}
    >
      {/* Category, Difficulty & ID Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#EAE2D7]">
        <div className="flex items-center gap-2 flex-wrap">
          {showCategoryBadge && (
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#2D2723] text-[#FCFAF6]">
              {prompt.category}
            </span>
          )}
          {showDifficultyBadge && (
            <span
              className={`text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${getDifficultyStyles(
                prompt.difficulty
              )}`}
            >
              {prompt.difficulty}
            </span>
          )}
          <span className="text-[11px] font-mono text-[#8A7D71] font-bold">
            #{prompt.id}
          </span>
        </div>

        {/* Visual Example Toggle Button */}
        <button
          onClick={toggleExample}
          aria-expanded={showExample}
          aria-controls={`example-panel-${prompt.id}`}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all ${
            showExample
              ? 'bg-[#EFE9DF] text-[#2D2723] hover:bg-[#E2D8C9]'
              : 'bg-[#E06D53] text-white hover:bg-[#C95B42] shadow-sm'
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

      {/* Main Prompt Text */}
      <h2
        id={`prompt-title-${prompt.id}`}
        className="text-2xl sm:text-3xl font-black text-[#2D2723] leading-tight mb-3 font-serif"
      >
        {prompt.prompt}
      </h2>

      {/* Short Explanation */}
      <p className="text-base sm:text-lg text-[#55473B] font-medium leading-relaxed mb-6">
        {prompt.explanation}
      </p>

      {/* Visual Example Panel (Collapsible) */}
      {showExample && (
        <section
          id={`example-panel-${prompt.id}`}
          aria-label="Visual reference and teaching aid"
          className="rounded-2xl border-2 border-[#D8CEBE] bg-[#FAF7F2] p-5 sm:p-6 mb-6 animate-fadeIn transition-all"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE2D7]">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#EFE9DF] text-[#E06D53] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-[#2D2723]">
                  Visual Teaching Aid
                </h3>
                <p className="text-[11px] text-[#786A5E]">
                  A diagram to demonstrate the concept — not an artwork to copy
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#E8DDD1] text-[#4A3F35]">
              {prompt.visualReference.type}
            </span>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="rounded-xl border border-[#D8CEBE] bg-white p-4 sm:p-6 flex items-center justify-center overflow-hidden mb-4 shadow-inner min-h-[160px]">
            {prompt.visualReference.svgContent ? (
              <div
                className="w-full max-w-md mx-auto flex items-center justify-center"
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

          {/* Alt Text Description */}
          <p className="text-xs text-[#66584C] bg-[#EFE9DF] rounded-xl p-3 leading-relaxed mb-1">
            <span className="font-bold text-[#2D2723]">Visual breakdown: </span>
            {prompt.visualReference.altText}
          </p>
        </section>
      )}

      {/* Example Variations Grid */}
      {prompt.examples && prompt.examples.length > 0 && (
        <section className="mb-6">
          <button
            onClick={() => setShowVariations(!showVariations)}
            className="flex items-center justify-between w-full text-left py-2 font-bold text-sm text-[#2D2723] hover:text-[#E06D53] transition-colors"
            aria-expanded={showVariations}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E06D53]" />
              <span className="uppercase tracking-wider text-xs font-black">
                Example Variations & Ideas
              </span>
            </div>
            {showVariations ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showVariations && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {prompt.examples.map((example, idx) => {
                const isArr = Array.isArray(example);
                const isObj = typeof example === 'object' && example !== null && !isArr;
                const label = isArr ? example[0] : isObj ? (example as any).label : String(example);
                const desc = isArr ? example[1] : isObj ? (example as any).description : null;

                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#EAE2D7] bg-[#F7F3EC] p-3 text-left"
                  >
                    <span className="block text-xs font-black text-[#2D2723] mb-0.5">
                      {label}
                    </span>
                    {desc && (
                      <span className="block text-xs text-[#66584C] leading-snug">
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

      {/* What to Notice */}
      {prompt.whatToNotice && (
        <section className="mb-6">
          <button
            onClick={() => setShowWhatToNotice(!showWhatToNotice)}
            className="flex items-center justify-between w-full text-left py-2 font-bold text-sm text-[#2D2723] hover:text-[#E06D53] transition-colors"
            aria-expanded={showWhatToNotice}
          >
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#CA8A04]" />
              <span className="uppercase tracking-wider text-xs font-black">
                What To Notice While Creating
              </span>
            </div>
            {showWhatToNotice ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showWhatToNotice && (
            <ul className="space-y-2 mt-2">
              {(Array.isArray(prompt.whatToNotice) ? prompt.whatToNotice : [prompt.whatToNotice]).map((tip, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#55473B] leading-relaxed bg-[#F7F3EC] p-2.5 rounded-xl border border-[#EAE2D7]"
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
        <div className="rounded-2xl border border-[#FDE68A] bg-[#FEF9E7] p-4 mb-6 text-left">
          <div className="flex items-center gap-2 mb-1 text-[#92400E]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-wider">
              Optional Challenge
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
            {prompt.challenge}
          </p>
        </div>
      )}

      {/* Put Device Down & Create Reminder Banner */}
      <div className="rounded-2xl bg-[#E8F0E2] border border-[#C2DBB6] p-4 mb-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-white text-[#3B6324] flex items-center justify-center shrink-0 shadow-sm">
          <PenTool className="w-5 h-5" />
        </div>
        <div className="text-left">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#2D4518]">
            Look, Then Create
          </h4>
          <p className="text-xs text-[#3B6324] leading-snug">
            Put your screen aside and draw on your paper, sketchbook, or tablet.
          </p>
        </div>
      </div>

      {/* Tags */}
      {prompt.tags && prompt.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#EAE2D7]">
          <Tag className="w-3.5 h-3.5 text-[#8A7D71] mr-1" />
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-[#786A5E] bg-[#EFE9DF] px-2.5 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};
