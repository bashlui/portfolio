import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ntonio.vercel.app"),
  title: "Antonio — Software Engineer",
  description: "Antonio is a software engineer building thoughtful digital products, AI systems, and native experiences.",
  openGraph: {
    title: "Antonio — Software Engineer",
    description: "Thoughtful digital products, AI systems, and native experiences.",
    url: "https://ntonio.vercel.app",
    siteName: "Antonio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Antonio — Software Engineer",
    description: "Thoughtful digital products, AI systems, and native experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
