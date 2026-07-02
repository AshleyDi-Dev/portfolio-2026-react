import Seo from '../../components/Seo.jsx'
import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import ProjectNav from '../../components/ProjectNav.jsx'
import Footer from '../../components/Footer.jsx'

const SECTIONS = [
  { id: 'cs-pg2', label: 'Overview' },
  { id: 'cs-pg3', label: 'The Challenge' },
  { id: 'cs-pg4', label: 'Key Risks' },
  { id: 'cs-pg5', label: 'Discovery' },
  { id: 'cs-pg6', label: 'Sprint Scope' },
  { id: 'cs-pg7', label: 'Phase Breakdown' },
  { id: 'cs-pg8', label: 'User Testing — Round 1' },
  { id: 'cs-pg9', label: 'User Testing — Round 2' },
  { id: 'cs-pg10', label: 'Results' },
  { id: 'cs-pg11', label: 'Next Steps' },
  { id: 'cs-pg12', label: 'Reflection' },
]

export default function FireWatchBC() {
  return (
    <>
      <Seo
        title="FireWatch BC — Case Study"
        description="Lean UX case study for a wildfire awareness app, featuring user research, prototyping, and iterative testing to validate solutions."
        ogType="article"
        url="https://ashleydibuduo.ca/projects/casestudy-firewatchbc"
        ogTitle="FireWatch BC Case Study | Ashley DiBuduo"
        ogDescription="A Lean UX mobile concept focused on wildfire awareness, alerts, and user-centered iteration."
        image="https://ashleydibuduo.ca/images/og/casestudy-firewatchpreview.png"
        imageAlt="FireWatch BC Case Study Preview Image"
        twitterTitle="FireWatch BC Case Study | Ashley DiBuduo"
        twitterDescription="A Lean UX mobile concept focused on wildfire awareness, alerts, and user-centered iteration."
      />

      <CaseStudyLayout sections={SECTIONS}>
        {/* PAGE 1 — HERO + DETAILS BAR */}
        <div id="cs-pg1" className="page firewatch-page-hero">
          <section className="cs-hero">
            <img src="/images/case-studies/FirewatchBC-Hero.png" width="3000" height="2201" alt="FireWatch BC App Screens" />
            <div className="cs-hero-gradient"></div>
            <div className="cs-hero-content">
              <h1>FireWatch BC <span>Wildfire App</span></h1>
              <p className="hero-subtitle">Project Manager — UX Research &amp; Delivery · BCIT New Media Design</p>
              <div className="hero-tags firewatch-hero-tags">
                <span className="hero-tag primary">Product Thinking</span>
                <span className="hero-tag primary">Lean UX</span>
                <span className="hero-tag primary">UX Research</span>
                <span className="hero-tag primary">Usability Testing</span>
                <span className="hero-tag primary">Scope &amp; Prioritization</span>
              </div>
            </div>
          </section>

          <div className="details-bar fade-in">
            <div className="detail-item">
              <div className="detail-label">My Role</div>
              <div className="detail-value">Project Manager — UX Research &amp; Delivery</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Client</div>
              <div className="detail-value">Academic UX Project (BC Social Issue)</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Team</div>
              <div className="detail-value">4-Person UX &amp; Design Team</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Delivery</div>
              <div className="detail-value">Lean UX · 8-Week Multi-Phase Design Cycle</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Tools</div>
              <div className="detail-value">Figma · Google Forms · MAZE · Google Drive</div>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* PAGE 2 — OVERVIEW */}
        <div id="cs-pg2" className="page fade-in firewatch-overview-page">
          <div className="cs-text-section">
            <div className="section-label">Overview</div>
            <h2>A real issue. <span>Real users.</span> Eight weeks to validate a solution.</h2>
            <p className="body-text">FireWatch BC is a mobile app concept for BC residents to quickly understand wildfire conditions, receive clear alerts, and know what actions to take in an emergency. We started with a broader natural disaster system but quickly focused on wildfires, enabling the project to be built and tested within 8 weeks. Scoping down early was a key PM decision.</p>
            <p className="body-text">As Project Manager, I led a four-person team through an eight-week Lean UX sprint.</p>
            <p><strong className="firewatch-kicker">What I owned</strong></p>
            <ul className="firewatch-list firewatch-list-tight">
              <li>Maintaining the product backlog, defining sprint themes, and setting weekly team focus</li>
              <li>The research infrastructure — survey design, interview questions, task scenarios, and task cards</li>
              <li>The journey map</li>
              <li>All research documentation and findings synthesis</li>
              <li>The full round one usability testing plan, facilitation, and report</li>
            </ul>
            <p><strong className="firewatch-kicker">What was collaborative</strong></p>
            <ul className="firewatch-list firewatch-list-tight">
              <li>Ideation</li>
              <li>Research direction</li>
              <li>The MAZE validation test in round two, which a teammate led with my support</li>
            </ul>
            <p className="body-text">I spent the most time translating research — turning raw findings from surveys, interviews, and testing into clear, prioritized insights the team could act on.</p>
          </div>
        </div>

        {/* PAGE 3 — PROBLEM & HYPOTHESIS */}
        <div id="cs-pg3" className="page fade-in firewatch-hypothesis-page">
          <div className="cs-split">
            <div className="cs-split-text">
              <div className="section-label">The Challenge</div>
              <h2>Designing for users <span>under pressure.</span></h2>
              <p>BC residents lack a single reliable source of wildfire information during emergencies. Existing tools are fragmented, text-heavy, cluttered—built for calm, not crisis. When someone needs to know right now whether to evacuate, a confusing interface isn't a UX issue. It's a safety risk.</p>
              <p>Four user groups were identified: residents in wildfire-prone areas, who urgently need evacuation guidance and localized updates; people travelling near active fires, who need timely alerts and route information to avoid danger zones; families and caregivers, requiring clear, actionable steps to ensure dependents' safety; and people new to wildfire risk in BC, who need introductory information to understand alerts and appropriate actions. All share the same core need — clear, trustworthy information with an unambiguous action prompt.</p>
              <p className="firewatch-hypothesis-callout">Hypothesis: A reliable, clear, easy-to-use wildfire app that minimizes confusion for BC residents will result in quicker decision-making and response times during emergencies.</p>
            </div>
            <div className="cs-split-image firewatch-image-panel">
              <img loading="lazy" src="/images/case-studies/FireWatchBC-JourneyMap.png" width="1303" height="1045" alt="UX Artifact, User Journey Map" />
            </div>
          </div>
        </div>

        {/* PAGE 4 — RISKS */}
        <div id="cs-pg4" className="page firewatch-risks-page fade-in">
          <div className="cs-risks-band firewatch-risks-band">
            <div className="section-label">Key Risks &amp; How I Handled Them</div>
            <h2>Anticipating what could <span>go wrong.</span></h2>
            <div className="risks-grid">
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Designing for High-Stress Emergency Scenarios</h3>
                  <p>During wildfires, time and stakes are high. Poor interface design isn’t frustrating—it’s dangerous. The app had to work for users under stress, not just in ideal conditions.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>If users couldn't quickly interpret alerts or navigate the interface, the app would fail to provide meaningful support at the exact moment it was needed.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Conducted early user research through surveys and interviews to understand how residents currently access wildfire information and what they prioritize during emergencies. Those insights directly shaped design principles focused on clarity, simplicity, and fast access to critical information.</p>
                </div>
              </div>
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Limited Time for Iterative Design and Testing</h3>
                  <p>Our tight timeline demanded fast concepting and quick prototypes. Little room for iteration meant untested design decisions could embed usability issues too late to fix.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Without early testing, the design could have been built on assumptions rather than user behaviour, increasing the likelihood that usability issues would reach the final prototype.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>Adopted a Lean UX process from the start — beginning with low-fidelity sketches and assumptions to test ideas quickly before committing to higher-fidelity development. Moderated usability testing at the medium-fidelity stage allowed us to identify pain points early.</p>
                </div>
              </div>
              <div className="risk-card">
                <div>
                  <div className="risk-section-title">Risk</div>
                  <h3>Feature Creep Against a Fixed MVP Scope</h3>
                  <p>The team regularly suggested new features that, while reasonable individually, could have threatened the core experience and timeline with our tight MVP scope.</p>
                </div>
                <div>
                  <div className="risk-section-title">Impact</div>
                  <p>Scope expansion mid-project would have diluted design decisions, compressed testing time, and made it harder to validate whether the core functionality actually worked for users.</p>
                </div>
                <div>
                  <div className="risk-section-title">How I Handled It</div>
                  <p>I kept the team focused on the MVP by using sprint planning to prioritize essential work and to redirect feature creep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 5 — DISCOVERY */}
        <div id="cs-pg5" className="page fade-in firewatch-findings-page">
          <div className="cs-split">
            <div className="cs-split-text firewatch-findings-text">
              <div className="section-label">Discovery</div>
              <h2>Grounding decisions <span>in real user behaviour.</span></h2>
              <p>I built the research infrastructure—surveys, interviews, documentation—and synthesized findings into actionable insights. The journey map kept teams anchored to real user scenarios, not abstract features.</p>
              <p>We ran a 10-question survey with 12 participants and interviewed 2, focusing on how residents get wildfire information, where tools break down, and what they need first in an emergency.</p>
              <p><strong className="firewatch-kicker">Key findings</strong></p>
              <ul className="firewatch-list firewatch-list-tight">
                <li>A real-time map was the #1 desired feature.</li>
                <li>Users were anxious about notification volume — they didn't want to be overwhelmed.</li>
                <li>Offline functionality was a firm expectation, not a nice-to-have.</li>
                <li>Most users don't actually know what to do during a wildfire emergency.</li>
                <li>Existing apps were seen as too text-heavy and cluttered.</li>
                <li>Users strongly preferred simple, large, uncluttered UI elements.</li>
              </ul>
              <p>The clearest signal across all research: users don't want <em>more</em> information during an emergency — they want <em>less</em>, presented with a clear hierarchy and a clear prompt for what to do next. That insight drove every subsequent scope and prioritization decision.</p>
            </div>
            <div className="cs-split-image firewatch-chart-panel">
              <img loading="lazy" src="/images/case-studies/FirewatchBC-SurveyChart.png" width="734" height="764" alt="Survey Data Infographic" />
              <span className="firewatch-chart-caption-dark">Survey Data</span>
            </div>
          </div>
        </div>

        {/* PAGE 6 — SCOPE & PRIORITIZATION */}
        <div id="cs-pg6" className="page fade-in firewatch-sprint-page">
          <div className="cs-split">
            <div className="cs-split-image firewatch-sprint-image-panel">
              <img loading="lazy" src="/images/case-studies/FirewatchBC-SprintTaskBreakdown.png" width="2861" height="1547" alt="Sprint-by-Sprint Task Breakdown Chart" />
              <span className="firewatch-chart-caption-light">Project tracking log — sprint themes and weekly task breakdown</span>
            </div>
            <div className="cs-split-text firewatch-sprint-text">
              <div className="section-label">Scope Management</div>
              <h2>The most persistent challenge <span>wasn't design.</span></h2>
              <p>Throughout the project, the team consistently surfaced new feature ideas — each reasonable in isolation, each a risk to the core emergency flow if added. I maintained the product backlog and defined sprint themes weekly, but the real work was evaluating additions against a single question.</p>
              <div className="firewatch-sprint-quote-wrap">
                <p className="firewatch-sprint-quote">"Does this make the core emergency experience work better — or does it make it more complex?"</p>
              </div>
              <p>Anything that couldn't answer that clearly went to the backlog. Sprint themes reinforced focus. Research identified six areas worth solving: a real-time map, location-based notifications, simplified UI, evacuation guidance, clutter-free information, and offline access. Keeping the team focused on getting those six things right mattered more than expanding features.</p>
              <p>This is the same judgment call I'd apply in any product context: not "is this a good idea" but "is this the right call right now."</p>
            </div>
          </div>
        </div>

        {/* PAGE 7 — PHASE BREAKDOWN */}
        <div id="cs-pg7" className="page firewatch-phase-page fade-in">
          <div className="cs-phases">
            <div className="section-label">Phase Breakdown</div>
            <h2>Research first. <span>Design second.</span></h2>
            <div className="cs-phase-list">
              <div className="cs-phase-item">
                <strong>Research &amp; Discovery</strong>
                <p>The team set out to understand how BC residents currently access wildfire information and where existing tools break down. I designed and distributed the survey, conducted all interviews, and documented incoming findings — then synthesized everything into a report that the team used to align on direction.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Challenge Framing</strong>
                <p>Armed with research, the team defined the challenge, opportunity areas, assumptions, and hypothesis. I created the journey map, translating findings into a unified view of user emotions and decisions throughout a wildfire event to anchor design in real behaviour, rather than assumptions.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Design Exploration</strong>
                <p>The team ran a partial design studio using Crazy 8's sketching to rapidly generate interface concepts, then aligned on the strongest ideas to define the core MVP user flow. I participated in ideation and kept scope decisions tied to what research had surfaced — flagging anything that risked overcomplicating the core experience.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Wireframing &amp; Prototype Development</strong>
                <p>The team built low- and mid-fidelity wireframes and prototypes. I maintained the backlog and defined sprint themes throughout, keeping everyone focused on the MVP amid feature creep.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Usability Testing &amp; Iteration</strong>
                <p>We conducted moderated usability testing with five participants. I wrote the full test plan, led two sessions, and produced the Traffic Light Report and the insights documentation that drove the revision round.</p>
              </div>
              <div className="cs-phase-item">
                <strong>Validation Testing &amp; Closeout</strong>
                <p>A teammate led the MAZE test; I contributed to task design and reviewed results. The final prototype and documentation were delivered with 100% completion across all MAZE scenarios.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 8 — TESTING ROUND 1 */}
        <div id="cs-pg8" className="page fade-in firewatch-round-two-page">
          <div className="cs-split">
            <div className="cs-split-text firewatch-round-two-text">
              <div className="section-label">User Testing — Round 1</div>
              <h2>Finding what looks fine <span>in a design file.</span></h2>
              <p>I wrote the full round one test plan — nine tasks with follow-up questions probing app behaviour and task completion, post-test questions, and task cards for each participant. The team facilitated five moderated sessions; I personally ran one. I then produced the Traffic Light Report and insights documentation that shaped the revision round — synthesizing what five different participants surfaced into a clear, prioritized set of changes.</p>
              <p><strong className="firewatch-kicker">What we found</strong></p>
              <ul className="firewatch-list firewatch-list-zero">
                <li>Users couldn't return to previous onboarding pages—a dead end in a critical information flow.</li>
                <li>The notification button on the home screen was non-functional.</li>
                <li>Shelter results showed an undifferentiated list instead of proximity-sorted options.</li>
                <li>Checklist required tapping a small checkbox — high friction for a task users need to complete quickly.</li>
                <li>Map icons weren't behaving as expected, and pop-up info didn't align with user mental models.</li>
              </ul>
              <p>None of these would have been caught without testing. Each one was a moment where the app would have failed the user at exactly the wrong time.</p>
            </div>
            <div className="cs-split-image firewatch-results-visuals">
              <div className="firewatch-results-card">
                <img loading="lazy" src="/images/case-studies/FireWatchBC-TrafficLightReport.png" width="1766" height="1136" alt="Traffic Light Report" />
              </div>
              <span className="firewatch-results-label">Traffic Light Report</span>
            </div>
          </div>
        </div>

        {/* PAGE 9 — TESTING ROUND 2 + MAZE */}
        <div id="cs-pg9" className="page fade-in firewatch-maze-page">
          <div className="cs-split">
            <div className="cs-split-image firewatch-maze-panel">
              <div className="firewatch-maze-column">
                <img loading="lazy" src="/images/case-studies/FireWatchBC-HeatMap1.png" width="854" height="1866" alt="MAZE Heatmap Homescreen" />
                <span className="firewatch-maze-caption">MAZE Heatmap — Task 7</span>
              </div>
              <div className="firewatch-maze-column">
                <img loading="lazy" src="/images/case-studies/FireWatchBC-HeatMap2.png" width="882" height="1916" alt="MAZE Heatmap Immediate Actions" />
                <span className="firewatch-maze-caption">MAZE Heatmap — Task 6</span>
              </div>
            </div>
            <div className="cs-split-text firewatch-round-two-text">
              <div className="section-label">User Testing — Round 2</div>
              <h2>Validating the fixes <span>without a safety net.</span></h2>
              <p>Round two used an unmoderated MAZE test, led by a teammate with my support on task design and results review. The methodological shift was deliberate: moderated testing tells you what fails and why; unmoderated testing tells you whether fixes hold up without anyone guiding the participant. That's the condition that matters.</p>
              <p><strong className="firewatch-kicker">Highlights by task</strong></p>
              <ul className="firewatch-list firewatch-list-zero firewatch-maze-list">
                <li><strong>Home screen:</strong> Users clicked the fire notification above the fold — the placement was intentional and confirmed.</li>
                <li><strong>Evacuation guidance:</strong> 4 of 5 clicked "Immediate Actions" first — matched expectations.</li>
                <li><strong>Shelter finding:</strong> Restructured navigation resolved all round-one confusion. All users completed as intended.</li>
                <li><strong>One gap flagged:</strong> Heat maps showed significant taps on "search location" — a screen that hadn't been built yet. Noted for a future iteration.</li>
              </ul>
              <p>The project achieved <strong>100% task completion across all seven tasks</strong> in round two — a direct result of the changes made from round one findings.</p>
            </div>
          </div>
        </div>

        {/* PAGE 10 — RESULTS */}
        <div id="cs-pg10" className="page fade-in firewatch-results-page">
          <div className="cs-split">
            <div className="cs-split-text firewatch-results-text">
              <div className="section-label firewatch-results-label-top">Results</div>
              <h2>What the testing <span>confirmed.</span></h2>
              <p>By the second round, the project achieved 100% task completion across all seven scenarios — a direct result of catching and fixing usability failures at medium-fidelity, before they were locked into the final prototype.</p>
              <div className="firewatch-results-stack">
                <div className="fw-stat-item">
                  <span className="fw-stat-number">100%</span>
                  <span className="fw-stat-label">Task completion — round 2</span>
                </div>
                <div className="fw-stat-item">
                  <span className="fw-stat-number">2×</span>
                  <span className="fw-stat-label">Rounds of user testing</span>
                </div>
                <div className="fw-stat-item">
                  <span className="fw-stat-number">14</span>
                  <span className="fw-stat-label">Survey &amp; interview participants</span>
                </div>
              </div>
            </div>
            <div className="cs-split-image prototype-image-panel">
              <img loading="lazy" src="/images/case-studies/FirewatchBC-prototypeimage.png" width="968" height="1984" alt="Firewatch BC interactive prototype preview" />
              <a href="https://www.figma.com/proto/AMk89fdupqHoDqwhadFOkB/FireWatch-BC--Ashley-Copy---For-Portfolio-?node-id=1007-3185&scaling=scale-down&content-scaling=fixed&page-id=1007%3A3134&starting-point-node-id=1007%3A3185&hide-ui=1" target="_blank" rel="noopener noreferrer" className="prototype-link">
                View Interactive Prototype ↗
              </a>
            </div>
          </div>
        </div>

        {/* PAGE 11 — WHAT'S NEXT */}
        <div id="cs-pg11" className="page fade-in firewatch-next-steps-page">
          <div className="firewatch-next-steps-wrap">
            <div className="section-label firewatch-next-steps-label">Next Steps</div>
            <h2 className="firewatch-next-steps-heading">What this would look like <span>if it shipped.</span></h2>
            <p className="firewatch-next-steps-intro">FireWatch BC ended as a validated prototype. The research, testing findings, and round two heatmap data all point toward a clear next chapter — and thinking through what that looks like is where the PM work doesn't stop.</p>

            <div className="next-steps-grid">
              <div className="firewatch-next-step-card firewatch-next-step-card--periwinkle">
                <p className="firewatch-next-step-title firewatch-next-step-title--periwinkle">If I Built It Again</p>
                <p className="firewatch-next-step-copy">The Enter Your Location screen needs clearer separation — right now, the search radius and save location fields share the same space, creating confusion. A revision would split them into two distinct actions: a Search Location input and a Save Location button, each with its own clear affordance.</p>
              </div>

              <div className="firewatch-next-step-card firewatch-next-step-card--chartreuse">
                <p className="firewatch-next-step-title firewatch-next-step-title--chartreuse">The Metric I'd Move First</p>
                <p className="firewatch-next-step-copy">Time-to-critical-action — how long it takes a user to reach the information they need from the moment they open the app. Every design decision in this project was implicitly optimizing for that number. A V2 would make it explicit: define a target, instrument it, and test against it.</p>
              </div>

              <div className="firewatch-next-step-card firewatch-next-step-card--muted">
                <p className="firewatch-next-step-title firewatch-next-step-title--muted">Market Position</p>
                <p className="firewatch-next-step-copy">FireWatch BC sits alongside BC Emergency Alert and DriveBC — both government-operated, both fragmented, neither designed for stress-compressed decision-making. The opportunity is to sit above them as a clarity layer — pulling from multiple sources and presenting a single, clear action prompt.</p>
              </div>
            </div>

            <p className="firewatch-next-steps-note">What I'd push for before any of this: recruiting participants with real evacuation experience. Someone who has actually made that call under pressure would surface behaviours that a task scenario can't replicate.</p>
          </div>
        </div>

        {/* PAGE 12 — REFLECTION + FOOTER */}
        <div id="cs-pg12" className="page fade-in firewatch-reflection-page">
          <div className="cs-reflection firewatch-reflection-section">
            <div className="section-label">Reflection</div>
            <h2>What this <span>taught me.</span></h2>
            <p>The most valuable testing is the testing you do before you're confident the design is ready. Every issue we found in round one looked fine in the design file, but was caught when a real user faced a real task. Lean UX isn't just about catching issues early — it's about asking the right questions before you've put too much into the wrong ones. It's especially useful when you have a design idea and want quick feedback before committing to it — because the worst outcome isn't a failed test, it's spending real time and effort only to discover you were solving the wrong problem. That realization changes how you approach every phase of the work.</p>
          </div>

          <ProjectNav
            prev={{ to: '/projects/casestudy-knowledgedatabase', title: 'AI Knowledge Database' }}
            next={{ to: '/projects/casestudy-lanotte', title: 'La Notte Brand & App Concept' }}
          />
          <Footer />
        </div>
      </CaseStudyLayout>
    </>
  )
}
