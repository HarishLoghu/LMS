import { cn } from "@/lib/utils"
import type React from "react"

interface NeonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "pink" | "green" | "purple"
  glassEffect?: boolean
  subtle?: boolean
}

export function NeonCard({
  children,
  className,
  variant = "blue",
  glassEffect = true,
  subtle = true, // Default to subtle styling
  ...props
}: NeonCardProps) {
  const variantStyles = {
    blue: "border-neon-blue hover:shadow-[0_0_5px_rgba(0,240,255,0.3)]",
    pink: "border-neon-pink hover:shadow-[0_0_5px_rgba(255,0,255,0.3)]",
    green: "border-neon-green hover:shadow-[0_0_5px_rgba(0,255,159,0.3)]",
    purple: "border-neon-purple hover:shadow-[0_0_5px_rgba(191,0,255,0.3)]",
  }

  return (
    <div
      className={cn(
        "relative border rounded-lg transition-all duration-300 ease-in-out",
        subtle ? "bg-card-bg border-opacity-30" : glassEffect ? "glass" : "bg-cyber-dark",
        subtle ? "hover:border-opacity-100" : "hover:animate-glow-pulse",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

