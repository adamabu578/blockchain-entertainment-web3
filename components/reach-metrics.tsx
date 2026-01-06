"use client"

import Image from "next/image"

export default function ReachMetrics() {
  const metrics = [
    { number: "2", label: "States", sublabel: "Lagos & Delta" },
    { number: "3", label: "Editions", sublabel: "" },
    { number: "1000+", label: "Attendees", sublabel: "" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 lg:gap-8 items-start">

          {/* Left - L-shaped Event Image */}
          <div className="relative w-full lg:w-[600px] h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/subtract.svg"
              alt="aprilful-img"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Purple Background for Text & Metrics */}
          <div className="bg-purple-950 lg:rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col justify-center gap-8">
            
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Our Reach So Far
              </h2>
              <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed">
                Here is how far we have gone on the mission to Educate & Entertain
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-purple-400 rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-xl hover:bg-purple-500 transition-all duration-300"
                >
                  <div className="text-2xl lg:text-4xl font-black text-white mb-1">
                    {metric.number}
                  </div>
                  <div className="text-black font-bold text-sm lg:text-base mb-1">
                    {metric.label}
                  </div>
                  {metric.sublabel && (
                    <div className="text-black text-xs lg:text-sm">
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

