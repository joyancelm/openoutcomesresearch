import React, { useState } from 'react';
import { X, ChevronRight, Activity, FileText, Users, Shield, CheckCircle2, Microscope, TrendingUp } from 'lucide-react';

export const DetailView = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [highlightedText, setHighlightedText] = useState<string | null>(null);

  const handleHighlight = (text: string) => {
    setHighlightedText(text);
  };

  const abstractText = `Background: Venous thromboembolism (VTE) is a common and potentially life-threatening complication in cancer patients. Breast cancer patients, especially those receiving active systemic therapy, are at an increased risk. 
Methods: This retrospective, single-center study analyzed data from 842 female patients diagnosed with early or metastatic breast cancer between January 2020 and December 2025. We evaluated the incidence of symptomatic VTE during the first 12 months after cancer diagnosis. 
Results: Patients who developed VTE were significantly older and more frequently had hypertension, dyslipidemia, hyperglycemia, anemia, and leukocytosis. Multivariate analysis identified age ≥ 55 years, poor performance status (ECOG ≥ 3), and elevated glucose level as independent predictors of VTE. Deep vein thrombosis of the lower and upper extremities was the most common manifestation (52%), while pulmonary embolism was present in 24% of cases. The overall survival at 12 months was significantly lower in patients who developed VTE compared to those who did not. 
Conclusion: VTE is a clinically relevant and relatively frequent complication in patients with breast cancer, particularly during the early period of anticancer treatment. Personalized risk assessment and management strategies are crucial.`;

  // Helper to render abstract with highlights
  const renderAbstract = () => {
    if (!highlightedText) return <p>{abstractText}</p>;

    const parts = abstractText.split(highlightedText);
    if (parts.length === 1) return <p>{abstractText}</p>;

    return (
      <p>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="bg-yellow-200 text-yellow-900 px-1 rounded font-medium animate-pulse">
                {highlightedText}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-5xl h-full max-h-[800px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-start shrink-0 bg-white">
          <div className="space-y-3">
            <div className="flex gap-2 text-xs text-gray-500">
              <span className="font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">RETROSPECTIVE</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> AI Extracted</span>
              <span>Journal of clinical medicine</span>
              <span>2026</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">Cancer-Associated Thrombosis in Breast Cancer: Risk Factors and Personalized Management.</h2>
            <p className="text-sm text-gray-500 italic">Kozhukhov S, Dovganych N, Lygyrda O, et al.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-5 h-5 text-gray-500" /></button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-gray-50/30">
          
          {/* Abstract Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Source Abstract</h3>
            <div className="text-sm text-gray-700 leading-relaxed bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-xl"></div>
              {renderAbstract()}
            </div>
          </div>

          {/* Extracted Insights */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider">
              <Activity className="w-4 h-4" /> EXTRACTED INSIGHTS (Click rows to highlight source)
            </div>
            <div className="flex gap-2 border-b border-gray-200 overflow-x-auto pb-px">
              {[
                { id: 'overview', icon: FileText, label: 'Overview & Design' },
                { id: 'population', icon: Users, label: 'Population' },
                { id: 'methodology', icon: Microscope, label: 'Methodology' },
                { id: 'heor', icon: TrendingUp, label: 'HEOR' },
                { id: 'safety', icon: Shield, label: 'Safety' },
              ].map((tab, index) => (
                <div className="relative" key={tab.id}>
                  <button 
                    onClick={() => { setActiveTab(tab.id); setHighlightedText(null); }}
                    className={`px-4 py-3 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors relative z-10 ${activeTab === tab.id ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                  >
                    <tab.icon className="w-4 h-4" /> {tab.label}
                  </button>
                  {index === 1 && activeTab === 'overview' && (
                    <>
                      <div className="absolute inset-0 ring-2 ring-indigo-500 ring-offset-1 animate-pulse pointer-events-none"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce pointer-events-none whitespace-nowrap z-20">
                        Click tabs to explore
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-4">
              {activeTab === 'overview' && (
                <>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-400 tracking-wider">PRIMARY CONCLUSION</div>
                    <div className="relative">
                      <div 
                        className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-indigo-900 font-medium flex gap-3 cursor-pointer hover:bg-indigo-100 transition-colors relative z-10"
                        onClick={() => handleHighlight("VTE is a clinically relevant and relatively frequent complication in patients with breast cancer, particularly during the early period of anticancer treatment.")}
                      >
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <p>VTE is a clinically relevant and relatively frequent complication in patients with breast cancer, particularly during the early period of anticancer treatment.</p>
                      </div>
                      <div className="absolute inset-0 rounded-xl ring-2 ring-indigo-500 ring-offset-2 animate-pulse pointer-events-none"></div>
                      <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce pointer-events-none whitespace-nowrap z-20">
                        Click to highlight source
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4 shadow-sm">
                      <div className="text-xs font-bold text-gray-400 tracking-wider border-b border-gray-100 pb-2">STUDY IDENTITY</div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                          <span className="text-sm text-gray-500">PMID</span>
                          <span className="text-sm font-medium text-gray-900">41682841</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                          <span className="text-sm text-gray-500">Journal</span>
                          <span className="text-sm font-medium text-gray-900">J Clin Med</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Year</span>
                          <span className="text-sm font-medium text-gray-900">2026</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4 shadow-sm">
                      <div className="text-xs font-bold text-gray-400 tracking-wider border-b border-gray-100 pb-2">STUDY DESIGN</div>
                      <div className="space-y-3">
                        <div 
                          className="flex justify-between items-center border-b border-gray-50 pb-2 cursor-pointer hover:bg-gray-50 p-1 rounded -mx-1 px-1"
                          onClick={() => handleHighlight("retrospective, single-center study")}
                        >
                          <span className="text-sm text-gray-500">Type</span>
                          <span className="text-sm font-medium text-gray-900">Retrospective</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-50 pb-2 cursor-pointer hover:bg-gray-50 p-1 rounded -mx-1 px-1"
                          onClick={() => handleHighlight("single-center study")}
                        >
                          <span className="text-sm text-gray-500">Design</span>
                          <span className="text-sm font-medium text-gray-900">Single-center</span>
                        </div>
                        <div className="flex justify-between items-center p-1 -mx-1 px-1">
                          <span className="text-sm text-gray-500">Phase</span>
                          <span className="text-sm font-medium text-gray-900">N/A</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {activeTab === 'population' && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                      <tr>
                        <th className="px-6 py-3 font-medium">Characteristic</th>
                        <th className="px-6 py-3 font-medium">Value</th>
                        <th className="px-6 py-3 font-medium text-center">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("842 female patients")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Total N</td>
                        <td className="px-6 py-4 text-gray-600">842</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("age ≥ 55 years")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Age Risk Factor</td>
                        <td className="px-6 py-4 text-gray-600">≥ 55 years</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("female patients diagnosed with early or metastatic breast cancer")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Condition</td>
                        <td className="px-6 py-4 text-gray-600">Early or metastatic breast cancer</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("hypertension, dyslipidemia, hyperglycemia, anemia, and leukocytosis")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Comorbidities</td>
                        <td className="px-6 py-4 text-gray-600">Hypertension, dyslipidemia, hyperglycemia, anemia, leukocytosis</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                      <tr>
                        <th className="px-6 py-3 font-medium">Methodology Element</th>
                        <th className="px-6 py-3 font-medium">Extracted Detail</th>
                        <th className="px-6 py-3 font-medium text-center">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("Multivariate analysis")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Statistical Analysis</td>
                        <td className="px-6 py-4 text-gray-600">Multivariate analysis used to identify independent predictors</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("incidence of symptomatic VTE during the first 12 months")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Primary Endpoint</td>
                        <td className="px-6 py-4 text-gray-600">Incidence of symptomatic VTE within 12 months post-diagnosis</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("between January 2020 and December 2025")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Study Period</td>
                        <td className="px-6 py-4 text-gray-600">January 2020 to December 2025</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("Deep vein thrombosis of the lower and upper extremities was the most common manifestation (52%), while pulmonary embolism was present in 24% of cases.")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Measurement Methods</td>
                        <td className="px-6 py-4 text-gray-600">Tracking of DVT (lower/upper extremities) and pulmonary embolism</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'heor' && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                      <tr>
                        <th className="px-6 py-3 font-medium">HEOR Metric</th>
                        <th className="px-6 py-3 font-medium">Finding</th>
                        <th className="px-6 py-3 font-medium text-center">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("overall survival at 12 months was significantly lower in patients who developed VTE")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Overall Survival (OS)</td>
                        <td className="px-6 py-4 text-gray-600">Significantly lower at 12 months for patients with VTE</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("frequent complication in patients with breast cancer, particularly during the early period of anticancer treatment")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Healthcare Utilization</td>
                        <td className="px-6 py-4 text-gray-600">High frequency of complications during early anticancer treatment phase</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("poor performance status (ECOG ≥ 3)")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Quality of Life (QoL)</td>
                        <td className="px-6 py-4 text-gray-600">Poor performance status (ECOG ≥ 3) strongly correlated with VTE risk</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">High</span></td>
                      </tr>
                      <tr 
                        className="hover:bg-indigo-50 transition-colors cursor-pointer"
                        onClick={() => handleHighlight("Personalized risk assessment and management strategies are crucial.")}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">Cost Effectiveness</td>
                        <td className="px-6 py-4 text-gray-600">Implies need for targeted prophylaxis to optimize resource allocation</td>
                        <td className="px-6 py-4 text-center"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">Low</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              
              {activeTab === 'safety' && (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 shadow-sm">
                  <Shield className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                  <p>Safety data extraction is available for RCTs and specific observational studies.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end gap-3 shrink-0 bg-white">
          <div className="relative">
            <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative z-10">Close</button>
            <div className="absolute inset-0 rounded-lg ring-2 ring-indigo-500 ring-offset-2 animate-pulse pointer-events-none"></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce pointer-events-none whitespace-nowrap z-20">
              Close details
            </div>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
            Open in PubMed <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
