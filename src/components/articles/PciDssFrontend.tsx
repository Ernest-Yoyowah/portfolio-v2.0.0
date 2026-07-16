"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-base text-muted-foreground leading-[1.8]">{children}</p>;
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>;
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

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-5 my-6">
      <p className="text-xs font-mono uppercase tracking-widest text-red-500 dark:text-red-400 mb-2">Never do this</p>
      <div className="text-sm text-foreground leading-relaxed space-y-1.5">{children}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="my-4 rounded-lg border border-border bg-muted/50 p-4 overflow-x-auto">
      <code className="text-xs font-mono text-foreground leading-relaxed">{children.trim()}</code>
    </pre>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mt-12 mb-5 pt-8 border-t border-border">
      {title}
    </h2>
  );
}

function Checklist() {
  const items = [
    { category: "HTTPS & Transport", text: "Payment page is served exclusively over HTTPS" },
    { category: "HTTPS & Transport", text: "HSTS header is configured for the payment domain" },
    { category: "HTTPS & Transport", text: "No mixed content on any page that loads payment widgets" },
    { category: "Card Data", text: "No card numbers, CVVs, or expiry dates handled on the frontend" },
    { category: "Card Data", text: "No card data in console.log, network requests, or error tracking" },
    { category: "Card Data", text: "No card data stored in localStorage, sessionStorage, or cookies" },
    { category: "Card Data", text: "No card data passed through URL parameters" },
    { category: "Hosted Widgets", text: "Card entry uses a hosted iframe you do not control (Stripe Elements, Mastercard HPP, etc.)" },
    { category: "Hosted Widgets", text: "Your JS does not attempt to read the contents of payment iframes" },
    { category: "Scripts & CSP", text: "Content-Security-Policy header is configured on payment pages" },
    { category: "Scripts & CSP", text: "No unsafe-inline or unsafe-eval in CSP for payment pages" },
    { category: "Scripts & CSP", text: "Subresource Integrity (SRI) used for any third-party scripts on payment pages" },
    { category: "Scripts & CSP", text: "No analytics, chat, or A/B testing scripts on card entry pages" },
    { category: "Secrets & Keys", text: "No secret keys in client-side code (publishable/public keys are fine)" },
    { category: "Secrets & Keys", text: "No API secrets, private keys, or credentials in the browser bundle" },
    { category: "XSS & Input", text: "Success/failure pages do not reflect URL query parameters unescaped" },
    { category: "XSS & Input", text: "No dangerouslySetInnerHTML using URL-sourced content on payment flows" },
  ];

  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {checked.size} / {items.length} checked
        </p>
        {checked.size === items.length && (
          <span className="text-xs font-mono text-emerald-500">All clear</span>
        )}
      </div>

      {categories.map((cat) => {
        const catItems = items.filter((item) => item.category === cat);
        const catStart = items.findIndex((item) => item.category === cat);
        return (
          <div key={cat}>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">{cat}</p>
            <div className="space-y-1.5">
              {catItems.map((item, j) => {
                const globalIdx = catStart + j;
                const isChecked = checked.has(globalIdx);
                return (
                  <button
                    key={item.text}
                    onClick={() => toggle(globalIdx)}
                    className={`w-full flex items-start gap-3 px-4 py-3 rounded-lg border text-left transition-colors ${
                      isChecked
                        ? "border-emerald-500/30 bg-emerald-500/5"
                        : "border-border hover:border-foreground/20 hover:bg-muted/30"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "border-emerald-500 bg-emerald-500"
                          : "border-border"
                      }`}
                    >
                      {isChecked && <Check size={10} className="text-white" strokeWidth={3} />}
                    </span>
                    <span className={`text-sm leading-relaxed ${isChecked ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ScopeCard({ title, saq, description, burden }: { title: string; saq: string; description: string; burden: "low" | "medium" | "high" }) {
  const color = { low: "emerald", medium: "amber", high: "red" }[burden];
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{saq}</p>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        </div>
        <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
          color === "emerald" ? "border-emerald-500/30 text-emerald-600 dark:text-emerald-400" :
          color === "amber" ? "border-amber-500/30 text-amber-600 dark:text-amber-400" :
          "border-red-500/30 text-red-600 dark:text-red-400"
        }`}>
          {burden} burden
        </span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export function PciDssFrontend() {
  return (
    <div className="space-y-4">
      <Callout>
        You just integrated a card payment flow. You called the payment provider's checkout. The 200 came back. Are you PCI DSS compliant?
      </Callout>

      <Prose>
        The honest answer is: it depends on how you built it. And most frontend engineers have never been told the difference.
      </Prose>

      <Prose>
        PCI DSS compliance is usually framed as a backend or infrastructure concern. But if your frontend ever touches — or could touch — cardholder data, you're in scope. The rules apply to your code too.
      </Prose>

      <Prose>
        This is what frontend engineers building card payment flows actually need to know.
      </Prose>

      <SectionHeader title="What PCI DSS Actually Is" />

      <Prose>
        The Payment Card Industry Data Security Standard (PCI DSS) is a set of security requirements established by the PCI Security Standards Council — a body founded by Visa, Mastercard, American Express, Discover, and JCB.
      </Prose>

      <Prose>
        It applies to any system that stores, processes, or transmits cardholder data. "Cardholder data" means the Primary Account Number (PAN — the 16-digit card number), the cardholder name, expiry date, service code, and the sensitive authentication data (CVV/CVC, PIN).
      </Prose>

      <Insight>
        <p>The standard has 12 top-level requirements covering network security, data protection, access control, monitoring, and regular testing. But your obligations depend heavily on your implementation scope — specifically, which Self-Assessment Questionnaire (SAQ) applies to you.</p>
      </Insight>

      <SectionHeader title="The Scope Question" />

      <Prose>
        This is the question that determines everything. Before writing a line of payment code, you need to understand which PCI scope level you're operating in.
      </Prose>

      <div className="grid gap-3 my-6">
        <ScopeCard
          saq="SAQ A"
          title="Fully outsourced"
          description="You redirect users to a hosted payment page, or embed an iframe that the payment provider controls entirely. Your frontend never touches card data. Lowest burden — roughly 22 requirements."
          burden="low"
        />
        <ScopeCard
          saq="SAQ A-EP"
          title="Partially outsourced"
          description="You serve the payment page but use hosted fields (iframes) for card entry. You control the page but not the card inputs. Medium burden — your server and delivery infrastructure matter."
          burden="medium"
        />
        <ScopeCard
          saq="SAQ D"
          title="Full handling"
          description="Your frontend or backend handles raw card data directly. Full 300+ control assessment. You almost certainly don't want this. If your code ever sees a PAN, you're here."
          burden="high"
        />
      </div>

      <Prose>
        If you're building the payment page and the user types a card number into an input field your code controls — you're in SAQ D scope. That's the category where card breaches happen. Aim for SAQ A.
      </Prose>

      <SectionHeader title="The Hosted Checkout Approach" />

      <Prose>
        The safest — and frankly, correct — approach for most applications is to never let card data touch your infrastructure at all.
      </Prose>

      <Prose>
        Hosted checkout works in two patterns:
      </Prose>

      <div className="grid sm:grid-cols-2 gap-3 my-6">
        <div className="rounded-lg border border-border p-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Redirect</p>
          <p className="text-sm text-foreground leading-relaxed">User leaves your site and lands on the provider's payment page. After payment, they're redirected back. You never see the card.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Hosted Fields</p>
          <p className="text-sm text-foreground leading-relaxed">Card inputs are iframes from the provider. They sit inside your design, but your JavaScript cannot read their contents. The provider tokenizes directly.</p>
        </div>
      </div>

      <Prose>
        What your frontend does in either case: collect non-sensitive data (amount, customer ID, billing address if needed), initiate a session or intent with your backend, receive a token or redirect, and handle the result.
      </Prose>

      <Insight title="Key rule">
        <p>Your JavaScript must never be able to read the card number, CVV, or full expiry from a hosted field iframe. If you can — you're out of scope for SAQ A.</p>
      </Insight>

      <SectionHeader title="What Frontend Engineers Must Never Do" />

      <Prose>
        These aren't just "bad practice." Each one is a PCI violation that can result in fines, loss of ability to process card payments, and — more importantly — real harm to real people.
      </Prose>

      <Warning>
        <ul className="space-y-2">
          {[
            "console.log(cardNumber) — card numbers in browser logs are a breach waiting to happen",
            "Sending card data to your own backend, even to forward it to a processor",
            "Storing anything card-related in localStorage, sessionStorage, or cookies",
            "Including card numbers in URL parameters (they end up in server logs, browser history, analytics)",
            "Loading payment forms over HTTP — everything must be HTTPS",
            "Including analytics scripts, chatbots, or A/B testing tools on pages where cards are entered",
            "Using dangerouslySetInnerHTML with URL-sourced content on payment flows (XSS risk)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
              <span className="w-1 h-1 rounded-full bg-red-400 mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Warning>

      <Prose>
        The third-party script restriction deserves extra attention. Magecart attacks — where attackers inject card-skimming code into payment pages via compromised third-party scripts — have stolen millions of card numbers from merchants who thought they were secure. Your first-party code can be clean and still get you breached through a widget you loaded.
      </Prose>

      <SectionHeader title="Security Requirements for Your Payment Page" />

      <Prose>
        Even with hosted checkout (SAQ A), your payment page has security obligations. The page that loads the payment iframe is still your responsibility.
      </Prose>

      <div className="space-y-4 my-6">
        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Content Security Policy</p>
          <Prose>CSP is your primary defense against XSS and script injection. For payment pages, restrict aggressively.</Prose>
          <CodeBlock>{`Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://js.stripe.com;
  frame-src 'self' https://js.stripe.com;
  connect-src 'self' https://api.stripe.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;`}
          </CodeBlock>
          <Prose>Notice there's no <Bold>unsafe-eval</Bold> and no wildcard origins. Any script that can run on your payment page is a potential attack vector.</Prose>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Subresource Integrity</p>
          <Prose>If you load any third-party script on a payment page — even the payment provider's own SDK — use SRI hashes to ensure the script hasn't been tampered with.</Prose>
          <CodeBlock>{`<script
  src="https://example.com/payment-sdk.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"
></script>`}
          </CodeBlock>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Additional headers</p>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-xs font-mono">
              <tbody>
                {[
                  ["Strict-Transport-Security", "max-age=31536000; includeSubDomains"],
                  ["X-Content-Type-Options", "nosniff"],
                  ["X-Frame-Options", "DENY"],
                  ["Referrer-Policy", "strict-origin-when-cross-origin"],
                ].map(([header, value]) => (
                  <tr key={header} className="border-b border-border last:border-0">
                    <td className="py-2.5 px-4 text-muted-foreground whitespace-nowrap">{header}</td>
                    <td className="py-2.5 px-4 text-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SectionHeader title="How Tokenization Works for Frontend Engineers" />

      <Prose>
        Tokenization is what makes the hosted model work. Here's what actually happens when a user submits a payment form:
      </Prose>

      <ol className="mt-4 space-y-3">
        {[
          "User enters card details into the provider's hosted iframe",
          "The iframe submits card data directly to the payment provider's servers — never touching your infrastructure",
          "The provider returns a one-time token (e.g. tok_xxxxxxxx) to your frontend JavaScript",
          "Your frontend sends this token — not the card — to your backend",
          "Your backend charges the token by calling the provider's API",
          "Your backend stores the customer ID, not the card number",
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="font-mono text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>

      <Insight title="The key insight">
        <p>A token is useless without the provider's secret key. It can't be charged by anyone except your backend with the correct credentials. You can safely pass it through URLs, log it, and store it — it's meaningless without the key.</p>
      </Insight>

      <SectionHeader title="What Fortify and Security Scanners Look For" />

      <Prose>
        If your codebase gets a Fortify scan (or similar static analysis), here's what the scanner will flag in payment-adjacent code:
      </Prose>

      <div className="space-y-2 my-4">
        {[
          { flag: "Hardcoded secrets", detail: "Secret keys, API tokens in source code — the scanner checks string literals and environment variable names. Publishable/public keys are fine; secret keys are not." },
          { flag: "Potential card data in logs", detail: "Any console.log, error logging, or network request that references variables named 'card', 'pan', 'cvv', 'expiry' near form fields." },
          { flag: "Mixed content", detail: "Loading any resource (scripts, iframes, API endpoints) over HTTP from an HTTPS page." },
          { flag: "Overly permissive CSP", detail: "unsafe-eval, unsafe-inline, or wildcard * in script-src — especially on pages with payment forms." },
          { flag: "Reflected XSS vectors", detail: "Success or failure pages that display URL parameters (returnUrl, message, status) without sanitization." },
          { flag: "Insecure direct object references", detail: "Payment confirmation pages that accept transaction IDs from the URL and display them without validation." },
        ].map(({ flag, detail }) => (
          <div key={flag} className="rounded-lg border border-border p-4">
            <p className="text-sm font-semibold text-foreground mb-1">{flag}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <SectionHeader title="Frontend Compliance Checklist" />

      <Prose>
        Use this before shipping any card payment feature. Each item maps to a real PCI DSS control.
      </Prose>

      <Checklist />

      <div className="mt-12 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold text-foreground tracking-tight mb-4">The Point of All This</h2>
        <Prose>
          PCI DSS isn't bureaucracy for its own sake. The rules exist because the internet showed us what happens without them — and what happens is that real people lose money, accounts get drained, and trust gets destroyed.
        </Prose>
        <Prose>
          Every requirement in this article traces back to an actual breach pattern. Card data in logs. Skimming scripts. Redirect vulnerabilities. These aren't theoretical — they're documented, they've happened to production systems at scale, and they'll happen again to someone who skipped the checklist.
        </Prose>
        <Prose>
          Understanding PCI scope before you write a line of payment code isn't optional. It shapes your architecture, your component design, your header configuration, and your third-party choices. Get it right early.
        </Prose>
      </div>
    </div>
  );
}
