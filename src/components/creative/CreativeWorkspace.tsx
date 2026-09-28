import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CreativeWorkspaceProps {
  title?: string;
  stepIndicator?: string;
  onExit?: () => void;
  exitLabel?: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

/**
 * Section 3 & 25: Reusable Creative Workspace
 * Generous whitespace, calm paper atmosphere, minimal distraction.
 * Gives the sketchbook companion feel rather than an enterprise dashboard.
 */
export const CreativeWorkspace: React.FC<CreativeWorkspaceProps> = ({
  title,
  stepIndicator,
  onExit,
  exitLabel = 'Back',
  headerRight,
  children,
  footer,
  className = '',
}) => {
  return (
    <div className={`min-h-[calc(100vh-2rem)] flex flex-col justify-between max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6 text-[#16171A] ${className}`}>
      {/* Quiet Top Bar */}
      <header className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E5E5DE]/80">
        <div className="flex items-center gap-2">
          {onExit && (
            <button
              onClick={onExit}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#686862] hover:text-[#16171A] transition-colors -ml-2 px-2.5 py-1.5 rounded-lg hover:bg-[#F4F4F0] min-h-[40px]"
              aria-label={exitLabel}
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
              <span>{exitLabel}</span>
            </button>
          )}

          {stepIndicator && (
            <span className="text-xs font-mono-code text-[#686862]">
              {stepIndicator}
            </span>
          )}
        </div>

        {title && (
          <div className="text-xs font-mono-code uppercase font-semibold text-[#16171A] tracking-wider truncate max-w-[200px] sm:max-w-xs">
            {title}
          </div>
        )}

        <div>{headerRight}</div>
      </header>

      {/* Main Focus Decision Area */}
      <main className="my-auto py-6 sm:py-8 flex flex-col items-center w-full">
        {children}
      </main>

      {/* Quiet Footer */}
      {footer && (
        <footer className="pt-4 border-t border-[#E5E5DE]/80 w-full">
          {footer}
        </footer>
      )}
    </div>
  );
};
