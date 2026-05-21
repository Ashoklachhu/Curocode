import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CuroCode — AI-Powered Digital Solutions for UAE Businesses",
  description:
    "We build. We automate. We grow your business. CuroCode delivers premium websites, AI automation, and performance-driven marketing for UAE businesses.",
  keywords: "AI automation, web solutions, digital marketing, UAE, Dubai, custom software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
