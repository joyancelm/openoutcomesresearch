import React from 'react';
import { Search, Filter, BarChart3 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Ask a question",
      desc: "Type in plain English. The system builds and validates a complex search string for PubMed/ClinicalTrials.gov."
    },
    {
      step: "02",
      icon: <Filter className="w-5 h-5" />,
      title: "Screen & Extract",
      desc: "AI screens abstracts for relevance, then reads full-text PDFs to populate a standardized data matrix."
    },
    {
      step: "03",
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analyze & Export",
      desc: "Visualize evidence gaps instantly or download the raw dataset (CSV/JSON/RIS) for your Systematic Review tool."
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">How it works</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
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
    </div>
  );
};