const Case10 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 10</span>
        <h1>More Machines, More Risk — Or More Profit?</h1>
        <div className="case-meta">
          Industry: Laundry &amp; Personal Services &bull; Level: Beginner / Small Business — Operating Leverage &amp; Capacity Investment
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>Pak Bimo Wirawan, 38, has been running "Kilau Bersih Laundry" out of a ruko in Antapani, Bandung, for six years. The shop occupies 90 square meters on the ground floor, lined with eight industrial washing machines and six dryers. Bimo offers two services: self-service coin laundry (customers load and operate the machines themselves) and kiloan full-service laundry (customers drop off bags, Bimo's staff wash, dry, fold, and return them within three days). He also offers antar-jemput — a pickup and delivery service that has quietly become his fastest-growing revenue stream, particularly from the boarding houses and university dormitories nearby.</p>
          <p>Bimo came to the laundry business from a different path. He spent his twenties working in a textile factory in Majalaya, learning machine operations and industrial-scale fabric care. When the factory downsized in 2018, he took his severance pay, rented the Antapani ruko, and invested everything into secondhand German washing machines. He taught himself the business in six months and has not looked back. He is methodical, low-key, and deeply comfortable with equipment — more comfortable than he is with numbers.</p>
          <p>His younger brother Rino Wirawan, 26, is a third-year accounting student at Telkom University Bandung. Rino visits on weekends and has been gently suggesting for months that Bimo's success is hiding something uncomfortable. Day-to-day operations are managed by Mbak Yuni Astuti, 31, who has been with the business for four years and effectively runs the floor — scheduling, quality checks, customer pickups — while Bimo handles supplier relationships and equipment maintenance.</p>
          <p>This is not a complicated corporate engagement. Bimo lives ten minutes from the shop, drives the same secondhand Carry van he used for his first deliveries, and eats lunch at the same warteg across the street every day. What is at stake here is whether one significant purchasing decision — IDR 88 million in new machines — will amplify his success or quietly undermine the business he has spent six years building.</p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A machine distributor visited Kilau Bersih in August and offered Bimo four new industrial washing machines at IDR 22 million each — a fleet price. Bimo's eight machines were running at full capacity during peak season, and he had been turning away walk-in customers during busy weeks. The distributor's pitch was compelling: more machines, more capacity, more revenue. Bimo called Rino that evening. Rino asked one question: "How busy are you in June, Mas?" Bimo went quiet. June is the slow month. That silence started this analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Number, Three Causes</h2>
        <div className="content">
          <p>On the surface, the question is simple: should Bimo spend IDR 88 million on new machines? But the real problem is that Bimo has never formally understood why his business swings between IDR 11.6 million profit in August and IDR 4.6 million loss in June — despite the fact that he works equally hard in both months, his staff shows up, and the machines run. The investment decision cannot be answered without first understanding the profit volatility.</p>

          <div className="highlight-box">
            <strong>Driver 1 — High Fixed Cost Base (≈60% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Bimo's largest costs — rent (IDR 8 million), machine depreciation (IDR 4.2 million), and two permanent staff (IDR 7.5 million) — do not move with volume. They are paid in full whether the shop processes 1,000 kg or 5,000 kg per month. These fixed costs total IDR 28 million per month. Every kilogram of laundry he processes above break-even is highly profitable; every kilogram below break-even makes the fixed cost overhang worse.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 2 — Seasonal Volume Swings (≈30% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Laundry demand in Bandung follows a clear seasonal pattern driven by the academic calendar and weather. August and September (back-to-school, student move-in season) are peak months, with Bimo processing close to 4,400 kg. May through July — the dry season plus mid-semester lull — drops volume to around 2,600 kg. This is a 41% volume swing between peak and trough, but because fixed costs do not move, the profit swing is far larger: from +IDR 11.6 million to -IDR 4.6 million. A 41% volume drop produces a 140% profit swing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 3 — Machine Investment Would Raise the Fixed Base Further (≈10% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The proposed investment adds IDR 1.47 million per month in depreciation and requires a third permanent operator at IDR 3.5 million per month — a combined IDR 5 million increase in fixed costs. This raises break-even from 3,111 kg to 3,667 kg per month. Under the base case where demand does not grow, the business would now lose money in three seasons out of four instead of one.
            </p>
          </div>

          <p>The compounding effect is severe: high fixed costs create leverage that amplifies both peaks and troughs. Adding more fixed costs through machine investment increases that leverage further. If demand grows to justify the new capacity, the amplification works in Bimo's favor. If demand does not grow, the investment turns a profitable business into a consistent money-loser.</p>
          <p>An important insight that surprises most beginners: the machines themselves create no new demand. They expand Bimo's ability to serve demand that already exists. The real question is not "can I fill these machines in August?" — the answer is obviously yes. The real question is "can I fill these machines in June?" And that answer determines whether the investment makes sense.</p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At what volume growth rate does the IDR 88 million machine investment create value rather than destroy it — and what is Bimo's realistic path to achieving that volume?
            </p>
          </div>
          <p>Three supporting questions structure the analysis:</p>
          <p><strong>1.</strong> What is Kilau Bersih's current operating leverage — how sensitive is profit to volume changes at each seasonal level?</p>
          <p><strong>2.</strong> Under base-case (no volume growth) and optimistic-case (25% volume growth) scenarios, what does the new fixed cost base do to annual profitability?</p>
          <p><strong>3.</strong> Is there an alternative investment that grows demand before capacity — spending on delivery and marketing first, machines second?</p>
          <p>What success looks like: a clear go / no-go decision on the machine purchase, with a specific volume threshold Bimo must hit before the investment becomes rational, and a concrete plan for testing demand growth without the capital commitment.</p>
          <p>Analytical approach: operating leverage framework — fixed/variable cost decomposition, contribution margin calculation, break-even analysis, DOL computation, and scenario modeling across the full seasonal cycle. No advanced statistics required. The math is straightforward; the insight comes from applying it to all twelve months, not just the good ones.</p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>This case does not require a complex framework. The fundamental question — does adding fixed costs improve annual profitability given seasonal volume variance — is precisely what operating leverage analysis is designed to answer. A fancier model would add noise without adding clarity.</p>
          <div className="highlight-box">
            <strong>Primary: Operating Leverage Analysis (with DOL)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Operating leverage analysis decomposes costs into fixed and variable, calculates contribution margin per unit, determines break-even volume, and measures how sensitive operating profit is to volume changes. The Degree of Operating Leverage (DOL) is the key output: DOL = Total Contribution Margin ÷ Operating Profit. A DOL of 3.4 means a 10% volume drop produces a 34% profit drop — and vice versa.
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
                <td>NPV / DCF</td>
                <td>Multi-year present value of investment</td>
                <td>Overkill — the payback is short enough that simple ROIC suffices; adds complexity without changing the decision</td>
              </tr>
              <tr>
                <td>ROI / Payback Only</td>
                <td>Simple return on invested capital</td>
                <td>Does not capture the seasonal profit structure — averages across months, hiding the dangerous low-season losses</td>
              </tr>
              <tr>
                <td>Break-Even Only</td>
                <td>Minimum volume before profit</td>
                <td>Tells Bimo the threshold but not how much more sensitive the business becomes after investment</td>
              </tr>
              <tr>
                <td><strong>Operating Leverage + DOL</strong></td>
                <td><strong>Profit sensitivity across all volume levels</strong></td>
                <td><strong>Selected — captures full seasonal dynamics and the risk of raising the fixed base</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>Mbak Yuni keeps a physical ledger recording kilograms processed per day and daily cash receipts. Rino spent one Sunday transcribing twelve months of records. The data is rough — daily entries, not formal accounting — but it is accurate enough for the analysis. No sophisticated data system is required; the insight emerges from a simple spreadsheet.</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Volume (kg)</th>
                <th>Revenue (IDR)</th>
                <th>Variable Costs (IDR)</th>
                <th>Contribution Margin (IDR)</th>
                <th>Fixed Costs (IDR)</th>
                <th>Operating Profit (IDR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>January</td><td>4,200</td><td>67,200,000</td><td>29,400,000</td><td>37,800,000</td><td>28,000,000</td><td>9,800,000</td></tr>
              <tr><td>February</td><td>4,400</td><td>70,400,000</td><td>30,800,000</td><td>39,600,000</td><td>28,000,000</td><td>11,600,000</td></tr>
              <tr><td>March</td><td>3,500</td><td>56,000,000</td><td>24,500,000</td><td>31,500,000</td><td>28,000,000</td><td>3,500,000</td></tr>
              <tr><td>April</td><td>3,300</td><td>52,800,000</td><td>23,100,000</td><td>29,700,000</td><td>28,000,000</td><td>1,700,000</td></tr>
              <tr><td>May</td><td>2,700</td><td>43,200,000</td><td>18,900,000</td><td>24,300,000</td><td>28,000,000</td><td>-3,700,000</td></tr>
              <tr><td>June</td><td>2,600</td><td>41,600,000</td><td>18,200,000</td><td>23,400,000</td><td>28,000,000</td><td>-4,600,000</td></tr>
              <tr><td>July</td><td>2,800</td><td>44,800,000</td><td>19,600,000</td><td>25,200,000</td><td>28,000,000</td><td>-2,800,000</td></tr>
              <tr><td>August</td><td>4,400</td><td>70,400,000</td><td>30,800,000</td><td>39,600,000</td><td>28,000,000</td><td>11,600,000</td></tr>
              <tr><td>September</td><td>4,300</td><td>68,800,000</td><td>30,100,000</td><td>38,700,000</td><td>28,000,000</td><td>10,700,000</td></tr>
              <tr><td>October</td><td>3,400</td><td>54,400,000</td><td>23,800,000</td><td>30,600,000</td><td>28,000,000</td><td>2,600,000</td></tr>
              <tr><td>November</td><td>3,500</td><td>56,000,000</td><td>24,500,000</td><td>31,500,000</td><td>28,000,000</td><td>3,500,000</td></tr>
              <tr><td>December</td><td>2,900</td><td>46,400,000</td><td>20,300,000</td><td>26,100,000</td><td>28,000,000</td><td>-1,900,000</td></tr>
              <tr style={{ fontWeight: 'bold' }}><td>TOTAL</td><td>42,000</td><td>672,000,000</td><td>294,000,000</td><td>378,000,000</td><td>336,000,000</td><td>42,000,000</td></tr>
            </tbody>
          </table>
          <p>What the raw data shows: annual operating profit of IDR 42 million — respectable for a small UMKM. What the raw data hides: the business runs at a loss in four months out of twelve (May, June, July, December), and the August profit alone covers the entire annual loss from those four months with IDR 1.5 million to spare. The business is essentially profitable because of two exceptional months. Rino describes this as "living on eight months of margin to survive twelve months of fixed costs."</p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Step 1 — Separate Fixed from Variable Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before reaching for a calculator, Rino asks Bimo to list every monthly expense and classify each as fixed (does not change with volume) or variable (changes directly with kg processed). This exercise alone surprises Bimo: he has always thought of his electricity bill as variable, but the base meter charge (IDR 1.5 million/month) is fixed regardless of machine usage. Rent, machine depreciation, permanent staff, and the electricity base load are all fixed. Water, detergent, electricity per-cycle, packaging bags, and the piece-rate helpers during peak season are variable.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 2 — Calculate Contribution Margin per Kilogram</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              With the cost structure separated: Price IDR 16,000/kg minus Variable cost IDR 7,000/kg = Contribution Margin IDR 9,000/kg. This means every kilogram processed contributes IDR 9,000 toward covering fixed costs and then generating profit. Bimo did not know this number. He knew his price and had a vague sense of costs, but he had never calculated the unit-level contribution before.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 3 — Calculate Break-Even Volume</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Break-even = Fixed Costs ÷ CM per kg = IDR 28,000,000 ÷ IDR 9,000 = 3,111 kg per month. Bimo processes more than this in 8 months and less in 4 months. He now understands why he loses money in June: 2,600 kg processed vs. 3,111 kg needed. He is 511 kg short of covering his fixed costs, costing him IDR 511 × 9,000 = IDR 4,599,000 — exactly the loss the ledger shows.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 4 — Calculate Degree of Operating Leverage at Peak</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              DOL = Total Contribution Margin ÷ Operating Profit. At peak (August, 4,400 kg): CM = IDR 39,600,000; Profit = IDR 11,600,000; DOL = 39,600,000 ÷ 11,600,000 = 3.41. This means if August volume dropped 10% (to 3,960 kg), profit would fall 34.1% — from IDR 11.6 million to IDR 7.6 million. The business is meaningfully leveraged even at peak, which tells Rino that adding more fixed cost will amplify this sensitivity further.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 5 — Model the Investment Under Two Volume Scenarios</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rino runs two scenarios with the new machines: (A) demand stays flat — same monthly volumes as the current year; (B) demand grows 25% in all months — plausible if Bimo aggressively expands his pickup/delivery routes. Under Scenario A, new fixed costs (IDR 33 million/month) turn the annual result from IDR 42 million profit to IDR 17.4 million loss. Under Scenario B, annual profit rises to IDR 72 million. The investment is binary: it is excellent if demand grows, and catastrophic if it does not. The machines are not the decision — the demand is.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <div className="calculation">
{`CURRENT COST STRUCTURE

  Price per kg (full service):          IDR    16,000
  Variable costs per kg:
    Water (per wash cycle / kg):        IDR     1,800
    Detergent:                          IDR     1,500
    Electricity (per cycle variable):   IDR     1,200
    Packaging bags + hangers:           IDR       700
    Piece-rate helper (peak only, avg): IDR     1,800
    Total variable:                     IDR     7,000
                                        ─────────────
  Contribution Margin per kg:           IDR     9,000
  CM Ratio:                                    56.3%

  Fixed costs per month:
    Rent (90 sqm ruko, Antapani):       IDR  8,000,000
    Machine depreciation (14 units):    IDR  4,200,000
    Permanent staff × 2 (Yuni + asst):  IDR  7,500,000
    Electricity base load:              IDR  3,500,000
    Insurance + maintenance reserve:    IDR  2,000,000
    Admin, packaging stock, misc:       IDR  2,800,000
    Total fixed:                        IDR 28,000,000

  Break-even volume: 28,000,000 ÷ 9,000 = 3,111 kg/month`}
          </div>

          <div className="calculation">
{`PEAK vs. LOW SEASON PROFITABILITY

  PEAK (August — 4,400 kg)
  Revenue:          4,400 × 16,000 =    IDR 70,400,000
  Variable costs:   4,400 ×  7,000 =    IDR 30,800,000
  Contribution margin:                   IDR 39,600,000
  Fixed costs:                           IDR 28,000,000
                                         ─────────────
  Operating profit:                      IDR 11,600,000
  DOL:   39,600,000 ÷ 11,600,000 =            3.41 ×

  LOW (June — 2,600 kg)
  Revenue:          2,600 × 16,000 =    IDR 41,600,000
  Variable costs:   2,600 ×  7,000 =    IDR 18,200,000
  Contribution margin:                   IDR 23,400,000
  Fixed costs:                           IDR 28,000,000
                                         ─────────────
  Operating profit:                      -IDR 4,600,000
  (511 kg below break-even × IDR 9,000 = IDR 4,599,000 loss)`}
          </div>

          <div className="calculation">
{`INVESTMENT SCENARIO ANALYSIS

  Investment: 4 machines × IDR 22,000,000 = IDR 88,000,000
  New monthly fixed costs:
    Old fixed:                             IDR 28,000,000
    New depreciation (88M ÷ 60 months):   IDR  1,467,000
    New permanent operator:                IDR  3,500,000
    New total fixed:                       IDR 32,967,000  ≈ IDR 33,000,000

  New break-even: 33,000,000 ÷ 9,000 =       3,667 kg/month
  (Vs. current 3,111 kg — an increase of 556 kg/month)

  ─────────────────────────────────────────────────────────
  SCENARIO A: Demand stays flat (same volumes as year 1)

  Month       Volume    CM           Profit (new fixed)
  Jan          4,200    37,800,000    4,800,000
  Feb          4,400    39,600,000    6,600,000
  Mar          3,500    31,500,000   -1,500,000
  Apr          3,300    29,700,000   -3,300,000
  May          2,700    24,300,000   -8,700,000
  Jun          2,600    23,400,000   -9,600,000
  Jul          2,800    25,200,000   -7,800,000
  Aug          4,400    39,600,000    6,600,000
  Sep          4,300    38,700,000    5,700,000
  Oct          3,400    30,600,000   -2,400,000
  Nov          3,500    31,500,000   -1,500,000
  Dec          2,900    26,100,000   -6,900,000
                        ──────────────────────
  Annual total:        378,000,000  -17,400,000 ← LOSS

  Current annual profit:             IDR  42,000,000
  Scenario A annual result:         -IDR  17,400,000
  Annual change:                    -IDR  59,400,000
  Conclusion: Investment DESTROYS IDR 59.4M per year
              if demand does not grow.

  ─────────────────────────────────────────────────────────
  SCENARIO B: Demand grows 25% across all months

  Volume growth: each month × 1.25
  Peak (Aug): 5,500 kg → CM 49,500,000 → Profit 16,500,000
  Low (Jun):  3,250 kg → CM 29,250,000 → Profit -3,750,000
  Annual profit (estimated):          IDR  72,000,000

  Increase over current:              IDR  30,000,000/year
  Payback: 88,000,000 ÷ 30,000,000 =        2.9 years
  Conclusion: Investment creates value only if demand
              grows a sustained 25%+ across ALL seasons.`}
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Annual Profit</th>
                <th>vs. Current (IDR 42M)</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current (no investment)</td>
                <td>IDR 42,000,000</td>
                <td>—</td>
                <td>Baseline</td>
              </tr>
              <tr>
                <td>Investment + flat demand</td>
                <td>–IDR 17,400,000</td>
                <td>–IDR 59,400,000</td>
                <td>DO NOT invest</td>
              </tr>
              <tr>
                <td>Investment + 25% demand growth</td>
                <td>IDR 72,000,000</td>
                <td>+IDR 30,000,000</td>
                <td>Invest only IF demand is proven</td>
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
            <strong>Finding 1 — The Business Is Profitable on Paper but Fragile in Structure</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              IDR 42 million annual profit sounds healthy for a small UMKM. But that profit is generated almost entirely in four months (February, August, September, and January), while four other months run at a loss. Bimo has been subsidizing his slow season with his peak season without realizing it. The business's financial health depends on two back-to-school spikes that he cannot control. Any disruption to August demand — a new competitor opening nearby, a university changing its academic calendar — could eliminate a full year's profit.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — The Investment Fails Under the Base Case by a Wide Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The machine investment does not merely underperform under flat demand — it turns a profitable business into one that loses IDR 17.4 million per year. This is because the new fixed cost of IDR 5 million per month hits hardest in the months when volume is already below break-even. Adding fixed costs to a business with four loss-making months compounds losses in exactly those months. The machines offer no benefit in June — they will sit idle — while their depreciation and the new operator's salary continue.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — 25% Volume Growth Is Required, Not Just Possible</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              For the investment to make sense, Bimo needs to grow volume by 25% across all twelve months — including the slow ones. Growing peak months is relatively easy; Bimo is already turning away customers in August. Growing slow months requires either bringing in a customer base that does not follow the seasonal pattern (corporate clients, hospitals, restaurants with constant linen needs) or actively developing the pickup/delivery service to serve residential areas that currently self-launder. Neither happens automatically.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 (Counterintuitive) — The Cheaper Delivery Investment Targets the Right Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rino estimates that spending IDR 10 million on a second delivery motorbike and three months of free pickup promotion for new monthly subscribers could grow low-season volume from 2,600 to 3,400 kg — crossing break-even consistently. This IDR 10 million investment solves the problem the machines cannot: it creates demand in the months when machines are already idle. The machines are a supply-side solution to a demand-side problem.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Tier 1 — Do Immediately: Grow Demand Before Capacity (Low Cost)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Invest IDR 10 million in a second delivery motorbike and a three-month free pickup promotion targeting boarding houses, kost-kostan, and office buildings within 5 km. Offer monthly subscription packages (minimum 8 kg/week) to lock in recurring demand with predictable volume. This directly attacks the seasonal trough. Target: push June volume from 2,600 kg to 3,300 kg and sustain it. Review at the 6-month mark.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 2 — Do This Month: Establish a Cash Reserve Sized to the Low Season</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Bimo currently treats all monthly profit as available for personal withdrawal. He should open a dedicated business savings account and set aside IDR 5 million per month during profitable months to cover the four months when the business runs at a loss. This eliminates the personal financial stress of slow months and prevents him from making emotional investment decisions during peak-season euphoria.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 3 — Consider After 6 Months: Machine Investment With a Volume Gate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Set a specific trigger: if the pickup/delivery expansion consistently pushes average monthly volume above 3,800 kg — including in the traditionally slow months — then evaluate purchasing two machines (not four) as a first tranche. Two machines add IDR 2.5 million in fixed costs and cover incremental demand without overcommitting. Revisit the full four-machine investment only if two-machine utilization exceeds 80% during low season.
            </p>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Recommendation</th>
                <th>Investment</th>
                <th>Expected Annual Impact</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delivery expansion + subscription push</td>
                <td>IDR 10,000,000</td>
                <td>+IDR 18–25M (if low season crosses BE)</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Cash reserve discipline</td>
                <td>IDR 0</td>
                <td>Eliminates liquidity stress, better decisions</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>4-machine purchase (current plan)</td>
                <td>IDR 88,000,000</td>
                <td>–IDR 59.4M if demand flat</td>
                <td>High / Risky</td>
              </tr>
              <tr>
                <td>2-machine tranche (conditional)</td>
                <td>IDR 44,000,000</td>
                <td>+IDR 15–20M if demand is proven first</td>
                <td>Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>Bimo listens to Rino's presentation at the kitchen table on a Sunday evening. He is quiet for several minutes. He knows Rino is right — he has seen how slow June is. But he also knows that August was genuinely overwhelmed this year: customers were turned away, Mbak Yuni was working twelve-hour days, and he personally lost at least IDR 8 million in potential revenue from walk-ins who left because the queue was too long.</p>
          <p><strong>What Bimo will probably do:</strong> He will not buy four machines. That number alarmed him when he saw the scenario analysis. But he will likely buy one or two machines, reasoning that this is a sensible middle ground. He will also call the distributor and negotiate a lower price, which the distributor — who was always going to accept IDR 18 million per machine — will accept. Bimo's instinct toward moderation is generally sound, though his reasoning is driven more by gut than by the volume trigger Rino suggested.</p>
          <p><strong>What Bimo should do:</strong> Spend IDR 10 million on the delivery expansion first. Run it for six months. If June volume rises to 3,300+ kg consistently, then buy two machines. If June volume does not respond, the business has a demand problem that more capacity cannot solve. The machines will still be available to buy in six months — used equipment prices do not spike that fast.</p>
          <p>The gap between these two paths is the difference between a business that learns whether it has a demand problem before committing capital, and one that commits capital and then discovers the demand problem. Bimo is an equipment person by nature — he is more comfortable around machines than around marketing. Convincing him to spend on delivery before machines requires Rino to be persistent. Their relationship — brothers who trust each other — is what makes it possible.</p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — Always Model the Full Seasonal Cycle, Not Just the Good Months</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most common error when evaluating capacity investments is running the numbers only during peak season, when the machines are full and the business looks excellent. The machines will run every month, including the bad ones. Any fixed cost investment must be justified by its impact on annual profit — which means modeling every month with honest volume assumptions. One way to enforce this discipline: before building the peak-case scenario, build the worst-case scenario first.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — The Degree of Operating Leverage Tells You How Much Buffer You Need</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business with DOL of 3.41 needs IDR 3.41 in contribution margin to protect each IDR 1 of operating profit. When a business owner is deciding how much cash reserve to hold, the DOL is a useful input: higher DOL means more violent profit swings with small volume changes, which means a larger cash buffer is needed. Bimo's four loss-making months total IDR 11 million in losses — his reserve should comfortably cover this plus one additional bad month as a margin of safety.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — Supply Investments Do Not Create Demand</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is the insight that experienced operators understand intuitively but first-time analysts often miss. Buying a new machine, opening a new branch, or adding production capacity expands what a business can serve — it does not expand what customers want to buy. Before any capacity investment, the question must be: is there proven, unserved demand that this capacity will capture? In Bimo's case, there is proven unserved demand in August. There is zero evidence of unserved demand in June. The investment serves August but the costs run in June.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — Sequence Demand Before Capacity, Especially With Seasonal Businesses</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rino's recommendation to invest IDR 10 million in delivery first is a classic "prove then scale" approach. By testing whether marketing and distribution can lift slow-season volume before committing IDR 88 million in fixed assets, Bimo learns whether his real problem is demand or capacity — at a fraction of the cost of the wrong answer. This sequencing discipline — prove the demand assumption before betting on it — applies to almost every capital investment decision a small business faces.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case10
