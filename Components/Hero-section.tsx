import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8 px-4 sm:px-6 py-8 sm:py-12 items-center">
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight">
          Helping you find the property of your dreams.
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Creating quality urban lifestyles, building stronger communities
        </p>
        <div className="flex items-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Learn More
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="relative aspect-[4/3] rounded-tr-[50px] sm:rounded-tr-[100px] overflow-hidden mt-8 md:mt-0">
        <Image
          src="/placeholder.svg"
          alt="Modern luxury house with pool"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

