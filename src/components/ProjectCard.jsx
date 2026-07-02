import { Link } from 'react-router-dom'

/*
 * Vertical project card shared by the Home featured grid and the Projects page.
 * `showMeta` renders the Role/Type block (Projects page only); `titleAs` keeps
 * the original heading levels (h3 on Home, h2 on Projects).
 */
export default function ProjectCard({
  to,
  image,
  alt,
  tag,
  title,
  desc,
  tools = [],
  role,
  type,
  showMeta = false,
  titleAs: TitleTag = 'h2',
  hidden = false,
  cardBg,
  imageFill = false,
}) {
  return (
    <Link to={to} className={`project-card-link${hidden ? ' hidden' : ''}`}>
      <div className="project-card project-card-vertical">
        <div
          className={`project-card-image${imageFill ? ' project-card-image--fill' : ''}`}
          style={cardBg ? { backgroundColor: cardBg } : undefined}
        >
          <img src={image} alt={alt} />
        </div>
        <div className="project-card-body">
          <div className="project-card-top">
            <span className="project-tag pm">{tag}</span>
            <TitleTag className="project-title">{title}</TitleTag>
            <p className="project-desc">{desc}</p>
          </div>
          <div className="project-card-actions">
            <span className="btn-primary">View Project →</span>
          </div>
          {showMeta && (
            <div className="project-meta">
              <div className="project-meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{role}</span>
              </div>
              <div className="project-meta-item">
                <span className="meta-label">Type</span>
                <span className="meta-value">{type}</span>
              </div>
            </div>
          )}
          <div className="project-tool-tags">
            {tools.map((t) => (
              <span className="tool-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
