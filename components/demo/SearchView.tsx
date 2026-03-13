import React, { useState } from 'react';
import { Search, Clock, RotateCcw, Tag, Wand2, X, Settings2, Sliders, Filter, CheckCircle2, XCircle } from 'lucide-react';

export const SearchView = ({ onSearch }: { onSearch: () => void }) => {
  const [query, setQuery] = useState("anticoagulant use for cancer-associated thrombosis (CAT) in patients");
  const [activeTags, setActiveTags] = useState<string[]>(['Patients with Cancer', 'Cancer-Associated Thrombosis', 'Anticoagulant Use']);
  const [sensitivity, setSensitivity] = useState(95);
  const [specificity, setSpecificity] = useState(80);
  
  const retainedArticles = Math.max(12, Math.round(230 * (sensitivity / 95) * (80 / specificity)));

  const toggleTag = (tag: string) => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4 pt-8">
        <h2 className="text-3xl font-bold text-[#0f172a]">What are you researching?</h2>
        <div className="relative max-w-2xl mx-auto group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 rounded-full border border-gray-200 shadow-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all cursor-text"
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 text-gray-400">
            <button className="hover:text-gray-600 transition-colors" title="Recent Searches"><Clock className="w-5 h-5" /></button>
            <button onClick={() => setQuery('')} className="hover:text-gray-600 transition-colors" title="Clear"><RotateCcw className="w-5 h-5" /></button>
          </div>
        </div>
        <p className="text-sm text-gray-500">Start typing to see AI-optimized boolean queries instantly.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 tracking-wider">
                <Settings2 className="w-4 h-4" /> LIVE BOOLEAN PREVIEW
              </div>
              <span className="text-[10px] font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full">OPTIMIZED</span>
            </div>
            <pre className="flex-1 text-[11px] text-gray-600 font-mono bg-gray-50 p-4 rounded-lg overflow-x-auto border border-gray-100">
{`("Cancer"[MeSH]
  OR "Neoplasms"[MeSH]
  OR "cancer"[tiab]
  OR "neoplasm*"[tiab]
  OR "oncology patient*"[tiab]
  OR "malignant disease"[tiab]
  OR "neoplastic disease"[tiab])
AND
("Thrombosis"[MeSH]
  OR "cancer-associated thrombosis"[tiab]
  OR "CAT"[tiab]
  OR "cancer related thrombosis"[tiab]
  OR "thrombosis in cancer"[tiab]
  OR "thromboembolic event in cancer"[tiab]
  OR "thrombosis due to cancer"[tiab])`}
            </pre>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 tracking-wider mb-4">
              <Filter className="w-4 h-4" /> INCLUSION & EXCLUSION CRITERIA
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Inclusion */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-green-700 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> INCLUSION</div>
                <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 marker:text-green-500">
                  <li>Adult patients (≥18 years)</li>
                  <li>Confirmed cancer-associated thrombosis</li>
                  <li>Treated with DOACs or LMWH</li>
                </ul>
                <div className="text-[10px] text-gray-400 mt-2 italic border-t border-gray-100 pt-1">
                  Sensitivity: {sensitivity}% match with human screener
                </div>
              </div>
              {/* Exclusion */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-red-700 flex items-center gap-1"><XCircle className="w-3 h-3"/> EXCLUSION</div>
                <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 marker:text-red-500">
                  <li>Pediatric patients</li>
                  <li>Active bleeding at baseline</li>
                  <li>Non-cancer related thrombosis</li>
                </ul>
                <div className="text-[10px] text-gray-400 mt-2 italic border-t border-gray-100 pt-1">
                  Specificity: {specificity}% match with human screener
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 tracking-wider mb-3">
                <Tag className="w-4 h-4" /> REFINE WITH TAGS
              </div>
              <div className="flex flex-wrap gap-2">
                {['Patients with Cancer', 'Cancer-Associated Thrombosis', 'Anticoagulant Use', 'DOACs', 'LMWH'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full border text-xs transition-colors ${activeTags.includes(tag) ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 tracking-wider mb-3">
                <Wand2 className="w-4 h-4" /> EXTRACT DATA
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs flex items-center gap-1 cursor-pointer hover:bg-green-100 transition-colors">
                  cost-effectiveness analyses (CEA) <X className="w-3 h-3" />
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200 text-xs flex items-center gap-1 cursor-pointer hover:bg-gray-100 transition-colors border-dashed">
                  + Add extraction target
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 tracking-wider mb-3">
                <Sliders className="w-4 h-4" /> AI SCREENING THRESHOLDS
              </div>
              <div className="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-700" title="Percentage that the AI model screens and matches with the human article screener">Sensitivity (Inclusion Match)</span>
                    <span className="text-indigo-600 font-bold">{sensitivity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" max="100" 
                    value={sensitivity} 
                    onChange={(e) => setSensitivity(Number(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-700" title="Percentage that the exclusion matches the human article screener">Specificity (Exclusion Match)</span>
                    <span className="text-indigo-600 font-bold">{specificity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" max="100" 
                    value={specificity} 
                    onChange={(e) => setSpecificity(Number(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-600">Articles to Screen:</span>
                  <span className="text-sm font-bold text-gray-900 bg-white px-2 py-1 rounded border border-gray-200">{retainedArticles}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-4">
            <button 
              onClick={onSearch}
              className="w-full bg-black text-white rounded-lg py-3 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg active:scale-[0.98] relative z-10"
            >
              <Search className="w-4 h-4" /> Screen {retainedArticles} Articles
            </button>
            <div className="absolute inset-0 rounded-lg ring-2 ring-indigo-500 ring-offset-2 animate-pulse pointer-events-none"></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce pointer-events-none whitespace-nowrap">
              Click to screen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
