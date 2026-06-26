import { Link } from 'react-router-dom'

/* Prev / All / Next footer navigation between case studies. */
export default function ProjectNav({ prev, next }) {
  return (
    <div className="project-nav">
      <Link to={prev.to} className="project-nav-item">
        <span className="nav-direction">← Previous</span>
        <span className="nav-project-title">{prev.title}</span>
      </Link>
      <Link to="/projects" className="btn-all-projects">All Projects</Link>
      <Link to={next.to} className="project-nav-item project-nav-item--right">
        <span className="nav-direction">Next →</span>
        <span className="nav-project-title">{next.title}</span>
      </Link>
    </div>
  )
}
