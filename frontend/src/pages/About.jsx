import techDetail from '../assets/images/tech-detail.png'

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="w-full lg:w-1/2">
            <div className="border-l-8 border-black pl-8 mb-8">
              <h1 className="font-audiowide text-6xl text-black uppercase leading-none tracking-tighter">
                The <span className="text-gecko-orange">Vision</span>
              </h1>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-medium">
              GECKO was born at the intersection of aerospace engineering and high-altitude endurance. Founded in 2024, our mission has always been clear: to create athletic gear that doesn't just support movement, but enhances it.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We named ourselves after the Gecko—nature's most efficient climber. Our fabrics utilize biomimetic technology, mimicking the adaptive grip and lightweight resilience of the natural world's greatest athletes.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="font-audiowide text-4xl text-black">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-audiowide mt-2">Sustainable Materials</p>
              </div>
              <div>
                <p className="font-audiowide text-4xl text-black">0.4x</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-audiowide mt-2">Lighter than standard tech</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 aspect-square bg-gray-100 overflow-hidden group">
            <img 
              src={techDetail} 
              alt="GECKO Lab" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="p-10 bg-black text-white">
            <h3 className="font-audiowide text-2xl uppercase mb-6 tracking-tighter">Precision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every seam is laser-cut and ultrasonically welded. We remove the friction of standard apparel, allowing you to focus entirely on the ascent.
            </p>
          </div>
          <div className="p-10 bg-gecko-orange text-white">
            <h3 className="font-audiowide text-2xl uppercase mb-6 tracking-tighter">Endurance</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Tested in the Swiss Alps and the Gobi Desert. GECKO gear is engineered to maintain thermal homeostasis under the most extreme conditions.
            </p>
          </div>
          <div className="p-10 bg-gray-100 text-black">
            <h3 className="font-audiowide text-2xl uppercase mb-6 tracking-tighter">Ethos</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We believe in the relentless pursuit of peak performance. GECKO isn't just a brand—it's equipment for those who refuse to stay at sea level.
            </p>
          </div>
        </div>

        {/* Banner */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
           <div className="absolute inset-0 opacity-30 grayscale mix-blend-overlay">
              <img src={techDetail} alt="Background" className="w-full h-full object-cover" />
           </div>
           <div className="relative z-10 text-center">
              <h2 className="font-audiowide text-5xl md:text-7xl text-white uppercase leading-none tracking-tighter mb-8">
                Built for the <br /> <span className="text-gecko-orange">Ascent.</span>
              </h2>
              <button className="px-12 py-5 bg-white text-black font-audiowide text-xs uppercase tracking-widest hover:bg-gecko-orange hover:text-white transition-all duration-300">
                Explore Technology
              </button>
           </div>
        </div>

      </div>
    </div>
  )
}

export default About
