import React from 'react';
import { FileText, Download, MoreHorizontal } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Fake UI Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-600">
            <FileText size={12} />
            <span>Project: TNBC_Immunotherapy_v2</span>
          </div>
          <span className="text-xs text-gray-400">124 papers processed</span>
        </div>
        <div className="flex items-center gap-2">
           <button className="p-1.5 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-all active:scale-90">
            <Download size={14} />
           </button>
           <button className="p-1.5 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-all active:scale-90">
            <MoreHorizontal size={14} />
           </button>
        </div>
      </div>

      {/* The Table Visual */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-white text-[10px] uppercase font-semibold text-gray-400 tracking-wider">
              <th className="px-6 py-3 border-b border-gray-100 w-64">Study ID</th>
              <th className="px-6 py-3 border-b border-gray-100">Intervention</th>
              <th className="px-6 py-3 border-b border-gray-100">Sample (N)</th>
              <th className="px-6 py-3 border-b border-gray-100">Outcome (OS)</th>
              <th className="px-6 py-3 border-b border-gray-100">Hazard Ratio (95% CI)</th>
              <th className="px-6 py-3 border-b border-gray-100 text-right">Confidence</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="group hover:bg-gray-50 transition-colors cursor-default">
              <td className="px-6 py-3 border-b border-gray-100 font-medium text-gray-900">KEYNOTE-355 (2020)</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-600">Pembrolizumab + Chemo</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-600">847</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-600">23.0 mos</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-700">0.73 (0.55–0.95)</td>
              <td className="px-6 py-3 border-b border-gray-100 text-right"><div className="inline-block w-2 h-2 rounded-full bg-blue-600"></div></td>
            </tr>
            <tr className="group hover:bg-gray-50 transition-colors cursor-default">
              <td className="px-6 py-3 border-b border-gray-100 font-medium text-gray-900">IMpassion130 (2018)</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-600">Atezolizumab + Nab-P</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-600">902</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-600">21.0 mos</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-700">0.80 (0.62–1.03)</td>
              <td className="px-6 py-3 border-b border-gray-100 text-right"><div className="inline-block w-2 h-2 rounded-full bg-blue-600"></div></td>
            </tr>
             <tr className="group hover:bg-gray-50 transition-colors cursor-default">
              <td className="px-6 py-3 border-b border-gray-100 font-medium text-gray-900">NCT02447003 (2019)</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-600">Ipilimumab</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-600">45</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-400 italic">Not Reported</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-400 italic">NR</td>
              <td className="px-6 py-3 border-b border-gray-100 text-right"><div className="inline-block w-2 h-2 rounded-full bg-amber-400"></div></td>
            </tr>
            <tr className="group hover:bg-gray-50 transition-colors cursor-default">
              <td className="px-6 py-3 border-b border-gray-100 font-medium text-gray-900">ASCENT (2021)</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-600">Sacituzumab Govitecan</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-600">529</td>
              <td className="px-6 py-3 border-b border-gray-100 text-gray-600">12.1 mos</td>
              <td className="px-6 py-3 border-b border-gray-100 font-mono text-gray-700">0.48 (0.38-0.59)</td>
              <td className="px-6 py-3 border-b border-gray-100 text-right"><div className="inline-block w-2 h-2 rounded-full bg-blue-600"></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};