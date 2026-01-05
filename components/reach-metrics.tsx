// import Image from "next/image"

// export default function ReachMetrics() {
//   const metrics = [
//     {
//       number: "2",
//       label: "States",
//       sublabel: "Lagos & Delta",
//     },
//     {
//       number: "3",
//       label: "Editions",
//       sublabel: "",
//     },
//     {
//       number: "1000+",
//       label: "Attendees",
//       sublabel: "",
//     },
//   ]

//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
//       <div className="max-w-7xl mx-auto">
//         {/* Image with Overlay Text and Metrics */}
//         <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
//           <Image
//             src="/assets/subtract.png"
//             alt="aprilful-img"
//             fill
//             className="object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-6 lg:px-12">
//             <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 text-center">
//               Our Reach So Far
//             </h2>
//             <p className="text-white/70 text-lg mb-8 text-center max-w-2xl">
//               Here is how far we have gone on the mission to Educate & Entertain
//             </p>

//             {/* Metrics Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
//               {metrics.map((metric, index) => (
//                 <div
//                   key={index}
//                   className="bg-purple-400 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:bg-purple-500 transition-all duration-300"
//                 >
//                   <div className="text-3xl lg:text-4xl font-black text-white mb-2">
//                     {metric.number}
//                   </div>
//                   <div className="text-black font-bold text-sm lg:text-base mb-1">
//                     {metric.label}
//                   </div>
//                   {metric.sublabel && (
//                     <div className="text-black text-xs lg:text-sm">
//                       {metric.sublabel}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image"

export default function ReachMetrics() {
  const metrics = [
    {
      number: "2",
      label: "States",
      sublabel: "Lagos & Delta",
    },
    {
      number: "3",
      label: "Editions",
      sublabel: "",
    },
    {
      number: "1000+",
      label: "Attendees",
      sublabel: "",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Event Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/subtract.png"
              alt="aprilful-img"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Title and Metrics */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Our Reach So Far
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Here is how far we have gone on the mission to Educate & Entertain
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-purple-400 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:bg-purple-500 transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">
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
