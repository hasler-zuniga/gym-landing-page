import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing | Decoded Training Lab",
  description: "Explore our flexible membership options designed to fit your lifestyle and fitness goals.",
}

export default function PricingPage() {
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

  return (
    <main>
      <section className="bg-black text-white inner-page-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Membership Plans</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Flexible options to support your fitness journey, with no long-term contracts required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "shadow-lg border-2 border-primary bg-black/40"
                    : "shadow-md border border-white/10 bg-black/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-white/70">/month</span>
                  </div>
                  <p className="text-white/70 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? "bg-primary text-white" : "bg-white text-primary"}`}>
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4 text-primary">Additional Options</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Customize your experience with these add-ons and special packages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">Personal Training Packages</h3>
              <p className="text-black/70 mb-4">One-on-one guidance tailored to your specific goals</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Single Session</span>
                  <span className="font-bold">$65</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>5 Sessions</span>
                  <span className="font-bold">$300</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>10 Sessions</span>
                  <span className="font-bold">$550</span>
                </div>
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Book a Session
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">Specialized Programs</h3>
              <p className="text-black/70 mb-4">Focused programs for specific goals and interests</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>8-Week Transformation</span>
                  <span className="font-bold">$299</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Nutrition Coaching (Monthly)</span>
                  <span className="font-bold">$149</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Sports Performance</span>
                  <span className="font-bold">$249</span>
                </div>
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-3">Not Sure Which Plan Is Right For You?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
            Try us out with a free one-week trial and get personalized recommendations from our team.
          </p>
          <Link href="/#trial">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

