const Case04 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 04</span>
        <h1>Why Am I Always Busy But Never Saving Anything?</h1>
        <div className="case-meta">
          Industry: Creative Services &bull; Level: Beginner / Small Business — Freelance Photography Unit Economics
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Reza</strong> (26) is a freelance photographer based in Bandung. He shoots weddings,
            corporate events, product photography, and family portraits. He has been doing this full-time
            for two years, and by most visible measures, his business is thriving: his Instagram has
            18,000 followers, his calendar is booked 6–8 weeks in advance, and he charges IDR 6–8 million
            per wedding shoot.
          </p>
          <p>
            In a typical month, Reza books <strong>8–10 events</strong> across different categories, generating
            <strong> IDR 60–70 million in gross bookings</strong>. He has one part-time assistant, <strong>Tias</strong>
            (22), who helps at shoots and handles some client communication.
          </p>
          <p>
            But every month, Reza looks at his bank account and wonders where the money went. He is not
            living extravagantly. He does not have significant personal debts. His account balance rarely
            grows by more than IDR 3–4 million per month despite the revenue figure. When family members
            ask how the business is doing, he says "very busy" — which is true. But he cannot say
            "very profitable."
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Tias, who studies business administration part-time, suggested they try to calculate the
              "real profit per job" — not just revenue minus the cost of printing and delivery, but
              everything: equipment wear, Reza's own time for editing, travel, Tias's day rate, the
              cost of marketing that generated the booking. Reza initially resisted — "I can see from
              my transfers that I'm making money." Tias's counterpoint: <em>"If you're making IDR 65
              million a month and saving IDR 3–4 million, where are the other IDR 61 million going?"</em>
              That question had no good answer. The analysis began.
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Reza (owner, photographer):</strong> Visually creative, client-relationship focused.
              Deeply uncomfortable with financial analysis — not because he cannot understand numbers, but
              because he suspects the numbers will reveal something he does not want to see. He prices by
              "what the market charges" and "what feels right," not by calculating what he needs to earn
              per hour to sustain the business.
            </li>
            <li>
              <strong>Tias (assistant, part-time business student):</strong> Methodical. She has the
              most complete picture of how a typical shoot actually runs — the travel time, the equipment
              loading, the post-shoot editing hours. She is the one who can build the cost model because
              she sees costs Reza has normalised into invisibility.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Calendar, Three Invisible Costs</h2>
        <div className="content">
          <p>
            Reza's problem is not that he charges too little per shoot in absolute terms. His rates are
            market-competitive. The problem is that he has never calculated what a shoot actually costs
            him — specifically, three cost categories that are either invisible, deferred, or actively
            ignored.
          </p>
          <div className="highlight-box">
            <strong>Driver 1 — His Own Time Is Priced at Zero (≈40% of the Problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A wedding shoot that Reza books for IDR 7 million looks profitable. But what does that
              job actually consume? The shoot day: 10 hours. Pre-shoot preparation and client calls:
              2 hours. Post-shoot culling and selection: 4 hours. Editing (full colour grading, retouching):
              14 hours. Delivery preparation and client handoff: 2 hours. Total: <strong>32 hours of
              Reza's time per wedding</strong>. At his current effective rate, he earns IDR 7,000,000
              ÷ 32 hours = IDR 218,750 per hour. That is before any other costs are subtracted.
              After costs, the per-hour return drops significantly lower. Reza has never calculated
              this number. He thought "IDR 7 million for one day of work" — not "IDR 7 million for
              32 hours of work spread across 5 days."
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 2 — Equipment Depreciation Is Never Accounted For (≈30% of the Problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza has invested IDR 120 million in equipment over two years: two camera bodies, five
              lenses, two flashes, batteries, bags, hard drives, and a laptop for editing. He thinks
              of this as "already paid for." In accounting, it is not. Equipment wears out, gets damaged,
              and becomes obsolete. A professional photographer typically replaces their core gear every
              3–4 years. That means Reza's equipment is depreciating at approximately <strong>IDR 2.5–3.5
              million per month</strong> — a real cost he must budget for if he wants to replace the gear
              when it fails. This cost never appears in his "revenue minus expenses" mental model because
              no cash leaves his account for depreciation. But it is as real as rent.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 3 — Marketing and Admin Costs Are Not Allocated to Jobs (≈30% of the Problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza spends approximately IDR 2.5 million per month on his business: Instagram promoted
              posts (IDR 1.2M), a photography portfolio website subscription (IDR 300K), accounting app
              (IDR 150K), professional membership and insurance (IDR 500K), client management software
              (IDR 350K). These are not random personal expenses — they are the cost of running the
              business. But Reza never assigns them to individual jobs. They sit in a vague "monthly
              overhead" category and are mentally separated from the per-shoot revenue calculation.
              If he books 9 jobs per month, each job should bear IDR 277,000 of this overhead (IDR
              2.5M ÷ 9). They currently bear zero.
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
              What is the true profit per job, by job type — once all costs including Reza's time,
              equipment depreciation, and overhead allocation are factored in?
            </p>
          </div>
          <p><strong>Three questions Reza and Tias need answered:</strong></p>
          <ol>
            <li>
              <strong>What does a unit (one booked job) actually cost</strong> — including time,
              variable costs, equipment depreciation share, and overhead allocation?
            </li>
            <li>
              <strong>Which job types are profitable at current prices</strong> — and which are
              producing near-zero or negative real profit per hour?
            </li>
            <li>
              <strong>What price does Reza need to charge per job type</strong> to earn a target
              hourly rate of IDR 400,000/hour (a modest professional rate for skilled creative work)?
            </li>
          </ol>
          <p>
            <strong>Analytical approach:</strong> Unit economics — building a complete per-job P&L
            for each job type (wedding, corporate, product, portrait). This requires correctly
            identifying all costs associated with one unit, including time as an explicit cost.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Primary: Unit Economics</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Unit economics answers the question: <em>for each unit sold (one booked job), what is
              the revenue, what are all the costs, and what is the net profit?</em> The "unit" can
              be a single transaction, a customer, a product, or — in Reza's case — a booked event.
            </p>
            <p style={{ fontSize: '14px' }}>
              The power of unit economics is that it forces you to account for every cost that exists
              because of that one unit — including costs that are normally invisible because they are
              paid in time rather than cash. Once you have a per-unit economics model, you can
              immediately see which units generate real profit and which generate the illusion of
              profit (positive cash flow, negative true profit).
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
                <td><strong>Contribution Margin Analysis</strong></td>
                <td>Partially used</td>
                <td>Contribution margin (revenue minus variable costs) is one component of unit
                economics but omits time costs and overhead allocation. Unit economics is
                contribution margin expanded to include all job-level costs.</td>
              </tr>
              <tr>
                <td><strong>Hourly Rate Analysis</strong></td>
                <td>Used as the output check</td>
                <td>After calculating per-job profit, dividing by total hours worked gives
                effective hourly rate — an intuitive metric Reza can use to compare job types
                and set minimum prices. Not the primary framework, but the clearest output format.</td>
              </tr>
              <tr>
                <td><strong>Full P&amp;L Statement</strong></td>
                <td>Used for the monthly overview</td>
                <td>A business-level P&amp;L confirms the unit economics totals add up correctly.
                If 9 jobs × per-job profit = the IDR 3–4M monthly savings Reza observes, the
                model is internally consistent.</td>
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
            Tias reconstructed the data from Reza's invoice records, bank transfers, equipment purchase
            receipts, and her own observation of shoot durations. Time estimates are based on Tias
            logging Reza's hours on three consecutive jobs of each type.
          </p>

          <p><strong>Job Type Mix — Typical Month (9 jobs):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Job Type</th>
                <th>Avg Bookings/Month</th>
                <th>Avg Booking Price (IDR)</th>
                <th>Monthly Revenue (IDR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wedding / Akad</td>
                <td>2</td>
                <td>7,500,000</td>
                <td>15,000,000</td>
              </tr>
              <tr>
                <td>Corporate Event</td>
                <td>3</td>
                <td>4,500,000</td>
                <td>13,500,000</td>
              </tr>
              <tr>
                <td>Product Photography</td>
                <td>3</td>
                <td>2,800,000</td>
                <td>8,400,000</td>
              </tr>
              <tr>
                <td>Family / Portrait</td>
                <td>1</td>
                <td>1,800,000</td>
                <td>1,800,000</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>9</strong></td>
                <td>—</td>
                <td><strong>38,700,000</strong></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '6px' }}>
            Note: IDR 38.7M is a typical month. Reza quotes IDR 60–70M but that is peak months
            (wedding season). Average across 12 months is closer to IDR 38–45M.
          </p>

          <p style={{ marginTop: '20px' }}><strong>Monthly Fixed &amp; Overhead Costs:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cost Item</th>
                <th>Monthly Amount (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equipment depreciation</td>
                <td>3,000,000</td>
                <td>IDR 120M equipment ÷ 40 months (3.3-year replacement cycle)</td>
              </tr>
              <tr>
                <td>Instagram / digital marketing</td>
                <td>1,200,000</td>
                <td>Promoted posts, occasional paid collaborations</td>
              </tr>
              <tr>
                <td>Software subscriptions</td>
                <td>500,000</td>
                <td>Lightroom, portfolio site, client gallery platform</td>
              </tr>
              <tr>
                <td>Insurance &amp; professional membership</td>
                <td>500,000</td>
                <td>Equipment insurance, photography community membership</td>
              </tr>
              <tr>
                <td>Phone &amp; data (business use)</td>
                <td>300,000</td>
                <td>Client communication, on-shoot data backup</td>
              </tr>
              <tr>
                <td><strong>Total Monthly Overhead</strong></td>
                <td><strong>5,500,000</strong></td>
                <td>Allocated per job: IDR 5,500,000 ÷ 9 = IDR 611,000/job</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Per-Job Variable Costs and Time (by Type):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Job Type</th>
                <th>Tias Day Rate (IDR)</th>
                <th>Travel / Misc (IDR)</th>
                <th>Printing / Storage (IDR)</th>
                <th>Total Variable Cost (IDR)</th>
                <th>Reza's Total Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wedding</td>
                <td>350,000</td>
                <td>300,000</td>
                <td>200,000</td>
                <td>850,000</td>
                <td>32 hrs</td>
              </tr>
              <tr>
                <td>Corporate Event</td>
                <td>350,000</td>
                <td>200,000</td>
                <td>100,000</td>
                <td>650,000</td>
                <td>18 hrs</td>
              </tr>
              <tr>
                <td>Product Photography</td>
                <td>0 (solo)</td>
                <td>100,000</td>
                <td>50,000</td>
                <td>150,000</td>
                <td>12 hrs</td>
              </tr>
              <tr>
                <td>Family / Portrait</td>
                <td>0 (solo)</td>
                <td>150,000</td>
                <td>100,000</td>
                <td>250,000</td>
                <td>8 hrs</td>
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
              <strong>Step 1 — Build the Per-Job Unit Economics Model</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                For each job type: Revenue − Variable Costs − Overhead Allocation = Cash Profit per Job.
                This is what Reza actually earns in cash per job after paying Tias, travel, and bearing
                his proportional share of monthly overhead. This is the starting point — but it is
                incomplete without time.
              </p>
            </li>
            <li>
              <strong>Step 2 — Price Reza's Time</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Assign a target hourly rate to Reza's time — the rate he would need to pay a hired
                photographer to do what he does. IDR 400,000/hour is a conservative professional
                rate for skilled creative work in Bandung (equivalent to ~IDR 8M/month for a 50-hour
                week, close to senior creative agency rates). Multiply by hours per job to get the
                "time cost" per job.
              </p>
            </li>
            <li>
              <strong>Step 3 — Calculate True Profit per Job</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Cash Profit per Job − Time Cost per Job = True Economic Profit per Job. This is the
                real answer to "how profitable is this job?" Negative numbers mean Reza is effectively
                paying to do those jobs (his time is worth more than what the job pays after costs).
              </p>
            </li>
            <li>
              <strong>Step 4 — Calculate Required Prices for Target Profitability</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Working backwards: what price does each job type need to charge so that Reza earns
                IDR 400,000/hour for his time AND covers all variable costs and overhead? This is the
                minimum viable price — below this, the business is not compensating Reza fairly for
                his time.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Per-Job Unit Economics (Cash Profit, Before Time Cost)</strong></p>
          <div className="calculation">
{`Per-Job Cash Profit = Revenue − Variable Costs − Overhead Allocation
Overhead per job = IDR 5,500,000 ÷ 9 jobs = IDR 611,000

Job Type         Revenue    Var Cost   Overhead   Cash Profit   Cash Margin
────────────────────────────────────────────────────────────────────────────
Wedding          7,500,000   850,000    611,000     6,039,000       81%
Corporate        4,500,000   650,000    611,000     3,239,000       72%
Product          2,800,000   150,000    611,000     2,039,000       73%
Portrait         1,800,000   250,000    611,000       939,000       52%

  ⟹ On a cash basis, every job type looks solidly profitable.
     Reza would look at this and say "see, I'm making great margins."
     He is not wrong. The cash margins are real.
     The problem is what these numbers do not yet include: his time.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Time Cost per Job (The Hidden Cost)</strong></p>
          <div className="calculation">
{`Reza's target hourly rate: IDR 400,000/hour
(This is what skilled creative work should cost — not what he currently earns per hour,
but what he should earn if the business is to compensate him fairly.)

Job Type      Reza's Hours   Time Cost (IDR)
──────────────────────────────────────────────
Wedding            32          12,800,000
Corporate          18           7,200,000
Product            12           4,800,000
Portrait            8           3,200,000

  ⟹ A wedding that generates IDR 7,500,000 in revenue requires IDR 12,800,000
     worth of Reza's time (at IDR 400K/hr). The job earns less than it costs
     in time alone — before variable costs and overhead.

Important note on "pricing your own time":
  Reza does not pay himself IDR 400K/hour in cash. He pays himself nothing formal.
  But this does not mean his time is free. If Reza stopped shooting and got a job
  as a creative director at an agency, he could earn IDR 12–15M/month for 40 hrs/week.
  His current business must earn at least that much after costs to justify his choosing
  self-employment over employment. Time cost is an opportunity cost — real even when
  no cash changes hands.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — True Economic Profit per Job</strong></p>
          <div className="calculation">
{`True Profit = Cash Profit − Time Cost

Job Type    Cash Profit   Time Cost    True Profit   True Margin   Effective Rate
──────────────────────────────────────────────────────────────────────────────────
Wedding      6,039,000   12,800,000    −6,761,000      −90%          IDR 189K/hr
Corporate    3,239,000    7,200,000    −3,961,000      −88%          IDR 180K/hr
Product      2,039,000    4,800,000    −2,761,000      −99%          IDR 170K/hr
Portrait       939,000    3,200,000    −2,261,000     −126%          IDR 117K/hr

  ⟹ Every job type is making a LOSS once Reza's time is priced at IDR 400K/hr.
     The portrait session at IDR 1,800,000 is the worst — it earns IDR 117K/hr,
     which is below minimum wage for skilled work.
     The wedding at IDR 7,500,000 earns IDR 189K/hr — better, but still less
     than half the target rate.

  Monthly effective rate check:
  Total hours worked: (2×32) + (3×18) + (3×12) + (1×8) = 64+54+36+8 = 162 hours/month
  Monthly cash profit: (2×6,039K) + (3×3,239K) + (3×2,039K) + (1×939K)
                     = 12,078K + 9,717K + 6,117K + 939K = IDR 28,851,000
  Monthly revenue: IDR 38,700,000
  Monthly costs (var + overhead): IDR 38,700,000 − IDR 28,851,000 = IDR 9,849,000
  Effective monthly profit if Reza "pays himself" IDR 400K/hr:
    = IDR 28,851,000 − (162 hrs × IDR 400,000) = IDR 28,851,000 − IDR 64,800,000
    = −IDR 35,949,000 / month

  This explains the IDR 3–4M savings. Reza is NOT paying himself a market rate.
  He is implicitly working for IDR 178,000/hour and saving the residual.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Minimum Viable Prices for Target Profitability</strong></p>
          <div className="calculation">
{`Required Price = Variable Cost + Overhead Allocation + Time Cost (at IDR 400K/hr)

Job Type    Var Cost   Overhead   Time Cost    Required Price  Current Price  Gap
──────────────────────────────────────────────────────────────────────────────────
Wedding      850,000    611,000   12,800,000    14,261,000       7,500,000   +90%
Corporate    650,000    611,000    7,200,000     8,461,000       4,500,000   +88%
Product      150,000    611,000    4,800,000     5,561,000       2,800,000   +99%
Portrait     250,000    611,000    3,200,000     4,061,000       1,800,000  +126%

  ⟹ At a target rate of IDR 400K/hr, Reza would need to charge:
     - IDR 14.3M per wedding (currently IDR 7.5M — a 90% increase)
     - IDR 8.5M per corporate event (currently IDR 4.5M — an 88% increase)
     These prices are roughly double market rates in Bandung. Not realistic
     at current job types.

  Alternative — Reduce hours per job instead of raising prices:
  What if Reza cuts editing time by 40% (using AI-assisted editing tools)?
  Wedding:   32 hrs → 20 hrs. Time cost: IDR 8,000,000. Gap at IDR 7.5M price:
    Cash Profit (IDR 6,039,000) − New Time Cost (IDR 8,000,000) = −IDR 1,961,000
    Still negative but dramatically better. Required price drops to IDR 9,461,000.

  What if Reza raises prices AND reduces hours?
    Wedding at IDR 10,000,000 + 20-hour delivery:
    Cash Profit = IDR 10,000,000 − IDR 850,000 − IDR 611,000 = IDR 8,539,000
    Time Cost = 20 × IDR 400,000 = IDR 8,000,000
    True Profit = IDR 8,539,000 − IDR 8,000,000 = +IDR 539,000 ← first positive result

    ⟹ The path to profitability requires BOTH: pricing up AND working more efficiently.
       Neither alone is sufficient.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — Reza Is Working for IDR 178,000/Hour While Believing He Earns IDR 800,000/Hour</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza's mental model: "IDR 7.5M for a wedding day = IDR 750K per hour of shoot time."
              Reality: IDR 7.5M across 32 hours of total work = IDR 234K/hour in gross revenue.
              After variable costs and overhead: IDR 189K/hour in actual pocket money. Before any
              savings or reinvestment. This is the central finding — the gap between perceived hourly
              rate (based on shoot day only) and true hourly rate (based on all job-related hours) is
              nearly 4x. Every creative freelancer who does not track total hours makes this mistake.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — Product Photography Is the Worst Job Type (Despite Feeling Easy)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza enjoys product shoots — they are low-stress, no client emotions, no outdoor logistics.
              But at IDR 2,800,000 per booking and 12 hours of total work, the effective rate is
              IDR 170,000/hour — the lowest of any job type. These jobs are pricing themselves as
              "easy work" when in fact the 12-hour total (shoot + editing + delivery) makes them
              comparable in time cost to a half-day corporate event. Product photography is either
              underpriced or over-delivered.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — The Business Cannot Be Fixed by Raising Prices Alone</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Doubling prices is not realistic in a competitive market. The required price for a
              wedding at IDR 14.3M is 90% above current rates and above what most mid-market
              Bandung clients will pay. The solution must combine: (1) pricing increases where the
              market allows (10–25%), (2) reducing hours per job through workflow efficiency (AI
              editing tools, preset automation), and (3) dropping or radically repricing the
              lowest-return job types (portrait, entry-level product).
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — Equipment Depreciation Is an Unreserved Time Bomb</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza is not setting aside IDR 3,000,000/month for equipment replacement. When his
              primary camera body fails — which is a matter of when, not if, for a working
              professional — he will need IDR 20–30 million for a replacement and have nothing
              saved for it. He will either go into debt or be unable to shoot for weeks while
              sourcing funds. The discipline of treating depreciation as a monthly expense, even
              though it is non-cash, protects him from this shock.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — This Month</h3>
          <div className="highlight-box">
            <strong>1A. Stop Taking Portrait Sessions at Current Prices</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Raise portrait session pricing from IDR 1,800,000 to IDR 3,500,000
              minimum, or stop accepting them. If demand dries up at IDR 3,500,000, that is evidence
              the market will not compensate Reza fairly for this job type — and he should redirect
              that time to better-paying job types.
              <br /><strong>Why:</strong> Portrait sessions earn IDR 117K/hour — below the threshold
              where the business is compensating Reza for his skill and time. Taking them prevents him
              from booking higher-margin jobs in the same time slots.
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Open a Dedicated Equipment Reserve Account</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Transfer IDR 3,000,000 to a separate account every month, labelled
              "equipment fund." Do not touch it for personal expenses.
              <br /><strong>Why:</strong> This is not saving — it is accounting for a cost that is
              already being incurred. The equipment is depreciating whether or not Reza is setting
              money aside. The reserve prevents the equipment failure from becoming a business crisis.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — This Quarter</h3>
          <div className="highlight-box">
            <strong>2A. Reduce Editing Hours by 30–40% Using Presets and AI Tools</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Invest 2 weeks building a Lightroom preset library for the top
              5 shooting conditions (indoor reception, outdoor ceremony, corporate conference, product
              flat lay, portrait natural light). Use AI-assisted culling tools (e.g., Imagen, Aftershoot).
              Target: cut editing time per wedding from 14 hours to 8 hours.
              <br /><strong>Why:</strong> Editing time is the largest hidden cost. Reducing it by 40%
              without reducing quality is the highest-ROI action available. At IDR 400K/hr, saving 6
              hours per wedding recovers IDR 2,400,000 in true profit — per event.
            </p>
          </div>
          <div className="highlight-box">
            <strong>2B. Raise Wedding and Corporate Prices by 20–25%</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Wedding: IDR 7,500,000 → IDR 9,000,000. Corporate: IDR 4,500,000
              → IDR 5,500,000. These increases are below the required minimum for full profitability
              but they are achievable in the market and represent meaningful improvement.
              <br /><strong>Why:</strong> Combined with editing efficiency gains, a 25% price increase
              on a 20-hour wedding moves the true profit per job from −IDR 6.8M to approximately
              +IDR 1.5M. The combination of price + efficiency is what makes the economics work.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — Next 6 Months</h3>
          <div className="highlight-box">
            <strong>3A. Shift Mix Toward Product Photography for Commercial Clients</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Target brand and e-commerce clients for product photography at
              IDR 5,000,000+ per session (currently IDR 2,800,000). These clients pay per deliverable
              count (e.g., 30 images), not per day — meaning Reza can set prices based on value
              delivered, not time spent. Commercial clients also have larger budgets than individuals.
              <br /><strong>Why:</strong> Product photography has the lowest variable cost of any
              job type. At IDR 5,000,000 per session with 12 hours of work, the effective rate rises
              to IDR 358K/hour (before overhead) — much closer to target.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What Reza Will Resist: Raising Prices</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza's fear is that higher prices will cost him bookings. This is a real risk in a
              competitive market. The counter-argument Tias should make: <em>"You are currently
              working 162 hours per month and saving IDR 3–4M. If a 25% price increase causes
              20% volume loss (7 jobs instead of 9), you would work 127 hours and earn IDR 31M
              in revenue. After costs, you would save approximately IDR 5–6M — more money for less
              work. You need to be comfortable earning more from fewer jobs."</em>
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Reza Will Struggle With: Valuing His Own Time</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The hardest part of this analysis for Reza is accepting that his time has a price.
              Creative freelancers often feel that their work is an expression of passion, which
              makes it feel wrong to "charge for every hour." But passion does not pay rent.
              The purpose of the hourly rate is not to make work feel transactional — it is to
              ensure that the business is sustainable. Reza can love photography and still require
              the business to compensate him fairly for the hours it consumes.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics — What to Track Every Month</strong>
            <table className="data-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Target (Month 6)</th>
                  <th>Warning Sign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Effective rate (IDR/hr)</td>
                  <td>~178,000</td>
                  <td>≥ 280,000</td>
                  <td>Below 200,000 after Month 3</td>
                </tr>
                <tr>
                  <td>Monthly true savings (IDR)</td>
                  <td>~3,500,000</td>
                  <td>≥ 8,000,000</td>
                  <td>Below 5,000,000 at Month 4</td>
                </tr>
                <tr>
                  <td>Equipment reserve balance (IDR)</td>
                  <td>0</td>
                  <td>≥ 18,000,000</td>
                  <td>Not growing — skip month means risk</td>
                </tr>
                <tr>
                  <td>Hours per wedding</td>
                  <td>32</td>
                  <td>≤ 22</td>
                  <td>Still above 28 at Month 3</td>
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
            <strong>Unit Economics: The "Unit" Must Include Everything That Unit Consumes</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most common error in unit economics for service businesses is defining the unit
              cost too narrowly. Reza defined his job cost as "direct cash spent" — Tias's day rate,
              travel, printing. That leaves out equipment depreciation (a deferred cash cost), overhead
              allocation (a pro-rata fixed cost), and time (an opportunity cost). A complete unit
              economics model accounts for every resource the unit consumes — whether that resource
              is paid in cash today, paid in cash later, or paid in the owner's time.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Time Is the Most Underpriced Resource in Small Service Businesses</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              For product businesses (cafés, laundry, resellers), the owner's time is one input among
              many. For service businesses (photography, consulting, tutoring, design), the owner's time
              IS the product. Underpricing time means underpricing the business. The rule of thumb: if
              your business would cease to function without you putting in more than 40 hours per week,
              and you are not earning the equivalent of a senior professional salary from it, the
              business is not compensating you fairly — regardless of what the revenue number says.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Non-Cash Costs Are as Real as Cash Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Depreciation does not appear in a cash account. But when Reza's camera body breaks after
              two years of hard use, he will need to replace it with real cash. The "invisible" IDR 3M
              per month that he should be reserving is the same IDR 36M he will need to spend in Year 3
              on equipment replacement. Ignoring non-cash costs does not make them disappear — it just
              means the owner is surprised by them when they arrive. Every business that owns significant
              depreciating assets (cameras, vehicles, machines, computers) should maintain a depreciation
              reserve, even if it is just a separate bank account.
            </p>
          </div>
          <div className="highlight-box">
            <strong>A Full Calendar Is a Vanity Metric</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Reza equated busyness with business success. They are not the same. A full calendar of
              unprofitable work is worse than a half-full calendar of profitable work — because the
              full calendar also consumes the time that could be spent on higher-value activities
              (building skills, pitching better clients, developing passive income streams). Once unit
              economics reveals which jobs are truly profitable, the goal should be to fill the calendar
              with those jobs and eliminate or radically reprice the rest.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case04
