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
      question: "How does OpenOutcomesResearch's AI research platform work?",
      answer: "Our AI research platform uses advanced natural language processing to extract structured data from unstructured biomedical literature. Unlike generic AI, every data point we extract is linked directly back to its source text in the original document, ensuring complete transparency and auditability for HEOR and evidence synthesis."
    },
    {
      question: "What data sources are supported?",
      answer: "OpenOutcomesResearch integrates with major biomedical databases like PubMed and clinical trial registries. You can also securely upload your own PDF libraries, systematic review results, or proprietary literature collections for analysis."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We employ enterprise-grade security, including encryption at rest and in transit. We do not use your proprietary data or uploaded documents to train our public AI models, ensuring your intellectual property remains strictly confidential."
    },
    {
      question: "Who is the intended user for OpenOutcomesResearch?",
      answer: "Our AI research platform is built specifically for Health Economics and Outcomes Research (HEOR) teams, clinical researchers, medical affairs professionals, and academic review teams who need to synthesize evidence and conduct data analytics efficiently."
    }
  ];

  return (
    <section id="faq" className="px-6 max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-black/70">
          Everything you need to know about the product, data, and security.
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
