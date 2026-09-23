import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-newsreader",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Chuka Okudo — AI, IT & Cybersecurity",
  description:
    "Learn AI, IT and cybersecurity in plain English, or hire someone who's spent 10+ years in the field. By Chuka Okudo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${plex.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
