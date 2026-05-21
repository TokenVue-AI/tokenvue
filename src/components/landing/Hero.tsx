import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Zap, Shield } from "lucide-react";
import { APP_URL, SITE_NAME } from "@/lib/site";

const PRODUCT_HUNT_BADGE_URL =
  "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1152336&theme=light&t=1779352510782";
const PRODUCT_HUNT_URL =
  "https://www.producthunt.com/products/tokenvue?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-tokenvue";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {/* Animated network lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="linegrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${80 + i * 70} Q 400 ${30 + i * 60} 800 ${100 + i * 65} T 1600 ${50 + i * 70}`}
            stroke="url(#linegrad)"
            strokeWidth="1"
            fill="none"
            className="animate-dash"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 glass text-xs font-mono text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow animate-pulse-glow" />
          NEW · Multi-region failover & token-aware routing
          <ArrowRight className="h-3 w-3" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight"
        >
          Control every <br className="hidden sm:block" />
          <span className="text-gradient">AI request</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Secure, route, monitor, and optimize traffic across OpenAI, Claude, Gemini, and every
          major LLM — from a single enterprise gateway built for production scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={APP_URL}
            className="group inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition shadow-elevated"
          >
            Start building
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:border-primary/40 transition"
          >
            Book a demo
          </a>
        </motion.div>

        <motion.a
          href={PRODUCT_HUNT_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 inline-flex overflow-hidden rounded-md transition hover:-translate-y-0.5 hover:opacity-90"
        >
          <img
            alt="TokenVue - AI Infrastructure Control Plane | Product Hunt"
            width="250"
            height="54"
            src={PRODUCT_HUNT_BADGE_URL}
          />
        </motion.a>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
            Compatible with
          </p>
          <div className="mt-5 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-80">
            {["OpenAI", "Anthropic", "Google", "Meta", "Mistral", "DeepSeek", "Cohere"].map((b) => (
              <span
                key={b}
                className="text-sm font-semibold tracking-tight text-muted-foreground hover:text-foreground transition-colors"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Floating dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20 mx-auto max-w-5xl"
        >
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative ring-gradient rounded-2xl glow-cyan">
      <div className="glass rounded-2xl p-3 sm:p-5 shadow-elevated">
        {/* Top bar */}
        <div className="flex items-center justify-between px-2 pb-3 border-b border-hairline">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-glow/70" />
          </div>
          <div className="text-[11px] font-mono text-muted-foreground">
            {SITE_NAME}.in / dashboard / production
          </div>
          <div className="text-[11px] font-mono text-emerald-glow flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow animate-pulse-glow" /> 99.998%
            uptime
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 mt-4">
          {/* Sidebar */}
          <div className="hidden md:flex col-span-2 flex-col gap-1.5 text-xs text-muted-foreground">
            {[
              "Overview",
              "Gateways",
              "Routes",
              "Guardrails",
              "Analytics",
              "Budgets",
              "Logs",
              "Team",
            ].map((l, i) => (
              <div
                key={l}
                className={`px-2.5 py-1.5 rounded-md ${i === 0 ? "bg-secondary text-foreground" : ""}`}
              >
                {l}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-12 md:col-span-10 space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  l: "Requests / min",
                  v: "184,203",
                  d: "+12.4%",
                  c: "text-emerald-glow",
                  icon: Activity,
                },
                { l: "Avg latency", v: "184ms", d: "-23ms", c: "text-emerald-glow", icon: Zap },
                { l: "Tokens today", v: "92.4M", d: "+4.1%", c: "text-primary", icon: Sparkles },
                { l: "Threats blocked", v: "1,284", d: "live", c: "text-accent", icon: Shield },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-3 text-left">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span>{s.l}</span>
                    <s.icon className="h-3 w-3" />
                  </div>
                  <div className="mt-1.5 text-lg font-semibold tracking-tight">{s.v}</div>
                  <div className={`text-[11px] font-mono ${s.c}`}>{s.d}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="glass rounded-xl p-4 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Token throughput · last 24h</div>
                  <div className="flex gap-1.5 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-primary/15 text-primary">GPT-4o</span>
                    <span className="px-1.5 py-0.5 rounded bg-accent/15 text-accent">Claude</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-glow/15 text-emerald-glow">
                      Gemini
                    </span>
                  </div>
                </div>
                <ChartArea />
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-muted-foreground">Provider routing</div>
                <div className="mt-3 space-y-2">
                  {[
                    { n: "OpenAI", p: 52, c: "bg-primary" },
                    { n: "Anthropic", p: 28, c: "bg-accent" },
                    { n: "Gemini", p: 14, c: "bg-emerald-glow" },
                    { n: "DeepSeek", p: 6, c: "bg-chart-4" },
                  ].map((r) => (
                    <div key={r.n}>
                      <div className="flex justify-between text-[11px]">
                        <span>{r.n}</span>
                        <span className="font-mono text-muted-foreground">{r.p}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden mt-1">
                        <div className={`h-full ${r.c}`} style={{ width: `${r.p}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartArea() {
  const points = [
    12, 18, 14, 22, 28, 24, 32, 30, 38, 34, 44, 40, 48, 56, 52, 62, 58, 68, 72, 66, 78, 82, 76, 88,
  ];
  const max = Math.max(...points);
  const w = 600,
    h = 120,
    step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full h-32">
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#area)" />
      <path d={path} stroke="oklch(0.82 0.16 200)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
