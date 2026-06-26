import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import MobileMenu from './MobileMenu.jsx'
import Footer from './Footer.jsx'

/* Shared chrome for the standard pages: fixed nav + mobile menu + sticky footer. */
export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Lock body scroll while the mobile overlay is open (replaces script.js).
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close the overlay whenever the route changes.
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <div className="site-shell">
      <Nav menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
