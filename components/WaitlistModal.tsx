import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [searchesPerMonth, setSearchesPerMonth] = useState('');
  const [resultsPerMonth, setResultsPerMonth] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');

    const payload = {
      type: 'waitlist',
      targetSheet: 'Waitlist',
      email,
      searchesPerMonth,
      resultsPerMonth
    };

    try {
      const scriptUrl = (import.meta as ImportMeta & { env?: Record<string, string> }).env?.VITE_GOOGLE_SHEETS_URL;

      if (scriptUrl) {
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
          setError(data.error || 'Something went wrong');
        }
      } else {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black/50 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {success ? (
            <div className="text-center space-y-4 py-8">
              <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-black">Request Received</h3>
              <p className="text-black/60">
                Thank you. We have received your waitlist questionnaire.
              </p>
              <button
                onClick={onClose}
                className="mt-6 w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-black/80 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-black mb-2">Join the Waitlist</h2>
              <p className="text-black/60 mb-6">
                Fill this short questionnaire and we will prioritize your team for pilot access.
              </p>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="work@organization.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">Avg. searches per month</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={searchesPerMonth}
                    onChange={(e) => setSearchesPerMonth(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="e.g. 50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-1">Avg. article results per month</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={resultsPerMonth}
                    onChange={(e) => setResultsPerMonth(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="e.g. 1000"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-black/80 transition-colors disabled:opacity-70 mt-4"
                >
                  {loading ? 'Processing...' : 'Join Waitlist'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
