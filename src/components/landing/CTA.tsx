import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  APP_URL,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  SITE_NAME,
  SUPPORT_EMAIL,
  SUPPORT_MAILTO,
} from "@/lib/site";

export function CTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="relative mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative ring-gradient glass-strong rounded-3xl p-10 sm:p-16 text-center overflow-hidden glow-violet"
        >
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

          <h2 className="relative text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            Build AI applications without <br className="hidden sm:block" />
            <span className="text-gradient">infrastructure chaos</span>
          </h2>
          <p className="relative mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Drop in {SITE_NAME} in 5 minutes. Replace your routing, retries, budgets and audit logs
            with one battle-tested gateway.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition shadow-elevated"
            >
              Start free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition"
            >
              Contact sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { t: "Platform", l: ["Gateway", "Guardrails", "Analytics", "Routing", "Caching"] },
    { t: "Developers", l: ["Documentation", "API reference", "SDKs", "Status", "Changelog"] },
    { t: "Company", l: ["About", "Customers", "Security", "Careers", "Press"] },
    { t: "Legal", l: ["Privacy", "Terms", "DPA", "Subprocessors", "SOC 2"] },
  ];
  return (
    <footer className="relative border-t border-hairline mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 grid grid-cols-2 md:grid-cols-6 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-accent" />
            <span className="font-semibold tracking-tight">{SITE_NAME}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The control plane for production AI infrastructure.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a
              href={CONTACT_MAILTO}
              className="block text-foreground/80 transition-colors hover:text-foreground"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={SUPPORT_MAILTO}
              className="block text-foreground/80 transition-colors hover:text-foreground"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-mono text-emerald-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow animate-pulse-glow" /> All
            systems normal
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {c.t}
            </div>
            <ul className="mt-3 space-y-2">
              {c.l.map((i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {SITE_NAME}, Inc.
          </div>
          <div className="font-mono">SOC 2 Type II · GDPR · HIPAA-ready</div>
        </div>
      </div>
    </footer>
  );
}
