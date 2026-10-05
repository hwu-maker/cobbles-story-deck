import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/cobbles/Reveal";
import GuestLandingPage from "@/components/cobbles/landing/GuestLandingPage";
import { landingHero, landingSection } from "@/data/landingContent";

export default function LandingPagePreview() {
  const [open, setOpen] = useState(false);

  return (
    <section id="landing" className="py-24 lg:py-36 bg-cobbles-sand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
                {landingSection.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-cobbles-charcoal mt-6 leading-[1.15]">
                {landingSection.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-cobbles-charcoal/70 leading-relaxed font-light">
                {landingSection.intro}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-10 space-y-5 border-t border-cobbles-stone/30 pt-8">
                {landingSection.principles.map((principle, i) => (
                  <li key={principle.title} className="flex gap-4">
                    <span className="font-display text-sm text-cobbles-copper pt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-cobbles-charcoal">
                        {principle.title}
                      </p>
                      <p className="mt-1 text-sm text-cobbles-charcoal/60 font-light leading-relaxed">
                        {principle.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.4}>
              <button
                onClick={() => setOpen(true)}
                className="mt-10 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cobbles-charcoal text-white text-sm font-medium hover:bg-cobbles-copper transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                {landingSection.cta}
              </button>
              <p className="mt-4 text-xs text-cobbles-charcoal/50 font-light leading-relaxed max-w-md">
                {landingSection.note}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <button
              onClick={() => setOpen(true)}
              className="group block w-full text-left bg-white rounded-sm border border-cobbles-stone/30 overflow-hidden hover:border-cobbles-copper/50 transition-colors"
            >
              <div className="flex items-center gap-2 px-4 h-10 border-b border-cobbles-stone/25 bg-cobbles-sand-light">
                <span className="w-2.5 h-2.5 rounded-full bg-cobbles-stone/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-cobbles-stone/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-cobbles-stone/50" />
                <span className="ml-3 text-[11px] text-cobbles-charcoal/45">cobbles.be</span>
                <span className="ml-auto text-[10px] tracking-[0.15em] uppercase text-cobbles-copper">
                  Live
                </span>
              </div>

              <div className="relative aspect-[16/11] overflow-hidden bg-cobbles-charcoal">
                <Image
                  src={landingHero.slides[0].image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cobbles-charcoal/90 via-cobbles-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-cobbles-copper-light font-medium">
                    {landingHero.slides[0].tag}
                  </span>
                  <p className="mt-3 font-display font-light text-xl lg:text-2xl text-white leading-snug max-w-md">
                    {landingHero.slides[0].title}
                  </p>
                  <p className="mt-3 text-[11px] text-white/60 font-light leading-relaxed max-w-md">
                    {landingHero.slides[0].text}
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-center gap-3">
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {["Aankomst", "Vertrek", "Gasten"].map((fieldLabel) => (
                    <span
                      key={fieldLabel}
                      className="text-[10px] tracking-wide uppercase text-cobbles-charcoal/40 border-b border-cobbles-stone/40 pb-2"
                    >
                      {fieldLabel}
                    </span>
                  ))}
                </div>
                <span className="px-4 py-2 rounded-sm bg-cobbles-copper text-white text-[11px] font-medium">
                  Boek nu
                </span>
              </div>
            </button>
          </Reveal>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[1180px] w-[95vw] h-[92vh] p-0 gap-0 flex flex-col bg-white overflow-hidden sm:rounded-lg [&>button]:hidden">
          <DialogTitle className="sr-only">Gastenpagina van COBBLES</DialogTitle>
          <DialogDescription className="sr-only">
            Een werkende preview van de voorgestelde gastenpagina.
          </DialogDescription>

          <div className="flex items-center gap-2 px-4 h-11 bg-cobbles-charcoal shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="mx-3 flex-1 truncate text-[11px] text-white/45 bg-white/5 rounded-full px-4 py-1.5">
              cobbles.be
            </span>
            <DialogClose className="text-white/60 hover:text-white transition-colors p-1">
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto">
            <GuestLandingPage />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}