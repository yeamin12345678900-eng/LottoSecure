
import React from 'react';
import { Link } from 'react-router-dom';
import { Lottery } from '../types';

interface Props {
  lottery: Lottery;
  onBuy: (id: string) => void;
}

const LotteryCard: React.FC<Props> = ({ lottery, onBuy }) => {
  const formattedJackpot = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(lottery.jackpot);

  return (
    <div className="bg-card-dark rounded-2xl p-4 border border-green-900/20 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all group">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
        <img 
          src={lottery.image} 
          alt={lottery.name} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
          Ends in {Math.floor(Math.random() * 24)}h
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-black text-lg text-white font-display">{lottery.name}</h4>
          <p className="text-primary font-black text-sm tracking-tight">{formattedJackpot} Pool</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
          <span className="material-symbols-outlined text-xl">local_fire_department</span>
        </div>
      </div>

      <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 mb-6 overflow-hidden">
        <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${Math.random() * 60 + 20}%` }}></div>
      </div>

      <Link 
        to={`/purchase/${lottery.id}`}
        className="block w-full text-center py-3 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-transparent text-white hover:text-black font-black text-sm transition-all"
      >
        Play for ${lottery.ticketPrice}
      </Link>
    </div>
  );
};

export default LotteryCard;
