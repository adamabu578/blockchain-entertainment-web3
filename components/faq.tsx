"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const faqs = [
  { question: "Who should attend ApriFull?" },
  { question: "What is ApriFull?" },
  { question: "When and where does the event take place?" },
  { question: "How can I buy tickets?" },
  { question: "What kind of activities happen at ApriFull?" },
  { question: "Can artists and performers participate?" },
  { question: "Is ApriFull suitable for beginners in blockchain?" },
  { question: "Are there sponsorship opportunities?" },
  { question: "How can I stay updated about ApriFull?" },
  { question: "Who organizes ApriFull?" },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">FAQs (Frequently Asked Questions)</h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <button
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left text-white"
          >
            <div className="flex items-center justify-between py-4 border-b border-white/10">
              <span className="text-lg font-medium">{faq.question}</span>
              <ChevronRight className="w-5 h-5 flex-shrink-0" />
            </div>
            {openIndex === index && (
              <div className="py-4 text-white/70 text-base">
                <p>
                  This is a sample answer to the FAQ question. You can customize this content with your actual answers.
                </p>
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
