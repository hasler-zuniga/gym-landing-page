import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Decoded Training Lab",
  description: "Get in touch with our team for inquiries, support, or to schedule a visit to our gym.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 