import { Link } from 'react-router-dom'
import { business } from '../data/BusinessData'
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-oswald text-white text-xl tracking-wide">London Beauty <span className="text-brand-accent">&amp; Lash</span></Link>
        <a href={business.telLink} className="hidden md:inline-flex items-center gap-2 bg-brand-accent text-white px-4 py-2 rounded font-oswald text-sm tracking-wide hover:opacity-90 transition">
          📞 {business.phone}
        </a>
      </div>
    </nav>
  )
}
