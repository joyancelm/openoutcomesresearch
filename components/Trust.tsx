import React from 'react';

export const Trust: React.FC = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="px-6 py-4 rounded-2xl border border-black/10 bg-white shadow-sm flex items-center justify-center text-center text-sm font-medium text-black/80">
          Structured study extraction
        </div>
        <div className="px-6 py-4 rounded-2xl border border-black/10 bg-white shadow-sm flex items-center justify-center text-center text-sm font-medium text-black/80">
          Source-linked outputs
        </div>
        <div className="px-6 py-4 rounded-2xl border border-black/10 bg-white shadow-sm flex items-center justify-center text-center text-sm font-medium text-black/80">
          Research gap identification
        </div>
        <div className="px-6 py-4 rounded-2xl border border-black/10 bg-white shadow-sm flex items-center justify-center text-center text-sm font-medium text-black/80">
          Built for HEOR workflows
        </div>
      </div>
      <p className="text-center text-sm text-black/50">
        Designed to support human review, not replace it.
      </p>
    </section>
  );
};