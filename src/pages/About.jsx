import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

import { RESUME } from '../data/site.js'

const TIMELINE = [
  {
    years: '2009 – 2016', tag: 'Foundational',
    title: 'Music, PR & Marketing', subtitle: 'Century Media, Victory Records & others',
    body: 'I started in music—working across record labels, artist management, and radio, where I led PR strategy, executed multi-genre campaigns, and developed fast-moving, cross-functional skills. This experience solidified my foundation in communication, project management, and adaptability.',
  },
  {
    years: '2016 – 2025', tag: 'Founder',
    title: 'Live Events & Media Operations', subtitle: 'A12 Entertainment',
    body: 'I launched my own consultancy specializing in large-scale festivals, conferences, and red carpets, partnering with producers like Live Nation and AEG. I excel at planning run-of-show timelines, coordinating cross-functional teams under pressure, and delivering flawless event execution.',
  },
  {
    years: '2020 – 2022', tag: 'Operations',
    title: 'Music Education & Events', subtitle: 'Musicians Institute',
    body: 'Produced and executed 120+ live and virtual events annually while building industry partnerships and mentorship programs. This role sharpened my skills in high-volume event logistics, partner relationship building, and full-lifecycle project execution.',
  },
  {
    years: '2022 – 2024', tag: 'Pivot Point',
    title: 'Customer Success & Product', subtitle: 'Haulix — Music SaaS',
    body: 'Working closely with developers to roll out new products and transform user feedback into improvements deepened my skills in technical communication, product iteration, and customer empathy. This was a pivotal experience for hands-on product development.',
  },
  {
    years: '2024 – Now', tag: 'Education',
    title: 'Web Development & Digital Delivery', subtitle: 'BCIT — New Media Design & Web Development',
    body: 'Building hands-on experience in front-end development, UX, and agentic tools—applying 15 years of delivery, leadership, and strategic skills to digital product creation. Expected completion July 2026.',
  },
  {
    years: '2026 – Now', tag: 'Current',
    title: 'AI Product & Automation', subtitle: 'Industry Internships — Wayfair · Digital Marketing',
    body: 'As part of my program’s internship requirement, I took on two AI-focused placements: AI Agent Developer at Wayfair (via Extern), building automation workflows and a market-intelligence dashboard in n8n, and a self-initiated AI knowledge base built at a digital marketing agency, using Claude Code — since adopted department-wide. Anthropic Claude AI Fluency certified.',
  },
]

export default function About() {
  return (
    <div className="page-about">
      <Seo
        title="About | Ashley DiBuduo"
        description="Learn more about Ashley, a Vancouver-based product manager and builder with 15+ years in music and events, now building digital products, AI workflows, and automation."
        url="https://ashleydibuduo.ca/about"
        ogDescription="Product manager and builder with 15+ years leading cross-functional campaigns and live-event execution, now focused on product, UX, AI workflows, and automation."
        imageAlt="About Ashley DiBuduo"
        twitterDescription="Product manager and builder with 15+ years in music and events, now working in product, UX, and AI."
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-heading">
          <div className="page-label">About Me</div>
          <h1>Hi, I'm <span>Ashley!</span></h1>
        </div>
        <div className="photo-col">
          <div className="photo-frame">
            <div className="photo-bg-block"></div>
            <div className="photo-accent"></div>
            <div className="photo-placeholder">
              <div className="photo-duotone"></div>
              <img src="/images/test-photo.png" width="1344" height="2352" alt="Ashley DiBuduo" />
            </div>
          </div>
        </div>
        <div className="hero-body-col">
          <div className="hero-body">
            <p>I'm the person in the room who's already thought three steps ahead.</p>
            <p>Fifteen years across music, live events, and entertainment gave me a front-row seat to how creative projects actually live or die. Through this, I built expertise in strategic problem-solving, cross-team communication, and project diagnostics—realizing early that understanding why something was or wasn't working mattered more than just fixing it and moving on.</p>
            <p>I've worked on major festivals, red carpets, artist campaigns, and release cycles alongside some of the biggest names in music. Every project taught me the same thing: the details and the strategy have to connect. When they don't, you feel it — and so does your audience.</p>
            <p>That path eventually led me to a music SaaS company. Working alongside developers, watching user feedback turn into product decisions, seeing how a well-framed problem could change an entire roadmap — I didn't just get curious. I got obsessed. I wanted to understand the full system, not just the part I was standing in.</p>
            <p><strong>Which is exactly what I'm doing now.</strong></p>
          </div>
        </div>
      </section>

      {/* BACKGROUND TIMELINE */}
      <section className="background-section">
        <h2 className="section-label">My Experience</h2>
        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-left">
                <span className="timeline-year">{item.years}</span>
                <span className="timeline-tag">{item.tag}</span>
              </div>
              <div className="timeline-right">
                <h3>{item.title}</h3>
                <div className="timeline-subtitle">{item.subtitle}</div>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PERSONALITY */}
      <section className="personality">
        <div className="section-label section-label--chartreuse">A Bit More About Me</div>
        <div className="personality-grid">
          <div className="personality-left">
            <p>When I'm not working on a project or writing code, I'm probably at a concert, cooking something new, or deep in a horror film.</p>
            <p>I'm a <strong>Halloween obsessive</strong>, a self-described <strong>cinephile</strong>, and someone who gets genuinely excited about anything weird, niche, or hard to explain. Fashion, meditation, and spending time with my cat round out the rest.</p>
            <p>Oh, and I'm <strong>left-handed and a Virgo.</strong> Make of that what you will.</p>
          </div>
          <div className="personality-right">
            <div className="mbti-block">
              <div className="mbti-type">ENTJ</div>
              <div className="mbti-desc">
                <strong>Sometimes INTJ</strong>
                I test as ENTJ — which probably explains a lot about how I run a project — with occasional INTJ energy when I need to go heads down.
              </div>
            </div>
            <div className="spotify-block">
              <span className="spotify-label">🎵 What I'm listening to while I work</span>
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/3Vb41nFYJmazYoSQOzePTM?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify playlist"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <div className="about-cta-left">
            <h2>Want to see <span>the work?</span></h2>
            <p>Take a look at what I've been building — or download my CV for the full picture.</p>
          </div>
          <div className="about-cta-right">
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <a href={RESUME} className="btn-secondary" target="new">Download CV</a>
          </div>
        </div>
      </section>
    </div>
  )
}
