"use client"
import Image from 'next/image';
export default function EntertainHeader() {
  return (
    // <header className="bg-gradient-to-r from-[#4a1f7f] to-[#6b2fa0] py-6">
      <header className="bg-[#2E0C4C] py-6">
      <div className="flex gap-8 whitespace-nowrap">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            <div><Image
                src="/assets/bbt.png"
                alt="Brand Logo"
                width={314}
                height={89} 
                className="object-contain" /></div>
          </div>
        ))}
      </div>
    </header>
  )
}
