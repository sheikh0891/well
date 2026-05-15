import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Well Done Services Company" },
      { name: "description", content: "Well Done Services Company SARL : entreprise sénégalaise de services IT et de transformation digitale." },
      { property: "og:title", content: "À propos de Well Done Services" },
      { property: "og:description", content: "Notre mission, notre vision, nos valeurs." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Notre mission", text: "Rendre la technologie accessible et utile aux entreprises et institutions africaines." },
  { icon: Eye, title: "Notre vision", text: "Devenir un acteur de référence de la transformation digitale en Afrique de l'Ouest." },
  { icon: Heart, title: "Nos valeurs", text: "Excellence technique, transparence, proximité client et engagement résultats." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-hero-gradient text-deep-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-mint">À propos</p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold sm:text-5xl">
            Nous bâtissons des outils digitaux qui font la différence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-deep-foreground/80">
            Well Done Services Company SARL est une entreprise sénégalaise spécialisée dans
            les services IT, le développement logiciel et la transformation digitale.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-deep">
                <v.icon size={22} />
              </div>
              <h2 className="mt-5 font-heading text-xl font-semibold">{v.title}</h2>
              <p className="mt-2 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-bold">Pour qui travaillons-nous ?</h2>
            <p className="mt-4 text-muted-foreground">
              Nous accompagnons une diversité d'organisations partout au Sénégal et au-delà.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {["PME / PMI", "Écoles privées", "Administrations", "Startups", "ONG", "Grandes entreprises"].map((c) => (
              <li key={c} className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold shadow-card">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
