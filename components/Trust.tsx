import React from 'react';

export const Trust: React.FC = () => {
  const cards = [
    ['Source information included', 'Track where each study, data field, and extracted insight came from.'],
    ['Human review built in', 'Review and correct extracted evidence before using it in final outputs.'],
    ['Clear screening decisions', 'Document why studies or records were included or excluded.'],
    ['Review status tracking', 'See which fields have been generated, reviewed, edited, or finalized.'],
    ['Exportable evidence records', 'Save structured evidence tables, source information, and analytics outputs for future use.'],
    ['Designed for transparency', 'Built for teams that care about accuracy, reproducibility, and trust.'],
  ];

  return (
    <section id="trust" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Built for evidence work where the source still matters.
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          In healthcare and scientific research, it is not enough for software to sound confident. Teams need to know where the information came from, how it was extracted, and whether it can be reviewed.
        </p>
        <p className="text-lg text-black/70 leading-relaxed">
          OpenOutcomesResearch is designed to keep evidence structured, transparent, and connected to the original source.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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