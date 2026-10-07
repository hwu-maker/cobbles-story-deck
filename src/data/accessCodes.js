// Public session codes issued by Meritsa. Compared case-insensitively, with surrounding spaces ignored.
export const ACCESS_CODES = [
  "COBBLES01",
  "COBBLES02",
  "COBBLES03",
  "COBBLES04",
  "COBBLES05",
  "COBBLES06",
  "COBBLES07",
  "COBBLES08",
  "COBBLES09",
  "COBBLES10",
];

const STORAGE_KEY = "cobbles-access";

export function normalizeAccessCode(value) {
  return String(value ?? "").trim().toUpperCase();
}

export function isValidAccessCode(value) {
  return ACCESS_CODES.includes(normalizeAccessCode(value));
}

export function readAccess() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data?.unlocked || !isValidAccessCode(data.code)) return null;
    if (!String(data.name || "").trim() || !String(data.email || "").trim()) return null;
    return data;
  } catch {
    return null;
  }
}

export function isUnlocked() {
  return readAccess() !== null;
}

export function saveAccess({ name, email, code }) {
  const record = {
    name: String(name).trim(),
    email: String(email).trim(),
    code: normalizeAccessCode(code),
    unlocked: true,
  };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}
