import React from 'react';

export const FinalCTA: React.FC = () => {
  const scrollToDemo = () => {
    const target = document.getElementById('demo');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="early-access" className="px-6 max-w-4xl mx-auto text-center space-y-8 bg-black/5 p-12 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        Turn your evidence sources into data analytics.
      </h2>
      <p className="text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
        Join the OpenOutcomesResearch beta and start turning scientific literature, research databases, and internal files into structured evidence data, dashboards, and insights.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://app.openoutcomesresearch.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-colors inline-block text-center">
          Try It Now
        </a>
        <button type="button" onClick={scrollToDemo} className="bg-white text-black border border-black/20 px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-colors inline-block">
          Try the Demo
        </button>
      </div>
      
      <div className="space-y-3">
        <p className="text-sm text-black/50">
          For research, HEOR, pharma, CRO, payer, and market access teams working with scientific evidence.
        </p>
      </div>
    </section>
  );
};
