
import React from 'react';

const Promotions: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Page Heading */}
      <header className="space-y-3">
        <h1 className="text-5xl font-black tracking-tighter text-white">My Promotions</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Boost your winning chances with exclusive offers. Track your progress and unlock cosmic rewards.
        </p>
      </header>

      {/* Featured Promo Hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-card-dark border border-green-900/30 shadow-2xl group min-h-[340px] flex items-center">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-[2000ms]"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
        
        <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row justify-between items-center w-full gap-10">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/30">
              <span className="material-symbols-outlined text-sm font-black animate-pulse">star</span>
              Feature of the Month
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">Mega Jackpot Madness</h2>
            <p className="text-gray-300 text-lg font-medium leading-relaxed">Get 50 free cosmic spins instantly when you play any jackpot game today! Limited time alignment.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-primary text-black font-black rounded-2xl hover:bg-green-400 transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                Claim Offer Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 py-5 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md">
                View Terms
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] min-w-[180px] shadow-2xl">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Offer Ends In</span>
            <div className="text-4xl font-mono font-black text-white tracking-widest">04:23:11</div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="size-1 rounded-full bg-primary/50"></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Active Bonus Tracker */}
      <section className="space-y-6">
        <h3 className="text-xl font-black text-white flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">bolt</span>
          Active Bonus Progress
        </h3>
        <div className="bg-card-dark rounded-3xl border border-white/5 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[120px] text-primary">savings</span>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
            <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="material-symbols-outlined text-4xl">currency_exchange</span>
            </div>
            <div className="flex-1 space-y-6 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="text-2xl font-black text-white tracking-tight">Welcome Deposit Match</h4>
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-1">100% Match up to $500 • <span className="text-primary">Status: Pulsing</span></p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary font-mono tracking-tighter">45%</span>
                  <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Completed</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-full bg-background-dark h-3 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-primary w-[45%] rounded-full shadow-[0_0_15px_rgba(19,236,19,0.4)] transition-all duration-1000"></div>
                </div>
                <p className="text-xs font-bold text-gray-500">Wager <span className="text-white font-black">$275.00</span> more to fully manifest your bonus vault.</p>
              </div>
              <div className="flex gap-4 pt-2">
                <button className="px-6 py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-all shadow-xl">Deposit & Play</button>
                <button className="px-6 py-3 bg-white/5 border border-white/10 text-gray-500 font-black text-xs uppercase tracking-widest rounded-xl hover:text-red-400 hover:border-red-400/30 transition-all">Cancel Bonus</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Filter & Grid */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/5 pb-8">
          <h3 className="text-2xl font-black text-white tracking-tight">Available Cosmic Offers</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'Lottery', 'Casino', 'VIP Rewards'].map((f, i) => (
              <button 
                key={f}
                className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  i === 0 ? 'bg-primary text-black border-primary shadow-xl shadow-primary/10' : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:border-white/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Weekly Reload', desc: 'Get 10 Free Tickets when you deposit $20 or more this Friday.', icon: 'sync', tag: 'Lottery', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9SO_VxQf8Qx6-hvO7LD1wnftQbeXv3_OGthgI1K1idW26EOI6Y-iSoLFMYr6yjOuPvZ9TfLsOtJJDeTqOgmSJxu8HGyp51oPFfNn8tEtuxiQbgTrTcVgTCgWt6JactYKFlq7xe0rFaMx07Y00s0kwFjUeDDlMjle4O11cSGa2AM5er1N_YEZP9vFc9y2_H7TfwXPhwag2mgI8SbpNZDsHS_QPz_rC5CrHS6WuQn4xSEJf1MMeCikoJCUL0N-wpBo7NJmefyGJpkSD' },
            { title: 'Invite a Friend', desc: 'Earn $20 for every friend who signs up and makes a cosmic deposit.', icon: 'group_add', tag: 'Referral', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3uDaY_eiIYK6mUqzkA2xEFNsBZZS4iP9ZvZCD1oFhkfkYZe2jmzNcE7A8zhVaiPW0u7x5BfqLwZ6jRZuf3oDUCJBonjC98BXvBuoi6wvTWvLfzumeSnFKDqDTh810dxecGSSyDLm0u9Iw8TryFFD83nfOdtkooicqtFdGZK8ZE-3CC5IJkAWW__kDQ-GasuIaiheDufLAdcjOmMEvSFrRqsYHDUoOi6IjKv7_3uJ4UFCW0WCGGJLhGjoHUesCknYDK9tbnS_dj03' },
            { title: 'Monthly Cashback', desc: 'Get up to 10% back on your net losses every cosmic cycle.', icon: 'currency_exchange', tag: 'VIP Exclusive', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbbxxUbw8JWCiTmNXCjWV5gGPt1-prbtZinF-OqcfTL_aaMwd2O_XLs4g3DUxxXDa5gARQCAnNaQIsOAm3EkbQZV6S5StK9l8ym0oIrJPjqJ5MnClJv1Ow8KEU96kpqo0jhkEf2eBqAXoKAEl_scPf1Ag6-kPw5cNzoCZgfbYELg-vML2sN9oIbgeX3-od_GNFeuRASbXTQffOO3WHvll5FAY8Fltsi6MCj8glNIWlj6Hj7rne4G8GeDplzbi3kFlpEAcMB20lH-Z3' }
          ].map((promo, i) => (
            <div key={i} className="group bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden hover:border-primary/30 transition-all flex flex-col h-full">
              <div className="h-48 w-full relative overflow-hidden">
                <img src={promo.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={promo.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-black text-white rounded-lg uppercase tracking-widest border border-white/10">
                    {promo.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-black text-white tracking-tight group-hover:text-primary transition-colors">{promo.title}</h4>
                  <span className="material-symbols-outlined text-gray-700 group-hover:text-primary transition-colors">{promo.icon}</span>
                </div>
                <p className="text-gray-500 font-bold text-sm leading-relaxed flex-1">{promo.desc}</p>
                <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                  <button className="text-[10px] font-black text-gray-600 uppercase tracking-widest hover:text-white transition-colors">Details</button>
                  <button className="px-6 py-2.5 bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-primary hover:text-black transition-all">
                    Claim Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Locked VIP Card */}
          <div className="bg-background-dark/50 border-2 border-dashed border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6 group hover:border-primary/20 transition-all">
             <div className="size-16 rounded-full bg-white/5 flex items-center justify-center text-gray-700 group-hover:text-primary transition-colors">
               <span className="material-symbols-outlined text-4xl">lock</span>
             </div>
             <div className="space-y-1">
               <h4 className="text-lg font-black text-gray-600 uppercase tracking-widest">High Roller Bonus</h4>
               <p className="text-xs text-gray-700 font-bold">Reach Level 15 to unlock this exclusive $1,000 cosmic bonus.</p>
             </div>
             <button className="text-[10px] font-black text-primary uppercase tracking-[0.3em] hover:underline">View Levels Hub</button>
          </div>
        </div>
      </section>

      {/* Footer Legal */}
      <footer className="pt-10 pb-20 border-t border-white/5 text-center space-y-4">
        <p className="text-xs text-gray-500 font-bold">
          All promotions are subject to our <a href="#" className="text-primary hover:underline">General Bonus Policy</a> and <a href="#" className="text-primary hover:underline">Cosmic Terms</a>.
        </p>
        <div className="flex justify-center items-center gap-3 text-gray-700">
          <span className="material-symbols-outlined text-sm">verified</span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Licensed & Regulated Portal • 18+</span>
        </div>
      </footer>
    </div>
  );
};

export default Promotions;
