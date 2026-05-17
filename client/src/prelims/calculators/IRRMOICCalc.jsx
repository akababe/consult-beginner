import { useState, useMemo } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const accent = '#4A41A8'
const rf = (n, d = 1) => parseFloat(n.toFixed(d))

export default function IRRMOICCalc() {
  const [entry, setEntry] = useState(3000)  // IDR M
  const [exit,  setExit]  = useState(7500)  // IDR M
  const [yrs,   setYrs]   = useState(4)     // hold years
  const [divs,  setDivs]  = useState(0)     // IDR M annual distributions

  const tot   = exit + divs * yrs
  const moic  = rf(tot / entry, 2)
  const irr   = rf((Math.pow(tot / entry, 1 / yrs) - 1) * 100, 1)
  const pro   = rf(tot - entry)

  const verdict = moic >= 3 && irr >= 25 ? 'Exceptional'
    : moic >= 2 && irr >= 20 ? 'Strong'
    : moic >= 1.5 && irr >= 15 ? 'Acceptable'
    : 'Weak'
  const vColor = verdict === 'Exceptional' || verdict === 'Strong' ? 'var(--accent-3)'
    : verdict === 'Acceptable' ? 'var(--gold)' : 'var(--accent)'

  const labels = useMemo(() => Array.from({ length: yrs + 1 }, (_, i) => `Yr ${i}`), [yrs])
  const data = {
    labels,
    datasets: [
      { label: 'Cumulative return', data: labels.map((_, i) => rf(i === 0 ? -entry : -entry + (exit / yrs + divs) * i, 1)), borderColor: '#4A41A8', borderWidth: 2, pointRadius: 2, tension: 0.2 },
      { label: '2× MOIC target',   data: Array(yrs + 1).fill(entry), borderColor: '#999', borderWidth: 1.5, pointRadius: 0, borderDash: [4, 4] },
    ],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => ctx[0].label, label: ctx => `${ctx.dataset.label}: IDR ${ctx.parsed.y.toLocaleString()}M` } } },
    scales: {
      x: { ticks: { color: '#9A9088', font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v.toLocaleString()}M`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>PE Deal Return Calculator</div>
      <div className="calc-sliders">
        {[
          { label: 'Entry price (IDR M)',              val: entry, set: setEntry, min: 500,  max: 10000, step: 250, disp: `IDR ${entry.toLocaleString()}M` },
          { label: 'Exit price (IDR M)',               val: exit,  set: setExit,  min: 500,  max: 20000, step: 250, disp: `IDR ${exit.toLocaleString()}M` },
          { label: 'Hold period (years)',              val: yrs,   set: setYrs,   min: 1,    max: 10,    step: 1,   disp: `${yrs} yrs` },
          { label: 'Annual distributions (IDR M)',     val: divs,  set: setDivs,  min: 0,    max: 500,   step: 25,  disp: `IDR ${divs}M` },
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
      <div className="calc-legend">
        <span><span className="calc-legend__dot" style={{ background: '#4A41A8' }} />Cumulative return</span>
        <span><span className="calc-legend__dot" style={{ background: '#999' }} />2× MOIC target</span>
      </div>
      <div className="calc-chart"><Line data={data} options={opts} /></div>
      <div className="calc-metrics">
        {[
          { label: 'MOIC',        value: `${moic}×`,                        color: moic >= 2 ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'IRR (approx)', value: `${irr}%`,                        color: irr >= 20 ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'Total profit', value: `+IDR ${pro.toLocaleString()}M`,  color: 'var(--accent-3)' },
          { label: 'Verdict',      value: verdict,                          color: vColor },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
      <div className="calc-insight" style={{ borderColor: accent }}>
        {verdict === 'Exceptional' || verdict === 'Strong'
          ? `MOIC ${moic}× and IRR ${irr}% — both clear PE thresholds (2×+ and 20%+). Strong value creation.`
          : verdict === 'Acceptable'
          ? `Marginal — one metric below target. A lower entry price improves both numbers simultaneously.`
          : `Neither metric clears PE standards. Capital is better deployed elsewhere at this entry price.`}
      </div>
    </div>
  )
}
