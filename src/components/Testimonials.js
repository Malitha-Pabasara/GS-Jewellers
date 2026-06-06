"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Rebecca Silva",
    title: "An Incredible Experience",
    quote:
      "From start to finish, GS Jewellers provided exceptional service. The attention to detail and craftsmanship exceeded every expectation. The ring was beautifully crafted and the customer service was outstanding.",
    image: "/images/testimonial1.webp",
  },
  {
    name: "Nimali Perera",
    title: "Perfect Engagement Ring",
    quote:
      "The team helped us create a ring that felt truly personal. Every detail was carefully considered and the final result was breathtaking.",
    image: "/images/testimonial2.webp",
  },
  {
    name: "Dilan Fernando",
    title: "Exceptional Quality",
    quote:
      "Outstanding craftsmanship and attention to detail. The jewellery exceeded our expectations and will be treasured for years.",
    image: "/images/testimonial3.webp",
  },
  {
    name: "Kasun Perera",
    title: "Beautiful Craftsmanship",
    quote:
      "The quality of the jewellery is remarkable. Every detail was finished to perfection and the service was excellent throughout.",
    image: "/images/testimonial4.webp",
  },
  {
    name: "Sanjana Fernando",
    title: "Highly Recommended",
    quote:
      "A wonderful experience from consultation to delivery. We couldn't be happier with our purchase and the attention we received.",
    image: "/images/testimonial5.webp",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = TESTIMONIALS[active];

  return (
    <section className="bg-[#f8f6f3] py-24">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">

        {/* CENTERED HEADING */}
        <h2 className="mb-16 text-center font-serif-heading text-[clamp(2.2rem,3vw,3.2rem)] tracking-[0.08em] text-[#013220]">
          TESTIMONIALS
        </h2>

        {/* CONTENT */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="text-center">

            <h3 className="font-serif-heading text-[clamp(1.8rem,2vw,2.4rem)] text-[#013220]/75">
              "{testimonial.title}"
            </h3>

            <p className="mx-auto mt-8 max-w-[620px] text-[18px] leading-[2] text-[#013220]/75">
              {testimonial.quote}
            </p>

            <p className="mt-10 font-serif-heading text-[17px] italic tracking-wide text-[#013220]">
              ~ {testimonial.name.toUpperCase()}
            </p>

            {/* DOTS */}
            <div className="mt-16 flex justify-center gap-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "bg-[#013220] scale-125"
                      : "bg-[#013220]/20 hover:bg-[#013220]/40"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <div className="relative h-[500px] w-full max-w-[650px] overflow-hidden rounded-sm">
              <Image
                key={testimonial.image}
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-opacity duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}