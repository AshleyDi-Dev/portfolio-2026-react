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
  { id: 'cs-pg7', label: 'Reflection' },
]

export default function KnowledgeDatabase() {
  return (
    <>
      <Seo
        title="AI Knowledge Database — Case Study"
        description="A self-initiated AI knowledge system built at a digital marketing agency — an Obsidian memory and knowledge base paired with Claude Code to ingest, trust-weight, and synthesize fast-moving industry information. Now used department-wide."
        ogType="article"
        url="https://ashleydibuduo.ca/projects/casestudy-knowledgedatabase"
        ogTitle="AI Knowledge Database Case Study | Ashley DiBuduo"
        ogDescription="A self-initiated AI knowledge system pairing an Obsidian memory and knowledge base with Claude Code — trust-weighted, daily-updated, and now used department-wide."
        image="https://ashleydibuduo.ca/images/og/casestudy-knowledgedatabasepreview.png"
        imageAlt="AI Knowledge Database Case Study Preview"
        twitterTitle="AI Knowledge Database Case Study | Ashley DiBuduo"
        twitterDescription="A self-initiated AI knowledge system pairing Obsidian with Claude Code — trust-weighted, daily-updated, and now used department-wide."
      />

      <CaseStudyLayout sections={SECTIONS}>
        {/* PAGE 1 — HERO + DETAILS BAR */}
        <div id="cs-pg1" className="page kdb-page-hero">
          <section className="cs-hero">
            <img src="/images/case-studies/KnowledgeDatabase-Hero.png" width="1184" height="666" alt="Streamlined Knowledge Pipeline — conceptual diagram" />
            <div className="cs-hero-gradient"></div>
            <div className="cs-hero-content">
              <h1>AI <span>Knowledge Database</span></h1>
              <p className="hero-subtitle">Self-Initiated Build — Marketing Agency Project</p>
              <div className="hero-tags kdb-hero-tags">
                <span className="hero-tag primary">AI Knowledge Systems</span>
                <span className="hero-tag primary">Obsidian</span>
                <span className="hero-tag primary">Claude Code</span>
                <span className="hero-tag primary">Trust Scoring</span>
                <span className="hero-tag primary">Self-Initiated</span>
              </div>
            </div>
          </section>

          <div className="details-bar fade-in">
            <div className="detail-item">
              <div className="detail-label">My Role</div>
              <div className="detail-value">Self-Initiated Builder</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Type</div>
              <div className="detail-value">Internal Tool — Unassigned, Built on Own Initiative</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Team</div>
              <div className="detail-value">Solo</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Tools</div>
              <div className="detail-value">Obsidian · Claude Code · Claude Desktop</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Delivery</div>
              <div className="detail-value">1–2 Months · Actively Used Daily</div>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* PAGE 2 — OVERVIEW */}
        <div id="cs-pg2" className="page fade-in kdb-overview-page">
          <div className="cs-text-section">
            <div className="section-label">Overview</div>
            <h2>A field that moves fast. <span>A knowledge base that moves with it.</span></h2>
            <p className="body-text">Digital marketing moves fast — especially at the edges closest to AI, where new tools, new strategies, and new best practices show up constantly, alongside an overwhelming stream of articles, webinars, and reports to keep up with. Working at a digital marketing agency, I kept hitting the same wall: there was no way to manually track, evaluate, and retain all of it fast enough to actually act on.</p>
            <p className="body-text">So I built a personal knowledge system — an Obsidian memory and knowledge base paired with Claude Code as the reasoning layer:</p>
            <ul className="kdb-list">
              <li>Reviews new resources I feed it daily (articles, video/webinar transcripts, reports) and decides what's worth fully ingesting, what's worth skimming for context, and what to skip</li>
              <li>Assigns each source a trustworthiness weight based on a rubric I defined</li>
              <li>Uses that weighting when it summarizes findings, answers questions, or double-checks a recommendation</li>
            </ul>
            <p className="body-text">It's not a side project anymore — the department now uses it daily for staying current, sanity-checking suggestions, and building workflows for audits and other performance metrics.</p>
          </div>
        </div>

        {/* PAGE 3 — THE CHALLENGE */}
        <div id="cs-pg3" className="page fade-in kdb-challenge-page">
          <div className="cs-text-section">
            <div className="section-label">The Challenge</div>
            <h2>Too many sources. <span>No way to know which to trust.</span></h2>
            <p className="body-text">This field moves fast — what worked last month can be outdated advice today, and depth and accuracy vary wildly between sources. Reading everything isn't scalable. Reading indiscriminately is worse, since not every source deserves equal weight.</p>
            <p className="body-text">The real problem wasn't a lack of information — it was a lack of a system to filter, retain, and weigh it fast enough to actually use.</p>
          </div>
        </div>

        {/* PAGE 4 — MY APPROACH */}
        <div id="cs-pg4" className="page fade-in kdb-approach-page">
          <div className="cs-split">
            <div className="cs-split-image kdb-image-panel">
              <img loading="lazy" src="/images/case-studies/KnowledgeDatabase-Pipeline.png" width="800" height="1189" alt="Streamlined Knowledge Pipeline — Sources, Knowledge Vault, Trust Rubric Engine" />
            </div>
            <div className="cs-split-text">
              <div className="section-label">My Approach</div>
              <h2>A knowledge base that remembers. <span>A brain that judges.</span></h2>
              <p>Two tools working together — one to store, one to reason:</p>
              <ul className="kdb-list">
                <li><strong>Built on Andrej Karpathy's open-source foundation</strong> — often called an "LLM Wiki" — installed, configured, and customized into this trust-weighted system, rather than built from zero.</li>
                <li><strong>Obsidian as the memory and knowledge base</strong> — every article, transcript, and report becomes a note in a growing, cross-linked knowledge base, structured to Google's Open Knowledge format — the same principles I apply professionally.</li>
                <li><strong>Claude Code triages and weighs trust</strong> — new content (via a clipper and a transcription workflow) is reviewed first: fully ingest, skim for context, or skip — saving tokens and avoiding bloat. Each note is then weighted against a trust rubric (authority, recency, corroboration), with my approval at every step.</li>
                <li><strong>Two ways to use it</strong> — Claude Code for building and refining the system, Claude Desktop for day-to-day questions — no dev tool required just to ask something.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PAGE 5 — KEY DECISIONS */}
        <div id="cs-pg5" className="page fade-in kdb-decisions-page">
          <div className="cs-risks-band kdb-decisions-band">
            <div className="section-label">Key Decisions</div>
            <h2>What I built. <span>And why I built it that way.</span></h2>
            <div className="risks-grid">
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h3>Built on Karpathy's Foundation, Not From Scratch</h3>
                  <p>Started from an open-source knowledge-system approach shared publicly by Andrej Karpathy — often called an "LLM Wiki" — then installed, configured, and customized it for this specific problem rather than building the underlying architecture from zero.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>Real effort went into what was genuinely new here — trust weighting and field-specific structure — instead of reinventing infrastructure that already existed and was well-designed.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Required learning someone else's architecture well enough to modify it safely — a steeper upfront curve than a simpler, fully custom build.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h3>Trust as a First-Class Signal, Not an Afterthought</h3>
                  <p>Every ingested source gets weighted by Claude Code against a defined rubric, rather than treated as equally reliable.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>In a fast-moving, hype-heavy field, the risk isn't too little information — it's confidently wrong information. Weighting trust at ingestion shaped answers by reliability, not just recency or volume.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Requires maintaining and refining the rubric over time — a bad rubric produces confidently wrong weighting just as easily as no rubric at all.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h3>Triaged Ingestion, Not Blind Ingestion</h3>
                  <p>Resources are triaged and added by hand, not pulled in by an automated crawler. Every new article is reviewed first — full ingestion, a lighter skim for context, or skip entirely — and I approve each step.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>Keeping a human decision point at every step is itself a trust filter, and triaging before ingesting saves token usage and keeps the knowledge base from filling up with low-value content.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Takes daily discipline and doesn't scale to "everything on the internet" — which was never the goal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 6 — THE OUTPUT */}
        <div id="cs-pg6" className="page fade-in kdb-output-page">
          <div className="cs-text-section">
            <div className="section-label">The Output</div>
            <h2>Built for me. <span>Adopted by the department.</span></h2>
            <p className="body-text">What started as a personal tool to keep up is now something the department relies on daily:</p>
            <ul className="kdb-list">
              <li>Daily summaries of new developments in the field, without everyone individually reading everything.</li>
              <li>A second opinion — double-checking recommendations against a weighted knowledge base before acting on them.</li>
              <li>A foundation for building and testing workflows for audits and other performance metrics.</li>
            </ul>
          </div>
        </div>

        {/* PAGE 7 — REFLECTION + FOOTER */}
        <div id="cs-pg7" className="page fade-in kdb-reflection-page">
          <div className="cs-reflection kdb-reflection-section">
            <div className="section-label">Reflection</div>
            <h2>What building trust <span>into a system taught me.</span></h2>
            <p>This wasn't built because someone asked for it — it came from hitting the same wall myself, every day, and deciding the fix was worth building rather than continuing to push through information overload manually.</p>
            <p>The interesting problem was never "get an LLM to answer questions" — it was teaching a system to weigh trust the way I would, so its answers are actually usable, not just plausible-sounding.</p>
            <p>Watching the department start relying on it changed how I think about internal tools — the best ones aren't the most sophisticated, they're the ones that quietly become part of how a team works because they solve a real, recurring problem.</p>
            <p>It also reinforced something from the Wayfair project: AI is most valuable when it's built as infrastructure other people can trust and return to — not a one-off trick.</p>
          </div>

          <ProjectNav
            prev={{ to: '/projects/casestudy-wayfair', title: 'Wayfair Rugs Market Intelligence' }}
            next={{ to: '/projects/casestudy-firewatchbc', title: 'FireWatch BC Wildfire App' }}
          />
          <Footer />
        </div>
      </CaseStudyLayout>
    </>
  )
}
