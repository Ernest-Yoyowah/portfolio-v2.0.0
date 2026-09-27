import { Checklist, type ChecklistGroup } from "@/components/article/checklist";
import { Note } from "@/components/article/note";

const scopes = [
  {
    saq: "SAQ A",
    title: "Fully outsourced",
    burden: "Low burden",
    description:
      "You redirect users to a hosted payment page, or embed an iframe that the payment provider controls entirely. Your frontend never touches card data. Lowest burden — roughly 22 requirements.",
  },
  {
    saq: "SAQ A-EP",
    title: "Partially outsourced",
    burden: "Medium burden",
    description:
      "You serve the payment page but use hosted fields (iframes) for card entry. You control the page but not the card inputs. Medium burden — your server and delivery infrastructure matter.",
  },
  {
    saq: "SAQ D",
    title: "Full handling",
    burden: "High burden",
    description:
      "Your frontend or backend handles raw card data directly. Full 300+ control assessment. You almost certainly don’t want this. If your code ever sees a PAN, you’re here.",
  },
];

const securityHeaders = [
  ["Strict-Transport-Security", "max-age=31536000; includeSubDomains"],
  ["X-Content-Type-Options", "nosniff"],
  ["X-Frame-Options", "DENY"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
];

const scannerFlags = [
  {
    flag: "Hardcoded secrets",
    detail:
      "Secret keys, API tokens in source code — the scanner checks string literals and environment variable names. Publishable/public keys are fine; secret keys are not.",
  },
  {
    flag: "Potential card data in logs",
    detail:
      "Any console.log, error logging, or network request that references variables named ‘card’, ‘pan’, ‘cvv’, ‘expiry’ near form fields.",
  },
  {
    flag: "Mixed content",
    detail: "Loading any resource (scripts, iframes, API endpoints) over HTTP from an HTTPS page.",
  },
  {
    flag: "Overly permissive CSP",
    detail:
      "unsafe-eval, unsafe-inline, or wildcard * in script-src — especially on pages with payment forms.",
  },
  {
    flag: "Reflected XSS vectors",
    detail:
      "Success or failure pages that display URL parameters (returnUrl, message, status) without sanitization.",
  },
  {
    flag: "Insecure direct object references",
    detail:
      "Payment confirmation pages that accept transaction IDs from the URL and display them without validation.",
  },
];

const checklist: ChecklistGroup[] = [
  {
    label: "HTTPS & transport",
    items: [
      "Payment page is served exclusively over HTTPS",
      "HSTS header is configured for the payment domain",
      "No mixed content on any page that loads payment widgets",
    ],
  },
  {
    label: "Card data",
    items: [
      "No card numbers, CVVs, or expiry dates handled on the frontend",
      "No card data in console.log, network requests, or error tracking",
      "No card data stored in localStorage, sessionStorage, or cookies",
      "No card data passed through URL parameters",
    ],
  },
  {
    label: "Hosted widgets",
    items: [
      "Card entry uses a hosted iframe you do not control (Stripe Elements, Mastercard HPP, etc.)",
      "Your JS does not attempt to read the contents of payment iframes",
    ],
  },
  {
    label: "Scripts & CSP",
    items: [
      "Content-Security-Policy header is configured on payment pages",
      "No unsafe-inline or unsafe-eval in CSP for payment pages",
      "Subresource Integrity (SRI) used for any third-party scripts on payment pages",
      "No analytics, chat, or A/B testing scripts on card entry pages",
    ],
  },
  {
    label: "Secrets & keys",
    items: [
      "No secret keys in client-side code (publishable/public keys are fine)",
      "No API secrets, private keys, or credentials in the browser bundle",
    ],
  },
  {
    label: "XSS & input",
    items: [
      "Success/failure pages do not reflect URL query parameters unescaped",
      "No dangerouslySetInnerHTML using URL-sourced content on payment flows",
    ],
  },
];

export default function PciDssFrontend() {
  return (
    <>
      <blockquote>
        <p>
          You just integrated a card payment flow. You called the payment provider’s checkout. The
          200 came back. Are you PCI DSS compliant?
        </p>
      </blockquote>

      <p>
        The honest answer is: it depends on how you built it. And most frontend engineers have
        never been told the difference.
      </p>

      <p>
        PCI DSS compliance is usually framed as a backend or infrastructure concern. But if your
        frontend ever touches — or could touch — cardholder data, you’re in scope. The rules apply
        to your code too.
      </p>

      <p>This is what frontend engineers building card payment flows actually need to know.</p>

      <h2>What PCI DSS actually is</h2>

      <p>
        The Payment Card Industry Data Security Standard (PCI DSS) is a set of security
        requirements established by the PCI Security Standards Council — a body founded by Visa,
        Mastercard, American Express, Discover, and JCB.
      </p>

      <p>
        It applies to any system that stores, processes, or transmits cardholder data. “Cardholder
        data” means the Primary Account Number (PAN — the 16-digit card number), the cardholder
        name, expiry date, service code, and the sensitive authentication data (CVV/CVC, PIN).
      </p>

      <Note>
        <p>
          The standard has 12 top-level requirements covering network security, data protection,
          access control, monitoring, and regular testing. But your obligations depend heavily on
          your implementation scope — specifically, which Self-Assessment Questionnaire (SAQ)
          applies to you.
        </p>
      </Note>

      <h2>The scope question</h2>

      <p>
        This is the question that determines everything. Before writing a line of payment code,
        you need to understand which PCI scope level you’re operating in.
      </p>

      <dl className="divide-y rounded-md border">
        {scopes.map((scope) => (
          <div key={scope.saq} className="px-4 py-3.5">
            <dt className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="font-semibold text-foreground">
                {scope.saq} · {scope.title}
              </span>
              <span className="text-sm text-muted-foreground">{scope.burden}</span>
            </dt>
            <dd className="mt-1 text-[0.9375rem] leading-relaxed">{scope.description}</dd>
          </div>
        ))}
      </dl>

      <p>
        If you’re building the payment page and the user types a card number into an input field
        your code controls — you’re in SAQ D scope. That’s the category where card breaches happen.
        Aim for SAQ A.
      </p>

      <h2>The hosted checkout approach</h2>

      <p>
        The safest — and frankly, correct — approach for most applications is to never let card
        data touch your infrastructure at all.
      </p>

      <p>Hosted checkout works in two patterns:</p>

      <ul>
        <li>
          <strong>Redirect.</strong> User leaves your site and lands on the provider’s payment page.
          After payment, they’re redirected back. You never see the card.
        </li>
        <li>
          <strong>Hosted fields.</strong> Card inputs are iframes from the provider. They sit inside
          your design, but your JavaScript cannot read their contents. The provider tokenizes
          directly.
        </li>
      </ul>

      <p>
        What your frontend does in either case: collect non-sensitive data (amount, customer ID,
        billing address if needed), initiate a session or intent with your backend, receive a token
        or redirect, and handle the result.
      </p>

      <Note title="Key rule">
        <p>
          Your JavaScript must never be able to read the card number, CVV, or full expiry from a
          hosted field iframe. If you can — you’re out of scope for SAQ A.
        </p>
      </Note>

      <h2>What frontend engineers must never do</h2>

      <p>
        These aren’t just “bad practice.” Each one is a PCI violation that can result in fines, loss
        of ability to process card payments, and — more importantly — real harm to real people.
      </p>

      <Note title="Never do this" tone="warning">
        <ul>
          <li>
            <code>console.log(cardNumber)</code> — card numbers in browser logs are a breach waiting
            to happen
          </li>
          <li>Sending card data to your own backend, even to forward it to a processor</li>
          <li>Storing anything card-related in localStorage, sessionStorage, or cookies</li>
          <li>
            Including card numbers in URL parameters (they end up in server logs, browser history,
            analytics)
          </li>
          <li>Loading payment forms over HTTP — everything must be HTTPS</li>
          <li>
            Including analytics scripts, chatbots, or A/B testing tools on pages where cards are
            entered
          </li>
          <li>
            Using <code>dangerouslySetInnerHTML</code> with URL-sourced content on payment flows (XSS
            risk)
          </li>
        </ul>
      </Note>

      <p>
        The third-party script restriction deserves extra attention. Magecart attacks — where
        attackers inject card-skimming code into payment pages via compromised third-party scripts
        — have stolen millions of card numbers from merchants who thought they were secure. Your
        first-party code can be clean and still get you breached through a widget you loaded.
      </p>

      <h2>Security requirements for your payment page</h2>

      <p>
        Even with hosted checkout (SAQ A), your payment page has security obligations. The page
        that loads the payment iframe is still your responsibility.
      </p>

      <h3>Content Security Policy</h3>

      <p>
        CSP is your primary defense against XSS and script injection. For payment pages, restrict
        aggressively.
      </p>

      <pre>
        <code>{`Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://js.stripe.com;
  frame-src 'self' https://js.stripe.com;
  connect-src 'self' https://api.stripe.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;`}</code>
      </pre>

      <p>
        Notice there’s no <strong>unsafe-eval</strong> and no wildcard origins. Any script that can
        run on your payment page is a potential attack vector.
      </p>

      <h3>Subresource Integrity</h3>

      <p>
        If you load any third-party script on a payment page — even the payment provider’s own SDK
        — use SRI hashes to ensure the script hasn’t been tampered with.
      </p>

      <pre>
        <code>{`<script
  src="https://example.com/payment-sdk.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"
></script>`}</code>
      </pre>

      <h3>Additional headers</h3>

      <dl className="divide-y rounded-md border font-mono text-[0.8125rem]">
        {securityHeaders.map(([header, value]) => (
          <div key={header} className="px-4 py-2.5 sm:grid sm:grid-cols-[15rem_1fr] sm:gap-4">
            <dt className="text-muted-foreground">{header}</dt>
            <dd className="break-words text-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      <h2>How tokenization works for frontend engineers</h2>

      <p>
        Tokenization is what makes the hosted model work. Here’s what actually happens when a user
        submits a payment form:
      </p>

      <ol>
        <li>User enters card details into the provider’s hosted iframe</li>
        <li>
          The iframe submits card data directly to the payment provider’s servers — never touching
          your infrastructure
        </li>
        <li>
          The provider returns a one-time token (e.g. <code>tok_xxxxxxxx</code>) to your frontend
          JavaScript
        </li>
        <li>Your frontend sends this token — not the card — to your backend</li>
        <li>Your backend charges the token by calling the provider’s API</li>
        <li>Your backend stores the customer ID, not the card number</li>
      </ol>

      <Note title="The key insight">
        <p>
          A token is useless without the provider’s secret key. It can’t be charged by anyone except
          your backend with the correct credentials. You can safely pass it through URLs, log it,
          and store it — it’s meaningless without the key.
        </p>
      </Note>

      <h2>What Fortify and security scanners look for</h2>

      <p>
        If your codebase gets a Fortify scan (or similar static analysis), here’s what the scanner
        will flag in payment-adjacent code:
      </p>

      <ul>
        {scannerFlags.map(({ flag, detail }) => (
          <li key={flag}>
            <strong>{flag}.</strong> {detail}
          </li>
        ))}
      </ul>

      <h2>Frontend compliance checklist</h2>

      <p>
        Use this before shipping any card payment feature. Each item maps to a real PCI DSS
        control.
      </p>

      <Checklist groups={checklist} />

      <h2>The point of all this</h2>

      <p>
        PCI DSS isn’t bureaucracy for its own sake. The rules exist because the internet showed us
        what happens without them — and what happens is that real people lose money, accounts get
        drained, and trust gets destroyed.
      </p>

      <p>
        Every requirement in this article traces back to an actual breach pattern. Card data in
        logs. Skimming scripts. Redirect vulnerabilities. These aren’t theoretical — they’re
        documented, they’ve happened to production systems at scale, and they’ll happen again to
        someone who skipped the checklist.
      </p>

      <p>
        Understanding PCI scope before you write a line of payment code isn’t optional. It shapes
        your architecture, your component design, your header configuration, and your third-party
        choices. Get it right early.
      </p>
    </>
  );
}
