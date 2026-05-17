import { useState } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

const accent = '#4A41A8'
const rf = (n, d = 0) => d === 0 ? Math.round(n) : parseFloat(n.toFixed(d))

export default function ScenarioCalc() {
  const [bp, setBp] = useState(25);   const [bv, setBv] = useState(3000)   // bull prob%, NPV M
  const [mp, setMp] = useState(50);   const [mv, setMv] = useState(1000)   // base
  const [wp, setWp] = useState(25);   const [wv, setWv] = useState(-800)   // bear

  const ps  = bp + mp + wp
  const ev  = rf(bp / 100 * bv + mp / 100 * mv + wp / 100 * wv, 1)
  const ok  = ps === 100

  const data = {
    labels: ['Bull case', 'Base case', 'Bear case'],
    datasets: [{ data: [bv, mv, wv], backgroundColor: ['#3B6D11', '#1357A6', '#b02020'], borderWidth: 0 }],
  }
  const opts = {
    responsive: true, maintainAspectRatio: false, animation: { duration: 120 },
    plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => `${ctx[0].label} (${[bp, mp, wp][ctx[0].dataIndex]}%)`, label: ctx => `NPV: IDR ${ctx.parsed.y.toLocaleString()}M` } } },
    scales: {
      x: { ticks: { color: '#9A9088', font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
      y: { ticks: { color: '#9A9088', callback: v => `${v.toLocaleString()}M`, font: { size: 10 } }, grid: { color: 'rgba(128,120,112,0.1)' } },
    },
  }

  const CASES = [
    { label: 'Bull case', bg: '#EAF3DE', tc: '#1A4A06', pb: bp, setPb: setBp, vl: bv, setVl: setBv, minV: 0, maxV: 5000 },
    { label: 'Base case', bg: '#E6F1FB', tc: '#0B3E7A', pb: mp, setPb: setMp, vl: mv, setVl: setMv, minV: -2000, maxV: 3000 },
    { label: 'Bear case', bg: '#FCEBEB', tc: '#6B1717', pb: wp, setPb: setWp, vl: wv, setVl: setWv, minV: -3000, maxV: 500 },
  ]

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Three-Scenario Model</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '12px' }}>
        {CASES.map(({ label, bg, tc, pb, setPb, vl, setVl, minV, maxV }) => (
          <div key={label} style={{ background: bg, borderRadius: '10px', padding: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: tc, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.7px' }}>{label}</div>
            <div className="calc-row" style={{ marginBottom: '6px' }}>
              <label style={{ fontSize: '10px', color: tc, flexShrink: 0, width: 'auto', marginRight: '6px' }}>Prob %</label>
              <input type="range" min={5} max={70} step={5} value={pb}
                className="calc-row__range" style={{ accentColor: tc, flex: 1 }}
                onChange={e => setPb(Number(e.target.value))} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: tc, minWidth: '30px', textAlign: 'right' }}>{pb}%</span>
            </div>
            <div className="calc-row">
              <label style={{ fontSize: '10px', color: tc, flexShrink: 0, width: 'auto', marginRight: '6px' }}>NPV M</label>
              <input type="range" min={minV} max={maxV} step={100} value={vl}
                className="calc-row__range" style={{ accentColor: tc, flex: 1 }}
                onChange={e => setVl(Number(e.target.value))} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: tc, minWidth: '55px', textAlign: 'right' }}>{vl >= 0 ? '' : '−'}{Math.abs(vl).toLocaleString()}M</span>
            </div>
          </div>
        ))}
      </div>

      {!ok && <div style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '8px', fontWeight: 500 }}>⚠ Probabilities sum to {ps}% — adjust to reach 100% for a valid expected value.</div>}

      <div className="calc-chart"><Bar data={data} options={opts} /></div>

      <div className="calc-metrics">
        {[
          { label: 'Expected NPV',      value: `${ev >= 0 ? '+' : ''}IDR ${Math.abs(ev).toLocaleString()}M`, color: !ok ? 'var(--ink-3)' : ev >= 0 ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'Probability sum',   value: `${ps}%`,               color: ok ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'Bear downside',     value: `IDR ${wv.toLocaleString()}M`, color: 'var(--accent)' },
          { label: 'Bull upside',       value: `+IDR ${bv.toLocaleString()}M`, color: 'var(--accent-3)' },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      <div className="calc-insight" style={{ borderColor: accent }}>
        {!ok
          ? 'Adjust probabilities to sum to 100% for a valid expected value.'
          : ev >= 0
          ? `Expected NPV of +IDR ${ev.toLocaleString()}M. Bull case upside outweighs bear downside on a probability-weighted basis.`
          : `Expected NPV of −IDR ${Math.abs(ev).toLocaleString()}M is negative even probability-weighted. Revisit assumptions or bear-case risk.`}
      </div>
    </div>
  )
}
