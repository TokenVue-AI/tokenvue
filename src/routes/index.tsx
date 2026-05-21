import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Security } from "@/components/landing/Security";
import { Architecture } from "@/components/landing/Architecture";
import { Analytics } from "@/components/landing/Analytics";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA, Footer } from "@/components/landing/CTA";
import { OG_IMAGE_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/site";

const HOME_TITLE = `${SITE_NAME} - AI Gateway for Routing, Guardrails and LLM Analytics`;
const HOME_DESCRIPTION =
  "Route, secure, monitor, and control costs for OpenAI, Claude, Gemini, Mistral, DeepSeek, Cohere and other LLM providers from one gateway.";
const HOME_FEATURES = [
  "Multi-LLM routing",
  "Virtual API keys",
  "AI guardrails",
  "Prompt injection protection",
  "Provider failover",
  "Usage analytics",
  "Budget and cost tracking",
  "Team access controls",
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { name: "keywords", content: SITE_KEYWORDS.join(", ") },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE_URL },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: SITE_NAME,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          url: SITE_URL,
          description: HOME_DESCRIPTION,
          featureList: HOME_FEATURES,
          offers: [
            {
              "@type": "Offer",
              name: "Free",
              price: "0",
              priceCurrency: "USD",
              url: `${SITE_URL}/#pricing`,
            },
            {
              "@type": "Offer",
              name: "Pro",
              price: "49",
              priceCurrency: "USD",
              url: `${SITE_URL}/#pricing`,
            },
            {
              "@type": "Offer",
              name: "Team",
              price: "299",
              priceCurrency: "USD",
              url: `${SITE_URL}/#pricing`,
            },
          ],
        },
      },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "alternate", href: SITE_URL, hrefLang: "en" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <Security />
      <Analytics />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
