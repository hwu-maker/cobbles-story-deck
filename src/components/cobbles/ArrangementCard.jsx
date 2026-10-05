import { useState } from "react";
import { Check, ChevronDown, Mail } from "lucide-react";
import { Image } from "@/components/ui/image";
import { contact } from "@/data/cobblesContent";

// Eén arrangementkaart in de stijl van het portfolio: klik om de inhoud open te klappen,
// met onderaan een rechtstreekse aanvraag.
export default function ArrangementCard({ arrangement }) {
  const [open, setOpen] = useState(false);
  const aanvraag = `mailto:${contact.email}?subject=${encodeURIComponent(
    `COBBLES — aanvraag ${arrangement.name}`
  )}`;

  return (
    <article className="group h-full flex flex-col border border-cobbles-stone/30 bg-white rounded-sm overflow-hidden transition-all duration-300 hover:border-cobbles-copper/50 hover:shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-cobbles-sand-deep">
        <Image
          src={arrangement.image}
          alt={arrangement.name}
          fittingType="fill"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-white/90 text-cobbles-charcoal px-2.5 py-1 rounded-sm font-medium">
          {arrangement.duration}
        </span>
        {arrangement.featured && (
          <span className="absolute top-3 right-3 text-[10px] tracking-[0.15em] uppercase bg-cobbles-copper text-white px-2.5 py-1 rounded-sm font-medium">
            Deze week uitgelicht
          </span>
        )}
      </div>

      <button onClick={() => setOpen(!open)} className="w-full text-left p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-medium text-lg text-cobbles-charcoal leading-snug">
            {arrangement.name}
          </h3>
          <ChevronDown
            className={`w-4 h-4 mt-1 text-cobbles-charcoal/40 shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        <p className="mt-1 text-[11px] tracking-wide uppercase text-cobbles-copper font-medium">
          {arrangement.audience}
        </p>
        <p className="mt-3 text-sm text-cobbles-charcoal/65 font-light leading-relaxed">
          {arrangement.text}
        </p>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <ul className="space-y-2 border-t border-cobbles-stone/20 pt-4">
              {arrangement.includes.map((line) => (
                <li key={line} className="flex gap-2.5 text-sm text-cobbles-charcoal/70 font-light">
                  <Check className="w-4 h-4 text-cobbles-forest shrink-0 mt-0.5" />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href={aanvraag}
              className="mt-5 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-sm bg-cobbles-charcoal text-white text-sm font-medium hover:bg-cobbles-copper transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Vraag dit arrangement aan
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}