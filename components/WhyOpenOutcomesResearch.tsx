import React from 'react';
import { X, Check } from 'lucide-react';

export const WhyOpenOutcomesResearch: React.FC = () => {
  return (
    <section className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Built for evidence review, not generic AI chat
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
            General-purpose AI tools can summarize text, but evidence teams need structured outputs, traceable workflows, and a reliable link back to the original source. OpenOutcomesResearch is designed for how literature is actually screened, extracted, reviewed, and analyzed in health economics and outcomes research (HEOR), evidence synthesis, and enterprise research settings.
        </p>
      </div>
      
      <div className="border border-black/10 rounded-[2rem] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-10 md:p-16 bg-black/5 space-y-8">
            <h3 className="text-xl font-semibold text-black/60">Generic AI tools</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                   <span>Narrative summaries that are difficult to compare across studies</span>
              </li>
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                   <span>Limited traceability from outputs back to source text</span>
              </li>
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                   <span>Often miss nuanced endpoints, subgroups, and evidence gaps</span>
              </li>
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                   <span>Depend on repeated prompt engineering and manual revalidation</span>
              </li>
            </ul>
          </div>
          <div className="p-10 md:p-16 bg-black text-white space-y-8">
            <h3 className="text-xl font-semibold">OpenOutcomesResearch</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                   <span>Structured study-level outputs for analysis, review, and downstream reuse</span>
              </li>
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                   <span>Every extracted field linked directly to source context</span>
              </li>
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                   <span>Designed to surface underreported areas, inconsistencies, and blind spots</span>
              </li>
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                   <span>Purpose-built for evidence workflows in health economics and outcomes research (HEOR), contract research organizations (CROs), pharma, and academic research</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
