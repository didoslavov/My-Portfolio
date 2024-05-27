import type { Metadata } from "next";
import { Lato, Concert_One } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header/header";
import Canvas from "../components/ui/shooting-stars/canvas";
import Providers from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Modal from "@/components/ui/modal";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const concert = Concert_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-concert",
});

export const metadata: Metadata = {
  title: "Dido | Portfolio",
  description: "Dido Slavov's portfolio",
  icons: {
    icon: [
      { url: "/favicon-bg-light.png", media: "(prefers-color-scheme: light)" },
      new URL(
        "/favicon-bg-ligth.png",
        "https://didoslavov.net" || "http://localhost:3000",
      ),
      { url: "/favicon-bg-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${concert.variable} ${lato.className} bg-silver-100 dark:bg-raisin-black`}
      >
        <Providers>
          <Header />
          <Canvas />
          <main>{children}</main>
        </Providers>
        <Suspense fallback={<Loading />}>
          <Modal />
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
