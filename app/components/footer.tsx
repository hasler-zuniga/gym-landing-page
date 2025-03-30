import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white font-bold text-xl">DECODED TRAINING LAB</h2>
            <p className="mt-4 text-gray-400">
              Transform your body and mind with our expert-led fitness programs. Join our community and start your
              journey today.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#programs" className="text-gray-400 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              Call us: <br />
              <a href="tel:(760) 808-5779" className="text-green-500 hover:text-green-400">
                (760) 808-5779
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500/20">
          <p className="text-gray-400 text-center">&copy; 2024 Decoded Training Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

