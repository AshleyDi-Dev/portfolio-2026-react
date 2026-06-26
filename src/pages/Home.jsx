import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { featured } from '../data/projects.js'

const RESUME = '/images/AshleyDiBuduo_APM_Resume_Portfolio.pdf'

export default function Home() {
  return (
    <div className="page-home">
      <Seo
        title="Ashley DiBuduo | Associate Product Manager | Portfolio"
        description="Creative Project Manager delivering structured, user-focused digital experiences. Explore product, UX, and web development work."
        url="https://ashleydibuduo.ca"
        ogTitle="Ashley DiBuduo | Associate Product Manager Portfolio"
        ogDescription="Associate Product Manager portfolio bridging vision and execution through UX, web, and cross-functional delivery. Explore case studies and projects."
        imageAlt="Ashley DiBuduo Product Manager Portfolio Preview"
        twitterTitle="Ashley DiBuduo | Product Manager Portfolio"
        twitterDescription="Product-focused portfolio showcasing UX, digital delivery, and cross-functional execution."
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-label">Associate Product Manager</span>
          <h1>The gap between vision and <span>done?</span><br />That's where I live.</h1>
          <p className="hero-sub">15 years in music and live events taught me one thing: you have to own the whole picture — the strategy, the details, the people, the pressure. I now apply this same approach to digital products. And I can build them myself too.</p>
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
              <img src="/images/Headshot-square.png" alt="Ashley DiBuduo" />
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
            <div className="wsma-title">I always ask why.</div>
            <div className="wsma-text">Why does this flow feel off? Why isn't this feature resonating? Why are users dropping here? This focus drives good UX — and it's how I approach everything, from the initial research conversation to the final design decision.</div>
          </div>
          <div className="wsma-card">
            <div className="wsma-number">02</div>
            <div className="wsma-title">I understand the full product lifecycle.</div>
            <div className="wsma-text">I spent 15 years in promotion, audience development, and lifecycle management in the music, entertainment, and live events industries. Now, I am trained in product design and development. I have worked across the entire spectrum—from product to audience and back again.</div>
          </div>
          <div className="wsma-card">
            <div className="wsma-number">03</div>
            <div className="wsma-title">I've been building my technical skills with intention. </div>
            <div className="wsma-text">Web development (HTML, CSS, JavaScript, React), UX design, and AI tools — because I don’t settle for knowing how to use something. I want to understand how it works. That drive improves every part of my work.</div>
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
            <ProjectCard key={p.to} {...p} titleAs="h3" />
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
