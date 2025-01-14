import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white">
      <Link href="/" className="text-xl font-serif italic">
        Dee&apos;s Estate
      </Link>
      
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
        <Link href="/" className="text-blue-600">Home</Link>
        <Link href="/rent" className="text-gray-600 hover:text-blue-600">Rent</Link>
        <Link href="/land" className="text-gray-600 hover:text-blue-600">Land</Link>
        <Link href="/agent" className="text-gray-600 hover:text-blue-600">Agent</Link>
        <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  )
}

