import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { brand, navSections, ctas } from "@/data/cobblesContent";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const linkClass = (id) =>
    scrolled
      ? active === id
        ? "text-cobbles-copper"
        : "text-cobbles-charcoal/70 hover:text-cobbles-charcoal"
      : active === id
        ? "text-white"
        : "text-white/70 hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cobbles-sand-light/95 backdrop-blur-md border-b border-cobbles-stone/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <button onClick={() => scrollTo("hero")} className="flex items-center">
          <span
            className={`font-display font-semibold tracking-[0.25em] text-sm lg:text-base transition-colors ${
              scrolled ? "text-cobbles-charcoal" : "text-white"
            }`}
          >
            {brand.name}
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-xs tracking-wide transition-colors ${linkClass(s.id)}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo("closing")}
            className={`text-xs tracking-wide px-5 py-2.5 rounded-full border transition-all ${
              scrolled
                ? "border-cobbles-charcoal text-cobbles-charcoal hover:bg-cobbles-charcoal hover:text-white"
                : "border-white/60 text-white hover:bg-white hover:text-cobbles-charcoal"
            }`}
          >
            {ctas.contact}
          </button>
        </div>

        <button
          className="lg:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X className={scrolled ? "text-cobbles-charcoal" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-cobbles-charcoal" : "text-white"} />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-cobbles-sand-light border-t border-cobbles-stone/20">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left text-sm text-cobbles-charcoal/80 hover:text-cobbles-copper transition-colors"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("closing")}
              className="text-left text-sm font-medium text-cobbles-copper mt-2"
            >
              {ctas.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}