"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function EntertainmentMatters() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-x-hidden">
      <div className=" mx-auto">
        
        {/* Grid with smaller gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

          {/* Left Side – Portrait Purple Card */}
          <div className="flex justify-center"> {/* pull closer on large screens */}
            <Card className="bg-[#CC9CFF] border-none rounded-3xl w-full sm:w-[360px] h-[480px] w-[
360px] h-[480px]">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-black text-black leading-tight mb-5">
                  Entertainment
                  <br />
                  Matters
                  <br />
                  In <span className="text-white">WEB3</span>
                </h2>

                <p className="text-black text-base leading-relaxed mb-3">
                  Entertainment is the emotional vehicle that carries the message
                  of WEB3 adoption and B3T has mastered this blend like no other event.
                </p>

                <p className="text-black text-base leading-relaxed">
                  By integrating performances, comedy, influencers, and gamified interaction
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Side – Stacked Cards */}
          <div className="flex flex-col gap-4 w-full">
            
            {/* White Description Card */}
            <Card className="bg-[#F3E7FF] border-none rounded-2xl shadow-xl w-[560px] h-[340px]">
              <CardContent className="p-6">
                <p className="text-black text-base leading-relaxed mb-3">
                  AprilFull combines blockchain education with dynamic entertainment,
                  to deliver an unparalleled experience for attendees.
                </p>

                <p className="text-black text-base leading-relaxed mb-3">
                  By integrating education with engagement, AprilFull ensures
                  participants remain captivated, while gaining invaluable insights
                  about Web3.
                </p>

                <p className="text-black text-base leading-relaxed">
                  B3T continues to redefine how blockchain knowledge is shared
                  on the continent.
                </p>
              </CardContent>
            </Card>

            {/* Image Card */}
            <Card className="w-[560px] h-[320px] relative overflow-hidden rounded-2xl shadow-xl border-none">
              <div className="">
                <Image
                  src="/assets/entertain-img.svg"
                  alt="AprilFull event attendees"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
