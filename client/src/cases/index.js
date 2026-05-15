// ── CASE REGISTRY ────────────────────────────────────────────
// To add a new case: create the JSX file, import it here, add one entry.

import Case01 from './Case01_CafeProfit.jsx'

export const cases = [
  {
    id: 'case-01',
    slug: 'cafe-profit',
    number: '01',
    title: 'Why Is My Café Losing Profit?',
    subtitle: 'Revenue stayed flat but profit dropped by half — finding where the money went.',
    industry: 'Food & Beverage',
    firm: 'Small Business',
    framework: 'Contribution Margin + Menu Classification',
    decisionType: 'Pricing & Product Mix',
    difficulty: 'Beginner',
    region: 'Jakarta, Indonesia',
    readTime: '20 min read',
    accentColor: '#C4472A',
    component: Case01,
  },
]

export function getCaseBySlug(slug) {
  return cases.find(c => c.slug === slug) ?? null
}
