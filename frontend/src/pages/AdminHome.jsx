const AdminHome = () => {
  const stats = [
    { label: 'Total Revenue', value: '$12,845', change: '+12.5%', icon: '💰', color: '#34d399' },
    { label: 'New Bookings', value: '48', change: '+8.2%', icon: '📅', color: '#fbbf24' },
    { label: 'Active Customers', value: '1,204', change: '+18.1%', icon: '👥', color: '#6c63ff' },
    { label: 'Conversion Rate', value: '3.2%', change: '-0.4%', icon: '📈', color: '#60a5fa' },
  ]

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-audiowide text-white mb-2 uppercase">Dashboard <span className="text-[#6c63ff]">Overview</span></h2>
        <p className="text-[#888899] text-sm">Welcome back, Yohan. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#111118] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
              >
                {stat.icon}
              </div>
              <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-[#34d399]' : 'text-[#fb7185]'}`}>
                {stat.change}
              </span >
            </div>
            <h3 className="text-[#888899] text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
            <p className="text-2xl font-audiowide text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Analytics Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#111118] border border-white/5 rounded-2xl p-8 h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="font-audiowide text-[#888899] uppercase tracking-[0.2em]">Traffic Analytics Chart</p>
          <p className="text-xs text-[#444455] mt-4 uppercase font-bold tracking-widest">Integrating D3.js / Recharts...</p>
        </div>
        <div className="bg-[#111118] border border-white/5 rounded-2xl p-8 h-[400px] flex flex-col overflow-hidden">
          <h3 className="font-audiowide text-white text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Recent Bookings</h3>
          <div className="space-y-4 flex-1 overflow-auto pr-2 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold">C{i}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white truncate uppercase">Customer #{1024 + i}</p>
                  <p className="text-[10px] text-[#888899]">Apex Runner · $145.00</p>
                </div>
                <span className="text-[10px] font-bold text-[#34d399] uppercase">Paid</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
