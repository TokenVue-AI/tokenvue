import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, AlertOctagon, FileText, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./Features";

const items = [
  { icon: EyeOff, t: "PII Redaction", d: "Detect and redact emails, names, secrets, and 40+ PII types before they reach a model." },
  { icon: ShieldCheck, t: "Prompt Injection", d: "Heuristic + LLM-judge defenses against jailbreaks, exfiltration, and tool abuse." },
  { icon: AlertOctagon, t: "Toxicity Detection", d: "Score and block harmful content in real time with configurable thresholds." },
  { icon: FileText, t: "Audit Logs", d: "Tamper-evident logs with request, redaction, and policy decision trails." },
  { icon: BadgeCheck, t: "Compliance Ready", d: "SOC 2 Type II, GDPR, and HIPAA-ready controls. EU and US data residency." },
];

export function Security() {
  return (
    <section id="security" className="relative py-28">
      <SectionHeader
        eyebrow="Security"
        title={<>An <span className="text-gradient">AI firewall</span> in front of every model</>}
        sub="Stop prompt injections, PII leakage, and toxic outputs before they ever leave your perimeter — with policies that compile down to edge enforcement."
      />

      <div className="relative mx-auto mt-16 max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Visualization */}
        <div className="relative h-[420px] rounded-3xl glass overflow-hidden ring-gradient">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 rounded-full bg-accent/25 blur-2xl" />
          </div>
          {/* Concentric rings */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 420">
            {[60, 110, 160, 210].map((r, i) => (
              <circle key={r} cx="200" cy="210" r={r}
                fill="none" stroke="oklch(0.82 0.16 200)" strokeOpacity={0.25 - i*0.04} strokeWidth="1"
                strokeDasharray="3 6">
                <animateTransform attributeName="transform" type="rotate"
                  from={`${i%2 ? 0 : 360} 200 210`} to={`${i%2 ? 360 : 0} 200 210`} dur={`${20+i*4}s`} repeatCount="indefinite" />
              </circle>
            ))}
            <g>
              {[0, 60, 120, 180, 240, 300].map((a) => {
                const rad = (a * Math.PI) / 180;
                const x = 200 + Math.cos(rad) * 160;
                const y = 210 + Math.sin(rad) * 160;
                return <circle key={a} cx={x} cy={y} r="3" fill="oklch(0.82 0.16 200)" className="animate-pulse-glow" />;
              })}
            </g>
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
            <div className="h-20 w-20 rounded-2xl glass-strong grid place-items-center glow-cyan">
              <ShieldCheck className="h-9 w-9 text-primary" />
            </div>
          </div>
          {/* Live log */}
          <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl p-3 font-mono text-[11px] space-y-1">
            <div className="flex justify-between text-muted-foreground"><span>policy.decision</span><span>just now</span></div>
            <div className="text-destructive">⨯ blocked · prompt_injection · /v1/chat/completions</div>
            <div className="text-chart-4">! redacted · pii.email · 3 instances</div>
            <div className="text-emerald-glow">✓ allowed · policy:default · 184ms</div>
          </div>
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-4 hover:border-primary/30 transition-colors"
            >
              <it.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm font-semibold">{it.t}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
