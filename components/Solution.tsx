import React from 'react';

export const Solution: React.FC = () => {
  return (
    <section id="how-it-works" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          The AI Research Platform for HEOR and Evidence Synthesis
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          As a dedicated AI research platform for Health Economics and Outcomes Research (HEOR), OpenOutcomesResearch helps teams move from reading papers one by one to working with structured evidence across studies using advanced AI. The platform is designed to support review workflows by organizing literature into reusable data analytics outputs that can be checked against the source.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sm font-mono text-black/40 font-medium">01</div>
          <h3 className="font-semibold text-lg">Gather relevant literature</h3>
          <p className="text-black/60 leading-relaxed">
            Start from a research question and collect relevant studies from literature databases for AI processing.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sm font-mono text-black/40 font-medium">02</div>
          <h3 className="font-semibold text-lg">Extract key study information</h3>
          <p className="text-black/60 leading-relaxed">
            Capture study design, populations, interventions, comparators, outcomes, and other relevant fields in a structured format for data analytics.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sm font-mono text-black/40 font-medium">03</div>
          <h3 className="font-semibold text-lg">Review patterns and gaps</h3>
          <p className="text-black/60 leading-relaxed">
            Accelerate evidence synthesis by analyzing findings across studies, comparing evidence more efficiently, and identifying areas where the literature is limited or inconsistent.
          </p>
        </div>
      </div>
    </section>
  );
};
