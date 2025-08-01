import Image from 'next/image'
import React from 'react'
import { ChevronDown } from 'lucide-react'

function Navbar() {
  const navitems = [
    { name: "Create", href: "/" },
    { name: "Prepare", href: "/prepare" },
    { name: "Get the Job", href: "/get-the-job" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#FFFFFF80] shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Resumatch.io" width={150} height={40} className="h-8 w-auto" />
      </div>

      {/* Navigation Items */}
      <div className="flex items-center space-x-8">
        {navitems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-[14px]"
          >
            {item.name}
            <ChevronDown className="ml-1 h-4 w-4" />
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
          Sign Up
        </button>
        <button className="bg-[#4A3AFF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar