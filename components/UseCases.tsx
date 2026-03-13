import React from 'react';

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="px-6 max-w-6xl mx-auto space-y-12">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        Built for HEOR: The AI Research Platform for Evidence Synthesis
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Clinical Researchers</h3>
          <p className="text-black/70 leading-relaxed">
            Review literature more efficiently with AI, compare studies faster, and spot areas where evidence is limited or fragmented.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">HEOR and Medical Affairs Teams</h3>
          <p className="text-black/70 leading-relaxed">
            Organize published evidence into structured data analytics outputs that support internal analysis, value communication, and evidence planning.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Guideline and Formulary Stakeholders</h3>
          <p className="text-black/70 leading-relaxed">
            Track emerging evidence more clearly and reduce the effort required to synthesize relevant findings across studies.
          </p>
        </div>
        <div className="p-10 border border-black/10 rounded-3xl space-y-4 bg-black/5">
          <h3 className="font-semibold text-xl">Academic Review Teams</h3>
          <p className="text-black/70 leading-relaxed">
            Reduce repetitive manual extraction work in systematic, scoping, and targeted literature reviews using advanced AI.
          </p>
        </div>
      </div>
    </section>
  );
};
