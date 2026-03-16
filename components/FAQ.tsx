import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-black">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-black/50 shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-black/50 shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-black/70 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is OpenOutcomesResearch?",
      answer: "OpenOutcomesResearch is an AI platform for health economics and outcomes research (HEOR), evidence synthesis, and literature review workflows. It helps teams screen studies, extract structured study data, and organize findings into review-ready evidence records."
    },
    {
      question: "How does OpenOutcomesResearch work?",
      answer: "OpenOutcomesResearch helps teams screen literature, extract structured study fields, and organize results into review-ready evidence records. Each extracted output remains linked to source text for verification."
    },
    {
      question: "How is this different from generic AI tools?",
      answer: "Most AI tools generate summaries. OpenOutcomesResearch is designed to produce structured, source-linked study data that teams can compare, validate, and reuse across evidence workflows."
    },
    {
      question: "What data sources are supported?",
      answer: "OpenOutcomesResearch supports major biomedical literature sources such as PubMed and clinical trial registries, along with uploaded PDF libraries and internal literature collections."
    },
    {
      question: "Can reviewers verify every extracted field?",
      answer: "Yes. The platform is designed so extracted outputs stay connected to source context, allowing reviewers to validate results quickly."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. OpenOutcomesResearch is built with enterprise-minded security practices, including encryption in transit and at rest. Proprietary uploaded data is not used to train public AI models."
    },
    {
      question: "Who is the platform for?",
      answer: "OpenOutcomesResearch is built for health economics and outcomes research (HEOR) teams, academic research groups, contract research organization (CRO) evidence teams, and pharma organizations that need faster, more transparent literature review workflows."
    },
    {
      question: "Can this support governed or regulated workflows?",
      answer: "The platform is designed to support traceability, audit history, review states, and signature-ready workflow architecture for teams operating in governed environments."
    }
  ];

  return (
    <section id="faq" className="px-6 max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-black/70">
          Everything you need to know about the platform, workflows, and enterprise readiness.
        </p>
      </div>
      
      <div className="border-t border-black/10">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};
