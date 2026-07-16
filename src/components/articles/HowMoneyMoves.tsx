"use client";

import { PaymentFlowDiagram } from "./PaymentFlowDiagram";

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono text-xs text-muted-foreground border border-border rounded px-2 py-0.5 flex-shrink-0">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="text-lg md:text-xl font-semibold text-foreground tracking-tight">{title}</h2>
      </div>
      <div className="pl-0 md:pl-10 space-y-4">{children}</div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-amber-500 pl-5 py-1 my-8">
      <p className="text-base text-foreground font-medium italic leading-relaxed">{children}</p>
    </div>
  );
}

function Insight({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-5 my-6">
      {title && (
        <p className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">{title}</p>
      )}
      <div className="text-sm text-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function ArticleTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {headers.map((h) => (
              <th key={h} className="text-left py-2.5 px-4 text-xs font-mono uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="py-2.5 px-4 font-mono text-xs text-foreground whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Principle({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 rounded-xl border border-border bg-muted/30 p-6 md:p-8 text-center">
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Architecture Principle</p>
      <blockquote className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">{children}</blockquote>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-base text-muted-foreground leading-[1.8]">{children}</p>;
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>;
}

export function HowMoneyMoves() {
  return (
    <div className="space-y-4">
      <Callout>
        "I tapped Send. The API returned 200 OK. The payment was successful... right?"
      </Callout>

      <Prose>
        Not necessarily.
      </Prose>

      <Prose>
        One of the biggest misconceptions in software engineering is believing that a successful API response means money has moved.
        It doesn't.
      </Prose>

      <Prose>
        Behind every successful payment lies a carefully orchestrated sequence of authentication, authorization, ledger updates, notifications, settlement, and reconciliation.
        What appears to users as a simple tap on a screen is, in reality, a distributed system where every step must be correct, secure, and recoverable.
      </Prose>

      <Prose>
        This is where finance meets software engineering.
      </Prose>

      <PaymentFlowDiagram />

      <div className="mt-10 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-4">A Simple Payment</h2>

        <Prose>
          Imagine this. Kwame wants to send <Bold>GHS 100</Bold> from his MTN Mobile Money wallet to Ama's Vodafone Cash wallet. For Kwame, it's effortless.
        </Prose>

        <ol className="mt-4 space-y-1.5 pl-4">
          {["Open the app.", "Enter Ama's number.", "Enter GHS 100.", "Confirm with his PIN.", "Done."].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
              <span className="font-mono text-xs text-muted-foreground mt-0.5 flex-shrink-0">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <Prose>
          The entire interaction takes less than a minute. But underneath that simple experience, dozens of events occur before a single cedi changes hands.
        </Prose>
      </div>

      <Step number={1} title="The User Initiates the Payment">
        <Prose>Kwame enters the recipient's phone number, the amount, and his PIN.</Prose>
        <Insight title="Nothing has moved yet">
          <p>At this point, the application has simply received an instruction. Think of it like submitting an online form — the request has been made, but nothing has been processed.</p>
        </Insight>
      </Step>

      <Step number={2} title="Authentication">
        <Prose>Before anything else, the platform answers one question: <Bold>Is this really Kwame?</Bold></Prose>
        <Prose>The system verifies things such as:</Prose>
        <ul className="space-y-1.5 mt-2">
          {["Is the PIN correct?", "Is the SIM active?", "Is the wallet active?", "Has the account been blocked?", "Has suspicious activity been detected?"].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Prose>Only after successfully verifying the customer's identity does the payment continue.</Prose>
      </Step>

      <Step number={3} title="Authorization">
        <Prose>Now comes a different question: <Bold>Should this payment be allowed?</Bold></Prose>
        <Prose>Notice the distinction.</Prose>
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          <div className="rounded-lg border border-border p-4">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Authentication</p>
            <p className="text-sm text-foreground">Proves <span className="font-semibold">who</span> you are</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Authorization</p>
            <p className="text-sm text-foreground">Determines <span className="font-semibold">what</span> you're allowed to do</p>
          </div>
        </div>
        <Prose>Typical checks include whether Kwame has sufficient balance, whether he's exceeded his daily limit, whether Ama's wallet is valid, and whether any fraud rules are triggered.</Prose>
        <Insight title="Critical distinction">
          <p>Authorization does not mean money has moved. It simply means the system has decided that the payment <em>may</em> proceed.</p>
        </Insight>
      </Step>

      <Step number={4} title="Recording the Transaction">
        <Prose>Before updating any balances, the platform creates a transaction record.</Prose>
        <ArticleTable
          headers={["Transaction ID", "Sender", "Receiver", "Amount", "Status"]}
          rows={[["TXN001", "Kwame", "Ama", "GHS 100", "Pending"]]}
        />
        <Prose>Why create this record before moving money? Because distributed systems fail. Servers crash. Networks disconnect. Databases restart.</Prose>
        <Insight>
          <p>If something goes wrong halfway through, engineers need an immutable record of what was attempted. Without this record, recovery becomes significantly more difficult — and "recovery" in payment systems means the difference between a refund and a loss.</p>
        </Insight>
      </Step>

      <Step number={5} title="Updating the Ledger">
        <Prose>This is the moment where value actually changes. Contrary to popular belief, payment systems don't simply subtract money from one balance and add it to another. They update a ledger using <Bold>double-entry accounting</Bold>.</Prose>
        <ArticleTable
          headers={["Account", "Debit", "Credit"]}
          rows={[
            ["Kwame Wallet", "GHS 100", "—"],
            ["Ama Wallet", "—", "GHS 100"],
          ]}
        />
        <Prose>Every debit has a corresponding credit. Money doesn't disappear. Money doesn't magically appear. It simply moves from one account to another.</Prose>
        <Insight title="Source of truth">
          <p>The ledger is the source of truth. Every balance is derived from the ledger. Everything else — the UI, the notification, the receipt — is derived from the ledger.</p>
        </Insight>
      </Step>

      <Step number={6} title="Customer Notifications">
        <Prose>Only after the ledger has been updated do customers typically receive notifications.</Prose>
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          <div className="rounded-lg border border-border p-4 font-mono text-xs text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold mb-1 text-sm not-italic">Kwame receives:</p>
            "Payment Successful"
          </div>
          <div className="rounded-lg border border-border p-4 font-mono text-xs text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold mb-1 text-sm not-italic">Ama receives:</p>
            "You have received GHS 100"
          </div>
        </div>
        <Insight title="Surprising to most engineers">
          <p>The SMS or push notification is one of the <em>least</em> important parts of the payment. If the notification service fails, the payment may still have completed successfully. This is why financial systems separate payment processing from customer notifications entirely.</p>
        </Insight>
      </Step>

      <Step number={7} title="Settlement">
        <Prose>Now suppose Kwame uses MTN Mobile Money while Ama uses Vodafone Cash. The payment may already appear complete to both customers — but behind the scenes, another process begins.</Prose>
        <Prose>The two institutions must eventually settle their obligations through the national payment infrastructure. Depending on the payment scheme, settlement may happen immediately, in batches, or at scheduled intervals.</Prose>
        <Insight title="The biggest misconception">
          <p><Bold>Payment is not the same as settlement.</Bold> A customer may see "Payment Successful" long before financial institutions complete settlement between themselves. Understanding this gap is essential for building correct reconciliation systems.</p>
        </Insight>
      </Step>

      <div className="pt-4 border-t border-border mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">What This Means for Software Engineers</h2>

        <Prose>Imagine your frontend immediately displays "Payment Successful." A few seconds later, the backend discovers that settlement failed.</Prose>
        <Prose>Now what? Should the customer be refunded? Should the payment be reversed? Should the merchant still deliver the product? Should operations investigate?</Prose>
        <Insight>
          <p>Great payment systems answer these questions <Bold>before</Bold> anyone writes code. The failure modes aren't edge cases — they're design inputs.</p>
        </Insight>
      </div>

      <div className="pt-4 border-t border-border mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Thinking Like an Architect</h2>

        <Prose>Many frontend engineers naturally think: <Bold>"Did the API return 200 OK?"</Bold></Prose>
        <Prose>Payment engineers think differently. They ask:</Prose>

        <ul className="mt-4 space-y-2">
          {[
            "Did the ledger commit successfully?",
            "Is this transaction idempotent?",
            "Can this request be safely retried?",
            "What happens if the customer taps Pay twice?",
            "What if the notification service is unavailable?",
            "Can tomorrow's reconciliation prove this transaction occurred?",
            "Can the system recover from failure without losing money?",
          ].map((q) => (
            <li key={q} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
              {q}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Prose>These aren't edge cases. They're everyday design considerations when building financial systems. This is the difference between building user interfaces and designing financial infrastructure.</Prose>
        </div>
      </div>

      <Principle>
        Money should only move when the ledger says it moved — not when the UI says it moved.
      </Principle>

      <Prose>
        Everything else — buttons, animations, loading indicators, receipts, notifications, emails, and success screens — is built around that single source of truth. The ledger decides reality. The user interface merely reflects it.
      </Prose>

      <div className="pt-8 border-t border-border mt-6">
        <h2 className="text-xl font-semibold text-foreground tracking-tight mb-4">Final Thoughts</h2>
        <Prose>
          Every time someone taps Send, they see a simple interaction. What they don't see is the authentication, authorization, ledger updates, settlement workflows, fraud checks, audit logs, retries, reconciliation, and distributed systems working together to ensure every cedi is accounted for.
        </Prose>
        <Prose>
          That's the beauty of financial software. When it's designed well, complexity becomes invisible. And perhaps that's the greatest compliment a payment system can receive.
        </Prose>
      </div>
    </div>
  );
}
