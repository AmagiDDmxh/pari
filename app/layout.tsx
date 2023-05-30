import Header from "#/components/Header"
import "./globals.css"
import localFont from "next/font/local"

export const metadata = {
  title: "Pari - Antalpha Labs",
  description: "Antalpha Labs is a web3 developer community",
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
