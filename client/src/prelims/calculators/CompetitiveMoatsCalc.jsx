import { useState } from 'react'

const accent = '#0D6B50'

const DIMS = [
  { key: 'sw', label: 'Switching costs',         color: '#1D9E75' },
  { key: 'ne', label: 'Network effects',          color: '#4A41A8' },
  { key: 'ca', label: 'Cost advantages',          color: '#BA7517' },
  { key: 'ia', label: 'Intangibles (brand / IP)', color: '#1357A6' },
  { key: 'es', label: 'Efficient scale',          color: '#C94F28' },
]

export default function CompetitiveMoatsCalc() {
  const [scores, setScores] = useState({ sw: 7, ne: 5, ca: 4, ia: 6, es: 3 })

  const set = (key) => (e) => setScores(s => ({ ...s, [key]: Number(e.target.value) }))

  const total   = Object.values(scores).reduce((a, b) => a + b, 0) * 2
  const maxDim  = DIMS.reduce((a, d) => scores[d.key] > scores[a.key] ? d : a, DIMS[0])
  const minDim  = DIMS.reduce((a, d) => scores[d.key] < scores[a.key] ? d : a, DIMS[0])
  const width   = total >= 70 ? 'Wide' : total >= 40 ? 'Moderate' : 'Narrow'
  const wColor  = total >= 70 ? 'var(--accent-3)' : total >= 40 ? 'var(--gold)' : 'var(--accent)'

  const insight = width === 'Wide'
    ? `Strong moat of ${total}/100 across multiple dimensions. Competitive advantage is durable — price premium is likely to persist.`
    : width === 'Moderate'
    ? `Moderate moat of ${total}/100. Some defensibility but not impenetrable. Competitors will probe ${minDim.label.toLowerCase()} first.`
    : `Narrow moat of ${total}/100. Exposed to competitive attack. Without differentiation, margins compress toward commodity levels.`

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Moat Scorer — Rate Each Dimension 0–10</div>

      <div className="calc-sliders">
        {DIMS.map(({ key, label }) => (
          <div key={key} className="calc-row">
            <label className="calc-row__label">{label}</label>
            <input type="range" min={0} max={10} step={1} value={scores[key]}
              className="calc-row__range" style={{ accentColor: accent }}
              onChange={set(key)} />
            <span className="calc-row__val">{scores[key]}/10</span>
          </div>
        ))}
      </div>

      {/* Bar visualization */}
      <div style={{ marginTop: '14px', marginBottom: '12px' }}>
        {DIMS.map(({ key, label, color }) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px' }}>
            <div style={{ fontSize: '12px', color: 'var(--ink-3)', width: '170px', flexShrink: 0 }}>{label}</div>
            <div style={{ flex: 1, height: '24px', background: 'var(--bg-alt)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${scores[key] * 10}%`, height: '100%', background: color,
                display: 'flex', alignItems: 'center', padding: '0 8px',
                fontSize: '11px', fontWeight: 600, color: '#fff', transition: 'width .2s' }}>
                {scores[key] > 2 ? `${scores[key]}/10` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="calc-metrics">
        {[
          { label: 'Overall moat score', value: `${total}/100`, color: wColor },
          { label: 'Moat width',         value: width,           color: wColor },
          { label: 'Strongest',          value: maxDim.label,    color: 'var(--accent-3)' },
          { label: 'Weakest',            value: minDim.label,    color: 'var(--accent)' },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color, fontSize: total >= 10 ? '14px' : '18px' }}>{value}</div>
          </div>
        ))}
      </div>

      <div className="calc-insight" style={{ borderColor: accent }}>{insight}</div>
    </div>
  )
}
