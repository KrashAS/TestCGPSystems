import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "REACT EDITOR Test",
    description: "REACT EDITOR Test for CGP Systems",
};

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '700'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={roboto.className}>
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
