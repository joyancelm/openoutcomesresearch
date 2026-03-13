import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { AboutUs } from './pages/AboutUs';
import { AdminSubmissions } from './pages/AdminSubmissions';
import { DemoModalProvider } from './DemoModalContext';

const App: React.FC = () => {
  return (
    <DemoModalProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-black selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/admin" element={<AdminSubmissions />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DemoModalProvider>
  );
};

export default App;