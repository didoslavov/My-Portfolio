import type { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header/header";
import Canvas from "../components/ui/shooting-stars/canvas";
import Providers from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Modal from "@/components/ui/modal";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";

const concertOne = Concert_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dido | Portfolio",
  description: "Dido Slavov's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${concertOne.className} bg-silver-100 dark:bg-raisin-black`}
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
