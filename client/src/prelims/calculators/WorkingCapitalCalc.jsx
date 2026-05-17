import { useState } from 'react'

const accent = '#C47A2A'

export default function WorkingCapitalCalc() {
  const [dpo, setDpo] = useState(30)   // days pay suppliers
  const [dio, setDio] = useState(15)   // days inventory
  const [dso, setDso] = useState(60)   // days customers pay

  const [ar,  setAr]  = useState(200)  // IDR M
  const [inv, setInv] = useState(100)  // IDR M
  const [ap,  setAp]  = useState(80)   // IDR M

  const ccc  = dso + dio - dpo
  const wc   = ar + inv - ap
  const tot  = Math.max(dpo + dio + dso, 30)

  const rating = ccc <= 0 ? 'Negative (best)' : ccc <= 20 ? 'Low' : ccc <= 45 ? 'Medium' : 'High'
  const rColor = ccc <= 0 ? 'var(--accent-3)' : ccc <= 20 ? 'var(--accent-3)' : ccc > 45 ? 'var(--accent)' : 'var(--gold)'

  const cccInsight = ccc <= 0
    ? `Negative CCC of ${ccc} days — suppliers fund operations. Cash arrives before you pay anyone.`
    : `CCC of ${ccc} days. Every rupiah of growth requires ${ccc} days of upfront cash before it returns.`

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Cash Conversion Cycle + Working Capital Calculator</div>

      {/* CCC sliders */}
      <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.7px' }}>Cash Conversion Cycle</div>
      <div className="calc-sliders" style={{ marginBottom: '14px' }}>
        {[
          { label: 'Days to pay suppliers (DPO)', val: dpo, set: setDpo, min: 0, max: 90,  step: 5, disp: `${dpo} days` },
          { label: 'Days inventory sits (DIO)',   val: dio, set: setDio, min: 0, max: 90,  step: 5, disp: `${dio} days` },
          { label: 'Days customers pay (DSO)',    val: dso, set: setDso, min: 0, max: 120, step: 5, disp: `${dso} days` },
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

      {/* CCC Timeline */}
      <div style={{ position: 'relative', height: '72px', marginBottom: '12px' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: '28px', height: '2px', background: 'var(--border)' }} />
        {dpo > 0 && (
          <div style={{ position: 'absolute', left: 0, width: `${dpo / tot * 100}%`, top: '7px',
            height: '22px', background: '#1D9E75', borderRadius: '4px', display: 'flex', alignItems: 'center',
            padding: '0 6px', fontSize: '10px', fontWeight: 600, color: '#fff', overflow: 'hidden' }}>
            {dpo > 5 ? `${dpo}d supplier` : ''}
          </div>
        )}
        {dio > 0 && (
          <div style={{ position: 'absolute', left: `${dpo / tot * 100}%`, width: `${dio / tot * 100}%`, top: '38px',
            height: '22px', background: '#EF9F27', borderRadius: '4px', display: 'flex', alignItems: 'center',
            padding: '0 6px', fontSize: '10px', fontWeight: 600, color: '#fff', overflow: 'hidden' }}>
            {dio > 5 ? `${dio}d stock` : ''}
          </div>
        )}
        {dso > 0 && (
          <div style={{ position: 'absolute', left: `${(dpo + dio) / tot * 100}%`, width: `${dso / tot * 100}%`, top: '38px',
            height: '22px', background: '#E24B4A', borderRadius: '4px', display: 'flex', alignItems: 'center',
            padding: '0 6px', fontSize: '10px', fontWeight: 600, color: '#fff', overflow: 'hidden' }}>
            {dso > 5 ? `${dso}d AR` : ''}
          </div>
        )}
      </div>
      <div className="calc-legend" style={{ marginBottom: '10px' }}>
        <span><span className="calc-legend__dot" style={{ background: '#1D9E75' }} />Supplier credit</span>
        <span><span className="calc-legend__dot" style={{ background: '#EF9F27' }} />Inventory</span>
        <span><span className="calc-legend__dot" style={{ background: '#E24B4A' }} />Receivables</span>
      </div>

      <div className="calc-metrics" style={{ marginBottom: '12px' }}>
        <div className="calc-metric">
          <div className="calc-metric__label">Cash conversion cycle</div>
          <div className="calc-metric__value" style={{ color: rColor }}>{ccc} days</div>
        </div>
        <div className="calc-metric">
          <div className="calc-metric__label">Cash trap rating</div>
          <div className="calc-metric__value" style={{ color: rColor }}>{rating}</div>
        </div>
      </div>
      <div className="calc-insight" style={{ borderColor: accent, marginBottom: '20px' }}>{cccInsight}</div>

      {/* WC Calculator */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.7px' }}>Working Capital Calculator</div>
        <div className="calc-sliders">
          {[
            { label: 'Accounts receivable (IDR M)', val: ar,  set: setAr,  min: 0, max: 500, step: 10, disp: `IDR ${ar}M` },
            { label: 'Inventory (IDR M)',            val: inv, set: setInv, min: 0, max: 300, step: 10, disp: `IDR ${inv}M` },
            { label: 'Accounts payable (IDR M)',     val: ap,  set: setAp,  min: 0, max: 300, step: 10, disp: `IDR ${ap}M` },
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
        <div style={{ background: 'var(--bg-alt)', borderRadius: '6px', padding: '10px 14px', fontFamily: 'var(--font-mono)', fontSize: '13px', margin: '10px 0', textAlign: 'center' }}>
          Working Capital = AR + Inventory − AP ={' '}
          <span style={{ color: wc >= 0 ? 'var(--accent-3)' : 'var(--accent)', fontWeight: 700 }}>
            {wc >= 0 ? '+' : '−'}IDR {Math.abs(wc)}M
          </span>
        </div>
      </div>
    </div>
  )
}
