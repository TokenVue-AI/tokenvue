import { motion } from "framer-motion";
import { KeyRound, ShieldCheck, GitBranch, Activity, BarChart3, Wallet, Gauge, Users } from "lucide-react";

const features = [
  { icon: KeyRound, title: "Virtual API Keys", desc: "Issue scoped, revocable keys per project, environment, or customer with built-in usage policies." },
  { icon: ShieldCheck, title: "AI Guardrails", desc: "Block prompt injections, PII leaks, and toxic outputs with policy enforcement at the edge." },
  { icon: GitBranch, title: "Multi-LLM Routing", desc: "Route by latency, cost, capability, or context length across OpenAI, Claude, Gemini and more." },
  { icon: Activity, title: "Automatic Failover", desc: "Sub-second failover with retry budgets and circuit breakers across providers and regions." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Token usage, latency heatmaps, request tracing — drilled down per model, route, and key." },
  { icon: Wallet, title: "Budget & Cost Tracking", desc: "Hard and soft budgets per team. Alerts, throttles, and forecasts before invoices spike." },
  { icon: Gauge, title: "Rate Limiting", desc: "Token-aware throttles, burst protection, and fairness across tenants — not just RPM caps." },
  { icon: Users, title: "Org & Team Controls", desc: "RBAC, SSO, SCIM, and audit-grade access logs for every key, route, and policy change." },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <SectionHeader
        eyebrow="Platform"
        title={<>The control plane for <span className="text-gradient">production AI</span></>}
        sub="Every layer your team needs between application code and frontier models — observability, security, routing and governance, in one gateway."
      />

      <div className="relative mx-auto mt-16 max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="group relative glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
          >
            <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-10 w-10 rounded-lg grid place-items-center bg-secondary border border-hairline group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-base font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 text-center">
      <motion.span
        initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-primary"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
        className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="mt-4 text-base text-muted-foreground leading-relaxed"
      >
        {sub}
      </motion.p>
    </div>
  );
}
