"use client"

import Image from "next/image"
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
    <footer className="bg-[#000000] text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          {/* Left section - Brand Image */}
          <div className="flex-1">
            <Image
              src="/assets/april-logo.png" // 
              alt="AprilFull Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Right section - Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white  transition-colors p-2"
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
          <p className="text-center text-xs text-gray-500">
            © 2025 AprilFull. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
