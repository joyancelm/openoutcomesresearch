import React from 'react';
import { Search, Plug, Filter, Database, BarChart3, Download } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Ask a research question",
      desc: "Start with the disease area, treatment, endpoint, comparator, dataset, or evidence question your team cares about. Example: What clinical, safety, and economic evidence supports GLP 1 therapies for obesity and cardiovascular risk reduction?"
    },
    {
      step: "02",
      icon: <Plug className="w-5 h-5" />,
      title: "Connect the evidence sources",
      desc: "Use the sources your team already relies on, including literature, trial databases, public datasets, real world evidence sources, and internal files."
    },
    {
      step: "03",
      icon: <Filter className="w-5 h-5" />,
      title: "Find and screen relevant evidence",
      desc: "Organize the evidence and review which studies, records, or datasets should be included."
    },
    {
      step: "04",
      icon: <Database className="w-5 h-5" />,
      title: "Extract structured data",
      desc: "Turn unstructured research into usable fields like population, treatment, comparator, endpoint, outcome, safety finding, economic measure, and source."
    },
    {
      step: "05",
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analyze the evidence landscape",
      desc: "Compare treatments, find patterns, identify gaps, review trends, and understand what the evidence shows across sources."
    },
    {
      step: "06",
      icon: <Download className="w-5 h-5" />,
      title: "Export and reuse the dataset",
      desc: "Download evidence tables, charts, datasets, and insights for reports, reviews, presentations, dossiers, or future analysis."
    }
  ];

  return (
    <section id="how-it-works" className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">From research question to analytics in one workflow.</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-gray-100 -z-10"></div>

        {steps.map((s, i) => (
          <div key={i} className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-gray-900 shadow-sm z-10">
              {s.icon}
            </div>
            <div className="space-y-2 max-w-xs">
               <div className="text-xs font-mono font-medium text-gray-400">STEP {s.step}</div>
               <h3 className="font-semibold text-gray-900">{s.title}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
