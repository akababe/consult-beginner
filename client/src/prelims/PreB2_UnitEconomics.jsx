const PreB2 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module B2</span>
        <h1>Unit Economics</h1>
        <div className="case-meta">
          Module B: How Businesses Create Value &bull; What one sale, one customer, or one project actually earns
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Dika</strong> (28) customises sneakers from his bedroom studio in Malang. He repaints,
            restores, and hand-illustrates about <strong>10 pairs per month</strong>. Each pair is priced
            at IDR 450,000. He posts the results on Instagram and gets a steady stream of orders.
          </p>
          <p>
            Every month Dika does a rough calculation: IDR 4,500,000 in sales minus roughly IDR 600,000 in
            paint and supplies equals IDR 3,900,000. He thinks he is running a healthy side business.
            But his bank account barely moves. He cannot explain where the money goes.
          </p>
          <p>
            The problem is that Dika has never done a <em>real</em> per-pair calculation. He is counting
            his direct materials but not his marketing spend, his packaging, or — critically —
            <strong>his time</strong>. When his friend Yana walks him through a full unit analysis,
            Dika discovers his actual profit per pair is IDR 190,000, not IDR 390,000.
          </p>
          <div className="highlight-box">
            <strong>What Are Unit Economics?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Unit economics is the analysis of revenue, cost, and profit for <em>one unit</em> of whatever
              the business sells. One cup of coffee. One cleaned pair of shoes. One booked photography event.
              One tutoring session. When you understand what one unit earns and what it costs, you can
              reliably predict what 10, 100, or 1,000 units will earn — and whether scaling up will
              make you richer or just busier.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Unit</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The unit is the smallest repeatable thing the business sells or produces. For a product
              business, it is one item sold. For a service business, it is one job or session completed.
              For a subscription business, it is one customer for one month. Choose the unit that
              matches how you actually sell: if you sell by the piece, analyse by the piece. If you
              sell by the project, analyse by the project.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Unit Revenue</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The price received for one unit. For Dika: IDR 450,000 per pair.
              <br /><br />
              For services with variable pricing (e.g., "small event IDR 1.5M, large event IDR 3M"),
              use a weighted average across your typical mix, or analyse each tier separately.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Unit Cost</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every cost that exists <em>because of</em> that unit. This includes direct materials,
              but also every other cost that scales with each additional unit: per-job marketing spend,
              packaging, platform fees, delivery, and — this is the part most small business owners miss —
              <strong>the owner's time</strong>.
              <br /><br />
              Fixed costs (rent, tools, subscriptions) can be allocated per unit by dividing by monthly volume.
              If rent is IDR 1,000,000/month and you complete 10 units, rent costs IDR 100,000 per unit.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Unit Profit (also called: Contribution per Unit)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Unit Profit = Unit Revenue − Unit Cost</strong>
              <br /><br />
              This is what one sale actually contributes to the business. Multiply by volume to get
              total profit. If unit profit is IDR 190,000 and you complete 10 units, total profit
              is IDR 1,900,000 — regardless of what the revenue number looks like.
            </p>
          </div>

          <p><strong>The Unit Economics Framework:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Formula</th>
                <th>What It Tells You</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Unit Revenue</strong></td>
                <td>Price per unit</td>
                <td>How much one sale brings in</td>
              </tr>
              <tr>
                <td>− Unit Variable Cost</td>
                <td>All costs per unit (materials + time + marketing + etc.)</td>
                <td>What one sale actually costs to produce and deliver</td>
              </tr>
              <tr>
                <td><strong>= Unit Profit</strong></td>
                <td>Revenue − Cost</td>
                <td>What one sale earns after all costs</td>
              </tr>
              <tr>
                <td>Unit Profit Margin %</td>
                <td>Unit Profit ÷ Unit Revenue × 100</td>
                <td>Efficiency of each sale as a percentage</td>
              </tr>
              <tr>
                <td>Total Profit</td>
                <td>Unit Profit × Volume</td>
                <td>How much the whole business earns per period</td>
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
            <strong>Mistake 1 — Only Subtracting Direct Materials</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most common error: deducting only raw materials from the selling price and calling
              the rest "profit." Dika does this: IDR 450K price minus IDR 60K paint equals IDR 390K
              "profit." But this ignores marketing spend, packaging, tools, and time — costs that
              exist specifically because of each order. A real unit cost includes every cost that
              would disappear if that unit were never produced.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Treating the Owner's Time as Free</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is the most dangerous oversight in small business unit economics. If Dika spends
              4 hours on each pair and values his time at zero, his business looks profitable.
              If he values his time at IDR 40,000/hour — the rate he could earn doing other creative
              work — that 4 hours costs IDR 160,000 per pair. The "profitable" business is suddenly
              a lot thinner. Owner time is an opportunity cost: the wage you are giving up by working
              on your business instead of something else. It must be included in any honest unit cost.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Confusing Total Revenue with Unit Health</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business can double its revenue by doubling volume and still not increase profit —
              if unit costs are high. Worse, it can <em>lose money faster</em> by growing, if each
              unit is sold at a loss. Before scaling, verify that unit economics are positive.
              Scaling a negative-margin unit is a reliable way to destroy a business efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Dika's Per-Pair Analysis</h2>
        <div className="content">
          <div className="calculation">
{`Dika's Custom Sneaker Studio — Unit Economics (per pair)

Revenue per pair:
  Selling price:                                  IDR    450,000

Costs per pair:
  Paint & ink supplies:                           IDR    (60,000)
  Thinner, brushes, finishing spray (monthly     IDR    (15,000)
    IDR 150,000 ÷ 10 pairs):
  Packaging (box, bubble wrap, tissue):           IDR    (12,000)
  Instagram advertising (IDR 400,000/month        IDR    (40,000)
    ÷ 10 pairs):
  Phone + internet (IDR 120,000/month             IDR    (12,000)
    ÷ 10 pairs):
  ────────────────────────────────────────────────────────────────
  Subtotal (excluding time):                      IDR   (139,000)

Owner's time per pair:
  Consultation + design discussion:  0.5 hours
  Actual paint & customisation work: 3.5 hours
  Photography, editing, packaging:   0.5 hours
  Total time per pair:               4.5 hours
  Opportunity cost rate:             IDR 25,000/hour
  Time cost per pair:                            IDR   (112,500)
  ────────────────────────────────────────────────────────────────
  Total unit cost:                               IDR   (251,500)

Unit profit:  IDR 450,000 − IDR 251,500  =  IDR 198,500 per pair
Unit margin:  IDR 198,500 ÷ IDR 450,000  =  44%

Monthly (10 pairs):
  Revenue:   10 × IDR 450,000  =  IDR  4,500,000
  Total cost: 10 × IDR 251,500  =  IDR (2,515,000)
  ──────────────────────────────────────────────────
  Profit:                          IDR  1,985,000`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>What Dika Thought vs. Reality:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Dika's Original Estimate</th>
                <th>Actual (Full Unit Cost)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revenue per pair</td>
                <td>IDR 450,000</td>
                <td>IDR 450,000</td>
              </tr>
              <tr>
                <td>Costs counted</td>
                <td>IDR 60,000 (paint only)</td>
                <td>IDR 251,500 (all costs + time)</td>
              </tr>
              <tr>
                <td>"Profit" per pair</td>
                <td>IDR 390,000</td>
                <td>IDR 198,500</td>
              </tr>
              <tr>
                <td>Monthly profit (10 pairs)</td>
                <td>IDR 3,900,000</td>
                <td>IDR 1,985,000</td>
              </tr>
              <tr>
                <td>Effective hourly rate</td>
                <td>Not calculated</td>
                <td>IDR 44,111/hr (profit ÷ 45hrs)</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--ink-3)' }}>
            Dika is still profitable after full unit cost accounting — IDR 44K/hour is reasonable for
            skilled creative work. But his actual monthly earnings are IDR 1,985,000, not IDR 3,900,000.
            Knowing this matters for pricing decisions: if he wants to earn IDR 3M/month, he needs
            either 16 orders at current pricing or raise his price to IDR 600,000+ per pair.
          </p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 04 — Reza the Photographer</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza shoots 8–10 events per month and grosses IDR 60–70 million. He assumes he is
              earning well because his calendar is full. The unit economics analysis reveals that
              after equipment depreciation, editing hours (priced at zero by Reza), travel, assistant
              fees, and marketing spend, his real profit per event is IDR 800,000 — not the IDR 7,000,000
              he assumed. The culprit is the same one Dika had: editing time was never counted as a cost.
              A "full calendar" is not the same as a profitable business.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Start With One Unit, Not the Whole Business</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before analysing a month of operations, analyse one sale. Pick a typical order and
              track every cost associated with it: materials, time (yours and any assistant's),
              your share of monthly fixed costs, platform fees, delivery. If you cannot profitably
              explain one unit, you cannot profitably run 100 units.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Price Your Time — Even If You Don't Pay Yourself a Salary</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most common reason small businesses look profitable but feel unprofitable is
              un-priced owner time. Use a reasonable floor: minimum wage (IDR 20–25K/hour in most
              cities), or what you could earn doing the same skill elsewhere (IDR 35–60K/hour
              for skilled trades). Include this in every unit cost calculation. If the business
              cannot pay you a fair wage per unit, the pricing is wrong — not your lifestyle.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Use Unit Economics to Set Minimum Price</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Unit economics works in reverse: once you know your total unit cost, add your
              target unit profit to set a minimum price. If Dika wants to earn IDR 300,000 per pair
              (after all costs including time), and his unit cost is IDR 251,500, his minimum price
              is IDR 551,500. Selling below this is subsidising customers with his own time.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Scaling a Positive Unit is Good — Scaling a Negative Unit is Dangerous</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If your unit economics are positive (unit profit {'>'} 0), growth makes the business
              more profitable. If they are negative — if each sale actually costs more than it earns —
              growth destroys value faster. Many businesses discover this only after they have
              hired staff and expanded capacity. The time to check is before you scale, not after.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreB2
