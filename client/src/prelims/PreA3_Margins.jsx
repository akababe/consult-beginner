const PreA3 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module A3</span>
        <h1>Gross, Contribution &amp; EBITDA Margins</h1>
        <div className="case-meta">
          Module A: The Language of Money &bull; Three margin concepts and when to use each one
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Maya</strong> runs a cloud kitchen from her apartment in South Jakarta — no dine-in,
            only GoFood and GrabFood delivery. She cooks five menu items: nasi goreng, mie goreng,
            ayam geprek, gado-gado, and es campur. Each month she takes in about <strong>IDR 18 million</strong>
            in orders.
          </p>
          <p>
            A friend asks: <em>"Which item makes you the most money?"</em> Maya answers immediately:
            "Ayam geprek — it's my most-ordered item." But she has never calculated the profit
            per order for each item. Her most-ordered item might not be her most profitable one.
          </p>
          <div className="highlight-box">
            <strong>Revenue per Item ≠ Profit per Item</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              An ayam geprek that sells for IDR 32,000 with IDR 22,000 in ingredients earns IDR 10,000.
              A gado-gado that sells for IDR 28,000 with IDR 8,000 in ingredients earns IDR 20,000.
              Gado-gado earns twice as much profit per order despite selling for less.
              <br /><br />
              This is what <strong>margin analysis</strong> reveals — not which item sells most, but
              which item earns most per IDR of revenue. There are three margin concepts that slice
              this question from different angles: Gross Margin, Contribution Margin, and EBITDA Margin.
              Understanding when to use each is essential for any business analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Gross Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Gross Profit = Revenue − Cost of Goods Sold (COGS)</strong>
              <br />
              <strong>Gross Margin % = Gross Profit ÷ Revenue × 100</strong>
              <br /><br />
              COGS is the direct cost of producing what you sold: ingredients, raw materials,
              manufacturing cost, packaging. It excludes rent, staff salaries (for overhead staff),
              and operating expenses.
              <br /><br />
              <strong>Use gross margin when:</strong> comparing how efficiently different products
              convert revenue into profit before operating costs are considered. It answers: "How
              much is left after I've paid to make this product?"
            </p>
          </div>
          <div className="highlight-box">
            <strong>Contribution Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Contribution Margin = Revenue − All Variable Costs</strong>
              <br />
              <strong>Contribution Margin % = Contribution Margin ÷ Revenue × 100</strong>
              <br /><br />
              Variable costs include COGS plus any other costs that scale directly with volume:
              delivery fees, transaction commissions, per-unit packaging beyond what's in COGS.
              <br /><br />
              <strong>Contribution margin answers:</strong> "How much does each unit contribute
              toward covering fixed costs and generating profit?" This is the most useful margin
              for pricing decisions and product mix analysis. It is used extensively in Case 01
              (BrewMate) and Case 02 (Clean & Fold).
              <br /><br />
              The name comes from the idea that each unit <em>contributes</em> something toward
              the fixed costs of the business. Only after all fixed costs are covered by the total
              contribution does the business generate net profit.
            </p>
          </div>
          <div className="highlight-box">
            <strong>EBITDA Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>EBITDA = Earnings Before Interest, Tax, Depreciation &amp; Amortisation</strong>
              <br />
              <strong>EBITDA Margin % = EBITDA ÷ Revenue × 100</strong>
              <br /><br />
              EBITDA removes financing costs (interest on loans), tax obligations, and non-cash
              accounting charges (depreciation of equipment, amortisation of intangibles). What
              remains is a proxy for the operational cash-generating ability of the business —
              how much cash does the core business produce before financial structure and tax?
              <br /><br />
              <strong>Use EBITDA when:</strong> comparing businesses across different financing
              structures or tax environments, or when evaluating a business's operational efficiency
              independent of its debt level. Common in investment analysis and company valuations.
              Less common for day-to-day small business decisions.
            </p>
          </div>

          <p><strong>Summary — Which Margin to Use When:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Margin Type</th>
                <th>What It Subtracts</th>
                <th>Best Used For</th>
                <th>Beginner Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gross Margin</strong></td>
                <td>Direct production costs (COGS)</td>
                <td>Product profitability comparison; pricing floor</td>
                <td>High — learn this first</td>
              </tr>
              <tr>
                <td><strong>Contribution Margin</strong></td>
                <td>All variable costs</td>
                <td>Break-even analysis; product mix; pricing decisions</td>
                <td>High — essential for Case 01 &amp; 02</td>
              </tr>
              <tr>
                <td><strong>EBITDA Margin</strong></td>
                <td>Operating costs except D&amp;A, interest, tax</td>
                <td>Business valuation; cross-company comparison</td>
                <td>Medium — useful context, less daily application</td>
              </tr>
              <tr>
                <td><strong>Net Margin</strong></td>
                <td>All costs including interest, tax, D&amp;A</td>
                <td>Overall business health; what the owner keeps</td>
                <td>High — the bottom line (from Module A1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. The Common Mistake</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Mistake 1 — Using Revenue as a Proxy for Profitability</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Maya said "ayam geprek is my most profitable item" because it sells the most. Volume
              ≠ profitability. An item that sells 100 units at a 10% margin earns less than an item
              that sells 50 units at a 50% margin. Always calculate margin per unit first, then
              multiply by volume to get total monthly contribution.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Confusing Gross Margin with Contribution Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In many businesses they are close to the same thing. But they diverge when there are
              significant variable costs beyond direct ingredient/material costs. GoFood commission
              (20–30% of order value) is a variable cost — it scales with every order — but it is
              not part of COGS in the traditional sense. Including it in the contribution margin
              calculation (where it belongs) gives a more accurate picture of per-unit economics
              than gross margin alone.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Using Gross Margin to Make Break-Even Decisions</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Break-even analysis requires <em>contribution margin</em>, not gross margin. Gross
              margin only subtracts COGS. Contribution margin subtracts all variable costs. Using
              gross margin overstates how much each unit contributes to fixed cost coverage —
              leading to an optimistically low (incorrect) break-even point. This is a common
              error in self-built business plans.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Maya's Cloud Kitchen</h2>
        <div className="content">
          <div className="calculation">
{`Maya's Cloud Kitchen — Per-Item Margin Analysis

Platform commission: 20% of order value (GoFood/Grab deduct this before paying Maya)
Packaging cost: IDR 2,000 per order (same for all items — included in variable cost)

Item            Price    COGS     Gross    Gross     Platform  Packaging  Contrib   Contrib
                (IDR)    (IDR)    Profit   Margin%   Comm(IDR)  (IDR)     Margin    Margin%
                                  (IDR)              (−Price×20%)
──────────────────────────────────────────────────────────────────────────────────────────
Nasi Goreng     25,000   8,000   17,000    68%       5,000      2,000     10,000     40%
Mie Goreng      22,000   7,500   14,500    66%       4,400      2,000      8,100     37%
Ayam Geprek     32,000  22,000   10,000    31%       6,400      2,000      1,600      5%
Gado-Gado       28,000   8,000   20,000    71%       5,600      2,000     12,400     44%
Es Campur       18,000   5,000   13,000    72%       3,600      2,000      7,400     41%
──────────────────────────────────────────────────────────────────────────────────────────

Contribution Margin = Price − COGS − Platform Commission − Packaging

Ranking by Contribution Margin (per order):
  1. Gado-Gado:   IDR 12,400 per order (44% margin)
  2. Nasi Goreng: IDR 10,000 per order (40% margin)
  3. Es Campur:   IDR  7,400 per order (41% margin)
  4. Mie Goreng:  IDR  8,100 per order (37% margin)
  5. Ayam Geprek: IDR  1,600 per order  (5% margin) ← Maya's "most profitable" item

The ayam geprek ranking SURPRISE:
  Ayam geprek costs IDR 22,000 in ingredients — chicken, oil, spices — for an IDR 32,000 item.
  After GoFood takes IDR 6,400 and packaging costs IDR 2,000, Maya keeps only IDR 1,600.
  She earns less per order from her most popular item than from any other item on the menu.

Monthly volume and total contribution (assumed order counts):
  Item            Daily Orders  Monthly Orders  Contrib/Order  Monthly Contrib
  ─────────────────────────────────────────────────────────────────────────────
  Nasi Goreng         12            360          IDR 10,000    IDR  3,600,000
  Mie Goreng           8            240          IDR  8,100    IDR  1,944,000
  Ayam Geprek         15            450          IDR  1,600    IDR    720,000
  Gado-Gado            6            180          IDR 12,400    IDR  2,232,000
  Es Campur           10            300          IDR  7,400    IDR  2,220,000
  ─────────────────────────────────────────────────────────────────────────────
  Total              51           1,530                        IDR 10,716,000

  ⟹ Despite being the most-ordered item, Ayam Geprek contributes only IDR 720,000
     per month — 7% of total contribution — while Nasi Goreng contributes 34%
     with fewer daily orders.

  Maya's priority should be: promote Gado-Gado and Nasi Goreng, not Ayam Geprek.
  She may want to raise Ayam Geprek's price or reduce its ingredient cost.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 01 — BrewMate Café (Contribution Margin Is the Core Tool)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The entire Case 01 analysis is built on contribution margin per menu item.
              Kopi Susu: IDR 20,000 price − IDR 5,000 ingredients = IDR 15,000 contribution margin
              (75%). Croissant: IDR 25,000 − IDR 19,000 = IDR 6,000 (24%). The classification of
              each item as a "Star," "Question Mark," or "Dog" is based entirely on gross margin %
              and monthly contribution volume. The discovery that Kopi Susu generates 56% of all
              gross profit despite being 46% of revenue only becomes visible through margin analysis.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 02 — Clean & Fold Laundry (Contribution Margin for Break-Even)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The break-even calculation in Case 02 uses contribution margin per kilogram:
              IDR 17,000 (revenue/kg) − IDR 3,350 (variable cost/kg) = IDR 13,650 contribution
              margin per kg. This is then divided into fixed costs to find the break-even volume.
              Without correctly identifying contribution margin (not gross margin), the break-even
              calculation is wrong. Specifically: if packaging and detergent were misclassified as
              fixed costs, the contribution margin would look artificially higher, understating
              how many kg are needed to break even.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Start with Contribution Margin for Any Operational Decision</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              For day-to-day small business decisions — pricing, product mix, whether to accept
              a bulk order at a discount — contribution margin is the right tool. It tells you
              exactly how much each unit contributes to covering fixed costs and generating profit.
              Gross margin is useful for comparing products, but contribution margin is what you
              use to make decisions.
            </p>
          </div>
          <div className="highlight-box">
            <strong>A "High Revenue" Item with a Low Contribution Margin Is a Hidden Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Maya's Ayam Geprek and Budi's Croissant share the same structural problem: high
              revenue contribution that masks a low margin contribution. Both items look important
              because they appear frequently in the revenue line. But per unit of revenue, they
              generate far less profit than alternatives. Without margin analysis, these items
              are invisible problems — they feel like successes because customers buy them.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Blended Margin — The Business's True Average</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When a business sells multiple products, the <em>blended margin</em> is the weighted
              average of all items' margins, weighted by their volume. If you add a low-margin item
              to a high-margin product mix, the blended margin falls — even if the low-margin item
              is profitable on its own. This is exactly what happened at BrewMate: adding Avocado
              Toast (33% margin) to a coffee-only menu (76% blended margin) dragged the blended
              margin from 76% to 59%, reducing the profit generated per IDR of revenue.
            </p>
          </div>
          <div className="highlight-box">
            <strong>EBITDA Matters More as Businesses Grow</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              For a warung or a one-person reseller, EBITDA is rarely discussed. For a business
              with significant equipment (a laundry with washing machines, a café with an espresso
              machine), the depreciation of that equipment is a real cost — but it is non-cash (no
              money leaves the account each month for depreciation). EBITDA adds depreciation back
              to show the business's cash-generating power independent of this accounting charge.
              When evaluating whether a business can service a loan or fund expansion, EBITDA is
              a more relevant measure than net profit.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreA3
