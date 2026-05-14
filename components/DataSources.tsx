import React from 'react';
import { BookOpen, LibraryBig, FlaskConical, Database, Globe2, FileSpreadsheet } from 'lucide-react';

export const DataSources: React.FC = () => {
  const sources = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Scientific literature',
      desc: 'Search and analyze published research from medical and scientific databases.'
    },
    {
      icon: <LibraryBig className="w-5 h-5" />,
      title: 'Journal subscriptions',
      desc: 'Work with literature your institution already has access to through paid journal subscriptions.'
    },
    {
      icon: <FlaskConical className="w-5 h-5" />,
      title: 'Clinical trial databases',
      desc: 'Analyze trial records, study designs, interventions, endpoints, enrollment details, and trial status.'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Public databases',
      desc: 'Use public research databases to expand the evidence landscape and support broader analysis.'
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: 'Real world evidence sources',
      desc: 'Connect literature-based evidence with real world evidence sources to support a more complete view of treatment value and outcomes.'
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: 'Internal research files',
      desc: 'Bring in team-owned PDFs, spreadsheets, review files, and research documents to make internal evidence easier to analyze and reuse.'
    }
  ];

  return (
    <section id="data-sources" className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Built to work with the evidence sources teams already use.</h2>
        <p className="text-lg text-black/70 leading-relaxed text-justify">
          Scientific evidence does not live in one place. OpenOutcomesResearch is designed to help teams bring together multiple sources and turn them into one structured analytics workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sources.map((source) => (
          <div key={source.title} className="p-8 border border-black/10 rounded-3xl space-y-4 bg-white shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black">
              {source.icon}
            </div>
            <h3 className="font-semibold text-lg">{source.title}</h3>
            <p className="text-black/60 leading-relaxed">{source.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};