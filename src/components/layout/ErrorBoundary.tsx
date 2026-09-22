import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Create Again caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#FCFAF6] rounded-3xl p-7 border-2 border-[#2D2723] paper-card subtle-shadow text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF2E6] text-[#E06D53] flex items-center justify-center mx-auto mb-3">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
              Something went wrong.
            </h2>
            <p className="text-sm text-[#665A51] mt-2 font-medium">
              Your progress is safe.
            </p>
            <div className="mt-6">
              <button
                onClick={this.handleReset}
                className="py-3.5 px-6 rounded-xl bg-[#2D2723] text-white font-extrabold text-xs shadow-md hover:bg-[#433B35] transition-all min-h-[44px]"
              >
                TRY AGAIN
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
