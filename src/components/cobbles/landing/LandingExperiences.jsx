import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { landingExperiences } from "@/data/landingContent";

export default function LandingExperiences({ href }) {
  return (
    <section
      id="lp-experiences"
      className="py-16 lg:py-24 bg-cobbles-charcoal text-white scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper-light font-medium">
          Beleving
        </span>
        <h2 className="mt-4 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-white max-w-2xl leading-[1.15]">
          Meer dan een kamer.
        </h2>
        <p className="mt-5 text-white/60 font-light leading-relaxed max-w-2xl">
          Het lab, de chamber, de sauna en de wegen zijn er al — ze horen op deze pagina, niet verstopt
          bij het afrekenen.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {landingExperiences.map((item) => (
            <article
              key={item.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-cobbles-charcoal-soft"
            >
              <Image
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                  item.zoom ? "scale-[1.25] group-hover:scale-[1.32]" : "group-hover:scale-105"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cobbles-charcoal via-cobbles-charcoal/50 to-cobbles-charcoal/10" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="font-display font-medium text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </article>
          ))}

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/5] rounded-sm border border-cobbles-copper/40 bg-cobbles-forest p-6 flex flex-col justify-end hover:bg-cobbles-forest-light transition-colors"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-cobbles-copper-light font-medium">
              Toevoegen aan je verblijf
            </span>
            <h3 className="mt-3 font-display font-light text-xl text-white leading-snug">
              Alles kan aan je boeking worden toegevoegd.
            </h3>
            <p className="mt-2 text-sm text-white/60 font-light leading-relaxed">
              Kies je extra's in de volgende stap van het boekingssysteem — wij bevestigen de tijden met
              jou.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm text-cobbles-copper-light">
              Boek nu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}