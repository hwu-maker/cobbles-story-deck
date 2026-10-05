import Reveal from "@/components/cobbles/Reveal";
import { Image } from "@/components/ui/image";
import { existingPartners, partnershipTracks } from "@/data/cobblesContent";

export default function PartnershipNetwork() {
  return (
    <>
      <div className="mt-24">
        <Reveal>
          <h3 className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium">
            Al aan boord
          </h3>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 text-white/70 font-light max-w-2xl leading-relaxed">
            Partners die al betrokken zijn bij de bestemming en de performance-ambitie.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {existingPartners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="flex flex-col">
                <div className="flex h-10 items-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    className="h-7 w-auto max-w-[180px] object-contain opacity-80 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
                <p className="mt-5 text-xs tracking-wide uppercase text-cobbles-copper-light">
                  {p.role}
                </p>
                <p className="mt-1.5 text-xs text-white/45 font-light leading-relaxed">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Reveal>
          <h3 className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium">
            Waar we verder bouwen
          </h3>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 text-white/70 font-light max-w-2xl leading-relaxed">
            Vijf sporen om het partnernetwerk verder te ontwikkelen.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-x-16">
          {partnershipTracks.map((t, i) => (
            <Reveal key={t.title} delay={(i % 2) * 0.05}>
              <div className="flex gap-6 border-t border-white/15 py-7">
                <span className="font-display text-sm text-cobbles-copper-light pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display font-medium text-white">{t.title}</p>
                  <p className="mt-2 text-sm text-white/60 font-light leading-relaxed">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}