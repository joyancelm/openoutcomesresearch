import React from 'react';

export const RequestDemoSection: React.FC = () => {
+  const handleLaunchApp = () => {
+    window.open('https://app.openoutcomesresearch.com', '_blank');
+  };

  return (
    <section id="request-demo" className="py-24 bg-white border border-black/10 rounded-2xl text-center px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="text-black/60 text-lg font-light">
          Your free beta access is ready. Get started with 100 free extraction credits and streamline your literature review today.
        </p>

        <button
          type="button"
          onClick={handleLaunchApp}
          className="w-full bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-black/80 transition-all active:scale-95"
        >
          Launch the App
        </button>
      </div>
    </section>
  );
};
