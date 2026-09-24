import React from 'react';
import { Home, Sparkles, FolderHeart, Compass, User, Palette } from 'lucide-react';

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
  onOpenWarmUp,
  onOpenMoreMenu,
}) => {
  const handleCreate = onOpenCreateChooser || onOpenCreate || (() => onNavigate('what-comes-next'));
  const handleChibi = onOpenChibiJourney || (() => onNavigate('chibi-journey'));

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8E0D5] px-1 py-1 shadow-lg pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-5 items-center h-14 max-w-lg mx-auto">
        {/* 1. Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-xl transition-colors ${
            currentTab === 'home'
              ? 'text-[#2D2723] font-bold'
              : 'text-[#8A7D71] hover:text-[#2D2723]'
          }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Home</span>
        </button>

        {/* 2. Chibi Character Journey */}
        <button
          onClick={handleChibi}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-xl transition-colors relative ${
            currentTab === 'chibi-journey'
              ? 'text-[#E06D53] font-bold'
              : 'text-[#8A7D71] hover:text-[#E06D53]'
          }`}
          aria-label="Chibi Character Journey"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-[#E06D53]" />
            {activeChibiExists && (
              <span
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E06D53] ring-1 ring-[#FAF7F2]"
                title="Active character in progress"
              />
            )}
          </div>
          <span className="text-[10px] mt-0.5 font-medium">Chibi</span>
        </button>

        {/* 3. Start Creating (Center Primary Action) */}
        <button
          onClick={handleCreate}
          className="flex flex-col items-center justify-center min-h-[44px] rounded-xl text-[#2D2723] font-bold transition-transform active:scale-95 relative"
          aria-label="Start creating"
        >
          <div className="w-9 h-9 rounded-full bg-[#2D2723] text-white flex items-center justify-center shadow-sm">
            <Palette className="w-4 h-4 text-[#FAF7F2]" />
          </div>
          <span className="text-[10px] mt-0.5 text-[#2D2723]">Create</span>
          {unfinishedSessionExists && (
            <span
              className="absolute top-1 right-3 w-2 h-2 rounded-full bg-[#D90429] ring-2 ring-[#FAF7F2]"
              title="Unfinished session"
            />
          )}
        </button>

        {/* 4. Collection */}
        <button
          onClick={() => onNavigate('collection')}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-xl transition-colors ${
            currentTab === 'collection'
              ? 'text-[#2D2723] font-bold'
              : 'text-[#8A7D71] hover:text-[#2D2723]'
          }`}
          aria-label="Collection"
        >
          <FolderHeart className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Collection</span>
        </button>

        {/* 5. Progress */}
        <button
          onClick={() => onNavigate('progress')}
          className={`flex flex-col items-center justify-center min-h-[44px] rounded-xl transition-colors ${
            currentTab === 'progress'
              ? 'text-[#2D2723] font-bold'
              : 'text-[#8A7D71] hover:text-[#2D2723]'
          }`}
          aria-label="Journey Progress"
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Journey</span>
        </button>
      </div>
    </nav>
  );
};
