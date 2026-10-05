import Reveal from "@/components/cobbles/Reveal";
import { opportunityPoints } from "@/data/cobblesContent";

export default function TheOpportunity() {
  return (
    <section id="opportunity" className="py-24 lg:py-36 bg-cobbles-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
              10 — De Kans
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15]">
              Meerdere doelgroepen. Meerdere motieven. Eén bestemming die ze combineert.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-cobbles-charcoal/70 leading-relaxed font-light">
              Wie voor herstel komt, ontdekt misschien performance. Een koppel dat voor een
              natuuruitstap komt, keert terug voor een wellnessverblijf. De bestemming is ontworpen voor
              combinaties, voor terugkerende bezoeken en voor relaties die groeien.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunityPoints.map((point, i) => (
            <Reveal key={point.label} delay={i * 0.1}>
              <div className="border-t-2 border-cobbles-forest/30 pt-6">
                <span className="font-display text-3xl font-light text-cobbles-forest/40">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display font-medium text-lg text-cobbles-charcoal">
                  {point.label}
                </h3>
                <p className="mt-2 text-sm text-cobbles-charcoal/60 leading-relaxed font-light">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-12 text-xs text-cobbles-charcoal/40 italic font-light max-w-2xl">
            Er worden geen financiële prognoses, bezoekersaantallen of rendementen vermeld zonder
            goedgekeurde bron.
          </p>
        </Reveal>
      </div>
    </section>
  );
}