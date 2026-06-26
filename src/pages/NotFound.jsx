import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

const RESUME = '/images/AshleyDiBuduo_APM_Resume_Portfolio.pdf'

export default function NotFound() {
  return (
    <div className="page-notfound">
      <Seo
        title="404 — Page Not Found | Ashley DiBuduo"
        description="Oops—this page doesn’t exist. Browse Ashley DiBuduo’s portfolio of product, UX, and digital project work instead."
        noindex
      />

      <main className="page-404">
        <div className="error-number" aria-hidden="true">404</div>

        <div className="content-wrapper">
          <span className="error-label">Error 404</span>
          <h1 className="error-heading">This page doesn't<br />exist. <span>Yet.</span></h1>
          <p className="error-sub">Looks like you've wandered somewhere off the map. The page you're looking for may have moved or never existed — let's get you back on track.</p>

          <div className="error-actions">
            <Link to="/" className="btn-primary">Back to Home</Link>
            <Link to="/projects" className="btn-secondary">View My Work</Link>
          </div>

          <div className="quick-links">
            <span className="quick-links-label">Or try:</span>
            <Link to="/about" className="quick-link">About</Link>
            <Link to="/skills" className="quick-link">Skills</Link>
            <Link to="/contact" className="quick-link">Contact</Link>
            <a href={RESUME} className="quick-link" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </main>
    </div>
  )
}
