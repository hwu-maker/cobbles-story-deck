import Reveal from "@/components/cobbles/Reveal";
import { Image } from "@/components/ui/image";
import { images, destinationPillars } from "@/data/cobblesContent";

export default function TheDestination() {
  return (
    <section id="destination" className="py-24 lg:py-36 bg-cobbles-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={images.destination}
                alt="Gasten ontspannen op het terras bij COBBLES in de Vlaamse Ardennen"
                className="w-full h-full object-cover"
                fittingType="fill"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
                03 — De Bestemming
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15]">
                Eén plek waar expertise, gastvrijheid, natuur en beleving samenkomen.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-cobbles-charcoal/70 leading-relaxed font-light">
                COBBLES is zeldzaam door de combinatie. Vakbekwame zorg naast warme gastvrijheid. Beweging naast herstel. Natuur naast een interieur van nu.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {destinationPillars.map((p, i) => (
                <Reveal key={p.label} delay={0.3 + i * 0.1}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cobbles-copper" />
                      <h3 className="font-display font-medium text-cobbles-charcoal">{p.label}</h3>
                    </div>
                    <p className="mt-3 text-cobbles-charcoal/60 leading-relaxed font-light">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}