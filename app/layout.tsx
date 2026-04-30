import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sambhav Regmi | Engineering Student & AI/ML Developer",
  description:
    "Sambhav Regmi is an engineering student at IOE Pulchowk Campus, Nepal, specializing in AI, Machine Learning, and Robotics. Explore my projects and work.",
  keywords: [
    "Sambhav Regmi",
    "IOE Pulchowk Campus",
    "Engineering Student Nepal",
    "AI ML Developer Nepal",
    "Robotics Nepal",
    "Portfolio",
  ],
  authors: [{ name: "Sambhav Regmi", url: "https://sambhavregmi.com.np" }],
  creator: "Sambhav Regmi",
  metadataBase: new URL("https://sambhavregmi.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sambhav Regmi | Engineering Student & AI/ML Developer",
    description:
      "Engineering student at IOE Pulchowk Campus specializing in AI, ML, and Robotics. Explore my projects and work.",
    url: "https://sambhavregmi.com.np",
    siteName: "Sambhav Regmi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sambhav Regmi - Engineering Student & AI/ML Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sambhav Regmi | Engineering Student & AI/ML Developer",
    description:
      "Engineering student at IOE Pulchowk Campus specializing in AI, ML, and Robotics.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/logo.png", media: "(prefers-color-scheme: dark)" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
