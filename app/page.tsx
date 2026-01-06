import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Sponsors from "@/components/sponsors"
import EntertainmentMatters from "@/components/entertainment-matters"
import ReachMetrics from "@/components/reach-metrics"
import PastEditions from "@/components/past-editions"
import EntertainHeader from "@/components/entertain-header"
import FAQSection from "@/components/faq"
import ContactSection from "@/components/contact-section"
import { Footer } from "react-day-picker"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <Navigation />
      <Hero />
      <Sponsors />
      <EntertainmentMatters />
      <ReachMetrics />
      <PastEditions />
      <EntertainHeader/>
      <FAQSection/>
      <ContactSection/>
      <Footer />
    </main>
  )
}
