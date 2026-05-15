import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Well Done Services Company" },
      { name: "description", content: "Découvrez nos projets : plateforme de gestion scolaire, sites web entreprises, applications web sur mesure." },
      { property: "og:title", content: "Nos réalisations — Well Done Services" },
      { property: "og:description", content: "Projets livrés pour des PME, écoles, ONG et administrations." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "Plateforme de gestion scolaire",
    category: "SaaS éducatif",
    description: "Solution complète pour la gestion des élèves, notes, bulletins et communication parents-école.",
    tech: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
    results: "Gain de 12h/semaine pour l'équipe administrative",
    accent: "from-teal to-mint",
  },
  {
    title: "Site web entreprise",
    category: "Site vitrine",
    description: "Refonte complète du site institutionnel avec optimisation SEO et formulaire de prospection.",
    tech: ["Next.js", "TailwindCSS", "CMS Headless"],
    results: "+180% de demandes de devis qualifiées",
    accent: "from-primary to-teal",
  },
  {
    title: "Application web de gestion",
    category: "Logiciel métier",
    description: "Outil interne pour le suivi de stock, des commandes et de la facturation multi-utilisateurs.",
    tech: ["React", "TypeScript", "Supabase"],
    results: "Automatisation de 80% des tâches manuelles",
    accent: "from-deep to-primary",
  },
  {
    title: "Portail e-commerce",
    category: "E-commerce",
    description: "Boutique en ligne avec paiement mobile (Wave, Orange Money) et gestion logistique intégrée.",
    tech: ["React", "Stripe", "PostgreSQL"],
    results: "Lancement réussi en moins de 8 semaines",
    accent: "from-teal to-primary",
  },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-hero-gradient text-deep-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-mint">Réalisations</p>
          <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Des projets <span className="text-gradient">livrés</span>, des résultats concrets.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-deep-foreground/80">
            Chaque projet est une histoire de collaboration, d'écoute et de rigueur technique.
            Voici un aperçu de nos derniers travaux.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className={`relative h-48 bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-deep-foreground">
                  <span className="rounded-full bg-deep/30 px-3 py-1 text-xs font-medium backdrop-blur">{p.category}</span>
                  <ExternalLink size={20} className="opacity-70" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-lg border-l-2 border-teal bg-mint/10 px-4 py-3 text-sm font-medium text-foreground">
                  {p.results}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold">Votre projet pourrait être le prochain.</h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 font-semibold text-deep shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            Discutons-en <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
