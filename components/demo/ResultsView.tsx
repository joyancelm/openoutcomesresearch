import React, { useState, useMemo } from 'react';
import { RotateCcw, Wand2, Users, Syringe, Scale, Activity, BarChart3, ArrowRight, Download, Filter, CheckCircle2, ArrowUpDown } from 'lucide-react';

const mockResults = [
  {
    id: 1,
    title: "Management of Splanchnic Venous Thrombosis: An Update.",
    journal: "Hamostaseologie",
    authors: "Rühl H et al.",
    year: 2026,
    month: "Feb",
    type: "RCT",
    confidence: 98,
    n: 1245,
    outcomes: 8,
    pico: {
      population: "Patients with splanchnic venous thrombosis (SVT), including those with liver disease, myeloproliferative neoplasms, and solid malignancy",
      intervention: "Anticoagulant therapy, including direct oral anticoagulants (DOACs)",
      comparison: "Conventional anticoagulant drugs, vitamin K antagonists, low-molecular-weight heparins",
      outcome: "Vessel recanalization, survival, recurrence, bleeding risk, safety and efficacy"
    }
  },
  {
    id: 2,
    title: "Antithrombotic therapy for cancer-associated venous thromboembolism.",
    journal: "Clinical research in cardiology",
    authors: "Di Leo G et al.",
    year: 2026,
    month: "Feb",
    type: "Observational",
    confidence: 92,
    n: 842,
    outcomes: 5,
    pico: {
      population: "Patients with active cancer and objectively confirmed symptomatic or incidental proximal deep vein thrombosis (DVT) or pulmonary embolism (PE)",
      intervention: "Edoxaban, rivaroxaban, apixaban (Direct oral anticoagulants)",
      comparison: "Dalteparin (Low-molecular-weight heparin)",
      outcome: "Recurrent venous thromboembolism, major bleeding, clinically relevant non-major bleeding, mortality"
    }
  },
  {
    id: 3,
    title: "Cancer-Associated Thrombosis in Breast Cancer: Risk Factors and Personalized Management.",
    journal: "Journal of clinical medicine",
    authors: "Kozhukhov S et al.",
    year: 2026,
    month: "Jan",
    type: "Retrospective",
    confidence: 88,
    n: 530,
    outcomes: 4,
    pico: {
      population: "Female patients diagnosed with early or metastatic breast cancer undergoing active systemic therapy",
      intervention: "Prophylactic dose low-molecular-weight heparin (LMWH)",
      comparison: "Placebo or no routine thromboprophylaxis",
      outcome: "Incidence of symptomatic VTE, major bleeding events, overall survival at 12 months"
    }
  }
];

export const ResultsView = ({ onOpenDetail, onOpenAnalytics, onBack }: { onOpenDetail: () => void, onOpenAnalytics: () => void, onBack: () => void }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    types: ['RCT', 'Observational', 'Retrospective', 'Meta-Analysis'],
    years: ['2026', '2025', '2024', '2023'],
    minConfidence: 0
  });
  
  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => setIsExporting(false), 1500);
  };

  const toggleFilter = (category: 'types' | 'years', value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value) 
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const filteredAndSortedResults = useMemo(() => {
    const result = mockResults.filter(item => 
      filters.types.includes(item.type) &&
      filters.years.includes(item.year.toString()) &&
      item.confidence >= filters.minConfidence
    );

    if (sortBy === 'year') {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'confidence') {
      result.sort((a, b) => b.confidence - a.confidence);
    } else if (sortBy === 'n') {
      result.sort((a, b) => b.n - a.n);
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="flex h-full animate-in fade-in duration-500">
      {/* Sidebar Filters */}
      <div className="w-64 border-r border-gray-200 bg-white p-6 overflow-y-auto hidden md:block shrink-0">
        <div className="flex items-center gap-2 font-bold text-gray-900 mb-6">
          <Filter className="w-4 h-4" /> Filters
        </div>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Study Type</h4>
            <div className="space-y-2">
              {['RCT', 'Observational', 'Retrospective', 'Meta-Analysis'].map(type => (
                <label key={type} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                    checked={filters.types.includes(type)}
                    onChange={() => toggleFilter('types', type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Publication Year</h4>
            <div className="space-y-2">
              {['2026', '2025', '2024', '2023'].map(year => (
                <label key={year} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                    checked={filters.years.includes(year)}
                    onChange={() => toggleFilter('years', year)}
                  />
                  {year}
                </label>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Min AI Confidence</h4>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={filters.minConfidence} 
              onChange={(e) => setFilters(prev => ({ ...prev, minConfidence: parseInt(e.target.value) }))}
              className="w-full accent-indigo-600" 
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>{filters.minConfidence}%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Back to Search"><RotateCcw className="w-5 h-5 text-gray-600" /></button>
            <h2 className="text-2xl font-bold text-gray-900">Results</h2>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-medium border border-gray-200">230 screened</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 mr-4">
              <ArrowUpDown className="w-4 h-4 text-gray-500" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-none bg-transparent text-gray-700 font-medium focus:ring-0 cursor-pointer"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="year">Sort by Year</option>
                <option value="confidence">Sort by AI Confidence</option>
                <option value="n">Sort by Sample Size</option>
              </select>
            </div>
            <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              {isExporting ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Download className="w-4 h-4" />}
              {isExporting ? 'Exported' : 'Export CSV'}
            </button>
            <div className="relative">
              <button onClick={onOpenAnalytics} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm relative z-10">
                <BarChart3 className="w-4 h-4" /> View Analytics
              </button>
              <div className="absolute inset-0 rounded-lg ring-2 ring-indigo-500 ring-offset-2 animate-pulse pointer-events-none"></div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce pointer-events-none whitespace-nowrap">
                View gap analysis
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredAndSortedResults.map((result, index) => (
            <div className="relative" key={result.id}>
              <div 
                onClick={onOpenDetail}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer space-y-4 group relative z-10"
              >
                <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded text-xs font-medium uppercase">{result.type}</span>
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded text-xs font-medium flex items-center gap-1">
                      <Wand2 className="w-3 h-3" /> AI ENHANCED
                    </span>
                    <span className="px-2 py-0.5 bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-500" /> {result.confidence}% CONFIDENCE
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{result.title}</h3>
                  <p className="text-sm text-gray-500">{result.year} {result.month} • {result.journal} • {result.authors}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="flex gap-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> n={result.n.toLocaleString()}</span>
                <span className="flex items-center gap-1"><Activity className="w-4 h-4" /> {result.outcomes} Outcomes</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 space-y-2 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-800 tracking-wide">
                    <Users className="w-4 h-4" /> POPULATION
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{result.pico.population}</p>
                </div>
                <div className="bg-purple-50/50 border border-purple-100 rounded-lg p-4 space-y-2 hover:bg-purple-50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-800 tracking-wide">
                    <Syringe className="w-4 h-4" /> INTERVENTION
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{result.pico.intervention}</p>
                </div>
                <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-4 space-y-2 hover:bg-amber-50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 tracking-wide">
                    <Scale className="w-4 h-4" /> COMPARISON
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{result.pico.comparison}</p>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-4 space-y-2 hover:bg-emerald-50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wide">
                    <Activity className="w-4 h-4" /> OUTCOME / FINDINGS
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{result.pico.outcome}</p>
                </div>
              </div>
            </div>
            {index === 0 && (
              <>
                <div className="absolute inset-0 rounded-xl ring-2 ring-indigo-500 ring-offset-2 animate-pulse pointer-events-none"></div>
                <div className="absolute -top-3 -left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce pointer-events-none whitespace-nowrap z-20">
                  Click to view extracted data
                </div>
              </>
            )}
          </div>
          ))}
          {filteredAndSortedResults.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No results match your filters. Try adjusting them.
            </div>
          )}
          {filteredAndSortedResults.length > 0 && (
            <div className="text-center py-6 text-sm font-medium text-gray-500 bg-gray-50 rounded-xl border border-gray-200 border-dashed">
              Showing top {filteredAndSortedResults.length} most relevant results out of 230 screened articles.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
