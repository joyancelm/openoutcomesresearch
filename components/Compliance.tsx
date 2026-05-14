import React from 'react';
import { ShieldCheck, Layers, Database, Globe2, FileSpreadsheet, Search, BarChart3 } from 'lucide-react';

export const Compliance: React.FC = () => {
  const cards = [
    ['Scientific literature', 'Search and analyze published research from medical and scientific databases.'],
    ['Journal subscriptions', 'Work with literature your institution already has access to through paid journal subscriptions.'],
    ['Clinical trial databases', 'Analyze trial records, study designs, interventions, endpoints, enrollment details, and trial status.'],
    ['Public databases', 'Use public research databases to expand the evidence landscape and support broader analysis.'],
    ['Real world evidence sources', 'Connect literature-based evidence with real world evidence sources to support a more complete view of treatment value and outcomes.'],
    ['Internal research files', 'Bring in team-owned PDFs, spreadsheets, review files, and research documents to make internal evidence easier to analyze and reuse.'],
  ];

  return (
    <section id="vision" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-sm font-medium text-black/70">
          <ShieldCheck className="w-4 h-4" />
          Scientific literature, turned into data analytics
        </div>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          We are building the data layer for scientific literature.
        </h2>
        <div className="text-lg text-black/70 leading-relaxed space-y-4 text-justify">
          <p>
            Scientific literature is one of the most valuable knowledge sources in healthcare, but it was never built for modern analytics.
          </p>
          <p>
            OpenOutcomesResearch is building the infrastructure to change that.
          </p>
          <p>
            By turning literature, clinical trial records, public databases, real world evidence sources, and internal files into structured evidence data, the platform helps teams identify trends, find gaps, compare treatments, and generate insights from the research they already rely on.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map(([title, desc]) => (
          <div key={title} className="p-6 rounded-3xl border border-black/10 bg-white shadow-sm space-y-3">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-black/60 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl bg-black text-white p-8 shadow-sm">
        <p className="text-lg leading-relaxed">
          The papers and databases already exist. The opportunity is turning them into data that research and healthcare teams can actually use.
        </p>
      </div>
    </section>
  );
};
