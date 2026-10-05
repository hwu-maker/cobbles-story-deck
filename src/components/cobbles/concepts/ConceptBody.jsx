export default function ConceptBody({ concept }) {
  return (
    <div>
      <p className="text-lg lg:text-xl text-cobbles-charcoal/75 font-light leading-relaxed">
        {concept.lead}
      </p>

      <div className="mt-12 space-y-10">
        {concept.sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display font-light text-2xl text-cobbles-charcoal">
              {section.title}
            </h2>
            <p className="mt-3 text-base text-cobbles-charcoal/70 font-light leading-relaxed">
              {section.body}
            </p>
            {section.list && (
              <ul className="mt-4 space-y-2 border-l border-cobbles-stone/40 pl-4">
                {section.list.map((item) => (
                  <li key={item} className="text-sm text-cobbles-charcoal/65 font-light leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {concept.quote && (
        <blockquote className="mt-12 border-l-2 border-cobbles-copper pl-6">
          <p className="font-display font-light text-xl lg:text-2xl text-cobbles-forest italic leading-snug">
            “{concept.quote.text}”
          </p>
          <footer className="mt-3 text-[11px] tracking-[0.15em] uppercase text-cobbles-charcoal/45">
            {concept.quote.source}
          </footer>
        </blockquote>
      )}
    </div>
  );
}