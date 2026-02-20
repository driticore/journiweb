import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "JourniWeb | AI Lead Generation & Automation in South Africa",
    template: "%s | JourniWeb",
  },

  description:
    "JourniWeb helps South African businesses get qualified leads on autopilot using AI chatbots, automated outreach, smart follow-ups, and high-converting websites.",

  keywords: [
    "AI lead generation South Africa",
    "web design South Africa",
    "automation for businesses",
    "chatbot marketing",
    "lead generation agency",
    "JourniWeb",
  ],

  authors: [{ name: "JourniWeb" }],
  creator: "JourniWeb",
  publisher: "JourniWeb",

  metadataBase: new URL("https://journiweb.co.za"),

  openGraph: {
    title: "JourniWeb | AI Lead Generation & Automation",
    description:
      "Get more clients automatically with AI chatbots, automated follow-ups, and high-converting websites built for South African businesses.",
    url: "https://journiweb.co.za",
    siteName: "JourniWeb",
    locale: "en_ZA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JourniWeb | AI Lead Generation & Automation",
    description:
      "AI systems that bring you real clients on autopilot. Built for South African businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
