import React, { useState } from 'react';
import {
  X,
  User,
  Sparkles,
  ArrowRight,
  Clock,
  Dices,
  Layers,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import {
  CHARACTER_DESIGN_STAGES,
  CHARACTER_SPARKS,
  CharacterDesignStage,
  CharacterSpark,
} from '../../data/characterDesignStages';

interface CharacterDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartFullWorkshop: (timerSeconds: number | null, startingStage?: number) => void;
  onStartSparkSession: (spark: CharacterSpark, timerSeconds: number | null) => void;
  onStartSpecificStage: (stage: CharacterDesignStage, timerSeconds: number | null) => void;
}

export const CharacterDesignModal: React.FC<CharacterDesignModalProps> = ({
  isOpen,
  onClose,
  onStartFullWorkshop,
  onStartSparkSession,
  onStartSpecificStage,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'spark' | 'stages'>('overview');
  const [timerDuration, setTimerDuration] = useState<number | null>(null); // null = untimed
  const [selectedSparkIndex, setSelectedSparkIndex] = useState(0);

  if (!isOpen) return null;

  const currentSpark = CHARACTER_SPARKS[selectedSparkIndex];

  const timerOptions = [
    { label: 'NO TIMER', value: null },
    { label: '5 MIN', value: 300 },
    { label: '10 MIN', value: 600 },
    { label: '15 MIN', value: 900 },
    { label: '20 MIN', value: 1200 },
  ];

  const handleShuffleSpark = () => {
    let next = Math.floor(Math.random() * CHARACTER_SPARKS.length);
    if (next === selectedSparkIndex) {
      next = (next + 1) % CHARACTER_SPARKS.length;
    }
    setSelectedSparkIndex(next);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Character Design Mode"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/65 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-3xl p-5 sm:p-7 paper-card border-2 border-[#2D2723] shadow-2xl max-h-[92vh] overflow-y-auto text-left">
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-4 border-b border-[#E8E0D5]">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#E06D53]">
              Creative Discipline
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFEAE5] text-[#C04D33] font-mono-code">
              9-Stage System
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight font-sans">
            CHARACTER DESIGN
          </h2>
          <p className="text-sm text-[#5C5046] mt-1 font-medium">
            Practice building characters from simple ideas into complete personalities.
          </p>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 mt-4 pt-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all min-h-[38px] flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'bg-[#2D2723] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#6E6054] hover:bg-[#EFE9DF]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Full Path</span>
            </button>

            <button
              onClick={() => setActiveTab('spark')}
              className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all min-h-[38px] flex items-center gap-1.5 ${
                activeTab === 'spark'
                  ? 'bg-[#2D2723] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#6E6054] hover:bg-[#EFE9DF]'
              }`}
            >
              <Dices className="w-3.5 h-3.5" />
              <span>Character Spark</span>
            </button>

            <button
              onClick={() => setActiveTab('stages')}
              className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all min-h-[38px] flex items-center gap-1.5 ${
                activeTab === 'stages'
                  ? 'bg-[#2D2723] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#6E6054] hover:bg-[#EFE9DF]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>9 Stages Explorer</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Overview & Path Explanation (Points 35 & 36) */}
        {activeTab === 'overview' && (
          <div className="py-4 space-y-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5]">
              <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] mb-2">
                WHAT YOU'LL EXPLORE
              </div>
              <p className="text-xs text-[#5C5046] mb-3">
                Build one living character on your page across 9 connected stages. Advance whenever you're ready, or stop early if you're happy with what you made.
              </p>

              {/* 9 Stages Grid */}
              <div className="grid grid-cols-3 gap-2">
                {CHARACTER_DESIGN_STAGES.map((stage) => (
                  <div
                    key={stage.id}
                    className="p-2.5 rounded-xl bg-white border border-[#E8E0D5] flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-md bg-[#FFF2E6] text-[#E06D53] text-[10px] font-mono-code font-bold flex items-center justify-center shrink-0">
                      {stage.stageNumber}
                    </span>
                    <span className="text-xs font-bold text-[#2D2723] truncate">
                      {stage.shortLabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timer preference selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] block">
                Session Pace / Timer
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {timerOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setTimerDuration(opt.value)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all min-h-[38px] ${
                      timerDuration === opt.value
                        ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723]'
                        : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#8A7D71] mt-1 font-medium">
                {timerDuration === null
                  ? 'No timer. Create peacefully at your own pace.'
                  : `Gentle countdown. Does not force you to finish.`}
              </p>
            </div>

            {/* Launch Primary Action */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onStartFullWorkshop(timerDuration);
                  onClose();
                }}
                className="w-full py-4 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 min-h-[52px]"
              >
                <span>START CHARACTER PATH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Character Spark Generator */}
        {activeTab === 'spark' && (
          <div className="py-4 space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF6EE] border-2 border-[#F3BE96]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#C04D33]">
                  CHARACTER SPARK
                </span>
                <button
                  onClick={handleShuffleSpark}
                  className="py-1 px-2.5 rounded-lg border border-[#E08D73] text-[11px] font-bold text-[#8A4A28] hover:bg-[#FDE0D3] transition-colors flex items-center gap-1"
                >
                  <Dices className="w-3 h-3" />
                  <span>SHUFFLE</span>
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
                {currentSpark.archetype}
              </h3>

              <div className="mt-3 space-y-2 text-xs sm:text-sm text-[#5C5046]">
                <p>
                  <strong className="text-[#2D2723]">Silhouette Tip:</strong> {currentSpark.silhouetteTip}
                </p>
                <p>
                  <strong className="text-[#2D2723]">Quirk:</strong> {currentSpark.quirk}
                </p>
                <p>
                  <strong className="text-[#2D2723]">Prop:</strong> {currentSpark.prop}
                </p>
                <p>
                  <strong className="text-[#2D2723]">Attitude:</strong> {currentSpark.mood}
                </p>
              </div>
            </div>

            {/* Timer preference */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A7D71] block">
                Session Pace / Timer
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {timerOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setTimerDuration(opt.value)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all min-h-[38px] ${
                      timerDuration === opt.value
                        ? 'bg-[#2D2723] text-[#FAF7F2] border-[#2D2723]'
                        : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#55473B] hover:bg-[#EFE9DF]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onStartSparkSession(currentSpark, timerDuration);
                  onClose();
                }}
                className="w-full py-4 px-6 rounded-2xl bg-[#2D2723] text-[#FAF7F2] font-extrabold text-base hover:bg-[#433B35] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 min-h-[52px]"
              >
                <Sparkles className="w-4 h-4 text-[#E5B574]" />
                <span>DRAW THIS CHARACTER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Stages Explorer */}
        {activeTab === 'stages' && (
          <div className="py-4 space-y-2.5 max-h-[55vh] overflow-y-auto pr-1">
            <p className="text-xs text-[#6E6054] mb-2 font-medium">
              Want to practice one specific aspect of character creation? Pick any stage below to jump straight into focused sketchbook drills.
            </p>

            {CHARACTER_DESIGN_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] hover:border-[#2D2723] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EFE9DF] text-[#E06D53] font-mono-code font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {stage.stageNumber}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#2D2723]">
                      {stage.name}
                    </h4>
                    <p className="text-xs text-[#6E6054] mt-0.5">
                      {stage.tagline}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onStartSpecificStage(stage, timerDuration);
                    onClose();
                  }}
                  className="self-end sm:self-center py-2 px-3.5 rounded-xl bg-[#2D2723] hover:bg-[#433B35] text-white text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 min-h-[38px]"
                >
                  <span>Practice Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
