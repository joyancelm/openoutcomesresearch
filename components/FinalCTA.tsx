import React from 'react';
import { useDemoModal } from '../DemoModalContext';

export const FinalCTA: React.FC = () => {
  const { openDemoModal, openWaitlistModal } = useDemoModal();

  return (
    <section id="early-access" className="px-6 max-w-4xl mx-auto text-center space-y-8 bg-black/5 p-12 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        Turn literature into structured evidence your team can trust
      </h2>
      <p className="text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
        See how OpenOutcomesResearch helps teams accelerate screening, extract structured study data, and uncover trends and evidence gaps without losing the source behind each result.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button type="button" onClick={openDemoModal} className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-colors">
          Request a Demo
        </button>
        <button type="button" onClick={openWaitlistModal} className="bg-white text-black border border-black/20 px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-colors inline-block">
          Join the Waitlist
        </button>
      </div>
      
      <p className="text-sm text-black/50">
        Built for health economics and outcomes research (HEOR), academic researchers, contract research organizations (CROs), and regulated review environments.
      </p>
    </section>
  );
};
