
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="mb-12 space-y-4">
        <h1 className="text-5xl font-black tracking-tighter text-white">Privacy Policy</h1>
        <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Effective Date: October 24, 2024</p>
      </header>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-xl font-black text-primary uppercase tracking-widest">1. Data Collection</h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            We collect information you provide directly to us when you create an account, purchase tickets, or communicate with support. This includes your name, email address, payment information, and any identification documents required for KYC verification.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-primary uppercase tracking-widest">2. How We Use Your Information</h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            Your data is used to process transactions, notify you of winnings, and ensure compliance with regional lottery regulations. We also use aggregated, non-identifiable data to improve our AI Luck Assistant algorithms.
          </p>
        </section>

        <section className="bg-card-dark rounded-3xl border border-white/5 p-8 space-y-6 shadow-2xl">
          <div className="flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-primary">security</span>
            <h3 className="text-lg font-black uppercase tracking-widest">Quantum-Safe Encryption</h3>
          </div>
          <p className="text-gray-500 text-sm font-bold leading-relaxed">
            All sensitive data, including transaction hashes and identity documents, are stored using end-to-end encryption. Our servers use quantum-resistant security protocols to ensure your information remains private even against future computing threats.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-primary uppercase tracking-widest">3. Your Rights</h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            You have the right to access, correct, or delete your personal information at any time via your Profile Settings. For complete account deletion and data scrubbing, please contact our Compliance Officer through the Help Center.
          </p>
        </section>
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-4 text-center">
        <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em]">Official Privacy Repository</span>
        <button className="text-xs font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors">Download Privacy Statement (PDF)</button>
      </div>
    </div>
  );
};

export default Privacy;
