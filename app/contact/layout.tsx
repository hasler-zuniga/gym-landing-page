import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Our Burlington NC Gym | Decoded Training Lab",
  description: "Contact our Burlington NC gym for membership info, personal training, and fitness classes. Located at 2241 Hanford Rd Suite 107. Call (760) 808-5779.",
  alternates: {
    canonical: "https://www.decodedtraininglab.com/contact"
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 