import { useState, useMemo } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const accent = '#1357A6'
const rf = (n, d = 1) => parseFloat(n.toFixed(d))

export default function CACLTVCalc() {
  const [cac,  setCac]  = useState(500)  // IDR K
  const [rv,   setRv]   = useState(200)  // IDR K / month
  const [cs,   setCs]   = useState(80)   // IDR K / month serving cost
  const [life, setLife] = useState(18)   // months

  const mp    = rv - cs                         // monthly profit per customer (K)
  const ltv   = mp > 0 ? mp * life : 0
  const ratio = cac > 0 ? rf(ltv / cac) : 0
  const pb    = mp > 0 ? rf(cac / mp) : null

  const pts   = useMemo(() => Array.from({ length: life + 1 }, (_, i) => i), [life])
  const cumData = pts.map(m => rf(-cac + mp * m))

  const data = {
    labels: pts,
    datasets: [{ label: 'Cumulative profit (IDR K)', data: cumData, borderColor: '#1357A6', borderWidth: 2, pointRadius: 0, tension: 0.2 }],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => `Month ${ctx[0].label}`, label: ctx => `Cumulative: IDR ${ctx.parsed.y}K` } } },
    scales: {
      x: { ticks: { color: '#9A9088', maxTicksLimit: 8, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' }, title: { display: true, text: 'Month', font: { size: 11 }, color: '#9A9088' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v}K`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  const ok = 'var(--accent-3)', bad = 'var(--accent)', mid = 'var(--gold)'
  const verdictColor = ratio >= 3 ? ok : ratio >= 1 ? mid : bad
  const verdict = ratio >= 3 ? 'Healthy' : ratio >= 1 ? 'Marginal' : 'Broken'

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>CAC & LTV Payback Calculator</div>
      <div className="calc-sliders">
        {[
          { label: 'Customer acquisition cost, CAC (IDR K)', val: cac,  set: setCac,  min: 50,   max: 2000, step: 50,  disp: `IDR ${cac}K` },
          { label: 'Monthly revenue per customer (IDR K)',    val: rv,   set: setRv,   min: 20,   max: 500,  step: 10,  disp: `IDR ${rv}K` },
          { label: 'Monthly serving cost (IDR K)',            val: cs,   set: setCs,   min: 5,    max: 400,  step: 5,   disp: `IDR ${cs}K` },
          { label: 'Customer lifetime (months)',              val: life, set: setLife, min: 1,    max: 60,   step: 1,   disp: `${life} mo` },
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
        <span><span className="calc-legend__dot" style={{ background: '#1357A6' }} />Cumulative profit per customer</span>
      </div>
      <div className="calc-chart"><Line data={data} options={opts} /></div>
      <div className="calc-metrics">
        {[
          { label: 'LTV',          value: `IDR ${ltv.toLocaleString()}K`, color: accent },
          { label: 'LTV : CAC',    value: `${ratio}×`,                    color: verdictColor },
          { label: 'Payback',      value: pb !== null ? `${pb} mo` : '∞', color: verdictColor },
          { label: 'Verdict',      value: verdict,                        color: verdictColor },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
      <div className="calc-insight" style={{ borderColor: accent }}>
        {ratio < 1
          ? `LTV:CAC of ${ratio}× — spending more to acquire customers than they are worth. Every new customer destroys value.`
          : ratio < 3
          ? `Marginal at ${ratio}×. Any rise in CAC or churn flips this model negative.`
          : `Healthy ${ratio}×. Payback in ${pb} months, then ${Math.round(life - (pb || 0))} months of pure profit per customer.`}
      </div>
    </div>
  )
}
