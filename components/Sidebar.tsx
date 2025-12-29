
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-surface-dark border-r border-primary/10 h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-[#0d1b0d]">
          <span className="material-symbols-outlined text-2xl">casino</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">LottoSecure</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-primary text-[#0d1b0d] font-bold shadow-[0_0_20px_rgba(19,236,19,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Live Support</p>
          <p className="text-sm text-gray-300 mb-4">Need help with your payout?</p>
          <button className="w-full py-2 bg-primary text-[#0d1b0d] text-xs font-black rounded-lg hover:bg-primary/90 transition-colors">
            Chat Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
