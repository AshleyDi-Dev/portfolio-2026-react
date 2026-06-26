import Seo from '../../components/Seo.jsx'
import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import ProjectNav from '../../components/ProjectNav.jsx'
import Footer from '../../components/Footer.jsx'

const SECTIONS = [
  { id: 'cs-pg2', label: 'Overview' },
  { id: 'cs-pg3', label: 'The Challenge' },
  { id: 'cs-pg4', label: 'Key Risks' },
  { id: 'cs-pg5', label: 'Phase Breakdown' },
  { id: 'cs-pg6', label: 'Outcome & Impact' },
  { id: 'cs-pg7', label: 'User Flows & Prototype' },
  { id: 'cs-pg8', label: 'Reflection' },
]

export default function LaNotte() {
  return (
    <>
      <Seo
        title="La Notte — Case Study"
        description="Waterfall product management case study for a mobile app, including requirements, planning, and structured delivery across phases."
        ogType="article"
        url="https://ashleydibuduo.ca/casestudy-lanotte.html"
        ogTitle="La Notte Brand & App Concept Case Study | Ashley DiBuduo"
        ogDescription="A Waterfall mobile app project focused on structured planning, requirements, and delivery."
        image="https://ashleydibuduo.ca/images/og/casestudy-lanottepreview.png"
        imageAlt="La Notte Brand & App Concept Case Study Preview"
        twitterTitle="La Notte App Case Study | Ashley DiBuduo"
        twitterDescription="A Waterfall mobile app project focused on structured planning and delivery."
      />

      <CaseStudyLayout sections={SECTIONS}>
        {/* PAGE 1 — HERO + DETAILS BAR */}
        <div id="cs-pg1" className="page lanotte-page-hero">
          <section className="cs-hero">
            <img src="/images/case-studies/LaNotte-Hero.jpg" alt="La Notte App & Website Screens" />
            <div className="cs-hero-gradient"></div>
            <div className="cs-hero-content">
              <h1>La Notte <span>Brand &amp; App Concept</span></h1>
              <p className="hero-subtitle">Project Manager — Academic Waterfall Simulation · BCIT New Media Design</p>
              <div className="hero-tags lanotte-hero-tags">
                <span className="hero-tag primary">Product Definition</span>
                <span className="hero-tag primary">Waterfall Delivery</span>
                <span className="hero-tag primary">Scope &amp; Planning</span>
                <span className="hero-tag primary">Gantt &amp; WBS</span>
              </div>
            </div>
          </section>

          <div className="details-bar fade-in">
            <div className="detail-item">
              <div className="detail-label">My Role</div>
              <div className="detail-value">Project Manager</div>
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
              <div className="detail-value">Waterfall · 5 Phases · 5-Week Timeline</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Tools</div>
              <div className="detail-value">ClickUp · Figma · Canva · Google Drive · WhatsApp</div>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* PAGE 2 — OVERVIEW */}
        <div id="cs-pg2" className="page fade-in lanotte-overview-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">Overview</div>
              <h2>A 5-week Waterfall delivery. <span>Brand, product, and marketing.</span> All at once.</h2>
              <p>La Notte was a fictional Italian restaurant concept — inspired by the rustic elegance of Tuscany — brought to life through a structured Waterfall delivery. Within a <strong>5-person cross-functional team</strong>, the project delivered a complete brand identity, a mobile reservation app concept, supporting marketing assets, and full project documentation within five sequenced weeks. The project demonstrated the team's ability to deliver complex outputs within a constrained timeline, emphasizing effective coordination and execution.</p>
              <p>I served as Project Manager, responsible for maintaining the project's WBS and Gantt chart, coordinating across phases, contributing to design and content development, and compiling the final report and presentation. The role required balancing structured planning with hands-on creative contribution — and adapting mid-project when a change request required replanning without losing the delivery window.</p>
              <p>The decisions that mattered most weren't about the deliverables themselves — they were about sequencing, tradeoffs, and knowing what to protect when things shifted. That kind of thinking is what I bring to product work.</p>
            </div>
            <div className="cs-split-image lanotte-image-panel">
              <img src="/images/case-studies/LaNotte-WBS.png" alt="Work Breadown Structure WBS" />
            </div>
          </div>
        </div>

        {/* PAGE 3 — CHALLENGE */}
        <div id="cs-pg3" className="page fade-in lanotte-planning-page">
          <div className="cs-split">
            <div className="cs-split-image lanotte-image-panel">
              <img src="/images/case-studies/Lanotte-GanttChart.png" alt="Gantt Chart via ClickUp" />
            </div>
            <div className="cs-split-text">
              <div className="section-label">The Challenge</div>
              <h2>Eight deliverables. Five weeks. <span>One change request mid-way.</span></h2>
              <p>The core challenge was sequencing. La Notte followed a strict Waterfall structure — brand assets had to exist before app mockups could be built, app mockups had to exist before marketing materials could be finalized, and all of it had to feed into a final report and presentation with no room to slip. In a methodology where tasks depend on one another in sequence, any delay has a compounding effect on everything downstream.</p>
              <p>That risk became real mid-project, when a change request introduced adjustments to planned deliverables after work was already underway. The question wasn't whether to accommodate it — it was how to absorb it without collapsing the schedule on the back end.</p>
            </div>
          </div>
        </div>

        {/* PAGE 4 — RISKS */}
        <div id="cs-pg4" className="page fade-in lanotte-risks-page">
          <div className="cs-risks-band">
            <div className="section-label">Key Risks &amp; How I Handled Them</div>
            <h2>Anticipating what could <span>go wrong.</span></h2>
            <div className="risks-grid">
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h4>Schedule Delays Compounding Across Phases</h4>
                  <p>Multiple interconnected deliverables — brand assets, app mockups, marketing materials, final documentation — each dependent on the previous stage completing on time in a strict Waterfall sequence.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>A delay in early phases would compress later ones, leaving insufficient time for app mockups, marketing collateral, or final presentation preparation.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>When building the WBS and Gantt chart, I intentionally included buffer time between key milestones. That schedule flexibility allowed the team to absorb late submissions without creating last-minute pressure or affecting the overall delivery timeline.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h4>Mid-Project Change Request</h4>
                  <p>Partway through the project timeline, a change request required adjustments to previously planned deliverables — introducing new requirements into a methodology that assumes sequential, fixed-scope execution.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Disruption to task sequencing, potential timeline compression, and the risk of incomplete deliverables if the change wasn't evaluated and absorbed quickly.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>The team reviewed the request, assessed its impact on the existing timeline, adjusted task sequencing, and redistributed responsibilities where needed. All deliverables were completed on schedule.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h4>Balancing Coordination with Creative Contribution</h4>
                  <p>As Project Manager, I held both planning oversight and direct creative responsibilities — including designing the promotional website mockup and developing app interface content — with both tracks running simultaneously.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Unattended coordination tasks could cause misalignment across the team; unattended creative tasks could delay dependent deliverables.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Maintained visibility across all deliverables through the Gantt chart and kept coordination lightweight — using WhatsApp for daily communication and Google Drive for shared file access — so coordination overhead didn't displace creative output.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 5 — PHASE BREAKDOWN */}
        <div id="cs-pg5" className="page fade-in lanotte-phase-page">
          <div className="cs-phases">
            <div className="section-label">Phase Breakdown</div>
            <h2>Five phases. <span>One direction.</span></h2>
            <p className="body-text">Each phase built directly on the previous — brand before product, product before marketing, everything before documentation.</p>
            <div className="cs-phase-list">
              <div className="cs-phase-item">
                <strong>Phase 1 — Planning &amp; Concept</strong>
                <p>Team roles defined, concept direction explored, and mood boards created. I built the WBS and Gantt chart, mapping all milestones and dependencies across the full project timeline before any deliverable work began.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Phase 2 — Brand Development</strong>
                <p>Logo concepts developed and finalized, typography and color palette established, style guide completed to govern visual consistency across all deliverables.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Phase 3 — Product Design</strong>
                <p>User flows and wireframes were developed for the reservation functionality. I developed the content for the app mockup screens — shaping how the experience would read and feel in the hands of a user.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Phase 4 — Marketing &amp; Promotional Assets</strong>
                <p>Reservation confirmation email template and branded promotional leaflet completed by the team. I designed the single-page promotional website mockup — the piece that bridges the brand to the download.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Phase 5 — Documentation &amp; Presentation</strong>
                <p>I compiled all deliverables into the final project report and built the presentation deck — summarizing planning decisions, execution, and outcomes across all five phases.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 6 — OUTCOMES */}
        <div id="cs-pg6" className="page fade-in lanotte-process-page">
          <div className="cs-outcomes">
            <div className="section-label">Outcome &amp; Impact</div>
            <h2>What we <span>delivered.</span></h2>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Cohesive brand identity</strong>Logo, typography, color palette, and style guide completed within the first two phases and carried consistently across all deliverables.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Full deliverable set on schedule</strong>Brand assets, app mockup, promotional website mockup, email template, leaflet, and final documentation, all completed within the five-week window.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Change request absorbed mid-project</strong>Task sequencing adjusted and responsibilities shifted to maintain the delivery timeline.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Structured project visibility</strong>WBS and Gantt chart maintained for milestone and dependency tracking throughout all phases.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 7 — USER FLOW + PROTOTYPE */}
        <div id="cs-pg7" className="page fade-in lanotte-flow-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">User Flows &amp; Prototype</div>
              <h2>Mapping the <span>core experience.</span></h2>
              <p>Before moving into high-fidelity mockups, we created two user flows to map the required functionality and core user experience — ensuring every screen had a clear purpose and every path had a logical end state.</p>
              <div className="user-flow-images">
                <div className="user-flow-column">
                  <img src="/images/case-studies/LaNotte-ReservationUserFlow.png" alt="Reservation User Flow" />
                </div>
                <div className="user-flow-column">
                  <img src="/images/case-studies/LaNotte-PickupUserFlow.png" alt="Pickup Order User Flow" />
                </div>
              </div>
            </div>
            <div className="cs-split-image prototype-image-panel">
              <img src="/images/case-studies/LaNotte-Prototypeimage.png" alt="LaNotte interactive prototype preview" />
              <a href="https://www.figma.com/proto/GauTPHADKMmlDToWR7UnND/Tuscan-Restaurant?node-id=146-137&t=z1ne6tS46Yx7bdLK-0&scaling=scale-down&content-scaling=fixed&page-id=146%3A136&starting-point-node-id=146%3A137&hide-ui=1" target="_blank" rel="noopener noreferrer" className="prototype-link">
                View Interactive Prototype ↗
              </a>
            </div>
          </div>
        </div>

        {/* PAGE 8 — REFLECTION + FOOTER */}
        <div id="cs-pg8" className="page fade-in lanotte-reflection-page">
          <div className="cs-reflection lanotte-reflection-section">
            <div className="section-label">Reflection</div>
            <h2>What this <span>taught me.</span></h2>
            <p>Maintaining the WBS and Gantt chart across a multi-deliverable Waterfall project made the value of <strong>early planning decisions</strong> concrete — the buffer time built into the schedule at the start was the same buffer that absorbed the mid-project change request at the end. Structure created early creates room later. That principle carries directly into product thinking. Every roadmap has dependencies. Every scope change has a cost. The PMs who handle that well aren't the ones who react fastest — they're the ones who built the slack in early enough that a pivot doesn't become a crisis. That's what I was practicing here, even if the context was a fictional restaurant.</p>
          </div>

          <ProjectNav
            prev={{ to: '/projects/casestudy-firewatchbc', title: 'FirewatchBC Wildfire App' }}
            next={{ to: '/projects/casestudy-forme', title: 'Forme Styling App' }}
          />
          <Footer />
        </div>
      </CaseStudyLayout>
    </>
  )
}
