import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/cobbles/Reveal";
import { pmcs } from "@/data/cobblesContent";

const filters = [
  { id: "all", label: "Alles" },
  { id: "performance", label: "Performance" },
  { id: "health", label: "Gezondheid & Herstel" },
  { id: "experiences", label: "Beleving" },
];

const pillarBadge = {
  performance: { label: "Performance", text: "text-cobbles-copper", bg: "bg-cobbles-copper/10" },
  health: { label: "Gezondheid", text: "text-cobbles-forest", bg: "bg-cobbles-forest/10" },
  experiences: { label: "Beleving", text: "text-cobbles-stone", bg: "bg-cobbles-stone/15" },
};

function PmcCard({ pmc }) {
  const [open, setOpen] = useState(false);
  const pillarList = Array.isArray(pmc.pillar) ? pmc.pillar : [pmc.pillar];
  return (
    <div className="group h-full flex flex-col border border-cobbles-stone/30 bg-white rounded-sm overflow-hidden transition-all duration-300 hover:border-cobbles-copper/50 hover:shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-cobbles-sand-deep">
        <Image
          src={pmc.image}
          alt={pmc.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          fittingType="fill"
        />
        <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-white/90 text-cobbles-charcoal px-2 py-1 rounded-sm font-medium">
          PMC {pmc.id}
        </span>
      </div>
      <button onClick={() => setOpen(!open)} className="w-full text-left p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-medium text-lg text-cobbles-charcoal leading-snug">
            {pmc.title}
          </h3>
          <ChevronDown
            className={`w-4 h-4 mt-1 text-cobbles-charcoal/40 shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        <p className="mt-2 text-sm text-cobbles-charcoal/60 leading-relaxed font-light">
          {pmc.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {pillarList.map((p) => (
            <span
              key={p}
              className={`text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full font-medium ${pillarBadge[p].bg} ${pillarBadge[p].text}`}
            >
              {pillarBadge[p].label}
            </span>
          ))}
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <p className="text-sm text-cobbles-charcoal/70 leading-relaxed font-light border-t border-cobbles-stone/20 pt-4">
              {pmc.description}
            </p>
            <p className="mt-3 text-xs tracking-wide text-cobbles-copper font-medium">
              {pmc.line}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all"
      ? pmcs
      : pmcs.filter((p) =>
          Array.isArray(p.pillar) ? p.pillar.includes(filter) : p.pillar === filter
        );

  return (
    <section id="portfolio" className="py-24 lg:py-36 bg-cobbles-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
              05 — Het Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15]">
              Zestien product-marktcombinaties. Eén samenhangend portfolio.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-cobbles-charcoal/70 leading-relaxed font-light">
              Verken het portfolio per pijler. Elke propositie is een werknaam — commerciële namen
              worden aangescherpt naarmate de concepten zich ontwikkelen.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`text-sm px-5 py-2.5 rounded-full border transition-all ${
                  filter === f.id
                    ? "bg-cobbles-charcoal text-white border-cobbles-charcoal"
                    : "bg-transparent text-cobbles-charcoal/70 border-cobbles-stone/40 hover:border-cobbles-charcoal/60"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((pmc, i) => (
            <Reveal key={pmc.id} delay={(i % 3) * 0.08} className="h-full">
              <PmcCard pmc={pmc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}