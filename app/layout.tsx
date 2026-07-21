import './globals.css';
import type { Metadata } from 'next';

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
            <body>{children}</body>
        </html>
    );
}