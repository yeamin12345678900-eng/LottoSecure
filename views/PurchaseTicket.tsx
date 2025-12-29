
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_LOTTERIES } from '../constants';

const PurchaseTicket: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lottery = MOCK_LOTTERIES.find(l => l.id === id) || MOCK_LOTTERIES[0];

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [lines, setLines] = useState<{ id: string, numbers: number[] }[]>([]);
  const [mode, setMode] = useState<'manual' | 'quick'>('manual');

  const toggleNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(prev => prev.filter(n => n !== num));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers(prev => [...prev, num].sort((a, b) => a - b));
    }
  };

  const handleQuickPick = () => {
    const nums: number[] = [];
    while (nums.length < 6) {
      const r = Math.floor(Math.random() * 50) + 1;
      if (!nums.includes(r)) nums.push(r);
    }
    setSelectedNumbers(nums.sort((a, b) => a - b));
  };

  const addLine = () => {
    if (selectedNumbers.length === 6) {
      setLines(prev => [...prev, { id: Math.random().toString(36).substr(2, 9), numbers: selectedNumbers }]);
      setSelectedNumbers([]);
    }
  };

  const removeLine = (lineId: string) => {
    setLines(prev => prev.filter(l => l.id !== lineId));
  };

  const formattedJackpot = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(lottery.jackpot);

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 md:space-y-8 animate-in fade-in duration-500">
      {/* Page Heading & Hero Info */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tighter">Purchase Ticket</h1>
          <p className="text-primary text-sm md:text-lg font-normal leading-normal">Secure your chance in the {lottery.name}.</p>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex gap-3 items-center bg-card-dark p-3 md:p-4 rounded-2xl border border-white/5 shadow-xl w-full md:w-auto">
          <div className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-widest mr-2 whitespace-nowrap">Draw Closes:</div>
          <div className="flex gap-2 flex-grow md:flex-grow-0 justify-end">
            {[
              { val: '04', label: 'Hrs' },
              { val: '22', label: 'Min' },
              { val: '10', label: 'Sec', active: true }
            ].map((t, i) => (
              <div key={i} className="bg-background-dark rounded-xl px-2 py-1 md:px-3 md:py-2 min-w-[38px] md:min-w-[45px] text-center border border-white/5">
                <span className={`block font-black text-sm md:text-xl leading-none ${t.active ? 'text-primary' : 'text-white'}`}>{t.val}</span>
                <span className="text-[6px] md:text-[8px] font-black uppercase tracking-tighter text-gray-500">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        {/* Left Column: Selection Area */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Jackpot Card */}
          <div className="relative overflow-hidden rounded-3xl bg-card-dark border border-green-900/30 shadow-2xl group min-h-[160px] md:min-h-[220px] flex items-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${lottery.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-card-dark via-card-dark/80 to-transparent"></div>
            
            <div className="relative z-10 p-6 md:p-10 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1 md:mb-2 opacity-80">
                  <span className="material-symbols-outlined text-xs md:text-sm text-primary">calendar_month</span>
                  <span className="text-[8px] md:text-xs font-black uppercase tracking-widest">Draw: {new Date(lottery.drawDate).toLocaleDateString()}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black mb-1 md:mb-2 tracking-tighter">{lottery.name}</h2>
                <div className="text-[10px] md:text-sm font-bold text-gray-400">Current Estimated Jackpot</div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-3xl md:text-6xl font-black text-primary drop-shadow-[0_0_20px_rgba(19,236,19,0.3)]">{formattedJackpot}</div>
              </div>
            </div>
          </div>

          {/* Number Selector */}
          <div className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 bg-white/[0.02]">
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">Choose Numbers</h3>
                <p className="text-xs md:text-sm text-gray-500 font-bold">Pick 6 numbers (1-50)</p>
              </div>
              
              <div className="flex bg-background-dark/50 p-1 rounded-2xl border border-white/5 w-full sm:w-auto">
                <button 
                  onClick={() => setMode('manual')}
                  className={`flex-1 sm:flex-none px-4 md:px-6 py-2 rounded-xl text-[10px] md:text-sm font-black transition-all flex items-center justify-center gap-2 ${mode === 'manual' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-gray-500 hover:text-white'}`}
                >
                  <span className="material-symbols-outlined text-lg">touch_app</span>
                  MANUAL
                </button>
                <button 
                  onClick={() => { setMode('quick'); handleQuickPick(); }}
                  className={`flex-1 sm:flex-none px-4 md:px-6 py-2 rounded-xl text-[10px] md:text-sm font-black transition-all flex items-center justify-center gap-2 ${mode === 'quick' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-gray-500 hover:text-white'}`}
                >
                  <span className="material-symbols-outlined text-lg">bolt</span>
                  QUICK
                </button>
              </div>
            </div>

            <div className="p-4 md:p-10 bg-background-dark/20">
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 md:gap-3 place-items-center">
                {Array.from({ length: 50 }, (_, i) => i + 1).map(num => {
                  const isSelected = selectedNumbers.includes(num);
                  return (
                    <button
                      key={num}
                      onClick={() => toggleNumber(num)}
                      className={`size-10 md:size-12 rounded-xl md:rounded-2xl font-black text-sm md:text-lg transition-all border-2 ${
                        isSelected 
                          ? 'bg-primary border-primary text-black shadow-[0_0_10px_rgba(19,236,19,0.3)] scale-105' 
                          : 'bg-white/5 border-white/5 text-gray-500 hover:border-primary/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/[0.02] p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-[10px] md:text-sm font-bold text-gray-500 text-center">
                <span className="material-symbols-outlined text-primary text-lg">info</span>
                <span>Select {6 - selectedNumbers.length} more numbers.</span>
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => setSelectedNumbers([])}
                  className="flex-1 sm:flex-none px-4 py-3 text-[10px] font-black text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                >
                  CLEAR
                </button>
                <button 
                  onClick={addLine}
                  disabled={selectedNumbers.length !== 6}
                  className="flex-grow sm:flex-none px-6 py-3 bg-white text-black hover:bg-gray-200 disabled:opacity-20 rounded-xl font-black text-xs md:text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  ADD LINE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ticket Summary & Checkout */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-28">
          <div className="bg-card-dark rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
            <div className="p-5 md:p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
              <h3 className="font-black text-sm md:text-lg text-white flex items-center gap-2 tracking-tight uppercase">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Your Ticket
              </h3>
              <span className="bg-primary/20 text-primary text-[8px] md:text-[10px] font-black px-2 py-1 rounded-lg border border-primary/20 uppercase tracking-widest">
                {lines.length} {lines.length === 1 ? 'Line' : 'Lines'}
              </span>
            </div>

            <div className="p-4 md:p-6 space-y-4 max-h-[300px] md:max-h-[400px] overflow-y-auto custom-scrollbar">
              {lines.length === 0 ? (
                <div className="text-center py-10 text-gray-600 space-y-3">
                  <span className="material-symbols-outlined text-4xl opacity-10">shopping_cart</span>
                  <p className="text-[10px] font-black uppercase tracking-widest">Cart is empty</p>
                </div>
              ) : (
                lines.map((line, idx) => (
                  <div key={line.id} className="relative group border border-white/5 rounded-2xl p-4 bg-white/[0.01] hover:border-primary/40 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[8px] font-black uppercase text-gray-500 tracking-[0.2em]">Line {String.fromCharCode(65 + idx)}</span>
                      <button onClick={() => removeLine(line.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-lg">close</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {line.numbers.map(n => (
                        <span key={n} className="inline-flex items-center justify-center size-7 rounded-lg bg-primary/10 text-primary text-[10px] font-black border border-primary/10">{n}</span>
                      ))}
                    </div>
                    <div className="text-right text-[8px] font-black text-gray-600 uppercase tracking-widest">${lottery.ticketPrice.toFixed(2)}</div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 md:p-8 border-t border-white/5 bg-white/[0.01]">
              <div className="flex justify-between items-center mb-2 text-[8px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span>Subtotal</span>
                <span>${(lines.length * lottery.ticketPrice).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-end mb-6">
                <span className="text-xs font-black text-white uppercase tracking-widest">Total</span>
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">${(lines.length * lottery.ticketPrice).toFixed(2)}</span>
              </div>
              <button 
                onClick={() => { if(lines.length > 0) alert('Transaction Secured. Good luck!'); }}
                disabled={lines.length === 0}
                className="w-full bg-primary hover:bg-green-400 text-black text-xs md:text-base font-black py-4 md:py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex justify-center items-center gap-3 disabled:opacity-10"
              >
                <span className="material-symbols-outlined font-black">lock</span>
                PURCHASE
              </button>
            </div>
          </div>

          <div className="hidden md:block bg-primary/5 p-6 rounded-3xl border border-primary/20 space-y-3">
            <h4 className="font-black text-primary text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">help</span>
              Game Rules
            </h4>
            <p className="text-[10px] text-gray-500 leading-relaxed font-bold">
              Match 6 numbers to win the jackpot. Drawings are verifiable on-chain for 100% transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTicket;
