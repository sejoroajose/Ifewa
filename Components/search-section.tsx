import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react'

export default function SearchSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Location</label>
          <Select defaultValue="lekki">
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lekki">Lekki</SelectItem>
              <SelectItem value="victoria-island">Victoria Island</SelectItem>
              <SelectItem value="ikoyi">Ikoyi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Property Type</label>
          <Select defaultValue="duplex">
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="duplex">Duplex</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Max Price</label>
          <Select defaultValue="10000">
            <SelectTrigger>
              <SelectValue placeholder="Select price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10000">$10,000</SelectItem>
              <SelectItem value="20000">$20,000</SelectItem>
              <SelectItem value="30000">$30,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

