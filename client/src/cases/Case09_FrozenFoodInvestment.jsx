const Case09 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 09</span>
        <h1>Is the Platform Deal Worth It? A Frozen Food Producer Runs the Numbers</h1>
        <div className="case-meta">
          Industry: Food Production (UMKM) &bull; Level: Beginner / Small Business — NPV, DCF, IRR &amp; Scenario Analysis
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Pak Hendro Pratama</strong> (41) has been making frozen bakso (meatballs) and
            siomay (steamed dumplings) in his small production kitchen in Malang, East Java, for
            nine years. His business — <em>Hendro Frozen Food</em> — occupies a 60 m² rented space
            on the edge of Pasar Besar Malang's supply corridor, where he employs four production
            workers and runs two shifts per day. Monthly revenue sits at a stable
            <strong> IDR 38,000,000</strong>, almost all of it from warung owners, wet market stalls,
            and a handful of small cafeterias who buy by the kilogram and pay cash on delivery.
          </p>
          <p>
            In January 2026, a sales representative from <strong>Klikfresh</strong> — a regional
            cold-chain e-commerce platform connecting home cooks and small restaurants with frozen
            food suppliers across East Java — visited Hendro's kitchen and presented him with a
            supplier partnership offer. Klikfresh promised a committed minimum purchase of
            <strong> IDR 28,000,000 per month</strong>, paid 30 days after delivery, for a 24-month
            contract with a renewable option. In exchange, Hendro would need to triple his cold
            storage capacity, automate his forming process to ensure consistent portion sizes, and
            obtain BPOM (Food and Drug Authority) registration for his products.
          </p>
          <p>
            That requirement translated into a capital investment of
            <strong> IDR 190,000,000</strong> — five times Hendro's monthly profit, and IDR 140
            million more than he has in savings. He would need a bank loan. The decision felt
            enormous: say yes and take on significant debt, or say no and stay where he is. Hendro
            is not the kind of person who agonises — he has survived nine years in the food business
            by moving fast. But his younger sister <strong>Sari Pratama</strong> (27), who works as
            a credit analyst at Bank Jatim in Malang, happened to be visiting during Lebaran and
            heard the story. She immediately said: "Kak, before you decide anything, let me show
            you how to actually value this thing."
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pak Hendro's instinct was to say yes. IDR 28,000,000 per month in extra revenue felt
              like an obvious win. Sari's first question cut to the heart of the problem:
              <em> "Kak, you're comparing IDR 190 million today with revenue that arrives over five
              years. Those are not the same thing. Money you receive in Year 5 is worth less than
              money you receive today. Do you know how much less?"</em>
              <br /><br />
              Hendro did not. He had been thinking in nominal totals — "IDR 28M per month times
              60 months equals IDR 1.68 billion in new revenue" — without accounting for the time
              value of money, the uncertainty of whether the platform would actually deliver those
              volumes, or the concentration risk of having one buyer represent most of his new
              revenue. This case is the analysis Sari ran that weekend.
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Pak Hendro Pratama (owner):</strong> Practical and action-oriented. He trusts
              the Klikfresh representative and likes the idea of having one large institutional buyer
              instead of chasing dozens of small warungs. His emotional pull is toward saying yes,
              but Sari's warning has made him cautious enough to slow down and work through the
              numbers first.
            </li>
            <li>
              <strong>Sari Pratama (younger sister, credit analyst):</strong> She evaluates business
              loan applications for a living — she has seen what happens when small business owners
              take on debt for investments that look compelling on the surface but collapse when
              assumptions are tested. Her role in this case is to introduce analytical tools Pak
              Hendro has never had reason to use before.
            </li>
            <li>
              <strong>Bu Lastri (55, production manager):</strong> Has worked with Hendro for seven
              years and knows every corner of the production process. She is quietly worried about
              what tripling volume will mean for quality control and whether the new machinery will
              require skills her team does not yet have.
            </li>
          </ul>
          <p>
            This is not a complicated corporate transaction. It is a family business owner — smart,
            experienced in his craft, but never formally trained in finance — trying to make the
            biggest capital decision of his life with limited tools. Sari's goal was not to produce
            a perfect model but to give Hendro a framework that prevents him from making an
            IDR 190 million mistake based on a gut feeling.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Decision, Three Hidden Layers</h2>
        <div className="content">
          <p>
            On the surface, the problem is simple: should Pak Hendro invest IDR 190 million to
            capture a contract worth IDR 28 million per month? But evaluating this decision
            correctly requires unwrapping three layers of complexity that are invisible to someone
            who thinks only in nominal numbers.
          </p>
          <div className="highlight-box">
            <strong>Layer 1 — The Time Value Problem (≈40% of the analytical challenge)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pak Hendro pays IDR 190,000,000 today — a single, certain, immediate outflow. The
              benefits arrive over five years — gradual, uncertain, and in the future. A rupiah
              received today is worth more than a rupiah received one year from now, because
              today's rupiah can be invested, lent, or used to pay down interest-bearing debt.
              When you compare an investment made today against returns spread over years, you must
              translate those future returns into their equivalent value in today's money. Failing
              to do this leads to systematically overvaluing long-horizon investments — which is
              exactly what Hendro's initial "IDR 1.68 billion total revenue" calculation did.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Layer 2 — The Uncertainty Problem (≈35% of the analytical challenge)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The IDR 28 million per month figure is a <em>contract minimum</em>, not a guarantee
              of what the platform will actually order. The Klikfresh representative mentioned that
              "most suppliers in the Surabaya corridor end up delivering 1.5× to 2× the contract
              minimum within eighteen months." This may be true — or it may be optimistic sales
              talk. There is also a pessimistic scenario: platforms can lose traction, change
              supplier terms, or reduce minimum commitments. Hendro needs a framework that forces
              him to think about multiple possible futures, not just the one the salesperson
              described.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Layer 3 — The Concentration Risk Problem (≈25% of the analytical challenge)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If the platform contract goes ahead, Klikfresh will represent roughly 42% of Hendro's
              total monthly revenue (IDR 28 million of IDR 66 million). If the platform exits the
              market, reduces orders, or switches to another supplier, Hendro would still owe IDR
              140 million in bank debt for machinery purchased specifically for that one buyer. The
              investment is not just a bet on frozen food as a business — it is a bet on one buyer's
              continued commitment. This concentration dynamic does not show up in any single-scenario
              analysis.
            </p>
          </div>
          <p>
            Together, these three layers explain why "it looks profitable" is the beginning of an
            investment analysis, not the conclusion. An important insight that surprises most
            beginners: the real question is not whether the investment will generate more revenue.
            Almost certainly it will. The question is whether the <em>present value</em> of those
            incremental cash flows, weighted by the probability that each scenario occurs, exceeds
            the cost of the investment today. That is a fundamentally different question — and it
            requires a different set of tools.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When the uncertainty of future cash flows and the time value of money are both
              accounted for, does the IDR 190,000,000 investment in production capacity create
              more value than it costs?
            </p>
          </div>
          <p><strong>Three sub-questions that must be answered first:</strong></p>
          <ol>
            <li>
              <strong>NPV:</strong> What is the present value of incremental cash flows across
              multiple scenarios, discounted at the appropriate required rate of return? Is it
              greater than IDR 190,000,000?
            </li>
            <li>
              <strong>IRR &amp; MOIC:</strong> What annualised rate of return does this investment
              generate under each scenario, and what multiple of invested capital does it return
              over five years?
            </li>
            <li>
              <strong>Expected value:</strong> What is the probability-weighted NPV across
              optimistic, base, and pessimistic scenarios — and at what pessimistic probability
              does the deal stop making sense?
            </li>
          </ol>
          <p>
            <strong>What success looks like:</strong> Sari and Hendro walk into the bank — and
            into Klikfresh's contract negotiation — with a clear answer: the deal creates value at
            an expected NPV of IDR X, generates an IRR of Y%, and the investment only destroys
            value if the pessimistic scenario has a probability higher than Z%. That replaces gut
            feel with a defensible analytical position.
          </p>
          <p>
            <strong>Analytical approach:</strong> Build a five-year discounted cash flow (DCF)
            model with three scenarios. Assign probabilities to each scenario. Calculate NPV, IRR,
            and MOIC per scenario. Derive the probability-weighted expected NPV. Identify what
            conditions would change the decision.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            A capital investment decision with multi-year cash flows and significant uncertainty
            calls for a framework that handles both time and risk simultaneously. Three alternatives
            were considered before selecting the primary approach.
          </p>
          <div className="highlight-box">
            <strong>Primary: NPV + Discounted Cash Flow (DCF) + Scenario Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              NPV asks: "What are all future incremental cash flows worth in today's money, minus
              the cost of investment?" A positive NPV means the investment creates value above the
              required rate of return; negative NPV means it destroys value.
              <br /><br />
              <em>Formula:</em> NPV = Σ [CF_t ÷ (1 + r)^t] − Initial Investment
              <br /><br />
              DCF is the mechanics of NPV: each year's cash flow is divided by (1 + r)^t, where
              r is the discount rate and t is the year number. Scenario analysis layers in multiple
              possible outcomes with assigned probabilities to produce an expected NPV — a
              probability-weighted view of value creation across possible futures.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Framework</th>
                <th>What It Answers</th>
                <th>Why Not Primary Here</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Simple ROI / Payback Period</strong></td>
                <td>How many months to recover the investment in nominal terms</td>
                <td>Ignores time value of money. IDR 72M received in Year 5 is treated identically to IDR 72M in Year 1 — which systematically overstates the investment's true value</td>
              </tr>
              <tr>
                <td><strong>Break-Even Analysis</strong></td>
                <td>What revenue level covers fixed + variable costs each month</td>
                <td>Designed for operational questions (how many units to cover costs?), not multi-year capital allocation decisions that require comparing a today cost against a stream of future returns</td>
              </tr>
              <tr>
                <td><strong>Cash Flow Projection Only</strong></td>
                <td>Whether the business will have positive monthly cash after debt repayment</td>
                <td>A necessary input, but not a decision framework. It shows whether Hendro can survive the investment — not whether the investment creates value above the cost of capital</td>
              </tr>
              <tr>
                <td><strong>NPV + DCF + Scenario Analysis ✓ Selected</strong></td>
                <td>Whether the present value of future incremental cash flows, probability-weighted across scenarios, exceeds the investment cost at the required rate of return</td>
                <td>—</td>
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
            Pak Hendro's bookkeeper maintains a simple monthly profit-and-loss ledger. Sari pulled
            six months of data to establish a reliable baseline, then added the platform contract
            terms and equipment quotes received from three suppliers.
          </p>
          <p><strong>Current monthly operating data (6-month average):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Monthly Amount</th>
                <th>% of Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revenue (warung + pasar + cafeteria)</td>
                <td>IDR 38,000,000</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>COGS — raw materials (soy, meat, spices)</td>
                <td>IDR 19,000,000</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>COGS — packaging + cold storage costs</td>
                <td>IDR 4,560,000</td>
                <td>12%</td>
              </tr>
              <tr>
                <td><strong>Total COGS</strong></td>
                <td><strong>IDR 23,560,000</strong></td>
                <td><strong>62%</strong></td>
              </tr>
              <tr>
                <td>Labor (4 production workers)</td>
                <td>IDR 4,800,000</td>
                <td>13%</td>
              </tr>
              <tr>
                <td>Utilities (electricity, gas, water)</td>
                <td>IDR 1,600,000</td>
                <td>4%</td>
              </tr>
              <tr>
                <td>Transport + delivery</td>
                <td>IDR 900,000</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>Other operating expenses</td>
                <td>IDR 140,000</td>
                <td>0%</td>
              </tr>
              <tr>
                <td><strong>Total Operating Expenses</strong></td>
                <td><strong>IDR 7,440,000</strong></td>
                <td><strong>20%</strong></td>
              </tr>
              <tr>
                <td><strong>Monthly Net Profit</strong></td>
                <td><strong>IDR 7,000,000</strong></td>
                <td><strong>18%</strong></td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '24px' }}><strong>Investment breakdown (three supplier quotes averaged):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Blast freezer + cold room construction</td>
                <td>IDR 95,000,000</td>
                <td>15 m² insulated room + 1 ton/day blast freezing unit</td>
              </tr>
              <tr>
                <td>Automatic bakso forming machines (×2)</td>
                <td>IDR 65,000,000</td>
                <td>Replaces hand-rolling; ensures consistent 25g portions required by BPOM</td>
              </tr>
              <tr>
                <td>BPOM registration + facility upgrade</td>
                <td>IDR 30,000,000</td>
                <td>Certification consultant + wall tiling + drainage renovation</td>
              </tr>
              <tr>
                <td><strong>Total Investment</strong></td>
                <td><strong>IDR 190,000,000</strong></td>
                <td></td>
              </tr>
              <tr>
                <td>Hendro's own savings (down payment)</td>
                <td>IDR 50,000,000</td>
                <td></td>
              </tr>
              <tr>
                <td>KUR loan required</td>
                <td>IDR 140,000,000</td>
                <td>12% per year, 5-year term ≈ IDR 3,113,000/month</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '24px' }}><strong>Incremental monthly cash flows under three scenarios:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Optimistic</th>
                <th>Base Case</th>
                <th>Pessimistic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Additional monthly revenue</td>
                <td>IDR 48,000,000</td>
                <td>IDR 28,000,000</td>
                <td>IDR 14,000,000</td>
              </tr>
              <tr>
                <td>Additional COGS (60% of rev)</td>
                <td>IDR 28,800,000</td>
                <td>IDR 16,800,000</td>
                <td>IDR 8,400,000</td>
              </tr>
              <tr>
                <td>Additional labor + utilities</td>
                <td>IDR 8,000,000</td>
                <td>IDR 5,200,000</td>
                <td>IDR 4,000,000</td>
              </tr>
              <tr>
                <td><strong>Incremental monthly CF</strong></td>
                <td><strong>IDR 11,200,000</strong></td>
                <td><strong>IDR 6,000,000</strong></td>
                <td><strong>IDR 1,600,000</strong></td>
              </tr>
              <tr>
                <td><strong>Incremental annual CF</strong></td>
                <td><strong>IDR 134,000,000</strong></td>
                <td><strong>IDR 72,000,000</strong></td>
                <td><strong>IDR 19,000,000</strong></td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '16px' }}>
            <strong>Year 5 residual value:</strong> IDR 25,000,000 — the estimated resale value
            of the blast freezer and forming machines at the end of the five-year horizon.
          </p>
          <p>
            What the raw data shows: the business is healthy and consistently profitable at IDR 7
            million per month. The contract revenue seems to more than justify the investment on
            first glance. What the data hides: every cell in the incremental table is a
            projection, not a certainty. And the investment is paid in full today while the returns
            arrive monthly over five years — a timing asymmetry that simple revenue comparison
            completely ignores.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Step 1 — Define the Decision Correctly Before Touching the Numbers</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is a capital allocation decision, not a sales decision. The question is not
              "will this contract bring in more revenue?" — yes, almost certainly. The question is
              "does the present value of future incremental cash flows exceed the immediate cost
              of investment?" Framing it correctly prevents the most common beginner mistake:
              saying yes to anything that generates more revenue, regardless of whether the return
              justifies the risk and the cost of capital.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 2 — Map Every Cash Flow and Its Exact Timing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sari listed every cash movement with its timing. Year 0 (today): IDR 190M outflow —
              the investment. Years 1 through 5: incremental operating cash flows — the difference
              between what Hendro earns with the platform versus without it. Year 5 also includes
              an IDR 25M residual value (equipment resale). She noted that the KUR loan repayment
              is a financing cash flow, not an operating cash flow — it should not be subtracted
              from incremental operating CFs, because the discount rate already accounts for the
              cost of borrowing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 3 — Choose a Discount Rate That Reflects the True Cost of Capital</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sari set the discount rate at <strong>15%</strong> per year, reasoning as follows:
              the KUR loan costs 12% per year. Hendro's own savings, if not invested, would earn
              about 5% in a time deposit. But the investment also carries business risk — the
              platform could underdeliver, the market could soften, a machine could need
              unexpected repairs. A required return of 15% accounts for the blended financing cost
              and a modest risk premium. "If this investment can't justify 15% per year return,"
              Sari said, "it shouldn't be done at all."
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 4 — Discount Each Year's Cash Flow to Present Value</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Each year's incremental cash flow is divided by (1 + 0.15)^t, where t is the year
              number. This is the mechanical heart of DCF. Year 1's cash flows are divided by 1.15.
              Year 2's by 1.3225. Year 5's by 2.0114. The result: IDR 72 million earned at the
              end of Year 5 is worth only IDR 35,798,400 in today's money — roughly half its
              nominal value. Adding up all present values and subtracting the IDR 190M investment
              gives the Net Present Value. A positive NPV means the investment earns more than the
              15% hurdle rate and creates real economic value.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 5 — Build Three Scenarios, Assign Probabilities, Compute Expected NPV</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sari and Hendro defined three futures based on what they knew about Klikfresh's
              track record, the frozen food market in East Java, and Hendro's ability to find
              alternative buyers if needed.
              <br /><br />
              <strong>Optimistic (35% probability):</strong> Klikfresh performs as the rep
              suggested — volumes reach 1.7× the minimum within 18 months, and a second
              distributor signs on. Annual incremental CF: IDR 134,000,000.
              <br /><br />
              <strong>Base case (45% probability):</strong> Klikfresh delivers exactly the
              committed minimum. No new clients in the five-year window. Annual incremental
              CF: IDR 72,000,000.
              <br /><br />
              <strong>Pessimistic (20% probability):</strong> The platform scales back orders by
              50% of the minimum. Hendro cannot quickly replace the lost volume. Annual incremental
              CF: IDR 19,000,000.
              <br /><br />
              The probability-weighted expected NPV is the weighted average of the three scenario
              NPVs — the single most honest summary of this investment's expected value.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <div className="calculation">
{`Time Value of Money — Why IDR 72M in Year 5 ≠ IDR 72M Today
Discount rate: 15% per year

  Year 1 discount factor:  1 ÷ 1.15^1  =  1 ÷ 1.1500  =  0.8696
  Year 2 discount factor:  1 ÷ 1.15^2  =  1 ÷ 1.3225  =  0.7561
  Year 3 discount factor:  1 ÷ 1.15^3  =  1 ÷ 1.5209  =  0.6575
  Year 4 discount factor:  1 ÷ 1.15^4  =  1 ÷ 1.7490  =  0.5718
  Year 5 discount factor:  1 ÷ 1.15^5  =  1 ÷ 2.0114  =  0.4972

IDR 72,000,000 received at the end of each year — present value:
  Year 1:  IDR 72,000,000 × 0.8696  =  IDR  62,611,200
  Year 2:  IDR 72,000,000 × 0.7561  =  IDR  54,439,200
  Year 3:  IDR 72,000,000 × 0.6575  =  IDR  47,340,000
  Year 4:  IDR 72,000,000 × 0.5718  =  IDR  41,169,600
  Year 5:  IDR 72,000,000 × 0.4972  =  IDR  35,798,400
  ─────────────────────────────────────────────────────────
  Total PV of IDR 72M/year over 5 years:     IDR 241,358,400

  Pak Hendro's intuition:  IDR 72M × 5 yrs  =  IDR 360,000,000
  Correct present value (discounted):         IDR 241,358,400
  Overstatement from ignoring TVM:            IDR 118,641,600

  IDR 72M received in Year 5 is worth only IDR 35,798,400
  in today's money — not IDR 72,000,000.`}
          </div>

          <div className="calculation">
{`DCF Model — Base Case (45% probability)
Incremental annual operating CF:  IDR 72,000,000
Year 5 residual value (equipment): IDR 25,000,000

  Year 1:  IDR  72,000,000 × 0.8696  =  IDR  62,611,200
  Year 2:  IDR  72,000,000 × 0.7561  =  IDR  54,439,200
  Year 3:  IDR  72,000,000 × 0.6575  =  IDR  47,340,000
  Year 4:  IDR  72,000,000 × 0.5718  =  IDR  41,169,600
  Year 5:  IDR  72,000,000 × 0.4972  =  IDR  35,798,400
  Year 5:  IDR  25,000,000 × 0.4972  =  IDR  12,430,000  ← residual
  ──────────────────────────────────────────────────────────
  Total Present Value of Inflows:          IDR 253,788,400
  Less: Initial Investment                 IDR 190,000,000
  ──────────────────────────────────────────────────────────
  Net Present Value (Base Case):      +IDR  63,788,400

  At a 15% required return, the base case creates IDR 63.8M
  of economic value above and beyond the cost of capital.
  The investment passes the hurdle rate.`}
          </div>

          <div className="calculation">
{`DCF Model — Optimistic Case (35% probability)
Incremental annual operating CF: IDR 134,000,000

  Year 1:  IDR 134,000,000 × 0.8696  =  IDR 116,526,400
  Year 2:  IDR 134,000,000 × 0.7561  =  IDR 101,317,400
  Year 3:  IDR 134,000,000 × 0.6575  =  IDR  88,105,000
  Year 4:  IDR 134,000,000 × 0.5718  =  IDR  76,621,200
  Year 5:  IDR 134,000,000 × 0.4972  =  IDR  66,624,800
  Year 5:  IDR  25,000,000 × 0.4972  =  IDR  12,430,000  ← residual
  ──────────────────────────────────────────────────────────
  Total Present Value of Inflows:          IDR 461,624,800
  Less: Initial Investment                 IDR 190,000,000
  ──────────────────────────────────────────────────────────
  NPV (Optimistic):                   +IDR 271,624,800`}
          </div>

          <div className="calculation">
{`DCF Model — Pessimistic Case (20% probability)
Incremental annual operating CF: IDR 19,000,000

  Year 1:  IDR  19,000,000 × 0.8696  =  IDR  16,522,400
  Year 2:  IDR  19,000,000 × 0.7561  =  IDR  14,365,900
  Year 3:  IDR  19,000,000 × 0.6575  =  IDR  12,492,500
  Year 4:  IDR  19,000,000 × 0.5718  =  IDR  10,864,200
  Year 5:  IDR  19,000,000 × 0.4972  =  IDR   9,446,800
  Year 5:  IDR  25,000,000 × 0.4972  =  IDR  12,430,000  ← residual
  ──────────────────────────────────────────────────────────
  Total Present Value of Inflows:          IDR  76,121,800
  Less: Initial Investment                 IDR 190,000,000
  ──────────────────────────────────────────────────────────
  NPV (Pessimistic):                  -IDR 113,878,200

  The investment destroys IDR 113.9M of value in this
  scenario. Hendro spent IDR 190M and recovered only
  IDR 76.1M in present-value terms.`}
          </div>

          <div className="calculation">
{`Internal Rate of Return (IRR) — Base Case Approximation
IRR is the discount rate at which NPV = 0.
Testing different rates against the base case cash flows:

  At 15%:  NPV = +IDR  63,788,400  → positive (IRR is above 15%)
  At 25%:  NPV = +IDR  14,900,000  → positive (IRR is above 25%)
  At 28%:  NPV =    +IDR 1,000,000  → approx. zero
  At 30%:  NPV =   -IDR 11,000,000  → negative (IRR is below 30%)

  Base Case IRR ≈ 28%
  Cost of capital (hurdle rate):     15%
  Spread above hurdle:               13 percentage points

  A 28% IRR versus a 15% cost of capital means this investment
  generates 13 percentage points of excess return in the base
  case — providing a meaningful buffer against cost overruns
  or revenue shortfalls.`}
          </div>

          <div className="calculation">
{`MOIC (Multiple on Invested Capital) — All Scenarios
Formula: MOIC = Total Nominal Cash Received ÷ Initial Investment

  Optimistic:
    Cash received: (IDR 134M × 5 yrs) + IDR 25M  =  IDR 695,000,000
    MOIC: IDR 695M ÷ IDR 190M                     =  3.66×

  Base Case:
    Cash received: (IDR 72M × 5 yrs) + IDR 25M   =  IDR 385,000,000
    MOIC: IDR 385M ÷ IDR 190M                     =  2.03×

  Pessimistic:
    Cash received: (IDR 19M × 5 yrs) + IDR 25M   =  IDR 120,000,000
    MOIC: IDR 120M ÷ IDR 190M                     =  0.63×  ← capital loss

  Note: MOIC ignores the timing of cash flows. A 2.03× MOIC
  over 5 years is very different from 2.03× over 10 years.
  Always pair MOIC with IRR or NPV for a complete picture.`}
          </div>

          <div className="calculation">
{`Probability-Weighted Expected NPV
Formula: E[NPV] = Σ (probability × NPV_scenario)

  Optimistic  (35%):  0.35 × (+IDR 271,624,800)  =  +IDR  95,068,680
  Base Case   (45%):  0.45 × (+IDR  63,788,400)  =  +IDR  28,704,780
  Pessimistic (20%):  0.20 × (-IDR 113,878,200)  =  -IDR  22,775,640
  ────────────────────────────────────────────────────────────────────
  Expected (Probability-Weighted) NPV:            +IDR 100,997,820
                                               ≈  +IDR 101,000,000

  The investment is expected to create IDR 101M of value
  in today's money, even accounting for the 20% chance of a
  deeply negative outcome. On an expected-value basis, the
  deal makes sense — but the downside scenario is large enough
  to warrant active risk management.`}
          </div>

          <p style={{ marginTop: '24px' }}><strong>Summary of all scenarios:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Probability</th>
                <th>Annual CF</th>
                <th>NPV</th>
                <th>MOIC</th>
                <th>IRR (approx)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Optimistic</td>
                <td>35%</td>
                <td>IDR 134,000,000</td>
                <td>+IDR 271,600,000</td>
                <td>3.66×</td>
                <td>~65%</td>
              </tr>
              <tr>
                <td>Base Case</td>
                <td>45%</td>
                <td>IDR 72,000,000</td>
                <td>+IDR 63,800,000</td>
                <td>2.03×</td>
                <td>~28%</td>
              </tr>
              <tr>
                <td>Pessimistic</td>
                <td>20%</td>
                <td>IDR 19,000,000</td>
                <td>-IDR 113,900,000</td>
                <td>0.63×</td>
                <td>negative</td>
              </tr>
              <tr>
                <td><strong>Expected Value</strong></td>
                <td><strong>100%</strong></td>
                <td>—</td>
                <td><strong>+IDR 101,000,000</strong></td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — The Investment Passes on Expected Value, but the Base Case Alone Is Not Overwhelming</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The probability-weighted expected NPV of IDR 101 million is comfortably positive —
              the investment creates value on average across possible futures. But the base case
              alone (45% probability) produces only IDR 63.8 million of NPV, and the pessimistic
              case destroys IDR 113.9 million. Pak Hendro should not treat this as an obvious
              winner. The deal makes sense on expected value, but it requires that the base case is
              the most likely outcome — and that the pessimistic scenario, if it occurs, does not
              happen in Year 1 or 2 before any cash reserves have been built.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — The IRR of 28% Provides Real Margin Above the Hurdle Rate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A base case IRR of approximately 28% versus a cost of capital of 15% means the
              investment earns 13 percentage points of return above what Hendro's lenders and his
              own capital require. This is a meaningful buffer. It means cash flows could come in
              roughly 20% below the base case and the investment would still be NPV-positive at
              15%. That resilience is exactly what separates a robust investment from one that only
              works if every assumption is exactly right.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — The Pessimistic Scenario Must Be Managed, Not Simply Accepted</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A 20% probability of -IDR 113.9 million NPV means there is a one-in-five chance this
              investment destroys more than half the capital committed. If that scenario occurs,
              Hendro still owes IDR 140 million to the bank, has machinery that cannot easily be
              repurposed, and has a production footprint larger than his remaining business needs.
              The incremental cash flow of IDR 1.6 million per month in the pessimistic case does
              not even cover the monthly loan repayment of IDR 3.1 million — Hendro would need to
              fund the shortfall from his existing profits. The expected value analysis says invest,
              but it also says do everything possible to reduce the probability or severity of this
              outcome.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 (Counterintuitive) — The Nominal Revenue Figure Is Deeply Misleading</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pak Hendro's original mental model: "IDR 28M per month times 60 months equals IDR
              1.68 billion in new revenue." Even netting out COGS and operating costs: "IDR 72M
              per year times 5 years equals IDR 360M total — I only invested IDR 190M, so my
              profit is IDR 170M." Both calculations ignore the time value of money. The actual
              present value of IDR 72M per year for five years, discounted at 15%, is IDR 241
              million — not IDR 360 million. Adding the residual and subtracting the investment
              gives a true NPV of IDR 63.8 million — not IDR 170 million. TVM shrinks the
              apparent profit by more than 60%. This is not a technicality. It is the reason
              discounted cash flow analysis was invented.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Tier 1 — Do Before Signing Anything (This Week)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Push Klikfresh to convert the verbal commitment into a signed purchase order with an
              enforceable minimum volume guarantee — ideally with a penalty clause if they fail to
              meet the contracted minimum in any given month. The entire investment thesis rests on
              at least the base case occurring. A signed, enforceable contract is the single most
              powerful risk-reduction action available before any capital is committed. Without it,
              the "committed minimum" is just a sales pitch.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 2 — Do This Month (Once Contract Is Confirmed)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Proceed with the KUR loan application, using Sari's scenario analysis as the
              supporting document — it demonstrates to the bank that Hendro understands the cash
              flows and has stress-tested them under three futures. Begin BPOM registration
              immediately; it typically takes three to six months and is on the critical path for
              the contract to activate. Recruit one additional worker trained in cold storage
              handling to reduce Bu Lastri's operational load before the volume ramp begins.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 3 — Consider If Tier 1 &amp; 2 Work (Within 12 Months)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Use the first year's incremental cash flows to build a cash reserve of IDR 36–48
              million before attempting any further expansion — this provides 12 months of loan
              repayment coverage if the pessimistic scenario arrives in Year 2. Actively pursue a
              second sales channel — a different platform, a hotel supply contract, a modern
              supermarket — to reduce Klikfresh concentration from 42% of revenue down below 25%.
              This directly converts the pessimistic scenario from a near-catastrophe into a
              painful but survivable setback.
            </p>
          </div>
          <p style={{ marginTop: '24px' }}><strong>Summary of recommendations:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Recommendation</th>
                <th>Expected Impact</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Push for signed enforceable purchase order with penalty clause</td>
                <td>Reduces pessimistic probability 20% → ~10%, raising expected NPV by ~IDR 23M</td>
                <td>Low — negotiation only</td>
              </tr>
              <tr>
                <td>Apply for KUR and proceed with IDR 190M investment</td>
                <td>Unlocks +IDR 101M expected NPV; base case IRR of 28%</td>
                <td>Medium — loan + procurement process</td>
              </tr>
              <tr>
                <td>Start BPOM registration immediately</td>
                <td>Prevents 3–6 month delay that would defer all contract cash flows</td>
                <td>Medium — consultant + documentation</td>
              </tr>
              <tr>
                <td>Build IDR 36–48M cash reserve in Year 1</td>
                <td>12-month loan repayment buffer if pessimistic case occurs in Year 2</td>
                <td>Low — discipline only</td>
              </tr>
              <tr>
                <td>Develop second sales channel within 12 months</td>
                <td>Reduces concentration risk; pessimistic scenario severity drops ~40%</td>
                <td>High — relationship building over time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>
            Sari presented the full analysis to Pak Hendro on a Sunday afternoon over kopi tubruk.
            His reaction was characteristic: he spent about three minutes looking at the numbers,
            asked Sari twice to confirm the expected NPV ("IDR 101 juta — beneran?"), and then
            said, "OK, I'll do it."
          </p>
          <p>
            <strong>What Pak Hendro should do:</strong> Exactly what Sari recommended — negotiate
            for an enforceable purchase order, begin BPOM registration immediately, apply for the
            KUR loan, and commit to building a cash reserve before reinvesting Year 1 profits. The
            analysis fully supports the investment decision, as long as the base case assumptions
            are contractually protected.
          </p>
          <p>
            <strong>What Pak Hendro will probably do:</strong> Sign the partnership agreement
            without pushing hard enough for the penalty clause, because he does not want to risk
            the relationship with the Klikfresh representative by appearing difficult. He trusts
            the rep's verbal commitment. He will also likely skip the cash reserve recommendation
            — "if I'm generating IDR 6 million extra per month, why hold back IDR 36 million
            instead of reinvesting it?" — because the benefit of a reserve is invisible until the
            moment you desperately need it.
          </p>
          <p>
            The gap between what Hendro should do and what he will probably do is not
            irrational. He is betting on a relationship and on his own ability to adapt, not just
            on a contract. And for nine years, betting on relationships and adaptability has worked
            well for him. The danger is that this bet is twelve times larger than any he has placed
            before — and this time, a broken relationship leaves him with IDR 140 million of bank
            debt secured against machinery that cannot be easily repurposed.
          </p>
          <p>
            Understanding the math does not automatically change how people weigh risk. But it
            does mean that when the pessimistic scenario arrives — and for approximately one in
            five investments of this type, it will — Pak Hendro will understand what happened and
            why. He will know the analysis told him it was a possibility. And he will have the
            vocabulary to make a better decision the next time.
          </p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — "It Looks Profitable" Is Not an Investment Decision</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every investment that generates more revenue than zero "looks profitable." The
              relevant question is whether the return exceeds the cost of capital — the rate at
              which the business's lenders and owners need to be compensated for the risk they are
              taking. A beginner's first instinct is to ask "will this make money?" A practitioner
              asks "will this make enough money, quickly enough, with enough certainty, to justify
              the capital at risk?" NPV and IRR are the tools built to answer the practitioner's
              question, not the beginner's.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — The Discount Rate Is a Judgment, Not a Formula</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sari chose 15% because it reflected the loan rate, the opportunity cost of savings,
              and a risk premium for business uncertainty. You could reasonably argue for 12% or
              18%. The NPV changes significantly depending on which rate you choose — at 12%, the
              base case NPV rises to IDR 90M; at 18%, it falls to IDR 42M. A beginner mistake is
              to treat the discount rate as a fixed, objective input. It is a deliberate judgment
              call, and you should always test the NPV at two or three different rates to understand
              how much your conclusion depends on this one assumption.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — Scenario Probabilities Are Subjective — That Is Exactly the Point</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sari did not have historical data telling her the pessimistic scenario has precisely
              20% probability. She and Hendro discussed what they knew about Klikfresh's track
              record, the competitive frozen food market in East Java, and Hendro's capacity to
              pivot. The exercise of assigning probabilities forces you to make your assumptions
              explicit rather than leaving them buried in optimism. If the expected NPV stays
              positive even when the pessimistic probability is raised to 40%, the investment is
              robust. If it turns negative at 25% pessimistic, you know the decision is more
              sensitive than the base analysis suggests.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — MOIC and IRR Answer Different Questions; Use Both</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              IRR tells you the annualised rate of return — useful for comparing investments of
              different sizes and durations. MOIC tells you the raw cash multiple — how many
              rupiah back for every rupiah in. A 3.66× MOIC sounds more compelling than a 2.03×
              MOIC, but whether it is actually better depends entirely on how long it took to
              achieve. MOIC is indifferent to time. For this five-year investment, the base case
              2.03× MOIC corresponds to a 28% IRR — which is strong. A 2.03× MOIC over ten years
              would correspond to roughly a 7% IRR — which barely beats the cost of capital.
              Always pair MOIC with the time horizon and the IRR before drawing a conclusion.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case09
