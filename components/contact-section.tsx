"use client"

import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="relative px-6 py-32 overflow-hidden bg-black">
      
      {/* Bottom Purple Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[#964BE6]/40 blur-[140px]" />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Get In Touch With Us
        </h2>

        <button
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-[20px]
            bg-[#CC9CFF]
            w-[198px]
            h-[60px]
            text-center
            text-base
            font-semibold
            leading-none
            text-black
          "
        >
          <span>Send us a mail</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </section>
  )
}
