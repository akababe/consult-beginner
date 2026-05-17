import { useState, useMemo } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const accent = '#0D6B50'
const rf = (n, d = 1) => parseFloat(n.toFixed(d))

export default function OperatingLeverageCalc() {
  const [rv,  setRv]  = useState(500)  // current revenue IDR M
  const [hf,  setHf]  = useState(300)  // high-fixed: fixed costs IDR M
  const [hv,  setHv]  = useState(15)   // high-fixed: variable cost %
  const [lf,  setLf]  = useState(50)   // low-fixed: fixed costs IDR M
  const [lv,  setLv]  = useState(65)   // low-fixed: variable cost %

  const hp = rf(rv * (1 - hv / 100) - hf)
  const lp = rf(rv * (1 - lv / 100) - lf)
  const hm = rf(hp / rv * 100, 1)
  const lm = rf(lp / rv * 100, 1)

  const maxX  = rv * 1.8
  const pts   = useMemo(() => Array.from({ length: 12 }, (_, i) => rf(i / 11 * maxX, 0)), [maxX])

  const data = {
    labels: pts.map(x => `${x}M`),
    datasets: [
      { label: 'High-fixed profit', data: pts.map(x => rf(x * (1 - hv / 100) - hf)), borderColor: '#1D9E75', borderWidth: 2, pointRadius: 0, tension: 0.2 },
      { label: 'Low-fixed profit',  data: pts.map(x => rf(x * (1 - lv / 100) - lf)),  borderColor: '#BA7517', borderWidth: 1.5, pointRadius: 0, tension: 0.2, borderDash: [5, 3] },
    ],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => `Revenue: IDR ${ctx[0].label}`, label: ctx => `${ctx.dataset.label}: IDR ${ctx.parsed.y}M` } } },
    scales: {
      x: { ticks: { color: '#9A9088', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' }, title: { display: true, text: 'Revenue (IDR M)', font: { size: 11 }, color: '#9A9088' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v}M`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Compare Two Cost Structures</div>

      <div className="calc-sliders" style={{ marginBottom: '10px' }}>
        <div className="calc-row">
          <label className="calc-row__label">Revenue (IDR M)</label>
          <input type="range" min={100} max={2000} step={50} value={rv}
            className="calc-row__range" style={{ accentColor: accent }}
            onChange={e => setRv(Number(e.target.value))} />
          <span className="calc-row__val">IDR {rv}M</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
        {[
          { title: 'High fixed-cost business', bg: '#E1F5EE', tc: '#074532', fVal: hf, setF: setHf, vVal: hv, setV: setHv, fMin: 50, fMax: 600, vMin: 5, vMax: 50 },
          { title: 'Low fixed-cost business',  bg: '#FAEEDA', tc: '#503300', fVal: lf, setF: setLf, vVal: lv, setV: setLv, fMin: 10, fMax: 200, vMin: 30, vMax: 85 },
        ].map(({ title, bg, tc, fVal, setF, vVal, setV, fMin, fMax, vMin, vMax }) => (
          <div key={title} style={{ background: bg, borderRadius: '10px', padding: '14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: tc, marginBottom: '8px' }}>{title}</div>
            {[
              { label: 'Fixed costs (IDR M)', val: fVal, set: setF, min: fMin, max: fMax, step: 25, disp: `IDR ${fVal}M` },
              { label: 'Variable cost %',     val: vVal, set: setV, min: vMin, max: vMax, step: 1,  disp: `${vVal}%` },
            ].map(({ label, val, set, min, max, step, disp }) => (
              <div key={label} className="calc-row" style={{ marginBottom: '6px' }}>
                <label style={{ fontSize: '11px', color: tc, width: '110px', flexShrink: 0 }}>{label}</label>
                <input type="range" min={min} max={max} step={step} value={val}
                  className="calc-row__range" style={{ accentColor: tc }}
                  onChange={e => set(Number(e.target.value))} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: tc, minWidth: '50px', textAlign: 'right' }}>{disp}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="calc-legend">
        <span><span className="calc-legend__dot" style={{ background: '#1D9E75' }} />High-fixed profit</span>
        <span><span className="calc-legend__dot" style={{ background: '#BA7517' }} />Low-fixed profit</span>
      </div>
      <div className="calc-chart"><Line data={data} options={opts} /></div>

      <div className="calc-metrics">
        {[
          { label: 'High-fixed profit', value: `${hp >= 0 ? '+' : ''}IDR ${Math.abs(hp)}M`, color: hp >= 0 ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'High-fixed margin', value: `${hm}%`,                                    color: hp >= 0 ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'Low-fixed profit',  value: `${lp >= 0 ? '+' : ''}IDR ${Math.abs(lp)}M`, color: lp >= 0 ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'Low-fixed margin',  value: `${lm}%`,                                    color: lp >= 0 ? 'var(--accent-3)' : 'var(--accent)' },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
      <div className="calc-insight" style={{ borderColor: accent }}>
        {hp > lp
          ? `At IDR ${rv}M revenue, high-fixed is more profitable by IDR ${Math.abs(hp - lp)}M. Fixed costs are now an advantage — incremental revenue flows almost entirely to profit.`
          : `At IDR ${rv}M revenue, low-fixed outperforms by IDR ${Math.abs(hp - lp)}M. High fixed costs are still a liability — break-even not yet cleared.`}
      </div>
    </div>
  )
}
