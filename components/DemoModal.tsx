import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    
    setLoading(true);
    setError('');

    const payload = {
      type: 'demo',
      targetSheet: 'Demo Requests',
      ...formData,
    };
    
    try {
      const scriptUrl = (import.meta as ImportMeta & { env?: Record<string, string> }).env?.VITE_GOOGLE_SHEETS_URL;
      
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
          setError(data.error || 'Something went wrong');
        }
      } else {
        // Fallback to local API
        const response = await fetch('/api/demo', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                Thank you for your interest. Our team will be in touch shortly to schedule your demo.
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
              <h2 className="text-2xl font-semibold text-black mb-2">Request a Demo</h2>
              <p className="text-black/60 mb-6">
                See how OpenOutcomesResearch can automate literature review and reveal research trends and gaps.
              </p>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black/80 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/80 mb-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-black/80 mb-1">Company / Institution</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="Acme Pharma"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-black/80 transition-colors disabled:opacity-70 mt-4"
                >
                  {loading ? 'Submitting...' : 'Request Demo'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
