import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

import { RESUME } from '../data/site.js'
const ICON = (name) => `/images/tool-icons/${name}`

const CLUSTERS = [
  {
    number: '01',
    title: 'AI & Automation',
    desc: "AI is a core part of how I work and what I build — not an afterthought. I structure my systems around a WAT framework — Workflows, Agents, Tools — designing agentic and multi-agent workflows, automating research and operations in n8n, and building with Claude Code: market-intelligence dashboards, a moodboard agent, and an LLM-powered knowledge base. I treat AI as a collaborator, with the prompt engineering and judgment to keep the output useful.",
    tags: ['Claude', 'Claude Code', 'WAT Framework', 'Agentic Workflows', 'Multi-Agent Systems', 'n8n', 'Workflow Automation', 'Prompt Engineering', 'LLM Integration', 'AI-Assisted Research', 'Gemini', 'Generative AI'],
  },
  {
    number: '02',
    title: 'Strategy & Competitive Frameworks',
    desc: 'I use my background in market study, positioning, and competition to shape my approach. I assess landscapes, identify opportunities, and define clear paths forward, ensuring alignment with user needs and organizational goals.',
    tags: ['SWOT', "Porter's Five Forces", 'Strategic Group Analysis', 'Growth-Share Matrix', 'Perceptual Mapping', 'Business Model Canvas', 'Competitive Analysis', 'Customer Journey Mapping', 'Lean Canvas', 'Traction Roadmapping'],
  },
  {
    number: '03',
    title: 'Marketing, Growth & Discoverability',
    desc: "Before focusing on product, I focused on reaching people. I've run campaigns, shaped content and social strategy, and worked across technical SEO and AEO — improving visibility in both traditional and AI-powered search. I've also built partnerships and go-to-market motions. This background helps me think about the full product lifecycle, not just the build.",
    tags: ['SEO / AEO', 'Discoverability', 'Marketing Automation', 'Go-to-Market', 'Content Strategy', 'Social Media Strategy', 'Campaign Management', 'Audience Development', 'Partnership Development', 'PR & Communications'],
  },
  {
    number: '04',
    title: 'Product Thinking & Research',
    desc: "My process starts with the user: understanding their needs, analyzing the system, and defining what to build. I've led user research, journey mapping, usability testing, and synthesized findings into actionable steps. Research shapes my thinking, not just my process. I'm well-versed in Agile, Scrum, Kanban, and Waterfall, and applying them in high-stakes contexts.",
    tags: ['User Research', 'Journey Mapping', 'User Testing', 'Information Architecture', 'Synthesis & Insights', 'Agile', 'Scrum', 'Kanban', 'Waterfall', 'Sprint Planning', 'Stakeholder Alignment'],
  },
  {
    number: '05',
    title: 'UX & Design',
    desc: "Good UX isn't something you bolt on at the end — it's the reason people stay or leave. I've studied it, practiced it, and built it into how I evaluate every product decision. I know what makes an experience feel right, and more importantly, I know how to articulate why it doesn't when something is off.",
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Usability Testing', 'Accessibility', 'Information Architecture'],
  },
  {
    number: '06',
    title: 'Development & Technical Skills',
    desc: "I code with HTML, CSS, JavaScript, React, React Native, Tailwind CSS, GSAP, Express.js, SQL, and Git/GitHub. APIs and WordPress are in my toolkit. My technical fluency ensures I understand what's required from engineering.",
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Tailwind CSS', 'GSAP', 'Express.js', 'SQL', 'Supabase', 'Vite', 'Git / GitHub', 'WordPress', 'APIs'],
  },
]

function ToolItem({ name, children }) {
  return (
    <div className="tool-item">
      <div className="tool-icon">{children}</div>
      <span className="tool-name">{name}</span>
    </div>
  )
}

export default function Skills() {
  const [tab, setTab] = useState('skills')

  return (
    <div className="page-skills">
      <Seo
        title="Skills | Ashley DiBuduo"
        description="Explore my skills across product, UX, AI &amp; automation, front-end development, and cross-functional delivery — from research and strategy to agentic workflows and shipping."
        url="https://ashleydibuduo.ca/skills"
        ogDescription="Skills across product, UX, AI &amp; automation, front-end development, and cross-functional delivery."
        imageAlt="Ashley DiBuduo Skills and Tools"
        twitterDescription="Product, UX, AI &amp; automation, and front-end development skills with a focus on execution and delivery."
      />

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-label">Skills & Tools</div>
        <h1>What I bring<br />to the <span>table.</span></h1>
        <p>A mix of product thinking, technical fluency, and enough real-world delivery experience to know what actually matters.</p>
      </section>

      {/* TAB TOGGLE */}
      <div className="tab-section">
        <div className="tab-toggle">
          <button className={`tab-btn${tab === 'skills' ? ' active' : ''}`} onClick={() => setTab('skills')}>Skills</button>
          <button className={`tab-btn${tab === 'tools' ? ' active' : ''}`} onClick={() => setTab('tools')}>Tools</button>
        </div>
      </div>

      {/* SKILLS TAB */}
      <div className="skills-tab" style={{ display: tab === 'skills' ? 'block' : 'none' }}>
        <div className="skills-grid">
          {CLUSTERS.map((c) => (
            <div className="skill-cluster" key={c.number}>
              <div className="cluster-number">{c.number}</div>
              <div className="cluster-title">{c.title}</div>
              <span className="cluster-accent"></span>
              <p className="cluster-desc">{c.desc}</p>
              <div className="skill-tags">
                {c.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS TAB */}
      <div className="tools-tab" style={{ display: tab === 'tools' ? 'block' : 'none' }}>
        {/* PLANNING & DELIVERY */}
        <div className="tools-category">
          <div className="tools-category-label">Planning & Delivery</div>
          <div className="tools-grid">
            <ToolItem name="Notion"><img src={ICON('notion-1-1.svg')} alt="Notion" /></ToolItem>
            <ToolItem name="Trello"><img src={ICON('trello.svg')} alt="Trello" /></ToolItem>
            <ToolItem name="ClickUp"><img src={ICON('clickup.svg')} alt="ClickUp" /></ToolItem>
            <ToolItem name="Google Workspace">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#EA4335" d="M16 5l2.5 5 5.5.8-4 3.9.95 5.5L16 17.5l-4.95 2.7.95-5.5L8 10.8l5.5-.8z" /></svg>
            </ToolItem>
            <ToolItem name="Slack">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#4A154B" d="M6 6h20v20H6z" /><path fill="#fff" d="M12 10h2v8h-2zm4 4h2v4h-2zm-8 0h2v4H8zm12-4h2v8h-2z" /></svg>
            </ToolItem>
            <ToolItem name="Miro"><img src={ICON('miro-2.svg')} alt="Miro" /></ToolItem>
            <ToolItem name="Jira">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#2684FF" /><text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#fff">J</text></svg>
            </ToolItem>
            <ToolItem name="Obsidian">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#7C3AED" /><text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#fff">O</text></svg>
            </ToolItem>
            <ToolItem name="Monday">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#FF3D57" /><text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#fff">M</text></svg>
            </ToolItem>
          </div>
        </div>

        {/* AI & AGENTIC */}
        <div className="tools-category">
          <div className="tools-category-label">AI & Agentic</div>
          <div className="tools-grid">
            <ToolItem name="Claude"><img src={ICON('claude-logo.svg')} alt="Claude" /></ToolItem>
            <ToolItem name="ChatGPT"><img src={ICON('chatgpt-4.svg')} alt="ChatGPT" /></ToolItem>
            <ToolItem name="n8n">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#EA4B71" /><text x="16" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fff">n8n</text></svg>
            </ToolItem>
            <ToolItem name="Gemini">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#4285F4" /><path fill="#fff" d="M16 9l1.6 4.4L22 15l-4.4 1.6L16 21l-1.6-4.4L10 15l4.4-1.6z" /></svg>
            </ToolItem>
            <ToolItem name="Leonardo">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#7C3AED" d="M6 6h20v20H6z" /><path fill="#fff" d="M16 9l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z" /></svg>
            </ToolItem>
            <ToolItem name="ElevenLabs">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#F97316" d="M6 6h20v20H6z" /><path fill="#fff" d="M11 22c0-2.76 2.24-5 5-5s5 2.24 5 5h-2a3 3 0 0 0-6 0h-2zm5-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
            </ToolItem>
            <ToolItem name="Adobe Firefly">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#FF0000" d="M6 6h20v20H6z" /><path fill="#fff" d="M16 10a6 6 0 1 1 0 12A6 6 0 0 1 16 10zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-1 2h2v2.5l2 1-1 1.73-3-1.73V14z" /></svg>
            </ToolItem>
          </div>
        </div>

        {/* DESIGN & CREATIVE */}
        <div className="tools-category">
          <div className="tools-category-label">Design & Creative</div>
          <div className="tools-grid">
            <ToolItem name="Figma"><img src={ICON('figma-icon.svg')} alt="Figma" /></ToolItem>
            <ToolItem name="FigJam"><img src={ICON('figma-icon.svg')} alt="FigJam" /></ToolItem>
            <ToolItem name="Figma Make"><img src={ICON('figma-icon.svg')} alt="Figma Make" /></ToolItem>
            <ToolItem name="Adobe CC"><img src={ICON('adobe-creative-cloud-cc.svg')} alt="Adobe CC" /></ToolItem>
            <ToolItem name="Photoshop"><img src={ICON('adobe-photoshop-2.svg')} alt="Adobe Photoshop" /></ToolItem>
            <ToolItem name="Premiere Pro"><img src={ICON('premiere-pro-cc.svg')} alt="Adobe Premiere Pro" /></ToolItem>
            <ToolItem name="Maze">
              <svg viewBox="0 0 32 32" width="26" height="26"><circle cx="16" cy="16" r="13" fill="#FF4E57" /><path fill="#fff" d="M16 8a8 8 0 1 0 0 16A8 8 0 0 0 16 8zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 16 10zm-1 3v4l3 2-1 1.5-4-2.5V13h2z" /></svg>
            </ToolItem>
            <ToolItem name="Hotjar"><img src={ICON('hotjar-2.svg')} alt="HotJar" /></ToolItem>
          </div>
        </div>

        {/* DEVELOPMENT TOOLS */}
        <div className="tools-category">
          <div className="tools-category-label">Development Tools</div>
          <div className="tools-grid">
            <ToolItem name="VS Code"><img src={ICON('visual-studio-code-1.svg')} alt="Visual Studio Code" /></ToolItem>
            <ToolItem name="GitHub"><img src={ICON('github-icon-1.svg')} alt="GitHub" /></ToolItem>
            <ToolItem name="WordPress"><img src={ICON('wordpress-icon-1.svg')} alt="WordPress" /></ToolItem>
            <ToolItem name="CLI">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="4" y="8" width="24" height="16" rx="2" fill="none" stroke="#4A5568" strokeWidth="2" /><path fill="#4A5568" d="M9 14l3 3-3 3m5 0h6" /></svg>
            </ToolItem>
            <ToolItem name="Postman"><img src={ICON('postman.svg')} alt="Postman" /></ToolItem>
            <ToolItem name="Android Studio"><img src={ICON('android-studio-1.svg')} alt="Android Studio" /></ToolItem>
            <ToolItem name="JSON-LD / SEO">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#F0AB00" d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 2c5.52 0 10 4.48 10 10S21.52 26 16 26 6 21.52 6 16 10.48 6 16 6zm-1 3v7l6 3.5-1 1.73L13 18V9h2z" /></svg>
            </ToolItem>
            <ToolItem name="Supabase">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#3ECF8E" d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 2c5.52 0 10 4.48 10 10S21.52 26 16 26 6 21.52 6 16 10.48 6 16 6z" /><path fill="#3ECF8E" d="M12 10l8 6-8 6V10z" /></svg>
            </ToolItem>
            <ToolItem name="Vercel">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#000" d="M16 7l11 19H5z" /></svg>
            </ToolItem>
          </div>
        </div>

        {/* MARKETING & DISCOVERABILITY */}
        <div className="tools-category">
          <div className="tools-category-label">Marketing & Discoverability</div>
          <div className="tools-grid">
            <ToolItem name="Ahrefs">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#054ADA" /><text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#fff">a</text></svg>
            </ToolItem>
            <ToolItem name="Semrush">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#FF642D" /><text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#fff">S</text></svg>
            </ToolItem>
            <ToolItem name="Triple Whale">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#1B9AAA" /><text x="16" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fff">TW</text></svg>
            </ToolItem>
            <ToolItem name="Shopify">
              <svg viewBox="0 0 32 32" width="26" height="26"><rect x="5" y="5" width="22" height="22" rx="5" fill="#95BF47" /><text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#fff">S</text></svg>
            </ToolItem>
          </div>
        </div>

        {/* LANGUAGES & FRAMEWORKS */}
        <div className="tools-category">
          <div className="tools-category-label">Languages & Frameworks</div>
          <div className="tools-grid">
            <ToolItem name="HTML5"><img src={ICON('html5-2.svg')} alt="HTML5" /></ToolItem>
            <ToolItem name="CSS3"><img src={ICON('css-3-1.svg')} alt="CSS3" /></ToolItem>
            <ToolItem name="JavaScript"><img src={ICON('javascript-1.svg')} alt="Javascript" /></ToolItem>
            <ToolItem name="React">
              <svg viewBox="0 0 32 32" width="26" height="26"><circle cx="16" cy="16" r="13" fill="#20232A" /><path fill="#61DAFB" d="M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-14c1.1 0 2 1.567 2 3.5S17.1 12 16 12s-2-1.567-2-3.5S14.9 5 16 5zm0 22c-1.1 0-2-1.567-2-3.5S14.9 20 16 20s2 1.567 2 3.5S17.1 27 16 27zM5.4 9.5c.55-.952 2.15-.8 3.8.2s2.55 2.55 2 3.5-2.15.8-3.8-.2-2.55-2.55-2-3.5zm21.2 13c-.55.952-2.15.8-3.8-.2s-2.55-2.55-2-3.5 2.15-.8 3.8.2 2.55 2.55 2 3.5zM5.4 22.5c-.55-.952.35-2.5 2-3.5s3.25-1.15 3.8-.2-.35 2.5-2 3.5-3.25 1.15-3.8.2zm21.2-13c.55.952-.35 2.5-2 3.5s-3.25 1.15-3.8.2.35-2.5 2-3.5 3.25-1.15 3.8-.2z" /></svg>
            </ToolItem>
            <ToolItem name="React Native"><img src={ICON('react-native-1.svg')} alt="React Native" /></ToolItem>
            <ToolItem name="Tailwind CSS">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#06B6D4" d="M16 4L4 10l2 14 10 4 10-4 2-14z" /><path fill="#fff" d="M21.5 12h-11l.5 2h10l-.5 2h-9l.5 2h8l-.75 3L16 22l-3.25-.95L12.5 19h2l.25 1.05L16 20.5l1.25-.45.5-2.05H11l-1-8h12z" /></svg>
            </ToolItem>
            <ToolItem name="SQL">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#336791" d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2c6.08 0 11 4.92 11 11s-4.92 11-11 11S5 22.08 5 16 9.92 5 16 5z" /><path fill="#336791" d="M16 8c-3.31 0-6 1.79-6 4v8c0 2.21 2.69 4 6 4s6-1.79 6-4v-8c0-2.21-2.69-4-6-4zm0 2c2.76 0 4 1.12 4 2s-1.24 2-4 2-4-1.12-4-2 1.24-2 4-2zm0 12c-2.76 0-4-1.12-4-2v-1.46C13.15 19.46 14.52 20 16 20s2.85-.54 4-1.46V18c0 .88-1.24 2-4 2z" /></svg>
            </ToolItem>
            <ToolItem name="Express.js">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#68A063" d="M16 3a13 13 0 1 0 0 26A13 13 0 0 0 16 3zm0 2a11 11 0 0 1 11 11 11 11 0 0 1-11 11A11 11 0 0 1 5 16 11 11 0 0 1 16 5z" /><path fill="#68A063" d="M13 10v8l7-4-7-4z" /></svg>
            </ToolItem>
            <ToolItem name="GSAP">
              <svg viewBox="0 0 32 32" width="26" height="26"><path fill="#88CE02" d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm1 6v3h3l-4 4-4-4h3v-3h2zm-5 9h10v2H12v-2zm2 4h6v2h-6v-2z" /></svg>
            </ToolItem>
            <ToolItem name="APIs">
              <svg viewBox="0 0 32 32" width="26" height="26"><path d="M4 8h24v16H4z" fill="none" stroke="#4A90D9" strokeWidth="2" /><path d="M8 16h16M16 8v16" stroke="#4A90D9" strokeWidth="2" /><circle cx="16" cy="16" r="3" fill="#4A90D9" /></svg>
            </ToolItem>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="skills-cta">
        <div className="skills-cta-left">
          <h2>See it <span>in action.</span></h2>
          <p>The best way to understand how I work is to see what I've built. Take a look at my projects.</p>
        </div>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View My Work</Link>
          <a href={RESUME} className="btn-secondary" target="new">Download CV</a>
        </div>
      </section>
    </div>
  )
}
