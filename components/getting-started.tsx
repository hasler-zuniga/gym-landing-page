"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GettingStarted() {
  const steps = [
    {
      number: "1",
      title: "SIGN UP FOR A FREE 7 DAY TRIAL",
      description: "We want to hear your fitness goals. This 30 min call is the first step to success.",
    },
    {
      number: "2",
      title: "SCHEDULE YOUR INTRO SESSION",
      description: "We'll meet, show you the gym and talk about the programs we offer to help.",
    },
    {
      number: "3",
      title: "GET STARTED WITH YOUR UNIQUE FITNESS PLAN",
      description:
        "Whether it's personal training, nutrition or group classes, we are here to help you succeed. This is where you find the best results of your life.",
    },
  ]

  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-md mb-4">GETTING STARTED IS EASY</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="mb-6 flex justify-center md:justify-start">
                <span className="text-6xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-black/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="/#trial">
            <Button className="bg-[#0066b2] hover:bg-[#0066b2]/90 text-white font-bold py-3 px-8 text-lg">
              BOOK A DISCOVERY CALL
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

