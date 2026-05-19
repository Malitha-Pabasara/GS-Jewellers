function IconRingRosette({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M32 18c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M18 44c2-6 7-10 14-10s12 4 14 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTruck({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M8 38h28V22H8v16zM36 28h10l8 10v10H36V28z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="42" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="48" cy="42" r="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconRibbonCheck({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M20 12h24l4 8-14 8-4-8-4 8-14-8 4-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M26 34l4 4 8-10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCertified({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M32 8L14 16v14c0 12 8 22 18 26 10-4 18-14 18-26V16L32 8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M22 32l6 6 14-14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 44h28"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

const ITEMS = [
  {
    Icon: IconRingRosette,
    title: "Consciously Sourced Diamonds.",
    body: "We source our diamonds responsibly, ensuring ethical and sustainable practices.",
  },
  {
    Icon: IconTruck,
    title: "Free Worldwide Delivery & Returns.",
    body: "Enjoy hassle-free shopping with free shipping and easy returns.",
  },
  {
    Icon: IconRibbonCheck,
    title: "GS Lifetime Guarantee.",
    body: "We stand behind the quality of our products with a lifetime guarantee.",
  },
  {
    Icon: IconCertified,
    title: "Certified Quality.",
    body: "Every GS Jeweller is certified for its brilliance and quality, offering you assurance.",
  },
];

export default function OurPromiseSection() {
  return (
    <section className="texture-facet border-y border-[#E6DCD4]/60">
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-8">
        <h2 className="font-serif-heading text-center text-[clamp(1.75rem,3vw,2.25rem)] tracking-[0.08em] text-[#013220]">
          GS COMMITMENT
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {ITEMS.map(({ Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#013220] bg-white/70 text-[#013220] shadow-sm">
                <Icon className="h-14 w-14" />
              </div>
              <h3 className="mt-5 max-w-[220px] font-serif-heading text-[17px] leading-snug text-[#013220]">
                {title}
              </h3>
              <p className="mt-3 max-w-[260px] text-[14px] leading-relaxed text-[#013220]/85">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
