import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Reset scroll position on every route change (and after hash nav is handled). */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
