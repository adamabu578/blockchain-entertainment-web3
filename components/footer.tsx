// import { Mail, Linkedin, Music, Twitter } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between flex-col md:flex-row gap-8">
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 bg-white rounded-full"></div>
//             <span className="text-white font-bold text-lg">ApriFull</span>
//           </div>

//           <div className="flex items-center gap-6">
//             <a
//               href="mailto:contact@aprifull.com"
//               className="text-white/70 hover:text-white transition-colors"
//               aria-label="Email"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="TikTok">
//               <Music className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
//               <Twitter className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         <div className="text-center text-white/50 text-sm mt-12 border-t border-white/10 pt-8">
//           © 2025 ApriFull. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }

import { Mail, Linkedin, TicketIcon as TikTok, Twitter } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:hello@aprilfull.com",
      icon: Mail,
      ariaLabel: "Email",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      ariaLabel: "LinkedIn",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: TikTok,
      ariaLabel: "TikTok",
    },
    {
      name: "X",
      href: "https://x.com",
      icon: Twitter,
      ariaLabel: "X (Twitter)",
    },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Left section - Brand */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-4">AprilFull</h3>
            <p className="text-sm text-gray-400 max-w-xs">Innovative solutions for modern creative challenges.</p>
          </div>

          {/* Right section - Social Links with Lucide Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label={link.ariaLabel}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-gray-900 pt-8">
          <p className="text-center text-xs text-gray-500">© 2025 AprilFull. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
