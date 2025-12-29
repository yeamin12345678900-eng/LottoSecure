
import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Wallet Widget */}
      <div className="bg-card-dark rounded-2xl p-6 border border-green-900/30 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/48/48?random=13')" }} />
          <div>
            <p className="text-xs text-gray-500">Welcome back,</p>
            <h4 className="font-bold text-lg text-white">Alex Doe</h4>
          </div>
        </div>
        <div className="bg-background-dark p-4 rounded-xl mb-4 border border-green-900/30">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Total Balance</span>
            <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
          </div>
          <p className="text-2xl font-black text-white font-mono">0.45 ETH</p>
          <p className="text-[10px] text-gray-500 font-bold">≈ $1,245.32 USD</p>
        </div>
        <button className="w-full py-3 bg-primary text-black font-black rounded-xl hover:bg-green-400 transition-all text-sm shadow-[0_4px_20px_rgba(19,236,19,0.2)]">
          Deposit Funds
        </button>
      </div>

      {/* Recent Winners */}
      <div className="bg-card-dark rounded-2xl p-6 border border-green-900/30 shadow-xl">
        <h3 className="font-bold text-white mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-yellow-500 text-xl">emoji_events</span>
          Live Winners
        </h3>
        <div className="space-y-4">
          {[
            { user: '0x...4a', type: 'Daily Draw', time: '2 mins ago', amount: '+$500' },
            { user: '0x...b2', type: 'Scratch', time: '14 mins ago', amount: '+$50' },
            { user: '0x...99', type: 'Lotto', time: '1 hr ago', amount: '+$2,400' },
          ].map((winner, idx) => (
            <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold text-gray-400">
                  {winner.user}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{winner.type}</p>
                  <p className="text-[10px] text-gray-500">{winner.time}</p>
                </div>
              </div>
              <span className="text-primary font-bold text-sm">{winner.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Provably Fair Badge */}
      <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20 text-center">
        <span className="material-symbols-outlined text-primary text-3xl mb-2">verified_user</span>
        <h4 className="font-bold text-sm text-white">Provably Fair</h4>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">All draws are verified on the blockchain for complete transparency.</p>
        <a className="text-primary text-[10px] font-black uppercase tracking-widest mt-4 inline-block hover:underline" href="#">
          View Audit
        </a>
      </div>
    </aside>
  );
};

export default RightSidebar;
