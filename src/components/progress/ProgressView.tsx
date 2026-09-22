import React from 'react';
import {
  Palette,
  Sparkles,
  Flame,
  Calendar,
  Compass,
  ArrowLeft,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { CreativeStats } from '../../types/session';

interface ProgressViewProps {
  stats: CreativeStats;
  onBackToHome: () => void;
  onStartDrawing: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  stats,
  onBackToHome,
  onStartDrawing,
}) => {
  const practicedItems = [
    { title: 'Marks & Lines', desc: 'Loose strokes, line weight, hatching' },
    { title: 'Simple Shapes', desc: 'Circles, triangles, cylinders as building blocks' },
    { title: 'Character Heads', desc: 'Head construction and silhouette shapes' },
    { title: 'Expressions', desc: 'Eyes, brows, smiles, and mood cues' },
    { title: 'Quick Warm-ups', desc: '2-minute hand loosening drills' },
  ];

  const exploringItems = [
    { title: 'Environment & Setting', desc: 'Foreground trees, horizon lines, small doorways' },
    { title: 'Perspective & Scale', desc: 'Near vs. far, simple isometric angles' },
    { title: 'Storytelling & Composition', desc: 'Placing objects and characters in scenes' },
  ];

  return (
    <div className="app-container py-6 sm:py-10 animate-fadeIn text-left">
      {/* Top Header */}
      <div className="pb-6 border-b border-[#E8E0D5]">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] mb-2 transition-colors min-h-[44px] -ml-1 px-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2D2723] tracking-tight font-sans">
          YOUR CREATIVE JOURNEY
        </h1>
        <p className="text-xs sm:text-sm font-handwriting text-lg sm:text-xl text-[#7A6E63] mt-0.5">
          Tracking the courage to show up and make a mark.
        </p>
      </div>

      {/* Participation Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        <div className="p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5]">
          <div className="text-[10px] font-mono-code font-bold uppercase text-[#8A7D71]">
            Drawings Made
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] mt-1">
            {stats.thingsCreated}
          </div>
          <div className="text-[11px] text-[#7A6E63] mt-0.5">On physical paper</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5]">
          <div className="text-[10px] font-mono-code font-bold uppercase text-[#8A7D71]">
            Mystery Steps
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] mt-1">
            {stats.mysteryDrawings}
          </div>
          <div className="text-[11px] text-[#7A6E63] mt-0.5">Step-by-step</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5]">
          <div className="text-[10px] font-mono-code font-bold uppercase text-[#8A7D71]">
            Warm-Ups Done
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] mt-1">
            {stats.warmupsCompleted}
          </div>
          <div className="text-[11px] text-[#7A6E63] mt-0.5">Hand looseners</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5]">
          <div className="text-[10px] font-mono-code font-bold uppercase text-[#8A7D71]">
            Days Creating
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] mt-1">
            {stats.daysCreating}
          </div>
          <div className="text-[11px] text-[#7A6E63] mt-0.5">Touched pen to paper</div>
        </div>
      </div>

      {/* Two Column Section: Things you've practiced vs. Currently exploring */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Left: Things you've practiced */}
        <div className="p-6 rounded-3xl bg-[#FAF7F2] border-2 border-[#E8E0D5]">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#3B6324]" />
            <h2 className="text-lg font-extrabold text-[#2D2723] font-sans">
              Things you've practiced
            </h2>
          </div>

          <div className="space-y-3">
            {practicedItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-[#E8E0D5]">
                <span className="text-[#3B6324] font-bold mt-0.5">✓</span>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-[#2D2723]">
                    {item.title}
                  </span>
                  <span className="block text-[11px] text-[#7A6E63]">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Currently exploring */}
        <div className="p-6 rounded-3xl bg-[#FAF7F2] border-2 border-[#E8E0D5]">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-5 h-5 text-[#E06D53]" />
            <h2 className="text-lg font-extrabold text-[#2D2723] font-sans">
              Currently exploring
            </h2>
          </div>

          <div className="space-y-3">
            {exploringItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-[#E8E0D5]">
                <span className="text-[#E06D53] font-bold mt-0.5">→</span>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-[#2D2723]">
                    {item.title}
                  </span>
                  <span className="block text-[11px] text-[#7A6E63]">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reminder Banner */}
      <div className="p-5 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-6">
        <div>
          <h3 className="text-sm font-extrabold text-[#2D2723]">
            No scores. No rankings. No judging.
          </h3>
          <p className="text-xs text-[#7A6E63] mt-0.5">
            Drawing is an intimate human practice. The goal is simply to make marks and enjoy the process.
          </p>
        </div>

        <button
          onClick={onStartDrawing}
          className="py-3 px-6 rounded-xl bg-[#2D2723] text-white font-bold text-xs hover:bg-[#433B35] transition-all min-h-[44px] shrink-0"
        >
          DRAW SOMETHING TODAY
        </button>
      </div>
    </div>
  );
};
