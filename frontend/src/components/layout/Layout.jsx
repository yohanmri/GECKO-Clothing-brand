import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
