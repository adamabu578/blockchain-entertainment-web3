import Image from "next/image";

export default function EntertainmentMatters() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Purple Card */}
          <div className="bg-purple-300 rounded-3xl p-10 lg:p-12 w-full lg:w-[560px] h-[331px] flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-4 lg:mb-8 leading-tight">
              Entertainment
              <br />
              Matters
              <br />
              In <span className="text-white">WEB3</span>
            </h2>

            <p className="text-black text-base leading-relaxed mb-2 lg:mb-6">
              Entertainment is the emotional vehicle that carries the message of WEB3 adoption and B3T has mastered this
              blend like no other event.
            </p>

            <p className="text-black text-base leading-relaxed">
              By integrating performances, comedy, influencers, and gamified interaction
            </p>
          </div>

          {/* Right Side - Stacked Cards */}
          <div className="flex flex-col gap-6 w-full">
            {/* White Description Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-black text-base leading-relaxed mb-4">
                AprilFull combines blockchain education with dynamic entertainment, to deliver an unparalleled
                experience for attendees.
              </p>

              <p className="text-black text-base leading-relaxed mb-4">
                By integrating education with engagement, Aprilfull ensures participants remain captivated, while
                gaining invaluable insights about Web3.
              </p>

              <p className="text-black text-base leading-relaxed">
                B3T continues to redefine how blockchain knowledge is shared on the continent.
              </p>
            </div>

            {/* Event Image */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/entertainment-img.jpg"
                alt="AprilFull event attendees"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
