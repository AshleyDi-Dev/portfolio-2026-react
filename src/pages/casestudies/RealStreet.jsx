import Seo from '../../components/Seo.jsx'
import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import ProjectNav from '../../components/ProjectNav.jsx'
import Footer from '../../components/Footer.jsx'

const SECTIONS = [
  { id: 'cs-pg2', label: 'Overview' },
  { id: 'cs-pg3', label: 'The Challenge' },
  { id: 'cs-pg4', label: 'Key Risks' },
  { id: 'cs-pg5', label: 'Execution Highlight' },
  { id: 'cs-pg6', label: 'Press Coverage' },
  { id: 'cs-pg7', label: 'Outcome & Impact' },
  { id: 'cs-pg8', label: 'Reflection' },
]

export default function RealStreet() {
  return (
    <>
      <Seo
        title="REAL Street Festival — Case Study"
        description="End-to-end project delivery for a large-scale music festival, managing media operations, stakeholders, and real-time execution."
        ogType="article"
        url="https://ashleydibuduo.ca/projects/casestudy-realstreet"
        ogTitle="REAL Street Festival Case Study | Ashley DiBuduo"
        ogDescription="Media operations and cross-team coordination for a large-scale hip-hop festival."
        image="https://ashleydibuduo.ca/images/og/casestudy-realstreetpreview.png"
        imageAlt="REAL Street Festival Case Study Preview"
        twitterTitle="REAL Street Festival Case Study | Ashley DiBuduo"
        twitterDescription="Media operations and cross-team coordination for a large-scale music festival."
      />

      <CaseStudyLayout sections={SECTIONS}>
        {/* PAGE 1 — HERO + DETAILS BAR */}
        <div id="cs-pg1" className="page realstreet-page-hero">
          <section className="cs-hero">
            <img src="/images/case-studies/RealStreet-Audience.png" width="1402" height="784" alt="Audience, 40 thousand attendees" />
            <div className="cs-hero-gradient"></div>
            <div className="cs-hero-content">
              <h1>REAL Street <span>Festival</span></h1>
              <p className="hero-subtitle">Media Operations Lead — Real 92.3 × iHeartRadio · Honda Center, Anaheim</p>
              <div className="hero-tags realstreet-hero-tags">
                <span className="hero-tag primary">Stakeholder Management</span>
                <span className="hero-tag primary">Operational Strategy</span>
                <span className="hero-tag primary">Media Relations</span>
                <span className="hero-tag primary">Live Execution</span>
                <span className="hero-tag primary">Cross-Team Coordination</span>
              </div>
            </div>
          </section>

          <div className="details-bar fade-in">
            <div className="detail-item">
              <div className="detail-label">My Role</div>
              <div className="detail-value">Media Operations &amp; Live Event Delivery</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Client</div>
              <div className="detail-value">Event Producer in partnership with Real 92.3 / iHeartRadio</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Location</div>
              <div className="detail-value">Honda Center, Anaheim, CA</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Delivery</div>
              <div className="detail-value">Waterfall pre-event · Adaptive live execution</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Tools</div>
              <div className="detail-value">Notion · Google Workspace</div>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* PAGE 2 — OVERVIEW */}
        <div id="cs-pg2" className="page fade-in realstreet-overview-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">Overview</div>
              <h2>A first-year festival. <span>High visibility.</span> No margin for error.</h2>
              <p>REAL Street Festival launched as a large-scale, inaugural music and culture festival presented by Real 92.3 — drawing <strong>40,000 attendees</strong> and featuring major hip hop performances alongside murals, street art installations, a car show, artist alley, and a vendor village. Hosted at the Honda Center, the event operated at high visibility and under strict security and operational constraints.</p>
              <p>I led end-to-end media operations on behalf of the event producer — overseeing pre-event planning, live execution, and post-event reporting across a complex, multi-stakeholder environment. This project reflects the kind of delivery work I've led across 50+ live events, each requiring tight coordination, clear governance, and real-time decision-making.</p>
              <p>The skills that made this work — anticipating failure points, creating structure in ambiguous environments, and aligning competing stakeholders around a shared outcome — are the same ones I bring to product work today.</p>
            </div>
            <div className="cs-split-image">
              <img loading="lazy" src="/images/case-studies/RealStreet-Admat.png" width="479" height="638" alt="Official Flyer / Admat" />
            </div>
          </div>
        </div>

        {/* PAGE 3 — CHALLENGE */}
        <div id="cs-pg3" className="page fade-in realstreet-challenge-page">
          <div className="cs-text-section">
            <div className="section-label">The Challenge</div>
            <h2>Eight publicists. Four PR teams. <span>One version of the truth.</span></h2>
            <p className="body-text">The core challenge was governance. With eight publicists across four independent PR teams — each representing different stakeholders including the producer, sponsors, venue, and talent — there was no central system for messaging, approvals, or media access. Add to that a high-security environment where artist access protocols were controlled by individual management teams, and the conditions for chaos were set.</p>
            <p className="body-text">My job was to create the structure that didn't exist yet: centralized tracking, defined ownership, clear escalation paths, and the ability to make fast, high-stakes decisions during live execution without breaking trust with any stakeholder.</p>
          </div>
        </div>

        {/* PAGE 4 — RISKS */}
        <div id="cs-pg4" className="page fade-in realstreet-risks-page">
          <div className="cs-risks-band">
            <div className="section-label">Key Risks &amp; How I Handled Them</div>
            <h2>Anticipating what could <span>go wrong.</span></h2>
            <div className="risks-grid">
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Duplicated or Conflicting Media Outreach</h3>
                  <p>Eight publicists pitching simultaneously across four teams with no centralized governance — competing narratives, overlapping pitches, damaged media relationships.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Confused messaging, diluted coverage, long-term credibility damage with key media outlets.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Implemented centralized tracking, defined ownership by stakeholder category, required alignment before any external outreach, and established a clear escalation channel for conflicts.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Last-Minute High-Security Access Requests</h3>
                  <p>Artist access protocols controlled by individual management teams with no guaranteed same-day response window — layered approval structures with zero buffer time.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Public denials, strained artist relationships, potential security breaches, disruption to live show operations.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Required written approvals only, maintained documented scope boundaries, pre-identified artist management escalation paths, and positioned onsite for real-time coordination.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Artist-Specific Access Variability</h3>
                  <p>Each headliner operated under different rules for photo pits, backstage zones, video usage, and broadcast rights — and those rules could change same-day.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Unauthorized access, media frustration, legal or contract violations, operational conflict with venue security.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Built an artist-specific access matrix, deployed a dedicated onsite enforcement team, maintained live approval documentation, and created a controlled escalation path for exceptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 5 — EXECUTION HIGHLIGHT */}
        <div id="cs-pg5" className="page fade-in realstreet-highlight-page">
          <div className="fw-highlight">
            <div className="section-label">Execution Highlight</div>
            <h2>The moment everything <span>had to work.</span></h2>
            <div className="fw-highlight-box">
              <h3>What I did</h3>
              <p>During live execution, a last-minute request came in from the producer for high-level stage access to film a major headlining artist. Same-day approval for this level of access is typically near-impossible — strict artist security protocols, limited points of contact, and high-profile artists remaining off-site until just before performance.</p>
              <p>I secured written approval from the artist's management team and coordinated closely with stage security to understand when and where the artist's head of security would arrive. Knowing there would be only a brief window before the artist went on stage, I positioned myself at the point of arrival so no approval window would be missed.</p>
              <p>When the artist arrived amid a highly congested, high-pressure environment, I connected directly with head security, presented the management approval, introduced the approved videographer in person, and clearly outlined the limited scope of access. By keeping the request tightly defined and aligned with security expectations, access was granted just in time — without disrupting artist protection protocols or live event operations.</p>
            </div>
          </div>
        </div>

        {/* PAGE 6 — PRESS COVERAGE */}
        <div id="cs-pg6" className="page fade-in realstreet-press-page">
          <div className="fw-press">
            <div className="section-label">Press Coverage</div>
            <h2>The <span>proof</span> in the results.</h2>
            <p className="body-text">Media placements secured through coordinated outreach across all stakeholder teams.</p>
            <div className="fw-press-grid">
              <img loading="lazy" src="/images/case-studies/RealStreet-PressClip-1.png" width="2233" height="470" alt="Forbes Headline" />
              <img loading="lazy" src="/images/case-studies/RealStreet-PressClip-2.png" width="976" height="470" alt="Billboard Headline" />
              <img loading="lazy" src="/images/case-studies/RealStreet-PressClip-3.png" width="1704" height="470" alt="Complex Headline" />
              <img loading="lazy" src="/images/case-studies/RealStreet-PressClip-4.png" width="1745" height="470" alt="Vibe Headline" />
            </div>
          </div>
        </div>

        {/* PAGE 7 — OUTCOMES */}
        <div id="cs-pg7" className="page fade-in realstreet-outcomes-page">
          <div className="cs-outcomes">
            <div className="section-label">Outcome &amp; Impact</div>
            <h2>What we <span>delivered.</span></h2>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Smooth Execution</strong>Seamless delivery across a high-profile, multi-stakeholder inaugural event with no major incidents or media conflicts.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>High-Stakes Access Secured</strong>Successfully navigated a last-minute, high-risk access approval that would typically be declined — without disrupting artist protocols.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Organized Reporting</strong>Post-event publicity wrap-up reports delivered to all stakeholders on time, with full documentation for future events.</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-dot"></div>
                <p><strong>Media Visibility</strong>Strong press coverage supporting long-term festival credibility and positioning for future editions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 8 — REFLECTION + FOOTER */}
        <div id="cs-pg8" className="page fade-in realstreet-reflection-page">
          <div className="cs-reflection realstreet-reflection-section">
            <div className="section-label">Reflection</div>
            <h2>What this <span>taught me.</span></h2>
            <p>This project reinforced the importance of <strong>clear governance, calm communication, and anticipation</strong> in high-pressure, stakeholder-heavy environments. When the structure exists before the chaos arrives, you can make fast decisions without losing trust — and that principle carries directly into how I approach product work today. Managing competing stakeholders with different incentives, building systems that scale under pressure, knowing where the failure points are before they happen — that's not just event management. That's product thinking.</p>
          </div>

          <ProjectNav
            prev={{ to: '/projects/casestudy-lanotte', title: 'La Notte Brand & App Concept' }}
            next={{ to: '/projects/casestudy-forme', title: 'Forme Styling App' }}
          />
          <Footer />
        </div>
      </CaseStudyLayout>
    </>
  )
}
