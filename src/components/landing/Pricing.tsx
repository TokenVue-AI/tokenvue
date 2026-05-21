import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "./Features";
import { APP_URL, SITE_NAME } from "@/lib/site";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    desc: `Indie developers, hobby projects, MVPs, and teams evaluating ${SITE_NAME}.`,
    features: [
      "2 Virtual API Keys",
      "2 LLM Providers",
      "OpenAI-compatible proxy API",
      "Basic usage analytics",
      "Request logs (24h retention)",
      "Basic provider failover",
      "Community support",
      "100K requests/month",
      "Basic rate limiting",
      "Standard API access",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    desc: "AI startups, SaaS products, and production AI applications.",
    features: [
      "Unlimited Virtual API Keys",
      "Unlimited Providers",
      "Advanced Auto Router",
      "Budget & latency-aware routing",
      "Retry budgets & circuit breakers",
      "Fallback chains",
      "Advanced analytics & cost insights",
      "30-day request logs",
      "Webhook alerts",
      "Priority support",
      "PII Redaction & Prompt Injection Protection",
      "Toxicity Filtering",
      "Keyword Filtering",
      "2 team members",
      "2M requests/month",
    ],
    cta: "Start trial",
    featured: true,
  },
  {
    name: "Team",
    price: "$299",
    period: "/mo",
    desc: "Growing companies, internal AI platforms, and multi-team organizations.",
    features: [
      "Unlimited team members",
      "Organization workspaces",
      "RBAC & permissions",
      "Audit logs",
      "Multi-environment configs",
      "Advanced routing policies",
      "Region-based routing",
      "Self-hosted orchestration",
      "Provider health monitoring",
      "Team-level analytics",
      "Cost allocation by project/team",
      "90-day log retention",
      "Dedicated Slack/email support",
      "Higher API rate limits",
      "20M requests/month",
    ],
    cta: "Start trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Large-scale AI infrastructure, compliance-sensitive orgs, and on-prem deployments.",
    features: [
      "Unlimited scale",
      "Custom SLAs",
      "Dedicated support",
      "Private cloud / on-prem deployment",
      "Custom integrations",
      "Dedicated routing clusters",
      "Advanced compliance & governance",
      "Custom retention policies",
      "Dedicated account management",
      "SSO / SAML",
      "Priority routing infrastructure",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <SectionHeader
        eyebrow="Pricing"
        title={<>Control AI infrastructure <span className="text-gradient">without infrastructure chaos</span></>}
        sub="Secure, route, monitor, and optimize AI traffic across every major LLM provider from one intelligent gateway."
      />

      <div className="relative mx-auto mt-16 max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-2xl p-6 ${t.featured ? "ring-gradient glass-strong glow-violet" : "glass"}`}
          >
            {t.featured && (
              <div className="absolute -top-3 left-6 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Most popular
              </div>
            )}
            <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.name}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <div className="text-4xl font-semibold tracking-tight">{t.price}</div>
              <div className="text-sm text-muted-foreground">{t.period}</div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <a
              href={APP_URL}
              className={`mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                t.featured
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "bg-secondary text-foreground hover:bg-secondary/70 border border-hairline"
              }`}
            >
              {t.cta}
            </a>
            <ul className="mt-6 space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
