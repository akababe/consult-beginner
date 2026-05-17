import BusinessModelCalc from './calculators/BusinessModelCalc.jsx'

const PreD1 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module D1</span>
        <h1>Business Model Archetypes</h1>
        <div className="case-meta">
          Module D: Business Model Intuition &bull; How your business creates and captures value determines everything about its financial shape
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>Reza Pratama, 29, has been printing custom phone cases out of his bedroom in Depok for two years. Customers find him on Instagram, send a design by DM, he prints within 24 hours, and they pick up or pay for Gojek delivery. Revenue bounces between IDR 4 million and IDR 14 million a month depending on how aggressive his promotions are. He works roughly the same number of hours every month. He cannot explain the swings.</p>
          <p>His younger sister Dina, 26, recently graduated with a business degree from Universitas Padjadjaran in Bandung. She visits one Sunday and asks a question Reza has never heard before: "Kak, what kind of business are you actually running?" Reza laughs. Obviously he sells phone cases. But Dina presses: Is he selling a product, or a service? Could he sell a subscription? Could he become a platform connecting designers with buyers? Reza has never thought about it this way — to him, business is business. You make something, someone pays, you keep the difference.</p>
          <p>Dina explains that two businesses selling identical products can have completely different financial profiles depending on how they structure the revenue relationship with their customers. A restaurant that charges per meal has unpredictable cash flow, high marketing costs, and constant pressure to fill seats. A restaurant that sells monthly lunch subscriptions has predictable production targets, lower waste, and a customer base that almost never churns. Same kitchen, same food, radically different financial structure. The structural pattern — called a business model archetype — determines the shape of your revenue curve, your cost structure, your customer relationship, and how difficult it is to grow.</p>
          <div className="highlight-box">
            <strong>What Is a Business Model Archetype?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A business model archetype is a structural pattern describing how a business creates value for customers, delivers it, and captures a portion of it as revenue. The archetype is not the same as the industry or the product — it is the underlying logic of the revenue relationship. Most Indonesian small businesses (UMKM) operate in one archetype without realizing it, and many leave significant profit on the table by never questioning whether a different archetype would serve their customers and their finances better.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Archetype 1 — Product (Transactional)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              You create a physical or digital item and sell it one unit at a time. Each sale is independent. Revenue is tied directly to sales volume and varies month-to-month based on demand and marketing. Margin depends on the gap between production cost (COGS) and selling price. Growth requires more sales, higher prices, or both.<br /><br />
              <strong>Revenue:</strong> Units Sold × Price per Unit<br />
              <strong>Examples in Indonesia:</strong> toko kelontong, konveksi baju, percetakan, dropshipping, kerajinan tangan
            </p>
          </div>
          <div className="highlight-box">
            <strong>Archetype 2 — Service (Time or Outcome)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              You sell your time, skill, or a specific outcome rather than a physical object. Revenue is capped by available hours unless you hire. Margins are typically high (low direct COGS) but growth is slow without additional staff. Repeat business depends on relationship quality, not product loyalty.<br /><br />
              <strong>Revenue:</strong> Hours × Hourly Rate, or Projects × Project Fee<br />
              <strong>Examples in Indonesia:</strong> salon, bengkel motor, jasa desain, laundry kiloan, les privat, fotografer
            </p>
          </div>
          <div className="highlight-box">
            <strong>Archetype 3 — Recurring / Subscription</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Customers pay a regular fee — weekly, monthly, or annually — for ongoing access to a product or service. Revenue is predictable and compounds as you add subscribers. The critical metric is churn: the percentage of subscribers who cancel each period. Once churn is low, growth is extraordinarily efficient.<br /><br />
              <strong>Revenue:</strong> Active Subscribers × Monthly Fee (minus churned subscribers)<br />
              <strong>Examples in Indonesia:</strong> catering langganan, layanan kebersihan bulanan, membership gym, software SaaS, media digital
            </p>
          </div>
          <div className="highlight-box">
            <strong>Archetype 4 — Platform / Marketplace</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              You facilitate transactions between two or more groups — buyers and sellers, producers and consumers — and capture a commission, listing fee, or data value. You do not own inventory. Revenue grows with transaction volume, often super-linearly as network effects kick in. The hardest problem is attracting both sides simultaneously at launch.<br /><br />
              <strong>Revenue:</strong> Transaction Volume × Commission Rate (or: Listings × Listing Fee)<br />
              <strong>Examples in Indonesia:</strong> Tokopedia, rental platform lokal, aggregator les privat, platform katering rumahan
            </p>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Archetype</th>
                <th>Revenue Pattern</th>
                <th>Cost Structure</th>
                <th>Primary Growth Driver</th>
                <th>Biggest Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product</td>
                <td>Lumpy, volume-driven</td>
                <td>High variable (COGS)</td>
                <td>More sales or higher price</td>
                <td>Competition, inventory glut</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Project-based or hourly</td>
                <td>Labor-heavy, time-limited</td>
                <td>More clients or higher rate</td>
                <td>Capacity ceiling, key-person risk</td>
              </tr>
              <tr>
                <td>Recurring</td>
                <td>Smooth, predictable</td>
                <td>Fixed-heavy, low marginal cost</td>
                <td>Subscriber growth minus churn</td>
                <td>Churn compounds downward fast</td>
              </tr>
              <tr>
                <td>Platform</td>
                <td>Commission-based, scales</td>
                <td>Trust + quality curation + tech</td>
                <td>Network effects (both sides)</td>
                <td>Chicken-and-egg at launch</td>
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
            <strong>Mistake 1 — Running Multiple Archetypes Without Accounting for Each Separately</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Many small business owners accidentally operate two or three archetypes at once — selling products on demand (Archetype 1), doing custom design work by the hour (Archetype 2), and maintaining one school on a monthly retainer (Archetype 3) — while tracking all three as a single undifferentiated business. When profit drops, they cannot diagnose which archetype is the problem. Reza does exactly this. He mixes on-demand printing, bespoke design services, and one school retainer into one messy monthly number. The fix is not choosing just one archetype — it is accounting for each separately so you can optimize each individually and understand which is worth growing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Comparing Revenue Headlines Across Archetypes</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A product business doing IDR 60 million per month may have lower net profit than a subscription business doing IDR 18 million per month, because the product business spends IDR 45 million on COGS while the subscription business has near-zero marginal cost per subscriber. Beginners compare revenue numbers across businesses without asking: what archetype is that, what are their margins, and what capital did it take to build? The relevant comparison is always profit, ROIC (return on invested capital), and stability — not revenue.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Assuming the Archetype Is Fixed by the Industry</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              "I sell phone cases, so I'm a product business." This is the most expensive misconception in small business. The archetype is not determined by the product — it is determined by how you choose to structure the customer relationship. A phone case business can be a subscription (monthly case + screen wipe kit delivered automatically), a platform (connecting independent case designers with buyers, taking commission), or a service (managing a company's branded merchandise program on retainer). The question is not what you sell. It is: how should you structure the revenue relationship with your customer to maximize predictability, margin, and growth?
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Reza's Phone Case Business: Three Archetypes, One Product</h2>
        <div className="content">
          <p>Reza currently sells 150 phone cases per month on demand at IDR 75,000 each — a pure product archetype. Let's model what happens if he introduces a subscription tier or shifts to a hybrid, keeping the same underlying product.</p>

          <div className="calculation">
{`Reza's Phone Case Business — Archetype Comparison

  ═══════════════════════════════════════════════════════════

  CURRENT MODEL: Product (On-Demand)
  ───────────────────────────────────────────────────────────
  Units sold per month:                                  150
  Price per case:                              IDR    75,000
  Monthly gross revenue:                       IDR 11,250,000
  COGS per case (materials + ink + film):      IDR    32,000
  Total COGS (150 × 32,000):                   IDR  4,800,000
  Gross profit:                                IDR  6,450,000
  Gross margin:                                        57.3%
  Revenue predictability:                               LOW
  → Revenue fluctuates ±40% month-to-month
  → Must run paid ads every month or orders dry up

  ═══════════════════════════════════════════════════════════

  OPTION A: Subscription (Monthly Case Box)
  ───────────────────────────────────────────────────────────
  Subscribers paying IDR 88,000/month:                   90
    (1 new case + 1 screen wipe kit per month)
  Monthly subscription revenue:                IDR  7,920,000
  COGS per subscriber (predictable batch):     IDR    34,000
  Total COGS (90 × 34,000):                    IDR  3,060,000
  Gross profit:                                IDR  4,860,000
  Gross margin:                                        61.4%
  Revenue predictability:                              HIGH
  → Can batch-print 90 cases on one day, zero waste
  → No paid ads needed for subscribers

  ═══════════════════════════════════════════════════════════

  OPTION B: Hybrid (70 subscribers + 80 on-demand)
  ───────────────────────────────────────────────────────────
  Subscription revenue (70 × 88,000):          IDR  6,160,000
  On-demand revenue  (80 × 75,000):            IDR  6,000,000
  Total revenue:                               IDR 12,160,000
  Total COGS:
    Subscribers (70 × 34,000):                 IDR  2,380,000
    On-demand   (80 × 32,000):                 IDR  2,560,000
    Total COGS:                                IDR  4,940,000
  Gross profit:                                IDR  7,220,000
  Gross margin:                                        59.4%
  Revenue predictability:                          MEDIUM-HIGH
  → IDR 6.16M guaranteed base each month
  → On-demand upside without depending on it

  ═══════════════════════════════════════════════════════════

  SUMMARY
  ───────────────────────────────────────────────────────────
  On-demand only:     IDR  6,450,000 gross profit — unstable
  Subscription only:  IDR  4,860,000 gross profit — very stable
  Hybrid:             IDR  7,220,000 gross profit — best of both ✓

  The hybrid wins on absolute profit AND stability.
  Reza can convert 40 repeat customers immediately.`}
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Monthly Revenue</th>
                <th>Gross Profit</th>
                <th>Predictability</th>
                <th>What Growth Requires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product only</td>
                <td>IDR 11,250,000</td>
                <td>IDR 6,450,000</td>
                <td>Low</td>
                <td>More ads, more followers</td>
              </tr>
              <tr>
                <td>Subscription only</td>
                <td>IDR 7,920,000</td>
                <td>IDR 4,860,000</td>
                <td>High</td>
                <td>Grow and retain subscribers</td>
              </tr>
              <tr>
                <td>Hybrid</td>
                <td>IDR 12,160,000</td>
                <td>IDR 7,220,000</td>
                <td>Medium-High</td>
                <td>Both levers simultaneously</td>
              </tr>
            </tbody>
          </table>
          <p>Dina's key insight: Reza already has 35 customers who have ordered from him more than four times. He can approach them this week about a monthly subscription at a small discount. He does not need to build anything new — he only needs to restructure the commercial relationship with customers who already trust him.</p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 10 — Pak Bimo's Laundry: Service Archetype with Operating Leverage Pressure</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Bimo's coin laundry in Bandung is a pure service archetype — customers pay per kilogram of laundry processed. His cost structure has high fixed costs (machines, rent, permanent staff) and relatively low variable costs per kilogram served. This service-archetype structure means that in peak months, profit multiplies quickly; in slow months, fixed costs become a drag. When he considers buying four more machines for IDR 88 million, he is effectively asking: should I intensify my service archetype by raising operating leverage? Case 10 walks through the full operating leverage analysis this decision requires.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 12 — Ibu Marlina's Batik: Choosing Between Three Different Archetypes</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Marlina's capital allocation decision in Case 12 is fundamentally a choice between three archetypes for her batik business: expand the existing product-retail model with a second toko (Archetype 1 × 2), build a digital product-retail brand on Tokopedia and Shopee (Archetype 1, new channel), or invest in an artisan batik tulis production workshop (vertical integration into a premium product archetype). Her daughter Putri's analysis maps each option to its archetype first — because the archetype determines which financial metrics matter most for comparison. A retail-physical model is judged by foot traffic and location; an e-commerce model is judged by CAC and repeat purchase rate; a production model is judged by yield and craft output per artisan-day.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — Identify the Archetype Before Diagnosing the Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When an owner says "my revenue is too volatile," the fix depends entirely on the archetype. A product business with volatile revenue has a demand and marketing problem. A service business with volatile revenue has a utilization problem. A subscription business with volatile revenue has a churn problem. Same symptom, completely different root causes and solutions. Your first question in any UMKM analysis should always be: which archetype is this business, and is that archetype appropriate for its market and cost structure?
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — Recurring Revenue Is Not Always the Right Answer</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Subscription models require customers to commit in advance — and Indonesian UMKM customers are often reluctant to pre-pay, especially for physical goods they can buy on demand. Before recommending a subscription pivot, verify three things: (1) Is the product consumed at a predictable, regular rate? (2) Does the customer trust the vendor enough to commit money upfront? (3) Does the subscription offer enough convenience or savings that the customer prefers it over on-demand? A subscription with high churn is worse than no subscription at all — it creates false confidence while actually signaling that customers do not see enough value to commit.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — Platform Archetypes Have a Chicken-and-Egg Problem at Launch</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A marketplace needs both buyers and sellers to create value. Sellers will not join without buyers, and buyers will not come without sellers. This is the hardest cold-start problem in business. The solution is always to pick one side to build first — typically the supply side, because supply creates the value that eventually attracts demand. See PreD3 (Platform and Network Effects) for a full treatment of this, including how a Makassar food platform grew from 12 cooks and 40 customers to 45 cooks and 280 customers by sequencing supply before demand.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — Map the Revenue Relationship, Not Just the Product</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The archetype analysis is about the revenue relationship, not what is being sold. A laundry service can be transactional (pay per kg), subscription (monthly flat fee), or even platform (connecting laundry workers with households). A café can be transactional (per cup), membership (monthly unlimited coffee), or hybrid. The product is the same. The financial structure changes dramatically. Whenever you analyze a business, ask: how else could this same business capture revenue from the same customers? That question is often worth more than any optimization of the current model.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Click each archetype card to compare key economics — gross margin, working capital, moat, and risk — side by side.
          </p>
          <BusinessModelCalc />
        </div>
      </section>

    </div>
  )
}

export default PreD1
