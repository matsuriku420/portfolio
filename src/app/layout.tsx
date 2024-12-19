import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Limelight } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const limeLight = Limelight({
  variable: "--font-lime-light400",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter100",
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matsuriku Portfolio",
  description: "this is the greatest portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
