import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'
import logo from '../../assets/images/logo.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' },
  { name: 'Gift Cards', path: '/gift-cards' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-none">

      {/* ─── TOP THIN LINE (Figma Requirement) ─── */}
      <div className="w-full h-[16px] bg-black absolute top-0 left-0" />

      {/*
       * ─── TOP-LEFT SHAPE (Logo Block) ───────────────────────────────────
       * Fixed pixel width: Locks the shape so it never stretches or squishes.
       */}
      <div
        className="absolute top-0 left-0 bg-black pointer-events-none"
        style={{
          width: '130px',
          height: '58px',
          borderRadius: '0 0 48px 0',
        }}
      />

      {/*
       * ─── TOP-RIGHT NAV BAR ───────────────────────────────────────────────
       * Fixed pixel width: Keeps the text gap identical on all screens, 
       * only the middle empty space (the thin line) will stretch/shrink.
       */}
      <div
        className="absolute top-0 right-0 bg-black flex items-center justify-end pointer-events-auto"
        style={{
          width: '750px',
          height: '48px',
          /* Sharp thorn diagonal on the left edge */
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 48px 100%)',
        }}
      >
        <nav className="hidden md:flex items-center gap-12 pr-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-audiowide text-[0.65rem] tracking-widest uppercase whitespace-nowrap transition-colors duration-200 ${isActive ? 'text-[#E17F1D]' : 'text-white hover:text-[#E17F1D]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

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
       * ─── LOGO ────────────────────────────────────────────────────────────
       * Sits on top of the top-left black shape, bleeds slightly above
       */}
      <div
        className="absolute pointer-events-auto transition-all duration-300 left-[12px] top-[-16px] md:left-[60px] md:top-[-32px]"
        style={{ zIndex: 60 }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="GECKO"
            className="w-auto object-contain transition-all duration-300 h-[100px] md:h-[200px]"
          />
        </Link>
      </div>

      {/* ─── MOBILE DROPDOWN ─── */}
      <div className={`absolute top-[48px] w-full bg-black overflow-hidden transition-all duration-300 pointer-events-auto md:hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-8 py-3 font-audiowide text-sm tracking-widest uppercase transition-colors duration-200 ${isActive ? 'text-[#E17F1D]' : 'text-white hover:text-[#E17F1D]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
