import CapitalAllocationCalc from './calculators/CapitalAllocationCalc.jsx'

const PreD5 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module D5</span>
        <h1>Capital Allocation</h1>
        <div className="case-meta">
          Module D: Business Model Intuition &bull; The most important decision a profitable business owner makes is not what to sell — it is where to put the profits
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>Pak Agus Santoso, 47, has been running a digital and offset printing shop in Bekasi for seven years. The business is genuinely profitable — IDR 15 million per month in operating profit, reliably, without drama. After paying himself a modest salary and covering taxes, he has accumulated IDR 200 million in a savings account over five years. It earns IDR 11 million per year at a 5.5% bank rate. He is proud of the number but vaguely aware that simply holding the money in deposito is probably not the best use of it.</p>
          <p>Three opportunities appear in the same month. A machine salesperson offers him a new UV flatbed printer at IDR 120 million — it can print on wood, acrylic, and glass, opening entirely new market segments. His brother-in-law suggests opening a second branch in Cibubur at an estimated setup cost of IDR 150 million. And his most experienced operator, Pak Dedi, proposes upgrading their core equipment and hiring a junior graphic designer for IDR 50 million total — investments that, Dedi says, would allow them to take on larger-format jobs they are currently turning away.</p>
          <p>Agus has never been taught how to compare investments. He has always decided based on instinct and cash availability. Now he has IDR 200 million and three credible options, and he realizes that choosing poorly could set his business back five years. His daughter Rina, 22, who just started studying accounting, sits down with him and introduces a framework he has never heard of: ROIC — Return on Invested Capital.</p>
          <div className="highlight-box">
            <strong>What Is Capital Allocation?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Capital allocation is the process of deciding where to deploy the financial resources a business has generated. Every profitable business produces capital — retained earnings, accumulated cash, depreciated assets — and the decision of where to reinvest that capital is among the highest-leverage choices an owner can make. A business that earns IDR 200 million and reinvests it at a 15% ROIC will compound wealth. The same business reinvesting at 5% will merely preserve it. The difference between these two outcomes, compounded over a decade, is enormous.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Return on Invested Capital (ROIC)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              ROIC measures how much operating profit a business generates relative to the capital deployed to generate it. It is the fundamental measure of investment quality.<br /><br />
              <strong>Formula:</strong> ROIC = Annual Operating Profit ÷ Capital Invested<br /><br />
              A ROIC above your cost of capital (what you could earn elsewhere with that money) means value is being created. A ROIC below it means value is being destroyed, even if absolute profit is positive.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Four Capital Allocation Choices</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every business owner faces four options for accumulated capital, in rough order of risk and potential return:<br /><br />
              <strong>1. Reinvest in the core business</strong> — equipment upgrades, better staff, improved systems. Highest confidence because you understand the business well.<br />
              <strong>2. Expand the business</strong> — new branch, new product line, new geography. Higher uncertainty; requires new capabilities.<br />
              <strong>3. Acquire or invest externally</strong> — buy a supplier, invest in a partner's business. Very high uncertainty without relevant expertise.<br />
              <strong>4. Return capital to yourself</strong> — pay yourself a larger dividend, invest in personal assets, save in deposito. Lowest business risk, but often the lowest long-term return.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Opportunity Cost</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every capital allocation decision has an opportunity cost: the return you forgo by not choosing the next-best option. If you deploy IDR 120 million in a new machine that earns 40% ROIC, and you could have reinvested in your core business at 90% ROIC, your opportunity cost is the 50% difference. This is why comparing all available options simultaneously — rather than evaluating each option against "doing nothing" — is essential to good capital allocation.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Payback Period vs. ROIC</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Payback period tells you how many months until you recover the initial investment from operating profits. ROIC tells you what annual return you earn on that investment afterward.<br /><br />
              <strong>Payback:</strong> Capital Invested ÷ Annual Operating Profit<br /><br />
              Both metrics matter. A high ROIC investment with a 5-year payback may be worse than a moderate ROIC investment with a 1-year payback if cash is tight. Use payback for liquidity risk; use ROIC for long-term value comparison.
            </p>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Formula</th>
                <th>Best Used For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ROIC</td>
                <td>Annual Profit ÷ Capital Invested</td>
                <td>Comparing investment quality across options</td>
              </tr>
              <tr>
                <td>Payback Period</td>
                <td>Capital Invested ÷ Annual Profit</td>
                <td>Assessing cash recovery speed and liquidity risk</td>
              </tr>
              <tr>
                <td>Opportunity Cost</td>
                <td>Best forgone ROIC − Chosen ROIC</td>
                <td>Measuring the cost of a suboptimal allocation</td>
              </tr>
              <tr>
                <td>Incremental ROIC</td>
                <td>Additional Profit ÷ Additional Capital</td>
                <td>Evaluating expansion on top of existing business</td>
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
            <strong>Mistake 1 — Buying Shiny Assets Without Calculating Incremental ROIC</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Machine salespeople present compelling stories about new revenue possibilities. "With this UV printer you can print on wood, acrylic, glass, leather — whole new markets." This may be true. But the question is not whether new revenue is possible — it is whether the new revenue, net of all incremental costs (materials, operator time, maintenance, training), produces a return on IDR 120 million that beats what you could do with that same capital elsewhere. Many UMKM owners evaluate new equipment by asking "can I afford it?" rather than "does it earn a better return than my next-best option?" These are completely different questions.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Expanding Before the Core Model Is Proven and Systematized</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Opening a second branch often fails not because the market is wrong but because the original business has not been made process-dependent yet. If the first branch runs because of the owner's personal daily presence, the second branch will underperform because the owner cannot be in two places. The most expensive capital allocation mistake in Indonesian small business is expanding before the core business has documented processes, reliable staff, and functioning management that can operate without the owner on-site. Expansion multiplies problems as well as strengths.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Ignoring Working Capital Needs During Growth</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Growing revenue requires growing working capital: more inventory, longer accounts receivable cycles with larger clients, bigger upfront deposits with suppliers. A business that allocates all its cash to a fixed investment — a machine, a renovation — and then wins a large new order may find itself unable to buy the materials to fulfill it. Always reserve a working capital buffer before committing to fixed asset investments. The rule of thumb: reserve at least two months of operating costs as liquid cash before deploying the rest into fixed investments.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Pak Agus's Printing Shop: Three Uses of IDR 200 Million</h2>
        <div className="content">
          <p>Rina helps Pak Agus build a side-by-side ROIC comparison for his three investment options, plus the deposito baseline.</p>

          <div className="calculation">
{`Pak Agus Santoso — Printing Shop, Bekasi
Capital Allocation Analysis: IDR 200,000,000 Available

  ═══════════════════════════════════════════════════════════

  BASELINE: Deposito at 5.5% per year
  Capital deployed:                        IDR 200,000,000
  Annual return:                           IDR  11,000,000
  ROIC:                                            5.5%
  Payback:                                     18.2 years
  Risk:                                              None

  ═══════════════════════════════════════════════════════════

  OPTION A: UV Flatbed Printer (new segment)
  Capital invested:                        IDR 120,000,000
  Projected additional revenue/month:      IDR  22,000,000
  Projected additional costs/month:
    Materials + ink:                IDR  8,500,000
    Dedicated operator:             IDR  3,500,000
    Maintenance reserve:            IDR    800,000
    Total additional costs/month:          IDR  12,800,000
  Additional operating profit/month:       IDR   9,200,000
  Annual additional profit:                IDR 110,400,000
  ROIC on Option A:                               92.0%
  Payback period:  120M ÷ 110.4M/yr =        13.0 months
  Remaining capital after A:               IDR  80,000,000

  ═══════════════════════════════════════════════════════════

  OPTION B: Second Branch in Cibubur
  Capital invested:                        IDR 150,000,000
    Deposit + renovation:           IDR 75,000,000
    Equipment (used):               IDR 50,000,000
    Working capital seed:           IDR 25,000,000
  Projected revenue/month (year 1):        IDR  48,000,000
  Projected costs/month (year 1):
    COGS (materials, outsourcing):  IDR 18,000,000
    Rent:                           IDR  7,500,000
    Staff (3 people):               IDR 12,000,000
    Utilities + misc:               IDR  3,500,000
    Total costs/month:                     IDR  41,000,000
  Monthly profit (year 1):                 IDR   7,000,000
  Annual profit (year 1):                  IDR  84,000,000
  ROIC on Option B (year 1):                      56.0%
  Payback period:  150M ÷ 84M/yr =          21.4 months
  Remaining capital after B:               IDR  50,000,000
  Note: Year 2+ profit estimated IDR 108M/yr (72% ROIC)
        once branch reaches full operating efficiency

  ═══════════════════════════════════════════════════════════

  OPTION C: Core Reinvestment (Pak Dedi's proposal)
  Capital invested:                        IDR  50,000,000
    New large-format inkjet printer: IDR 35,000,000
    Junior graphic designer hire:    IDR 15,000,000
    (salary advance + onboarding)
  Additional revenue from larger jobs:     IDR  14,000,000/mo
  Additional costs (materials + designer): IDR   5,500,000/mo
  Additional monthly profit:               IDR   8,500,000
  Annual additional profit:                IDR 102,000,000
  ROIC on Option C:                              204.0%
  Payback period:  50M ÷ 102M/yr =           5.9 months
  Remaining capital after C:               IDR 150,000,000

  ═══════════════════════════════════════════════════════════

  COMPARISON SUMMARY
  ─────────────────────────────────────────────────────────
  Option       Capital     Ann. Profit    ROIC    Payback
  Deposito  IDR 200M     IDR  11.0M      5.5%   18.2 yr
  Option A  IDR 120M     IDR 110.4M     92.0%   13.0 mo  ✓
  Option B  IDR 150M     IDR  84.0M     56.0%   21.4 mo
  Option C  IDR  50M     IDR 102.0M    204.0%    5.9 mo  ✓✓

  RECOMMENDATION: Do C first (IDR 50M), then A (IDR 120M)
  Total deployed: IDR 170M | Reserve: IDR 30M (working cap)
  Combined annual profit: IDR 212.4M
  Blended ROIC: 212.4M ÷ 170M = 124.9%`}
          </div>

          <p>The counterintuitive finding: Option C — the smallest, most unglamorous investment — has the highest ROIC at 204%, largely because it targets the core business that Agus already understands deeply. Rina's advice: do Option C first, prove it works over three months, then deploy the remaining IDR 150 million into Option A. Option B (second branch) is shelved until Option A is operational and profitable, because expanding before systematizing the core would overextend Agus's management bandwidth.</p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 12 — Ibu Marlina's Batik: Three Doors for IDR 180 Million</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Marlina's capital allocation decision is the full case version of Pak Agus's problem. She has IDR 180 million accumulated and three investment options with very different ROIC profiles: an online brand (IDR 38 million, very high ROIC), a second retail toko in Yogyakarta (IDR 125 million, moderate ROIC), and an artisan batik tulis workshop (IDR 155 million, very low ROIC but strong moat). Her daughter Putri's analysis in Case 12 shows that the option with the lowest financial return has the highest strategic value — and the option with the highest return requires the least capital. The case explores how to sequence investments when you cannot do everything at once, and why the emotionally appealing option (the artisan workshop) may not be the financially optimal one.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — Always Compare All Options Simultaneously, Not Each Against "Doing Nothing"</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The biggest analytical error in capital allocation is evaluating each option in isolation. "Does this machine pay for itself? Yes." "Does this branch make money? Yes." Both can be true while Option C — not even on the original list — is twice as profitable per rupiah invested. Force yourself to list every realistic use of the capital (including deposito, paying off debt, returning it to yourself) and calculate ROIC for each before making any decision. The discipline of building the comparison table, not just the individual projections, is what prevents capital destruction.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — Highest ROIC Is Usually in Businesses You Already Understand</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Across hundreds of UMKM cases, the pattern is consistent: the highest returns come from reinvesting in the business the owner already knows — because they can accurately predict demand, costs, and execution risks. New business lines, new geographies, and new equipment in unfamiliar segments are systematically overestimated in their revenue projections and underestimated in their operational complexity. Before pursuing any expansion, ask: have I extracted all the value from the core business? Usually the answer is no.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — ROIC Projections Are Only as Good as the Revenue Assumptions</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A ROIC calculation for a new investment is a projection, not a fact. The cost side is usually reasonably accurate (machine prices, staff salaries, rent). The revenue side is almost always optimistic. A machine salesperson's revenue projection assumes full utilization immediately; a realistic projection should model 40% utilization in month one, 60% by month six, and full utilization only after twelve months of market development. Rina's advice to Pak Agus: take any salesperson's revenue projection, cut it by 40% for the first six months, and rebuild the ROIC from that more conservative base. If it still looks good, proceed.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — Sequence Investments; Do Not Deploy All Capital Simultaneously</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Even when multiple options look attractive, deploying all capital simultaneously eliminates the ability to course-correct. If Option C is executed and succeeds, the business generates more cash that can fund Option A. If Option C fails or underperforms, the remaining IDR 150 million is still available. The option value of waiting — being able to respond to what you learn — is worth more than the minor opportunity cost of a few months' delay. This is especially true for expansion decisions: start the new branch with minimum viable investment, prove the model, then deploy the full renovation budget once the concept is validated.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Adjust capital and projected profit for each option to see ROIC rankings update in real time — the highest ROIC option rises to the top.
          </p>
          <CapitalAllocationCalc />
        </div>
      </section>

    </div>
  )
}

export default PreD5
