import Reveal from "@/components/cobbles/Reveal";
import { Image } from "@/components/ui/image";
import { images } from "@/data/cobblesContent";

const qualities = [
  { label: "Rust", text: "Een tempo waarin je kunt ademen en er echt bent." },
  { label: "Doordacht", text: "Elk detail met zorg gekozen." },
  { label: "Zelfverzekerd", text: "Expertise die je kunt vertrouwen, zonder pretentie." },
];

export default function TheExperience() {
  return (
    <section id="experience" className="relative py-24 lg:py-36 bg-cobbles-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper-light font-medium">
                08 — De Beleving
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl mt-6 leading-[1.15]">
                Vakkundig, en toch toegankelijk. Verzorgd, zonder elitair te zijn. Geworteld in de natuur, en van deze tijd.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-white/70 leading-relaxed font-light">
                COBBLES voelt rustig, doordacht en zelfverzekerd. Expertise is warm, niet klinisch. Luxe
                is stil, niet luid. De omgeving is geworteld in de natuur, het ontwerp is onmiskenbaar nu.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 space-y-5">
                {qualities.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobbles-copper-light mt-2.5 shrink-0" />
                    <div>
                      <p className="font-display font-medium text-white">{item.label}</p>
                      <p className="text-sm text-white/55 font-light">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={images.experience}
                  alt="Balkon van de suite bij zonsondergang bij COBBLES"
                  className="w-full h-full object-cover"
                  fittingType="fill"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}