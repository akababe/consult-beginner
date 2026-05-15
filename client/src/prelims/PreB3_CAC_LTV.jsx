const PreB3 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module B3</span>
        <h1>CAC &amp; LTV</h1>
        <div className="case-meta">
          Module B: How Businesses Create Value &bull; What it costs to get a customer vs. what that customer is worth
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Bima</strong> (26) runs an online fitness coaching business from Jakarta. He sells
            personalised 4-week workout programs for IDR 250,000 via Instagram DMs. He started running
            Instagram ads 4 months ago, spending <strong>IDR 600,000 per month</strong> and typically
            attracting 10 new clients per month.
          </p>
          <p>
            Bima does a quick check: 10 new clients × IDR 250,000 = IDR 2,500,000 in new revenue.
            Minus IDR 600,000 in ads = IDR 1,900,000 net contribution from the ad channel. He
            thinks this is working.
          </p>
          <p>
            His friend Kiki (who studies marketing) asks one question: <em>"How many of those clients
            buy again?"</em> Bima checks his records. Most clients buy once. The average client
            purchases 1.8 times before stopping. Suddenly the math looks different: each client
            is worth IDR 450,000 total — not IDR 250,000 in month one, but not unlimited either.
            And Kiki points out that 6 of Bima's most loyal, repeat clients came through
            <em>referrals</em> — at zero ad spend.
          </p>
          <div className="highlight-box">
            <strong>The Core Question CAC and LTV Answer</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>CAC (Customer Acquisition Cost)</strong> answers: "What did I pay to get one customer?"
              <br /><br />
              <strong>LTV (Customer Lifetime Value)</strong> answers: "What is one customer worth to me
              over the entire time they buy from me?"
              <br /><br />
              The relationship between the two — the LTV:CAC ratio — determines whether a customer
              acquisition channel is profitable, unsustainable, or somewhere in between.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Customer Acquisition Cost (CAC)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>CAC = Total Acquisition Spend ÷ Number of New Customers Acquired</strong>
              <br /><br />
              Acquisition spend includes all costs specifically aimed at bringing in new customers:
              paid ads, influencer fees, promotional discounts given to first-time buyers, referral
              bonuses. It does not include costs to retain existing customers.
              <br /><br />
              CAC must always be calculated <em>per channel</em>. Your Instagram CAC and your referral
              CAC are different numbers, and treating them as one average hides which channel is
              efficient and which is wasteful.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Customer Lifetime Value (LTV)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>LTV = Average Revenue per Customer per Period × Average Customer Lifespan</strong>
              <br /><br />
              Or in margin terms: <strong>LTV = Average Gross Profit per Customer per Period × Lifespan</strong>
              <br /><br />
              LTV measures the total value a customer generates before they stop buying. A customer
              who buys once at IDR 250,000 has LTV of IDR 250,000. A customer who buys every month
              for 12 months at IDR 250,000 has LTV of IDR 3,000,000. The same acquisition cost
              produces very different returns depending on LTV.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The LTV:CAC Ratio</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>LTV:CAC = LTV ÷ CAC</strong>
              <br /><br />
              This ratio is the profitability test for a customer acquisition channel:
              <br /><br />
              • <strong>Below 1x</strong>: You spend more acquiring the customer than they ever return.
              The channel is destroying value — every new customer costs you money on net.
              <br />
              • <strong>1x–3x</strong>: Marginal. You are recovering acquisition costs but the margin
              is thin. Operational costs may push this into loss territory.
              <br />
              • <strong>3x+</strong>: Healthy. A common benchmark for sustainable growth.
              <br />
              • <strong>Very high ({'>'} 10x)</strong>: Excellent unit economics, often seen in
              referral or word-of-mouth channels where CAC is near zero.
            </p>
          </div>

          <p><strong>CAC & LTV — Quick Reference:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Formula</th>
                <th>What It Tells You</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CAC</strong></td>
                <td>Acquisition spend ÷ new customers</td>
                <td>Cost to bring in one new customer</td>
              </tr>
              <tr>
                <td><strong>LTV</strong></td>
                <td>Avg revenue/period × lifespan</td>
                <td>Total value of one customer over their relationship with you</td>
              </tr>
              <tr>
                <td><strong>LTV:CAC</strong></td>
                <td>LTV ÷ CAC</td>
                <td>Return on each customer acquired — the channel profitability test</td>
              </tr>
              <tr>
                <td><strong>Payback Period</strong></td>
                <td>CAC ÷ monthly gross profit per customer</td>
                <td>Months until the acquisition cost is recovered</td>
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
            <strong>Mistake 1 — Evaluating Acquisition Cost Against First-Month Revenue Only</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Bima's original check: IDR 600K ads → 10 clients × IDR 250K = IDR 2.5M first-month
              revenue. "It works." But this misses the point. The question is not whether the first
              purchase covers the ad spend. The question is whether the <em>total lifetime value</em>
              of those 10 clients covers the spend. If 8 of 10 clients never return, the real
              LTV per client is IDR 300K (1.2 purchases average), not the IDR 250K implied by
              a single-purchase analysis.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Averaging CAC Across All Channels</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business that gets 10 clients from ads (CAC: IDR 60K) and 10 from referrals
              (CAC: IDR 0) has a blended CAC of IDR 30K. This number is technically correct
              and practically useless. It hides that the ad channel has a finite and potentially
              negative LTV:CAC, while the referral channel has an infinite LTV:CAC. Decisions
              made on blended CAC will underinvest in referral programs and overinvest in
              ad channels that may not be profitable at scale.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Ignoring Churn When Calculating LTV</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              LTV is only as accurate as the churn assumption underneath it. If clients stop
              buying after 2 months on average, LTV is 2 × revenue per month. If they stay for
              8 months, LTV is 4× higher. The lifespan assumption must be based on actual
              historical data — not optimism. For a new business with less than 12 months of
              data, treat LTV as provisional. Measure and revise quarterly as you learn how
              long customers actually stay.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Bima's Channel Comparison</h2>
        <div className="content">
          <div className="calculation">
{`Bima's Online Fitness Coaching — CAC & LTV by Channel

─── CHANNEL 1: Instagram Ads ───

Monthly ad spend:                IDR   600,000
New clients per month (from ads): 10 clients
CAC = IDR 600,000 ÷ 10         = IDR    60,000 per client

Average purchase value:           IDR   250,000
Average purchases per client:      1.8 (historical data)
LTV = IDR 250,000 × 1.8         = IDR   450,000 per client

LTV:CAC = IDR 450,000 ÷ IDR 60,000 = 7.5x  ← appears healthy

Gross margin per sale: ~70% (Bima's cost is minimal — time only)
Gross profit per client (LTV basis): IDR 450,000 × 70% = IDR 315,000
CAC payback period: IDR 60,000 ÷ (IDR 250,000 × 70% / 1.8 months avg)
                  = IDR 60,000 ÷ IDR 97,222/month = 0.6 months ✓

─── CHANNEL 2: Referrals (word-of-mouth) ───

Monthly referral investment:      IDR         0  (no formal program)
New clients per month (referrals): 3 clients
CAC = IDR 0 ÷ 3                 = IDR         0  (effectively free)

Average purchase value:           IDR   250,000
Average purchases — referral clients: 5.2 (much higher retention)
LTV = IDR 250,000 × 5.2         = IDR 1,300,000 per client

LTV:CAC = IDR 1,300,000 ÷ IDR 0 = ∞  (unlimited — free acquisition)

─── COMPARISON ───

Metric               Ads Channel       Referral Channel
──────────────────── ───────────────── ──────────────────
CAC                  IDR 60,000        IDR 0
LTV                  IDR 450,000       IDR 1,300,000
LTV:CAC              7.5x              ∞
Monthly clients      10                3
Monthly LTV generated IDR 4,500,000    IDR 3,900,000

─── THE HIDDEN INSIGHT ───

Bima spends IDR 600,000/month to acquire 10 ad clients worth IDR 450K each.
He spends IDR 0/month on referrals and acquires 3 clients worth IDR 1.3M each.

If Bima spent IDR 150,000/month on a referral incentive program
(e.g., IDR 50,000 discount for the referring client):
  Expected new referral clients: 3 × 2 = ~6 clients/month (conservative estimate)
  New referral CAC: IDR 150,000 ÷ 6 = IDR 25,000 per client
  Referral LTV:CAC: IDR 1,300,000 ÷ IDR 25,000 = 52x

Result: Better economics than the ad channel at 1/4 the spend.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>LTV:CAC Ratio Interpretation Guide:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>LTV:CAC Ratio</th>
                <th>Interpretation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 1x</td>
                <td>You lose money on every customer acquired</td>
                <td>Stop the channel immediately</td>
              </tr>
              <tr>
                <td>1x–2x</td>
                <td>Marginal — operational costs likely push this to a loss</td>
                <td>Reduce spend, fix retention first</td>
              </tr>
              <tr>
                <td>2x–4x</td>
                <td>Acceptable — workable but monitor closely</td>
                <td>Maintain; look to improve LTV</td>
              </tr>
              <tr>
                <td>4x–10x</td>
                <td>Healthy — sustainable growth economics</td>
                <td>Invest more in this channel</td>
              </tr>
              <tr>
                <td>10x+</td>
                <td>Excellent — typically referral or organic</td>
                <td>Prioritise and actively cultivate</td>
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
            <strong>Case 06 — Nadia's Online Tutoring Platform</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nadia spends IDR 1.2M/month on Instagram and TikTok ads, acquiring 8 new students
              per month (CAC: IDR 150,000). Each student pays IDR 300,000/month and stays an
              average of 2.3 months. LTV is IDR 690,000. LTV:CAC is 4.6x — technically fine.
              But her referral students stay 6+ months on average (LTV: IDR 1,800,000+) at zero
              CAC. The case reveals she is funding a mediocre-LTV channel while completely
              neglecting her best-LTV channel. The fix is not to spend more on ads — it is to
              shift investment toward the referral channel.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>LTV Is About Retention, Not Just First Purchase</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The fastest way to improve LTV:CAC is usually to improve LTV, not to reduce CAC.
              Retention improvements — better onboarding, follow-up touchpoints, loyalty incentives,
              product quality — compound over time. A 20% improvement in average customer lifespan
              is often easier to achieve than a 20% reduction in ad spend, and it improves
              profitability on every customer you already have, not just future ones.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Not All Customers Are Equally Valuable</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Different acquisition channels produce customers with different LTVs. Customers
              acquired through referrals are typically more loyal, spend more per transaction,
              and require less support — because they came in with trust already established.
              Customers acquired through promotional discounts often have the lowest LTV —
              because they were attracted by price, not by the product, and they will leave
              when a cheaper alternative appears. Segment your customers by acquisition channel
              and calculate LTV per segment separately.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Payback Period Matters for Cash Flow</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Even with a healthy LTV:CAC ratio, a long payback period can create cash pressure.
              If CAC is IDR 200,000 but each customer generates IDR 50,000 of gross profit per
              month, the payback period is 4 months. That means for 4 months, each newly acquired
              customer is a net cash drain. If you acquire 20 customers per month, you are funding
              80 customers "in recovery" at any given time — IDR 16M of unrecovered acquisition
              cost. Fast growth with long payback periods requires working capital.
            </p>
          </div>
          <div className="highlight-box">
            <strong>You Cannot Optimise What You Do Not Measure</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              CAC and LTV are only as useful as the data behind them. Start tracking: (1) where
              each new customer came from, (2) what they spent on their first purchase,
              (3) whether and when they purchased again, (4) when they last purchased. Even a
              simple spreadsheet with these four columns gives you the data to calculate CAC and
              LTV per channel. Businesses that track these metrics make better acquisition
              decisions. Businesses that do not track them spend money on intuition.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreB3
