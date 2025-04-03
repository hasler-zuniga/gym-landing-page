import Hero from "@/components/hero"
import Features from "@/components/features"
import GettingStarted from "@/components/getting-started"
import CommunitySection from "@/components/community-section"
import Testimonials from "@/components/testimonials"
import TrialCta from "@/components/trial-cta"
import type { Metadata } from "next"
import Script from "next/script"
import Services from "@/components/services"
export const metadata: Metadata = {
  title: "Decoded Training Lab | Your Community Gym",
  description:
    "Join our fitness family and transform your life with our supportive community and expert guidance. Try a free one-day trial today!",
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Script id="gym-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndFitnessEstablishment",
          "name": "Decoded Training Lab",
          "image": "https://www.decodedtraininglab.com/decoded-logo.jpg",
          "url": "https://www.decodedtraininglab.com",
          "telephone": "760-808-5779", // Update with your actual phone
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2241 Hanford Rd Suite 107", // Update with your actual address
            "addressLocality": "Burlington",
            "addressRegion": "NC",
            "postalCode": "27215", // Update with your actual zip
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.0632685, // Update with your actual coordinates
            "longitude": -79.4399582
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "06:00",
              "closes": "21:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/p/Decoded-Lab-100083355661522/", // Update with your social media
            "https://www.instagram.com/decoded_lab/",
          ],
          "description": "Join our fitness family and transform your life with our supportive community and expert guidance. Try a free one-day trial today!"
        })
      }} />
      <Hero />
      <Features />
      {/* <GettingStarted /> */}
      <CommunitySection />
      {/* <Services /> */}
      <Testimonials />
      <TrialCta />
    </main>
  )
}

