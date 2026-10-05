import { landingQuote, landingRatings } from "@/data/landingContent";

export default function LandingTrustStrip() {
  return (
    <section className="bg-cobbles-forest text-white py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <blockquote className="border-l-2 border-cobbles-copper-light/60 pl-6">
          <p className="font-display font-light text-xl lg:text-2xl text-white/90 leading-snug">
            &ldquo;{landingQuote.text}&rdquo;
          </p>
          <footer className="mt-3 text-xs tracking-wide text-cobbles-copper-light">
            {landingQuote.source}
          </footer>
        </blockquote>

        <div className="grid grid-cols-3 gap-6">
          {landingRatings.map((rating) => (
            <div key={rating.source}>
              <p className="font-display font-light text-3xl lg:text-4xl text-white">
                {rating.value}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.15em] uppercase text-white/50 font-medium">
                {rating.source}
              </p>
              <p className="mt-1 text-[11px] text-white/40 font-light">{rating.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}