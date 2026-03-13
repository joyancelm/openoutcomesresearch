import React from 'react';
import { X, Check } from 'lucide-react';

export const WhyOpenOutcomesResearch: React.FC = () => {
  return (
    <section className="px-6 max-w-6xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          The AI Research Platform for HEOR: Designed for rigorous evidence synthesis
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          Generic AI tools can help summarize text, but Health Economics and Outcomes Research (HEOR) and evidence teams need more than a summary. They need an AI research platform with robust data analytics, structured outputs, a clearer review workflow, and a way to connect extracted information back to the original source.
        </p>
      </div>
      
      <div className="border border-black/10 rounded-[2rem] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-10 md:p-16 bg-black/5 space-y-8">
            <h3 className="text-xl font-semibold text-black/60">Generic AI tools</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                <span>Narrative summaries that are hard to compare across studies</span>
              </li>
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                <span>Black-box answers without clear links to the source text</span>
              </li>
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                <span>Misses nuanced endpoints, subgroups, and evidence gaps</span>
              </li>
              <li className="flex gap-4 text-black/60">
                <X className="w-6 h-6 shrink-0 text-black/40" />
                <span>Requires constant prompt engineering and validation</span>
              </li>
            </ul>
          </div>
          <div className="p-10 md:p-16 bg-black text-white space-y-8">
            <h3 className="text-xl font-semibold">OpenOutcomesResearch</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                <span>Structured study-level data outputs (PICO, endpoints, etc.) for data analytics</span>
              </li>
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                <span>Every extracted data point is linked directly to the source text</span>
              </li>
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                <span>Surfaces underreported areas, inconsistent findings, and blind spots</span>
              </li>
              <li className="flex gap-4">
                <Check className="w-6 h-6 shrink-0 text-white/60" />
                <span>Built specifically for how HEOR and evidence teams review and analyze literature</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
