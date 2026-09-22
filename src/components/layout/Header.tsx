import React, { useState } from 'react';
import { BookOpen, Sparkles, Flame, Compass, FolderHeart, BarChart3, Settings, Menu, X, ArrowRight, Palette } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenCreateChooser: () => void;
  onOpenMasterSheet?: () => void;
  unfinishedSessionExists: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenCreateChooser,
  onOpenMasterSheet,
  unfinishedSessionExists,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'create', label: 'Create', icon: Sparkles, highlight: true },
    { id: 'master-sheet', label: 'Visual Guide', icon: Palette },
    { id: 'practice', label: 'Warm Up', icon: Flame },
    { id: 'challenges', label: 'Chaos', icon: Compass },
    { id: 'collection', label: 'Collection', icon: FolderHeart },
    { id: 'progress', label: 'Journey', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'create') {
      onOpenCreateChooser();
    } else if (id === 'master-sheet') {
      if (onOpenMasterSheet) onOpenMasterSheet();
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };


  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E0D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-95"
        >
          <div className="w-9 h-9 rounded-lg bg-[#2D2723] text-[#FAF7F2] flex items-center justify-center shadow-sm group-hover:bg-[#433B35] transition-colors relative">
            <BookOpen className="w-5 h-5 text-[#FAF7F2]" />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#E06D53] rounded-full border-2 border-[#FAF7F2]" />
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#2D2723] flex items-center gap-1.5 font-sans">
              CREATE AGAIN
            </span>
            <span className="text-[11px] font-handwriting text-[#7A6F66] hidden sm:block -mt-1">
              your sketchbook companion
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#2D2723] text-[#FAF7F2] shadow-sm'
                    : item.highlight
                    ? 'bg-[#EFE9DF] text-[#2D2723] hover:bg-[#E4DBCF]'
                    : 'text-[#655A51] hover:text-[#2D2723] hover:bg-[#F2ECE3]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Quick Start CTA */}
        <div className="hidden md:flex items-center gap-2">
          {unfinishedSessionExists ? (
            <button
              onClick={() => onNavigate('what-comes-next')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E06D53] text-white text-xs font-bold hover:bg-[#CF5E45] shadow-sm transition-all active:scale-95 animate-pulse"
            >
              <span>Continue Mystery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onOpenCreateChooser}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2D2723] text-[#FAF7F2] text-xs font-bold hover:bg-[#433B35] shadow-sm transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5B574]" />
              <span>Start</span>
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {unfinishedSessionExists && (
            <button
              onClick={() => onNavigate('what-comes-next')}
              className="px-2.5 py-1 rounded-full bg-[#E06D53] text-white text-[11px] font-bold"
            >
              Resume
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2D2723] hover:bg-[#EFE9DF] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E0D5] bg-[#FAF7F2] px-4 py-3 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#2D2723] text-[#FAF7F2]'
                    : 'text-[#5C5249] hover:bg-[#EFE9DF]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenCreateChooser();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-bold text-sm shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#E5B574]" />
              <span>Choose Creative Mode</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
