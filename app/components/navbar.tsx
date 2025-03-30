"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              DECODED TRAINING LAB
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#programs" className="text-gray-300 hover:text-white px-3 py-2">
                Programs
              </Link>
              <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white px-3 py-2">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2">
                Contact
              </Link>
              <Button
                variant="outline"
                className="ml-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#programs" className="text-gray-300 hover:text-white block px-3 py-2">
              Programs
            </Link>
            <Link href="#features" className="text-gray-300 hover:text-white block px-3 py-2">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white block px-3 py-2">
              Contact
            </Link>
            <Button
              variant="outline"
              className="w-full mt-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

