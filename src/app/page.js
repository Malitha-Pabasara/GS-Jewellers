import CategoryCarousel from "@/components/CategoryCarousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurPromiseSection from "@/components/OurPromiseSection";
import ShippingBar from "@/components/ShippingBar";
import CustomDesignSection from "@/components/CustomDesignSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ShippingBar />
      <Navbar />
      
      <main>
        <HeroSection />
        <CustomDesignSection/>
        <OurPromiseSection />
        <CategoryCarousel />
      </main>
      <Footer />
    </div>
  );
}
