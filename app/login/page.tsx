"use client"

import { NeonButton } from "@/components/ui/neon-button"
import { NeonCard } from "@/components/ui/neon-card"
import { useState } from "react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20 animate-circuit-flow"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/30 to-transparent"></div>
      </div>

      {/* Login/Signup Card */}
      <NeonCard variant="blue" className="w-full max-w-md z-10">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neon-blue text-glow-blue mb-2">
              {isLogin ? "Login" : "Create Account"}
            </h1>
            <p className="text-gray-400">
              {isLogin ? "Access your digital library account" : "Join the future of libraries"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-cyber-dark/60 border-2 border-neon-blue rounded-md py-2 px-3
                          text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue
                          transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-cyber-dark/60 border-2 border-neon-blue rounded-md py-2 px-3
                        text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue
                        transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-cyber-dark/60 border-2 border-neon-blue rounded-md py-2 px-3
                        text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue
                        transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full bg-cyber-dark/60 border-2 border-neon-blue rounded-md py-2 px-3
                          text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue
                          transition-all duration-300"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-cyber-dark border-neon-blue rounded focus:ring-neon-blue"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="text-neon-pink hover:text-neon-blue transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <NeonButton variant={isLogin ? "blue" : "pink"} className="w-full py-2" type="submit">
                {isLogin ? "Sign In" : "Create Account"}
              </NeonButton>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-neon-blue/30"></div>
            <div className="px-4 text-sm text-gray-400">OR</div>
            <div className="flex-1 border-t border-neon-blue/30"></div>
          </div>

          {/* Social Login */}
          <button
            className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-neon-blue rounded-md
                    text-white hover:bg-neon-blue/10 transition-colors duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
            <span>Sign {isLogin ? "in" : "up"} with Google</span>
          </button>

          {/* Toggle Login/Signup */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-neon-blue hover:text-neon-pink transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </NeonCard>
    </div>
  )
}

