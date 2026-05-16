const PreC2 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module C2</span>
        <h1>NPV &amp; Discounted Cash Flow</h1>
        <div className="case-meta">
          Module C: Value Over Time &bull; How to translate a stream of future cash flows into a single present-day verdict — and use it to say yes or no to an investment
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Pak Dimas Wahyudi</strong> (35) runs <em>Dimas Furniture Restore</em> in
            Medan — a small workshop that strips, sands, refinishes, and resells old wooden
            furniture sourced from estate sales and online listings. He employs two assistants
            and handles the finishing work himself. Monthly revenue is around IDR 15,000,000,
            mostly from individual buyers and a few small interior design studios that outsource
            restoration to him.
          </p>
          <p>
            A supplier offered him a professional sandblasting machine for IDR 40,000,000. The
            machine would dramatically speed up the stripping process — currently the slowest and
            most labour-intensive step — allowing Dimas to take on three times more jobs per month
            without adding staff. He estimated the machine would generate an additional
            IDR 15,000,000 per year in incremental profit for at least four years, after which
            it would need replacing. There would also be a small residual: he could sell the
            worn-out machine for scrap and parts for approximately IDR 2,000,000 at the end of
            Year 4.
          </p>
          <p>
            Dimas did a quick calculation: IDR 15M per year for 4 years is IDR 60M, plus IDR 2M
            residual = IDR 62M total. Invested IDR 40M. "Profit" = IDR 22M. That looked good. He
            was ready to buy. But his bookkeeper — a retired accountant named <strong>Pak Hendra</strong>
            — gently pushed back: "Dimas, that IDR 15 million you earn in Year 4 is not worth the
            same as IDR 15 million in hand today. You're comparing money from different points in
            time without adjusting for time." Pak Hendra pulled out a notebook and taught Dimas
            about discounted cash flow analysis over lunch.
          </p>
          <div className="highlight-box">
            <strong>What Are NPV and DCF?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Discounted Cash Flow (DCF)</strong> is the process of translating each
              future cash flow into its present-day equivalent by dividing it by a discount
              factor — (1 + r)^t — where r is the required rate of return and t is the year.
              <br /><br />
              <strong>Net Present Value (NPV)</strong> is the result of DCF applied to an
              investment decision: the sum of all discounted future cash flows, minus the initial
              investment cost. A positive NPV means the investment creates value above the
              required return. A negative NPV means it destroys value — the investment does not
              earn enough to justify the capital and risk.
              <br /><br />
              <em>Formula:</em> NPV = Σ [CF_t ÷ (1 + r)^t] − Initial Investment
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Discount Factor</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Discount Factor for Year t = 1 ÷ (1 + r)^t</strong>
              <br /><br />
              The discount factor converts a future amount into its present-day equivalent. At
              12% per year: Year 1 factor = 0.8929, Year 2 = 0.7972, Year 3 = 0.7118,
              Year 4 = 0.6355. Each year, the factor shrinks — money further in the future is
              worth progressively less today. Multiplying any future cash flow by the relevant
              discount factor gives its Present Value.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Net Present Value (NPV)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>NPV = Sum of (CF_t × Discount Factor_t) − Initial Investment</strong>
              <br /><br />
              NPV is the total present value of all future cash flows an investment produces,
              minus the cost of making it. A positive NPV means the investment earns more than
              the discount rate — it creates value. A negative NPV means it earns less — it
              destroys value. NPV = 0 means the investment earns exactly the discount rate,
              no more, no less.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Discount Rate (Hurdle Rate)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The discount rate in NPV analysis is the <em>minimum acceptable rate of return</em>
              — also called the hurdle rate. For a small business owner borrowing at 12%, any
              investment must at minimum earn 12% per year just to cover financing costs. Anything
              above that creates real value. Anything below destroys it. Setting the hurdle rate
              correctly is critical: too low, and you approve investments that drain value; too
              high, and you reject investments that would genuinely grow the business.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Residual Value (Terminal Value)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At the end of the investment horizon, assets often retain some value — scrap value,
              resale value, or the value of the ongoing business. This residual is a cash inflow
              in the final year and must be discounted like any other future cash flow. Omitting
              it understates the investment's total return. Inflating it distorts the analysis
              by pushing value to the end where it appears most certain but is actually hardest
              to predict.
            </p>
          </div>

          <p><strong>NPV Decision Rules:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>NPV Result</th>
                <th>Meaning</th>
                <th>Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>NPV &gt; 0</strong></td>
                <td>Investment earns more than the hurdle rate</td>
                <td>Invest — it creates value</td>
              </tr>
              <tr>
                <td><strong>NPV = 0</strong></td>
                <td>Investment earns exactly the hurdle rate</td>
                <td>Indifferent — no value created or destroyed</td>
              </tr>
              <tr>
                <td><strong>NPV &lt; 0</strong></td>
                <td>Investment earns less than the hurdle rate</td>
                <td>Do not invest — it destroys value</td>
              </tr>
              <tr>
                <td><strong>NPV barely &gt; 0</strong></td>
                <td>Investment passes the hurdle, but margin is thin</td>
                <td>Investigate assumptions — small errors could flip the verdict</td>
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
            <strong>Mistake 1 — Summing Nominal Cash Flows Instead of Discounting</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dimas's original calculation: IDR 15M × 4 years + IDR 2M residual = IDR 62M total
              inflows. Subtract the IDR 40M investment = IDR 22M "profit." This ignores TVM.
              The correct discounted total is IDR 46,832,000 — making the true economic gain
              only IDR 6,832,000. The nominal approach overstated value creation by
              IDR 15,168,000 — more than two years of additional profit at current volume.
              For investments with cash flows spread over multiple years, summing nominals always
              overstates value creation. The overstatement grows with time horizon and discount rate.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Using a Discount Rate That Is Too Low</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Some beginners discount at the general inflation rate (4–5%) rather than their actual
              cost of capital. At 5%: PV of Dimas's cash flows ≈ IDR 54,100,000 → NPV ≈
              IDR 14,100,000. At his actual 12% cost of capital: NPV = IDR 6,832,000. Using 5%
              makes the investment look twice as attractive as it truly is. If Dimas borrows at
              12% to finance this machine and only earns a 5%-discounted "return," he is losing
              ground on his debt every year. The discount rate must reflect the actual cost of
              the capital being deployed — not an arbitrary or convenient number.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Using Total Revenue Instead of Incremental Cash Flows</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              NPV measures value creation from the <em>marginal</em> investment. The cash flows
              that go into the model must be the incremental cash flows — the difference between
              what happens with the investment and what happens without it. A beginner's mistake
              is to use total business revenue in the model, not the increment. If Dimas would
              earn IDR 15M per month with or without the machine, including that IDR 15M in the
              DCF model attributes existing revenue to the new investment. Only the IDR 15M per
              year of <em>additional</em> profit that the machine enables belongs in the model.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Pak Dimas's Sandblasting Machine</h2>
        <div className="content">
          <div className="calculation">
{`Pak Dimas's Sandblasting Machine — DCF & NPV Analysis

Investment cost:                          IDR 40,000,000
Incremental annual cash flow (Years 1–4): IDR 15,000,000
Residual value (Year 4):                  IDR  2,000,000
Discount rate:                            12% per year

─── DISCOUNT FACTORS ───
  Year 1: 1 ÷ (1.12)^1  =  1 ÷ 1.1200  =  0.8929
  Year 2: 1 ÷ (1.12)^2  =  1 ÷ 1.2544  =  0.7972
  Year 3: 1 ÷ (1.12)^3  =  1 ÷ 1.4049  =  0.7118
  Year 4: 1 ÷ (1.12)^4  =  1 ÷ 1.5735  =  0.6355

─── DISCOUNTED CASH FLOWS ───
  Year 1:  IDR 15,000,000 × 0.8929  =  IDR 13,393,500
  Year 2:  IDR 15,000,000 × 0.7972  =  IDR 11,958,000
  Year 3:  IDR 15,000,000 × 0.7118  =  IDR 10,677,000
  Year 4:  IDR 15,000,000 × 0.6355  =  IDR  9,532,500
  Year 4:  IDR  2,000,000 × 0.6355  =  IDR  1,271,000  ← residual
  ─────────────────────────────────────────────────────
  Total Present Value of Inflows:        IDR 46,832,000

─── NET PRESENT VALUE ───
  Total PV of inflows:                   IDR 46,832,000
  Less: initial investment:              IDR 40,000,000
  ─────────────────────────────────────────────────────
  NPV:                              +IDR  6,832,000

  Verdict: Positive NPV. The machine creates IDR 6.8M of
  economic value above the 12% hurdle rate. Invest.

─── WHAT DIMAS THOUGHT (nominal, no discounting) ───
  Sum of all future cash: (4 × IDR 15M) + IDR 2M  =  IDR 62,000,000
  Less investment:                                    IDR 40,000,000
  Apparent "profit":                                  IDR 22,000,000

─── WHAT NPV ACTUALLY SHOWS ───
  Present value of those same cash flows:             IDR 46,832,000
  Less investment:                                    IDR 40,000,000
  True economic value created:                        IDR  6,832,000

  Overstatement from ignoring TVM:                    IDR 15,168,000
  (The nominal profit of IDR 22M overstates reality by 3.2×)`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Impact of different discount rates on the same investment:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Discount Rate</th>
                <th>Total PV of Inflows</th>
                <th>NPV</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0% (no discounting)</td>
                <td>IDR 62,000,000</td>
                <td>+IDR 22,000,000</td>
                <td>Invest — very attractive</td>
              </tr>
              <tr>
                <td>5%</td>
                <td>IDR 54,100,000</td>
                <td>+IDR 14,100,000</td>
                <td>Invest — attractive</td>
              </tr>
              <tr>
                <td>12% (correct hurdle rate)</td>
                <td>IDR 46,832,000</td>
                <td>+IDR 6,832,000</td>
                <td>Invest — passes hurdle, modest margin</td>
              </tr>
              <tr>
                <td>18%</td>
                <td>IDR 41,900,000</td>
                <td>+IDR 1,900,000</td>
                <td>Barely passes — thin margin, review assumptions</td>
              </tr>
              <tr>
                <td>22%</td>
                <td>IDR 38,800,000</td>
                <td>-IDR 1,200,000</td>
                <td>Do not invest — destroys value at this hurdle</td>
              </tr>
            </tbody>
          </table>
          <p>
            The table illustrates a critical property of NPV: the discount rate drives the verdict.
            The same investment that looks like IDR 22M profit at 0% becomes a IDR 1.2M loss at
            22%. The question "should Dimas buy the machine?" does not have a universal answer —
            it only has an answer relative to his cost of capital.
          </p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 09 — Pak Hendro's Platform Deal (NPV as the Central Decision Tool)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In Case 09, Pak Hendro faced a IDR 190,000,000 investment in production capacity
              to fulfill a platform supply contract. His sister Sari built the full DCF model
              across three scenarios, each discounted at 15% per year.
              <br /><br />
              In the base case — IDR 72,000,000 of incremental annual cash flow for 5 years plus
              a IDR 25,000,000 residual — the year-by-year DCF calculation produced a total
              present value of IDR 253,788,400. Subtracting the IDR 190,000,000 investment gave
              an NPV of <strong>+IDR 63,788,400</strong>. The investment passed the 15% hurdle rate
              and created real economic value. Without DCF, Pak Hendro's nominal calculation would
              have suggested a IDR 170,000,000 "profit" — nearly three times the actual NPV.
              The gap exists entirely because future cash flows are not worth their face value
              in today's money.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>A Positive NPV Is a Pass, Not a Guarantee</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              NPV tells you that, <em>if your assumptions are correct</em>, the investment creates
              value. It does not tell you that your assumptions are correct. A positive NPV built
              on optimistic revenue projections is just as dangerous as a negative NPV built on
              overly pessimistic ones. After calculating NPV, always ask: how much do my key
              assumptions have to be wrong before NPV turns negative? If the answer is "not much,"
              the analysis warrants more caution than the positive number suggests.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Only Incremental Cash Flows Belong in the Model</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The cardinal rule of DCF: model the cash flows that would not exist without the
              investment. Revenue and costs that continue regardless of whether you make the
              investment are not incremental — they are irrelevant to the NPV calculation. If a
              machine would replace one manual worker (saving IDR 3M/month) and enable one new
              service line (generating IDR 5M/month), the incremental CF is IDR 8M/month — not
              total business revenue. Mixing incremental and total cash flows is the most common
              modelling error in beginner investment analyses.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Sensitivity Analysis Is Not Optional</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Run the NPV at three different assumptions for your most uncertain input — usually
              volume or pricing. If NPV stays positive across all three, the investment is robust.
              If NPV flips negative under a realistic downside assumption, you are taking more risk
              than the base case implies. The sensitivity table Pak Dimas could have built — NPV
              at 10%, 15%, and 20% below expected volume — would have told him exactly how much
              cushion he had before the investment stopped making sense.
            </p>
          </div>
          <div className="highlight-box">
            <strong>NPV and Payback Period Answer Different Questions — Use Both</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              NPV tells you how much value an investment creates. Payback period tells you how
              quickly you recover your capital — a measure of risk exposure. An investment with
              a IDR 50M positive NPV but a 6-year payback may be excellent on value but dangerous
              if the business environment changes in Year 3. An investment with IDR 5M NPV and
              8-month payback may create less value but carry almost no risk of loss. In practice,
              use NPV to rank investments by value creation and payback period to filter by risk.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreC2
