
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#102210] border-t border-white/10 px-6 py-3 flex justify-between items-center pb-safe-offset-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={item.path}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 relative ${isActive ? 'text-primary scale-110' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive ? 'fill-1' : ''}`}>{item.icon}</span>
            <span className={`text-[9px] font-black uppercase tracking-wider ${isActive ? 'opacity-100' : 'opacity-70'}`}>{item.label}</span>
            {isActive && <span className="absolute -top-3 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#13ec13]"></span>}
          </Link>
        );
      })}
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('lottosecure_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('lottosecure_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('lottosecure_auth');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background-dark text-white font-body selection:bg-primary selection:text-black">
        <Header onLogout={handleLogout} />
        
        <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 pb-24 md:pb-12">
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

        <footer className="hidden md:block border-t border-white/5 bg-background-dark py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="size-10 text-primary">
                <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-lg font-black text-gray-400 uppercase tracking-[0.2em] font-display">LotteryWin Platform</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-10">
              <Link to="/terms" className="text-xs font-black text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">Terms</Link>
              <Link to="/privacy" className="text-xs font-black text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">Privacy</Link>
              <Link to="/fairplay" className="text-xs font-black text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">Fair Play</Link>
              <Link to="/help" className="text-xs font-black text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">Support</Link>
            </nav>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-[10px] text-gray-700 font-black uppercase tracking-[0.3em]">© 2024 LotteryWin INC.</p>
              <p className="text-[8px] text-gray-800 font-bold uppercase tracking-widest">Global Node Verified • TLS 1.3</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
