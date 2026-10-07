import Reveal from "@/components/cobbles/Reveal";
import ArrangementCard from "@/components/cobbles/ArrangementCard";
import { arrangements, arrangementsNote } from "@/data/cobblesContent";

export default function Arrangements() {
  return (
    <div className="mt-24 pt-16 border-t border-cobbles-stone/30">
      <Reveal>
        <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
          Arrangementen
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h3 className="mt-5 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-cobbles-charcoal max-w-3xl leading-[1.15]">
          Van verblijf naar aanbod: arrangementen die we aan de gast voorleggen.
        </h3>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 text-lg text-cobbles-charcoal/70 leading-relaxed font-light max-w-3xl">
          Elk arrangement bundelt wat vandaag al boekbaar is, tot een aanbod dat we op de website uitlichten.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {arrangements.map((item, i) => (
          <Reveal key={item.name} delay={(i % 3) * 0.08} className="h-full">
            <ArrangementCard arrangement={item} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-8 text-xs text-cobbles-charcoal/50 font-light max-w-3xl">{arrangementsNote}</p>
      </Reveal>
    </div>
  );
}