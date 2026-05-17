import TimeValueCalc from './calculators/TimeValueCalc.jsx'

const PreC1 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module C1</span>
        <h1>Time Value of Money</h1>
        <div className="case-meta">
          Module C: Value Over Time &bull; Why a rupiah today is worth more than a rupiah tomorrow — and how to translate future money into today's terms
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Ibu Dewi Kurniawati</strong> (44) runs <em>Dewi Copy</em>, a printing and
            photocopy center in Yogyakarta, two blocks from the main gate of a large university
            campus. She opens at 7am and closes at 10pm, serving a steady stream of students with
            assignments, skripsi printing, and thesis binding. It is not a glamorous business, but
            it is reliable — monthly revenue around IDR 22,000,000, built on nine years of early
            mornings and a reputation for fast service.
          </p>
          <p>
            In March, a longstanding client — a small campus bookshop that had placed a large
            printing order — offered Dewi a choice about how to settle their IDR 15,000,000 debt:
            pay the full amount today, or pay IDR 18,500,000 in two years. The bookshop owner
            framed it as generosity: "We'll pay you more if you can wait." Dewi's first instinct
            was to say yes — IDR 18.5 million is clearly more than IDR 15 million. She almost
            agreed on the spot.
          </p>
          <p>
            That evening, her daughter — a third-year accounting student at the same university —
            asked a single question: "Ibu, what could you do with IDR 15 million if you had it
            today?" Dewi thought about it. She could pay down a short-term supplier loan charging
            10% interest. She could reinvest it in stock. She could put it in a time deposit
            earning 9% per year. Suddenly the choice did not look as simple as "more money is
            better." The question was whether waiting two years for an extra IDR 3.5 million was
            actually worth more — or less — than what she could earn by having IDR 15 million
            in hand right now.
          </p>
          <div className="highlight-box">
            <strong>What Is the Time Value of Money?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The time value of money (TVM) is the principle that a sum of money available today
              is worth more than the same sum available in the future. This is not because of
              inflation alone — it is because money held today can be invested, lent, or used to
              pay off debt, generating additional value over time. The practical implication: when
              comparing cash flows that occur at different points in time, you cannot simply compare
              their nominal amounts. You must translate all amounts into the same point in time —
              usually today — before comparing them. The tools for this are <strong>Present
              Value</strong> (translating future money backward to today) and <strong>Future
              Value</strong> (translating today's money forward to a future date).
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Present Value (PV)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>PV = FV ÷ (1 + r)^t</strong>
              <br /><br />
              Present Value answers: "What is a future amount worth in today's money?" You divide
              the future amount by a <em>discount factor</em> — (1 + r)^t — where r is the
              discount rate (the return you could earn on the money) and t is the number of years.
              <br /><br />
              Example: IDR 18,500,000 received in 2 years, with a 10% discount rate:
              PV = IDR 18,500,000 ÷ (1.10)^2 = IDR 18,500,000 ÷ 1.21 = <strong>IDR 15,289,256</strong>
              <br /><br />
              This IDR 15,289,256 is what the future IDR 18.5 million is worth in today's
              money — the amount you would need to invest at 10% today to have IDR 18.5M in 2 years.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Future Value (FV)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>FV = PV × (1 + r)^t</strong>
              <br /><br />
              Future Value answers: "What will today's money grow into by a future date?" You
              multiply the present amount by the same discount factor — (1 + r)^t.
              <br /><br />
              Example: IDR 15,000,000 invested at 10% per year for 2 years:
              FV = IDR 15,000,000 × (1.10)^2 = IDR 15,000,000 × 1.21 = <strong>IDR 18,150,000</strong>
              <br /><br />
              So if Dewi takes IDR 15M today and invests it at 10%, she will have IDR 18,150,000
              in 2 years — <em>less</em> than the IDR 18,500,000 the bookshop is offering.
              At 10%, waiting is slightly better.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Discount Rate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The discount rate r is your <em>opportunity cost of capital</em> — the return you
              could earn if you had the money today and put it to its best available use. For a
              small business owner, this is typically the cost of their outstanding debt (if they
              could use the money to pay it down) or the return available from a safe investment
              (time deposit, savings account).
              <br /><br />
              Critically: the higher your discount rate, the less a future payment is worth today.
              At 10%, IDR 18.5M in 2 years is worth IDR 15,289,256 today. At 12%, the same
              future payment is worth only IDR 14,748,003 today — less than IDR 15M. The discount
              rate determines whether waiting is worth it.
            </p>
          </div>

          <p><strong>TVM Reference Summary:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Concept</th>
                <th>Question It Answers</th>
                <th>Formula</th>
                <th>When to Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Present Value (PV)</strong></td>
                <td>What is a future payment worth today?</td>
                <td>FV ÷ (1 + r)^t</td>
                <td>Evaluating deferred payments, multi-year investments</td>
              </tr>
              <tr>
                <td><strong>Future Value (FV)</strong></td>
                <td>What will today's money grow into?</td>
                <td>PV × (1 + r)^t</td>
                <td>Comparing saving vs spending, compound growth</td>
              </tr>
              <tr>
                <td><strong>Discount Rate (r)</strong></td>
                <td>How much does time cost?</td>
                <td>Opportunity cost of capital</td>
                <td>Set before any TVM calculation — it drives the result</td>
              </tr>
              <tr>
                <td><strong>Time Period (t)</strong></td>
                <td>How far in the future?</td>
                <td>Years (or months with monthly r)</td>
                <td>Must match the unit of the discount rate</td>
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
            <strong>Mistake 1 — Comparing Nominal Amounts Across Time</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most common TVM mistake is comparing IDR amounts at different points in time
              as if they are equivalent. "IDR 18.5 million is more than IDR 15 million, so wait"
              is this mistake in its purest form. It ignores the return Dewi could earn on IDR
              15M during those two years. If she puts IDR 15M in a time deposit at 9% per year,
              she will have IDR 15,000,000 × 1.09 × 1.09 = IDR 17,820,450 after 2 years — just
              IDR 680,000 less than the deferred offer. Whether waiting is worth it is a
              calculation, not an intuition.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Confusing the Discount Rate with the Inflation Rate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Many beginners set the discount rate equal to the inflation rate (say, 4–5% per year
              in Indonesia) when discounting future cash flows. Inflation is one component of the
              discount rate, but not all of it. The discount rate also includes the return you
              could earn risk-free (a bank deposit) and a risk premium for uncertainty. For a small
              business, the discount rate is usually the cost of their borrowing (12–15%) or the
              return on the best alternative investment available. Using 4–5% inflation makes future
              cash flows appear far more valuable than they are, and leads to overinvesting in
              deferred returns.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Thinking Only Forward, Not Backward</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              People naturally think in Future Value terms: "If I save IDR 1 million per month,
              what will I have in 3 years?" But investment decisions require the reverse: "What
              is this future stream of income worth to me today?" A customer offering to pay
              IDR 5,000,000 per month for 2 years sounds like IDR 120,000,000. But at a 12%
              discount rate, the present value of that stream is approximately IDR 106,000,000.
              The difference of IDR 14,000,000 is not trivial — it could be the difference between
              accepting an offer and walking away. Always translate future cash flows back to
              today before making a decision.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Ibu Dewi's Payment Decision</h2>
        <div className="content">
          <div className="calculation">
{`Ibu Dewi's Two-Option Analysis
Client debt: IDR 15,000,000

─── OPTION A — Receive IDR 15,000,000 Today ───
Value today:                                       IDR 15,000,000
(No discounting needed — this is already in present-day terms)

─── OPTION B — Receive IDR 18,500,000 in 2 Years ───
Dewi's available investment rate: 10% per year
(She can pay off a supplier loan charging 10% annual interest)

APPROACH 1 — Present Value of Option B:
  PV  =  IDR 18,500,000  ÷  (1 + 0.10)^2
      =  IDR 18,500,000  ÷  1.2100
      =  IDR 15,289,256

  PV(B) = IDR 15,289,256 > Option A = IDR 15,000,000
  → At 10%, Option B is worth IDR 289,256 more. Wait.

APPROACH 2 — Future Value of Option A at 10% for 2 Years:
  FV  =  IDR 15,000,000  ×  (1 + 0.10)^2
      =  IDR 15,000,000  ×  1.2100
      =  IDR 18,150,000

  FV(A) = IDR 18,150,000 < Option B = IDR 18,500,000
  → If Dewi invests the IDR 15M at 10%, she ends up with
    IDR 350,000 less than waiting for Option B.

Both approaches agree: at 10%, Option B is slightly better.

─── WHAT IF DEWI CAN EARN 12% INSTEAD? ───
  PV of Option B at 12%:
  PV  =  IDR 18,500,000  ÷  (1.12)^2
      =  IDR 18,500,000  ÷  1.2544
      =  IDR 14,748,003

  PV(B) = IDR 14,748,003 < IDR 15,000,000
  → Now Option A is worth more. Take the money today.

─── BREAK-EVEN DISCOUNT RATE ───
Find r where PV(B) = IDR 15,000,000:
  15,000,000  =  18,500,000  ÷  (1 + r)^2
  (1 + r)^2   =  18,500,000  ÷  15,000,000  =  1.2333
  (1 + r)     =  √1.2333                    =  1.1106
  r           =  11.06%

  If Dewi can invest at above 11.06%  →  take IDR 15M today
  If Dewi can invest at below 11.06%  →  wait for IDR 18.5M`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Summary — What Dewi Thought vs. What TVM Shows:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Comparison Point</th>
                <th>Dewi's First Instinct</th>
                <th>TVM Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Option A value</td>
                <td>IDR 15,000,000</td>
                <td>IDR 15,000,000 (by definition — it's today's money)</td>
              </tr>
              <tr>
                <td>Option B value</td>
                <td>IDR 18,500,000 ("more money!")</td>
                <td>IDR 15,289,256 at 10% / IDR 14,748,003 at 12%</td>
              </tr>
              <tr>
                <td>Better choice</td>
                <td>"B — bigger number"</td>
                <td>Depends on her investment rate: B if below 11.06%, A if above</td>
              </tr>
              <tr>
                <td>What the extra IDR 3.5M means</td>
                <td>"IDR 3.5M free money for waiting"</td>
                <td>At 10%: only IDR 289K of real gain. At 12%: a real loss of IDR 252K</td>
              </tr>
            </tbody>
          </table>
          <p>
            The analysis does not produce a single universal answer — it produces a
            <em> conditional</em> answer: the right choice depends on what Dewi can earn with the
            money in the meantime. That is the core of every time-value decision. The numbers do
            not decide for you; they reveal the assumption your decision is implicitly making.
          </p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 09 — Pak Hendro's Frozen Food Investment (The TVM Moment That Started Everything)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When Pak Hendro was presented with the Klikfresh platform offer, his first
              instinct was the same as Ibu Dewi's: compare nominal totals. He calculated
              IDR 28,000,000 per month times 60 months equals IDR 1.68 billion in new revenue.
              Even netting out costs, he thought he was looking at IDR 360,000,000 in incremental
              cash over 5 years for a IDR 190,000,000 investment — a IDR 170,000,000 gain.
              <br /><br />
              His sister Sari's first correction was pure TVM. She showed him that IDR 72,000,000
              per year for 5 years, discounted at 15%, has a present value of only
              IDR 241,358,400 — not IDR 360,000,000. The difference of IDR 118,641,600 existed
              entirely because future money is worth less than it appears. Year 5's IDR 72M was
              worth only IDR 35,798,400 in today's terms — barely half its nominal value. That
              single TVM adjustment reduced Pak Hendro's perceived "gain" from IDR 170M to
              IDR 63.8M. Same investment, same cash flows, same business — just correctly
              timed.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Set the Discount Rate Before You Run Any Numbers</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The discount rate is the single most important input in a TVM calculation. Set it
              before running any numbers, and tie it to something real: your cost of borrowing,
              the return on your next-best alternative investment, or a standard hurdle rate you
              use for all business decisions. The most common beginner mistake is choosing the
              discount rate after seeing the results — picking whichever rate makes the desired
              answer come out. That defeats the purpose of the calculation entirely.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Further in the Future, the Bigger the Discount</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At 12% per year, IDR 1,000,000 in 1 year is worth IDR 893,000 today. The same
              IDR 1,000,000 in 5 years is worth only IDR 567,000 today. In 10 years: IDR 322,000.
              This exponential decay is why long-horizon investments are so sensitive to the
              discount rate, and why someone who "just needs to wait a few more years" for a
              deferred payment is often making a much worse deal than they realize. Time is not
              neutral — it has a cost.
            </p>
          </div>
          <div className="highlight-box">
            <strong>PV and FV Are Two Sides of the Same Calculation</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              To check your answer, run both approaches as Dewi did: calculate the PV of the
              future option and compare to the present amount, then calculate the FV of the
              present option and compare to the future amount. If both approaches agree, your
              arithmetic is correct. If they disagree, you have made an error in one of the
              calculations. This cross-check takes 30 seconds and catches the most common
              calculation mistakes.
            </p>
          </div>
          <div className="highlight-box">
            <strong>TVM Applies to Every Multi-Period Business Decision</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Once you understand TVM, you will see it everywhere: equipment investments
              (pay now, save later), loan decisions (borrow now, repay later), deferred payment
              terms (receive now vs receive in 60 days), and even hiring (pay salary now, receive
              productivity later). The calculation is always the same structure: identify the cash
              flows, identify when each one occurs, choose a discount rate, and translate everything
              to the same point in time. The concept is simple; the discipline is applying it
              consistently before making a decision, rather than after.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Use the compound growth calculator to see how the gap between compound and simple interest widens over time, then run the discounting calculator in reverse.
          </p>
          <TimeValueCalc />
        </div>
      </section>

    </div>
  )
}

export default PreC1
