import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isUnlocked, isValidAccessCode, saveAccess } from "@/data/accessCodes";

const destinations = {
  concept: { label: "CONCEPT", path: "/concept" },
  site: { label: "SITE", path: "/site" },
};

export default function FrontDoor() {
  const navigate = useNavigate();
  const [choice, setChoice] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const openDestination = (key) => {
    const destination = destinations[key];
    if (isUnlocked()) {
      navigate(destination.path);
      return;
    }
    setChoice(key);
    setError("");
  };

  const submit = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail || !code.trim()) {
      setError("Vul je naam, e-mail en de code van Meritsa in.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Vul een geldig e-mailadres in.");
      return;
    }
    if (!isValidAccessCode(code)) {
      setError("Die code wordt niet herkend.");
      return;
    }
    saveAccess({ name: trimmedName, email: trimmedEmail, code });
    navigate(destinations[choice].path);
  };

  return (
    <main className="min-h-screen bg-cobbles-sand-light text-cobbles-charcoal flex flex-col items-center justify-center px-6 py-16">
      <h1 className="font-display font-semibold tracking-[0.28em] text-5xl sm:text-7xl lg:text-8xl text-center">
        COBBLES
      </h1>

      {choice ? (
        <form onSubmit={submit} className="mt-14 w-full max-w-md" noValidate>
          <p className="text-center text-xs tracking-[0.22em] uppercase text-cobbles-charcoal/55">
            {destinations[choice].label}
          </p>
          <label className="block mt-8 text-[11px] tracking-[0.18em] uppercase text-cobbles-charcoal/60">
            Naam
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              className="mt-2 block w-full bg-white border border-cobbles-stone/40 px-4 py-3 text-base tracking-normal text-cobbles-charcoal outline-none focus:border-cobbles-copper"
            />
          </label>
          <label className="block mt-5 text-[11px] tracking-[0.18em] uppercase text-cobbles-charcoal/60">
            E-mail
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              className="mt-2 block w-full bg-white border border-cobbles-stone/40 px-4 py-3 text-base tracking-normal text-cobbles-charcoal outline-none focus:border-cobbles-copper"
            />
          </label>
          <label className="block mt-5 text-[11px] tracking-[0.18em] uppercase text-cobbles-charcoal/60">
            Code van Meritsa
            <input
              value={code}
              onChange={(event) => setCode(event.target.value)}
              autoComplete="off"
              className="mt-2 block w-full bg-white border border-cobbles-stone/40 px-4 py-3 text-base tracking-[0.12em] uppercase text-cobbles-charcoal outline-none focus:border-cobbles-copper"
            />
          </label>
          {error ? (
            <p className="mt-4 text-sm text-cobbles-copper" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="mt-8 w-full py-4 bg-cobbles-charcoal text-cobbles-sand-light font-display tracking-[0.22em] text-sm hover:bg-cobbles-copper transition-colors"
          >
            OPEN
          </button>
          <button
            type="button"
            onClick={() => {
              setChoice(null);
              setError("");
            }}
            className="mt-4 w-full py-3 text-[11px] tracking-[0.18em] uppercase text-cobbles-charcoal/50 hover:text-cobbles-charcoal"
          >
            Terug
          </button>
        </form>
      ) : (
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-3xl">
          <button
            type="button"
            onClick={() => openDestination("concept")}
            className="min-h-36 sm:min-h-48 font-display tracking-[0.22em] text-2xl sm:text-4xl bg-cobbles-charcoal text-cobbles-sand-light hover:bg-cobbles-copper transition-colors"
          >
            CONCEPT
          </button>
          <button
            type="button"
            onClick={() => openDestination("site")}
            className="min-h-36 sm:min-h-48 font-display tracking-[0.22em] text-2xl sm:text-4xl bg-cobbles-charcoal text-cobbles-sand-light hover:bg-cobbles-copper transition-colors"
          >
            SITE
          </button>
        </div>
      )}
    </main>
  );
}
