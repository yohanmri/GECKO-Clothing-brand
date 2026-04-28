const Profile = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 text-black">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-12 border-l-8 border-black pl-8">
          <h1 className="font-audiowide text-6xl text-black uppercase leading-none tracking-tighter">
            My <span className="text-gecko-orange">Profile</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <h3 className="font-audiowide text-sm uppercase tracking-widest text-gray-400 mb-6">Menu</h3>
            <div className="flex flex-col gap-2">
              <button className="px-6 py-4 text-left font-audiowide text-sm uppercase tracking-wider transition-all duration-300 bg-black text-white border-2 border-black">
                Personal Info
              </button>
              <button className="px-6 py-4 text-left font-audiowide text-sm uppercase tracking-wider transition-all duration-300 bg-transparent text-black border-2 border-gray-100 hover:border-black">
                Order History
              </button>
              <button className="px-6 py-4 text-left font-audiowide text-sm uppercase tracking-wider transition-all duration-300 bg-transparent text-black border-2 border-gray-100 hover:border-black">
                Addresses
              </button>
              <button className="px-6 py-4 text-left font-audiowide text-sm uppercase tracking-wider transition-all duration-300 bg-transparent text-black border-2 border-gray-100 hover:border-black">
                Payment Methods
              </button>
              <button className="px-6 py-4 text-left font-audiowide text-sm uppercase tracking-wider text-gray-400 transition-all duration-300 mt-8 border-2 border-transparent hover:border-red-500 hover:text-red-500">
                Sign Out
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gray-50 border border-gray-100 p-8 lg:p-12">
              <h2 className="font-audiowide text-2xl uppercase mb-8">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" defaultValue="John" className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" defaultValue="john.doe@example.com" className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black" />
                </div>
              </div>

              <button className="py-4 px-12 bg-black text-white font-audiowide uppercase tracking-widest text-sm hover:bg-gecko-orange transition-colors">
                Save Changes
              </button>
            </div>
          </main>

        </div>
      </div>
    </div>
  )
}

export default Profile
