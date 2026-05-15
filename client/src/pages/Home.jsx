import { useState, useMemo } from 'react'
import { cases } from '../cases/index.js'
import { prelims } from '../prelims/index.js'
import CaseCard from '../components/case/CaseCard.jsx'
import PrelimCard from '../components/case/PrelimCard.jsx'

const INDUSTRY_FILTERS = [
  'All Industries',
  'Food & Beverage',
  'Retail',
  'Services',
  'Manufacturing',
]

const DIFFICULTY_FILTERS = ['All Levels', 'Beginner', 'Intermediate']

export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState('All Industries')
  const [activeDifficulty, setActiveDifficulty] = useState('All Levels')

  const filtered = useMemo(() => {
    return cases.filter(c => {
      const indOk  = activeIndustry === 'All Industries' || c.industry === activeIndustry
      const diffOk = activeDifficulty === 'All Levels' || c.difficulty === activeDifficulty
      return indOk && diffOk
    })
  }, [activeIndustry, activeDifficulty])

  return (
    <>
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="page-container">
          <div className="home-hero__eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Beginner Business Cases</span>
          </div>

          <h1 className="home-hero__title">
            Real business problems,<br />
            <em>explained simply</em>
          </h1>

          <p className="home-hero__desc">
            Step-by-step case studies for anyone learning how small businesses
            work — with real numbers, clear frameworks, and practical takeaways
            you can use from day one.
          </p>

          <div className="home-hero__meta">
            <span className="meta-pill">
              <span className="meta-pill__dot" />
              Beginner friendly
            </span>
            <span className="meta-pill">
              <span className="meta-pill__dot" style={{ background: 'var(--accent-2)' }} />
              Step-by-step math
            </span>
            <span className="meta-pill">
              <span className="meta-pill__dot" style={{ background: 'var(--gold)' }} />
              Real business concepts
            </span>
            <span className="meta-pill">
              <span className="meta-pill__dot" style={{ background: 'var(--accent-3)' }} />
              No jargon
            </span>
          </div>
        </div>
      </section>

      {/* ── FOUNDATION SECTION ── */}
      <div className="page-container">
        <div className="section-header">
          <div className="section-header__eyebrow">Start Here</div>
          <h2 className="section-header__title">Foundation Modules</h2>
          <p className="section-header__desc">
            Build your vocabulary before diving into the cases. Each module teaches one
            core concept with worked numbers and real business examples.
          </p>
        </div>
        <div className="cases-grid">
          {prelims.map(p => (
            <PrelimCard key={p.id} prelimData={p} />
          ))}
        </div>
      </div>

      {/* ── CASES SECTION HEADER ── */}
      <div className="page-container" style={{ paddingTop: '48px' }}>
        <div className="section-header">
          <div className="section-header__eyebrow">Apply the Concepts</div>
          <h2 className="section-header__title">Case Studies</h2>
          <p className="section-header__desc">
            Real small business problems — solved step by step with the frameworks you've just learned.
          </p>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="page-container">
        <div className="filters-bar">
          <span className="filter-label">Industry</span>
          {INDUSTRY_FILTERS.map(ind => (
            <button
              key={ind}
              className={`filter-chip ${activeIndustry === ind ? 'active' : ''}`}
              onClick={() => setActiveIndustry(ind)}
            >
              {ind === 'All Industries' ? 'All' : ind}
            </button>
          ))}

          <span className="filter-label" style={{ marginLeft: '16px' }}>Level</span>
          {DIFFICULTY_FILTERS.map(d => (
            <button
              key={d}
              className={`filter-chip ${activeDifficulty === d ? 'active' : ''}`}
              onClick={() => setActiveDifficulty(d)}
            >
              {d === 'All Levels' ? 'All' : d}
            </button>
          ))}
        </div>

        {/* ── CASE GRID ── */}
        {filtered.length > 0 ? (
          <div className="cases-grid">
            {filtered.map(c => (
              <CaseCard key={c.id} caseData={c} />
            ))}
          </div>
        ) : (
          <div style={{ padding: '64px 0', textAlign: 'center', color: 'var(--ink-4)' }}>
            <p style={{ fontSize: '15px' }}>No cases match those filters.</p>
            <button
              style={{ marginTop: '12px', color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}
              onClick={() => { setActiveIndustry('All Industries'); setActiveDifficulty('All Levels') }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  )
}
