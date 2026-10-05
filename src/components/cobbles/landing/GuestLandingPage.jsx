import { useState } from "react";
import LandingHeader from "@/components/cobbles/landing/LandingHeader";
import LandingHero from "@/components/cobbles/landing/LandingHero";
import LandingTrustStrip from "@/components/cobbles/landing/LandingTrustStrip";
import LandingPillars from "@/components/cobbles/landing/LandingPillars";
import LandingRooms from "@/components/cobbles/landing/LandingRooms";
import LandingExperiences from "@/components/cobbles/landing/LandingExperiences";
import LandingPackages from "@/components/cobbles/landing/LandingPackages";
import LandingFeaturedArrangements from "@/components/cobbles/landing/LandingFeaturedArrangements";
import LandingRegion from "@/components/cobbles/landing/LandingRegion";
import LandingFaq from "@/components/cobbles/landing/LandingFaq";
import LandingClosing from "@/components/cobbles/landing/LandingClosing";
import { addDays, bookingUrl, landingRooms, todayIso } from "@/data/landingContent";

export default function GuestLandingPage() {
  const [stay, setStay] = useState(() => ({
    arrival: addDays(todayIso(), 1),
    departure: addDays(todayIso(), 3),
    guests: "2",
  }));

  const href = bookingUrl(stay);

  const updateStay = (patch) =>
    setStay((current) => {
      const next = { ...current, ...patch };
      if (patch.arrival && next.departure <= next.arrival) {
        next.departure = addDays(patch.arrival, 1);
      }
      return next;
    });

  return (
    <div className="bg-cobbles-sand-light">
      <LandingHeader href={href} />
      <LandingHero stay={stay} onChange={updateStay} href={href} />
      <LandingTrustStrip />
      <LandingPillars />
      <LandingRooms href={href} />
      <LandingExperiences href={href} />
      <LandingPackages href={href} />
      <LandingFeaturedArrangements />
      <LandingRegion />
      <LandingFaq />
      <LandingClosing href={href} />

      <div className="sticky bottom-0 z-30 border-t border-cobbles-stone/30 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center justify-between gap-4">
          <p className="text-xs text-cobbles-charcoal/60">
            <span className="font-display text-sm text-cobbles-charcoal">
              {landingRooms[0].price}
            </span>
            <span className="hidden sm:inline"> · Beste tarief bij rechtstreeks boeken</span>
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-cobbles-copper text-white text-sm font-medium hover:bg-cobbles-copper-light transition-colors whitespace-nowrap"
          >
            Boek nu
          </a>
        </div>
      </div>
    </div>
  );
}