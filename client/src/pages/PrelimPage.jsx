import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPrelimBySlug } from '../prelims/index.js'
import ReadingProgress from '../components/layout/ReadingProgress.jsx'
import NotFound from './NotFound.jsx'

export default function PrelimPage() {
  const { slug }    = useParams()
  const navigate    = useNavigate()
  const prelimData  = getPrelimBySlug(slug)
  const [sections, setSections] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!prelimData) return
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
  }, [slug, prelimData])

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

  if (!prelimData) return <NotFound />

  const PrelimComponent = prelimData.component

  return (
    <>
      <ReadingProgress />
      <div className="case-page">

        {/* ── SIDEBAR ── */}
        <aside className="case-sidebar">
          <button className="sidebar-back" onClick={() => navigate('/')}>
            ← All modules
          </button>

          <div className="sidebar-meta">
            <span className="sidebar-meta__label">Module</span>
            <span className="sidebar-meta__value">{prelimData.moduleId}</span>

            <span className="sidebar-meta__label">Category</span>
            <span className="sidebar-meta__value">{prelimData.module.split(' · ')[1]}</span>

            <span className="sidebar-meta__label">Concept</span>
            <span className="sidebar-meta__value">{prelimData.concept}</span>

            <span className="sidebar-meta__label">Level</span>
            <span className="sidebar-meta__value">{prelimData.difficulty}</span>

            <span className="sidebar-meta__label">Read Time</span>
            <span className="sidebar-meta__value">{prelimData.readTime}</span>

            {prelimData.unlocksCase?.length > 0 && (
              <>
                <span className="sidebar-meta__label">Unlocks</span>
                <span className="sidebar-meta__value">{prelimData.unlocksCase.join(', ')}</span>
              </>
            )}
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

        {/* ── PRELIM CONTENT ── */}
        <div className="case-content">
          <PrelimComponent />
        </div>

      </div>
    </>
  )
}
