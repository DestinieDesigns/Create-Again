import React from 'react';
import { Home, Sparkles, FolderHeart, Compass, Plus } from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenCreateChooser?: () => void;
  onOpenCreate?: () => void;
  onOpenChibiJourney?: () => void;
  unfinishedSessionExists?: boolean;
  activeChibiExists?: boolean;
  onOpenWarmUp?: () => void;
  onOpenMoreMenu?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onNavigate,
  onOpenCreateChooser,
  onOpenCreate,
  onOpenChibiJourney,
  unfinishedSessionExists = false,
  activeChibiExists = false,
}) => {
  const handleCreate = onOpenCreateChooser || onOpenCreate || (() => onNavigate('what-comes-next'));
  const handleChibi = onOpenChibiJourney || (() => onNavigate('chibi-journey'));

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-t border-[#E5E5DE] px-2 py-1 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-5 items-center h-14 max-w-md mx-auto">
        {/* 1. Home / Studio */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
            currentTab === 'home'
              ? 'text-[#16171A] font-semibold'
              : 'text-[#8A8A82] hover:text-[#16171A]'
          }`}
          aria-label="Studio Home"
        >
          <Home className="w-5 h-5 stroke-[1.8]" />
          <span className="text-[10px] mt-0.5">Studio</span>
        </button>

        {/* 2. Chibi Atelier */}
        <button
          onClick={handleChibi}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors relative ${
            currentTab === 'chibi-journey'
              ? 'text-[#2752E7] font-semibold'
              : 'text-[#8A8A82] hover:text-[#16171A]'
          }`}
          aria-label="Chibi Character Atelier"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 stroke-[1.8]" />
            {activeChibiExists && (
              <span
                className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#2752E7] ring-1 ring-white"
                title="Active character in progress"
              />
            )}
          </div>
          <span className="text-[10px] mt-0.5">Chibi</span>
        </button>

        {/* 3. New Session / Create */}
        <button
          onClick={handleCreate}
          className="flex flex-col items-center justify-center min-h-[44px] transition-transform active:scale-95"
          aria-label="New drawing session"
        >
          <div className="w-10 h-10 rounded-full bg-[#16171A] text-white flex items-center justify-center shadow-xs">
            <Plus className="w-5 h-5 stroke-[2.2]" />
          </div>
        </button>

        {/* 4. Archive / Collection */}
        <button
          onClick={() => onNavigate('collection')}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
            currentTab === 'collection'
              ? 'text-[#16171A] font-semibold'
              : 'text-[#8A8A82] hover:text-[#16171A]'
          }`}
          aria-label="Archive"
        >
          <FolderHeart className="w-5 h-5 stroke-[1.8]" />
          <span className="text-[10px] mt-0.5">Archive</span>
        </button>

        {/* 5. Progress */}
        <button
          onClick={() => onNavigate('progress')}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
            currentTab === 'progress'
              ? 'text-[#16171A] font-semibold'
              : 'text-[#8A8A82] hover:text-[#16171A]'
          }`}
          aria-label="Progress"
        >
          <Compass className="w-5 h-5 stroke-[1.8]" />
          <span className="text-[10px] mt-0.5">Progress</span>
        </button>
      </div>
    </nav>
  );
};
