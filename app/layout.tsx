import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "James Roberts - Software Engineer",
  description:
    "Android Engineer Portfolio of James Roberts, specializing in mobile development and currently working at Tinybeans",
  openGraph: {
    title: "James Roberts - Software Engineer",
    description:
      "Android Engineer Portfolio of James Roberts, specializing in mobile development and currently working at Tinybeans",
    url: "https://jlroberts.me",
    siteName: "James Roberts Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "James Roberts - Software Engineer",
    description:
      "Android Engineer Portfolio of James Roberts, specializing in mobile development and currently working at Tinybeans",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8991369567072554" />
      </body>
    </html>
  );
}
