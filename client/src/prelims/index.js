// ── PRELIM REGISTRY ───────────────────────────────────────────
// Foundation modules that build vocabulary before the case studies.
// To add a new prelim: create the JSX file, import it here, add one entry.

import PreA1 from './PreA1_RevenueProfitCash.jsx'
import PreB1 from './PreB1_FixedVsVariable.jsx'
import PreA3 from './PreA3_Margins.jsx'
import PreA4 from './PreA4_WorkingCapital.jsx'
import PreB2 from './PreB2_UnitEconomics.jsx'
import PreB3 from './PreB3_CAC_LTV.jsx'
import PreB4 from './PreB4_BreakEven.jsx'
import PreB5 from './PreB5_ROI.jsx'

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
  {
    id: 'pre-b2',
    slug: 'unit-economics',
    moduleId: 'B2',
    module: 'Module B · How Businesses Create Value',
    title: 'Unit Economics',
    subtitle: 'What one sale, one job, or one customer actually earns — and why a full calendar is not the same as a profitable business.',
    concept: 'Unit Economics',
    difficulty: 'Foundation',
    readTime: '11 min read',
    accentColor: '#8B5A2A',
    component: PreB2,
    unlocksCase: ['Case 04'],
  },
  {
    id: 'pre-a4',
    slug: 'working-capital',
    moduleId: 'A4',
    module: 'Module A · The Language of Money',
    title: 'Working Capital',
    subtitle: 'The cash a business needs to fund the gap between paying costs and collecting from customers — and why profitable businesses run out of cash.',
    concept: 'Working Capital & Cash Flow',
    difficulty: 'Foundation',
    readTime: '12 min read',
    accentColor: '#C47A2A',
    component: PreA4,
    unlocksCase: ['Case 05'],
  },
  {
    id: 'pre-b3',
    slug: 'cac-ltv',
    moduleId: 'B3',
    module: 'Module B · How Businesses Create Value',
    title: 'CAC & LTV',
    subtitle: 'What it costs to acquire a customer vs. what that customer is worth — and why not all customers are equally valuable.',
    concept: 'Customer Acquisition & Lifetime Value',
    difficulty: 'Foundation',
    readTime: '12 min read',
    accentColor: '#5A2A8B',
    component: PreB3,
    unlocksCase: ['Case 06'],
  },
  {
    id: 'pre-b5',
    slug: 'roi-payback',
    moduleId: 'B5',
    module: 'Module B · How Businesses Create Value',
    title: 'ROI & Payback Period',
    subtitle: 'Whether a capital investment earns back more than it costs — and how to stress-test the salesperson\'s numbers.',
    concept: 'Return on Investment',
    difficulty: 'Foundation',
    readTime: '12 min read',
    accentColor: '#2A5C3F',
    component: PreB5,
    unlocksCase: ['Case 07'],
  },
]

export function getPrelimBySlug(slug) {
  return prelims.find(p => p.slug === slug) ?? null
}
