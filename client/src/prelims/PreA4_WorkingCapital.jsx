import WorkingCapitalCalc from './calculators/WorkingCapitalCalc.jsx'

const PreA4 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module A4</span>
        <h1>Working Capital</h1>
        <div className="case-meta">
          Module A: The Language of Money &bull; The cash you need to fund the gap between spending and receiving
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Bu Ratna</strong> (40) runs a small catering business in Solo. She cooks for arisan
            gatherings, corporate lunches, and family celebrations. Business has always worked simply:
            clients order, she buys ingredients 2 days before, she cooks, she collects cash on the day
            of the event.
          </p>
          <p>
            Then she lands her biggest order yet: a 200-person corporate anniversary lunch for a local
            manufacturer. The client will pay IDR 18,000,000 — but on <em>30-day payment terms</em>.
            Ratna needs to spend IDR 10,800,000 on ingredients and staff upfront. She only has
            IDR 5,000,000 in her business account.
          </p>
          <p>
            She takes the order. She borrows IDR 6,000,000 from family. She fulfils the event
            beautifully. Then she waits 30 days for payment — during which her regular catering
            clients keep calling, but she has no cash to buy ingredients for their orders.
            She turns away IDR 8,000,000 in regular business. The big order was profitable on
            paper. In practice, it nearly broke her business.
          </p>
          <div className="highlight-box">
            <strong>What Is Working Capital?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Working capital is the money a business needs to fund its day-to-day operations —
              specifically, to bridge the gap between when it pays its costs and when it receives
              payment from customers. A business can be profitable (earn more than it costs in the
              long run) and still run out of cash (have no money available right now) if this
              timing gap is not funded.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Working Capital</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Working Capital = Current Assets − Current Liabilities</strong>
              <br /><br />
              <em>Current Assets</em>: cash, inventory, and money owed to you by customers (accounts receivable)
              — things that will convert to cash within a short period (typically 30–90 days).
              <br /><br />
              <em>Current Liabilities</em>: money you owe suppliers, short-term loans due — obligations
              you must pay within the same short period.
              <br /><br />
              Positive working capital means the business has more liquid assets than short-term obligations.
              Negative working capital means the business owes more in the short term than it can access —
              a dangerous position even if long-term profits are fine.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Cash Conversion Cycle (CCC)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The cash conversion cycle measures how many days elapse between a business spending cash
              and receiving it back from customers.
              <br /><br />
              <strong>CCC = Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding</strong>
              <br /><br />
              <em>Days Inventory Outstanding (DIO)</em>: how long inventory sits before being used or sold.<br />
              <em>Days Sales Outstanding (DSO)</em>: how long after a sale before the customer pays.<br />
              <em>Days Payable Outstanding (DPO)</em>: how long you take to pay your own suppliers.<br />
              <br />
              A shorter CCC means less cash is tied up in operations. A longer CCC means more working
              capital is needed to keep the business running smoothly.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Cash Gap</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The cash gap is the period — measured in days — when cash has left the business (you have
              paid for costs) but has not yet returned (the customer has not paid you yet). During this
              window, the business must have enough cash reserves or financing to keep operating.
              The size of the cash gap depends on your industry and contract terms. For Ratna's regular
              business, the cash gap is 2 days (she buys ingredients 2 days before, collects same day).
              For the corporate order, the cash gap was 32 days.
            </p>
          </div>

          <p><strong>Working Capital Components — Summary Table:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Term</th>
                <th>What It Is</th>
                <th>Direction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cash in Hand/Bank</strong></td>
                <td>Money immediately available</td>
                <td>Positive — want more</td>
              </tr>
              <tr>
                <td><strong>Inventory</strong></td>
                <td>Ingredients, stock bought but not yet sold/used</td>
                <td>Positive — but ties up cash</td>
              </tr>
              <tr>
                <td><strong>Accounts Receivable</strong></td>
                <td>Money customers owe you (invoiced but not yet paid)</td>
                <td>Positive — but not available yet</td>
              </tr>
              <tr>
                <td><strong>Accounts Payable</strong></td>
                <td>Money you owe suppliers (received goods, not yet paid)</td>
                <td>Negative — deferred payment helps cash position</td>
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
            <strong>Mistake 1 — Confusing Profit with Cash Availability</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Ratna's corporate catering order had a gross margin of ~40%. On paper, the IDR 18M
              order produced IDR 7.2M in gross profit. That profit is real — it will show up in
              her bank account in 30 days. But on Day 5, she needed IDR 3,000 to buy tomatoes
              for a different client, and she didn't have it. Profit is earned over time. Cash
              is needed right now. Confusing the two is the most dangerous working capital mistake.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Evaluating Orders on Profit Alone</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A large order looks attractive because of its total profit. But before accepting it,
              the right question is: <em>"Can I fund the cash gap?"</em> If the answer is no — and
              you have no credit line or working capital reserve — the order will damage your
              business even if it is technically profitable. The evaluation of any order must
              include both the profit it generates and the cash it temporarily consumes.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Not Negotiating Payment Terms</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Small business owners often accept any payment terms clients offer, especially from
              large corporate clients who seem prestigious. But payment terms directly determine
              your cash gap. A 50% upfront deposit + 50% on delivery converts a 30-day cash gap
              into a 0-day gap. Every negotiated improvement in payment terms reduces the working
              capital you need to hold. Working capital management starts with the contract.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Bu Ratna's Cash Flow Timeline</h2>
        <div className="content">
          <div className="calculation">
{`Bu Ratna — Corporate Catering Order — Cash Flow Timeline

The Order:
  Value:                 IDR  18,000,000
  Food cost (~60%):      IDR (10,800,000)
  Gross profit:          IDR   7,200,000  (40% gross margin)
  Payment terms:         Net-30 (client pays in 30 days)

Ratna's Cash Position at Start: IDR 5,000,000

Day 0 — Order accepted
  Cash in hand:                IDR  5,000,000

Day 2 — Buy ingredients for event
  Cash out (ingredients):     IDR (7,500,000)
  Cash in hand:                IDR (2,500,000)  ← NEGATIVE — she needs to borrow

Day 3 — Borrow from family to cover
  Cash in (family loan):       IDR  6,000,000
  Cash in hand:                IDR  3,500,000

Day 3–5 — Pay staff advance + rent equipment
  Cash out (staff + equipment):IDR (3,300,000)
  Cash in hand:                IDR    200,000

Day 6–30 — Regular clients call, but Ratna has IDR 200K only
  Regular orders turned away:  IDR  8,000,000 in revenue foregone
  (She cannot buy IDR 400–800K in ingredients per event with IDR 200K)

Day 32 — Corporate client pays (2 days late)
  Cash in (corporate payment): IDR  18,000,000
  Cash in hand:                IDR  18,200,000
  Repay family loan:           IDR  (6,000,000)
  Net cash after loan:         IDR  12,200,000

PROFIT ANALYSIS (order only):
  Revenue:                     IDR  18,000,000
  Total costs (food + staff + equipment): IDR (11,700,000)
  Profit from order:           IDR   6,300,000  ✓ profitable

REAL OUTCOME:
  Profit from order:           IDR   6,300,000
  Revenue foregone (lost regular orders): IDR (8,000,000)  ← opportunity cost
  Net outcome:                 IDR  (1,700,000)  ✗ net loss

Cash Conversion Cycle for this order:
  DIO (ingredients bought 2 days before event): 2 days
  DSO (client pays net-30, actually net-32):    32 days
  DPO (Ratna paid suppliers immediately):        0 days
  CCC = 2 + 32 − 0 = 34 days

  She needed 34 days of working capital to bridge the gap.
  At IDR 11.7M in costs, the daily funding need was IDR 344K/day.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>What Ratna Should Have Negotiated:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Cash Gap</th>
                <th>Max Cash Needed</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Net-30 (accepted)</td>
                <td>34 days</td>
                <td>IDR 11,700,000</td>
                <td>Required IDR 6M loan, lost IDR 8M business</td>
              </tr>
              <tr>
                <td>50% upfront deposit</td>
                <td>34 days</td>
                <td>IDR 2,700,000</td>
                <td>Covered by savings, no loan needed</td>
              </tr>
              <tr>
                <td>Full payment on delivery</td>
                <td>2 days</td>
                <td>IDR 300,000</td>
                <td>No cash stress at all</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 05 — Ibu Susi's Bakery</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Susi accepts a 500-hamper corporate order worth IDR 37.5M. She needs IDR 22M in
              ingredients upfront. The client pays net-45. Her regular retail customers pay immediately.
              By Day 20, she has spent her cash on the big order and cannot buy ingredients for
              her regular daily sales. She is profitable on paper — the hamper order has a healthy
              margin. She is cash-broke in practice. The case introduces the cash conversion cycle
              and three financing options (invoice factoring, partial deposit, working capital credit line).
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Always Check Cash Before Accepting a Large Order</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before saying yes to any order that requires significant upfront spending, ask:
              (1) How much cash do I need to produce this order? (2) When will the customer pay?
              (3) Do I have enough cash to fund the gap — and still run my normal business?
              If the answer to (3) is no, negotiate a deposit before accepting.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Three Levers That Control Your Cash Gap</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              You can shorten your cash conversion cycle (and reduce working capital needed) by
              adjusting three things: (1) <em>Collect faster</em> — request deposits, shorten
              payment terms, follow up on late invoices. (2) <em>Pay later</em> — negotiate supplier
              credit terms if possible. (3) <em>Hold less inventory</em> — buy closer to when you
              need it. Each day you shorten the cycle is one less day of cash tied up.
            </p>
          </div>
          <div className="highlight-box">
            <strong>A Working Capital Reserve Is Not Idle Cash</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Many small business owners see cash sitting in the account and feel the urge to spend
              it — on stock, equipment, or withdrawals. But that cash may be needed in the next
              30 days to bridge a normal operating gap. A working capital reserve of 1–2 months
              of operating expenses is not luxury — it is the buffer that keeps a profitable
              business from becoming an insolvent one.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Rapid Growth Is the Most Dangerous Time for Working Capital</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business that doubles its revenue in 3 months must fund twice the cash gap —
              twice the ingredient purchases, twice the inventory, twice the staff wages before
              customers pay. Fast-growing businesses regularly run out of cash despite being
              profitable, because their sales outpaced their working capital. If you are growing
              quickly, build your cash reserve before growth, not after.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Adjust DPO, DIO, and DSO to see the cash conversion cycle shift on the timeline, then use the working capital calculator below.
          </p>
          <WorkingCapitalCalc />
        </div>
      </section>

    </div>
  )
}

export default PreA4
