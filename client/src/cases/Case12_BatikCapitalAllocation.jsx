const Case12 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 12</span>
        <h1>Three Doors for IDR 180 Million</h1>
        <div className="case-meta">
          Industry: Batik / Fashion Retail &bull; Level: Beginner / Small Business — Capital Allocation &amp; Business Model Archetype Selection
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>Ibu Marlina Dewi, 44, has been running "Batik Marlina" from a corner toko in the Pasar Klewer area of Solo (Surakarta) for fifteen years. The shop occupies 45 square meters and sells a carefully curated mix: batik fabric by the meter, ready-to-wear batik clothing in standard sizes, and batik accessories. Marlina has a gift for curation — she travels to Pekalongan twice a year, knows which batik villages produce the most consistent quality, and has developed relationships with three producer families she has worked with for over a decade. Her repeat customers include local government offices ordering formal attire for national holidays, Javanese wedding families, and a growing number of buyers from outside Solo who find her through Instagram.</p>
          <p>The past three years have been the best in the business's history. Revenue grew from IDR 58 million per month in 2022 to IDR 78 million in the current year, driven by a post-pandemic surge in demand for authentic Javanese textile, a viral Instagram post from a Solo travel blogger that sent 200 new followers to Marlina's account in one week, and a government contract for 120 sets of formal batik attire for a regional event. After paying herself a modest salary, reinvesting in inventory, and setting aside taxes, Marlina has accumulated IDR 180 million in a savings account.</p>
          <p>Her daughter Putri Marlina, 22, graduated from Prasetiya Mulya Business School in Jakarta in June and returned to Solo to help her mother. Putri is sharp, careful with numbers, and has never owned a business. She respects what her mother has built but has spent four years learning frameworks that she now wants to apply. They are a good pair: Marlina's intuition and relationships, Putri's analytical discipline. Their relationship is warm but not without friction — Marlina has been making her own calls for fifteen years and is not used to being told what the data says.</p>
          <p>Pak Bambang Setiawan, 55, is the store manager — a former batik teacher who knows every supplier and customer Marlina deals with. He is cautious, protective of the brand, and quietly skeptical of Putri's ideas. He is also usually right about what customers want.</p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Three investment opportunities appeared in the same month. A trusted contact offered Marlina a prime retail space in Yogyakarta's Malioboro corridor — a second toko in the heart of tourist batik country. A Tokopedia account manager visited and showed her competitor data: a similar Bandung batik shop was doing IDR 22 million per month through the platform alone. And Marlina herself has long dreamed of running her own batik tulis production workshop — making, not just selling, authentic handmade batik. She has the money for one option, possibly two. She does not know how to choose.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Number, Three Causes</h2>
        <div className="content">
          <p>The surface question is straightforward: which of the three investments should Marlina make with IDR 180 million? But the underlying problem is that she has never had to evaluate competing investment options simultaneously. Each option looks attractive on its own. The difficulty is that choosing well requires comparing them rigorously on the same terms — and that requires a framework she has not used before.</p>

          <div className="highlight-box">
            <strong>Driver 1 — Three Different Business Model Archetypes, Three Different Financial Profiles (≈40% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The second toko is a scaled replica of her current product-retail model: physical location, foot traffic, inventory turnover. The online brand is a digital product-retail model: lower fixed costs, higher reach, very different customer acquisition dynamics. The artisan workshop is a vertically integrated production model: high fixed costs in craft labor, very long production cycles, premium pricing. Each archetype has a different ROIC, a different time-to-profitability, and a different risk profile. Comparing them without first understanding the archetype differences leads to false comparisons.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 2 — Capital Is Sufficient for One Option, Barely for Two, and Dangerous if Spread Across All Three (≈35% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The second toko requires IDR 125 million in setup capital. The online brand requires IDR 38 million. The artisan workshop requires IDR 155 million. All three together would cost IDR 318 million — nearly double what Marlina has. Even doing just the toko and the workshop simultaneously would consume IDR 280 million, leaving no working capital buffer. Capital allocation is not just "which investment is best?" — it is "which sequence and combination is optimal given available capital?"
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 3 — Emotional Bias Toward the Option With the Lowest Financial Return (≈25% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Marlina's dream is the artisan workshop. She has wanted to make batik, not just sell it, for a decade. She talks about it with pride and emotion. The artisan workshop is also — as Putri's analysis will show — the option with the lowest near-term ROIC and the longest time to profitability. The analysis does not tell Marlina the workshop is wrong. It tells her the cost of choosing it, which she has a right to know before she decides.
            </p>
          </div>

          <p>These three drivers converge: a capital allocation decision that involves three different business archetypes, a binding capital constraint, and an emotionally charged preference for the option with the weakest financial return. Getting this decision right requires putting numbers on the comparison before deciding — which is precisely what Putri builds over one long weekend with a spreadsheet and Pak Bambang's customer records.</p>
          <p>An important insight that surprises most beginners: the option with the highest ROIC is not the most glamorous or the most expensive one. It is often the simplest investment in something the owner already understands well. In this case, that option requires the least capital, produces the fastest payback, and is the most overlooked — because it does not feel ambitious enough.</p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Which allocation of Marlina's IDR 180 million — across which combination and sequence of the three options — maximizes return on invested capital while building the most durable competitive position for Batik Marlina over the next five years?
            </p>
          </div>
          <p><strong>1.</strong> Calculate the ROIC, payback period, and first-year cash flow for each of the three investment options independently, using realistic (not optimistic) revenue projections.</p>
          <p><strong>2.</strong> Assess what competitive moat each option builds — physical presence, digital brand, or authentic production — and how durable each moat is against the competitive forces Batik Marlina faces.</p>
          <p><strong>3.</strong> Identify the optimal capital deployment sequence: which option to fund first, which to defer, and how much to reserve as working capital before committing.</p>
          <p>What success looks like: Marlina makes a capital allocation decision she understands and can defend — not because Putri told her to, but because the numbers are clear enough that her own intuition can validate them.</p>
          <p>Analytical approach: ROIC comparison across all three options, payback period calculation, capital constraint modeling, and competitive moat assessment. The numbers are not complex — the sophistication is in running all three comparisons on consistent assumptions and in asking the right question about each option's risk profile.</p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>Two frameworks work in tandem here. ROIC analysis provides the financial comparison; competitive moat assessment provides the strategic comparison. Neither alone gives the full picture. A pure financial analysis might recommend Option B (highest ROIC) while ignoring that Option C builds a moat that Options A and B do not. A pure strategic analysis might recommend Option C (strongest moat) without acknowledging that it produces the weakest financial return by a significant margin.</p>
          <div className="highlight-box">
            <strong>Primary: ROIC Comparison + Payback Period</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              ROIC = Annual Operating Profit ÷ Capital Invested. Calculated for each option at Year 1 (ramp-up) and Year 2 (steady state). Payback period = Capital ÷ Annual Profit. Together these reveal not just which option earns more per rupiah, but how quickly Marlina recovers her investment — relevant for a 44-year-old owner who may not want capital tied up for 10 years.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Secondary: Competitive Moat Assessment per Option</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Each investment option is scored on the four moat types: cost advantage, switching costs, brand/trust, and network effects. This produces a strategic profile that complements the financial comparison — especially relevant for Option C (artisan workshop), which has a strong moat but weak near-term ROIC.
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
                <td>Multi-year discounted value</td>
                <td>Revenue projections at this stage are too uncertain to justify a 10-year DCF model; ROIC is more honest about uncertainty</td>
              </tr>
              <tr>
                <td>IRR</td>
                <td>Annualized rate of return</td>
                <td>Requires stable cash flow projections — artisan workshop cash flows are too irregular in years 1–3</td>
              </tr>
              <tr>
                <td><strong>ROIC + Payback + Moat Assessment</strong></td>
                <td><strong>Financial return, capital recovery speed, and competitive durability</strong></td>
                <td><strong>Selected — covers all three dimensions Marlina needs to make this decision confidently</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>Putri's data sources are Pak Bambang's sales ledgers (15 years of monthly revenue by category), the Tokopedia account manager's competitor benchmarking data (voluntarily shared to encourage Marlina to sign up), and a financial model Putri builds from first principles using her coursework knowledge and three conversations with the Yogyakarta space broker. The artisan workshop projections are based on interviews with two existing batik tulis workshops in Yogyakarta who share approximate figures.</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Current Toko (Baseline)</th>
                <th>Option A: 2nd Toko</th>
                <th>Option B: Online Brand</th>
                <th>Option C: Artisan Workshop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Capital required</td>
                <td>—</td>
                <td>IDR 125,000,000</td>
                <td>IDR 38,000,000</td>
                <td>IDR 155,000,000</td>
              </tr>
              <tr>
                <td>Months to first revenue</td>
                <td>—</td>
                <td>3 months</td>
                <td>2 months</td>
                <td>5 months</td>
              </tr>
              <tr>
                <td>Proj. monthly revenue (steady state)</td>
                <td>IDR 78,000,000</td>
                <td>IDR 42,000,000</td>
                <td>IDR 22,000,000</td>
                <td>IDR 24,000,000</td>
              </tr>
              <tr>
                <td>Proj. monthly profit (steady state)</td>
                <td>IDR 13,800,000</td>
                <td>IDR 4,200,000</td>
                <td>IDR 5,800,000</td>
                <td>IDR 1,200,000</td>
              </tr>
              <tr>
                <td>Annual profit (Year 2 steady state)</td>
                <td>IDR 165,600,000</td>
                <td>IDR 50,400,000</td>
                <td>IDR 69,600,000</td>
                <td>IDR 14,400,000</td>
              </tr>
              <tr>
                <td>ROIC (Year 2)</td>
                <td>110% (est.)</td>
                <td>40.3%</td>
                <td>183.2%</td>
                <td>9.3%</td>
              </tr>
              <tr>
                <td>Payback period</td>
                <td>—</td>
                <td>29.8 months</td>
                <td>6.6 months</td>
                <td>108 months</td>
              </tr>
            </tbody>
          </table>
          <p>What the data shows immediately: Option B (Online Brand) has the highest ROIC by a factor of four and the fastest payback, while requiring the least capital. Option C (Artisan Workshop) has the lowest ROIC and the longest payback — and would consume nearly all available capital, leaving nothing as a buffer. What the data hides: the moat each option builds, which is entirely absent from the financial comparison table.</p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Step 1 — Build Consistent Revenue Projections With Conservative Assumptions</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Putri's first discipline: for each option, start from the current toko's benchmarks and discount the new venture's projections by 30% from optimistic estimates. Option A's Yogyakarta toko has lower foot traffic than Malioboro's headline numbers suggest (Pak Bambang's Yogya contact confirms the specific space has quiet hours in the morning). Option B's online revenue starts slow — month one is photography and setup, real revenue begins month two, steady state in month four. Option C does not produce any batik for sale for five months during training and workshop setup.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 2 — Calculate COGS and Operating Cost Structure for Each Option</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Option A mirrors the current toko cost structure: COGS 54%, rent IDR 8 million, 3 staff IDR 7.5 million. Option B has a different structure: COGS 50% (Marlina buys better for online due to fewer markdowns), but adds platform fees (7%), shipping subsidy, and packaging — totaling IDR 3.5 million/month in digital costs. Option C has a production cost structure dominated by artisan wages (5 artisans × IDR 2.8 million = IDR 14 million/month) and materials — with minimal marketing costs because the production volume is not high enough to need mass marketing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 3 — Calculate ROIC and Payback for Each Option</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              ROIC = Annual Steady-State Profit ÷ Capital Invested. Payback = Capital ÷ Monthly Steady-State Profit. Run these numbers for Year 1 (ramp-up year, lower profit) and Year 2 (steady state). The Year 2 ROIC is the fair comparison because all three options need time to reach operating efficiency. Note that Option C's Year 2 ROIC of 9.3% is still below what a deposito earns — which is a significant finding.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 4 — Score Each Option on Four Moat Types</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Option A (Toko): Mild scale advantage (two stores) + location moat (Malioboro is high-traffic) but easy to replicate. Option B (Online): Digital brand moat if executed with consistent quality and storytelling — but competed for by every other batik seller on Tokopedia. Option C (Artisan Workshop): Strong authentic production moat — handmade batik tulis with documented provenance cannot be faked by a factory — but the financial return does not reward this moat adequately at current scale.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 5 — Model the Optimal Sequence Given IDR 180 Million Capital Constraint</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Option B (IDR 38 million) + Option A (IDR 125 million) = IDR 163 million total, leaving IDR 17 million as buffer. Combined annual steady-state profit: IDR 120 million. But sequencing matters: execute Option B first (2-month ramp), let it generate cash for 6 months (IDR 34.8 million additional cash), then deploy Option A with IDR 125 million from original savings + Option B cash = more comfortable working capital position. Option C is deferred entirely until Options A and B are both profitable.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <div className="calculation">
{`OPTION A: Second Toko — Malioboro Area, Yogyakarta

  Capital investment:                          IDR 125,000,000
    Deposit + renovation:         IDR  65,000,000
    Initial inventory:            IDR  50,000,000
    Opening costs + misc:         IDR  10,000,000

  Monthly revenue (steady state, Year 2):      IDR  42,000,000
  Monthly costs:
    COGS (54%):                   IDR  22,680,000
    Rent (Yogyakarta location):   IDR   8,000,000
    Staff (3 people):             IDR   7,500,000
    Utilities + packaging:        IDR   2,600,000
    Total costs:                               IDR  40,780,000
  Monthly operating profit:                    IDR   1,220,000

  Wait — this looks very thin. Let me recalculate with higher revenue:
  At IDR 42M revenue, the margins are tight because rent in
  Malioboro is high. Putri flags this as a risk.

  REVISED — using IDR 48M revenue (Pak Bambang contacts confirm
  high tourist season can reach IDR 55M but average is IDR 42-48M)

  Monthly revenue (Year 2 average):            IDR  45,000,000
  COGS (54%):                                  IDR  24,300,000
  Gross profit:                                IDR  20,700,000
  Operating costs:                             IDR  18,100,000
    Rent:                         IDR   8,000,000
    Staff (3 people):             IDR   7,500,000
    Utilities + misc:             IDR   2,600,000
  Monthly operating profit:                    IDR   2,600,000
  Annual profit (Year 2):        12 × 2.6M =   IDR  31,200,000
  ROIC (Year 2):   31.2M ÷ 125M =                     24.96%
  Payback:         125M ÷ 2.6M/month =               48.1 months`}
          </div>

          <div className="calculation">
{`OPTION B: Online Brand — Tokopedia + Shopee + Instagram Shop

  Capital investment:                           IDR  38,000,000
    Initial inventory for online:  IDR  18,000,000
    Professional photography:      IDR   5,000,000
    Launch advertising (3 months): IDR  12,000,000
    Packaging + supplies:          IDR   3,000,000

  Monthly revenue (steady state, from Month 4): IDR  22,000,000
  Monthly costs:
    COGS (50% — fewer markdowns online): IDR  11,000,000
    Platform fees (7%):            IDR   1,540,000
    Shipping subsidy:              IDR     880,000
    Premium packaging:             IDR     580,000
    Sustaining ads:                IDR   1,200,000
    Total costs:                                IDR  15,200,000
  Monthly operating profit:                     IDR   6,800,000
  Annual profit (Year 2):        12 × 6.8M =    IDR  81,600,000
  ROIC (Year 2):   81.6M ÷ 38M =                      214.7%
  Payback:         38M ÷ 6.8M/month =                5.6 months`}
          </div>

          <div className="calculation">
{`OPTION C: Artisan Batik Tulis Workshop

  Capital investment:                          IDR 155,000,000
    Workshop space (deposit+fit-out): IDR  32,000,000
    Tools, wax equipment, looms:      IDR  28,000,000
    Initial materials (wax, fabric):  IDR  20,000,000
    Artisan hiring + 4-month training
    (5 artisans × IDR 3M × 4 months): IDR  60,000,000
    Contingency + legal:              IDR  15,000,000

  Revenue starts Month 5 (first pieces ready to sell)
  Monthly revenue (steady state, Year 2):      IDR  24,000,000
    (8–12 batik tulis pieces/month, avg IDR 600,000-1,500,000)
  Monthly costs:
    Artisan wages (5 × IDR 2,800,000): IDR  14,000,000
    Materials (wax, fabric, dye):      IDR   4,200,000
    Workshop space:                    IDR   3,000,000
    Utilities + misc:                  IDR   1,800,000
    Total costs:                                IDR  23,000,000
  Monthly operating profit:                    IDR   1,000,000
  Annual profit (Year 2):        12 × 1M =     IDR  12,000,000
  ROIC (Year 2):   12M ÷ 155M =                        7.74%
  Payback:         155M ÷ 1M/month =               155 months
  Note: ROIC below deposito rate (5.5%) only in Year 1.
        Year 3+ may improve if volume grows. Very uncertain.`}
          </div>

          <div className="calculation">
{`COMPARISON SUMMARY + OPTIMAL SEQUENCE

  Option       Capital       Year 2 Profit    ROIC     Payback
  ─────────────────────────────────────────────────────────────
  Deposito     IDR 180M      IDR  9.9M        5.5%    18.2 yr
  Option A     IDR 125M      IDR 31.2M       24.96%   48.1 mo
  Option B     IDR  38M      IDR 81.6M      214.7%    5.6 mo   ✓✓
  Option C     IDR 155M      IDR 12.0M        7.74%  155.0 mo  ✗

  OPTIMAL SEQUENCE (given IDR 180M total capital):
  Month 1:  Deploy IDR 38M → Option B (online brand launch)
  Month 7:  Option B has generated IDR 6.8M × 6 = IDR 40.8M
            Original remaining capital: IDR 142M
            Total available: IDR 142M + IDR 40.8M = IDR 182.8M
  Month 8:  Deploy IDR 125M → Option A (Yogyakarta toko)
            Reserve: IDR 57.8M (comfortable working capital)

  Combined Year 2+ annual profit: IDR 81.6M + IDR 31.2M = IDR 112.8M
  Blended ROIC on IDR 163M: 112.8M ÷ 163M = 69.2%
  Option C: DEFERRED — revisit after A and B stabilize.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — Option B Has the Highest ROIC by a Factor of Eight Over Option A</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At 214.7% ROIC and a 5.6-month payback, the online brand is the strongest financial investment by a significant margin. This is counterintuitive to Marlina, who has resisted the online channel for three years because she feared it would cheapen the brand. Putri's data shows the opposite: the online batik sellers with the best margins are positioned as premium, using high-quality photography and detailed provenance storytelling — exactly what Batik Marlina can offer. The channel does not determine the positioning; the execution does.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — Option C Has a Lower ROIC Than a Bank Deposito</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At 7.74% ROIC and a 155-month (12.9-year) payback, the artisan workshop produces less financial return than leaving the money in a bank savings account. This does not mean it is a bad idea — the workshop builds the strongest competitive moat of the three options and serves Marlina's personal mission of preserving Javanese batik craft. But it means the workshop is a mission investment, not a financial investment. Marlina must make this choice consciously, not by accident.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Sequencing Option B Before Option A Generates IDR 40 Million in Extra Capital</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              By doing Option B first (5.6-month payback), Marlina generates enough profit by month 7 to fund Option A with a substantially larger working capital buffer than if she had done Option A first. The order of operations matters. Doing the high-ROIC, fast-payback investment first is not just financially correct — it reduces execution risk on Option A by giving Marlina a broader cash cushion for the Yogyakarta store's slower ramp-up.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 (Counterintuitive) — The Artisan Workshop Builds the Strongest Moat of All Three Options</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Option C's competitive moat score — owning authentic batik tulis production — is unmatched. A factory cannot produce genuine batik tulis. A competitor cannot replicate 20 hours of hand-waxing with a machine. Marlina's current retail business can be replicated by any well-capitalized batik retailer. Her online presence can be replicated by a better-funded brand. But a curated artisan workshop with certified authentic production and documented provenance is a genuinely rare asset. The financial return does not reflect the strategic value. This is the tension Putri and Marlina must navigate honestly.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Tier 1 — Do Now: Launch the Online Brand (Option B)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Deploy IDR 38 million immediately into the Tokopedia + Shopee + Instagram Shop launch. Hire a part-time product photographer (1 session per month, IDR 1.5 million) to build a premium visual identity. Position as "Batik Marlina — Autentik Solo Sejak 2009," emphasizing provenance, not price. Allocate IDR 12 million to launch ads over three months. Target: IDR 22 million monthly revenue by month four. This option is low risk (fast payback, manageable capital), high return, and builds digital skills the business needs regardless of what else it does.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 2 — Do in Month 7–8: Open the Yogyakarta Toko (Option A)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              After Option B reaches steady-state profitability, deploy IDR 125 million into the Yogyakarta location. By this point, the online brand will have generated approximately IDR 40 million in additional cash, providing a comfortable total capital cushion. Send Pak Bambang to Yogyakarta for the first three months to manage the opening — his customer relationships and supplier knowledge are the single most transferable asset. Hire a permanent Yogyakarta manager by month 3. Target: IDR 45 million monthly revenue by month 12 of operation.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 3 — Defer and Decide Deliberately in Year 2: Artisan Workshop (Option C)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Do not invest in the artisan workshop until Options A and B are both profitable and stable. Revisit in 18 months. At that point, if combined profits have generated sufficient new capital, Marlina can fund a small pilot workshop (3 artisans, IDR 65 million) rather than the full IDR 155 million commitment. A pilot tests the concept at lower risk and allows the workshop to grow into Marlina's capacity to manage it. The dream is worth pursuing — but not at the cost of destabilizing the business that funds it.
            </p>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Option</th>
                <th>Capital</th>
                <th>ROIC (Yr 2)</th>
                <th>Moat Built</th>
                <th>Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B — Online brand</td>
                <td>IDR 38,000,000</td>
                <td>214.7%</td>
                <td>Digital brand</td>
                <td>Do immediately</td>
              </tr>
              <tr>
                <td>A — Yogyakarta toko</td>
                <td>IDR 125,000,000</td>
                <td>24.96%</td>
                <td>Geographic + scale</td>
                <td>Do in month 7–8</td>
              </tr>
              <tr>
                <td>C — Artisan workshop</td>
                <td>IDR 155,000,000</td>
                <td>7.74%</td>
                <td>Authentic production (strong)</td>
                <td>Defer to Year 2 pilot</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>Putri presents her analysis on a Saturday afternoon over coffee and klepon. Pak Bambang is in the room. Marlina listens carefully, asks several questions about the online projections, and then is quiet for a long moment. She says: "So you're saying the workshop is a bad investment?" Putri chooses her words carefully: "I'm saying it's a mission investment, not a financial one. The numbers are honest. The decision is yours."</p>
          <p><strong>What Marlina will probably do:</strong> She will agree to Option B. She has been curious about the online channel and the Tokopedia account manager's visit genuinely interested her. She is less certain about Option A — she worries that Yogyakarta has too many batik shops already, and Pak Bambang shares this concern. She may negotiate a shorter lease commitment in Yogyakarta before fully committing the capital. On the workshop, she will not let it go. She will tell Putri she wants to start small — maybe two artisans — and see how it goes.</p>
          <p><strong>What Marlina should do differently from the above:</strong> The two-artisan pilot at IDR 40 million is actually a reasonable approach. It tests the workshop concept at a capital level that does not threaten the business. Where Marlina needs to be honest with herself: the workshop will not become financially significant for three to four years. She should fund it from operating cash flow — IDR 2–3 million per month set aside from the current toko — rather than from the IDR 180 million pool. That preserves the capital for the higher-ROIC investments while still moving the dream forward.</p>
          <p>Pak Bambang leaves the meeting saying something he rarely says: "Putri, I thought you'd say something I couldn't agree with. But this is good." Marlina squeezes Putri's hand across the table. This is not just a business decision. It is a conversation about what kind of business Batik Marlina will be in fifteen more years.</p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — Always Compare All Options on the Same Financial Metrics Before Deciding</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Marlina's original approach — evaluating each option as it arose, without a comparative table — is how most small business owners make capital allocation decisions. It feels practical. But it means each option is evaluated against "doing nothing," not against the other available options. The ROIC comparison table changes the question from "is this a good investment?" to "is this the best available investment?" Those are completely different questions with often very different answers.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — Separate Mission Investments From Financial Investments — Then Decide Consciously</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Option C (artisan workshop) is not wrong — it is a different kind of decision. Many UMKM owners make investments that serve their personal mission, their community, their heritage, or their pride — and that is legitimate. The error is not making mission investments; it is not knowing you are making one. When the workshop's ROIC is clearly below deposito, Marlina can choose it deliberately, knowing the cost. That is very different from choosing it because she has not compared it to anything.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — The Highest ROIC Option Is Often the Least Glamorous One</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The online brand (Option B) required the least capital, the least management complexity, and the least emotional commitment — and it produced 214.7% ROIC. The artisan workshop required the most capital, the most management complexity, the most emotional investment — and it produced 7.74% ROIC. This inverse relationship between glamour and financial return is not a coincidence. Complex, high-investment projects carry execution risk that erodes their theoretical ROIC. Simple, asset-light investments in capabilities you already understand tend to produce the highest risk-adjusted returns.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — Revenue Projections for New Ventures Must Be Conservative, Not Optimistic</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Putri's baseline discipline — discounting all new venture projections by 30% from vendor estimates — is a heuristic worth adopting universally. Machine salespeople, real estate brokers, and franchise promoters all have incentives to present optimistic revenue projections. A new Yogyakarta toko will not open at 100% capacity. A Tokopedia store will not reach steady-state sales in month one. An artisan workshop will produce less in year one than the artisans eventually will in year three. Every projection for a new investment should be stress-tested at 60% of the optimistic case before the decision is made.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case12
