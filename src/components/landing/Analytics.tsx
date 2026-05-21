import { Fragment } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Features";

export function Analytics() {
  return (
    <section className="relative py-28">
      <SectionHeader
        eyebrow="Observability"
        title={<>Every token, <span className="text-gradient">accounted for</span></>}
        sub="Heatmaps, traces, cost forecasts — designed for SREs and finance teams who need real answers, not dashboards."
      />

      <div className="relative mx-auto mt-16 max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:col-span-2 glass rounded-2xl p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Latency heatmap · p95 by region</div>
              <div className="text-xs text-muted-foreground">last 24h · ms</div>
            </div>
            <div className="text-[10px] font-mono text-emerald-glow">↘ 18% week over week</div>
          </div>
          <Heatmap />
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-5"
        >
          <div className="text-sm font-semibold">Cost-saving suggestions</div>
          <div className="text-xs text-muted-foreground">Auto-detected · 3 opportunities</div>
          <div className="mt-4 space-y-3">
            {[
              { t: "Route /summarize to gpt-4o-mini", d: "−$2,180 / mo · same quality at 0.94 eval" },
              { t: "Enable semantic cache on /faq", d: "32% hit rate observed in shadow mode" },
              { t: "Cap retries on /image-describe", d: "Spike of 12k retries from one tenant" },
            ].map((s) => (
              <div key={s.t} className="rounded-lg p-3 bg-secondary/60 border border-hairline">
                <div className="text-xs font-medium">{s.t}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{s.d}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trace */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-2xl p-5"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Request trace · req_8aE2…f1</div>
            <div className="font-mono text-[11px] text-muted-foreground">214ms · 1,284 tokens · $0.0021</div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { l: "ingress.edge.us-east", w: 4, c: "bg-muted" },
              { l: "guardrails.pii.redact", w: 8, c: "bg-accent" },
              { l: "guardrails.prompt.injection", w: 6, c: "bg-accent" },
              { l: "router.choose:openai/gpt-4o", w: 3, c: "bg-primary" },
              { l: "provider.openai.completion", w: 70, c: "bg-primary/70" },
              { l: "guardrails.toxicity.scan", w: 5, c: "bg-accent" },
              { l: "egress.response", w: 4, c: "bg-muted" },
            ].map((row, i) => (
              <div key={row.l} className="flex items-center gap-3 text-[11px] font-mono">
                <div className="w-56 truncate text-muted-foreground">{row.l}</div>
                <div className="flex-1 h-3 rounded-sm bg-secondary/50 overflow-hidden flex">
                  <div style={{ width: `${i * 2}%` }} />
                  <div className={`${row.c} h-full`} style={{ width: `${row.w}%` }} />
                </div>
                <div className="w-12 text-right text-muted-foreground">{row.w * 3}ms</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Heatmap() {
  const cols = 24, rows = 5;
  const labels = ["us-east", "us-west", "eu-west", "eu-north", "ap-south"];
  return (
    <div className="mt-4">
      <div className="grid" style={{ gridTemplateColumns: `80px repeat(${cols}, 1fr)`, gap: "3px" }}>
        {Array.from({ length: rows }).map((_, r) => (
          <Fragment key={r}>
            <div className="text-[10px] font-mono text-muted-foreground self-center">{labels[r]}</div>
            {Array.from({ length: cols }).map((_, c) => {
              const v = Math.abs(Math.sin(r * 1.7 + c * 0.6) + Math.cos(c * 0.3 + r));
              const intensity = Math.min(1, v / 2);
              return (
                <div
                  key={`${r}-${c}`}
                  className="aspect-square rounded-sm"
                  style={{
                    background: `color-mix(in oklab, oklch(0.82 0.16 200) ${intensity * 90}%, oklch(0.18 0.03 265))`,
                    boxShadow: intensity > 0.7 ? "0 0 8px oklch(0.82 0.16 200 / 0.5)" : undefined,
                  }}
                />
              );
            })}
          </Fragment>
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] font-mono text-muted-foreground">
        <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>now</span>
      </div>
    </div>
  );
}
