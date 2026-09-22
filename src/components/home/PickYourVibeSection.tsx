import React from 'react';
import { PenLine, Shuffle, Sparkles, Sprout, ArrowRight } from 'lucide-react';

interface PickYourVibeSectionProps {
  onQuickStart: () => void;
  onSurpriseMe: () => void;
  onLetsCreate: () => void;
  onWarmUp: () => void;
}

export const PickYourVibeSection: React.FC<PickYourVibeSectionProps> = ({
  onQuickStart,
  onSurpriseMe,
  onLetsCreate,
  onWarmUp,
}) => {
  const vibes = [
    {
      id: 'just-start',
      title: 'JUST START',
      description: 'Quick 2-minute session to break through hesitation.',
      icon: PenLine,
      color: 'bg-[#F2ECE3] border-[#DDD3C4] text-[#2D2723]',
      iconColor: 'text-[#E06D53]',
      action: onQuickStart,
    },
    {
      id: 'surprise-me',
      title: 'SURPRISE ME',
      description: 'Unpredictable random prompt combination.',
      icon: Shuffle,
      color: 'bg-[#F2ECE3] border-[#DDD3C4] text-[#2D2723]',
      iconColor: 'text-[#606C38]',
      action: onSurpriseMe,
    },
    {
      id: 'lets-create',
      title: "LET'S CREATE",
      description: 'Hop straight into the mystery drawing adventure.',
      icon: Sparkles,
      color: 'bg-[#F2ECE3] border-[#DDD3C4] text-[#2D2723]',
      iconColor: 'text-[#DDA15E]',
      action: onLetsCreate,
    },
    {
      id: 'get-back',
      title: 'GET BACK INTO IT',
      description: 'Gentle warmup exercise for loose hands and relaxed mind.',
      icon: Sprout,
      color: 'bg-[#F2ECE3] border-[#DDD3C4] text-[#2D2723]',
      iconColor: 'text-[#283618]',
      action: onWarmUp,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 my-10">
      <div className="mb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
          Quick Start
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
          Pick your vibe
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {vibes.map((v) => {
          const Icon = v.icon;
          return (
            <button
              key={v.id}
              onClick={v.action}
              className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all hover:scale-[1.02] hover:bg-white subtle-shadow group ${v.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl bg-white shadow-xs ${v.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A89C8F] group-hover:text-[#2D2723] group-hover:translate-x-0.5 transition-all" />
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#2D2723] tracking-tight">
                  {v.title}
                </h4>
                <p className="text-xs text-[#6B5F55] mt-1 line-clamp-2 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
