import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-black">OpenOutcomesResearch</p>
          <p className="text-sm text-black/50 mt-1">AI-powered structured evidence review for health economics and outcomes research (HEOR)</p>
          <p className="text-sm text-black/50 mt-1">© {new Date().getFullYear()} OpenOutcomesResearch. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-black/60">
          <Link to="/about" className="hover:text-black transition-colors">Privacy</Link>
          <Link to="/about" className="hover:text-black transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};