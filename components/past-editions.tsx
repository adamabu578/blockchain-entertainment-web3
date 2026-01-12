// "use client"

// import Image from "next/image"
// import { ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface Edition {
//   id: number
//   title: string
//   location: string
//   image: string
//   description: string[]
// }

// const editions: Edition[] = [
//   {
//     id: 1,
//     title: "1st Edition",
//     location: "Victoria Island, Lagos State, Nigeria",
//     image: "/assets/past-img.png",
//     description: [
//       "AprilFull 1st brought together over 100 attendees from 7 states across Nigeria, featuring a vibrant mix of Web3 enthusiasts, Web2 professionals, influencers, founders, and tech learners.",
//       "The event delivered keynote sessions from blockchain pioneers, insightful discussions on emerging trends, and live performances that made blockchain education fun, engaging, and highly relatable.",
//     ],
//   },
//   {
//     id: 2,
//     title: "2nd Edition",
//     location: "Ikeja, Lagos State, Nigeria",
//     image: "/assets/past-img1.png",
//     description: [
//       "The 2nd edition event expanded to over 300 participants from across Nigeria and beyond (USA), featuring a stronger educational structure built around impactful keynote speeches and engaging panel sessions.",
//       "Attendees enjoyed insights from leading blockchain pioneers, discussions on emerging trends shaping the industry, and live performances that made blockchain education fun, relatable, and unforgettable.",
//     ],
//   },
//   {
//     id: 3,
//     title: "3rd Edition",
//     location: "Asaba, Delta State, Nigeria",
//     image: "/assets/past-img2.png",
//     description: [
//       "Attendance grew to over 500 participants — the highest recorded turnout for any Web3 event in the state — featuring reputable guest speakers, expert panelists, and participation from top Web3 influencers, all supported by industry-leading brand sponsors.",
//     ],
//   },
// ]

// export default function PastEditions() {
//   return (
//     <section className="relative py-24 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#110A12] overflow-hidden">
//       <div className="max-w-7xl mx-auto relative">

//         {/* HEADER WITH CONTROLLED GLOW */}
//         <div className="relative text-center mb-24 inline-block w-full">
//           <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-white z-10">
//             Past Editions
//           </h2>

//           {/* Glow only above header — unchanged */}
//           <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[320px] h-[120px] bg-[#964BE6]/60 blur-[120px] pointer-events-none" />
//         </div>

//         {/* EDITIONS */}
//         <div className="space-y-28">
//           {editions.map((edition) => (
//             <div
//               key={edition.id}
//               className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
//             >
//               {/* IMAGE */}
//               <div className="w-full lg:w-1/2 relative">
//                 <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">

//                   {/* IMAGE GLOW — ONLY FOR 1ST EDITION (unchanged) */}
//                   {edition.id === 1 && (
//                     <div className="absolute -top-10 -left-10 w-[220px] h-[220px] bg-[#964BE6]/50 blur-[140px] z-0 pointer-events-none" />
//                   )}

//                   <Image
//                     src={edition.image}
//                     alt={edition.title}
//                     fill
//                     className="object-cover relative z-10"
//                   />

//                   <div className="absolute inset-0 bg-black/30 z-10" />

//                   {/* OPTIONAL BUTTON (still commented) */}
//                   {/*
//                   <div className="absolute bottom-6 left-6 z-20">
//                     <Button
//                       variant="outline"
//                       className="
//                         h-[42px]
//                         px-6
//                         rounded-full
//                         border border-white/70
//                         bg-transparent
//                         text-sm
//                         font-medium
//                         text-white
//                         hover:bg-transparent
//                         hover:border-white
//                         group
//                       "
//                     >
//                       View Gallery
//                       <ArrowRight
//                         size={16}
//                         className="ml-2 transition-transform group-hover:translate-x-1"
//                       />
//                     </Button>
//                   </div>
//                   */}
//                 </div>
//               </div>

//               {/* TEXT */}
//               <div className="w-full lg:w-1/2 space-y-5">
//                 <h3 className="text-3xl md:text-4xl font-bold text-white">
//                   {edition.title}
//                 </h3>

//                 <p className="text-lg text-gray-300">
//                   {edition.location}
//                 </p>

//                 <div className="space-y-4">
//                   {edition.description.map((text, index) => (
//                     <p
//                       key={index}
//                       className="text-gray-300 leading-relaxed text-justify"
//                     >
//                       {text}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }



'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      "Attendance grew to over 500 participants — the highest recorded turnout for any Web3 event in the state — featuring reputable guest speakers, expert panelists, and participation from top Web3 influencers, all supported by industry-leading brand sponsors.",
    ],
  },
]

export default function PastEditions() {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 xl:px-24 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* HEADER WITH CONTROLLED GLOW */}
        <div className="relative text-center mb-24 inline-block w-full">
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-black dark:text-white z-10 transition-colors duration-300">
            Past Editions
          </h2>

          {/* Glow above header */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[320px] h-[120px] bg-purple-700/60 dark:bg-purple-500/60 blur-[120px] pointer-events-none transition-colors duration-300" />
        </div>

        {/* EDITIONS */}
        <div className="space-y-28">
          {editions.map((edition) => (
            <div
              key={edition.id}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
            >
              {/* IMAGE */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">

                  {/* IMAGE GLOW — ONLY FOR 1ST EDITION */}
                  {edition.id === 1 && (
                    <div className="absolute -top-10 -left-10 w-[220px] h-[220px] bg-purple-700/50 dark:bg-purple-500/50 blur-[140px] z-0 pointer-events-none transition-colors duration-300" />
                  )}

                  <Image
                    src={edition.image}
                    alt={edition.title}
                    fill
                    className="object-cover relative z-10"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10 transition-colors duration-300" />
                </div>
              </div>

              {/* TEXT */}
              <div className="w-full lg:w-1/2 space-y-5">
                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white transition-colors duration-300">
                  {edition.title}
                </h3>

                <p className="text-base md:text-lg text-black/70 dark:text-white/70 transition-colors duration-300">
                  {edition.location}
                </p>

                <div className="space-y-4">
                  {edition.description.map((text, index) => (
                    <p
                      key={index}
                      className="text-black/70 dark:text-white/70 leading-relaxed text-justify transition-colors duration-300"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
