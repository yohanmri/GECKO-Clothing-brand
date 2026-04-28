import { Outlet, NavLink } from 'react-router-dom'

const adminLinks = [
  { name: 'Home', path: '/admin', icon: '📊' },
  { name: 'Bookings', path: '/admin/bookings', icon: '📅' },
  { name: 'Products', path: '/admin/products', icon: '🛍️' },
  { name: 'Promotions', path: '/admin/promotions', icon: '🎁' },
  { name: 'Customers', path: '/admin/customers', icon: '👥' },
  { name: 'Revenue', path: '/admin/revenue', icon: '💰' },
  { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
]

const LayoutAdmin = () => {
  return (
    <div className="flex min-h-screen bg-[#0a0a0f] text-[#f0f0f5] font-sans selection:bg-[#6c63ff]/30">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#111118] flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <h2 className="font-audiowide text-xl tracking-tighter text-white">
            GECKO <span className="text-[#6c63ff]">ADMIN</span>
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {adminLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#6c63ff] text-white shadow-lg shadow-[#6c63ff]/20' 
                    : 'text-[#888899] hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
            <div className="w-8 h-8 rounded-full bg-[#6c63ff] flex items-center justify-center text-xs font-bold">YM</div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate">Yohan M.</p>
              <p className="text-[10px] text-[#888899] truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-auto">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#111118]/50 backdrop-blur-md px-10 flex items-center justify-between sticky top-0 z-50">
          <div>
            <h1 className="text-sm font-bold text-white uppercase tracking-widest">Platform Management</h1>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-[#888899] hover:text-white relative">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#fb7185] rounded-full border border-[#111118]"></span>
            </button>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <p className="text-xs font-medium text-[#888899]">Last sync: Just now</p>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-10 flex-1 relative">
          {/* Background Glows (matching index.html) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6c63ff]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2dd4bf]/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default LayoutAdmin
