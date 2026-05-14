import React from 'react';
import { Layers, FileText, ShieldAlert } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Healthcare evidence is everywhere, but it is still hard to analyze.
        </h2>
        <div className="text-lg text-black/70 leading-relaxed space-y-4 text-justify">
          <p>
            Research teams rely on scientific literature, journal subscriptions, clinical trial databases, public datasets, real world evidence, and internal files to answer important questions.
          </p>
          <p>
            Which treatments are gaining evidence? Where are the research gaps? Which endpoints are being studied? How do therapies compare? What evidence supports market access, reimbursement, or future research strategy?
          </p>
          <p>
            The problem is that this information is spread across papers, PDFs, databases, spreadsheets, and disconnected systems. Teams spend too much time collecting and organizing evidence before they can actually analyze it.
          </p>
          <p>
            OpenOutcomesResearch is built to change that.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <Layers className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Evidence is fragmented</h3>
          <p className="text-black/60 leading-relaxed">
            Important information lives across journals, databases, trial registries, public datasets, real world evidence sources, and internal documents.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <FileText className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Manual review is slow</h3>
          <p className="text-black/60 leading-relaxed">
            Teams still spend hours screening studies, extracting data, checking sources, and building spreadsheets.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <ShieldAlert className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Research data is hard to reuse</h3>
          <p className="text-black/60 leading-relaxed">
            A literature review often ends as a static report instead of becoming a reusable evidence dataset.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <Layers className="w-6 h-6 text-black" strokeWidth={1.5} />
          <h3 className="font-semibold text-lg">Summaries are not enough</h3>
          <p className="text-black/60 leading-relaxed">
            Teams need structured data they can filter, compare, chart, export, and trust.
          </p>
        </div>
      </div>
    </section>
  );
};
