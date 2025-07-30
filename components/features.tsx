"use client"

import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "Supportive Community",
      description: "Join a welcoming family of fitness enthusiasts who support and motivate each other.",
    },
    {
      title: "Expert Guidance",
      description: "Our certified trainers provide personalized advice to help you achieve your goals safely.",
    },
    {
      title: "Proven Results",
      description: "Our members consistently achieve their fitness goals through our effective programs.",
    },
    {
      title: "Flexible Scheduling",
      description: "With classes throughout the day, find times that work for your busy lifestyle.",
    },
    {
      title: "Innovative Workouts",
      description: "Experience diverse, cutting-edge training methods that keep fitness exciting.",
    },
    {
      title: "Premium Equipment",
      description: "Train with state-of-the-art equipment designed for effectiveness and safety.",
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
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-md mb-4 text-primary">Why Choose The Best Gym in Burlington, NC?</h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            We're more than just a gym - we're a community dedicated to helping you achieve your fitness goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-4 w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-black/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

