import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TeamSection from "@/components/team-section"

export const metadata: Metadata = {
  title: "About Our Burlington NC Gym | Decoded Training Lab Community",
  description: "Learn about our Burlington NC gym's mission, values, and the supportive fitness community. 13+ years experience, expert coaching, and personalized training.",
  alternates: {
    canonical: "https://www.decodedtraininglab.com/about"
  },
}

export default function AboutPage() {

  return (
    <main>
      <section className="bg-black text-white inner-page-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Our Story</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Founded with a vision to create more than just a gym in Burlington, NC - we built a community where everyone belongs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-sm">Burlington NC's Best Community Gym</h2>
              <p className="text-lg text-white/80">
                Decoded Training Lab is a fitness gym that provides a range of high-intensity classes led by our owner and head coach. We also offer personal training to help members reach their fitness goals. Three days a week, we have specialized classes designed for the 60+ community seeking a different kind of workout.
              </p>
              <p className="text-lg text-white/80">
                Originally founded in Palm Springs, CA, Decoded Gyms has more than 13 years of industry experience. We've now been serving Burlington, NC, for three years, dedicated to helping people of all ages enhance their overall health and wellness.
              </p>
              <p className="text-lg text-white/80">
                Our owner and head coach, Jude Chandrasena, brings over 34,000 hours of coaching expertise, including CrossFit, strength training, Olympic lifting, and bodybuilding. The Decoded Training Lab program is thoroughly tested, proven effective, and includes everything you need for your fitness journey.
              </p>
            </div>
            <div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/about-us.webp?height=800&width=600&text=Our Story"
                  alt="Gym founders"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-green-400 text-center mt-4 font-medium">
                Jude Chandrasena - Owner & Coach
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4 text-primary">Our Values</h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              These core principles guide everything we do at Decoded Training Lab.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="mb-4 w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-black/70">
                We welcome everyone, regardless of fitness level, background, or goals. Our gym is a judgment-free zone
                where all feel valued.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="mb-4 w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-black/70">
                We foster genuine connections among members, creating a supportive network that celebrates each other's
                successes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="mb-4 w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-black/70">
                We're committed to providing top-quality equipment, expert guidance, and innovative programs that
                deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 text-primary">Ready to Join Our Community?</h2>
          <Link href="/#trial">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

