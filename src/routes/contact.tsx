import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Well Done Services Company" },
      { name: "description", content: "Contactez Well Done Services pour un devis ou des informations sur nos services IT et digitaux." },
      { property: "og:title", content: "Contactez Well Done Services" },
      { property: "og:description", content: "Demandez un devis pour votre projet digital." },
    ],
  }),
  component: ContactPage,
});

const projectTypes = [
  "Site web vitrine",
  "Site e-commerce",
  "Application web",
  "ERP / CRM",
  "Logiciel métier",
  "Gestion scolaire",
  "Maintenance informatique",
  "Autre",
];

function ContactPage() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    try {
      await send({
        data: {
          nom: String(fd.get("nom") || ""),
          email: String(fd.get("email") || ""),
          telephone: String(fd.get("telephone") || ""),
          entreprise: String(fd.get("entreprise") || ""),
          type_projet: String(fd.get("type_projet") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur lors de l'envoi");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-hero-gradient text-deep-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-mint">Contact</p>
          <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Parlons de <span className="text-gradient">votre projet</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-deep-foreground/80">
            Un devis, une question, une idée à creuser ? Notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <aside className="space-y-4 lg:col-span-1">
            {[
              { icon: Mail, label: "Email", value: "contact@welldonescompany.com" },
              { icon: Phone, label: "Téléphone", value: "+221 XX XXX XX XX" },
              { icon: MessageCircle, label: "WhatsApp", value: "+221 XX XXX XX XX" },
              { icon: MapPin, label: "Adresse", value: "Dakar, Sénégal" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-gradient text-deep">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </aside>

          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-mint/40 bg-mint/10 p-12 text-center shadow-card">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-accent-gradient text-deep">
                  <CheckCircle2 size={28} />
                </div>
                <h2 className="font-heading text-2xl font-semibold">Message envoyé !</h2>
                <p className="max-w-md text-muted-foreground">
                  Merci pour votre confiance. Notre équipe vous recontacte sous 24h ouvrées.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded-lg border border-border bg-card px-5 py-2 text-sm font-semibold hover:bg-muted"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nom complet *" name="nom" required />
                  <Field label="Email *" name="email" type="email" required />
                  <Field label="Téléphone" name="telephone" type="tel" />
                  <Field label="Entreprise" name="entreprise" />
                </div>
                <div>
                  <label className="text-sm font-semibold">Type de projet</label>
                  <select
                    name="type_projet"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    defaultValue=""
                  >
                    <option value="" disabled>Choisir une option…</option>
                    {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre projet, vos objectifs, votre échéance…"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                </div>
                {status === "error" && (
                  <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-2 text-sm text-destructive">
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-6 py-3 font-semibold text-deep shadow-elegant transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
                >
                  <Send size={16} />
                  {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}
