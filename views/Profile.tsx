
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Profile Header Card */}
      <div className="bg-card-dark rounded-3xl border border-green-900/30 p-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <span className="material-symbols-outlined text-[120px] text-primary">person</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
          <div className="relative group/avatar">
            <div 
              className="size-32 md:size-40 rounded-3xl bg-cover bg-center border-4 border-background-dark shadow-2xl transition-all duration-500 group-hover/avatar:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFvFQwKmDiTGvO3oDqwf_sWwcI3IWjZxSky-En8kP4NKSIPM13on9D6_ixDu_OMP93tpveQbdlDf0gRJRZFsqjAj6sDdONkUShtQFRu8F9xJjf7ZYzav45Rhb5JLrZBMqQbF6BTnBHauzBhq6auYrBYx1T6UKx_g2VXPupURZY_k0KtyN1PXSJhynvyX9hIgTkRzE0gXB8gpEmgDgOvBIp_W-ty15JQJNtZJfXybAqaqjAqIjG-bIzcebD95r7lsX9Hsc_2NrYZBHc')" }} 
            />
            <button className="absolute -bottom-2 -right-2 p-3 bg-primary rounded-2xl text-black shadow-xl ring-4 ring-background-dark hover:bg-green-400 transition-all scale-90 group-hover/avatar:scale-100">
              <span className="material-symbols-outlined text-sm font-black">photo_camera</span>
            </button>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                <h1 className="text-4xl font-black text-white tracking-tighter">Alex Winner</h1>
                <span className="material-symbols-outlined text-blue-400" title="Verified Account">verified</span>
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Elite Member Since Oct 2023 • ID: #LS-88402</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-widest">Level 12 Player</span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10 text-[10px] font-black uppercase tracking-widest">3,450 XP to Next Level</span>
            </div>

            <div className="w-full max-w-sm h-2 bg-background-dark rounded-full overflow-hidden border border-white/5 mx-auto md:mx-0">
              <div className="h-full bg-primary w-[65%] rounded-full shadow-[0_0_10px_rgba(19,236,19,0.5)]"></div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all text-white">
              Public View
            </button>
            <button className="px-8 py-4 bg-primary text-black rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-green-400 transition-all">
              Manage Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Total Payouts', val: '$14,250.00', trend: '+15.4% this month', icon: 'emoji_events', color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Draws Entered', val: '124', trend: 'Last entry 2h ago', icon: 'local_activity', color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'Lucky Number', val: '07', trend: 'Appeared in 12% of wins', icon: 'auto_awesome', color: 'text-purple-400', bg: 'bg-purple-400/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Analytics</span>
            </div>
            <p className="text-3xl font-black text-white mb-2 tracking-tight">{stat.val}</p>
            <p className="text-xs font-bold text-gray-500">{stat.label}</p>
            <div className={`mt-6 text-[10px] font-black uppercase tracking-widest ${stat.color}`}>
              {stat.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Payment Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Winnings Chart */}
        <div className="lg:col-span-8 bg-card-dark rounded-3xl border border-white/5 shadow-2xl p-8 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">Winnings Momentum</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">6-Month performance audit</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-white hover:bg-white/10">ENTRY</button>
              <button className="px-4 py-2 bg-primary/20 rounded-xl text-[10px] font-black text-primary border border-primary/20">WINNINGS</button>
            </div>
          </div>
          
          <div className="flex-1 min-h-[300px] relative mt-4">
            <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#13ec13" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#13ec13" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,250 Q100,220 200,240 T400,180 T600,100 T800,40 V300 H0 Z" fill="url(#chartFill)" />
              <path d="M0,250 Q100,220 200,240 T400,180 T600,100 T800,40" fill="none" stroke="#13ec13" strokeWidth="4" strokeLinecap="round" />
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="300" stroke="white" strokeOpacity="0.03" strokeDasharray="5,5" />
              ))}
            </svg>
            <div className="flex justify-between mt-6 px-4">
              {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => (
                <span key={m} className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Linked Method Card */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl p-8 flex flex-col h-full overflow-hidden">
            <h3 className="text-lg font-black text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              Payment Vault
            </h3>

            {/* Glassmorphic Card Mockup */}
            <div className="relative w-full aspect-[1.6/1] bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 shadow-2xl border border-white/10 mb-8 overflow-hidden group/card">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 size-40 bg-primary/20 rounded-full blur-3xl transition-all duration-700 group-hover/card:bg-primary/40"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-white/40 text-3xl">contactless</span>
                  <span className="text-white italic font-black text-xl tracking-tighter">VISA</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-white text-xl font-mono tracking-[0.3em]">****</span>
                    <span className="text-white text-xl font-mono tracking-[0.3em]">****</span>
                    <span className="text-white text-xl font-mono tracking-[0.3em]">****</span>
                    <span className="text-white text-xl font-mono tracking-tighter">4022</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">Card Holder</p>
                      <p className="text-xs text-white font-black uppercase">Alex Winner</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">Expires</p>
                      <p className="text-xs text-white font-black uppercase">12/28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Transaction List */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Recent Activity</p>
              {[
                { label: 'Prize Payout', amt: '+$550.00', date: 'Today', status: 'Success', color: 'text-primary' },
                { label: 'Mega Draw', amt: '-$5.00', date: 'Yesterday', status: 'Debited', color: 'text-gray-400' },
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                   <div className="flex items-center gap-3">
                     <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center">
                       <span className="material-symbols-outlined text-sm text-gray-400">{tx.amt.includes('+') ? 'arrow_downward' : 'shopping_cart'}</span>
                     </div>
                     <div>
                       <p className="text-xs font-black text-white">{tx.label}</p>
                       <p className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">{tx.date}</p>
                     </div>
                   </div>
                   <p className={`text-xs font-black font-mono ${tx.color}`}>{tx.amt}</p>
                </div>
              ))}
              <button className="w-full text-center text-[10px] font-black text-primary uppercase tracking-widest hover:underline pt-2">Full History Ledger</button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Details */}
        <section className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl p-8 space-y-8">
          <h3 className="text-xl font-black text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">badge</span>
            Account Identity
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <input readOnly className="w-full bg-background-dark/50 border border-white/5 rounded-2xl p-4 text-white font-black text-sm outline-none" defaultValue="alex.winner@secure-lotto.com" />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary text-lg">check_circle</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Region</label>
                <input readOnly className="w-full bg-background-dark/50 border border-white/5 rounded-2xl p-4 text-white font-black text-sm outline-none" defaultValue="European Union" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Currency</label>
                <input readOnly className="w-full bg-background-dark/50 border border-white/5 rounded-2xl p-4 text-white font-black text-sm outline-none" defaultValue="USD ($)" />
              </div>
            </div>
            <button className="w-full py-4 border border-white/10 rounded-2xl text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all">
              Update Identity Details
            </button>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl p-8 space-y-8">
          <h3 className="text-xl font-black text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">security</span>
            Security Engine
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Two-Factor Authentication', desc: 'Secure login via biometrics or app code.', active: true },
              { label: 'Public Leaderboard', desc: 'Show your level and badges to others.', active: false },
              { label: 'AI Fortune Alerts', desc: 'Daily mystical insights and lucky times.', active: true },
            ].map((setting, i) => (
              <div key={i} className="flex justify-between items-center group cursor-pointer p-4 rounded-2xl hover:bg-white/[0.01] transition-all">
                <div className="space-y-1">
                  <p className="text-sm font-black text-white uppercase tracking-widest">{setting.label}</p>
                  <p className="text-xs text-gray-500 font-bold">{setting.desc}</p>
                </div>
                <button className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-500 ${setting.active ? 'bg-primary' : 'bg-white/10'}`}>
                  <span className={`inline-block size-5 transform rounded-full bg-white transition-transform duration-500 ${setting.active ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-white/5">
              <button className="flex items-center gap-2 text-xs font-black text-gray-600 hover:text-red-500 transition-colors uppercase tracking-[0.2em]">
                <span className="material-symbols-outlined text-lg">no_accounts</span>
                Deactivate Cosmic Account
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center items-center gap-3 text-gray-700 py-10">
        <span className="material-symbols-outlined text-sm">verified_user</span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Secured by Quantum-Ledger Encryption</span>
      </div>
    </div>
  );
};

export default Profile;
