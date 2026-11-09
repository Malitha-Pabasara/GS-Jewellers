"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    title: "NEW ARRIVALS",
    subtitle: "Explore our",
    video: "/videos/hero-video.mp4",
    href: "/new",
  },
  {
    title: "DIAMOND COLLECTION",
    subtitle: "Discover timeless",
    video: "/videos/hero-video2.mp4",
    href: "/diamonds",
  },
  {
    title: "GOLD ELEGANCE",
    subtitle: "Shine with",
    image: "/images/bannern3.webp",
    href: "/gold",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const videoRefs = useRef([]);

  const currentSlide = SLIDES[active];

  const changeSlide = (nextIndex) => {
    if (transitioning || nextIndex === active) return;

    setTransitioning(true);

    // Pause outgoing video
    const currentVideo = videoRefs.current[active];
    if (currentVideo) {
      currentVideo.pause();
    }

    setActive(nextIndex);
  };

  // Automatically change image slides
  useEffect(() => {
    if (currentSlide.video) return;

    const timer = setTimeout(() => {
      changeSlide((active + 1) % SLIDES.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [active, currentSlide.video]);

  // Start incoming video
  useEffect(() => {
    const video = videoRefs.current[active];

    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [active]);

  // Finish transition
  useEffect(() => {
    if (!transitioning) return;

    const timer = setTimeout(() => {
      setTransitioning(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [active, transitioning]);

  // Video finished
  const handleVideoEnd = () => {
    changeSlide((active + 1) % SLIDES.length);
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === active
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {slide.video ? (
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={slide.video}
              muted
              playsInline
              preload="auto"
              onEnded={i === active ? handleVideoEnd : undefined}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover object-center"
            />
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          {/* Content */}
          <div
            className={`absolute inset-0 flex items-center justify-start transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="max-w-2xl px-8 text-white md:px-20">
              <p className="font-serif-heading text-[13px] tracking-[0.35em] uppercase">
                {slide.subtitle}
              </p>

              <h1 className="mt-6 font-serif-heading text-[clamp(3rem,7vw,6rem)] leading-none tracking-[0.04em]">
                {slide.title}
              </h1>

              <a
                href={slide.href}
                className="mt-10 inline-block border border-white px-10 py-4 text-[13px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
