import { cn } from "@/lib/utils"
import type React from "react"

interface RentalProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  dueDate: string
  isOverdue?: boolean
}

export function RentalProgress({ dueDate, isOverdue = false, className, ...props }: RentalProgressProps) {
  // Calculate days left (mock calculation for frontend)
  const calculateProgress = () => {
    // This would normally be calculated based on actual dates
    // For now, we'll return a random percentage between 10-90%
    return isOverdue ? 100 : Math.floor(Math.random() * 80) + 10
  }

  const progress = calculateProgress()

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex justify-between items-center text-xs mb-1">
        <span className="text-gray-400">Due Date: {dueDate}</span>
        <span className={isOverdue ? "text-neon-pink" : "text-neon-blue"}>
          {isOverdue ? "Overdue" : `${100 - progress}% time left`}
        </span>
      </div>
      <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            isOverdue ? "bg-neon-pink animate-pulse" : progress > 70 ? "bg-neon-yellow" : "bg-neon-green",
          )}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

