import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AntigravityCursor from "@/components/AntigravityCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Gupta — Portfolio",
  description:
    "Product Designer & Visual Storyteller. Building impactful, scalable, and user-centric digital products.",
  keywords: [
    "portfolio",
    "product designer",
    "visual storyteller",
    "UI/UX",
    "web developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <AntigravityCursor />
        {children}
      </body>
    </html>
  );
}
