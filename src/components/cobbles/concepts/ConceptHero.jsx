import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function ConceptHero({ concept }) {
  return (
    <header className="relative h-[52vh] min-h-[380px] overflow-hidden bg-cobbles-charcoal">
      <Image
        src={concept.image}
        alt={concept.imageAlt || concept.label}
        className={`absolute inset-0 w-full h-full object-cover ${concept.zoom ? "scale-[1.15]" : ""}`}
        fittingType="fill"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cobbles-charcoal via-cobbles-charcoal/70 to-cobbles-charcoal/30" />

      <div className="relative h-full max-w-6xl mx-auto px-6 lg:px-10 py-8 flex flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Presentatie
          </Link>
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/45">COBBLES</span>
        </div>

        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full border border-cobbles-copper-light/50 text-[10px] tracking-[0.2em] uppercase text-cobbles-copper-light">
            {concept.status}
          </span>
          <h1 className="mt-5 font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
            {concept.label}
          </h1>
          <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-white/50">
            {concept.endorsement}
          </p>
          <p className="mt-5 text-lg lg:text-xl text-white/75 font-light leading-relaxed">
            {concept.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}