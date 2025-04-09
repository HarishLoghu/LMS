import { cn } from "@/lib/utils"
import type React from "react"

interface UserAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  status?: "active" | "pending" | "overdue" | "offline"
  size?: "sm" | "md" | "lg"
}

export function UserAvatar({ src, alt, status = "active", size = "md", className, ...props }: UserAvatarProps) {
  const statusColors = {
    active: "border-neon-green shadow-[0_0_10px_rgba(0,255,159,0.5)]",
    pending: "border-neon-yellow shadow-[0_0_10px_rgba(255,255,0,0.5)]",
    overdue: "border-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.5)]",
    offline: "border-gray-500 shadow-none",
  }

  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  }

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden border-2",
        "transition-all duration-300",
        statusColors[status],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />

      {/* Status indicator */}
      <div
        className={cn(
          "absolute bottom-0 right-0 w-3 h-3 rounded-full border border-black",
          status === "active" && "bg-neon-green",
          status === "pending" && "bg-neon-yellow",
          status === "overdue" && "bg-neon-pink",
          status === "offline" && "bg-gray-500",
        )}
      />
    </div>
  )
}

