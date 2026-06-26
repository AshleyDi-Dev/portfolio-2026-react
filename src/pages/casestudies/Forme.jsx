import Seo from '../../components/Seo.jsx'
import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import ProjectNav from '../../components/ProjectNav.jsx'
import Footer from '../../components/Footer.jsx'

const SECTIONS = [
  { id: 'cs-pg2', label: 'Overview' },
  { id: 'cs-pg3', label: 'The Opportunity' },
  { id: 'cs-pg4', label: 'Dual Hypothesis' },
  { id: 'cs-pg5', label: 'My Approach' },
  { id: 'cs-pg6', label: 'Key Decisions' },
  { id: 'cs-pg7', label: 'The Experiment' },
  { id: 'cs-pg8', label: 'Honest Results' },
  { id: 'cs-pg9', label: 'What Comes Next' },
  { id: 'cs-pg10', label: 'Reflection' },
]

export default function Forme() {
  return (
    <>
      <Seo
        title="Forme — Case Study"
        description="Forme — an AI-assisted MVP build for a personalized style and self-knowledge app. Product thinking, AI workflow, and full-stack development."
        ogType="article"
        url="https://ashleydibuduo.ca/casestudy-forme.html"
        ogTitle="Forme Case Study | Ashley DiBuduo"
        ogDescription="An AI-assisted MVP for a personalized style app — product thinking, workflow design, and full-stack execution."
        image="https://ashleydibuduo.ca/images/og/casestudy-formepreview.png"
        imageAlt="Forme Case Study Preview Image"
        twitterTitle="Forme Case Study | Ashley DiBuduo"
        twitterDescription="An AI-assisted MVP for a personalized style app — product thinking, workflow design, and full-stack execution."
      />

      <CaseStudyLayout sections={SECTIONS}>
        {/* PAGE 1 — HERO + DETAILS BAR */}
        <div id="cs-pg1" className="page forme-page-hero">
          <section className="cs-hero">
            <img src="/images/case-studies/Forme-Hero.png" alt="Forme Screens" />
            <div className="cs-hero-gradient"></div>
            <div className="cs-hero-content">
              <h1>Forme <span>Style App</span></h1>
              <p className="hero-subtitle">Product Owner &amp; Builder — AI-Assisted MVP Development (In Progress) · Personal Project</p>
              <div className="hero-tags forme-hero-tags">
                <span className="hero-tag primary">Product Definition</span>
                <span className="hero-tag primary">AI Workflow</span>
                <span className="hero-tag primary">MVP Development</span>
                <span className="hero-tag primary">React</span>
                <span className="hero-tag primary">Supabase</span>
                <span className="hero-tag primary">Rule-Based Systems</span>
              </div>
            </div>
          </section>

          <div className="details-bar fade-in">
            <div className="detail-item">
              <div className="detail-label">My Role</div>
              <div className="detail-value">Product Owner &amp; Builder</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Type</div>
              <div className="detail-value">Personal Side Project — AI-Assisted MVP</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Team</div>
              <div className="detail-value">Solo</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Stack</div>
              <div className="detail-value">React · JavaScript · Vite · Supabase</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Tools</div>
              <div className="detail-value">Claude · Claude Code · ChatGPT · Trello · FigJam</div>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* PAGE 2 — OVERVIEW */}
        <div id="cs-pg2" className="page fade-in forme-overview-page">
          <div className="cs-text-section">
            <div className="section-label">Overview</div>
            <h2>A real idea. <span>A faster way to build it.</span></h2>
            <p className="body-text">Forme is a personalised style guidance app for women that helps them understand their features and translate that knowledge into practical, everyday styling decisions. The foundation is four guided quiz modules — body proportions, face shape, hair profile, and seasonal colour analysis — each returning specific, actionable guidance tailored to the user's own combination of features. It sits in the gap between generic fashion advice and expensive personal styling.</p>
            <p className="body-text">The core product is functionally built to a point where it can be tested — including account creation, onboarding, all four quiz modules, a persistent profile dashboard, and a rule-based recommendations engine that generates personalized outputs across clothing, hair, accessories, and colour. Each result saves to a user profile with version history preserved — because hair, colour, and body can change over time, and the app is designed to be returned to, not just completed once.</p>
            <p className="body-text">I wanted something real and testable, fast — and AI made that possible. I also wanted to use this build to develop something reusable: a workflow, a prompt library, and a way of working with AI that gets more intentional with each project rather than more relied upon.</p>
          </div>
        </div>

        {/* PAGE 3 — THE OPPORTUNITY */}
        <div id="cs-pg3" className="page fade-in forme-opportunity-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">The Opportunity</div>
              <h2>Color analysis. Face shape. Body type. <span>Still no single place for all of it.</span></h2>
              <p>Women are already looking. Color analysis rabbit holes on TikTok, body shape quizzes scattered across a dozen different sites, face shape guides buried in Pinterest boards. The interest is real and the behavior is already there — but the tools are fragmented, inconsistent, and rarely in one place.</p>
              <p>I wanted something I could actually use: a single resource that covers colour, body, face, and hair in one guided experience — returns specific, cross-referenced guidance across all of them — and remembers the results. Not a trend report or a shopping list. The kind of considered, feature-specific guidance that usually only comes from a knowledgeable friend or a professional.</p>
              <p className="forme-callout">The goal wasn’t a finished product — it was something functional enough to test the concept and gather real feedback, while also developing a workflow I could take into future builds.</p>
            </div>
            <div className="cs-split-image forme-image-panel">
              <img src="/images/case-studies/Forme-figjam.webp" alt="Figjam App Flow Diagram" />
            </div>
          </div>
        </div>

        {/* PAGE 4 — DUAL HYPOTHESIS */}
        <div id="cs-pg4" className="page fade-in forme-hypothesis-page">
          <div className="cs-text-section">
            <div className="section-label">Dual Hypothesis</div>
            <h2>Two bets. <span>One build.</span></h2>
            <div className="forme-hypothesis-grid">
              <div className="forme-hypothesis-card forme-hypothesis-card--product">
                <div className="forme-hypothesis-label">Product Bet</div>
                <p>If I give women a guided, conversational way to build a personal style profile based on their own features, they'll develop a more reliable and confident foundation for how they dress.</p>
              </div>
              <div className="forme-hypothesis-card forme-hypothesis-card--process">
                <div className="forme-hypothesis-label">Process Bet</div>
                <p>If I use AI as an active collaborator — not just a tool — I can reduce the time between idea and a testable product while maintaining decision quality and product clarity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 5 — MY APPROACH */}
        <div id="cs-pg5" className="page fade-in forme-approach-page">
          <div className="cs-split">
            <div className="cs-split-image forme-image-panel">
              <img src="/images/case-studies/Forme-trello.webp" alt="Trello Workflow" />
            </div>
            <div className="cs-split-text">
              <div className="section-label">My Approach</div>
              <h2>AI to move faster. <span>Not to think for me.</span></h2>
              <p>I didn’t use AI to replace thinking — I used it to remove the friction that slows it down. I defined the core pages and features upfront, then moved into a build-first workflow, refining each part as it came together.</p>
              <ul className="forme-list">
                <li><strong>Ideation</strong> — Identified the gap from personal experience. Validated the concept as an unmet need before writing a line of code.</li>
                <li><strong>Brainstorming with ChatGPT</strong> — Pressure-tested scope, surfaced edge cases, and stress-tested the concept before committing to a direction.</li>
                <li><strong>Structuring with Claude</strong> — Built out product architecture, page-by-page planning, feature prioritization, and the prompt library for the build phase. Used Trello to organize tasks and FigJam to map flows.</li>
                <li><strong>Building with Claude Code</strong> — Built the product page by page, ensuring each core flow was functional before moving forward.</li>
                <li><strong>Testing and iteration</strong> — refining decisions as each part became functional, rather than waiting until the end.</li>
              </ul>
              <p>The goal was a repeatable system — one I could refine so AI becomes more intentional with each project, not more relied upon.</p>
            </div>
          </div>
        </div>

        {/* PAGE 6 — KEY DECISIONS */}
        <div id="cs-pg6" className="page fade-in forme-decisions-page">
          <div className="cs-risks-band forme-decisions-band">
            <div className="section-label">Key Decisions</div>
            <h2>What I built. <span>What I didn't. Yet.</span></h2>
            <div className="risks-grid">
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h4>Rule-Based Recommendations Engine, Not AI at Runtime</h4>
                  <p>The recommendations engine is a pure JavaScript lookup function — a structured rules file that maps style profile results to output. No AI inference at runtime.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>Fast, predictable, and easy to audit. Every recommendation is reviewable and editable as a plain data file. It also means the output is consistent — users with the same profile see the same result, which matters when building trust in guidance.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Less flexibility than a model-generated response. Worth it for MVP — when the rules are right, deterministic output is a feature, not a limitation.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h4>Four Modules, Not One Quiz</h4>
                  <p>Separating body proportions, face shape, hair profile, and seasonal colour into distinct guided flows keeps each analysis focused — and lets users retake individual modules as things change. Each generates its own output: clothing and silhouette guidance, neckline and accessory recommendations, hair care and styling, a full colour palette with metals and neutrals.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>Hair changes, weight shifts, style evolves. A single monolithic quiz locks users into a snapshot. Four separate modules let the profile grow with them — version history is preserved for each, which is the whole point of building something worth returning to.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>More build complexity upfront. Each module needed its own result set, logic, and recommendation rules. But the architecture is more defensible and more useful long-term.</p>
                </div>
              </div>

              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Decision</div>
                  <h4>Monetization Through Depth, Not Access</h4>
                  <p>The core experience is free. Paid will unlock deeper analysis — 12-season color vs. 4-season — not a gated product entirely.</p>
                </div>
                <div>
                  <div className="risk-section-title">Why It Mattered</div>
                  <p>Paywalling the full product before validation is a fast way to kill signal. If users won't complete a free quiz, they won't pay for a locked one. The free tier has to stand on its own first.</p>
                </div>
                <div>
                  <div className="risk-section-title">The Tradeoff</div>
                  <p>Slower path to revenue. Accepted — because the goal of this build was validation, not monetization. Revenue strategy comes after the product proves it's worth paying for.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 7 — THE EXPERIMENT */}
        <div id="cs-pg7" className="page fade-in forme-experiment-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">The Experiment</div>
              <h2>Did it actually work? <span>The numbers.</span></h2>
              <p>I tracked every hour — what I was doing, how long it took, and how that compared to AI's own estimates for the same work. The goal wasn't just to build faster. It was to know whether faster was actually happening, and where the real friction lived.</p>
              <p>What the data showed: where AI accelerated work meaningfully, where prompting overhead created its own friction, and where no amount of AI assistance replaces judgment.</p>
              <div className="forme-stats-stack">
                <div className="forme-stat-item">
                  <span className="forme-stat-number">14.9</span>
                  <span className="forme-stat-label">Total hours to reach a functional, testable build</span>
                </div>
                <div className="forme-stat-item">
                  <span className="forme-stat-number">1.66hrs</span>
                  <span className="forme-stat-label">Average daily session length</span>
                </div>
                <div className="forme-stat-item">
                  <span className="forme-stat-number">9</span>
                  <span className="forme-stat-label">Active build days</span>
                </div>
              </div>
            </div>
            <div className="cs-split-image prototype-image-panel">
              <img src="/images/case-studies/Forme-Environment.jpg" alt="Forme profile page" />
              <a href="https://formestyling.vercel.app/" target="_blank" rel="noopener noreferrer" className="prototype-link">
                Live App ↗
              </a>
            </div>
          </div>
        </div>

        {/* PAGE 8 — RESULTS */}
        <div id="cs-pg8" className="page fade-in forme-results-page">
          <div className="cs-text-section">
            <div className="section-label">Results</div>
            <h2>What worked. <span>What didn't.</span></h2>
            <div className="forme-results-grid">
              <div className="forme-results-col forme-results-col--worked">
                <div className="forme-results-label">Worked</div>
                <ul className="forme-list">
                  <li>Moving from vague concept to defined product architecture in hours instead of weeks.</li>
                  <li>Rapid iteration on individual components — quiz logic, result sets, recommendation rules — without derailing the build.</li>
                  <li>Building a prompt library and workflow system I can carry into future projects.</li>
                  <li>Shipping a functional, rule-based recommendations engine without relying on external AI at runtime.</li>
                </ul>
              </div>
              <div className="forme-results-col forme-results-col--didnt">
                <div className="forme-results-label">Didn't</div>
                <ul className="forme-list">
                  <li>Prompting overhead is real — knowing what to ask is a skill that takes iteration to develop.</li>
                  <li>Debugging AI-generated code requires enough technical context to know what's wrong.</li>
                  <li>Some decisions still took longer than expected — not because of the tools, but because clarity on the product had to come before the build could move forward.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 9 — WHAT COMES NEXT */}
        <div id="cs-pg9" className="page fade-in forme-next-page">
          <div className="forme-next-wrap">
            <div className="section-label forme-next-label">What Comes Next</div>
            <h2 className="forme-next-heading">Functional build complete. <span>Product work starts now.</span></h2>
            <p className="forme-next-intro">The build validated the workflow. What comes next is validating the product itself — through user research, usability testing, and measuring how people actually engage with the experience. Build-first doesn’t mean skipping research — it means getting something real in front of people faster.</p>
            <p className="forme-next-intro">Build-first doesn't mean research-never. It means getting something real in front of people faster.</p>

            <div className="forme-next-grid">
              <div className="forme-next-card forme-next-card--sapphire">
                <p className="forme-next-title forme-next-title--sapphire">User Research</p>
                <p className="forme-next-copy">Recruit women in the target range. Run structured interviews focused on how they currently approach style decisions, where they look for guidance, and what would make them come back to the app.</p>
              </div>
              <div className="forme-next-card forme-next-card--chartreuse">
                <p className="forme-next-title forme-next-title--chartreuse">Usability Testing</p>
                <p className="forme-next-copy">Run moderated sessions across all four quiz flows. Key metric: completion rate per module. Secondary: time-to-result and whether the recommendations actually land as useful and specific enough to act on.</p>
              </div>
              <div className="forme-next-card forme-next-card--muted">
                <p className="forme-next-title forme-next-title--muted">Feature Phases</p>
                <p className="forme-next-copy">Outfit builder, saved items, glow-up plan summary, 12-season colour tier, AI photo analysis, shopping integration. Sequenced by what the data says users need — not what's interesting to build.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 10 — REFLECTION + FOOTER */}
        <div id="cs-pg10" className="page fade-in forme-reflection-page">
          <div className="cs-reflection forme-reflection-section">
            <div className="section-label">Reflection</div>
            <h2>What this changed <span>about how I work.</span></h2>
            <p>The biggest shift wasn't technical. It was knowing that a strong idea doesn't need to wait for perfect conditions — a full team, a polished spec, a designer on deck. With the right workflow, you can get something real in front of people fast and let the product tell you what it needs next.</p>
            <p>AI didn't make the decisions. It removed the friction around them. What to build, what to cut, what to defer — those calls were still mine. That's where the product thinking lives, and no tool replaces it.</p>
            <p>What I'm taking forward isn't just a workflow. It's a clearer sense of how to move from idea to testable product without losing the rigor that makes the result worth testing. Faster doesn't mean careless. It means fewer reasons to stall.</p>
            <p>I naturally tend to think big and design complex ideas — so a big part of this project was experimenting with how to scale that down into something smaller and testable. Focusing on what’s needed to validate an idea, rather than building everything at once, is something I’m continuing to refine.</p>
          </div>

          <ProjectNav
            prev={{ to: '/projects/casestudy-lanotte', title: 'La Notte Brand & App Concept' }}
            next={{ to: '/projects/casestudy-realstreet', title: 'Real Street Festival' }}
          />
          <Footer />
        </div>
      </CaseStudyLayout>
    </>
  )
}
