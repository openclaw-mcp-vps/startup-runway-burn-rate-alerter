export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Startup Finance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get alerts before your startup<br />
          <span className="text-[#58a6ff]">runs out of money</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Runway Alerter connects to your bank accounts, calculates your burn rate daily, and sends increasingly urgent email &amp; SMS alerts as your runway shortens — so you always have time to act.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🏦</div>
            <h3 className="font-semibold text-white mb-1">Bank Integration</h3>
            <p className="text-sm text-[#8b949e]">Connects via Plaid to read transactions automatically — no manual entry.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📉</div>
            <h3 className="font-semibold text-white mb-1">Burn Rate Tracking</h3>
            <p className="text-sm text-[#8b949e]">Daily burn rate and runway calculations updated every 24 hours.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="font-semibold text-white mb-1">Escalating Alerts</h3>
            <p className="text-sm text-[#8b949e]">Email &amp; SMS alerts get more urgent as runway drops below 6, 3, and 1 month.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Founder Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Plaid bank account connection',
              'Daily burn rate & runway calculation',
              'Email alerts via Resend',
              'SMS alerts via Twilio',
              'Alerts at 6, 3, and 1 month runway',
              'Dashboard with runway chart',
              'Cancel anytime',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started — $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my bank?</h3>
            <p className="text-sm text-[#8b949e]">We use Plaid, the industry-standard bank integration used by thousands of fintech apps. Your credentials are never stored — Plaid handles authentication securely.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">When do I receive alerts?</h3>
            <p className="text-sm text-[#8b949e]">You get an initial alert when runway drops below 6 months, a more urgent one at 3 months, and a critical alert at 1 month. Alerts are sent via email and SMS so you never miss them.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your dashboard. No questions asked, no lock-in contracts. Your subscription ends at the current billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Runway Alerter. All rights reserved.
      </footer>
    </main>
  )
}
