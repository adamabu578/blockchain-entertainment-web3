'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  // Load theme on first mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null

    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }

    setMounted(true)
  }, [])

  // Apply theme to <html>
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  if (!mounted) return null

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#D29FFF14] px-6 py-3 backdrop-blur-md">

        {/* Logo */}
        <Image
          src="/assets/april-logo.png"
          alt="AprilFull Logo"
          width={36}
          height={36}
          priority
        />

        {/* Desktop Menu */}
        <div className="ml-auto hidden items-center gap-6 md:flex">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white transition"
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full bg-black/5 dark:bg-white/10 p-2 hover:bg-black/10 dark:hover:bg-white/20 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto rounded-full p-2 text-black/70 dark:text-white/80 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:hidden">

          <div className="flex justify-end px-4 pt-4">
            <button
              onClick={toggleTheme}
              className="rounded-full bg-black/5 dark:bg-white/10 p-2"
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <div className="space-y-2 p-5">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-black/70 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
