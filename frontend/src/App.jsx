import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LayoutAdmin from './components/layout/LayoutAdmin'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminHome from './pages/AdminHome'

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Navigate to="/collection/women" replace />} />
          <Route path="collection/:category" element={<Collection />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminHome />} />
          <Route path="bookings" element={<div className="p-10 font-audiowide uppercase tracking-widest text-gray-500">Bookings Module</div>} />
          <Route path="products" element={<div className="p-10 font-audiowide uppercase tracking-widest text-gray-500">Products Module</div>} />
          <Route path="promotions" element={<div className="p-10 font-audiowide uppercase tracking-widest text-gray-500">Promotions Module</div>} />
          <Route path="customers" element={<div className="p-10 font-audiowide uppercase tracking-widest text-gray-500">Customers Module</div>} />
          <Route path="revenue" element={<div className="p-10 font-audiowide uppercase tracking-widest text-gray-500">Revenue Module</div>} />
          <Route path="settings" element={<div className="p-10 font-audiowide uppercase tracking-widest text-gray-500">Settings Module</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
