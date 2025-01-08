//import type { Metadata } from "next";
import {
  //Geist,
  //Geist_Mono,
  Inter,
  Limelight,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const limeLight = Limelight({
  variable: "--font-lime-light400",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter500",
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp500",
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const title = "Matsuriku Portfolio";
const description = "this is the greatest portfolio";

import config from "@/../next.config";
export const BASE_PATH = config.basePath ?? "";

// export const metadata: Metadata = {
//   title: "Matsuriku Portfolio",
//   description: "this is the greatest portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>{title}</title>
      <meta name="description" content={description} />
      <body
        className={`${limeLight.variable} ${inter.variable} ${notoSansJP.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
