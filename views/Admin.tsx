
import React, { useState } from 'react';

type AdminTab = 'dashboard' | 'draws' | 'tickets' | 'users' | 'financials' | 'notifications' | 'content' | 'security' | 'audit';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  const renderDashboard = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', val: '$125,430', trend: '+12%', icon: 'attach_money', color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Active Players', val: '4,302', trend: '+3%', icon: 'group', color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'Current Jackpot', val: '$2.5M', trend: 'Pending', icon: 'emoji_events', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
          { label: 'Time to Close', val: '04:12:30', trend: 'Live Draw', icon: 'timer', color: 'text-black', bg: 'bg-primary' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.bg === 'bg-primary' ? 'bg-primary' : 'bg-card-dark'} p-6 rounded-3xl border border-white/5 shadow-2xl flex flex-col justify-between h-full group transition-all`}>
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${stat.bg === 'bg-primary' ? 'bg-black/10 text-black' : `${stat.bg} ${stat.color}`}`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className={`flex items-center text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${stat.bg === 'bg-primary' ? 'text-black/60' : 'text-primary bg-primary/10'}`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${stat.bg === 'bg-primary' ? 'text-black/60' : 'text-gray-500'}`}>{stat.label}</p>
              <h3 className={`text-3xl font-black tracking-tight ${stat.bg === 'bg-primary' ? 'text-black' : 'text-white'}`}>{stat.val}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card-dark rounded-3xl border border-white/5 p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">Sales Analytics</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Real-time volume tracking</p>
            </div>
          </div>
          <div className="h-[250px] w-full flex items-end gap-2">
            {[40, 60, 45, 90, 65, 80, 50, 75, 40, 95, 30, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-all rounded-t-lg" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>

        <div className="bg-card-dark rounded-3xl border border-white/5 p-8 shadow-2xl">
          <h3 className="text-lg font-black text-white tracking-tight mb-6">System Health</h3>
          <div className="space-y-6">
            {['Main Database', 'Payment API', 'Nodes'].map((s, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400">{s}</span>
                <span className="text-[10px] font-black text-primary uppercase">Operational</span>
              </div>
            ))}
            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] font-black text-gray-600 uppercase mb-2">CPU Load</p>
              <div className="w-full h-1.5 bg-background-dark rounded-full">
                <div className="w-[34%] h-full bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDraws = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Active Draws', val: '3', trend: 'Live Now', icon: 'casino', color: 'text-primary' },
          { label: 'Pending Payouts', val: '$12,450', trend: '78 Claims', icon: 'pending', color: 'text-yellow-500' },
          { label: 'Total Revenue', val: '$1.2M', trend: '+12% MoM', icon: 'payments', color: 'text-blue-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-card-dark p-6 rounded-3xl border border-white/5 flex flex-col gap-1 relative overflow-hidden group">
            <div className={`absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${stat.color}`}>
              <span className="material-symbols-outlined text-7xl">{stat.icon}</span>
            </div>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            <div className="flex items-baseline gap-3 mt-1">
              <h3 className="text-3xl font-black text-white">{stat.val}</h3>
              <span className={`text-[10px] font-black uppercase tracking-widest ${stat.color}`}>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-card-dark rounded-3xl border border-white/5 overflow-hidden flex flex-col shadow-2xl">
          <div className="p-6 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-primary text-black rounded-xl">All Draws</button>
              <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Live</button>
            </div>
            <button className="material-symbols-outlined text-gray-500">filter_list</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Draw Name</th>
                  <th className="px-6 py-4">Participants</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { id: '#8932', name: 'Mega Jackpot', pool: '$500k', sold: '14,205', status: 'Live' },
                  { id: '#8933', name: 'Weekly Draw', pool: '$50k', sold: '2,400', status: 'Scheduled' },
                  { id: '#8934', name: 'Daily Mini', pool: '$5k', sold: '856', status: 'Scheduled' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors cursor-pointer group">
                    <td className="px-6 py-5 text-[10px] font-mono font-black text-gray-600">{row.id}</td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-black text-white">{row.name}</p>
                      <p className="text-[10px] font-black text-primary uppercase">{row.pool} POOL</p>
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-gray-400">{row.sold}</td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                        row.status === 'Live' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white/5 text-gray-500 border-white/10'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-gray-600 hover:text-white transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card-dark rounded-3xl border border-primary/30 shadow-[0_0_40px_rgba(19,236,19,0.1)] overflow-hidden flex flex-col">
            <div className="h-1 bg-gradient-to-r from-primary to-transparent"></div>
            <div className="p-8 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-black text-white tracking-tight">Mega Jackpot</h4>
                  <p className="text-xs font-black text-primary uppercase tracking-[0.2em] animate-pulse flex items-center gap-2">
                    <span className="size-2 bg-primary rounded-full shadow-[0_0_8px_rgba(19,236,19,1)]"></span>
                    Drawing Live
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Pool Liquidity</p>
                  <p className="text-xl font-black text-white font-mono">$500,000</p>
                </div>
              </div>

              <div className="bg-background-dark/50 rounded-2xl p-6 border border-white/5">
                <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">
                  <span>Sales Progress</span>
                  <span className="text-primary">94%</span>
                </div>
                <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-primary w-[94%] rounded-full shadow-[0_0_15px_rgba(19,236,19,0.5)]"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-lg font-black text-white">24m 10s</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Left</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-lg font-black text-white">1,240</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Users</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 space-y-4">
                  <div className="flex items-center gap-2 text-red-500">
                    <span className="material-symbols-outlined text-lg">warning</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Restricted RNG Access</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-bold leading-relaxed">Initiating the draw will stop ticket sales and trigger the quantum random number generator.</p>
                  <button className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-red-500/20 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">lock_open</span>
                    Execute Draw #8932
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTickets = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Ticket Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Tickets Sold', val: '14,203', trend: '+5.2%', icon: 'confirmation_number', color: 'text-primary' },
          { label: 'Pending Draws', val: '842', trend: 'Stable', icon: 'hourglass_top', color: 'text-orange-400' },
          { label: 'Winning Tickets', val: '450', trend: '+2.4%', icon: 'emoji_events', color: 'text-primary' },
        ].map((stat, i) => (
          <div key={i} className="bg-card-dark p-6 rounded-3xl border border-white/5 shadow-2xl flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-4">
              <span className={`material-symbols-outlined ${stat.color} bg-white/5 p-2 rounded-xl`}>{stat.icon}</span>
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</h4>
            </div>
            <p className="text-3xl font-black text-white tracking-tight">{stat.val}</p>
            <p className={`text-[10px] font-black uppercase mt-1 ${stat.trend.includes('+') ? 'text-primary' : 'text-gray-600'}`}>
              {stat.trend} from last week
            </p>
          </div>
        ))}
      </div>

      {/* Tickets Table */}
      <div className="bg-card-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl flex flex-col">
        <div className="p-6 border-b border-white/5 bg-white/[0.01] flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="relative flex-1 w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">search</span>
            <input 
              className="w-full bg-background-dark/50 border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold text-white placeholder-gray-700 focus:border-primary outline-none transition-all" 
              placeholder="Search ID or User Email..." 
            />
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            <select className="bg-background-dark/50 border border-white/5 rounded-2xl px-4 py-3.5 text-[10px] font-black text-gray-400 uppercase tracking-widest outline-none focus:border-primary">
              <option>All Draws</option>
              <option>Mega Jackpot #404</option>
            </select>
            <button className="px-6 py-3.5 bg-primary text-black font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:bg-green-400 transition-all">
              Run Audit
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <th className="px-8 py-5">Ticket ID</th>
                <th className="px-8 py-5">User</th>
                <th className="px-8 py-5">Event</th>
                <th className="px-8 py-5">Numbers</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: '#TKT-8842', user: 'Jane Doe', email: 'jane@example.com', event: 'MegaJackpot #404', nums: [4, 12, 22, 45, 9], status: 'Winner' },
                { id: '#TKT-9102', user: 'Michael Chen', email: 'mike@example.com', event: 'Daily Draw #993', nums: [1, 18, 25, 33, 10], status: 'Pending' },
                { id: '#TKT-8801', user: 'Robert Smith', email: 'robert@example.com', event: 'MegaJackpot #403', nums: [7, 14, 21, 49, 3], status: 'Lost' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-6">
                    <span className="font-mono text-xs font-black text-gray-400">{row.id}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-[10px]">
                        {row.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-black text-white tracking-tight">{row.user}</p>
                        <p className="text-[10px] font-bold text-gray-600">{row.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs font-black text-white">{row.event}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-1.5">
                      {row.nums.map((n, idx) => (
                        <span key={idx} className={`size-7 rounded-lg flex items-center justify-center text-[10px] font-black border ${idx === 4 ? 'bg-primary text-black border-primary' : 'bg-white/5 text-gray-400 border-white/10'}`}>
                          {n < 10 ? `0${n}` : n}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                      row.status === 'Winner' ? 'bg-primary/10 text-primary border-primary/20' : 
                      row.status === 'Pending' ? 'bg-orange-400/10 text-orange-400 border-orange-400/20' : 'bg-white/5 text-gray-600 border-white/10'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </button>
                      <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-sm">block</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Showing 1-3 of 14,203 Tickets</p>
          <div className="flex gap-2">
            <button className="size-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 rounded-xl bg-primary text-black flex items-center justify-center font-black">1</button>
            <button className="size-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors">2</button>
            <button className="size-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => {
    const users = [
      { id: '#8821', name: 'John Doe', email: 'john.d@example.com', status: 'Active', kyc: 'Verified', balance: '$450.00', spent: '$1,200.00', joined: 'Oct 24, 2023' },
      { id: '#8822', name: 'Sarah Smith', email: 'sarah.s@example.com', status: 'Active', kyc: 'Verified', balance: '$2,890.50', spent: '$5,450.00', joined: 'Sep 12, 2023' },
      { id: '#8823', name: 'Mike K.', email: 'mike.k@example.com', status: 'Suspended', kyc: 'Pending', balance: '$0.00', spent: '$50.00', joined: 'Oct 29, 2023' },
      { id: '#8824', name: 'Alex Ray', email: 'alex.ray@example.com', status: 'Active', kyc: 'Verified', balance: '$12,450.00', spent: '$45,200.00', joined: 'Jan 10, 2023' },
    ];

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* User Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Players', val: '12,450', trend: '+5.2%', icon: 'group', color: 'text-primary' },
            { label: 'Active (30d)', val: '8,902', trend: '+2.1%', icon: 'bolt', color: 'text-yellow-500' },
            { label: 'Wallet Liability', val: '$1.24M', trend: 'Alert', icon: 'account_balance_wallet', color: 'text-red-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-card-dark p-6 rounded-3xl border border-white/5 shadow-2xl flex flex-col gap-1 group transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`material-symbols-outlined ${stat.color} bg-white/5 p-2 rounded-xl`}>{stat.icon}</span>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</h4>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-black text-white tracking-tight">{stat.val}</p>
                <span className={`text-[10px] font-black uppercase ${stat.trend === 'Alert' ? 'text-red-500' : 'text-primary'}`}>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-card-dark rounded-3xl border border-white/5 p-4 shadow-2xl flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px] relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">search</span>
            <input className="w-full bg-background-dark/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold text-white placeholder-gray-700 focus:border-primary outline-none transition-all" placeholder="Search by ID, Name, or Email..." />
          </div>
          <div className="flex gap-3">
            <select className="bg-background-dark/50 border border-white/5 rounded-2xl px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest outline-none focus:border-primary cursor-pointer">
              <option>All Status</option>
              <option>Active</option>
              <option>Suspended</option>
            </select>
            <button className="p-3 bg-white/5 rounded-2xl text-gray-500 hover:text-white transition-colors border border-white/5">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>

        {/* User Data Table */}
        <div className="bg-card-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  <th className="px-8 py-5">Player Profile</th>
                  <th className="px-8 py-5">Account Status</th>
                  <th className="px-8 py-5">KYC Verified</th>
                  <th className="px-8 py-5 text-right">Balance</th>
                  <th className="px-8 py-5 text-right">LTV (Spend)</th>
                  <th className="px-8 py-5">Joined</th>
                  <th className="px-8 py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((user, i) => (
                  <tr key={i} onClick={() => setSelectedUser(user)} className="hover:bg-white/[0.02] transition-colors cursor-pointer group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-primary font-black text-xs uppercase border border-white/5">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-black text-white text-sm tracking-tight">{user.name}</p>
                          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{user.id} • {user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                        user.status === 'Active' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-red-500/10 text-red-500 border-red-500/20'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                        <span className={`material-symbols-outlined text-lg ${user.kyc === 'Verified' ? 'text-primary' : 'text-yellow-500'}`}>
                          {user.kyc === 'Verified' ? 'verified' : 'pending'}
                        </span>
                        {user.kyc}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <p className="font-black text-white text-sm font-mono">{user.balance}</p>
                    </td>
                    <td className="px-8 py-6 text-right text-gray-600 font-black text-[10px] font-mono">
                      {user.spent}
                    </td>
                    <td className="px-8 py-6 text-[10px] font-black text-gray-600 uppercase">
                      {user.joined}
                    </td>
                    <td className="px-8 py-6 text-center">
                      <button className="text-gray-600 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Showing 4 of 12,450 Players</p>
            <div className="flex gap-2">
              <button className="size-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-10 rounded-xl bg-primary text-black flex items-center justify-center font-black">1</button>
              <button className="size-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors">2</button>
              <button className="size-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* User Detail Slide-over Drawer */}
        {selectedUser && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setSelectedUser(null)}></div>
            <div className="relative w-full max-w-[480px] bg-card-dark border-l border-white/5 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-500">
              <div className="p-8 border-b border-white/5 flex items-start justify-between bg-white/[0.02]">
                <div className="flex gap-5">
                  <div className="size-20 rounded-3xl bg-primary/20 flex items-center justify-center text-primary font-black text-2xl uppercase border-2 border-primary/20">
                    {selectedUser.name.split(' ').map((n:any) => n[0]).join('')}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-black text-white tracking-tight">{selectedUser.name}</h2>
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-primary/20 text-primary uppercase border border-primary/20">{selectedUser.status}</span>
                    </div>
                    <p className="text-sm font-bold text-gray-500">{selectedUser.email}</p>
                    <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Player since {selectedUser.joined}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedUser(null)} className="text-gray-600 hover:text-white transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest border border-red-500/20 transition-all">
                    <span className="material-symbols-outlined text-sm">block</span>
                    Suspend User
                  </button>
                  <button className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all">
                    <span className="material-symbols-outlined text-sm">lock_reset</span>
                    Reset Password
                  </button>
                </div>

                {/* Wallet Info */}
                <div className="bg-gradient-to-br from-background-dark to-card-dark rounded-3xl p-6 border border-white/10 shadow-xl space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-8xl text-primary">payments</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Total Liquid Balance</p>
                    <h3 className="text-4xl font-black text-white font-mono tracking-tighter">{selectedUser.balance}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase">Available</p>
                      <p className="font-black text-primary font-mono">{selectedUser.balance}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase">Bonus Credit</p>
                      <p className="font-black text-yellow-500 font-mono">$50.00</p>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 hover:bg-green-400 transition-all">
                    Adjust Balance
                  </button>
                </div>

                {/* Recent Activity Ledger */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">Recent Activity Ledger</h3>
                    <button className="text-[10px] font-black text-primary uppercase hover:underline">Full History</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { type: 'Ticket Purchase', id: '#TKT-921', date: '2 hours ago', val: '-$5.00', pos: false, icon: 'confirmation_number' },
                      { type: 'Deposit (Visa)', id: '#TX-440', date: '1 day ago', val: '+$200.00', pos: true, icon: 'add_card' },
                      { type: 'Lotto Win', id: '#WIN-102', date: '2 days ago', val: '+$50.00', pos: true, icon: 'emoji_events' },
                    ].map((act, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className={`size-10 rounded-xl flex items-center justify-center bg-white/5 ${act.pos ? 'text-primary' : 'text-gray-500'}`}>
                            <span className="material-symbols-outlined text-lg">{act.icon}</span>
                          </div>
                          <div>
                            <p className="text-xs font-black text-white">{act.type}</p>
                            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{act.id} • {act.date}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-black font-mono ${act.pos ? 'text-primary' : 'text-red-500'}`}>{act.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 bg-black/20 border-t border-white/5 mt-auto">
                <div className="flex justify-between items-center text-[10px] font-black text-gray-600 uppercase tracking-widest">
                  <span>Last IP: 192.168.1.45</span>
                  <span>Session: Secured</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderFinancials = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Financial Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Volume (24h)', val: '$45,200', trend: '12%', icon: 'payments', color: 'text-emerald-400', bg: 'bg-emerald-900/10' },
          { label: 'Pending Withdrawals', val: '12 Requests', trend: 'Action Req', icon: 'pending_actions', color: 'text-amber-500', bg: 'bg-amber-900/10' },
          { label: 'Prize Pool Balance', val: '$120,500', trend: '5%', icon: 'savings', color: 'text-emerald-400', bg: 'bg-emerald-900/10' },
          { label: 'Net Revenue', val: '$12,450', trend: '8%', icon: 'account_balance', color: 'text-emerald-400', bg: 'bg-emerald-900/10' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col p-6 rounded-2xl bg-card-dark border border-white/5 shadow-2xl group transition-all hover:border-white/10">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition-colors">{stat.icon}</span>
            </div>
            <div className="flex items-baseline gap-3 mt-auto">
              <p className="text-2xl font-black text-white tracking-tighter">{stat.val}</p>
              <div className={`flex items-center text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${stat.bg} ${stat.color}`}>
                <span className="material-symbols-outlined text-[12px] mr-0.5">{stat.trend.includes('Req') ? 'priority_high' : 'trending_up'}</span>
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Panel */}
      <div className="bg-card-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl flex flex-col">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between p-6 border-b border-white/5 gap-4 bg-white/[0.01]">
          <div className="flex items-center flex-1 gap-3 max-w-lg">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">search</span>
              <input className="w-full pl-12 pr-4 py-3 bg-background-dark/50 border border-white/5 rounded-2xl text-xs font-bold text-white placeholder-gray-700 focus:border-primary outline-none transition-all" placeholder="Search by ID, User, or Hash..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-background-dark/50 border border-white/5 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-gray-600 text-lg">calendar_today</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Oct 24, 2023</span>
            </div>
            <select className="px-4 py-3 bg-background-dark/50 border border-white/5 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-widest outline-none focus:border-primary cursor-pointer">
              <option>All Types</option>
              <option>Deposit</option>
              <option>Withdrawal</option>
              <option>Prize Payout</option>
            </select>
            <select className="px-4 py-3 bg-background-dark/50 border border-white/5 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-widest outline-none focus:border-primary cursor-pointer">
              <option>All Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Failed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                <th className="px-8 py-5">Transaction ID</th>
                <th className="px-8 py-5">User</th>
                <th className="px-8 py-5">Type</th>
                <th className="px-8 py-5 text-right">Amount</th>
                <th className="px-8 py-5">Method</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: '#TRX-88291', user: 'Jane Doe', email: 'jane.doe@example.com', type: 'Withdrawal', amount: '-$200.00', method: 'Bank Transfer', status: 'Pending', date: 'Oct 24, 14:30', avatar: 'https://picsum.photos/32/32?random=51' },
                { id: '#TRX-88290', user: 'Mark Smith', email: 'mark.s@example.com', type: 'Deposit', amount: '+$500.00', method: 'Credit Card', status: 'Success', date: 'Oct 24, 14:15', avatar: 'https://picsum.photos/32/32?random=52' },
                { id: '#TRX-88289', user: 'Alex Johnson', email: 'alex.j@example.com', type: 'Prize Payout', amount: '-$1,000.00', method: 'Wallet Balance', status: 'Success', date: 'Oct 24, 13:45', avatar: 'https://picsum.photos/32/32?random=53' },
                { id: '#TRX-88288', user: 'Sarah Lee', email: 'sarah.lee@example.com', type: 'Deposit', amount: '$50.00', method: 'Credit Card', status: 'Failed', date: 'Oct 24, 13:30', avatar: 'https://picsum.photos/32/32?random=54' },
                { id: '#TRX-88287', user: 'Dave Wilson', email: 'dave.w@example.com', type: 'Withdrawal', amount: '-$4,200.00', method: 'Crypto (ETH)', status: 'Processing', date: 'Oct 24, 13:10', avatar: 'https://picsum.photos/32/32?random=55' },
              ].map((tx, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-6">
                    <span className="text-primary font-mono text-xs font-black hover:underline cursor-pointer">{tx.id}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-cover bg-center border border-white/10" style={{ backgroundImage: `url(${tx.avatar})` }}></div>
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-white">{tx.user}</span>
                        <span className="text-[10px] font-bold text-gray-600">{tx.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-sm ${
                        tx.type === 'Withdrawal' ? 'text-amber-500' : 
                        tx.type === 'Deposit' ? 'text-emerald-500' : 'text-purple-500'
                      }`}>{
                        tx.type === 'Withdrawal' ? 'arrow_circle_up' : 
                        tx.type === 'Deposit' ? 'arrow_circle_down' : 'emoji_events'
                      }</span>
                      <span className="text-[10px] font-black uppercase text-gray-300">{tx.type}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className={`text-sm font-black font-mono ${
                      tx.status === 'Failed' ? 'text-gray-600 line-through' : 
                      tx.type === 'Deposit' ? 'text-emerald-400' : 'text-white'
                    }`}>
                      {tx.amount}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-black uppercase text-gray-500">{tx.method}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                      tx.status === 'Success' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/30' : 
                      tx.status === 'Pending' ? 'bg-amber-900/20 text-amber-500 border-amber-900/30' : 
                      tx.status === 'Processing' ? 'bg-blue-900/20 text-blue-400 border-blue-900/30' : 
                      'bg-red-900/20 text-red-500 border-red-900/30'
                    }`}>
                      {tx.status === 'Processing' && <span className="material-symbols-outlined text-[12px] animate-spin">sync</span>}
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-[10px] font-black text-gray-600 uppercase">
                    {tx.date}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      {tx.status === 'Pending' && (
                        <>
                          <button className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all">
                            <span className="material-symbols-outlined text-sm">check</span>
                          </button>
                          <button className="p-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all">
                            <span className="material-symbols-outlined text-sm">close</span>
                          </button>
                        </>
                      )}
                      <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white transition-all" title="View Details">
                        <span className="material-symbols-outlined text-sm">{tx.status === 'Failed' ? 'error_outline' : tx.status === 'Processing' ? 'link' : 'visibility'}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Showing <span className="text-white">1-5</span> of <span className="text-white">128</span> Transactions</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl border border-white/5 text-gray-500 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 disabled:opacity-50 transition-all" disabled>Previous</button>
            <button className="px-4 py-2 rounded-xl border border-white/5 text-gray-500 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Notification Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-white/5 bg-card-dark shadow-2xl group transition-all hover:border-primary/20">
          <div className="flex justify-between items-start">
            <p className="text-gray-400 text-sm font-medium leading-normal">Total Sent (This Week)</p>
            <span className="material-symbols-outlined text-primary">send</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-white tracking-light text-2xl font-bold leading-tight">12,450</p>
            <span className="inline-flex items-center text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
              12%
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-white/5 bg-card-dark shadow-2xl group transition-all hover:border-primary/20">
          <div className="flex justify-between items-start">
            <p className="text-gray-400 text-sm font-medium leading-normal">Scheduled (Upcoming)</p>
            <span className="material-symbols-outlined text-primary">schedule</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-white tracking-light text-2xl font-bold leading-tight">8</p>
            <span className="inline-flex items-center text-gray-500 text-xs font-bold bg-white/5 px-2 py-0.5 rounded-full">
              Stable
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-white/5 bg-card-dark shadow-2xl group transition-all hover:border-primary/20">
          <div className="flex justify-between items-start">
            <p className="text-gray-400 text-sm font-medium leading-normal">Avg Open Rate</p>
            <span className="material-symbols-outlined text-primary">bar_chart</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-white tracking-light text-2xl font-bold leading-tight">42%</p>
            <span className="inline-flex items-center text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
              5%
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/5 flex gap-8">
        <button className="group flex flex-col items-center justify-center border-b-[3px] border-primary text-white pb-3 pt-4 px-2">
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">All Notifications</p>
        </button>
        <button className="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-primary/50 text-gray-500 pb-3 pt-4 px-2 transition-all">
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">Scheduled</p>
        </button>
        <button className="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-primary/50 text-gray-500 pb-3 pt-4 px-2 transition-all">
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">Sent</p>
        </button>
        <button className="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-primary/50 text-gray-500 pb-3 pt-4 px-2 transition-all">
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">Drafts</p>
        </button>
      </div>

      {/* Notification Table */}
      <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-card-dark shadow-2xl flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Title</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Type</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Target Audience</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Schedule</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: '#NT-2023-001', title: 'Mega Jackpot Results', type: 'Result Announcement', target: 'All Active Users', date: 'Oct 24, 2023', time: '08:00 PM', status: 'Sent', icon: 'emoji_events', color: 'text-primary' },
                { id: '#NT-2023-045', title: 'Weekend Draw Reminder', type: 'Draw Alert', target: 'Non-Participants', date: 'Oct 28, 2023', time: '09:00 AM', status: 'Scheduled', icon: 'upcoming', color: 'text-blue-400' },
                { id: '#NT-2023-052', title: 'Halloween Promo', type: 'Promotional', target: 'VIP Segment', date: '-', time: '', status: 'Draft', icon: 'campaign', color: 'text-orange-400' },
                { id: '#NT-2023-050', title: 'System Maintenance', type: 'System Update', target: 'All Users', date: 'Oct 20, 2023', time: '02:00 AM', status: 'Sent', icon: 'warning', color: 'text-red-400' },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 ${row.color}`}>
                        <span className="material-symbols-outlined">{row.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">{row.title}</span>
                        <span className="text-[10px] font-black uppercase text-gray-600 tracking-widest">ID: {row.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-xs font-bold text-gray-400">{row.type}</td>
                  <td className="px-6 py-6 text-xs font-bold text-gray-400">{row.target}</td>
                  <td className="px-6 py-6 text-xs text-white">
                    {row.date} <br/> <span className="text-[10px] font-black uppercase text-gray-600">{row.time}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-widest border ${
                      row.status === 'Sent' ? 'bg-primary/10 text-primary border-primary/20' : 
                      row.status === 'Scheduled' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' : 'bg-white/5 text-gray-500 border-white/10'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="Analytics">
                        <span className="material-symbols-outlined text-[20px]">analytics</span>
                      </button>
                      <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/5 px-6 py-6 bg-white/[0.01]">
          <div className="text-[10px] font-black uppercase text-gray-600 tracking-widest">
            Showing <span className="text-white">1-4</span> of <span className="text-white">128</span> Campaigns
          </div>
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center rounded-xl border border-white/5 text-gray-500 hover:text-white hover:bg-white/5 disabled:opacity-50 transition-all" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl border border-white/5 text-gray-500 hover:text-white hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Security Config Sections */}
      <div className="flex flex-col gap-10">
        {/* Authentication & Access */}
        <div className="space-y-6">
          <h3 className="text-white text-xl font-bold flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">lock_person</span>
            Authentication & Access
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card: 2FA */}
            <div className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-white">Two-Factor Authentication</h4>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed">Enforce 2FA for all administrator accounts.</p>
                </div>
                <button className="relative inline-flex h-7 w-12 items-center rounded-full bg-white/10 transition-colors">
                  <span className="inline-block size-5 translate-x-1 transform rounded-full bg-gray-600 transition-transform" />
                </button>
              </div>
              <div className="p-4 bg-yellow-900/10 rounded-2xl border border-yellow-900/20 flex gap-4 items-start">
                <span className="material-symbols-outlined text-yellow-500 text-lg">warning</span>
                <p className="text-[10px] text-yellow-500 font-bold leading-relaxed uppercase tracking-widest">
                  Enabling this will log out all current active sessions except yours.
                </p>
              </div>
            </div>

            {/* Card: Password Policy */}
            <div className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-white">Password Policy</h4>
                <p className="text-xs text-gray-500 font-bold leading-relaxed">Define complexity requirements for new passwords.</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Require at least one uppercase letter', checked: true },
                  { label: 'Require at least one number', checked: true },
                  { label: 'Require at least one special character', checked: true }
                ].map((policy, i) => (
                  <label key={i} className="flex items-center gap-4 cursor-pointer group">
                    <div className={`size-6 rounded-lg border-2 flex items-center justify-center transition-all ${policy.checked ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10'}`}>
                      {policy.checked && <span className="material-symbols-outlined text-sm font-black">check</span>}
                    </div>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{policy.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Session Settings */}
        <div className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="flex-1 space-y-2">
            <h4 className="text-lg font-black text-white">Session Timeout</h4>
            <p className="text-xs text-gray-500 font-bold leading-relaxed">Automatically log out inactive users to prevent unauthorized access.</p>
          </div>
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Duration (Mins)</label>
              <input type="number" defaultValue="30" className="w-32 bg-background-dark/50 border border-white/5 rounded-xl p-4 text-white font-black text-center focus:border-primary outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Max Attempts</label>
              <input type="number" defaultValue="5" className="w-32 bg-background-dark/50 border border-white/5 rounded-xl p-4 text-white font-black text-center focus:border-primary outline-none" />
            </div>
          </div>
        </div>

        {/* Network Security */}
        <div className="space-y-6">
          <h3 className="text-white text-xl font-bold flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">hub</span>
            Network Security
          </h3>
          <div className="bg-card-dark p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-white">IP Whitelisting</h4>
                <p className="text-xs text-gray-500 font-bold">Restrict admin panel access to specific IP addresses. Enter one IP per line.</p>
              </div>
              <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">add</span>
                Add Current IP
              </button>
            </div>
            <textarea 
              className="w-full bg-background-dark/50 border border-white/5 rounded-2xl p-6 text-sm font-mono text-primary placeholder:text-gray-800 focus:border-primary outline-none resize-none h-32"
              placeholder="192.168.1.1&#10;10.0.0.1"
            />
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-xl font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">history</span>
              Recent Security Changes
            </h3>
            <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All Logs</button>
          </div>
          <div className="bg-card-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                    <th className="px-8 py-5">Security Action</th>
                    <th className="px-8 py-5">Administrator</th>
                    <th className="px-8 py-5">Date & Time</th>
                    <th className="px-8 py-5 text-right">Impact Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { action: 'Updated Password Policy', admin: 'Super Admin', time: 'Oct 24, 2023 - 14:32', status: 'Applied', color: 'text-emerald-400' },
                    { action: 'Failed Login Attempt (Blocked)', admin: 'System Engine', time: 'Oct 24, 2023 - 12:15', status: 'Warning', color: 'text-red-500' },
                    { action: 'IP Whitelist Modified', admin: 'John Doe', time: 'Oct 23, 2023 - 09:45', status: 'Applied', color: 'text-emerald-400' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 text-sm font-black text-white">{row.action}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="size-6 rounded-full bg-white/10 flex items-center justify-center text-[8px] font-black text-primary border border-primary/20">
                            {row.admin[0]}
                          </div>
                          <span className="text-xs font-bold text-gray-400">{row.admin}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-xs font-mono font-black text-gray-600">{row.time}</td>
                      <td className="px-8 py-6 text-right">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${row.status === 'Applied' ? 'bg-emerald-900/20 border-emerald-900/30' : 'bg-red-900/20 border-red-900/30'} ${row.color}`}>
                          <span className={`size-1.5 rounded-full ${row.status === 'Applied' ? 'bg-emerald-400' : 'bg-red-500'}`}></span>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAuditLogs = () => {
    const logs = [
      { id: 'log_88291', time: 'Oct 24, 14:30:05', severity: 'Critical', action: 'Winner Override', actor: 'Sarah J.', target: 'Draw #992', ip: '192.168.1.42', status: 'Red' },
      { id: 'log_88292', time: 'Oct 24, 14:15:22', severity: 'Info', action: 'System Login', actor: 'Mike R.', target: 'Admin Portal', ip: '10.0.0.55', status: 'Blue' },
      { id: 'log_88293', time: 'Oct 24, 13:50:01', severity: 'Warning', action: 'Failed Config Update', actor: 'System Bot', target: 'Global Settings', ip: 'Localhost', status: 'Amber' },
    ];

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Audit Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card-dark border border-white/5 rounded-2xl p-6 flex flex-col gap-1 shadow-2xl">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Total Actions (24h)</p>
            <div className="flex items-end justify-between">
              <p className="text-white text-2xl font-black tabular-nums">1,240</p>
              <span className="text-primary text-[10px] flex items-center gap-0.5 font-black uppercase">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
              </span>
            </div>
          </div>
          <div className="bg-card-dark border-l-4 border-l-red-500 border-white/5 rounded-2xl p-6 flex flex-col gap-1 shadow-2xl">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Critical Alerts</p>
            <div className="flex items-end justify-between">
              <p className="text-white text-2xl font-black tabular-nums">3</p>
              <span className="text-red-500 text-[10px] font-black uppercase">Attention Needed</span>
            </div>
          </div>
          <div className="bg-card-dark border border-white/5 rounded-2xl p-6 flex flex-col gap-1 shadow-2xl">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Active Admins</p>
            <div className="flex items-end justify-between">
              <p className="text-white text-2xl font-black tabular-nums">12</p>
              <div className="flex -space-x-2">
                {[1, 2].map(i => (
                  <div key={i} className="size-6 rounded-full border-2 border-card-dark bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/24/24?random=${i+50}')` }} />
                ))}
                <div className="size-6 rounded-full border-2 border-card-dark bg-white/5 flex items-center justify-center text-[8px] text-white font-black">+10</div>
              </div>
            </div>
          </div>
          <div className="bg-card-dark border border-white/5 rounded-2xl p-6 flex flex-col gap-1 shadow-2xl">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">System Health</p>
            <div className="flex items-end justify-between">
              <p className="text-primary text-2xl font-black">99.9%</p>
              <span className="text-gray-600 text-[10px] font-black uppercase">Uptime</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 p-4 rounded-3xl bg-card-dark border border-white/5 items-start lg:items-center justify-between shadow-2xl">
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">calendar_today</span>
              <input readOnly className="bg-background-dark/50 border border-white/5 text-white text-[10px] font-black uppercase rounded-xl pl-10 pr-4 py-3 cursor-pointer hover:border-primary transition-all w-64" value="Oct 24, 2023 - Oct 25, 2023" />
            </div>
            <select className="bg-background-dark/50 border border-white/5 text-white text-[10px] font-black uppercase rounded-xl px-4 py-3 cursor-pointer outline-none focus:border-primary">
              <option>All Actions</option>
              <option>User Ban</option>
              <option>Manual Payout</option>
              <option>Config Change</option>
            </select>
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-grow lg:flex-grow-0">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">search</span>
              <input className="bg-background-dark/50 border border-white/5 text-white text-xs font-bold rounded-xl pl-10 pr-4 py-3 outline-none focus:border-primary w-full lg:w-64" placeholder="Search by ID, IP, or Keyword..." />
            </div>
            <button className="flex items-center gap-2 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-green-400 transition-all shadow-xl shadow-primary/10">
              <span className="material-symbols-outlined text-sm">download</span>
              Export
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="bg-card-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-5">Timestamp</th>
                  <th className="px-8 py-5">Severity</th>
                  <th className="px-8 py-5">Action</th>
                  <th className="px-8 py-5">Actor</th>
                  <th className="px-8 py-5">Target</th>
                  <th className="px-8 py-5">IP Address</th>
                  <th className="px-8 py-5 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {logs.map((log) => (
                  <React.Fragment key={log.id}>
                    <tr 
                      onClick={() => setExpandedLog(expandedLog === log.id ? null : log.id)}
                      className={`hover:bg-white/[0.02] transition-colors group cursor-pointer border-l-4 ${expandedLog === log.id ? 'border-primary bg-primary/5' : 'border-transparent'}`}
                    >
                      <td className="px-8 py-6 font-mono text-xs text-white">{log.time}</td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          log.status === 'Red' ? 'bg-red-900/20 text-red-500 border-red-900/30' : 
                          log.status === 'Amber' ? 'bg-yellow-900/20 text-yellow-500 border-yellow-900/30' : 
                          'bg-blue-900/20 text-blue-400 border-blue-900/30'
                        }`}>
                          <span className={`size-1.5 rounded-full ${log.status === 'Red' ? 'bg-red-500' : log.status === 'Amber' ? 'bg-yellow-500' : 'bg-blue-400'}`}></span>
                          {log.severity}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-sm font-black text-white">{log.action}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="size-6 rounded-full bg-cover bg-center border border-white/10" style={{ backgroundImage: `url('https://picsum.photos/32/32?random=${log.id}')` }} />
                          <span className="text-xs font-bold text-gray-300">{log.actor}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-primary text-xs font-black uppercase tracking-widest underline decoration-primary/30 underline-offset-4">{log.target}</td>
                      <td className="px-8 py-6 font-mono text-[10px] text-gray-500">{log.ip}</td>
                      <td className="px-8 py-6 text-right text-gray-600 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">{expandedLog === log.id ? 'expand_less' : 'expand_more'}</span>
                      </td>
                    </tr>
                    {expandedLog === log.id && (
                      <tr className="bg-background-dark/30">
                        <td colSpan={7} className="px-12 py-8 border-b border-white/5 relative">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Change Payload Matrix</h4>
                              <span className="text-[10px] font-mono text-gray-600">ID: {log.id}_IMMUTABLE_NODE</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Previous State</p>
                                <div className="bg-black/40 border border-red-500/10 rounded-2xl p-6 font-mono text-xs text-red-400 leading-relaxed overflow-x-auto">
                                  {`{ "winner_id": 405, "status": "pending_verification", "payout_amount": 5000.00 }`}
                                </div>
                              </div>
                              <div className="space-y-2">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">New State</p>
                                <div className="bg-black/40 border border-primary/10 rounded-2xl p-6 font-mono text-xs text-primary leading-relaxed overflow-x-auto">
                                  {`{ "winner_id": 882, "status": "verified", "payout_amount": 5000.00, "admin_note": "Correction per ticket audit" }`}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 border-t border-white/5 bg-white/[0.01] gap-6">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
              Showing <span className="text-white">1</span> to <span className="text-white">10</span> of <span className="text-white">1,240</span> Entries
            </span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Rows per page:</span>
                <select className="bg-background-dark/50 border border-white/5 text-white text-[10px] font-black uppercase rounded-lg px-2 py-1 outline-none">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-white/5 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-white transition-all">Prev</button>
                <button className="px-4 py-2 border border-white/5 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-white transition-all">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContentManagement = () => {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Posts', val: '124', trend: '5%', icon: 'article', color: 'text-primary' },
            { label: 'Pending Review', val: '3', trend: '2 New', icon: 'pending', color: 'text-yellow-500' },
            { label: 'Published This Week', val: '12', trend: '+2', icon: 'publish', color: 'text-primary' },
          ].map((stat, i) => (
            <div key={i} className="bg-card-dark p-6 rounded-3xl border border-white/5 shadow-2xl flex flex-col gap-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`material-symbols-outlined ${stat.color} bg-white/5 p-2 rounded-xl`}>{stat.icon}</span>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</h4>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-black text-white tracking-tight">{stat.val}</p>
                <span className={`text-[10px] font-black uppercase bg-white/5 px-2 py-0.5 rounded-lg ${stat.color === 'text-yellow-500' ? 'text-yellow-500' : 'text-primary'}`}>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 p-4 rounded-3xl bg-card-dark border border-white/5 items-start lg:items-center justify-between shadow-2xl">
          <div className="relative flex-1 w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">search</span>
            <input 
              className="w-full bg-background-dark/50 border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold text-white placeholder-gray-700 focus:border-primary outline-none transition-all" 
              placeholder="Search articles by title..." 
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="bg-background-dark/50 border border-white/5 rounded-2xl px-4 py-3.5 text-[10px] font-black text-gray-400 uppercase tracking-widest outline-none focus:border-primary">
              <option>All Statuses</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
            <select className="bg-background-dark/50 border border-white/5 rounded-2xl px-4 py-3.5 text-[10px] font-black text-gray-400 uppercase tracking-widest outline-none focus:border-primary">
              <option>All Types</option>
              <option>News</option>
              <option>Blog</option>
              <option>Announcement</option>
            </select>
            <button className="p-3 bg-white/5 rounded-2xl text-gray-500 hover:text-white transition-colors border border-white/5">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>

        {/* Content Table */}
        <div className="bg-card-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-5">Article</th>
                  <th className="px-8 py-5">Type</th>
                  <th className="px-8 py-5">Author</th>
                  <th className="px-8 py-5">Last Modified</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { title: 'Jackpot Winner Announced!', excerpt: 'The grand prize of $50M has been claimed...', type: 'News', author: 'Sarah J.', modified: 'Oct 24, 2023', status: 'Published', color: 'text-primary', img: 'https://picsum.photos/64/48?random=101' },
                  { title: 'How to Play Safe', excerpt: 'Tips for responsible gaming and account security...', type: 'Guide', author: 'Mark D.', modified: 'Oct 22, 2023', status: 'Draft', color: 'text-purple-400', img: 'https://picsum.photos/64/48?random=102' },
                  { title: 'System Maintenance Update', excerpt: 'Scheduled downtime for server upgrades on Sunday...', type: 'Alert', author: 'System', modified: 'Oct 25, 2023', status: 'Scheduled', color: 'text-yellow-500', icon: 'dns' },
                  { title: 'New Game: Mega Ball', excerpt: 'Introducing our newest game with higher multipliers.', type: 'News', author: 'Sarah J.', modified: 'Oct 20, 2023', status: 'Published', color: 'text-primary', img: 'https://picsum.photos/64/48?random=103' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-background-dark flex items-center justify-center">
                          {row.img ? (
                            <img src={row.img} className="h-full w-full object-cover" alt={row.title} />
                          ) : (
                            <span className="material-symbols-outlined text-gray-600">{row.icon}</span>
                          )}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-white font-black text-sm truncate max-w-[200px]">{row.title}</span>
                          <span className="text-gray-500 text-[10px] font-bold truncate max-w-[200px]">{row.excerpt}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/5 bg-white/5 ${row.color}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-[8px] border border-primary/20">
                          {row.author[0]}
                        </div>
                        <span className="text-xs font-bold text-gray-400">{row.author}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xs font-black text-gray-600 uppercase">{row.modified}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${row.status === 'Published' ? 'bg-primary shadow-[0_0_10px_rgba(19,236,19,0.5)]' : row.status === 'Draft' ? 'bg-yellow-500' : 'bg-blue-400'}`}></span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${row.status === 'Published' ? 'text-primary' : row.status === 'Draft' ? 'text-yellow-500' : 'text-blue-400'}`}>
                          {row.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                        <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                        <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-sm">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-8 border-t border-white/5 flex items-center justify-between bg-white/[0.01]">
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Showing 1-4 of 124 Entries</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-white/5 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-white transition-all disabled:opacity-30" disabled>Previous</button>
              <button className="px-4 py-2 border border-white/5 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-white transition-all">Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 min-h-[calc(100vh-160px)]">
      {/* Admin Sidebar Navigation */}
      <aside className="lg:w-64 shrink-0 space-y-6">
        <div className="sticky top-28 space-y-6">
          <header className="p-6 rounded-3xl bg-card-dark border border-white/5 shadow-2xl">
            <h2 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Admin Console</h2>
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-2xl bg-primary flex items-center justify-center text-black">
                <span className="material-symbols-outlined font-black">shield_person</span>
              </div>
              <div>
                <p className="text-sm font-black text-white leading-tight">Admin User</p>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Root Access</p>
              </div>
            </div>
          </header>

          <nav className="p-2 rounded-3xl bg-card-dark border border-white/5 shadow-2xl space-y-1">
            {[
              { id: 'dashboard', label: 'Overview', icon: 'dashboard' },
              { id: 'draws', label: 'Draw Management', icon: 'confirmation_number' },
              { id: 'tickets', label: 'Tickets', icon: 'receipt_long' },
              { id: 'users', label: 'User Hub', icon: 'group' },
              { id: 'content', label: 'Content', icon: 'article' },
              { id: 'financials', label: 'Financials', icon: 'attach_money' },
              { id: 'notifications', label: 'Messaging', icon: 'notifications' },
              { id: 'audit', label: 'Audit Logs', icon: 'description' },
              { id: 'security', label: 'Security', icon: 'encrypted' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as AdminTab)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                  activeTab === item.id 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center gap-4">
            <span className="material-symbols-outlined text-gray-700 text-4xl">cloud_sync</span>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Next Sync: 12:00 UTC</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 space-y-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              {activeTab === 'dashboard' ? 'Platform Overview' : 
               activeTab === 'draws' ? 'Draw Management' : 
               activeTab === 'tickets' ? 'Ticket Hub' : 
               activeTab === 'users' ? 'User Hub' : 
               activeTab === 'content' ? 'Content Management' :
               activeTab === 'financials' ? 'Financial Hub' : 
               activeTab === 'notifications' ? 'Notification Hub' : 
               activeTab === 'audit' ? 'System Audit' : 'Security Engine'}
            </h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-2">
              Management Interface • Secured Node
            </p>
          </div>
          <div className="flex gap-4">
            {activeTab === 'content' ? (
              <button className="bg-primary hover:bg-green-400 text-black px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all shadow-xl shadow-primary/20 active:scale-95">
                <span className="material-symbols-outlined text-[18px] font-black">add</span>
                Create New Post
              </button>
            ) : (
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Export Report
              </button>
            )}
            <button className="px-6 py-3 bg-primary text-black rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-green-400 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm font-black">save</span>
              Save Changes
            </button>
          </div>
        </header>

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'draws' && renderDraws()}
        {activeTab === 'tickets' && renderTickets()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'financials' && renderFinancials()}
        {activeTab === 'notifications' && renderNotifications()}
        {activeTab === 'content' && renderContentManagement()}
        {activeTab === 'audit' && renderAuditLogs()}
        {activeTab === 'security' && renderSecurity()}
      </div>
    </div>
  );
};

export default Admin;
