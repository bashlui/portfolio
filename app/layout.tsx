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
  title: "antonio",
  description: "Explore Antonio's work, skills, and background through an interactive developer terminal portfolio.",
  openGraph: {
    title: "antonio",
    description: "An interactive terminal portfolio for a software engineer with an eye for detail.",
    url: "https://ntonio.vercel.app",
    siteName: "Antonio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "antonio",
    description: "An interactive terminal portfolio for a software engineer with an eye for detail.",
  },
  icons: {
    icon: [{ url: "/terminal.svg", type: "image/svg+xml" }],
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
