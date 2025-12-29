
import React from 'react';

const Wallet: React.FC = () => {
  return (
    <div className="max-w-[1100px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Heading & Balance Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col justify-center gap-2">
          <h1 className="text-white text-5xl font-black leading-tight tracking-tighter">My Wallet</h1>
          <p className="text-gray-400 text-lg font-normal">Manage your balance and transactions securely.</p>
        </div>

        {/* Balance Stats Card */}
        <div className="bg-card-dark border border-green-900/30 rounded-2xl p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-primary">account_balance_wallet</span>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Available Balance</p>
            <div className="flex items-center gap-4">
              <p className="text-white text-4xl font-black leading-tight">$1,240.50</p>
              <button className="text-gray-600 hover:text-primary transition-colors" title="Refresh Balance">
                <span className="material-symbols-outlined text-2xl">refresh</span>
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-primary text-xs font-black bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+5% this month</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Top Up */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-card-dark rounded-3xl border border-green-900/20 shadow-xl overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <h2 className="text-white text-xl font-black flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">add_card</span>
                Top Up Account
              </h2>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg uppercase tracking-widest border border-white/5">
                <span className="material-symbols-outlined text-xs">lock</span>
                Secure Payouts
              </div>
            </div>
            
            <div className="p-8 space-y-10">
              {/* Method Selector */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Select Method</label>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'visa', name: 'Visa / Mastercard', desc: 'Instant • 1% fee', icon: 'credit_card', color: 'text-white' },
                    { id: 'paypal', name: 'PayPal', desc: 'Secure checkout • No fee', icon: 'payments', color: 'text-blue-400' },
                    { id: 'crypto', name: 'Crypto Wallet', desc: 'BTC, ETH, USDT • Network fees apply', icon: 'currency_bitcoin', color: 'text-yellow-500' }
                  ].map((method, idx) => (
                    <label key={method.id} className="relative flex items-center gap-4 rounded-2xl border border-white/5 p-5 cursor-pointer hover:bg-white/[0.03] transition-all group has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input name="method" type="radio" className="peer sr-only" defaultChecked={idx === 0} />
                      <div className="size-6 rounded-full border-2 border-white/10 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-all">
                        <div className="size-2 rounded-full bg-black opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <div className="flex items-center justify-center bg-white/5 p-2 rounded-xl border border-white/5 w-14 h-10 group-hover:border-white/10">
                        <span className={`material-symbols-outlined ${method.color}`}>{method.icon}</span>
                      </div>
                      <div className="flex flex-col grow">
                        <p className="text-white text-sm font-bold">{method.name}</p>
                        <p className="text-gray-500 text-[10px] font-bold">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="space-y-6">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Enter Amount</label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary font-black text-3xl">$</span>
                  <input 
                    className="w-full pl-12 pr-6 py-6 bg-background-dark/50 border border-white/5 rounded-2xl text-4xl font-black text-white placeholder-gray-800 focus:outline-none focus:ring-1 focus:ring-primary transition-all font-mono" 
                    placeholder="0.00" 
                    type="number" 
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {['10', '25', '50', '100', '500'].map(amt => (
                    <button 
                      key={amt}
                      className={`flex-1 min-w-[80px] py-3 rounded-xl border text-xs font-black transition-all ${
                        amt === '50' 
                          ? 'border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(19,236,19,0.1)]' 
                          : 'border-white/5 bg-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="w-full bg-primary hover:bg-green-400 text-black font-black text-lg py-5 rounded-2xl shadow-2xl shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined font-black">add_circle</span>
                  ADD FUNDS NOW
                </button>
                <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-6">
                  Funds are available instantly. View our <a href="#" className="underline hover:text-primary">Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: History */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-card-dark rounded-3xl border border-green-900/20 shadow-xl overflow-hidden h-full flex flex-col">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <h2 className="text-white text-lg font-black tracking-tight">Recent Deposits</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</button>
            </div>
            
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white/[0.02] border-b border-white/5">
                  <tr className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4">Method</th>
                    <th className="px-8 py-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { date: 'Oct 24, 2023', method: 'Visa', amount: '+$50.00', status: 'Success', icon: 'credit_card' },
                    { date: 'Oct 20, 2023', method: 'PayPal', amount: '+$100.00', status: 'Success', icon: 'payments' },
                    { date: 'Oct 15, 2023', method: 'BTC', amount: '+$500.00', status: 'Pending', icon: 'currency_bitcoin' },
                    { date: 'Oct 01, 2023', method: 'Visa', amount: '+$25.00', status: 'Failed', icon: 'credit_card' },
                  ].map((tx, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 text-gray-500 font-bold text-xs">{tx.date}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-gray-600 text-lg group-hover:text-primary transition-colors">{tx.icon}</span>
                          <span className="font-bold text-white text-xs">{tx.method}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <p className="font-black text-white mb-1">{tx.amount}</p>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                          tx.status === 'Success' ? 'text-primary' : 
                          tx.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-black/20 border-t border-white/5 mt-auto">
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Encrypted Connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
