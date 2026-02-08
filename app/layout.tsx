import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import type { Metadata } from "next";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })



export const metadata: Metadata = {
  metadataBase: new URL("https://journiweb.com"),

  title: {
    default: "JourniWeb | AI Lead Generation, Automation & Web Development",
    template: "%s | JourniWeb",
  },

  description:
    "Grow your business with AI-powered lead generation, smart automation, and high-converting websites. JourniWeb helps South African SMMEs, contractors, and service businesses attract real clients and scale faster.",

  keywords: [
    "AI lead generation",
    "web development South Africa",
    "digital marketing agency",
    "automation for businesses",
    "lead generation agency",
    "AI chatbots for business",
    "SMME marketing South Africa",
    "JourniWeb",
  ],

  authors: [{ name: "JourniWeb" }],
  creator: "JourniWeb",
  publisher: "JourniWeb",

  openGraph: {
    title: "JourniWeb | AI Lead Generation & Automation",
    description:
      "Attract real clients with AI lead generation, automation, and high-converting websites built for South African businesses.",
    url: "https://journiweb.com",
    siteName: "JourniWeb",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JourniWeb AI Lead Generation & Web Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JourniWeb | AI Lead Generation & Automation",
    description:
      "Scale faster with AI-powered lead generation, automation, and modern websites from JourniWeb.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
