import Reveal from "@/components/cobbles/Reveal";
import Arrangements from "@/components/cobbles/Arrangements";
import { customerJourneys } from "@/data/cobblesContent";

export default function CustomerJourney() {
  return (
    <section id="journey" className="py-24 lg:py-36 bg-cobbles-sand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
              07 — De Klantreis
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15]">
              Diensten die je combineert. Verblijven die op elkaar voortbouwen.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-cobbles-charcoal/70 leading-relaxed font-light">
              Een gast wil zelden één ding. Dit zijn voorbeelden van hoe het aanbod van COBBLES kan
              worden gecombineerd tot één samenhangende beleving.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {customerJourneys.map((journey, i) => (
            <Reveal key={journey.title} delay={(i % 2) * 0.15} className="h-full">
              <div className="h-full border border-cobbles-stone/30 rounded-sm p-7 sm:p-8 bg-white">
                <h3 className="font-display font-medium text-xl text-cobbles-charcoal">
                  {journey.title}
                </h3>
                <p className="mt-3 text-sm text-cobbles-charcoal/60 leading-relaxed font-light">
                  {journey.description}
                </p>

                <ol className="mt-7">
                  {journey.steps.map((step, j) => (
                    <li key={step.name} className="relative flex gap-4 pb-6 last:pb-0">
                      {j < journey.steps.length - 1 && (
                        <span className="absolute left-4 top-9 bottom-1 w-px bg-cobbles-stone/40" />
                      )}
                      <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cobbles-charcoal text-white font-display text-xs font-medium shrink-0">
                        {j + 1}
                      </span>
                      <div className="pt-1">
                        <p className="font-display font-medium text-sm text-cobbles-charcoal leading-snug">
                          {step.name}
                        </p>
                        <p className="mt-0.5 text-xs text-cobbles-charcoal/50 font-light leading-snug">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>

        <Arrangements />
      </div>
    </section>
  );
}