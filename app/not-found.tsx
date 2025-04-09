"use client"

import { NeonButton } from "@/components/ui/neon-button"
import { useEffect, useState } from "react"

export default function NotFoundPage() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    // Create random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20 animate-circuit-flow"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/30 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className={`text-9xl font-bold mb-4 relative ${glitchActive ? "animate-glitch-text" : ""}`}>
          <span
            className="absolute inset-0 text-neon-pink text-glow-pink"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 33%, 0 33%)" }}
          >
            404
          </span>
          <span
            className="absolute inset-0 text-neon-blue text-glow-blue"
            style={{ clipPath: "polygon(0 33%, 100% 33%, 100% 66%, 0 66%)" }}
          >
            404
          </span>
          <span
            className="absolute inset-0 text-neon-green text-glow-green"
            style={{ clipPath: "polygon(0 66%, 100% 66%, 100% 100%, 0 100%)" }}
          >
            404
          </span>
          <span className="opacity-0">404</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-6 glitch-text">
          <span className="text-neon-blue">SYSTEM</span>
          <span className="text-neon-pink">_ERROR</span>
        </h2>

        <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
          The digital page you're looking for has been corrupted or deleted from our database.
        </p>

        <NeonButton variant="blue" size="lg" isLink href="/" rippleEffect={true} className="animated-border">
          Return to Home
        </NeonButton>
      </div>
    </div>
  )
}

