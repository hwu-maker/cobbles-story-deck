import { Image } from "@/components/ui/image";
import { landingClosing, landingContact } from "@/data/landingContent";

export default function LandingClosing({ href }) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={landingClosing.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-cobbles-charcoal/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 py-20 lg:py-28 text-center">
          <h2 className="font-display font-light text-3xl lg:text-4xl text-white">
            {landingClosing.title}
          </h2>
          <p className="mt-5 text-white/75 font-light leading-relaxed">{landingClosing.text}</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-cobbles-copper text-white text-sm font-medium hover:bg-cobbles-copper-light transition-colors"
            >
              {landingClosing.cta}
            </a>
            <a
              href={`tel:${landingContact.phoneHref}`}
              className="px-8 py-4 rounded-full border border-white/40 text-white text-sm hover:bg-white hover:text-cobbles-charcoal transition-colors"
            >
              Bel {landingContact.phone}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-cobbles-charcoal border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="font-display font-semibold tracking-[0.25em] text-sm text-white">
              COBBLES
            </p>
            <p className="mt-3 text-xs text-white/45 font-light">{landingContact.address}</p>
            <p className="mt-1 text-xs text-white/45 font-light">
              <a
                href={`mailto:${landingContact.email}`}
                className="hover:text-white transition-colors"
              >
                {landingContact.email}
              </a>
              {" · "}
              <a
                href={`tel:${landingContact.phoneHref}`}
                className="hover:text-white transition-colors"
              >
                {landingContact.phone}
              </a>
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs text-white/45 font-light">
              Beste tarief bij rechtstreeks boeken.
            </p>
            <p className="mt-1 text-xs text-white/30 font-light">
              Je reserveert via RoomRaccoon.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}