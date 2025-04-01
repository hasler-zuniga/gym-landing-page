"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommunitySection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="/family-photo-2.webp"
              alt="Our welcoming gym community and family"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-md mb-8 text-white">
              A COMMUNITY THAT WILL <span className="text-primary">KEEP YOU GOING</span>
            </h2>

            <div className="space-y-6 border-l-4 border-primary pl-6">
              <p className="text-lg text-white/80">
                We understand the disappointment of unrealized fitness goals. But don't worry, you're never alone at Decoded Training Lab.
              </p>

              <p className="text-lg text-white/80">
                For over 13 years, our supportive community has been the backbone of countless success stories. We're committed to standing beside you throughout your 7-day trial, providing everything you need to start achieving the results you deserve.
              </p>

              <p className="text-lg text-white/80">
                Experience firsthand why our members stay with us for the long haul—because here, your goals become our shared mission.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/#trial">
                <Button className="bg-[#16a249] hover:bg-[#16a34a]/90 text-white font-bold py-3 px-8 text-lg">
                  START FREE TRIAL
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

