import { Note, PullQuote } from "@/components/article/note";
import { PaymentFlowDiagram } from "@/components/article/payment-flow-diagram";

export default function HowMoneyMoves() {
  return (
    <>
      <blockquote>
        <p>“I tapped Send. The API returned 200 OK. The payment was successful... right?”</p>
      </blockquote>

      <p>Not necessarily.</p>

      <p>
        One of the biggest misconceptions in software engineering is believing that a successful
        API response means money has moved. It doesn’t.
      </p>

      <p>
        Behind every successful payment lies a carefully orchestrated sequence of authentication,
        authorization, ledger updates, notifications, settlement, and reconciliation. What appears
        to users as a simple tap on a screen is, in reality, a distributed system where every step
        must be correct, secure, and recoverable.
      </p>

      <p>This is where finance meets software engineering.</p>

      <PaymentFlowDiagram />

      <h2>A simple payment</h2>

      <p>
        Imagine this. Kwame wants to send <strong>GHS 100</strong> from his MTN Mobile Money wallet
        to Ama’s Vodafone Cash wallet. For Kwame, it’s effortless.
      </p>

      <ol>
        <li>Open the app.</li>
        <li>Enter Ama’s number.</li>
        <li>Enter GHS 100.</li>
        <li>Confirm with his PIN.</li>
        <li>Done.</li>
      </ol>

      <p>
        The entire interaction takes less than a minute. But underneath that simple experience,
        dozens of events occur before a single cedi changes hands.
      </p>

      <h3>1. The user initiates the payment</h3>

      <p>Kwame enters the recipient’s phone number, the amount, and his PIN.</p>

      <Note title="Nothing has moved yet">
        <p>
          At this point, the application has simply received an instruction. Think of it like
          submitting an online form — the request has been made, but nothing has been processed.
        </p>
      </Note>

      <h3>2. Authentication</h3>

      <p>
        Before anything else, the platform answers one question: <strong>Is this really Kwame?</strong>
      </p>

      <p>The system verifies things such as:</p>

      <ul>
        <li>Is the PIN correct?</li>
        <li>Is the SIM active?</li>
        <li>Is the wallet active?</li>
        <li>Has the account been blocked?</li>
        <li>Has suspicious activity been detected?</li>
      </ul>

      <p>Only after successfully verifying the customer’s identity does the payment continue.</p>

      <h3>3. Authorization</h3>

      <p>
        Now comes a different question: <strong>Should this payment be allowed?</strong>
      </p>

      <p>Notice the distinction.</p>

      <table>
        <tbody>
          <tr>
            <th scope="row">Authentication</th>
            <td>
              Proves <strong>who</strong> you are
            </td>
          </tr>
          <tr>
            <th scope="row">Authorization</th>
            <td>
              Determines <strong>what</strong> you’re allowed to do
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Typical checks include whether Kwame has sufficient balance, whether he’s exceeded his daily
        limit, whether Ama’s wallet is valid, and whether any fraud rules are triggered.
      </p>

      <Note title="Critical distinction">
        <p>
          Authorization does not mean money has moved. It simply means the system has decided that
          the payment <em>may</em> proceed.
        </p>
      </Note>

      <h3>4. Recording the transaction</h3>

      <p>Before updating any balances, the platform creates a transaction record.</p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TXN001</td>
              <td>Kwame</td>
              <td>Ama</td>
              <td>GHS 100</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Why create this record before moving money? Because distributed systems fail. Servers
        crash. Networks disconnect. Databases restart.
      </p>

      <Note>
        <p>
          If something goes wrong halfway through, engineers need an immutable record of what was
          attempted. Without this record, recovery becomes significantly more difficult — and
          “recovery” in payment systems means the difference between a refund and a loss.
        </p>
      </Note>

      <h3>5. Updating the ledger</h3>

      <p>
        This is the moment where value actually changes. Contrary to popular belief, payment
        systems don’t simply subtract money from one balance and add it to another. They update a
        ledger using <strong>double-entry accounting</strong>.
      </p>

      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kwame Wallet</td>
            <td>GHS 100</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Ama Wallet</td>
            <td>—</td>
            <td>GHS 100</td>
          </tr>
        </tbody>
      </table>

      <p>
        Every debit has a corresponding credit. Money doesn’t disappear. Money doesn’t magically
        appear. It simply moves from one account to another.
      </p>

      <Note title="Source of truth">
        <p>
          The ledger is the source of truth. Every balance is derived from the ledger. Everything
          else — the UI, the notification, the receipt — is derived from the ledger.
        </p>
      </Note>

      <h3>6. Customer notifications</h3>

      <p>Only after the ledger has been updated do customers typically receive notifications.</p>

      <ul>
        <li>
          <strong>Kwame</strong> receives “Payment Successful”
        </li>
        <li>
          <strong>Ama</strong> receives “You have received GHS 100”
        </li>
      </ul>

      <Note title="Surprising to most engineers">
        <p>
          The SMS or push notification is one of the <em>least</em> important parts of the payment.
          If the notification service fails, the payment may still have completed successfully.
          This is why financial systems separate payment processing from customer notifications
          entirely.
        </p>
      </Note>

      <h3>7. Settlement</h3>

      <p>
        Now suppose Kwame uses MTN Mobile Money while Ama uses Vodafone Cash. The payment may
        already appear complete to both customers — but behind the scenes, another process begins.
      </p>

      <p>
        The two institutions must eventually settle their obligations through the national payment
        infrastructure. Depending on the payment scheme, settlement may happen immediately, in
        batches, or at scheduled intervals.
      </p>

      <Note title="The biggest misconception">
        <p>
          <strong>Payment is not the same as settlement.</strong> A customer may see “Payment
          Successful” long before financial institutions complete settlement between themselves.
          Understanding this gap is essential for building correct reconciliation systems.
        </p>
      </Note>

      <h2>What this means for software engineers</h2>

      <p>
        Imagine your frontend immediately displays “Payment Successful.” A few seconds later, the
        backend discovers that settlement failed.
      </p>

      <p>
        Now what? Should the customer be refunded? Should the payment be reversed? Should the
        merchant still deliver the product? Should operations investigate?
      </p>

      <Note>
        <p>
          Great payment systems answer these questions <strong>before</strong> anyone writes code.
          The failure modes aren’t edge cases — they’re design inputs.
        </p>
      </Note>

      <h2>Thinking like an architect</h2>

      <p>
        Many frontend engineers naturally think: <strong>“Did the API return 200 OK?”</strong>
      </p>

      <p>Payment engineers think differently. They ask:</p>

      <ul>
        <li>Did the ledger commit successfully?</li>
        <li>Is this transaction idempotent?</li>
        <li>Can this request be safely retried?</li>
        <li>What happens if the customer taps Pay twice?</li>
        <li>What if the notification service is unavailable?</li>
        <li>Can tomorrow’s reconciliation prove this transaction occurred?</li>
        <li>Can the system recover from failure without losing money?</li>
      </ul>

      <p>
        These aren’t edge cases. They’re everyday design considerations when building financial
        systems. This is the difference between building user interfaces and designing financial
        infrastructure.
      </p>

      <PullQuote>
        Money should only move when the ledger says it moved — not when the UI says it moved.
      </PullQuote>

      <p>
        Everything else — buttons, animations, loading indicators, receipts, notifications, emails,
        and success screens — is built around that single source of truth. The ledger decides
        reality. The user interface merely reflects it.
      </p>

      <h2>Final thoughts</h2>

      <p>
        Every time someone taps Send, they see a simple interaction. What they don’t see is the
        authentication, authorization, ledger updates, settlement workflows, fraud checks, audit
        logs, retries, reconciliation, and distributed systems working together to ensure every
        cedi is accounted for.
      </p>

      <p>
        That’s the beauty of financial software. When it’s designed well, complexity becomes
        invisible. And perhaps that’s the greatest compliment a payment system can receive.
      </p>
    </>
  );
}
