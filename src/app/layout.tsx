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
import { ApolloWrapper } from "./ApolloWrapper";

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
};

const uri = process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT || "";
const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

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
        <ApolloWrapper credentials={{ uri, hasuraAdminSecret }}>
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
        </ApolloWrapper>
      </body>
    </html>
  );
}
