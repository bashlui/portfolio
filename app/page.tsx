import Hero from "./components/Hero"
import WhoAmI from "./components/WhoAmI"
import TechStack from "./components/TechStack"
import BentoGrid from "./components/BentoGrid"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhoAmI />
      <TechStack />
      <BentoGrid />
      <Footer />
    </main>
  )
}