import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/blog/Header";
import { siteConfig } from "@/content/config";
import { Space_Grotesk } from "next/font/google";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/spotlight";

const Footer = dynamic(() => import("@/components/blog/Footer"));

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: `@${siteConfig.author.social
      .find((s) => s.name === "Twitter")
      ?.url.split("/")
      .pop()}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

import { NotFoundProvider } from "@/lib/not-found-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://placehold.co" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Spotlight />
        <NotFoundProvider>
          <div className="relative z-40 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NotFoundProvider>
        <Toaster />
      </body>
    </html>
  );
}
