import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="px-6 py-32 bg-gradient-to-b from-[#1a0f2e] to-[#0a0505]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Get In Touch With Us</h2>
        <button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-black font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all transform hover:scale-105">
          Send us a mail
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
