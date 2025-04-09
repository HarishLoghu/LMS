import { DigitalClock } from "@/components/ui/digital-clock"
import { HolographicCard } from "@/components/ui/holographic-card"
import { NeonButton } from "@/components/ui/neon-button"
import { UserAvatar } from "@/components/ui/user-avatar"
import { Sidebar } from "@/components/sidebar"
import { BarChart, BookOpen, Clock, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-6 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          {/* Header with Digital Clock */}
          <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-neon-blue text-glow-blue">Dashboard</h1>
              <p className="text-gray-400 mt-2">Welcome back, Admin. Here's what's happening in your library.</p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <DigitalClock variant="blue" />
              <UserAvatar src="/placeholder.svg?height=100&width=100" alt="Admin User" status="active" size="md" />
            </div>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Books */}
            <HolographicCard variant="blue" className="p-6 stagger-item stagger-delay-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Books</p>
                  <h3 className="text-2xl font-bold text-white">4,872</h3>
                </div>
                <div className="p-2 rounded-full bg-neon-blue/20">
                  <BookOpen className="h-6 w-6 text-neon-blue" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-neon-green text-sm">+12%</span>
                <span className="text-gray-400 text-sm ml-1">from last month</span>
              </div>
            </HolographicCard>

            {/* Borrowed Books */}
            <HolographicCard variant="pink" className="p-6 stagger-item stagger-delay-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Borrowed Books</p>
                  <h3 className="text-2xl font-bold text-white">1,234</h3>
                </div>
                <div className="p-2 rounded-full bg-neon-pink/20">
                  <BookOpen className="h-6 w-6 text-neon-pink" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-neon-green text-sm">+8%</span>
                <span className="text-gray-400 text-sm ml-1">from last month</span>
              </div>
            </HolographicCard>

            {/* Active Users */}
            <HolographicCard variant="green" className="p-6 stagger-item stagger-delay-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Active Users</p>
                  <h3 className="text-2xl font-bold text-white">2,543</h3>
                </div>
                <div className="p-2 rounded-full bg-neon-green/20">
                  <Users className="h-6 w-6 text-neon-green" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-neon-green text-sm">+15%</span>
                <span className="text-gray-400 text-sm ml-1">from last month</span>
              </div>
            </HolographicCard>

            {/* Overdue Books */}
            <HolographicCard variant="blue" className="p-6 stagger-item stagger-delay-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Overdue Books</p>
                  <h3 className="text-2xl font-bold text-white">87</h3>
                </div>
                <div className="p-2 rounded-full bg-neon-blue/20">
                  <Clock className="h-6 w-6 text-neon-blue" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-neon-pink text-sm">+5%</span>
                <span className="text-gray-400 text-sm ml-1">from last month</span>
              </div>
            </HolographicCard>
          </div>

          {/* Analytics Chart */}
          <HolographicCard variant="blue" className="p-6 mb-8 stagger-item stagger-delay-5">
            <h2 className="text-xl font-bold text-neon-blue mb-4">Book Trends</h2>
            <div className="h-80 w-full bg-cyber-dark/60 rounded-lg border border-neon-blue/30 p-4 flex items-center justify-center">
              <div className="text-center">
                <BarChart className="h-12 w-12 text-neon-blue mx-auto mb-4 animate-glow-pulse" />
                <p className="text-gray-400">Analytics chart placeholder</p>
                <p className="text-xs text-gray-500 mt-2">Showing borrowing trends over time</p>
              </div>
            </div>
          </HolographicCard>

          {/* Book Management Table */}
          <HolographicCard variant="blue" className="p-6 stagger-item stagger-delay-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-neon-blue">Book Management</h2>
              <div className="flex space-x-2">
                <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                  <option>All Categories</option>
                  <option>Fiction</option>
                  <option>Non-Fiction</option>
                  <option>Science</option>
                  <option>Technology</option>
                </select>
                <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                  <option>All Status</option>
                  <option>Available</option>
                  <option>Borrowed</option>
                  <option>Reserved</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neon-blue/30">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="hover:bg-neon-blue/10 transition-colors duration-150">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white">Neuromancer</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">William Gibson</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Cyberpunk</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-neon-green/20 text-neon-green">Available</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <NeonButton variant="blue" size="sm" rippleEffect={true}>
                        Edit
                      </NeonButton>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-neon-blue/10 transition-colors duration-150 bg-neon-blue/5">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white">Snow Crash</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Neal Stephenson</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Cyberpunk</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-neon-pink/20 text-neon-pink">Borrowed</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <NeonButton variant="blue" size="sm" rippleEffect={true}>
                        Edit
                      </NeonButton>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-neon-blue/10 transition-colors duration-150">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                      Do Androids Dream of Electric Sheep?
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Philip K. Dick</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Sci-Fi</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-neon-blue/20 text-neon-blue">Reserved</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <NeonButton variant="blue" size="sm" rippleEffect={true}>
                        Edit
                      </NeonButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </HolographicCard>
        </div>
      </main>
    </div>
  )
}

