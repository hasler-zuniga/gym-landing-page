import Hero from "./components/hero"
import Features from "./components/features"
import Programs from "./components/programs"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Programs />
      </main>
      <Footer />
    </div>
  )
}

