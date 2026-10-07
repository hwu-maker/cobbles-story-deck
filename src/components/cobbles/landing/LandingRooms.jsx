import { ArrowRight, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import { landingFacilities, landingRooms } from "@/data/landingContent";

export default function LandingRooms({ href }) {
  return (
    <section id="lp-stay" className="py-16 lg:py-24 bg-cobbles-sand scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
          Verblijf
        </span>
        <h2 className="mt-4 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-cobbles-charcoal max-w-2xl leading-[1.15]">
          Appartementen met keuken, leefruimte en plek om tot rust te komen.
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {landingRooms.map((room) => (
            <article
              key={room.name}
              className="bg-white rounded-sm border border-cobbles-stone/25 overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cobbles-sand-deep">
                <Image src={room.image} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display font-medium text-lg text-cobbles-charcoal">
                    {room.name}
                  </h3>
                  <span className="text-sm text-cobbles-copper font-medium whitespace-nowrap">
                    {room.price}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] tracking-wide uppercase text-cobbles-charcoal/40 font-medium">
                  {room.spec}
                </p>
                <p className="mt-3 text-sm text-cobbles-charcoal/65 font-light leading-relaxed flex-1">
                  {room.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-cobbles-sand-light text-cobbles-charcoal/60"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-sm border border-cobbles-charcoal/20 text-sm text-cobbles-charcoal hover:bg-cobbles-charcoal hover:text-white transition-colors"
                >
                  Check beschikbaarheid
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-cobbles-stone/30 pt-8">
          <p className="text-xs tracking-[0.2em] uppercase text-cobbles-charcoal/45 font-medium">
            Inbegrepen in elk appartement
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {landingFacilities.map((facility) => (
              <span
                key={facility}
                className="flex items-center gap-2 text-sm text-cobbles-charcoal/70"
              >
                <Check className="w-3.5 h-3.5 text-cobbles-forest" />
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}