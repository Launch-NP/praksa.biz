import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../components/sections/Navbar/Navbar";
import Transition from "@/components/ui/transition";
import ScrollToTop from "@/components/misc/scroll-to-top";
import Head from "next/head";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "praksa.biz",
    description:
        "Praksa.biz is a platform for finding internships and jobs in Bosnia and Herzegovina.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Head>
                <link rel="icon" href="/icon.png" />
                <title>{metadata.title as string}</title>
                <meta
                    name="description"
                    content={metadata.description as string}
                />
                <link rel="icon" href="/icon.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    poppins.className
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Navbar />
                    <Transition>{children}</Transition>
                    <ScrollToTop />
                </ThemeProvider>
            </body>
        </html>
    );
}
