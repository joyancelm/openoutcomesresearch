import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [searchesPerMonth, setSearchesPerMonth] = useState('');
  const [resultsPerMonth, setResultsPerMonth] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
      const payload = { 
        type: 'waitlist', 
        email, 
        searchesPerMonth, 
        resultsPerMonth 
      };

      if (scriptUrl) {
        // Send to Google Sheets via Apps Script
        const response = await fetch(scriptUrl, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
        });
        
        const data = await response.json();
        if (data.success) {
          setSuccess(true);
        } else {
          alert(data.error || 'Something went wrong');
        }
      } else {
        // Fallback to local API
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setSuccess(true);
        } else {
          alert(data.error || 'Something went wrong');
        }
      }
    } catch {
      alert('Failed to submit. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-black rounded-2xl text-center px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Get priority access to faster literature reviews
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Built for academic clinical researchers and CRO/pharma evidence teams.
        </p>

        {success ? (
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl animate-fade-in-up inline-block">
            <div className="flex flex-col items-center gap-2 text-white">
              <CheckCircle2 size={24} className="text-blue-500" />
              <h3 className="font-medium">Request Received</h3>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto text-left">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Work Email</label>
              <input
                type="email"
                placeholder="work@organization.com"
                className="w-full bg-gray-900 border border-gray-800 text-white placeholder:text-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Avg. searches per month</label>
              <input
                type="number"
                min="0"
                placeholder="e.g. 50"
                className="w-full bg-gray-900 border border-gray-800 text-white placeholder:text-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                value={searchesPerMonth}
                onChange={(e) => setSearchesPerMonth(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Avg. article results per month</label>
              <input
                type="number"
                min="0"
                placeholder="e.g. 1000"
                className="w-full bg-gray-900 border border-gray-800 text-white placeholder:text-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                value={resultsPerMonth}
                onChange={(e) => setResultsPerMonth(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-all disabled:opacity-50 active:scale-95 shadow-sm hover:shadow-lg mt-2"
            >
              {loading ? "Processing..." : "Join Waitlist"}
            </button>
          </form>
        )}
        
        <div className="text-xs text-gray-600 mt-8">
          Configurable controls for regulated research workflows.
        </div>
      </div>
    </section>
  );
};