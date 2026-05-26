'use client';

import { Package, Calendar, TrendingUp, Users } from 'lucide-react';

export default function SupplierPortal() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-[#1e2937] border-r border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-xl">🏭</div>
          <h1 className="text-2xl font-bold">ConnectTravel</h1>
        </div>
        
        <nav className="space-y-2">
          <a href="/supplier" className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl font-medium">Dashboard</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Inventory</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Bookings</a>
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Agent Dashboard</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl">Reports</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Supplier Portal</h2>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            {[
              { label: "Active Listings", value: "87", icon: Package, change: "+4" },
              { label: "Upcoming Departures", value: "24", icon: Calendar, change: "This week" },
              { label: "Total Bookings", value: "312", icon: Users, change: "+19%" },
              { label: "Revenue YTD", value: "$184k", icon: TrendingUp, change: "+22%" },
            ].map((item, i) => (
              <div key={i} className="bg-[#1e2937] p-6 rounded-2xl border border-gray-800">
                <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-4xl font-semibold mt-2">{item.value}</p>
                <p className="text-emerald-400 text-sm mt-2">{item.change}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1e2937] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6">Real-Time Inventory</h3>
            <p className="text-gray-400">Your products and availability will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
