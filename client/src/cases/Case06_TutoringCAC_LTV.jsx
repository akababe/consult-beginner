const Case06 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 06</span>
        <h1>I&apos;m Spending More Getting Students Than I Earn From Them</h1>
        <div className="case-meta">
          Industry: Education / Online Services &bull; Level: Beginner / Small Business — CAC &amp; LTV Analysis
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Nadia</strong> (24) runs an online les privat service from Jakarta — connecting
            students (SD through SMA) with freelance tutors for one-on-one sessions over Zoom.
            She founded the platform 14 months ago after graduating from university, starting with
            6 tutors she knew personally. Today she has 22 tutors and a student base that has grown
            to around 60 active students per month.
          </p>
          <p>
            Nadia charges students <strong>IDR 300,000 per month</strong> for two sessions per week.
            She pays tutors IDR 160,000 per session, and sessions run twice weekly per student —
            so her cost per student per month is IDR 320,000... which immediately raises a problem:
            she is paying tutors IDR 320,000 per student month while charging students IDR 300,000.
            She discovered this gap only when her friend <strong>Hendra</strong> (a digital marketer)
            asked her to walk through the unit economics.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nadia had been reinvesting all revenue into Instagram and TikTok ads to grow the student
              base — spending IDR 1.2 million per month on ads. The platform was growing (from 40 to
              60 students over 6 months), so it felt like the ads were working. Then Hendra asked:
              <em>"How long does each student stay?"</em> Nadia pulled her records. The median student
              stayed 2.3 months. Most dropped out after the second month — usually because the student's
              exam season ended or parents felt the child had caught up enough. The students who stayed
              longest (6+ months) had come almost exclusively from parent referrals and word of mouth,
              not ads.
              <br /><br />
              Hendra's follow-up question: <em>"So you're spending IDR 1.2M per month to acquire
              students who stay 2.3 months on average — and you have a negative unit margin per student
              month. That math doesn't work."</em>
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Nadia (founder):</strong> Energetic, good with students and tutors, genuinely
              passionate about education access. Not naturally analytical. She tracked total revenue
              and total cost but never broke it down per student or per acquisition channel. She had
              been reassured by the fact that the student count was growing — not realising the growth
              was expensive and short-lived.
            </li>
            <li>
              <strong>Hendra (friend, digital marketer):</strong> Runs paid social campaigns for
              e-commerce brands. He introduced Nadia to CAC and LTV — concepts he uses daily in his
              work. He is not trying to shut down the business; he is trying to redirect the spending
              toward what is actually working.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: Three Compounding Issues</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Problem 1 — Negative Unit Margin: Each Student Month Loses Money</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nadia charges IDR 300,000/student/month. She pays tutors IDR 160,000 per session × 8
              sessions per month (2/week × 4 weeks) = IDR 1,280,000 per student per month in tutor
              costs. Wait — that means Nadia is losing IDR 980,000 per student per month?
              <br /><br />
              Not quite. Nadia mis-specified "two sessions per week." Her actual model is two 45-minute
              sessions per week — but the IDR 160,000 tutor rate is per hour. Two × 45-minute sessions
              = 1.5 hours × IDR 160,000 = IDR 240,000 per week. Per month: IDR 240,000 × 4 = IDR 960,000
              in tutor cost vs. IDR 300,000 revenue. Still deeply negative.
              <br /><br />
              On closer inspection: the IDR 160,000 rate is per session (not per hour), and each session
              is 60 minutes. So: 2 sessions/week × IDR 160,000 × 4 weeks = IDR 1,280,000/month in tutor
              cost. The pricing model was fundamentally broken from the start.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 2 — High CAC from Paid Ads Compounds the Negative Unit Margin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nadia spends IDR 1.2 million per month on ads and acquires 8 new students per month.
              CAC from ads = IDR 150,000 per student. With a 2.3-month median retention, the lifetime
              revenue from an ad-acquired student is IDR 690,000. The lifetime cost (tutor + CAC) is
              IDR 2,944,000 per student. The business loses IDR 2,254,000 per ad-acquired student over
              their lifetime. Scaling this channel makes the losses bigger, not smaller.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 3 — The Best Students Come from the Cheapest Channel (Which Is Ignored)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Students acquired through referrals stay an average of 6.8 months — nearly 3x longer
              than ad-acquired students. Their CAC is approximately zero (a thank-you gift to the
              referring parent: IDR 50,000 voucher). With 6.8 months × IDR 300,000 = IDR 2,040,000
              in lifetime revenue, referral students are the best customers Nadia has. Yet she spends
              IDR 1.2 million per month on the channel that produces the worst customers, and nothing
              on the channel that produces the best ones.
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
              What is the true profit per student over their lifetime — by acquisition channel —
              and what pricing and channel changes are needed to make the unit economics positive?
            </p>
          </div>
          <ol>
            <li>
              <strong>What is the actual CAC and LTV by channel</strong> (Instagram/TikTok ads vs.
              referrals vs. organic search)?
            </li>
            <li>
              <strong>What is the unit margin per student month</strong> — and what pricing adjustment
              makes it positive?
            </li>
            <li>
              <strong>What is the LTV:CAC ratio by channel</strong> — and which channels should Nadia
              scale vs. stop?
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Primary: CAC &amp; LTV Analysis</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              <strong>CAC (Customer Acquisition Cost)</strong> = Total spend on acquiring customers ÷
              Number of customers acquired in the same period.
              <br /><br />
              <strong>LTV (Lifetime Value)</strong> = Average revenue per customer per period ×
              Average number of periods the customer stays.
              <br /><br />
              <strong>LTV:CAC Ratio</strong> = LTV ÷ CAC. A ratio below 1 means you spend more
              acquiring a customer than they will ever pay you — each customer destroys value.
              A ratio of 3:1 is a commonly cited minimum for a sustainable business. Above 5:1
              is healthy. Below 1:1 is a business that grows itself toward bankruptcy.
            </p>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              <strong>Why this fits:</strong> Nadia's business has multiple acquisition channels
              with dramatically different economics. CAC/LTV by channel reveals which channels
              are worth scaling and which are destroying value.
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
                <td>Used as the foundation</td>
                <td>Unit margin per student month must be positive before LTV calculations
                mean anything. Fixing pricing is the prerequisite.</td>
              </tr>
              <tr>
                <td><strong>Churn Rate Analysis</strong></td>
                <td>Used as input to LTV</td>
                <td>LTV depends on retention. Churn rate (% of students who leave each month)
                is the key driver of LTV. Hendra used churn rate to derive average retention
                months for each channel.</td>
              </tr>
              <tr>
                <td><strong>ROI per Marketing Channel</strong></td>
                <td>Output of the analysis</td>
                <td>LTV − CAC gives the lifetime ROI per customer per channel. This is the
                ultimate metric for deciding where to put the marketing budget.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p><strong>Student Acquisition and Retention by Channel (Last 6 Months):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Channel</th>
                <th>New Students (6 mo)</th>
                <th>Avg Monthly Spend (IDR)</th>
                <th>CAC (IDR)</th>
                <th>Avg Retention (months)</th>
                <th>Churn Rate/Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Instagram / TikTok Ads</strong></td>
                <td>48 students</td>
                <td>1,200,000</td>
                <td>150,000</td>
                <td>2.3 months</td>
                <td>~43%</td>
              </tr>
              <tr>
                <td><strong>Referral (parent refers parent)</strong></td>
                <td>18 students</td>
                <td>150,000 (vouchers)</td>
                <td>50,000</td>
                <td>6.8 months</td>
                <td>~15%</td>
              </tr>
              <tr>
                <td><strong>Organic (WhatsApp groups, no spend)</strong></td>
                <td>9 students</td>
                <td>0</td>
                <td>0</td>
                <td>4.1 months</td>
                <td>~24%</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td>75 students</td>
                <td>~1,350,000</td>
                <td>~108,000 blended</td>
                <td>~3.2 months avg</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Current Unit Economics per Student Month:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Per Student / Month (IDR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revenue from student</td>
                <td>300,000</td>
                <td>Fixed monthly fee</td>
              </tr>
              <tr>
                <td>Tutor cost (2 sessions/week × IDR 160K × 4 weeks)</td>
                <td>(1,280,000)</td>
                <td>Variable — directly tied to each student</td>
              </tr>
              <tr>
                <td>Platform costs (Zoom, scheduling app) — allocated per student</td>
                <td>(15,000)</td>
                <td>IDR 900K/month ÷ 60 students</td>
              </tr>
              <tr>
                <td><strong>Unit Margin per Student Month</strong></td>
                <td><strong>(995,000)</strong></td>
                <td style={{ color: 'var(--red, #C4472A)' }}>Deeply negative</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '6px' }}>
            Wait — if every student is losing IDR 995,000/month, how does the business have any revenue at all?
            Answer: Nadia is subsidising the business from personal savings and tutor payments are sometimes
            delayed. The business is not sustainable. The pricing model is broken at the foundational level.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <ol>
            <li>
              <strong>Step 1 — Fix the Unit Margin First</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                LTV calculations are meaningless if the unit margin is negative. A customer who stays
                forever still destroys value if each month they stay costs more than it earns. Calculate
                the minimum price needed to produce a positive unit margin, then model CAC/LTV on the
                corrected pricing.
              </p>
            </li>
            <li>
              <strong>Step 2 — Calculate CAC and LTV by Channel</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                For each acquisition channel: CAC = total channel spend ÷ students acquired. LTV =
                corrected monthly margin × average retention months. LTV:CAC ratio = LTV ÷ CAC.
              </p>
            </li>
            <li>
              <strong>Step 3 — Compare LTV:CAC Across Channels</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Which channels produce customers with LTV:CAC ≥ 3:1? Those are worth investing in.
                Which channels produce customers with LTV:CAC &lt; 1:1? Those should be stopped.
                The marketing budget should be reallocated accordingly.
              </p>
            </li>
            <li>
              <strong>Step 4 — Model the Impact of Repricing + Channel Shift</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                If Nadia raises prices to a level that produces a positive unit margin AND shifts
                spending to referral channels: what does monthly profit look like at 60 students?
                At 80 students? Does the business become viable?
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Required Pricing for Positive Unit Margin</strong></p>
          <div className="calculation">
{`Current tutor cost per student per month:
  2 sessions/week × 4 weeks × IDR 160,000/session = IDR 1,280,000

Platform cost per student: IDR 15,000
Nadia's overhead (admin, her own time, marketing not yet allocated): IDR 500,000/month
Overhead per student (60 students): IDR 8,333

Direct cost per student per month: IDR 1,280,000 + IDR 15,000 + IDR 8,333 = IDR 1,303,333

For a 20% gross margin above direct costs:
  Required price = IDR 1,303,333 ÷ (1 − 0.20) = IDR 1,629,167 → round to IDR 1,650,000/month

For a 15% gross margin (more competitive pricing):
  Required price = IDR 1,303,333 ÷ 0.85 = IDR 1,533,333 → round to IDR 1,550,000/month

Current price: IDR 300,000/month. Required minimum (just break even): IDR 1,303,333.
The current price is 77% below cost. This is not a small pricing error — it is a
fundamentally broken pricing model.

Correction approach: Two options:
Option A — Raise price to IDR 1,500,000/month (market-rate for quality online tutoring)
  Unit margin: IDR 1,500,000 − IDR 1,303,333 = IDR 196,667/month (13% margin)
  This is thin but positive. Achievable at premium positioning.

Option B — Reduce session frequency to 4 sessions/month (once/week) at IDR 600,000
  Tutor cost: 1 session/week × 4 weeks × IDR 160,000 = IDR 640,000
  Unit margin: IDR 600,000 − IDR 640,000 − IDR 23,333 = −IDR 63,333 (still negative)
  Need to price at IDR 800,000/month for once-weekly at positive margin.

Recommended: Move to premium twice-weekly package at IDR 1,500,000/month.
Use all calculations below based on IDR 1,500,000/month pricing.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — CAC and LTV by Channel (Corrected Pricing)</strong></p>
          <div className="calculation">
{`Unit margin per student month at IDR 1,500,000 price:
  Revenue:          IDR 1,500,000
  Tutor cost:       IDR 1,280,000
  Platform cost:    IDR 15,000
  Overhead alloc:   IDR 8,333
  ─────────────────────────────
  Unit margin:      IDR 196,667 / month

CAC and LTV by channel:

Channel          CAC (IDR)   Avg Retention   LTV (IDR)           LTV:CAC
                              (months)    (196,667 × months)
────────────────────────────────────────────────────────────────────────────
Instagram/TikTok  150,000      2.3 months    452,333              3.0x
Referral           50,000      6.8 months  1,337,333             26.7x
Organic                 0      4.1 months    806,333              ∞

  ⟹ Even at corrected pricing:
     - Ads channel: LTV:CAC = 3.0x — technically viable (3x is the standard minimum)
       but barely. Any increase in ad costs or decrease in retention would break it.
     - Referral channel: LTV:CAC = 26.7x — exceptional.
       Each IDR 50,000 voucher returns IDR 1.34M in lifetime value.
     - Organic: infinite LTV:CAC — zero cost acquisition.

  The ad channel is not bad at corrected pricing. It just cannot be the primary channel
  because its economics are 9x worse than referral. The IDR 1.2M ad budget generates
  8 students/month at LTV:CAC 3.0x. The same IDR 1.2M in referral incentives
  (IDR 50K per referral × 24 vouchers) would generate ~24 referrals — students who
  stay 3x longer and return 9x more value per IDR spent.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Monthly Profit Under Old vs. New Model</strong></p>
          <div className="calculation">
{`OLD MODEL (IDR 300K price, ads-primary, 60 students):
  Revenue:   60 × IDR 300,000    =  IDR 18,000,000
  Tutor:     60 × IDR 1,280,000  = (IDR 76,800,000)
  Platform:  60 × IDR 15,000     =   (IDR 900,000)
  Ad spend:                       =  (IDR 1,200,000)
  Overhead:                       =    (IDR 500,000)
  ─────────────────────────────────────────────────
  Monthly Loss:                     (IDR 61,400,000)
  ⟹ This business loses IDR 61M/month. It is not viable at any scale.
     Nadia was surviving on personal capital and delayed tutor payments.

NEW MODEL (IDR 1,500,000 price, referral-primary, 60 students):
  Revenue:   60 × IDR 1,500,000  =  IDR 90,000,000
  Tutor:     60 × IDR 1,280,000  = (IDR 76,800,000)
  Platform:  60 × IDR 15,000     =   (IDR 900,000)
  Referral vouchers (24/mo):      =  (IDR 1,200,000) same budget as ads
  Overhead:                       =    (IDR 500,000)
  ─────────────────────────────────────────────────
  Monthly Profit:                    IDR 10,600,000
  Net margin: 11.8%

  ⟹ Same student count, same marketing budget: from −IDR 61M to +IDR 10.6M.
     The entire difference is pricing and channel mix.

Transition risk: Will 60 students pay IDR 1,500,000 instead of IDR 300,000?
  Likely not all of them. But current students paying IDR 300K are subsidised —
  they are not real customers; they are proof of concept at unsustainable prices.
  At IDR 1,500K, Nadia needs only 7 students to cover her overhead (break-even).
  Even 20 students at IDR 1,500K generates more profit than 60 at IDR 300K.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Break-Even at New Pricing</strong></p>
          <div className="calculation">
{`Fixed costs (overhead + platform base): IDR 500,000 + IDR 900,000 = IDR 1,400,000/month
Unit contribution margin: IDR 196,667/student/month
Break-even students = IDR 1,400,000 ÷ IDR 196,667 = 7.1 students ≈ 8 students

At 60 students:
  Monthly profit = (60 × IDR 196,667) − IDR 1,400,000 = IDR 11,800,020 − IDR 1,400,000
                 = IDR 10,400,020 ≈ IDR 10.4M
  Margin: IDR 10.4M ÷ IDR 90M revenue = 11.6%

At 30 students (transition period — some drop off after price increase):
  Monthly profit = (30 × IDR 196,667) − IDR 1,400,000 = IDR 5,900,010 − IDR 1,400,000
                 = IDR 4,500,010 ≈ IDR 4.5M
  Still highly profitable. Even 30 students at IDR 1,500K is better than 60 at IDR 300K.

Key insight: Nadia feared that raising prices would kill the business.
The math shows that losing 50% of students after repricing still produces a
profitable business — because the unit economics are now correct.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — The Business Was Losing IDR 61 Million per Month</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is the number that shocked Nadia. She knew the business was "not making much" but
              she had never calculated the full picture. The IDR 300,000 monthly fee is so far below
              the IDR 1.28 million tutor cost that the business was structurally unsustainable from
              Day 1. No amount of growth, efficiency, or marketing optimization could fix a model
              where revenue is 23% of direct cost.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — Referral Students Are Worth 26.7x More Per IDR Spent Than Ad Students</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At corrected pricing, a referred student has an LTV:CAC ratio of 26.7x — extraordinary.
              They stay 3x longer, cost almost nothing to acquire, and are more engaged (referred by
              someone who trusted the product). The single most valuable marketing action Nadia can take
              is to formalise and scale the referral program. At IDR 50,000 per referral, doubling the
              referral program budget from IDR 150,000 to IDR 600,000 per month could generate 12
              high-LTV students per month — better than 8 low-LTV students from IDR 1,200,000 in ads.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Growing the Student Base at IDR 300K Made the Business Worse, Not Better</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nadia's instinct was to grow first and fix the economics later. With a negative unit
              margin, every new student added to the losses. This is the classic "we'll make it up in
              volume" mistake — it only works if unit margin is positive. With a negative unit margin,
              growth is a liability. Nadia needed to fix pricing before, not after, scaling.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — LTV:CAC Is More Useful Than CAC Alone</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Looking at CAC alone, the ad channel (IDR 150K) looks more expensive than referral
              (IDR 50K) — a 3x difference. But LTV:CAC tells a bigger story: ad students generate
              LTV:CAC of 3x; referral students generate 26.7x. The referral channel is not 3x better
              — it is 9x better per IDR invested. This is why LTV must always be analysed alongside
              CAC. Low CAC with low retention is worse than moderate CAC with high retention.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — Immediately (Existential Fix)</h3>
          <div className="highlight-box">
            <strong>1A. Reprice to IDR 1,500,000/Month — Announce With a 60-Day Notice</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Inform all current students that starting in 60 days, the monthly
              fee will be IDR 1,500,000 (5x the current price). Frame it honestly: "We've been operating
              at a subsidised rate to build our community. To ensure our tutors are compensated fairly
              and to maintain quality, we are aligning with market rates."
              <br /><strong>Why:</strong> The current price is not a pricing strategy — it is an error.
              Every month at IDR 300K is a month the business loses money. There is no path to survival
              without repricing.
              <br /><strong>Expected outcome:</strong> Most current students will not re-enrol at 5x the
              price. That is acceptable. The business needs quality students who stay long-term, not
              volume at any price. Even 15 students at IDR 1,500K generates IDR 1.5M+ in monthly profit.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — Next 30 Days</h3>
          <div className="highlight-box">
            <strong>2A. Replace Ad Spend With a Structured Referral Program</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Reallocate IDR 1,200,000/month ad budget to a referral program:
              IDR 100,000 voucher to the referring parent + IDR 50,000 discount for the new student
              (first month). Send a personal WhatsApp message to every parent of current and past
              students explaining the referral offer.
              <br /><strong>Why:</strong> Referral LTV:CAC = 26.7x vs. ads LTV:CAC = 3.0x. The
              referral channel produces better students at 9x the return per IDR spent. The budget
              should follow the returns.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — Next Quarter</h3>
          <div className="highlight-box">
            <strong>3A. Track Retention Rate by Channel and Tutor Monthly</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Build a simple spreadsheet tracking: student start date, channel,
              assigned tutor, and monthly status (active/cancelled). Calculate monthly churn rate by
              channel and by tutor. This data is the foundation for all future CAC/LTV decisions.
              <br /><strong>Why:</strong> If a particular tutor has 3x lower churn rate than average,
              that tutor is creating disproportionate LTV. Nadia should understand why and replicate it.
              If the referral channel's retention rate changes, LTV changes — and so does the optimal
              referral program budget.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What Nadia Will Resist: Raising Prices 5x</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is the hardest recommendation in any of these cases. A 5x price increase is not
              a nudge — it is a complete repositioning of the business. Nadia will fear losing
              all her students, being seen as greedy, and failing the families who trusted her
              at the affordable price. Hendra's framing for her: <em>"You cannot serve students
              well if the business does not exist. A business that loses IDR 61M/month will close.
              When it closes, all 60 students lose their tutor — not just the ones who can't afford
              the new price. Repricing saves the business. Staying at IDR 300K closes it."</em>
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Will Actually Determine Success</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The transition period (the 60 days before new pricing takes effect) is when Nadia
              should aggressively activate her referral program and personal network to find the
              10–20 students who will stay at IDR 1,500K. These are parents who: (a) have seen
              genuine improvement in their child's grades, (b) value the one-on-one format, and
              (c) have the budget. Nadia's job in the next 60 days is to identify these families
              and convert them before the price increase takes effect.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics</strong>
            <table className="data-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Target (Month 3)</th>
                  <th>Warning Sign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly profit (IDR)</td>
                  <td>−61,400,000</td>
                  <td>≥ +4,000,000</td>
                  <td>Still negative at Month 2</td>
                </tr>
                <tr>
                  <td>Active students at new price</td>
                  <td>0</td>
                  <td>≥ 15</td>
                  <td>Below 8 (break-even is 8)</td>
                </tr>
                <tr>
                  <td>Referral students as % of new</td>
                  <td>24%</td>
                  <td>≥ 50%</td>
                  <td>Below 30% — referral program not working</td>
                </tr>
                <tr>
                  <td>Average student retention (months)</td>
                  <td>2.3 (ads), 6.8 (referral)</td>
                  <td>≥ 4.5 blended</td>
                  <td>Below 3 months at Month 3</td>
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
            <strong>Fix the Unit Economics Before Worrying About Customer Acquisition</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              CAC and LTV are only meaningful if the unit margin is positive. If every customer
              costs more to serve than they pay, no acquisition strategy will save the business —
              growth only accelerates the losses. The sequence is: (1) ensure positive unit margin,
              (2) then optimise acquisition cost, (3) then scale. Skipping step 1 and going straight
              to step 3 is one of the most common reasons startups and small digital businesses fail.
            </p>
          </div>
          <div className="highlight-box">
            <strong>LTV:CAC Is the Most Important Ratio for Any Customer-Acquisition Business</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If you spend money to acquire customers (ads, sales commissions, referral bonuses),
              the LTV:CAC ratio tells you whether each acquisition channel is worth running. Industry
              benchmarks vary by sector, but a common rule of thumb: below 1:1 means each customer
              destroys value; 1–3:1 means barely sustainable; 3:1 is minimum viable; 5:1+ is healthy;
              10:1+ indicates you should invest more in that channel immediately. Nadia's referral
              channel at 26.7:1 was screaming for more investment. Her ads channel at 3.0:1 was
              marginal. The budget allocation was exactly backwards.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Retention Is the Multiplier on Everything</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The difference between Nadia's ad students (2.3 months) and referral students (6.8 months)
              is a 3x retention multiplier — which means referral LTV is 3x ad LTV before even
              accounting for the lower CAC. In a subscription or recurring-revenue business, retention
              rate is the most important lever in the model. A 10% improvement in retention rate
              often increases LTV by 20–30% and net profit by even more — because fixed costs are
              unchanged while revenue per customer increases. Always measure and actively manage churn.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Referral Programs Are Underused by Small Businesses</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every satisfied customer in a service business is a potential low-cost acquisition
              channel. For Nadia, a satisfied parent who refers another parent is worth IDR 1.34M
              in LTV at IDR 50K cost — a 26.7x return. Yet many small service businesses never
              formalise a referral program because it feels awkward to ask happy customers to
              recommend them. It should not. A referral is not a favour — it is a mutually
              beneficial exchange: the referring parent gets a voucher, the new parent gets a
              trusted recommendation, and Nadia gets a high-LTV customer. Ask for referrals
              systematically, not occasionally.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case06
