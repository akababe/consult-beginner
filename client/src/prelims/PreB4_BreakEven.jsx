import BreakEvenCalc from './calculators/BreakEvenCalc.jsx'

const PreB4 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module B4</span>
        <h1>Break-Even Analysis</h1>
        <div className="case-meta">
          Module B: How Businesses Create Value &bull; The minimum volume a business needs before it stops losing money
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Bayu</strong> (24) wants to open a bubble tea stall at his local pasar malam
            in Surabaya. He has IDR 15 million in savings to invest — for a portable cart, a
            blending station, refrigerator, and initial ingredient stock. Monthly rent for the
            stall spot is IDR 2 million.
          </p>
          <p>
            His older brother asks one question before Bayu signs anything: <em>"How many cups do
            you need to sell per day before you stop losing money?"</em>
          </p>
          <p>
            Bayu doesn't know. He has been thinking about this as: "If I sell enough cups, I'll be
            profitable." But he has never calculated what "enough" actually means — in a specific
            number he can test against reality.
          </p>
          <div className="highlight-box">
            <strong>Break-Even Analysis Converts "Will It Work?" Into a Testable Number</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Break-even is the exact point where a business's total revenue equals its total costs —
              no profit, no loss. Below break-even, every unit sold generates a loss. Above it, every
              additional unit generates profit. The break-even point tells you: <em>"This is the
              minimum I must sell before my business is no longer losing money."</em>
              <br /><br />
              This number is the most important output of any new business plan. It converts an
              abstract question — "is this viable?" — into a concrete, verifiable threshold you can
              compare against realistic customer demand.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Break-Even Formula</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Break-Even Volume = Fixed Costs ÷ Contribution Margin per Unit</strong>
              <br /><br />
              Where: <strong>Contribution Margin per Unit = Selling Price − Variable Cost per Unit</strong>
              <br /><br />
              The formula asks: "How many units must be sold so that the total contribution (units ×
              contribution margin per unit) equals the total fixed costs?" At that point, the fixed
              costs are exactly covered and profit is zero.
            </p>
          </div>

          <p><strong>Visualising Break-Even:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Concept</th>
                <th>What It Represents</th>
                <th>In the Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fixed Costs</td>
                <td>The financial "ceiling" you must punch through before earning any profit</td>
                <td>Numerator — what you must cover</td>
              </tr>
              <tr>
                <td>Contribution Margin / Unit</td>
                <td>How much each sale helps punch through that ceiling</td>
                <td>Denominator — the strength of each punch</td>
              </tr>
              <tr>
                <td>Break-Even Volume</td>
                <td>Number of punches needed to break through</td>
                <td>Result</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>Break-Even in Revenue (IDR), Not Just Units</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sometimes it is more useful to express break-even in revenue terms rather than unit
              volume — especially when a business sells multiple products at different prices.
              <br /><br />
              <strong>Break-Even Revenue = Fixed Costs ÷ Contribution Margin %</strong>
              <br /><br />
              This gives you the minimum monthly revenue the business must generate to cover all
              fixed costs. Below this revenue level, the business is losing money regardless of
              which specific products were sold.
            </p>
          </div>

          <div className="highlight-box">
            <strong>What Break-Even Does NOT Tell You</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Break-even tells you the minimum volume needed to stop losing money. It does not tell
              you whether that volume is achievable. After calculating break-even, you must
              separately assess: <em>"Is there enough demand in this market to realistically sell
              this many units?"</em> Break-even is a threshold test, not a demand forecast.
              The calculation is only useful if paired with a realistic demand estimate.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. The Common Mistake</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Mistake 1 — Confusing Break-Even with Profitability</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              "We hit break-even!" is not success — it means the business has stopped losing money.
              Profit only begins above break-even. For the business to be sustainable, it needs to
              operate consistently <em>above</em> break-even by enough margin to reward the owner's
              time and capital. Break-even is the floor, not the goal.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Using Gross Margin Instead of Contribution Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Break-even requires contribution margin per unit — which subtracts all variable costs,
              not just COGS. If packaging, delivery fees, and commissions are excluded from the
              variable cost calculation, the contribution margin is overstated, and the calculated
              break-even volume is too low (optimistically incorrect). Always confirm that
              contribution margin includes every cost that scales with each sale.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Treating Break-Even as a Guarantee</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>"The break-even is only 40 cups per day — I can definitely do that."</em> This
              is the most dangerous mistake. Break-even tells you what you need. It says nothing
              about what the market will give you. Bayu cannot know whether his pasar malam
              location will generate 40 cups per day just by calculating the break-even number.
              He needs to validate demand separately — by observing foot traffic, checking what
              other stalls nearby sell, and estimating the customer catchment area.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Bayu's Bubble Tea Stall</h2>
        <div className="content">
          <div className="calculation">
{`Bayu's Bubble Tea Stall — Break-Even Analysis

Step 1: Identify Fixed Costs (costs Bayu pays regardless of cups sold)
  Stall rent (pasar malam):    IDR 2,000,000 / month
  Equipment loan repayment:    IDR 1,500,000 / month (IDR 15M over 10 months)
  Electricity (base + usage):  IDR   600,000 / month (semi-variable, treated as fixed here)
  Phone / operational apps:    IDR   100,000 / month
  ──────────────────────────────────────────────────────────────
  Total Fixed Costs:           IDR 4,200,000 / month

Step 2: Calculate Contribution Margin per Cup
  Menu: One standard bubble tea size, blended pricing IDR 20,000 avg

  Selling price per cup:         IDR 20,000
  Variable costs per cup:
    Tea base / powder:           IDR  3,500
    Milk / creamer:              IDR  2,000
    Tapioca pearls:              IDR  1,500
    Sugar syrup:                 IDR    500
    Cup, straw, plastic seal:    IDR  1,200
    Ice:                         IDR    300
    ──────────────────────────────────────
    Total variable cost/cup:     IDR  9,000

  Contribution Margin per Cup = IDR 20,000 − IDR 9,000 = IDR 11,000
  Contribution Margin %        = IDR 11,000 ÷ IDR 20,000 = 55%

Step 3: Calculate Break-Even Volume
  Break-Even (cups/month) = Fixed Costs ÷ Contribution Margin per Cup
                          = IDR 4,200,000 ÷ IDR 11,000
                          = 382 cups per month

  Per day (assuming 26 selling days/month):
  Break-Even (cups/day) = 382 ÷ 26 = ~15 cups per day

  ⟹ Bayu needs to sell at least 15 cups per day to stop losing money.
     Below 15 cups/day, every day is a loss.
     Above 15 cups/day, every additional cup generates IDR 11,000 in profit.

Step 4: Sanity Check — Is 15 Cups/Day Achievable?
  Nearby bubble tea stalls at similar pasar malam: reportedly sell 25–50 cups/day.
  Break-even is 15 cups — 60% of the low-end competitor estimate.
  This seems achievable. The base scenario appears viable.

Step 5: Profit Projections Above Break-Even
  Volume        Revenue (IDR)   Variable Cost  Fixed Cost   Profit (IDR)   Margin
  ─────────────────────────────────────────────────────────────────────────────────
  10 cups/day   5,200,000       2,340,000      4,200,000    −1,340,000     −26%
  15 cups/day   7,800,000       3,510,000      4,200,000        90,000      +1%  ← break-even
  25 cups/day  13,000,000       5,850,000      4,200,000     2,950,000     +23%
  40 cups/day  20,800,000       9,360,000      4,200,000     7,240,000     +35%
  60 cups/day  31,200,000      14,040,000      4,200,000    12,960,000     +42%

  (Revenue = cups/day × 26 days × IDR 20,000)

Key observation: Once fixed costs are covered (at 15 cups/day), every additional 10 cups/day
adds IDR 2,860,000 in monthly profit (10 × 26 × IDR 11,000). This is operating leverage in
action — above break-even, profit grows faster than revenue because fixed costs are flat.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Break-Even in Revenue Terms:</strong></p>
          <div className="calculation">
{`Break-Even Revenue = Fixed Costs ÷ Contribution Margin %
                   = IDR 4,200,000 ÷ 55%
                   = IDR 7,636,364 / month
                   ≈ IDR 7,640,000 / month

  Interpretation: Bayu needs to generate at least IDR 7,640,000 per month in
  revenue before the stall breaks even. If his average price is IDR 20,000,
  this implies 382 cups — consistent with the unit-based calculation.

  Why use revenue break-even? Useful when Bayu adds more products at
  different price points later. Revenue break-even tells him the minimum
  monthly sales line regardless of product mix.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 02 — Clean &amp; Fold Laundry (Break-Even Is the Primary Framework)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The entire expansion analysis in Case 02 is built on one break-even calculation:
              how many kilograms of laundry per month does Branch 2 need to process before it
              stops losing money? The answer — 1,140 kg/month — becomes the anchor for all
              subsequent decisions: what does Month 1 demand need to be, how long will the
              ramp take under different scenarios, and how much reserve does Wati need to survive
              the ramp period. Without the break-even calculation, the expansion decision has no
              concrete threshold to evaluate against.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 01 — BrewMate Café (Break-Even Used for Repricing Decisions)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In Case 01, break-even logic appears in the repricing scenarios. When Budi considers
              raising Kopi Susu from IDR 20,000 to IDR 23,000, the key question is: "Even if
              some customers stop buying because of the price increase, do we still come out ahead?"
              This is a break-even question: how many customers can Budi afford to lose before
              the price increase stops being beneficial? The answer is calculated as a
              break-even volume decline — the same logic as a standard break-even, applied
              to a price change rather than a new business.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Break-Even Is the First Calculation in Any New Business Plan</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before asking "how much will I earn?" ask "how much do I need to sell before I
              earn anything?" This reframes the question from optimism to discipline. A business
              plan that does not include a break-even analysis has not answered the most
              fundamental question: can this business survive?
            </p>
          </div>
          <div className="highlight-box">
            <strong>Low Break-Even = Resilient Business. High Break-Even = Fragile Business.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business with a low break-even point (relative to realistic demand) can survive
              slow months, lose a few customers, and still be fine. A business with a high
              break-even must operate near full capacity to stay solvent. High fixed costs drive
              up break-even. High contribution margins drive it down. The ideal business has
              low fixed costs and high contribution margins — making break-even low and the
              upside above break-even steep.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Validate Demand Before Trusting the Break-Even Number</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Bayu's break-even is 15 cups per day. That number is only meaningful if there are
              enough people walking past his stall who want bubble tea. Break-even analysis is
              always a supply-side calculation — it tells you what the business needs to produce.
              The demand-side question — will customers actually buy that much? — must be answered
              through observation, surveys, and competitive intelligence. The most common reason
              new businesses fail is not that their break-even was too high. It is that the
              expected demand never materialised.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Margin of Safety: How Far Above Break-Even Are You?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Once a business is operating, break-even remains useful as a risk measure.
              If Bayu currently sells 40 cups per day and break-even is 15 cups per day, his
              <em> margin of safety</em> is 25 cups per day — he can lose 63% of his customers
              before the business starts losing money. A large margin of safety means the business
              is resilient. A small margin of safety means the business is vulnerable to any
              demand disruption. Always know your margin of safety, especially before making
              decisions that increase fixed costs (like hiring staff or signing a longer lease).
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            The calculator below is pre-loaded with Bayu's bubble tea numbers. Drag the sliders
            to see how changing price, variable cost, fixed costs, or volume shifts the break-even
            point and the profit line in real time.
          </p>
          <BreakEvenCalc />
        </div>
      </section>

    </div>
  )
}

export default PreB4
