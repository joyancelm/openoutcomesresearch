import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-black">OpenOutcomesResearch</p>
          <p className="text-sm text-black/50 mt-1 max-w-md">OpenOutcomesResearch is building AI infrastructure for literature review and data analytics. The platform helps teams turn scientific literature, research databases, and evidence sources into structured data, dashboards, and exportable insights.</p>
          <p className="text-sm text-black/50 mt-1">© {new Date().getFullYear()} OpenOutcomesResearch. All rights reserved.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-black/60">
          <button type="button" onClick={() => scrollToSection('platform')} className="text-left hover:text-black transition-colors">Platform</button>
          <button type="button" onClick={() => scrollToSection('data-sources')} className="text-left hover:text-black transition-colors">Data Sources</button>
          <button type="button" onClick={() => scrollToSection('how-it-works')} className="text-left hover:text-black transition-colors">How It Works</button>
          <button type="button" onClick={() => scrollToSection('use-cases')} className="text-left hover:text-black transition-colors">Use Cases</button>
          <button type="button" onClick={() => scrollToSection('demo')} className="text-left hover:text-black transition-colors">Demo</button>
          <button type="button" onClick={() => scrollToSection('early-access')} className="text-left hover:text-black transition-colors">Join Beta</button>
          <a href="mailto:hello@openoutcomesresearch.com" className="text-left hover:text-black transition-colors">Contact</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-sm text-black/50">
        Scientific literature, turned into data analytics.
      </div>
    </footer>
  );
};