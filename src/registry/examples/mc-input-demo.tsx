import { McInput } from "@/registry/ui/mc-input"
import { Mail, Lock, User } from "lucide-react"

export default function McInputDemo() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-6 p-10">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default Input</label>
        <McInput placeholder="Type something..." />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">With Left Icon</label>
        <McInput 
          placeholder="email@example.com" 
          leftIcon={<Mail className="size-4" />} 
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Filled Variant</label>
        <McInput 
          variant="filled"
          placeholder="Username" 
          leftIcon={<User className="size-4" />} 
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Password Example</label>
        <McInput 
          type="password"
          placeholder="••••••••" 
          leftIcon={<Lock className="size-4" />} 
          variant="outline"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium italic text-destructive">Invalid State</label>
        <McInput 
          aria-invalid="true"
          placeholder="Error state..." 
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium opacity-50">Disabled</label>
        <McInput 
          disabled
          placeholder="You cannot type here" 
        />
      </div>
    </div>
  )
}
