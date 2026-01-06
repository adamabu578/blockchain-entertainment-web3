'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#', active: true },
    { label: 'Team', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6 lg:px-8">
      
      {/* Navbar */}
      <div className="flex items-center justify-between bg-white/5 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 border border-white/10 shadow-lg">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/april-logo.png"
            alt="AprilFull Logo"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-all ${
                item.active
                  ? 'text-purple-400 border-b-2 border-purple-400 pb-1'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
          <div className="p-5 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-sm transition ${
                  item.active
                    ? 'bg-purple-500/20 text-purple-400 border-l-4 border-purple-400'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
