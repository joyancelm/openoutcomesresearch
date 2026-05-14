import React from 'react';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          OpenOutcomesResearch turns scientific evidence into data analytics.
        </h2>
        <div className="text-lg text-black/70 leading-relaxed space-y-4">
          <p>
            OpenOutcomesResearch is AI infrastructure for literature review and evidence analytics. It is built to connect with the evidence sources teams already use, including scientific literature, journal subscriptions, clinical trial databases, public databases, real world evidence sources, and internal research files.
          </p>
          <p>
            The platform helps turn those sources into structured evidence data that can be searched, screened, extracted, analyzed, and reused.
          </p>
          <p>
            Instead of moving between papers, spreadsheets, databases, and reports, teams can build evidence datasets, generate dashboards, compare treatments, identify trends, and find research gaps in one workflow.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <h3 className="font-semibold text-lg">Connect evidence sources</h3>
          <p className="text-black/60 leading-relaxed">
            Bring together literature, clinical trials, public databases, real world evidence, and internal files.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <h3 className="font-semibold text-lg">Extract structured data</h3>
          <p className="text-black/60 leading-relaxed">
            Turn papers and research records into fields like population, intervention, comparator, outcomes, safety, study design, and source.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <h3 className="font-semibold text-lg">Analyze the landscape</h3>
          <p className="text-black/60 leading-relaxed">
            Find trends, gaps, treatment comparisons, endpoint patterns, and emerging evidence.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white shadow-sm">
          <h3 className="font-semibold text-lg">Export reusable insights</h3>
          <p className="text-black/60 leading-relaxed">
            Create evidence tables, datasets, charts, and analytics outputs that teams can use across projects.
          </p>
        </div>
      </div>
    </section>
  );
};
