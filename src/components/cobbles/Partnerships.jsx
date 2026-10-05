import Reveal from "@/components/cobbles/Reveal";
import PartnershipProof from "@/components/cobbles/PartnershipProof";
import PartnershipNetwork from "@/components/cobbles/PartnershipNetwork";
import { contact, ctas } from "@/data/cobblesContent";

export default function Partnerships() {
  return (
    <section id="partnerships" className="py-24 lg:py-36 bg-cobbles-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper-light font-medium">
              12 — Partners
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-white mt-6 leading-[1.15]">
              Partnerships zijn hoe COBBLES groeit.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-white/70 leading-relaxed font-light">
              COBBLES is gebouwd om samen te ontwikkelen — met teams en federaties, merken en
              wetenschap, bedrijven en de streek. Veel van dat fundament ligt er al.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 font-display font-light text-2xl sm:text-3xl text-cobbles-copper-light">
              COBBLES. Zoveel meer dan wobbles.
            </p>
          </Reveal>
        </div>

        <PartnershipProof />
        <PartnershipNetwork />

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contact.email}?subject=COBBLES — partnership`}
              className="text-sm px-6 py-3 rounded-full bg-cobbles-copper text-white hover:bg-cobbles-copper-light transition-colors"
            >
              {ctas.partner}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-cobbles-charcoal transition-colors"
            >
              Neem contact op over een partnership
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}