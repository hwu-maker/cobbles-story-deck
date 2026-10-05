import Reveal from "@/components/cobbles/Reveal";
import { pillars } from "@/data/cobblesContent";

const accentMap = {
  forest: { text: "text-cobbles-forest", border: "border-cobbles-forest/40", dot: "bg-cobbles-forest" },
  copper: { text: "text-cobbles-copper", border: "border-cobbles-copper/40", dot: "bg-cobbles-copper" },
  stone: { text: "text-cobbles-stone", border: "border-cobbles-stone/40", dot: "bg-cobbles-stone" },
};

export default function ThreePillars() {
  return (
    <section id="pillars" className="py-24 lg:py-36 bg-cobbles-sand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
              04 — De Drie Pijlers
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15]">
              Drie pijlers, even essentieel. De kracht zit in de combinatie.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-cobbles-charcoal/70 leading-relaxed font-light">
              COBBLES is geen wielercentrum, geen medische kliniek en geen wellnesshotel. Het is alle
              drie — en meer — samen op één bestemming.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => {
            const accent = accentMap[pillar.accent];
            return (
              <Reveal key={pillar.id} delay={i * 0.15} className="h-full">
                <div className={`h-full border-t-2 ${accent.border} pt-8`}>
                  <span className={`font-display text-5xl font-light ${accent.text}`}>
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display font-medium text-2xl text-cobbles-charcoal">
                    {pillar.name}
                  </h3>
                  <p className="mt-4 text-cobbles-charcoal/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs tracking-[0.15em] uppercase text-cobbles-charcoal/40 font-medium">
                      Voor wie
                    </p>
                    <p className="mt-2 text-sm text-cobbles-charcoal/60 leading-relaxed">
                      {pillar.audience}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs tracking-[0.15em] uppercase text-cobbles-charcoal/40 font-medium">
                      Voorbeelden
                    </p>
                    <ul className="mt-3 space-y-2">
                      {pillar.examples.map((ex) => (
                        <li
                          key={ex}
                          className="flex items-center gap-2.5 text-sm text-cobbles-charcoal/70"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}