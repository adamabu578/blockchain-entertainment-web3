import { Mail, Linkedin, Music, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-col md:flex-row gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <span className="text-white font-bold text-lg">ApriFull</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@aprifull.com"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="TikTok">
              <Music className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-white/50 text-sm mt-12 border-t border-white/10 pt-8">
          © 2025 ApriFull. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
