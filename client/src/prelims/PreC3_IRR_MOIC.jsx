const PreC3 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module C3</span>
        <h1>IRR &amp; MOIC</h1>
        <div className="case-meta">
          Module C: Value Over Time &bull; Two ways to measure investment return — the annualised rate and the raw cash multiple — and why you need both
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Ibu Fitri Wulandari</strong> (32) runs <em>Fitri Batik</em>, a small batik
            fabric shop in Solo. She sells handmade and printed batik by the meter and as
            finished garment pieces — sarongs, blouses, kemeja — sourced from local workshop
            partners. After four years of careful saving, she has accumulated IDR 12,000,000 in
            business cash that is not currently needed for operations. She wants to put it to work.
          </p>
          <p>
            Two opportunities appeared at the same time. First, a fabric supplier offered her
            a limited run of exclusive premium batik designs — she could buy the full lot for
            IDR 12,000,000 and sell it all within one year at IDR 18,000,000, based on strong
            early interest from her regular buyers. Second, a local carpenter offered to build
            her a custom wooden display showcase for IDR 12,000,000. He estimated it would
            attract more premium buyers, generating an extra IDR 4,000,000 per year for the
            next five years through higher average spend per visit.
          </p>
          <p>
            Fitri compared the two options by looking at the total cash she would receive:
            IDR 18M from the fabric vs IDR 20M from the showcase (IDR 4M × 5 years). The
            showcase would return IDR 2M more in total — so it looked like the better investment.
            She was about to choose the showcase when a business school friend visited and asked:
            "Fitri, but how long does each option take? IDR 18M in one year vs IDR 20M over
            five years — those are very different things." That conversation introduced Fitri
            to two concepts that completely changed her ranking of the options.
          </p>
          <div className="highlight-box">
            <strong>What Are IRR and MOIC?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>MOIC (Multiple on Invested Capital)</strong> is the simplest return metric:
              total cash received divided by capital invested. A 2× MOIC means you received twice
              what you put in. MOIC answers "how many times did I multiply my money?" but says
              nothing about how long it took.
              <br /><br />
              <strong>IRR (Internal Rate of Return)</strong> is the annualised rate of return on
              an investment — the discount rate at which the NPV of all cash flows equals zero.
              IRR answers "what was the compounded annual return?" and accounts for timing. Two
              investments with the same MOIC can have wildly different IRRs if one achieves the
              same multiple in half the time.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>MOIC — Multiple on Invested Capital</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>MOIC = Total Cash Received ÷ Initial Investment</strong>
              <br /><br />
              MOIC measures the gross return multiple — how many rupiah back for every rupiah in.
              A MOIC of 1.0× means you got your money back but earned nothing. A MOIC of 2.0×
              means you doubled your money. A MOIC below 1.0× means you lost capital.
              <br /><br />
              MOIC is easy to calculate and easy to communicate, which is why it is widely used
              in investment discussions. Its fatal limitation: it completely ignores time. A 2.0×
              MOIC in 1 year is dramatically better than a 2.0× MOIC in 10 years — but MOIC
              alone cannot tell you this.
            </p>
          </div>
          <div className="highlight-box">
            <strong>IRR — Internal Rate of Return</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>IRR = the discount rate r at which NPV = 0</strong>
              <br /><br />
              IRR is the annualised percentage return that an investment generates. It is found
              by solving: Sum of [CF_t ÷ (1 + r)^t] = Initial Investment, for the value of r.
              <br /><br />
              For simple single-period investments (invest now, receive in 1 year): IRR =
              (Cash Received − Investment) ÷ Investment. For multi-period investments, IRR
              requires trial-and-error or a spreadsheet solver, because the equation has no
              closed-form solution.
              <br /><br />
              IRR accounts for the time value of money: the same total return achieved faster
              produces a higher IRR. An investment with a high IRR earns more per year of
              capital at risk, which is why a 1-year investment often has a much higher IRR than
              a 5-year investment with the same MOIC.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Hurdle Rate: What IRR Must Beat</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              IRR is interpreted relative to the cost of capital — the hurdle rate. If the hurdle
              rate is 12% and an investment has an IRR of 28%, the investment earns 16 percentage
              points above what capital providers require — strong. If IRR is 13%, the investment
              barely clears the hurdle — proceed with caution. If IRR is 8%, the investment
              destroys value — do not proceed. IRR without a hurdle rate is a number without
              meaning.
            </p>
          </div>

          <p><strong>IRR vs MOIC — Reference Comparison:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>What It Measures</th>
                <th>Accounts for Time?</th>
                <th>Best Used For</th>
                <th>Key Limitation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>MOIC</strong></td>
                <td>Cash multiple (how many × your money back)</td>
                <td>No</td>
                <td>Quick comparison; communicating scale of return</td>
                <td>Ignores how long it took — misleading across different time horizons</td>
              </tr>
              <tr>
                <td><strong>IRR</strong></td>
                <td>Annualised compound return (%/year)</td>
                <td>Yes</td>
                <td>Comparing investments of different durations; ranking by efficiency of capital</td>
                <td>Requires trial-and-error; can be misleading for non-conventional cash flow patterns</td>
              </tr>
              <tr>
                <td><strong>NPV</strong></td>
                <td>Absolute value created (IDR)</td>
                <td>Yes</td>
                <td>Deciding whether to invest; ranking investments of different sizes</td>
                <td>Requires choosing a discount rate; does not measure rate of return</td>
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
            <strong>Mistake 1 — Ranking Investments by MOIC Alone Without Considering Time</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Fitri's initial ranking — showcase (1.67× MOIC) over fabric (1.50× MOIC) — is this
              mistake. She compared total cash received without asking how long each took. A 1.50×
              MOIC in 1 year corresponds to a 50% annual IRR. A 1.67× MOIC in 5 years corresponds
              to only ~11% IRR. Fitri's "better" option (showcase) generates less than a quarter of
              the annual return of her "worse" option (fabric). Any ranking that uses MOIC without
              time is potentially inverted. Always follow up MOIC with either IRR or the time
              period it was achieved over.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Confusing IRR with Annual Profit</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A beginner might interpret a 20% IRR on a IDR 12M investment as "I earn IDR 2.4M
              per year." That is not what IRR means. IRR is a compounded rate: it assumes that
              each year's returns are reinvested at the same rate. The actual cash flows may be
              very different from a flat annual payment. For Fitri's showcase (IRR ≈ 20%), the
              IDR 4M annual payment does happen to closely approximate the intuition — but for
              more complex cash flow patterns (irregular timing, lump-sum returns), IRR and
              "annual profit" can diverge significantly.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Using IRR to Compare Investments of Different Sizes Without NPV</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Suppose Fitri had a third option: invest IDR 1,000,000 in a short-term market stall
              for two weeks, earning IDR 1,200,000 back. That is a 20% return in 2 weeks —
              annualised IRR above 500%. Does that mean Fitri should put all IDR 12M into one-week
              market stalls instead of the fabric purchase? Not if she cannot scale the opportunity.
              IRR measures efficiency of capital, not scale of value creation. A 500% IRR on IDR
              1M is IDR 5M of gain. A 50% IRR on IDR 12M is IDR 6M of gain — more valuable in
              absolute terms. Use NPV to compare absolute value; use IRR to compare efficiency
              and rank smaller decisions by return quality.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Ibu Fitri's Two Investments</h2>
        <div className="content">
          <div className="calculation">
{`Ibu Fitri's Investment Comparison
Capital available: IDR 12,000,000
Hurdle rate: 12% per year

─── OPTION A — Bulk Batik Fabric Purchase ───
Investment (Year 0):   IDR  12,000,000
Cash received (Year 1): IDR 18,000,000  (sell at peak season)
Holding period:         1 year

MOIC:
  IDR 18,000,000 ÷ IDR 12,000,000  =  1.50×

IRR (single-period, direct calculation):
  IRR  =  (IDR 18M − IDR 12M) ÷ IDR 12M
       =  IDR 6,000,000 ÷ IDR 12,000,000
       =  50.0% per year

NPV at 12%:
  PV of Year 1 receipt:  IDR 18,000,000 ÷ 1.12  =  IDR 16,071,429
  Less investment:                                   IDR 12,000,000
  ──────────────────────────────────────────────
  NPV (Option A):                              +IDR  4,071,429

─── OPTION B — Custom Display Showcase ───
Investment (Year 0):              IDR  12,000,000
Annual incremental CF (Years 1–5): IDR   4,000,000
Holding period:                   5 years
Total cash received:              IDR  20,000,000

MOIC:
  IDR 20,000,000 ÷ IDR 12,000,000  =  1.67×  ← looks better than A!

IRR (multi-period, trial and error):
  Solve: 12M = 4M × PV_annuity(r, 5)
  Annuity factor needed: 12M ÷ 4M = 3.000

  At 20%: (1 − 1/1.20^5) ÷ 0.20 = (1 − 0.4019) ÷ 0.20 = 2.991  ← very close!
  IRR (Option B) ≈ 20%  (barely above 20%)

NPV at 12%:
  PV annuity factors: 0.8929 + 0.7972 + 0.7118 + 0.6355 + 0.5674 = 3.6048
  PV of CFs: IDR 4,000,000 × 3.6048  =  IDR 14,419,200
  Less investment:                        IDR 12,000,000
  ──────────────────────────────────────────────────────
  NPV (Option B):                    +IDR  2,419,200

─── SIDE-BY-SIDE COMPARISON ───
                       Option A        Option B
  Investment:         IDR 12,000,000  IDR 12,000,000
  Total cash in:      IDR 18,000,000  IDR 20,000,000
  Holding period:     1 year          5 years
  MOIC:               1.50×           1.67×  ← B wins
  IRR:                50.0%           ~20%   ← A wins by far
  NPV at 12%:         +IDR 4,071,429  +IDR 2,419,200  ← A wins

Conclusion: MOIC ranks B above A, but IRR and NPV both rank
A above B. Option A generates nearly 2.5× more annualised
return and IDR 1.65M more economic value than Option B.
Fitri should buy the fabric batch, not the showcase.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Why the metrics disagree — the time factor explained:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Insight</th>
                <th>Option A (Fabric)</th>
                <th>Option B (Showcase)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time to return capital</td>
                <td>1 year</td>
                <td>3 years (at IDR 4M/yr)</td>
              </tr>
              <tr>
                <td>What MOIC ignores</td>
                <td>IDR 12M is free again in Year 1 — can be reinvested</td>
                <td>IDR 12M is locked in for 5 years</td>
              </tr>
              <tr>
                <td>IRR annualises this</td>
                <td>50% per year — very high</td>
                <td>~20% per year — decent but much lower</td>
              </tr>
              <tr>
                <td>NPV captures this</td>
                <td>+IDR 4.07M (higher absolute value creation)</td>
                <td>+IDR 2.42M (lower, because distant cash flows discount heavily)</td>
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
            <strong>Case 09 — Pak Hendro's Three-Scenario Return Profile</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In Case 09, Sari calculated IRR and MOIC for all three scenarios of Pak Hendro's
              IDR 190,000,000 investment in frozen food production capacity.
              <br /><br />
              In the base case (IDR 72,000,000 per year for 5 years plus IDR 25,000,000 residual),
              the MOIC was <strong>2.03×</strong> — Pak Hendro would receive back about twice what
              he invested in nominal cash. But the IRR was approximately <strong>28%</strong> per
              year, versus a cost of capital of 15%. That 13-percentage-point spread above the
              hurdle rate represents real economic value created.
              <br /><br />
              The contrast was sharpest in the pessimistic scenario: MOIC of just 0.63× (a capital
              loss — Hendro gets back less than he put in) and a negative IRR. The optimistic
              scenario showed 3.66× MOIC and approximately 65% IRR. The range from -IRR to +65%
              illustrates exactly why MOIC and IRR must always be paired with scenarios — any
              single-point estimate hides the distribution of possible outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Always State the Time Horizon Alongside MOIC</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              "We achieved a 2× MOIC" is incomplete information. "We achieved 2× MOIC in 18
              months" is meaningful — it implies a roughly 33% annualised return. "2× MOIC in
              6 years" implies roughly 12% annualised return. The same MOIC number represents
              dramatically different quality of investment depending on how long it took. Any time
              you hear or report a MOIC, immediately ask or state the time period. Without it,
              the number is decorative, not analytical.
            </p>
          </div>
          <div className="highlight-box">
            <strong>For Multi-Period Investments, Calculate IRR with a Table or Trial-and-Error</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              For single-period investments (invest now, receive in 1 year), IRR = (Return −
              Investment) ÷ Investment. For multi-period investments, try discount rates in steps
              of 5% until you find the two rates that bracket zero NPV, then narrow in. Most
              smartphones have a spreadsheet app that can solve IRR directly. In practice, you
              will often use software — but understanding that IRR is "the discount rate where NPV
              = 0" lets you check the result makes sense and catch errors before acting on them.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Use IRR to Rank, NPV to Decide</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When you have multiple investment options, rank them by IRR to see which generates
              the highest return per unit of time. But use NPV to make the final decision,
              especially when investment sizes differ. A 50% IRR on IDR 500,000 and a 30% IRR on
              IDR 20,000,000 rank differently by IRR but very differently by absolute value
              creation. For a business with limited capital and many options, start with IRR to
              filter, finish with NPV to decide.
            </p>
          </div>
          <div className="highlight-box">
            <strong>MOIC Below 1× Is a Capital Loss — Name It Clearly</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A MOIC of 0.8× sounds almost neutral. But it means the investor received back only
              80 rupiah for every 100 rupiah invested — a 20% loss of capital. In the pessimistic
              scenario of Case 09, Pak Hendro's MOIC was 0.63× — he would have received back only
              IDR 120,000,000 on a IDR 190,000,000 investment, losing IDR 70,000,000. When
              reporting or reading a MOIC below 1×, translate it immediately into absolute capital
              loss: MOIC × Investment − Investment. That number is the IDR amount at stake if the
              downside scenario occurs.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreC3
