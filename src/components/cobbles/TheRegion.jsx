import Reveal from "@/components/cobbles/Reveal";
import { Image } from "@/components/ui/image";
import { images } from "@/data/cobblesContent";

export default function TheRegion() {
  return (
    <section id="region" className="bg-cobbles-sand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
              09 — De Regio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15]">
              De Vlaamse Ardennen — het landschap dat COBBLES zijn karakter geeft.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-cobbles-charcoal/70 leading-relaxed font-light">
              Glooiende heuvels, stille wegen en kasseien, in een landschap dat je meteen voelt. De wielergeschiedenis klopt, maar is niet het hele verhaal. De streek is natuur, rust en karakter.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base text-cobbles-forest italic font-light">
              De kasseien en het wielererfgoed horen bij de streek. Ze zijn niet de enige reden om te komen.
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal>
        <div className="relative h-[40vh] lg:h-[55vh] overflow-hidden">
          <Image
            src={images.regionLandscape}
            alt="Het Brakelbos in de Vlaamse Ardennen: beuken en een tapijt van wilde hyacinten"
            className="w-full h-full object-cover"
            fittingType="fill"
          />
        </div>
      </Reveal>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-3">
        <p className="text-[11px] text-cobbles-charcoal/45 text-right">
          {images.regionLandscapeCredit}
        </p>
      </div>
    </section>
  );
}