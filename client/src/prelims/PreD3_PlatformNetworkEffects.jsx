import NetworkEffectsCalc from './calculators/NetworkEffectsCalc.jsx'

const PreD3 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module D3</span>
        <h1>Platform &amp; Network Effects</h1>
        <div className="case-meta">
          Module D: Business Model Intuition &bull; Why some businesses become more valuable the larger they get — and how to build one that does
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>Doni Saputra, 31, started a WhatsApp group eight months ago in Makassar. He connected 12 home cooks — ibu-ibu who made excellent homemade lunches — with 40 office workers who were tired of eating at the same warung every day. The concept was simple: each morning, cooks post their menu to a shared WhatsApp group; customers DM Doni to order; Doni coordinates pickup and delivery; at the end of the week, he keeps 12% commission. He ran it from his phone, alongside his day job.</p>
          <p>Eight months later, Doni has 45 active cooks and 280 customers. He now nets IDR 2.1 million per month from the platform with almost no additional effort compared to month one. His friend Bagas, who works in tech in Jakarta, visits and tells him something he doesn't quite believe: "Doni, your platform is worth more now than it was in month one — not because you worked harder, but because it has more participants." Doni assumed his effort was what drove the growth. Bagas explains that at some point, the platform started growing itself because new cooks joined because there were enough customers, and new customers joined because there were enough cooks.</p>
          <p>That self-reinforcing cycle — where more users make the platform more valuable for all existing users, which attracts more users — is called a network effect. It is the single most powerful growth force in business, and it is also one of the most misunderstood. Many businesses believe they have network effects when they have ordinary growth. The distinction matters enormously for strategy, valuation, and competitive defense.</p>
          <div className="highlight-box">
            <strong>What Is a Platform Business?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A platform business facilitates interactions between two or more distinct user groups — producers and consumers, buyers and sellers, service providers and clients — and captures value by enabling those interactions. Unlike a pipeline business (which creates value linearly: make → sell → earn), a platform creates value by orchestrating an ecosystem. The platform owner does not produce the core value — the participants do. The platform's job is to attract, match, curate, and govern them.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Direct Network Effects (Same-Side)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Value increases as more members of the <em>same</em> user group join. The classic example is a telephone network — one phone is useless, two phones enable one conversation, a million phones enable millions of conversations.<br /><br />
              <strong>In a food platform:</strong> More customers in the group means existing customers can share recommendations, flag bad orders, and build community — each new customer slightly improves the experience for existing ones.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Indirect (Cross-Side) Network Effects</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Value increases as more members of the <em>other</em> user group join. This is the dominant force in two-sided markets like Doni's platform.<br /><br />
              <strong>In a food platform:</strong> More cooks → more menu variety → more customers join. More customers → more orders → more cooks join. The two sides reinforce each other across the platform boundary.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Critical Mass</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The minimum number of participants on both sides required for the platform to become self-sustaining — where new users want to join because of who is already there, rather than because of the founder's personal sales effort. Before critical mass, the founder must work hard to grow both sides. After critical mass, growth becomes semi-organic.<br /><br />
              <strong>Warning:</strong> Critical mass is local, not global. A food platform with 280 customers in one Makassar office district has not achieved critical mass across all of Makassar.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Metcalfe's Law (Simplified)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The value of a network grows roughly with the square of the number of participants (n²). This means that doubling users quadruples potential value — growth is super-linear. For a two-sided platform, the relevant value metric is n (supply) × m (demand), not total users. This is why a platform with 45 cooks and 280 customers is dramatically more valuable than one with 12 cooks and 40 customers, even though total users grew only 6×.<br /><br />
              <strong>Value ratio:</strong> (45 × 280) ÷ (12 × 40) = 12,600 ÷ 480 = <strong>26.25× more valuable</strong> — with only 6× the participants.
            </p>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Concept</th>
                <th>Who Benefits</th>
                <th>UMKM Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Direct network effects</td>
                <td>Same side (all cooks, or all customers)</td>
                <td>More cooks → cook community tips and quality competition</td>
              </tr>
              <tr>
                <td>Cross-side network effects</td>
                <td>Opposite side</td>
                <td>More customers → more cook revenue → more cooks join</td>
              </tr>
              <tr>
                <td>Critical mass</td>
                <td>Platform as a whole</td>
                <td>The point where Doni stops needing to recruit manually</td>
              </tr>
              <tr>
                <td>Metcalfe's Law</td>
                <td>Platform valuation</td>
                <td>n × m grows faster than n + m as each side grows</td>
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
            <strong>Mistake 1 — Confusing Growth with Network Effects</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Many business owners say they have "network effects" when they mean their business is growing. These are not the same thing. A café can grow 20% per month through great product and word of mouth — that is growth, driven by satisfaction. A platform has network effects when an additional customer makes the product <em>more valuable</em> for existing customers (not just for the platform owner's revenue). The test: if you remove 10 customers from your platform, do the remaining customers notice a decrease in the value they receive? If not, you have growth but not network effects.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Ignoring the Chicken-and-Egg Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every two-sided platform faces this at launch: supply won't join without demand, and demand won't come without supply. The fatal mistake is trying to grow both sides simultaneously with limited resources. The correct approach is always to sequence — pick the side whose presence creates the most immediate value for the other side, build that side to critical mass first, then use it to attract the other side. For food platforms: build supply (cooks) first. A customer who sees 40 home cooks with diverse menus will join immediately. A customer who sees 2 cooks will leave and never return.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Allowing Disintermediation to Leak Value Off the Platform</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Disintermediation happens when buyers and sellers, having met on your platform, start transacting directly — bypassing your commission. This is the platform's slow death. If Doni's cooks start giving their WhatsApp numbers directly to loyal customers and taking orders offline, Doni's commission revenue drops even as transaction volume grows. The defense is to make the platform's services (payment guarantees, dispute resolution, quality curation, discovery) indispensable enough that going off-platform feels risky or inconvenient for both sides.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Doni's Food Platform: Measuring Network Value Growth</h2>
        <div className="content">
          <p>Doni's platform has grown from Month 1 to Month 8. Let's quantify what that growth means in terms of network value, revenue, and unit economics on each side.</p>

          <div className="calculation">
{`Doni's "Makan Siang Makassar" Platform
Two-Sided Market Analysis

  ═══════════════════════════════════════════════════════════

  MONTH 1 (Launch)
  ───────────────────────────────────────────────────────────
  Active cooks (supply side):                             12
  Active customers (demand side):                         40
  Cross-side connections possible:             12 × 40 =  480
  Average order value:                         IDR  25,000
  Weekly transactions:                                    22
  Monthly transactions:                                   88
  Monthly GMV:          88 × 25,000 =          IDR 2,200,000
  Commission revenue (12%):                    IDR   264,000
  Platform costs (WA Business, coordination):  IDR   500,000
  Platform profit:                            -IDR   236,000  (loss)

  ═══════════════════════════════════════════════════════════

  MONTH 8 (Current)
  ───────────────────────────────────────────────────────────
  Active cooks (supply side):                             45
  Active customers (demand side):                        280
  Cross-side connections possible:           45 × 280 = 12,600
  Average order value:                         IDR  28,000
  Weekly transactions:                                   175
  Monthly transactions:                                  700
  Monthly GMV:         700 × 28,000 =          IDR 19,600,000
  Commission revenue (12%):                    IDR  2,352,000
  Platform costs:                              IDR    850,000
  Platform profit:                             IDR  1,502,000  ✓

  ═══════════════════════════════════════════════════════════

  NETWORK EFFECT MEASUREMENT
  ───────────────────────────────────────────────────────────
  User count growth:
    Supply (cooks):       12  →  45   =  +275%  (3.75×)
    Demand (customers):   40  → 280   =  +600%  (7.0×)
    Total participants:   52  → 325   =  +525%  (6.25×)

  Network value growth (cross-side connections):
    Month 1:   480  connection pairs
    Month 8: 12,600  connection pairs
    Growth:  12,600 ÷ 480 = 26.25× network value

  Revenue growth:
    Month 1: IDR   264,000 commission
    Month 8: IDR 2,352,000 commission
    Growth:  2,352,000 ÷ 264,000 = 8.9× revenue

  Key finding: Network value grew 26× while revenue grew 9×.
  The platform is accumulating value faster than it is
  monetising it — common in the early growth phase.

  ═══════════════════════════════════════════════════════════

  COOK-SIDE ECONOMICS (per cook, Month 8)
  ───────────────────────────────────────────────────────────
  Average orders per cook per month:  700 ÷ 45 =    15.6
  Average revenue per cook:  15.6 × 28,000 =   IDR 436,800
  After 12% commission:                         IDR 384,000
  (Additional income per cook, not full-time)
  Cook switching cost: losing IDR 384,000/month of income`}
          </div>

          <p>The most important number in this table is 26.25×: the platform's network value grew more than 26 times while user count only grew 6.25 times. This is what Metcalfe's Law predicts — and it explains why platforms, once they reach critical mass, are so difficult for new entrants to displace.</p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 11 — Nadia's Home-Cook Platform vs. VC-Funded Competitor</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nadia Rahmawati's DapurKita platform in Surabaya faces a direct competitive threat from a well-funded startup launching in her territory. The entire case is a network effect defense problem: Nadia's platform has genuine cross-side network effects because her supply side (65 curated home cooks) is the reason her demand side (280 monthly active customers) values the platform. Her moat is the quality and trust of those cook relationships — something the competitor cannot replicate quickly with cash subsidies. Case 11 uses the Metcalfe framework to quantify how much network density Nadia has built in her specific geographic coverage area, and why that local density is more defensible than it appears.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — Always Build the Supply Side First</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In a two-sided market, supply (the producer, the seller, the service provider) is almost always harder to recruit than demand. And supply is what creates the value that demand comes for. Before launching a platform publicly, make sure you have enough supply to immediately satisfy any initial demand — otherwise early users will arrive, find nothing compelling, and leave with a bad impression that is almost impossible to reverse. A food platform with 3 cooks is a bad food platform. The same platform with 30 cooks is worth telling your friends about.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — Geographic Concentration Creates Stronger Network Effects Than Diluted Scale</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A food platform serving one office district with 45 cooks has stronger network effects within that district than the same platform spread across five districts with 9 cooks each. Concentration matters because the value of a platform comes from relevant, accessible options — a customer in Rungkut gets no value from a cook in Gubeng. Build dense before building wide. Expand geographically only after achieving genuine critical mass in the original territory.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — Revenue Growth Lags Network Value Growth in Healthy Platforms</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              As Doni's numbers show, network value (cross-side connections) grew 26× while revenue grew only 9×. This is normal and even desirable in the early phase — it means the platform is accumulating more potential value than it is currently monetizing, which gives the owner room to raise commission rates, introduce premium services, or add adjacent revenue lines later. A platform where revenue grows faster than network value is often over-monetizing and risking participant churn. The priority order is: grow the network first, monetize second.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — The Strongest Defense Against Competitors Is Switching Cost on the Supply Side</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When a well-funded competitor enters your market, they will typically try to poach demand (customers) with discounts and vouchers. This is expensive for them and often fails, because customers have low loyalty. The harder asset to take from you is your supply base — your cooks, your vendors, your service providers — especially if those relationships are personal, curated, and carry trust. A platform owner who has invested in supply quality and supply relationships has a moat that cash cannot easily buy. See PreD4 for how to evaluate and strengthen this moat systematically.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Increase the user count and watch network value grow as n² while linear value grows as n — this is the compounding power of network effects.
          </p>
          <NetworkEffectsCalc />
        </div>
      </section>

    </div>
  )
}

export default PreD3
