import { NeonButton } from "@/components/ui/neon-button"
import { SearchBar } from "@/components/ui/search-bar"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20 animate-circuit-flow"></div>
          <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-neon-flicker">
            <span className="text-neon-blue">Welcome to the </span>
            <span className="text-neon-pink">Future </span>
            <span className="text-neon-green">of Libraries</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore a vast collection of digital knowledge in our cybernetic library system. The future of reading is
            now.
          </p>

          {/* Search Bar */}
          <div className="mb-12 w-full max-w-2xl mx-auto">
            <SearchBar />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="green" size="lg" isLink href="/books" className="min-w-[180px]">
              Browse Library
            </NeonButton>
            <NeonButton variant="pink" size="lg" isLink href="/login" className="min-w-[180px]">
              Login
            </NeonButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-neon-blue flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neon-blue text-glow-blue">
            Cutting-Edge Library Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass border border-neon-blue rounded-lg p-6 hover:shadow-neon-blue transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-neon-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-blue">Digital Catalog</h3>
              <p className="text-gray-300">
                Access thousands of books, journals, and digital media from anywhere in the world.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass border border-neon-pink rounded-lg p-6 hover:shadow-neon-pink transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-neon-pink"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-pink">Instant Access</h3>
              <p className="text-gray-300">Borrow and return books with a single click. No waiting, no late fees.</p>
            </div>

            {/* Feature 3 */}
            <div className="glass border border-neon-green rounded-lg p-6 hover:shadow-neon-green transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-neon-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-green">Personalized Recommendations</h3>
              <p className="text-gray-300">Our AI system learns your preferences and suggests books you'll love.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/register"
              className="text-neon-blue hover:text-neon-pink transition-colors duration-300 underline"
            >
              Create an account to get started →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-neon-blue/30 glass">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-neon-blue text-glow-blue">
              CYBER<span className="text-neon-pink text-glow-pink">LIB</span>
            </h2>
          </div>
          <div className="text-gray-400 text-sm">© 2025 CyberLib. All rights reserved. The future of libraries.</div>
        </div>
      </footer>
    </main>
  )
}

