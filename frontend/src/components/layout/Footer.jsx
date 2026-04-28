import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 mt-20">
      <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-audiowide text-5xl tracking-widest mb-6">GECKO</h2>
          <p className="font-sans text-base text-gray-400 max-w-sm leading-relaxed">
            Built for the Ascent. Premium athletic wear engineered for those who push their limits.
          </p>
        </div>
        <div>
          <h4 className="font-audiowide text-sm tracking-widest mb-8 text-[#E17F1D] uppercase">Shop</h4>
          <ul className="space-y-4 font-sans text-base text-gray-400">
            <li><Link to="/collection" className="hover:text-white transition-colors">Men's Collection</Link></li>
            <li><Link to="/collection" className="hover:text-white transition-colors">Women's Collection</Link></li>
            <li><Link to="/collection" className="hover:text-white transition-colors">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-audiowide text-sm tracking-widest mb-8 text-[#E17F1D] uppercase">Company</h4>
          <ul className="space-y-4 font-sans text-base text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-10 mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 font-sans">
        <p>&copy; {new Date().getFullYear()} GECKO Sports. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
