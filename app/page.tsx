import { Hero } from "@/components/home/Hero";
import { ValueProp } from "@/components/home/ValueProp";
import { Stats } from "@/components/home/Stats";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { Certifications } from "@/components/home/Certifications";
import { CallToAction } from "@/components/ui/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProp />
      <Stats />
      <ServicesOverview />
      <FeaturedProjects />
      <BeforeAfter />
      <ProcessPreview />
      <Testimonials />
      <Certifications />
      <CallToAction />
    </>
  );
}
