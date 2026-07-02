import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { all, filterDescriptions } from '../data/projects.js'

import { RESUME } from '../data/site.js'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'dev', label: 'AI & Automation' },
  { key: 'pm', label: 'Product Thinking' },
  { key: 'ex', label: 'Delivery & Execution' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const isVisible = (cat) => active === 'all' || cat.includes(active)

  return (
    <div className="page-projects">
      <Seo
        title="Projects | Ashley DiBuduo"
        description="Explore product, UX, and project management case studies showcasing user-centered design, cross-functional collaboration, and end-to-end digital delivery."
        url="https://ashleydibuduo.ca/projects"
        ogDescription="A collection of product, UX, and project delivery case studies showcasing problem-solving, strategy, and execution."
        image="https://ashleydibuduo.ca/images/og/casestudy-firewatchpreview.png"
        imageAlt="Ashley DiBuduo Case Studies"
        twitterDescription="Explore product, UX, and project delivery case studies focused on real-world problem solving."
      />

      {/* PAGE HEADER */}
      <section className="page-header">
        <div>
          <div className="page-label">My Work</div>
          <h1>Some I managed.<br />Some I <span>built.</span><br />A few I did both.</h1>
        </div>
        <div className="page-header-right">
          <span className="project-count">07</span>
          <span className="project-count-label">Projects & counting</span>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filter-tabs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${active === f.key ? ' active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="filter-intro">Here's how I think and what I ship.</span>
      </div>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className={`filter-description${active === 'all' ? ' hidden' : ''}`}>
          {active === 'all' ? '' : filterDescriptions[active]}
        </div>
        <div className="projects-grid">
          {all.map((p) => (
            <ProjectCard key={p.to} {...p} showMeta hidden={!isVisible(p.category)} />
          ))}

          <div className="placeholder-card">
            <div className="placeholder-icon">⚡</div>
            <p className="placeholder-text">More projects coming soon</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta">
        <div>
          <h2>Like what you <span>see?</span></h2>
          <p>Whether you're looking for a product thinker, a builder, or both — I'd love to talk about what we could do together.</p>
        </div>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Let's Talk</Link>
          <a href={RESUME} className="btn-secondary">Download CV</a>
        </div>
      </section>
    </div>
  )
}
