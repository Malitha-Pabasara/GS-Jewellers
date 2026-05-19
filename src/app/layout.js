import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export const metadata = {
  title: "GS Jewellers | Luxury Jewelry",
  description:
    "High-end luxury jewelry e-commerce. Unique designs and customizable pieces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gs-white text-gs-emerald">{children}</body>
    </html>
  );
}


