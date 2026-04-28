const GiftCards = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-12 border-l-8 border-black pl-8">
          <h1 className="font-audiowide text-6xl text-black uppercase leading-none tracking-tighter">
            Gift <span className="text-gecko-orange">Cards</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl font-medium tracking-tight">
            Give the gift of elite performance. GECKO digital gift cards are delivered instantly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Gift Card Visual */}
          <div className="flex-1 bg-black p-12 aspect-[16/9] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-gecko-orange font-audiowide text-4xl uppercase tracking-widest mb-4">GECKO</h2>
              <p className="text-white font-audiowide tracking-[0.3em] uppercase text-sm">Digital Gift Card</p>
            </div>
            <div className="absolute bottom-6 right-8">
              <div className="w-16 h-10 border border-gray-700 rounded-md bg-gray-900 flex items-center justify-center opacity-50">
                <span className="text-white font-mono text-[10px]">CHIP</span>
              </div>
            </div>
          </div>

          {/* Form / Options */}
          <div className="flex-1 lg:pl-12">
            <h3 className="font-audiowide text-xl uppercase mb-6">Select Amount</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {['$50', '$100', '$150', '$200', '$250', '$500'].map((amount) => (
                <button 
                  key={amount}
                  className="py-4 border-2 border-gray-100 font-audiowide text-lg transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  {amount}
                </button>
              ))}
            </div>

            <h3 className="font-audiowide text-xl uppercase mb-6">Delivery Details</h3>
            <div className="space-y-4 mb-8">
              <input 
                type="email" 
                placeholder="Recipient's Email" 
                className="w-full p-4 bg-gray-50 border border-gray-200 font-sans focus:outline-none focus:border-black"
              />
              <textarea 
                placeholder="Gift Message (Optional)" 
                rows="4"
                className="w-full p-4 bg-gray-50 border border-gray-200 font-sans focus:outline-none focus:border-black resize-none"
              ></textarea>
            </div>

            <button className="w-full py-5 bg-black text-white font-audiowide uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gecko-orange">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GiftCards
