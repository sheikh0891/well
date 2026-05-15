import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-heading text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-gradient text-deep">W</span>
            Well Done Services
          </div>
          <p className="mt-4 max-w-md text-sm text-deep-foreground/70">
            Partenaire technologique des entreprises sénégalaises et africaines.
            Nous concevons des solutions digitales fiables, performantes et orientées résultats.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-mint">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-deep-foreground/80">
            <li><Link to="/services" className="hover:text-mint">Services</Link></li>
            <li><Link to="/realisations" className="hover:text-mint">Réalisations</Link></li>
            <li><Link to="/a-propos" className="hover:text-mint">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-mint">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-mint">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-deep-foreground/80">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /><span>Dakar, Sénégal</span></li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /><span>contact@welldonescompany.com</span></li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /><span>+221 XX XXX XX XX</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-deep-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Well Done Services Company SARL. Tous droits réservés.</p>
          <p>Sénégal · Afrique de l'Ouest</p>
        </div>
      </div>
    </footer>
  );
}
