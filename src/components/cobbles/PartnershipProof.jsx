import Reveal from "@/components/cobbles/Reveal";
import { Image } from "@/components/ui/image";
import { references, referenceQuote, referenceListings } from "@/data/cobblesContent";
import SocialChannels from "@/components/cobbles/SocialChannels";

export default function PartnershipProof() {
  return (
    <div className="mt-20">
      <Reveal>
        <h3 className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium">
          Al ontdekt
        </h3>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 text-white/70 font-light max-w-2xl leading-relaxed">
          Het concept bouwt voort op een bestemming die gasten, teams en instellingen al gevonden hebben, en een score hebben gegeven.
        </p>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-3">
        {references.map((r, i) => (
          <Reveal key={r.source} delay={i * 0.08}>
            <div
              className={`h-full pb-8 sm:pb-0 ${
                i > 0 ? "border-t border-white/15 pt-8 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-10" : ""
              }`}
            >
              <p className="font-display font-light text-3xl sm:text-4xl text-white">{r.value}</p>
              <p className="mt-3 text-sm text-cobbles-copper-light font-medium">{r.source}</p>
              <p className="mt-1 text-xs text-white/45 font-light">{r.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <blockquote className="mt-14 border-l-2 border-cobbles-copper pl-6 max-w-2xl">
          <p className="text-lg sm:text-xl text-white/85 font-light italic leading-relaxed">
            &ldquo;{referenceQuote.text}&rdquo;
          </p>
          <footer className="mt-3 text-xs tracking-wide uppercase text-white/45">
            {referenceQuote.source}
          </footer>
        </blockquote>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-14">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40">Vermeld bij</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
            {referenceListings.map((l) => (
              <Image
                key={l.name}
                src={l.logo}
                alt={l.name}
                className="h-6 w-auto opacity-60 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <SocialChannels />
      </Reveal>
    </div>
  );
}