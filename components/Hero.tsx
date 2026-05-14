import React, { useState, useEffect } from 'react';
import { Database, Activity, Search, FileText, CheckCircle2, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  // Loop through 3 steps: Search -> Results -> Analytics
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev: number) => (prev + 1) % 3);
    }, 5000); // 5 seconds per step
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="platform" className="px-6 max-w-7xl mx-auto pt-12 md:pt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/50">
            AI infrastructure for literature review and data analytics
          </p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Turn scientific evidence into usable data insights.
          </h1>
          <p className="text-xl text-black/70 leading-relaxed max-w-lg">
            We help teams search, extract, and analyze literature without relying on manual spreadsheets.
          </p>
          <div className="space-y-4">
            <button type="button" onClick={() => scrollToSection('demo')} className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors inline-block text-center">
              Try the Demo
            </button>

          </div>
        </div>

        <div className="space-y-4">
          {/* Hero-side visual: Animated Demo Sequence */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] max-w-2xl mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-900/10 bg-[#f8f9fa] flex flex-col">
          
          {/* Mock Browser Header */}
          <div className="h-10 md:h-12 border-b border-black/10 flex items-center px-4 justify-between bg-white shrink-0 z-20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 mx-4 bg-gray-100 rounded-md h-6 flex items-center justify-center text-[10px] text-gray-500 font-mono">
              app.openoutcomesresearch.com
            </div>
            <div className="w-12"></div>
          </div>

          {/* Sequence Container */}
          <div className="flex-1 relative overflow-hidden p-4 md:p-6">
            <AnimatePresence mode="wait">
              
              {/* STEP 0: RESEARCH QUESTION */}
              {step === 0 && (
                <motion.div 
                  key="research-question"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col gap-4"
                >
                  <div className="text-center space-y-2 pt-4">
                    <div className="text-[10px] font-semibold tracking-[0.24em] uppercase text-gray-500">Research question</div>
                    <h3 className="text-lg font-bold text-gray-900">What does the evidence show?</h3>
                    <div className="relative max-w-md mx-auto">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <div className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 shadow-sm bg-white text-left overflow-hidden flex items-center h-12">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, ease: "linear" }}
                          className="text-xs text-gray-700 font-medium whitespace-nowrap overflow-hidden border-r-2 border-indigo-500 pr-1"
                        >
                          scientific literature review and data analytics
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex-1 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[10px] font-semibold text-gray-500 tracking-wider">Evidence sources</div>
                      <span className="text-[8px] font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full">OPTIMIZED</span>
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg overflow-hidden border border-gray-100 flex flex-col justify-center text-sm text-gray-700 space-y-3">
                      <p className="font-semibold text-gray-900">Scientific literature</p>
                      <p>Clinical trials, public databases, real world evidence, and internal files.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, duration: 0.3 }}
                    className="bg-black text-white rounded-lg py-3 flex items-center justify-center gap-2 text-xs font-medium shadow-md"
                  >
                    <Search className="w-3 h-3" /> Find relevant evidence
                  </motion.div>
                </motion.div>
              )}

              {/* STEP 1: AI EXTRACTION */}
              {step === 1 && (
                <motion.div 
                  key="ai-extraction"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-indigo-600" />
                      <span className="text-xs font-bold text-gray-800">AI extraction</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">Study details, outcomes, comparators, safety findings, economic data</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-3 relative">
                    {/* Scanning Line */}
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent border-b border-indigo-500/30 z-10 pointer-events-none rounded-lg"
                    />

                    {[
                      'Study details',
                      'Outcomes',
                      'Comparators',
                      'Safety findings',
                      'Economic data',
                    ].map((label, i) => (
                      <motion.div 
                        key={label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center shrink-0">
                          <FileText className="w-3 h-3 text-indigo-600" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <div className="text-sm font-semibold text-gray-900">{label}</div>
                          <div className="text-xs text-gray-500">Pulled from source text and structured for review.</div>
                        </div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: (i * 0.15) + 0.4 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: STRUCTURED DATASET + ANALYTICS */}
              {step === 2 && (
                <motion.div 
                  key="structured-dataset"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col gap-3"
                >
                  <div className="text-[10px] font-semibold tracking-[0.24em] uppercase text-gray-500">Structured dataset</div>
                  <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-900">Turn scattered evidence into clean, usable data.</p>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">Analytics dashboard</h2>
                      <p className="text-[9px] text-gray-500">Find trends, gaps, comparisons, and insights.</p>
                    </div>
                  </div>

                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                      <div className="text-gray-500 text-[8px] font-semibold uppercase tracking-wider mb-0.5">Total Patients</div>
                      <div className="text-sm font-bold text-gray-900">124,500</div>
                    </motion.div>
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                      <div className="text-gray-500 text-[8px] font-semibold uppercase tracking-wider mb-0.5">High Quality</div>
                      <div className="text-sm font-bold text-gray-900">165</div>
                    </motion.div>
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                      <div className="text-gray-500 text-[8px] font-semibold uppercase tracking-wider mb-0.5">Avg Follow-up</div>
                      <div className="text-sm font-bold text-gray-900">18.5m</div>
                    </motion.div>
                  </div>

                  {/* Charts Area */}
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {/* Bar Chart Mockup */}
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex flex-col">
                      <h3 className="text-[9px] font-bold text-gray-800 mb-2 flex items-center gap-1">
                        <Activity className="w-3 h-3 text-red-500" /> Adverse Events
                      </h3>
                      <div className="flex-1 flex flex-col justify-end gap-1.5">
                        <div className="flex items-center gap-2 text-[8px]"><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ delay: 0.8, duration: 1 }} className="bg-red-400 h-full"></motion.div></div><span className="w-4">82</span></div>
                        <div className="flex items-center gap-2 text-[8px]"><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '45%' }} transition={{ delay: 0.9, duration: 1 }} className="bg-red-400 h-full"></motion.div></div><span className="w-4">45</span></div>
                        <div className="flex items-center gap-2 text-[8px]"><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '34%' }} transition={{ delay: 1.0, duration: 1 }} className="bg-red-400 h-full"></motion.div></div><span className="w-4">34</span></div>
                        <div className="flex items-center gap-2 text-[8px]"><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '28%' }} transition={{ delay: 1.1, duration: 1 }} className="bg-red-400 h-full"></motion.div></div><span className="w-4">28</span></div>
                      </div>
                    </motion.div>

                    {/* PICO Summary Mockup */}
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex flex-col">
                      <h3 className="text-[9px] font-bold text-gray-800 mb-2 flex items-center gap-1">
                        <Database className="w-3 h-3 text-indigo-500" /> PICO Summary
                      </h3>
                      <div className="space-y-2 flex-1 flex flex-col justify-center">
                        <div className="bg-blue-50 p-1.5 rounded border border-blue-100">
                          <div className="text-[7px] font-bold text-blue-600">P: Cancer-Associated Thrombosis</div>
                        </div>
                        <div className="bg-emerald-50 p-1.5 rounded border border-emerald-100">
                          <div className="text-[7px] font-bold text-emerald-600">I: DOACs (n=124)</div>
                        </div>
                        <div className="bg-amber-50 p-1.5 rounded border border-amber-100">
                          <div className="text-[7px] font-bold text-amber-600">C: LMWH (n=88)</div>
                        </div>
                        <div className="bg-purple-50 p-1.5 rounded border border-purple-100">
                          <div className="text-[7px] font-bold text-purple-600">O: Recurrent VTE, Bleeding</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};