import { McInput } from "@/registry/ui/mc-input"
import { Search } from "lucide-react"

export default function McInputDemo() {
  return (
    <div className="flex w-full max-w-sm items-center p-6">
      <McInput 
        placeholder="Search components..." 
        leftIcon={<Search className="size-4" />} 
      />
    </div>
  )
}
