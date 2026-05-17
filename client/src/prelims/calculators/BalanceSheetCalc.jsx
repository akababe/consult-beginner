import { useState } from 'react'

const accent = '#2A4A8B'
const rf = (n, d = 0) => d === 0 ? Math.round(n) : parseFloat(n.toFixed(d))

export default function BalanceSheetCalc() {
  const [ca,  setCa]  = useState(200)   // Cash
  const [ar,  setAr]  = useState(300)   // Receivables
  const [inv, setInv] = useState(100)   // Inventory
  const [pe,  setPe]  = useState(1000)  // Property & equipment

  const [ap,  setAp]  = useState(150)   // Payables
  const [sd,  setSd]  = useState(200)   // Short-term debt
  const [ld,  setLd]  = useState(500)   // Long-term debt

  const curA = ca + ar + inv
  const totA = curA + pe
  const curL = ap + sd
  const totL = curL + ld
  const eq   = totA - totL
  const cr   = curL > 0 ? rf(curA / curL, 2) : Infinity

  const insight = eq < 0
    ? `Negative equity of IDR ${Math.abs(eq)}M — liabilities exceed assets. Technically insolvent.`
    : cr < 1
    ? `Current ratio ${cr}× is below 1 — short-term obligations exceed current assets. Liquidity risk is real.`
    : `Balance sheet balances at IDR ${totA.toLocaleString()}M. Equity of IDR ${eq.toLocaleString()}M belongs to owners.`

  const Row = ({ label, value, sub }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px',
      padding: '5px 10px', borderBottom: '1px solid var(--border-soft)',
      fontWeight: sub ? 600 : 400 }}>
      <span style={{ color: sub ? 'var(--ink)' : 'var(--ink-3)' }}>{label}</span>
      <span>IDR {value.toLocaleString()}M</span>
    </div>
  )

  const Total = ({ label, value }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px',
      fontWeight: 600, padding: '6px 10px', background: 'var(--bg-alt)', borderRadius: '0 0 6px 6px' }}>
      <span>{label}</span>
      <span>IDR {value.toLocaleString()}M</span>
    </div>
  )

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Build a Balance Sheet</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-4)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.7px' }}>Assets</div>
          {[
            { label: 'Cash (IDR M)',           val: ca,  set: setCa,  min: 0, max: 500,  step: 10,  disp: `${ca}M` },
            { label: 'Receivables (IDR M)',    val: ar,  set: setAr,  min: 0, max: 500,  step: 10,  disp: `${ar}M` },
            { label: 'Inventory (IDR M)',      val: inv, set: setInv, min: 0, max: 300,  step: 10,  disp: `${inv}M` },
            { label: 'Property & equip (IDR M)', val: pe, set: setPe, min: 0, max: 2000, step: 50,  disp: `${pe}M` },
          ].map(({ label, val, set, min, max, step, disp }) => (
            <div key={label} className="calc-row" style={{ marginBottom: '6px' }}>
              <label style={{ fontSize: '11px', color: 'var(--ink-3)', width: '130px', flexShrink: 0 }}>{label}</label>
              <input type="range" min={min} max={max} step={step} value={val}
                className="calc-row__range" style={{ accentColor: accent }}
                onChange={e => set(Number(e.target.value))} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-3)', minWidth: '50px', textAlign: 'right' }}>{disp}</span>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-4)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.7px' }}>Liabilities</div>
          {[
            { label: 'Payables (IDR M)',        val: ap,  set: setAp,  min: 0, max: 300,  step: 10, disp: `${ap}M` },
            { label: 'Short-term debt (IDR M)', val: sd,  set: setSd,  min: 0, max: 500,  step: 10, disp: `${sd}M` },
            { label: 'Long-term debt (IDR M)',  val: ld,  set: setLd,  min: 0, max: 1000, step: 50, disp: `${ld}M` },
          ].map(({ label, val, set, min, max, step, disp }) => (
            <div key={label} className="calc-row" style={{ marginBottom: '6px' }}>
              <label style={{ fontSize: '11px', color: 'var(--ink-3)', width: '130px', flexShrink: 0 }}>{label}</label>
              <input type="range" min={min} max={max} step={step} value={val}
                className="calc-row__range" style={{ accentColor: accent }}
                onChange={e => set(Number(e.target.value))} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-3)', minWidth: '50px', textAlign: 'right' }}>{disp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Balance sheet display */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-3)', background: 'var(--bg-alt)', padding: '6px 10px', borderRadius: '6px 6px 0 0' }}>Assets</div>
          <Row label="Cash" value={ca} />
          <Row label="Receivables" value={ar} />
          <Row label="Inventory" value={inv} />
          <Row label="Current assets" value={curA} sub />
          <Row label="Property & equip" value={pe} />
          <Total label="Total assets" value={totA} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-3)', background: 'var(--bg-alt)', padding: '6px 10px', borderRadius: '6px 6px 0 0' }}>Liabilities & Equity</div>
          <Row label="Payables" value={ap} />
          <Row label="Short-term debt" value={sd} />
          <Row label="Current liabilities" value={curL} sub />
          <Row label="Long-term debt" value={ld} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px',
            fontWeight: 600, padding: '5px 10px', borderBottom: '1px solid var(--border-soft)',
            color: eq >= 0 ? 'var(--accent-3)' : 'var(--accent)' }}>
            <span>Equity (residual)</span>
            <span>IDR {eq.toLocaleString()}M</span>
          </div>
          <Total label="Total L + Equity" value={totA} />
        </div>
      </div>

      <div className="calc-metrics">
        {[
          { label: 'Current ratio', value: isFinite(cr) ? `${cr}×` : '∞', color: cr >= 1.5 ? 'var(--accent-3)' : cr >= 1 ? 'var(--gold)' : 'var(--accent)' },
          { label: 'Working capital', value: `${curA - curL >= 0 ? '+' : '−'}IDR ${Math.abs(curA - curL)}M`, color: curA - curL >= 0 ? 'var(--accent-3)' : 'var(--accent)' },
          { label: 'Equity', value: `${eq >= 0 ? '+' : '−'}IDR ${Math.abs(eq).toLocaleString()}M`, color: eq >= 0 ? 'var(--accent-3)' : 'var(--accent)' },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      <div className="calc-insight" style={{ borderColor: accent }}>{insight}</div>
    </div>
  )
}
