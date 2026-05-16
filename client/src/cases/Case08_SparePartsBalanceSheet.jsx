const Case08 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 08</span>
        <h1>I've Been Profitable for 8 Years. Why Won't the Bank Lend Me Money?</h1>
        <div className="case-meta">
          Industry: Retail / Auto Parts &bull; Level: Beginner / Small Business — Balance Sheet & Net Worth
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Pak Hendra</strong> (45) has run <strong>Hendra Motor Parts</strong> — a spare parts
            shop for motorcycles and small vehicles — out of a ruko in Semarang for eight years. He
            stocks everything: filters, chains, brake pads, belts, lights, and specialty parts for older
            Honda and Yamaha models that dealerships no longer carry. His reputation for hard-to-find
            parts has built him a loyal customer base of independent mechanics across the city.
          </p>
          <p>
            The business has always been profitable. Monthly revenue runs around <strong>IDR 80 million</strong>,
            and after supplier costs and operating expenses, Hendra keeps roughly
            <strong> IDR 9–10 million per month</strong> — a 12% net margin. He has never missed a
            payment to a supplier. He has never bounced a payment to his landlord. He considers himself,
            by any reasonable measure, a successful small business owner.
          </p>
          <p>
            Six weeks ago, Hendra decided to expand. He found a second ruko three streets away — a better
            location with higher foot traffic — and wanted to open a second outlet. He estimated he needed
            <strong>IDR 150 million</strong> for inventory, fit-out, and two months of operating buffer.
            He applied for a KUR (Kredit Usaha Rakyat) business loan from his local BRI branch.
          </p>
          <p>
            The application was rejected. The reason given: debt-to-equity ratio too high. Hendra did not
            know what a debt-to-equity ratio was. He did not even know he had one.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Analysis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Pak Ridwan</strong>, the loan officer at BRI who handled Hendra's application, took
              an unusual step: rather than simply handing back the rejection letter, he spent 45 minutes
              with Hendra going through the balance sheet that the bank had reconstructed from his business
              records and tax filings. "I want you to understand why," Ridwan told him, "because if you
              clean this up, you can apply again."
              <br /><br />
              What Hendra saw on that balance sheet — what he owned, what he owed, and what was actually
              left — did not match the picture in his head at all. The business was profitable. His net
              worth was not what he expected.
            </p>
          </div>
          <p><strong>Stakeholder Map:</strong></p>
          <ul>
            <li>
              <strong>Pak Hendra (owner):</strong> Eight years of running a successful shop have given him
              genuine confidence — and a genuine blind spot. He tracks cash in and cash out, loosely. He
              knows he is profitable because the business pays all its bills and still puts money in his
              pocket. He has never thought about what the business is <em>worth</em> as a balance of assets
              and debts. The loan rejection has shaken him more than he wants to admit.
            </li>
            <li>
              <strong>Pak Ridwan (BRI loan officer):</strong> Pragmatic and not unkind. He has seen
              dozens of small business owners apply for loans without understanding their own financial
              position. He is not the enemy — he is the first person who has ever shown Hendra what his
              business actually looks like on paper.
            </li>
            <li>
              <strong>Ibu Tini (Hendra's wife and informal bookkeeper):</strong> Manages the daily cash
              book — records what comes in, what goes out, and what is owed to suppliers. She is the
              source of most of the data. She has a clearer picture of the business than Hendra does,
              but she has never been asked to organise it into a formal balance sheet.
            </li>
          </ul>
          <p>
            This is not a turnaround story — the business is healthy. It is a visibility story: a
            profitable business whose owner has never looked at the full picture of what he owns, what
            he owes, and what he is genuinely worth.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Number, Three Causes</h2>
        <div className="content">
          <p>
            Hendra's debt-to-equity ratio — the ratio the bank calculated and rejected — was
            <strong> 2.84x</strong>. BRI's maximum for a KUR loan at this size is 2.0x. But that ratio
            is a symptom, not the root cause. When Ridwan and Hendra pulled apart the balance sheet,
            three structurally different problems emerged — each one a decision Hendra had made over
            eight years without realising its consequence on his financial position.
          </p>
          <div className="highlight-box">
            <strong>Driver 1 — IDR 40 Million in Dead Inventory Inflating His Asset Value (≈45% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Hendra's inventory is valued on his balance sheet at <strong>IDR 92 million</strong> —
              the price he paid for the parts sitting on his shelves. But Ridwan asks a simple question:
              "If you had to sell all of this today, what would you actually get?" The honest answer is
              different. About IDR 52 million is fast-moving stock — common filters, chains, and brake
              pads that sell within 30–60 days. The remaining IDR 40 million is what Hendra privately
              calls his "legacy shelf": parts for models that are increasingly rare, ordered in optimistic
              quantities years ago, that now move fewer than 2 units per year. A bank assessing his
              collateral values this dead stock at a steep discount — sometimes zero. His real liquid
              asset base is IDR 40 million smaller than the number on paper.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 2 — IDR 60 Million in Family Loans Not Counted as Debt (≈40% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When Hendra started the business eight years ago, he borrowed IDR 30 million from his
              father and IDR 15 million from his older brother to stock the initial inventory. Over the
              years, he borrowed another IDR 15 million from his brother-in-law during a cash tight spot.
              Total: <strong>IDR 60 million in informal family loans</strong>. None of these have formal
              loan agreements. He repays them informally when he can — sometimes IDR 500,000 here,
              IDR 1 million there. In his mind, these are not really "debt" because the family has never
              pressured him. In a banker's mind — and on any accurate balance sheet — they are liabilities
              as real as a bank loan. When Ridwan added them to the balance sheet, Hendra's total
              liabilities jumped by 70%.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 3 — Eight Years of Profit Withdrawn, Not Reinvested (≈15% of the problem)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Over eight years, Hendra has earned roughly <strong>IDR 921 million in cumulative net
              profit</strong> (IDR 9.6M/month × 96 months). Where did it go? IDR 576 million went to
              personal drawings — his family's living expenses, school fees, a family car, a small house
              renovation. IDR 144 million went to principal repayments on various loans. IDR 201 million
              was reinvested into the business as inventory and fixtures. The result: his owner's equity
              — what the business has built up and retained — is only <strong>IDR 51 million</strong>.
              Eight profitable years. IDR 51 million of retained value in the business. The gap is not
              wrong or dishonest — Hendra needed that money to live — but it means the business has
              a thin equity cushion despite a long profitable history.
            </p>
          </div>
          <p>
            <strong>The compounding effect:</strong> Each of these three factors independently would have
            reduced Hendra's equity or inflated his debt. Together, they produce a debt-to-equity ratio
            that prevents him from accessing the financing he needs to grow — even though his monthly
            cash flow is strong and his business is genuinely profitable.
          </p>
          <p>
            <strong>An important insight that surprises most beginners:</strong> You can be profitable
            every month for eight years and still have a weak balance sheet. Profit is a flow — what
            you earned this period. The balance sheet is a stock — what has accumulated over time.
            If you spend every month's profit and carry informal debt you don't count, your equity
            stays thin regardless of how good your P&L looks.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star Question</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              What does Hendra's business actually look like on a balance sheet — and what specific
              changes would bring his debt-to-equity ratio below 2.0x so he can qualify for the
              IDR 150 million loan he needs?
            </p>
          </div>
          <p><strong>Three questions Hendra and Ridwan need answered:</strong></p>
          <ol>
            <li>
              <strong>What is the accurate balance sheet</strong> — assets at realistic value, all
              liabilities including informal family loans — and what does his actual owner's equity
              come out to?
            </li>
            <li>
              <strong>What is driving the high debt-to-equity ratio</strong> — is it too much debt,
              too little equity, or an asset quality problem — and which lever is fastest to move?
            </li>
            <li>
              <strong>What would a clean, bankable balance sheet look like</strong> — and what is
              the realistic path to get there within 6–12 months?
            </li>
          </ol>
          <p>
            <strong>What success looks like:</strong> Hendra walks away with (1) a clear balance sheet
            he can read and maintain himself, (2) an understanding of which three changes would most
            improve his financial position, and (3) a realistic timeline for reapplying. He should also
            understand what a balance sheet <em>is</em> — so this analysis does not have to be done
            by a stranger next time.
          </p>
          <p>
            <strong>Analytical approach:</strong> Build the balance sheet from available records.
            Stress-test asset values (especially inventory). Quantify the impact of each change scenario
            on the debt-to-equity ratio. No complex modelling — this is accounting arithmetic, not
            financial forecasting.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            Most small businesses that run into loan rejection problems reach for the P&L first —
            they want to show revenue and profit to prove the business is healthy. But a loan officer
            is not primarily evaluating profitability. They are evaluating <em>solvency</em>: if
            things go wrong, does this business have enough assets to cover its obligations? That
            question is answered by the balance sheet, not the income statement.
          </p>
          <div className="highlight-box">
            <strong>Primary: Balance Sheet Construction &amp; Ratio Analysis</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Build Assets − Liabilities = Owner's Equity from scratch. Then calculate key ratios
              (debt-to-equity, current ratio) that lenders use to assess creditworthiness. Identify
              which line items are inaccurate or missing, correct them, and model the impact of changes.
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
                <td><strong>Balance Sheet Analysis ✓ Selected</strong></td>
                <td>What the business owns, owes, and is worth at a point in time</td>
                <td>—</td>
              </tr>
              <tr>
                <td>P&L / Income Statement</td>
                <td>How much profit was earned this period</td>
                <td>Does not show accumulated debt or asset quality — the loan officer's concern</td>
              </tr>
              <tr>
                <td>Cash Flow Statement</td>
                <td>Where cash came from and went during the period</td>
                <td>Useful as context but does not address the solvency/equity question</td>
              </tr>
              <tr>
                <td>Break-Even Analysis</td>
                <td>Minimum revenue to cover costs</td>
                <td>Hendra's profitability is not in question — his financial position is</td>
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
            Ibu Tini's cash book and Hendra's supplier invoices provided the raw data. Ridwan's team
            organised it into the balance sheet format. Two adjustments were made from Hendra's original
            mental picture: (1) inventory was split into fast-moving and slow-moving, with slow-moving
            marked at 30% of cost value (conservative liquidation estimate), and (2) the family loans
            were added as formal liabilities for the first time.
          </p>
          <p><strong>Hendra's Balance Sheet — Before Adjustments (Hendra's Version):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Hendra's Belief (IDR)</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cash &amp; bank</td>
                <td>12,000,000</td>
                <td>Accurate</td>
              </tr>
              <tr>
                <td>Receivables (kredit pelanggan)</td>
                <td>18,000,000</td>
                <td>Accurate, mostly collectible</td>
              </tr>
              <tr>
                <td>Inventory</td>
                <td>92,000,000</td>
                <td>Valued at purchase price — not adjusted for dead stock</td>
              </tr>
              <tr>
                <td>Equipment &amp; tools (net)</td>
                <td>38,000,000</td>
                <td>Accurate (after depreciation)</td>
              </tr>
              <tr>
                <td>Delivery motorcycle (net)</td>
                <td>16,000,000</td>
                <td>Accurate</td>
              </tr>
              <tr>
                <td>Shop deposit (uang jaminan)</td>
                <td>20,000,000</td>
                <td>Accurate</td>
              </tr>
              <tr>
                <td><strong>Total Assets</strong></td>
                <td><strong>196,000,000</strong></td>
                <td></td>
              </tr>
              <tr>
                <td>Supplier credit (30-day terms)</td>
                <td>45,000,000</td>
                <td>Accurate</td>
              </tr>
              <tr>
                <td>Family loans</td>
                <td>0</td>
                <td><strong>Missing — Hendra did not count these as debt</strong></td>
              </tr>
              <tr>
                <td>Equipment leasing (remaining)</td>
                <td>22,000,000</td>
                <td>Accurate</td>
              </tr>
              <tr>
                <td>Existing KUR micro</td>
                <td>18,000,000</td>
                <td>Accurate</td>
              </tr>
              <tr>
                <td><strong>Total Liabilities</strong></td>
                <td><strong>85,000,000</strong></td>
                <td>Understated by IDR 60M</td>
              </tr>
              <tr>
                <td><strong>Owner's Equity (A − L)</strong></td>
                <td><strong>111,000,000</strong></td>
                <td>Overstated — family loans not included</td>
              </tr>
              <tr>
                <td><strong>Debt-to-Equity Ratio</strong></td>
                <td><strong>0.77x</strong></td>
                <td>Hendra's belief — well within bank limits</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Hendra's Balance Sheet — After Adjustments (Ridwan's Version):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Adjusted Amount (IDR)</th>
                <th>Adjustment Made</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cash &amp; bank</td>
                <td>12,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td>Receivables</td>
                <td>18,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td>Fast-moving inventory</td>
                <td>52,000,000</td>
                <td>Separated from dead stock</td>
              </tr>
              <tr>
                <td>Slow/dead stock (at 30% value)</td>
                <td>12,000,000</td>
                <td>IDR 40M cost → IDR 12M realistic value (−IDR 28M)</td>
              </tr>
              <tr>
                <td>Equipment &amp; tools (net)</td>
                <td>38,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td>Delivery motorcycle (net)</td>
                <td>16,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td>Shop deposit</td>
                <td>20,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td><strong>Total Assets (Adjusted)</strong></td>
                <td><strong>168,000,000</strong></td>
                <td>−IDR 28M from inventory write-down</td>
              </tr>
              <tr>
                <td>Supplier credit</td>
                <td>45,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td><strong>Family loans (added)</strong></td>
                <td><strong>60,000,000</strong></td>
                <td>IDR 30M (father) + IDR 15M (brother) + IDR 15M (brother-in-law)</td>
              </tr>
              <tr>
                <td>Equipment leasing</td>
                <td>22,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td>Existing KUR micro</td>
                <td>18,000,000</td>
                <td>No change</td>
              </tr>
              <tr>
                <td><strong>Total Liabilities (Adjusted)</strong></td>
                <td><strong>145,000,000</strong></td>
                <td>+IDR 60M from family loans</td>
              </tr>
              <tr>
                <td><strong>Owner's Equity (Adjusted)</strong></td>
                <td><strong>23,000,000</strong></td>
                <td>IDR 168M − IDR 145M</td>
              </tr>
              <tr>
                <td><strong>Debt-to-Equity Ratio</strong></td>
                <td><strong>6.30x</strong></td>
                <td>Bank max: 2.0x — far above limit</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--ink-3)' }}>
            Hendra believed his D/E ratio was 0.77x — well within the bank's limits. The adjusted
            balance sheet shows 6.30x. The gap is almost entirely explained by the two adjustments:
            IDR 28M in inventory written down to realistic value, and IDR 60M in family loans recognised
            as formal liabilities.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Step 1 — Understand What a Balance Sheet Actually Is</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before touching any numbers, Ridwan explains the structure: a balance sheet is a
              snapshot of what the business owns (Assets), what it owes (Liabilities), and the
              difference (Owner's Equity — also called net worth). The fundamental equation is:
              <em> Assets = Liabilities + Owner's Equity</em>. It always balances. If it does not,
              something is missing. Hendra's version did not balance correctly because he had missing
              liabilities. The first job is to make it complete and accurate.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 2 — Audit Every Asset at Realistic Value</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Assets are listed at cost by default. But the bank — and any honest analyst — wants to
              know what they are worth <em>now</em>, especially if the business were to wind down or
              sell. For cash and receivables, cost equals current value. For inventory, cost is what
              you paid — but if parts have been sitting unsold for 3+ years, their realizable value
              may be a fraction of cost. Hendra must separate his inventory into fast-moving stock
              (full value) and slow/dead stock (discounted). This single adjustment reduced his asset
              base by IDR 28 million.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 3 — List Every Liability, Formal and Informal</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A liability is any obligation to pay someone — regardless of whether there is a formal
              agreement, an interest rate, or a payment schedule. Family loans are liabilities.
              Informal supplier credit is a liability. Money owed to employees is a liability.
              Hendra's IDR 60 million in family loans was real money borrowed from real people.
              That it was given without a contract does not make it less of a debt — it makes it
              a debt that could be called in at any time without notice, which is actually more
              risky than a formal bank loan with a fixed schedule.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 4 — Calculate Owner's Equity and the Key Ratios</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Owner's Equity = Total Assets − Total Liabilities. This is what the business is
              worth to its owner after all debts are paid. Two ratios matter for the loan assessment:
              <br /><br />
              <em>Debt-to-Equity Ratio = Total Liabilities ÷ Owner's Equity</em> — measures leverage.
              High D/E means the business is financed mostly by debt, not by the owner's own capital.
              Banks see high D/E as high risk.
              <br /><br />
              <em>Current Ratio = Current Assets ÷ Current Liabilities</em> — measures short-term
              solvency. Can the business pay its bills due in the next 12 months from assets it can
              liquidate in 12 months? A ratio below 1.0 means no.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Step 5 — Model the Path to a Bankable Position</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Once the accurate picture is clear, the analysis shifts to: what changes would bring
              the D/E ratio below 2.0x? There are three levers: (1) reduce liabilities (pay down
              debt), (2) increase assets without increasing debt (save, reinvest profits), or
              (3) formally convert family loans to equity (get family members to waive the debt or
              convert it to an ownership stake). Model each option with real IDR numbers and a
              realistic timeline.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations &amp; Financial Modeling</h2>
        <div className="content">
          <div className="calculation">
{`CALCULATION 1 — The Accurate Balance Sheet

ASSETS                                              IDR
  Current Assets:
    Cash & bank:                               12,000,000
    Accounts receivable (customer credit):     18,000,000
    Fast-moving inventory (≤60-day turnover):  52,000,000
    Slow/dead stock (at 30% liquidation value): 12,000,000
  ──────────────────────────────────────────────────────
  Total Current Assets:                        94,000,000

  Non-Current Assets:
    Equipment & tools (net of depreciation):   38,000,000
    Delivery motorcycle (net):                 16,000,000
    Shop rental deposit (uang jaminan):        20,000,000
  ──────────────────────────────────────────────────────
  Total Non-Current Assets:                    74,000,000
  ──────────────────────────────────────────────────────
  TOTAL ASSETS:                               168,000,000

LIABILITIES
  Current Liabilities (due within 12 months):
    Supplier credit (net-30 terms):            45,000,000
    Family loans (callable any time):          60,000,000
    Equipment leasing (current portion):        8,000,000
    Existing KUR micro (remaining balance):    18,000,000
  ──────────────────────────────────────────────────────
  Total Current Liabilities:                  131,000,000

  Non-Current Liabilities:
    Equipment leasing (long-term portion):     14,000,000
  ──────────────────────────────────────────────────────
  Total Non-Current Liabilities:              14,000,000
  ──────────────────────────────────────────────────────
  TOTAL LIABILITIES:                          145,000,000

OWNER'S EQUITY
  Total Assets − Total Liabilities:
  IDR 168,000,000 − IDR 145,000,000          = 23,000,000`}
          </div>

          <div className="calculation">
{`CALCULATION 2 — Key Financial Ratios

Debt-to-Equity Ratio:
  = Total Liabilities ÷ Owner's Equity
  = IDR 145,000,000 ÷ IDR 23,000,000
  = 6.30x              (bank maximum: 2.0x → REJECTED)

Current Ratio:
  = Current Assets ÷ Current Liabilities
  = IDR 94,000,000 ÷ IDR 131,000,000
  = 0.72x              (benchmark: ≥ 1.0 → BELOW THRESHOLD)

  ⟹ For every IDR 1 of current obligations, Hendra has IDR 0.72
     of current assets. This means if all current debts were called
     in today, he could not pay them from liquid assets alone.`}
          </div>

          <div className="calculation">
{`CALCULATION 3 — Three Paths to a Bankable D/E Ratio (Target: ≤ 2.0x)

For D/E ≤ 2.0x with current equity of IDR 23M:
  Maximum allowable liabilities = 2.0 × IDR 23M = IDR 46M
  Current liabilities:                          IDR 145M
  Required reduction in liabilities:            IDR  99M  ← enormous gap

PATH A — Pay down debt alone (no equity increase):
  Need to reduce liabilities by IDR 99M
  Monthly net profit retained (no drawings):    IDR 9,600,000
  Months required:                              IDR 99M ÷ IDR 9.6M = 10.3 months
  Realistic? Only if Hendra stops all personal drawings for 10+ months.

PATH B — Convert family loans to equity:
  Get family members to formally waive the IDR 60M loans
  (treat as capital contribution / gift, documented):
  New liabilities: IDR 145M − IDR 60M =         IDR  85,000,000
  New equity: IDR 23M + IDR 60M =               IDR  83,000,000
  New D/E: IDR 85M ÷ IDR 83M =                  1.02x  ← QUALIFIES ✓
  Months required: 0 (requires family agreement only)

PATH C — Liquidate dead stock + convert family loans (combined):
  Sell dead stock at 30% value (already in balance sheet):  +IDR 12M cash
  Use proceeds to repay family loans partially:             −IDR 12M liabilities
  Formally waive remaining IDR 48M family loans → equity:  +IDR 48M equity
  New liabilities: IDR 145M − IDR 60M =                    IDR  85,000,000
  New equity: IDR 23M + IDR 60M =                          IDR  83,000,000
  New D/E: 1.02x  ← QUALIFIES ✓ (same as Path B, but cleans balance sheet further)`}
          </div>

          <div className="calculation">
{`CALCULATION 4 — Where Did 8 Years of Profit Go?

Cumulative net profit (8 years × IDR 9.6M/month × 12 months):
  IDR 9,600,000 × 96 months                  = IDR 921,600,000

Allocated as:
  Personal drawings (family living expenses,
    school, car, house renovation):
    IDR 6,000,000/month × 96 months          = IDR (576,000,000)

  Loan repayments (principal only):
    IDR 1,500,000/month × 96 months          = IDR (144,000,000)

  Reinvested into business
    (inventory build-up, equipment, fixtures): = IDR (201,600,000)
  ──────────────────────────────────────────────────────
  Retained in business as equity:               IDR       0
    (all profit was consumed — equity grew only from
     retained assets, not from retained earnings)

Current Owner's Equity:                        IDR  23,000,000
  (assets minus all liabilities at today's values)

  ⟹ IDR 921M earned. IDR 23M retained in the business.
     The rest was consumed by living and growth.
     Neither is wrong — but it explains why a profitable
     business has a thin equity cushion.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — Profitability and Net Worth Are Not the Same Thing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Hendra's business has been profitable every month for eight years. His net worth —
              the value of the business after all debts — is IDR 23 million. These two facts are
              not contradictory. Profit is a monthly flow; equity is the cumulative stock that
              remains after drawings and debt repayment. You can be consistently profitable and
              have thin equity if you spend what you earn. A profitable business with no retained
              equity is fragile — it has no buffer.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — Informal Debt Is Still Debt</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The IDR 60 million in family loans was invisible in Hendra's mental model because it
              felt different from a bank loan — no contract, no interest rate, no fixed schedule.
              But it represents a real obligation to real people. On a balance sheet, the source
              of a liability does not change its nature. More concerning: informal loans can be
              called in without notice and without legal formality. In many ways, they are a
              riskier liability than a structured bank loan.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Dead Inventory Is a Hidden Asset Quality Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              IDR 40 million in slow-moving parts sits on Hendra's shelves, valued at cost.
              In reality, these parts will likely never sell at full price. They occupy capital
              (money tied up that could be redeployed), storage space (opportunity cost), and
              create a misleadingly large asset base on the balance sheet. Clearing dead stock
              at deep discount is not a loss — it is the recovery of capital that was already
              effectively lost when the purchasing decision was made.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — The Fastest Path to Qualification Is a Family Conversation</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Paying down IDR 99 million in debt from monthly profit alone would take Hendra
              over 10 months of zero personal drawings — not realistic. The mathematically clean
              solution is Path B: a formal agreement with his father, brother, and brother-in-law
              to convert the IDR 60M in family loans into equity (a gift or a capital contribution
              to the business). This single move drops the D/E ratio from 6.3x to 1.02x and
              qualifies Hendra for the loan immediately. The obstacle is not financial — it is
              a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Tier 1 — Do Immediately</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Have the family loan conversation.</strong> Sit down with the three family members
              who lent Hendra money and explain the situation clearly: converting the IDR 60M in loans
              to a formal equity contribution (with a simple written agreement and ideally notarised)
              would allow the business to access bank financing and grow — which ultimately protects the
              family's money better than an informal loan. This is a negotiation, not a request to forgive
              debt — the family's interest is preserved in the form of a business stake, not a cash claim.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 2 — Do This Month</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Liquidate dead stock aggressively.</strong> Identify the IDR 40M in slow-moving
              inventory. Price it at 30–40% of cost and offer it to other spare parts shops, mechanics,
              and scrap dealers. The goal is not to recover cost — the capital is already lost. The goal
              is to convert non-productive assets into cash that can be used to reduce supplier credit
              or create a retained cash buffer. Even recovering IDR 10–12M strengthens the balance sheet.
              <br /><br />
              <strong>Stop buying slow-moving specialty parts without confirmed orders.</strong> Implement
              a simple rule: parts for models with fewer than 5 units sold per year are only ordered
              against a customer deposit. No more speculative stock in low-turnover categories.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tier 3 — 6–12 Month Horizon</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Build a retained earnings policy.</strong> After reapplying for the KUR loan
              (assuming family conversion happens), commit to retaining 20% of monthly net profit
              in the business — roughly IDR 1.9M/month — rather than withdrawing everything.
              Over 12 months this adds IDR 22.8M to equity, making the balance sheet progressively
              stronger and reducing dependence on external financing for future growth.
              <br /><br />
              <strong>Maintain a balance sheet quarterly.</strong> Use Ibu Tini's cash book data to
              update a simple balance sheet every 3 months. A healthy business should know its net
              worth, not just its monthly profit.
            </p>
          </div>

          <p><strong>Impact Summary:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>D/E Impact</th>
                <th>Effort</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Convert family loans to equity (IDR 60M)</td>
                <td>6.30x → 1.02x ✓</td>
                <td>Family conversation + legal agreement</td>
                <td>2–4 weeks</td>
              </tr>
              <tr>
                <td>Liquidate dead stock (recover IDR 12M)</td>
                <td>Reduces liabilities if used to pay supplier credit</td>
                <td>Pricing effort + outreach to buyers</td>
                <td>1–2 months</td>
              </tr>
              <tr>
                <td>Stop buying slow-moving stock</td>
                <td>Prevents future dead stock accumulation</td>
                <td>Policy change only</td>
                <td>Immediate</td>
              </tr>
              <tr>
                <td>Retain 20% of profit monthly</td>
                <td>Grows equity IDR 22.8M/year</td>
                <td>Discipline / family budget adjustment</td>
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
          <div className="highlight-box">
            <strong>What Hendra Will Probably Do</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The family loan conversation is the key action and the key obstacle. Hendra feels
              genuine embarrassment — these are people who trusted him with money and he never
              formally tracked it. He will likely delay the conversation. He will probably try
              to tackle the problem by paying down the family loans from profit first, which
              means 10+ months of reduced personal drawings and a slower path to the loan.
              <br /><br />
              He will almost certainly implement the dead stock clearance — it feels actionable
              and does not require a difficult conversation. And he will stop ordering speculative
              slow-moving parts; that discipline costs nothing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Hendra Should Do</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Have the family conversation first. Present it not as an embarrassment but as a
              business decision that protects the family's money better. A formal equity stake —
              even a symbolic one — gives the family documented interest in a profitable,
              growing business. The IDR 150M loan would fund expansion that grows monthly
              profit from IDR 9.6M toward IDR 15–18M, which benefits everyone.
              <br /><br />
              The math is unambiguous: Path B (family conversion) is faster, cheaper, and
              more effective than any other route. The obstacle is pride and discomfort —
              real but not financial.
            </p>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>
            This is a pattern that repeats across many small business financing situations in
            Indonesia: the fastest path to capital is almost always a conversation that the owner
            is avoiding. Data can identify the path. It cannot walk the path for you.
          </p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The P&L Tells You About This Month. The Balance Sheet Tells You About Everything.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A profit and loss statement shows what happened during a period — revenue earned,
              costs incurred, profit generated. A balance sheet is different: it shows the accumulated
              state of the business at a single point in time. You need both. The P&L tells you
              whether the business is generating value. The balance sheet tells you whether that value
              is being retained, or whether it is leaking out through drawings and untracked obligations.
              A business owner who only reads their P&L is navigating with half a map.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Assets Must Be Valued at What They Are Worth Now, Not What You Paid</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Book value (purchase price minus depreciation) is a starting point, not the truth.
              Inventory that cannot sell is not worth what you paid for it. Receivables from
              customers who will not pay are not worth their face value. Any honest balance sheet
              requires asking: "If I had to turn each asset into cash today, what would I actually
              get?" This exercise usually produces a smaller number than the book value — and that
              smaller number is more useful for decision-making.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Informal Obligations Are Real Liabilities</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Anything you owe to anyone — family, suppliers, friends, employees for unpaid wages —
              belongs on the liabilities side of your balance sheet. The absence of a formal contract
              does not reduce the obligation. In some ways it increases the risk, because informal
              lenders can demand repayment at any time. When you build a balance sheet, list every
              obligation honestly. A balance sheet that omits inconvenient liabilities is not a
              balance sheet — it is optimistic fiction.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Owner's Equity Is the Score That Actually Matters Long-Term</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Monthly profit is a flow metric — it tells you how the game went this month. Owner's
              equity is the cumulative score — it tells you how the game has gone since day one.
              A business that generates IDR 10M in profit every month but whose owner draws out
              IDR 10M every month ends the year with the same equity it started with. Growth in
              owner's equity — keeping some of each month's profit inside the business — is what
              builds a financially strong company that can access loans, survive bad months, and
              eventually be sold for a meaningful price.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Case08
