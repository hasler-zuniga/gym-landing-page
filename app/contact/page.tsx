"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Loader2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit form')
      }

      setFormSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <section className="bg-black text-white inner-page-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're here to answer your questions and help you on your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              {!formSubmitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" placeholder="John" className="bg-white/10 border-white/20 text-white" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Doe" className="bg-white/10 border-white/20 text-white" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="(123) 456-7890" 
                      className="bg-white/10 border-white/20 text-white" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Membership Inquiry"
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              ) : (
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Thank You!</h3>
                    <p className="text-white/70">
                      Your message has been sent. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormSubmitted(false)}
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-white/70">2241 Hanford Rd Suite 107, Burlington, NC 27215</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-white/70">(760) 808-5779</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-white/70">info@decodedtraininglab.com</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hours</h3>
                    <p className="text-white/70">Monday - Thursday: 5am - 8pm</p>
                    <p className="text-white/70">Friday: 5am - 7pm</p>
                    <p className="text-white/70">Saturday: 10am - 11am</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/decoded_lab/" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
                <a href="https://www.facebook.com/p/Decoded-Lab-100083355661522/" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <Facebook className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4 text-primary">Visit Our Gym</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Come see our facilities in person and meet our friendly team.
            </p>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=decodedtraininglab,burlington,nc`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-3">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
            Start with a free one-week trial and experience the Decoded Training Lab difference.
          </p>
          <Link href="/#trial">
            <Button size="lg" className="bg-[#16a249] hover:bg-[#16a34a]/90 text-white font-bold text-lg px-8 py-6">
              START FREE TRIAL
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

