import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const RequestDemoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    setLoading(true);
    setError('');

    try {
      const scriptUrl = (import.meta as ImportMeta & { env?: Record<string, string> }).env?.VITE_GOOGLE_SHEETS_URL;

      if (scriptUrl) {
        const response = await fetch(scriptUrl, {
          method: 'POST',
          body: JSON.stringify({ type: 'demo', ...formData }),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
        });

        const data = await response.json();
        if (data.success) {
          setSuccess(true);
        } else {
          setError(data.error || 'Something went wrong');
        }
      } else {
        const response = await fetch('/api/demo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess(true);
        } else {
          setError(data.error || 'Something went wrong');
        }
      }
    } catch {
      setError('Failed to submit. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="request-demo" className="py-24 bg-white border border-black/10 rounded-2xl text-center px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
          Request a Demo
        </h2>
        <p className="text-black/60 text-lg font-light">
          Tell us about your team and we will follow up to schedule a live walkthrough.
        </p>

        {success ? (
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl inline-block">
            <div className="flex flex-col items-center gap-2 text-emerald-800">
              <CheckCircle2 size={24} className="text-emerald-600" />
              <h3 className="font-medium">Demo Request Received</h3>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto text-left">
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-200">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-black/80 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                className="w-full border border-black/15 text-black placeholder:text-black/40 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black/80 mb-1">Work Email</label>
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                className="w-full border border-black/15 text-black placeholder:text-black/40 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black/80 mb-1">Company / Institution</label>
              <input
                type="text"
                name="company"
                placeholder="Acme Pharma"
                className="w-full border border-black/15 text-black placeholder:text-black/40 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition-colors"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-black/80 transition-all disabled:opacity-50 active:scale-95 mt-2"
            >
              {loading ? 'Submitting...' : 'Request Demo'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
