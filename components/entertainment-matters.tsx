// "use client"

// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"

// export default function EntertainmentMatters() {
//   return (
//     <section className="py-20 px-4 sm:px-6 bg-[#110A12] overflow-x-hidden">
//       <div className="mx-auto">
        
//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

//           {/* Left Side – Portrait Purple Card */}
//           <div className="flex justify-center">
//             <Card className="bg-[#CC9CFF] border-none rounded-3xl w-full sm:w-[360px] h-[480px]">
//               <CardContent className="p-6 h-full flex flex-col justify-center">
//                 <h2 className="text-4xl font-black text-black leading-tight mb-5">
//                   Entertainment
//                   <br />
//                   Matters
//                   <br />
//                   In <span className="text-white">WEB3</span>
//                 </h2>

//                 <p className="text-black text-base leading-relaxed mb-3">
//                   Entertainment is the emotional vehicle that carries the message
//                   of WEB3 adoption and B3T has mastered this blend like no other event.
//                 </p>

//                 <p className="text-black text-base leading-relaxed">
//                   By integrating performances, comedy, influencers, and gamified interaction
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Side – Stacked Cards */}
//           <div className="flex flex-col gap-4 w-full">
            
//             {/* White Description Card */}
//             <Card className="bg-[#F3E7FF] border-none rounded-2xl shadow-xl w-[560px] h-[340px]">
//               <CardContent className="p-6">
//                 <p className="text-black text-base leading-relaxed mb-3">
//                   AprilFull combines blockchain education with dynamic entertainment,
//                   to deliver an unparalleled experience for attendees.
//                 </p>

//                 <p className="text-black text-base leading-relaxed mb-3">
//                   By integrating education with engagement, AprilFull ensures
//                   participants remain captivated, while gaining invaluable insights
//                   about Web3.
//                 </p>

//                 <p className="text-black text-base leading-relaxed">
//                   B3T continues to redefine how blockchain knowledge is shared
//                   on the continent.
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Image Card with Purple Glow (down-right) */}
//             <div className="relative w-[560px] h-[320px]">
//               {/* Glow */}
//               <div className="absolute -bottom-6 -right-6 h-full w-full rounded-2xl bg-[#964BE6]/50 blur-[120px]" />

//               {/* Image Card */}
//               <Card className="relative h-full w-full overflow-hidden rounded-2xl border-none shadow-xl">
//                 <Image
//                   src="/assets/entertain-img.svg"
//                   alt="AprilFull event attendees"
//                   fill
//                   className="object-cover"
//                 />
//               </Card>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function EntertainmentMatters() {
  return (
    <section className="py-20 px-4 sm:px-6 overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <div className="mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* Left Side – Portrait Purple Card */}
          <div className="flex justify-center">
            <Card className="bg-purple-300 dark:bg-purple-800 border-none rounded-3xl w-full sm:w-[360px] h-[480px] transition-colors duration-300">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-black text-black dark:text-white leading-tight mb-5">
                  Entertainment
                  <br />
                  Matters
                  <br />
                  In <span className="text-white dark:text-purple-300">WEB3</span>
                </h2>

                <p className="text-black dark:text-white text-base leading-relaxed mb-3">
                  Entertainment is the emotional vehicle that carries the message
                  of WEB3 adoption and B3T has mastered this blend like no other event.
                </p>

                <p className="text-black dark:text-white text-base leading-relaxed">
                  By integrating performances, comedy, influencers, and gamified interaction
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Side – Stacked Cards */}
          <div className="flex flex-col gap-4 w-full">
            {/* White Description Card */}
            <Card className="bg-white dark:bg-gray-900 border-none rounded-2xl shadow-xl w-[560px] h-[340px] transition-colors duration-300">
              <CardContent className="p-6">
                <p className="text-black dark:text-white text-base leading-relaxed mb-3">
                  AprilFull combines blockchain education with dynamic entertainment,
                  to deliver an unparalleled experience for attendees.
                </p>

                <p className="text-black dark:text-white text-base leading-relaxed mb-3">
                  By integrating education with engagement, AprilFull ensures
                  participants remain captivated, while gaining invaluable insights
                  about Web3.
                </p>

                <p className="text-black dark:text-white text-base leading-relaxed">
                  B3T continues to redefine how blockchain knowledge is shared
                  on the continent.
                </p>
              </CardContent>
            </Card>

            {/* Image Card with Purple Glow */}
            <div className="relative w-[560px] h-[320px]">
              {/* Glow */}
              <div className="absolute -bottom-6 -right-6 h-full w-full rounded-2xl bg-purple-700/50 dark:bg-purple-500/50 blur-[120px] transition-colors duration-300" />

              {/* Image Card */}
              <Card className="relative h-full w-full overflow-hidden rounded-2xl border-none shadow-xl">
                <Image
                  src="/assets/entertain-img.svg"
                  alt="AprilFull event attendees"
                  fill
                  className="object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
