import { ArrowRight, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import { landingPackages, landingPackagesNote } from "@/data/landingContent";

export default function LandingPackages({ href }) {
  return (
    <section id="lp-packages" className="py-16 lg:py-24 bg-cobbles-sand scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
          Arrangementen
        </span>
        <h2 className="mt-4 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-cobbles-charcoal max-w-2xl leading-[1.15]">
          Verblijven rond wat je komt doen.
        </h2>
        <p className="mt-5 text-cobbles-charcoal/70 font-light leading-relaxed max-w-2xl">
          Vier arrangementen die een appartement combineren met wat vandaag al boekbaar is ter plaatse —
          diagnostiek, herstel, rijden en tafelen.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {landingPackages.map((pkg) => (
            <article
              key={pkg.name}
              className="bg-white rounded-sm border border-cobbles-stone/25 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-cobbles-sand-deep">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-white/90 text-cobbles-charcoal px-2.5 py-1 rounded-sm font-medium">
                  {pkg.duration}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-medium text-xl text-cobbles-charcoal">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-sm text-cobbles-charcoal/65 font-light leading-relaxed">
                  {pkg.text}
                </p>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {pkg.includes.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm text-cobbles-charcoal/70">
                      <Check className="w-4 h-4 text-cobbles-forest shrink-0 mt-0.5" />
                      {line}
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-sm bg-cobbles-charcoal text-white text-sm font-medium hover:bg-cobbles-copper transition-colors"
                >
                  Boek dit arrangement
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-cobbles-charcoal/50 font-light">{landingPackagesNote}</p>
      </div>
    </section>
  );
}