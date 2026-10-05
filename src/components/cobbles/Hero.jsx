import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { brand, images } from "@/data/cobblesContent";
import { Image } from "@/components/ui/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="De Vlaamse Ardennen in het gouden licht"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cobbles-charcoal/50 via-cobbles-charcoal/35 to-cobbles-charcoal/75" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold tracking-[0.3em] text-white text-5xl sm:text-6xl lg:text-8xl"
        >
          {brand.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-white/90 tracking-[0.2em] uppercase text-xs sm:text-sm font-light"
        >
          {brand.baseline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-white/85 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto cobbles-text-balance"
        >
          {brand.tagline}
        </motion.p>
      </div>

      <motion.button
        onClick={() => document.getElementById("idea")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll naar de inhoud"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}