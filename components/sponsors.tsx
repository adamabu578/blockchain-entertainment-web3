export default function Sponsors() {
  const sponsors = [
    {
      name: "Bitget Wallet",
      logo: "/assets/bidget.png",
    },
    {
      name: "Avalanche",
      logo: "/assets/avalanche.png",
    },
    {
      name: "Asset Chain",
      logo: "/assets/asset-chain.png",
    },
    {
      name: "CoinEx",
      logo: "/assets/coinex.png",
    },
    {
      name: "Vent",
      logo: "/assets/vent.png",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 text-center">
          <div className=" bg-border flex-1 hidden md:block" />
          <h2 className="text-[48px] font-medium  tracking-widest px-4">
            Past Gold Sponsors
          </h2>
          <div className=" bg-border flex-1 hidden md:block" />
        </div>

        {/* Sponsors Row */}
        <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
