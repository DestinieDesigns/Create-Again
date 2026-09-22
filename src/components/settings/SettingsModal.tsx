import React, { useState } from 'react';
import { X, Settings, BookOpen, Trash2, Terminal, Check } from 'lucide-react';
import { UserSettings } from '../../types/session';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onUpdateSettings: (newSettings: Partial<UserSettings>) => void;
  onClearAllData: () => void;
  onOpenTestSuite: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onClearAllData,
  onOpenTestSuite,
}) => {
  const [confirmClear, setConfirmClear] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Settings className="w-4 h-4 text-[#8A7D71]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
            Preferences
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
          Settings
        </h2>

        <div className="mt-6 space-y-6">
          {/* Faith Content Toggle */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#606C38]" />
                <h4 className="text-sm font-extrabold text-[#2D2723]">
                  Create with Purpose (Faith Inspiration)
                </h4>
              </div>
              <p className="text-xs text-[#6B5E53] mt-1 leading-relaxed">
                Display the encouraging Exodus 31:3 verse card on the home screen reminding us of God-given creativity.
              </p>
            </div>

            <button
              onClick={() =>
                onUpdateSettings({ enableFaithContent: !settings.enableFaithContent })
              }
              className={`w-12 h-7 rounded-full p-1 transition-colors shrink-0 ${
                settings.enableFaithContent ? 'bg-[#2D2723]' : 'bg-[#DDD3C4]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  settings.enableFaithContent ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Test Suite Action */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E0D5] flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E06D53]" />
                <h4 className="text-sm font-extrabold text-[#2D2723]">
                  Prompt System Verification
                </h4>
              </div>
              <p className="text-xs text-[#6B5E53] mt-1 leading-relaxed">
                Run the 10-point test suite verifying prompt variety, anti-repetition, chaos weights, and timer independence.
              </p>
            </div>

            <button
              onClick={() => {
                onOpenTestSuite();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-[#2D2723] text-[#FAF7F2] text-xs font-bold shrink-0 hover:bg-[#433B35]"
            >
              RUN TESTS
            </button>
          </div>

          {/* Data Reset */}
          <div className="p-4 rounded-2xl bg-[#FFF2F0] border-2 border-[#F3BEB8]">
            <div className="flex items-center gap-2 text-[#9D0208]">
              <Trash2 className="w-4 h-4" />
              <h4 className="text-sm font-extrabold">Reset Local Data</h4>
            </div>
            <p className="text-xs text-[#6E423E] mt-1">
              Clears your saved creations, prompt history memory, and session statistics stored in your browser.
            </p>

            <div className="mt-3">
              {confirmClear ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onClearAllData();
                      setConfirmClear(false);
                      onClose();
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#9D0208] text-white text-xs font-bold"
                  >
                    YES, CLEAR EVERYTHING
                  </button>
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#6E423E]"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmClear(true)}
                  className="px-3.5 py-1.5 rounded-lg border border-[#F3BEB8] text-xs font-bold text-[#9D0208] hover:bg-white"
                >
                  CLEAR LOCAL DATA
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E8E0D5] text-center text-xs text-[#8A7D71]">
          <span>Create Again • Version 1.0 • Physical Sketchbook Companion</span>
        </div>
      </div>
    </div>
  );
};
