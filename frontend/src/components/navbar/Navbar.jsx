import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'
import logo from '../../assets/images/logo.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection/women' },
  { name: 'Gift Cards', path: '/gift-cards' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

// ─── LEFT BRAND GROUP ─────────────────────────────────────────────────────
const LeftBrandGroup = () => (
  <>
    {/* Black rounded shape — fixed size, no responsive changes */}
    <div
      className="absolute top-0 left-0 bg-black pointer-events-none w-[130px]"
      style={{ height: '58px', borderRadius: '0 0 48px 0' }}
    />
    {/* Gecko Logo — fixed position and size, no responsive changes */}
    <div
      className="absolute pointer-events-auto left-[60px] top-[-32px]"
      style={{ zIndex: 60 }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="GECKO"
          className="w-auto object-contain h-[200px]"
        />
      </Link>
    </div>
  </>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isCollectionActive = location.pathname.startsWith('/collection')

  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-none">

      {/* ─── TOP THIN LINE (Figma Requirement) ─── */}
      <div className="w-full h-[16px] bg-black absolute top-0 left-0" />

      {/* ─── LEFT BRAND GROUP ─── */}
      <LeftBrandGroup />

      {/*
       * ─── TOP-RIGHT NAV BAR ───────────────────────────────────────────────
       * Responsive widths: 
       * - Mobile: 100px (just for hamburger)
       * - iPad/Tablet (md): 600px 
       * - Desktop (lg): 750px
       */}
      <div
        className="absolute top-0 right-0 bg-black flex items-center justify-end pointer-events-auto w-[100px] md:w-[600px] lg:w-[750px]"
        style={{
          height: '48px',
          /* Sharp thorn diagonal on the left edge */
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 48px 100%)',
        }}
      >
        <nav className="hidden md:flex items-center gap-6 lg:gap-12 pr-2">
          {navLinks.map((link) => {
            const isCollection = link.name === 'Collection'
            return (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => {
                  const active = isActive || (isCollection && isCollectionActive)
                  return `font-audiowide text-[0.65rem] tracking-widest uppercase whitespace-nowrap transition-colors duration-200 ${active ? 'text-[#E17F1D]' : 'text-white hover:text-[#E17F1D]'}`
                }}
              >
                {link.name}
              </NavLink>
            )
          })}

          {/* Icons */}
          <div className="flex items-center gap-8 ml-1">
            <button className="text-white hover:text-[#E17F1D] transition-colors">
              <ShoppingCart size={18} strokeWidth={1.5} />
            </button>
            <button className="text-white hover:text-[#E17F1D] transition-colors mr-6">
              <User size={18} strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 pr-8 pl-4 pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/*
       * ─── COLLECTIONS SUB-NAVBAR ─────────────────────────────────────────
       */}
      <div
        className={`absolute top-[48px] z-40 items-center justify-center bg-[#9D6864] transition-all duration-300 hidden md:flex w-[402px] right-[150px] lg:w-[452px] lg:right-[250px] ${isCollectionActive ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
          }`}
        style={{
          height: '40px',
          clipPath: 'polygon(0 0, 100% 0, calc(100% - 35px) 100%, 40px 100%)',
        }}
      >
        <div className="flex items-center gap-8 lg:gap-12 font-audiowide text-[0.65rem] tracking-widest uppercase text-white">
          <Link to="/collection/women" className="hover:text-black transition-colors">Women</Link>
          <Link to="/collection/men" className="hover:text-black transition-colors">Men</Link>
          <Link to="/collection/kids" className="hover:text-black transition-colors">Kids</Link>
          <Link to="/collection/accessories" className="hover:text-black transition-colors">Accessories</Link>
        </div>
      </div>

      {/* ─── MOBILE DROPDOWN ─── */}
      <div className={`absolute top-[48px] w-full bg-black overflow-hidden transition-all duration-300 pointer-events-auto md:hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => {
            const isCollection = link.name === 'Collection'
            return (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => {
                    const active = isActive || (isCollection && isCollectionActive)
                    return `block px-8 py-3 font-audiowide text-sm tracking-widest uppercase transition-colors duration-200 ${active ? 'text-[#E17F1D]' : 'text-white hover:text-[#E17F1D]'}`
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
