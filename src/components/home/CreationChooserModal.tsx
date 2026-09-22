import React from 'react';
import { X, Sparkles, Flame, Dices, HelpCircle, ArrowRight } from 'lucide-react';

interface CreationChooserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode: (mode: 'what-comes-next' | 'warm-up' | 'chaos' | 'dont-know') => void;
}

export const CreationChooserModal: React.FC<CreationChooserModalProps> = ({
  isOpen,
  onClose,
  onSelectMode,
}) => {
  if (!isOpen) return null;

  const modes = [
    {
      id: 'what-comes-next' as const,
      title: 'WHAT COMES NEXT?',
      subtitle: "Don't know what you're drawing? Good.",
      description: 'A mystery drawing adventure where you only see one instruction at a time on your phone, and draw it on your physical paper.',
      badge: 'Signature Adventure',
      badgeColor: 'bg-[#E06D53] text-white',
      buttonLabel: 'TRY IT',
      icon: Sparkles,
      iconColor: 'text-[#E06D53]',
      borderColor: 'hover:border-[#E06D53]',
    },
    {
      id: 'warm-up' as const,
      title: 'WARM UP',
      subtitle: 'Get your hand moving.',
      description: 'Quick 2-minute physical drawing exercises for loose circles, pressure, blind contours, and releasing perfectionism.',
      badge: 'Quick Practice',
      badgeColor: 'bg-[#DDA15E] text-[#2D2723]',
      buttonLabel: 'WARM UP',
      icon: Flame,
      iconColor: 'text-[#DDA15E]',
      borderColor: 'hover:border-[#DDA15E]',
    },
    {
      id: 'chaos' as const,
      title: 'CREATIVE CHAOS',
      subtitle: 'Give me something weird.',
      description: 'Generates surprising, unexpected combinations (Character + Creature + Place + Mood) for you to sketch on your page.',
      badge: 'Surprise Generator',
      badgeColor: 'bg-[#606C38] text-white',
      buttonLabel: 'SURPRISE ME',
      icon: Dices,
      iconColor: 'text-[#606C38]',
      borderColor: 'hover:border-[#606C38]',
    },
    {
      id: 'dont-know' as const,
      title: "I DON'T KNOW WHAT TO DRAW",
      subtitle: 'Tell us how you are feeling.',
      description: "Pick your current mood or energy level and we'll give you a single comfortable place to start putting pencil to paper.",
      badge: 'Gentle Start',
      badgeColor: 'bg-[#8F8175] text-white',
      buttonLabel: 'HELP ME START',
      icon: HelpCircle,
      iconColor: 'text-[#8F8175]',
      borderColor: 'hover:border-[#8F8175]',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#E8E0D5]">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-[#8C7E72] font-mono-code">
              Creative Chooser
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight mt-1">
              What sounds good right now?
            </h2>
            <p className="text-sm text-[#6B6158] font-handwriting text-lg mt-0.5">
              Grab your sketchbook or pen. The screen tells you what to create.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                onClick={() => {
                  onSelectMode(mode.id);
                  onClose();
                }}
                className={`group flex flex-col justify-between p-5 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] cursor-pointer transition-all hover:bg-white hover:scale-[1.01] subtle-shadow ${mode.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${mode.badgeColor}`}>
                      {mode.badge}
                    </span>
                    <Icon className={`w-5 h-5 ${mode.iconColor}`} />
                  </div>
                  <h3 className="font-extrabold text-lg text-[#2D2723] group-hover:text-[#E06D53] transition-colors">
                    {mode.title}
                  </h3>
                  <div className="font-handwriting text-base font-bold text-[#8C7E72] mb-2">
                    {mode.subtitle}
                  </div>
                  <p className="text-xs text-[#5C5249] leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EAE2D7] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2D2723] group-hover:text-[#E06D53]">
                    {mode.buttonLabel}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#EFE9DF] group-hover:bg-[#2D2723] group-hover:text-[#FAF7F2] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
