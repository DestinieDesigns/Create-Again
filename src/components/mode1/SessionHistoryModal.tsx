import React, { useState } from 'react';
import {
  X,
  History,
  Clock,
  Sparkles,
  Copy,
  Check,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { PromptCategory } from '../../types/prompt';
import { PromptHistoryItem } from '../../types/session';

interface SessionHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  promptHistory: PromptHistoryItem[];
  startedAt?: number;
  completedAt?: number;
}

export const getCategoryBadgeStyle = (category: PromptCategory) => {
  switch (category) {
    case 'START':
      return 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723]';
    case 'CONNECT':
      return 'bg-[#2A9D8F] text-white border-[#2A9D8F]';
    case 'TRANSFORM':
      return 'bg-[#E76F51] text-white border-[#E76F51]';
    case 'ADD':
      return 'bg-[#DDA15E] text-[#2D2723] border-[#DDA15E]';
    case 'INTERACT':
      return 'bg-[#BC6C25] text-white border-[#BC6C25]';
    case 'STORY':
      return 'bg-[#606C38] text-white border-[#606C38]';
    case 'CHAOS':
      return 'bg-[#9D0208] text-white border-[#9D0208]';
    case 'DETAIL':
      return 'bg-[#4A4E69] text-white border-[#4A4E69]';
    case 'CHANGE':
      return 'bg-[#7209B7] text-white border-[#7209B7]';
    case 'FINISH':
      return 'bg-[#283618] text-white border-[#283618]';
    default:
      return 'bg-[#5A4F46] text-white border-[#5A4F46]';
  }
};

export const SessionHistoryModal: React.FC<SessionHistoryModalProps> = ({
  isOpen,
  onClose,
  promptHistory,
  startedAt,
  completedAt,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Calculate category frequencies
  const categoryCounts: Record<string, number> = {};
  promptHistory.forEach((item) => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  const totalTimeSeconds =
    startedAt && completedAt
      ? Math.max(1, Math.round((completedAt - startedAt) / 1000))
      : null;

  const formatSeconds = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s > 0 ? `${s}s` : ''}`;
  };

  const handleCopyHistory = () => {
    const text = promptHistory
      .map(
        (item, idx) =>
          `Step ${idx + 1} [${item.category}]: ${item.text}`
      )
      .join('\n');

    const formattedOutput = `Create Again — Drawing Session History\n${promptHistory.length} steps completed\n\n${text}\n\nStart somewhere. Add something. See what happens.`;

    navigator.clipboard.writeText(formattedOutput).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-3 border-[#2D2723] max-h-[90vh] flex flex-col shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors"
          aria-label="Close session history"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-5 border-b border-[#E8E0D5] pr-10">
          <div className="flex items-center gap-2 mb-1">
            <History className="w-4 h-4 text-[#E06D53]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
              Creative Journey
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
            Session History
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6054] mt-0.5 font-handwriting text-lg sm:text-xl">
            Review the exact sequence of prompts that shaped your drawing.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] text-xs font-bold text-[#2D2723] font-mono-code">
              <Layers className="w-3.5 h-3.5 text-[#E06D53]" />
              {promptHistory.length} Steps
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] text-xs font-bold text-[#2D2723] font-mono-code">
              <Sparkles className="w-3.5 h-3.5 text-[#2A9D8F]" />
              {Object.keys(categoryCounts).length} Categories
            </span>

            {totalTimeSeconds && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] text-xs font-bold text-[#2D2723] font-mono-code">
                <Clock className="w-3.5 h-3.5 text-[#8A7D71]" />
                {formatSeconds(totalTimeSeconds)}
              </span>
            )}
          </div>

          {/* Categories Visited Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#F0EAE1]">
            {Object.entries(categoryCounts).map(([cat, count]) => (
              <span
                key={cat}
                className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-2xs ${getCategoryBadgeStyle(
                  cat as PromptCategory
                )}`}
              >
                {cat} × {count}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable Step Timeline */}
        <div className="flex-1 overflow-y-auto py-5 space-y-3 pr-1.5 my-1">
          {promptHistory.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#8A7D71]">
              No prompts were recorded for this session.
            </div>
          ) : (
            promptHistory.map((item, index) => {
              const stepDuration =
                item.shownAt && item.completedAt
                  ? Math.max(1, Math.round((item.completedAt - item.shownAt) / 1000))
                  : null;

              return (
                <div
                  key={`${item.promptId}-${index}`}
                  className="p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] hover:border-[#D8CEBE] transition-all flex items-start gap-3.5"
                >
                  {/* Step Index Number */}
                  <div className="w-8 h-8 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-mono-code font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    {index + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {/* Chosen Category Badge */}
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${getCategoryBadgeStyle(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>

                      {/* Step Duration (if available) */}
                      {stepDuration && (
                        <span className="text-[11px] font-mono-code text-[#8A7D71] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#A89C8F]" />
                          {formatSeconds(stepDuration)}
                        </span>
                      )}
                    </div>

                    {/* Prompt Text */}
                    <p className="text-sm sm:text-base font-extrabold text-[#2D2723] leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#E8E0D5] flex items-center justify-between gap-3">
          <button
            onClick={handleCopyHistory}
            className="px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] hover:bg-[#EFE9DF] text-[#5C5046] font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#2A9D8F]" />
                <span className="text-[#2A9D8F]">COPIED SEQUENCE!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8A7D71]" />
                <span>COPY SEQUENCE</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#2D2723] hover:bg-[#433B35] text-white font-extrabold text-xs tracking-wider transition-colors shadow-xs"
          >
            DONE REVIEWING
          </button>
        </div>
      </div>
    </div>
  );
};
