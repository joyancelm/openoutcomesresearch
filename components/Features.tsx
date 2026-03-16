import React from 'react';
import { Settings, Sliders, Database } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <Settings size={20} />,
      title: "Bring Your Own Model",
      desc: "Integrate institutional or proprietary models into the workflow to align with internal AI strategy, governance, and performance requirements."
    },
    {
      icon: <Sliders size={20} />,
      title: "Screening Threshold Control",
      desc: "Adjust screening sensitivity and specificity to match study volume, reviewer capacity, and methodological priorities."
    },
    {
      icon: <Database size={20} />,
      title: "Custom Ontology Mapping",
      desc: "Map extracted outputs to internal taxonomies, controlled vocabularies, and downstream evidence systems."
    }
  ];

  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Enterprise control for rigorous evidence workflows
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          OpenOutcomesResearch is designed for organizations that need more than generic artificial intelligence (AI) outputs. It provides the flexibility, control, and traceability required for governed research and evidence review environments.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.map((p, i) => (
          <div key={i} className="p-8 rounded-3xl border border-black/10 hover:border-black/20 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 bg-white group flex flex-col">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
              {p.icon}
            </div>
            <h3 className="font-semibold text-lg text-black mb-3">{p.title}</h3>
            <p className="text-black/60 leading-relaxed flex-grow">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};