// import Image from 'next/image';
// export default function Navigation() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50">
//       <div className="w-[1397px] h-[45px] mx-auto px-6 py-4">
//         <div className="flex items-center justify-between bg-white/5 backdrop-blur-md rounded-full px-8 py-4 border border-white/10">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
      
//            <Image
//               src="/assets/april-logo.png"   
//               alt="Brand Logo"
//               width={50}
//               height={30}
//               className="object-contain"
//             />
        
//           </div>

//           {/* Menu Items */}
//           <div className="flex items-center gap-8">
//             <a href="#" className="text-purple-400 font-medium text-sm hover:text-purple-300 transition">
//               Home
//             </a>
//             <a href="#" className="text-white/80 font-medium text-sm hover:text-white transition">
//               Team
//             </a>
//             <a href="#" className="text-white/80 font-medium text-sm hover:text-white transition">
//               Gallery
//             </a>
//             <a href="#" className="text-white/80 font-medium text-sm hover:text-white transition">
//               Contact
//             </a>
//             <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center ml-4">
//               {/* <span className="text-white font-bold text-sm">◆</span> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#', active: true },
    { label: 'Team', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/april-logo.png"   
              alt="AprilFull Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium text-sm transition-all duration-300 ${
                  item.active 
                    ? 'text-purple-400 border-b-2 border-purple-400 pb-1' 
                    : 'text-white/80 hover:text-white hover:scale-105'
                }`}
              >
                {item.label}
              </a>
            ))}
            
              
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl animate-fadeIn">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/april-logo.png"   
                    alt="AprilFull Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="text-white font-bold text-lg">
                    April<span className="text-purple-400">Full</span>
                  </span>
                </div>
                <ChevronDown 
                  className="text-white/60 cursor-pointer transform transition-transform" 
                  onClick={() => setIsMenuOpen(false)}
                  size={20}
                />
              </div>
              
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block py-3 px-4 rounded-lg transition-all ${
                      item.active 
                        ? 'bg-purple-500/20 text-purple-400 border-l-4 border-purple-400' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
              </div>
            </div>
          </div>
        )}
    </nav>
  );
}