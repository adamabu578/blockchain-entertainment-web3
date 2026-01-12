// "use client"

// import { useState } from "react"
// import { ArrowRight } from "lucide-react"

// const faqs = [
//   {
//     question: "What is ApriFull?",
//     answer:
//       "ApriFull is a creative and innovation-driven event designed to bring together creatives, technologists, entrepreneurs, and digital enthusiasts. It focuses on modern creative challenges, emerging technologies, collaboration, learning, and community building through talks, workshops, and experiences.",
//   },
//   {
//     question: "Who should attend ApriFull?",
//     answer:
//       "Everyone is welcome! Whether you’re a blockchain beginner, a seasoned crypto enthusiast, an artist, or someone curious about Web3 and entertainment, there’s something for you.",
//   },
//   {
//     question: "When and where does the event take place?",
//     answer:
//       "Dates and venue details are announced on the official website and social media channels. Attendees are encouraged to register early, as tickets often sell out quickly.",
//   },
//   {
//     question: "How can I buy tickets?",
//     answer:
//       "Tickets are available online through our website. We accept multiple payment options, including fiat and select cryptocurrencies.",
//   },
// {
//   question: "What kind of activities happen at ApriFull?",
//   answer:
//     "The event features a mix of panel discussions, live performances (music, comedy, spoken word, etc.), networking sessions, giveaways, games, and interactive experiences.",
// },
//   {
//     question: "Can artists and performers participate?",
//     answer:
//       "Absolutely! We collaborate with artists, performers, and creators. Feel free to reach out to us via either mail or our social media platforms.",
//   },
//   {
//     question: "Is ApriFull suitable for beginners?",
//     answer:
//       "Yes. Sessions are designed for both beginners and experts.",
//   },
//   {
//     question: "Are there sponsorship opportunities?",
//     answer:
//       "Yes! AprilFull partners with brands, startups, and organizations to create mutually beneficial sponsorship packages.",
//   },
//   {
//     question: "How can I stay updated about ApriFull?",
//     answer:
//       "Follow our official social media channels, and regularly check the website for announcements, ticket sales, and event updates.",
//   },
//   {
//     question: "Who organizes ApriFull?",
//     answer:
//       "AprilFull is organised by the AprilFull team, a group of professionals dedicated to creating a unique cultural and educational experience in Africa.",
//   },
// ]

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null)

//   return (
//     <section className="px-6 py-20 bg-[#110A12]">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
//           FAQs (Frequently Asked Questions)
//         </h1>

//         <div className="space-y-8">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index

//             return (
//               <button
//                 key={index}
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//                 className="w-full text-left focus:outline-none"
//               >
//                 {/* Question */}
//                 <div className="flex items-center gap-3">
//                   <span className="text-lg md:text-xl font-medium text-white">
//                     {faq.question}
//                   </span>

//                   <ArrowRight
//                     className={`w-7 h-7 transition-transform duration-300 ${
//                       isOpen
//                         ? "rotate-90 text-[#964BE6]"
//                         : "text-white/70"
//                     }`}
//                   />
//                 </div>

//                 {/* Answer */}
//                 {isOpen && (
//                   <div className="mt-4 text-white/70 text-base leading-relaxed max-w-3xl">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </button>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What is ApriFull?",
    answer:
      "ApriFull is a creative and innovation-driven event designed to bring together creatives, technologists, entrepreneurs, and digital enthusiasts. It focuses on modern creative challenges, emerging technologies, collaboration, learning, and community building through talks, workshops, and experiences.",
  },
  {
    question: "Who should attend ApriFull?",
    answer:
      "Everyone is welcome! Whether you’re a blockchain beginner, a seasoned crypto enthusiast, an artist, or someone curious about Web3 and entertainment, there’s something for you.",
  },
  {
    question: "When and where does the event take place?",
    answer:
      "Dates and venue details are announced on the official website and social media channels. Attendees are encouraged to register early, as tickets often sell out quickly.",
  },
  {
    question: "How can I buy tickets?",
    answer:
      "Tickets are available online through our website. We accept multiple payment options, including fiat and select cryptocurrencies.",
  },
  {
    question: "What kind of activities happen at ApriFull?",
    answer:
      "The event features a mix of panel discussions, live performances (music, comedy, spoken word, etc.), networking sessions, giveaways, games, and interactive experiences.",
  },
  {
    question: "Can artists and performers participate?",
    answer:
      "Absolutely! We collaborate with artists, performers, and creators. Feel free to reach out to us via either mail or our social media platforms.",
  },
  {
    question: "Is ApriFull suitable for beginners?",
    answer:
      "Yes. Sessions are designed for both beginners and experts.",
  },
  {
    question: "Are there sponsorship opportunities?",
    answer:
      "Yes! AprilFull partners with brands, startups, and organizations to create mutually beneficial sponsorship packages.",
  },
  {
    question: "How can I stay updated about ApriFull?",
    answer:
      "Follow our official social media channels, and regularly check the website for announcements, ticket sales, and event updates.",
  },
  {
    question: "Who organizes ApriFull?",
    answer:
      "AprilFull is organised by the AprilFull team, a group of professionals dedicated to creating a unique cultural and educational experience in Africa.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 py-20 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-20 transition-colors duration-300">
          FAQs (Frequently Asked Questions)
        </h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <button
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left focus:outline-none"
              >
                {/* Question */}
                <div className="flex items-center gap-3">
                  <span className="text-lg md:text-xl font-medium text-black dark:text-white transition-colors duration-300">
                    {faq.question}
                  </span>

                  <ArrowRight
                    className={`w-7 h-7 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-90 text-purple-600 dark:text-purple-400"
                        : "text-black/70 dark:text-white/70"
                    }`}
                  />
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="mt-4 text-black/70 dark:text-white/70 text-base leading-relaxed max-w-3xl transition-colors duration-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
