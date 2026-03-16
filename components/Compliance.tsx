import React from 'react';
import { FileCheck2, GitPullRequestDraft, History, PenTool, ShieldCheck } from 'lucide-react';

export const Compliance: React.FC = () => {
  return (
    <section className="px-6 max-w-5xl mx-auto space-y-12">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-sm font-medium text-black/70">
          <ShieldCheck className="w-4 h-4" />
          Designed to support 21 CFR Part 11-aligned workflows
        </div>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Built for traceable, governed review workflows
        </h2>
        <p className="text-lg text-black/70 leading-relaxed">
          OpenOutcomesResearch supports configurable controls for audit-friendly electronic records, workflow governance, and review traceability in regulated research environments.
        </p>
      </div>
      
      <div className="space-y-8 border-t border-black/10 pt-8">
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
            <FileCheck2 className="w-6 h-6 text-black/70" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">Traceable evidence records</h3>
            <p className="text-black/60 leading-relaxed text-lg">
              Each extracted output remains connected to source context for verification and oversight.
            </p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
            <GitPullRequestDraft className="w-6 h-6 text-black/70" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">Governed review states</h3>
            <p className="text-black/60 leading-relaxed text-lg">
              Support draft, reviewed, approved, and signed-off workflow states for evidence records.
            </p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
            <History className="w-6 h-6 text-black/70" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">Audit trail visibility</h3>
            <p className="text-black/60 leading-relaxed text-lg">
              Track who created, edited, reviewed, or approved a record and when those actions occurred.
            </p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
            <PenTool className="w-6 h-6 text-black/70" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">Signature-ready workflow architecture</h3>
            <p className="text-black/60 leading-relaxed text-lg">
              Designed to support electronic signature controls where regulated sign-off is required.
            </p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-black/70" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">Inspection-ready documentation model</h3>
            <p className="text-black/60 leading-relaxed text-lg">
              Structured outputs and change history designed for review, retention, and oversight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
