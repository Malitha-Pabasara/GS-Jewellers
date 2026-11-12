import CategoryCarousel from "@/components/CategoryCarousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ShippingBar from "@/components/ShippingBar";
import CustomDesignSection from "@/components/CustomDesignSection";
import CustomDesignSection2 from "@/components/CustomDesignSection2";
import TestimonialSection from "@/components/Testimonials";
import CircularCarousel from "@/components/CircularCarousel";

const items = [
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "A studio portrait",
    title: "Portrait",
    subtitle: "Studio",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Glass towers from street level",
    title: "Towers",
    subtitle: "Architecture",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
  {
    src: "/images/pendentcc.webp",
    alt: "Mist drifting through a valley",
    title: "Valley",
    subtitle: "Landscape",
  },
];

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

      {/* Main  Section */}
      <main>
        <div style={{ width: "100%", height: "560px", position: "relative" }}>
          <CircularCarousel
            items={items}
            preset="orbit"
            intro="assemble"
            cardWidth={312}
            aspectRatio={1}
            speed={7}
            captions={false}
            gap={18}
            tilt={-5}
            curve={1}
            perspective={1200}
            autoplay="drift"
            interval={3}
            direction="left"
            momentum={0.6}
            snap
            pauseOnHover
            focusOnClick
            draggable
            parallax={0.3}
            stretch={0.5}
            fadeColor="#0f1117"
            depthFade={0}
            innerShade={0}
            cornerRadius={12}
          />
        </div>
        <CategoryCarousel />
        <CustomDesignSection />

        <CustomDesignSection2 />
        <TestimonialSection />
      </main>

      <Footer />
    </div>
  );
}
