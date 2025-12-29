
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    promo: true
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-10 text-gray-500 text-sm font-bold uppercase tracking-widest">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-white">Settings</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="sticky top-28 space-y-6">
            {/* User Mini Profile */}
            <div className="p-6 rounded-3xl bg-card-dark border border-white/5 shadow-2xl flex items-center gap-4">
              <div 
                className="size-14 rounded-2xl bg-cover bg-center ring-2 ring-primary/20" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFvFQwKmDiTGvO3oDqwf_sWwcI3IWjZxSky-En8kP4NKSIPM13on9D6_ixDu_OMP93tpveQbdlDf0gRJRZFsqjAj6sDdONkUShtQFRu8F9xJjf7ZYzav45Rhb5JLrZBMqQbF6BTnBHauzBhq6auYrBYx1T6UKx_g2VXPupURZY_k0KtyN1PXSJhynvyX9hIgTkRzE0gXB8gpEmgDgOvBIp_W-ty15JQJNtZJfXybAqaqjAqIjG-bIzcebD95r7lsX9Hsc_2NrYZBHc')" }} 
              />
              <div className="overflow-hidden">
                <h4 className="text-white font-black truncate">Alex Doe</h4>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  <p className="text-[10px] font-black uppercase tracking-widest">Verified Player</p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="p-2 rounded-3xl bg-card-dark border border-white/5 shadow-2xl space-y-1">
              {[
                { label: 'My Profile', icon: 'person', active: true },
                { label: 'Notifications', icon: 'notifications', active: false },
                { label: 'Security', icon: 'lock', active: false },
                { label: 'Legal & Compliance', icon: 'description', active: false },
              ].map((item, i) => (
                <button 
                  key={i} 
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                    item.active 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  <span className="text-sm font-black uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-xl">volunteer_activism</span>
                <h3 className="text-xs font-black text-white uppercase tracking-widest">Responsible Play</h3>
              </div>
              <p className="text-[10px] text-gray-500 font-bold leading-relaxed mb-4">Set your limits and play responsibly. We are here to help.</p>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View Guidelines</button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-10">
          <header>
            <h1 className="text-5xl font-black tracking-tighter text-white mb-2">Settings</h1>
            <p className="text-gray-400">Manage your personal information, notification preferences, and account security.</p>
          </header>

          {/* Section 1: Personal Info */}
          <section className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <div>
                <h2 className="text-xl font-black text-white">Personal Information</h2>
                <p className="text-xs font-bold text-gray-500">Update your identity and contact details.</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Identity Verified</span>
              </div>
            </div>

            <div className="p-8 space-y-10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="relative group cursor-pointer">
                  <div 
                    className="size-32 rounded-3xl bg-cover bg-center border-4 border-background-dark shadow-2xl group-hover:opacity-80 transition-all duration-300"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFvFQwKmDiTGvO3oDqwf_sWwcI3IWjZxSky-En8kP4NKSIPM13on9D6_ixDu_OMP93tpveQbdlDf0gRJRZFsqjAj6sDdONkUShtQFRu8F9xJjf7ZYzav45Rhb5JLrZBMqQbF6BTnBHauzBhq6auYrBYx1T6UKx_g2VXPupURZY_k0KtyN1PXSJhynvyX9hIgTkRzE0gXB8gpEmgDgOvBIp_W-ty15JQJNtZJfXybAqaqjAqIjG-bIzcebD95r7lsX9Hsc_2NrYZBHc')" }} 
                  />
                  <div className="absolute -bottom-2 -right-2 p-2.5 bg-primary rounded-xl text-black shadow-xl flex items-center justify-center ring-4 ring-background-dark">
                    <span className="material-symbols-outlined text-sm font-black">edit</span>
                  </div>
                </div>

                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">First Name</label>
                    <input className="w-full bg-background-dark/50 border border-white/5 rounded-xl p-4 text-white text-sm font-bold focus:border-primary focus:outline-none transition-all" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Last Name</label>
                    <input className="w-full bg-background-dark/50 border border-white/5 rounded-xl p-4 text-white text-sm font-bold focus:border-primary focus:outline-none transition-all" defaultValue="Doe" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">mail</span>
                      <input className="w-full pl-12 bg-background-dark/50 border border-white/5 rounded-xl p-4 text-white text-sm font-bold focus:border-primary focus:outline-none transition-all" defaultValue="alex.doe@example.com" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary">check_circle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/[0.02] border-t border-white/5 flex justify-end">
              <button className="px-10 py-4 bg-primary text-black font-black text-sm rounded-2xl hover:bg-green-400 transition-all shadow-xl shadow-primary/20">
                SAVE CHANGES
              </button>
            </div>
          </section>

          {/* Section 2: Notifications */}
          <section className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-white/5">
              <h2 className="text-xl font-black text-white">Notification Preferences</h2>
              <p className="text-xs font-bold text-gray-500">Choose how you want to receive lottery updates.</p>
            </div>
            <div className="divide-y divide-white/5">
              {[
                { id: 'email', label: 'Email Notifications', desc: 'Receive lottery results and account updates.', icon: 'email' },
                { id: 'sms', label: 'SMS Alerts', desc: 'Get instant win notifications via text.', icon: 'sms' },
                { id: 'promo', label: 'Promotional Offers', desc: 'Be the first to know about special jackpots.', icon: 'campaign' },
              ].map((item) => (
                <div key={item.id} className="p-8 flex items-center justify-between group hover:bg-white/[0.01] transition-colors">
                  <div className="flex gap-6">
                    <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">{item.label}</h3>
                      <p className="text-xs text-gray-500 font-bold">{item.desc}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleNotification(item.id as keyof typeof notifications)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${notifications[item.id as keyof typeof notifications] ? 'bg-primary' : 'bg-white/10'}`}
                  >
                    <span className={`inline-block size-6 transform rounded-full bg-white transition-transform duration-300 ${notifications[item.id as keyof typeof notifications] ? 'translate-x-7' : 'translate-x-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Legal & Compliance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Terms & Conditions', desc: 'Rules regarding account usage and claims.', icon: 'gavel' },
              { label: 'Privacy Policy', desc: 'How we protect and store your personal data.', icon: 'policy' },
            ].map((card, i) => (
              <div key={i} className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl p-8 group hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-600 group-hover:text-primary transition-colors">open_in_new</span>
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">{card.label}</h3>
                <p className="text-xs text-gray-500 font-bold leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex justify-center pt-10 pb-20">
            <button className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors text-xs font-black uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-sm">logout</span>
              Sign out of all devices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
