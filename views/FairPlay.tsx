
import React from 'react';

const FairPlay: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="mb-12 space-y-4">
        <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
          <span className="material-symbols-outlined text-3xl text-primary">verified</span>
        </div>
        <h1 className="text-5xl font-black tracking-tighter text-white">Fair Play Certification</h1>
        <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Decentralized & Verifiable Lottery Engine</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">hub</span>
          <h3 className="text-lg font-black text-white uppercase tracking-widest">On-Chain Draws</h3>
          <p className="text-gray-500 text-sm font-bold leading-relaxed">
            Every drawing outcome is determined by a decentralized smart contract. The result is immutable and can be audited by anyone with access to the blockchain explorer.
          </p>
        </div>
        <div className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">casino</span>
          <h3 className="text-lg font-black text-white uppercase tracking-widest">Quantum RNG</h3>
          <p className="text-gray-500 text-sm font-bold leading-relaxed">
            Our Random Number Generator (RNG) uses quantum entropy sources, ensuring true randomness that is mathematically impossible to predict or manipulate.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-xl font-black text-white flex items-center gap-3">
            <span className="size-2 bg-primary rounded-full shadow-[0_0_10px_rgba(19,236,19,1)]"></span>
            How to Verify
          </h2>
          <div className="bg-background-dark border border-white/5 rounded-2xl p-6 font-mono text-xs text-gray-500 space-y-4">
            <p>// Verification Logic Example</p>
            <p className="text-primary">SHA256(DrawID + PublicSeed + BlockHash) = Result</p>
            <p>You can input these values from any past draw into our public validator tool to confirm the legitimacy of the winning numbers.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-primary uppercase tracking-widest">Anti-Collusion Systems</h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            We employ real-time AI monitoring to detect and prevent automated bot activity, syndicate play, and any attempts to exploit the platform. Fair play is our foundation, and we maintain a zero-tolerance policy for fraudulent behavior.
          </p>
        </section>
      </div>

      <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 text-center space-y-6">
        <h3 className="text-2xl font-black text-white tracking-tight">Trust but Verify</h3>
        <p className="text-gray-400 font-bold max-w-lg mx-auto">
          We believe transparency is the future of gaming. Explore our technical whitepaper to see the math behind the luck.
        </p>
        <button className="px-8 py-4 bg-primary text-black font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:bg-green-400 transition-all">
          Explore Technical Docs
        </button>
      </div>
    </div>
  );
};

export default FairPlay;
