import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConceptHero from "@/components/cobbles/concepts/ConceptHero";
import ConceptBody from "@/components/cobbles/concepts/ConceptBody";
import ConceptSidebar from "@/components/cobbles/concepts/ConceptSidebar";
import { concepts } from "@/data/concepts";

export default function Concept() {
  const { slug } = useParams();
  const concept = concepts.find((c) => c.slug === slug);

  if (!concept) {
    return (
      <div className="min-h-screen bg-cobbles-sand-light flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-display font-light text-3xl text-cobbles-charcoal">
            Dit concept bestaat niet.
          </p>
          <Link
            to="/"
            className="mt-5 inline-block text-sm text-cobbles-copper hover:text-cobbles-copper-light transition-colors"
          >
            Terug naar de presentatie
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cobbles-sand-light min-h-screen">
      <ConceptHero concept={concept} />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 lg:gap-20">
        <ConceptBody concept={concept} />
        <ConceptSidebar concept={concept} concepts={concepts} />
      </div>

      <div className="border-t border-cobbles-stone/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-cobbles-charcoal/55 hover:text-cobbles-copper transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar de presentatie
          </Link>
          <span className="text-[11px] tracking-[0.3em] uppercase text-cobbles-charcoal/40">
            COBBLES
          </span>
        </div>
      </div>
    </div>
  );
}