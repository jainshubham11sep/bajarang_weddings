import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[64px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
