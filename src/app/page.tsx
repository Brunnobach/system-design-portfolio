import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DecisionsSection } from "@/components/DecisionsSection";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WorkSection />
        <DecisionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
