import Reveal from "@/components/cobbles/Reveal";
import { brand, ctas, contact } from "@/data/cobblesContent";

export default function Closing() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="closing" className="bg-cobbles-charcoal text-white py-24 lg:py-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <span className="font-display font-semibold tracking-[0.3em] text-4xl sm:text-5xl lg:text-7xl text-white">
            {brand.name}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm tracking-[0.25em] uppercase text-cobbles-copper-light">
            {brand.baseline}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 text-xl lg:text-2xl font-light text-white/80 leading-relaxed cobbles-text-balance max-w-2xl mx-auto">
            {brand.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("portfolio")}
              className="px-7 py-3.5 rounded-full bg-white text-cobbles-charcoal text-sm font-medium hover:bg-cobbles-copper hover:text-white transition-colors"
            >
              {ctas.explore}
            </button>
            <a
              href={`mailto:${contact.email}`}
              className="px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white transition-colors"
            >
              {ctas.partner}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white transition-colors"
            >
              {ctas.contact}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-20 pt-8 border-t border-white/10 max-w-2xl mx-auto text-left">
            <p className="text-xs tracking-[0.2em] uppercase text-cobbles-copper-light font-medium">
              Eigendom &amp; concept
            </p>
            <div className="mt-4 space-y-3 text-xs text-white/45 font-light leading-relaxed">
              <p>
                COBBLES is een concept met een voorgestelde merknaam, ontwikkeld door{" "}
                <a
                  href="https://meritsa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
                >
                  Meritsa
                </a>{" "}
                in Londen. Het concept, de merkpositionering en de merkarchitectuur die hier worden
                gepresenteerd, zijn intellectuele eigendom van Meritsa. Alle rechten voorbehouden.
              </p>
              <p>
                De domeinen <span className="text-white/70">cobbles.be</span>,{" "}
                <span className="text-white/70">cobbles.nl</span> en{" "}
                <span className="text-white/70">cobbles.fr</span> zijn beschikbaar; de beschikbaarheid
                van handelsnaam en merk moet afzonderlijk worden geverifieerd.
              </p>
              <p>
                Alle proposities worden gepresenteerd als concepten in ontwikkeling, tenzij operationeel
                bevestigd.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}