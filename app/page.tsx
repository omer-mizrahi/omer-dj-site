import { About } from "@/components/About";
import { EventFlow } from "@/components/EventFlow";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ComplementaryServices } from "@/components/ComplementaryServices";
import { Packages } from "@/components/sections/Packages";
import { ReviewGallery } from "@/components/ReviewGallery";
import { StudioSection } from "@/components/StudioSection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <EventFlow />
      <StudioSection />
      <Gallery />
      <Testimonials />
      <ReviewGallery />
      <LeadForm />
      <FAQ />
      <ComplementaryServices />
    </main>
  );
}
