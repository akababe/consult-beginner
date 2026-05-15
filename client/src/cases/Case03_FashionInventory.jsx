const Case03 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 03</span>
        <h1>Why Do I Keep Running Out of My Best Products?</h1>
        <div className="case-meta">
          Industry: Retail / E-Commerce &bull; Level: Beginner / Small Business — Inventory Allocation
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Closetdinda</strong> is a preloved and thrift clothing reseller run by{' '}
            <strong>Dinda</strong> (22), a fresh graduate who started selling secondhand fashion on
            Tokopedia and Shopee eighteen months ago. She sources items from thrift bales, garage sales,
            and individual sellers, photographs them herself, and ships from her bedroom in Bandung.
            The business has no employees — it is entirely Dinda operating alone.
          </p>
          <p>
            At its best, Closetdinda pulls in <strong>IDR 12–15 million per month in revenue</strong>,
            which after sourcing costs, platform fees, and packaging, leaves Dinda around IDR 4–5 million
            in monthly profit. For a one-person business run from home, this is meaningful income — it
            covers her living costs and funds the next round of inventory purchases.
          </p>
          <p>
            But for the past four months, Dinda has been stuck. Revenue has not grown past IDR 14 million.
            She keeps running out of her fastest-selling items mid-month, losing sales she knows are
            there. At the same time, roughly 30 items have been listed for over 90 days without a single
            order — tying up capital she could reinvest in better-performing stock.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dinda's older cousin <strong>Ferdi</strong> (27), who works in procurement at a manufacturing
              company, was visiting and offered to look at her inventory list. After ten minutes of scrolling
              through her Tokopedia seller dashboard, he said: <em>"Dinda, you have 62 items listed. Your
              top 8 items account for almost three-quarters of your sales. But you invest in all 62 items
              equally — same budget per item, same restock frequency. You're treating your star products
              the same as products that haven't sold in three months."</em>
              <br /><br />
              That observation reframed the problem entirely. The issue was not demand — there was plenty
              of demand for her best items. The issue was that she was allocating her limited monthly
              sourcing budget across too many items, leaving her best sellers consistently understocked.
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Dinda (owner, sole operator):</strong> Creative and customer-focused. She enjoys
              the curation side — finding interesting pieces — more than the analytics side. She tracks
              revenue loosely but has never looked at per-item performance. She is receptive to data but
              will not use a complicated system. The recommendation needs to fit into her existing workflow
              with minimal additional effort.
            </li>
            <li>
              <strong>Ferdi (cousin, procurement background):</strong> Comfortable with inventory
              concepts from his day job. He is not trying to make Dinda run her business like a
              warehouse — he wants to give her one actionable insight she can use this week.
            </li>
          </ul>
          <p>
            The constraint is not effort or knowledge — it is budget. Dinda has a fixed monthly sourcing
            budget of around <strong>IDR 5–6 million</strong>. The question is not "buy more overall"
            but "buy the right things with the same money."
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Budget, Three Types of Inventory</h2>
        <div className="content">
          <p>
            Dinda's problem looks like a supply problem — she keeps running out. But it is actually
            an allocation problem. Her monthly sourcing budget is spread too thin across too many
            items, leaving her most productive inventory chronically understocked while slow-moving
            items absorb capital that could be working harder.
          </p>
          <div className="highlight-box">
            <strong>Problem 1 — Top Items Sell Out Before Month-End, Killing Potential Revenue</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dinda's 8 best-performing items — mostly Y2K blouses, vintage denim, and branded tees —
              sell out within 10–14 days of being listed. For the remaining 16–20 days of the month,
              those product pages show "sold out" or are taken down. Customers who visit her shop and
              find empty listings don't wait — they buy from a competitor. Ferdi estimates she is
              missing <strong>IDR 3–4 million per month in revenue</strong> from stockouts alone on
              her top items. She knows the customers are there because she sees the wishlist additions
              and the "is this available?" chat messages after items sell out.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 2 — Slow-Moving Items Tie Up Capital for Months</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Of Dinda's 62 listed items, approximately 28 have not received a single order in over
              90 days. These items represent roughly <strong>IDR 2.8–3.5 million in sourcing
              capital</strong> sitting idle. Every month she does not sell these items is a month that
              money cannot be reinvested in items that would sell immediately. Dinda has been reluctant
              to lower prices on these items because she feels the original sourcing cost justifies
              the current price. This is the sunk cost fallacy in action.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 3 — Equal Treatment of Unequal Items</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When Dinda goes sourcing each month, she buys a mix of items without a structured
              view of which categories perform best. She spends roughly IDR 80,000–120,000 per item
              on average, and she buys 45–55 items per sourcing trip — essentially the same budget
              and same item count regardless of what sold last month. This "refresh everything equally"
              approach made sense when she was starting out and testing which items worked. Eighteen
              months in, she has enough performance data to know which item types consistently outperform
              and which consistently disappoint — but she has not acted on that knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Which items deserve more of Dinda's monthly sourcing budget — and which items should she
              stop restocking until the existing stock is sold or discounted out?
            </p>
          </div>
          <p><strong>Three questions Dinda and Ferdi need answered:</strong></p>
          <ol>
            <li>
              <strong>Which items are the revenue drivers?</strong> — Classify all 62 items by their
              share of total revenue and their average time-to-sell. This tells us which items are
              the engine of the business.
            </li>
            <li>
              <strong>How much capital is locked in slow-moving inventory?</strong> — Calculate the
              total sourcing cost of items that have been listed for 60+ days with no sale. This is
              money that could be working as fast-moving stock.
            </li>
            <li>
              <strong>What would revenue look like if Dinda reallocated her sourcing budget</strong>
              toward her top-performing item types and away from consistently slow items?
            </li>
          </ol>
          <p>
            <strong>What success looks like:</strong> Dinda walks away with three lists — A-tier
            items (buy more), B-tier items (maintain), and C-tier items (clear out, stop restocking)
            — plus a revised sourcing rule she can apply every month in under 30 minutes.
          </p>
          <p>
            <strong>Analytical approach:</strong> ABC analysis based on revenue contribution and
            inventory turnover rate. No advanced modeling needed — just sorting and categorizing
            existing sales data by two dimensions. Ferdi can do this in a single spreadsheet session.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            Inventory management is a well-studied problem with many sophisticated tools — safety
            stock models, EOQ formulas, demand forecasting algorithms. None of these are appropriate
            here. Dinda has one person, one spreadsheet, and a sourcing budget she reassesses monthly.
            The right framework is the simplest one that correctly identifies which items deserve
            more attention and which deserve less.
          </p>
          <div className="highlight-box">
            <strong>Primary: ABC Analysis (Pareto-Based Inventory Classification)</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              ABC analysis divides inventory into three tiers based on revenue contribution:
            </p>
            <ul style={{ fontSize: '14px' }}>
              <li><strong>A-tier (top ~20% of items, ~70–80% of revenue):</strong> The vital few.
              These items drive the business. They should always be in stock, prioritised in
              sourcing, and restocked as soon as they sell out.</li>
              <li><strong>B-tier (next ~30% of items, ~15–20% of revenue):</strong> Solid performers.
              Maintain current stock levels. Review quarterly to see if any should be promoted
              to A or demoted to C.</li>
              <li><strong>C-tier (bottom ~50% of items, ~5–10% of revenue):</strong> The trivial many.
              Slow-moving, capital-intensive relative to their contribution. Clear existing stock,
              then stop sourcing unless there's a specific reason to believe a new batch will perform
              differently.</li>
            </ul>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              <strong>Why this fits:</strong> Closetdinda's data already exists on the seller dashboard
              — items ranked by units sold and revenue. ABC analysis takes that data and produces a
              concrete, actionable classification in one sitting.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Secondary: Inventory Turnover Rate</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Turnover Rate = Units Sold ÷ Average Units in Stock (per period)
            </p>
            <p style={{ fontSize: '14px' }}>
              A high turnover rate means items sell quickly relative to the stock held — good. A low
              turnover rate means items sit unsold — bad. For Dinda's business, turnover rate is
              simplified to <em>average days to sell</em>: how many days does a typical item of this
              type sit listed before it sells? Items with &lt;14 days average are fast movers. Items
              with &gt;60 days average are candidates for C-tier regardless of their revenue rank.
            </p>
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
                <td><strong>EOQ (Economic Order Quantity)</strong></td>
                <td>Not applicable here</td>
                <td>EOQ requires stable, predictable demand and a fixed reorder cost. Preloved
                fashion items are unique — you can't "reorder" the same item. Each sourcing trip
                brings different inventory. EOQ assumes fungible, repeatable stock.</td>
              </tr>
              <tr>
                <td><strong>Safety Stock Modeling</strong></td>
                <td>Too advanced for this stage</td>
                <td>Requires demand variance data over multiple periods. Useful for a business
                with consistent SKUs (e.g., a T-shirt brand). Not applicable to a reseller where
                every item is unique and non-repeatable.</td>
              </tr>
              <tr>
                <td><strong>Revenue Contribution Analysis</strong></td>
                <td>Used as part of ABC</td>
                <td>Calculating each item category's share of total revenue is the first step
                of ABC analysis. Not a standalone framework here — it feeds into the tier
                classification.</td>
              </tr>
              <tr>
                <td><strong>Demand Forecasting</strong></td>
                <td>Not applicable here</td>
                <td>Preloved items cannot be forecasted at the individual SKU level — each item
                is unique. Forecasting works at the category level (e.g., "vintage denim sells
                faster than formal wear"), which is essentially what ABC analysis captures.</td>
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
            Dinda's seller dashboard on Tokopedia provides item-level data: units sold, revenue, and
            listing date. This is sufficient for ABC analysis. The data is accurate but only covers
            the last 90 days — older items may have sold differently in earlier periods. Ferdi uses
            the last 90 days as the analysis window, which is sufficient given the business's
            18-month history and Dinda's monthly sourcing cadence.
          </p>

          <p><strong>Closetdinda — Item Category Performance (Last 90 Days, Aggregated by Type):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item Category</th>
                <th>Items Listed</th>
                <th>Items Sold</th>
                <th>Avg Sell Price (IDR)</th>
                <th>Total Revenue (IDR)</th>
                <th>Revenue Share</th>
                <th>Avg Days to Sell</th>
                <th>ABC Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Y2K / Vintage Blouses</strong></td>
                <td>8</td>
                <td>8</td>
                <td>95,000</td>
                <td>7,600,000</td>
                <td>21%</td>
                <td>7 days</td>
                <td>★ A-Tier</td>
              </tr>
              <tr>
                <td><strong>Vintage Denim (jeans + shorts)</strong></td>
                <td>9</td>
                <td>8</td>
                <td>130,000</td>
                <td>10,400,000</td>
                <td>28%</td>
                <td>9 days</td>
                <td>★ A-Tier</td>
              </tr>
              <tr>
                <td><strong>Branded Tees (Nike, Adidas, etc.)</strong></td>
                <td>7</td>
                <td>6</td>
                <td>85,000</td>
                <td>5,100,000</td>
                <td>14%</td>
                <td>11 days</td>
                <td>★ A-Tier</td>
              </tr>
              <tr>
                <td><strong>Knit &amp; Knitwear</strong></td>
                <td>8</td>
                <td>5</td>
                <td>75,000</td>
                <td>3,750,000</td>
                <td>10%</td>
                <td>24 days</td>
                <td>B-Tier</td>
              </tr>
              <tr>
                <td><strong>Casual Dress / Midi</strong></td>
                <td>7</td>
                <td>4</td>
                <td>95,000</td>
                <td>3,800,000</td>
                <td>10%</td>
                <td>28 days</td>
                <td>B-Tier</td>
              </tr>
              <tr>
                <td><strong>Jackets &amp; Outerwear</strong></td>
                <td>5</td>
                <td>3</td>
                <td>160,000</td>
                <td>4,800,000</td>
                <td>13%</td>
                <td>31 days</td>
                <td>B-Tier</td>
              </tr>
              <tr>
                <td><strong>Formal / Office Wear</strong></td>
                <td>10</td>
                <td>2</td>
                <td>80,000</td>
                <td>1,600,000</td>
                <td>4%</td>
                <td>68 days</td>
                <td>✗ C-Tier</td>
              </tr>
              <tr>
                <td><strong>Accessories (bags, belts)</strong></td>
                <td>8</td>
                <td>1</td>
                <td>55,000</td>
                <td>550,000</td>
                <td>1%</td>
                <td>78 days</td>
                <td>✗ C-Tier</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>62</strong></td>
                <td><strong>37</strong></td>
                <td>—</td>
                <td><strong>37,600,000</strong></td>
                <td><strong>100%</strong></td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Current Sourcing Budget Allocation vs. Revenue Contribution:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Item Categories</th>
                <th>% of Revenue</th>
                <th>Current Sourcing Budget %</th>
                <th>Mismatch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A-Tier</strong></td>
                <td>Y2K Blouses, Vintage Denim, Branded Tees</td>
                <td>63%</td>
                <td>~37% (24 of 62 items)</td>
                <td>Under-invested by ~26%</td>
              </tr>
              <tr>
                <td><strong>B-Tier</strong></td>
                <td>Knit, Casual Dress, Jackets</td>
                <td>33%</td>
                <td>~32% (20 of 62 items)</td>
                <td>Roughly aligned</td>
              </tr>
              <tr>
                <td><strong>C-Tier</strong></td>
                <td>Formal Wear, Accessories</td>
                <td>5%</td>
                <td>~29% (18 of 62 items)</td>
                <td>Over-invested by ~24%</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '15px' }}>
            <strong>The mismatch in plain language:</strong> Dinda is spending roughly IDR 1,600,000
            per month sourcing C-tier items (formal wear, accessories) that generate only IDR 550,000
            in monthly revenue — a negative return before sourcing costs are accounted for. That same
            IDR 1,600,000 invested in A-tier items would, based on current sell-through rates, generate
            approximately IDR 4,300,000 in revenue.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            This problem is solved in four steps. The output of Step 1 directly drives the decisions in
            Steps 3 and 4. Do not skip to the recommendation without doing the classification first.
          </p>
          <ol>
            <li>
              <strong>Step 1 — Classify All Current Inventory into A / B / C Tiers</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Pull the last 90 days of sales from Tokopedia/Shopee dashboard. For each item category:
                calculate total revenue, revenue share, and average days-to-sell. Sort by revenue share
                (descending). Mark the top items that collectively account for ~70% of revenue as A-tier.
                The next group to ~90% is B-tier. The rest is C-tier. This classification is the entire
                analysis — everything else follows from it.
              </p>
            </li>
            <li>
              <strong>Step 2 — Calculate the Capital Locked in C-Tier Items</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                For each unsold C-tier item: record the sourcing cost (what Dinda paid for it) and the
                days it has been listed. Sum the total. This is the "dead capital" number — money that
                is not working. Seeing this number as a single figure, rather than per-item, is often
                the motivation for action. IDR 3M sounds abstract per item. IDR 3 million all at once
                is a month of living expenses.
              </p>
            </li>
            <li>
              <strong>Step 3 — Model the Revenue Impact of Reallocating to A-Tier</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Using current A-tier sell-through rates (units sold ÷ units listed), estimate what
                happens to monthly revenue if Dinda shifts IDR 1,500,000 of monthly sourcing budget
                from C-tier categories to A-tier categories. The calculation is straightforward:
                how many additional A-tier units can she source, and at the historical average sell
                price, what is the expected revenue?
              </p>
            </li>
            <li>
              <strong>Step 4 — Define a Simple Monthly Sourcing Rule</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Translate the classification into a decision rule Dinda can apply without a spreadsheet
                each month: e.g., "60% of sourcing budget goes to A-tier categories, 30% to B-tier,
                10% to experimental new categories — and zero to known C-tier categories until existing
                stock is cleared." This rule should be simple enough to remember and apply at a thrift
                market without pulling out a laptop.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Pareto Check: Do 20% of Items Generate 80% of Revenue?</strong></p>
          <div className="calculation">
{`Revenue concentration check across item categories:

  Category               Items   Revenue (IDR)   Cumulative %
  ──────────────────────────────────────────────────────────────
  Vintage Denim           9       10,400,000       28%
  Y2K Blouses             8        7,600,000       48%
  Branded Tees            7        5,100,000       62%   ← A-tier cutoff (63%)
  Jackets                 5        4,800,000       75%
  Casual Dress            7        3,800,000       85%
  Knit                    8        3,750,000       95%   ← B-tier cutoff
  Formal Wear            10        1,600,000       99%
  Accessories             8          550,000      100%   ← C-tier
  ──────────────────────────────────────────────────────────────
  Total                  62       37,600,000

Pareto verification:
  A-tier items (top 3 categories):   24 items = 39% of portfolio
  A-tier revenue:                     23,100,000 = 61% of total revenue

  Not quite 80/20 — but 39% of items generate 61% of revenue.
  The principle holds: a minority of items drives the majority of revenue.
  The skew would be stronger if measured at individual item level rather than category.

Key insight: Formal Wear represents 16% of all listed items (10 of 62) but only
4% of revenue. Accessories represent 13% of listed items but only 1% of revenue.
Together, 29% of listed items generate 5% of revenue.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Dead Capital: What Is the C-Tier Costing?</strong></p>
          <div className="calculation">
{`C-Tier Dead Capital Estimate:

  Formal Wear (10 items unsold, avg sourcing cost IDR 50,000/item):
    Capital locked:   10 × IDR 50,000 = IDR 500,000
    Listed for:       avg 68 days (8 items > 60 days with zero orders)
    Monthly opportunity cost: if this IDR 500,000 were in A-tier items with
    7-day turnover, it would turn over ~4x/month → IDR 500,000 × 4 × markup = ~IDR 480,000 GP/month

  Accessories (8 items unsold, avg sourcing cost IDR 40,000/item):
    Capital locked:   8 × IDR 40,000 = IDR 320,000
    Listed for:       avg 78 days (7 items > 60 days with zero orders)

  Total dead capital in C-tier unsold items:   IDR 820,000

  Plus: monthly C-tier sourcing spend (Dinda continues buying new formal/accessories):
    ~IDR 1,600,000/month allocated to C-tier categories in the current pattern

  Total monthly C-tier drag:
    New sourcing:     IDR 1,600,000 (money going into categories with ~5% revenue share)
    Existing dead:    IDR 820,000 (capital already locked)
    ─────────────────────────────────────────────────────
    Total:            IDR 2,420,000 tied up in low-performing inventory

  Note: the IDR 820,000 in dead stock is not lost yet — it can be recovered through
  discounting. A 30–40% discount on C-tier items converts dead stock into cash that
  can be reinvested immediately, even if Dinda recovers less than she paid.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Revenue Impact of Reallocating to A-Tier</strong></p>
          <div className="calculation">
{`Current A-tier performance metrics:
  A-tier avg sell price:      IDR 103,000 (blended across Denim, Blouses, Tees)
  A-tier avg sourcing cost:   IDR 55,000 per item (estimated)
  A-tier sell-through rate:   22 of 24 items sold = 92% (items sell, not sit)
  A-tier gross margin/item:   IDR 103,000 − IDR 55,000 = IDR 48,000 per item

Monthly sourcing budget: IDR 5,500,000

Current allocation (approximate):
  A-tier: IDR 1,320,000 (24 items × IDR 55,000)
  B-tier: IDR 1,760,000 (32 items, lower avg cost)
  C-tier: IDR 1,600,000 (18 items)
  Other:    IDR 820,000

Proposed allocation (shift IDR 1,500,000 from C-tier to A-tier):
  A-tier: IDR 2,820,000 → buys ~51 A-tier items (vs. 24 today)
  B-tier: IDR 1,760,000 → unchanged
  C-tier: IDR 100,000  → only restock if specific item with proven history
  Other:    IDR 820,000

Revenue impact of A-tier shift:
  Additional A-tier items sourced:   51 − 24 = 27 extra items/month
  Expected sell-through:             27 × 92% = ~25 items sold
  Revenue from extra items:          25 × IDR 103,000 = IDR 2,575,000 additional revenue
  Gross profit from extra items:     25 × IDR 48,000  = IDR 1,200,000 additional gross profit

Scenario comparison:
  Current:   Revenue IDR 12,533,000/month (90-day avg ÷ 3), GP ~IDR 5,280,000
  Proposed:  Revenue IDR 15,108,000/month, GP ~IDR 6,480,000
  Gain:      +IDR 2,575,000 revenue / +IDR 1,200,000 gross profit — same total budget

  ⟹ With zero increase in total sourcing budget, reallocating toward A-tier
     adds IDR 2.6M in monthly revenue and IDR 1.2M in monthly gross profit.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — How Quickly Should C-Tier Items Be Cleared?</strong></p>
          <div className="calculation">
{`C-tier items have been listed for 60–90+ days with few or no orders.
Option A: Keep at current price and wait.
Option B: Discount 30–40% and reinvest the proceeds immediately.

Dead capital reinvestment comparison:
  C-tier dead stock at cost: IDR 820,000
  Option A — sell at original price eventually:
    Expected revenue if sold: ~IDR 1,400,000 (IDR 80,000 avg × ~17 items)
    Timeline: unknown — could be months. Opportunity cost mounts each month.

  Option B — discount 35% and sell within 2 weeks:
    Discounted sell price: IDR 80,000 × 65% = IDR 52,000
    Total recovery: ~IDR 52,000 × 17 items = IDR 884,000
    Loss vs. original price: IDR 1,400,000 − IDR 884,000 = IDR 516,000 in "lost margin"

  BUT: if the IDR 884,000 is reinvested immediately into A-tier items:
    IDR 884,000 ÷ IDR 55,000 (A-tier sourcing cost) = ~16 additional A-tier items
    Expected revenue: 16 × 92% × IDR 103,000 = IDR 1,516,000 in new revenue within 14 days

  Net outcome of discounting and reinvesting vs. waiting:
    Option B generates IDR 1,516,000 in new revenue within 2 weeks.
    Option A generates IDR 1,400,000 at some unknown future date.
    Option B wins — faster, and it unclogs the listing page from dead inventory
    that makes the shop look less active to the Tokopedia algorithm.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — 39% of Items Drive 61% of Revenue (and That 39% Is Always Understocked)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dinda's A-tier categories — Vintage Denim, Y2K Blouses, Branded Tees — generate 61% of
              all revenue with only 24 of her 62 listed items. These items sell in under 12 days on
              average. Yet they receive only 37% of her sourcing budget. The business's best products
              are its most neglected from an inventory perspective. Correcting this single allocation
              imbalance, without changing the total budget, adds an estimated IDR 2.6M per month in
              revenue.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — C-Tier Items Are a Negative Return on Sourcing Capital</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Formal Wear and Accessories together represent 29% of listed items and receive roughly
              IDR 1.6M/month in sourcing spend. They generate IDR 550,000–1,600,000 in revenue, which
              — after sourcing costs and platform fees — likely produces near-zero or negative gross
              profit. These categories are not just low-margin — they may be actively loss-making on
              a fully-loaded basis. Every month Dinda sources new formal wear or accessories is a month
              she is funding an unprofitable category with money that could triple its output in A-tier.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Discounting Dead Stock Beats Waiting (Even If It Feels Like a Loss)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Selling a C-tier item at 35% discount and reinvesting immediately generates more total
              revenue within two weeks than waiting to sell at full price at an unknown future date.
              This feels counterintuitive because the discount registers as a loss in Dinda's mind —
              "I paid IDR 50,000 for it, I should at least get IDR 80,000." But the IDR 30,000 per
              item she is "protecting" by waiting is being offset by the IDR 48,000 per item she
              could be earning from A-tier items she can't source because her budget is tied up.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — The Stockout Problem Is Not a Demand Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dinda believed her revenue plateau was because demand for her products had peaked. The
              data shows the opposite: her top items sell in under 12 days and she receives messages
              asking for more after they sell out. The ceiling is not demand — it is supply. She is
              artificially capping her own revenue by not having enough A-tier inventory available
              mid-month. This is an allocation problem with a straightforward solution that does not
              require finding new customers, improving photography, or running promotions.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Estimated Monthly Revenue Impact</th>
                <th>Effort Required</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reallocate sourcing budget: A-tier ↑, C-tier ↓</td>
                <td>+IDR 2,575,000</td>
                <td>Low — change sourcing habit at next market trip</td>
                <td>Do immediately</td>
              </tr>
              <tr>
                <td>Discount C-tier dead stock 35% and reinvest</td>
                <td>+IDR 1,516,000 (within 2 weeks)</td>
                <td>Low — update prices on dashboard in 30 mins</td>
                <td>Do this week</td>
              </tr>
              <tr>
                <td>Stop sourcing Formal Wear and Accessories</td>
                <td>Frees IDR 1,600,000/month for reallocation</td>
                <td>Zero — just stop buying them</td>
                <td>Do immediately</td>
              </tr>
              <tr>
                <td>Review B-tier quarterly; promote or demote items</td>
                <td>+IDR 300,000–700,000 (estimated)</td>
                <td>Low — 30-minute dashboard review</td>
                <td>Next quarter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — This Week (No Extra Budget Needed)</h3>
          <div className="highlight-box">
            <strong>1A. Discount All C-Tier Items 30–40% and Clear Them Out</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Go into the Tokopedia and Shopee dashboard today. Find all items
              listed for 60+ days with zero orders. Drop the price by 35%. Add the tag "Flash Sale"
              or "Cuci Gudang" to the listing title to signal the discount actively.
              <br /><strong>Why:</strong> These items are not going to sell at the current price —
              60+ days of zero orders is clear evidence. The goal is to convert dead stock into cash
              that can be reinvested in items that will sell in 10 days. Speed matters more than margin.
              <br /><strong>Expected result:</strong> IDR 700,000–900,000 recovered within 2 weeks,
              which goes directly into the next A-tier sourcing trip.
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Adopt the 60/30/10 Sourcing Rule Starting Next Trip</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> At the next sourcing trip, allocate the budget as follows:
              60% to A-tier categories (Vintage Denim, Y2K Blouses, Branded Tees), 30% to B-tier
              (Knit, Casual Dress, Jackets), 10% to experimental or new category testing. Zero to
              Formal Wear or Accessories until current stock is cleared.
              <br /><strong>Why:</strong> This rule requires no spreadsheet at the market. Dinda
              just needs to know her three category buckets and their budget limits. The rule is
              memorable, applies immediately, and directly addresses the allocation mismatch.
              <br /><strong>Expected monthly impact:</strong> +IDR 2,575,000 in revenue, +IDR 1,200,000
              in gross profit — no additional total spend.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — This Month</h3>
          <div className="highlight-box">
            <strong>2A. Track Per-Category Performance Monthly (30 Minutes on the First of Each Month)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> On the first of each month, Dinda opens a simple spreadsheet
              and records four numbers for each category: items listed, items sold, total revenue,
              average days to sell. This takes 30 minutes using the Tokopedia dashboard export.
              <br /><strong>Why:</strong> Fashion trends shift. What sells in January may stall
              in June. The ABC classification should be reviewed quarterly, not set once and
              forgotten. Monthly tracking creates the data needed for the quarterly review without
              requiring ongoing analytical work.
            </p>
          </div>
          <div className="highlight-box">
            <strong>2B. Restock A-Tier Items Before They Hit Zero — Not After</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> When any A-tier category drops to 3 or fewer listed items,
              trigger a targeted mini-sourcing trip for just that category. Dinda should not wait
              for the monthly sourcing trip if a key category sells out mid-month.
              <br /><strong>Why:</strong> The revenue loss from running out of a 7-day-turnover item
              for 15 days (the second half of the month) is larger than the cost of a one-hour trip
              to a thrift market. Stockout prevention is worth more per hour of effort than almost
              any other business activity for a reseller at this scale.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — Next Quarter</h3>
          <div className="highlight-box">
            <strong>3A. Test One New Category Each Quarter With the 10% Experimental Budget</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Use 10% of the sourcing budget each month to test a new category —
              e.g., vintage bags (not accessories/belts), printed batik, or oversized flannels. If a
              new category sells through at 80%+ within 30 days for two consecutive months, promote it
              to B-tier. If it stalls, mark it C-tier and stop sourcing it.
              <br /><strong>Why:</strong> A-tier items can change over time as trends shift. The
              experimental budget ensures Dinda is always testing the next potential A-tier category
              without risking her core budget. This is how the business evolves without gambling
              the whole inventory budget on an untested category.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <p>
            Dinda's business is intuition-driven and visually oriented — she curates based on what
            she finds beautiful or interesting, not what a spreadsheet tells her to buy. Any
            recommendation that asks her to fundamentally change how she sources will face resistance.
            The good news: the recommendation does not require her to change <em>how</em> she sources,
            only <em>how much</em> she allocates to each category.
          </p>
          <div className="highlight-box">
            <strong>What Dinda Will Do Immediately</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Discounting the dead stock will happen quickly. Dinda already knows those items are
              stuck — she has been quietly hoping they would eventually sell. Seeing the dead capital
              number written down (IDR 820,000 in 17 unsold items that have been listed for 70+ days)
              will motivate action. The framing that works: <em>"This isn't a loss. This is converting
              stuck money back into fast money."</em>
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Dinda Will Resist: Stopping Formal Wear and Accessories</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dinda may feel that a diverse shop looks more professional, or that she personally likes
              styling formal wear and accessories. The counter is not analytical — it is practical:
              <em>"You can keep stocking formal wear. But let's agree to only do it when you find
              a specific piece that you personally think will sell in under 30 days. No category
              budget — only buy on conviction. That way the pieces you're excited about still get
              in the shop, but the default is to skip formal wear unless something is exceptional."</em>
              This preserves Dinda's creative autonomy while changing the default behaviour.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Will Actually Determine Success</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The 60/30/10 rule is simple enough to remember and apply. The real test is whether
              Dinda applies it at the thrift market in the moment — when she finds a beautiful formal
              blazer for IDR 60,000 and it's tempting to buy it. The rule gives her a decision frame:
              <em>"Is my A-tier budget spent? If yes, I pass on this — no matter how nice it is."</em>
              The discipline is not analytical. It is habitual.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics — What to Track Each Month</strong>
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
                  <td>Monthly Revenue (IDR)</td>
                  <td>~12,500,000</td>
                  <td>≥ 15,000,000</td>
                  <td>Below 13,000,000 after Month 2</td>
                </tr>
                <tr>
                  <td>A-tier sell-through rate</td>
                  <td>92%</td>
                  <td>≥ 90%</td>
                  <td>Below 80% — check if category is cooling</td>
                </tr>
                <tr>
                  <td>Items listed 60+ days with 0 orders</td>
                  <td>~17 items</td>
                  <td>≤ 5 items</td>
                  <td>Above 10 items — something C-tier crept back in</td>
                </tr>
                <tr>
                  <td>A-tier budget share</td>
                  <td>~37%</td>
                  <td>≥ 55%</td>
                  <td>Below 50% — rebalancing has not stuck</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pareto Principle Is Real in Almost Every Inventory Situation</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Closetdinda is not unusual. In nearly every retail or resale business — small or large —
              a minority of SKUs generates the majority of revenue. The specific ratio varies (60/40,
              70/30, 80/20), but the pattern is consistent enough that it should be your first check
              when analysing any inventory problem. Before building a complex model, ask: <em>"Which
              20% of my products generate 80% of my revenue?"</em> The answer will almost always
              point directly to the allocation problem.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Equal Treatment of Unequal Items Is the Default Mistake</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dinda's mistake — spending the same sourcing budget per item regardless of performance —
              is the natural default for a business owner without a structured inventory view. It feels
              fair ("I'm not playing favourites") and it feels safe ("I'm diversifying"). In practice,
              it means the business's best products are perpetually underfunded and its worst products
              perpetually overfunded. ABC analysis exists specifically to break this default — to make
              the investment case for giving more resources to what already works.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Sunk Cost Thinking Keeps Dead Inventory Alive</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>"I paid IDR 50,000 for it, so I won't sell it for less than IDR 80,000"</em> is
              the sunk cost fallacy. The IDR 50,000 is gone regardless of what Dinda does next. The
              only question is: what is the best use of the item's current value right now? A 35%
              discount that converts dead stock into capital today beats waiting indefinitely for a
              full-price sale. The opportunity cost of waiting — missing A-tier sales the capital
              could fund — accumulates every day the item sits unsold. Acknowledge the loss, clear
              the stock, and move on.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Inventory Turnover Rate Is a More Honest Metric Than Revenue per Item</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A jacket that sells for IDR 160,000 once a month looks like a high-revenue item. But
              if it takes 31 days to sell and ties up IDR 90,000 in sourcing capital the whole time,
              its return on capital is lower than a blouse that sells for IDR 95,000 in 7 days and
              costs IDR 50,000 to source. Always look at both the revenue per item and how quickly
              the item sells. High price, slow turn is often worse than lower price, fast turn for
              a cash-constrained small business.
            </p>
          </div>
          <div className="highlight-box">
            <strong>A Simple Rule Beats a Complex Model for a One-Person Business</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Ferdi could have built Dinda a sophisticated Excel model with dynamic reorder points,
              safety stock buffers, and demand forecasts. She would have used it once. The 60/30/10
              rule takes 10 seconds to apply at a thrift market and requires zero tools. For a
              one-person business where the owner is also the buyer, the analyst, the photographer,
              and the shipper — simplicity is a feature, not a limitation. The best framework for
              a small business is the one the owner will actually use. Match the analytical complexity
              to the operational capacity of the person implementing it.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case03;
