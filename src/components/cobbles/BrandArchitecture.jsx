import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/cobbles/Reveal";
import { Image } from "@/components/ui/image";
import { brand, productLines } from "@/data/cobblesContent";
import { conceptSummaries } from "@/data/concepts";

export default function BrandArchitecture() {
  return (
    <section id="brand" className="py-24 lg:py-36 bg-cobbles-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper-light font-medium">
              06 — Eén merk, meerdere belevingen
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl mt-6 leading-[1.15]">
              De beleving staat vooraan. COBBLES maakt het mogelijk.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-white/60 font-light leading-relaxed">
              Zes belevingen onder één dak, elk met een eigen naam. Het merk is de garantie — niet het
              uithangbord.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productLines.map((line, i) => (
            <Reveal key={line.id} delay={(i % 3) * 0.1} className="h-full">
              <div className="group h-full border border-white/15 rounded-sm overflow-hidden hover:border-cobbles-copper/50 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden bg-cobbles-charcoal-soft">
                  <Image
                    src={line.image}
                    alt={line.label}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      line.zoom ? "scale-[1.25] group-hover:scale-[1.32]" : "group-hover:scale-105"
                    }`}
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium">
                    {brand.name}
                  </span>
                  <h3 className="mt-2 font-display font-light text-3xl lg:text-4xl text-white leading-none">
                    {line.label}
                  </h3>
                  <p className="mt-4 text-sm text-white/60 leading-relaxed font-light">
                    {line.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-20 pt-10 border-t border-white/15">
            <p className="text-xs tracking-[0.2em] uppercase text-cobbles-copper-light font-medium text-center">
              Onderschreven concepten
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {conceptSummaries.map((c) => (
                <motion.div
                  key={c.slug}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                >
                  <Link
                    to={`/concept/${c.slug}`}
                    className="group flex gap-4 p-5 bg-white/5 rounded-sm transition-colors hover:bg-white/10"
                  >
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-sm bg-cobbles-charcoal-soft">
                    <Image src={c.image} alt={c.label} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-xl text-white leading-snug">
                      {c.label}
                    </h3>
                    <p className="mt-0.5 text-[10px] tracking-[0.2em] uppercase text-white/40">
                      {c.endorsement}
                    </p>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed font-light">
                      {c.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-white/35 transition-colors group-hover:text-cobbles-copper-light">
                      Bekijk concept
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-white/35 italic font-light max-w-2xl mx-auto">
              Dit zijn voorstellen voor de merkarchitectuur. Ze impliceren niet dat alle concepten al
              operationeel of definitief zijn.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}