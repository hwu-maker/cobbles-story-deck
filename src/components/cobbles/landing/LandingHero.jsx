import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import LandingBookingBar from "@/components/cobbles/landing/LandingBookingBar";
import LandingDxaReadout from "@/components/cobbles/landing/LandingDxaReadout";
import { landingHero } from "@/data/landingContent";

const ROTATE_MS = 7000;

export default function LandingHero({ stay, onChange, href }) {
  const slides = landingHero.slides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), ROTATE_MS);
    return () => clearInterval(timer);
  }, [slides.length, index]);

  const slide = slides[index];

  return (
    <section id="lp-top">
      <div className="relative h-[62vh] min-h-[420px] max-h-[620px] overflow-hidden bg-cobbles-charcoal">
        {slides.map((item, i) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title}
            fittingType="fill"
            focalPointX={item.focalPointX}
            focalPointY={item.focalPointY}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-cobbles-charcoal/95 via-cobbles-charcoal/55 to-cobbles-charcoal/25" />

        <div className="relative h-full max-w-6xl mx-auto px-5 lg:px-8 flex flex-col justify-end pb-16 lg:pb-20">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper-light font-medium">
              {slide.tag}
            </span>
            <h1 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-[1.12]">
              {slide.title}
            </h1>
            <p className="mt-5 text-base lg:text-lg text-white/75 font-light max-w-2xl leading-relaxed">
              {slide.text}
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {slides.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setIndex(i)}
                className={`px-4 py-2 rounded-full text-xs tracking-wide border transition-colors ${
                  i === index
                    ? "border-cobbles-copper-light bg-cobbles-copper/25 text-white"
                    : "border-white/25 text-white/60 hover:text-white hover:border-white/50"
                }`}
              >
                {item.tab}
              </button>
            ))}
          </div>
        </div>

        {slide.visual === "dxa" && <LandingDxaReadout />}
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 -mt-8 relative z-10">
        <LandingBookingBar stay={stay} onChange={onChange} href={href} />
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {landingHero.promises.map((promise) => (
            <span
              key={promise}
              className="flex items-center gap-2 text-[11px] text-cobbles-charcoal/60"
            >
              <Check className="w-3.5 h-3.5 text-cobbles-forest" />
              {promise}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}