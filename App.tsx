
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Wallet from './views/Wallet';
import PurchaseTicket from './views/PurchaseTicket';
import MyTickets from './views/MyTickets';
import Results from './views/Results';
import Settings from './views/Settings';
import Admin from './views/Admin';
import Profile from './views/Profile';
import HelpCenter from './views/HelpCenter';
import Promotions from './views/Promotions';
import Terms from './views/Terms';
import Privacy from './views/Privacy';
import FairPlay from './views/FairPlay';
import Login from './views/Login';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'History', path: '/history', icon: 'casino' },
    { label: 'Tickets', path: '/tickets', icon: 'confirmation_number' },
    { label: 'Wallet', path: '/wallet', icon: 'account_balance_wallet' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-2xl border-t border-white/5 px-6 py-4 flex justify-between items-center pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={item.path}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive ? 'fill-1' : ''}`}>{item.icon}</span>
            <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${isActive ? 'opacity-100' : 'opacity-70'}`}>{item.label}</span>
            {isActive && <span className="absolute -top-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#00ff41]"></span>}
          </Link>
        );
      })}
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem('lottosecure_auth');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('lottosecure_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('lottosecure_auth');
  };

  // Prevent flicker on initial load
  if (isAuthenticated === null) return null;

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background-dark text-white font-body selection:bg-primary selection:text-black">
        <Header onLogout={handleLogout} />
        
        <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 pb-32 md:pb-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/purchase/:id" element={<PurchaseTicket />} />
            <Route path="/tickets" element={<MyTickets />} />
            <Route path="/history" element={<Results />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/fairplay" element={<FairPlay />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <BottomNav />

        <footer className="hidden md:block border-t border-white/5 bg-black/40 py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="size-10 text-primary">
                    <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span className="text-2xl font-display font-black tracking-tight">LottoSecure</span>
                </div>
                <p className="text-gray-500 max-w-xs text-sm font-medium leading-relaxed">
                  The world's first truly decentralized high-security lottery platform. Audited. Verified. Proven.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Platform</h4>
                  <nav className="flex flex-col gap-2">
                    <Link to="/" className="text-sm text-gray-500 hover:text-primary transition-colors">Games</Link>
                    <Link to="/results" className="text-sm text-gray-500 hover:text-primary transition-colors">Draw History</Link>
                    <Link to="/fairplay" className="text-sm text-gray-500 hover:text-primary transition-colors">Fairness Audit</Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Legal</h4>
                  <nav className="flex flex-col gap-2">
                    <Link to="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms</Link>
                    <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy</Link>
                    <Link to="/help" className="text-sm text-gray-500 hover:text-primary transition-colors">Support</Link>
                  </nav>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] text-gray-700 font-black uppercase tracking-[0.4em]">© 2024 LottoSecure Global Protocol INC.</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-lg border border-primary/10">
                   <span className="material-symbols-outlined text-[12px] text-primary">verified_user</span>
                   <span className="text-[8px] font-black text-primary uppercase">Quantum Safe</span>
                </div>
                <span className="text-[8px] text-gray-800 font-bold uppercase tracking-widest">Node Verified: 0x44...A2</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
