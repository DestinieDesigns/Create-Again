import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Pencil,
  CheckCircle2,
  Smile,
  Compass,
} from 'lucide-react';
import { ChibiCharacter } from '../../types/chibi';

interface ChibiStoryContinuationModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: ChibiCharacter;
}

export const ChibiStoryContinuationModal: React.FC<ChibiStoryContinuationModalProps> = ({
  isOpen,
  onClose,
  character,
}) => {
  const [episodeIndex, setEpisodeIndex] = useState(0);

  if (!isOpen) return null;

  const charName = character.name || 'Your Character';
  const charProp = character.accessories?.[0] || 'their favorite item';
  const charWorld = character.customWorld || character.world || 'their world';
  const companionName = character.companion?.nameOrKind || 'their companion';

  // 5 episodic story chapters tailored dynamically to THIS character
  const storyChapters = [
    {
      chapterNumber: 1,
      title: 'Chapter 1: The Waking Clue',
      prompt: `${charName} wakes up in ${charWorld} and immediately notices something out of place right next to their ${charProp}.`,
      teacherTip:
        'Draw them yawning or rubbing an eye with one hand while pointing at the mysterious object with the other.',
      drawGoal: 'Capture the moment of sudden realization in their posture.',
    },
    {
      chapterNumber: 2,
      title: 'Chapter 2: An Unexpected Absence',
      prompt: `Something very small but deeply treasured has gone missing! ${charName} turns to ${companionName} in confusion.`,
      teacherTip:
        'Show two contrasting reactions: if your character looks startled, let their companion look curious or unfazed.',
      drawGoal: 'Draw both figures side-by-side reacting to the empty shelf or hollow log.',
    },
    {
      chapterNumber: 3,
      title: 'Chapter 3: Following the Trail',
      prompt: `A series of tiny glowing footprints leads right through ${charWorld}. ${charName} gathers their gear to follow.`,
      teacherTip:
        'Use an active walking or crouching pose. Place their companion riding on their shoulder or pointing the way.',
      drawGoal: 'Draw them mid-stride, carrying their key accessory with determination.',
    },
    {
      chapterNumber: 4,
      title: 'Chapter 4: The Hidden Nook',
      prompt: `The trail ends at an unexpected miniature door or hollow. Warm lantern light is spilling out from under the crack.`,
      teacherTip:
        'Show them peeking cautiously around a boulder or doorframe with wide, curious eyes.',
      drawGoal: 'Draw a single-panel vignette focusing on dramatic lighting cast onto their face.',
    },
    {
      chapterNumber: 5,
      title: 'Chapter 5: A New Friendship',
      prompt: `Behind the door wasn’t a thief at all, but another tiny creature who borrowed the item to fix a broken music box. ${charName} and ${companionName} share a pastry with their new friend.`,
      teacherTip:
        'End on a heartwarming, joyful note! Three characters clustered together around a tiny steaming cup or pastry.',
      drawGoal: 'A cozy final illustration concluding this chapter of their journey.',
    },
  ];

  const currentChapter = storyChapters[episodeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Continue Character Story"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/65 backdrop-blur-xs animate-fadeIn text-[#2D2723]"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] paper-card subtle-shadow flex flex-col overflow-hidden text-left max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FBEFEA] text-[#E06D53] flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A7D71]">
                Interactive Episodic Journey
              </div>
              <h2 className="text-lg sm:text-xl font-black text-[#2D2723]">
                CONTINUE {charName.toUpperCase()}’S STORY
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter Progress Indicators */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between border-b border-[#F0EBE1] bg-[#FCFAF6]">
          <div className="flex items-center gap-2">
            {storyChapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setEpisodeIndex(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  episodeIndex === idx
                    ? 'bg-[#E06D53] text-white shadow-xs'
                    : idx < episodeIndex
                    ? 'bg-[#EFE9DF] text-[#2D2723]'
                    : 'bg-[#FAF7F2] text-[#B0A599] border border-[#E8E0D5]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-[#8A7D71]">
            Chapter {episodeIndex + 1} of 5
          </span>
        </div>

        {/* Chapter Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-[#E06D53] uppercase tracking-wider">
              {currentChapter.title}
            </span>
            <p className="text-base sm:text-lg font-extrabold text-[#2D2723] leading-relaxed">
              "{currentChapter.prompt}"
            </p>
          </div>

          {/* Sketchbook Prompt Box */}
          <div className="p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#2D2723] space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#E06D53] uppercase">
              <Pencil className="w-3.5 h-3.5" />
              <span>ON YOUR PAPER:</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#2D2723]">
              {currentChapter.drawGoal}
            </p>
            <p className="text-xs text-[#6B6158] italic pt-1">
              Teacher Tip: {currentChapter.teacherTip}
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-[#E8E0D5] bg-[#FCFAF6] flex items-center justify-between">
          <button
            disabled={episodeIndex === 0}
            onClick={() => setEpisodeIndex((p) => p - 1)}
            className="px-4 py-2.5 rounded-xl border border-[#D8CEBE] text-xs font-bold text-[#2D2723] hover:bg-[#FAF7F2] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>PREVIOUS CHAPTER</span>
          </button>

          {episodeIndex < storyChapters.length - 1 ? (
            <button
              onClick={() => setEpisodeIndex((p) => p + 1)}
              className="px-5 py-2.5 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white text-xs font-extrabold flex items-center gap-1.5 shadow-xs"
            >
              <span>NEXT CHAPTER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#2D2723] hover:bg-[#433A34] text-white text-xs font-extrabold flex items-center gap-1.5 shadow-xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>FINISH STORY SPREAD</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
