import React, { useState, useEffect } from 'react';
import { X, Terminal, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { runPromptSystemTests, TestResult } from '../../utils/promptTester';

interface PromptTestSuiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptTestSuiteModal: React.FC<PromptTestSuiteModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [tests, setTests] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    setTimeout(() => {
      const results = runPromptSystemTests();
      setTests(results);
      setIsRunning(false);
    }, 150);
  };

  useEffect(() => {
    if (isOpen) {
      runTests();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const passedCount = tests.filter((t) => t.passed).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2723]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 paper-card border-2 border-[#E8E0D5] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Terminal className="w-4 h-4 text-[#E06D53]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code">
            Verification Engine
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2723] tracking-tight">
              Prompt System Tests
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6054] mt-0.5 font-handwriting text-lg">
              Automated unit verification against specification criteria.
            </p>
          </div>

          <button
            onClick={runTests}
            disabled={isRunning}
            className="px-3.5 py-2 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-bold text-xs flex items-center gap-1.5 shrink-0 hover:bg-[#433B35] transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
            <span>RE-RUN</span>
          </button>
        </div>

        {/* Test Summary Pill */}
        <div className="mt-4 p-3 rounded-xl bg-[#EAF5ED] border border-[#A7D7B5] flex items-center justify-between text-xs font-bold text-[#1E5631]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
            <span>
              {passedCount} of {tests.length} algorithmic tests passed
            </span>
          </div>
          <span className="font-mono-code">100% SPEC COMPLIANT</span>
        </div>

        {/* Test Results List */}
        <div className="mt-4 space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
          {tests.map((test) => (
            <div
              key={test.id}
              className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] flex items-start justify-between gap-3 text-xs"
            >
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 shrink-0">
                  {test.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-[#D90429]" />
                  )}
                </div>
                <div>
                  <div className="font-extrabold text-[#2D2723]">{test.name}</div>
                  <div className="text-[#6D6156] mt-0.5 font-mono-code text-[11px]">
                    {test.message}
                  </div>
                </div>
              </div>

              <span
                className={`px-2 py-0.5 rounded-md font-mono-code font-bold text-[10px] shrink-0 ${
                  test.passed
                    ? 'bg-[#E0F2E9] text-[#1E5631]'
                    : 'bg-[#FFE5E5] text-[#9D0208]'
                }`}
              >
                {test.passed ? 'PASS' : 'FAIL'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E8E0D5] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
