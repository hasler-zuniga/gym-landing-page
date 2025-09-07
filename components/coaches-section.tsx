'use client'

import Image from "next/image"
import Link from "next/link"

const coaches = [
  {
    id: 1,
    name: "Kaina Aureoles",
    image: "/headshots/kaina-341.jpg",
  },
  {
    id: 2,
    name: "Edwin Aureoles",
    image: "/headshots/edwin-341.jpg",
  },
  {
    id: 3,
    name: "German Rodriguez",
    image: "/headshots/german-341.jpg",
  },
  {
    id: 4,
    name: "Esmeralda Rodriguez",
    image: "/headshots/esmer-341.jpg",
  },
  {
    id: 5,
    name: "Tyler Lenz",
    image: "/headshots/tyler-341.jpg",
  }
]

export default function CoachesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4 text-primary">Meet Our Coaches</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our coaches are here to guide you on your fitness journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {coaches.map((coach) => (
            <Link 
              key={coach.id} 
              href="/about"
              className="group flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 128px, 160px"
                  quality={90}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-black group-hover:text-primary transition-colors duration-300">
                {coach.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
