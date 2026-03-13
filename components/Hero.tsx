import React, { useState, useEffect } from 'react';
import { Database, Activity, Search, FileText, CheckCircle2, ChevronRight, Cpu, BarChart3, Users, ShieldAlert, TrendingUp } from 'lucide-react';
import { useDemoModal } from '../DemoModalContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero: React.FC = () => {
  const { openDemoModal, openWaitlistModal } = useDemoModal();
  const [step, setStep] = useState(0);

  // Loop through 3 steps: Search -> Results -> Analytics
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 5000); // 5 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 max-w-7xl mx-auto pt-12 md:pt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            The AI Research Platform for Health Economics and Outcomes Research (HEOR)
          </h1>
          <p className="text-xl text-black/70 leading-relaxed max-w-lg">
            Turn research literature into structured evidence your team can use. OpenOutcomesResearch helps HEOR and evidence-focused teams extract key study details, organize findings, and identify research gaps with AI-powered data analytics and evidence synthesis.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button type="button" onClick={openDemoModal} className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors">
                Request a Demo
              </button>
              <button type="button" onClick={openWaitlistModal} className="bg-white text-black border border-black/20 px-6 py-3 rounded-full font-medium hover:bg-black/5 transition-colors text-center">
                Join the Waitlist
              </button>
            </div>
            <p className="text-sm text-black/50">
              Used for HEOR, literature review, evidence synthesis, and data analytics.
            </p>
          </div>
        </div>
        
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
              app.openoutcomes.com
            </div>
            <div className="w-12"></div>
          </div>

          {/* Sequence Container */}
          <div className="flex-1 relative overflow-hidden p-4 md:p-6">
            <AnimatePresence mode="wait">
              
              {/* STEP 0: SEARCH */}
              {step === 0 && (
                <motion.div 
                  key="search"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col gap-4"
                >
                  <div className="text-center space-y-2 pt-4">
                    <h3 className="text-lg font-bold text-gray-900">What are you researching?</h3>
                    <div className="relative max-w-md mx-auto">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <div className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 shadow-sm bg-white text-left overflow-hidden flex items-center h-12">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, ease: "linear" }}
                          className="text-xs text-gray-700 font-medium whitespace-nowrap overflow-hidden border-r-2 border-indigo-500 pr-1"
                        >
                          anticoagulant use for CAT in patients
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
                      <div className="text-[10px] font-semibold text-gray-500 tracking-wider">LIVE BOOLEAN PREVIEW</div>
                      <span className="text-[8px] font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full">OPTIMIZED</span>
                    </div>
                    <pre className="flex-1 text-[9px] text-gray-600 font-mono bg-gray-50 p-3 rounded-lg overflow-hidden border border-gray-100">
{`("Cancer"[MeSH] OR "Neoplasms"[MeSH] OR "cancer"[tiab])
AND
("Thrombosis"[MeSH] OR "CAT"[tiab] OR "thrombosis"[tiab])
AND
("Anticoagulants"[MeSH] OR "DOACs"[tiab])`}
                    </pre>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, duration: 0.3 }}
                    className="bg-black text-white rounded-lg py-3 flex items-center justify-center gap-2 text-xs font-medium shadow-md"
                  >
                    <Search className="w-3 h-3" /> Screen 230 Articles
                  </motion.div>
                </motion.div>
              )}

              {/* STEP 1: RESULTS & EXTRACTION */}
              {step === 1 && (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-indigo-600" />
                      <span className="text-xs font-bold text-gray-800">Extracting Evidence...</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">230 / 230</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 relative">
                    {/* Scanning Line */}
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent border-b border-indigo-500/30 z-10 pointer-events-none rounded-lg"
                    />

                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center shrink-0">
                          <FileText className="w-3 h-3 text-indigo-600" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <div className="h-2.5 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-100 rounded w-full"></div>
                          <div className="flex gap-2 pt-1">
                            <div className="h-3 w-12 bg-green-100 rounded"></div>
                            <div className="h-3 w-16 bg-blue-100 rounded"></div>
                          </div>
                        </div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: (i * 0.2) + 0.5 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: ANALYTICS DASHBOARD */}
              {step === 2 && (
                <motion.div 
                  key="analytics"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">Research Analytics</h2>
                      <p className="text-[9px] text-gray-500">230 studies analyzed</p>
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
    </section>
  );
};