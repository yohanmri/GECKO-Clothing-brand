const Newsletter = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-audiowide text-[20vw] text-gray-50 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
        ASCENT ASCENT ASCENT
      </div>

      <div className="max-w-[1400px] mx-auto px-10 relative z-10 text-center">
        <h2 className="font-audiowide text-5xl md:text-8xl text-black mb-12 tracking-tighter uppercase leading-none">
          Join the <br /> <span className="text-[#E17F1D]">Ascent</span>
        </h2>
        <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Be the first to know about new collections, exclusive gear drops, and performance insights from the GECKO lab.
        </p>
        
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-1 bg-gray-100 border-2 border-transparent px-8 py-5 rounded-full font-audiowide text-sm tracking-widest focus:outline-none focus:border-[#E17F1D] transition-all duration-300"
          />
          <button className="bg-black text-white px-10 py-5 rounded-full font-audiowide text-sm tracking-widest hover:bg-[#E17F1D] transition-all duration-300 hover:scale-105 active:scale-95">
            SUBSCRIBE
          </button>
        </form>
        
        <p className="mt-8 font-sans text-xs text-gray-400 uppercase tracking-widest">
          By subscribing, you agree to our <span className="underline cursor-pointer hover:text-black">Privacy Policy</span>.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
