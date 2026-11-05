import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#07070e] text-white flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-[#11111f] border border-cyan-500/30 rounded-2xl p-6 text-center space-y-4 shadow-2xl shadow-cyan-950/50">
            <div className="w-12 h-12 mx-auto rounded-full bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xl font-bold">
              ⚡
            </div>
            <h2 className="text-xl font-bold text-white">Application Notice</h2>
            <p className="text-sm text-slate-300">
              वेबसाइट में एक रीलोड की आवश्यकता है। कृपया नीचे दिए गए बटन पर क्लिक करें।
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-sm transition-all"
              >
                Reload Application
              </button>
              <button
                onClick={this.handleReset}
                className="w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs transition-all"
              >
                Clear Storage & Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

