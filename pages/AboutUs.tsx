import React from 'react';
import { ShieldCheck, Lightbulb, Users, Microscope } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <main className="flex-grow pt-32 pb-24 space-y-24 px-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          Built by clinicians, for clinicians: The AI Research Platform for HEOR
        </h1>
        <p className="text-xl text-black/70 leading-relaxed">
          We are on a mission to bring ethical, transparent, and rigorous AI and data analytics to the forefront of Health Economics and Outcomes Research (HEOR), medical research, and evidence synthesis.
        </p>
      </section>

      {/* Our Vision */}
      <section className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight">Our Vision for Innovation</h2>
          <p className="text-lg text-black/70 leading-relaxed">
            The pace of medical research is accelerating, but the tools used to synthesize that research have remained stagnant. We believe that AI can fundamentally transform how evidence is reviewed, but only if it is built with the rigor and transparency that science demands. Our vision is a future where researchers spend less time on manual data abstraction and more time on high-level data analytics and strategic decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-black/10 bg-black/5 space-y-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-semibold">Accelerating Discovery</h3>
            <p className="text-black/70 leading-relaxed">
              By automating the most tedious parts of evidence synthesis and data analytics, we empower HEOR teams to uncover insights faster and bring life-saving treatments to market sooner.
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-black/10 bg-black/5 space-y-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-semibold">Ethical & Transparent AI</h3>
            <p className="text-black/70 leading-relaxed">
              We don't believe in black boxes. Every data point extracted by OpenOutcomesResearch is linked directly to its source, ensuring complete auditability and trust for evidence synthesis.
            </p>
          </div>
        </div>
      </section>

      {/* Clinician Led */}
      <section className="grid md:grid-cols-2 gap-12 items-center border-t border-black/10 pt-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <Users size={16} />
            Our DNA
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            We understand the workflow because we've lived it.
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            OpenOutcomesResearch wasn't built by tech founders looking for a problem. It was built by clinicians, HEOR experts, and researchers who experienced the pain of manual evidence synthesis and data analytics firsthand. We know what it takes to conduct a rigorous systematic review, and we've designed our platform to enhance—not replace—the critical thinking of domain experts.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-start gap-3 text-black/70">
              <Microscope className="w-6 h-6 shrink-0 text-black/40" />
              <span>Deep understanding of clinical trial design and endpoints.</span>
            </li>
            <li className="flex items-start gap-3 text-black/70">
              <ShieldCheck className="w-6 h-6 shrink-0 text-black/40" />
              <span>Commitment to PRISMA guidelines and regulatory standards.</span>
            </li>
          </ul>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden bg-black/5 border border-black/10">
          <img 
            src="/team-photo.png" 
            alt="The OpenOutcomesResearch Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </main>
  );
};
