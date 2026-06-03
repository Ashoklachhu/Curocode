import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png",    type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script
          src="https://kuro-production-280f.up.railway.app/widget.js"
          data-token="b648ec04-13f9-4fc2-9323-e43c6fc9dabe"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
