import OperatingLeverageCalc from './calculators/OperatingLeverageCalc.jsx'

const PreD2 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module D2</span>
        <h1>Operating Leverage</h1>
        <div className="case-meta">
          Module D: Business Model Intuition &bull; Why a 20% volume drop can wipe out 80% of your profit — and how to use this force instead of fearing it
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>Wati Handayani, 35, runs a garment workshop in Semarang — eight industrial sewing machines in a 180 sqm rented space, producing school uniforms and corporate workwear. She has been in business for four years. Some months she clears IDR 40 million in profit. Other months she barely breaks even. She works equally hard both ways. Her three permanent staff show up, the rent gets paid, the machines run.</p>
          <p>What confuses Wati is that the effort is the same but the results are wildly different. She thinks of it as bad luck: certain months school orders cluster, other months they don't. When Wati's bookkeeper friend Rina visits and reviews six months of records, she immediately spots the pattern. The problem is not luck. It is cost structure. When orders are high, Wati's profit explodes because her biggest costs — rent, machine depreciation, permanent staff — are already paid and do not rise with volume. When orders are low, those same costs eat her alive.</p>
          <p>Rina draws a single number on paper: 3.2. That is Wati's degree of operating leverage. It means every 10% increase in sales volume produces a 32% increase in operating profit — and every 10% decline in volume produces a 32% decline in operating profit. Wati's business is not unpredictable. It is highly leveraged. Understanding this does not make the swings smaller, but it changes everything about how you plan for them, price for them, and decide whether to grow.</p>
          <div className="highlight-box">
            <strong>What Is Operating Leverage?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Operating leverage describes how sensitive a business's operating profit is to changes in revenue. It is created by fixed costs: costs that do not change with volume. A business with high fixed costs and low variable costs is said to have high operating leverage — a small increase in volume produces a large increase in profit, and a small decrease in volume produces a large decrease in profit. Operating leverage is not good or bad. It is a structural property of the cost architecture that magnifies both upside and downside.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Fixed Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Costs that remain constant regardless of how many units you produce or sell. You pay them whether you have one customer or one hundred. They include rent, machine depreciation, permanent staff salaries, insurance, and utility base charges.<br /><br />
              <strong>Key insight:</strong> Fixed costs per unit decrease as volume increases. At 100 units, each unit bears IDR 100,000 of rent. At 1,000 units, each unit bears only IDR 10,000.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Variable Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Costs that rise proportionally with production volume. They include raw materials, piece-rate labor, packaging, and per-unit shipping. Variable cost per unit stays roughly constant regardless of volume.<br /><br />
              <strong>Key insight:</strong> You can control total variable cost by controlling volume. You cannot control total fixed cost in the short run.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Contribution Margin (CM)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The amount each unit sold contributes toward covering fixed costs and then generating profit.<br /><br />
              <strong>Formula:</strong> CM per unit = Selling Price − Variable Cost per Unit<br />
              <strong>Formula:</strong> CM ratio = CM per Unit ÷ Selling Price<br /><br />
              Once total CM covers total fixed costs, every additional unit sold flows almost entirely to profit.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Degree of Operating Leverage (DOL)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A multiplier that tells you how much operating profit changes for a given change in sales volume.<br /><br />
              <strong>Formula:</strong> DOL = Total Contribution Margin ÷ Operating Profit<br /><br />
              At a DOL of 3.2: a 10% volume increase → 32% profit increase. A 10% volume decline → 32% profit decline. The DOL is highest just above break-even (where profit is tiny relative to CM) and falls as profit grows.
            </p>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Formula</th>
                <th>What It Tells You</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fixed Cost per Unit</td>
                <td>Total Fixed Cost ÷ Units Produced</td>
                <td>How much overhead each unit must absorb</td>
              </tr>
              <tr>
                <td>Contribution Margin</td>
                <td>Price − Variable Cost per Unit</td>
                <td>How much each unit contributes after variable costs</td>
              </tr>
              <tr>
                <td>Break-Even Volume</td>
                <td>Fixed Costs ÷ CM per Unit</td>
                <td>Minimum volume before any profit is possible</td>
              </tr>
              <tr>
                <td>Degree of Operating Leverage</td>
                <td>Total CM ÷ Operating Profit</td>
                <td>Profit sensitivity to volume changes (the multiplier)</td>
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
            <strong>Mistake 1 — Treating Labor as Variable When Much of It Is Fixed in Practice</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wati has three permanent employees she cannot easily lay off in slow months. Socially and legally, they are effectively fixed costs. But she records their salaries in the same bucket as her piece-rate sewers, who are genuinely variable. This understates her real fixed cost base by IDR 9 million per month and overstates her variable cost. The result: she thinks her break-even is lower than it really is, and she underestimates how quickly losses compound when volume drops. Always separate de facto fixed labor (people you cannot release) from genuinely variable labor (people you pay only when there is work).
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Confusing High Operating Leverage with Low Risk</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              High operating leverage amplifies profit when volume is above break-even. This feels good in a strong season. But it equally amplifies losses when volume falls below break-even. Many business owners invest in more equipment or space to "improve efficiency" — which raises fixed costs and therefore operating leverage — without realizing they have made the business more fragile in downturns. A business with DOL of 5.0 has five times the profit sensitivity of a business with DOL of 1.0. That is not inherently better — it is inherently more volatile.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Making Capacity Decisions Without Modeling the Low Season</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When evaluating whether to expand — buy more machines, hire more permanent staff, rent bigger space — most owners model the upside ("if I'm at full capacity in peak season, I earn X more"). Almost none model what happens to losses in the slow season with the higher fixed cost base. For Wati, adding one more sewing machine feels easy to justify in June when orders are overflowing. But that machine's depreciation adds to fixed costs every month including February, when she is already losing money. Always model the full seasonal cycle, not just the peak, before adding fixed costs.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Wati's Garment Workshop: Two Seasons, One Cost Structure</h2>
        <div className="content">
          <p>Wati's workshop produces school uniforms at IDR 78,000 per piece. Variable cost per piece is IDR 52,000 (fabric IDR 28,000, trim/thread IDR 4,000, piece-rate sewers IDR 18,000, electricity per-unit IDR 2,000). Fixed costs are IDR 25,000,000 per month.</p>

          <div className="calculation">
{`Wati's Garment Workshop — Operating Leverage Analysis

  ─────────────────────────────────────────────────────────

  COST STRUCTURE
  Selling price per uniform:                    IDR    78,000
  Variable cost per uniform:                    IDR    52,000
    Fabric:                          IDR 28,000
    Trim, thread, buttons:           IDR  4,000
    Piece-rate sewers:               IDR 18,000
    Electricity (per unit):          IDR  2,000
  Contribution margin per unit:                 IDR    26,000
  CM ratio:                                          33.3%

  Fixed costs per month:                        IDR 25,000,000
    Rent (180 sqm industrial):       IDR  6,500,000
    Machine depreciation (8 × 5yr):  IDR  4,200,000
    Permanent staff (3 people):      IDR  9,800,000
    Electricity base load:           IDR  2,800,000
    Misc (admin, insurance, etc.):   IDR  1,700,000

  Break-even volume:  25,000,000 ÷ 26,000 =   962 units/month

  ─────────────────────────────────────────────────────────

  PEAK SEASON (June–August, school year start)
  Volume: 2,800 uniforms/month

  Revenue:       2,800 × 78,000 =              IDR 218,400,000
  Variable cost: 2,800 × 52,000 =              IDR 145,600,000
  Contribution margin:                          IDR  72,800,000
  Fixed costs:                                  IDR  25,000,000
  Operating profit:                             IDR  47,800,000
  Operating margin:                                    21.9%

  DOL (peak) = 72,800,000 ÷ 47,800,000 =          1.52 ×

  → A 10% volume increase at peak → 15.2% profit increase
  → A 10% volume decline at peak → 15.2% profit decline

  ─────────────────────────────────────────────────────────

  LOW SEASON (October–February, mid-school year)
  Volume: 800 uniforms/month

  Revenue:         800 × 78,000 =               IDR  62,400,000
  Variable cost:   800 × 52,000 =               IDR  41,600,000
  Contribution margin:                           IDR  20,800,000
  Fixed costs:                                   IDR  25,000,000
  Operating profit:                             -IDR   4,200,000
  (Loss — 162 units below break-even)

  DOL is not meaningful below break-even.
  Every additional unit sold generates IDR 26,000 toward
  closing the IDR 4,200,000 gap.

  ─────────────────────────────────────────────────────────

  ANNUAL PICTURE (approximate — 5 peak, 7 low months)
  Peak months profit:    5 × 47,800,000 =        IDR 239,000,000
  Low months loss:       7 × (-4,200,000) =      -IDR  29,400,000
  Full-year operating profit:                     IDR 209,600,000

  Average monthly profit:                         IDR  17,467,000
  (Hides enormous month-to-month variance)`}
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Season</th>
                <th>Volume (units)</th>
                <th>Total CM</th>
                <th>Operating Profit</th>
                <th>DOL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peak (Jun–Aug)</td>
                <td>2,800</td>
                <td>IDR 72,800,000</td>
                <td>IDR 47,800,000</td>
                <td>1.52×</td>
              </tr>
              <tr>
                <td>Low (Oct–Feb)</td>
                <td>800</td>
                <td>IDR 20,800,000</td>
                <td>–IDR 4,200,000</td>
                <td>N/A (loss)</td>
              </tr>
              <tr>
                <td>Break-Even</td>
                <td>962</td>
                <td>IDR 25,000,000</td>
                <td>IDR 0</td>
                <td>∞ (theoretical)</td>
              </tr>
            </tbody>
          </table>
          <p>The DOL of 1.52 at peak means Wati's business is not highly leveraged when it's running at full speed — profits are already large and absorb volume changes. The danger zone is the low season where she hovers just below break-even. A single large late order arriving in February rather than March can swing her from a IDR 4M loss to a IDR 4M profit that month.</p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 10 — Pak Bimo's Laundry: High Operating Leverage and a Machine Investment Decision</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Bimo's coin laundry in Bandung has almost identical structural dynamics to Wati's workshop: high fixed costs (machines, rent, permanent staff) and low variable costs per kilogram served. His DOL at peak season is 3.41 — meaning a 10% volume decline wipes out 34% of profit. The case centers on Bimo's decision to buy four more industrial washing machines for IDR 88 million, which would add IDR 5 million per month in new fixed costs and raise his break-even volume from 3,111 kg to 3,667 kg. His brother Rino's analysis shows that under the base-case scenario (demand does not grow significantly), the investment turns a profitable business into an annual loss. The case traces how Rino calculates this using the operating leverage framework.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — Draw the Profit Line Across the Full Volume Range</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The single most useful thing you can do with operating leverage is draw a simple graph: volume on the x-axis, operating profit on the y-axis. The line crosses zero at break-even. Below break-even the slope goes down (losses accumulate with fixed costs). Above break-even the slope goes up steeply. Now draw a second line for the "after expansion" scenario with higher fixed costs — it starts deeper in negative territory and takes longer to reach profitability. Showing an owner these two lines side by side is often more persuasive than any table of numbers.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — Calculate How Many Extra Units Are Needed to Justify Fixed Cost Increases</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When a business wants to add fixed costs — new equipment, a new hire, bigger space — always calculate the incremental volume required to cover just the new fixed cost. Formula: ΔFixed Cost ÷ CM per Unit. If Wati adds a ninth sewing machine at IDR 800,000/month depreciation, she needs 800,000 ÷ 26,000 = 31 more uniform orders per month to break even on that machine alone. Is 31 extra uniforms per month realistic? That single calculation reframes the decision from "can I afford this machine?" to "can I generate this volume consistently?"
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — Seasonal Businesses Need a Cash Reserve Sized to Cover the Low-Season Loss</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If a business consistently loses money in slow months, the peak-season profits need to cover both the slow-season losses AND fund the business owner's annual income. Wati needs to set aside enough from her June–August profits to cover the shortfall through February. The formula: reserve = (expected monthly loss) × (number of low months) + (desired owner withdrawal during low months). Owners who treat all peak-season profit as spendable are setting themselves up for a cash crisis every January.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — High Operating Leverage Is a Strategic Choice, Not a Fate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business owner can deliberately choose lower operating leverage by keeping more costs variable — using subcontractors instead of permanent staff, renting machines instead of buying them, using shared production facilities instead of owning space. This reduces maximum peak-season profit but also eliminates slow-season losses. For a business with highly seasonal demand, lower leverage (more variable costs) may produce better average annual profit than high leverage with severe slow-season losses. The right leverage level depends on how predictable and stable demand is — the more predictable the volume, the more fixed cost structure makes sense.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Compare a high-fixed and low-fixed cost structure across revenue levels — the crossover point is where operating leverage flips.
          </p>
          <OperatingLeverageCalc />
        </div>
      </section>

    </div>
  )
}

export default PreD2
