const PreC4 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module C4</span>
        <h1>Scenarios &amp; Probability Weighting</h1>
        <div className="case-meta">
          Module C: Value Over Time &bull; How to build optimistic, base, and pessimistic futures — and combine them into a single honest expected value
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Pak Bima Prasetyo</strong> (39) runs <em>Bima Catering</em> in Makassar —
            a small catering operation supplying lunch boxes for corporate meetings, food for
            kenduri, and buffet setups for small weddings and receptions. He has a small but
            loyal client base, monthly revenue around IDR 35,000,000, and a production kitchen
            that he has run for six years with three cooks and two part-time delivery assistants.
          </p>
          <p>
            In early 2026, Bima learned that a newly opened industrial estate 30 km from his
            kitchen had several factory cafeterias looking for outside caterers. The problem: his
            existing delivery motorbikes could not reliably cover that distance while keeping food
            at temperature. A refrigerated delivery van — IDR 85,000,000 — would solve it. With
            the van, he could potentially win three new corporate cafeteria contracts. Without it,
            he was stuck serving clients within 10 km.
          </p>
          <p>
            Bima's business instinct told him to buy the van. He ran one calculation: three
            corporate cafeteria contracts × IDR 15,000,000 per month each = IDR 45,000,000 in
            new revenue × 60 months = IDR 2.7 billion over 5 years. Against a IDR 85,000,000
            investment, it seemed almost too obvious. He was applying for the loan when his
            accountant — <strong>Ibu Ratna</strong>, who had quietly worried about this for
            two weeks — asked a question that stopped him cold: "Pak Bima, what if you only win
            one contract, not three? What if you win none in the first year? Have you calculated
            what happens then?"
          </p>
          <div className="highlight-box">
            <strong>What Is Scenario Analysis with Probability Weighting?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Scenario analysis is the practice of building multiple distinct versions of the
              future — typically an optimistic, a base, and a pessimistic case — and calculating
              the financial outcome of each. Probability weighting combines those scenarios into
              a single <em>expected value</em> by multiplying each scenario's outcome by the
              probability it occurs and summing the results.
              <br /><br />
              <em>Formula:</em> Expected Value = Σ (Probability_i × Outcome_i)
              <br /><br />
              The result is the single most honest summary of what an uncertain investment is
              worth — not the best case, not the worst case, but a weighted average that accounts
              for the possibility of all futures simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Three Standard Scenarios</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Most investment analyses use three scenarios to bracket the range of outcomes:
              <br /><br />
              <strong>Optimistic:</strong> The best realistic outcome — assumptions that could
              plausibly happen if key variables go well. Not a fantasy; should be achievable
              perhaps 20–35% of the time.
              <br /><br />
              <strong>Base Case:</strong> The most likely single outcome — your best estimate of
              what will probably happen. The probability of the base case is usually the highest
              of the three.
              <br /><br />
              <strong>Pessimistic:</strong> A realistic bad outcome — not the very worst that
              could theoretically happen, but a scenario that represents genuine downside risk.
              Should occur perhaps 15–25% of the time.
              <br /><br />
              The three probabilities must sum to 100%. If you believe your base case is very
              likely (70%), the optimistic and pessimistic probabilities split the remaining 30%.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Expected Value (Probability-Weighted NPV)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>E[NPV] = (p_opt × NPV_opt) + (p_base × NPV_base) + (p_pess × NPV_pess)</strong>
              <br /><br />
              The expected NPV is a probability-weighted average of all scenario NPVs. A positive
              expected NPV means the investment creates value on average across possible futures.
              A negative expected NPV means it destroys value on average — even if the optimistic
              scenario looks attractive.
              <br /><br />
              Crucially: expected NPV is not a guaranteed outcome. It is a summary of the
              distribution of outcomes. An investment with expected NPV of +IDR 30M still has a
              real chance of producing a negative NPV if the pessimistic scenario occurs. The
              expected value tells you the center of the distribution; the scenario analysis
              tells you the full range.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Sensitivity Analysis — The Break-Even Probability</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              After calculating expected NPV, it is useful to ask: at what probability of the
              pessimistic scenario does the expected NPV turn negative? This <em>break-even
              probability</em> tells you how bad the odds can get before the investment stops
              making sense. If the break-even pessimistic probability is 80%, the investment is
              very robust. If it is 15%, the investment is highly sensitive to downside risk and
              warrants serious caution.
            </p>
          </div>

          <p><strong>Scenario Analysis Components:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>What It Provides</th>
                <th>Common Error</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Optimistic scenario</strong></td>
                <td>Upper bound on value creation; shows best case</td>
                <td>Making it too good — a fantasy, not a realistic upside</td>
              </tr>
              <tr>
                <td><strong>Base case scenario</strong></td>
                <td>Most likely single outcome; anchor for the analysis</td>
                <td>Anchoring it to the optimistic case due to enthusiasm bias</td>
              </tr>
              <tr>
                <td><strong>Pessimistic scenario</strong></td>
                <td>Lower bound; shows downside exposure</td>
                <td>Assigning it 0% probability ("that won't happen to me")</td>
              </tr>
              <tr>
                <td><strong>Probability weights</strong></td>
                <td>Reflect confidence in each scenario</td>
                <td>Choosing weights after seeing the NPVs to get a desired answer</td>
              </tr>
              <tr>
                <td><strong>Expected NPV</strong></td>
                <td>Single summary of risk-adjusted value</td>
                <td>Treating it as a guaranteed outcome rather than an average</td>
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
            <strong>Mistake 1 — Building Only the Optimistic Scenario</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pak Bima's original analysis was a single-scenario model: three contracts won,
              IDR 45M per month in new revenue, IDR 2.7B over 5 years. He had implicitly assigned
              100% probability to the optimistic outcome without realising it. This is the most
              common mistake in investment analysis: evaluating only the scenario you hope will
              occur. The analysis feels rigorous because the arithmetic is correct — but it is
              built on an assumption that most investments do not achieve. When building any model,
              the first question after the base case should always be: "What does this look like
              if volume is 50% of my estimate?"
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Assigning 0% Probability to the Pessimistic Scenario</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Even after Ibu Ratna suggested building a pessimistic scenario, Bima's first
              instinct was: "That won't happen to us — our food quality is excellent." This is
              overconfidence bias — the belief that bad outcomes apply to others but not oneself.
              In reality, for a competitive catering market in a new industrial estate, there is
              a genuine probability that the van enables fewer new clients than expected. Assigning
              even 20% to a pessimistic scenario forces the analysis to account for real risk.
              Assigning 0% converts the analysis into wishful thinking dressed as a calculation.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Choosing Probabilities to Justify a Desired Answer</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most subtle mistake in scenario analysis is working backwards: deciding you want
              to make the investment, running the scenarios, seeing that the expected NPV is
              negative, and then raising the optimistic probability until the expected NPV turns
              positive. This is not analysis — it is rationalisation. Probabilities must be
              estimated before calculating the NPVs, based on market knowledge, historical
              comparisons, and honest assessment of risk. If the resulting expected NPV is negative,
              that is the analysis speaking. Overriding it by adjusting weights is the same as
              ignoring the analysis entirely.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Pak Bima's Refrigerated Van Decision</h2>
        <div className="content">
          <div className="calculation">
{`Pak Bima's Refrigerated Van — Scenario Analysis
Investment: IDR 85,000,000
Discount rate: 14% per year
Time horizon: 5 years
Year 5 residual (van resale): IDR 15,000,000

PV annuity factor (14%, 5 years):
  Year 1: 1 ÷ 1.14   = 0.8772
  Year 2: 1 ÷ 1.2996 = 0.7695
  Year 3: 1 ÷ 1.4815 = 0.6750
  Year 4: 1 ÷ 1.6890 = 0.5921
  Year 5: 1 ÷ 1.9254 = 0.5194
  Sum:                  3.4332

PV of residual:  IDR 15,000,000 × 0.5194  =  IDR 7,791,000

─── SCENARIO 1 — OPTIMISTIC (25%) ───
3 new corporate cafeteria contracts won within 6 months
  Monthly incremental revenue:      IDR 15,000,000
  Monthly COGS + packaging (55%):   IDR  8,250,000
  Driver salary + fuel:             IDR  4,000,000
  Monthly incremental CF:           IDR  2,750,000
  Annual incremental CF:            IDR 33,000,000

  PV of CFs:  IDR 33,000,000 × 3.4332  =  IDR 113,296,000
  PV residual:                            IDR   7,791,000
  Total PV:                               IDR 121,087,000
  Less investment:                        IDR  85,000,000
  ───────────────────────────────────────────────────────
  NPV (Optimistic):                  +IDR  36,087,000

─── SCENARIO 2 — BASE CASE (50%) ───
1 new client, delivery convenience slightly increases repeat orders
  Annual incremental CF:  IDR 12,000,000

  PV of CFs:  IDR 12,000,000 × 3.4332  =  IDR  41,198,400
  PV residual:                              IDR   7,791,000
  Total PV:                                 IDR  48,989,400
  Less investment:                          IDR  85,000,000
  ───────────────────────────────────────────────────────
  NPV (Base Case):                     -IDR  36,010,600

─── SCENARIO 3 — PESSIMISTIC (25%) ───
Very few new clients; van mainly used for existing deliveries
  Annual incremental CF:  IDR 1,200,000

  PV of CFs:  IDR 1,200,000 × 3.4332  =  IDR   4,119,840
  PV residual:                             IDR   7,791,000
  Total PV:                                IDR  11,910,840
  Less investment:                         IDR  85,000,000
  ───────────────────────────────────────────────────────
  NPV (Pessimistic):                   -IDR  73,089,160

─── PROBABILITY-WEIGHTED EXPECTED NPV ───
  Optimistic  (25%):  0.25 × (+IDR  36,087,000)  =  +IDR  9,021,750
  Base Case   (50%):  0.50 × (-IDR  36,010,600)  =  -IDR 18,005,300
  Pessimistic (25%):  0.25 × (-IDR  73,089,160)  =  -IDR 18,272,290
  ────────────────────────────────────────────────────────────────
  Expected (Probability-Weighted) NPV:             -IDR 27,255,840
                                              ≈  -IDR 27,300,000

  Verdict: DO NOT BUY THE VAN.
  Even accounting for the 25% chance of the optimistic outcome,
  the expected investment destroys IDR 27.3M of value.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Why Bima's original calculation was wrong:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Analysis</th>
                <th>Assumptions Made</th>
                <th>NPV Result</th>
                <th>What Bima Decided</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bima's original</td>
                <td>3 contracts, 100% optimistic</td>
                <td>+IDR 36,087,000</td>
                <td>"Obviously buy the van"</td>
              </tr>
              <tr>
                <td>Base case only</td>
                <td>1 contract, most likely outcome</td>
                <td>-IDR 36,010,600</td>
                <td>"Should not buy the van"</td>
              </tr>
              <tr>
                <td>Scenario-weighted</td>
                <td>All three futures, honest probabilities</td>
                <td>-IDR 27,255,840</td>
                <td>"Do not buy the van"</td>
              </tr>
            </tbody>
          </table>
          <p>
            The scenario analysis did not just change a number — it changed the decision. Bima's
            original optimistic model would have led him into a IDR 85M investment likely to
            destroy IDR 27M of value. The pessimistic scenario alone would have cost him
            IDR 73M in economic loss while still leaving him with a IDR 140M annual loan
            repayment. The expected value is not a guarantee of the -IDR 27M outcome, but it is
            the most honest single-number summary of what the investment is worth when all
            possible futures are counted.
          </p>
          <div className="calculation">
{`Break-Even Probability Analysis
At what optimistic probability does E[NPV] = 0?

Let p = probability of optimistic scenario
Then probability of base case = (0.75 − p), pessimistic stays at 25%

  p × 36,087,000  +  (0.75 − p) × (−36,011,000)  +  0.25 × (−73,089,000)  =  0
  36,087p  −  27,008,000  +  36,011p  −  18,272,000  =  0
  72,098p  =  45,280,000
  p  =  45,280,000 ÷ 72,098,000  =  0.628  =  62.8%

The van only makes sense if there is a 63% probability of
the optimistic scenario occurring — currently estimated at 25%.
The required optimistic probability is 2.5× Bima's estimate.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 09 — Pak Hendro's Platform Deal (Where Scenario Analysis Said Yes)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In Case 09, Pak Hendro's sister Sari built three scenarios for the Klikfresh
              platform investment using the same framework: optimistic (35%), base case (45%),
              pessimistic (20%).
              <br /><br />
              The optimistic NPV was +IDR 271,624,800. The base case was +IDR 63,788,400.
              The pessimistic was -IDR 113,878,200. The probability-weighted expected NPV was
              <strong> +IDR 100,997,820</strong> — positive, and the investment was recommended.
              <br /><br />
              The contrast with Pak Bima's van is instructive: both analyses included a
              pessimistic scenario with a strongly negative NPV. The difference was in the base
              case. Pak Hendro's base case was positive (+IDR 63.8M), so even a 20% pessimistic
              weight could not drag the expected NPV below zero. Pak Bima's base case was
              negative (-IDR 36M), so no reasonable weighting could make the expected NPV
              positive. Scenario analysis does not always say "invest" — its value is that it
              tells you which investments are worth making and which are not, before you commit
              the capital.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Build Scenarios Before You Run the Numbers, Not After</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Define your three scenarios — and their probabilities — before calculating any NPVs.
              This forces you to commit to assumptions based on your actual knowledge of the market,
              not based on what makes the math come out the way you want. Once you have run the
              NPVs and see the expected value, it is psychologically very hard to lower the
              optimistic probability if it means a negative expected NPV. Pre-committing to
              probabilities removes this temptation and makes the analysis honest.
            </p>
          </div>
          <div className="highlight-box">
            <strong>A Negative Expected NPV With an Attractive Optimistic Scenario Is a Warning, Not a Green Light</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pak Bima's optimistic scenario had an NPV of +IDR 36M — genuinely attractive. But
              the base case and pessimistic scenarios outweighed it in the expected value
              calculation. Many bad investments get made precisely because decision-makers focus on
              the optimistic scenario and discount the base case. If the expected NPV is negative,
              the optimistic scenario needs to be achievable with significantly higher probability
              than your honest estimate — which usually means the investment logic is flawed, not
              that the pessimistic probability should be revised downward.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Use the Break-Even Probability to Have a Better Conversation</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The break-even probability calculation — "at what optimistic probability does expected
              NPV = 0?" — is one of the most useful outputs of scenario analysis. Instead of arguing
              over whether NPV is positive or negative, it reframes the conversation: "This
              investment makes sense only if we are 63% confident in the optimistic outcome. Are
              we?" That is a question people can answer from experience, not just arithmetic. If the
              team honestly believes the probability is 30%, the decision is clear. If someone
              believes it is 70%, now you have a productive disagreement to resolve — not just a
              number to argue about.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Scenario Analysis Is Not a Prediction — It Is a Map of Risk</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              No scenario analysis predicts the future. The optimistic, base, and pessimistic
              outcomes are placeholders for a continuous distribution of possible realities. What
              scenario analysis does is force explicit thinking about the range of futures rather
              than assuming the future will look like the plan. The real output is not the expected
              NPV number — it is the conversation it forces: "What would have to be true for the
              pessimistic scenario to occur? How would we know early? What could we do to reduce
              its probability?" Those questions, asked before a decision, are worth far more than
              any single NPV calculation.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreC4
