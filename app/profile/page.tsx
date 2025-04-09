import { NeonButton } from "@/components/ui/neon-button"
import { NeonCard } from "@/components/ui/neon-card"
import { Sidebar } from "@/components/sidebar"
import { Bell, BookOpen, Calendar, Clock, Settings } from "lucide-react"

// Sample user data
const user = {
  name: "Alex Chen",
  email: "alex@example.com",
  memberSince: "2023-05-15",
  avatar: "/placeholder.svg?height=100&width=100",
  borrowedBooks: [
    {
      id: 1,
      title: "Snow Crash",
      author: "Neal Stephenson",
      cover: "/placeholder.svg?height=150&width=100",
      dueDate: "2025-05-15",
      progress: 75,
      isOverdue: false,
    },
    {
      id: 2,
      title: "Ready Player One",
      author: "Ernest Cline",
      cover: "/placeholder.svg?height=150&width=100",
      dueDate: "2025-04-30",
      progress: 45,
      isOverdue: false,
    },
    {
      id: 3,
      title: "Altered Carbon",
      author: "Richard K. Morgan",
      cover: "/placeholder.svg?height=150&width=100",
      dueDate: "2025-04-01",
      progress: 10,
      isOverdue: true,
    },
  ],
  readingHistory: [
    {
      id: 4,
      title: "Neuromancer",
      author: "William Gibson",
      cover: "/placeholder.svg?height=150&width=100",
      returnedDate: "2025-03-15",
      rating: 5,
    },
    {
      id: 5,
      title: "Do Androids Dream of Electric Sheep?",
      author: "Philip K. Dick",
      cover: "/placeholder.svg?height=150&width=100",
      returnedDate: "2025-02-20",
      rating: 4,
    },
  ],
}

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-neon-blue text-glow-blue">User Profile</h1>
            <p className="text-gray-400 mt-2">Manage your account and view your reading activity</p>
          </header>

          {/* User Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* User Info Card */}
            <NeonCard variant="blue" className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon-blue mb-4 relative group">
                  <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-neon-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{user.email}</p>
                <div className="flex items-center text-xs text-gray-500 mb-6">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Member since {user.memberSince}</span>
                </div>

                <div className="w-full space-y-4">
                  <NeonButton variant="blue" className="w-full">
                    Edit Profile
                  </NeonButton>
                  <NeonButton variant="pink" className="w-full">
                    Notification Settings
                  </NeonButton>
                </div>
              </div>
            </NeonCard>

            {/* Stats Card */}
            <NeonCard variant="blue" className="p-6 lg:col-span-2">
              <h3 className="text-lg font-bold text-neon-blue mb-4">Reading Stats</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 border border-neon-blue/30 rounded-lg">
                  <BookOpen className="h-6 w-6 text-neon-blue mb-2" />
                  <span className="text-gray-400 text-xs">Books Read</span>
                  <span className="text-white text-2xl font-bold">12</span>
                </div>
                <div className="flex flex-col items-center p-4 border border-neon-blue/30 rounded-lg">
                  <Clock className="h-6 w-6 text-neon-pink mb-2" />
                  <span className="text-gray-400 text-xs">Reading Hours</span>
                  <span className="text-white text-2xl font-bold">87</span>
                </div>
                <div className="flex flex-col items-center p-4 border border-neon-blue/30 rounded-lg">
                  <Bell className="h-6 w-6 text-neon-green mb-2" />
                  <span className="text-gray-400 text-xs">Active Holds</span>
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold">Reading Preferences</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-neon-blue/20 text-neon-blue">Cyberpunk</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-neon-pink/20 text-neon-pink">Sci-Fi</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-neon-green/20 text-neon-green">Dystopian</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-neon-blue/20 text-neon-blue">Tech Thriller</span>
                </div>
              </div>
            </NeonCard>
          </div>

          {/* Currently Borrowed Books */}
          <NeonCard variant="blue" className="p-6 mb-8">
            <h3 className="text-xl font-bold text-neon-blue mb-6">Currently Borrowed Books</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {user.borrowedBooks.map((book) => (
                <div
                  key={book.id}
                  className={`border ${book.isOverdue ? "border-neon-pink" : "border-neon-blue/30"} rounded-lg p-4 hover:border-neon-blue transition-colors`}
                >
                  <div className="flex gap-4">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-16 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-1 line-clamp-1">{book.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{book.author}</p>

                      <div
                        className={`flex items-center text-xs ${book.isOverdue ? "text-neon-pink" : "text-gray-400"} mb-2`}
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        <span>
                          {book.isOverdue ? "Overdue: " : "Due: "}
                          {book.dueDate}
                        </span>
                      </div>

                      {/* Reading Progress */}
                      <div>
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-neon-blue">{book.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${book.isOverdue ? "bg-neon-pink" : "bg-neon-blue"}`}
                            style={{ width: `${book.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </NeonCard>

          {/* Reading History */}
          <NeonCard variant="blue" className="p-6">
            <h3 className="text-xl font-bold text-neon-blue mb-6">Reading History</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neon-blue/30">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Book
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Returned
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.readingHistory.map((book) => (
                    <tr key={book.id} className="hover:bg-neon-blue/10 transition-colors duration-150">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={book.cover || "/placeholder.svg"}
                            alt={book.title}
                            className="w-10 h-14 object-cover rounded mr-3"
                          />
                          <span className="text-sm text-white">{book.title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{book.author}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{book.returnedDate}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-4 w-4 ${i < book.rating ? "text-neon-yellow" : "text-gray-600"}`}
                            >
                              ★
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </NeonCard>
        </div>
      </main>
    </div>
  )
}

