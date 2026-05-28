"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    title: "NEW ARRIVALS",
    subtitle: "Explore our",
    image: "/images/bannern1.webp",
    href: "/new",
  },
  {
    title: "DIAMOND COLLECTION",
    subtitle: "Discover timeless",
    image: "/images/bannern2.webp",
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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ${
            i === active
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-110 z-0"
          }`}
        >

          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-start">

            <div className="text-white px-8 md:px-20 max-w-2xl">

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
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}

      </div>

    </section>
  );
}