import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { landingFaq } from "@/data/landingContent";

export default function LandingFaq() {
  return (
    <section id="lp-practical" className="py-16 lg:py-24 bg-cobbles-sand scroll-mt-16">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <span className="text-xs tracking-[0.25em] uppercase text-cobbles-copper font-medium">
          Goed om te weten
        </span>
        <h2 className="mt-4 font-display font-light text-2xl sm:text-3xl lg:text-4xl text-cobbles-charcoal leading-[1.15]">
          Antwoorden, voor je boekt.
        </h2>

        <Accordion type="single" collapsible className="mt-8">
          {landingFaq.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="border-cobbles-stone/35"
            >
              <AccordionTrigger className="text-left font-display font-normal text-base text-cobbles-charcoal hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-cobbles-charcoal/65 font-light leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}