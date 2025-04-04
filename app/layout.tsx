import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Decoded Training Lab | Your Community Gym",
    template: "%s | Decoded Training Lab"
  },
  description: "Join our fitness family and transform your life with our supportive community and expert guidance. Based in Burlington, NC.",
  keywords: ["gym", "fitness", "training", "workout", "personal trainer", "Burlington NC", "community gym", "group fitness", "HIIT workouts"],
  metadataBase: new URL("https://www.decodedtraininglab.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.decodedtraininglab.com",
    title: "Decoded Training Lab | Your Community Gym",
    description: "Join our fitness family and transform your life with our supportive community and expert guidance. Try a free one-day trial today!",
    siteName: "Decoded Training Lab",
    images: [
      {
        url: "https://www.decodedtraininglab.com/decoded-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Decoded Training Lab Community"
      }
    ]
  },
  alternates: {
    canonical: "https://www.decodedtraininglab.com"
  },
  other: {
    "facebook": "https://www.facebook.com/p/Decoded-Lab-100083355661522/",
    "instagram": "https://www.instagram.com/decoded_lab/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", inter.variable)} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
