import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Blare's Portfolio",
    description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" sizes="any" />
            <title>Blare&#39;s Portfolio</title>
        </head>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}