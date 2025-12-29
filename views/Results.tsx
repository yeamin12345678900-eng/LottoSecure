
import React from 'react';

const Results: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-black tracking-tighter text-white">Draw Results</h1>
          <p className="text-primary text-lg font-medium">Verify outcomes, check your numbers, and see prize breakdowns.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-white">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span>Filter by Date</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-green-400 transition-all">
            <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
            Check My Ticket
          </button>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Latest Result */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* Hero Result Card */}
          <div className="bg-card-dark rounded-3xl shadow-2xl border border-white/5 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-400"></div>
            <div className="p-8 md:p-12">
              {/* Draw Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-black bg-primary/20 text-primary uppercase tracking-[0.2em] border border-primary/20">Latest Draw</span>
                    <span className="text-xs text-gray-500 font-black">#1024</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">October 24, 2024</h2>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Jackpot Prize</p>
                  <p className="text-3xl md:text-4xl font-black text-primary">$15,000,000</p>
                </div>
              </div>

              {/* Winning Numbers */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 py-10 bg-black/20 rounded-3xl border border-white/5">
                {[5, 12, 23, 44, 50].map((num) => (
                  <div key={num} className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white/5 border-2 border-white/10 shadow-inner text-2xl md:text-3xl font-black text-white">
                    {num < 10 ? `0${num}` : num}
                  </div>
                ))}
                <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-primary text-black shadow-2xl shadow-primary/30 text-2xl md:text-3xl font-black border-2 border-primary relative group cursor-help">
                  02
                  <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all text-[8px] font-black uppercase tracking-widest bg-black text-white px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10">
                    Powerball
                  </span>
                </div>
              </div>

              {/* Meta Status */}
              <div className="flex items-center justify-center gap-3 text-xs font-black text-primary bg-primary/10 py-4 rounded-2xl border border-primary/20 uppercase tracking-widest">
                <span className="material-symbols-outlined text-lg">emoji_events</span>
                Jackpot Status: WON ($15,000,000)
              </div>
            </div>

            {/* Fairness Module */}
            <div className="bg-white/[0.02] border-t border-white/5 px-8 py-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                    Verify Draw Fairness
                  </div>
                  <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                </summary>
                <div className="mt-6 space-y-6 text-[10px] font-mono text-gray-400 pb-2">
                  <div className="flex flex-col gap-2">
                    <span className="uppercase tracking-[0.2em] font-black text-gray-600">Public Seed</span>
                    <div className="bg-black/50 p-4 rounded-xl border border-white/5 break-all select-all font-mono leading-relaxed">
                      0x29a4b6c8d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="uppercase tracking-[0.2em] font-black text-gray-600">Result Hash</span>
                    <div className="bg-black/50 p-4 rounded-xl border border-white/5 break-all select-all font-mono leading-relaxed">
                      0x8b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary hover:underline mt-4 font-black uppercase tracking-widest text-[10px]">
                    Verify on Blockchain <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </button>
                </div>
              </details>
            </div>
          </div>

          {/* Prize Breakdown Table */}
          <div className="bg-card-dark rounded-3xl shadow-2xl border border-white/5 p-8">
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3 tracking-tight">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Prize Breakdown
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-8 py-5">Match Type</th>
                    <th className="px-8 py-5 text-center">Winners</th>
                    <th className="px-8 py-5 text-right">Prize Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { match: '5 Numbers + PB', winners: 1, amount: '$15,000,000', jackpot: true },
                    { match: '5 Numbers', winners: 4, amount: '$50,000', jackpot: false },
                    { match: '4 Numbers + PB', winners: 28, amount: '$1,000', jackpot: false },
                    { match: '4 Numbers', winners: 854, amount: '$100', jackpot: false },
                    { match: '3 Numbers + PB', winners: 1920, amount: '$50', jackpot: false },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="flex -space-x-1">
                            {[1, 2, 3, 4, 5].map(j => (
                              <div key={j} className="size-4 rounded-full border border-white/20 bg-gray-800"></div>
                            ))}
                            {row.match.includes('PB') && <div className="size-4 rounded-full border border-primary/50 bg-primary"></div>}
                          </div>
                          <span className="text-xs font-bold text-white uppercase tracking-widest">{row.match}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center font-mono font-black text-gray-400">{row.winners}</td>
                      <td className={`px-8 py-6 text-right font-black ${row.jackpot ? 'text-primary text-lg' : 'text-white'}`}>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Archive */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-card-dark rounded-3xl shadow-2xl border border-white/5 p-8 sticky top-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-white tracking-tight">Past Draws</h3>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { id: '#1023', date: 'Oct 21, 2024', nums: [4, 11, 32], power: 9 },
                { id: '#1022', date: 'Oct 17, 2024', nums: [1, 14, 28], power: 3 },
                { id: '#1021', date: 'Oct 14, 2024', nums: [8, 22, 45], power: 11 },
              ].map((item, i) => (
                <button key={i} className="w-full text-left group p-5 rounded-2xl bg-white/[0.02] border border-transparent hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{item.id}</span>
                    <span className="text-[10px] font-bold text-gray-500">{item.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {item.nums.map(n => (
                        <span key={n} className="size-8 flex items-center justify-center rounded-xl bg-background-dark text-[10px] font-black text-gray-300 border border-white/5">{n < 10 ? `0${n}` : n}</span>
                      ))}
                      <span className="text-gray-600 font-black">...</span>
                      <span className="size-8 flex items-center justify-center rounded-xl bg-primary text-black text-[10px] font-black shadow-lg shadow-primary/20">{item.power < 10 ? `0${item.power}` : item.power}</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-700 group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Next Draw CTA */}
            <div className="mt-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900 to-black p-8 group">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 text-center space-y-4">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Next Draw</p>
                <h4 className="text-2xl font-black text-white tracking-tighter">Oct 27, 2024</h4>
                <div className="py-4">
                   <p className="text-xs font-bold text-gray-400 uppercase mb-1">Estimated Jackpot</p>
                   <p className="text-4xl font-black text-white tracking-tighter">$20 Million</p>
                </div>
                <button className="w-full py-4 bg-primary text-black font-black text-sm rounded-2xl shadow-xl shadow-primary/30 hover:bg-green-400 transition-all">
                  PLAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
