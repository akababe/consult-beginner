const PreA5 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Foundation · Module A5</span>
        <h1>The Balance Sheet</h1>
        <div className="case-meta">
          Module A: The Language of Money &bull; What you own, what you owe, and what you are actually worth
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Concept Matters</h2>
        <div className="content">
          <p>
            <strong>Mbak Rani</strong> (29) runs a wedding decoration rental business in Solo.
            Over four years she has built an impressive collection: folding tables and chairs for
            200 guests, a full set of arch backdrops, fairy light curtains, artificial flower walls,
            a professional lighting rig, a speaker system, and a van to transport it all. She rents
            the full package to couples for IDR 3–5 million per event, does 6–8 weddings per month,
            and clears a solid profit after covering loan repayments and expenses.
          </p>
          <p>
            At a family gathering, her cousin Danu — a second-year accounting student — asks her
            how much her business is worth. Rani answers without hesitation: <em>"About IDR 98 million.
            That is what all my equipment and the van cost."</em> Danu pulls out his phone and types
            for a moment. Then he asks: <em>"How much do you still owe on the bank loan you used to
            buy that equipment?"</em> The answer is IDR 52 million. <em>"And the loan from your
            parents?"</em> IDR 15 million. <em>"And what you owe the flower supplier?"</em>
            IDR 6 million.
          </p>
          <p>
            Danu adds them up: IDR 73 million in obligations. He subtracts from IDR 98 million:
            <strong> IDR 25 million</strong>. "That," he says, "is what your business is worth."
            Rani had conflated what she <em>owns</em> with what she <em>keeps</em>. The balance
            sheet makes the difference visible.
          </p>
          <div className="highlight-box">
            <strong>What Is a Balance Sheet?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A balance sheet is a financial snapshot of a business at a single point in time. It
              lists everything the business owns (Assets), everything it owes (Liabilities), and the
              difference between the two — what belongs to the owner (Owner's Equity, or net worth).
              Unlike the income statement, which covers a period of time (this month's revenue and
              profit), the balance sheet describes a single moment: <em>right now</em>, what is the
              financial position of this business?
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Concept Defined</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Accounting Equation</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Assets = Liabilities + Owner's Equity</strong>
              <br /><br />
              This equation always balances — it is the foundation of all accounting. It states a
              simple truth: everything a business owns (assets) was funded by either borrowing money
              (liabilities) or the owner's own capital and retained earnings (equity). If you bought
              a van for IDR 18 million using a IDR 15 million bank loan and IDR 3 million of your
              own savings: assets increased by IDR 18M, liabilities increased by IDR 15M, equity
              increased by IDR 3M. The equation holds: 18 = 15 + 3.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Assets — What the Business Owns</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Assets are resources controlled by the business that have economic value. They are
              divided into two categories:
              <br /><br />
              <em>Current Assets</em> — assets expected to convert to cash within 12 months:
              cash in hand, money in the bank, accounts receivable (money customers owe you),
              and inventory (stock not yet sold).
              <br /><br />
              <em>Non-Current Assets</em> — assets held for longer-term use: equipment, vehicles,
              property, furniture. These are listed at book value — purchase price minus accumulated
              depreciation. A van bought for IDR 25 million two years ago, depreciated at 20%/year,
              has a book value of IDR 15 million (IDR 25M − IDR 5M − IDR 5M = IDR 15M).
            </p>
          </div>
          <div className="highlight-box">
            <strong>Liabilities — What the Business Owes</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Liabilities are obligations to pay money to others. They are also divided into two
              categories:
              <br /><br />
              <em>Current Liabilities</em> — obligations due within 12 months: supplier credit
              (goods received, not yet paid), short-term loans, the portion of long-term loans
              due this year, and any informal loans that can be called in at any time.
              <br /><br />
              <em>Non-Current Liabilities</em> — obligations due beyond 12 months: the long-term
              portion of bank loans, equipment financing.
              <br /><br />
              A liability exists regardless of whether there is a formal contract. Money owed to
              family members, to friends, or for services received but not yet paid is a liability
              as real as any bank loan.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Owner's Equity — What Belongs to the Owner</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Owner's Equity = Total Assets − Total Liabilities</strong>
              <br /><br />
              This is the net worth of the business — what would be left for the owner if every
              asset were liquidated and every liability paid off. Owner's equity grows when:
              (1) the business earns profit that is kept inside rather than withdrawn, or
              (2) the owner injects new capital. It shrinks when: (1) the business runs a loss,
              or (2) the owner withdraws more than the business earns.
              <br /><br />
              High revenue and consistent profit do not guarantee high equity. If every month's
              profit is withdrawn, equity stays flat despite years of profitable operation.
            </p>
          </div>

          <p><strong>Balance Sheet Structure at a Glance:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>What Goes Here</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Current Assets</strong></td>
                <td>Liquid within 12 months</td>
                <td>Cash, receivables, inventory</td>
              </tr>
              <tr>
                <td><strong>Non-Current Assets</strong></td>
                <td>Held longer-term</td>
                <td>Equipment, vehicles, property (at book value)</td>
              </tr>
              <tr>
                <td><strong>Current Liabilities</strong></td>
                <td>Due within 12 months</td>
                <td>Supplier credit, informal loans, short-term loan portions</td>
              </tr>
              <tr>
                <td><strong>Non-Current Liabilities</strong></td>
                <td>Due beyond 12 months</td>
                <td>Long-term bank loans, equipment leasing</td>
              </tr>
              <tr>
                <td><strong>Owner's Equity</strong></td>
                <td>Assets minus all liabilities</td>
                <td>Net worth — what the owner actually owns free and clear</td>
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
            <strong>Mistake 1 — Confusing Gross Assets with Net Worth</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rani's answer — "my business is worth IDR 98 million" — is the most common balance
              sheet mistake: stating total assets as the value of the business. But assets were
              funded by someone: either lenders (liabilities) or the owner (equity). Only the
              equity portion truly "belongs" to the owner. If Rani sold every asset tomorrow for
              IDR 98 million and paid off all IDR 73 million in liabilities, she would walk away
              with IDR 25 million — not IDR 98 million. Gross assets is a size measure.
              Net worth (equity) is a value measure. They are rarely the same.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 2 — Assuming a Profitable Business Has a Strong Balance Sheet</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rani is profitable — she clears IDR 6–8 million per month after expenses and loan
              repayments. It would be reasonable to assume her balance sheet is healthy. It is not.
              Her equity is IDR 25 million — thin for a business carrying IDR 73 million in debt.
              Profit is a monthly flow. Equity is the cumulative stock. A business that earns IDR 8M
              per month but withdraws IDR 8M per month ends each year with the same equity it
              started with — regardless of how profitable it appears on the income statement.
              Profitability and financial strength are related but not the same thing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mistake 3 — Underestimating Liabilities Because Repayments Feel Small</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rani's bank loan repayment is IDR 2.5 million per month — a manageable number in the
              context of IDR 25 million in monthly revenue. It feels small. But the outstanding
              principal is IDR 52 million — a large number relative to her IDR 25 million equity.
              The mistake is evaluating a liability by its monthly repayment rather than its total
              balance. A loan that costs IDR 2.5M/month for 24 months is IDR 60M in total
              obligation. Always put the full outstanding balance on the balance sheet, not just
              this month's instalment.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Worked Example — Rani's Wedding Decoration Business</h2>
        <div className="content">
          <div className="calculation">
{`Rani's Wedding Decoration Rental — Balance Sheet

ASSETS                                              IDR
  Current Assets:
    Cash & bank:                                8,000,000
    Client deposits (upcoming bookings):        5,000,000
    Consumables stock (flowers, ribbon, etc.):  4,500,000
  ──────────────────────────────────────────────────────
  Total Current Assets:                        17,500,000

  Non-Current Assets:
    Tables, chairs, linens (net of depreciation): 28,000,000
    Backdrop & flower wall sets (net):           17,000,000
    Lighting & audio equipment (net):            17,000,000
    Transport van (net of depreciation):         18,500,000
  ──────────────────────────────────────────────────────
  Total Non-Current Assets:                    80,500,000
  ──────────────────────────────────────────────────────
  TOTAL ASSETS:                                98,000,000

LIABILITIES
  Current Liabilities:
    Supplier credit (flower & decoration vendor):  6,000,000
    Family loan — Rani's parents (informal,         15,000,000
      callable any time):
    Bank loan — current portion (next 12 months):  30,000,000
  ──────────────────────────────────────────────────────
  Total Current Liabilities:                    51,000,000

  Non-Current Liabilities:
    Bank loan — long-term portion (year 2+):    22,000,000
  ──────────────────────────────────────────────────────
  Total Non-Current Liabilities:               22,000,000
  ──────────────────────────────────────────────────────
  TOTAL LIABILITIES:                           73,000,000

OWNER'S EQUITY
  Total Assets − Total Liabilities:
  IDR 98,000,000 − IDR 73,000,000            = 25,000,000

  Accounting equation check:
  Assets = Liabilities + Equity
  IDR 98,000,000 = IDR 73,000,000 + IDR 25,000,000  ✓`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Two Key Ratios From Rani's Balance Sheet:</strong></p>
          <div className="calculation">
{`Debt-to-Equity Ratio (leverage measure):
  = Total Liabilities ÷ Owner's Equity
  = IDR 73,000,000 ÷ IDR 25,000,000
  = 2.92x
  Interpretation: for every IDR 1 of equity, the business
  carries IDR 2.92 of debt. This is high — most lenders
  want this below 2.0x before extending more credit.

Current Ratio (short-term solvency):
  = Current Assets ÷ Current Liabilities
  = IDR 17,500,000 ÷ IDR 51,000,000
  = 0.34x
  Interpretation: for every IDR 1 of obligations due within
  12 months, Rani has IDR 0.34 in liquid assets. She cannot
  cover near-term obligations from current assets alone —
  she depends entirely on next month's revenue to pay bills.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>What Rani Thought vs. Reality:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Rani's Answer Before</th>
                <th>Balance Sheet Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>What is my business worth?</td>
                <td>IDR 98,000,000 (total assets)</td>
                <td>IDR 25,000,000 (owner's equity)</td>
              </tr>
              <tr>
                <td>How much do I owe?</td>
                <td>"Just the monthly repayments"</td>
                <td>IDR 73,000,000 in total obligations</td>
              </tr>
              <tr>
                <td>Is the business financially strong?</td>
                <td>"Yes — I'm profitable every month"</td>
                <td>D/E 2.92x, Current Ratio 0.34x — structurally fragile</td>
              </tr>
              <tr>
                <td>Can I borrow more to expand?</td>
                <td>"I think so — business is good"</td>
                <td>Unlikely — D/E already exceeds most lenders' limits</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--ink-3)' }}>
            Rani is not in crisis. Her business is profitable and her equipment is real and
            generating revenue. But her financial position is thinner than she believed. Knowing
            this matters: it changes how she makes decisions about drawings, new equipment
            purchases, and taking on additional clients who pay on credit.
          </p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How This Shows Up in the Cases</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Case 08 — Pak Hendra's Spare Parts Shop</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Hendra applies for a KUR bank loan after 8 profitable years in business and gets rejected.
              The reason: his accurate balance sheet — built by the bank's loan officer from his records —
              shows total liabilities of IDR 145 million, owner's equity of only IDR 23 million, and a
              debt-to-equity ratio of 6.30x (bank maximum: 2.0x). He did not know his D/E ratio existed.
              He had never seen his balance sheet. He believed the business was worth IDR 111 million
              because he ignored IDR 60 million in informal family loans. The case walks through how
              two adjustments — recognising informal debt and writing down dead inventory to realistic
              value — completely changed the picture of his financial position.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Case 05 — Ibu Susi's Bakery (Partial Connection)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Susi's working capital crisis is fundamentally a balance sheet problem: she had
              current liabilities (ingredient purchases, staff advance) due immediately, but her
              main current asset — the IDR 37.5M she was owed by the corporate client — was not
              receivable for 45 days. Her current ratio at Day 20 was effectively below 0.1x.
              She was solvent on a 45-day horizon but illiquid right now. The balance sheet, read
              carefully, would have flagged this risk before she accepted the order.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Beginner Practitioner's Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Balance Sheet Is a Snapshot — It Changes Every Day</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Unlike an annual tax report, a balance sheet describes a business at one moment in
              time. The moment you collect a customer payment, your cash (asset) increases. The
              moment you pay a supplier, your cash decreases and your accounts payable (liability)
              decreases. A useful habit: build a rough balance sheet at the end of each month —
              even if it is just a short list of assets and a short list of debts, with the
              difference as equity. Watch whether equity is growing month by month. If it is not,
              the business is not building value, even if it is profitable.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Assets Must Be Listed at What They Are Actually Worth</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Rani's tables and chairs are listed at book value (purchase price minus depreciation).
              But book value can mislead: a set of decoration items that are out of style may be
              worth far less than their book value. Inventory that is not selling is worth less than
              what you paid for it. When you build a balance sheet, ask yourself honestly for each
              asset: "If I had to turn this into cash today, what would I realistically get?" That
              number is more useful for decision-making than the accounting book value.
            </p>
          </div>
          <div className="highlight-box">
            <strong>A Bank Sees Your Balance Sheet Differently Than You Do</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When a bank evaluates a loan application, it looks at two things primarily: (1) can
              this business repay from monthly cash flow (income statement view), and (2) if it
              cannot, are there enough assets to recover the loan (balance sheet view). Banks apply
              conservative haircuts to assets — inventory at 50%, equipment at 30–50%, receivables
              only if from creditworthy customers. They also include every liability, informal or
              not. Understanding this is how you prepare a bankable balance sheet before you need one,
              not after a rejection.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Growing Equity Is the Long Game</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Monthly profit is the short game — it keeps the business running today. Growing
              owner's equity is the long game — it determines whether the business can survive
              bad months, access financing, and eventually be sold or passed on. Equity grows
              only when profit is retained inside the business rather than fully withdrawn.
              Even retaining 15–20% of monthly profit — IDR 1–2 million on a IDR 8M monthly
              profit — compounds meaningfully over years. A business that consistently builds
              equity becomes more resilient, more creditworthy, and more valuable over time.
              A business that withdraws everything it earns stays financially fragile regardless
              of how good its income statement looks.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PreA5
