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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(sessionStorage.getItem("antonio-welcome")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("welcome-seen")}catch(e){}',
          }}
        />
        <noscript>
          <style>{`.welcome-intro{display:none!important}.identity-copy>*,.portrait-wrap{opacity:1!important;transform:none!important}html{overflow:auto!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
