import { Dumbbell, Users, Trophy, Heart } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: "Expert Training",
      description: "Personalized workout plans designed by certified fitness professionals",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a supportive community of like-minded individuals on their fitness journey",
    },
    {
      icon: Trophy,
      title: "Results Driven",
      description: "Track your progress and achieve your fitness goals with our proven methods",
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Focus on both physical and mental wellness for complete transformation",
    },
  ]

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-400">
            Experience the difference with our comprehensive approach to fitness
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-8 bg-black rounded-lg border border-green-500/20">
                <feature.icon className="h-10 w-10 text-green-500" />
                <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

