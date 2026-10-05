import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { landingRegion } from "@/data/landingContent";

export default function LandingRegion() {
  return (
    <section id="lp-region" className="py-16 lg:py-24 bg-cobbles-sand-light scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
            De streek
          </span>
          <h2 className="mt-4 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-cobbles-charcoal leading-[1.15]">
            {landingRegion.title}
          </h2>
          <p className="mt-6 text-cobbles-charcoal/70 font-light leading-relaxed">
            {landingRegion.text}
          </p>
          <p className="mt-6 text-sm text-cobbles-charcoal/60">{landingRegion.address}</p>

          <div className="mt-8 border-t border-cobbles-stone/30 pt-8">
            <div className="aspect-[16/9] overflow-hidden rounded-sm bg-cobbles-sand-deep">
              <Image
                src={landingRegion.walksImage}
                alt={landingRegion.walksImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-cobbles-charcoal/45">
              {landingRegion.walksImageCredit}
            </p>

            <span className="mt-5 block text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
              {landingRegion.walksEyebrow}
            </span>
            <p className="mt-3 font-display font-light text-lg lg:text-xl text-cobbles-charcoal leading-snug">
              {landingRegion.walksTitle}
            </p>
            <p className="mt-3 text-sm text-cobbles-charcoal/70 font-light leading-relaxed">
              {landingRegion.walksText}
            </p>

            <div className="mt-5 space-y-2">
              {landingRegion.walks.map((walk) => (
                <div
                  key={walk.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-cobbles-stone/25 pb-2"
                >
                  <span className="text-sm font-medium text-cobbles-charcoal">{walk.name}</span>
                  <span className="text-xs text-cobbles-charcoal/55">{walk.detail}</span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-cobbles-charcoal/50">{landingRegion.walksAccess}</p>

            <a
              href={landingRegion.walksLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-cobbles-copper hover:text-cobbles-copper-light transition-colors"
            >
              {landingRegion.walksLink.label}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-cobbles-stone/30 pt-8">
            {landingRegion.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-light text-2xl text-cobbles-charcoal">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] tracking-[0.15em] uppercase text-cobbles-charcoal/45 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cobbles-sand-deep order-first lg:order-last">
          <Image
            src={landingRegion.image}
            alt="Het wielerland van de Vlaamse Ardennen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}