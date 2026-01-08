"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 overflow-x-hidden bg-black">
      
      {/* Text Content */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3">

          {/* Blockchain with Purple Glow */}
          <div className="relative inline-block">
            {/* Glow */}
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,_#964BE6_0%,_transparent_70%)] blur-3xl opacity-70" />

            <h1 className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight">
              Blockchain{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">
                &
              </span>
            </h1>
          </div>

          {/* Entertainment + Image */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight">
              Entertainment
            </h1>
              {/* (
            <Image
              src="/assets/bet.png"
              alt="Brand Logo"
              width={140}
              height={40}
              className="object-contain"
            />
            ) */}
        <div className="flex items-center gap-0.5 justify-center">
          {/* Left Parenthesis */}
          <span className="text-4xl md:text-5xl lg:text-6xl text-white font-black select-none">
            (
          </span>

          {/* Logo */}
          <Image
            src="/assets/bet.png"
            alt="Brand Logo"
            width={140}
            height={40}
            className="object-contain"
          />

          {/* Right Parenthesis */}
          <span className="text-4xl md:text-5xl lg:text-6xl text-white font-black select-none">
            )
          </span>
        </div>



          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Africa&apos;s Premier WEB3 entertainment event
          <br className="hidden sm:block" />
          where innovation meets creativity
        </p>
      </div>

      {/* Hero Image */}
      <div className="mt-10">
        <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[476px] lg:w-[1545px] overflow-hidden rounded-xl md:rounded-2xl">
          <Image
            src="/assets/hero.svg"
            alt="BAT Event Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

    </section>
  )
}