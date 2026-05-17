import { useState, useMemo } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const accent = '#0D6B50'
const rf = (n, d = 1) => parseFloat(n.toFixed(d))

const fmtBig = (n) => {
  if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T'
  if (n >= 1e9)  return (n / 1e9).toFixed(1) + 'B'
  if (n >= 1e6)  return (n / 1e6).toFixed(1) + 'M'
  return Math.round(n).toLocaleString()
}

export default function NetworkEffectsCalc() {
  const [users, setUsers] = useState(100)  // number of users
  const [val,   setVal]   = useState(10)   // IDR K value per connection

  const connections  = users * (users - 1) / 2
  const networkValue = connections * val * 1000       // IDR
  const linearValue  = users * val * 1000             // IDR
  const multiplier   = linearValue > 0 ? rf(networkValue / linearValue) : 0

  const maxU = Math.ceil(users * 1.5)
  const pts  = useMemo(() => Array.from({ length: 14 }, (_, i) => Math.round(i / 13 * maxU)), [maxU])

  const toB = (n) => rf(n / 1e9, 1)

  const data = {
    labels: pts,
    datasets: [
      { label: 'Network value (n²)',  data: pts.map(n => toB(n * (n - 1) / 2 * val * 1000)), borderColor: '#1D9E75', borderWidth: 2, pointRadius: 0, tension: 0.3 },
      { label: 'Linear value (n)',    data: pts.map(n => toB(n * val * 1000)),                borderColor: '#999',    borderWidth: 1.5, pointRadius: 0, borderDash: [4, 4] },
    ],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => `${ctx[0].label} users`, label: ctx => `${ctx.dataset.label}: IDR ${ctx.parsed.y}B` } } },
    scales: {
      x: { ticks: { color: '#9A9088', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' }, title: { display: true, text: 'Users', font: { size: 11 }, color: '#9A9088' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v}B`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Network Value Simulator</div>

      <div style={{ background: 'var(--bg-alt)', borderRadius: '6px', padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: '13px', margin: '0 0 14px', textAlign: 'center' }}>
        Network value ≈ <span style={{ color: accent, fontWeight: 700 }}>n²</span> &nbsp;·&nbsp; value per connection &nbsp;(Metcalfe's Law)
      </div>

      <div className="calc-sliders">
        {[
          { label: 'Number of users',               val: users, set: setUsers, min: 10,  max: 1000, step: 10, disp: users.toLocaleString() },
          { label: 'Value per connection (IDR K)',   val: val,   set: setVal,   min: 1,   max: 50,   step: 1,  disp: `IDR ${val}K` },
        ].map(({ label, val: v, set, min, max, step, disp }) => (
          <div key={label} className="calc-row">
            <label className="calc-row__label">{label}</label>
            <input type="range" min={min} max={max} step={step} value={v}
              className="calc-row__range" style={{ accentColor: accent }}
              onChange={e => set(Number(e.target.value))} />
            <span className="calc-row__val">{disp}</span>
          </div>
        ))}
      </div>

      <div className="calc-legend">
        <span><span className="calc-legend__dot" style={{ background: '#1D9E75' }} />Network value (n²)</span>
        <span><span className="calc-legend__dot" style={{ background: '#999' }} />Linear value (n)</span>
      </div>
      <div className="calc-chart"><Line data={data} options={opts} /></div>

      <div className="calc-metrics">
        {[
          { label: 'Network value',       value: `IDR ${fmtBig(networkValue)}`, color: accent },
          { label: 'Possible connections', value: connections.toLocaleString(),  color: accent },
          { label: 'vs linear value',     value: `${multiplier}×`,              color: accent },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      <div className="calc-insight" style={{ borderColor: accent }}>
        With {users.toLocaleString()} users there are {connections.toLocaleString()} possible connections. Network value is {multiplier}× linear value. This gap widens exponentially — why platforms command premium valuations.
      </div>
    </div>
  )
}
