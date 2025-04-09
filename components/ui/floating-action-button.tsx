"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useState } from "react"

interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  actions?: {
    icon: React.ReactNode
    label: string
    onClick: () => void
  }[]
}

export function FloatingActionButton({ icon, actions = [], className, ...props }: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action buttons */}
      {isOpen && actions.length > 0 && (
        <div className="absolute bottom-16 right-0 flex flex-col-reverse gap-3 items-end mb-2">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.onClick()
                setIsOpen(false)
              }}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-full",
                "bg-cyber-dark border border-neon-blue text-white",
                "hover:bg-neon-blue/10 transition-all duration-300",
                "opacity-0 animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm">{action.label}</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-blue/20">
                {action.icon}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={toggleOpen}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center",
          "bg-neon-blue text-cyber-black font-bold",
          "shadow-[0_0_15px_rgba(0,240,255,0.5)]",
          "transition-all duration-300 transform",
          isOpen && "rotate-45",
          className,
        )}
        {...props}
      >
        {icon}
      </button>
    </div>
  )
}

