import { useNavigate } from 'react-router-dom'

export default function CaseCard({ caseData }) {
  const navigate = useNavigate()
  const { slug, number, title, subtitle, industry, firm, framework,
          difficulty, region, readTime, accentColor } = caseData

  return (
    <article
      className="case-card"
      onClick={() => navigate(`/case/${slug}`)}
      style={{ '--card-accent': accentColor }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`/case/${slug}`)}
    >
      <div className="case-card__header">
        <span className="case-card__number">Case {number}</span>
        <span className="case-card__firm-badge">{firm}</span>
      </div>

      <div>
        <h2 className="case-card__title">{title}</h2>
        <p className="case-card__subtitle">{subtitle}</p>
      </div>

      <div className="case-card__tags">
        <span className="tag tag--industry">{industry}</span>
        <span className="tag tag--framework">{framework}</span>
        <span className="tag tag--difficulty">{difficulty}</span>
      </div>

      <div className="case-card__footer">
        <span className="case-card__read-time">
          <span>⏱</span> {readTime} · {region}
        </span>
        <span className="case-card__cta">
          Read case →
        </span>
      </div>
    </article>
  )
}
