const Case01 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 01</span>
        <h1>Why Is My Café Losing Profit?</h1>
        <div className="case-meta">
          Industry: Food &amp; Beverage &bull; Level: Beginner / Small Business — Café Profitability
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>BrewMate</strong> is a small specialty coffee café in South Jakarta, founded 18 months ago by
            <strong> Budi</strong> (28), who left a marketing job to pursue his dream of owning a business.
            BrewMate operates out of a 40 sqm shophouse near a popular co-working hub, with a team of
            three: Budi himself, one full-time barista named <strong>Ricky</strong>, and a part-time
            weekend staff member. The café seats 14 people and runs from 7am to 9pm, seven days a week.
          </p>
          <p>
            For the first nine months, things looked good. Budi was pulling in around
            <strong> IDR 35–40 million per month</strong> in revenue and keeping roughly 18% of that
            as profit — about IDR 6–7 million per month, enough to cover his own living costs and
            slowly repay the IDR 80 million startup loan from his parents.
          </p>
          <p>
            Nine months ago, Budi expanded the menu. Customers had been asking for food to go with their
            coffee, so he introduced <strong>Avocado Toast</strong> and <strong>Croissant</strong> alongside
            his existing drinks. Revenue climbed to IDR 45 million per month. On the surface, the business
            was growing. But something was wrong.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Budi's friend <strong>Sari</strong>, who works as a bookkeeper, offered to review the café's
              numbers over a weekend. She built a simple table showing one metric for each month: profit as
              a percentage of revenue. The table told a clear story — profit margin had fallen every single
              month for nine months straight, from 18% down to 10%. Revenue was up. Costs were up faster.
              Budi was selling more and keeping less.
              <br /><br />
              Sari's question to Budi: <em>"Which of your menu items is actually making you money — and
              which ones are eating into your profit without you realising it?"</em>
            </p>
          </div>
          <p>
            <strong>Stakeholder Map:</strong>
          </p>
          <ul>
            <li>
              <strong>Budi (owner):</strong> Optimistic, proud of the café, and emotionally attached to the
              full menu. He believes the Avocado Toast "elevates the brand." He is open to data but
              resistant to the idea that adding menu items could have hurt his business. His instinct is
              to blame rising ingredient costs.
            </li>
            <li>
              <strong>Sari (part-time bookkeeper, friend):</strong> Pragmatic and numbers-focused. She
              spotted the trend and pushed Budi to look at it properly. She has no personal stake in any
              menu item — she just wants the business to survive.
            </li>
            <li>
              <strong>Ricky (barista):</strong> Knows the operational reality. He can tell you which items
              take the longest to prepare, which ones run out of stock and cause waste, and which items
              customers actually come back for. He is a useful source of ground truth.
            </li>
          </ul>
          <p>
            This is not a complicated corporate engagement — it is one person's livelihood. The stakes are
            personal. The data is simple. The fix, once found, should be equally simple to implement.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Number, Three Causes</h2>
        <div className="content">
          <p>
            A profit margin dropping from 18% to 10% sounds like one problem. It is not. When you break it
            down, BrewMate's profit erosion has <strong>three structurally different causes</strong> — each
            with a different fix and a different urgency. Treating them as one problem produces the
            wrong solution.
          </p>
          <div className="highlight-box">
            <strong>Driver 1 — Ingredient Costs Went Up, But Prices Stayed Frozen (≈50% of the Erosion)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Over the past 12 months, the cost of Budi's core ingredients has increased significantly.
              Coffee beans are up 22%, milk is up 18%, and cooking oil (used for food preparation) is
              up 15%. Budi has not changed a single price on his menu since opening day. A cup of Kopi
              Susu that used to cost IDR 3,800 in ingredients now costs IDR 5,000 — a 32% cost increase.
              The selling price is still IDR 20,000. His margin on that one item dropped from 81% to 75%.
              Across 35 cups per day for 30 days, that is <strong>IDR 1,260,000 per month in lost profit
              on Kopi Susu alone</strong> — just from not adjusting the price.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 2 — Low-Margin Food Items Are Diluting the Blended Margin (≈30% of the Erosion)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              BrewMate's coffee drinks have gross margins of 75–78% — meaning for every IDR 20,000 cup
              of Kopi Susu, about IDR 15,000 is gross profit. The new food items are very different.
              Avocado Toast costs IDR 28,000 in ingredients and sells for IDR 42,000 — a 33% margin.
              Croissant costs IDR 19,000 and sells for IDR 25,000 — a 24% margin. Every time a customer
              orders Avocado Toast instead of (or in addition to) a coffee, the average margin on that
              transaction falls. The café's blended gross margin has dropped from approximately
              <strong>76% (when it was coffee-only) to 59% today</strong>. Revenue grew, but the profit
              per IDR of revenue shrank because the mix shifted toward lower-margin products.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 3 — Food Waste from Over-Ordering Perishables (≈20% of the Erosion)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Coffee ingredients — beans, syrups — last for weeks. Avocados and croissant dough do not.
              Budi orders ingredients weekly, but he over-estimates demand. According to Ricky, the café
              typically prepares for 7 Avocado Toasts per day but only sells about 5. The two unsold
              portions — avocado, bread, toppings — go in the bin. Croissants have a similar pattern:
              ordered in batches of 35 per week, but roughly 8–10 go stale and are discarded. This waste
              costs approximately <strong>IDR 1,080,000 per month</strong> in ingredients that are
              purchased but never sold.
            </p>
          </div>
          <p>
            <strong>The compounding effect:</strong> These three drivers combine. A plate of Avocado Toast
            with a 33% gross margin, made with ingredients that have a 20% waste rate, is even less
            profitable than the margin number suggests. The true "cost of offering this item" is higher
            than what shows up in a simple price-minus-cost calculation.
          </p>
          <p>
            <strong>An important insight that surprises most beginners:</strong> The food items are not
            individually losing money — each sale of Avocado Toast still generates IDR 14,000 in gross
            profit. The problem is that BrewMate has high fixed costs (rent, staff, utilities) that
            must be paid regardless. Every item sold needs to contribute enough gross profit to help cover
            those fixed costs. Low-margin items contribute proportionally less, so if the menu shifts
            toward them, the business has to sell more to cover the same fixed costs — and if volume
            doesn't grow fast enough, profit shrinks.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Which menu items should BrewMate keep, which should be repriced, and which should be
              replaced — and what would the new monthly profit look like under each option?
            </p>
          </div>
          <p><strong>Three questions Budi and Sari need answered:</strong></p>
          <ol>
            <li>
              <strong>What is the actual monthly gross profit contribution of each menu item</strong> — after
              accounting for ingredient costs and an estimate of waste?
            </li>
            <li>
              <strong>How much is food waste costing per month</strong> — and how much of that is avoidable
              with a simple ordering discipline?
            </li>
            <li>
              <strong>What happens to total monthly profit</strong> if Budi raises prices, removes the
              lowest-margin items, or replaces them with better-margin alternatives?
            </li>
          </ol>
          <p>
            <strong>What success looks like:</strong> Budi walks away with a clear answer — which two or
            three actions would recover his monthly profit from IDR 4.5 million back toward IDR 8–9
            million — with simple calculations he can verify himself and explain to his parents (who lent
            him the startup capital).
          </p>
          <p>
            <strong>Analytical approach:</strong> This is a short, focused analysis. We do not need complex
            models or external data. The tools are: (1) contribution margin calculation for each menu
            item, (2) a simple waste cost estimate, and (3) scenario arithmetic — what would profit look
            like if we changed X? Any spreadsheet or even pen and paper is sufficient.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            A small café does not need the same analytical machinery as a multinational corporation.
            Applying a complex framework to a five-item menu would produce the right answer the wrong
            way — obscuring the insight with unnecessary complexity. The right approach is to use the
            simplest tool that clearly answers the question.
          </p>
          <div className="highlight-box">
            <strong>Primary: Contribution Margin Analysis</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              For each menu item: <em>Contribution Margin = Selling Price − Ingredient Cost</em>.
              Then multiply by monthly volume to get total monthly gross profit per item.
              This tells us which items are the most valuable profit contributors — not just which ones
              sell the most or generate the most revenue.
            </p>
            <p style={{ fontSize: '14px' }}>
              <strong>Why this fits:</strong> Budi currently tracks revenue ("we sold IDR 45 million this
              month") but not contribution ("how much of that IDR 45 million became gross profit, and
              where did it come from?"). Building the contribution margin table shifts the conversation
              from revenue to profit — which is the only number that actually matters for a small business
              owner's income.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Secondary: Menu Classification (a Beginner-Friendly Adaptation of the BCG Matrix)</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Once we have contribution margins, we classify each menu item into one of four roles using
              two dimensions: (1) gross margin % and (2) monthly volume sold.
            </p>
            <ul style={{ fontSize: '14px' }}>
              <li><strong>Stars (high margin, high volume):</strong> The engine of the business. Protect
              these, consider small price increases, and make sure they're always available.</li>
              <li><strong>Cash Cows (good margin, steady volume):</strong> Reliable earners. Don't mess
              with them unless margin is under pressure.</li>
              <li><strong>Question Marks (lower margin, moderate volume):</strong> Could be saved with a
              price increase or a lower-cost recipe. Worth analysing before deciding.</li>
              <li><strong>Dogs (low margin, low volume):</strong> The exit candidates. They contribute
              little gross profit and add operational complexity. The question is whether to raise prices
              sharply, replace them, or remove them.</li>
            </ul>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Framework Considered</th>
                <th>Decision</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Porter's Five Forces</strong></td>
                <td>Not applicable here</td>
                <td>Useful for understanding industry competition, but produces no insight about
                which menu items to keep or reprice. A café with five items does not need an
                industry structure analysis to fix its margin.</td>
              </tr>
              <tr>
                <td><strong>Price Elasticity Modeling</strong></td>
                <td>Too advanced for this stage</td>
                <td>Requires historical data from multiple price change events to estimate how
                volume changes when prices move. BrewMate has never changed its prices, so there
                is no dataset to model from. We will use a simpler "break-even volume decline"
                calculation instead.</td>
              </tr>
              <tr>
                <td><strong>Full Financial Waterfall (P&amp;L)</strong></td>
                <td>Partially used</td>
                <td>We build a simplified version (Revenue → COGS → Gross Profit → Fixed Costs →
                Net Profit) to frame the problem, but a full ERP-style waterfall with overhead
                allocation is unnecessary for five menu items and one location.</td>
              </tr>
              <tr>
                <td><strong>Ansoff Matrix</strong></td>
                <td>Not yet</td>
                <td>This is a growth strategy framework (new products, new markets). BrewMate's
                priority is recovering profitability, not expanding. Ansoff becomes relevant
                after margins are restored.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>
            BrewMate has no POS (point-of-sale) system. Sales volumes come from Budi's manual daily
            tally in a notebook — accurate to within ±10%. Ingredient costs are known from supplier
            invoices. Waste is estimated by Ricky based on what he discards each day. This data is
            imperfect, but it is sufficient to identify the dominant patterns. The analysis does not
            need to be precise to the nearest thousand rupiah — the differences between items are
            large enough that ±10% accuracy still produces clear, actionable conclusions.
          </p>

          <p><strong>Menu Item Profitability Overview:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Menu Item</th>
                <th>Sell Price (IDR)</th>
                <th>Ingredient Cost (IDR)</th>
                <th>Gross Margin %</th>
                <th>Daily Orders</th>
                <th>Monthly Revenue (IDR)</th>
                <th>Monthly Gross Profit (IDR)</th>
                <th>Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Kopi Susu</strong></td>
                <td>20,000</td>
                <td>5,000</td>
                <td>75%</td>
                <td>35</td>
                <td>21,000,000</td>
                <td>15,750,000</td>
                <td>★ Star</td>
              </tr>
              <tr>
                <td><strong>Americano</strong></td>
                <td>18,000</td>
                <td>4,000</td>
                <td>78%</td>
                <td>15</td>
                <td>8,100,000</td>
                <td>6,300,000</td>
                <td>★ Star</td>
              </tr>
              <tr>
                <td><strong>Matcha Latte</strong></td>
                <td>30,000</td>
                <td>16,500</td>
                <td>45%</td>
                <td>8</td>
                <td>7,200,000</td>
                <td>3,240,000</td>
                <td>? Question Mark</td>
              </tr>
              <tr>
                <td><strong>Avocado Toast</strong></td>
                <td>42,000</td>
                <td>28,000</td>
                <td>33%</td>
                <td>5</td>
                <td>6,300,000</td>
                <td>2,100,000</td>
                <td>? Question Mark</td>
              </tr>
              <tr>
                <td><strong>Croissant</strong></td>
                <td>25,000</td>
                <td>19,000</td>
                <td>24%</td>
                <td>4</td>
                <td>3,000,000</td>
                <td>720,000</td>
                <td>✗ Dog</td>
              </tr>
              <tr>
                <td><strong>Total / Blended</strong></td>
                <td>—</td>
                <td>—</td>
                <td><strong>~59%</strong></td>
                <td><strong>67</strong></td>
                <td><strong>45,600,000</strong></td>
                <td><strong>28,110,000</strong></td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Monthly Cost Structure:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cost Item</th>
                <th>Monthly Amount (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ingredient COGS (all items)</td>
                <td>16,920,000</td>
                <td>Calculated from daily volumes × cost per unit × 30 days</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td>8,000,000</td>
                <td>Fixed — does not change with sales volume</td>
              </tr>
              <tr>
                <td>Staff wages (Ricky + part-time)</td>
                <td>9,000,000</td>
                <td>Fixed — Ricky's monthly salary + weekend staff</td>
              </tr>
              <tr>
                <td>Utilities (electricity, water, wifi)</td>
                <td>2,500,000</td>
                <td>Roughly fixed — electricity varies slightly with usage</td>
              </tr>
              <tr>
                <td>Packaging (cups, bags, napkins)</td>
                <td>1,500,000</td>
                <td>Variable — scales with transaction count</td>
              </tr>
              <tr>
                <td>Food waste (avocado + croissant)</td>
                <td>1,080,000</td>
                <td>Estimated from Ricky's daily waste observations</td>
              </tr>
              <tr>
                <td>Miscellaneous (equipment, cleaning)</td>
                <td>1,000,000</td>
                <td>Average monthly estimate</td>
              </tr>
              <tr>
                <td><strong>Total Monthly Costs</strong></td>
                <td><strong>40,000,000</strong></td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>Monthly Profit</strong></td>
                <td><strong>5,600,000</strong></td>
                <td>IDR 45,600,000 revenue − IDR 40,000,000 costs ≈ 12% margin</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '15px' }}>
            <strong>Data Gaps &amp; Working Assumptions:</strong> (1) Daily sales counts are manual
            and carry ±10% uncertainty — this does not change the directional conclusions since margin
            differences between items are large. (2) Waste estimates are from Ricky's memory, not
            measured weights — treated as approximate. (3) The analysis uses average monthly figures;
            weekends tend to be 30% busier than weekdays, but this does not change the item-level
            margin relationships.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            This problem is solved in four steps. Each step builds on the previous one — do not skip ahead,
            because the conclusions from Step 1 inform the decisions in Step 3.
          </p>
          <ol>
            <li>
              <strong>Step 1 — Calculate Contribution Margin per Item</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                For each menu item: Selling Price − Ingredient Cost = Gross Profit per Unit.
                Then: Gross Profit per Unit × Daily Orders × 30 Days = Monthly Gross Profit.
                This gives us the single most important number for each item — how much total monthly
                gross profit it generates. Sort the table from highest to lowest monthly gross profit
                contributor. The ranking is often different from the revenue ranking.
              </p>
            </li>
            <li>
              <strong>Step 2 — Calculate the Monthly Waste Cost</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                For each perishable item: (Daily orders prepared − Daily orders sold) × Ingredient
                cost per unit × 30 days = Monthly waste cost. This is money spent on ingredients
                that generate no revenue. Once quantified, it becomes clear whether better ordering
                discipline (ordering 5 days' worth instead of 7) could meaningfully recover profit
                without changing any prices.
              </p>
            </li>
            <li>
              <strong>Step 3 — Model Three Scenarios</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                With contribution margins and waste costs established, model three options:
                (A) <em>Do nothing</em> — what does the current trajectory look like?
                (B) <em>Reprice</em> — raise Kopi Susu and Avocado Toast prices; fix waste ordering.
                (C) <em>Remove lowest-margin items</em> — what happens to profit if Croissant is
                removed entirely? (The answer here is surprising — it requires understanding the
                difference between fixed and variable costs.)
              </p>
            </li>
            <li>
              <strong>Step 4 — Present the Recommendation in Budi's Language</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Analytics are only useful if the business owner understands and acts on them.
                Translate the findings into simple language: "If you raise Kopi Susu by IDR 3,000 per
                cup, you will earn IDR 3,150,000 more per month — that's roughly IDR 37.8 million per
                year, with no additional work." Give Budi a number, not a framework.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Contribution Margin per Item: Where Is the Profit Really Coming From?</strong></p>
          <div className="calculation">
{`Contribution Margin = Selling Price − Ingredient Cost per Unit

  Item            Price    Cost    Margin/Unit  Daily Qty  Monthly GP
  ─────────────────────────────────────────────────────────────────────
  Kopi Susu       20,000   5,000   15,000       35         15,750,000
  Americano       18,000   4,000   14,000       15          6,300,000
  Matcha Latte    30,000  16,500   13,500        8          3,240,000
  Avocado Toast   42,000  28,000   14,000        5          2,100,000
  Croissant       25,000  19,000    6,000        4            720,000
  ─────────────────────────────────────────────────────────────────────
  Total                                         67         28,110,000

Key insight: Kopi Susu generates IDR 15,750,000/month in gross profit — 56% of the
total gross profit — despite representing only 46% of revenue. It is the business.

Avocado Toast and Croissant together generate IDR 2,820,000/month in gross profit (10%)
while representing IDR 9,300,000 in revenue (20%). They are the least efficient items
in the portfolio by profit-per-IDR-of-revenue.

Efficiency ratio (Gross Profit ÷ Revenue):
  Kopi Susu:      75%   ← IDR 0.75 of profit per IDR 1.00 of revenue
  Americano:      78%   ← IDR 0.78 of profit per IDR 1.00 of revenue
  Matcha Latte:   45%   ← IDR 0.45 of profit per IDR 1.00 of revenue
  Avocado Toast:  33%   ← IDR 0.33 of profit per IDR 1.00 of revenue
  Croissant:      24%   ← IDR 0.24 of profit per IDR 1.00 of revenue`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Monthly Waste Cost: Money Going Straight to the Bin</strong></p>
          <div className="calculation">
{`Waste Cost = (Daily Qty Prepared − Daily Qty Sold) × Ingredient Cost × 30 Days

Avocado Toast:
  Daily prepared:      7 portions (Budi's current order)
  Daily sold:          5 portions (average)
  Daily wasted:        2 portions × IDR 28,000 ingredient cost = IDR 56,000
  Monthly waste:       IDR 56,000 × 30 days = IDR 1,680,000

  Wait — not all of the IDR 28,000 is wasted, only the perishable portion:
  Avocado + bread:     ~IDR 22,000 of the IDR 28,000 is perishable
  Revised daily waste: 2 × IDR 22,000 = IDR 44,000
  Monthly waste:       IDR 44,000 × 30 = IDR 1,320,000

Croissant:
  Weekly ordered:      35 units
  Weekly sold:         ~26 units (8–10 go stale, conservatively 9)
  Weekly waste:        9 × IDR 19,000 = IDR 171,000
  Monthly waste:       IDR 171,000 × 4.3 weeks = IDR 735,000

  Note: Only ~IDR 15,000 of the IDR 19,000 is truly perishable (the rest is dry goods)
  Revised monthly:     9 × IDR 15,000 × 4.3 = IDR 580,500 ≈ IDR 580,000

Total Monthly Waste:   IDR 1,320,000 + IDR 580,000 = IDR 1,900,000 (worst-case)
Conservative estimate: IDR 1,080,000 (using Ricky's lower daily waste observation)

  ⟹ Using the conservative estimate: IDR 1,080,000/month in wasted ingredients.
     That is roughly one part-time staff member's weekly wage, discarded every month.
     Simply ordering 5 days' worth instead of 7 recovers most of this.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Price Increase Scenario: What Does Repricing Actually Do?</strong></p>
          <div className="calculation">
{`Scenario B: Raise prices on two items + fix waste ordering

Option 1 — Raise Kopi Susu from IDR 20,000 → IDR 23,000 (+15%):
  Extra gross profit per cup:  IDR 3,000
  At current volume (35/day × 30):
    Monthly gain = IDR 3,000 × 35 × 30 = IDR 3,150,000

  Conservative check (assume 10% of customers stop buying at new price):
    New volume = 35 × 90% = 31.5 cups/day
    Monthly gain = IDR 3,000 × 31.5 × 30 = IDR 2,835,000
    Monthly revenue change: (IDR 23,000 × 31.5 × 30) − (IDR 20,000 × 35 × 30)
                          = IDR 21,735,000 − IDR 21,000,000 = +IDR 735,000
    Profit gain despite lower volume: IDR 2,835,000 ✓ (still strongly positive)

Option 2 — Raise Avocado Toast from IDR 42,000 → IDR 52,000 (+24%):
  Extra gross profit per plate: IDR 10,000
  At current volume (5/day × 30):
    Monthly gain = IDR 10,000 × 5 × 30 = IDR 1,500,000

  Conservative check (assume 15% volume drop — food is more price-sensitive than coffee):
    New volume = 5 × 85% = 4.25/day
    Monthly gain = IDR 10,000 × 4.25 × 30 = IDR 1,275,000 (still positive)

Option 3 — Fix waste ordering (order 5 days instead of 7):
  Waste reduction: ~IDR 810,000/month (75% of IDR 1,080,000 waste estimate)

Combined Scenario B impact:
  Kopi Susu reprice (conservative):    +IDR 2,835,000
  Avocado Toast reprice (conservative): +IDR 1,275,000
  Waste reduction:                      +IDR 810,000
  ──────────────────────────────────────────────────
  Total profit gain:                    +IDR 4,920,000

  Current profit:   IDR 5,600,000
  New profit:       IDR 5,600,000 + IDR 4,920,000 = IDR 10,520,000
  New margin:       IDR 10,520,000 ÷ IDR 45,600,000 ≈ 23%`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Scenario Comparison: The Counterintuitive Result of Removing Items</strong></p>
          <div className="calculation">
{`Why removing the Croissant alone does NOT fix the problem — fixed costs explained:

  Monthly fixed costs: IDR 22,000,000 (rent + staff + utilities + packaging + misc)
  These costs exist whether Budi sells 1 item or 500 items per day.

  If we remove Croissant entirely:
    Revenue lost:        IDR 3,000,000 (4 units/day × IDR 25,000 × 30)
    Ingredient saved:    IDR 2,280,000 (4 units/day × IDR 19,000 × 30)
    Waste saved:         IDR 580,000 (estimated)
    Fixed costs change:  IDR 0 (nothing changes — rent and staff are the same)
    Net profit change:   −IDR 3,000,000 + IDR 2,280,000 + IDR 580,000 = −IDR 140,000

  Result: Removing the Croissant makes profit slightly WORSE, not better.
  The Croissant, despite its low margin (24%), is still contributing IDR 720,000/month
  in gross profit that helps cover fixed costs. Remove it and those fixed costs get
  spread over less gross profit.

  ⟹ The lesson: "This item has a low margin, let's remove it" is often the WRONG
     conclusion. The question should be: "Can we improve this item's margin (by
     repricing or reducing cost), and if not, can we replace it with something better?"
     Removing a menu item only improves profit if you can replace the gross profit
     it was generating with something else.

Scenario Comparison Table:
  Scenario                     Revenue (IDR)   Profit (IDR)   Margin
  Do Nothing                   45,600,000       5,600,000      12%
  Fix waste only                45,600,000       6,680,000      15%
  Reprice only (Kopi Susu+AT)  46,135,000       9,725,000      21%
  Reprice + fix waste           46,135,000      10,535,000      23%  ← Recommended
  Remove Croissant only         42,600,000       5,460,000      13%  ← WORSE
  Remove all food items         36,300,000       3,980,000      11%  ← WORST
  ─────────────────────────────────────────────────────────────────────
  ⟹ The Reprice + Fix Waste scenario is the clear winner. It requires no
     structural menu changes, recovers IDR 4.9M/month in profit, and moves
     the margin from 12% to 23% — above the original 18% target.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — Kopi Susu Is the Business (Not Just the Most Popular Item)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Kopi Susu generates IDR 15,750,000 per month in gross profit — 56% of all gross profit —
              despite being 46% of revenue. At the current price of IDR 20,000, BrewMate earns IDR 15,000
              per cup. A 15% price increase to IDR 23,000 recovers nearly IDR 2.8–3.2 million per month
              in profit with minimal volume risk. If BrewMate could only do one thing, this would be it.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — The Main Problem Is Frozen Prices, Not the Menu Mix</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Ingredient costs rose 15–22% over the past year while menu prices stayed the same. This
              alone accounts for roughly half the profit erosion. Budi's instinct to blame "the market"
              is partially correct — ingredient prices did rise — but the fix is not to find cheaper
              suppliers. The fix is to adjust prices to reflect the new cost reality. The business
              absorbed the cost increase and passed none of it to customers.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Removing Low-Margin Items Makes Things Worse (The Fixed-Cost Trap)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is the finding that surprises most beginners. Removing the Croissant (24% margin)
              actually reduces profit by IDR 140,000 per month, because the fixed costs (rent, staff,
              utilities) stay the same while the gross profit contribution from that item disappears.
              The menu item is not great, but it is still covering some of the fixed costs. Removing it
              only makes sense if you can replace it with something that generates more gross profit —
              not if you simply eliminate it.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — IDR 1,080,000/Month Is Going in the Bin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Waste from over-ordering avocado and croissant ingredients is costing approximately
              IDR 1,080,000 per month in the conservative estimate — closer to IDR 1,900,000 in a
              worst-case count. This is a pure operational inefficiency. No repricing needed, no menu
              changes needed — just order 5 days' worth of perishables instead of 7. This is the
              easiest and fastest profit recovery available.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 5 — The Menu Is Actually Fine; The Pricing Is the Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              None of the five menu items are actively destroying value. Even the Croissant (24% margin)
              is still contribution-positive. The problem is not that the menu is wrong — it is that the
              prices have not been updated to reflect current costs, and one item (Avocado Toast) is
              underpriced for its ingredient cost. Scenario B (reprice + fix waste) recovers more
              profit than any menu restructuring scenario without removing a single item.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Recovery Lever</th>
                <th>Monthly Profit Gain (IDR)</th>
                <th>Revenue Impact</th>
                <th>Ease of Implementation</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Raise Kopi Susu to IDR 23,000</td>
                <td>+2,835,000</td>
                <td>+IDR 735,000</td>
                <td>High — just update the menu board</td>
                <td>Do immediately</td>
              </tr>
              <tr>
                <td>Raise Avocado Toast to IDR 52,000</td>
                <td>+1,275,000</td>
                <td>−IDR 95,000 (some vol. loss)</td>
                <td>High — same as above</td>
                <td>Do this month</td>
              </tr>
              <tr>
                <td>Fix waste ordering (5 days not 7)</td>
                <td>+810,000</td>
                <td>None</td>
                <td>Very high — operational habit change</td>
                <td>Do this week</td>
              </tr>
              <tr>
                <td>Replace Croissant with higher-margin item</td>
                <td>+500,000 (estimated)</td>
                <td>Depends on replacement</td>
                <td>Medium — needs supplier research</td>
                <td>Next quarter</td>
              </tr>
              <tr>
                <td>Remove Croissant with no replacement</td>
                <td>−140,000</td>
                <td>−IDR 3,000,000</td>
                <td>High — but makes things worse</td>
                <td>Do NOT do this</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — This Week (Zero Capital Required)</h3>
          <div className="highlight-box">
            <strong>1A. Fix Waste Ordering — Order 5 Days of Perishables, Not 7</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Starting Monday, Budi adjusts his weekly order for avocado and
              croissant ingredients to match 5 days of typical demand rather than 7. Ricky tracks
              daily waste for two weeks to establish a more accurate baseline.
              <br /><strong>Why:</strong> This is the fastest profit recovery with zero risk. No customer
              notices, no price changes required, no menu board updates. IDR 810,000–1,080,000 recovered
              per month from pure ordering discipline.
              <br /><strong>Owner:</strong> Budi (ordering) + Ricky (daily waste tracking)
              <br /><strong>Expected monthly impact:</strong> +IDR 810,000 minimum
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Raise Kopi Susu Price from IDR 20,000 to IDR 23,000</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Update the menu board and any printed materials to reflect the
              new price. No other changes needed.
              <br /><strong>Why:</strong> This single action recovers IDR 2,835,000–3,150,000 per
              month. Kopi Susu is BrewMate's most ordered item and the one customers have the
              strongest loyalty to — they come specifically for Budi's recipe. A IDR 3,000 increase
              (15%) on a product customers love is far less likely to drive them away than a 15%
              increase on a commodity product. The break-even analysis shows the café is still ahead
              even if 10% of customers stop ordering.
              <br /><strong>Owner:</strong> Budi
              <br /><strong>Expected monthly impact:</strong> +IDR 2,835,000 (conservative)
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — This Month</h3>
          <div className="highlight-box">
            <strong>2A. Raise Avocado Toast from IDR 42,000 to IDR 52,000</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Increase the price by IDR 10,000. Optionally, make a small
              upgrade to the presentation (a garnish, a better plate) to justify the higher price
              point visually.
              <br /><strong>Why:</strong> At IDR 42,000, Avocado Toast has only a 33% margin — lower
              than any drink on the menu. The ingredients cost IDR 28,000 per plate, which is only
              IDR 14,000 below the selling price. At IDR 52,000, margin rises to 46% and the monthly
              gross profit from this item nearly doubles from IDR 2,100,000 to IDR 3,375,000.
              <br /><strong>Note for Budi:</strong> He will resist this because "avocado toast is already
              expensive." The counter is simple: at IDR 52,000, BrewMate is still priced below most
              competitor cafés in the area that offer similar dishes. The price is not unreasonable —
              the current price is just too low for the cost structure.
              <br /><strong>Expected monthly impact:</strong> +IDR 1,275,000 (conservative, 15% vol. drop)
            </p>
          </div>
          <div className="highlight-box">
            <strong>2B. Set Up a Simple Weekly Profit Tracker</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Sari creates a simple spreadsheet (or even a paper table) where
              Budi records five numbers every Monday morning: total weekly revenue, total weekly
              ingredient spend, total waste estimate, and calculated gross profit. Takes 15 minutes.
              <br /><strong>Why:</strong> The margin erosion went unnoticed for nine months because
              Budi was only tracking revenue ("we're at IDR 45 million, we're fine"). Tracking profit
              margin weekly means the next problem — whatever it is — gets caught in weeks, not months.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — Next Quarter</h3>
          <div className="highlight-box">
            <strong>3A. Replace the Croissant with a Higher-Margin Baked Item</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Research whether a local bakery supplier can provide a simpler
              baked good — banana bread, financiers, or a local kue — at an ingredient cost below
              IDR 10,000 per unit, to be sold at IDR 22,000–25,000. This would give the same price
              point as the current Croissant but with a margin of 55–60% versus the current 24%.
              <br /><strong>Why:</strong> The Croissant's problem is structural — croissant dough
              is expensive, perishable, and difficult to source locally. The solution is not to
              raise its price (customers know what a croissant costs) but to replace it with
              something that looks similar on the menu but costs much less to make.
              <br /><strong>Expected monthly impact:</strong> +IDR 400,000–600,000 vs. current Croissant
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <p>
            Analytical recommendations are only useful if the business owner actually implements them.
            For a small café owner like Budi, the emotional and practical barriers to action are as
            important as the numbers.
          </p>
          <div className="highlight-box">
            <strong>What Budi Will Agree To Immediately</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Fixing waste ordering will happen immediately.</strong> Budi already knew
              ingredients were being wasted — Ricky had mentioned it. The analysis simply puts a
              number on it. When Budi sees that IDR 1,080,000 per month is being thrown away, and
              that the fix is just "order less on Mondays," he will do it that week.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Budi Will Resist: The Kopi Susu Price Increase</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Budi's fear: <em>"If I raise prices, customers will go to the place down the street."</em>
              This is a reasonable fear but it is not supported by the data. The answer to give Budi
              is not "don't worry, customers won't leave." The answer is the break-even math:
              <em> "Even if 10% of your Kopi Susu customers stop buying — which would be an unusually
              large price reaction for a 15% increase on a product people love — you still earn IDR
              2,835,000 more per month. The risk is priced in and the math still works in your
              favour."</em> Give him the number, not the reassurance.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Budi Will Resist: The Avocado Toast Price Increase</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Budi loves the Avocado Toast because it photographs well and makes the café look premium
              on Instagram. Sari should not argue against the item — she should argue for a higher price.
              The framing: <em>"A premium item deserves a premium price. Charging IDR 42,000 for
              something that costs IDR 28,000 in ingredients actually makes the café look cheap, not
              premium. IDR 52,000 is still below what competitors charge, and it positions BrewMate
              where Budi wants it to be."</em>
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics — What to Track Every Week</strong>
            <table className="data-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Target (Month 3)</th>
                  <th>Warning Sign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gross Margin %</td>
                  <td>59%</td>
                  <td>≥ 65%</td>
                  <td>Below 60% after Month 1</td>
                </tr>
                <tr>
                  <td>Monthly Profit (IDR)</td>
                  <td>5,600,000</td>
                  <td>≥ 9,000,000</td>
                  <td>Below 7,000,000 at Month 2</td>
                </tr>
                <tr>
                  <td>Monthly Waste (IDR)</td>
                  <td>~1,080,000</td>
                  <td>≤ 300,000</td>
                  <td>Still above 700,000 at Month 2</td>
                </tr>
                <tr>
                  <td>Kopi Susu Daily Orders</td>
                  <td>35</td>
                  <td>≥ 31 (allow for some vol. loss)</td>
                  <td>Below 28 at Month 2 (price too high)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>If only one action is taken:</strong> Raise the Kopi Susu price. It costs
            nothing, takes five minutes to update the menu board, and recovers IDR 2.8–3.2 million
            per month in profit with low volume risk. Every other action builds on this one.
            Start here.
          </p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pattern You Will See in Every Small Food Business</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              BrewMate's story is not unique. In almost every small café, restaurant, or food stall that
              runs into profit trouble, the root cause follows the same sequence: ingredient costs
              creep up slowly (a few percent per quarter), menu prices stay frozen (changing prices feels
              risky), and the margin quietly bleeds out over 6–12 months. By the time the owner notices,
              the gap between cost and price has grown large enough that catching up requires a significant
              price increase — which now feels riskier than the small adjustments that should have been
              made along the way. The lesson: <em>adjust prices by small amounts frequently rather than
              by large amounts rarely</em>. A 3–4% annual price increase is barely noticeable to customers.
              A 25% catch-up increase after three years of frozen prices is not.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Most Common Beginner Mistake: Watching Revenue Instead of Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Budi knew his revenue was IDR 45 million. He did not know his margin was 12% and falling.
              Revenue is a vanity metric for a small business — it tells you how busy you are, not how
              profitable you are. The number that actually determines whether a business owner can
              pay their bills is profit margin. Every small business owner should be able to answer one
              question at any point: <em>"For every IDR 100 I receive from customers, how many IDR am
              I keeping after all costs?"</em> If the answer is declining month over month, something
              is wrong regardless of what revenue is doing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Fixed-Cost Trap: Why "Remove Unprofitable Items" Is Often Wrong</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most counterintuitive finding in this case is that removing the Croissant makes
              profit worse. This happens because of fixed costs. When a small business has IDR 22 million
              in monthly fixed costs (rent, staff, utilities), those costs need to be covered by the gross
              profit from every item sold. A "low-margin" item that still generates positive gross profit
              is still contributing to fixed cost coverage. Remove it, and the same fixed costs must be
              covered by fewer gross profit dollars. The right question is not "is this item's margin low?"
              — it is "if I remove this item, can I replace its gross profit contribution with something
              better?" If the answer is yes, remove it. If the answer is no, reprice it instead.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What a Good Small Business Owner Does Differently</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              They know their contribution margin per item by heart — not because they are accountants,
              but because they check it regularly. They know that their Kopi Susu generates IDR 15,000
              per cup and their Croissant generates IDR 6,000 per unit. When ingredient prices change,
              they recalculate immediately and decide whether to adjust prices or absorb the cost.
              They treat their menu like a portfolio — regularly reviewing which items are earning their
              keep and which need to be repriced, reformulated, or retired. This is not advanced analysis.
              It is fifteen minutes with a calculator every month.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Conversation You Will Always Have to Have</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sari needs to tell Budi that his prices are too low. This is the hardest conversation in
              small business advising — not because the math is complicated, but because pricing is
              personal. Budi set those prices himself, with thought and care. Being told they are wrong
              feels like being told his judgement is wrong. The right approach is what Sari did: show
              the data first (the month-by-month margin table), let Budi ask the question himself
              ("why is this happening?"), then answer it with the numbers. People accept conclusions
              they have arrived at themselves far more readily than conclusions handed to them.
              This is not a manipulation technique — it is respect for the business owner's intelligence.
              The data leads to the answer. Your job is to make sure the data is visible.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case01;
