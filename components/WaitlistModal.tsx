import React from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-black">Start the Free Beta</h2>
            <p className="text-black/60">
              Join thousands of researchers turning medical literature into structured evidence. Get 100 free extraction credits to start.
            </p>
            
            <div className="space-y-3 pt-4">
              <a 
                href="https://app.openoutcomesresearch.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-black/80 transition-colors text-center"
              >
                Access Beta App
              </a>
              <button 
                onClick={onClose}
                className="w-full bg-gray-100 text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
