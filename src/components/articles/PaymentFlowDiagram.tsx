export function PaymentFlowDiagram() {
  return (
    <figure className="my-10 rounded-xl overflow-hidden select-none" aria-label="Payment system architecture diagram">
      <div className="w-full overflow-x-auto" style={{ background: "#0f0f0f" }}>
        <svg
          viewBox="0 0 900 310"
          width="900"
          height="310"
          xmlns="http://www.w3.org/2000/svg"
          style={{ minWidth: "620px", display: "block" }}
        >
          <rect width="900" height="310" fill="#0f0f0f" />

          <path
            d="M208 52 Q208 34 220 34 Q222 24 234 24 Q246 24 250 34 Q264 34 264 46 Q264 52 256 54 L208 54 Z"
            fill="none"
            stroke="#f59e0b"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <text x="236" y="70" fill="#6b7280" fontSize="10" textAnchor="middle" fontFamily="system-ui">Cloud infrastructure</text>
          <rect x="224" y="76" width="24" height="14" rx="4" fill="none" stroke="#374151" strokeWidth="1" />
          <text x="236" y="86" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace,monospace">API</text>
          <line x1="236" y1="91" x2="236" y2="120" stroke="#374151" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="236" y1="120" x2="280" y2="148" stroke="#374151" strokeWidth="1" strokeDasharray="4,3" />
          <polygon points="277,145 285,150 279,155" fill="#374151" />

          <line x1="688" y1="18" x2="688" y2="50" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="714" y1="18" x2="714" y2="50" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1.5" />
          <ellipse cx="701" cy="18" rx="13" ry="5" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1.5" />
          <ellipse cx="701" cy="50" rx="13" ry="5" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1.5" />
          <text x="701" y="68" fill="#6b7280" fontSize="10" textAnchor="middle" fontFamily="system-ui">Encrypted database</text>
          <rect x="689" y="74" width="24" height="14" rx="4" fill="none" stroke="#374151" strokeWidth="1" />
          <text x="701" y="84" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace,monospace">API</text>
          <line x1="701" y1="89" x2="701" y2="120" stroke="#374151" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="701" y1="120" x2="590" y2="150" stroke="#374151" strokeWidth="1" strokeDasharray="4,3" />
          <polygon points="593,147 583,151 589,156" fill="#374151" />

          <rect x="12" y="140" width="46" height="84" rx="9" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <rect x="22" y="147" width="26" height="3" rx="1.5" fill="#f59e0b" fillOpacity="0.3" />
          <circle cx="35" cy="168" r="7" fill="#f59e0b" />
          <circle cx="35" cy="212" r="4" fill="none" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1" />

          <line x1="58" y1="182" x2="84" y2="182" stroke="#374151" strokeWidth="1.5" />
          <polygon points="82,178 90,182 82,186" fill="#374151" />

          <circle cx="122" cy="182" r="32" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <rect x="112" y="179" width="20" height="16" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M116 179 Q116 170 122 170 Q128 170 128 179" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="122" cy="188" r="2.5" fill="#f59e0b" />
          <text x="122" y="230" fill="#e5e7eb" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">Authentication</text>
          <text x="122" y="244" fill="#6b7280" fontSize="9.5" textAnchor="middle" fontFamily="system-ui">Verifies identity</text>

          <rect x="164" y="177" width="10" height="8" rx="2" fill="none" stroke="#374151" strokeWidth="1" />
          <path d="M166 177 Q166 173 169 173 Q172 173 172 177" fill="none" stroke="#374151" strokeWidth="1" />

          <line x1="154" y1="182" x2="194" y2="182" stroke="#374151" strokeWidth="1.5" />
          <polygon points="192,178 200,182 192,186" fill="#374151" />

          <text x="254" y="134" fill="#6b7280" fontSize="9.5" textAnchor="middle" fontFamily="system-ui">Approves transaction</text>
          <circle cx="254" cy="166" r="28" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M247 157 L247 170 Q247 178 254 180 Q261 178 261 170 L261 157 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <polyline points="250,165 254,170 261,162" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="254" y="210" fill="#e5e7eb" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">Authorization</text>

          <rect x="293" y="176" width="10" height="8" rx="2" fill="none" stroke="#374151" strokeWidth="1" />
          <path d="M295 176 Q295 172 298 172 Q301 172 301 176" fill="none" stroke="#374151" strokeWidth="1" />

          <line x1="282" y1="166" x2="340" y2="166" stroke="#374151" strokeWidth="1.5" />
          <polygon points="338,162 346,166 338,170" fill="#374151" />

          <rect x="346" y="132" width="148" height="112" rx="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="420" y="157" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">Ledger</text>
          <text x="420" y="173" fill="#d1d5db" fontSize="9.5" textAnchor="middle" fontFamily="system-ui">Immutable &amp; shared</text>
          <rect x="364" y="184" width="30" height="22" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <rect x="405" y="184" width="30" height="22" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <rect x="446" y="184" width="30" height="22" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="394" y1="195" x2="405" y2="195" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="435" y1="195" x2="446" y2="195" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="368" y1="192" x2="390" y2="192" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="1" />
          <line x1="368" y1="198" x2="390" y2="198" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="1" />
          <line x1="409" y1="192" x2="431" y2="192" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="1" />
          <line x1="409" y1="198" x2="431" y2="198" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="1" />
          <line x1="450" y1="192" x2="472" y2="192" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="1" />
          <line x1="450" y1="198" x2="472" y2="198" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="1" />
          <text x="420" y="225" fill="#6b7280" fontSize="9.5" textAnchor="middle" fontFamily="system-ui">Each block verified</text>

          <rect x="504" y="176" width="10" height="8" rx="2" fill="none" stroke="#374151" strokeWidth="1" />
          <path d="M506 176 Q506 172 509 172 Q512 172 512 176" fill="none" stroke="#374151" strokeWidth="1" />

          <line x1="494" y1="188" x2="524" y2="188" stroke="#374151" strokeWidth="1.5" />
          <polygon points="522,184 530,188 522,192" fill="#374151" />

          <text x="568" y="134" fill="#6b7280" fontSize="9.5" textAnchor="middle" fontFamily="system-ui">Transfers funds</text>
          <circle cx="568" cy="167" r="26" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <ellipse cx="568" cy="160" rx="11" ry="4" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <ellipse cx="568" cy="166" rx="11" ry="4" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <ellipse cx="568" cy="172" rx="11" ry="4" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="557" y1="160" x2="557" y2="172" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="579" y1="160" x2="579" y2="172" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="568" y="210" fill="#e5e7eb" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">Settlement</text>

          <line x1="594" y1="167" x2="626" y2="180" stroke="#374151" strokeWidth="1.5" />
          <polygon points="623,178 633,182 625,186" fill="#374151" />

          <circle cx="658" cy="186" r="26" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M650 189 Q650 178 658 178 Q666 178 666 189 L668 195 L648 195 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <rect x="654" y="195" width="8" height="2" rx="1" fill="#f59e0b" />
          <polyline points="672,174 675,179 682,171" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="658" y="228" fill="#e5e7eb" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">Notify</text>
          <text x="658" y="242" fill="#6b7280" fontSize="9.5" textAnchor="middle" fontFamily="system-ui">Confirms completion</text>

          <line x1="684" y1="186" x2="834" y2="186" stroke="#374151" strokeWidth="1.5" />
          <polygon points="832,182 842,186 832,190" fill="#374151" />

          <rect x="842" y="140" width="46" height="84" rx="9" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <rect x="852" y="147" width="26" height="3" rx="1.5" fill="#f59e0b" fillOpacity="0.3" />
          <circle cx="865" cy="212" r="4" fill="none" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1" />
        </svg>
      </div>
      <figcaption className="px-6 py-3 text-xs text-center font-mono" style={{ background: "#0f0f0f", color: "#4b5563", borderTop: "1px solid #1f2937" }}>
        From authentication to settlement — how every payment moves through the system
      </figcaption>
    </figure>
  );
}
