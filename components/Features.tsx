import React from 'react';
import { Database, Search, FileText, Layers, BarChart3, TrendingUp } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <Database size={20} />,
      title: "Connected evidence sources",
      desc: "Bring together the sources research teams already rely on, including scientific literature, journal subscriptions, clinical trial databases, public research databases, real world evidence sources, and internal files."
    },
    {
      icon: <Search size={20} />,
      title: "AI search and review",
      desc: "Start with a research question and use AI to help organize searches, screen results, and identify relevant evidence across sources."
    },
    {
      icon: <FileText size={20} />,
      title: "Evidence extraction",
      desc: "Capture the most important information from each study or record, including study design, sample size, population, intervention, comparator, endpoints, outcomes, safety findings, economic evidence, and source details."
    },
    {
      icon: <Layers size={20} />,
      title: "Structured evidence datasets",
      desc: "Turn literature and research records into clean datasets that can be reviewed, filtered, analyzed, and reused."
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Analytics dashboard",
      desc: "Explore the data through charts, comparisons, filters, evidence maps, and trend views."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Trend, gap, and export analysis",
      desc: "Identify emerging research trends, missing evidence, understudied populations, weak endpoints, and limited head to head data, then export review-ready tables, charts, and reports."
    }
  ];

  return (
    <section id="features" className="space-y-10">
      <div className="max-w-3xl mx-auto space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Everything teams need to turn literature into structured evidence.
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          OpenOutcomesResearch helps teams move from searching papers to working with evidence they can review, compare, and reuse.
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
    </section>
  );
};