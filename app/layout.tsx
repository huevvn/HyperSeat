import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
const ibm = IBM_Plex_Sans({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HyperSeat",
    description: "Experience the Hype, Own the Vibe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${ibm.className}  dark antialiased`}>
                {children}
            </body>
        </html>
    );
}
