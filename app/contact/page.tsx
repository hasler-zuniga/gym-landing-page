import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Decoded Training Lab",
  description: "Get in touch with our team for inquiries, support, or to schedule a visit to our gym.",
}

export default function ContactPage() {
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
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" className="bg-white/10 border-white/20 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="(123) 456-7890" className="bg-white/10 border-white/20 text-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Membership Inquiry"
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
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
                    <p className="text-white/70">123 Fitness Avenue, Cityville, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-white/70">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-white/70">info@decodedtraininglab.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hours</h3>
                    <p className="text-white/70">Monday - Friday: 5am - 10pm</p>
                    <p className="text-white/70">Saturday - Sunday: 7am - 8pm</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <Facebook className="h-6 w-6 text-primary" />
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="h-6 w-6 text-primary" />
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
            {/* This would be replaced with an actual Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-black/50">Google Maps Embed Would Go Here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-3">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
            Start with a free one-week trial and experience the Decoded Training Lab difference.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </main>
  )
}

