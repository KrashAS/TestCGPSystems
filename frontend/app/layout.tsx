import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

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
            <ReduxProvider>
                <body
                    className={`antialiased`}
                >
                    {children}
                </body>
            </ReduxProvider>
        </html>
    );
}
