import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_OFFSET = 72

/*
 * Shared case-study chrome:
 *  - fixed back-link nav (reuses global nav styles)
 *  - consolidated sidebar TOC (.cs-toc) built from `sections`
 *  - fade-in IntersectionObserver (adds .visible to .fade-in)
 *  - scroll-spy: hides the TOC over the hero, highlights the active section
 *
 * Replaces the two inline <script> blocks every original case study repeated.
 */
export default function CaseStudyLayout({ heroId = 'cs-pg1', sections = [], children }) {
  const rootRef = useRef(null)
  const fabRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [tocVisible, setTocVisible] = useState(false)
  const [activeId, setActiveId] = useState(sections[0]?.id)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Fade-in on scroll
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') })
      },
      { threshold: 0.15 }
    )
    root.querySelectorAll('.fade-in').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // TOC visibility (hidden while the hero is on screen)
  useEffect(() => {
    const hero = document.getElementById(heroId)
    if (!hero) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setTocVisible(!e.isIntersecting)),
      { threshold: 0.1 }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [heroId])

  // Active section highlight
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id) })
      },
      { threshold: 0.4 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sections])

  const handleTocClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  // Mobile TOC menu: close on outside click, close on Escape (return focus to the FAB, no trap)
  useEffect(() => {
    if (!mobileMenuOpen) return
    const handlePointerDown = (e) => {
      if (mobileMenuRef.current?.contains(e.target) || fabRef.current?.contains(e.target)) return
      setMobileMenuOpen(false)
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        fabRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <div className="cs-root" ref={rootRef}>
      <nav aria-label="Case study navigation">
        <span className="nav-name"><Link to="/">Ashley DiBuduo</Link></span>
        <Link to="/projects" className="nav-back">← Back to Projects</Link>
      </nav>

      <nav className={`cs-toc${tocVisible ? ' is-visible' : ''}`} aria-label="Table of contents">
        <ul className="cs-toc-list">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`cs-toc-link${activeId === s.id ? ' is-active' : ''}`}
                onClick={(e) => handleTocClick(e, s.id)}
              >
                <span className="cs-toc-pip"></span>
                <span className="cs-toc-label">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {tocVisible && (
        <button
          ref={fabRef}
          type="button"
          className={`cs-toc-fab${mobileMenuOpen ? ' is-open' : ''}`}
          aria-label={mobileMenuOpen ? 'Close section menu' : 'Open section menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="cs-toc-mobile-menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="14" y2="17" />
          </svg>
        </button>
      )}

      {mobileMenuOpen && (
        <nav
          id="cs-toc-mobile-menu"
          ref={mobileMenuRef}
          className="cs-toc-mobile-menu"
          aria-label="Table of contents"
        >
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={activeId === s.id ? 'is-active' : ''}
                  onClick={(e) => handleTocClick(e, s.id)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {children}
    </div>
  )
}
