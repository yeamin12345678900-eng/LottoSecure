
import React from 'react';

const Terms: React.FC = () => {
  const sections = [
    { id: 'intro', label: '1. Introduction', icon: 'info' },
    { id: 'eligibility', label: '2. Eligibility', icon: 'person_check' },
    { id: 'accounts', label: '3. User Accounts', icon: 'account_circle' },
    { id: 'draws', label: '4. Draw Procedures', icon: 'casino' },
    { id: 'payouts', label: '5. Payouts & Claims', icon: 'payments' },
    { id: 'security', label: '6. Security & Fraud', icon: 'security' },
    { id: 'termination', label: '7. Termination', icon: 'block' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <header className="mb-12 space-y-4">
        <h1 className="text-5xl font-black tracking-tighter text-white">Terms of Service</h1>
        <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Last Updated: October 24, 2024 • Version 2.4.0</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3">
          <nav className="sticky top-28 space-y-2 p-2 rounded-3xl bg-card-dark border border-white/5 shadow-2xl">
            <p className="px-5 py-3 text-[10px] font-black text-gray-600 uppercase tracking-widest">Legal Navigation</p>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-500 hover:text-primary hover:bg-primary/5 transition-all group text-left"
              >
                <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">{s.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-widest">{s.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9 space-y-16">
          <section id="intro" className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">info</span>
              <h2 className="text-xl font-black uppercase tracking-widest">1. Introduction</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 font-bold leading-relaxed space-y-4">
              <p>Welcome to LottoSecure. These Terms of Service ("Terms") govern your access to and use of our platform, including our website, mobile application, and blockchain-verified draw systems.</p>
              <p>By creating an account or purchasing a ticket, you agree to be bound by these Terms. If you do not agree to these terms, you must not use our services.</p>
            </div>
          </section>

          <section id="eligibility" className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">person_check</span>
              <h2 className="text-xl font-black uppercase tracking-widest">2. Eligibility</h2>
            </div>
            <div className="bg-card-dark rounded-3xl border border-white/5 p-8 space-y-6">
              <p className="text-gray-400 font-bold leading-relaxed">To use our platform, you must meet the following criteria:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Minimum age of 18 (or legal age in your region)',
                  'Resident of a supported jurisdiction',
                  'Passing all KYC/AML verification checks',
                  'Ownership of a verified payment method'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 text-xs font-black text-white uppercase tracking-widest border border-white/5">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="accounts" className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">account_circle</span>
              <h2 className="text-xl font-black uppercase tracking-widest">3. User Accounts</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 font-bold leading-relaxed space-y-4">
              <p>Users are responsible for maintaining the confidentiality of their login credentials. Any activity originating from your account is deemed your responsibility.</p>
              <div className="p-6 bg-yellow-900/10 border border-yellow-900/20 rounded-2xl flex gap-4 items-start">
                <span className="material-symbols-outlined text-yellow-500">warning</span>
                <p className="text-xs text-yellow-500 uppercase font-black tracking-widest leading-loose">
                  Multiple accounts per individual are strictly prohibited and will result in permanent suspension and forfeiture of all balances.
                </p>
              </div>
            </div>
          </section>

          <section id="draws" className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">casino</span>
              <h2 className="text-xl font-black uppercase tracking-widest">4. Draw Procedures</h2>
            </div>
            <div className="bg-card-dark rounded-3xl border border-white/5 p-8 space-y-6">
              <p className="text-gray-400 font-bold leading-relaxed italic">
                "Our commitment to fairness is mathematically proven through quantum-resistant hashing."
              </p>
              <div className="space-y-4">
                <p className="text-white font-black text-sm">All drawings are generated using a decentralized RNG (Random Number Generator) verifiable on the blockchain. Once a draw is initiated, the outcome is final and cannot be altered by any administrator or external entity.</p>
                <button className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                  View Our Fairness Audit Protocol
                </button>
              </div>
            </div>
          </section>

          <section id="payouts" className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">payments</span>
              <h2 className="text-xl font-black uppercase tracking-widest">5. Payouts & Claims</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 font-bold leading-relaxed space-y-4">
              <p>Winnings are credited automatically to your account wallet after a draw is validated. For jackpots exceeding $10,000, additional manual identity verification is required by international law.</p>
              <p>Withdrawals are processed within 24-72 hours. We reserve the right to withhold payments if fraud is suspected or if the origin of funds is unverified.</p>
            </div>
          </section>

          <section id="security" className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">security</span>
              <h2 className="text-xl font-black uppercase tracking-widest">6. Security & Fraud</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-red-900/5 border border-red-900/20 space-y-4">
                <h4 className="text-red-500 font-black text-xs uppercase tracking-widest">Prohibited Activities</h4>
                <ul className="space-y-2 text-[10px] font-bold text-gray-600 list-disc pl-4">
                  <li>Use of automated bots or scripts</li>
                  <li>Collusion with other players</li>
                  <li>Exploiting system vulnerabilities</li>
                  <li>Providing false identity information</li>
                </ul>
              </div>
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 space-y-4">
                <h4 className="text-primary font-black text-xs uppercase tracking-widest">Our Protections</h4>
                <ul className="space-y-2 text-[10px] font-bold text-gray-600 list-disc pl-4">
                  <li>End-to-end SSL Encryption</li>
                  <li>2-Factor Authentication</li>
                  <li>Real-time Fraud Monitoring</li>
                  <li>Cold-storage Prize Vaults</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="pt-20 border-t border-white/5 text-center space-y-4">
            <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em]">Official Legal Repository • Node Verified</p>
            <div className="flex justify-center gap-8">
              <button className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white">Print Document</button>
              <button className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white">Download PDF</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Terms;
