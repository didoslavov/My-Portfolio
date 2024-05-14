import type { Metadata } from 'next';
import { Concert_One } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/header/header';
import Canvas from '../components/ui/shooting-stars/canvas';
import Providers from './providers';

const concertOne = Concert_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Dido | Portfolio',
    description: "Dido Slavov's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${concertOne.className} dark:bg-raisin-black bg-silver-100`}>
                <Providers>
                    <Header />
                    <Canvas />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
