import React from 'react';
import { Settings, Sliders, Database } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <Settings size={20} />,
      title: "Bring Your Own Model",
      desc: "Seamlessly integrate with your institution's proprietary AI models and tailor the extraction pipeline to match your specific research protocols."
    },
    {
      icon: <Sliders size={20} />,
      title: "Screening Threshold Control",
      desc: "Configure custom sensitivity and specificity thresholds for AI screening, complete with detailed explanations to boost performance and auditability."
    },
    {
      icon: <Database size={20} />,
      title: "Custom Ontology Mapping",
      desc: "Map extracted data directly to your organization's specific controlled vocabularies and data dictionaries for seamless downstream integration."
    }
  ];

  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Advanced control for enterprise teams
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          Beyond standard extraction, OpenOutcomesResearch gives you the tools to align the platform with your institution's specific technical and methodological requirements.
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