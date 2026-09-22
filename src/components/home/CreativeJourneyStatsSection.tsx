import React from 'react';
import { Palette, Sparkles, Flame, Trophy, Compass, Calendar, ArrowRight } from 'lucide-react';
import { CreativeStats } from '../../types/session';

interface CreativeJourneyStatsSectionProps {
  stats: CreativeStats;
  onViewDetailedJourney: () => void;
}

export const CreativeJourneyStatsSection: React.FC<CreativeJourneyStatsSectionProps> = ({
  stats,
  onViewDetailedJourney,
}) => {
  const statCards = [
    {
      label: 'Things Created',
      value: stats.thingsCreated,
      icon: Palette,
      color: 'text-[#E06D53]',
    },
    {
      label: 'Mystery Drawings',
      value: stats.mysteryDrawings,
      icon: Sparkles,
      color: 'text-[#DDA15E]',
    },
    {
      label: 'Warmups Done',
      value: stats.warmupsCompleted,
      icon: Flame,
      color: 'text-[#606C38]',
    },
    {
      label: 'Creative Sessions',
      value: stats.creativeSessions,
      icon: Compass,
      color: 'text-[#2D2723]',
    },
    {
      label: 'Days Creating',
      value: stats.daysCreating,
      icon: Calendar,
      color: 'text-[#7D5A50]',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 my-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
            Your Creative Journey
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
            Every mark counts
          </h3>
        </div>
        <button
          onClick={onViewDetailedJourney}
          className="text-xs font-bold text-[#E06D53] hover:text-[#C04D33] flex items-center gap-1 transition-colors"
        >
          <span>View Progress</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#FCFAF6] border-2 border-[#E8E0D5] flex flex-col justify-between text-center subtle-shadow"
            >
              <div className="flex items-center justify-center mb-1">
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] my-1 font-mono-code">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold text-[#73675E] leading-tight">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 text-center">
        <span className="text-xs text-[#8A7D71] font-handwriting text-base">
          No artist scores. No judging. Just minutes spent making things.
        </span>
      </div>
    </section>
  );
};
