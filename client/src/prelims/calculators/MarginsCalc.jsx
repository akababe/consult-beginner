import { useState } from 'react'

const pct = (n, d) => isFinite(n) ? n.toFixed(d ?? 1) + '%' : '—'
const accent = '#C4A02A'

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

export default function MarginsCalc() {
  const [rev, setRev] = useState(200)  // IDR K per unit
  const [cg,  setCg]  = useState(80)   // COGS per unit
  const [vo,  setVo]  = useState(30)   // variable opex per unit
  const [fx,  setFx]  = useState(25)   // allocated fixed per unit

  const gp = rev - cg
  const cm = gp - vo
  const np = cm - fx
  const ok = 'var(--accent-3)'
  const bad = 'var(--accent)'

  const insight = np < 0
    ? `Unit economics broken — losing IDR ${Math.abs(np)}K per unit. Scaling this volume accelerates losses.`
    : (gp / rev * 100) - (cm / rev * 100) > 5
    ? `Gross margin (${pct(gp/rev*100)}) hides what contribution margin (${pct(cm/rev*100)}) reveals — IDR ${vo}K/unit in variable opex is the gap.`
    : `Healthy margins. Variable opex is minimal relative to price — each unit contributes IDR ${cm}K before fixed costs.`

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Margin Stack — Layer by Layer</div>

      <div className="calc-sliders">
        {[
          { label: 'Revenue per unit (IDR K)',           val: rev, set: setRev, min: 20,  max: 500, step: 10, disp: `IDR ${rev}K` },
          { label: 'COGS per unit (IDR K)',              val: cg,  set: setCg,  min: 5,   max: 400, step: 5,  disp: `IDR ${cg}K` },
          { label: 'Variable opex per unit (IDR K)',     val: vo,  set: setVo,  min: 0,   max: 150, step: 5,  disp: `IDR ${vo}K` },
          { label: 'Allocated fixed per unit (IDR K)',   val: fx,  set: setFx,  min: 0,   max: 150, step: 5,  disp: `IDR ${fx}K` },
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

      {/* Stacked bar */}
      <div style={{ height: '36px', display: 'flex', borderRadius: '6px', overflow: 'hidden', margin: '14px 0' }}>
        <Seg label="COGS"    value={cg}         total={rev} color="#E24B4A" />
        <Seg label="Var"     value={vo}         total={rev} color="#EF9F27" />
        <Seg label="Fixed"   value={fx}         total={rev} color="#85B7EB" />
        <Seg label={np >= 0 ? 'Profit' : 'Loss'} value={Math.max(0, np >= 0 ? np : -np)} total={rev} color={np >= 0 ? '#1D9E75' : '#A32D2D'} />
      </div>

      {/* Legend */}
      <div className="calc-legend" style={{ marginBottom: '12px' }}>
        {[['#E24B4A','COGS'], ['#EF9F27','Variable opex'], ['#85B7EB','Fixed'], [np >= 0 ? '#1D9E75' : '#A32D2D', np >= 0 ? 'Profit' : 'Loss']].map(([c, l]) => (
          <span key={l}><span className="calc-legend__dot" style={{ background: c }} />{l}: IDR {l === 'COGS' ? cg : l === 'Variable opex' ? vo : l === 'Fixed' ? fx : Math.abs(np)}K</span>
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
