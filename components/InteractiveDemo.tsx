import React, { useState } from 'react';
import { SearchView } from './demo/SearchView';
import { ResultsView } from './demo/ResultsView';
import { DetailView } from './demo/DetailView';
import { AnalyticsView } from './demo/AnalyticsView';

type ViewState = 'search' | 'results' | 'detail' | 'analytics';

export const InteractiveDemo: React.FC = () => {
  const [view, setView] = useState<ViewState>('search');

  return (
    <section id="demo" className="px-6 max-w-7xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Experience the HEOR AI research platform workflow
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          Try our interactive demo to see how OpenOutcomesResearch transforms unstructured literature into structured, reviewable evidence for Health Economics and Outcomes Research (HEOR).
        </p>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col relative" style={{ height: '850px' }}>
        {/* Header */}
        <div className="h-14 border-b border-black/10 flex items-center px-6 justify-between bg-gray-50/50 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-xs font-medium text-black/50">Interactive Demo</div>
          <div className="w-12"></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto relative bg-[#f8f9fa]">
          {view === 'search' && <SearchView onSearch={() => setView('results')} />}
          {view === 'results' && <ResultsView onOpenDetail={() => setView('detail')} onOpenAnalytics={() => setView('analytics')} onBack={() => setView('search')} />}
          {view === 'detail' && <DetailView onClose={() => setView('results')} />}
          {view === 'analytics' && <AnalyticsView onClose={() => setView('results')} />}
        </div>
      </div>
    </section>
  );
};
