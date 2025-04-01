"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=1000&width=800&text=Our Community"
              alt="Gym community"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Decoded Fitness</h2>
            <p className="text-lg text-muted-foreground">
              Founded with a vision to create more than just a gym, Decoded Fitness is a community where everyone
              belongs. We believe fitness should be accessible, enjoyable, and community-driven.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to create a space where members feel like family, where beginners feel welcome, and where
              fitness becomes a sustainable part of life rather than a short-term struggle.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Active Members</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">20+</h3>
                <p className="text-muted-foreground">Expert Trainers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">40+</h3>
                <p className="text-muted-foreground">Weekly Classes</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">5</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
            <Link href="/about">
              <Button className="mt-4">Learn More About Us</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

