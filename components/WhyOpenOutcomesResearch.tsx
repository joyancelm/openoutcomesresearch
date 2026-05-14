import React from 'react';
import { X, Check } from 'lucide-react';

export const WhyOpenOutcomesResearch: React.FC = () => {
  return (
    <section id="differentiation" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Not just a search tool. Not just a summary tool.
        </h2>
        <div className="text-lg text-black/70 leading-relaxed space-y-4">
          <p>
            Most literature tools help teams find papers or manage reviews. Most AI tools summarize documents.
          </p>
          <p>
            OpenOutcomesResearch is different because it turns scientific literature and research databases into structured data analytics.
          </p>
          <p>
            The goal is not just to read faster. The goal is to make evidence usable as data.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl border border-black/10 bg-white shadow-sm space-y-5">
          <h3 className="font-semibold text-lg text-black">Generic AI tools summarize papers.</h3>
          <p className="text-black/60 leading-relaxed">OpenOutcomesResearch turns papers into structured evidence data.</p>
        </div>
        <div className="p-8 rounded-3xl border border-black/10 bg-white shadow-sm space-y-5">
          <h3 className="font-semibold text-lg text-black">Traditional review tools manage workflows.</h3>
          <p className="text-black/60 leading-relaxed">OpenOutcomesResearch helps create reusable datasets and analytics.</p>
        </div>
        <div className="p-8 rounded-3xl border border-black/10 bg-white shadow-sm space-y-5">
          <h3 className="font-semibold text-lg text-black">Spreadsheets organize one project.</h3>
          <p className="text-black/60 leading-relaxed">OpenOutcomesResearch helps build an evidence layer that can be searched, analyzed, updated, and reused.</p>
        </div>
        <div className="p-8 rounded-3xl border border-black/10 bg-white shadow-sm space-y-5">
          <h3 className="font-semibold text-lg text-black">Dashboards show what is happening.</h3>
          <p className="text-black/60 leading-relaxed">OpenOutcomesResearch helps explain why it is happening by linking insights back to the evidence.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-black text-white shadow-sm">
        <p className="text-lg font-medium">A chatbot gives you an answer. OpenOutcomesResearch helps build the evidence dataset behind the answer.</p>
      </div>
    </section>
  );
};
