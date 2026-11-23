import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import EngagementModels from "@/components/EngagementModels";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPresence from "@/components/GlobalPresence";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <EngagementModels />
      <ProcessSection />
      <WhyChooseUs />
      <GlobalPresence />
      <ContactSection />
      <Footer />
    </main>
  );
}
