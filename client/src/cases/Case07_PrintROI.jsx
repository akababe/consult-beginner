const Case07 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 07</span>
        <h1>Should I Buy the Machine or Keep Renting It?</h1>
        <div className="case-meta">
          Industry: Trade Services / Small Manufacturing &bull; Level: Beginner / Small Business — ROI &amp; Payback Period
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Pak Doni</strong> (42) runs a small digital printing shop in Semarang — <em>Doni
            Print</em> — offering banner printing, sticker cutting, undangan (invitation) printing,
            and packaging labels. He has been in the business for 8 years, starting with a small
            A3 desktop printer and building up to a steady roster of local clients: event organisers,
            small businesses, schools, and wedding coordinators.
          </p>
          <p>
            Doni Print currently owns two A3+ desktop printers (for invitations and labels) and
            <strong> outsources all large-format printing</strong> — banners, backdrops, rollup
            displays — to a supplier named <strong>Pak Joko</strong>, who charges Doni
            <strong> IDR 45,000 per square meter (m²)</strong>. Doni marks this up to clients at
            <strong> IDR 75,000/m²</strong>, earning IDR 30,000/m² gross profit on each large-format job.
          </p>
          <p>
            In a typical month, Doni handles approximately <strong>380 m²</strong> of large-format
            printing — generating IDR 28.5 million in revenue and IDR 11.4 million in gross profit
            from this category alone.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A sales representative from a printing equipment company visited Doni's shop and
              offered him a large-format eco-solvent printer for <strong>IDR 72,000,000</strong>
              — financed over 24 months at IDR 3,300,000/month. The salesperson's pitch:
              <em>"With this machine, your ink + media cost per m² is only IDR 12,000. You're
              currently paying IDR 45,000 to Pak Joko. You'd save IDR 33,000 per m² —
              at your current volume, that's IDR 12.5 million per month in savings."</em>
              <br /><br />
              The numbers sounded extraordinary. Doni's younger brother <strong>Rizky</strong>,
              who works as an engineer, suggested they work through the full calculation before
              signing anything — including what happens if volume drops, and what the machine
              actually costs per month beyond the loan repayment.
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Pak Doni (owner):</strong> Experienced printer, strong client relationships, and
              a craftsman's pride in quality output. He is tempted by the machine but cautious —
              he has seen competitors buy equipment they could not sustain. His gut says the
              numbers seem too good. He is right to be suspicious.
            </li>
            <li>
              <strong>Rizky (younger brother, engineer):</strong> Analytical by training. He will
              not let Doni sign until they have done the full calculation — not just the "how much
              do I save per m²" math, but the total cost of ownership including maintenance,
              consumables, space, and the risk of volume fluctuation.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: A Compelling Pitch, Three Hidden Costs</h2>
        <div className="content">
          <p>
            The salesperson's pitch was mathematically correct on one number: the per-m² saving
            on ink and media is IDR 33,000. What the pitch omitted are three cost categories that
            significantly reduce the actual financial benefit of ownership.
          </p>
          <div className="highlight-box">
            <strong>Hidden Cost 1 — Machine Depreciation and Total Cost of Ownership</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A IDR 72 million machine does not cost IDR 3.3 million per month and nothing else.
              It costs: the loan repayment (IDR 3.3M), plus maintenance contracts (~IDR 500K/month),
              plus periodic print head replacement (IDR 8–12M every 18–24 months ≈ IDR 500K/month),
              plus electricity (IDR 400K/month additional), plus the cost of the operator's time
              for machine calibration, cleaning, and troubleshooting. Total ownership cost is
              significantly higher than the loan repayment alone.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Hidden Cost 2 — Minimum Volume to Break Even on the Investment</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The savings only materialise if Doni continues to produce the same volume of large-format
              work. If a key client leaves, or if the economy slows, volume could drop to 250 m²/month.
              At that volume, the "savings" from lower per-m² cost may not cover the fixed ownership
              costs of the machine. The machine has committed fixed costs (loan, maintenance, space).
              The outsourcing model has no fixed costs — Doni pays nothing to Pak Joko in a month
              with zero large-format orders.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Hidden Cost 3 — Opportunity Cost of IDR 72 Million</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If Doni pays cash upfront (which the salesperson is also offering at a 5% discount =
              IDR 68.4M), that is IDR 68.4 million that is no longer available for other uses:
              hiring a sales person, expanding the invitation printing capacity, building a working
              capital buffer, or simply earning interest in a savings instrument. The IDR 68.4M
              committed to the machine has an opportunity cost that must be part of the analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At current and downside volume, what is the true payback period and ROI of buying
              the large-format printer — and is the investment justified?
            </p>
          </div>
          <ol>
            <li>
              <strong>What is the true total monthly cost of owning the machine</strong> — including
              all costs beyond the loan repayment?
            </li>
            <li>
              <strong>What is the net monthly saving vs. outsourcing</strong> at current volume,
              and at 70% of current volume (the stress test)?
            </li>
            <li>
              <strong>What is the payback period</strong> — how many months until the cumulative
              savings equal the total investment cost?
            </li>
            <li>
              <strong>What is the minimum monthly volume</strong> at which buying the machine is
              financially superior to continuing to outsource?
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Primary: Return on Investment (ROI) + Simple Payback Period</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              <strong>ROI = (Net Benefit ÷ Total Investment) × 100%</strong>
              <br /><br />
              <strong>Simple Payback Period = Total Investment ÷ Annual Net Benefit</strong>
              <br /><br />
              For a capital expenditure decision, ROI tells you how much return you get per IDR
              invested. Payback period tells you how long you wait before the investment has "paid
              for itself" — i.e., cumulative savings equal the upfront cost. A short payback period
              (under 2 years for equipment in a competitive market) indicates a strong investment.
              A long payback period (over 4–5 years) is risky — the business environment may change,
              the equipment may become obsolete, or key clients may leave before the investment is recouped.
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
                <td><strong>NPV / DCF</strong></td>
                <td>Supplementary</td>
                <td>More precise for multi-year investment analysis. For an IDR 72M decision over
                a clear 3–5 year horizon, simple payback and ROI give sufficient guidance at
                beginner level. DCF adds precision when cash flows are uneven year to year.</td>
              </tr>
              <tr>
                <td><strong>Break-Even Analysis</strong></td>
                <td>Used to find minimum volume</td>
                <td>Break-even volume (minimum m²/month to justify ownership) is directly
                derived from the monthly fixed cost of ownership ÷ savings per m².</td>
              </tr>
              <tr>
                <td><strong>Scenario Analysis</strong></td>
                <td>Used to stress-test payback</td>
                <td>Volume at base (380 m²), downside (265 m²), and upside (500 m²) — to show
                how sensitive the payback period is to volume assumptions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p><strong>Current Large-Format Business (Outsourcing Model):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Amount (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly large-format volume</td>
                <td>380 m²</td>
                <td>Based on 12-month average (seasonal: 250–520 m²)</td>
              </tr>
              <tr>
                <td>Revenue per m²</td>
                <td>75,000</td>
                <td>Charged to clients</td>
              </tr>
              <tr>
                <td>Outsourcing cost per m² (Pak Joko)</td>
                <td>45,000</td>
                <td>Variable — zero if no orders</td>
              </tr>
              <tr>
                <td>Monthly large-format revenue</td>
                <td>28,500,000</td>
                <td>380 m² × IDR 75K</td>
              </tr>
              <tr>
                <td>Monthly outsourcing cost</td>
                <td>17,100,000</td>
                <td>380 m² × IDR 45K</td>
              </tr>
              <tr>
                <td><strong>Monthly gross profit (outsource model)</strong></td>
                <td><strong>11,400,000</strong></td>
                <td>IDR 30K/m² × 380 m². Zero fixed cost.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Proposed Machine — Full Cost of Ownership:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cost Item</th>
                <th>Monthly Cost (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loan repayment (IDR 72M / 24 months)</td>
                <td>3,300,000</td>
                <td>Includes ~8% interest p.a. on financed amount</td>
              </tr>
              <tr>
                <td>Maintenance contract</td>
                <td>500,000</td>
                <td>Dealer service contract — quarterly visit + remote support</td>
              </tr>
              <tr>
                <td>Print head replacement reserve</td>
                <td>500,000</td>
                <td>IDR 10M print head, ~20 months lifespan at current volume</td>
              </tr>
              <tr>
                <td>Additional electricity</td>
                <td>400,000</td>
                <td>Large-format machine adds ~400 kWh/month</td>
              </tr>
              <tr>
                <td>Operator time premium (Doni's extra hours)</td>
                <td>500,000</td>
                <td>~5 hours/month for calibration, cleaning, troubleshooting</td>
              </tr>
              <tr>
                <td><strong>Total Fixed Ownership Cost / Month</strong></td>
                <td><strong>5,200,000</strong></td>
                <td>Owed every month regardless of volume</td>
              </tr>
              <tr>
                <td>Ink + media variable cost per m²</td>
                <td>12,000</td>
                <td>Ink cartridges + printing media (vinyl/canvas)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <ol>
            <li>
              <strong>Step 1 — Calculate Net Saving per m² Under Ownership</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Net variable saving per m² = old variable cost (IDR 45K outsource) − new variable
                cost (IDR 12K ink+media). This gives the per-m² saving that contributes toward
                covering fixed ownership costs.
              </p>
            </li>
            <li>
              <strong>Step 2 — Calculate Break-Even Volume (Ownership vs. Outsourcing)</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                At what volume does owning the machine produce the same profit as outsourcing?
                Below this volume, outsourcing is cheaper. Above it, ownership is more profitable.
              </p>
            </li>
            <li>
              <strong>Step 3 — Calculate Payback Period at Base, Downside, Upside Volume</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Payback period = Total investment ÷ Annual net saving. Run this for three volume
                scenarios to show how sensitive the payback is to volume assumptions.
              </p>
            </li>
            <li>
              <strong>Step 4 — Calculate ROI Over the Machine Lifespan</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Assuming a 5-year productive life for the machine, what is the total net benefit
                over 5 years and what is the ROI on the investment?
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Net Monthly Profit: Buy vs. Outsource at Current Volume</strong></p>
          <div className="calculation">
{`At 380 m²/month:

OUTSOURCE MODEL (current):
  Revenue:          380 × IDR 75,000  = IDR 28,500,000
  Outsource cost:   380 × IDR 45,000  = IDR 17,100,000
  Fixed costs:                          IDR 0
  ─────────────────────────────────────────────────────
  Gross Profit:                         IDR 11,400,000

OWN THE MACHINE:
  Revenue:          380 × IDR 75,000  = IDR 28,500,000
  Variable ink+media: 380 × IDR 12,000 = IDR  4,560,000
  Fixed ownership costs:                IDR  5,200,000
  ─────────────────────────────────────────────────────
  Gross Profit:                         IDR 18,740,000

Net monthly benefit of owning: IDR 18,740,000 − IDR 11,400,000 = IDR 7,340,000
  ⟹ At 380 m²/month, owning produces IDR 7,340,000 MORE profit per month than outsourcing.
     The salesperson's IDR 12.5M saving claim was overstated (it ignored fixed ownership costs).
     The real saving is IDR 7.34M — still significant, but 41% less than pitched.

Per-m² comparison:
  Outsource model gross profit/m²:  IDR 30,000/m²
  Own machine gross profit/m²:      IDR 18,740,000 ÷ 380 = IDR 49,316/m²
  Improvement: +IDR 19,316/m² (64% improvement per m² at 380 m² volume)`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Break-Even Volume: When Does Ownership Beat Outsourcing?</strong></p>
          <div className="calculation">
{`Break-even volume = Fixed ownership costs ÷ (Variable saving per m²)
Variable saving per m² = IDR 45,000 (outsource) − IDR 12,000 (own) = IDR 33,000/m²

Break-even volume = IDR 5,200,000 ÷ IDR 33,000 = 157.6 m²/month ≈ 158 m²/month

  ⟹ Below 158 m²/month: outsourcing is more profitable (no fixed costs).
     Above 158 m²/month: ownership is more profitable.
     Doni's 12-month average is 380 m²/month — well above break-even.
     Even his low-season month (250 m²) is above break-even.
     His absolute minimum historical month: 210 m² (still above 158 m²).

Profit comparison at different volumes:
  Volume     Outsource Profit    Own Machine Profit   Ownership Advantage
  ─────────────────────────────────────────────────────────────────────────
  100 m²      3,000,000           1,100,000            −1,900,000 (outsource wins)
  158 m²      4,740,000           4,714,000              ~equal
  250 m²      7,500,000          10,050,000            +2,550,000 (own wins)
  380 m²     11,400,000          18,740,000            +7,340,000 (own wins)
  500 m²     15,000,000          25,300,000           +10,300,000 (own wins)

  (Own machine profit = Revenue − (volume × IDR 12K) − IDR 5.2M fixed costs)`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Payback Period at Three Scenarios</strong></p>
          <div className="calculation">
{`Total investment (financed, including interest): IDR 79,200,000 (IDR 3.3M × 24 months)
OR cash upfront at 5% discount: IDR 68,400,000

Using financed cost (IDR 79.2M) as the investment basis:

Annual net saving = Monthly net benefit × 12

Scenario          Monthly Volume  Monthly Benefit  Annual Benefit  Payback Period
────────────────────────────────────────────────────────────────────────────────────
Upside            500 m²          10,300,000       123,600,000     7.7 months  ✓✓
Base (current)    380 m²           7,340,000        88,080,000     10.8 months ✓✓
Downside          265 m²           3,545,000        42,540,000     22.3 months ✓
Stress (210 m²)   210 m²           1,730,000        20,760,000     45.8 months ⚠️

Notes on scenarios:
  Upside (500 m²): Doni's peak months. Break-even in under 8 months. Exceptional.
  Base (380 m²): Current average. Break-even in under 11 months. Very strong.
  Downside (265 m²): If Doni loses one major client. Break-even in 22 months. Still acceptable.
  Stress (210 m²): Absolute historical low. Break-even in 46 months — risky. The machine
    would not pay for itself before the loan expires (24 months) in this scenario.

  ⟹ The investment is strongly justified at base and upside volume.
     The only dangerous scenario is a sustained volume below 210 m²/month — which
     Doni has never experienced in 8 years. The stress scenario is theoretically
     possible (e.g., a major client switching to a competitor) but unlikely to
     be sustained for 4 years. Risk is manageable.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — ROI Over 5-Year Machine Lifespan</strong></p>
          <div className="calculation">
{`Machine productive life: 5 years (60 months) — standard for eco-solvent printers
Total investment: IDR 79,200,000 (financed) or IDR 68,400,000 (cash)

Using base scenario (380 m²/month):
  Monthly net benefit: IDR 7,340,000
  60-month total benefit: IDR 7,340,000 × 60 = IDR 440,400,000

  ROI (financed) = (IDR 440,400,000 − IDR 79,200,000) ÷ IDR 79,200,000 × 100%
                = IDR 361,200,000 ÷ IDR 79,200,000 × 100%
                = 456% ROI over 5 years

  ROI (cash upfront) = (IDR 440,400,000 − IDR 68,400,000) ÷ IDR 68,400,000 × 100%
                     = IDR 372,000,000 ÷ IDR 68,400,000 × 100%
                     = 544% ROI over 5 years

  Annualised ROI (simple): 456% ÷ 5 years ≈ 91% per year (financed)

  ⟹ This is a high-ROI investment at current volume. For comparison, keeping money
     in a bank savings account earns ~5–6% per year. A printing machine returning
     91% per year on invested capital (at maintained volume) is exceptional.

  BUT: ROI assumes Doni maintains 380 m²/month for 5 years. If volume drops
  permanently (e.g., technology disruption — digital signage replacing printed banners),
  actual ROI would be lower. The 5-year assumption is optimistic and should be
  treated as the ceiling, not a guarantee.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — The Investment Is Strongly Justified at Current Volume</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At 380 m²/month, the machine pays for itself in 10.8 months — well within the 24-month
              loan term. The ROI over 5 years is 456%. There is no reasonable interpretation of these
              numbers that says "don't buy the machine" at current volume. The salesperson's numbers
              were overstated, but the corrected numbers still make an overwhelming case.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — The Break-Even Volume (158 m²) Is Well Below Any Historical Month</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Doni's lowest historical month (210 m²) is still 33% above the break-even volume.
              For ownership to be worse than outsourcing, Doni would need to sustain volume below
              158 m² — which has never happened. The downside risk is real but bounded. The floor
              of Doni's business is above the break-even of the machine. This is a strong safety margin.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Cash Purchase Saves IDR 10.8M in Interest and Improves ROI</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The financed option costs IDR 79.2M total (IDR 72M + IDR 7.2M interest). The cash
              option costs IDR 68.4M (5% discount). Paying cash saves IDR 10.8M and improves
              5-year ROI from 456% to 544%. If Doni has the liquidity, cash purchase is clearly
              better. If cash purchase would leave him with insufficient working capital (&lt;IDR 15M
              reserve), the financed option is safer — preserving operational flexibility is worth
              the IDR 7.2M in interest.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — The Salesperson Overstated the Benefit by 41%</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The IDR 12.5M/month saving claim ignored IDR 5.2M in fixed ownership costs. The real
              monthly benefit is IDR 7.34M — still excellent, but 41% below the pitch. This is a
              systematic pattern in equipment sales: salespeople quote the per-unit saving without
              the full cost of ownership. Rizky's instinct to verify the full picture was correct,
              even if the investment turns out to be justified. Always calculate total cost of
              ownership before evaluating a capital expenditure.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — Decision: Buy the Machine</h3>
          <div className="highlight-box">
            <strong>1A. Buy the Machine — Cash if Reserve Allows, Financed if Not</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> If Doni's business account has more than IDR 83M (IDR 68.4M
              purchase + IDR 15M working capital buffer), pay cash. Otherwise, use the 24-month
              financing option.
              <br /><strong>Why:</strong> The investment is justified at current volume. Payback
              in under 11 months at base case. Cash preserves IDR 10.8M in interest. Financing
              preserves operational liquidity.
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Negotiate a Shorter Warranty and First-Year Service Guarantee</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Before signing, negotiate: (1) 2-year warranty on the print head
              (not just the machine body), (2) guaranteed next-day service for breakdowns within
              Semarang area, (3) training for one operator.
              <br /><strong>Why:</strong> A large-format machine that is down for a week costs
              Doni 380÷4 = ~95 m² of production — approximately IDR 700K in lost profit per week.
              Downtime is an invisible but real cost of ownership. A service SLA limits this risk.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — Execution After Purchase</h3>
          <div className="highlight-box">
            <strong>2A. Maintain Relationship with Pak Joko as Overflow Capacity</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Do not terminate the relationship with Pak Joko. Keep him as
              overflow capacity for months where volume exceeds the machine's output capacity, or
              for specific materials the machine cannot handle. Reduce the volume sent to him but
              do not cut him off entirely.
              <br /><strong>Why:</strong> Peak months (520 m²) may exceed what one machine can
              comfortably produce with one operator. Having a supplier relationship preserves
              Doni's ability to fulfil peak demand without buying a second machine.
            </p>
          </div>
          <div className="highlight-box">
            <strong>2B. Track Payback Progress Monthly</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Keep a simple running total: cumulative savings since purchase.
              When this number crosses IDR 79.2M (financed) or IDR 68.4M (cash), the machine
              has paid for itself. Every subsequent month is pure additional profit.
              <br /><strong>Why:</strong> Tracking payback makes the financial benefit tangible
              and visible. It also creates an early warning if volume drops significantly — if
              the monthly saving drops below IDR 3.3M (loan payment), cash flow is negative.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What Doni Will Do</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              He will buy the machine — and with good reason. The analysis confirms the investment
              is sound. Rizky's review did not change the conclusion; it improved Doni's confidence
              in it. Doni now knows the real numbers: IDR 7.34M/month net benefit, 10.8-month
              payback, 456% 5-year ROI. He can make this decision without wondering if he was
              oversold — because he verified the math himself.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Risk Doni Must Manage Post-Purchase</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The machine commits Doni to IDR 5.2M/month in fixed costs regardless of volume.
              His current model has no fixed costs in this category. He is taking on operating
              leverage — if volume drops below 158 m²/month, the machine costs more than
              outsourcing would. Doni should set a monthly review: if large-format volume drops
              below 200 m² in any month, investigate immediately (is it seasonal or structural?)
              before the problem compounds.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics</strong>
            <table className="data-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Target</th>
                  <th>Warning Sign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly large-format volume (m²)</td>
                  <td>380</td>
                  <td>≥ 380</td>
                  <td>Below 200 m² for 2+ consecutive months</td>
                </tr>
                <tr>
                  <td>Monthly net benefit from machine (IDR)</td>
                  <td>n/a (not bought yet)</td>
                  <td>≥ 7,000,000</td>
                  <td>Below 3,300,000 (loan not covered by savings)</td>
                </tr>
                <tr>
                  <td>Cumulative payback progress (IDR)</td>
                  <td>0</td>
                  <td>IDR 79,200,000 by Month 11</td>
                  <td>Behind payback schedule by Month 15</td>
                </tr>
                <tr>
                  <td>Machine downtime (days/month)</td>
                  <td>n/a</td>
                  <td>0 unplanned days</td>
                  <td>More than 3 unplanned days in a month</td>
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
            <strong>Always Calculate Total Cost of Ownership, Not Just the Purchase Price</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every piece of equipment has costs beyond its sticker price: maintenance, consumables,
              electricity, operator time, repairs, insurance, and eventual replacement. A salesperson's
              job is to make the purchase look attractive — they will lead with the best numbers and
              omit the worst ones. Your job as the buyer is to reconstruct the full cost. For Doni,
              the financed cost was 10% higher than the headline price, and ongoing ownership costs
              added another IDR 1.4M/month that the salesperson never mentioned. Both are real.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Payback Period Is a Risk Metric, Not Just a Profitability Metric</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A short payback period means the investment is recovered quickly — limiting the window
              during which an adverse event (loss of a key client, equipment failure, market shift)
              can prevent the investment from breaking even. Doni's 10.8-month payback means that
              even if his largest client leaves in Month 12, the machine has already paid for itself.
              Conversely, a 45-month payback period means the business must remain stable for nearly
              4 years — during which anything can go wrong. Prefer shorter payback periods for
              investments in uncertain environments.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Owning Equipment Converts Variable Costs to Fixed Costs — Both a Feature and a Risk</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Outsourcing is 100% variable — costs scale exactly with volume. Ownership is partially
              fixed — a base cost exists regardless of volume. This conversion is beneficial at high
              volume (fixed costs get spread over more units) and dangerous at low volume (fixed costs
              exist even with zero output). This is the operating leverage trade-off. Ownership is
              appropriate when: (a) volume is high and stable, (b) the break-even volume is well
              below the minimum expected volume, and (c) the capital investment has a short payback.
              All three conditions hold for Doni — which is why the purchase is justified.
            </p>
          </div>
          <div className="highlight-box">
            <strong>ROI Must Be Compared to the Next Best Use of the Capital</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A 456% 5-year ROI sounds extraordinary — and it is. But always ask: <em>compared to
              what?</em> If Doni could invest IDR 68.4M in something that returned 1,000% over 5
              years, the machine would be the inferior choice. In practice, IDR 68.4M in a bank
              savings account earns ~5–6% per year. IDR 68.4M in a second printing shop might
              return 50–100% per year. The printing machine at 91% per year is better than a
              savings account and competitive with business expansion. The opportunity cost
              comparison confirms the machine is the right investment — but only because the
              alternatives were evaluated.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case07
