import Seo from '../../components/Seo.jsx'
import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import ProjectNav from '../../components/ProjectNav.jsx'
import Footer from '../../components/Footer.jsx'

const SECTIONS = [
  { id: 'cs-pg2', label: 'Overview' },
  { id: 'cs-pg3', label: 'The Challenge' },
  { id: 'cs-pg4', label: 'Key Risks' },
  { id: 'cs-pg5', label: 'Sprint Breakdown' },
  { id: 'cs-pg6', label: 'Lo-Fi Wireframes' },
  { id: 'cs-pg7', label: 'Outcome & Impact' },
  { id: 'cs-pg8', label: 'Live Prototype' },
  { id: 'cs-pg9', label: 'Reflection' },
]

export default function VelvetRoom() {
  return (
    <>
      <Seo
        title="Velvet Room — Case Study"
        description="Agile product case study designing a restaurant website. Includes user stories, sprints, UX design, and cross-functional collaboration."
        ogType="article"
        url="https://ashleydibuduo.ca/projects/casestudy-velvetroom"
        ogTitle="Velvet Room Website Case Study | Ashley DiBuduo"
        ogDescription="An Agile/Scrum restaurant website project focused on UX, collaboration, and iterative delivery."
        image="https://ashleydibuduo.ca/images/og/casestudy-velvetroompreview.png"
        imageAlt="Velvet Room Website Case Study Preview"
        twitterTitle="Velvet Room Website Case Study | Ashley DiBuduo"
        twitterDescription="An Agile/Scrum website project focused on UX, collaboration, and iteration."
      />

      <CaseStudyLayout sections={SECTIONS}>
        {/* PAGE 1 — HERO + DETAILS BAR */}
        <div id="cs-pg1" className="page velvet-page-hero">
          <section className="cs-hero">
            <img src="/images/case-studies/VelvetRoom-Hero.jpg" width="2000" height="1333" alt="Velvet Room Website Screen" />
            <div className="cs-hero-gradient"></div>
            <div className="cs-hero-content">
              <h1>Velvet Room <span>Website</span></h1>
              <p className="hero-subtitle">Product Owner &amp; Scrum Master — Academic Agile Simulation · BCIT New Media Design</p>
              <div className="hero-tags velvet-hero-tags">
                <span className="hero-tag primary">Agile / Scrum</span>
                <span className="hero-tag primary">Backlog Prioritization</span>
                <span className="hero-tag primary">Sprint Facilitatio</span>
                <span className="hero-tag primary">Cross-Functional Delivery</span>
              </div>
            </div>
          </section>

          <div className="details-bar fade-in">
            <div className="detail-item">
              <div className="detail-label">My Role</div>
              <div className="detail-value">Product Owner &amp; Scrum Master</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Client</div>
              <div className="detail-value">Academic Product Simulation (Italian Restaurant Concept)</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Team</div>
              <div className="detail-value">5-Person Cross-Functional Team (Design &amp; Development)</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Delivery</div>
              <div className="detail-value">Agile / Scrum · 5 Sprints · 6-Week Timeline</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Tools</div>
              <div className="detail-value">Google Sheets · Miro · Figma · VS Code · WhatsApp</div>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* PAGE 2 — OVERVIEW */}
        <div id="cs-pg2" className="page fade-in velvet-overview-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">Overview</div>
              <h2>A 6-week sprint. <span>A dual role.</span> One functional product.</h2>
              <p className="body-text">Velvet Room was a cross-functional web delivery project simulating a real client engagement — building a fully responsive restaurant website for an Italian concept brand within a structured Agile framework. Working within a <strong>5-person team</strong> across design and development, the project ran over five weekly sprints from backlog definition through final front-end implementation.</p>
              <p className="body-text">I served in a dual role as both Product Owner and Scrum Master — balancing product direction and backlog prioritization with sprint facilitation and delivery oversight. The scope was intentionally constrained: two required functional deliverables across six weeks. But constrained scope doesn't mean simple execution. When the complexity isn't in the requirements, it lives in the process — in how clearly roles are defined, how decisions get made, and how well a cross-functional team stays aligned sprint over sprint. That's where my energy was focused.</p>
            </div>
            <div className="cs-split-image">
              <img loading="lazy" src="/images/case-studies/VelvetRoom-UserStories.png" width="1200" height="1200" alt="User Stories Infographic" />
            </div>
          </div>
        </div>

        {/* PAGE 3 — CHALLENGE */}
        <div id="cs-pg3" className="page fade-in velvet-challenge-page">
          <div className="cs-split">
            <div className="cs-split-image velvet-userstories-image">
              <img loading="lazy" src="/images/case-studies/VelvetRoom-Backlog.png" width="1200" height="1200" alt="Backlog & Sprint Infographic" />
            </div>
            <div className="cs-split-text">
              <div className="section-label">The Challenge</div>
              <h2>Two roles. One person. <span>No ambiguity allowed.</span></h2>
              <p>The core challenge was governance — specifically, internal governance. Two team members shared the Product Owner and Scrum Master responsibilities simultaneously, which introduced potential ambiguity from the start: unclear decision-making authority during ceremonies, inconsistent prioritization if both role-holders approached the backlog differently, and the risk of gaps or duplicated effort in role coverage.</p>
              <p>Layered on top of that was the alignment gap common to any cross-functional team under sprint pressure — designers and developers rarely start from the same understanding of what "done" looks like. My job was to build the structure that prevented both problems from disrupting delivery.</p>
            </div>
          </div>
        </div>

        {/* PAGE 4 — RISKS */}
        <div id="cs-pg4" className="page fade-in velvet-risks-page">
          <div className="cs-risks-band">
            <div className="section-label">Key Risks &amp; How I Handled Them</div>
            <h2>Anticipating what could <span>go wrong.</span></h2>
            <div className="risks-grid">
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Shared Role Ownership</h3>
                  <p>Two team members holding Product Owner and Scrum Master responsibilities simultaneously — with no clear structure for who held final say on backlog prioritization or sprint facilitation at any given moment.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Unclear decision-making authority during planning and ceremonies, inconsistent prioritization, potential for duplicated effort, or gaps in role coverage.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Maintained open communication to align on decisions before acting, divided facilitation responsibilities clearly across ceremonies where possible, and used shared Google Sheets documentation to keep backlog visibility consistent for both members.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>UX-to-Implementation Gaps</h3>
                  <p>A cross-functional team split between design and development — gaps between wireframe intent and technical implementation are common, especially under weekly sprint pressure.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Inconsistent UI output relative to approved designs, mid-sprint rework that disrupted velocity, and misalignment on what "done" looked like between designers and developers.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Established shared understanding of requirements before development began, defined acceptance criteria around the two required functional deliverables, and used sprint reviews to catch and address gaps before they carried into the following sprint.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Variable Team Availability</h3>
                  <p>A five-person team operating across a compressed six-week window — sprint velocity dependent on availability that couldn't always be guaranteed week to week.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Uneven task distribution, risk of momentum loss, and potential for delivery gaps if the backlog wasn't actively adjusted to reflect real capacity.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Built flexibility into sprint planning from the start, redistributed tasks as needed to maintain momentum, and reviewed and adjusted the backlog at the opening of each sprint based on current team availability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 5 — SPRINT BREAKDOWN */}
        <div id="cs-pg5" className="page fade-in velvet-sprint-page">
          <div className="cs-phases">
            <div className="section-label">Sprint Breakdown</div>
            <h2>Five sprints. <span>One direction.</span></h2>
            <p className="body-text">Each sprint was planned, facilitated, and documented with a focused scope — two required functional deliverables tracked iteratively across the full cycle.</p>
            <div className="cs-phase-list">
              <div className="cs-phase-item">
                <strong>Sprint 1 — Branding &amp; Planning</strong>
                <p>Team roles confirmed, scope and deliverables defined, mood board created, and initial logo concepts developed. I built the sitemap — establishing the website's page structure and hierarchy before any design work began.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Sprint 2 — Wireframing &amp; Layout</strong>
                <p>Logo finalized, website content development begun in parallel with UX planning. I contributed to low-fidelity wireframes and facilitated sprint planning to keep the team aligned on sequencing as the design and development tracks began running in parallel.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Sprint 3 — Content Development</strong>
                <p>Style guide completed to establish consistent visual language, and written and visual content collected for all key pages. I maintained the product backlog throughout, and began building HTML/CSS layout templates — scaffolding another developer could pick up and run with.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Sprint 4 — Design &amp; Mock Features</strong>
                <p>Front-end development continued, menu copy finalized in Velvet Room brand tone, and visual content sourced. I ran sprint retrospectives and kept backlog priorities updated as functional mockups for reservation and ordering features were built out.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Sprint 5 — Final Polish</strong>
                <p>Full site reviewed for consistency and functionality. I prepared the final project presentation and report documentation — synthesizing five sprints of work into a clear delivery summary.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 6 — WIREFRAMES */}
        <div id="cs-pg6" className="page fade-in velvet-wireframes-page">
          <div className="cs-reflection velvet-wireframes-section">
            <div className="section-label">Lo-Fi Wireframes &amp; Sitemap</div>
            <h2>Structure before <span>style.</span></h2>
            <p>Before any code was written, we wireframed every key page — mapping layouts, hierarchies, and user flows. These lo-fi frames were the shared reference point that kept designers and developers building the same thing. Alongside the wireframes, I built a sitemap to establish the full page hierarchy and navigation structure before any screens were designed. Getting the structure right early meant every layout decision that followed had something solid to anchor to.</p>
            <div className="velvet-wireframes-panel">
              <img loading="lazy" src="/images/case-studies/VelvetRoom-LoFiWireframes.png" width="1400" height="1400" alt="Lo-fi Wireframes" />
              <img loading="lazy" src="/images/case-studies/VelvetRoom-SiteMap.png" width="1586" height="1508" alt="Sitemap" />
            </div>
          </div>
        </div>

        {/* PAGE 7 — OUTCOMES */}
        <div id="cs-pg7" className="page fade-in velvet-outcomes-page">
          <div className="cs-outcomes">
            <div className="section-label">Outcome &amp; Impact</div>
            <h2>What we <span>delivered.</span></h2>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Functional product delivered</strong>Responsive restaurant website completed within the 6-week Agile timeline, meeting both required functional deliverable criteria on schedule.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Consistent sprint cadence maintained</strong>Structured planning, reviews, and retrospectives across all five sprints kept the team aligned and delivery on track throughout the cycle.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Aligned cross-functional delivery</strong>Sprint reviews were used to close the gap between design intent and implementation, with consistent output across both designers and developers.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Full Agile documentation completed</strong>Backlog artifacts, sprint documentation, and retrospective insights delivered in full alongside the final project report.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 8 — PROTOTYPE */}
        <div id="cs-pg8" className="page fade-in velvet-prototype-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">Live Prototype</div>
              <h2>See it <span>in the browser.</span></h2>
              <p>The prototype was built and deployed early in the program — before responsive design had been introduced to the curriculum. It represents the full scope of what the team planned and delivered at that stage. Looking at it now is a useful marker of how much the technical baseline has moved.</p>
              <a href="https://projectmanagement1.ashleydibuduo.ca/" target="_blank" rel="noopener noreferrer" className="velvet-live-prototype-link">
                View Live Prototype →
              </a>
            </div>
            <div className="cs-split-image velvet-live-prototype-image">
              <img loading="lazy" src="/images/case-studies/VelvetRoom-Hero.jpg" width="2000" height="1333" alt="Velvet Room Website Screen" />
            </div>
          </div>
        </div>

        {/* PAGE 9 — REFLECTION + FOOTER */}
        <div id="cs-pg9" className="page fade-in velvet-reflection-page">
          <div className="cs-reflection velvet-reflection-section">
            <div className="section-label">Reflection</div>
            <h2>What this <span>taught me.</span></h2>
            <p>Sharing the Product Owner and Scrum Master roles with a teammate required constant, deliberate alignment — the kind that doesn't happen automatically when two people are technically responsible for the same outcome. What this project taught me is that role ambiguity creates output ambiguity. The clearer the ownership, the faster the team moves. I carry that into how I think about product work: before you can build the right thing, the team needs to know who decides what.</p>
          </div>

          <ProjectNav
            prev={{ to: '/projects/casestudy-forme', title: 'Forme Styling App' }}
            next={{ to: '/projects/casestudy-wayfair', title: 'Wayfair Rugs Market Intelligence' }}
          />
          <Footer />
        </div>
      </CaseStudyLayout>
    </>
  )
}
