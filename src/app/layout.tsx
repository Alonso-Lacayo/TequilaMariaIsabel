import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "María Isabel Tequila",
  description: "Premium artisanal tequila crafted with tradition and excellence",
  metadataBase: new URL('https://tequila-maria-isabel.vercel.app'),
  openGraph: {
    title: "María Isabel Tequila",
    description: "Premium artisanal tequila crafted with tradition and excellence",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair_display.variable} font-sans antialiased bg-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
