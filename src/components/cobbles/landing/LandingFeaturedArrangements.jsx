import ArrangementCard from "@/components/cobbles/ArrangementCard";
import { arrangements } from "@/data/cobblesContent";
import { landingFeatured } from "@/data/landingContent";

export default function LandingFeaturedArrangements() {
  const featured = arrangements.filter((item) => item.featured);

  return (
    <section id="lp-featured" className="py-16 lg:py-24 bg-cobbles-sand-light scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
          {landingFeatured.eyebrow}
        </span>
        <h2 className="mt-4 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-cobbles-charcoal max-w-2xl leading-[1.15]">
          {landingFeatured.title}
        </h2>
        <p className="mt-5 text-cobbles-charcoal/70 font-light leading-relaxed max-w-2xl">
          {landingFeatured.intro}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <ArrangementCard key={item.name} arrangement={item} />
          ))}
        </div>

        <p className="mt-8 text-xs text-cobbles-charcoal/50 font-light max-w-2xl">
          {landingFeatured.note}
        </p>
      </div>
    </section>
  );
}