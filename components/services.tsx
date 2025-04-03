"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, Users, Heart, Leaf } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Group Classes",
      description: "Energetic, instructor-led sessions that combine fun with effective workouts.",
      icon: <Users className="h-6 w-6 text-primary" />,
      image: "/placeholder.svg?height=600&width=800&text=Group Classes",
      altText: "Energetic group fitness class with participants working out together at Decoded Training Lab",
    },
    {
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific goals with expert trainers.",
      icon: <Dumbbell className="h-6 w-6 text-primary" />,
      image: "/placeholder.svg?height=600&width=800&text=Personal Training",
      altText: "Personal trainer working one-on-one with a client at Decoded Training Lab",
    },
    {
      title: "Nutrition Coaching",
      description: "Expert advice on fueling your body for optimal performance and health.",
      icon: <Leaf className="h-6 w-6 text-primary" />,
      image: "/placeholder.svg?height=600&width=800&text=Nutrition Coaching",
      altText: "Nutrition coach discussing meal plans and healthy eating habits with a client",
    },
    {
      title: "Recovery Sessions",
      description: "Specialized techniques to help your body recover faster and prevent injuries.",
      icon: <Heart className="h-6 w-6 text-primary" />,
      image: "/placeholder.svg?height=600&width=800&text=Recovery Sessions",
      altText: "Recovery therapy session showing specialized techniques for muscle recovery and injury prevention",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-md mb-4">OUR SERVICES</h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Discover how our diverse range of fitness solutions can help you achieve your unique health and fitness goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[200px]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.altText || service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

