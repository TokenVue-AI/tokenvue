import { motion } from "framer-motion";
import { SectionHeader } from "./Features";
import { SITE_NAME } from "@/lib/site";

export function Architecture() {
  const providers = ["OpenAI", "Anthropic", "Gemini", "Mistral", "DeepSeek"];
  return (
    <section id="architecture" className="relative py-28">
      <SectionHeader
        eyebrow="Architecture"
        title={<>One gateway. <span className="text-gradient">Every provider.</span></>}
        sub="Smart routing, fallback chains, load balancing and multi-region failover — wired into a single declarative config."
      />

      <div className="relative mx-auto mt-16 max-w-6xl px-4">
        <div className="glass ring-gradient rounded-3xl p-6 sm:p-10 overflow-hidden">
          <svg viewBox="0 0 1000 360" className="w-full h-auto">
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
            </defs>

            {/* Client nodes */}
            {["Web", "Mobile", "Backend"].map((c, i) => {
              const y = 70 + i * 110;
              return (
                <g key={c}>
                  <rect x="40" y={y - 24} width="120" height="48" rx="10" fill="oklch(0.2 0.03 265)" stroke="oklch(1 0 0 / 0.1)" />
                  <text x="100" y={y + 5} textAnchor="middle" fill="oklch(0.97 0.01 250)" fontSize="13" fontFamily="ui-sans-serif">{c}</text>
                  <path d={`M160 ${y} C 280 ${y}, 340 180, 460 180`} stroke="url(#flow)" strokeWidth="1.5" fill="none" className="animate-dash" />
                </g>
              );
            })}

            {/* tokenvue node */}
            <rect x="430" y="130" width="160" height="100" rx="16" fill="oklch(0.18 0.03 265)" stroke="oklch(0.82 0.16 200 / 0.5)" />
            <rect x="430" y="130" width="160" height="100" rx="16" fill="none" stroke="oklch(0.82 0.16 200)" strokeOpacity="0.2" filter="url(#glow)" />
            <text x="510" y="170" textAnchor="middle" fill="oklch(0.97 0.01 250)" fontSize="14" fontWeight="600">{SITE_NAME}</text>
            <text x="510" y="190" textAnchor="middle" fill="oklch(0.82 0.16 200)" fontSize="10" fontFamily="ui-monospace">edge · multi-region</text>
            <text x="510" y="210" textAnchor="middle" fill="oklch(0.68 0.02 260)" fontSize="10">routing · guardrails · cache</text>

            {/* Provider nodes */}
            {providers.map((p, i) => {
              const y = 30 + i * 70;
              return (
                <g key={p}>
                  <path d={`M590 180 C 720 180, 760 ${y + 18}, 840 ${y + 18}`} stroke="url(#flow)" strokeWidth="1.5" fill="none" className="animate-dash" style={{ animationDelay: `${i * 0.4}s` }} />
                  <rect x="840" y={y} width="120" height="36" rx="8" fill="oklch(0.2 0.03 265)" stroke="oklch(1 0 0 / 0.1)" />
                  <text x="900" y={y + 22} textAnchor="middle" fill="oklch(0.97 0.01 250)" fontSize="12">{p}</text>
                </g>
              );
            })}
          </svg>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            {[
              { l: "Smart routing", v: "By cost · latency · context" },
              { l: "Fallback chains", v: "5-deep · sub-second" },
              { l: "Load balancing", v: "Token-weighted" },
              { l: "Multi-region", v: "US · EU · APAC" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-3">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                <div className="mt-1 text-sm font-semibold">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code sample */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 glass rounded-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-hairline">
            <span className="text-[11px] font-mono text-muted-foreground">routes.config.ts</span>
            <span className="text-[10px] font-mono text-emerald-glow">drop-in OpenAI SDK compatible</span>
          </div>
          <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto"><code className="text-foreground/90">
{`gateway.route("chat-completions", {
  primary:  models.openai("gpt-4o"),
  fallback: [models.anthropic("claude-3.5-sonnet"), models.google("gemini-1.5-pro")],
  guardrails: [pii.redact(), prompts.injection(), toxicity.block({ threshold: 0.8 })],
  budget:   budgets.team("growth", { monthlyUsd: 12_000, alertAt: 0.8 }),
  cache:    cache.semantic({ ttl: "1h", similarity: 0.92 }),
});`}
          </code></pre>
        </motion.div>
      </div>
    </section>
  );
}
