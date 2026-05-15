import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCaseBySlug } from '../cases/index.js'
import ReadingProgress from '../components/layout/ReadingProgress.jsx'
import NotFound from './NotFound.jsx'

export default function CasePage() {
  const { slug }   = useParams()
  const navigate   = useNavigate()
  const caseData   = getCaseBySlug(slug)
  const [sections, setSections] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!caseData) return
    window.scrollTo(0, 0)

    const t = setTimeout(() => {
      const headings = document.querySelectorAll('.case-study section h2')
      const items = Array.from(headings).map((el, i) => {
        const id = `section-${i}`
        el.id = id
        return { id, text: el.textContent }
      })
      setSections(items)
    }, 100)

    return () => clearTimeout(t)
  }, [slug, caseData])

  useEffect(() => {
    if (!sections.length) return

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [sections])

  if (!caseData) return <NotFound />

  const CaseComponent = caseData.component

  return (
    <>
      <ReadingProgress />
      <div className="case-page">

        {/* ── SIDEBAR ── */}
        <aside className="case-sidebar">
          <button className="sidebar-back" onClick={() => navigate('/')}>
            ← All cases
          </button>

          <div className="sidebar-meta">
            <span className="sidebar-meta__label">Case</span>
            <span className="sidebar-meta__value">{caseData.number} of {1}</span>

            <span className="sidebar-meta__label">Industry</span>
            <span className="sidebar-meta__value">{caseData.industry}</span>

            <span className="sidebar-meta__label">Business Type</span>
            <span className="sidebar-meta__value">{caseData.firm}</span>

            <span className="sidebar-meta__label">Framework</span>
            <span className="sidebar-meta__value">{caseData.framework}</span>

            <span className="sidebar-meta__label">Decision Type</span>
            <span className="sidebar-meta__value">{caseData.decisionType}</span>

            <span className="sidebar-meta__label">Region</span>
            <span className="sidebar-meta__value">{caseData.region}</span>

            <span className="sidebar-meta__label">Read Time</span>
            <span className="sidebar-meta__value">{caseData.readTime}</span>
          </div>

          {sections.length > 0 && (
            <>
              <div className="sidebar-divider" />
              <nav className="sidebar-nav">
                <p className="sidebar-nav__title">Sections</p>
                <ul className="sidebar-nav__list">
                  {sections.map(s => (
                    <li key={s.id} className="sidebar-nav__item">
                      <a
                        href={`#${s.id}`}
                        className={activeId === s.id ? 'active' : ''}
                        onClick={e => {
                          e.preventDefault()
                          document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        {s.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </aside>

        {/* ── CASE CONTENT ── */}
        <div className="case-content">
          <CaseComponent />
        </div>

      </div>
    </>
  )
}
