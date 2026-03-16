import React from 'react';

export const Solution: React.FC = () => {
  return (
    <section id="how-it-works" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          A system of record for AI-assisted evidence review
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          OpenOutcomesResearch helps teams move from reading papers one by one to working with structured, study-level evidence across the literature. Every extracted result remains connected to source text so reviewers can validate outputs with confidence.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sm font-mono text-black/40 font-medium">01</div>
          <h3 className="font-semibold text-lg">Gather relevant literature</h3>
          <p className="text-black/60 leading-relaxed">
            Start from a research question and collect relevant studies from literature databases and internal document sets.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sm font-mono text-black/40 font-medium">02</div>
          <h3 className="font-semibold text-lg">Extract structured study data</h3>
          <p className="text-black/60 leading-relaxed">
            Capture study design, populations, interventions, comparators, outcomes, endpoints, and other key fields in organized formats.
          </p>
        </div>
        <div className="p-8 border border-black/10 rounded-3xl space-y-5 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sm font-mono text-black/40 font-medium">03</div>
          <h3 className="font-semibold text-lg">Analyze trends and gaps</h3>
          <p className="text-black/60 leading-relaxed">
            Compare findings across studies, detect patterns in the evidence base, and surface areas where evidence is limited, inconsistent, or underreported.
          </p>
        </div>
      </div>
    </section>
  );
};
