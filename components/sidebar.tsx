"use client"

import { cn } from "@/lib/utils"
import { BarChart3, BookOpen, Home, LogOut, Menu, Users, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

// Update the sidebarLinks array to include the new pages
const sidebarLinks = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Books", href: "/books", icon: BookOpen },
  { name: "My Rentals", href: "/rented", icon: BookOpen },
  { name: "Users", href: "/users", icon: Users },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Admin", href: "/admin/rented-out", icon: Users },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-cyber-dark border border-neon-blue text-neon-blue md:hidden hover:bg-neon-blue/10 transition-colors duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 glass border-r border-neon-blue/30 transform transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-20 border-b border-neon-blue/30">
            <h1 className="text-2xl font-bold text-neon-blue text-glow-blue">
              CYBER<span className="text-neon-pink text-glow-pink">LIB</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {sidebarLinks.map((link, index) => {
              const isActive = pathname === link.href
              const Icon = link.icon

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-all duration-300",
                    "stagger-item",
                    `stagger-delay-${index + 1}`,
                    isActive
                      ? "bg-neon-blue/20 text-neon-blue shadow-neon-blue"
                      : "text-gray-300 hover:bg-neon-blue/10 hover:text-neon-blue",
                  )}
                >
                  <Icon size={20} className={cn("mr-3", isActive ? "text-neon-blue" : "text-gray-400")} />
                  <span>{link.name}</span>
                  {isActive && <div className="absolute left-0 w-1 h-8 bg-neon-blue rounded-r-full" />}
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-neon-blue/30">
            <Link
              href="/"
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-neon-pink/10 hover:text-neon-pink transition-all duration-300"
            >
              <LogOut size={20} className="mr-3 text-gray-400" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

