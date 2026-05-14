import React from 'react';

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="px-6 max-w-6xl mx-auto space-y-12">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center">
        Built for teams that turn evidence into decisions.
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">HEOR teams</h3>
          <p className="text-black/70 leading-relaxed">
            Extract outcomes, economic evidence, treatment comparisons, and study details for evidence generation and outcomes research.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Market access teams</h3>
          <p className="text-black/70 leading-relaxed">
            Organize clinical and economic evidence to support payer research, value communication, treatment comparisons, and reimbursement strategy.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Pharma evidence teams</h3>
          <p className="text-black/70 leading-relaxed">
            Build structured datasets for launch planning, competitive intelligence, treatment landscapes, and evidence strategy.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">CROs and consultants</h3>
          <p className="text-black/70 leading-relaxed">
            Move faster from literature search to evidence tables, gap analysis, and client-ready deliverables.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Payer and formulary teams</h3>
          <p className="text-black/70 leading-relaxed">
            Review treatment evidence in a structured format that makes comparisons easier.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Academic researchers</h3>
          <p className="text-black/70 leading-relaxed">
            Turn literature searches into structured research datasets that are easier to analyze, export, and reuse.
          </p>
        </div>
      </div>
    </section>
  );
};
