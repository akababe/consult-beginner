// ── CASE REGISTRY ────────────────────────────────────────────
// To add a new case: create the JSX file, import it here, add one entry.

import Case01 from './Case01_CafeProfit.jsx'
import Case02 from './Case02_LaundryExpansion.jsx'
import Case03 from './Case03_FashionInventory.jsx'

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
  {
    id: 'case-02',
    slug: 'laundry-expansion',
    number: '02',
    title: 'Should I Open a Second Branch?',
    subtitle: 'A profitable laundry shop considers expansion — and discovers how much it actually needs to work.',
    industry: 'Services',
    firm: 'Small Business',
    framework: 'Break-Even Analysis + Scenario Modeling',
    decisionType: 'Expansion & Capital Allocation',
    difficulty: 'Beginner',
    region: 'Depok, Indonesia',
    readTime: '18 min read',
    accentColor: '#2A7AC4',
    component: Case02,
  },
  {
    id: 'case-03',
    slug: 'fashion-inventory',
    number: '03',
    title: 'Why Do I Keep Running Out of My Best Products?',
    subtitle: 'A thrift reseller discovers her revenue plateau is a self-inflicted inventory allocation problem.',
    industry: 'Retail / E-Commerce',
    firm: 'Small Business',
    framework: 'ABC Analysis + Inventory Turnover',
    decisionType: 'Inventory Allocation',
    difficulty: 'Beginner',
    region: 'Bandung, Indonesia',
    readTime: '18 min read',
    accentColor: '#7A2AC4',
    component: Case03,
  },
]

export function getCaseBySlug(slug) {
  return cases.find(c => c.slug === slug) ?? null
}
