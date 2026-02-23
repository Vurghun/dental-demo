import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
    </div>
  );
}
