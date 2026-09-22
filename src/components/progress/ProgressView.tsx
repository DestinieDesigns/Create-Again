import React from 'react';
import {
  Palette,
  Sparkles,
  Flame,
  Trophy,
  Calendar,
  Compass,
  ArrowLeft,
  Heart,
  BookOpen,
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
  const statCards = [
    {
      label: 'Things Created',
      value: stats.thingsCreated,
      icon: Palette,
      desc: 'Physical drawings brought to life on your page',
      color: 'bg-[#FFF2E6] text-[#E06D53]',
    },
    {
      label: 'Mystery Adventures',
      value: stats.mysteryDrawings,
      icon: Sparkles,
      desc: 'Step-by-step What Comes Next drawings',
      color: 'bg-[#FEF6E4] text-[#DDA15E]',
    },
    {
      label: 'Warmups Completed',
      value: stats.warmupsCompleted,
      icon: Flame,
      desc: 'Quick 2-minute loosening drills',
      color: 'bg-[#F2F4EB] text-[#606C38]',
    },
    {
      label: 'Total Sessions',
      value: stats.creativeSessions,
      icon: Compass,
      desc: 'Times you chose to sit down and make something',
      color: 'bg-[#EFE9DF] text-[#2D2723]',
    },
    {
      label: 'Days Creating',
      value: stats.daysCreating,
      icon: Calendar,
      desc: 'Distinct calendar days you touched pen to paper',
      color: 'bg-[#F7EDE2] text-[#7D5A50]',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      {/* Top Header */}
      <div className="pb-6 border-b border-[#E8E0D5]">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#8A7D71] hover:text-[#2D2723] mb-2 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2723] tracking-tight">
          Your Creative Journey
        </h1>
        <p className="text-sm font-handwriting text-2xl text-[#6B5E53] mt-1">
          Tracking the courage to show up and make a mark.
        </p>
      </div>

      {/* Core Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5] flex flex-col justify-between subtle-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
                  {stat.label}
                </span>
                <div className={`p-2 rounded-xl ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#2D2723] font-mono-code">
                  {stat.value}
                </div>
                <p className="text-xs text-[#7A6E63] mt-1 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Encouragement & Philosophy Section */}
      <div className="rounded-3xl bg-[#FAF7F2] border-2 border-[#E8E0D5] p-6 sm:p-8 my-8 text-center subtle-shadow">
        <Heart className="w-8 h-8 text-[#E06D53] mx-auto mb-3" />
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2723]">
          Why we don't have artist levels or points
        </h2>
        <p className="text-sm text-[#5C5046] mt-2 max-w-xl mx-auto leading-relaxed">
          Points and skill rankings turn creative play into work. Create Again doesn't care if a drawing is realistic, proportional, or finished.
        </p>
        <p className="text-base font-handwriting text-2xl text-[#2D2723] font-bold mt-3">
          “Start somewhere. Add something. See what happens.”
        </p>
      </div>

      {/* Quick launch */}
      <div className="text-center pt-4">
        <button
          onClick={onStartDrawing}
          className="px-8 py-3.5 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-sm shadow-md hover:bg-[#433B35] transition-all active:scale-95"
        >
          START ANOTHER DRAWING
        </button>
      </div>
    </div>
  );
};
