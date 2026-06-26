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
  const [tocVisible, setTocVisible] = useState(false)
  const [activeId, setActiveId] = useState(sections[0]?.id)

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
  }

  return (
    <div className="cs-root" ref={rootRef}>
      <nav>
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

      {children}
    </div>
  )
}
