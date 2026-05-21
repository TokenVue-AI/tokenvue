import { motion } from "framer-motion";
import { SectionHeader } from "./Features";
import { SITE_NAME } from "@/lib/site";

const quotes = [
  {
    q: `${SITE_NAME} replaced 4,000 lines of routing, retry and budget glue. Our p95 dropped 30% the week we shipped it.`,
    n: "Lena Park", r: "Staff Engineer · Helix AI",
  },
  {
    q: "We finally have a single audit trail for every prompt, every redaction, every model decision. Compliance signed off in a week.",
    n: "Marcus Vogel", r: "CTO · Nordica Bank",
  },
  {
    q: `Our agents call seven providers across three regions. ${SITE_NAME} makes it look like one endpoint — and one bill.`,
    n: "Priya Anand", r: "Platform Lead · Foundry Robotics",
  },
  {
    q: "The guardrail library caught a prompt injection in production on day two. That alone paid for the year.",
    n: "Theo Almeida", r: "Head of Security · Lumen Health",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <SectionHeader
        eyebrow="Customers"
        title={<>Trusted by teams shipping <span className="text-gradient">AI in production</span></>}
        sub={`From regulated enterprises to fast-moving AI startups, teams use ${SITE_NAME} to keep their AI stack predictable.`}
      />

      <div className="relative mx-auto mt-16 max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {quotes.map((t, i) => (
          <motion.figure
            key={t.n}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors"
          >
            <blockquote className="text-base sm:text-lg leading-relaxed tracking-tight">
              "{t.q}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 grid place-items-center text-xs font-semibold">
                {t.n.split(" ").map((w) => w[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-medium">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
