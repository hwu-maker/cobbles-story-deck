import { Instagram, Facebook, Linkedin } from "lucide-react";
import { socialChannels } from "@/data/cobblesContent";

// TikTok staat niet in lucide-react — het officiële glyph als inline svg.
function TikTokGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.79.04.01.08.02.12.02.01 1.39-.01 2.77-.02 4.15-.13-.04-.27-.08-.41-.09-.85-.13-1.75.05-2.48.5-.69.43-1.19 1.15-1.35 1.95-.05.26-.07.53-.06.79.01.09.01.18.02.27.06.75.4 1.47.95 1.98.62.57 1.47.86 2.31.79.94-.06 1.83-.6 2.35-1.39.24-.36.4-.77.45-1.19.09-1.32.06-2.64.07-3.96.01-4.28-.01-8.56.02-12.84Z" />
    </svg>
  );
}

const iconen = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  tiktok: TikTokGlyph,
};

export default function SocialChannels() {
  return (
    <div className="mt-12">
      <p className="text-xs tracking-[0.2em] uppercase text-white/40">Volg de bestemming</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-9 gap-y-4">
        {socialChannels.map((kanaal) => {
          const Icoon = iconen[kanaal.id];
          return (
            <a
              key={kanaal.id}
              href={kanaal.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors"
            >
              <Icoon />
              <span className="text-xs tracking-wide uppercase">{kanaal.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}