
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Promos', path: '/promotions', icon: 'redeem' },
    { label: 'Wallet', path: '/wallet', icon: 'account_balance_wallet' },
    { label: 'Tickets', path: '/tickets', icon: 'confirmation_number' },
    { label: 'History', path: '/history', icon: 'history' },
    { label: 'Help', path: '/help', icon: 'help' },
    { label: 'Admin', path: '/admin', icon: 'shield_person' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-green-900/50 bg-white dark:bg-[#102210]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-400 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>

            <Link to="/" className="flex items-center gap-2 md:gap-4">
              <div className="size-8 md:size-10 text-primary">
                <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h1 className="text-lg md:text-xl font-black tracking-tight text-white font-display">LotteryWin</h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-xs lg:text-sm font-bold transition-colors whitespace-nowrap ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 rounded-full hover:bg-green-900/30 transition-colors relative text-gray-400">
              <span className="material-symbols-outlined text-xl md:text-2xl">notifications</span>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 md:gap-4 pl-2 md:pl-4 border-l border-green-900/50">
              <div className="text-right hidden sm:block">
                <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black">Balance</p>
                <p className="text-xs md:text-sm font-bold text-primary">1,240.50 USD</p>
              </div>
              <Link 
                to="/profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-cover bg-center ring-2 ring-primary/50 overflow-hidden border-2 border-slate-700 shadow-sm block" 
                style={{ backgroundImage: "url('https://picsum.photos/80/80?random=10')" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#0d1b0d] border-r border-white/10 p-6 animate-in slide-in-from-left duration-300 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <div className="size-8 text-primary">
                  <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="font-black text-white uppercase tracking-widest text-sm">LottoSecure</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    location.pathname === item.path 
                      ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(19,236,19,0.1)]' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <span className={`material-symbols-outlined text-xl ${location.pathname === item.path ? 'fill-1' : ''}`}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-10 left-6 right-6">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-lg">logout</span>
                Logout Session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
