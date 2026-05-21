import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import CaseStudy from "@/components/CaseStudy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070f] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <CaseStudy />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
