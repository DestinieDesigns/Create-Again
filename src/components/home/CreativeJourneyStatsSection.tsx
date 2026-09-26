import React from 'react';
import { Palette, Sparkles, Flame, Compass, Calendar, ArrowRight } from 'lucide-react';
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
      label: 'Creations',
      value: stats.thingsCreated,
      icon: Palette,
    },
    {
      label: 'Mysteries',
      value: stats.mysteryDrawings,
      icon: Sparkles,
    },
    {
      label: 'Warm-Ups',
      value: stats.warmupsCompleted,
      icon: Flame,
    },
    {
      label: 'Sessions',
      value: stats.creativeSessions,
      icon: Compass,
    },
    {
      label: 'Active Days',
      value: stats.daysCreating,
      icon: Calendar,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto my-8">
      <div className="flex items-center justify-between border-b border-[#E5E5DE] pb-2 text-xs text-[#686862] mb-4">
        <div className="flex items-center gap-2 font-semibold">
          <span className="font-mono-code text-[#16171A]">STUDIO LOG</span>
          <span aria-hidden="true">·</span>
          <span>Cumulative Metrics</span>
        </div>
        <button
          onClick={onViewDetailedJourney}
          className="text-xs font-semibold text-[#16171A] hover:text-[#2752E7] flex items-center gap-1 transition-colors"
        >
          <span>Full Journey</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-4 rounded-xl bg-white border border-[#E5E5DE] flex flex-col justify-between text-left shadow-2xs"
            >
              <div className="flex items-center justify-between text-[#8A8A82] mb-2">
                <span className="text-[11px] font-medium">{stat.label}</span>
                <Icon className="w-3.5 h-3.5 stroke-[1.8]" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#16171A] font-mono-code tabular-nums">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
