import { useState, useMemo } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const accent = '#4A41A8'
const rf = (n, d = 0) => d === 0 ? Math.round(n) : parseFloat(n.toFixed(d))

export default function NPVDCFCalc() {
  const [inv, setInv] = useState(1000) // initial investment IDR M
  const [cf1, setCf1] = useState(200)  // Year 1 cash flow IDR M
  const [g,   setG]   = useState(15)   // % CF growth rate
  const [dr,  setDr]  = useState(12)   // % discount rate
  const [tg,  setTg]  = useState(3)    // % terminal growth

  const gRate  = g / 100
  const dRate  = dr / 100
  const tgRate = tg / 100

  const cfs  = useMemo(() => Array.from({ length: 5 }, (_, i) => rf(cf1 * Math.pow(1 + gRate, i), 1)), [cf1, gRate])
  const dcfs = useMemo(() => cfs.map((cf, i) => rf(cf / Math.pow(1 + dRate, i + 1), 1)), [cfs, dRate])

  const sdcf = rf(dcfs.reduce((a, b) => a + b, 0), 1)
  const tvPV = dRate > tgRate ? rf(cfs[4] * (1 + tgRate) / (dRate - tgRate) / Math.pow(1 + dRate, 5), 1) : 0
  const npv  = rf(sdcf + tvPV - inv, 1)

  const data = {
    labels: ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5'],
    datasets: [
      { label: 'Cash flow',       data: cfs,  backgroundColor: '#7F77DD' },
      { label: 'Discounted CF',   data: dcfs, backgroundColor: '#5DCAA5' },
    ],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: true, position: 'top', labels: { font: { size: 10 }, boxWidth: 10, padding: 8 } }, tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: IDR ${ctx.parsed.y}M` } } },
    scales: {
      x: { ticks: { color: '#9A9088', font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v}M`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  const ok = 'var(--accent-3)', bad = 'var(--accent)'

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>5-Year DCF Model</div>
      <div className="calc-sliders">
        {[
          { label: 'Initial investment (IDR M)',    val: inv, set: setInv, min: 100, max: 3000, step: 100, disp: `IDR ${inv.toLocaleString()}M` },
          { label: 'Year 1 cash flow (IDR M)',      val: cf1, set: setCf1, min: 25,  max: 1000, step: 25,  disp: `IDR ${cf1}M` },
          { label: 'Annual CF growth rate (%)',     val: g,   set: setG,   min: -10, max: 40,   step: 1,   disp: `${g}%` },
          { label: 'Discount rate / WACC (%)',      val: dr,  set: setDr,  min: 5,   max: 30,   step: 1,   disp: `${dr}%` },
          { label: 'Terminal growth rate (%)',      val: tg,  set: setTg,  min: 0,   max: 10,   step: 1,   disp: `${tg}%` },
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
      <div className="calc-chart"><Bar data={data} options={opts} /></div>
      <div className="calc-metrics">
        {[
          { label: 'Sum of DCFs',       value: `IDR ${sdcf.toLocaleString()}M`, color: accent },
          { label: 'Terminal value (PV)', value: dRate > tgRate ? `IDR ${tvPV.toLocaleString()}M` : 'n/a', color: accent },
          { label: 'NPV',               value: `${npv >= 0 ? '+' : ''}IDR ${Math.abs(npv).toLocaleString()}M`, color: npv >= 0 ? ok : bad },
          { label: 'Decision',          value: npv >= 0 ? 'Invest' : 'Reject', color: npv >= 0 ? ok : bad },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
      <div className="calc-insight" style={{ borderColor: accent }}>
        {npv >= 0
          ? `NPV of +IDR ${npv.toLocaleString()}M is positive. Investment creates value above the ${dr}% hurdle rate.`
          : `NPV of −IDR ${Math.abs(npv).toLocaleString()}M is negative. Cash flows do not recover the investment at ${dr}%. Reject or renegotiate.`}
      </div>
    </div>
  )
}
