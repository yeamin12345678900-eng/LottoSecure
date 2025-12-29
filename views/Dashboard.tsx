
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_LOTTERIES } from '../constants.tsx';
import LotteryCard from '../components/LotteryCard.tsx';
import RightSidebar from '../components/RightSidebar.tsx';

const Dashboard: React.FC = () => {
  const handleBuyTicket = (id: string) => {
    // This prop is still needed for LotteryCard but Link is used inside now
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-700">
      {/* Main Content (Left) */}
      <div className="flex-1 min-w-0 space-y-10">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-card-dark border border-green-900/30 shadow-2xl group">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700"></div>
          
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative min-h-[320px]">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBd5U0g5mpES3HmhRWoAeTlmgoxekQdHm0zPdhJc5GEdF3QMBCdoTtkTZo1rZmG7QD722CH35EavVWf5eMxmSrqedMcPdjRCOv6_4dDsuU16Q9R3AA9PAIHWQSe29UJTi5b4PeVIuXaGC-U-UxGkkZm40HPTx-joVNwfftP6OO2Kr0P2BFejO9BWJb1AUss1j4xWh_Rxn8wnOy8hklaTUU-MNvT2BOJn8XMrGhZGJmNuuqO36DdEyiil9-MK8YbSvRden_oaGajn26A')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card-dark via-card-dark/20 to-transparent opacity-90"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl shadow-primary/20">
                  Mega Jackpot
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
              <h2 className="text-xs font-black text-primary mb-2 uppercase tracking-[0.3em]">Global Draw Live</h2>
              <div className="mb-8">
                <p className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
                  $50,000,000
                </p>
                <p className="text-gray-400 text-sm max-w-sm">Verified on-chain. Secure instant payouts directly to your wallet.</p>
              </div>

              {/* Timer */}
              <div className="flex gap-4 mb-8">
                {[
                  { value: '04', label: 'Hours' },
                  { value: '23', label: 'Mins' },
                  { value: '12', label: 'Secs', highlight: true }
                ].map((unit, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-background-dark/80 backdrop-blur-md rounded-2xl border border-green-900/50 flex items-center justify-center mb-1">
                      <span className={`text-2xl font-black font-mono ${unit.highlight ? 'text-primary' : 'text-white'}`}>
                        {unit.value}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{unit.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/purchase/3" className="px-8 py-4 bg-primary hover:bg-green-400 text-black font-black rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                  <span className="material-symbols-outlined">confirmation_number</span>
                  Get Tickets Now
                </Link>
                <button className="p-4 rounded-2xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-all">
                  <span className="material-symbols-outlined">info</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Active Grid */}
        <section>
          <div className="flex items-center justify-between mb-8 px-2">
            <h3 className="text-2xl font-black text-white tracking-tight">Active Lotteries</h3>
            <button className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-1 hover:underline">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_LOTTERIES.map(lottery => (
              <LotteryCard key={lottery.id} lottery={lottery} onBuy={handleBuyTicket} />
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar (Right) */}
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
