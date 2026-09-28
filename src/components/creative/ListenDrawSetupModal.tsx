import React, { useState } from 'react';
import {
  X,
  Volume2,
  Clock,
  Sparkles,
  ArrowRight,
  Headphones,
  Bell,
  Smartphone,
  Info,
} from 'lucide-react';
import {
  ListenDrawActivityType,
  ListenDrawConfig,
  ListenDrawVoiceStyle,
  ListenDrawWarningProfile,
} from '../../types/listenDraw';

interface ListenDrawSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: (config: ListenDrawConfig) => void;
}

export const ListenDrawSetupModal: React.FC<ListenDrawSetupModalProps> = ({
  isOpen,
  onClose,
  onStart,
}) => {
  const [selectedActivity, setSelectedActivity] = useState<ListenDrawActivityType>('what-comes-next');
  const [selectedDuration, setSelectedDuration] = useState<number>(300); // 5 min default
  const [selectedVoice, setSelectedVoice] = useState<ListenDrawVoiceStyle>('calm');
  const [selectedWarning, setSelectedWarning] = useState<ListenDrawWarningProfile>('minimal');

  if (!isOpen) return null;

  const activities: {
    id: ListenDrawActivityType;
    title: string;
    description: string;
  }[] = [
    {
      id: 'what-comes-next',
      title: 'What Comes Next?',
      description: 'Signature mystery journey: draw mark by mark without knowing what follows.',
    },
    {
      id: 'warm-up',
      title: 'Hand Warm-Up',
      description: 'Quick hand-loosening exercises, lines, rhythms, and gestures.',
    },
    {
      id: 'chibi',
      title: 'Chibi Character',
      description: 'Structured character creation: head silhouette, eyes, hair, and body.',
    },
    {
      id: 'creative-chaos',
      title: 'Creative Chaos',
      description: 'Unexpected mashup of character, setting, object, and atmosphere.',
    },
  ];

  const durations = [
    { label: '5 MIN', value: 300, desc: 'Quick session' },
    { label: '10 MIN', value: 600, desc: 'Standard practice' },
    { label: '20 MIN', value: 1200, desc: 'Deep sketch' },
    { label: '30 MIN', value: 1800, desc: 'Full page' },
  ];

  const voiceStyles: {
    id: ListenDrawVoiceStyle;
    label: string;
    desc: string;
  }[] = [
    { id: 'calm', label: 'Calm', desc: 'Slow, reassuring, unhurried' },
    { id: 'guided', label: 'Guided', desc: 'Clear, crisp instructional pacing' },
    { id: 'think-fast', label: 'Think Fast', desc: 'Short, upbeat, energetic' },
    { id: 'minimal', label: 'Minimal', desc: 'Bare essentials only' },
  ];

  const warningProfiles: {
    id: ListenDrawWarningProfile;
    label: string;
    desc: string;
  }[] = [
    { id: 'minimal', label: 'Minimal', desc: '30s and 10s warnings' },
    { id: 'full', label: 'Full', desc: 'Halfway, 1 min, 30s, 10s' },
    { id: 'none', label: 'None', desc: 'Pure silence until time is up' },
  ];

  const handleStart = () => {
    onStart({
      activityType: selectedActivity,
      totalDurationSeconds: selectedDuration,
      voiceStyle: selectedVoice,
      warningProfile: selectedWarning,
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Listen & Draw Setup"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#16171A]/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5DE] shadow-xl text-left max-h-[92vh] overflow-y-auto space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F4F4F0] text-[#8A8A82] hover:text-[#16171A] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 text-center">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono-code font-bold uppercase tracking-widest text-[#2752E7]">
            <Headphones className="w-3.5 h-3.5" />
            <span>HANDS-FREE MODE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#16171A] tracking-tight">
            Listen & Draw
          </h2>
          <p className="text-xs sm:text-sm text-[#686862] max-w-sm mx-auto">
            Look when you need the reference. Listen when you're creating.
          </p>
        </div>

        {/* 1. Choose Activity */}
        <div className="space-y-2">
          <label className="block text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
            1. Choose an Activity
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activities.map((act) => {
              const isSelected = selectedActivity === act.id;
              return (
                <button
                  key={act.id}
                  onClick={() => setSelectedActivity(act.id)}
                  className={`p-3 rounded-xl border text-left transition-colors flex flex-col justify-between min-h-[72px] ${
                    isSelected
                      ? 'bg-[#16171A] text-white border-[#16171A] shadow-2xs'
                      : 'bg-white border-[#E5E5DE] text-[#16171A] hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div className="font-semibold text-xs">{act.title}</div>
                  <div
                    className={`text-[11px] leading-snug mt-1 ${
                      isSelected ? 'text-[#C4C4BC]' : 'text-[#8A8A82]'
                    }`}
                  >
                    {act.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Choose Time */}
        <div className="space-y-2">
          <label className="block text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
            2. Total Time
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {durations.map((d) => {
              const isSelected = selectedDuration === d.value;
              return (
                <button
                  key={d.label}
                  onClick={() => setSelectedDuration(d.value)}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isSelected
                      ? 'bg-[#16171A] text-white border-[#16171A]'
                      : 'bg-white border-[#E5E5DE] text-[#16171A] hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div className="font-mono-code font-bold text-xs">{d.label}</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      isSelected ? 'text-[#C4C4BC]' : 'text-[#8A8A82]'
                    }`}
                  >
                    {d.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Voice Style */}
        <div className="space-y-2">
          <label className="block text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
            3. Voice Companion Style
          </label>
          <div className="grid grid-cols-2 gap-2">
            {voiceStyles.map((v) => {
              const isSelected = selectedVoice === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVoice(v.id)}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    isSelected
                      ? 'bg-white border-[#2752E7] ring-1 ring-[#2752E7] text-[#16171A]'
                      : 'bg-white border-[#E5E5DE] text-[#686862] hover:text-[#16171A]'
                  }`}
                >
                  <div className="font-semibold text-xs text-[#16171A]">{v.label}</div>
                  <div className="text-[10px] text-[#8A8A82]">{v.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Warning Profile */}
        <div className="space-y-2">
          <label className="block text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
            4. Time Warning Frequency
          </label>
          <div className="grid grid-cols-3 gap-2">
            {warningProfiles.map((w) => {
              const isSelected = selectedWarning === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setSelectedWarning(w.id)}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    isSelected
                      ? 'bg-white border-[#2752E7] ring-1 ring-[#2752E7] text-[#16171A]'
                      : 'bg-white border-[#E5E5DE] text-[#686862] hover:text-[#16171A]'
                  }`}
                >
                  <div className="font-semibold text-xs text-[#16171A]">{w.label}</div>
                  <div className="text-[10px] text-[#8A8A82]">{w.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Browser Notice (Section: Important Browser Limitation) */}
        <div className="p-3.5 bg-[#FAF9F5] rounded-xl border border-[#E5E5DE] text-xs text-[#686862] flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#8A8A82] shrink-0 mt-0.5" />
          <div className="leading-relaxed text-[11px]">
            <span className="font-semibold text-[#16171A]">Tip:</span> Keep this browser tab open while creating. You can put the device face-up beside your paper—the app advances automatically without touching the screen.
          </div>
        </div>

        {/* Primary Action Button */}
        <div>
          <button
            onClick={handleStart}
            className="w-full py-4 px-6 rounded-2xl bg-[#16171A] text-white font-semibold text-base hover:bg-[#2C2D32] transition-colors shadow-2xs flex items-center justify-center gap-2 group min-h-[50px] active:scale-[0.99]"
          >
            <span>Start Listen & Draw</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
