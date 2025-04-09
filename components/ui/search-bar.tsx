"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { useState } from "react"

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (query: string) => void
  placeholder?: string
}

export function SearchBar({
  className,
  onSearch,
  placeholder = "Search for books, authors, genres...",
  ...props
}: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-cyber-dark/60 border-2 border-neon-blue rounded-full py-3 px-5 pl-12
                    text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue
                    transition-all duration-300 shadow-neon-blue"
          placeholder={placeholder}
          {...props}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="h-5 w-5 text-neon-blue animate-glow-pulse" />
        </div>
      </div>
    </form>
  )
}

