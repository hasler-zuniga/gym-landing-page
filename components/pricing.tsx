"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Full gym access",
        "2 group classes per week",
        "Basic fitness assessment",
        "Access to mobile app",
        "Locker room access",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      price: "$79",
      description: "Our most popular plan for dedicated fitness enthusiasts",
      features: [
        "Full gym access 24/7",
        "Unlimited group classes",
        "Quarterly fitness assessments",
        "1 personal training session monthly",
        "Nutrition consultation",
        "Premium app features",
        "Towel service",
      ],
      popular: true,
      buttonText: "Choose Premium",
    },
    {
      name: "Elite",
      price: "$129",
      description: "Comprehensive plan for maximum results and support",
      features: [
        "All Premium features",
        "4 personal training sessions monthly",
        "Monthly nutrition coaching",
        "Recovery sessions",
        "Priority class booking",
        "Guest passes (2 per month)",
        "Exclusive events access",
      ],
      popular: false,
      buttonText: "Choose Elite",
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Plans</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible options to support your fitness journey, with no long-term contracts required.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "shadow-lg border-2 border-primary" : "shadow-md border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "" : "bg-card hover:bg-card/80 text-foreground border border-input"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
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
          <Link href="/pricing">
            <Button size="lg" variant="outline">
              View All Plans & Details
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

