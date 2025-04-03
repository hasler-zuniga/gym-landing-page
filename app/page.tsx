import Hero from "@/components/hero"
import Features from "@/components/features"
import GettingStarted from "@/components/getting-started"
import CommunitySection from "@/components/community-section"
import Testimonials from "@/components/testimonials"
import TrialCta from "@/components/trial-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Decoded Training Lab | Your Community Gym",
  description:
    "Join our fitness family and transform your life with our supportive community and expert guidance. Try a free one-day trial today!",
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      {/* <GettingStarted /> */}
      <CommunitySection />
      <Testimonials />
      <TrialCta />
    </main>
  )
}

