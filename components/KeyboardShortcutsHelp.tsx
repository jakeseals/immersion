'use client';

import { useState, useEffect } from 'react';
import { HiQuestionMarkCircle, HiXMark } from 'react-icons/hi2';

export default function KeyboardShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenHelp, setHasSeenHelp] = useState(true);

  useEffect(() => {
    // Check if user has seen the help before
    const seen = localStorage.getItem('keyboard-help-seen');
    if (!seen) {
      setHasSeenHelp(false);
      // Show a subtle hint after a short delay
      const timer = setTimeout(() => {
        // User will see the help icon pulsing
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    if (!hasSeenHelp) {
      localStorage.setItem('keyboard-help-seen', 'true');
      setHasSeenHelp(true);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-40 p-3 bg-charcoal/90 hover:bg-charcoal text-cream rounded-full shadow-lg hover:shadow-xl transition-all ${
          !hasSeenHelp ? 'animate-pulse' : ''
        }`}
        aria-label="Keyboard shortcuts help"
        title="Keyboard shortcuts (Press ? to toggle)"
      >
        <HiQuestionMarkCircle className="text-2xl" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-cream rounded-lg shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors"
              aria-label="Close"
            >
              <HiXMark className="text-2xl" />
            </button>

            <h2 className="text-2xl font-serif text-charcoal mb-4">
              Keyboard Shortcuts
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-charcoal/80">Previous session</span>
                <kbd className="px-3 py-1 bg-charcoal/10 rounded text-sm font-mono">←</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-charcoal/80">Next session</span>
                <kbd className="px-3 py-1 bg-charcoal/10 rounded text-sm font-mono">→</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-charcoal/80">Back to home</span>
                <kbd className="px-3 py-1 bg-charcoal/10 rounded text-sm font-mono">H</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-charcoal/80">Close dialog</span>
                <kbd className="px-3 py-1 bg-charcoal/10 rounded text-sm font-mono">Esc</kbd>
              </div>
            </div>

            <p className="text-sm text-charcoal/60 mt-6">
              Navigate between sessions quickly using your keyboard for a seamless experience.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
