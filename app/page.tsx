import { PageFade } from "@/components/page-fade";
import { About } from "@/components/sections/About";
import { EventFlow } from "@/components/sections/EventFlow";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { LeadForm } from "@/components/sections/LeadForm";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <PageFade>
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Gallery />
        <EventFlow />
        <Testimonials />
        <Packages />
        <LeadForm />
        <FAQ />
      </main>
    </PageFade>
  );
}
