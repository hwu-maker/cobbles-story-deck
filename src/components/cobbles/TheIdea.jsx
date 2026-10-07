import Reveal from "@/components/cobbles/Reveal";
import { brand } from "@/data/cobblesContent";

export default function TheIdea() {
  return (
    <section id="idea" className="py-24 lg:py-36 bg-cobbles-sand-light">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal>
          <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
            02 — Het Idee
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15] cobbles-text-balance">
            Gezonder leven, beter presteren, goed herstellen, en momenten die blijven hangen.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 text-lg lg:text-xl text-cobbles-charcoal/70 leading-relaxed font-light">
            Die wensen zitten nu verspreid over kliniek, sportschool, hotel en retreat. Elk dekt een stuk. Nergens vind je ze samen.
          </p>
          <p className="mt-6 text-lg lg:text-xl text-cobbles-charcoal/70 leading-relaxed font-light">
            COBBLES vertrekt van één idee: gezondheid, performance, herstel en beleving horen bij elkaar. Op één bestemming, met vakkennis en echte gastvrijheid, in de Vlaamse Ardennen.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <blockquote className="mt-14 pl-6 border-l-2 border-cobbles-copper">
            <p className="font-display text-xl lg:text-2xl text-cobbles-forest font-light italic leading-relaxed">
              &ldquo;{brand.promise}&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}