import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Network, GraduationCap, CheckCircle2, Sparkles, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Well Done Services — Transformation digitale au Sénégal" },
      { name: "description", content: "Développement web, solutions logicielles, maintenance & gestion scolaire. Partenaire IT pour PME, écoles et administrations en Afrique." },
      { property: "og:title", content: "Well Done Services — Transformation digitale" },
      { property: "og:description", content: "Solutions IT & digitales sur mesure pour entreprises et institutions." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Développement Web", desc: "Sites vitrines, e-commerce, applications web et landing pages performantes.", to: "/services" },
  { icon: Database, title: "Solutions logicielles", desc: "ERP, CRM, logiciels métiers et solutions SaaS sur mesure.", to: "/services" },
  { icon: Network, title: "Maintenance & Réseaux", desc: "Maintenance informatique, gestion réseau et support technique réactif.", to: "/services" },
  { icon: GraduationCap, title: "Gestion scolaire", desc: "Plateforme complète : élèves, notes, communication parents-école, statistiques.", to: "/services" },
];

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "05+", label: "Années d'expérience" },
  { value: "98%", label: "Satisfaction client" },
  { value: "24/7", label: "Support technique" },
];

const partners = ["MEN Sénégal", "École Yavuz", "PME Dakar", "Startup Hub", "ONG Partenaire", "Cabinet Conseil"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-deep-foreground">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-medium text-mint">
              <Sparkles size={14} /> Acteur de la transformation digitale au Sénégal
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Des solutions <span className="text-gradient">IT & digitales</span> qui propulsent votre entreprise.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-deep-foreground/80">
              Well Done Services Company conçoit, développe et maintient les outils numériques
              dont les PME, écoles, ONG et administrations ont besoin pour grandir.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 font-semibold text-deep shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Demander un devis <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-deep-foreground/30 bg-deep-foreground/5 px-6 py-3 font-semibold text-deep-foreground backdrop-blur transition hover:bg-deep-foreground/10"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">Nos expertises</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Tout ce dont vous avez besoin pour réussir votre transformation digitale.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-deep">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">
                En savoir plus <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Value prop */}
      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">Pourquoi nous choisir</p>
            <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
              Une équipe locale, un standard international.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nous combinons expertise technique, proximité terrain et engagement résultats
              pour livrer des solutions qui fonctionnent vraiment.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Solutions sur mesure adaptées au contexte africain",
              "Délais respectés, communication transparente",
              "Maintenance et support inclus dans chaque projet",
              "Tarification claire, sans surprise",
              "Formation et transfert de compétences",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                <CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={20} />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card md:p-14">
          <Quote className="text-teal" size={36} />
          <blockquote className="mt-6 font-heading text-2xl leading-relaxed sm:text-3xl">
            "Well Done a transformé notre gestion scolaire. La plateforme est intuitive,
            les parents reçoivent les notes en temps réel et notre équipe gagne des heures chaque semaine."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-accent-gradient font-bold text-deep">DA</div>
            <div>
              <div className="font-semibold">Directeur d'école</div>
              <div className="text-sm text-muted-foreground">Établissement scolaire — Dakar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Ils nous font confiance
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-6">
            {partners.map((p) => (
              <div key={p} className="grid h-16 place-items-center rounded-lg border border-border bg-card text-sm font-semibold text-muted-foreground">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-hero-gradient text-deep-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Prêt à digitaliser votre activité ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-deep-foreground/80">
            Parlons de votre projet. Nous vous proposons une approche claire,
            un devis transparent et une équipe dédiée.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent-gradient px-8 py-4 font-semibold text-deep shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            Démarrer mon projet <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
