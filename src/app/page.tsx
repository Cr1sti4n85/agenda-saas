import { ContactSection } from "@/components/Contact";
import { FeaturesSection } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { PricingSection } from "@/components/Pricing";
import { ServicesSection } from "@/components/Services";
import { TestimonialsSection } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
