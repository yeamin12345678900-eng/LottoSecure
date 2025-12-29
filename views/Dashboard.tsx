
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_LOTTERIES } from '../constants';
import LotteryCard from '../components/LotteryCard';
import RightSidebar from '../components/RightSidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-1000">
      <div className="flex-1 min-w-0 space-y-12">
        
        {/* Futuristic Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-card-dark border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row min-h-[450px]">
            {/* Visual Side */}
            <div className="w-full md:w-5/12 relative overflow-hidden h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Jackpot Visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card-dark via-card-dark/40 to-transparent"></div>
              <div className="absolute top-8 left-8">
                <div className="px-4 py-2 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">Global Draw LIVE</span>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 p-8 md:p-14 flex flex-col justify-center relative z-10">
              <h2 className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-4">The Ultimate Prize</h2>
              <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6">
                50,000,000 <span className="text-primary text-3xl font-body align-top">$</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed font-light">
                Securely distributed via on-chain smart contracts. Instant payouts guaranteed.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link to="/purchase/3" className="px-10 py-5 bg-primary hover:bg-white text-black font-black rounded-2xl transition-all shadow-[0_10px_30px_rgba(0,255,65,0.3)] transform hover:-translate-y-1 flex items-center gap-4">
                  <span className="material-symbols-outlined font-black">token</span>
                  PLAY NOW
                </Link>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="size-10 rounded-full border-2 border-card-dark bg-gray-800 overflow-hidden">
                      <img src={`https://picsum.photos/40/40?random=${i+100}`} alt="Player" />
                    </div>
                  ))}
                  <div className="size-10 rounded-full bg-white/5 border-2 border-card-dark flex items-center justify-center text-[10px] text-primary font-black">+2k</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories / Toggles */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
          {['All Games', 'Jackpot', 'Fast Draws', 'Scratch', 'AI Predictions'].map((cat, i) => (
            <button key={i} className={`px-6 py-3 rounded-2xl whitespace-nowrap text-xs font-black uppercase tracking-widest border transition-all ${i === 0 ? 'bg-primary border-primary text-black' : 'bg-white/5 border-white/5 text-gray-500 hover:text-white hover:border-white/10'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Active Grid */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl font-display font-black text-white">Live Opportunities</h3>
            <div className="flex gap-2">
              <button className="p-2 rounded-xl bg-white/5 text-gray-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="p-2 rounded-xl bg-white/5 text-gray-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_LOTTERIES.map(lottery => (
              <LotteryCard key={lottery.id} lottery={lottery} onBuy={() => {}} />
            ))}
          </div>
        </section>
      </div>

      <RightSidebar />
    </div>
  );
};

export default Dashboard;
