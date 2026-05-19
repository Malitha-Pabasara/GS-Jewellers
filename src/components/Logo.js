import Link from "next/link";



export default function Logo({ className = "", variant = "dark" }) {
  const color = variant === "light" ? "text-[#F5F0E8]" : "text-[#013220]";
  const sub = variant === "light" ? "text-[#E6DCD4]" : "text-[#013220]";

  return (
    <Link href="/" className={`inline-flex flex-col items-center gap-4 ${className}`}>
      <div className={`relative h-[48px] w-[88px] ${color}`}>
        <span className="font-serif-heading absolute left-0 top-0 text-[70px] leading-none tracking-tight">
          G
        </span>
        <span className="font-serif-heading absolute left-[42px] top-0 text-[70px] leading-none tracking-tight">
          S
        </span>
      </div>
      <span className={`font-serif-heading text-[13px] tracking-[0.22em] uppercase ${sub}`}>
        GS Jewellers
      </span>
    </Link>
  );
}
