import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AnimatedBackground } from "@/components/ui/animated-background"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cyberpunk Library",
  description: "The future of libraries is here",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground intensity="medium">{children}</AnimatedBackground>
      </body>
    </html>
  )
}



import './globals.css'