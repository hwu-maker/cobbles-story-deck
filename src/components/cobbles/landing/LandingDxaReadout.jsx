// Scanbeeld bij de gezondheidshero: wat een DXA-meting oplevert, in dezelfde rustige
// vormentaal als de rest van de presentatie.
const weefsels = [
  { label: "Vet", chip: "bg-cobbles-copper", breedte: "w-[26%]" },
  { label: "Spier", chip: "bg-cobbles-sand", breedte: "w-[58%]" },
  { label: "Bot", chip: "bg-white/70", breedte: "w-[16%]" },
];

const kenmerken = ["Pijnloos", "6 minuten", "Lage dosis"];

export default function LandingDxaReadout() {
  return (
    <div className="pointer-events-none absolute right-5 lg:right-8 bottom-16 lg:bottom-20 hidden w-[300px] lg:block">
      <div className="rounded-xl border border-white/15 bg-cobbles-charcoal/50 backdrop-blur-sm px-6 py-5">
        <p className="text-[10px] tracking-[0.25em] uppercase text-cobbles-copper-light font-medium">
          DXA · Lichaamssamenstelling
        </p>

        <div className="mt-5 flex h-1.5 w-full overflow-hidden rounded-full">
          {weefsels.map((weefsel) => (
            <span key={weefsel.label} className={`h-full ${weefsel.chip} ${weefsel.breedte}`} />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {weefsels.map((weefsel) => (
            <span key={weefsel.label} className="flex items-center gap-2 text-[11px] text-white/65">
              <span className={`h-2 w-2 rounded-full ${weefsel.chip}`} />
              {weefsel.label}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-white/15 pt-4">
          {kenmerken.map((kenmerk) => (
            <span key={kenmerk} className="text-[11px] text-white/45">
              {kenmerk}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}