"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import type React from "react"
import { useState } from "react"

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "pink" | "green" | "purple"
  size?: "sm" | "md" | "lg"
  href?: string
  isLink?: boolean
  glowIntensity?: "low" | "medium" | "high"
  rippleEffect?: boolean
}

export function NeonButton({
  children,
  className,
  variant = "blue",
  size = "md",
  href,
  isLink = false,
  glowIntensity = "medium",
  rippleEffect = true,
  onClick,
  ...props
}: NeonButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([])

  const variantStyles = {
    blue: "border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_10px_rgba(0,240,255,0.5)]",
    pink: "border-neon-pink text-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_10px_rgba(255,0,255,0.5)]",
    green: "border-neon-green text-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_10px_rgba(0,255,159,0.5)]",
    purple: "border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_10px_rgba(191,0,255,0.5)]",
  }

  const sizeStyles = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  }

  const glowIntensityStyles = {
    low: "hover:shadow-[0_0_5px_rgba(0,240,255,0.3)]",
    medium: "hover:shadow-[0_0_10px_rgba(0,240,255,0.5)]",
    high: "hover:shadow-[0_0_15px_rgba(0,240,255,0.7)]",
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!rippleEffect) {
      onClick?.(e as React.MouseEvent<HTMLButtonElement>)
      return
    }

    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate ripple size based on button dimensions
    const size = Math.max(rect.width, rect.height) * 2

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    }

    setRipples([...ripples, newRipple])

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((ripples) => ripples.filter((r) => r.id !== newRipple.id))
    }, 600)

    onClick?.(e as React.MouseEvent<HTMLButtonElement>)
  }

  const buttonClasses = cn(
    "relative border-2 rounded-md font-bold transition-all duration-300 ease-in-out overflow-hidden",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-black",
    rippleEffect && "ripple-container",
    variantStyles[variant],
    sizeStyles[size],
    glowIntensityStyles[glowIntensity],
    className,
  )

  if (isLink && href) {
    return (
      <Link href={href} className={buttonClasses} onClick={handleClick}>
        {children}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple absolute bg-white/20"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={handleClick} {...props}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple absolute bg-white/20"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  )
}

