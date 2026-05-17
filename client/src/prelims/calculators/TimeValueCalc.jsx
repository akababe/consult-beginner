import { useState, useMemo } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const accent = '#4A41A8'
const rf = (n, d = 0) => d === 0 ? Math.round(n) : parseFloat(n.toFixed(d))

export default function TimeValueCalc() {
  const [pv, setPv] = useState(1000)  // IDR M
  const [r,  setR]  = useState(10)    // % per year
  const [n,  setN]  = useState(10)    // years

  const [fv2, setFv2] = useState(1000) // future IDR M (discounting)
  const [r2,  setR2]  = useState(10)
  const [n2,  setN2]  = useState(5)

  const rate  = r / 100
  const fv    = rf(pv * Math.pow(1 + rate, n))
  const gain  = fv - pv
  const simple = rf(pv * rate * n)
  const ce    = rf(gain - simple)
  const r72   = rf(72 / r, 1)

  const labels = useMemo(() => Array.from({ length: n + 1 }, (_, i) => `Yr ${i}`), [n])
  const data = {
    labels,
    datasets: [
      { label: 'Compound',       data: labels.map((_, i) => rf(pv * Math.pow(1 + rate, i))), borderColor: '#4A41A8', borderWidth: 2, pointRadius: 1, tension: 0.3 },
      { label: 'Simple interest',data: labels.map((_, i) => rf(pv + pv * rate * i)),         borderColor: '#999',    borderWidth: 1.5, pointRadius: 0, borderDash: [4, 4] },
    ],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => ctx[0].label, label: ctx => `${ctx.dataset.label}: IDR ${ctx.parsed.y.toLocaleString()}M` } } },
    scales: {
      x: { ticks: { color: '#9A9088', maxTicksLimit: 8, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v.toLocaleString()}M`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  // Discounting
  const rate2 = r2 / 100
  const df    = Math.pow(1 + rate2, -n2)
  const pvNow = rf(fv2 * df)
  const disc  = fv2 - pvNow

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Compound Growth Calculator</div>
      <div className="calc-sliders">
        {[
          { label: 'Principal (IDR M)',  val: pv, set: setPv, min: 100,  max: 5000, step: 100, disp: `IDR ${pv.toLocaleString()}M` },
          { label: 'Annual rate (%)',    val: r,  set: setR,  min: 1,    max: 30,   step: 1,   disp: `${r}%` },
          { label: 'Years',             val: n,  set: setN,  min: 1,    max: 30,   step: 1,   disp: `${n} yrs` },
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
        <span><span className="calc-legend__dot" style={{ background: '#4A41A8' }} />Compound</span>
        <span><span className="calc-legend__dot" style={{ background: '#999' }} />Simple interest</span>
      </div>
      <div className="calc-chart"><Line data={data} options={opts} /></div>
      <div className="calc-metrics">
        {[
          { label: 'Future value',       value: `IDR ${fv.toLocaleString()}M`, color: accent },
          { label: 'Total gain',         value: `+IDR ${gain.toLocaleString()}M`, color: 'var(--accent-3)' },
          { label: 'Compound bonus',     value: `+IDR ${ce.toLocaleString()}M`, color: accent },
          { label: 'Rule of 72 (doubles)', value: `${r72} yrs`,               color: accent },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
      <div className="calc-insight" style={{ borderColor: accent, marginBottom: '20px' }}>
        At {r}% compounded for {n} years, IDR {pv.toLocaleString()}M grows to IDR {fv.toLocaleString()}M. Simple interest gives only IDR {(pv + simple).toLocaleString()}M — compound adds IDR {ce.toLocaleString()}M on top.
      </div>

      {/* Discounting section */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
        <div className="calc-label" style={{ color: accent }}>Discounting — Running It Backwards</div>
        <div className="calc-sliders">
          {[
            { label: 'Future cash flow (IDR M)', val: fv2, set: setFv2, min: 100, max: 5000, step: 100, disp: `IDR ${fv2.toLocaleString()}M` },
            { label: 'Discount rate (%)',        val: r2,  set: setR2,  min: 1,   max: 30,   step: 1,   disp: `${r2}%` },
            { label: 'Years from now',           val: n2,  set: setN2,  min: 1,   max: 20,   step: 1,   disp: `${n2} yrs` },
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
        <div className="calc-metrics">
          {[
            { label: 'Present value today', value: `IDR ${pvNow.toLocaleString()}M`, color: accent },
            { label: 'Discount amount',     value: `-IDR ${disc.toLocaleString()}M`, color: 'var(--accent)' },
            { label: 'Discount factor',     value: df.toFixed(3),                   color: accent },
          ].map(({ label, value, color }) => (
            <div key={label} className="calc-metric">
              <div className="calc-metric__label">{label}</div>
              <div className="calc-metric__value" style={{ color }}>{value}</div>
            </div>
          ))}
        </div>
        <div className="calc-insight" style={{ borderColor: accent }}>
          A cash flow of IDR {fv2.toLocaleString()}M in {n2} years is worth only IDR {pvNow.toLocaleString()}M today at {r2}%. The IDR {disc.toLocaleString()}M difference is the cost of waiting.
        </div>
      </div>
    </div>
  )
}
