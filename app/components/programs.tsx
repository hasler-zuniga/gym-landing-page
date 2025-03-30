import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Programs() {
  const programs = [
    {
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weightlifting programs",
      features: ["Personalized workout plans", "Form technique guidance", "Progressive overload tracking"],
    },
    {
      title: "HIIT Workouts",
      description: "High-intensity interval training for maximum fat burn and cardiovascular fitness",
      features: ["30-45 minute sessions", "Metabolic conditioning", "Body weight and equipment options"],
    },
    {
      title: "Recovery & Mobility",
      description: "Enhance flexibility and prevent injuries with guided recovery sessions",
      features: ["Stretching routines", "Mobility exercises", "Injury prevention techniques"],
    },
  ]

  return (
    <section id="programs" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Training Programs</h2>
          <p className="mt-4 text-lg text-gray-400">Choose the program that best fits your goals</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title} className="bg-black border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="text-gray-400 flex items-center">
                      <span className="mr-2 text-green-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-green-500 text-black hover:bg-green-600">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

