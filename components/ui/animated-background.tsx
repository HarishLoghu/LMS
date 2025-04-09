import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  intensity?: "low" | "medium" | "high"
}

export function AnimatedBackground({ children, intensity = "medium", className, ...props }: AnimatedBackgroundProps) {
  const intensityClasses = {
    low: "before:opacity-5",
    medium: "before:opacity-10",
    high: "before:opacity-20",
  }

  return (
    <div className={cn("circuit-bg relative min-h-screen", intensityClasses[intensity], className)} {...props}>
      {/* Animated lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent animate-pulse opacity-30"></div>
        <div
          className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-neon-pink/20 to-transparent animate-pulse opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-neon-green/20 to-transparent animate-pulse opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent animate-pulse opacity-30"></div>
        <div
          className="absolute top-2/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent animate-pulse opacity-30"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-3/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon-green/20 to-transparent animate-pulse opacity-30"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {children}
    </div>
  )
}

