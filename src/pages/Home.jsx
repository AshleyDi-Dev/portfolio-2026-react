import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { featured } from '../data/projects.js'

import { RESUME } from '../data/site.js'

export default function Home() {
  return (
    <div className="page-home">
      <Seo
        title="Ashley DiBuduo | Product Manager · AI & Automation | Portfolio"
        description="Product manager and builder delivering user-focused digital products, AI workflows, and automation. Explore product, UX, and AI-assisted work."
        url="https://ashleydibuduo.ca"
        ogTitle="Ashley DiBuduo | Product Manager · AI & Automation"
        ogDescription="Product manager and builder bridging vision and execution — through UX, AI workflows, automation, and cross-functional delivery. Explore case studies and projects."
        imageAlt="Ashley DiBuduo Product & AI Portfolio Preview"
        twitterTitle="Ashley DiBuduo | Product Manager · AI & Automation"
        twitterDescription="Product-focused portfolio showcasing UX, AI workflows, automation, and cross-functional delivery."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ashley DiBuduo',
          jobTitle: 'Product Manager',
          url: 'https://ashleydibuduo.ca',
          sameAs: [
            'https://www.linkedin.com/in/ashleydibuduo/',
            'https://github.com/AshleyDi-Dev',
          ],
        }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-label">Product Manager · AI &amp; Automation</span>
          <h1>The gap between vision and <span>done?</span><br />That's where I live.</h1>
          <p className="hero-sub">15 years in music and live events taught me one thing: you have to own the whole picture — the strategy, the details, the people, the pressure. I now apply this same approach to digital products. And I can build them myself — coding it, automating it, and working with AI.</p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-secondary">Let's Connect</Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-frame">
            <div className="photo-bg-block"></div>
            <div className="photo-accent"></div>
            <div className="photo-placeholder">
              <img src="/images/Headshot-square.png" width="868" height="1522" alt="Ashley DiBuduo" />
              <div className="photo-duotone"></div>
            </div>
            <span className="photo-label">Vancouver, BC</span>
          </div>
        </div>
      </section>

      {/* WHAT SETS ME APART */}
      <section className="wsma">
        <div className="section-label">What Sets Me Apart</div>
        <div className="wsma-grid">
          <div className="wsma-card">
            <div className="wsma-number">01</div>
            <div className="wsma-title">I build with AI — not just alongside it.</div>
            <div className="wsma-text">Two of my most recent projects — an AI agent system for Wayfair's Rugs team, and a self-initiated AI knowledge base now used department-wide — aren't proof I use AI tools. They're proof I design and ship systems with AI as the core architecture, not a productivity shortcut.</div>
          </div>
          <div className="wsma-card">
            <div className="wsma-number">02</div>
            <div className="wsma-title">I understand the full product lifecycle.</div>
            <div className="wsma-text">I spent 15 years in promotion, audience development, and lifecycle management in the music, entertainment, and live events industries. Now, I am trained in product design and development. I have worked across the entire spectrum—from product to audience and back again.</div>
          </div>
          <div className="wsma-card">
            <div className="wsma-number">03</div>
            <div className="wsma-title">I always ask why.</div>
            <div className="wsma-text">Why does this flow feel off? Why isn't this feature resonating? Why are users dropping here? This focus drives good UX — and it's how I approach everything, from the initial research conversation to the final design decision, backed by hands-on web development (HTML, CSS, JavaScript, React) so I can build the answer, not just diagnose it.</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-preview">
        <div className="section-header">
          <div>
            <div className="section-label section-label--chartreuse">Selected Work</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <Link to="/projects" className="btn-secondary btn-white">View All Work →</Link>
        </div>
        <div className="projects-grid">
          {featured.map((p) => (
            p.comingSoon ? (
              <div key="coming-soon" className="project-card project-card-vertical placeholder-card">
                <div className="project-card-image placeholder-card-image">
                  <span className="placeholder-icon">⚡</span>
                </div>
                <div className="project-card-body">
                  <div className="project-card-top">
                    <span className="project-tag placeholder-tag">{p.tag}</span>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.desc}</p>
                  </div>
                </div>
              </div>
            ) : (
              <ProjectCard key={p.to} {...p} titleAs="h3" />
            )
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <h2>Let's <span>talk.</span></h2>
        <p>Whether you're looking for someone to own a product, build something out, or a bit of both — I'd love to connect.</p>
        <div className="hero-ctas">
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
          <a href={RESUME} className="btn-secondary" target="new">Download CV</a>
        </div>
      </section>
    </div>
  )
}
