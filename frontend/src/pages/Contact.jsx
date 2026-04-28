const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="border-l-8 border-black pl-8 mb-12">
              <h1 className="font-audiowide text-6xl text-black uppercase leading-none tracking-tighter">
                Get in <span className="text-gecko-orange">Touch</span>
              </h1>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-audiowide text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">The Lab</h3>
                <p className="text-black font-medium leading-relaxed">
                  1024 Precision Way, Suite 400<br />
                  Tech District, Silicon Valley<br />
                  California, 94025
                </p>
              </div>

              <div>
                <h3 className="font-audiowide text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Direct Support</h3>
                <p className="text-black font-medium leading-relaxed">
                  support@geckosports.com<br />
                  +1 (888) GECKO-LAB
                </p>
              </div>

              <div>
                <h3 className="font-audiowide text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Socials</h3>
                <div className="flex gap-4 mt-2">
                  {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                    <a key={social} href="#" className="font-audiowide text-[10px] uppercase tracking-widest text-black hover:text-gecko-orange transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-gray-50 p-12 lg:p-20 border border-gray-100">
            <h2 className="font-audiowide text-3xl text-black uppercase mb-12 tracking-tighter">
              Inquiry Form
            </h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-audiowide text-[10px] uppercase tracking-widest text-gray-400 mb-2 pl-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="bg-transparent border-b-2 border-gray-200 py-4 px-4 font-medium focus:outline-none focus:border-gecko-orange transition-colors text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-audiowide text-[10px] uppercase tracking-widest text-gray-400 mb-2 pl-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@email.com"
                    className="bg-transparent border-b-2 border-gray-200 py-4 px-4 font-medium focus:outline-none focus:border-gecko-orange transition-colors text-black"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-audiowide text-[10px] uppercase tracking-widest text-gray-400 mb-2 pl-4">Inquiry Type</label>
                <select className="bg-transparent border-b-2 border-gray-200 py-4 px-4 font-medium focus:outline-none focus:border-gecko-orange transition-colors text-black appearance-none">
                  <option>General Support</option>
                  <option>Press Inquiry</option>
                  <option>Partnerships</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-audiowide text-[10px] uppercase tracking-widest text-gray-400 mb-2 pl-4">Message</label>
                <textarea 
                  rows="4"
                  placeholder="How can we help your ascent?"
                  className="bg-transparent border-b-2 border-gray-200 py-4 px-4 font-medium focus:outline-none focus:border-gecko-orange transition-colors text-black resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-black text-white font-audiowide text-xs uppercase tracking-[0.3em] hover:bg-gecko-orange transition-all duration-500 shadow-xl">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
