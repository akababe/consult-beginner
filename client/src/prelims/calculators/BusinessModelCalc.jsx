import { useState } from 'react'

const accent = '#0D6B50'

const ARCHS = {
  saas:     { label: 'SaaS / Subscription',     bg: '#E1F5EE', tc: '#074532', sc: '#0D6B50', gm: '70–90%', cm: '50–75%', fc: 'High (eng + sales)',   wc: 'Negative (annual billing)', moat: 'Switching costs + network effects', risk: 'Churn, CAC payback, competition' },
  retail:   { label: 'Retail / Distribution',    bg: '#E6F1FB', tc: '#0B3E7A', sc: '#1357A6', gm: '20–40%', cm: '5–15%',  fc: 'Moderate (rent + staff)', wc: 'High (inventory + AR)',    moat: 'Brand, location, scale',             risk: 'Inventory risk, e-commerce pressure' },
  bank:     { label: 'Bank / Financial Services', bg: '#FAEEDA', tc: '#503300', sc: '#7A5200', gm: 'NIM 2–4%', cm: 'Spread-based', fc: 'High (compliance + tech)', wc: 'N/A — funding-driven', moat: 'Licence, trust, switching cost',   risk: 'Credit risk, regulation, rate risk' },
  mfg:      { label: 'Manufacturing',             bg: '#FAECE7', tc: '#7A2F12', sc: '#993C1D', gm: '15–40%', cm: '10–25%', fc: 'Very high (plant)',    wc: 'High (inventory + AR)',    moat: 'Scale, process IP, contracts',       risk: 'Capex cycles, commodity swings' },
  platform: { label: 'Platform / Marketplace',    bg: '#EEEDFE', tc: '#2E266E', sc: '#4A41A8', gm: '60–95%', cm: '55–90%', fc: 'Moderate (tech + ops)', wc: 'Often negative',          moat: 'Network effects (strongest)',        risk: 'Cold start, disintermediation' },
  services: { label: 'Professional Services',     bg: '#F1EFE8', tc: '#333',    sc: '#555',    gm: '30–60%', cm: '20–40%', fc: 'Low–moderate',         wc: 'Low–moderate',             moat: 'Brand, talent, client relationships', risk: 'Key-person risk, utilisation' },
}

const FIELDS = [
  ['Gross margin', 'gm'], ['Contribution margin', 'cm'],
  ['Working capital', 'wc'], ['Fixed costs', 'fc'],
  ['Key moat', 'moat'], ['Key risk', 'risk'],
]

export default function BusinessModelCalc() {
  const [selected, setSelected] = useState('saas')
  const a = ARCHS[selected]

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: accent }}>Select an Archetype to Explore</div>

      {/* Archetype cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '14px' }}>
        {Object.entries(ARCHS).map(([key, arch]) => (
          <button key={key} onClick={() => setSelected(key)}
            style={{ background: arch.bg, border: `2px solid ${selected === key ? accent : 'transparent'}`,
              borderRadius: '10px', padding: '12px', textAlign: 'left', cursor: 'pointer',
              transition: 'border-color .15s' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: arch.tc, marginBottom: '3px' }}>{arch.label}</div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: a.tc, marginBottom: '10px' }}>{a.label} — Key Economics</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {FIELDS.map(([label, key]) => (
            <div key={key} style={{ background: a.bg, borderRadius: '8px', padding: '10px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: a.tc, marginBottom: '3px' }}>{label}</div>
              <div style={{ fontSize: '12px', color: a.sc }}>{a[key]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="calc-insight" style={{ borderColor: accent, marginTop: '12px' }}>
        {selected === 'saas' && 'SaaS economics look terrible early (high CAC, negative FCF) and exceptional at scale. The inflection is CAC payback.'}
        {selected === 'retail' && 'Thin margins + high working capital = unforgiving. Retail wins on volume, turn, and location — not margin.'}
        {selected === 'bank' && 'Banks earn on the spread between borrowing and lending costs. Leverage amplifies returns — and losses.'}
        {selected === 'mfg' && 'Manufacturers need high utilisation to absorb fixed costs. Operating leverage is extreme — small volume swings flip profitability.'}
        {selected === 'platform' && 'Platforms have near-zero marginal cost at scale. The challenge is the cold-start problem — value only emerges once both sides are present.'}
        {selected === 'services' && 'Services businesses are capped by headcount. The key metric is utilisation rate — billable hours ÷ total hours.'}
      </div>
    </div>
  )
}
