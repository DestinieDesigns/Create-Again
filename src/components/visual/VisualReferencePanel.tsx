import React, { useState } from 'react';
import { EyeOff, Lightbulb, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { VisualReference, VisualReferenceType } from '../../types/visualReference';

export interface VisualReferencePanelProps {
  /** The visual reference object providing image, alt text, and instructional metadata */
  visualReference?: VisualReference;
  /** Alias for visualReference for component compatibility */
  reference?: VisualReference;
  /** Callback invoked when the user clicks 'Hide Example' */
  onHide?: () => void;
  /** Alias callback for onHide */
  onClose?: () => void;
  /** Optional current prompt text for context */
  promptText?: string;
  /** Additional custom class names */
  className?: string;
  /** DOM ID for accessible testing and styling */
  id?: string;
}

/**
 * Returns tailored pedagogical microcopy based on the study type,
 * always anchoring back to physical creation on paper.
 */
function getStudyGuidance(type?: VisualReferenceType, contextHint?: string) {
  if (contextHint) {
    return {
      category: 'Visual Cue',
      guidance: contextHint,
      lookTip: 'Observe the proportions, angles, and rhythm.',
      createTip: 'Put your screen down and let your hand explore the movement.',
    };
  }

  switch (type) {
    case 'gesture':
      return {
        category: 'Gesture & Motion',
        guidance: 'Notice the single rhythmic line running through the pose (the line of action).',
        lookTip: 'Look for the energy and flow of the body, not the contour lines.',
        createTip: 'Put the screen down. Sweep your pencil freely without lifting it.',
      };
    case 'shape':
      return {
        category: 'Shape Foundation',
        guidance: 'Complex figures always begin as simple primitives: circles, wedges, and boxes.',
        lookTip: 'Squint and identify the 2–3 dominant shapes establishing the silhouette.',
        createTip: 'Put the screen down. Block those core shapes onto your physical page first.',
      };
    case 'line-art':
      return {
        category: 'Line Art & Weight',
        guidance: 'Heavier lines anchor shaded, weight-bearing edges; light lines suggest surface details.',
        lookTip: 'Notice where the line thickens at intersections and underneath curves.',
        createTip: 'Put the screen down. Adjust your pen pressure to give your strokes life.',
      };
    case 'step-by-step':
      return {
        category: 'Construction Steps',
        guidance: 'Observe how the construction builds from simple rhythm to final personality.',
        lookTip: 'Notice how each step adds only one structural element.',
        createTip: 'Put the screen down. Start from step 1 on your paper, then invent your own details.',
      };
    case 'silhouette':
      return {
        category: 'Silhouette Readability',
        guidance: 'A strong pose is instantly recognizable even when completely blacked out.',
        lookTip: 'Check whether the negative space between limbs reveals the action clearly.',
        createTip: 'Put the screen down. Sketch a quick solid shadow on your page to test readability.',
      };
    case 'composition':
    case 'environment':
      return {
        category: 'Composition & Depth',
        guidance: 'Layer your drawing into foreground (bold/close), midground (action), and background (faint).',
        lookTip: 'See how overlap creates the illusion of 3D depth on a flat 2D plane.',
        createTip: 'Put the screen down. Draw your overlapping planes with varying contrast.',
      };
    default:
      return {
        category: 'Visual Inspiration',
        guidance: 'Use this reference to spark ideas and break creative inertia.',
        lookTip: 'Absorb the visual concept for 10 seconds.',
        createTip: 'Now put the device down and let your imagination take the wheel.',
      };
  }
}

/**
 * VisualReferencePanel Component
 * Displays a visual reference image or SVG diagram, accessible alt text,
 * an explicit 'Hide Example' button, and rich microcopy reinforcing the
 * 'Look, then create' core philosophy:
 * Look -> Read -> Put device down -> Create on paper.
 */
export const VisualReferencePanel: React.FC<VisualReferencePanelProps> = ({
  visualReference,
  reference,
  onHide,
  onClose,
  promptText,
  className = '',
  id = 'visual-reference-panel',
}) => {
  const activeReference = visualReference || reference;
  const [imgError, setImgError] = useState(false);
  const [showMoreExamples, setShowMoreExamples] = useState(false);

  const handleDismiss = () => {
    if (onHide) onHide();
    else if (onClose) onClose();
  };

  if (!activeReference) {
    return null;
  }

  const guidance = getStudyGuidance(activeReference.type, activeReference.contextHint);

  return (
    <aside
      id={id}
      role="region"
      aria-labelledby={`${id}-heading`}
      aria-label="Visual reference example panel"
      className={`rounded-3xl border-2 border-[#D5C7B7] bg-[#FCFAF6] p-5 sm:p-6 paper-card shadow-sm transition-all text-left ${className}`}
    >
      {/* Top Header: Badge, Title & 'Hide Example' Button */}
      <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#EAE2D7]">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span
            id={`${id}-type-badge`}
            className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EAE0D2] text-[#4A3F35] font-mono-code shrink-0"
          >
            {guidance.category}
          </span>
          {activeReference.title && (
            <h3
              id={`${id}-heading`}
              className="text-sm sm:text-base font-extrabold text-[#2D2723] tracking-tight truncate"
            >
              {activeReference.title}
            </h3>
          )}
        </div>

        {/* Primary 'Hide Example' Action Button */}
        <button
          type="button"
          id="btn-hide-example"
          onClick={handleDismiss}
          aria-label="Hide example and return to drawing"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#D5C7B7] bg-[#FAF7F2] text-[#5C5046] hover:bg-[#EFE9DF] hover:text-[#2D2723] hover:border-[#BFB2A2] text-xs font-bold transition-all shadow-2xs active:scale-97 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#E06D53] focus:ring-offset-1"
        >
          <EyeOff className="w-3.5 h-3.5 text-[#8C7E72]" aria-hidden="true" />
          <span>Hide Example</span>
        </button>
      </div>

      {/* Philosophy Banner: 'LOOK, THEN CREATE' */}
      <div
        id={`${id}-philosophy-banner`}
        className="mt-3.5 px-3.5 py-2.5 rounded-2xl bg-[#F5EFE6] border border-[#E4D9CC] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#E06D53]" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-black tracking-wider text-[#2D2723]">
            PROMPT → SEE EXAMPLES → UNDERSTAND → PUT DEVICE DOWN → CREATE
          </span>
        </div>
        <p className="text-[11px] text-[#6E6054] font-medium">
          Examples show variety, never one right answer. Draw on your paper.
        </p>
      </div>

      {/* Short Explanation: "What does this instruction mean?" */}
      {(activeReference.explanation || activeReference.description) && (
        <div className="mt-3 px-4 py-2.5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC9] text-left">
          <p className="text-[11px] font-bold text-[#8C754A] uppercase tracking-wider">
            What this instruction means
          </p>
          <p className="text-xs sm:text-sm font-medium text-[#3D332A] mt-0.5 leading-relaxed">
            {activeReference.explanation || activeReference.description}
          </p>
        </div>
      )}

      {/* Main Visual Media Display */}
      <div className="mt-3.5">
        <div className="relative overflow-hidden rounded-2xl border border-[#E5DCcf] bg-[#F7F3EC] flex items-center justify-center min-h-[170px] sm:min-h-[220px]">
          {activeReference.imageUrl && !imgError ? (
            <img
              src={activeReference.imageUrl}
              alt={activeReference.altText || activeReference.title || 'Instructional drawing visual reference'}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-auto max-h-[340px] object-contain rounded-xl p-3"
              loading="lazy"
            />
          ) : activeReference.svgContent ? (
            <div
              role="img"
              aria-label={activeReference.altText || activeReference.title || 'Instructional vector drawing diagram'}
              className="w-full h-auto max-h-[340px] flex items-center justify-center p-4 text-[#2D2723] overflow-auto select-none"
              dangerouslySetInnerHTML={{ __html: activeReference.svgContent }}
            />
          ) : (
            <div
              className="p-8 text-center text-[#7C6E62] flex flex-col items-center justify-center gap-2"
              role="note"
              aria-label={activeReference.altText || 'Visual reference placeholder'}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAE2D7] flex items-center justify-center text-[#5C5046]">
                <ImageIcon className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold max-w-sm">
                {activeReference.altText || 'Visual study guide for this drawing exercise'}
              </p>
            </div>
          )}
        </div>

        {/* Accessible Caption / Screen Reader announcement */}
        <p className="sr-only" aria-live="polite">
          Visual reference image: {activeReference.altText}
        </p>
      </div>

      {/* Example Variations List (Demonstrating Variety rather than one correct answer) */}
      {activeReference.examples && activeReference.examples.length > 0 && (
        <div className="mt-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#635446]">
                Example Variations (Notice the variety)
              </span>
              {activeReference.level && (
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-[#E5DCCF] text-[#4A3F35]">
                  {activeReference.level}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#918171] font-mono-code font-bold">
              {activeReference.examples.length + (activeReference.moreExamples ? activeReference.moreExamples.length : 0)} possibilities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeReference.examples.map((ex, idx) => {
              const isObj = typeof ex === 'object' && ex !== null;
              const label = isObj ? (ex as any).label : ex;
              const desc = isObj ? (ex as any).description : null;

              return (
                <div
                  key={idx}
                  className="flex items-start gap-2 px-2.5 py-2 rounded-xl bg-[#F4EFE6] border border-[#E4D9C8] text-xs text-[#3D332A]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E06D53] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-bold text-[#2D2723]">{label}</span>
                    {desc && <span className="block text-[11px] text-[#6B5F54] mt-0.5 leading-snug">{desc}</span>}
                  </div>
                </div>
              );
            })}

            {/* Additional Variations when Show More is expanded */}
            {showMoreExamples && activeReference.moreExamples && activeReference.moreExamples.map((ex, idx) => {
              const isObj = typeof ex === 'object' && ex !== null;
              const label = isObj ? (ex as any).label : ex;
              const desc = isObj ? (ex as any).description : null;

              return (
                <div
                  key={`more-${idx}`}
                  className="flex items-start gap-2 px-2.5 py-2 rounded-xl bg-[#FAF5EB] border border-[#E0D5C3] text-xs text-[#3D332A] animate-in fade-in duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D7F6E] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-bold text-[#2D2723]">{label}</span>
                    {desc && <span className="block text-[11px] text-[#6B5F54] mt-0.5 leading-snug">{desc}</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 52: Show More Button */}
          {activeReference.moreExamples && activeReference.moreExamples.length > 0 && (
            <div className="mt-2.5 pt-2 border-t border-[#EAE0D2] flex justify-end">
              <button
                type="button"
                onClick={() => setShowMoreExamples(!showMoreExamples)}
                className="text-xs font-extrabold text-[#E06D53] hover:text-[#C04D33] transition-colors"
              >
                {showMoreExamples
                  ? 'Show Fewer Examples'
                  : `+ Show ${activeReference.moreExamples.length} More Examples & Angles`}
              </button>
            </div>
          )}
        </div>
      )}

      {/* What to Notice Callout */}
      {activeReference.whatToNotice && (
        <div className="mt-3 p-3.5 rounded-2xl bg-[#F0F5F2] border border-[#D0E2D8] text-left">
          <div className="flex items-start gap-2.5">
            <span className="text-base leading-none mt-0.5">👁️</span>
            <div className="flex-1">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#2D6A4F]">
                What to notice
              </p>
              {Array.isArray(activeReference.whatToNotice) ? (
                <ul className="mt-1 space-y-1 text-xs text-[#1B4332]">
                  {activeReference.whatToNotice.map((note, nIdx) => (
                    <li key={nIdx} className="flex items-start gap-1.5 font-medium leading-relaxed">
                      <span className="text-[#2D6A4F] font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs sm:text-sm font-semibold text-[#1B4332] mt-0.5 leading-relaxed">
                  {activeReference.whatToNotice}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Optional Challenge */}
      {activeReference.challenge && (
        <div className="mt-2.5 px-3.5 py-2.5 rounded-2xl bg-[#FFF9F2] border border-[#FAD8B8] text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53] shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#A7412A]">
              Optional Challenge:
            </span>
            <span className="text-xs text-[#523A28] font-medium">
              {activeReference.challenge}
            </span>
          </div>
        </div>
      )}

      {/* Beginner Terms Glossary (Plain Language Definitions) */}
      {activeReference.beginnerTerms && activeReference.beginnerTerms.length > 0 && (
        <div className="mt-2.5 flex items-center gap-2 flex-wrap text-left">
          <span className="text-[10px] uppercase font-bold text-[#8C7E72] tracking-wider">
            Art Terms:
          </span>
          {activeReference.beginnerTerms.map((termItem, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#ECE4D8] border border-[#DDD3C5] text-[11px] text-[#42372E]"
            >
              <strong className="font-bold text-[#2D2723]">{termItem.term}:</strong>
              <span>{termItem.definition}</span>
            </span>
          ))}
        </div>
      )}

      {/* Context-Aware Microcopy & Grounding Steps */}
      <div className="mt-4 space-y-2.5">
        {/* Core Guidance Card */}
        <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D7]">
          <div className="flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs leading-relaxed space-y-1">
              <p className="font-bold text-[#2D2723]">
                {guidance.guidance}
              </p>
              <p className="text-[#6B6158]">
                <strong className="text-[#4A3F35]">1. Look:</strong> {guidance.lookTip}
              </p>
              <p className="text-[#6B6158]">
                <strong className="text-[#4A3F35]">2. Create:</strong> {guidance.createTip}
              </p>
            </div>
          </div>
        </div>

        {/* Physical Sketchbook Reinforcement & Quick Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 pt-1 text-[11px] text-[#7A6C60]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53] shrink-0" aria-hidden="true" />
            <span className="font-semibold text-[#4A3F35]">
              The human is always the artist.
            </span>
            <span className="hidden sm:inline text-[#9E9083]">|</span>
            <span className="hidden sm:inline">Use this as an idea, not something to copy.</span>
          </div>

          <button
            type="button"
            id="btn-back-to-paper"
            onClick={handleDismiss}
            className="inline-flex items-center gap-1 font-bold text-[#E06D53] hover:text-[#C04D33] hover:underline self-start sm:self-auto transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Got it, back to paper</span>
          </button>
        </div>
      </div>

    </aside>
  );
};
