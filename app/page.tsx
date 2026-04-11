import { About } from "@/components/About";
import { EventFlow } from "@/components/EventFlow";
import { FAQ } from "@/components/FAQ";
import { getHomepageEventFlowSteps } from "@/lib/site-config";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const homepageFlowSteps = getHomepageEventFlowSteps();

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Gallery />
      <EventFlow steps={homepageFlowSteps} instanceKey="home" />
      <Testimonials />
      <Packages />
      <LeadForm />
      <FAQ />
    </main>
  );
}
