import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucixel",
  description: "Lucide icons in pixel art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/lucide-icon.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[#3c3c43]`}
        style={{ imageRendering: "pixelated" }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
