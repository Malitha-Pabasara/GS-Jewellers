"use client";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

const CATEGORIES = [
  {
    label: "Rings",
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Pendants",
    src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Necklace",
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Earrings",
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
  },
  {
    label: "Cufflinks",
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Bangles and Bracelets",
    src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
  },
  
];

export default function CategoryCarousel() {
  const scrollerRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 420);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="texture-grey border-y border-[#E6DCD4]/50">
      <div className="relative mx-auto max-w-[1440px] px-4 py-14 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-2 z-10 flex items-center lg:left-4">
          <button
            type="button"
            aria-label="Previous categories"
            onClick={() => scrollByAmount(-1)}
            className="pointer-events-auto rounded-full border border-[#013220] bg-white/90 p-2 text-[#013220] shadow-sm hover:bg-white"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-2 z-10 flex items-center lg:right-4">
          <button
            type="button"
            aria-label="Next categories"
            onClick={() => scrollByAmount(1)}
            className="pointer-events-auto rounded-full border border-[#013220] bg-white/90 p-2 text-[#013220] shadow-sm hover:bg-white"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-10 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className="group flex w-[150px] shrink-0 snap-start flex-col items-center gap-3 sm:w-[168px]"
            >
              <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-[#013220] bg-white shadow-sm sm:h-[168px] sm:w-[168px]">
                <Image
                  src={cat.src}
                  alt={cat.label}
                  fill
                  sizes="168px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-center text-[13px] font-medium leading-tight text-[#013220]">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
