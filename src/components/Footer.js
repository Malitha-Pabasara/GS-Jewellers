import {
  ArrowRightCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-[#E8DCC8] transition hover:text-white"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H7V12h3.5V9.5c0-3.45 2-5.35 5.1-5.35 1.48 0 3 .26 3 .26v3.3h-1.7c-1.67 0-2.2 1.04-2.2 2.1V12h3.75l-.6 3.9h-3.15V22A10 10 0 0022 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.6 7.2a2.4 2.4 0 00-1.7-1.7C18.1 5 12 5 12 5s-6.1 0-7.9.5A2.4 2.4 0 002.4 7.2 25 25 0 002 12a25 25 0 00.4 4.8 2.4 2.4 0 001.7 1.7c1.8.5 7.9.5 7.9.5s6.1 0 7.9-.5a2.4 2.4 0 001.7-1.7 25 25 0 00.4-4.8 25 25 0 00-.4-4.8zM10 15V9l5 3-5 3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 8.5h-4V21h4V8.5zm-2-5A2 2 0 104.5 7 2 2 0 004.5 3.5zM21.5 21h-4v-6.2c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1 1V21h-4V8.5h4v1.7c.6-1 1.7-1.7 3.2-1.7 2.3 0 4 1.5 4 4.8V21z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.6 5.8c1 .9 2.3 1.4 3.7 1.4v3.1a7.7 7.7 0 01-3.7-1v5.4a6.5 6.5 0 11-6.5-6.5c.2 0 .4 0 .6.1v3.4a3.2 3.2 0 103.2 3.2V5.8h2.7z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.2 3H21l-6.5 7.4L22 21h-6.3l-4-5.2L6.4 21H3.8l7-8L2 3h6.5l3.6 4.8L18.2 3z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 00-3.6 19.3c-.1-1.5 0-3.4.4-4.9.3-1.3 2.2-8.8 2.2-8.8s-.6-1.2-.6-2.9c0-2.7 1.6-4.7 3.5-4.7 1.7 0 2.5 1.3 2.5 2.8 0 1.7-1.1 4.2-1.6 6.5-.5 2 1 3.6 2.9 3.6 3.5 0 6.2-3.7 6.2-9.1C22 6.8 18.3 3 12.6 3 6.2 3 3 6.7 3 10.8c0 1.2.4 2.5 1 3.2.1.2.1.3.1.5l-.4 1.7c-.1.4-.3.5-.7.3-1.7-.8-2.8-3.2-2.8-5.2 0-4.2 3.1-9.2 9.4-9.2 5 0 8.8 3.6 8.8 8.4 0 5.4-3.4 9.7-8.1 9.7-1.6 0-3.1-.9-3.6-1.9l-1 3.7c-.3 1.3-1.2 2.9-1.8 3.9A10 10 0 1012 2z" />
    </svg>
  );
}

function AmexIcon() {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded border border-white/20 bg-white text-[8px] font-bold text-[#006FCF]">
      AMEX
    </div>
  );
}
function ApplePayIcon() {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded border border-white/20 bg-black text-[7px] text-white">
      Pay
    </div>
  );
}
function DiscoverIcon() {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded border border-white/20 bg-white text-[7px] font-bold text-[#FF6000]">
      DISC
    </div>
  );
}
function GPayIcon() {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded border border-white/20 bg-white text-[8px] font-semibold text-[#5F6368]">
      G Pay
    </div>
  );
}
function MastercardIcon() {
  return (
    <div className="relative flex h-8 w-12 items-center justify-center overflow-hidden rounded border border-white/20 bg-white">
      <span className="absolute left-2 h-4 w-4 rounded-full bg-[#EB001B] opacity-90" />
      <span className="absolute right-2 h-4 w-4 rounded-full bg-[#F79E1B] opacity-90" />
    </div>
  );
}
function PayPalIcon() {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded border border-white/20 bg-[#003087] text-[7px] font-bold text-white">
      PayPal
    </div>
  );
}
function VisaIcon() {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded border border-white/20 bg-white text-[10px] font-bold italic text-[#1A1F71]">
      VISA
    </div>
  );
}

const customerService = [
  "FAQs",
  "Track Your Order",
  "Returns & Exchange",
  "Resize & Repair",
];

const whyGs = [
  "Customer Support",
  "Free Shipping and Returns",
  "Payment Options",
  "Lifetime Guarantee",
  "Enhanced Warranty Plan",
  "The GS Jewellers Difference",
];

const about = [
  "Our Story",
  "Reviews",
  "GS Jewellers Blog",
  "Refer a Friend",
  "Join GS Jewellers Community",
  "GS Knowledge Base",
  "Schedule a Meeting",
];

export default function Footer() {
  return (
    <footer className="bg-[#013220] text-[#F5F0E8]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#E8DCC8]">
              Timeless elegance and exceptional craftsmanship — curated for those who seek the extraordinary.
            </p>
            <p className="mt-6 text-sm">
              <span className="block">Contact Us: 214-699-9717</span>
              <span className="mt-1 block">Email Us: info@gsjewellers.com</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <SocialIcon label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon label="YouTube">
                <YouTubeIcon />
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon label="TikTok">
                <TikTokIcon />
              </SocialIcon>
              <SocialIcon label="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon label="Pinterest">
                <PinterestIcon />
              </SocialIcon>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif-heading text-lg tracking-wide text-[#E8DCC8]">
              Customer Service
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {customerService.map((t) => (
                <li key={t}>
                  <a href="#" className="text-[#F5F0E8]/90 hover:text-white">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif-heading text-lg tracking-wide text-[#E8DCC8]">
              Why GS Jewellers
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {whyGs.map((t) => (
                <li key={t}>
                  <a href="#" className="text-[#F5F0E8]/90 hover:text-white">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif-heading text-lg tracking-wide text-[#E8DCC8]">
              About GS Jewellers
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {about.map((t) => (
                <li key={t}>
                  <a href="#" className="text-[#F5F0E8]/90 hover:text-white">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif-heading text-lg tracking-wide text-[#E8DCC8]">
              Subscribe to our emails
            </h3>
            <form className="mt-4 flex max-w-sm items-stretch gap-2 border-b border-[#E8DCC8]/50 pb-1">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent text-sm text-[#F5F0E8] placeholder:text-[#E8DCC8]/50 outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="text-[#D4AF37] hover:text-white">
                <ArrowRightCircleIcon className="h-7 w-7" />
              </button>
            </form>
            <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-4">
              <AmexIcon />
              <ApplePayIcon />
              <DiscoverIcon />
              <GPayIcon />
              <MastercardIcon />
              <PayPalIcon />
              <VisaIcon />
              <div className="flex h-8 w-12 items-center justify-center rounded border border-white/20 text-[9px] text-[#E8DCC8]">
                +
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[#E8DCC8]/80">© 2026, GS Jewellers</p>
          <button type="button" aria-label="Help" className="text-[#E8DCC8] hover:text-white">
            <QuestionMarkCircleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
