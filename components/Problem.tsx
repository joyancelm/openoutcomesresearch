import React from 'react';
import { Layers, FileText, ShieldAlert } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          The literature is expanding faster than evidence teams can process it
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          Health economics and outcomes research (HEOR), clinical, and evidence teams are expected to keep up with a growing volume of published studies. But key findings are often buried in PDFs, abstracts, and inconsistent reporting formats. That slows systematic literature reviews, complicates evidence extraction, and makes it harder to compare findings, identify trends, and see where evidence is still missing.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <Layers className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Too much to review</h3>
          <p className="text-black/60 leading-relaxed">
            New evidence accumulates faster than teams can manually screen, extract, and synthesize it.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <FileText className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Too little structure</h3>
          <p className="text-black/60 leading-relaxed">
            Critical study details are scattered across publications and reported in inconsistent ways.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <ShieldAlert className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Too hard to trust generic AI</h3>
          <p className="text-black/60 leading-relaxed">
            Enterprise teams need reviewable, source-linked outputs, not black-box summaries.
          </p>
        </div>
      </div>
    </section>
  );
};
