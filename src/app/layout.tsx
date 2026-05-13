import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const title = "Olivier Thorel — Project Hub";
const description =
  "A central access point for my portfolio, live products, experiments and technical playgrounds.";

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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
