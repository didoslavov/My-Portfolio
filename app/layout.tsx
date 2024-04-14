import type { Metadata } from 'next';
import { Concert_One } from 'next/font/google';
import './globals.css';
import Header from './Components/Header/Header';
import Canvas from './Components/ShootingStars/Canvas';

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
        <html lang="en">
            <body className={`${concertOne.className} dark:bg-raisin-black bg-silver-100`}>
                <Header />
                <Canvas />
                <main>{children}</main>
            </body>
        </html>
    );
}
