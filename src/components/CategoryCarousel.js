"use client";

import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

const CATEGORIES = [
  { label: "Rings", href: "/rings", src: "/images/Ringcc.webp" },
  { label: "Pendants", href: "/pendants", src: "/images/pendentcc.webp" },
  { label: "Necklace", href: "/necklace", src: "/images/necklacecc.webp" },
  { label: "Earrings", href: "/earrings", src: "/images/earringscc.webp" },
  { label: "Cufflinks", href: "/cufflinks", src: "/images/cufflinkscc.webp" },
  { label: "Bangles & Bracelets", href: "/bracelets", src: "/images/bracelets.webp" },
  { label: "For Kids", href: "/kids", src: "/images/kidscc.webp" },
  { label: "Buy Gems", href: "/gems", src: "/images/gemscc.webp" },
];

export default function CategoryCarousel() {
  const scrollerRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);
  const paused = useRef(false);
  const widthRef = useRef(0);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    paused.current = true;

    el.scrollBy({
      left: dir * 260,
      behavior: "smooth",
    });

    setTimeout(() => {
      paused.current = false;
    }, 1200);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // half because we duplicate items
    widthRef.current = el.scrollWidth / 2;

    const speed = 40; // pixels per second (stable)

    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!paused.current) {
        positionRef.current += (speed * delta) / 1000;
        el.scrollLeft = positionRef.current;

        // seamless reset (NO jump visible)
        if (positionRef.current >= widthRef.current) {
          positionRef.current = 0;
          el.scrollLeft = 0;
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="texture-grey border-y border-[#E6DCD4]/50">
      <div className="relative mx-auto max-w-[1440px] px-4 py-14 lg:px-8">

        {/* LEFT */}
        <div className="absolute left-2 inset-y-0 flex items-center z-10 lg:left-4">
          <button
            onClick={() => scrollByAmount(-1)}
            className="rounded-full border border-[#013220] bg-white/90 p-2 text-[#013220] shadow hover:bg-white"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="absolute right-2 inset-y-0 flex items-center z-10 lg:right-4">
          <button
            onClick={() => scrollByAmount(1)}
            className="rounded-full border border-[#013220] bg-white/90 p-2 text-[#013220] shadow hover:bg-white"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* SCROLLER */}
        <div
          ref={scrollerRef}
          className="flex gap-8 overflow-x-hidden px-10 py-2"
        >
          {[...CATEGORIES, ...CATEGORIES].map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              className="group flex w-[150px] shrink-0 flex-col items-center gap-3 sm:w-[168px]"
            >
              <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-[#013220] bg-white shadow-sm sm:h-[168px] sm:w-[168px]">
                <Image
                  src={cat.src}
                  alt={cat.label}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-center text-[13px] font-medium text-[#013220]">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}