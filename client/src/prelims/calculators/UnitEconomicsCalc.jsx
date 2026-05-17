import { useState } from 'react'

const accent = '#1357A6'
const pct = (n) => isFinite(n) ? n.toFixed(1) + '%' : '—'

const Seg = ({ label, value, total, color }) => {
  const w = total > 0 ? Math.max(0, value / total * 100) : 0
  return (
    <div style={{ width: `${w}%`, background: color, display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff',
      overflow: 'hidden', whiteSpace: 'nowrap' }}>
      {w > 9 ? label : ''}
    </div>
  )
}

export default function UnitEconomicsCalc() {
  const [rev, setRev] = useState(200)  // IDR K per customer
  const [cg,  setCg]  = useState(80)   // COGS per customer
  const [vc,  setVc]  = useState(30)   // variable service cost
  const [fc,  setFc]  = useState(20)   // allocated fixed per customer

  const gp = rev - cg
  const cm = gp - vc
  const np = cm - fc
  const ok  = 'var(--accent-3)'
  const bad = 'var(--accent)'

  const insight = np < 0
    ? `Unit economics broken — losing IDR ${Math.abs(np)}K per customer. Scaling accelerates losses, not profits.`
    : np / rev * 100 < 10
    ? `Thin net margin of ${pct(np / rev * 100)}. A small cost rise or price cut flips this negative.`
    : `Healthy unit economics — each customer generates IDR ${np}K after all allocated costs.`

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Unit Economics Stack</div>

      <div className="calc-sliders">
        {[
          { label: 'Revenue per customer (IDR K)',          val: rev, set: setRev, min: 20,  max: 500, step: 10, disp: `IDR ${rev}K` },
          { label: 'COGS per customer (IDR K)',             val: cg,  set: setCg,  min: 5,   max: 400, step: 5,  disp: `IDR ${cg}K` },
          { label: 'Variable service cost per customer (IDR K)', val: vc, set: setVc, min: 0, max: 150, step: 5, disp: `IDR ${vc}K` },
          { label: 'Allocated fixed per customer (IDR K)',  val: fc,  set: setFc,  min: 0,   max: 150, step: 5,  disp: `IDR ${fc}K` },
        ].map(({ label, val, set, min, max, step, disp }) => (
          <div key={label} className="calc-row">
            <label className="calc-row__label">{label}</label>
            <input type="range" min={min} max={max} step={step} value={val}
              className="calc-row__range" style={{ accentColor: accent }}
              onChange={e => set(Number(e.target.value))} />
            <span className="calc-row__val">{disp}</span>
          </div>
        ))}
      </div>

      <div style={{ height: '38px', display: 'flex', borderRadius: '6px', overflow: 'hidden', margin: '14px 0' }}>
        <Seg label="COGS"    value={cg}         total={rev} color="#E24B4A" />
        <Seg label="Variable" value={vc}        total={rev} color="#EF9F27" />
        <Seg label="Fixed"   value={fc}         total={rev} color="#85B7EB" />
        <Seg label={np >= 0 ? 'Profit' : 'Loss'} value={Math.max(0, Math.abs(np))} total={rev} color={np >= 0 ? '#1D9E75' : '#A32D2D'} />
      </div>

      <div className="calc-legend" style={{ marginBottom: '12px' }}>
        {[['#E24B4A','COGS: IDR '+cg+'K'], ['#EF9F27','Variable: IDR '+vc+'K'], ['#85B7EB','Fixed: IDR '+fc+'K'], [np >= 0 ? '#1D9E75' : '#A32D2D', (np >= 0 ? 'Profit' : 'Loss') + ': IDR '+Math.abs(np)+'K']].map(([c, l]) => (
          <span key={l}><span className="calc-legend__dot" style={{ background: c }} />{l}</span>
        ))}
      </div>

      <div className="calc-metrics">
        {[
          { label: 'Gross margin',        value: pct(gp / rev * 100), color: '#C94F28' },
          { label: 'Contribution margin', value: pct(cm / rev * 100), color: cm >= 0 ? ok : bad },
          { label: 'Unit profit',         value: `${np >= 0 ? '+' : '−'}IDR ${Math.abs(np)}K`, color: np >= 0 ? ok : bad },
          { label: 'Net margin',          value: pct(np / rev * 100), color: np >= 0 ? ok : bad },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      <div className="calc-insight" style={{ borderColor: accent }}>{insight}</div>
    </div>
  )
}
