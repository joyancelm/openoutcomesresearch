import React from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl font-semibold text-black">Ready to Get Started?</h2>
            <p className="text-black/60">
              Your free beta access is waiting. Launch the app and start turning medical research into structured evidence.
            </p>
            
            <div className="space-y-3 pt-4">
              <a 
                href="https://app.openoutcomesresearch.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-black/80 transition-colors text-center"
              >
                Go to App
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
