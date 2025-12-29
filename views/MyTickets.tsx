
import React, { useState } from 'react';

type Tab = 'active' | 'past' | 'transactions';

const MyTickets: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('active');

  return (
    <div className="mx-auto max-w-7xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Heading & Balance */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-white">My Activity</h1>
          <p className="mt-2 text-lg text-gray-400 max-w-2xl">
            Track your live tickets, check cosmic results, and view your full transaction history securely.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-card-dark px-6 py-3 shadow-xl border border-green-900/30">
          <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          <span className="text-sm font-black text-gray-500 uppercase tracking-widest">Balance:</span>
          <span className="text-xl font-black text-white">$1,240.50</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { label: 'Total Winnings', val: '$12,450.00', trend: '+12%', icon: 'emoji_events', color: 'green' },
          { label: 'Active Tickets', val: '3', trend: 'Next draw in 4h', icon: 'local_activity', color: 'blue' },
          { label: 'Total Spent', val: '$540.00', trend: 'Lifetime total', icon: 'receipt_long', color: 'orange' },
        ].map((stat, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl bg-card-dark p-8 border border-white/5 shadow-2xl transition-all hover:border-primary/20">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-x-4 -translate-y-4 rounded-full bg-primary/5 transition-transform group-hover:scale-125"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="text-3xl font-black tracking-tight text-white">{stat.val}</p>
              </div>
              <div className={`rounded-2xl p-3 bg-white/5 text-primary border border-white/5`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-primary">
              {stat.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-white/5">
        <nav className="flex space-x-12">
          {(['active', 'past', 'transactions'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-sm font-black uppercase tracking-widest transition-all border-b-2 ${
                activeTab === tab 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              {tab.replace('_', ' ')}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'active' && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Powerball Max', id: '#8839210', jackpot: '$145M', countdown: '04h 22m', nums: [4, 12, 28, 33, 45], power: 9, grad: 'from-purple-600 to-indigo-600' },
              { name: 'Mega Millions', id: '#8839211', jackpot: '$80M', countdown: '1d 08h', nums: [2, 15, 22, 49, 50], power: 12, grad: 'from-blue-600 to-cyan-500' },
              { name: 'Daily Cash 4', id: '#8839255', jackpot: '$5,000', countdown: '18m 30s', nums: [1, 99, 23, 7], power: null, grad: 'from-emerald-600 to-green-500' },
            ].map((ticket, i) => (
              <div key={i} className="flex flex-col rounded-3xl bg-card-dark border border-white/5 shadow-2xl overflow-hidden group hover:border-primary/20 transition-all">
                <div className={`relative h-32 w-full bg-gradient-to-r ${ticket.grad} p-8 flex flex-col justify-between`}>
                  <div className="absolute top-0 right-0 p-6 opacity-20">
                    <span className="material-symbols-outlined text-7xl text-white">confirmation_number</span>
                  </div>
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 text-[10px] font-black text-white border border-white/10">
                      <span className="size-2 bg-green-400 rounded-full animate-pulse"></span>
                      LIVE
                    </div>
                    <span className="text-white/60 text-[10px] font-black">{ticket.id}</span>
                  </div>
                  <h4 className="text-2xl font-black text-white relative z-10 tracking-tighter">{ticket.name}</h4>
                </div>
                <div className="p-8 space-y-8 flex-1 flex flex-col">
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Your Selection</p>
                    <div className="flex flex-wrap gap-2.5">
                      {ticket.nums.map(n => (
                        <div key={n} className="size-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 font-black text-xs text-white">
                          {n < 10 ? `0${n}` : n}
                        </div>
                      ))}
                      {ticket.power && (
                        <div className="size-10 flex items-center justify-center rounded-xl bg-primary text-black font-black text-xs shadow-lg shadow-primary/20">
                          {ticket.power < 10 ? `0${ticket.power}` : ticket.power}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase">Est. Jackpot</p>
                      <p className="text-lg font-black text-white">{ticket.jackpot}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-gray-500 uppercase">Draws in</p>
                      <div className="flex items-center gap-1 text-primary font-black text-sm">
                        <span className="material-symbols-outlined text-sm">timer</span>
                        {ticket.countdown}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'past' && (
          <div className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
             {[
              { name: 'Powerball Max', date: 'Oct 24, 2024', won: true, amount: '$50.00', matches: 3 },
              { name: 'Daily Cash 4', date: 'Oct 22, 2024', won: false, amount: '$0.00', matches: 0 },
            ].map((res, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 p-8 border-b border-white/5 last:border-0 ${res.won ? 'bg-primary/5' : ''}`}>
                <div className="flex items-center gap-6 w-full md:w-1/3">
                  <div className={`size-14 rounded-2xl flex items-center justify-center shadow-inner ${res.won ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-600'}`}>
                    <span className="material-symbols-outlined text-2xl">{res.won ? 'emoji_events' : 'sentiment_dissatisfied'}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">{res.name}</h4>
                    <p className="text-xs font-bold text-gray-500">{res.date}</p>
                  </div>
                </div>
                <div className="flex-1 flex gap-3">
                   {[4, 18, 22, 35, 41, 5].map((n, idx) => (
                      <div key={idx} className={`size-10 flex items-center justify-center rounded-xl border-2 font-black text-xs ${idx % 2 === 0 ? 'border-primary bg-primary text-black' : 'border-white/5 bg-white/5 text-gray-500'}`}>
                        {n < 10 ? `0${n}` : n}
                      </div>
                   ))}
                </div>
                <div className="w-full md:w-1/4 text-right">
                  <p className={`text-lg font-black ${res.won ? 'text-primary' : 'text-gray-600'}`}>
                    {res.won ? `WON ${res.amount}` : 'No Prize'}
                  </p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{res.matches} Matches</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 border-b border-white/5">
                  <tr className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <th className="px-8 py-5">Date / Time</th>
                    <th className="px-8 py-5">Description</th>
                    <th className="px-8 py-5">Ref ID</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { date: 'Oct 25, 2024', time: '10:30 AM', desc: 'Prize Payout: Powerball Max', ref: '#TRX-998210', status: 'Completed', amount: '+$50.00', positive: true },
                    { date: 'Oct 24, 2024', time: '08:15 PM', desc: 'Ticket Purchase: Powerball Max', ref: '#TRX-998155', status: 'Completed', amount: '-$5.00', positive: false },
                    { date: 'Oct 20, 2024', time: '02:20 PM', desc: 'Deposit Funds (Visa)', ref: '#TRX-992001', status: 'Completed', amount: '+$100.00', positive: true },
                  ].map((tx, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <p className="text-xs font-black text-white">{tx.date}</p>
                        <p className="text-[10px] font-bold text-gray-500">{tx.time}</p>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className={`size-8 rounded-full flex items-center justify-center ${tx.positive ? 'bg-primary/10 text-primary' : 'bg-white/5 text-gray-500'}`}>
                            <span className="material-symbols-outlined text-sm">{tx.positive ? 'arrow_downward' : 'shopping_cart'}</span>
                          </div>
                          <span className="text-xs font-bold text-white">{tx.desc}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-[10px] font-mono font-black text-gray-500">{tx.ref}</td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg border border-primary/20">
                          {tx.status}
                        </span>
                      </td>
                      <td className={`px-8 py-6 text-right font-black text-sm ${tx.positive ? 'text-primary' : 'text-white'}`}>
                        {tx.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center items-center gap-3 text-gray-600">
        <span className="material-symbols-outlined text-sm">lock</span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">End-to-end encrypted session</span>
      </div>
    </div>
  );
};

export default MyTickets;
