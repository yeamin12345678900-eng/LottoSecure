
import React, { useState } from 'react';

interface Props {
  onLogin: () => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex min-h-screen w-full bg-background-dark text-white font-body selection:bg-primary selection:text-black">
      {/* Left Branding Panel */}
      <div className="hidden lg:flex lg:w-3/5 relative flex-col justify-between p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            className="w-full h-full object-cover opacity-20 scale-110 blur-sm"
            alt="Tech Background"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark/80 to-primary/10"></div>
        </div>
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-3 bg-primary rounded-2xl text-black">
            <span className="material-symbols-outlined text-3xl font-black">casino</span>
          </div>
          <span className="text-3xl font-display font-black tracking-tight">LottoSecure</span>
        </div>

        <div className="relative z-10 max-w-2xl animate-in slide-in-from-left duration-1000">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Next-Gen Lottery Engine</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-none tracking-tighter mb-8">
            Decentralized <br/>
            <span className="text-primary">Wealth.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-md leading-relaxed">
            Experience the most transparent and high-security lottery platform on the globe. Powered by verifiable randomness.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-gray-600">
          <span className="flex items-center gap-2">
            <span className="size-2 bg-primary rounded-full"></span>
            Node 402 Verified
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 bg-secondary rounded-full"></span>
            On-Chain Payments
          </span>
          <span>© 2024 LottoSecure</span>
        </div>
      </div>

      {/* Auth Form Panel */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center bg-card-dark/50 backdrop-blur-3xl border-l border-white/5 shadow-2xl">
        <div className="w-full max-w-md mx-auto px-8 py-12">
          <div className="mb-12">
            <h2 className="text-4xl font-display font-black text-white mb-2 tracking-tight">
              {isSignUp ? 'Join the Future' : 'Secure Entry'}
            </h2>
            <p className="text-gray-500 font-medium">
              {isSignUp ? 'Create your global secure vault account.' : 'Access your secure winning profile.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Legal Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary focus:ring-0 outline-none transition-all font-bold text-sm"
                  placeholder="Enter full legal name"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Email Identity</label>
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary focus:ring-0 outline-none transition-all font-bold text-sm"
                  placeholder="name@example.com"
                  defaultValue={!isSignUp ? "demo@lottosecure.io" : ""}
                  required
                />
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-gray-600">alternate_email</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Secret Key (Password)</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary focus:ring-0 outline-none transition-all font-bold text-sm"
                  placeholder="••••••••"
                  defaultValue={!isSignUp ? "password123" : ""}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility' : 'visibility_off'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="sr-only peer" />
                <div className="size-5 rounded-lg border-2 border-white/10 bg-white/5 peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-gray-300 transition-colors">Remember Node</span>
              </label>
              {!isSignUp && <a href="#" className="text-xs font-black text-primary uppercase tracking-widest hover:underline">Forgot?</a>}
            </div>

            <button 
              type="submit" 
              className="w-full h-16 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-primary/20 transform active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {isSignUp ? 'INITIALIZE VAULT' : 'SECURE SIGN IN'}
              <span className="material-symbols-outlined">verified</span>
            </button>
          </form>

          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">Decentralized Access</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              <img src="https://www.google.com/favicon.ico" className="size-4 grayscale group-hover:grayscale-0" alt="Google" />
              Google
            </button>
            <button className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-lg">wallet</span>
              Web3
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-bold text-gray-500">
              {isSignUp ? 'Already have a vault?' : "No account yet?"}
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-3 text-primary font-black uppercase tracking-widest hover:underline"
              >
                {isSignUp ? 'SIGN IN' : 'REGISTER'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
