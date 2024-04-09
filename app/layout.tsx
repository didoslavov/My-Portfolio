import type { Metadata } from 'next';
import { Concert_One } from 'next/font/google';
import './globals.css';
import Header from './Components/Header/Header';

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
            <body className={`${concertOne.className} dark:bg-raisin-black bg-silver-100 h-screen`}>
                <Header />
                <main className="m-auto">{children}</main>
            </body>
        </html>
    );
}
