"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface Edition {
  id: number
  title: string
  location: string
  image: string
  description: string[]
}

const editions: Edition[] = [
  {
    id: 1,
    title: "1st Edition",
    location: "Victoria Island, Lagos State, Nigeria",
    image: "/assets/past-img.png",
    description: [
      "AprilFull 1st brought together over 100 attendees from 7 states across Nigeria, featuring a vibrant mix of Web3 enthusiasts, Web2 professionals, influencers, founders, and tech learners.",
      "The event delivered keynote sessions from blockchain pioneers, insightful discussions on emerging trends, and live performances that made blockchain education fun, engaging, and highly relatable.",
    ],
  },
  {
    id: 2,
    title: "2nd Edition",
    location: "Ikeja, Lagos State, Nigeria",
    image: "/assets/past-img1.png",
    description: [
      "The 2nd edition event expanded to over 300 participants from across Nigeria and beyond (USA), featuring a stronger educational structure built around impactful keynote speeches and engaging panel sessions.",
      "Attendees enjoyed insights from leading blockchain pioneers, discussions on emerging trends shaping the industry, and live performances that made blockchain education fun, relatable, and unforgettable.",
    ],
  },
  {
    id: 3,
    title: "3rd Edition",
    location: "Asaba, Delta State, Nigeria",
    image: "/assets/past-img2.png",
    description: [
      "Attendance grew to over 500 participants - the highest recorded turnout for any Web3 event in the state - featuring reputable guest speakers, expert panelists, and participation from top Web3 influencers, all supported by industry-leading brand sponsors.",
    ],
  },
]

export default function PastEditions() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Past Editions
        </h2>

        {/* Editions List */}
        <div className="space-y-20">
          {editions.map((edition) => (
            <div
              key={edition.id}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            >
              {/* Image Section - LEFT */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-2xl">
                  <Image
                    src={edition.image}
                    alt={edition.title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    {/* <button className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full backdrop-blur-md transition-all duration-300">
                      View Gallery
                      <ArrowRight size={18} />
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Text Section - RIGHT */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {edition.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {edition.location}
                </p>

                <div className="space-y-4">
                  {edition.description.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-gray-300 leading-relaxed text-justify"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Logos */}
        {/* <div className="mt-20 pt-12 border-t border-purple-500/20">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-black text-xs font-bold">B&T</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    <div className="font-semibold text-white">EDUCATE.</div>
                    <div className="font-semibold text-white">ENTERTAIN.</div>
                    <div className="text-gray-500">2026</div>
                  </div>
                </div>
                {i < 5 && <span className="text-gray-600">•</span>}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
