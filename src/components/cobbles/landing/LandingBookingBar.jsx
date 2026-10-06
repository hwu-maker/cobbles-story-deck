import { todayIso } from "@/data/landingContent";

const field = "flex-1 min-w-0 px-4 py-2.5 sm:py-3 rounded-sm hover:bg-cobbles-sand-light/70 transition-colors cursor-pointer";
const label = "block text-[10px] tracking-[0.2em] uppercase text-cobbles-charcoal/45 font-medium";
const control = "mt-1 w-full bg-transparent text-sm text-cobbles-charcoal outline-none";

export default function LandingBookingBar({ stay, onChange, href }) {
  const today = todayIso();

  return (
    <div className="bg-white/95 backdrop-blur rounded-sm shadow-xl p-1.5 flex flex-col sm:flex-row sm:items-stretch gap-1.5">
      <label className={field}>
        <span className={label}>Aankomst</span>
        <input
          type="date"
          value={stay.arrival}
          min={today}
          onChange={(e) => onChange({ arrival: e.target.value })}
          className={control}
        />
      </label>
      <label className={field}>
        <span className={label}>Vertrek</span>
        <input
          type="date"
          value={stay.departure}
          min={stay.arrival || today}
          onChange={(e) => onChange({ departure: e.target.value })}
          className={control}
        />
      </label>
      <label className={`${field} sm:flex-none sm:w-32`}>
        <span className={label}>Gasten</span>
        <select
          value={stay.guests}
          onChange={(e) => onChange({ guests: e.target.value })}
          className={`${control} cursor-pointer`}
        >
          {["1", "2", "3", "4", "5", "6"].map((n) => (
            <option key={n} value={n}>
              {n} {n === "1" ? "gast" : "gasten"}
            </option>
          ))}
        </select>
      </label>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-sm bg-cobbles-copper text-white text-sm font-medium hover:bg-cobbles-copper-light transition-colors flex items-center justify-center whitespace-nowrap"
      >
        Boek nu
      </a>
    </div>
  );
}