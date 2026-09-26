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
      title: 'Just Start',
      description: 'Quick 2-minute session to break through hesitation.',
      icon: PenLine,
      action: onQuickStart,
    },
    {
      id: 'surprise-me',
      title: 'Surprise Me',
      description: 'Unpredictable random prompt combination.',
      icon: Shuffle,
      action: onSurpriseMe,
    },
    {
      id: 'lets-create',
      title: "Let's Create",
      description: 'Hop straight into the mystery drawing adventure.',
      icon: Sparkles,
      action: onLetsCreate,
    },
    {
      id: 'get-back',
      title: 'Get Back Into It',
      description: 'Gentle warmup exercise for loose hands and relaxed mind.',
      icon: Sprout,
      action: onWarmUp,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto my-8">
      <div className="flex items-center justify-between border-b border-[#E5E5DE] pb-2 text-xs text-[#686862] mb-4">
        <div className="flex items-center gap-2 font-semibold">
          <span className="font-mono-code text-[#16171A]">QUICK LAUNCH</span>
          <span aria-hidden="true">·</span>
          <span>Instant Studio Sparks</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {vibes.map((v) => {
          const Icon = v.icon;
          return (
            <button
              key={v.id}
              onClick={v.action}
              className="p-5 rounded-xl bg-white border border-[#E5E5DE] hover:border-[#16171A] text-left flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs group min-h-[140px]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#F4F4F0] text-[#16171A] group-hover:bg-[#16171A] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#CDCDC4] group-hover:text-[#16171A] group-hover:translate-x-0.5 transition-all" />
                </div>
                <h4 className="font-display font-bold text-base text-[#16171A] tracking-tight group-hover:text-[#2752E7] transition-colors">
                  {v.title}
                </h4>
                <p className="text-xs text-[#686862] mt-1 line-clamp-2 leading-relaxed">
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
