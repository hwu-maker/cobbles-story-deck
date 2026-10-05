import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { bookingUrl } from "@/data/landingContent";

export default function ConceptSidebar({ concept, concepts }) {
  return (
    <aside className="space-y-10 lg:sticky lg:top-10 self-start">
      <div className="grid gap-5 border-y border-cobbles-stone/30 py-6">
        {concept.facts.map((fact) => (
          <div key={fact.label}>
            <p className="font-display font-light text-xl text-cobbles-charcoal leading-tight">
              {fact.value}
            </p>
            <p className="mt-1 text-[11px] tracking-[0.15em] uppercase text-cobbles-charcoal/45 font-medium">
              {fact.label}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-cobbles-charcoal text-white p-6 rounded-sm">
        <a
          href={concept.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cobbles-copper-light hover:text-white transition-colors"
        >
          {concept.cta.label}
          <ArrowUpRight className="w-4 h-4" />
        </a>
        {concept.cta.note && (
          <p className="mt-3 text-xs text-white/50 font-light leading-relaxed">{concept.cta.note}</p>
        )}
        <a
          href={bookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block text-[11px] tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors"
        >
          Boek je verblijf
        </a>
      </div>

      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-cobbles-charcoal/45">
          Andere concepten
        </p>
        <ul className="mt-4 space-y-2">
          {concepts
            .filter((other) => other.slug !== concept.slug)
            .map((other) => (
              <li key={other.slug}>
                <Link
                  to={`/concept/${other.slug}`}
                  className="text-sm text-cobbles-charcoal/70 hover:text-cobbles-copper transition-colors"
                >
                  {other.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {concept.note && (
        <p className="text-xs text-cobbles-charcoal/50 italic font-light leading-relaxed">
          {concept.note}
        </p>
      )}
    </aside>
  );
}