import FixedVariableCalc from './calculators/FixedVariableCalc.jsx'

const PreB1 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module B1</span>
        <h1>Fixed vs Variable Costs</h1>
        <div className="case-meta">
          Module B: How Businesses Create Value &bull; The cost distinction that underlies every financial decision
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Pak Anton</strong> owns a kos-kosan (boarding house) in Yogyakarta — a two-storey
            building with 20 rooms, each rented to university students. Currently 14 rooms are occupied.
            He is considering whether to lower his price to fill the remaining 6 rooms.
          </p>
          <p>
            His friend says: <em>"If you lower the price, you'll earn less per room — it won't be
            worth it."</em> Anton is not sure. He wonders: how much does it actually cost him to have
            one more tenant?
          </p>
          <div className="highlight-box">
            <strong>The Answer Depends on Whether the Cost Is Fixed or Variable</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Some of Anton's costs are the same whether he has 1 tenant or 20 — the mortgage, building
              insurance, property tax, security guard. These costs are <strong>fixed</strong>: they do
              not change with the number of tenants.
              <br /><br />
              Other costs only appear when there is a tenant occupying the room — electricity, water,
              laundry service for sheets, cleaning. These are <strong>variable</strong>: they scale with
              occupancy.
              <br /><br />
              Understanding this distinction tells Anton exactly what it costs him to house one more
              student — and therefore whether a lower price is still worth accepting.
            </p>
          </div>
          <p>
            This fixed vs. variable distinction is the foundation of contribution margin analysis,
            break-even analysis, and every expansion or pricing decision in business. You cannot do
            the math correctly without it.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Fixed Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Costs that stay the same regardless of how much you produce or sell. They exist whether
              the business is busy or empty. You must pay them even if revenue is zero.
              <br /><br />
              Examples: rent, staff salaries (salaried employees), equipment loans, insurance,
              depreciation, annual licenses.
              <br /><br />
              <strong>Key property:</strong> Fixed costs per unit fall as volume increases. If rent is
              IDR 10 million/month and you serve 100 customers, rent per customer is IDR 100,000.
              If you serve 200 customers, rent per customer drops to IDR 50,000. The total cost is
              unchanged; it just gets spread across more units.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Variable Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Costs that increase directly with production or sales volume. If you serve more
              customers, variable costs go up. If you serve zero customers, variable costs are zero.
              <br /><br />
              Examples: raw materials, ingredients, packaging, delivery fees, commissions,
              utility bills that scale with usage.
              <br /><br />
              <strong>Key property:</strong> Variable cost per unit is roughly constant regardless
              of volume. If packaging costs IDR 2,000 per order, it costs IDR 2,000 whether you
              ship 10 orders or 10,000.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Semi-Variable (Mixed) Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Some costs have both a fixed component and a variable component. Electricity is a common
              example: there is a base connection charge (fixed) plus a per-kilowatt-hour charge
              (variable). Staff costs are semi-variable in practice — a base team is fixed (salaried),
              and additional part-time hours are variable.
              <br /><br />
              For most beginner analyses, semi-variable costs are split into their fixed and variable
              components, or treated as fully fixed or fully variable based on which behavior dominates.
            </p>
          </div>

          <p><strong>Total Cost = Fixed Costs + (Variable Cost per Unit × Volume)</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cost Type</th>
                <th>Behavior</th>
                <th>Kos-Kosan Example</th>
                <th>Warung Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fixed</td>
                <td>Same at 0 or 100 units</td>
                <td>Mortgage, insurance, security</td>
                <td>Rent, salaried staff</td>
              </tr>
              <tr>
                <td>Variable</td>
                <td>Scales with output</td>
                <td>Electricity per room, cleaning per tenant</td>
                <td>Ingredients, packaging per meal</td>
              </tr>
              <tr>
                <td>Semi-Variable</td>
                <td>Base + per-unit charge</td>
                <td>Water bill (base + per m³)</td>
                <td>Electricity (base + per kWh)</td>
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
            <strong>Mistake 1 — Treating All Costs as Variable When Deciding on Price</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Anton's friend said "lowering the price won't be worth it." This logic implicitly
              assumes that every tenant brings the same cost to the business. But it is wrong.
              The 15th tenant does not cost Anton another mortgage payment, another insurance
              premium, another security guard. The 15th tenant only costs the electricity and
              cleaning for that one room. If the room rents for IDR 1,200,000/month and the
              variable cost of occupying it is IDR 200,000/month, Anton earns IDR 1,000,000
              in contribution toward fixed costs — even at a "discounted" price.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Cutting Fixed Costs to Solve a Revenue Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When a business is struggling, the instinct is to cut costs. But many of the
              obvious cost line items are fixed — rent, staff salaries, loan repayments. These
              cannot easily be reduced. Cutting variable costs (cheaper ingredients, less packaging)
              is faster but often has quality implications. Understanding which costs are fixed versus
              variable tells you where you actually have flexibility — and where you don't.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Not Knowing Your Own Fixed Cost Base</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Many small business owners have never added up their total fixed monthly costs. This
              number — what you owe every month before a single sale is made — is one of the most
              important numbers in the business. It is the floor: the minimum revenue the business
              must generate just to stay alive. Any revenue above this floor, after variable costs,
              is profit.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Anton's Kos-Kosan</h2>
        <div className="content">
          <div className="calculation">
{`Anton's Kos-Kosan — Monthly Cost Structure (20 rooms, 14 currently occupied)

FIXED COSTS — Anton owes these every month, regardless of occupancy:
  Mortgage repayment:          IDR  8,000,000
  Building insurance:          IDR    500,000
  Property tax (proration):    IDR    300,000
  Security guard (1 person):   IDR  2,500,000
  Internet (building-wide):    IDR    400,000
  Maintenance fund (avg):      IDR    800,000
  ─────────────────────────────────────────
  Total Fixed Costs:           IDR 12,500,000 / month
  → Anton must earn at least IDR 12,500,000 BEFORE any profit is possible.

VARIABLE COSTS — These only exist when a room is occupied:
  Electricity per room:        IDR  150,000 / room / month
  Water per room:              IDR   50,000 / room / month
  Cleaning service per room:   IDR   80,000 / room / month
  Linen/sheet laundry:         IDR   60,000 / room / month
  ─────────────────────────────────────────
  Total Variable Cost per Room: IDR 340,000 / room / month

Current situation (14 rooms occupied):
  Revenue:             14 rooms × IDR 1,500,000 = IDR 21,000,000
  Variable costs:      14 rooms × IDR 340,000   =  IDR  4,760,000
  Fixed costs:                                      IDR 12,500,000
  ─────────────────────────────────────────────────────────────────
  Total Costs:         IDR 17,260,000
  Net Profit:          IDR 21,000,000 − IDR 17,260,000 = IDR 3,740,000
  Profit Margin:       IDR 3,740,000 ÷ IDR 21,000,000 = 17.8%

Now: Anton considers filling 1 more room at a discounted IDR 1,200,000/month.
  Additional Revenue:       IDR 1,200,000
  Additional Variable Cost: IDR 340,000 (only the per-room variable costs)
  Additional Fixed Cost:    IDR 0 (fixed costs don't change!)
  ─────────────────────────────────────────────────────────────────────
  Contribution of 15th room:  IDR 1,200,000 − IDR 340,000 = IDR 860,000

  ⟹ The 15th tenant at IDR 1,200,000 adds IDR 860,000 to Anton's profit.
     Anton's friend was wrong. The discounted tenant IS worth accepting —
     because the fixed costs are already covered by the existing 14 rooms.
     The only question is: does the revenue from the 15th room exceed its
     variable cost? Yes (IDR 1,200,000 > IDR 340,000). It is profitable.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Visualising Fixed vs Variable Costs as Volume Changes:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Rooms Occupied</th>
                <th>Revenue (IDR)</th>
                <th>Variable Costs (IDR)</th>
                <th>Fixed Costs (IDR)</th>
                <th>Total Costs (IDR)</th>
                <th>Profit (IDR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0 rooms</td>
                <td>0</td>
                <td>0</td>
                <td>12,500,000</td>
                <td>12,500,000</td>
                <td style={{ color: 'var(--red, #C4472A)' }}>−12,500,000</td>
              </tr>
              <tr>
                <td>8 rooms</td>
                <td>12,000,000</td>
                <td>2,720,000</td>
                <td>12,500,000</td>
                <td>15,220,000</td>
                <td style={{ color: 'var(--red, #C4472A)' }}>−3,220,000</td>
              </tr>
              <tr>
                <td>11 rooms (≈ break-even)</td>
                <td>16,500,000</td>
                <td>3,740,000</td>
                <td>12,500,000</td>
                <td>16,240,000</td>
                <td>+260,000</td>
              </tr>
              <tr>
                <td>14 rooms (today)</td>
                <td>21,000,000</td>
                <td>4,760,000</td>
                <td>12,500,000</td>
                <td>17,260,000</td>
                <td>+3,740,000</td>
              </tr>
              <tr>
                <td>20 rooms (full)</td>
                <td>30,000,000</td>
                <td>6,800,000</td>
                <td>12,500,000</td>
                <td>19,300,000</td>
                <td>+10,700,000</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)', marginTop: '8px' }}>
            Notice: fixed costs stay at IDR 12,500,000 regardless of occupancy. Only variable costs
            change. This is why filling an empty room at a discount is almost always profitable —
            the fixed costs are already paid by the existing tenants.
          </p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 01 — BrewMate Café (The Fixed-Cost Trap)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most counterintuitive finding in Case 01 is that removing the Croissant from the menu
              makes profit <em>worse</em>, not better. This only makes sense once you understand fixed costs.
              BrewMate has IDR 22 million in monthly fixed costs (rent, staff, utilities) that must be
              covered regardless of what is on the menu. The Croissant, despite a low 24% margin, still
              contributes IDR 720,000/month toward those fixed costs. Remove the Croissant, and that
              IDR 720,000 disappears — but the IDR 22 million in fixed costs does not. The business
              is IDR 720,000 worse off.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 02 — Clean & Fold Laundry (Expansion Fixed Costs)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The entire danger of Wati's expansion is captured in this sentence from Case 02:
              <em>"Branch 2 will carry IDR 15,500,000 per month in fixed costs before a single
              kilogram of laundry comes through the door."</em> Rent is signed, staff are hired,
              equipment is installed. These fixed costs exist on Day 1. Revenue is uncertain and
              builds gradually. The gap between committed fixed costs and earned revenue is the
              accumulating loss during the ramp period. This is the heart of why expansion is risky.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 03 — Closetdinda Fashion (Variable Sourcing Costs)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Dinda's costs are almost entirely variable — she spends sourcing budget per item purchased.
              She has minimal fixed costs (phone, shipping materials). This means every IDR she shifts
              from C-tier sourcing to A-tier sourcing produces a direct, proportional change in revenue.
              There is no fixed-cost drag to work through first. Understanding that her cost structure
              is predominantly variable makes the reallocation math straightforward: every IDR in,
              IDR out in direct proportion to sell-through rates.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Always Know Your Total Fixed Cost Base</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This number — the minimum monthly cost obligation regardless of revenue — is the most
              important single figure for a small business owner to know. It is your floor. It tells
              you: "Even if I earn nothing this month, I still owe this amount." Add up every cost
              that does not change with sales volume: rent, all salaried wages, loan repayments,
              insurance, subscriptions. Write it down. Revisit it quarterly.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Marginal Decision: What Does One More Unit Cost?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When deciding whether to take one more customer, fill one more room, or serve one more
              order, the correct question is not "what is the average cost per unit?" — it is "what
              is the <em>additional</em> (marginal) cost of this one extra unit?" For most businesses,
              the marginal cost of one more unit is just the variable cost per unit — because fixed
              costs are already being paid. If the price exceeds the variable cost, taking the extra
              unit is profitable. Anton's discounted tenant is the perfect example.
            </p>
          </div>
          <div className="highlight-box">
            <strong>High Fixed Costs = High Operating Leverage (Risk and Reward)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business with high fixed costs and low variable costs (like a hotel, a factory, or
              a software company) has what is called <em>operating leverage</em>. When revenue goes
              up, profit goes up disproportionately — because fixed costs stay the same. When revenue
              goes down, profit falls disproportionately — for the same reason. High fixed cost
              businesses are more profitable at full capacity and more dangerous when underutilised.
              This is why occupancy rates matter so much for hotels and kos-kosans.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Separating Fixed and Variable Costs Is Step Zero</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Contribution margin analysis, break-even analysis, and expansion modeling all begin
              with correctly separating fixed from variable costs. Getting this wrong — especially
              treating variable costs as fixed, or vice versa — produces incorrect conclusions.
              Before building any financial model, audit your cost list and classify each line item.
              When in doubt: "Does this cost change if I serve one more customer?" If yes, it is
              variable. If no, it is fixed.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Shift the volume slider past break-even and watch how quickly profit accelerates — this is operating leverage in action.
          </p>
          <FixedVariableCalc />
        </div>
      </section>

    </div>
  )
}

export default PreB1
