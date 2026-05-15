import { useNavigate } from 'react-router-dom'

export default function PrelimCard({ prelimData }) {
  const navigate = useNavigate()
  const { slug, moduleId, module, title, subtitle, concept, readTime, accentColor } = prelimData

  return (
    <article
      className="case-card prelim-card"
      onClick={() => navigate(`/foundation/${slug}`)}
      style={{ '--card-accent': accentColor }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`/foundation/${slug}`)}
    >
      <div className="case-card__header">
        <span className="case-card__number">{moduleId}</span>
        <span className="case-card__firm-badge">Foundation</span>
      </div>

      <div>
        <p className="prelim-card__module">{module}</p>
        <h2 className="case-card__title">{title}</h2>
        <p className="case-card__subtitle">{subtitle}</p>
      </div>

      <div className="case-card__tags">
        <span className="tag tag--framework">{concept}</span>
        <span className="tag tag--difficulty">Foundation</span>
      </div>

      <div className="case-card__footer">
        <span className="case-card__read-time">
          <span>⏱</span> {readTime}
        </span>
        <span className="case-card__cta">
          Study →
        </span>
      </div>
    </article>
  )
}
