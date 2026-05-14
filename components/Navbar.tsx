import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToTopOfLanding = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'top' } });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const launchEarlyAccess = () => {
    window.open('https://app.openoutcomesresearch.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button type="button" onClick={goToTopOfLanding} className="font-semibold text-black tracking-tight text-lg">OpenOutcomesResearch</button>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-6">
            <button type="button" onClick={() => goToSection('platform')} className="text-sm font-medium text-black/60 hover:text-black transition-colors">Platform</button>
            <button type="button" onClick={() => goToSection('features')} className="text-sm font-medium text-black/60 hover:text-black transition-colors">Features</button>
            <button type="button" onClick={() => goToSection('how-it-works')} className="text-sm font-medium text-black/60 hover:text-black transition-colors">How It Works</button>
            <button type="button" onClick={() => goToSection('use-cases')} className="text-sm font-medium text-black/60 hover:text-black transition-colors">Use Cases</button>
            <button type="button" onClick={() => goToSection('demo')} className="text-sm font-medium text-black/60 hover:text-black transition-colors">Demo</button>
            <button type="button" onClick={() => goToSection('early-access')} className="text-sm font-medium text-black/60 hover:text-black transition-colors">Join Beta</button>
          </div>
          <button type="button" onClick={launchEarlyAccess} className="text-sm font-medium text-white bg-black hover:bg-black/80 px-4 py-2 rounded-full transition-all inline-block">
            Try It Now
          </button>
        </div>
      </div>
    </nav>
  );
};