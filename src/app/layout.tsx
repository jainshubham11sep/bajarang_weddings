import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bajranng Weddings | Luxury & Royal Wedding Planners in India",
  description:
    "Bajranng Weddings — India's premier luxury wedding planning company. Specializing in royal weddings, destination weddings in Rajasthan, exquisite décor, and seamless event management.",
  keywords:
    "luxury wedding planner India, destination wedding Rajasthan, royal wedding planner, Udaipur wedding, Jaipur wedding, Jodhpur wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[76px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
