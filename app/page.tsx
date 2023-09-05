import Image from "next/image";

import MostVisitedLinks from "@/components/most-visited-links";
import ServicesSection from "@/components/services-section";
import VisitorFeedback from "@/components/visitor-feedback";
import CataloguesSection from "@/components/catalogue-section";

export default function Home() {
  return (
    <div>
      <CataloguesSection />
      <ServicesSection />
      <MostVisitedLinks />
      <VisitorFeedback />

      <title>Playground</title>
    </div>
  );
}
