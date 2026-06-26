import { RESUME } from '../data/site.js'

export default function Footer() {
  return (
    <footer>
      <span className="footer-name">Ashley DiBuduo · Vancouver, BC</span>
      <ul className="footer-links">
        <li><a href="https://www.linkedin.com/in/ashleydibuduo/" target="new">LinkedIn</a></li>
        <li><a href="https://github.com/AshleyDi-Dev" target="new">GitHub</a></li>
        <li><a href={RESUME} target="new">Resume</a></li>
      </ul>
    </footer>
  )
}
