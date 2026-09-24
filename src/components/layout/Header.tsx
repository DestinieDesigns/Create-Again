import React, { useState } from 'react';
import {
  Menu,
  X,
  Settings,
  Home,
  Sparkles,
  Flame,
  Compass,
  FolderHeart,
  BarChart3,
  BookOpen,
  Palette,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenCreateChooser: () => void;
  onOpenMasterSheet?: () => void;
  onOpenSettings?: () => void;
  onOpenWarmUp?: () => void;
  onOpenChaos?: () => void;
  onOpenChallenge?: () => void;
  onOpenPathways?: () => void;
  onOpenWhatComesNext?: () => void;
  onOpenCharacterDesign?: () => void;
  onOpenChibiJourney?: () => void;
  unfinishedSessionExists: boolean;
  mobileMenuOpen?: boolean;
  onToggleMobileMenu?: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenCreateChooser,
  onOpenMasterSheet,
  onOpenSettings,
  onOpenWarmUp,
  onOpenChaos,
  onOpenChallenge,
  onOpenPathways,
  onOpenWhatComesNext,
  onOpenCharacterDesign,
  onOpenChibiJourney,
  unfinishedSessionExists,
  mobileMenuOpen: controlledMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const [createSubmenuExpanded, setCreateSubmenuExpanded] = useState(true);

  const isMenuOpen = controlledMobileMenuOpen !== undefined ? controlledMobileMenuOpen : internalMenuOpen;
  const setMenuOpen = (val: boolean) => {
    if (onToggleMobileMenu) {
      onToggleMobileMenu(val);
    } else {
      setInternalMenuOpen(val);
    }
  };

  const handleNav = (tab: string) => {
    if (tab === 'settings') {
      if (onOpenSettings) onOpenSettings();
    } else if (tab === 'practice') {
      if (onOpenWarmUp) onOpenWarmUp();
      else onNavigate('practice');
    } else if (tab === 'challenges') {
      if (onOpenChallenge) onOpenChallenge();
      else if (onOpenChaos) onOpenChaos();
      else onNavigate('challenges');
    } else if (tab === 'create') {
      onOpenCreateChooser();
    } else if (tab === 'master-sheet') {
      if (onOpenMasterSheet) onOpenMasterSheet();
    } else {
      onNavigate(tab);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E0D5]">
      <div className="app-container h-15 sm:h-16 flex items-center justify-between">
        {/* Left Slot: Mobile Menu Trigger (Mobile only) / Brand (Tablet & Desktop) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu Icon (0–767px) */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 -ml-2 rounded-xl text-[#2D2723] hover:bg-[#EFE9DF] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5 stroke-[2.2]" /> : <Menu className="w-5 h-5 stroke-[2.2]" />}
          </button>

          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 text-left group transition-transform active:scale-98"
          >
            {/* Small handmade-style icon badge */}
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#2D2723] text-[#FAF7F2] flex items-center justify-center font-bold shadow-xs">
              <span className="font-handwriting text-lg leading-none -mt-0.5">C</span>
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-[#2D2723] font-sans">
                CREATE AGAIN
              </span>
              <span className="text-[10px] font-handwriting text-[#7A6F66] hidden lg:block -mt-1 font-bold">
                your sketchbook companion
              </span>
            </div>
          </button>
        </div>

        {/* Center / Right: Desktop & Tablet Nav */}
        {/* Desktop Nav (1024px+): Home, Create, Chibi Journey, Practice, Challenges, Collection, Progress */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          <button
            onClick={() => handleNav('home')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'home'
                ? 'bg-[#2D2723] text-[#FAF7F2]'
                : 'text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNav('create')}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#2D2723] bg-[#EFE9DF] hover:bg-[#E5DDCF] transition-all flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
            <span>Create</span>
          </button>

          <button
            onClick={() => {
              if (onOpenChibiJourney) onOpenChibiJourney();
              else handleNav('chibi-journey');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentTab === 'chibi-journey'
                ? 'bg-[#E06D53] text-white shadow-xs'
                : 'text-[#E06D53] bg-[#FBEFEA] hover:bg-[#F7DFD6]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chibi Journey</span>
          </button>

          <button
            onClick={() => handleNav('practice')}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF] transition-all"
          >
            Practice
          </button>

          <button
            onClick={() => handleNav('challenges')}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF] transition-all"
          >
            Challenges
          </button>

          <button
            onClick={() => handleNav('collection')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'collection'
                ? 'bg-[#2D2723] text-[#FAF7F2]'
                : 'text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF]'
            }`}
          >
            Collection
          </button>

          <button
            onClick={() => handleNav('progress')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'progress'
                ? 'bg-[#2D2723] text-[#FAF7F2]'
                : 'text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF]'
            }`}
          >
            Progress
          </button>
        </nav>

        {/* Tablet Nav (768–1023px): Compact horizontal tabs + more menu */}
        <nav aria-label="Tablet Navigation" className="hidden md:flex lg:hidden items-center gap-1">
          <button
            onClick={() => handleNav('home')}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'home'
                ? 'bg-[#2D2723] text-[#FAF7F2]'
                : 'text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('create')}
            className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-[#2D2723] bg-[#EFE9DF] hover:bg-[#E5DDCF] transition-all"
          >
            Create
          </button>
          <button
            onClick={() => {
              if (onOpenChibiJourney) onOpenChibiJourney();
              else handleNav('chibi-journey');
            }}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'chibi-journey'
                ? 'bg-[#E06D53] text-white'
                : 'text-[#E06D53] bg-[#FBEFEA] hover:bg-[#F7DFD6]'
            }`}
          >
            Chibi
          </button>
          <button
            onClick={() => handleNav('practice')}
            className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF] transition-all"
          >
            Practice
          </button>
          <button
            onClick={() => handleNav('collection')}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'collection'
                ? 'bg-[#2D2723] text-[#FAF7F2]'
                : 'text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF]'
            }`}
          >
            Collection
          </button>
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded-xl text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF] transition-all"
            aria-label="More options"
          >
            <Menu className="w-4 h-4" />
          </button>
        </nav>

        {/* Right Slot: Resume button & Settings icon */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {unfinishedSessionExists && (
            <button
              onClick={() => handleNav('what-comes-next')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#E06D53] text-white text-xs font-bold hover:bg-[#CF5E45] shadow-xs transition-all active:scale-95"
              title="Resume drawing session"
            >
              <span>Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Settings Trigger (always accessible) */}
          <button
            onClick={() => {
              if (onOpenSettings) onOpenSettings();
              else handleNav('settings');
            }}
            className="p-2 sm:p-2.5 rounded-xl text-[#655A51] hover:text-[#2D2723] hover:bg-[#EFE9DF] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 stroke-2" />
          </button>
        </div>
      </div>

      {/* Mobile & Collapsed Tablet Drawer Menu */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-label="Full navigation menu"
          className="border-b border-[#E8E0D5] bg-[#FAF7F2] px-4 py-4 space-y-1.5 shadow-lg animate-fadeIn max-h-[82vh] overflow-y-auto"
        >
          <div className="pb-2 mb-2 border-b border-[#E8E0D5] flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
              Navigation
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xs font-semibold text-[#8A7D71] hover:text-[#2D2723]"
            >
              Close
            </button>
          </div>

          {/* 1. Home */}
          <button
            onClick={() => handleNav('home')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold transition-colors min-h-[44px] ${
              currentTab === 'home' ? 'bg-[#2D2723] text-[#FAF7F2]' : 'text-[#4A3F35] hover:bg-[#EFE9DF]'
            }`}
          >
            <Home className="w-4 h-4 text-[#8A7D71]" />
            <span>Home</span>
          </button>

          {/* 2. Create Section with Submenu */}
          <div className="rounded-xl border border-[#E8E0D5] bg-[#FCFAF6] overflow-hidden">
            <button
              onClick={() => setCreateSubmenuExpanded(!createSubmenuExpanded)}
              className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-bold text-[#2D2723] hover:bg-[#EFE9DF] transition-colors min-h-[44px]"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#E06D53]" />
                <span>Create</span>
              </div>
              {createSubmenuExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {createSubmenuExpanded && (
              <div className="pl-9 pr-3 pb-2 space-y-1 border-t border-[#EFE9DF] pt-1">
                <button
                  onClick={() => {
                    if (onOpenWhatComesNext) onOpenWhatComesNext();
                    else handleNav('create');
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-semibold text-[#5C5045] hover:bg-[#EFE9DF] hover:text-[#2D2723] transition-colors flex items-center justify-between min-h-[38px]"
                >
                  <span>What Comes Next?</span>
                  <span className="text-[10px] uppercase font-mono-code text-[#E06D53] font-bold">Mystery</span>
                </button>

                <button
                  onClick={() => {
                    if (onOpenChibiJourney) onOpenChibiJourney();
                    else handleNav('chibi-journey');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-semibold text-[#5C5045] hover:bg-[#EFE9DF] hover:text-[#2D2723] transition-colors flex items-center justify-between min-h-[38px] bg-[#FBEFEA]/60"
                >
                  <span className="font-extrabold text-[#E06D53]">Chibi Character Journey</span>
                  <span className="text-[10px] uppercase font-mono-code text-white bg-[#E06D53] px-1.5 py-0.5 rounded-full font-bold">New</span>
                </button>

                <button
                  onClick={() => {
                    if (onOpenCharacterDesign) onOpenCharacterDesign();
                    else handleNav('character-design');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-semibold text-[#5C5045] hover:bg-[#EFE9DF] hover:text-[#2D2723] transition-colors flex items-center justify-between min-h-[38px]"
                >
                  <span>Character Design</span>
                  <span className="text-[10px] uppercase font-mono-code text-[#C04D33] font-bold">9-Stage</span>
                </button>

                <button
                  onClick={() => {
                    if (onOpenWarmUp) onOpenWarmUp();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-semibold text-[#5C5045] hover:bg-[#EFE9DF] hover:text-[#2D2723] transition-colors min-h-[38px]"
                >
                  <span>Warm Up</span>
                </button>

                <button
                  onClick={() => {
                    if (onOpenChaos) onOpenChaos();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-semibold text-[#5C5045] hover:bg-[#EFE9DF] hover:text-[#2D2723] transition-colors min-h-[38px]"
                >
                  <span>Creative Chaos</span>
                </button>

                <button
                  onClick={() => {
                    handleNav('challenges');
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-semibold text-[#5C5045] hover:bg-[#EFE9DF] hover:text-[#2D2723] transition-colors min-h-[38px]"
                >
                  <span>Challenge Me</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. Practice */}
          <button
            onClick={() => handleNav('practice')}
            className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold text-[#4A3F35] hover:bg-[#EFE9DF] transition-colors min-h-[44px]"
          >
            <Flame className="w-4 h-4 text-[#E06D53]" />
            <span>Practice</span>
          </button>

          {/* 4. Creative Paths */}
          <button
            onClick={() => {
              if (onOpenPathways) onOpenPathways();
              setMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold text-[#4A3F35] hover:bg-[#EFE9DF] transition-colors min-h-[44px]"
          >
            <Compass className="w-4 h-4 text-[#2A9D8F]" />
            <span>Creative Paths</span>
          </button>

          {/* 5. Visual Guide */}
          {onOpenMasterSheet && (
            <button
              onClick={() => {
                onOpenMasterSheet();
                setMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold text-[#4A3F35] hover:bg-[#EFE9DF] transition-colors min-h-[44px]"
            >
              <Palette className="w-4 h-4 text-[#4F46E5]" />
              <span>Visual Guide (500 Prompts)</span>
            </button>
          )}

          {/* 6. Collection */}
          <button
            onClick={() => handleNav('collection')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold transition-colors min-h-[44px] ${
              currentTab === 'collection' ? 'bg-[#2D2723] text-[#FAF7F2]' : 'text-[#4A3F35] hover:bg-[#EFE9DF]'
            }`}
          >
            <FolderHeart className="w-4 h-4 text-[#8A7D71]" />
            <span>Collection</span>
          </button>

          {/* 7. Progress */}
          <button
            onClick={() => handleNav('progress')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold transition-colors min-h-[44px] ${
              currentTab === 'progress' ? 'bg-[#2D2723] text-[#FAF7F2]' : 'text-[#4A3F35] hover:bg-[#EFE9DF]'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-[#8A7D71]" />
            <span>Progress</span>
          </button>

          {/* 8. Settings */}
          <button
            onClick={() => {
              if (onOpenSettings) onOpenSettings();
              setMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold text-[#4A3F35] hover:bg-[#EFE9DF] transition-colors min-h-[44px]"
          >
            <Settings className="w-4 h-4 text-[#8A7D71]" />
            <span>Settings</span>
          </button>
        </div>
      )}
    </header>
  );
};
