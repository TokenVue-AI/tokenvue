import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { APP_URL, DOCS_URL, SITE_NAME } from "@/lib/site";

export function Navbar() {
  const items = [
    { label: "Platform", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "Architecture", href: "#architecture" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: DOCS_URL },
  ];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass-strong rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt={`${SITE_NAME} logo`} className="h-8 w-8 rounded-lg invert" />
            <span className="font-display text-base font-semibold tracking-tight">{SITE_NAME}</span>
            <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground hidden sm:inline">v2.4 · prod</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            {items.map((i) => (
              <a key={i.label} href={i.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {i.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={APP_URL} className="hidden sm:inline-block text-sm text-muted-foreground hover:text-foreground px-3 py-1.5">Sign in</a>
            <a href={APP_URL} className="text-sm font-medium px-4 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition">
              Start free
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
