import { useState } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const accent = '#2A5C3F'
const BANK = 8  // % hurdle rate

export default function ROIPaybackCalc() {
  const [invest, setInvest] = useState(500)  // IDR M
  const [profit, setProfit] = useState(150)  // IDR M / year
  const [years,  setYears]  = useState(3)    // years

  const roi = parseFloat((profit / invest * 100).toFixed(1))
  const ex  = parseFloat((roi - BANK).toFixed(1))
  const pb  = parseFloat((invest / profit).toFixed(1))

  const labels = Array.from({ length: years + 1 }, (_, i) => `Yr ${i}`)
  const data = {
    labels,
    datasets: [
      { label: 'Investment return', data: labels.map((_, i) => parseFloat((-invest + profit * i).toFixed(1))), borderColor: '#2A5C3F', borderWidth: 2, pointRadius: 3, tension: 0.2 },
      { label: `Bank ${BANK}%`,     data: labels.map((_, i) => parseFloat((invest * BANK / 100 * i).toFixed(1))), borderColor: '#999', borderWidth: 1.5, pointRadius: 0, borderDash: [4, 4] },
    ],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => ctx[0].label, label: ctx => `${ctx.dataset.label}: IDR ${ctx.parsed.y}M` } } },
    scales: {
      x: { ticks: { color: '#9A9088', font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v}M`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  const ok = 'var(--accent-3)', bad = 'var(--accent)', mid = 'var(--gold)'
  const vColor = roi > BANK ? ok : roi > 0 ? mid : bad
  const verdict = roi > BANK ? 'Deploy' : roi > 0 ? 'Marginal' : 'Avoid'

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Investment Return Calculator</div>
      <div className="calc-sliders">
        {[
          { label: 'Investment amount (IDR M)', val: invest, set: setInvest, min: 50,  max: 2000, step: 50, disp: `IDR ${invest}M` },
          { label: 'Annual net profit (IDR M)', val: profit, set: setProfit, min: 5,   max: 1000, step: 10, disp: `IDR ${profit}M` },
          { label: 'Horizon (years)',            val: years,  set: setYears,  min: 1,   max: 10,   step: 1,  disp: `${years} yrs` },
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
        <span><span className="calc-legend__dot" style={{ background: '#2A5C3F' }} />This investment</span>
        <span><span className="calc-legend__dot" style={{ background: '#999' }} />Bank {BANK}%</span>
      </div>
      <div className="calc-chart"><Line data={data} options={opts} /></div>
      <div className="calc-metrics">
        {[
          { label: 'Annual ROI',           value: `${roi}%`,          color: vColor },
          { label: `vs bank (${BANK}%)`,  value: `${ex >= 0 ? '+' : ''}${ex}%`, color: ex >= 0 ? ok : bad },
          { label: 'Payback period',       value: `${pb} yrs`,        color: vColor },
          { label: 'Verdict',              value: verdict,            color: vColor },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
      <div className="calc-insight" style={{ borderColor: accent }}>
        {roi < BANK
          ? `ROI of ${roi}% is below the ${BANK}% risk-free hurdle. Deploying capital here destroys value relative to a bank deposit.`
          : `ROI of ${roi}% clears the hurdle by ${ex}%. Over ${years} years this generates IDR ${Math.round((profit - invest * BANK / 100) * years)}M more than a bank deposit.`}
      </div>
    </div>
  )
}
