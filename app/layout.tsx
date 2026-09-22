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
  title: "Antonio Bolaina — Product engineer",
  description:
    "Antonio Bolaina is a product engineer who uses AI every day and designs products that use it — on-device vision, native apps, and the interfaces that have to earn trust.",
  openGraph: {
    title: "Antonio Bolaina — Product engineer",
    description:
      "I use AI every day. I also design the products that use it.",
    url: "https://ntonio.vercel.app",
    siteName: "Antonio Bolaina",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Antonio Bolaina — Product engineer",
    description:
      "I use AI every day. I also design the products that use it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
