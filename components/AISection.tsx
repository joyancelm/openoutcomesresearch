import React from 'react';

export const AISection: React.FC = () => {
  const cards = [
    ['Treatment comparisons', 'See how therapies compare across populations, comparators, outcomes, and safety findings.'],
    ['Endpoint patterns', 'Spot which outcomes are being studied most often and which ones are underrepresented.'],
    ['Evidence gaps', 'Find missing head to head data, weak subgroup coverage, and areas with limited long term evidence.'],
    ['Safety signals', 'Review adverse events, discontinuation, tolerability, and other safety patterns across studies.'],
    ['Trial activity', 'Track status, design, enrollment, interventions, and endpoint choices across the trial landscape.'],
    ['Research momentum', 'See where publication volume is growing and where interest is shifting over time.'],
    ['Real world context', 'Connect published evidence with real world evidence to better understand treatment value.'],
    ['Evidence outputs', 'Turn findings into review-ready tables, charts, and reports that can be shared across teams.'],
  ];

  return (
    <section id="analytics" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          See what the evidence is actually saying.
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          Once evidence is structured, teams can move beyond single-paper summaries and look at the evidence base as a whole.
        </p>
        <p className="text-lg text-black/70 leading-relaxed">
          That makes it easier to compare therapies, spot gaps, and understand where the literature is heading.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(([title, desc]) => (
          <div key={title} className="p-6 rounded-3xl border border-black/10 bg-white shadow-sm space-y-3">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-black/60 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
