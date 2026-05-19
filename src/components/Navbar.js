"use client";

import {
  Bars3Icon,
  CalendarDaysIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "./Logo";

const MAIN_LINKS = [
  {
    label: "Rings",
    href: "/rings",
    sublinks: [
      { name: "Engagement Rings", href: "/rings/engagement" },
      { name: "Everyday Rings", href: "/rings/everyday" },
      { name: "Gemstone Rings", href: "/rings/gemstone" },
      { name: "Solitaire Rings", href: "/rings/solitaire" },
    ],
  },
  {
    label: "Earrings",
    href: "/earrings",
    sublinks: [
      { name: "Stud Earrings", href: "/earrings/studs" },
      { name: "Hoop Earrings", href: "/earrings/hoops" },
      { name: "Drop Earrings", href: "/earrings/drop" },
      { name: "Diamond Earrings", href: "/earrings/diamond" },
    ],
  },
  {
    label: "Necklaces and Pendants",
    href: "/necklaces",
    sublinks: [
      { name: "Gold Necklaces", href: "/necklaces/gold" },
      { name: "Diamond Pendants", href: "/necklaces/diamond" },
      { name: "Layered Necklaces", href: "/necklaces/layered" },
    ],
  },
  {
    label: "Bracelets",
    href: "/bracelets",
    sublinks: [
      { name: "Charm Bracelets", href: "/bracelets/charm" },
      { name: "Bangles", href: "/bracelets/bangles" },
      { name: "Cuff Bracelets", href: "/bracelets/cuff" },
    ],
  },
  {
    label: "Jewellery Sets",
    href: "/sets",
    sublinks: [
      { name: "Bridal Sets", href: "/sets/bridal" },
      { name: "Party Sets", href: "/sets/party" },
      { name: "Everyday Sets", href: "/sets/everyday" },
    ],
  },
  
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E6DCD4]/80">
      <div className="relative mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-4 px-4 lg:px-8">
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Logo />
        </div>
        <button
          type="button"
          className="rounded p-2 text-[#013220] lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>

<nav className="font-serif-heading uppercase tracking-[0.25em] text-[14px] text-black hidden flex-1 items-center justify-center gap-10 lg:flex">  {MAIN_LINKS.map((item) => (
    <div key={item.label} className="group relative">

      {/* Main menu */}
      <a
        href={item.href}
        className="inline-flex items-center gap-1 whitespace-nowrap hover:opacity-80"
      >
        {item.label}
        {item.sublinks && (
          <ChevronDownIcon className="h-3.5 w-3.5 opacity-80" />
        )}
      </a>

      {/* Dropdown */}
      {item.sublinks && (
        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[240px] -translate-x-1/2 pt-2 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto">
          <div className="rounded-sm border border-[#E6DCD4] bg-white py-2 shadow-lg">

            {item.sublinks.map((sub) => (
              <a
                key={sub.name}
                href={sub.href}
                className="block px-4 py-2.5 text-[14px] font-light text-[#000000] hover:bg-[#E6DCD4]/40"
              >
                {sub.name}
              </a>
            ))}

          </div>
        </div>
      )}

    </div>
  ))}
</nav>

        <div className="hidden items-center gap-4 text-[#013220] lg:flex">
          <button type="button" aria-label="Search" className="hover:opacity-75">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Book appointment" className="hover:opacity-75">
            <CalendarDaysIcon className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Account" className="hover:opacity-75">
            <UserIcon className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Shopping bag" className="hover:opacity-75">
            <ShoppingBagIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#E6DCD4] bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-[15px] font-medium text-[#013220]">
           {MAIN_LINKS.map((item) => (
             <div key={item.label}>
      
              {/* Main item */}
              <p className="inline-flex items-center gap-1 font-semibold">
              {item.label}
              </p>

               {/* Sublinks */}
                {item.sublinks && (
                 <div className="ml-3 mt-2 flex flex-col gap-2">
                 {item.sublinks.map((sub) => (
                  <a
                     key={sub.name}
                      href={sub.href}
                      className="text-[14px] text-[#013220]/80"
                    >
                      {sub.name}
                  </a>
                   ))}
                  </div>
                )}

            </div>
           ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
