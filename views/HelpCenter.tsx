
import React from 'react';

const HelpCenter: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Hero Search Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#102210] p-10 md:p-20 text-center space-y-8 border border-green-900/30 shadow-2xl">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1UdrBknURk0wTYZjFviGt26_hWxxu1-UC_Qw1aNRuLG-SX0_6esYLjbt2vUv2Eutg-IU428f6l3EZDkHR_lyDbdL6GxcZzBDFDS_OwV2FgiTpjZkIxCRHKEOaLFROc3iI5xAcf6Vsisae-nNcCfvV2ZAYvp4xrp-h-Hd9Ya7OYgKZ4F41iX3vatbzhO_gdoqMv4cKdGYREx06Ofiwqjyz_zVyHvnYZml56jALBQM0iBAIAU7_BSWiUMnwA4qPB2XB2uIHXf5jZDhK')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#102210]/60 to-[#102210]"></div>
        
        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
            How can we help you <span className="text-primary">today?</span>
          </h1>
          <p className="text-gray-400 text-lg font-medium">
            Find answers to your questions about games, payments, and platform security.
          </p>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">search</span>
            <input 
              type="text" 
              placeholder="Search for answers (e.g., 'withdrawal limits')"
              className="w-full bg-white rounded-2xl py-6 pl-16 pr-32 text-black font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all shadow-2xl"
            />
            <button className="absolute right-3 top-3 bottom-3 bg-primary text-black px-8 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-green-400 transition-all">
              Search
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest self-center">Trending:</span>
            {['Verification', 'Jackpot Claims', 'Withdrawal Limits', 'App Download'].map(tag => (
              <button key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Sidebar: Categories */}
        <aside className="lg:col-span-3">
          <div className="sticky top-28 space-y-8">
            <nav className="p-2 rounded-3xl bg-card-dark border border-white/5 shadow-2xl space-y-1">
              <p className="px-5 py-3 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Help Categories</p>
              {[
                { label: 'All Topics', icon: 'grid_view', active: true },
                { label: 'Getting Started', icon: 'rocket_launch' },
                { label: 'Deposits', icon: 'account_balance_wallet' },
                { label: 'Game Rules', icon: 'gavel' },
                { label: 'Security', icon: 'verified_user' },
                { label: 'Technical', icon: 'build' },
              ].map((item, i) => (
                <button 
                  key={i} 
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group ${
                    item.active 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`material-symbols-outlined text-xl ${item.active ? 'text-primary' : 'text-gray-600 group-hover:text-primary'}`}>{item.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">security</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Verified Secure</span>
              </div>
              <p className="text-[10px] text-gray-500 font-bold leading-relaxed">
                Your data is protected by industry-standard quantum-safe encryption protocols.
              </p>
            </div>
          </div>
        </aside>

        {/* Content: FAQs & Tutorials */}
        <main className="lg:col-span-9 space-y-12">
          
          {/* Quick Links Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-black text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">bolt</span>
              Quick Help
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'How to play', icon: 'play_circle' },
                { label: 'Withdrawal limits', icon: 'payments' },
                { label: 'Ticket validation', icon: 'confirmation_number' },
                { label: 'Reset password', icon: 'lock_reset' },
              ].map(link => (
                <button key={link.label} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/40 transition-all group shadow-xl">
                  <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">{link.icon}</span>
                  <span className="text-xs font-black text-white uppercase tracking-widest">{link.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Popular Tutorials */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">school</span>
                Popular Tutorials
              </h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All Guides</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Account Creation', desc: 'Step-by-step guide to setting up and verifying your profile.', icon: 'account_circle' },
                { title: 'Buying Tickets', desc: 'How to select numbers and purchase tickets securely.', icon: 'local_activity' },
                { title: 'Claiming Prizes', desc: 'The process for claiming small and jackpot winnings.', icon: 'emoji_events' },
              ].map((card, i) => (
                <div key={i} className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-primary/20 transition-all cursor-pointer group">
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">{card.title}</h3>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordions */}
          <section className="space-y-6">
            <h2 className="text-xl font-black text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">quiz</span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: 'How long does it take to process a withdrawal?', a: 'Withdrawals are typically processed within 24 hours. Depending on your payment provider, funds may take 1-3 business days to appear. Major jackpots require additional verification.' },
                { q: 'Is my personal information safe?', a: 'Absolutely. We use quantum-ledger encryption to protect all your data. We are fully compliant with global data protection standards (GDPR) and undergo regular security audits.' },
                { q: 'Can I play from outside the country?', a: 'LottoSecure is available in licensed jurisdictions only. Our system uses advanced geolocation to ensure regulatory compliance.' },
                { q: 'What happens if I lose my ticket?', a: 'All tickets are digitally stored in your account vault. You can never lose a digital entry. We automatically notify you of any wins.' },
              ].map((faq, i) => (
                <details key={i} className="group bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-8 font-black text-white hover:bg-white/[0.02] transition-colors focus:outline-none">
                    <span className="text-sm uppercase tracking-widest">{faq.q}</span>
                    <span className="material-symbols-outlined text-gray-600 transition group-open:rotate-180 group-open:text-primary">expand_more</span>
                  </summary>
                  <div className="px-8 pb-8 text-sm leading-relaxed text-gray-400 font-bold">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Contact Support Banner */}
          <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-green-900 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 group shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 text-center md:text-left space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-black tracking-tighter">Still need help?</h3>
              <p className="text-black/70 text-lg font-bold max-w-md">Our support experts are available 24/7 to guide you through any cosmic alignment issues.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="flex-1 sm:flex-none h-16 px-10 rounded-2xl bg-black text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-2xl">
                <span className="material-symbols-outlined">chat</span>
                Live Chat
              </button>
              <button className="flex-1 sm:flex-none h-16 px-10 rounded-2xl bg-white/10 border border-black/10 text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black/5 transition-all">
                <span className="material-symbols-outlined">mail</span>
                Email Us
              </button>
            </div>
          </section>
        </main>
      </div>

      <div className="flex justify-center items-center gap-3 text-gray-700 py-10">
        <span className="material-symbols-outlined text-sm">support_agent</span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Official Help Center Portal • Node 402</span>
      </div>
    </div>
  );
};

export default HelpCenter;
