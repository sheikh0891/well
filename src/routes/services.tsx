import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Database, Network, GraduationCap, ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Well Done Services Company" },
      { name: "description", content: "Développement web, ERP, CRM, maintenance informatique et plateforme de gestion scolaire." },
      { property: "og:title", content: "Nos services IT — Well Done Services" },
      { property: "og:description", content: "Solutions sur mesure pour PME, écoles, ONG et administrations." },
    ],
  }),
  component: ServicesPage,
});

const blocks = [
  {
    icon: Code2,
    title: "Développement Web",
    intro: "Une présence en ligne professionnelle, rapide et orientée conversion.",
    items: ["Sites vitrines", "Sites e-commerce", "Applications web", "Landing pages"],
  },
  {
    icon: Database,
    title: "Solutions logicielles",
    intro: "Des outils métiers qui automatisent et fiabilisent vos opérations.",
    items: ["ERP", "CRM", "Logiciels métiers", "Solutions SaaS"],
  },
  {
    icon: Network,
    title: "Maintenance & Réseaux",
    intro: "Une infrastructure stable, sécurisée et un support réactif.",
    items: ["Maintenance informatique", "Gestion réseau", "Support technique", "Sécurité & sauvegardes"],
  },
  {
    icon: GraduationCap,
    title: "Gestion scolaire",
    intro: "Une plateforme complète pour piloter votre établissement.",
    items: ["Gestion des élèves", "Notes & bulletins", "Communication parents-école", "Statistiques & tableaux de bord"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-hero-gradient text-deep-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-mint">Nos services</p>
          <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Des expertises pour <span className="text-gradient">chaque étape</span> de votre digitalisation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-deep-foreground/80">
            De la création de votre site à la mise en place de logiciels métiers,
            nous vous accompagnons avec une approche pragmatique et orientée résultats.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <article key={b.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-accent-gradient text-deep">
                <b.icon size={26} />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold">{b.title}</h2>
              <p className="mt-2 text-muted-foreground">{b.intro}</p>
              <ul className="mt-6 space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-mint/20 text-teal">
                      <Check size={14} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-deep text-deep-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Un projet en tête ? Construisons-le ensemble.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 font-semibold text-deep shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
