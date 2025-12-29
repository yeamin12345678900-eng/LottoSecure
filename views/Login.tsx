
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
    <div className="flex min-h-screen w-full flex-row overflow-hidden">
      {/* Left Section: Visual / Marketing */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between bg-[#051005] p-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKoV76aWpGpD4dFNzDn03IlHXp13ITPm4b0NNkhdPrzSp4lxWUAFThpi9BOxsv1LRwGX4X5dTtyQhZx86OQ7DWCjxzY_41Z68v-EqjKgQQ5ZOcCmtAnDfqzQSRxvZ8ueyqLCuFSI68HQiCompYFkypDMVfyIap4jtKws1BIVzaKH8ZOz7J3fdmCO_7hP37f3-BkmnPkywPuSWU2qQiNYnnXCYrrddyzeoLTkOU7Uzx8ZvT6TPNsSYX-pd4bowFRoAbxwx9updkecYT')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#051005] via-transparent to-[#051005] opacity-90"></div>
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-[#0d1b0d]">
            <span className="material-symbols-outlined text-2xl">casino</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">LottoSecure</span>
        </div>

        <div className="relative z-10 max-w-lg animate-in slide-in-from-left duration-700">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 backdrop-blur-md">
            <span className="mr-2 flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Live Jackpot</span>
          </div>
          <h1 className="mb-4 text-5xl font-black leading-tight tracking-tight text-white">
            Secure. Transparent. <br/>
            <span className="text-primary">Winning.</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Join over 2 million players on the most trusted lottery platform. 
            Experience real-time results, instant payouts, and fair play certification.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/40/40?random=${i+20}`} 
                  className="h-10 w-10 rounded-full border-2 border-[#051005]" 
                  alt="Winner" 
                />
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#051005] bg-primary text-xs font-bold text-[#0d1b0d]">+2k</div>
            </div>
            <div className="text-sm font-medium text-white">
              <p>Winners this week</p>
              <div className="flex items-center text-primary">
                <span className="material-symbols-outlined mr-1 text-sm font-black">verified</span>
                <span className="font-bold">Verified Payouts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex gap-6 text-xs text-gray-500">
          <a className="hover:text-primary transition-colors font-bold uppercase tracking-widest" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors font-bold uppercase tracking-widest" href="#">Terms of Service</a>
          <span className="font-bold uppercase tracking-widest">© 2024 LottoSecure Inc.</span>
        </div>
      </div>

      {/* Right Section: Login / Sign Up Form */}
      <div className="flex w-full flex-col justify-center bg-background-light dark:bg-background-dark lg:w-1/2">
        <div className="flex h-full flex-col overflow-y-auto px-6 py-8 lg:px-20 xl:px-32">
          <div className="flex flex-1 flex-col justify-center max-w-md mx-auto w-full">
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h2 className="text-4xl font-black tracking-tighter text-[#0d1b0d] dark:text-white">
                {isSignUp ? 'Create your account' : 'Welcome back'}
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                {isSignUp ? 'Enter your details to start winning today.' : 'Please enter your details to sign in.'}
              </p>
            </div>

            <div className="mb-10 border-b border-[#cfe7cf] dark:border-gray-800">
              <div className="flex gap-8">
                <button 
                  onClick={() => setIsSignUp(false)}
                  className={`relative flex flex-col items-center justify-center pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all ${!isSignUp ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Log In
                  {!isSignUp && <span className="absolute bottom-0 h-[2px] w-full bg-primary shadow-[0_0_10px_rgba(19,236,19,0.5)]"></span>}
                </button>
                <button 
                  onClick={() => setIsSignUp(true)}
                  className={`relative flex flex-col items-center justify-center pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all ${isSignUp ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Sign Up
                  {isSignUp && <span className="absolute bottom-0 h-[2px] w-full bg-primary shadow-[0_0_10px_rgba(19,236,19,0.5)]"></span>}
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-in fade-in duration-500">
              {isSignUp && (
                <label className="flex flex-col gap-2 group">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-primary transition-colors">Full Name</span>
                  <div className="relative">
                    <input 
                      className="w-full rounded-2xl border border-[#cfe7cf] dark:border-gray-800 bg-white dark:bg-[#112211] px-5 py-4 text-sm text-[#0d1b0d] dark:text-white placeholder-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-bold" 
                      placeholder="Enter your name" 
                      required 
                      type="text"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                      <span className="material-symbols-outlined text-gray-600 text-lg">person</span>
                    </div>
                  </div>
                </label>
              )}

              <label className="flex flex-col gap-2 group">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-primary transition-colors">Email Address</span>
                <div className="relative">
                  <input 
                    className="w-full rounded-2xl border border-[#cfe7cf] dark:border-gray-800 bg-white dark:bg-[#112211] px-5 py-4 text-sm text-[#0d1b0d] dark:text-white placeholder-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-bold" 
                    placeholder="name@example.com" 
                    required 
                    type="email" 
                    defaultValue={!isSignUp ? "demo@example.com" : ""}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                    <span className="material-symbols-outlined text-gray-600 text-lg">mail</span>
                  </div>
                </div>
              </label>

              <label className="flex flex-col gap-2 group">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-primary transition-colors">Password</span>
                <div className="relative">
                  <input 
                    className="w-full rounded-2xl border border-[#cfe7cf] dark:border-gray-800 bg-white dark:bg-[#112211] px-5 py-4 text-sm text-[#0d1b0d] dark:text-white placeholder-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-bold" 
                    placeholder={isSignUp ? "Create a strong password" : "Enter your password"} 
                    required 
                    type={showPassword ? "text" : "password"} 
                    defaultValue={!isSignUp ? "password123" : ""}
                  />
                  <button 
                    className="absolute inset-y-0 right-0 flex items-center pr-5 text-gray-600 hover:text-primary transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility' : 'visibility_off'}</span>
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input className="peer sr-only" type="checkbox" required={isSignUp} />
                    <div className="size-5 rounded-lg border-2 border-gray-800 bg-[#112211] peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined text-black text-sm font-black opacity-0 peer-checked:opacity-100">check</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-500 group-hover:text-gray-300 transition-colors">
                    {isSignUp ? (
                      <span>I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a></span>
                    ) : (
                      'Remember me'
                    )}
                  </span>
                </label>
                {!isSignUp && (
                  <a className="text-xs font-black uppercase tracking-widest text-primary hover:text-[#10c910] hover:underline" href="#">Forgot?</a>
                )}
              </div>

              <button 
                className="mt-4 flex h-16 w-full items-center justify-center rounded-2xl bg-primary px-6 text-sm font-black uppercase tracking-[0.2em] text-[#0d1b0d] shadow-2xl shadow-primary/20 hover:bg-[#10c910] transition-all transform active:scale-[0.98]" 
                type="submit"
              >
                {isSignUp ? 'Create Cosmic Account' : 'Log In Securely'}
              </button>
            </form>

            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Or continue with</span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#cfe7cf] dark:border-gray-800 bg-white dark:bg-[#112211] px-4 text-xs font-black uppercase tracking-widest text-[#0d1b0d] dark:text-white hover:bg-gray-50 dark:hover:bg-[#1a2e1a] transition-all">
                <img src="https://www.google.com/favicon.ico" className="size-4" alt="Google" />
                <span>Google</span>
              </button>
              <button className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#cfe7cf] dark:border-gray-800 bg-white dark:bg-[#112211] px-4 text-xs font-black uppercase tracking-widest text-[#0d1b0d] dark:text-white hover:bg-gray-50 dark:hover:bg-[#1a2e1a] transition-all">
                <span className="material-symbols-outlined text-lg">brand_awareness</span>
                <span>Apple</span>
              </button>
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs font-bold text-gray-500">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-primary hover:underline font-black uppercase tracking-widest"
                >
                  {isSignUp ? 'Log In' : 'Sign Up Free'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
