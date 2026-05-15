const Case02 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 02</span>
        <h1>Should I Open a Second Branch?</h1>
        <div className="case-meta">
          Industry: Services &bull; Level: Beginner / Small Business — Laundry Expansion Decision
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Clean &amp; Fold</strong> is a self-service laundry shop in Depok, West Java, owned and
            operated by <strong>Ibu Wati</strong> (35), a former bank teller who left her job two years ago
            to start a business she could run closer to home. The shop sits in a small ruko near a dense
            residential area — mostly young families and boarding house tenants — and has been running
            smoothly since month four. Clean &amp; Fold offers two services: self-service washing machines
            (customers pay per kilogram) and a drop-off laundry service where Wati's two staff handle the
            washing, drying, and folding.
          </p>
          <p>
            Today the business earns around <strong>IDR 28–32 million per month in revenue</strong> and
            keeps roughly IDR 4–4.5 million as monthly profit — a margin of about 14–15%. Wati has repaid
            the initial equipment loan and considers the business stable.
          </p>
          <p>
            Three weeks ago, Wati noticed that a shophouse two blocks away — in a slightly newer residential
            cluster — has been vacant for two months. The landlord is offering it at IDR 5.5 million per month,
            similar to what she pays now. A colleague who runs a similar laundry in Bekasi told her,
            <em>"If you can do it once, you can do it twice."</em>
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wati's younger brother <strong>Andi</strong> (29), who works as a finance staff at a logistics
              company, offered to help her think through the numbers before she signed anything. His first
              question was simple: <em>"Mba, how many kg of laundry does the new branch need to process
              every month before it stops losing money?"</em> Wati didn't know the answer. She had
              assumed that because the first branch was profitable, the second one would be too — she just
              needed enough customers to show up. Andi's question revealed the gap in her reasoning.
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Ibu Wati (owner):</strong> Optimistic and action-oriented. She has been thinking about
              expansion for months and feels ready. She is not naturally analytical — she runs the business
              on instinct and daily cash counts. She trusts Andi's numbers but will make the final call based
              on her gut feeling about the neighbourhood.
            </li>
            <li>
              <strong>Andi (younger brother, informal advisor):</strong> Comfortable with spreadsheets and
              financial logic. He is not trying to stop the expansion — he just wants Wati to know exactly
              what she is committing to. His concern is that the first branch's profit would be wiped out
              if the second branch underperforms for more than two or three months.
            </li>
            <li>
              <strong>Pak Hendra (current branch supervisor):</strong> Has been with Clean &amp; Fold since
              month two. If the second branch opens, Wati expects Pak Hendra to manage it. He is willing but
              has not managed a location independently before.
            </li>
          </ul>
          <p>
            The stakes are personal: Wati's household income depends entirely on Clean &amp; Fold. A bad
            expansion does not just risk the new branch — it risks the cash flow of the existing one if Wati
            diverts working capital to keep the second location alive.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Decision, Three Hidden Risks</h2>
        <div className="content">
          <p>
            Expansion decisions look simple on the surface: <em>if the new branch earns more than it costs,
            open it.</em> But for a small business owner with no financial buffer, the question is more nuanced.
            There are three structurally different risks inside this single decision.
          </p>
          <div className="highlight-box">
            <strong>Risk 1 — The New Branch Has Its Own Fixed Cost Base, Independent of Branch 1 (≈the Biggest Risk)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Branch 2 will carry IDR 5.5M rent, IDR 6M in new staff wages, IDR 1.5M utilities, plus
              equipment depreciation and consumables — roughly IDR 16–17M per month in fixed costs before
              a single kilogram of laundry comes through the door. These costs exist whether Branch 2 serves
              10 customers per day or 100. Wati's current Branch 1 profit of IDR 4–4.5M per month is
              <strong> less than one month of Branch 2's fixed costs</strong>. If Branch 2 takes six months
              to reach break-even, the accumulated losses could exceed IDR 50 million — more than Wati has
              in reserve.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Risk 2 — Demand at the New Location Is Unproven (≈Biggest Unknown)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Branch 1's customer base built up over four months in a location Wati knew well — she lived
              nearby and understood the foot traffic. Branch 2 is in a different residential cluster. The
              demographics look similar on the surface (young families, boarding house tenants), but Wati
              has no data on whether residents there currently use laundry services or wash at home. The
              demand assumption — "it'll be like Branch 1 once it gets going" — is not a forecast. It is
              a hope. The analysis needs to test how sensitive the break-even outcome is to demand being
              lower than expected.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Risk 3 — Management Attention Is a Fixed Resource Too (≈Most Overlooked Risk)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wati currently spends about six hours per day at Branch 1 — handling supplier orders,
              managing staff disputes, handling customer complaints, and doing the daily cash count. If
              she splits her time across two locations, neither gets her full attention during the critical
              early period of Branch 2. Branch 1 — which is currently running well — is at risk of
              quality slippage precisely when Wati most needs it to generate cash to cover Branch 2's
              early losses. This risk is real but cannot be put in a spreadsheet. It has to be named.
            </p>
          </div>
          <p>
            <strong>What Andi is trying to determine:</strong> Under what demand scenario does Branch 2
            break even within a reasonable timeframe — say, three to four months? And what does the
            combined cash position of both branches look like across those months if demand ramps slowly?
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
              How many kilograms of laundry per month does Branch 2 need to process to break even —
              and is that volume realistically achievable within three to four months given the neighbourhood
              and Wati's current customer acquisition experience?
            </p>
          </div>
          <p><strong>Three questions Wati and Andi need answered:</strong></p>
          <ol>
            <li>
              <strong>What is Branch 2's monthly break-even volume in kg?</strong> — the minimum amount
              of laundry that covers all fixed and variable costs at Branch 2, with zero profit.
            </li>
            <li>
              <strong>What does the combined cash flow of both branches look like across Months 1–4</strong>
              under three demand scenarios (slow, moderate, fast ramp)?
            </li>
            <li>
              <strong>What is the maximum loss Wati can absorb</strong> before Branch 2 starts threatening
              Branch 1's stability — and does her current reserve cover that?
            </li>
          </ol>
          <p>
            <strong>What success looks like:</strong> Andi produces a one-page summary that tells Wati:
            (1) the break-even number in kg/month, (2) how long each demand scenario takes to reach it,
            and (3) a clear go / no-go trigger — a minimum Month 1 revenue that must be achieved for the
            expansion to proceed rather than be paused.
          </p>
          <p>
            <strong>Analytical approach:</strong> Break-even analysis is the core tool. It requires no
            historical data from Branch 2 — only the cost structure (which is knowable in advance) and
            an assumption about revenue per kg (which comes from Branch 1's pricing). The scenarios
            require simple arithmetic, not statistical modeling.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            Expansion decisions are often framed as strategy questions — "is this the right market, is the
            timing right, is the brand ready?" Those questions matter eventually, but they are the wrong
            starting point for a small business owner. The right starting point is arithmetic: what does
            this location need to earn before it stops costing money? Everything else is secondary.
          </p>
          <div className="highlight-box">
            <strong>Primary: Break-Even Analysis</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Break-even volume = Fixed Costs ÷ Contribution Margin per Unit
            </p>
            <p style={{ fontSize: '14px' }}>
              This tells us the minimum output (kg/month) Branch 2 must reach before it stops losing
              money. Below this number, every month is a loss. Above it, every additional kg generates
              profit. The break-even point is the single most important number in any expansion decision
              for a small business — it converts an abstract "will it work?" into a concrete testable
              threshold: <em>"Can this location realistically serve X kg of laundry per month?"</em>
            </p>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              <strong>Why this fits:</strong> Wati already knows her pricing and has a clear view of
              her cost structure from Branch 1. Break-even analysis requires no new data — it only
              requires that the cost structure of Branch 2 be estimated in advance, which Andi can do
              from the lease terms and equipment quotes.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Secondary: Scenario Analysis (Conservative / Base / Optimistic)</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Because Branch 2's demand is unknown, a single forecast is misleading. Instead, Andi
              builds three demand ramp scenarios:
            </p>
            <ul style={{ fontSize: '14px' }}>
              <li><strong>Conservative:</strong> Branch 2 starts at 40% of Branch 1's current volume
              and grows 10% per month. Reaches break-even in Month 5.</li>
              <li><strong>Base:</strong> Branch 2 starts at 55% of Branch 1's volume and grows 15%/month.
              Reaches break-even in Month 3.</li>
              <li><strong>Optimistic:</strong> Branch 2 starts at 70% and grows 20%/month. Reaches
              break-even in Month 2.</li>
            </ul>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              The scenario analysis answers the question Wati actually cares about: <em>how long is the
              painful part?</em> And it forces Wati to be honest about which scenario is realistic given
              what she knows about the neighbourhood.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Framework Considered</th>
                <th>Decision</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ROI / Payback Period</strong></td>
                <td>Supplementary check</td>
                <td>Useful once break-even is established — tells Wati how long until the full
                capital investment (equipment, setup) is recovered. Not the primary question here
                because the lease is the binding commitment, not the equipment.</td>
              </tr>
              <tr>
                <td><strong>Porter's Five Forces</strong></td>
                <td>Not applicable here</td>
                <td>A laundry in a residential area has simple competitive dynamics —
                proximity and price matter most. Industry-level competition analysis adds no
                useful information for a two-branch local decision.</td>
              </tr>
              <tr>
                <td><strong>DCF / NPV</strong></td>
                <td>Too advanced for this stage</td>
                <td>Discounted cash flow models require multi-year revenue projections that do
                not exist for an unproven location. The uncertainty in the inputs dwarfs any
                precision the model adds. Break-even + scenarios is both sufficient and honest
                about what is known.</td>
              </tr>
              <tr>
                <td><strong>SWOT Analysis</strong></td>
                <td>Qualitative frame only</td>
                <td>Can help Wati articulate non-numerical concerns (e.g., management bandwidth,
                neighbourhood risk), but produces no actionable number. Use it to surface risks,
                not to make the decision.</td>
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
            Branch 1's cost structure is well-understood — Wati has 24 months of actual operating data.
            Branch 2's numbers are estimates based on the lease quote, equipment supplier prices, and
            Branch 1's variable cost ratios. The key data gaps are demand volume and ramp speed at
            the new location. These are genuinely unknown and should be treated as assumptions, not
            forecasts.
          </p>

          <p><strong>Branch 1 — Current Monthly Performance (Actuals):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Monthly Amount (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revenue — Self-service (wash + dry)</td>
                <td>12,000,000</td>
                <td>~800 kg/month @ avg IDR 15,000/kg</td>
              </tr>
              <tr>
                <td>Revenue — Drop-off service</td>
                <td>18,000,000</td>
                <td>~900 kg/month @ avg IDR 20,000/kg</td>
              </tr>
              <tr>
                <td><strong>Total Revenue</strong></td>
                <td><strong>30,000,000</strong></td>
                <td>1,700 kg/month blended</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td>5,000,000</td>
                <td>Fixed</td>
              </tr>
              <tr>
                <td>Staff wages (2 full-time)</td>
                <td>6,000,000</td>
                <td>Fixed</td>
              </tr>
              <tr>
                <td>Utilities (electricity, water)</td>
                <td>3,500,000</td>
                <td>Semi-variable — scales with kg processed</td>
              </tr>
              <tr>
                <td>Detergent &amp; consumables</td>
                <td>2,800,000</td>
                <td>Variable — ~IDR 1,650/kg</td>
              </tr>
              <tr>
                <td>Packaging (plastic bags, hangers)</td>
                <td>800,000</td>
                <td>Variable</td>
              </tr>
              <tr>
                <td>Equipment maintenance</td>
                <td>700,000</td>
                <td>Estimated monthly average</td>
              </tr>
              <tr>
                <td>Miscellaneous</td>
                <td>400,000</td>
                <td>Cleaning, minor supplies</td>
              </tr>
              <tr>
                <td><strong>Total Costs</strong></td>
                <td><strong>19,200,000</strong> (variable: ~5,700,000)</td>
                <td>Fixed: ~13,500,000 / Variable: ~5,700,000</td>
              </tr>
              <tr>
                <td><strong>Monthly Profit</strong></td>
                <td><strong>4,200,000</strong></td>
                <td>14% net margin</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Branch 2 — Estimated Monthly Cost Structure (Pre-opening):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cost Item</th>
                <th>Monthly Amount (IDR)</th>
                <th>Source / Assumption</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rent</td>
                <td>5,500,000</td>
                <td>Landlord quote — signed 12-month lease</td>
              </tr>
              <tr>
                <td>Staff wages (2 full-time)</td>
                <td>6,000,000</td>
                <td>Same rate as Branch 1</td>
              </tr>
              <tr>
                <td>Utilities (base load)</td>
                <td>2,000,000</td>
                <td>Estimated at 60% of Branch 1 base until volume scales</td>
              </tr>
              <tr>
                <td>Consumables (variable, per kg)</td>
                <td>Scales with volume</td>
                <td>IDR 1,650/kg — same ratio as Branch 1</td>
              </tr>
              <tr>
                <td>Equipment depreciation</td>
                <td>1,200,000</td>
                <td>IDR 72M equipment over 5 years = IDR 1.2M/month</td>
              </tr>
              <tr>
                <td>Miscellaneous &amp; marketing (launch)</td>
                <td>800,000</td>
                <td>Flyers, signage, online promo for first 3 months</td>
              </tr>
              <tr>
                <td><strong>Total Fixed Costs (Branch 2)</strong></td>
                <td><strong>15,500,000</strong></td>
                <td>This amount is owed every month regardless of volume</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '15px' }}>
            <strong>Blended Revenue per kg at Branch 2:</strong> Wati plans to use the same pricing as
            Branch 1. The blended average across self-service and drop-off at Branch 1 is approximately
            IDR 17,600/kg (IDR 30M revenue ÷ 1,700 kg). We use IDR 17,000/kg as a conservative estimate
            for Branch 2, assuming a slightly lower drop-off mix initially (new customers tend to try
            self-service first).
          </p>
          <p>
            <strong>Variable cost per kg at Branch 2:</strong> IDR 3,350/kg (detergent, packaging,
            utilities variable component — same ratio as Branch 1).
          </p>
          <p>
            <strong>Contribution margin per kg at Branch 2:</strong> IDR 17,000 − IDR 3,350 = <strong>IDR 13,650/kg</strong>
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            This analysis is solved in four steps. Step 1 gives the break-even threshold. Steps 2 and 3
            test whether that threshold is achievable. Step 4 frames the go / no-go decision.
          </p>
          <ol>
            <li>
              <strong>Step 1 — Calculate the Break-Even Volume for Branch 2</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Break-Even Volume (kg/month) = Fixed Costs ÷ Contribution Margin per kg.
                This tells us exactly how many kilograms of laundry Branch 2 must process each month
                before it covers its own costs. Below this number, the branch loses money every month.
              </p>
            </li>
            <li>
              <strong>Step 2 — Model Three Demand Ramp Scenarios</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Define three starting volumes (conservative / base / optimistic) and a monthly growth
                rate for each. Plot the monthly revenue, costs, and net profit for Branch 2 across
                Months 1–6. Identify the month each scenario crosses the break-even threshold.
              </p>
            </li>
            <li>
              <strong>Step 3 — Calculate the Combined Cash Position of Both Branches</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                In the conservative scenario, Branch 2 is losing money for several months. That loss
                is funded by Branch 1's profit plus Wati's cash reserve. Calculate: how much total
                accumulated loss does Wati absorb before Branch 2 reaches break-even? Does her
                current reserve cover it with a safety margin?
              </p>
            </li>
            <li>
              <strong>Step 4 — Define a Go / No-Go Trigger for Month 1</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Expansion decisions should not be binary (open forever or never). Andi should give
                Wati a specific Month 1 revenue target: if Branch 2 hits at least X in Month 1, the
                ramp is on track and the expansion continues. If it falls below X, Wati has a
                decision point — double down on marketing, renegotiate the lease, or exit early
                before losses compound.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Break-Even Volume: How Many kg Does Branch 2 Need?</strong></p>
          <div className="calculation">
{`Break-Even Volume = Fixed Costs ÷ Contribution Margin per kg

  Fixed costs (Branch 2):         IDR 15,500,000 / month
  Contribution margin per kg:     IDR 17,000 (revenue) − IDR 3,350 (variable cost)
                                = IDR 13,650 / kg

  Break-Even Volume = IDR 15,500,000 ÷ IDR 13,650
                    = 1,136 kg / month

  Rounded: ~1,140 kg/month is the break-even threshold.

Context check — how does this compare to Branch 1?
  Branch 1 current volume:        1,700 kg/month
  Branch 2 break-even:            1,140 kg/month
  Break-even as % of Branch 1:    67%

  ⟹ Branch 2 needs to reach 67% of Branch 1's current volume to stop losing money.
     Branch 1 took 4 months to reach its current volume from zero.
     The question is whether Branch 2 can reach 1,140 kg within 3–4 months.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Scenario Analysis: How Long Until Break-Even?</strong></p>
          <div className="calculation">
{`Three demand ramp scenarios — starting volume and monthly growth rate:

  Scenario           Month 1 (kg)   Monthly Growth   Break-Even Month
  ──────────────────────────────────────────────────────────────────────
  Conservative       680 kg         +10%/month        Month 6
  Base               935 kg         +15%/month        Month 3
  Optimistic         1,190 kg       +20%/month        Month 1 (barely)

Monthly profit/(loss) at Branch 2 — Conservative Scenario:
  Month 1:  680 kg × IDR 13,650 = IDR 9,282,000 GP − IDR 15,500,000 fixed = −IDR 6,218,000
  Month 2:  748 kg × IDR 13,650 = IDR 10,210,200 − IDR 15,500,000          = −IDR 5,289,800
  Month 3:  823 kg × IDR 13,650 = IDR 11,233,950 − IDR 15,500,000          = −IDR 4,266,050
  Month 4:  905 kg × IDR 13,650 = IDR 12,353,250 − IDR 15,500,000          = −IDR 3,146,750
  Month 5:  996 kg × IDR 13,650 = IDR 13,595,400 − IDR 15,500,000          = −IDR 1,904,600
  Month 6: 1,095 kg × IDR 13,650 = IDR 14,947,000 − IDR 15,500,000         =   −IDR 553,000
  Month 7: 1,205 kg × IDR 13,650 = IDR 16,448,250 − IDR 15,500,000         = +IDR 948,250 ✓

  Conservative scenario accumulated loss (Months 1–6): IDR 21,378,200
  ⟹ Wati needs IDR ~21.4M in reserve to survive the conservative scenario.

Monthly profit/(loss) at Branch 2 — Base Scenario:
  Month 1:  935 kg × IDR 13,650 = IDR 12,762,750 − IDR 15,500,000          = −IDR 2,737,250
  Month 2: 1,075 kg × IDR 13,650 = IDR 14,673,750 − IDR 15,500,000         =   −IDR 826,250
  Month 3: 1,236 kg × IDR 13,650 = IDR 16,871,400 − IDR 15,500,000         = +IDR 1,371,400 ✓

  Base scenario accumulated loss (Months 1–2): IDR 3,563,500
  ⟹ Wati needs IDR ~3.6M to survive the base scenario — comfortably covered by one
     month of Branch 1 profit.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Combined Cash Position: Both Branches Together</strong></p>
          <div className="calculation">
{`Branch 1 continues generating IDR 4,200,000/month profit throughout.
Wati's stated cash reserve: IDR 15,000,000.

Combined monthly position (Conservative Scenario — worst case):
  Month   Branch 1 Profit   Branch 2 Loss    Net Monthly   Cumulative Reserve
  ─────────────────────────────────────────────────────────────────────────────
  M1      +4,200,000        −6,218,000       −2,018,000     12,982,000
  M2      +4,200,000        −5,290,000       −1,090,000     11,892,000
  M3      +4,200,000        −4,266,000          −66,000     11,826,000
  M4      +4,200,000        −3,147,000       +1,053,000     12,879,000
  M5      +4,200,000        −1,905,000       +2,295,000     15,174,000
  M6      +4,200,000          −553,000       +3,647,000     18,821,000
  M7      +4,200,000          +948,000       +5,148,000     23,969,000

  ⟹ Conservative scenario: reserve never drops below IDR 11.8M.
     Wati does NOT run out of cash even in the worst case modelled here.
     However, her reserve drops by 21% by Month 3, which is uncomfortable
     but not catastrophic.

Warning scenario — what if Branch 1 has a bad month (−30% revenue) at the same time?
  Month 1 combined: +IDR 2,940,000 (Branch 1 bad month) − IDR 6,218,000 = −IDR 3,278,000
  Reserve after Month 1: IDR 11,722,000
  This is still manageable, but there is no buffer for a second simultaneous shock.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — The Go / No-Go Trigger for Month 1</strong></p>
          <div className="calculation">
{`What Month 1 revenue tells us about which scenario we are actually in:

  If Branch 2 Month 1 revenue is...   We are on track for...   Action
  ─────────────────────────────────────────────────────────────────────────────
  ≥ IDR 20,230,000 (≥ 1,190 kg)       Optimistic scenario      Proceed — full speed
  IDR 15,925,000–20,230,000 (935–1,189 kg)  Base scenario       Proceed — monitor monthly
  IDR 11,560,000–15,924,000 (680–934 kg)    Conservative         Caution — tighten costs,
                                             scenario             boost marketing urgently
  < IDR 11,560,000 (< 680 kg)         Below conservative       Trigger: pause and reassess
                                                                 before signing Month 2

Recommended trigger: If Month 1 revenue < IDR 13,000,000 (~765 kg), Wati should
treat this as a signal to negotiate with the landlord for a reduced rate in Months 1–3
or to re-examine whether the location choice was sound.

This number gives Wati a concrete decision point — not "let's see how it goes" but
"if we don't hit this, we change strategy by Day 45."`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — The Break-Even Volume Is Achievable, But Not Automatic</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Branch 2 needs 1,140 kg/month to break even — 67% of Branch 1's current volume. This is
              not an unreasonable target: Branch 1 reached similar volume by Month 4. However, "Branch 1
              did it" is not evidence that Branch 2 will. Wati knew the Branch 1 neighbourhood. She should
              do at least two weeks of demand validation at the new location before committing — counting
              foot traffic, surveying residents, checking whether nearby boarding houses already use a
              competing laundry service.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — The Conservative Scenario Is Survivable, But Uncomfortable</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Even in the conservative scenario (Branch 2 taking 7 months to break even), Wati's combined
              reserve never falls below IDR 11.8 million. She does not go bankrupt. But she absorbs
              IDR 21.4 million in cumulative losses before Branch 2 turns positive — and her reserve drops
              from IDR 15M to IDR 11.8M at the bottom. This is a 21% drawdown of her financial buffer with
              no room for an unexpected shock at Branch 1 during the same period. Survivable, yes.
              Comfortable, no.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — The Base Scenario Only Requires IDR 3.6M in Reserve (Two Easy Months)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If Branch 2 opens at 55% of Branch 1's volume and grows 15% per month — which is a
              reasonable assumption if the neighbourhood has genuine unmet demand — the accumulated
              loss before break-even is only IDR 3.6 million. Branch 1's monthly profit covers that
              in under a month. The expansion becomes low-risk the moment demand validation confirms
              that the base scenario is plausible. This is the key finding: the risk of the expansion
              is highly sensitive to Month 1 demand. A strong Month 1 makes this decision easy.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — The First Branch's Profit Is Not a Buffer — It's a Risk Too</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most important non-obvious finding is that Wati's management attention is finite. If
              she spends the first two months of Branch 2 fixing operational problems there, Branch 1
              runs without her usual oversight. Even a 15% revenue dip at Branch 1 — due to service
              quality slippage, a staff issue Pak Hendra doesn't escalate, or a supplier problem she
              doesn't catch — adds IDR 4.5M to the cumulative shortfall. The combined financial model
              only works if both branches perform as expected simultaneously. The probability of one of
              them having a bad month is higher when the owner is stretched thin.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Month 1 Volume (kg)</th>
                <th>Break-Even Month</th>
                <th>Max Cumulative Loss (IDR)</th>
                <th>Reserve Survives?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conservative</td>
                <td>680</td>
                <td>Month 7</td>
                <td>21,400,000</td>
                <td>Yes — barely comfortable</td>
              </tr>
              <tr>
                <td>Base</td>
                <td>935</td>
                <td>Month 3</td>
                <td>3,600,000</td>
                <td>Yes — easily covered</td>
              </tr>
              <tr>
                <td>Optimistic</td>
                <td>1,190</td>
                <td>Month 1</td>
                <td>~270,000</td>
                <td>Yes — no real risk</td>
              </tr>
              <tr>
                <td>Below Conservative</td>
                <td>&lt; 680</td>
                <td>Month 10+</td>
                <td>35,000,000+</td>
                <td>Reserve depleted by Month 8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — Before Signing the Lease</h3>
          <div className="highlight-box">
            <strong>1A. Do Two Weeks of Demand Validation at the New Location</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Wati or Pak Hendra spends 30 minutes per day at the new location
              for two weeks — counting foot traffic at peak hours, knocking on doors at nearby boarding
              houses to ask whether residents currently use a laundry service, and checking whether any
              competing laundry already operates within 500 metres.
              <br /><strong>Why:</strong> The entire risk profile of this expansion changes depending on
              whether Month 1 demand is 680 kg or 935 kg. That difference is not a spreadsheet question —
              it is a neighbourhood question that can be partially answered before any money is committed.
              <br /><strong>Expected outcome:</strong> A rough sense of whether the base scenario is
              plausible. If there are two competing laundries already operating nearby, the conservative
              scenario is more likely. If the area is underserved, the base or optimistic scenario is
              more likely.
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Negotiate a Rent Ramp — Pay Less in Months 1–3</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Ask the landlord for IDR 3.5M rent in Months 1–3 (instead of IDR 5.5M),
              stepping up to full rate from Month 4. This is a common ask for new tenants and many
              landlords accept it rather than leaving the space vacant another month.
              <br /><strong>Why:</strong> In the conservative scenario, the biggest losses happen in
              Months 1–3. Reducing rent by IDR 2M/month during that window reduces the accumulated
              loss from IDR 21.4M to IDR 15.4M — a 28% reduction in worst-case exposure.
              <br /><strong>Impact:</strong> If successful, the conservative scenario becomes clearly
              survivable with IDR 15M reserve.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — If Wati Signs the Lease</h3>
          <div className="highlight-box">
            <strong>2A. Set a Hard Month 1 Trigger: IDR 13,000,000 in Revenue</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Commit in writing (even just to Andi) that if Branch 2 revenue
              in Month 1 is below IDR 13,000,000, the response is not to wait and hope — it is to
              immediately increase marketing spend (IDR 1–2M on local flyers, WhatsApp group promo,
              laundry referral discounts) and reassess by Day 45.
              <br /><strong>Why:</strong> The financial model shows that Month 1 demand is the
              strongest predictor of which scenario plays out. Waiting until Month 3 to react to
              below-target performance means absorbing 3 months of maximum losses before changing strategy.
              React early, not late.
            </p>
          </div>
          <div className="highlight-box">
            <strong>2B. Prepare Pak Hendra Before Opening Day</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Spend 2–3 weeks before Branch 2 opens having Pak Hendra shadow
              Wati's daily management tasks: supplier ordering, cash reconciliation, staff scheduling,
              and customer complaint handling. Create a simple daily checklist he can follow.
              <br /><strong>Why:</strong> Wati's management attention risk is the one variable the
              financial model cannot capture. The best way to protect Branch 1 during Branch 2's
              launch is to make sure Pak Hendra can run Branch 1 independently — not just execute
              tasks, but make routine decisions — freeing Wati to focus on Branch 2's early months.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — If Break-Even Is Missed at Month 4</h3>
          <div className="highlight-box">
            <strong>3A. Exit Ramp — Know When to Stop</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> If Branch 2 has not reached 900 kg/month by Month 4 and the
              cumulative loss has exceeded IDR 18M, initiate a conversation with the landlord about
              early lease termination or subletting. This is the defined stop-loss point.
              <br /><strong>Why:</strong> The worst expansion outcome is not opening a second branch
              that fails. It is opening a second branch that fails slowly — draining the first branch's
              profit and Wati's reserve for 12–18 months before she admits the location was wrong.
              Defining the exit point in advance makes it easier to act on it when the time comes.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <p>
            Wati is an action-oriented person who has been thinking about expansion for months. The
            analysis is not going to stop her from opening Branch 2 — nor should it. The analysis
            should make her a more prepared expansion owner, not a more hesitant one.
          </p>
          <div className="highlight-box">
            <strong>What Wati Will Do Immediately</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              She will be relieved that the conservative scenario does not wipe her out. Once Andi
              shows her that even the worst realistic case leaves IDR 11.8M in reserve, her anxiety
              drops and her confidence rises. She will commit to the demand validation and the
              Pak Hendra preparation because they cost nothing and reduce her risk — she has no
              reason not to do them.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Wati Will Resist: The Month 1 Revenue Trigger</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wati's instinct will be to trust the process and "give it time." Setting a hard trigger
              at Month 1 feels to her like doubting the expansion before it has started. Andi's
              framing matters here: <em>"The trigger isn't about doubting Branch 2. It's about knowing
              the difference between 'ramp is slow but on track' and 'this location has a structural
              problem.' Month 1 tells us which one we're dealing with. Without the trigger, we
              can't tell the difference until Month 5 — and by then we've already lost IDR 21M."</em>
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Will Actually Determine Success</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The financial model is sound. The real variable is demand validation. If Wati does two
              weeks of proper neighbourhood research and finds that residents in the new area are
              already using laundry services and expressing frustration that the nearest one is far
              away — that is the signal to proceed with confidence. If she finds that most residents
              wash at home and have no interest in paying for a laundry service, no amount of marketing
              will move the needle. The model cannot give her that answer. Only going to the
              neighbourhood can.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics — What to Track Every Month</strong>
            <table className="data-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current (Branch 1)</th>
                  <th>Target Branch 2 (Month 3)</th>
                  <th>Stop-Loss Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Branch 2 monthly revenue (IDR)</td>
                  <td>—</td>
                  <td>≥ 15,900,000 (base scenario)</td>
                  <td>Below 11,560,000 at Month 1</td>
                </tr>
                <tr>
                  <td>Branch 2 monthly volume (kg)</td>
                  <td>—</td>
                  <td>≥ 1,140 (break-even)</td>
                  <td>Below 680 after Month 2</td>
                </tr>
                <tr>
                  <td>Combined cash reserve (IDR)</td>
                  <td>15,000,000</td>
                  <td>≥ 12,000,000</td>
                  <td>Below 10,000,000 at any month</td>
                </tr>
                <tr>
                  <td>Branch 1 revenue (IDR)</td>
                  <td>30,000,000</td>
                  <td>≥ 28,000,000 (allow for small dip)</td>
                  <td>Below 25,000,000 — Wati refocuses on Branch 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Break-Even Is a Threshold, Not a Guarantee</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Break-even analysis tells you the minimum volume needed to stop losing money — it does
              not tell you whether that volume is achievable. This is the most common misuse of the
              tool. After calculating that Branch 2 needs 1,140 kg/month, the work is not done —
              that number is only useful if you also assess whether 1,140 kg is realistic. Always
              follow a break-even calculation with a demand sanity check: <em>"Do I have any evidence
              that this location can generate this volume?"</em> If the answer is no, the break-even
              number is interesting but not actionable.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Fixed Costs Are the Trap in Every Expansion</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The fundamental danger in any expansion is that fixed costs at the new location are
              committed on Day 1 — before a single customer walks through the door. Rent is signed.
              Staff are hired. Equipment is delivered. Variable costs scale with revenue, but fixed
              costs do not. This asymmetry — fixed costs immediate, revenue gradual — is why
              expansion kills profitable small businesses. The business is not expanding into the
              unknown with its surplus. It is committing its surplus as collateral.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Scenarios Are Not Predictions — They Are Decision Frames</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A beginner's mistake is to present the base scenario as "the forecast" and the
              conservative scenario as "what happens if things go a bit wrong." That framing puts
              too much weight on the base scenario. The right framing is: <em>we do not know which
              scenario will happen, so we need to be prepared to act differently in each one.</em>
              The value of scenario analysis is not predicting the future — it is preparing a
              different decision for each future that might arrive. The Month 1 trigger is the
              mechanism for that preparation.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Most Common Expansion Mistake: "It Worked Here, So It'll Work There"</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wati's assumption is the most natural one in the world — and one of the most dangerous.
              Branch 1 succeeds for reasons that may be specific to its location, neighbourhood
              demographics, proximity to boarding houses, word-of-mouth from a specific community
              group, or simply the fact that Wati was personally present every day for the first
              four months. None of those factors automatically transfer to Branch 2. A successful
              first location is evidence that the business model works — it is not evidence that the
              same model works in every location.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Define the Exit Ramp Before You Open the Door</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The hardest thing about a failing expansion is stopping it. Every month, the owner
              thinks: <em>"We've already put in IDR 15M — it would be a waste to stop now."</em>
              This is the sunk cost fallacy. Past losses cannot be recovered. The only question
              is whether future months will be profitable or not. Defining a stop-loss trigger
              before opening — and writing it down — makes it significantly easier to act on when
              the moment arrives. A pre-committed exit point is not pessimism. It is discipline.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case02;
