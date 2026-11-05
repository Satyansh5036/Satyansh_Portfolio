import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces, Tiro_Devanagari_Hindi } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-fraunces',
});

const tiroDeva = Tiro_Devanagari_Hindi({
    weight: '400',
    subsets: ['devanagari', 'latin'],
    variable: '--font-deva',
});

export const metadata: Metadata = {
    title: 'Satyansh | Portfolio',
    description: 'Product Management, Operations, and Engineering Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${fraunces.variable} ${tiroDeva.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
