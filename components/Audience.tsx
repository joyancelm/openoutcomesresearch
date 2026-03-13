import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-gray-900">
           <Briefcase className="w-6 h-6 text-blue-700" />
           <h3 className="text-xl font-semibold">Pharma & HEOR Teams</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-gray-600">
             <span className="text-blue-700 font-bold">•</span>
             <span><strong>Landscape Reviews:</strong> Quickly assess competitor evidence density for new indications.</span>
          </li>
          <li className="flex gap-3 text-sm text-gray-600">
             <span className="text-blue-700 font-bold">•</span>
             <span><strong>Endpoint Analysis:</strong> Identify which trials report Quality of Life (PROs) vs. only clinical endpoints.</span>
          </li>
           <li className="flex gap-3 text-sm text-gray-600">
             <span className="text-blue-700 font-bold">•</span>
             <span><strong>Subgroup Mining:</strong> Find under-studied patient populations to inform trial inclusion criteria.</span>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
         <div className="flex items-center gap-3 text-gray-900">
           <BookOpen className="w-6 h-6 text-black" />
           <h3 className="text-xl font-semibold">Academics & CROs</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-gray-600">
             <span className="text-black font-bold">•</span>
             <span><strong>Automated Screening:</strong> Cut title/abstract screening time by 80% with relevance ranking.</span>
          </li>
          <li className="flex gap-3 text-sm text-gray-600">
             <span className="text-black font-bold">•</span>
             <span><strong>Data Extraction:</strong> Auto-populate tables for Systematic Reviews and Meta-Analyses.</span>
          </li>
           <li className="flex gap-3 text-sm text-gray-600">
             <span className="text-black font-bold">•</span>
             <span><strong>PRISMA Tracking:</strong> Automatically generate flow diagrams for your publication.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};