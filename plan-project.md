# consult-beginner — Project Plan

## What This Project Is

A standalone React + Vite web app that mirrors `consult-platform/` in architecture and visual style, but targets **beginners**. Uses simple small-business scenarios with basic arithmetic instead of advanced corporate financial modeling. First case study: a small Jakarta café learning why its profit is shrinking.

---

## Source References

| What | Where |
|------|-------|
| Style to copy | `consult-platform/client/src/cases/Case01_MarginCollapse.jsx` |
| CSS to copy verbatim | `consult-platform/client/src/styles/global.css` |
| Components to adapt | `consult-platform/client/src/components/` |
| Tech stack | React 18 + Vite 5 + react-router-dom 6 (identical to consult-platform) |

---

## Files to Create (15 files)

```
consult-beginner/
└── client/
    ├── index.html                                 title: "Business Basics"
    ├── package.json                               same deps as consult-platform client
    ├── vite.config.js                             port 5174 (avoids conflict with 5173)
    └── src/
        ├── main.jsx                               identical to consult-platform
        ├── App.jsx                                identical to consult-platform
        ├── styles/
        │   └── global.css                         exact copy from consult-platform
        ├── components/
        │   ├── layout/
        │   │   ├── Header.jsx                     title: "The Beginner's Playbook"
        │   │   ├── Footer.jsx                     adapted text
        │   │   └── ReadingProgress.jsx            identical copy
        │   └── case/
        │       └── CaseCard.jsx                   identical copy
        ├── pages/
        │   ├── Home.jsx                           beginner hero text, simplified filters
        │   ├── CasePage.jsx                       identical copy
        │   └── NotFound.jsx                       adapted text
        └── cases/
            ├── index.js                           one case entry
            └── Case01_CafeProfit.jsx              THE beginner case
```

---

## Case01_CafeProfit.jsx — Content Plan

### Scenario: BrewMate Café

| Field | Detail |
|-------|--------|
| Company | BrewMate — small specialty coffee café, South Jakarta |
| Owner | Budi (28), left corporate job, first business, 18 months old |
| Team | 1 barista + 2 part-time staff |
| Revenue | IDR 45,000,000 / month (~$2,800 USD) |
| Problem | Profit margin fell 18% → 10% over 9 months |
| Level | Beginner / Small Business — Café Profitability |

### Menu Data (key table in Section 5)

| Item | Sell Price | Ingredient Cost | Margin % | Daily Qty | Monthly Revenue |
|------|-----------|----------------|----------|-----------|----------------|
| Kopi Susu | IDR 20,000 | IDR 5,000 | 75% | 35 | IDR 21,000,000 |
| Americano | IDR 18,000 | IDR 4,000 | 78% | 15 | IDR 8,100,000 |
| Matcha Latte | IDR 30,000 | IDR 16,500 | 45% | 8 | IDR 7,200,000 |
| Avocado Toast | IDR 42,000 | IDR 28,000 | 33% | 5 | IDR 6,300,000 |
| Croissant | IDR 25,000 | IDR 19,000 | 24% | 4 | IDR 3,000,000 |
| **Blended** | — | — | **~59%** | **67** | **≈ IDR 45,600,000** |

**Monthly cost structure:**
- Ingredient COGS: IDR 16,920,000
- Fixed costs (rent + staff + utilities + packaging + misc): IDR 22,000,000
- Food waste (avocado + croissant over-ordering): IDR 1,080,000
- **Total: ~IDR 40,000,000 → Profit IDR 4,500,000 (10%)**

---

## 11-Section Outline

Same headings and CSS classes as `Case01_MarginCollapse.jsx`. Each section uses the same `highlight-box`, `data-table`, and `calculation` divs.

### 1. Business Background
Budi's story. Coffee-only menu worked well. Added food items 9 months ago. Revenue held, profit quietly bled.

**Stakeholder map** (3 people instead of 5 corporates):
- **Budi** (owner): loves everything on the menu, "avocado toast is what makes us look premium"
- **Sari** (bookkeeper friend): spotted the profit drop, wants numbers not guesses
- **Ricky** (barista): knows which items take longest to prepare

**Trigger box**: Sari showed Budi a simple table — profit per IDR of revenue has fallen every month for 9 straight months.

### 2. Business Problem: One Number, Three Causes
- **Driver 1 — Ingredient Inflation Without Price Adjustment (50%)**: Coffee beans +22%, milk +18%. Kopi Susu ingredient cost went from IDR 3,800 → IDR 5,000 per cup. Prices never changed. IDR 1,260,000/month lost on Kopi Susu alone.
- **Driver 2 — Low-Margin Food Items Diluting Blended Margin (30%)**: Coffee runs 75–78% margin. Avocado Toast (33%) and Croissant (24%) were added for "premium look". Blended café margin dropped from ~76% (coffee era) to ~59% today.
- **Driver 3 — Perishable Food Waste (20%)**: Avocados and croissant dough ordered 7 days ahead, only 5 days sell. IDR 1,080,000/month in the bin.

### 3. Analytics Objective
**North Star**: Which items to keep, reprice, or remove — and what would new monthly profit look like?

Three questions:
1. What is each item's actual monthly gross profit contribution?
2. How much is food waste costing per month?
3. What happens to profit if items are repriced vs. removed?

### 4. Framework Selection & Rationale
- **Primary: Contribution Margin Analysis** — Price − Ingredient Cost = Gross Profit per Unit. Rank by total monthly gross profit generated.
- **Secondary: Menu Classification** (beginner BCG adaptation with same 4 quadrants):
  - Stars: Kopi Susu, Americano — high margin, high volume, protect these
  - Cash Cow: Matcha Latte with a price tweak
  - Question Mark: Avocado Toast — can be saved with price increase?
  - Dog: Croissant — exit candidate
- **Rejected** (with reasons table): Porter's Five Forces, Price Elasticity modeling, Full waterfall analysis

### 5. Data Perspective
- Full menu table (above)
- Monthly cost breakdown table
- Data gap: no POS system — sales tallied manually ±10% accuracy; waste is visual estimate

### 6. Step-by-Step Analytical Thinking
1. Calculate contribution margin per item (price − cost)
2. Multiply by monthly volume → total monthly gross profit per item
3. Identify waste cost and over-ordering behaviour
4. Model three scenarios: do nothing / reprice / remove Dogs

### 7. Calculations & Financial Modeling (4 calculations)
All use the same monospaced `calculation` div style with plain text layout.

**Calc 1 — Contribution Margin per Item**
Simple table showing price − cost = gross profit per unit for all 5 items.

**Calc 2 — Monthly Waste Cost**
```
Avocado Toast waste:
  Daily orders: 5 | Daily prep: 7 (Budi orders too much)
  Wasted portions: 2/day × IDR 14,000 material cost × 30 days = IDR 840,000
Croissant waste:
  Wasted daily: 1.5 pieces × IDR 16,000 × 30 days = IDR 720,000
  (some days zero waste, counted as average)
Total monthly waste: IDR 840,000 + IDR 720,000 = IDR 1,080,000
  = equivalent to 1 part-time staff week
```

**Calc 3 — Price Increase Scenario**
```
Option A — Raise Kopi Susu: IDR 20,000 → IDR 23,000
  Extra profit per cup: IDR 3,000
  Monthly gain: IDR 3,000 × 35 cups × 30 days = IDR 3,150,000
  (assumes same volume — conservative test: even −10% volume = 31.5 cups)
  31.5 × IDR 3,000 × 30 = IDR 2,835,000 still gained

Option B — Raise Avocado Toast: IDR 42,000 → IDR 52,000
  Extra profit per plate: IDR 10,000
  Monthly gain: IDR 10,000 × 5 × 30 = IDR 1,500,000
```

**Calc 4 — Scenario Comparison**
```
Scenario          Monthly Revenue   Monthly Profit   Margin
Do Nothing        IDR 45,600,000    IDR 4,500,000    10%
Reprice + Fix      IDR 48,500,000    IDR 9,200,000    19%  ← Recommended
  Waste (A+B above)
Remove Croissant + IDR 47,000,000    IDR 8,500,000    18%
  Reprice rest
Remove ALL food    IDR 36,900,000    IDR 3,200,000     9%  ← WORSE! Fixed costs remain
```

Key insight highlighted: removing food items entirely HURTS profit because fixed costs (rent, staff) don't disappear — shows beginners the difference between fixed and variable costs.

### 8. Findings & Insights (5 highlight boxes)
1. The #1 problem is frozen prices, not the menu mix — ingredient costs rose 20% in a year
2. Avocado Toast and Croissant aren't losing money by themselves, but earn IDR 0.24–0.33 per IDR of revenue vs. IDR 0.75–0.78 for coffee
3. Removing food items entirely makes profit worse (fixed cost trap) — counterintuitive finding
4. Waste is small in absolute terms but IDR 1.08M/month = one staff member's weekly pay thrown away
5. Summary recovery lever table

### 9. Recommendations

**Tier 1 — This Week**
- Raise Kopi Susu to IDR 23,000 (+15%) — single biggest profit lever, no operational change needed
- Fix waste: implement a 5-day ordering cycle for perishables, not 7 days

**Tier 2 — This Month**
- Raise Avocado Toast to IDR 52,000 or replace with a simpler high-margin item (e.g., banana bread from supplier ~45% margin)
- Add a upsell prompt: "Add Americano for IDR 15,000?" — bundles the high-margin coffee

**Tier 3 — Next Quarter**
- Remove Croissant once a replacement is tested
- Set up a simple weekly tracking spreadsheet: revenue, ingredient spend, profit — 15 minutes every Monday

### 10. Business Decision-Making: What Will Actually Happen
Budi will resist raising Kopi Susu price ("customers will leave"). The answer: show him the math — even a 10% volume drop at the new price still makes more money. He loves Avocado Toast for Instagram; don't fight that — just charge more for it. Simple monitoring table: 4 metrics to track weekly (total revenue, ingredient spend, waste estimate, profit).

### 11. Beginner Practitioner's Notes (5 highlight boxes)
- The pattern in every small food business: costs creep up, prices stay frozen, profit quietly bleeds out
- Most common beginner mistake: watching revenue instead of contribution margin
- What good small business owners do: know their margin per item by heart
- The fixed-cost trap: cutting a "bad" product can make things worse if fixed costs stay the same
- The hardest conversation: telling an owner that their "signature" item needs a price increase (mirrors CCO dynamics in the advanced case, just at human scale)

---

## Home.jsx Adaptations

- **Hero title**: "Real Business Problems, Explained Simply"
- **Description**: "Beginner case studies that show how small business owners diagnose profit problems, understand their numbers, and make better decisions — step by step."
- **No firm filters** (BCG/McKinsey not relevant)
- **Simple industry filters**: All, Food & Beverage, Retail, Services
- **Difficulty badge on cards**: Beginner (not Advanced)
- **Meta pills**: "Beginner level" · "Step-by-step math" · "Real concepts"

## Header.jsx Adaptations

- Main: **"The Beginner's Playbook"**
- Sub: **"Real business problems — explained step by step"**

---

## How to Run After Implementation

```bash
cd consult-beginner/client
npm install
npm run dev
# Opens at http://localhost:5174
```

1. Home page → see BrewMate case card
2. Click card → `/case/cafe-profit`
3. CasePage with sidebar nav, scroll highlighting, dark mode toggle
4. All 11 sections render with same CSS as consult-platform

---

## Key Beginner vs. Advanced Differences

| Dimension | Advanced (NovaCPG) | Beginner (BrewMate) |
|-----------|-------------------|---------------------|
| Revenue scale | IDR 18.4 trillion | IDR 45 million/month |
| Stakeholders | 5 (PE firm, CEO, CFO, CCO, board) | 3 (owner, bookkeeper, barista) |
| Frameworks | Waterfall + BCG + Elasticity modeling | Contribution margin + simple menu classification |
| Math complexity | Multi-driver decomposition, ROPI, PED | Simple subtraction and multiplication |
| Data sources | ERP, TPS, DMS, cost accounting | Manual notebook tally, ingredient receipts |
| Key insight | Mix shift + promo waste are bigger than raw material inflation | Frozen prices + waste are the problem, not the food items themselves |
| Political complexity | CCO vs PE firm, family dynamics | Owner resists price increase out of fear |
