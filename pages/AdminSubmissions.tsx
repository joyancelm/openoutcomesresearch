import React, { useEffect, useState } from 'react';

interface WaitlistEntry {
  email: string;
  timestamp: string;
}

interface DemoRequestEntry {
  name: string;
  email: string;
  company: string;
  timestamp: string;
}

export const AdminSubmissions: React.FC = () => {
  const [data, setData] = useState<{ waitlist: WaitlistEntry[], demoRequests: DemoRequestEntry[] }>({ waitlist: [], demoRequests: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/submissions')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Admin submissions require a backend API and are unavailable on static GitHub Pages deployments.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-12 text-center">Loading submissions...</div>;
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-8 pt-32">
        <h1 className="text-3xl font-bold mb-4">Form Submissions</h1>
        <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-6">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 pt-32">
      <h1 className="text-3xl font-bold mb-8">Form Submissions</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            Waitlist <span className="bg-black text-white text-sm py-1 px-3 rounded-full">{data.waitlist?.length || 0}</span>
          </h2>
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm">
            {data.waitlist?.length === 0 ? (
              <div className="p-6 text-black/50 text-center">No waitlist submissions yet.</div>
            ) : (
              <ul className="divide-y divide-black/10">
                {data.waitlist?.map((item, i) => (
                  <li key={i} className="p-4 hover:bg-black/5 transition-colors">
                    <div className="font-medium">{item.email}</div>
                    <div className="text-xs text-black/50 mt-1">{new Date(item.timestamp).toLocaleString()}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            Demo Requests <span className="bg-black text-white text-sm py-1 px-3 rounded-full">{data.demoRequests?.length || 0}</span>
          </h2>
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm">
            {data.demoRequests?.length === 0 ? (
              <div className="p-6 text-black/50 text-center">No demo requests yet.</div>
            ) : (
              <ul className="divide-y divide-black/10">
                {data.demoRequests?.map((item, i) => (
                  <li key={i} className="p-4 hover:bg-black/5 transition-colors">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-black/70">{item.email} • {item.company}</div>
                    <div className="text-xs text-black/50 mt-1">{new Date(item.timestamp).toLocaleString()}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
