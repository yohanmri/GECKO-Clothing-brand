import techDetail from '../../assets/images/tech-detail.png'

const Benefits = () => {
  return (
    <section className="py-32 bg-black text-white rounded-tr-[120px] rounded-bl-[120px] mx-4 md:mx-10 my-24 relative overflow-hidden">
      {/* Texture background */}
      <div className="absolute inset-0 opacity-20">
        <img src={techDetail} alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="font-audiowide text-5xl md:text-7xl text-white mb-8 tracking-widest uppercase leading-[1.1]">
            Engineered <br /> <span className="text-[#E17F1D]">For Peak</span> <br /> Performance
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-lg leading-relaxed mt-8">
            GECKO apparel is precision-crafted using aerospace-grade breathable fabrics. 
            Every stitch is designed to stretch, breathe, and move seamlessly with your body during the hardest ascents.
          </p>
          <div className="flex flex-wrap gap-6 mt-12">
            <button className="font-audiowide text-xs tracking-widest bg-[#E17F1D] text-black px-10 py-5 rounded-full hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95">
              Explore Technology
            </button>
            <button className="font-audiowide text-xs tracking-widest bg-transparent text-white px-10 py-5 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95">
              Sustainability
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
           <div className="bg-[#111111]/80 backdrop-blur-md p-10 rounded-tr-[50px] rounded-bl-[50px] border border-gray-800 hover:border-[#E17F1D] transition-all duration-500 hover:-translate-y-2 group">
             <h4 className="font-audiowide text-6xl text-[#E17F1D] mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">01</h4>
             <p className="font-audiowide text-sm uppercase tracking-wider mb-4 text-white">Hyper-Breathable</p>
             <p className="font-sans text-sm text-gray-400 leading-relaxed">Advanced moisture-wicking tech that keeps you perfectly dry under extreme loads.</p>
           </div>
           <div className="bg-[#111111]/80 backdrop-blur-md p-10 rounded-tr-[50px] rounded-bl-[50px] border border-gray-800 mt-0 sm:mt-20 hover:border-[#E17F1D] transition-all duration-500 hover:-translate-y-2 group">
             <h4 className="font-audiowide text-6xl text-[#E17F1D] mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">02</h4>
             <p className="font-audiowide text-sm uppercase tracking-wider mb-4 text-white">Ultra-Durable</p>
             <p className="font-sans text-sm text-gray-400 leading-relaxed">Reinforced ultra-seams engineered to withstand high-tensile sports movements.</p>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
