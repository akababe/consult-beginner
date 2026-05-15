// ── PRELIM REGISTRY ───────────────────────────────────────────
// Foundation modules that build vocabulary before the case studies.
// To add a new prelim: create the JSX file, import it here, add one entry.

import PreA1 from './PreA1_RevenueProfitCash.jsx'
import PreB1 from './PreB1_FixedVsVariable.jsx'
import PreA3 from './PreA3_Margins.jsx'
import PreB4 from './PreB4_BreakEven.jsx'

export const prelims = [
  {
    id: 'pre-a1',
    slug: 'revenue-profit-cash',
    moduleId: 'A1',
    module: 'Module A · The Language of Money',
    title: 'Revenue vs Profit vs Cash',
    subtitle: 'The three numbers every business owner confuses — and why mixing them up is dangerous.',
    concept: 'Income Statement Basics',
    difficulty: 'Foundation',
    readTime: '10 min read',
    accentColor: '#2A7AC4',
    component: PreA1,
    unlocksCase: ['Case 01', 'Case 02'],
  },
  {
    id: 'pre-b1',
    slug: 'fixed-vs-variable-costs',
    moduleId: 'B1',
    module: 'Module B · How Businesses Create Value',
    title: 'Fixed vs Variable Costs',
    subtitle: 'The cost distinction that underlies every pricing, break-even, and expansion decision.',
    concept: 'Cost Structure',
    difficulty: 'Foundation',
    readTime: '12 min read',
    accentColor: '#2AC47A',
    component: PreB1,
    unlocksCase: ['Case 01', 'Case 02', 'Case 03'],
  },
  {
    id: 'pre-a3',
    slug: 'margins',
    moduleId: 'A3',
    module: 'Module A · The Language of Money',
    title: 'Gross, Contribution & EBITDA Margins',
    subtitle: 'Three margin concepts, when to use each, and why your most popular item might not be your most profitable.',
    concept: 'Margin Analysis',
    difficulty: 'Foundation',
    readTime: '12 min read',
    accentColor: '#C4A02A',
    component: PreA3,
    unlocksCase: ['Case 01', 'Case 02'],
  },
  {
    id: 'pre-b4',
    slug: 'break-even',
    moduleId: 'B4',
    module: 'Module B · How Businesses Create Value',
    title: 'Break-Even Analysis',
    subtitle: 'How many cups, kg, or orders until a business stops losing money — and why this is the first question to ask.',
    concept: 'Break-Even',
    difficulty: 'Foundation',
    readTime: '12 min read',
    accentColor: '#C4472A',
    component: PreB4,
    unlocksCase: ['Case 01', 'Case 02'],
  },
]

export function getPrelimBySlug(slug) {
  return prelims.find(p => p.slug === slug) ?? null
}
