import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Olivier Thorel — Project Hub";
const description =
  "Projects, products and applications by Olivier Thorel. Access Portfolio, SerieMatch, Flexitaf and Syntra from one place.";

export const metadata: Metadata = {
  metadataBase: new URL("https://othorel.fr"),
  title,
  description,
  applicationName: "Olivier Thorel Hub",
  authors: [{ name: "Olivier Thorel" }],
  creator: "Olivier Thorel",
  publisher: "Olivier Thorel",
  openGraph: {
    title,
    description,
    url: "https://othorel.fr",
    siteName: "Olivier Thorel Hub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
