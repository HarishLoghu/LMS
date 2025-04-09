"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useRef, useState } from "react"

interface HolographicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "blue" | "pink" | "green" | "purple"
  intensity?: "low" | "medium" | "high"
  tiltEffect?: boolean
}

export function HolographicCard({
  children,
  variant = "blue",
  intensity = "medium",
  tiltEffect = true,
  className,
  ...props
}: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const variantStyles = {
    blue: "border-neon-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.3)]",
    pink: "border-neon-pink hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]",
    green: "border-neon-green hover:shadow-[0_0_10px_rgba(0,255,159,0.3)]",
    purple: "border-neon-purple hover:shadow-[0_0_10px_rgba(191,0,255,0.3)]",
  }

  const intensityClasses = {
    low: "before:opacity-30",
    medium: "before:opacity-50",
    high: "before:opacity-70",
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative border rounded-lg transition-all duration-300 ease-in-out overflow-hidden",
        "bg-card-bg border-opacity-30 backdrop-blur-sm",
        "hover:border-opacity-100",
        "holographic",
        tiltEffect && "tilt-card",
        intensityClasses[intensity],
        variantStyles[variant],
        className,
      )}
      style={{
        transform:
          tiltEffect && isHovered
            ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
            : "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
        transition: "transform 0.2s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}

