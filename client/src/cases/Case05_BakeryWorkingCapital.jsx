const Case05 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 05</span>
        <h1>My Biggest Order Almost Killed My Business</h1>
        <div className="case-meta">
          Industry: Home-Based Food Production (UMKM) &bull; Level: Beginner / Small Business — Working Capital &amp; Cash Flow
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Ibu Susi</strong> (38) runs a home-based kue kering and hamper business from her
            house in Surabaya. She started during the 2020 pandemic, selling through WhatsApp and Instagram,
            and has grown steadily to a point where she employs two part-time helpers and earns around
            <strong> IDR 18–22 million per month</strong> in a normal month — rising sharply in the months
            before Lebaran and Natal. Her products: premium kue kering (nastar, kastengel, putri salju),
            packaged in decorative tins and assembled into gift hampers.
          </p>
          <p>
            Susi's business has always been cash-friendly. Retail customers pay upfront via transfer
            before she ships. Her ingredients are purchased weekly from a trusted supplier who gives
            her 7-day payment terms. The cash cycle is tight and comfortable: money comes in before
            it goes out.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Three months before Lebaran, a procurement officer from a logistics company contacted
              Susi. They wanted <strong>500 premium hamper boxes</strong> for employee gifts — total
              order value IDR 37,500,000. The biggest order Susi had ever received. She accepted
              immediately, thrilled. She did not ask about payment terms.
              <br /><br />
              The answer, when she followed up: <em>net-45 days after delivery.</em> The delivery
              date was 6 weeks away. That meant cash would arrive 11 weeks from today.
              <br /><br />
              Susi needed IDR 22 million in ingredients and packaging to fulfil the order. She had
              IDR 14 million in the business account. She used all of it, plus borrowed IDR 8 million
              from her husband, to begin production. By Day 20, she had depleted all working capital.
              Her regular retail customers — who paid immediately — were sending orders she could not
              fulfil because she had no money to buy ingredients. She was profitable on paper and
              operationally paralysed in practice.
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Ibu Susi (owner):</strong> Skilled producer, strong customer relationships, and
              excellent product quality. Not financially trained. She had never encountered a working
              capital problem before because her previous business model — retail, paid upfront — had
              a naturally positive cash cycle. This order broke that model for the first time.
            </li>
            <li>
              <strong>Pak Arif (husband):</strong> Works as a civil servant. He provided the emergency
              IDR 8M loan but is worried that this situation could repeat. He pushed Susi to understand
              what went wrong so they do not use household savings as a business backstop again.
            </li>
            <li>
              <strong>Dewi (Susi's older sister, works in corporate finance):</strong> Flew in for the
              Lebaran holiday and spent an evening reviewing Susi's cashflow with her. She introduced
              the concept of the cash conversion cycle — and the lesson that a profitable order can
              still break a business if the cash timing is wrong.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: Profitable Order, Cash Crisis</h2>
        <div className="content">
          <p>
            The corporate hamper order is genuinely profitable. That is not in question. The problem
            is that profit and cash are two different things — and for a small business with limited
            reserves, the gap between when money goes out and when it comes back can be fatal to
            operations, even when the final transaction is positive.
          </p>
          <div className="highlight-box">
            <strong>Problem 1 — The Cash Gap: IDR 22M Out, IDR 37.5M In 11 Weeks Later</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Susi's cost to produce the 500 hampers: IDR 22 million (ingredients, packaging, labels,
              boxes, ribbons). This cash left her account immediately — ingredients must be purchased
              and paid before baking begins. The IDR 37.5 million from the client arrives 45 days
              after delivery, which is roughly 11 weeks after the cash went out. The business must
              survive those 11 weeks with essentially zero working capital. This gap — between
              cash outflow and cash inflow — is the working capital problem.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 2 — The Opportunity Cost: Regular Customers Lost During the Gap</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              During the 11-week cash drought, Susi turned away approximately IDR 12 million in
              regular retail orders — customers she had to tell "sorry, stok habis" when in fact
              she simply had no cash to buy ingredients. Some of those customers bought from a
              competitor and did not return. The corporate order was profitable. But the revenue
              it displaced — retail orders at higher margins — partially offset those profits.
              The true cost of the order was larger than the production cost alone.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 3 — No Financial Buffer for Next Time</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This situation will happen again. Corporate orders with net-30 or net-45 payment terms
              are standard business practice. If Susi continues to grow, she will receive more of them.
              Without understanding working capital requirements and building a reserve, every large
              order is a potential crisis. The question is not how to avoid large orders — it is how
              to be financially prepared to take them without disrupting the rest of the business.
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
              How much working capital does Susi need to safely accept a corporate order — and what
              changes to payment terms or cash reserves would prevent this situation from recurring?
            </p>
          </div>
          <ol>
            <li>
              <strong>What is the cash conversion cycle</strong> for Susi's regular retail business
              vs. the corporate order — and why did the corporate order break the cycle?
            </li>
            <li>
              <strong>How much working capital reserve</strong> does Susi need to accept a corporate
              order of IDR X without disrupting her retail operations?
            </li>
            <li>
              <strong>What payment term negotiation or financing option</strong> would have prevented
              the crisis — and which is most accessible for a small UMKM?
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Primary: Working Capital Analysis &amp; Cash Conversion Cycle</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              <strong>Working Capital = Current Assets − Current Liabilities</strong>
              <br />
              In simple terms: cash + receivables − what you owe in the short term.
              <br /><br />
              The <strong>Cash Conversion Cycle (CCC)</strong> measures how long cash is tied up
              in the business: CCC = Days Inventory Outstanding + Days Sales Outstanding − Days
              Payables Outstanding. A shorter CCC means cash cycles faster. A longer CCC means
              more cash is tied up at any moment.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Secondary: Scenario Analysis — With vs. Without Financing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Three scenarios: (A) Susi accepts the order as-is with no change, (B) Susi negotiates
              a 50% upfront deposit, (C) Susi uses invoice financing (pembiayaan piutang) to bridge
              the gap. Each scenario shows the cash position day by day across the 11-week window.
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
                <td><strong>Break-Even Analysis</strong></td>
                <td>Not applicable here</td>
                <td>The order is clearly profitable. The problem is not whether to take it —
                it is how to finance it. Break-even answers "will this make money?" which
                is already known.</td>
              </tr>
              <tr>
                <td><strong>Full P&amp;L Modeling</strong></td>
                <td>Used for profit confirmation</td>
                <td>Confirms the order is profitable (IDR 15.5M gross profit). But P&amp;L
                does not show cash timing — which is the actual problem.</td>
              </tr>
              <tr>
                <td><strong>DCF / NPV</strong></td>
                <td>Not applicable here</td>
                <td>Overkill for a 11-week cash timing problem at UMKM scale. The issue is
                operational cash management, not investment valuation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p><strong>Susi's Regular Retail Business (Monthly Baseline):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Amount (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Revenue</td>
                <td>20,000,000</td>
                <td>Pre-Lebaran month baseline</td>
              </tr>
              <tr>
                <td>Ingredient &amp; packaging COGS (55%)</td>
                <td>11,000,000</td>
                <td>Paid within 7 days of purchase</td>
              </tr>
              <tr>
                <td>Helper wages (2 part-time)</td>
                <td>3,200,000</td>
                <td>Paid weekly</td>
              </tr>
              <tr>
                <td>Packaging materials, shipping</td>
                <td>1,500,000</td>
                <td>Variable, per order</td>
              </tr>
              <tr>
                <td>Overhead (gas, equipment, misc)</td>
                <td>800,000</td>
                <td>Fixed</td>
              </tr>
              <tr>
                <td><strong>Monthly Profit</strong></td>
                <td><strong>3,500,000</strong></td>
                <td>17.5% net margin</td>
              </tr>
              <tr>
                <td>Payment terms from retail customers</td>
                <td>—</td>
                <td><strong>Upfront transfer before shipping (Day 0)</strong></td>
              </tr>
              <tr>
                <td>Payment terms to ingredient supplier</td>
                <td>—</td>
                <td>Net-7 (pay within 7 days of delivery)</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>The Corporate Hamper Order (One-Time):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Amount (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order value (500 boxes × IDR 75,000)</td>
                <td>37,500,000</td>
                <td>Receivable: net-45 after delivery</td>
              </tr>
              <tr>
                <td>Ingredients (per box: IDR 32,000)</td>
                <td>16,000,000</td>
                <td>Must pay within 7 days of purchase</td>
              </tr>
              <tr>
                <td>Packaging (boxes, tins, ribbons)</td>
                <td>4,500,000</td>
                <td>Must pay upfront</td>
              </tr>
              <tr>
                <td>Extra helper wages (3 weeks production)</td>
                <td>1,500,000</td>
                <td>Weekly cash</td>
              </tr>
              <tr>
                <td>Delivery to client</td>
                <td>500,000</td>
                <td>Paid at delivery</td>
              </tr>
              <tr>
                <td><strong>Total Production Cost</strong></td>
                <td><strong>22,500,000</strong></td>
                <td>All paid in Weeks 1–6</td>
              </tr>
              <tr>
                <td><strong>Gross Profit</strong></td>
                <td><strong>15,000,000</strong></td>
                <td>40% gross margin — highly profitable</td>
              </tr>
              <tr>
                <td><strong>Cash received</strong></td>
                <td><strong>Week 11</strong></td>
                <td>Delivery Week 6 + 45 days = Week 11</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--ink-3)' }}>
            Susi's business account before the order: IDR 14,000,000. Cash needed for order: IDR 22,500,000.
            Gap: IDR 8,500,000 (borrowed from husband). After borrowing: IDR 0 working capital for regular operations.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <ol>
            <li>
              <strong>Step 1 — Map the Cash Conversion Cycle for Both Business Models</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Calculate CCC for retail (Days inventory + Days receivable − Days payable) and for
                the corporate order. The difference in CCC explains why retail is cash-friendly and
                the corporate order is cash-destructive.
              </p>
            </li>
            <li>
              <strong>Step 2 — Build the Week-by-Week Cash Position</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Map cash in and out across all 11 weeks for Susi's combined business (retail +
                corporate order). Identify the weeks where cash drops to zero or below. Quantify
                the minimum working capital needed to keep both streams running simultaneously.
              </p>
            </li>
            <li>
              <strong>Step 3 — Model Three Scenarios</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                (A) No change — what actually happened. (B) 50% deposit negotiated upfront.
                (C) Invoice financing (bank or fintech advances 80% of receivable immediately).
                For each scenario, show the minimum cash position and the cost (if any) of the financing.
              </p>
            </li>
            <li>
              <strong>Step 4 — Calculate the Working Capital Reserve Susi Should Maintain</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Based on the analysis, define a standing rule: "Before accepting any corporate order,
                my cash reserve must be at least X." This gives Susi a pre-committed decision rule
                for future orders.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Cash Conversion Cycle: Retail vs. Corporate Order</strong></p>
          <div className="calculation">
{`Cash Conversion Cycle (CCC) = Days Inventory Outstanding (DIO)
                              + Days Sales Outstanding (DSO)
                              - Days Payables Outstanding (DPO)

A shorter CCC = cash cycles faster. A positive CCC = cash is tied up. A negative CCC = cash
arrives before it is spent (ideal for small businesses).

Retail business CCC:
  DIO (days ingredients sit before becoming sold product): ~5 days (bake-to-order)
  DSO (days between delivery and receiving payment):        0 days (upfront transfer)
  DPO (days before paying supplier):                        7 days

  CCC = 5 + 0 − 7 = −2 days
  ⟹ Susi receives money BEFORE she pays her supplier. The retail business is naturally
     cash-positive. Every sale generates working capital before it consumes it.

Corporate order CCC:
  DIO: 42 days (6 weeks of production, ingredients bought Week 1)
  DSO: 45 days (client pays net-45 after delivery in Week 6 → Week 11 = 77 days from order)
  DPO: 7 days (supplier still paid net-7)

  CCC = 42 + 45 − 7 = 80 days
  ⟹ Cash is tied up for 80 days. Every IDR spent on this order will not be recovered
     for nearly 3 months. This is why a profitable order creates a cash crisis.

The shift: from CCC of −2 days to CCC of +80 days. The business went from "cash before costs"
to "costs 80 days before cash." Without adequate working capital, this is impossible to sustain
alongside regular operations.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Week-by-Week Cash Position (What Actually Happened)</strong></p>
          <div className="calculation">
{`Starting cash: IDR 14,000,000 (business) + IDR 8,000,000 (husband loan) = IDR 22,000,000

Week  Event                                  Cash In     Cash Out    Balance
────────────────────────────────────────────────────────────────────────────────
W1    Buy ingredients (hamper order)                     16,000,000   6,000,000
W2    Buy packaging for hamper                            4,500,000   1,500,000
W3    Retail sales (partial — capacity constrained)  4,000,000         5,500,000
      Pay helper wages (hamper production)                  750,000   4,750,000
W4    Retail sales                               3,500,000             8,250,000
      Pay ingredient supplier (W1 bill due)               2,500,000   5,750,000
W5    Retail sales                               2,000,000             7,750,000
      Pay helper wages                                      750,000   7,000,000
W6    Deliver hampers                                                  7,000,000
      Pay delivery cost                                     500,000   6,500,000
W7    Retail sales                               3,000,000             9,500,000
W8    Retail sales                               3,000,000            12,500,000
W9    Retail sales                               3,000,000            15,500,000
W10   Retail sales                               3,000,000            18,500,000
W11   Receive payment from corporate client     37,500,000            56,000,000 ✓

Notes:
- Retail sales W3–W5 are 40–65% below normal (IDR 3,500–4,000K vs. normal IDR 5,000K/week)
  because Susi had no cash to buy ingredients for retail orders in those weeks.
- Lost retail revenue: approximately IDR 12,000,000 across W3–W6
- Husband's IDR 8M loan was essential to avoid Week 1 shortfall

Profitability of corporate order: IDR 37,500,000 − IDR 22,500,000 = IDR 15,000,000 gross profit
But true economic cost includes IDR 12,000,000 in displaced retail revenue.
Net benefit of the order: IDR 15,000,000 − IDR 12,000,000 = IDR 3,000,000 above baseline.
(Still positive — but far less than the IDR 15M headline profit suggests.)`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Scenario Comparison: Three Ways to Fund the Order</strong></p>
          <div className="calculation">
{`Scenario A (What Happened): Accept order with no financing change
  Starting cash: IDR 22M (incl. IDR 8M borrowed)
  Minimum cash balance: IDR 1,500,000 (Week 2)
  Retail revenue displaced: IDR 12,000,000
  Net order benefit: IDR 3,000,000
  Risk: Almost ran out of cash. Had to borrow from family.

Scenario B: Negotiate 50% Upfront Deposit
  Susi asks for 50% deposit (IDR 18,750,000) before production begins.
  Starting cash for order: IDR 14,000,000 + IDR 18,750,000 = IDR 32,750,000
  Production costs: IDR 22,500,000
  Cash remaining after production costs: IDR 10,250,000
  Retail operations: Fully funded throughout. No displaced revenue.
  Net order benefit: IDR 15,000,000 (full gross profit — no displacement)
  Risk: None. This is the best outcome.
  Barrier: Susi must ask for this. Many UMKM owners feel uncomfortable asking
  for deposits from corporate clients — but this is standard for custom/bespoke orders.

Scenario C: Invoice Financing (Pembiayaan Piutang)
  After delivery (Week 6), Susi submits the IDR 37.5M invoice to a fintech
  (e.g., Modalku, Investree, or a bank SCF program).
  Advance rate: 80% of invoice value = IDR 30,000,000
  Cost: 2% per month × 1.5 months = 3% total fee = IDR 900,000
  Cash received Week 6: IDR 30,000,000
  Net after financing fee: IDR 37,500,000 − IDR 900,000 − IDR 22,500,000 = IDR 14,100,000
  BUT: Susi still needs to fund Weeks 1–6 production upfront.
  Financing only helps from Week 6 onward.
  Combined with existing IDR 14M reserve: Production funded, retail partially displaced W1–W6.
  Displaced retail: ~IDR 6,000,000 (less severe than Scenario A due to faster repayment).
  Net benefit: IDR 14,100,000 − IDR 6,000,000 = IDR 8,100,000. Better than A, worse than B.

Scenario comparison:
  Scenario A (no change):         Net benefit IDR  3,000,000   High risk (near-zero cash)
  Scenario B (50% deposit):       Net benefit IDR 15,000,000   No risk
  Scenario C (invoice financing): Net benefit IDR  8,100,000   Low cost, moderate risk

  ⟹ Scenario B (negotiate a deposit) is overwhelmingly the best outcome.
     Cost = zero. Risk = zero. Revenue displacement = zero. Requires only one conversation.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Working Capital Reserve Rule for Future Orders</strong></p>
          <div className="calculation">
{`Rule: Before accepting a corporate order with net-30 or net-45 terms,
Susi's minimum cash reserve must equal:
  Production cost of the order
  PLUS 1 month of regular retail operating costs

Why:
  Production cost of order:       covers the cash outflow for the corporate job
  1 month retail ops:             covers ongoing retail ingredient purchases during
                                  the production period without displacement

For a net-45 order of IDR X:
  Required reserve = (Production cost ≈ 60% of order value) + IDR 16,500,000 (1 month retail ops)

Example — IDR 37.5M order:
  Production cost:  IDR 22,500,000
  Retail ops buffer: IDR 16,500,000
  Required reserve: IDR 39,000,000

  If Susi has less than IDR 39M in reserve:
  → Negotiate a 50% deposit (reduces production funding need to ~IDR 3,750,000 net)
  → Or use invoice financing from Week 6
  → Or decline the order until reserve is sufficient

Minimum target working capital reserve (standing rule):
  IDR 20,000,000 in a dedicated business savings account — never touched for personal use.
  At IDR 3,500,000/month savings from retail profit, this takes approximately 6 months to build.
  Until then: always negotiate a deposit on corporate orders.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — A Profitable Order Can Be Cash-Destructive</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The corporate hamper order generated IDR 15,000,000 in gross profit — a 40% margin.
              By any profitability measure, it should have been celebrated. Instead it nearly
              paralysed the business. This is the central lesson of working capital: profitability
              is a promise of future value. Cash is the operational fuel of today. A business can
              be solvent (more assets than liabilities) and still fail — if it runs out of cash
              before the profitable order converts to payment.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — Susi's Retail Business Had a Naturally Negative CCC (an Advantage She Was Squandering)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A CCC of −2 days means Susi's retail business is a cash machine in the best sense:
              customers pay before she pays her supplier. Most businesses would envy this. The
              corporate order destroyed this advantage by introducing a +80-day CCC into the same
              cash pool. The mix of two business models with radically different cash cycles —
              using the same cash account — created the conflict. Separating the cash flows (a
              dedicated "corporate order reserve") would have prevented the problem.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — The True Cost of the Order Was IDR 12M in Displaced Revenue</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The financial model Susi initially built showed IDR 15M gross profit. The more accurate
              number is IDR 3M net benefit — because IDR 12M in regular retail revenue was displaced
              during the production period. Some of those customers bought from a competitor and will
              not return. The IDR 12M is not just a one-time cost — it has a tail of customer
              relationship damage. This hidden cost only appears in a cash flow model, not a P&L.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — Asking for a Deposit Is the Simplest, Zero-Cost Solution</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The entire crisis was preventable with one sentence: <em>"Our standard terms for
              custom corporate orders are 50% upfront, 50% upon delivery."</em> This is industry
              standard for bespoke / made-to-order products. Corporate procurement teams expect
              it. Susi's reluctance to ask was not a financial constraint — it was a confidence
              constraint. Once she understands working capital, asking for deposits becomes a
              non-negotiable part of her corporate sales process, not an awkward request.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — Immediately (Before the Next Corporate Order)</h3>
          <div className="highlight-box">
            <strong>1A. Standardise Corporate Payment Terms: 50% Upfront, 50% on Delivery</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Add to all corporate quotations: "For custom orders above IDR 5,000,000,
              payment terms are 50% DP upon order confirmation, 50% upon delivery."
              <br /><strong>Why:</strong> Eliminates the cash gap for every future corporate order.
              The 50% deposit on a IDR 37.5M order (IDR 18.75M) fully covers production costs
              with no disruption to retail operations. Zero financing cost. Zero credit risk.
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Open a Dedicated Business Account — Separate from Personal</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Open a second bank account for business only. All business
              revenue goes in, all business costs go out. Personal expenses are a fixed monthly
              transfer from business to personal. Husband's emergency loan is never needed again
              because business cash is never mixed with personal.
              <br /><strong>Why:</strong> Clarity. Susi currently cannot tell how much working
              capital the business has because business and personal money are intermingled. Separation
              is prerequisite to all financial management.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — Build Working Capital Reserve Over 6 Months</h3>
          <div className="highlight-box">
            <strong>2A. Save IDR 3,000,000/Month to a "Corporate Order Reserve" Account</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Every month, transfer IDR 3,000,000 from the business account
              to a dedicated "corporate order reserve" savings account. Do not touch for personal
              or operational use. Target: IDR 20,000,000 in 7 months.
              <br /><strong>Why:</strong> IDR 20M reserve means Susi can self-fund a corporate
              order up to IDR 33M production cost without needing a deposit — while keeping retail
              operations fully funded. This is the financial independence target.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — If Growth Requires Larger Orders</h3>
          <div className="highlight-box">
            <strong>3A. Register for KUR (Kredit Usaha Rakyat) — Government UMKM Loan</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> KUR is a subsidised government loan for small businesses, available
              at interest rates of 6% p.a. (significantly below commercial rates). For a business with
              Susi's track record and documented revenue, a KUR facility of IDR 50–100M would provide
              a standing credit line for large orders.
              <br /><strong>Why:</strong> As Susi's orders grow, the working capital requirement grows.
              A KUR credit line is cheaper than invoice financing and available on demand — she only
              draws it when needed and pays interest only on the drawn amount.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What Susi Will Do Immediately</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              She will add the deposit requirement to her corporate quotation template immediately.
              Dewi showed her that this is standard practice — Susi was not breaking any norms by
              asking for a deposit, she was simply unaware she could ask. The moment she understands
              that corporate clients expect this, the psychological barrier disappears.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Susi Will Resist: Saying No to a Large Order Without a Deposit</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If a corporate client refuses to pay a deposit, Susi's instinct will be to accept
              anyway — the order is big and exciting, and saying no feels like leaving money on
              the table. The discipline she needs to develop: <em>"An order I cannot fund is not
              an order I can fulfil. A client who will not provide a deposit for a custom order
              is a client who is transferring their working capital risk onto me. I am not a bank."</em>
              If a corporate client will not pay a deposit, Susi's options are: (a) decline,
              (b) charge a financing premium that covers the cost of external financing, or
              (c) accept only if the working capital reserve fully covers the gap.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics</strong>
            <table className="data-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Target (Month 6)</th>
                  <th>Action Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Business cash reserve (IDR)</td>
                  <td>~14,000,000</td>
                  <td>≥ 20,000,000</td>
                  <td>Below 10M → no corporate orders without deposit</td>
                </tr>
                <tr>
                  <td>Corporate orders with deposit %</td>
                  <td>0%</td>
                  <td>100%</td>
                  <td>Any order without deposit → renegotiate</td>
                </tr>
                <tr>
                  <td>Retail revenue displacement</td>
                  <td>IDR 12,000,000 (one-time)</td>
                  <td>IDR 0</td>
                  <td>Any displacement → cash management failure</td>
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
            <strong>Profit Is a Promise. Cash Is Fuel.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A P&amp;L statement tells you what the business earned over a period. A cash flow
              statement tells you whether the business has money to operate today. A business can
              be highly profitable on paper and unable to pay its suppliers tomorrow — if the cash
              timing is wrong. For any business that deals with delayed payment (corporate clients,
              resellers, export customers), cash flow management is as important as profitability
              management. They are two separate disciplines.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Cash Conversion Cycle Tells You How Capital-Hungry Your Business Model Is</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A negative CCC (cash in before cash out) is a business superpower — it means the
              business self-funds its own growth. Amazon and Walmart run negative CCCs: customers
              pay immediately, suppliers wait 30–60 days, and the float is invested in inventory
              growth. Susi's retail business has this property. The moment she mixed in a corporate
              order with a positive CCC, she lost it. Always understand the CCC of every revenue
              stream in your business — especially before adding new ones.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Larger the Order, the More Important the Payment Terms</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Small businesses are naturally attracted to large orders — more revenue, bigger clients,
              validation that the business is "serious." But large orders amplify working capital
              requirements proportionally. An order 5x normal size requires 5x the production
              capital. Before celebrating a large order, the first question should always be:
              <em>"When do I get paid — and can I fund the production gap?"</em>
            </p>
          </div>
          <div className="highlight-box">
            <strong>Asking for a Deposit Is Not Unprofessional. Accepting Terms You Cannot Fund Is.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Many UMKM owners are uncomfortable asking for deposits because they fear it signals
              distrust or financial weakness. The opposite is true. A supplier who requires a deposit
              on custom orders signals that they run a proper business with understood cost structures.
              A supplier who accepts any payment terms without question signals that they will accept
              risk on the client's behalf — and will eventually fail because of it. Asking for a
              deposit is a sign of financial literacy, not desperation.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case05
