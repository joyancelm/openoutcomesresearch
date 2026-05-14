import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="early-access" className="px-6 max-w-4xl mx-auto text-center space-y-8 bg-black/5 p-12 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        Turn literature into structured evidence your team can trust
      </h2>
      <p className="text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
        See how OpenOutcomesResearch helps teams accelerate screening, extract structured study data, and uncover trends and evidence gaps without losing the source behind each result.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://app.openoutcomesresearch.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-colors inline-block text-center">
          Launch App
        </a>
        <a href="https://app.openoutcomesresearch.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black border border-black/20 px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-colors inline-block">
          Start Free Beta
        </a>
      </div>
      
      <div className="space-y-3">
        <p className="text-sm text-black/50">
          Built for health economics and outcomes research (HEOR), academic researchers, contract research organizations (CROs), and regulated review environments.
        </p>
        <p className="text-sm text-black/60 bg-white/50 p-4 rounded-lg">
          <strong>Start with 100 free article extraction credits.</strong> Each article extraction uses 1 credit. During beta, each extraction run can process up to 100 articles.
        </p>
      </div>
    </section>
  );
};
