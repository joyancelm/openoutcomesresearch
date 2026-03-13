import React from 'react';
import { X, BarChart3, Users, Syringe, Scale, Activity, ShieldAlert, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';

export const AnalyticsView = ({ onClose }: { onClose: () => void }) => {
  const publicationData = [
    { year: '2021', RCT: 12, Observational: 18 },
    { year: '2022', RCT: 15, Observational: 22 },
    { year: '2023', RCT: 20, Observational: 28 },
    { year: '2024', RCT: 25, Observational: 30 },
    { year: '2025', RCT: 32, Observational: 35 },
    { year: '2026', RCT: 10, Observational: 12 },
  ];

  const demographicData = [
    { name: '18-35', value: 15 },
    { name: '36-50', value: 30 },
    { name: '51-65', value: 40 },
    { name: '65+', value: 15 },
  ];

  const biasData = [
    { name: 'Low Risk', value: 165 },
    { name: 'Moderate Risk', value: 45 },
    { name: 'High Risk', value: 20 },
  ];

  const adverseEventsData = [
    { event: 'Major Bleeding', count: 45 },
    { event: 'CRNM Bleeding', count: 82 },
    { event: 'GI Bleed', count: 28 },
    { event: 'Stroke', count: 12 },
    { event: 'VTE Recurrence', count: 34 },
  ];

  const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#f87171', '#c084fc'];
  const BIAS_COLORS = ['#34d399', '#fbbf24', '#f87171'];

  return (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-6xl h-full max-h-[800px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Comprehensive Research Analytics</h2>
              <p className="text-sm text-gray-500">230 studies analyzed</p>
            </div>
          </div>
          <div className="relative">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors relative z-10"><X className="w-5 h-5 text-gray-500" /></button>
            <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500 ring-offset-2 animate-pulse pointer-events-none"></div>
            <div className="absolute -top-8 right-0 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce pointer-events-none whitespace-nowrap z-20">
              Close analytics
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
          {/* Top Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Studies</div>
              <div className="text-2xl font-bold text-gray-900">230</div>
              <div className="text-xs text-green-600 flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3"/> +12% YoY</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Patients</div>
              <div className="text-2xl font-bold text-gray-900">124,500</div>
              <div className="text-xs text-gray-500 mt-1">Across all cohorts</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">High Quality</div>
              <div className="text-2xl font-bold text-gray-900">165</div>
              <div className="text-xs text-gray-500 mt-1">Low risk of bias</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Avg Follow-up</div>
              <div className="text-2xl font-bold text-gray-900">18.5</div>
              <div className="text-xs text-gray-500 mt-1">Months</div>
            </div>
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm lg:col-span-2">
              <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-indigo-500" /> Publication Trend
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={publicationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRCT" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorObs" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#34d399" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                    <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                    <Area type="monotone" dataKey="Observational" stroke="#34d399" fillOpacity={1} fill="url(#colorObs)" />
                    <Area type="monotone" dataKey="RCT" stroke="#818cf8" fillOpacity={1} fill="url(#colorRCT)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-500" /> Risk of Bias
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={biasData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {biasData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={BIAS_COLORS[index % BIAS_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                    <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-red-500" /> Adverse Events Frequency
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={adverseEventsData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f3f4f6" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                    <YAxis dataKey="event" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#4b5563' }} />
                    <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                    <Bar dataKey="count" fill="#f87171" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-500" /> Patient Demographics (Age)
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={demographicData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                    <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interventions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                <Syringe className="w-4 h-4" /> I: INTERVENTIONS
              </div>
              <div className="space-y-4">
                <div className="text-xs font-semibold text-gray-500 uppercase">Primary Focus</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-700 truncate pr-2">DOACs</span><span className="font-medium bg-gray-100 px-1.5 rounded">124</span></div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-emerald-500 h-1.5 rounded-full w-[54%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-700 truncate pr-2">LMWH</span><span className="font-medium bg-gray-100 px-1.5 rounded">88</span></div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-emerald-500 h-1.5 rounded-full w-[38%]"></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparisons */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-800">
                <Scale className="w-4 h-4" /> C: COMPARISONS
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-gray-700 truncate pr-2">Placebo</span><span className="font-medium bg-gray-100 px-1.5 rounded">65</span></div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-amber-500 h-1.5 rounded-full w-[28%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-gray-700 truncate pr-2">Standard of Care</span><span className="font-medium bg-gray-100 px-1.5 rounded">112</span></div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-amber-500 h-1.5 rounded-full w-[48%]"></div></div>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-red-800">
                <Activity className="w-4 h-4" /> O: OUTCOMES
              </div>
              <div className="space-y-4">
                <div className="text-xs font-semibold text-gray-500 uppercase">Outcome Categories</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-700">Safety (Bleeding)</span><span className="font-medium bg-gray-100 px-1.5 rounded">195</span></div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-red-500 h-1.5 rounded-full w-[85%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-700">Efficacy (Recurrence)</span><span className="font-medium bg-gray-100 px-1.5 rounded">180</span></div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-red-500 h-1.5 rounded-full w-[78%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-700">Survival</span><span className="font-medium bg-gray-100 px-1.5 rounded">125</span></div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-red-500 h-1.5 rounded-full w-[54%]"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
