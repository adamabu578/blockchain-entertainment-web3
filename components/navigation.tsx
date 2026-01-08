'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Apply theme to <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      {/* Navbar */}
      <div className="mx-auto flex max-w-7xl items-center rounded-full border border-white/10 bg-[#D29FFF14] px-6 py-3 backdrop-blur-md">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/april-logo.png"
            alt="AprilFull Logo"
            width={36}
            height={36}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="ml-auto hidden items-center gap-6 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto rounded-full p-2 text-white/80 transition hover:text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gray-900/95 shadow-xl backdrop-blur-md md:hidden">
          
          {/* Theme Toggle */}
          <div className="flex justify-end px-4 pt-4">
            <button
              onClick={toggleTheme}
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Links */}
          <div className="space-y-2 p-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
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
