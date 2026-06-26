import { NavLink } from 'react-router-dom'

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
      <button className="nav-mobile-close" onClick={onClose} aria-label="Close menu">✕</button>
      <NavLink to="/" onClick={onClose} end>Home</NavLink>
      <NavLink to="/projects" onClick={onClose}>Projects</NavLink>
      <NavLink to="/about" onClick={onClose}>About</NavLink>
      <NavLink to="/skills" onClick={onClose}>Skills</NavLink>
      <NavLink to="/contact" onClick={onClose}>Contact</NavLink>
    </div>
  )
}
