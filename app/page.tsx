import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-[#0f172a]/90 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center text-xl">🌍</div>
            <h1 className="text-2xl font-bold">ConnectTravel</h1>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="/dashboard" className="hover:text-sky-400 transition">Agent Dashboard</Link>
            <Link href="/supplier" className="hover:text-sky-400 transition">Supplier Portal</Link>
          </div>
          <a href="https://vercel.com" target="_blank" className="bg-white text-black px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-gray-200 transition">
            Deploy on Vercel
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          B2B Travel Marketplace<br />for the Modern World
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Connecting Tour Operators with Travel Agencies and Corporate Planners worldwide.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard" className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-2xl text-lg font-semibold transition">
            Launch Agent Dashboard →
          </Link>
          <Link href="/supplier" className="border border-gray-600 hover:border-white px-8 py-4 rounded-2xl text-lg font-semibold transition">
            Supplier Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
