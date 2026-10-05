import { Image } from "@/components/ui/image";
import { landingPillars } from "@/data/landingContent";

export default function LandingPillars() {
  return (
    <section className="py-16 lg:py-24 bg-cobbles-sand-light">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
          Waarom hier
        </span>
        <h2 className="mt-4 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-cobbles-charcoal max-w-2xl leading-[1.15]">
          Drie pijlers, één verblijf.
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">
          {landingPillars.map((pillar) => (
            <article key={pillar.title} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cobbles-sand-deep">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="mt-5 block text-[10px] tracking-[0.2em] uppercase text-cobbles-copper font-medium">
                {pillar.tag}
              </span>
              <h3 className="mt-2 font-display font-medium text-xl text-cobbles-charcoal">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm text-cobbles-charcoal/65 font-light leading-relaxed">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}