const links = [
  { id: "lp-stay", label: "Verblijf" },
  { id: "lp-experiences", label: "Beleving" },
  { id: "lp-packages", label: "Arrangementen" },
  { id: "lp-region", label: "Streek" },
  { id: "lp-practical", label: "Praktisch" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function LandingHeader({ href }) {
  return (
    <header className="sticky top-0 z-30 bg-cobbles-sand-light/95 backdrop-blur border-b border-cobbles-stone/25">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollTo("lp-top")}
          className="font-display font-semibold tracking-[0.25em] text-sm text-cobbles-charcoal"
        >
          COBBLES
        </button>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs tracking-wide text-cobbles-charcoal/70 hover:text-cobbles-copper transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-5 py-2.5 rounded-full bg-cobbles-charcoal text-white hover:bg-cobbles-copper transition-colors whitespace-nowrap"
        >
          Boek nu
        </a>
      </div>
    </header>
  );
}