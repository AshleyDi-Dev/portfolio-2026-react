import { Link, NavLink } from 'react-router-dom'

export default function Nav({ menuOpen, onToggleMenu }) {
  return (
    <nav>
      <span className="nav-name"><Link to="/">Ashley DiBuduo</Link></span>
      <ul className="nav-links">
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        onClick={onToggleMenu}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
