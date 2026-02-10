import type { Metadata } from "next";
import { Geist, Geist_Mono, Tinos, Open_Sans, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "antonio",
  description: "portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tinos.variable} ${openSans.variable} ${merriweather.variable} antialiased`}
      >
        <ThemeProvider>
            <SmoothScroll>
              <Navbar />
              <div className="pt-16">
                {children}
              </div>
            </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
