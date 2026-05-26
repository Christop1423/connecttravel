'use client';

import { Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';

export default function AgentDashboard() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-[#1e2937] border-r border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center text-xl">🌍</div>
          <h1 className="text-2xl font-bold">ConnectTravel</h1>
        </div>
        
        <nav className="space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-sky-500/10 text-sky-400 rounded-xl font-medium">Dashboard</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Bookings</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Clients</a>
          <a href="/supplier" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Supplier Portal</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Reports</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Agent Dashboard</h2>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            {[
              { label: "Total Revenue", value: "$48,230", icon: DollarSign, change: "+12%" },
              { label: "Bookings", value: "142", icon: Users, change: "+8%" },
              { label: "Active Trips", value: "67", icon: Calendar, change: "+5%" },
              { label: "Commission", value: "$6,840", icon: TrendingUp, change: "+18%" },
            ].map((item, i) => (
              <div key={i} className="bg-[#1e2937] p-6 rounded-2xl border border-gray-800">
                <item.icon className="w-8 h-8 text-sky-400 mb-4" />
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-4xl font-semibold mt-2">{item.value}</p>
                <p className="text-emerald-400 text-sm mt-2">{item.change} this month</p>
              </div>
            ))}
          </div>

          {/* Booking Pipeline */}
          <div className="bg-[#1e2937] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6">Booking Pipeline</h3>
            <div className="grid grid-cols-4 gap-4">
              {['Pending', 'Confirmed', 'In Progress', 'Completed'].map((status, i) => (
                <div key={i} className="bg-[#0f172a] p-5 rounded-xl border border-gray-700">
                  <div className="uppercase text-xs tracking-widest text-gray-400 mb-3">{status}</div>
                  <div className="space-y-3">
                    {[1,2].map(n => (
                      <div key={n} className="bg-gray-900 p-4 rounded-lg text-sm">
                        Booking #{1000 + i*10 + n}<br />
                        <span className="text-gray-400">Paris • 12 Jun</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
