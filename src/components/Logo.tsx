import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 32 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      className={cn("shrink-0 transition-colors duration-300", className)}
    >
      {/* Outer Left Pillar of the "M"
        Uses 'currentColor' to adapt instantly to Light/Dark mode text colors.
      */}
      <line
        x1="16"
        y1="20"
        x2="16"
        y2="100"
        stroke="var(--primary)"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Outer Right Pillar of the "M" */}
      <line
        x1="104"
        y1="20"
        x2="104"
        y2="100"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Inner "U" Component
        Expanded width with a mathematically perfect semi-circle bottom arc.
        Uses 'var(--primary)' to automatically pull the active theme's accent color.
      */}
      <path
        d="M 40 20 V 60 A 18 18 0 0 0 80 60 V 20"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}
