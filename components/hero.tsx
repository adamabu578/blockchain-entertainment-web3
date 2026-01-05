"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      {/* Text Content */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <div className="flex flex-col items-center">
          {/* Blockchain & */}
          <h1 className="text-7xl md:text-8xl font-black text-white tracking-tight font-PolySans Trial leading-[1]">
            Blockchain{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">
              &
            </span>
          </h1>

          {/* Entertainment + Image */}
          <div className="flex items-center space-x-3 -mt-6">
            <h1 className="text-7xl md:text-8xl font-black text-white tracking-tight leading-[1]">
              Entertainment
            </h1>

            <Image
              src="/assets/bet.png"
              alt="Brand Logo"
              width={167}
              height={50} 
              className="object-contain"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed text-balance font-polySans Trial mt-6">
          Africa's Premier WEB3 entertainment event
          <br />
          where innovation meets creativity
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[476px] mt-6 px-4">
        <Image
          src="/assets/hero.png"
          alt="BAT Event Hero"
          fill
          priority
          className="object-cover rounded-2xl"
        />
      </div>
    </section>
  )
}
