"use client"

import Image from "next/image"

export default function ReachMetrics() {
  const metrics = [
    { number: "2", label: "States", sublabel: "Lagos & Delta" },
    { number: "3", label: "Editions", sublabel: "" },
    { number: "1000+", label: "Attendees", sublabel: "" },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#110A12] overflow-x-hidden">

      {/* Top Purple Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[280px] w-[600px] -translate-x-1/2 rounded-full bg-[#964BE6]/50 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* L-Shape Image Container */}
        <div className="relative mx-auto h-[520px] w-full lg:w-[900px] overflow-hidden rounded-2xl shadow-2xl">

          {/* Background Image */}
          <Image
            src="/assets/subtract.svg"
            alt="aprilful-img"
            fill
            className="object-cover"
          />

          {/* Overlay Content (aligned to top) */}
          <div className="absolute inset-y-0 right-0 flex w-full flex-col items-start gap-4 p-6 sm:p-8 lg:w-[55%] lg:p-10 -translate-y-4">

            {/* Title & Subtitle */}
            <div>
              <h2 className="mb-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Our Reach So Far
              </h2>
              <p className="text-base text-white/80 sm:text-lg leading-relaxed">
                Here is how far we have gone on the mission to Educate & Entertain
              </p>
            </div>

            {/* Metrics Grid (smaller cards) */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#CC9CFF] px-4 py-3 text-center shadow-lg transition hover:shadow-xl"
                >
                  <div className="mb-1 text-xl font-black text-white lg:text-2xl">
                    {metric.number}
                  </div>
                  <div className="mb-1 text-sm font-bold text-black lg:text-sm">
                    {metric.label}
                  </div>
                  {metric.sublabel && (
                    <div className="text-xs text-black lg:text-xs">
                      {metric.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
