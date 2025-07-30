import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Decoded Training Lab – Community Gym & Personal Training in Burlington, NC",
    template: "%s | Decoded Training Lab"
  },
  description: "Looking for a gym in Burlington NC? Our community-focused facility offers group classes, personal training and HIIT workouts. Start your free trial today!",
  keywords: ["gym", "fitness", "training", "workout", "personal trainer", "Burlington NC", "community gym", "group fitness", "HIIT workouts"],
  metadataBase: new URL("https://www.decodedtraininglab.com"),
  icons: {
    icon: "/decoded-logo.jpg",
    shortcut: "/decoded-logo.jpg",
    apple: "/decoded-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.decodedtraininglab.com",
    title: "Decoded Training Lab – Community Gym & Personal Training in Burlington, NC",
    description: "Looking for a gym in Burlington NC? Our community-focused facility offers group classes, personal training and HIIT workouts. Start your free trial today!",
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
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

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
