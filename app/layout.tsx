import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Decoded Training Lab - Transform Your Body and Mind",
  description: "Expert-led fitness programs and personalized training to help you achieve your fitness goals.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} bg-background text-foreground`}
        suppressHydrationWarning
        data-new-gr-c-s-check-loaded="14.1229.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  )
}



import './globals.css'