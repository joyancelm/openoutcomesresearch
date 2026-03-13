import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DemoModal } from './components/DemoModal';
import { WaitlistModal } from './components/WaitlistModal';

interface DemoModalContextType {
  openDemoModal: () => void;
  closeDemoModal: () => void;
  openWaitlistModal: () => void;
  closeWaitlistModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export const useDemoModal = () => {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return context;
};

export const DemoModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openDemoModal = () => {
    setIsWaitlistOpen(false);
    setIsDemoOpen(true);
  };
  const closeDemoModal = () => setIsDemoOpen(false);

  const openWaitlistModal = () => {
    setIsDemoOpen(false);
    setIsWaitlistOpen(true);
  };
  const closeWaitlistModal = () => setIsWaitlistOpen(false);

  return (
    <DemoModalContext.Provider value={{ openDemoModal, closeDemoModal, openWaitlistModal, closeWaitlistModal }}>
      {children}
      <DemoModal isOpen={isDemoOpen} onClose={closeDemoModal} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlistModal} />
    </DemoModalContext.Provider>
  );
};
