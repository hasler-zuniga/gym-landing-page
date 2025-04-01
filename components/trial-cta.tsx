"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function TrialCta() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="trial" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-md mb-4">
            Start Your <span className="text-primary">Free One-Week Trial</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience everything Decoded Training Lab has to offer with no commitment. Try our classes, meet our
            community, and see the difference for yourself.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <Card className="border-primary/20 shadow-lg bg-white text-black">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl">Free 7-Day Trial</CardTitle>
              <CardDescription className="text-white/90">No credit card required. No obligations.</CardDescription>
            </CardHeader>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(123) 456-7890" required />
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm leading-tight">
                        I agree to the terms and conditions and understand that my information will be used as described
                        in the privacy policy.
                      </Label>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Claim Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </form>
            ) : (
              <CardContent className="pt-6 pb-6 text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Thank You!</h3>
                  <p className="text-black/70">
                    Your free trial request has been submitted. One of our team members will contact you shortly to get
                    you started.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFormSubmitted(false)}
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="bg-black/40 border border-white/10 p-6 rounded-lg text-center">
            <h3 className="font-bold mb-2">Full Access</h3>
            <p className="text-white/70">Try all our equipment, classes, and amenities</p>
          </div>
          <div className="bg-black/40 border border-white/10 p-6 rounded-lg text-center">
            <h3 className="font-bold mb-2">No Obligation</h3>
            <p className="text-white/70">Zero pressure to join after your trial ends</p>
          </div>
          <div className="bg-black/40 border border-white/10 p-6 rounded-lg text-center">
            <h3 className="font-bold mb-2">Expert Guidance</h3>
            <p className="text-white/70">Get a free fitness consultation included</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

