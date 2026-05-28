import CategoryCarousel from "@/components/CategoryCarousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurPromiseSection from "@/components/OurPromiseSection";
import ShippingBar from "@/components/ShippingBar";
import CustomDesignSection from "@/components/CustomDesignSection";
import CustomDesignSection2 from "@/components/CustomDesignSection2";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ShippingBar />
      <Navbar />
      
      <main>
        <HeroSection />
         <CategoryCarousel />
        <CustomDesignSection/>
        <CustomDesignSection2/>
        <OurPromiseSection />
       
      </main>
      <Footer />
    </div>
  );
}
