import CompetitiveMoatsCalc from './calculators/CompetitiveMoatsCalc.jsx'

const PreD4 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module D4</span>
        <h1>Competitive Moats</h1>
        <div className="case-meta">
          Module D: Business Model Intuition &bull; What makes a business hard to copy — and how to know whether your advantage is real or just temporary
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>Ibu Tutik Rahayu, 52, has been making batik tulis in her Yogyakarta workshop for twenty years. Handmade batik tulis — the traditional wax-resist technique applied by hand with a canting tool — takes 40 to 120 hours per piece depending on the complexity of the motif. She sells to a loyal base: government offices buying formal wear for state events, hotels commissioning custom lobby pieces, and collectors seeking authentic Javanese craft. Her workshop employs 6 artisans. Revenue is IDR 28 million per month. Profit is IDR 9 million.</p>
          <p>In the past two years, Ibu Tutik has watched wholesale batik printing factories from Tanah Abang flood the market with machine-printed "batik" at IDR 60,000 per piece — one-eighth of her minimum price. Several of her retail customers have switched. She calls her nephew Aryo, 29, who works in brand consulting in Jakarta, and asks whether she should lower her prices to compete. Aryo visits the workshop and asks her a different question: "Tante, why does your customer still come back to you instead of buying the cheap version?" Tutik says: "Because they know mine is real." Aryo says: "That's your moat. Now let's figure out how strong it is."</p>
          <p>A competitive moat is the structural advantage that allows a business to earn above-average profits over time without being destroyed by competition. The term comes from Warren Buffett, who used it to describe businesses that are genuinely difficult for competitors to replicate. Understanding your moat — what type it is, how strong it is, and how to strengthen it — is one of the most important strategic questions a business owner can answer. Most UMKM owners have at least one moat but have never articulated it clearly, which means they also cannot defend it deliberately.</p>
          <div className="highlight-box">
            <strong>What Is a Competitive Moat?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A competitive moat is a durable structural advantage that protects a business's profit margin and market position from competition. Unlike a temporary competitive advantage — a new product, a promotional price, a lucky location — a moat is something that becomes more entrenched over time, not less. A moat makes it expensive, difficult, or risky for a competitor to take your customers, even if they have more capital or a similar product.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Moat Type 1 — Cost Advantage</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              You can produce or deliver your product at a structurally lower cost than competitors — not because you are cutting corners, but because of scale, proprietary processes, unique supplier relationships, or geographic access to cheaper inputs. Competitors cannot match your price without losing money.<br /><br />
              <strong>Example in UMKM:</strong> A tempe producer who owns a soybean storage facility and buys directly from a farmer cooperative, eliminating two layers of middlemen.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Moat Type 2 — Switching Costs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Your customers would face significant hassle, cost, or risk if they moved to a competitor — so they stay with you even if a competitor offers a slightly better deal. Switching costs can be technical (your systems are embedded in their workflow), relational (a trusted long-term relationship), or contractual (lock-in terms).<br /><br />
              <strong>Example in UMKM:</strong> A bookkeeping service that has managed a client's records for five years — switching means transferring years of history and rebuilding trust.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Moat Type 3 — Brand / Trust / Intangibles</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Customers pay a premium for your product specifically because of what it represents — authenticity, status, reliability, heritage, or personal trust. This moat is built through consistent quality and reputation over time and is very hard to replicate quickly with money.<br /><br />
              <strong>Example in UMKM:</strong> A batik tulis artisan whose work is associated with genuine Javanese craft heritage — customers who want authentic batik will not substitute machine-printed fabric even at one-eighth the price.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Moat Type 4 — Network Effects</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Your product or platform becomes more valuable as more people use it, creating a self-reinforcing cycle that is structurally difficult for smaller competitors to replicate. See PreD3 for a full treatment.<br /><br />
              <strong>Example in UMKM:</strong> A local WhatsApp-based food platform where more cooks attract more customers, which attracts more cooks — each new participant strengthens the platform for all others.
            </p>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Moat Type</th>
                <th>Built Through</th>
                <th>Threatened By</th>
                <th>How to Strengthen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost Advantage</td>
                <td>Scale, supplier relationships, process</td>
                <td>New technology, larger competitor</td>
                <td>Lock in supplier contracts, invest in efficiency</td>
              </tr>
              <tr>
                <td>Switching Costs</td>
                <td>Embedded relationships, data, contracts</td>
                <td>Better migration tools, superior offer</td>
                <td>Deepen integration, create value for staying</td>
              </tr>
              <tr>
                <td>Brand / Trust</td>
                <td>Consistent quality + time + storytelling</td>
                <td>Scandal, inconsistency, new authenticity</td>
                <td>Document and communicate the craft story</td>
              </tr>
              <tr>
                <td>Network Effects</td>
                <td>Two-sided growth, critical mass</td>
                <td>Better-funded platform, fragmentation</td>
                <td>Increase density, reduce disintermediation</td>
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
            <strong>Mistake 1 — Confusing Market Share with a Moat</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              "I have 70% of the batik customers in this area" is market share, not a moat. Market share can be taken by a better product, a lower price, or a bigger marketing budget. A moat is a structural reason why taking your market share would be difficult or irrational even for a well-resourced competitor. A business with 70% market share and no moat is one aggressive promotion away from losing half its customers. A business with 30% market share and a strong switching-cost moat may be almost impossible to displace.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Thinking Product Quality Alone Is a Moat</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Quality is a prerequisite for being in business, not a moat. Any competitor with time and resources can improve their quality. The question is: what makes customers prefer your quality specifically, to the point where they would not switch to a competitor with equal quality? For Ibu Tutik, it is not just that her batik tulis is high quality — it is that her batik tulis is recognized as authentic, associated with her family's two-decade reputation, and purchased by institutional buyers who need that provenance for formal occasions. That provenance is the moat, not the quality per se.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Not Knowing Which Moat You Have and Therefore Not Defending It</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Most UMKM owners have at least one moat but have never named it. This means they cannot deliberately invest in strengthening it, and they cannot recognize when it is under attack. Ibu Tutik's brand moat is being eroded by cheap imitations that confuse consumers — but she can defend it by leaning harder into the institutional B2B channel (hotels, government offices) where authentic provenance matters most, and by adding certification or documentation that proves the craft origin of her pieces. Without naming the moat, she would instead waste money on price discounts — which attacks her cost advantage moat (which she does not have) rather than defending her brand moat (which she does).
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Ibu Tutik's Workshop: Moat Scoring Across Four Dimensions</h2>
        <div className="content">
          <p>Aryo helps Ibu Tutik score her business on each moat dimension, then maps where to focus defensive investment.</p>

          <div className="calculation">
{`Ibu Tutik Rahayu — Batik Tulis Workshop, Yogyakarta
Competitive Moat Assessment

  ═══════════════════════════════════════════════════════════

  BUSINESS CONTEXT
  Monthly revenue:              IDR  28,000,000
  Monthly profit:               IDR   9,000,000
  Profit margin:                        32.1%
  Price per piece:       IDR 450,000 – 1,800,000  (hand-made)
  Competitor price:               IDR 60,000 – 120,000  (print)
  Key customers: gov. offices 45%, hotels 30%, retail 25%

  ═══════════════════════════════════════════════════════════

  MOAT SCORING (1 = weak / 5 = strong)

  ─────────────────────────────────────────────────────────
  COST ADVANTAGE                                    Score: 1/5
  Can Tutik compete on price with factories?           NO
  Her production cost per piece:          IDR 120,000–380,000
  Factory cost per printed piece:           IDR 15,000–25,000
  Verdict: Structural cost DISADVANTAGE, not a moat.
  Response: Do NOT try to win on price. Accept the premium.

  ─────────────────────────────────────────────────────────
  SWITCHING COSTS                                   Score: 3/5
  Government clients:  Have sourced from Tutik for 5+ years,
    know her motif catalog, have staff who trust her delivery.
    Switching requires re-qualifying a new vendor = hassle.
  Hotel clients:       Lobby pieces are large commissions
    with ongoing service (framing, replacement) = sticky.
  Retail walk-ins:     Low switching cost — price-sensitive.
  Verdict: MODERATE moat for institutional B2B clients.
           WEAK moat for retail walk-ins.
  Response: Invest in deepening the institutional channel;
            let retail be secondary.

  ─────────────────────────────────────────────────────────
  BRAND / TRUST / HERITAGE                          Score: 4/5
  20-year reputation in Yogyakarta craft community.
  Featured in 3 regional tourism publications.
  6 trained artisans with recognizable signature motifs.
  Government buyers specifically request "batik tulis asli"
  (authentic hand-drawn batik) by name.
  Verdict: STRONG moat — difficult to replicate quickly.
  Risk: Eroded by consumer confusion between print and tulis.
  Response: Educate buyers, add certificates of authenticity,
            document the making process for marketing.

  ─────────────────────────────────────────────────────────
  NETWORK EFFECTS                                   Score: 1/5
  More customers do not make Tutik's batik more valuable
  for existing customers. No platform dynamics present.
  Verdict: Not applicable to this business model.
  Response: N/A — do not invest here.

  ═══════════════════════════════════════════════════════════

  COMPOSITE MOAT SUMMARY
  ─────────────────────────────────────────────────────────
  Cost advantage:    1/5  ████░░░░░░  (disadvantage)
  Switching costs:   3/5  ██████░░░░  (moderate, B2B only)
  Brand / Heritage:  4/5  ████████░░  (strong, must defend)
  Network effects:   1/5  ████░░░░░░  (not applicable)

  STRATEGIC PRIORITY: Protect the brand moat + deepen
  B2B switching costs. Do not fight on price.

  ═══════════════════════════════════════════════════════════

  MOAT-BASED CHANNEL REALLOCATION
  ─────────────────────────────────────────────────────────
  Current revenue mix:
    Government/institutional:  IDR 12,600,000  (45%)
    Hotels & hospitality:      IDR  8,400,000  (30%)
    Retail walk-ins:           IDR  7,000,000  (25%)

  Recommended 12-month target:
    Government/institutional:  IDR 16,800,000  (55%)
    Hotels & hospitality:      IDR 11,200,000  (37%)
    Retail walk-ins:           IDR  2,400,000   (8%)

  Shift toward channels where the moat is strongest.`}
          </div>

          <p>Aryo's conclusion: Ibu Tutik should stop trying to retain price-sensitive retail walk-ins who are switching to printed batik. Those customers have already left the segment she competes in. Her energy should go to the institutional B2B channel — government offices, universities, five-star hotels — where authentic provenance is a procurement requirement, not just a preference. That is where both her switching-cost moat and her brand moat are strongest.</p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 11 — Nadia's DapurKita: Defending a Platform Moat Against a VC Competitor</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When a well-funded food delivery startup launches in Surabaya targeting Nadia's territory, the case becomes a moat defense problem. Nadia's moats are: (1) switching costs on the supply side — 65 home cooks who earn IDR 384,000/month average extra income and have personal relationships with Mbak Sri, her cook coordinator; (2) a brand/trust moat with loyal customers who have personal relationships with specific cooks; (3) local network density in the Rungkut office district. The startup can buy demand-side loyalty with vouchers, but it cannot quickly replicate the supply-side trust relationships. Case 11 maps each of Nadia's moats against the competitor's capabilities and identifies exactly where the defense needs to concentrate.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 12 — Ibu Marlina's Batik: What Each Investment Option Builds as a Moat</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Marlina's capital allocation decision (Case 12) is not just about ROIC — it is about which moat each investment option creates. The second retail toko deepens geographic reach (a mild scale moat). The online brand builds a digital brand presence (a brand moat in the digital channel). The artisan batik tulis workshop creates the strongest moat of all — authentic handmade supply that mass producers cannot replicate — but at the lowest near-term ROIC. Putri's analysis in Case 12 uses the moat framework to show that the option with the lowest financial return may have the highest strategic value for long-term competitive positioning.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Note 1 — Ask "Why Would a Well-Funded Competitor Struggle to Take My Customers?"</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is the core question that separates a moat from a temporary advantage. If the honest answer is "a competitor with IDR 500 million could replicate what I do within six months," you do not have a moat — you have a head start. If the honest answer is "even with unlimited resources, a competitor would need five years and personal trust they cannot buy," that is a real moat. Most UMKM owners are surprised to discover they have stronger moats than they realize — usually in relationships, local knowledge, and genuine craft quality.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 2 — Moat Strength Varies by Customer Segment</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Ibu Tutik's moat is strong in the institutional B2B channel and weak in retail. This is not unusual. Most businesses have strong moats in some customer segments and weak moats in others. The strategic mistake is to average these out and conclude you have a "medium" moat. Instead, identify which segment is most protected, focus there, and treat the weakly-moated segments as secondary revenue rather than core business. Fighting hard for customers you have no structural advantage in retaining is expensive and demoralizing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 3 — Document Your Moat or It Erodes Without You Noticing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A brand moat requires active maintenance. If Ibu Tutik never tells the story of how her batik is made — the 80 hours of hand-waxing, the natural dyes, the artisans trained in the Mataram court tradition — customers will increasingly treat her pieces as interchangeable with machine-printed alternatives. Brand moats are built through documentation, storytelling, and consistent visible quality signals. A simple certificate of authenticity, a social media post showing the canting work in progress, or a short video of an artisan's hands are not marketing gimmicks — they are moat maintenance.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Note 4 — Not Having a Moat Is a Solvable Problem, Not a Verdict</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If a business analysis reveals that a business currently has no meaningful moat, that is a diagnosis, not a death sentence. Moats can be built deliberately. A service business can build switching cost by embedding its work into clients' systems. A product business can build a brand moat by narrowing its focus to a niche where it can become the known name. A local business can build a network effect by creating a community around its product. The question after the diagnosis is: given our cost structure, customer base, and resources, which type of moat is most realistic to build within 12–24 months?
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Try It — Interactive Calculator</h2>
        <div className="content">
          <p>
            Score a business across the five moat dimensions and see how the overall width — Wide, Moderate, or Narrow — emerges from the combination.
          </p>
          <CompetitiveMoatsCalc />
        </div>
      </section>

    </div>
  )
}

export default PreD4
