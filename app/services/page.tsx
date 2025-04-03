import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Decoded Training Lab",
  description:
    "Explore our range of fitness classes, personal training, and specialized programs designed for all fitness levels.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Group Classes",
      description:
        "Energetic, instructor-led sessions that combine fun with effective workouts. Perfect for those who thrive in a social environment.",
      image: "group-workout.webp?height=600&width=800&text=Group Classes",
    },
    {
      title: "Personal Training",
      description:
        "One-on-one sessions tailored to your specific goals with expert trainers who provide personalized guidance and motivation.",
      image: "Personal-Training.webp?text=Personal Training",
    },
    {
      title: "Nutrition Coaching",
      description:
        "Expert advice on fueling your body for optimal performance and health, with customized meal plans and ongoing support.",
      image: "nutrition.webp?height=600&width=800&text=Nutrition Coaching",
    },
    {
      title: "Recovery Sessions",
      description:
        "Specialized techniques to help your body recover faster, prevent injuries, and improve overall performance.",
      image: "cup-therapy2.webp?height=400&width=800&text=Recovery Sessions",
    },
    {
      title: "Express Workouts",
      description:
        "Efficient, high-intensity sessions designed for busy individuals who want maximum results in minimum time.",
      image: "Pair-workout.webp?height=600&width=800&text=Express Workouts",
    },
    {
      title: "Specialized Programs",
      description:
        "Targeted training for specific goals like weight loss, muscle building, or sports performance enhancement.",
      image: "barbell.webp?height=600&width=800&text=Specialized Programs",
    },
  ]

  return (
    <main>
      <section className="bg-black text-white inner-page-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Our Services</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the perfect fitness solution for your unique journey, whether you're just starting out or looking
              to reach new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className="group bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="text-primary font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  {/* <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.slice(2, 4).map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="transition-transform duration-500 object-cover group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="text-primary font-bold text-xl">{index + 3}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-black/70 mb-4">{service.description}</p>
                  {/* <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn More
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.slice(4, 6).map((service, index) => (
              <div
                key={index}
                className="group bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="text-primary font-bold text-xl">{index + 5}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  {/* <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-3 text-primary">Experience Our Services Firsthand</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto mb-6">
            Try any of our classes or facilities with our free one-day trial. No commitment required.
          </p>
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

