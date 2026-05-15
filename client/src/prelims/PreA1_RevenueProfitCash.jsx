const PreA1 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module A1</span>
        <h1>Revenue vs Profit vs Cash</h1>
        <div className="case-meta">
          Module A: The Language of Money &bull; The three numbers every business owner confuses
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Ibu Rina</strong> runs a warung nasi in Bekasi. Every month, customers hand her a
            total of <strong>IDR 40 million</strong>. She knows this because she counts the cash drawer
            every night. Business is busy. The warung is full at lunch.
          </p>
          <p>
            But at the end of each month, Rina looks at her savings account and wonders:
            <em> "I took in IDR 40 million — so why do I only have IDR 3 million left?"</em>
          </p>
          <p>
            She is not being cheated. She is not bad at math. She is making the most common mistake
            in small business: <strong>confusing revenue with profit, and profit with cash.</strong>
          </p>
          <div className="highlight-box">
            <strong>The Three Numbers Every Business Owner Must Separate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Revenue</strong> — all the money customers paid you. This is the top line. It
              tells you how much business you did, not how much you kept.
              <br /><br />
              <strong>Profit</strong> — what is left after paying for everything the business needs
              to run. This is what the owner actually earns. Revenue minus all costs.
              <br /><br />
              <strong>Cash</strong> — money physically in the bank or in hand right now. Profit and
              cash are often different because of timing: you may have earned profit but not yet
              received the cash (if customers owe you), or received cash you haven't yet earned
              (if customers paid upfront).
            </p>
          </div>
          <p>
            For a simple cash-only warung like Rina's, cash and revenue tend to be the same thing —
            customers pay immediately. The gap for her is between <strong>revenue and profit</strong>.
            Understanding this gap is the starting point for all business analysis.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Revenue (also called: Sales, Turnover, Top Line)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The total amount customers paid for your products or services during a period.
              Revenue does not care about costs. It is simply: <em>units sold × price per unit</em>.
              <br /><br />
              A business can have IDR 100 million in revenue and still be losing money — if its
              costs are IDR 110 million. Revenue is not success. Revenue is activity.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Profit (also called: Net Income, Bottom Line, Net Profit)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              What remains after subtracting all costs from revenue.
              <br /><br />
              <strong>Profit = Revenue − Total Costs</strong>
              <br /><br />
              Profit is the number that determines whether a business is sustainable. A business
              with zero profit is breaking even — covering its costs, but not generating any return
              for the owner. A business with negative profit is destroying value every day it
              operates.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Cash (also called: Cash Flow, Liquidity)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Money that is physically available — in the register, in the bank account, ready
              to spend. Cash matters because bills must be paid in cash, not in "profit."
              <br /><br />
              A business can be profitable on paper and still run out of cash — if it has to pay
              its suppliers before its customers pay it. This is called a <em>cash flow problem</em>,
              and it kills profitable businesses. For a simple cash-only business like a warung,
              this is rarely an issue. For businesses that sell on credit or hold large inventory,
              it is a critical concern.
            </p>
          </div>

          <p><strong>The Income Statement Waterfall — How Revenue Becomes Profit:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Amount (IDR)</th>
                <th>What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Revenue</strong></td>
                <td>40,000,000</td>
                <td>Total paid by customers</td>
              </tr>
              <tr>
                <td>− Cost of Goods Sold (COGS)</td>
                <td>(22,000,000)</td>
                <td>Ingredients, packaging — direct costs of making the food</td>
              </tr>
              <tr>
                <td><strong>= Gross Profit</strong></td>
                <td><strong>18,000,000</strong></td>
                <td>Revenue after direct production costs</td>
              </tr>
              <tr>
                <td>− Operating Expenses</td>
                <td>(15,000,000)</td>
                <td>Rent, staff wages, utilities, gas — costs to keep the business running</td>
              </tr>
              <tr>
                <td><strong>= Net Profit</strong></td>
                <td><strong>3,000,000</strong></td>
                <td>What Rina actually keeps — 7.5% of revenue</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--ink-3)' }}>
            This is why Rina has IDR 3 million left at the end of the month, not IDR 40 million.
            IDR 37 million went to costs. The business is profitable — but barely.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. The Common Mistake</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Mistake 1 — Treating Revenue as Income</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>"We made IDR 40 million this month!"</em> — said proudly at a family dinner.
              But IDR 37 million of that was the cost of generating it. The owner earned IDR 3 million.
              Celebrating revenue without knowing profit leads to over-spending, over-hiring, and
              under-saving. Revenue is a vanity metric. Profit is the reality check.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Confusing Profit with Cash Available</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Even after correctly calculating profit, owners sometimes assume that profit = cash in hand.
              It is not always true. Consider: Rina buys a new rice cooker for IDR 2 million cash
              today. That IDR 2 million leaves her bank account immediately, but on the income
              statement it shows up gradually as "depreciation" over two years. Her cash drops
              sharply; her profit drops only slightly. <em>Cash flow and profit move independently.</em>
              For simple businesses, the gap is small. For businesses with equipment, inventory,
              or credit sales, the gap can be enormous.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Watching Revenue Trends Instead of Profit Trends</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business can grow revenue while profit falls — if costs grow faster than revenue.
              This is exactly what happened in Case 01 (BrewMate Café): revenue climbed from
              IDR 35M to IDR 45M per month over nine months, while profit margin fell from
              18% to 10%. The owner thought the business was doing well because revenue was up.
              He was wrong. Always track both.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Rina's Warung Numbers</h2>
        <div className="content">
          <div className="calculation">
{`Rina's Warung — Typical Month

Revenue:
  Nasi campur sold:     450 portions × IDR 25,000   =  IDR 11,250,000
  Nasi padang sold:     380 portions × IDR 30,000   =  IDR 11,400,000
  Side dishes / extras:                              =   IDR 5,500,000
  Drinks (es teh, etc):                              =   IDR 4,850,000
  Delivery orders (GoFood):                          =   IDR 7,000,000
  ───────────────────────────────────────────────────────────────────
  Total Revenue:                                         IDR 40,000,000

Cost of Goods Sold (COGS) — direct food & packaging costs:
  Rice, protein, vegetables, spices:                =  IDR 17,500,000
  Cooking oil, gas:                                  =   IDR 2,200,000
  Packaging (takeaway boxes, bags):                  =   IDR 1,300,000
  GoFood commission (20% of delivery revenue):       =   IDR 1,400,000 (approx)
  ───────────────────────────────────────────────────────────────────
  Total COGS:                                            IDR 22,400,000

Gross Profit = IDR 40,000,000 − IDR 22,400,000 = IDR 17,600,000
Gross Margin = IDR 17,600,000 ÷ IDR 40,000,000 = 44%

Operating Expenses:
  Rent (ruko stall):                                =   IDR 4,500,000
  Staff wages (2 helpers):                           =   IDR 7,000,000
  Utilities (electricity, water):                    =   IDR 1,800,000
  Phone/WiFi:                                        =     IDR 300,000
  Cleaning supplies, misc:                           =     IDR 500,000
  ───────────────────────────────────────────────────────────────────
  Total Operating Expenses:                              IDR 14,100,000

Net Profit = IDR 17,600,000 − IDR 14,100,000 = IDR 3,500,000
Net Margin = IDR 3,500,000 ÷ IDR 40,000,000  = 8.75%

  ⟹ Rina earns IDR 3,500,000 per month, not IDR 40,000,000.
     For every IDR 100 a customer spends, Rina keeps IDR 8.75.
     The rest goes to ingredients, staff, rent, and running costs.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>The Three Numbers Side by Side:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Rina's Amount (IDR)</th>
                <th>What It Tells You</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Revenue</strong></td>
                <td>40,000,000</td>
                <td>How much business was done. Looks great. Says nothing about sustainability.</td>
              </tr>
              <tr>
                <td><strong>Net Profit</strong></td>
                <td>3,500,000</td>
                <td>What Rina actually earned. This is her income. This is what matters.</td>
              </tr>
              <tr>
                <td><strong>Cash in Bank (end of month)</strong></td>
                <td>~3,200,000</td>
                <td>Close to profit here because Rina is cash-only. Timing differences are small.</td>
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
            <strong>Case 01 — BrewMate Café</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Budi tracked revenue ("we're at IDR 45 million, we're growing!") but not profit margin.
              Revenue was up. Costs were up faster. Margin had fallen from 18% to 10% over nine months
              without him noticing — because he was watching the wrong number. Sari's breakthrough was
              building a simple table of <em>profit margin per month</em>, not revenue per month.
              The moment Budi saw profit trending down while revenue trended up, the problem became
              visible.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 02 — Clean & Fold Laundry</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wati's expansion decision was framed around revenue: "the new branch will bring in more
              revenue." Andi reframed it around profit: "what does the new branch need to earn before
              it stops <em>costing</em> us money?" The break-even calculation only makes sense if you
              understand the difference between revenue (all money in) and profit (what's left after
              the new branch's fixed costs are paid). Without this distinction, expansion looks simpler
              than it is.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The One Question Every Business Owner Should Ask Monthly</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>"For every IDR 100 my customers paid me this month, how many IDR did I keep after
              all costs?"</em> If you cannot answer this question, you are navigating without
              instruments. Revenue tells you you're moving. Profit tells you which direction.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Profit Margin % Is More Useful Than Profit IDR</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rina earns IDR 3.5 million profit on IDR 40 million revenue — an 8.75% margin. If next
              month revenue grows to IDR 44 million but costs grow proportionally, profit will be
              IDR 3.85 million. The IDR number went up, but the margin is the same. The business
              did not get more efficient — it just got bigger. Track margin %, not just profit IDR,
              to see whether the business is actually improving.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Revenue Growth Is Not Always Good News</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This seems counterintuitive, but it is true: if revenue grows by 20% and costs grow
              by 30%, the business is worse off despite "growing." This happens when a business
              adds products, locations, or staff without checking whether those additions generate
              enough gross profit to cover their costs. Always ask: is this revenue growth profitable
              revenue growth?
            </p>
          </div>
          <div className="highlight-box">
            <strong>Cash Problems Can Happen to Profitable Businesses</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              For a cash-only warung, revenue and cash are essentially the same thing. But as
              businesses grow — selling on credit, holding larger inventory, investing in equipment
              — cash and profit diverge significantly. A growing business that runs out of cash
              despite being profitable is not a paradox. It is a common failure mode. Understanding
              the difference between profit (earned) and cash (available) becomes critical the
              moment a business extends credit or holds significant inventory.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreA1
