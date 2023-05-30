import { Metadata } from "next"
import localFont from "next/font/local"
import Header from "#/components/Header"
import { siteConfig } from "#/config/site"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Hacker House", "Hackathon", "Web3", "Antalpha", "Pari"],
  authors: [
    {
      name: "antalpha",
      url: "https://antalpha.com/",
    },
    {
      name: "bonecat",
      url: "https://twitter.com/bonecat6",
    },
    {
      name: "amagi",
      url: "https://amagi.love",
    },
  ],
  creator: "antalpha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@antalpha",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

const feijoa = localFont({
  src: [
    {
      path: "../public/font/Feijoa Display.otf",
      weight: "400",
      style: "normal",
    },
    { path: "../public/font/Feijoa Bold.otf", weight: "600", style: "normal" },
    {
      path: "../public/font/Feijoa Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/Feijoa Medium Italic.otf",
      weight: "500",
      style: "italic",
    },
  ],
})

const pitchSans = localFont({
  src: "../public/font/PitchSans-Regular.woff",
  variable: "--font-ps",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${feijoa.className} ${pitchSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
