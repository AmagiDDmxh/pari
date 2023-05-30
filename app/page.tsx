import Hero from "#/components/Hero"
import Description from "#/components/Description"
import HackerState from "#/components/HackerState"
import Questions from "#/components/Questions"
import Footer from "#/components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <HackerState />
      <Questions />
      <Footer />
    </main>
  )
}
