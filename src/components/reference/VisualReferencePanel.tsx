import React, { useState } from 'react';
import { EyeOff, Lightbulb, Sparkles, Image as ImageIcon } from 'lucide-react';
import { VisualReference, VisualReferenceType } from '../../types/visualReference';

export interface VisualReferencePanelProps {
  reference: VisualReference;
  onHide: () => void;
  promptText?: string;
  className?: string;
  id?: string;
}

/**
 * Returns context-aware microcopy and guidance based on the visual reference type.
 */
function getContextAwareMicrocopy(type: VisualReferenceType, contextHint?: string) {
  if (contextHint) {
    return {
      badge: 'Visual Cue',
      guidance: contextHint,
      reminder: 'Use this as an idea, not something you need to copy.',
    };
  }

  switch (type) {
    case 'gesture':
      return {
        badge: 'Gesture Flow',
        guidance: 'Capture the rhythm and direction of the pose with loose, sweeping lines.',
        reminder: 'Do not worry about neatness—focus on the energy of the movement.',
      };
    case 'shape':
      return {
        badge: 'Shape Breakdown',
        guidance: 'Look for the underlying circles, triangles, or boxes before adding details.',
        reminder: 'Play with contrasting big, medium, and small shapes on your page.',
      };
    case 'line-art':
      return {
        badge: 'Line Weight',
        guidance: 'Notice how bold outlines anchor the subject while delicate lines suggest texture.',
        reminder: 'Use varying pressure on your paper or tablet to create depth.',
      };
    case 'step-by-step':
      return {
        badge: 'Construction',
        guidance: 'Build from the simplest skeleton outward into clothes and character details.',
        reminder: 'Take whatever step helps you most, then invent the rest yourself.',
      };
    case 'silhouette':
      return {
        badge: 'Silhouette',
        guidance: 'Clear silhouettes make poses instantly readable even from a distance.',
        reminder: 'Check if the action is obvious without any interior details.',
      };
    case 'composition':
    case 'environment':
      return {
        badge: 'Spatial Depth',
        guidance: 'Layer foreground, midground, and background to create an expansive world.',
        reminder: 'Objects further back are usually smaller, higher, and less detailed.',
      };
    default:
      return {
        badge: 'Creative Reference',
        guidance: 'Use this diagram to spark an approach rather than copying it line for line.',
        reminder: 'Your sketchbook is your playground. Take what works and make it yours.',
      };
  }
}

/**
 * Accessible VisualReferencePanel component
 * Displays visual reference image or SVG diagram, context-aware microcopy,
 * and an accessible 'hide example' button.
 */
export const VisualReferencePanel: React.FC<VisualReferencePanelProps> = ({
  reference,
  onHide,
  promptText,
  className = '',
  id = 'visual-reference-panel',
}) => {
  const [imgError, setImgError] = useState(false);
  const microcopy = getContextAwareMicrocopy(reference.type, reference.contextHint);

  return (
    <aside
      id={id}
      aria-label="Visual reference guide"
      className={`rounded-2xl border-2 border-[#D8CEBE] bg-[#FCFAF6] p-4 sm:p-5 paper-card shadow-sm transition-all ${className}`}
    >
      {/* Header bar: Badge, Title & Hide Button */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#EAE2D7]">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            id="reference-type-badge"
            className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8DDD1] text-[#4A3F35] font-mono-code"
          >
            {microcopy.badge}
          </span>
          {reference.title && (
            <h3
              id="reference-title"
              className="text-xs sm:text-sm font-bold text-[#2D2723] tracking-tight"
            >
              {reference.title}
            </h3>
          )}
        </div>

        {/* Hide Example Button */}
        <button
          type="button"
          id="btn-hide-visual-reference"
          onClick={onHide}
          aria-label="Hide visual reference example"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#D5C7B7] bg-[#FAF7F2] text-[#5C5046] hover:bg-[#EFE9DF] hover:text-[#2D2723] text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#E06D53] focus:ring-offset-1"
        >
          <EyeOff className="w-3.5 h-3.5 text-[#8C7E72]" aria-hidden="true" />
          <span>Hide example</span>
        </button>
      </div>

      {/* Main Reference Media Area */}
      <div className="mt-3.5">
        <div className="relative overflow-hidden rounded-xl border border-[#E5DCcf] bg-[#F7F3EC] flex items-center justify-center min-h-[160px] sm:min-h-[190px]">
          {reference.imageUrl && !imgError ? (
            <img
              src={reference.imageUrl}
              alt={reference.altText}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-auto max-h-[320px] object-contain rounded-lg p-2"
              loading="lazy"
            />
          ) : reference.svgContent ? (
            <div
              role="img"
              aria-label={reference.altText}
              className="w-full h-auto max-h-[320px] flex items-center justify-center p-3 text-[#2D2723] overflow-auto"
              dangerouslySetInnerHTML={{ __html: reference.svgContent }}
            />
          ) : (
            <div
              className="p-6 text-center text-[#7C6E62] flex flex-col items-center justify-center gap-2"
              role="note"
              aria-label={reference.altText}
            >
              <div className="w-10 h-10 rounded-full bg-[#EAE2D7] flex items-center justify-center text-[#5C5046]">
                <ImageIcon className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold max-w-xs">{reference.altText}</p>
            </div>
          )}
        </div>

        {/* Accessible Alt Description Caption for Screen Readers & Clarity */}
        <p className="sr-only" aria-live="polite">
          Visual reference description: {reference.altText}
        </p>
      </div>

      {/* Context-Aware Microcopy & Guidance */}
      <div className="mt-3.5 space-y-2">
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2D7]">
          <Lightbulb
            className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="text-xs text-[#4A3F35] leading-relaxed">
            <p className="font-semibold text-[#2D2723]">{microcopy.guidance}</p>
            <p className="mt-0.5 text-[#6B6158] font-handwriting text-sm">
              {microcopy.reminder}
            </p>
          </div>
        </div>

        {/* Physical Sketchbook Grounding Microcopy */}
        <div className="flex items-center justify-between gap-2 px-1 pt-1 text-[11px] text-[#8C7E72]">
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3 h-3 text-[#E06D53]" aria-hidden="true" />
            <span>The human is always the artist. Create on your own page.</span>
          </span>
          <button
            type="button"
            onClick={onHide}
            className="text-[11px] font-bold text-[#E06D53] hover:underline"
          >
            Got it, back to paper
          </button>
        </div>
      </div>
    </aside>
  );
};
