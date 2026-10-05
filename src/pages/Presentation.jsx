import Navigation from "@/components/cobbles/Navigation";
import Hero from "@/components/cobbles/Hero";
import TheIdea from "@/components/cobbles/TheIdea";
import TheDestination from "@/components/cobbles/TheDestination";
import ThreePillars from "@/components/cobbles/ThreePillars";
import Portfolio from "@/components/cobbles/Portfolio";
import BrandArchitecture from "@/components/cobbles/BrandArchitecture";
import CustomerJourney from "@/components/cobbles/CustomerJourney";
import TheExperience from "@/components/cobbles/TheExperience";
import TheRegion from "@/components/cobbles/TheRegion";
import TheOpportunity from "@/components/cobbles/TheOpportunity";
import LandingPagePreview from "@/components/cobbles/LandingPagePreview";
import Partnerships from "@/components/cobbles/Partnerships";
import Closing from "@/components/cobbles/Closing";

export default function Presentation() {
  return (
    <div className="bg-cobbles-sand-light min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TheIdea />
        <TheDestination />
        <ThreePillars />
        <Portfolio />
        <BrandArchitecture />
        <CustomerJourney />
        <TheExperience />
        <TheRegion />
        <TheOpportunity />
        <LandingPagePreview />
        <Partnerships />
        <Closing />
      </main>
    </div>
  );
}