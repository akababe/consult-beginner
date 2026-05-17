import { useState, useMemo } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const accent = '#1357A6'
const rf = (n) => Math.round(n * 10) / 10

export default function FixedVariableCalc() {
  const [fixed,  setFixed]  = useState(170)   // IDR M / month
  const [price,  setPrice]  = useState(50)    // IDR K / unit
  const [vc,     setVc]     = useState(25)    // IDR K / unit
  const [volume, setVolume] = useState(8000)  // units

  const cm  = price - vc                              // K / unit
  const be  = cm > 0 ? Math.ceil(fixed * 1e6 / (cm * 1e3)) : Infinity
  const rev = price * volume / 1000                   // M
  const tot = fixed + vc * volume / 1000              // M
  const pro = rf(rev - tot)
  const mg  = rev > 0 ? rf(pro / rev * 100) : 0

  const maxX = useMemo(() => Math.max(isFinite(be) ? be * 1.8 : 15000, volume * 1.4, 5000), [be, volume])
  const pts  = useMemo(() => Array.from({ length: 12 }, (_, i) => Math.round(i / 11 * maxX)), [maxX])

  const data = {
    labels: pts.map(x => x.toLocaleString()),
    datasets: [
      { label: 'Revenue',     data: pts.map(x => rf(x * price / 1000)), borderColor: '#1357A6', borderWidth: 2, pointRadius: 0, tension: 0 },
      { label: 'Total Cost',  data: pts.map(x => rf(fixed + x * vc / 1000)), borderColor: '#C94F28', borderWidth: 2, pointRadius: 0, tension: 0 },
    ],
  }

  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => `${ctx[0].label} units`, label: ctx => `${ctx.dataset.label}: IDR ${ctx.parsed.y}M` } } },
    scales: {
      x: { ticks: { color: '#9A9088', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' }, title: { display: true, text: 'Volume (units)', font: { size: 11 }, color: '#9A9088' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v}M`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' }, title: { display: true, text: 'IDR (millions)', font: { size: 11 }, color: '#9A9088' } },
    },
  }

  const ok = 'var(--accent-3)', bad = 'var(--accent)'

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Operating Leverage Simulator</div>
      <div className="calc-sliders">
        {[
          { label: 'Fixed costs (IDR M/month)', val: fixed,  set: setFixed,  min: 50,  max: 500,   step: 10,  disp: `IDR ${fixed}M` },
          { label: 'Price per unit (IDR K)',    val: price,  set: setPrice,  min: 20,  max: 200,   step: 5,   disp: `IDR ${price}K` },
          { label: 'Variable cost per unit (IDR K)', val: vc, set: setVc,   min: 5,   max: 150,   step: 5,   disp: `IDR ${vc}K` },
          { label: 'Current volume (units)',    val: volume, set: setVolume, min: 0,   max: 20000, step: 500, disp: volume.toLocaleString() },
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
        <span><span className="calc-legend__dot" style={{ background: '#1357A6' }} />Revenue</span>
        <span><span className="calc-legend__dot" style={{ background: '#C94F28' }} />Total Cost</span>
      </div>
      <div className="calc-chart"><Line data={data} options={opts} /></div>
      <div className="calc-metrics">
        {[
          { label: 'Contribution / unit', value: `IDR ${cm}K`,                        color: cm > 0 ? accent : bad },
          { label: 'Break-even volume',   value: isFinite(be) ? be.toLocaleString() : '∞', color: accent },
          { label: 'Current profit',      value: `${pro >= 0 ? '+' : ''}IDR ${Math.abs(pro)}M`, color: pro >= 0 ? ok : bad },
          { label: 'Operating margin',    value: `${mg}%`,                             color: pro >= 0 ? ok : bad },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
      <div className="calc-insight" style={{ borderColor: accent }}>
        {pro >= 0
          ? `At ${volume.toLocaleString()} units — ${(volume - be).toLocaleString()} above break-even. Each extra unit adds IDR ${cm}K directly to profit.`
          : `At ${volume.toLocaleString()} units — ${Math.abs(volume - be).toLocaleString()} short of break-even. Fixed costs of IDR ${fixed}M not yet covered.`}
      </div>
    </div>
  )
}
