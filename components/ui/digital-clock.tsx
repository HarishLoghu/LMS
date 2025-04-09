"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useState } from "react"

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "pink" | "green" | "purple"
  showDate?: boolean
  showSeconds?: boolean
  is24Hour?: boolean
}

export function DigitalClock({
  variant = "blue",
  showDate = true,
  showSeconds = true,
  is24Hour = true,
  className,
  ...props
}: DigitalClockProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = () => {
    let hours = time.getHours()
    const minutes = time.getMinutes().toString().padStart(2, "0")
    const seconds = time.getSeconds().toString().padStart(2, "0")
    let ampm = ""

    if (!is24Hour) {
      ampm = hours >= 12 ? "PM" : "AM"
      hours = hours % 12
      hours = hours ? hours : 12 // the hour '0' should be '12'
    }

    const hoursStr = hours.toString().padStart(2, "0")

    return (
      <>
        <span>{hoursStr}</span>
        <span className="animate-pulse">:</span>
        <span>{minutes}</span>
        {showSeconds && (
          <>
            <span className="animate-pulse">:</span>
            <span>{seconds}</span>
          </>
        )}
        {!is24Hour && <span className="text-xs ml-1">{ampm}</span>}
      </>
    )
  }

  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return time.toLocaleDateString("en-US", options)
  }

  const variantStyles = {
    blue: "text-neon-blue",
    pink: "text-neon-pink",
    green: "text-neon-green",
    purple: "text-neon-purple",
  }

  return (
    <div className={cn("font-mono text-lg tracking-wider", variantStyles[variant], className)} {...props}>
      <div className="cyber-font">{formatTime()}</div>
      {showDate && <div className="text-xs opacity-70 mt-1">{formatDate()}</div>}
    </div>
  )
}

