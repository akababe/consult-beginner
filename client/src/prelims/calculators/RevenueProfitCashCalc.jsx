import { useState } from 'react'

const fmtM = (n) => {
  const abs = Math.abs(n)
  const sign = n < 0 ? '−' : '+'
  return `${sign}IDR ${abs.toFixed(1)}M`
}

export default function RevenueProfitCashCalc() {
  const [rev,    setRev]    = useState(40)   // IDR M — monthly revenue invoiced
  const [costs,  setCosts]  = useState(37)   // IDR M — costs incurred
  const [colPct, setColPct] = useState(100)  // % revenue collected right now
  const [payPct, setPayPct] = useState(100)  // % costs paid right now

  const profit = rev - costs
  const cash   = rev * colPct / 100 - costs * payPct / 100

  const insight = cash < 0 && profit > 0
    ? `Profitable but cash-negative. Earned IDR ${profit.toFixed(1)}M on paper — IDR ${Math.abs(cash).toFixed(1)}M left the bank before customers paid.`
    : profit < 0 && cash >= 0
    ? `Cash-positive but loss-making. Received more cash than the profit figure suggests — timing divergence works the other way.`
    : colPct < 100 || payPct < 100
    ? `Revenue, Profit, and Cash are now diverging on the same transaction. This is the gap that surprises business owners.`
    : `Set to Rina's cash warung: all three numbers converge because payment is immediate. Lower % collected to see them diverge.`

  const accent = '#C94F28'
  const ok = 'var(--accent-3)'
  const bad = 'var(--accent)'

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Interactive Revenue / Profit / Cash Explorer</div>

      <div className="calc-sliders">
        {[
          { label: 'Revenue invoiced this month (IDR M)', val: rev,    set: setRev,    min: 5,  max: 100, step: 1, disp: `IDR ${rev}M` },
          { label: 'Costs incurred this month (IDR M)',   val: costs,  set: setCosts,  min: 1,  max: 95,  step: 1, disp: `IDR ${costs}M` },
          { label: '% of revenue collected right now',    val: colPct, set: setColPct, min: 0,  max: 100, step: 5, disp: `${colPct}%` },
          { label: '% of costs paid right now',           val: payPct, set: setPayPct, min: 0,  max: 100, step: 5, disp: `${payPct}%` },
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
        <div className="calc-metric">
          <div className="calc-metric__label">Revenue</div>
          <div className="calc-metric__value" style={{ color: accent }}>IDR {rev}M</div>
        </div>
        <div className="calc-metric">
          <div className="calc-metric__label">Profit</div>
          <div className="calc-metric__value" style={{ color: profit >= 0 ? ok : bad }}>{fmtM(profit)}</div>
        </div>
        <div className="calc-metric">
          <div className="calc-metric__label">Net cash movement</div>
          <div className="calc-metric__value" style={{ color: cash >= 0 ? ok : bad }}>{fmtM(cash)}</div>
        </div>
      </div>

      <div className="calc-insight" style={{ borderColor: accent }}>{insight}</div>
    </div>
  )
}
