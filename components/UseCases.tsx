import React from 'react';

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="px-6 max-w-6xl mx-auto space-y-12">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        Built for evidence-intensive teams across research and industry
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Health Economics and Outcomes Research (HEOR) Teams</h3>
          <p className="text-black/70 leading-relaxed">
            Transform large volumes of literature into structured evidence inputs for faster review, comparison, and evidence strategy planning.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Contract Research Organization (CRO) Evidence Teams</h3>
          <p className="text-black/70 leading-relaxed">
            Deliver literature reviews more efficiently by converting unstructured publications into reusable, review-ready study data.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Pharma Medical Affairs and Research Teams</h3>
          <p className="text-black/70 leading-relaxed">
            Track emerging evidence, compare outcomes across studies, and identify gaps by indication, endpoint, or population.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Academic Research Programs</h3>
          <p className="text-black/70 leading-relaxed">
            Reduce manual review burden while improving transparency, reproducibility, and evidence oversight.
          </p>
        </div>
      </div>
    </section>
  );
};
