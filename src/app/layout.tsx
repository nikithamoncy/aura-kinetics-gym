import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AiWidget from "@/components/AiWidget";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AURA KINETICS | Elite Performance & Recovery",
  description: "A premium, data-driven fitness and recovery facility designed to elevate every metric of human performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${playfair.variable} ${manrope.variable} antialiased bg-white text-[#0A0A0A] font-body selection:bg-[#0047FF] selection:text-white flex flex-col min-h-screen`}>
        <NavBar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <AiWidget />
      </body>
    </html>
  );
}
