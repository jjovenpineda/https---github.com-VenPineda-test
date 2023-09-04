import Image from "next/image";

import MostVisitedLinks from "@/components/mostVisitedLinks";
import ServicesSection from "@/components/servicesSection";
import VisitorFeedback from "@/components/visitorFeedback";
import eParticipationImage from "../public/Images/eparticipation-image.jpg";
export default function Home() {
  return (
    <div>
      <ServicesSection />
      <MostVisitedLinks />
      <VisitorFeedback />
      <title>Playground</title>
    </div>
  );
}
