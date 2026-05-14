import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { ValueProps } from '../components/Features';
import { DataSources } from '../components/DataSources';
import { HowItWorks } from '../components/HowItWorks';
import { AISection } from '../components/AISection';
import { UseCases } from '../components/UseCases';
import { WhyOpenOutcomesResearch } from '../components/WhyOpenOutcomesResearch';
import { Trust } from '../components/Trust';
import { Compliance } from '../components/Compliance';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { FinalCTA } from '../components/FinalCTA';

export const Landing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (!state?.scrollTo) return;

    if (state.scrollTo === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/', { replace: true, state: {} });
      return;
    }

    const target = document.getElementById(state.scrollTo);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    navigate('/', { replace: true, state: {} });
  }, [location.state, navigate]);

  return (
    <main className="flex-grow pt-24 pb-24 space-y-32">
      <Hero />
      <Problem />
      <Solution />
      <section className="px-6 max-w-6xl mx-auto">
        <ValueProps />
      </section>
      <DataSources />
      <HowItWorks />
      <InteractiveDemo />
      <AISection />
      <UseCases />
      <WhyOpenOutcomesResearch />
      <Trust />
      <Compliance />
      <FinalCTA />
    </main>
  );
};
