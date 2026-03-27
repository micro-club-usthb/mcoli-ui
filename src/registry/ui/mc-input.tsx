import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex h-9 w-full rounded-lg border border-transparent bg-clip-padding px-3 py-1 text-sm transition-all outline-none select-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default: "bg-input/50 border-border hover:bg-input/80 focus-visible:bg-background",
        filled: "bg-muted/50 border-transparent hover:bg-muted/80 focus-visible:bg-background focus-visible:border-ring",
        outline: "bg-transparent border-border hover:border-ring/50 focus-visible:border-ring",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface McInputProps
  extends Omit<InputPrimitive.Props, 'variant'>,
    VariantProps<typeof inputVariants> {
  label?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const McInput = React.forwardRef<HTMLInputElement, McInputProps>(
  ({ className, variant, label, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId

    return (
      <div className="flex flex-col w-full gap-1.5 group/input-wrapper">
        {label && (
          <label 
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center group/input w-full">
          {leftIcon && (
            <div className="absolute left-3 flex items-center justify-center pointer-events-none text-muted-foreground group-focus-within/input:text-ring transition-colors">
              {leftIcon}
            </div>
          )}
          <InputPrimitive
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ variant, className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10"
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 flex items-center justify-center pointer-events-none text-muted-foreground group-focus-within/input:text-ring transition-colors">
              {rightIcon}
            </div>
          )}
        </div>
        {hint && (
          <p className="text-[0.8rem] text-muted-foreground transition-colors group-focus-within/input-wrapper:text-foreground/70">
            {hint}
          </p>
        )}
      </div>
    )
  }
)
McInput.displayName = "McInput"

export { McInput, inputVariants }
