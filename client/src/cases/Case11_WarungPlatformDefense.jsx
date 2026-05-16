const Case11 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 11</span>
        <h1>When the VC Money Comes to Town</h1>
        <div className="case-meta">
          Industry: Food Platform / Digital Marketplace &bull; Level: Beginner / Small Business — Network Effects &amp; Competitive Moat Defense
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>Nadia Rahmawati, 27, started DapurKita nine months ago as a side project. She was freelancing as a graphic designer in Surabaya when she noticed a gap: the office workers in her building — including herself — were eating the same warteg food every day, while talented home cooks in the surrounding kampung had no way to reach customers outside their immediate neighborhood. She created a WhatsApp group, invited twelve home cooks she knew personally, and promoted it via Instagram stories to the office complex. Within two weeks, 40 workers had ordered.</p>
          <p>Nine months later, DapurKita has 65 active home cooks, 420 registered customers, approximately 280 monthly active buyers, and 720 transactions per month. Nadia never intended to run a business — she thought of it as a community project that happened to pay her a commission. But the numbers have grown quietly into something real: IDR 2.5 million per month in net profit, running on her phone during her lunch break and evenings, with almost zero additional effort compared to month one.</p>
          <p>The reason it runs almost alone is Mbak Sri Wahyuni, 44, a home cook herself who has become DapurKita's informal supply coordinator. Mbak Sri interviews and vets every new cook who wants to join, monitors food quality by sampling orders twice a month, and personally handles any dispute between a cook and a customer. She is not paid a salary — she earns through her own cook sales, which are the highest-volume on the platform. She joined because she believed in what Nadia was building.</p>
          <p>Then Arif Wibowo, 30, Nadia's college friend from Universitas Airlangga who now works as a growth manager at a Jakarta startup, sends her a screenshot: a job listing for a Surabaya city manager at "MakanKuy," a food delivery startup that has just raised IDR 12 billion Series A from a Jakarta venture capital firm. MakanKuy is launching in five Indonesian cities simultaneously. Rungkut Industrial Estate — the heart of DapurKita's territory — is explicitly listed as a target area.</p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Arif visits Surabaya the following weekend and gives Nadia a blunt warning: "MakanKuy is going to flood your territory with IDR 25,000 vouchers, hire professional riders, and sign up every cook they can find. They will do in six weeks what took you nine months. You need to know exactly what you have that they cannot buy." Nadia has never thought of DapurKita as having competitive advantages. She has always thought of it as having community. Arif tells her that community, properly understood, is a competitive moat — but only if she can articulate and defend it.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Number, Three Causes</h2>
        <div className="content">
          <p>The surface symptom is a competitive threat: a well-funded startup is entering DapurKita's geographic territory with superior resources. But the underlying analytical question is more specific: which parts of DapurKita's platform are genuinely defensible, and which are vulnerable to MakanKuy's cash advantage?</p>

          <div className="highlight-box">
            <strong>Driver 1 — DapurKita Has Real Network Effects But Has Not Measured Them (≈40% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nadia knows DapurKita has grown because cooks and customers reinforce each other's participation. But she has never quantified how dense that network is in Rungkut specifically — and whether MakanKuy's launch would fragment it or merely extend it into segments she has not yet reached. Network density (total cross-side connections within the geographic area) is the key variable she needs to understand before deciding how to respond.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 2 — Her Moats Are Real but Unarticulated (≈35% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              DapurKita's supply-side relationships — the 65 home cooks curated personally by Mbak Sri — are not easily replicable. Most home cooks are informal, cannot register as business entities for a corporate platform, and value the flexible payment timing and personal relationship that DapurKita offers. But Nadia has never mapped these advantages systematically. Without knowing her moat clearly, she cannot invest in it deliberately or defend it under competitive pressure.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 3 — MakanKuy's Strengths Are in Exactly the Segments Where DapurKita Is Weakest (≈25% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              MakanKuy has a professional app, GPS delivery tracking, dedicated riders, and capital for sustained subsidies. These advantages matter most to price-sensitive new customers who have never heard of DapurKita — the 70% of the Rungkut office population that Nadia has not yet reached. MakanKuy is not primarily a threat to Nadia's existing customers; it is a threat to her future customers. The question is whether DapurKita can grow faster than MakanKuy in its own territory before MakanKuy establishes an alternative network effect.
            </p>
          </div>

          <p>These three drivers compound: if Nadia cannot articulate her moat, she cannot strengthen it; if she cannot strengthen it, her supply side becomes vulnerable to MakanKuy recruitment; if the supply side fragments, her network effects collapse; if network effects collapse, customer loyalty follows. The chain of failure starts with the moat, not the competition.</p>
          <p>An important insight that surprises most beginners: Nadia's biggest competitive threat is not MakanKuy stealing her current customers. It is MakanKuy establishing a parallel network among the 70% of Rungkut workers Nadia has not yet reached — and then using that network as a base to attract the cooks who currently serve both platforms.</p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Which of DapurKita's competitive advantages are genuinely structural — difficult to replicate with money — and how should Nadia prioritize investment to strengthen them before MakanKuy reaches critical mass in Rungkut?
            </p>
          </div>
          <p><strong>1.</strong> Quantify DapurKita's current network density in Rungkut. How much of the potential cross-side connection market has DapurKita captured, and how does that compare to what MakanKuy would need to match it?</p>
          <p><strong>2.</strong> Map Nadia's moats: which are strong enough to retain cooks and customers under price competition, and which are vulnerable?</p>
          <p><strong>3.</strong> Identify the specific defensive investments — supply-side retention, geographic preemption, loyalty mechanics — that generate the highest protection per rupiah spent.</p>
          <p>What success looks like: Nadia has a clear answer to the question "what does MakanKuy get by entering Rungkut, and what can they not get?" That answer shapes every competitive decision in the next six months.</p>
          <p>Analytical approach: network value quantification (cross-side connection density), competitive moat scoring (rated across four moat types), and a switching-cost analysis for both the supply and demand sides. No regression models — the insight comes from structured qualitative assessment supported by simple arithmetic.</p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>This case requires two frameworks working in sequence. First, network value quantification establishes how much structural advantage DapurKita has built through its growth. Second, competitive moat mapping identifies where to concentrate defensive investment. Using either alone would miss half the picture.</p>
          <div className="highlight-box">
            <strong>Primary 1: Network Value Analysis (Cross-Side Connection Density)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Adapted from Metcalfe's Law for two-sided markets: Platform Value ≈ n (supply) × m (demand). This measures how much value the platform has accumulated through its participant network, independent of revenue. It also reveals how much of the addressable Rungkut market DapurKita has captured, and how long it would take MakanKuy to replicate that density from zero.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Primary 2: Competitive Moat Scoring (Four Moat Types)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Score DapurKita on each of the four moat types (cost advantage, switching costs, brand/trust, network effects) on a 1–5 scale for both the supply side (cooks) and demand side (customers). A moat that is strong on the supply side but weak on the demand side requires a different defensive investment than the reverse.
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
                <td>CAC & LTV Analysis</td>
                <td>Customer lifetime value vs. acquisition cost</td>
                <td>Useful for subsidizing growth but does not reveal structural defensibility</td>
              </tr>
              <tr>
                <td>Porter's Five Forces</td>
                <td>Industry-level competitive structure</td>
                <td>Too broad for a geographic micro-market — designed for industries, not local platforms</td>
              </tr>
              <tr>
                <td>SWOT Analysis</td>
                <td>Strengths, Weaknesses, Opportunities, Threats</td>
                <td>Qualitative only — does not quantify network density or moat strength numerically</td>
              </tr>
              <tr>
                <td><strong>Network Value + Moat Scoring</strong></td>
                <td><strong>Platform density and defensibility, quantified</strong></td>
                <td><strong>Selected — answers both the "how much" and "where to defend" questions simultaneously</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>Nadia's data lives entirely in WhatsApp message history, a simple Google Sheet Arif helped her set up three months ago, and Instagram DM records. There is no formal system. Arif exports what he can and rebuilds the key metrics manually for the analysis. The data is incomplete but sufficient to answer the strategic question.</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Month 1 (Launch)</th>
                <th>Month 9 (Current)</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Active cooks (supply)</td>
                <td>12</td>
                <td>65</td>
                <td>+442%</td>
              </tr>
              <tr>
                <td>Registered customers</td>
                <td>40</td>
                <td>420</td>
                <td>+950%</td>
              </tr>
              <tr>
                <td>Monthly active customers</td>
                <td>40</td>
                <td>280</td>
                <td>+600%</td>
              </tr>
              <tr>
                <td>Monthly transactions</td>
                <td>90</td>
                <td>720</td>
                <td>+700%</td>
              </tr>
              <tr>
                <td>Average order value</td>
                <td>IDR 27,000</td>
                <td>IDR 32,000</td>
                <td>+18.5%</td>
              </tr>
              <tr>
                <td>Monthly GMV</td>
                <td>IDR 2,430,000</td>
                <td>IDR 23,040,000</td>
                <td>+848%</td>
              </tr>
              <tr>
                <td>Platform commission revenue (15%)</td>
                <td>IDR 364,500</td>
                <td>IDR 3,456,000</td>
                <td>+848%</td>
              </tr>
              <tr>
                <td>Monthly platform costs</td>
                <td>IDR 500,000</td>
                <td>IDR 950,000</td>
                <td>+90%</td>
              </tr>
              <tr>
                <td>Monthly net profit</td>
                <td>–IDR 135,500</td>
                <td>IDR 2,506,000</td>
                <td>Positive</td>
              </tr>
              <tr>
                <td>Cross-side connections (n × m)</td>
                <td>12 × 40 = 480</td>
                <td>65 × 280 = 18,200</td>
                <td>+3,692%</td>
              </tr>
            </tbody>
          </table>
          <p>What the data shows: DapurKita's cross-side network connections have grown nearly 38× while revenue grew less than 10×. This gap — network value growing faster than revenue — is characteristic of a healthy early-stage platform. It means Nadia is accumulating more relationship capital than she is currently monetizing. What the data hides: the geographic concentration of these connections. Almost all 65 cooks and 280 active customers are within a 4 km radius of the Rungkut Industrial Estate. This density is both DapurKita's greatest strength (deep local relevance) and its greatest vulnerability (entirely concentrated in one area that MakanKuy has explicitly targeted).</p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Step 1 — Estimate the Total Addressable Network in Rungkut</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Arif estimates the Rungkut Industrial Estate and surrounding residential areas have approximately 400 potential home cooks (within 5 km, with cooking capacity, connected to social media) and 4,500 potential regular lunch buyers (office workers, factory staff, residents who order delivery regularly). DapurKita has captured 65 of 400 cooks (16%) and 280 of 4,500 potential buyers (6%). The platform has significant room to grow — but so does MakanKuy, which starts from zero.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 2 — Quantify What MakanKuy Gets on Day One</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              MakanKuy will launch with vouchers (estimated IDR 25,000 off first three orders per user — IDR 75,000 subsidy per customer) and professional riders. They will target the 94% of potential buyers DapurKita has not yet reached. Their structural starting position: 0 cooks, 0 customers, 0 cross-side connections. Their advantage: capital to subsidize acquisition rapidly. Critical question: how long before MakanKuy reaches DapurKita's current network density of 18,200 connection pairs? If MakanKuy can recruit 50 cooks and 200 customers in six weeks (10,000 connection pairs), DapurKita's network density lead will still be 1.82×. That lead must be maintained and extended.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 3 — Score DapurKita's Moats on Supply Side vs. Demand Side</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Separate the moat analysis into two sides of the platform. Supply-side moats (what keeps cooks on DapurKita) are different from demand-side moats (what keeps customers on DapurKita). The key insight: supply-side moats are much stronger. Mbak Sri's curation and relationships create real switching costs for cooks. Demand-side moats are weaker — price-sensitive customers can be poached by a IDR 25,000 voucher.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 4 — Calculate MakanKuy's Customer Acquisition Cost and Retention Rate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Arif knows from his startup experience that food delivery voucher campaigns typically retain 25–35% of first-time users as regular customers after the subsidy ends. MakanKuy's IDR 75,000 voucher subsidy per user implies an effective CAC of IDR 75,000 ÷ 30% retention = IDR 250,000 per retained customer. At 500 targeted users: IDR 125 million in voucher spend to retain 150 customers. Their commission revenue from those 150 customers: 150 × 2 orders/week × 48 weeks × IDR 32,000 × 25% = IDR 11.5 million per year. MakanKuy needs 11 years to recover just the voucher CAC from those customers. They are betting on scale and market dominance, not unit economics.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 5 — Identify the Three Priority Defense Actions</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Given the moat map: (1) Lock in the supply side immediately — cooks who feel like partners rather than vendors will not switch for a corporate app. (2) Preempt MakanKuy's geographic expansion by launching in one adjacent office cluster before MakanKuy gets there — density in a second territory before MakanKuy establishes any is more valuable than adding density to the already-contested Rungkut core. (3) Make the demand side more loyal through community mechanics that MakanKuy's app cannot replicate — personal cook relationships, cook-specific recommendations, community order groups.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <div className="calculation">
{`DAPUR KITA — CURRENT PLATFORM ECONOMICS

  Monthly GMV:          720 orders × IDR 32,000 = IDR 23,040,000
  Commission (15%):                              IDR  3,456,000
  Platform costs:
    WhatsApp Business:                IDR  200,000
    Instagram ads (sustaining):       IDR  500,000
    Coordination / logistics:         IDR  250,000
    Total:                                         IDR    950,000
  Monthly net profit:                            IDR  2,506,000

  Cook-side unit economics (per cook, monthly):
    Average orders per cook: 720 ÷ 65 =              11.1 orders
    Average gross revenue per cook: 11.1 × 32,000 = IDR 355,200
    After DapurKita commission (15%):               IDR 302,000
    (Supplemental income, not full-time)

  Network density:
    Supply: 65 cooks
    Demand: 280 monthly active customers
    Cross-side connections: 65 × 280 =             18,200 pairs
    Addressable market connections: 400 × 4,500 = 1,800,000 pairs
    Market capture: 18,200 ÷ 1,800,000 =              1.01%`}
          </div>

          <div className="calculation">
{`MAKANKUY COMPETITIVE SCENARIO — RUNGKUT LAUNCH

  MakanKuy estimated launch budget (Rungkut):    IDR 400,000,000
  Voucher program: IDR 25,000 × 3 orders/user × 500 users
    Total voucher cost:                          IDR  37,500,000
    Effective CAC (assuming 30% retention):      IDR 250,000/customer
    Retained customers after campaign:                   150 users

  MakanKuy annual revenue from 150 retained customers:
    150 × 2 orders/week × 48 weeks × 32,000 × 25% = IDR 11,520,000
  Payback on vouchers alone: 37.5M ÷ 11.5M =        3.3 years
  (Ignores salaries, rider costs, tech — actual payback: never)

  ─────────────────────────────────────────────────────────

  DAPUR KITA SWITCHING COST ANALYSIS (per cook)

  If a cook leaves DapurKita for MakanKuy:
    Current monthly income via DapurKita:   IDR 302,000
    MakanKuy commission rate:                     25-30%
    After MakanKuy commission (27.5%):      IDR 257,600
    Monthly income loss:                     IDR  44,400  (-14.7%)

  Additionally:
    Loses flexible cash-same-day payment (DapurKita pays weekly)
    Must meet formal registration requirements (NIB, NPWP)
    Loses Mbak Sri's operational support and quality coaching
    Loses DapurKita community referral traffic

  Estimated % of cooks who would NOT switch for a corporate app:
    Informal earners (no formal business registration): ~60%
    Who cite personal relationship as primary reason to stay: ~75%
    Conservative estimate of cook retention under attack:    55-65%`}
          </div>

          <div className="calculation">
{`DAPUR KITA MOAT SCORECARD

  Moat Type                   Supply Side    Demand Side
  ─────────────────────────────────────────────────────
  Cost advantage                  2/5            1/5
  (DapurKita's lower commission is a mild cost advantage
   for cooks; no cost advantage for demand side)

  Switching costs                 4/5            2/5
  (Cooks: lose income, informal status, relationships;
   Customers: easy to switch if voucher is big enough)

  Brand / trust / community       4/5            3/5
  (Mbak Sri's curation is known among cooks;
   Loyal customers have personal cook relationships)

  Network effects                 3/5            3/5
  (Dense enough in Rungkut that new cooks get orders fast;
   customers have enough menu variety to stay engaged)

  COMPOSITE SUPPLY MOAT:          3.25/5  → Strong
  COMPOSITE DEMAND MOAT:          2.25/5  → Moderate/Weak

  STRATEGIC CONCLUSION:
  Defend supply side first — this is where Nadia is
  genuinely difficult to displace. Demand side will follow
  if supply quality is maintained and community feel holds.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — DapurKita's Supply Side Is More Defensible Than It Appears</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              60% of DapurKita's cooks are informal earners who cannot meet MakanKuy's formal business registration requirements (NIB, NPWP, food hygiene certification). These cooks simply cannot join a corporate platform regardless of the commission offered. This structural barrier, combined with DapurKita's lower commission rate (15% vs. MakanKuy's 25–30%) and Mbak Sri's active support, means at least 55–65% of the cook base has no realistic migration path even if they wanted to switch.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — MakanKuy Is Growing the Market, Not Stealing Nadia's</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              DapurKita has only reached 6% of potential demand in Rungkut. MakanKuy's aggressive launch will primarily attract the 94% of office workers who have never ordered from any home-cook platform. This is a market-expansion event, not purely a market-share competition. Nadia's opportunity: grow into the segments MakanKuy's marketing brings awareness to, before MakanKuy's poor unit economics force them to cut the subsidy and lose those customers.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Geographic Preemption Is Worth More Than Retention Spending</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Spending IDR 5 million to launch in the adjacent Waru Industrial Estate — recruiting 15 cooks and building a base of 50 customers — creates a second geographic moat that MakanKuy would have to fight for separately. This is worth more than spending IDR 5 million on discounts to retain existing Rungkut customers who are likely to stay anyway (supply-side moat is strong). Preemption is offense and defense simultaneously.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 (Counterintuitive) — MakanKuy's Biggest Threat Is Not Their App or Their Riders</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              It is their ability to systematically poach the 35–40% of DapurKita cooks who are formally registered and highest-earning. These cooks earn more, are more professionally oriented, and may be attracted to MakanKuy's larger customer base once the startup has established density. If Nadia loses her top 10 cooks — who generate a disproportionate share of the platform's GMV — customer satisfaction will drop and loyalty will follow. The top-cook retention strategy is the most urgent defensive investment.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Tier 1 — Do This Week: Fortify the Top 15 Cooks</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Identify the 15 highest-GMV cooks on the platform. Meet each personally (or via Mbak Sri). Offer a formal "Partner Cook" status: a slightly reduced commission (12% instead of 15%) in exchange for a 6-month exclusivity commitment and a DapurKita-branded packaging kit. Cost: approximately IDR 3 million in packaging materials + IDR 1.2 million in foregone commission per month. Benefit: protects 60–70% of platform GMV from direct poaching.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 2 — This Month: Launch in Waru Industrial Estate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Recruit 15 home cooks in the Waru area through Mbak Sri's network. Run a 3-week free-delivery promotion for first-time orders. Target: 60 monthly active customers by end of month 2. Budget: IDR 5 million. Rationale: MakanKuy's launch plan focuses on Rungkut. DapurKita can establish a second territory before MakanKuy reaches it, then use cross-territory density as a selling point to cooks ("your food reaches two industrial estates, not one").
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 3 — Next Quarter: Build Community Features That MakanKuy Cannot Replicate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Launch a weekly "Cook Spotlight" on DapurKita's Instagram: a short video of one cook, their story, their specialty dish. This deepens the personal connection between customers and specific cooks — making the platform feel irreplaceable rather than interchangeable. Cost: 2 hours per week of Nadia's time. Outcome: customers who choose DapurKita because of a specific cook's story will not switch to MakanKuy for a IDR 25,000 voucher.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Cost</th>
                <th>Protects</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Partner Cook program (top 15)</td>
                <td>IDR 3,000,000</td>
                <td>60–70% of GMV</td>
                <td>This week</td>
              </tr>
              <tr>
                <td>Waru territory launch</td>
                <td>IDR 5,000,000</td>
                <td>Future market from MakanKuy</td>
                <td>This month</td>
              </tr>
              <tr>
                <td>Cook Spotlight content</td>
                <td>IDR 0 (Nadia's time)</td>
                <td>Demand-side loyalty</td>
                <td>Ongoing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>Nadia's first instinct when she sees Arif's analysis is relief followed by anxiety. Relief: she is more defensible than she thought. Anxiety: defending requires intentional action she has been deferring. DapurKita has grown to this point almost by accident — cooks joined because Mbak Sri invited them, customers joined because office colleagues shared the group link. Nadia has never had to fight for her business. She now has to learn how.</p>
          <p><strong>What Nadia will probably do:</strong> She will implement the Partner Cook program quickly because Mbak Sri can execute it without Nadia managing every detail. She will hesitate on Waru expansion because it feels like a bigger commitment of energy during a period when her freelance design work is also busy. She will start the Cook Spotlight as a creative project she genuinely enjoys, which means she will actually sustain it.</p>
          <p><strong>What Nadia should do, in addition:</strong> She should formalize Mbak Sri's role. Mbak Sri is currently the supply side's most valuable asset, working effectively for free. If MakanKuy approaches Mbak Sri with a "community manager" job offer — plausible for a well-funded startup — DapurKita loses its supply-side moat in a single conversation. A modest monthly stipend (IDR 500,000–800,000) and formal recognition of Mbak Sri's role as Co-Founder or Head of Supply is both fair and strategically critical.</p>
          <p>Arif gives Nadia a useful frame before he flies back to Jakarta: "MakanKuy is betting on capital. You need to bet on community. Capital runs out. Community compounds." Whether Nadia executes on this frame will determine DapurKita's fate in the next twelve months.</p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — The Dangerous Competitor Is Not Always the Richest One</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A VC-funded startup with IDR 12 billion can buy customers temporarily and run riders professionally. It cannot buy 9 months of personal relationships between Mbak Sri and 65 home cooks. The most durable competitive advantages in platform businesses are relational, not financial. When analyzing a competitive threat, always ask: what does the competitor have, and what can they not buy? The things they cannot buy are where the incumbent should double down.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — Moat Analysis Must Be Done Separately for Each Side of a Two-Sided Market</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              DapurKita's supply-side moat (3.25/5) and demand-side moat (2.25/5) are genuinely different numbers that require genuinely different responses. Treating the platform as having a single "overall moat" would obscure this asymmetry and lead to wasted defensive investment. Always separate the analysis: what keeps producers on the platform? What keeps consumers on the platform? The answers are almost always different.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — Network Density Is Local, Not Global</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              DapurKita's 18,200 cross-side connection pairs represent enormous value in a 4 km radius around Rungkut. They represent zero value in Waru, 8 km away. This is the critical characteristic of local network effects: they do not transfer geographically. MakanKuy's advantage is that it can build in five Indonesian cities simultaneously, potentially reaching critical mass in each. DapurKita's response — preemptive territory expansion before MakanKuy arrives — is exactly right, because it prevents MakanKuy from establishing local density anywhere before DapurKita has already claimed it.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — The Informal Sector Is Not a Vulnerability — It Is Part of the Moat</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A beginner analyst might see DapurKita's reliance on informal cooks (no NIB, no NPWP, no formal food certification) as a weakness — these cooks cannot scale easily, cannot get loans, and cannot operate officially. But Arif's analysis reveals the opposite: the informality of 60% of DapurKita's cooks means they are structurally excluded from MakanKuy's formal platform. Nadia's willingness to work with informal sellers is not just inclusive — it is a competitive advantage that a corporate startup with compliance requirements cannot easily replicate.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case11
