import CategoryCarousel from "@/components/CategoryCarousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ShippingBar from "@/components/ShippingBar";
import CustomDesignSection from "@/components/CustomDesignSection";
import CustomDesignSection2 from "@/components/CustomDesignSection2";
import TestimonialSection from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#cdbbaa]">
      {/* Shipping bar - Not sticky */}
      <ShippingBar />

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-[100] -mb-[88px]">
        <Navbar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      <main>
        <CategoryCarousel />
        <CustomDesignSection />
        <CustomDesignSection2 />
        <TestimonialSection />
      </main>

      <Footer />
    </div>
  );
}
