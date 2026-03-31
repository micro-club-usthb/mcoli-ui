"use client"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"


const checkboxVariants =cva(
  "peer relative flex shrink-0 items-center justify-center rounded-[4px] border border-input bg-background text-primary-foreground transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5"
      },
    }
    ,
    defaultVariants: {
      size: "md"
    }
  }
)

const colorVariants = cva("", {
  variants: {
    intent: {
      default: "border-muted-foreground text-muted-foreground hover:border-primary data-checked:border-primary data-checked:text-primary",
      primary: "border-primary text-primary hover:border-primary data-checked:border-primary data-checked:text-primary",
      secondary: "border-secondary text-secondary hover:border-secondary data-checked:border-secondary data-checked:text-secondary",
      "game-dev": "border-primary text-primary hover:border-primary data-checked:border-primary data-checked:text-primary",
      robotics: "border-primary text-primary hover:border-primary data-checked:border-primary data-checked:text-primary",
      it: "border-primary text-primary hover:border-primary data-checked:border-primary data-checked:text-primary"
    }
  },
  defaultVariants: {
    intent: "default"
  }
})

const indicatorVariants = cva("absolute inset-0 grid place-items-center text-current opacity-100 transition-none", {
  variants: {
    size: {
      sm: "[&>svg]:h-3 [&>svg]:w-3",
      md: "[&>svg]:h-3.5 [&>svg]:w-3.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

const labelTextVariants = cva("font-semibold", {
  variants: {
    size: {
      sm: "text-[14px] leading-[14px]",
      md: "text-[16px] leading-[16px]"
    },
    disabled: {
      true: "text-muted-foreground",
      false: "text-foreground"
    }
  },
  defaultVariants: {
    size: "md",
    disabled: false
  }
})

const helperTextVariants = cva("text-xs", {
  variants: {
    disabled: {
      true: "text-muted-foreground",
      false: "text-muted-foreground"
    }
  },
  defaultVariants: {
    disabled: false
  }
})

export interface McCheckboxProps
  extends CheckboxPrimitive.Root.Props, 
    VariantProps<typeof checkboxVariants> {
      text?: string
      supportText?: string
      intent?: "default" | "primary" | "secondary" | "game-dev" | "robotics" | "it"
    }


function McCheckbox({
  className,
  size,
  text,
  supportText,
  intent,
  id,
  disabled,
  ...restProps
}: McCheckboxProps) {
  const generatedId = React.useId()
  const checkboxId = id ?? generatedId
  const helperText = supportText
  const labelId = text ? `${checkboxId}-label` : undefined
  const descriptionId = helperText ? `${checkboxId}-description` : undefined

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        "inline-flex gap-2.5",
        helperText ? "items-start" : "items-center",
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      )}
    >
      <CheckboxPrimitive.Root
        id={checkboxId}
        data-slot="checkbox"
        className={cn(
          checkboxVariants({ size }),
          colorVariants({ intent }),
          "relative rounded-[4px] bg-background outline-none transition-colors",
          "focus-visible:ring-3 focus-visible:ring-ring/50",
          "active:ring-4 active:ring-ring/50",
          "disabled:cursor-not-allowed disabled:pointer-events-none disabled:border-muted-foreground disabled:bg-muted/30 disabled:text-muted-foreground disabled:hover:border-muted-foreground disabled:focus-visible:ring-0 disabled:focus-visible:ring-transparent disabled:active:ring-0 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none data-[disabled]:border-muted-foreground data-[disabled]:bg-muted/30 data-[disabled]:text-muted-foreground data-[disabled]:hover:border-muted-foreground data-[disabled]:focus-visible:ring-0 data-[disabled]:focus-visible:ring-transparent data-[disabled]:active:ring-0",
          className
        )}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        disabled={disabled}
        {...restProps}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className={indicatorVariants({ size })}
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {(text || helperText) && (
        <span className="flex min-w-0 flex-col gap-0">
          {text && (
            <span
              id={labelId}
              className={labelTextVariants({ size, disabled: !!disabled })}
            >
              {text}
            </span>
          )}

          {helperText && (
            <span
              id={descriptionId}
              className={helperTextVariants({ disabled: !!disabled })}
            >
              {helperText}
            </span>
          )}
        </span>
      )}
    </label>
  )
}

export { McCheckbox }
