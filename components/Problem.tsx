import React from 'react';
import { Layers, FileText, ShieldAlert } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          The volume of literature keeps growing. Evidence synthesis and data analytics still take too much manual work.
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          HEOR and research teams are expected to keep up with a growing body of published evidence across clinical studies, outcomes research, and review literature. But the key details are often buried in unstructured papers, making it difficult to compare studies, track findings, and surface what is still missing.
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
            Important study details for data analytics often remain trapped in PDFs, abstracts, and inconsistent reporting formats.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <ShieldAlert className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Too hard to trust generic AI</h3>
          <p className="text-black/60 leading-relaxed">
            AI summaries alone are not enough when HEOR teams need traceable outputs they can review and verify.
          </p>
        </div>
      </div>
    </section>
  );
};
