"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    title: "NEW ARRIVALS",
    subtitle: "Explore our",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401",
    href: "/new",
  },
  {
    title: "DIAMOND COLLECTION",
    subtitle: "Discover timeless",
    image: "https://images.unsplash.com/photo-1602752250015-52934bc45613",
    href: "/diamonds",
  },
  {
    title: "GOLD ELEGANCE",
    subtitle: "Shine with",
    image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787",
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
    <section className="relative h-[75vh] w-full overflow-hidden">

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
          {/* Image */}
          <Image
            src={`${slide.image}?auto=format&fit=crop&w=1600&q=80`}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white px-4">

              <p className="font-serif-heading text-[13px] tracking-[0.2em] uppercase">
                {slide.subtitle}
              </p>

              <h1 className="mt-4 font-serif-heading text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.05em]">
                {slide.title}
              </h1>

              <a
                href={slide.href}
                className="mt-8 inline-block border border-white px-10 py-3 text-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
              >
                Shop Now
              </a>

            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === active
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
