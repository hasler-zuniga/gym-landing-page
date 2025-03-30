import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://sjc.microlink.io/Ti-rkQE4m5iElpmNpk4UXrb63Rp1jAwRMnoaSwclpGItBx01wu4NrroBZulFP1LwnHpTn3SNf6Drs40atsXRxQ.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="block text-white">GET HEALTHY.</span>
          <span className="block text-green-500">GET FIT.</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Transform your body and mind with our tailored fitness programs. Expert guidance, personalized workouts, and a
          supportive community await you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-500 text-black hover:bg-green-600 text-lg px-8 py-6">Join Now</Button>
          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-lg px-8 py-6"
          >
            Free Trial
          </Button>
        </div>
        <p className="mt-8 text-gray-400">
          Questions? Call us at{" "}
          <a href="tel:(760) 808-5779" className="text-green-500 hover:text-green-400">
            (760) 808-5779
          </a>
        </p>
      </div>
    </div>
  )
}

