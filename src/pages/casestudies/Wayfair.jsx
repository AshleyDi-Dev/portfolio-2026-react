import Seo from '../../components/Seo.jsx'
import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import ProjectNav from '../../components/ProjectNav.jsx'
import Footer from '../../components/Footer.jsx'

const SECTIONS = [
  { id: 'cs-pg2', label: 'Overview' },
  { id: 'cs-pg3', label: 'The Challenge' },
  { id: 'cs-pg4', label: 'My Approach' },
  { id: 'cs-pg5', label: 'Key Decisions' },
  { id: 'cs-pg6', label: 'The Output' },
  { id: 'cs-pg7', label: 'Results' },
  { id: 'cs-pg8', label: 'Next Steps' },
  { id: 'cs-pg9', label: 'Reflection' },
]

export default function Wayfair() {
  return (
    <>
      <Seo
        title="Wayfair Rugs Market Intelligence — Case Study"
        description="AI Agent Developer externship building a 5-agent AI system in n8n — trend discovery, competitor monitoring, and content generation — feeding one Market Intelligence Dashboard for Wayfair's Rugs category team."
        ogType="article"
        url="https://ashleydibuduo.ca/projects/casestudy-wayfair"
        ogTitle="Wayfair Rugs Market Intelligence Case Study | Ashley DiBuduo"
        ogDescription="An Extern externship building 5 connected AI agents and a Market Intelligence Dashboard for Wayfair's Rugs category."
        image="https://ashleydibuduo.ca/images/og/casestudy-wayfairpreview.jpg"
        imageAlt="Wayfair Rugs Market Intelligence Case Study Preview"
        twitterTitle="Wayfair Rugs Market Intelligence Case Study | Ashley DiBuduo"
        twitterDescription="An Extern externship building 5 connected AI agents and a Market Intelligence Dashboard for Wayfair's Rugs category."
      />

      <CaseStudyLayout sections={SECTIONS}>
        {/* PAGE 1 — HERO + DETAILS BAR */}
        <div id="cs-pg1" className="page wayfair-page-hero">
          <section className="cs-hero">
            <img src="/images/case-studies/ExternWayfair-Hero.jpg" width="2200" height="1461" alt="Wayfair Rugs Market Intelligence Dashboard — Executive Overview" />
            <div className="cs-hero-gradient"></div>
            <div className="cs-hero-content">
              <h1>Wayfair Rugs <span>Market Intelligence</span></h1>
              <p className="hero-subtitle">AI Agent Developer — Extern · Wayfair Rugs Category Externship</p>
              <div className="hero-tags wayfair-hero-tags">
                <span className="hero-tag primary">AI Agents</span>
                <span className="hero-tag primary">n8n</span>
                <span className="hero-tag primary">Workflow Automation</span>
                <span className="hero-tag primary">Market Intelligence</span>
                <span className="hero-tag primary">Competitive Analysis</span>
              </div>
            </div>
          </section>

          <div className="details-bar fade-in">
            <div className="detail-item">
              <div className="detail-label">My Role</div>
              <div className="detail-value">AI Agent Developer</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Type</div>
              <div className="detail-value">Industry Externship — Extern × Wayfair</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Team</div>
              <div className="detail-value">Individual Build, Cohort-Based Externship</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Tools</div>
              <div className="detail-value">n8n · Docker · Google Gemini · Mistral AI · Claude</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Delivery</div>
              <div className="detail-value">8-Week Externship · 5 Sequential Agent Builds</div>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* PAGE 2 — OVERVIEW */}
        <div id="cs-pg2" className="page fade-in wayfair-overview-page">
          <div className="cs-text-section">
            <div className="section-label">Overview</div>
            <h2>Five agents. One system. <span>A dashboard a category team could actually use.</span></h2>
            <p className="body-text">Wayfair's Rugs category team needed a faster way to see what was happening in the market — which design trends were emerging, what competitors were shipping, and where the pricing and positioning gaps were — before any of it reached the homepage. As an AI Agent Developer in Extern's externship program, I took on the build: design and ship the AI system that could do that.</p>
            <p className="body-text">The result is five connected agents, orchestrated in n8n, that feed into a single Market Intelligence Dashboard:</p>
            <ul className="wayfair-list">
              <li><strong>Moodboard Generator</strong> — turns a short style prompt into a visual concept</li>
              <li><strong>Trend Discovery Agent</strong> — scans product and market data for emerging design patterns</li>
              <li><strong>Competitor Monitoring Agent</strong> — benchmarks pricing and positioning across retailers</li>
              <li><strong>AI Insights &amp; Content Agent</strong> — turns those findings into on-brand content ideas</li>
              <li><strong>Market Intelligence Dashboard</strong> — pulls all four together into one executive view: category health, key trends, competitive insight, and recommended next actions</li>
            </ul>
            <p className="body-text">This wasn't five agents built in isolation and bolted together at the end. Each one was designed to feed the next — trend and competitor reports becoming the raw material for content generation, all of it rolling up into a single report a category team could actually open and act on.</p>
          </div>
        </div>

        {/* PAGE 3 — THE CHALLENGE */}
        <div id="cs-pg3" className="page fade-in wayfair-challenge-page">
          <div className="cs-text-section">
            <div className="section-label">The Challenge</div>
            <h2>Trends move faster <span>than research cycles.</span></h2>
            <p className="body-text">Design trends don't announce themselves. By the time a shift shows up in a quarterly report, it's often already showing up on a competitor's homepage. Category teams need signal fast — what's rising, what customers are responding to, where the market is underserved — and traditional research (surveys, manual competitor checks, trend reports) is too slow to catch it early.</p>
            <p className="body-text">The brief: build agents that could pull real signal from scattered sources — product listings, competitor catalogs, social and design content — and turn it into something a category team could use before the trend was obvious to everyone else. Not a one-off report. A system that could run again the next time the category needed a read.</p>
          </div>
        </div>

        {/* PAGE 4 — MY APPROACH */}
        <div id="cs-pg4" className="page fade-in wayfair-approach-page">
          <div className="cs-split">
            <div className="cs-split-image wayfair-image-panel">
              <div className="wayfair-image-stack">
                <img loading="lazy" src="/images/case-studies/ExternWayfair-n8nPipeline-1.png" width="850" height="548" alt="n8n Workflow Canvas — Input Routing and Retailer Scraping Stages" />
                <img loading="lazy" src="/images/case-studies/ExternWayfair-n8nPipeline-2.png" width="2194" height="548" alt="n8n Workflow Canvas — AI Analysis, Report Assembly, and Upload Stages" />
              </div>
            </div>
            <div className="cs-split-text">
              <div className="section-label">My Approach</div>
              <h2>Five agents, <span>built in sequence.</span></h2>
              <p>Each agent was scoped, built, and tested individually in n8n before being connected into the larger system — starting with a low-stakes creative tool and building up to the piece that ties everything together.</p>
              <ul className="wayfair-list">
                <li><strong>Moodboard Generator</strong> — Built the first agent: a tool that turns a short style prompt (like "coastal outdoor rugs, blue taupe flatweave") into an AI-generated visual moodboard, using Google Gemini's image model. A low-stakes proof of concept — prompt to visual, instantly — that set up the workflow patterns used in every agent after it. <a href="https://extern.ashleydibuduo.ca/Wayfair/moodboard.png" target="_blank" rel="noopener noreferrer">View sample moodboard ↗</a></li>
                <li><strong>Trend Discovery Agent</strong> — Built an agent that reads product category and retailer URLs and scans listing data to surface emerging design and material trends — patterns a category team could act on before they hit the mainstream. <a href="https://extern.ashleydibuduo.ca/Wayfair/P2_Market_Report_Outdoor_Rug_Sample.html" target="_blank" rel="noopener noreferrer">View sample report ↗</a></li>
                <li><strong>Competitor Monitoring Agent</strong> — Extended the system to benchmark Wayfair against other retailers on pricing, positioning, and assortment — surfacing whitespace opportunities and where customer response differed by retailer. <a href="https://extern.ashleydibuduo.ca/Wayfair/P3_Competitor_Report_outdoor_rug_Sample.html" target="_blank" rel="noopener noreferrer">View sample report ↗</a></li>
                <li><strong>AI Insights &amp; Content Agent</strong> — Took the trend and competitor reports and turned them into channel-ready content ideas — first-draft copy for email, social, and campaigns, grounded in the data instead of a blank page. <a href="https://extern.ashleydibuduo.ca/Wayfair/Wayfair_Outdoor_Rugs_Content_Strategy_Sample.html" target="_blank" rel="noopener noreferrer">View sample output ↗</a></li>
                <li><strong>Market Intelligence Dashboard</strong> — Unified all four agents into one manually-triggered workflow that pulls the latest reports, parses them, and generates a single executive dashboard — category health, key trends, competitive insight, and recommended actions, all in one view. <a href="https://extern.ashleydibuduo.ca/Wayfair/Outdoor_Rug_Dashboard_Sample.html" target="_blank" rel="noopener noreferrer">View live dashboard sample ↗</a></li>
              </ul>
              <p>By the end, the five agents weren't five separate tools — they were one pipeline, each output becoming the next agent's input.</p>
            </div>
          </div>
        </div>

        {/* PAGE 5 — KEY DECISIONS */}
        <div id="cs-pg5" className="page fade-in wayfair-decisions-page">
          <div className="cs-risks-band wayfair-decisions-band">
            <div className="section-label">Key Decisions</div>
            <h2>What I built. <span>And why I built it that way.</span></h2>
            <div className="risks-grid">
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h3>Manually-Triggered Orchestration, Not a Fully Automated Pipeline</h3>
                  <p>The dashboard workflow pulls the latest saved trend and competitor reports rather than running end-to-end automatically.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>Manual triggers meant every report could be reviewed before it fed downstream — important when the goal is giving a category team something they can trust enough to act on.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Less hands-off than a fully automated system. Worth it while validating output quality mattered more than removing every manual step.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h3>Sampled Data, Not Full Catalog</h3>
                  <p>The analysis is based on a defined product sample across a small set of retailers, not the full catalog or live sales data.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>A bounded dataset made it possible to build, test, and validate five agents within the externship timeline, on free-tier AI tools.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Insights are directional signals, not final numbers — every report explicitly flags that recommendations need validating against full catalog, sales, and inventory data.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h3>Separate Trend and Competitor Agents, Even Where the Data Overlapped</h3>
                  <p>Built and run as distinct agents rather than one combined workflow, despite scraping similar retailer data.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>Kept each agent easier to build, debug, and validate independently.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Some duplicated scraping logic between the two — flagged directly as a future improvement, to merge into one branched workflow once both are proven.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 6 — THE OUTPUT */}
        <div id="cs-pg6" className="page fade-in wayfair-output-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">The Output</div>
              <h2>Did the system actually <span>surface something useful?</span></h2>
              <p>Running the full pipeline against a defined sample of outdoor rug listings across three retailers produced a report the Rugs team could open and act on — not a wall of raw data.</p>
              <ul className="wayfair-list">
                <li>Surfaced multiple emerging design directions in the outdoor rug category, ahead of where they'd typically show up in a standard report.</li>
                <li>Showed a clear positioning gap between Wayfair's design-led assortment and more budget/utility-focused competitors.</li>
                <li>Identified a pricing whitespace opportunity in a premium tier, flagged for validation against broader catalog and sales data.</li>
                <li>Flagged specific competitor suppliers worth monitoring going forward.</li>
              </ul>
              <div className="wayfair-stats-stack">
                <div className="wayfair-stat-item">
                  <span className="wayfair-stat-number">5</span>
                  <span className="wayfair-stat-label">Connected AI agents feeding one dashboard</span>
                </div>
                <div className="wayfair-stat-item">
                  <span className="wayfair-stat-number">3</span>
                  <span className="wayfair-stat-label">Retailers benchmarked in the competitive sample</span>
                </div>
                <div className="wayfair-stat-item">
                  <span className="wayfair-stat-number">1</span>
                  <span className="wayfair-stat-label">Unified executive dashboard generated from all four agents' outputs</span>
                </div>
              </div>
            </div>
            <div className="cs-split-image prototype-image-panel">
              <img loading="lazy" src="/images/case-studies/ExternWayfair-Output.png" width="1800" height="1190" alt="Wayfair Rugs Market Intelligence Dashboard" />
              <a href="https://extern.ashleydibuduo.ca/Wayfair/Outdoor_Rug_Dashboard_Sample.html" target="_blank" rel="noopener noreferrer" className="prototype-link">
                View Live Dashboard Sample ↗
              </a>
            </div>
          </div>
        </div>

        {/* PAGE 7 — RESULTS */}
        <div id="cs-pg7" className="page fade-in wayfair-results-page">
          <div className="cs-text-section">
            <div className="section-label">Results</div>
            <h2>What worked. <span>What didn't.</span></h2>
            <div className="wayfair-results-grid">
              <div className="wayfair-results-col wayfair-results-col--worked">
                <div className="wayfair-results-label">Worked</div>
                <ul className="wayfair-list">
                  <li>Chaining five agents into a single working pipeline — one agent's output becoming the next agent's input, not five disconnected tools.</li>
                  <li>Turning a plain-text style prompt into an on-brand visual concept in seconds, using Google Gemini's image model.</li>
                  <li>Surfacing specific, actionable signals — trend directions, positioning gaps, pricing whitespace — instead of generic "AI insights."</li>
                  <li>Producing a dashboard format a category team could genuinely use for planning conversations, not just a technical proof of concept.</li>
                </ul>
              </div>
              <div className="wayfair-results-col wayfair-results-col--didnt">
                <div className="wayfair-results-label">Didn't</div>
                <ul className="wayfair-list">
                  <li>Every AI tool in this system — Google Gemini and Mistral alike — ran into free-tier API limits, not just the image-generation step. That capped how much of the system could be tested and scaled at once.</li>
                  <li>Trend Discovery and Competitor Monitoring shared overlapping scraping logic that never got consolidated within the externship timeline.</li>
                  <li>Data completeness varied — some product attributes (pattern, material, style) were missing from structured listings and need an added extraction step to fill reliably.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 8 — NEXT STEPS */}
        <div id="cs-pg8" className="page fade-in wayfair-next-page">
          <div className="wayfair-next-wrap">
            <div className="section-label wayfair-next-label">Next Steps</div>
            <h2 className="wayfair-next-heading">What I'd change, <span>and what comes next.</span></h2>
            <p className="wayfair-next-intro">The externship ended with five working agents and a functional dashboard. The constraints hit along the way point to a clear next chapter — thinking through what that looks like is where the work doesn't stop.</p>

            <div className="wayfair-next-grid">
              <div className="wayfair-next-card wayfair-next-card--sapphire">
                <p className="wayfair-next-title wayfair-next-title--sapphire">If I Built It Again</p>
                <p className="wayfair-next-copy">I'd build the AI-powered attribute-extraction step into the Trend Discovery Agent from the start, rather than treating it as a fix for missing pattern/material/style data after the fact. Structured data gaps were the single biggest source of noisy output — worth solving at the source, not downstream.</p>
              </div>
              <div className="wayfair-next-card wayfair-next-card--chartreuse">
                <p className="wayfair-next-title wayfair-next-title--chartreuse">The Constraint I'd Solve First</p>
                <p className="wayfair-next-copy">Every agent in this system hit the same wall: free-tier API limits, across both Gemini and Mistral, capped how much could be tested and scaled. A production version would need paid-tier access budgeted in from day one — not bolted on after proving the concept.</p>
              </div>
              <div className="wayfair-next-card wayfair-next-card--muted">
                <p className="wayfair-next-title wayfair-next-title--muted">Where This Goes</p>
                <p className="wayfair-next-copy">Expand competitor coverage beyond the current retailer sample, merge the overlapping scraping logic between Trend Discovery and Competitor Monitoring into one branched workflow, and add historical dashboard views so a category team can track shifts over time instead of a single snapshot.</p>
              </div>
            </div>

            <p className="wayfair-next-note">What I'd push for before any of this: a paid-tier budget and a defined validation step against full catalog and sales data — the fastest way to turn directional signal into a decision a category team can act on with confidence.</p>
          </div>
        </div>

        {/* PAGE 9 — REFLECTION + FOOTER */}
        <div id="cs-pg9" className="page fade-in wayfair-reflection-page">
          <div className="cs-reflection wayfair-reflection-section">
            <div className="section-label">Reflection</div>
            <h2>What building a multi-agent system <span>taught me.</span></h2>
            <p>This was different from working with AI one prompt at a time. The hard part wasn't getting any single agent to work — it was designing how five of them would hand data off to each other reliably, and being honest about where that pipeline was still fragile.</p>
            <p>I learned to treat AI output as a signal to validate, not a conclusion to trust — every report in this system explicitly flags what it can and can't tell you, because a sampled dataset and a free-tier API are not the same thing as a finished business recommendation.</p>
            <p>It also shifted how I think about AI on a product team. This wasn't a productivity trick for one person — it was infrastructure other people could open, trust, and use to make faster category decisions. That's a different bar than "did AI save me time today," and it's the bar I want to keep building toward.</p>
            <p>The biggest carryover isn't the n8n workflows themselves — it's the habit of asking what a system needs to be trustworthy before asking what it can do.</p>
          </div>

          <ProjectNav
            prev={{ to: '/projects/casestudy-velvetroom', title: 'Velvet Room Website' }}
            next={{ to: '/projects/casestudy-knowledgedatabase', title: 'AI Knowledge Database' }}
          />
          <Footer />
        </div>
      </CaseStudyLayout>
    </>
  )
}
