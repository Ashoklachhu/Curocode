import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CuroCode | Software Development, AI Solutions & IT Teams, Dubai",
  description:
    "CuroCode is a Dubai-based software and AI company. We build custom software and AI solutions, and provide skilled engineers and dedicated teams to businesses worldwide.",
  keywords: "software development, AI solutions, AI automation, chatbots, IT staff augmentation, dedicated development team, IT outsourcing, Dubai, UAE",
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
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        <Script
          src="https://kuro-production-280f.up.railway.app/widget.js"
          data-token="7d8ec412-0652-4b33-8470-abfbf5716310"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
