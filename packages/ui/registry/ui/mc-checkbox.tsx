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
        sm: "size-4 [&_[data-slot=checkbox-indicator]>svg]:size-3",
        md: "size-5 [&_[data-slot=checkbox-indicator]>svg]:size-4"
      },
    }
    ,
    defaultVariants: {
      size: "md"
    }
  }
)

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
    }


function McCheckbox({
  className,
  size,
  text,
  supportText,
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
          "border-muted-foreground text-muted-foreground hover:border-primary data-checked:border-primary data-checked:text-primary",
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
          className="absolute inset-0 grid place-items-center text-current opacity-100 transition-none"
        >
          <CheckIcon className="translate-x-[0.5px] translate-y-[0.5px]" />
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
