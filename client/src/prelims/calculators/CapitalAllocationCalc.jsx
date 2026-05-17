import { useState } from 'react'

const accent = '#0D6B50'
const DEPOSITO_RATE = 5.5

const fmtROIC = (profit, capital) => {
  if (capital <= 0) return '—'
  return (profit / capital * 100).toFixed(1) + '%'
}
const fmtPayback = (capital, annualProfit) => {
  if (annualProfit <= 0) return '∞'
  const yrs = capital / annualProfit
  return yrs < 1 ? `${(yrs * 12).toFixed(1)} mo` : `${yrs.toFixed(1)} yr`
}

const OPTIONS = [
  { key: 'c', label: 'Core reinvestment',     defaultCap: 50,  defaultProfit: 102, color: '#1D9E75' },
  { key: 'a', label: 'New equipment',         defaultCap: 120, defaultProfit: 110, color: '#1357A6' },
  { key: 'b', label: 'Second branch',         defaultCap: 150, defaultProfit: 84,  color: '#BA7517' },
]

export default function CapitalAllocationCalc() {
  const [caps,    setCaps]    = useState({ c: 50,  a: 120, b: 150 })   // IDR M invested
  const [profits, setProfits] = useState({ c: 102, a: 110, b: 84  })   // IDR M annual profit

  const setC = (k) => (e) => setCaps(s    => ({ ...s, [k]: Number(e.target.value) }))
  const setP = (k) => (e) => setProfits(s => ({ ...s, [k]: Number(e.target.value) }))

  const depositoAnnual = (cap) => (cap * DEPOSITO_RATE / 100).toFixed(1)

  const ranked = [...OPTIONS].sort((a, b) => {
    const roicA = caps[a.key] > 0 ? profits[a.key] / caps[a.key] : 0
    const roicB = caps[b.key] > 0 ? profits[b.key] / caps[b.key] : 0
    return roicB - roicA
  })

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>ROIC Comparison — Where Should the Capital Go?</div>

      {OPTIONS.map(({ key, label, color }) => (
        <div key={key} style={{ background: 'var(--bg-alt)', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color, marginBottom: '8px' }}>{label}</div>
          <div className="calc-row" style={{ marginBottom: '6px' }}>
            <label className="calc-row__label" style={{ fontSize: '11px' }}>Capital invested (IDR M)</label>
            <input type="range" min={10} max={300} step={5} value={caps[key]}
              className="calc-row__range" style={{ accentColor: color }}
              onChange={setC(key)} />
            <span className="calc-row__val" style={{ fontSize: '11px' }}>IDR {caps[key]}M</span>
          </div>
          <div className="calc-row">
            <label className="calc-row__label" style={{ fontSize: '11px' }}>Annual operating profit (IDR M)</label>
            <input type="range" min={0} max={300} step={5} value={profits[key]}
              className="calc-row__range" style={{ accentColor: color }}
              onChange={setP(key)} />
            <span className="calc-row__val" style={{ fontSize: '11px' }}>IDR {profits[key]}M</span>
          </div>
        </div>
      ))}

      {/* Comparison table */}
      <div style={{ marginTop: '14px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ background: 'var(--bg-alt)' }}>
              {['Rank', 'Option', 'Capital', 'Ann. Profit', 'ROIC', 'Payback'].map(h => (
                <th key={h} style={{ padding: '6px 10px', textAlign: 'left', fontWeight: 600, color: 'var(--ink-3)', fontSize: '11px' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Deposito baseline */}
            <tr style={{ borderTop: '1px solid var(--border-soft)' }}>
              <td style={{ padding: '6px 10px', color: 'var(--ink-4)' }}>—</td>
              <td style={{ padding: '6px 10px', color: 'var(--ink-3)' }}>Deposito (baseline)</td>
              <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>IDR 200M</td>
              <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>IDR {depositoAnnual(200)}M</td>
              <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>{DEPOSITO_RATE}%</td>
              <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>18.2 yr</td>
            </tr>
            {ranked.map((opt, i) => {
              const roic = caps[opt.key] > 0 ? profits[opt.key] / caps[opt.key] * 100 : 0
              const isTop = i === 0
              return (
                <tr key={opt.key} style={{ borderTop: '1px solid var(--border-soft)', background: isTop ? 'rgba(29,158,117,0.06)' : 'transparent' }}>
                  <td style={{ padding: '6px 10px', fontWeight: 700, color: isTop ? 'var(--accent-3)' : 'var(--ink-4)' }}>{i + 1}{isTop ? ' ✓' : ''}</td>
                  <td style={{ padding: '6px 10px', color: opt.color, fontWeight: 600 }}>{opt.label}</td>
                  <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)' }}>IDR {caps[opt.key]}M</td>
                  <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)' }}>IDR {profits[opt.key]}M</td>
                  <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: roic > DEPOSITO_RATE ? 'var(--accent-3)' : 'var(--accent)' }}>{fmtROIC(profits[opt.key], caps[opt.key])}</td>
                  <td style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)' }}>{fmtPayback(caps[opt.key], profits[opt.key])}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="calc-insight" style={{ borderColor: accent, marginTop: '12px' }}>
        {(() => {
          const top = ranked[0]
          const roic = caps[top.key] > 0 ? profits[top.key] / caps[top.key] * 100 : 0
          return `Highest ROIC option is "${top.label}" at ${fmtROIC(profits[top.key], caps[top.key])} — ${(roic / DEPOSITO_RATE).toFixed(1)}× the deposito rate. Deploy here first, then reassess with updated projections.`
        })()}
      </div>
    </div>
  )
}
